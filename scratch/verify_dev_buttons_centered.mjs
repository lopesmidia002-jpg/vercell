import { spawn } from 'child_process';
import fs from 'fs';

async function main() {
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new', '--remote-debugging-port=9222', '--disable-gpu', 'http://localhost:3000'
  ]);
  await new Promise(r => setTimeout(r, 2000));
  const res = await fetch('http://127.0.0.1:9222/json/list');
  const tabs = await res.json();
  const pageTab = tabs.find(t => t.type === 'page');
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

  let id = 1;
  const send = (method, params = {}) => new Promise(r => {
    const msgId = id++;
    const h = (e) => {
      const d = JSON.parse(e.data);
      if (d.id === msgId) { ws.removeEventListener('message', h); r(d.result); }
    };
    ws.addEventListener('message', h);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

  await new Promise(r => ws.addEventListener('open', r));
  await send('Page.enable');
  await send('DOM.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await send('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 2500));

  const info = await send('Runtime.evaluate', {
    expression: `(() => {
      const sec = document.querySelector('#desenvolvedores');
      const container = sec.querySelector('.flex.flex-wrap.items-center');
      const btn1 = container ? container.children[0] : null;
      const btn2 = container ? container.children[1] : null;

      const cRect = container ? container.getBoundingClientRect() : null;
      const r1 = btn1 ? btn1.getBoundingClientRect() : null;
      const r2 = btn2 ? btn2.getBoundingClientRect() : null;

      return {
        justify: container ? window.getComputedStyle(container).justifyContent : null,
        btn1: r1 ? { left: r1.left, width: r1.width, height: r1.height, top: r1.top } : null,
        btn2: r2 ? { left: r2.left, width: r2.width, height: r2.height, top: r2.top } : null,
        // If on same line:
        sameLine: r1 && r2 ? Math.abs(r1.top - r2.top) < 10 : false,
        combinedCenterDelta: r1 && r2 ? ((Math.min(r1.left, r2.left) + Math.max(r1.right, r2.right)) / 2) - (390 / 2) : null
      };
    })()`,
    returnByValue: true
  });

  console.log('Dev Buttons Inspection on 390px Mobile:');
  console.log(JSON.stringify(info.result ? info.result.value : info, null, 2));

  // scroll to buttons and capture screenshot
  await send('Runtime.evaluate', {
    expression: `document.querySelector('#desenvolvedores .flex.flex-wrap.items-center').scrollIntoView({ block: 'center' });`
  });
  await new Promise(r => setTimeout(r, 600));

  const btnPos = await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.querySelector('#desenvolvedores .flex.flex-wrap.items-center');
      const rect = el.getBoundingClientRect();
      return { top: rect.top, left: rect.left, height: rect.height };
    })()`,
    returnByValue: true
  });

  const shot = await send('Page.captureScreenshot', {
    clip: {
      x: 0,
      y: Math.max(0, btnPos.result.value.top - 30),
      width: 390,
      height: 140,
      scale: 2
    }
  });
  fs.writeFileSync('C:\\Users\\Nilto\\.gemini\\antigravity\\brain\\72d170e4-9940-412d-a4b1-03f753d4e3a0\\dev_buttons_centered_shot.png', Buffer.from(shot.data, 'base64'));
  console.log('Saved dev_buttons_centered_shot.png');

  ws.close();
  chrome.kill();
}

main();

