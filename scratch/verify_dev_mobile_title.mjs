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

  const mobileInfo = await send('Runtime.evaluate', {
    expression: `(() => {
      const sec = document.querySelector('#desenvolvedores');
      const h2 = sec.querySelector('h2');
      const r = h2.getBoundingClientRect();
      return {
        text: h2.innerText,
        left: r.left,
        top: r.top + window.scrollY,
        width: r.width,
        height: r.height
      };
    })()`,
    returnByValue: true
  });

  console.log('Mobile Dev title info:', mobileInfo.result.value);

  const info = mobileInfo.result.value;
  const ss = await send('Page.captureScreenshot', {
    format: 'png',
    clip: {
      x: 0,
      y: info.top - 60,
      width: 390,
      height: 350,
      scale: 2
    },
    captureBeyondViewport: true
  });

  fs.writeFileSync('C:\\Users\\Nilto\\.gemini\\antigravity\\brain\\72d170e4-9940-412d-a4b1-03f753d4e3a0\\dev_section_mobile_fixed.png', Buffer.from(ss.data, 'base64'));
  console.log('Saved dev_section_mobile_fixed.png');

  ws.close();
  chrome.kill();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

