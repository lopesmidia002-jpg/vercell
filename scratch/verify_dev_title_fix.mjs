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
  await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 2500));

  const devInfo = await send('Runtime.evaluate', {
    expression: `(() => {
      const sec = document.querySelector('#desenvolvedores');
      const h2 = sec.querySelector('h2');
      const term = sec.querySelector('.terminal-window, pre, code, [class*="bg-[#0A0B0D]"], [class*="bg-black"], [class*="rounded-[32px]"]') || sec.querySelectorAll('div > div')[1];
      const h2Rect = h2.getBoundingClientRect();
      const secRect = sec.getBoundingClientRect();
      return {
        h2Text: h2.innerText,
        h2Rect: {
          left: h2Rect.left,
          top: h2Rect.top + window.scrollY,
          width: h2Rect.width,
          height: h2Rect.height
        },
        secRect: {
          left: secRect.left,
          top: secRect.top + window.scrollY,
          width: secRect.width,
          height: secRect.height
        }
      };
    })()`,
    returnByValue: true
  });

  console.log('DevSection title info:', devInfo.result.value);
  const info = devInfo.result.value;

  const ss = await send('Page.captureScreenshot', {
    format: 'png',
    clip: {
      x: 0,
      y: info.secRect.top,
      width: 1280,
      height: 600,
      scale: 1
    },
    captureBeyondViewport: true
  });

  fs.writeFileSync('C:\\Users\\Nilto\\.gemini\\antigravity\\brain\\72d170e4-9940-412d-a4b1-03f753d4e3a0\\dev_section_fixed_shot.png', Buffer.from(ss.data, 'base64'));
  console.log('Saved dev_section_fixed_shot.png');

  ws.close();
  chrome.kill();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

