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
  await send('Emulation.setDeviceMetricsOverride', { width: 1024, height: 900, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 2500));

  const info = await send('Runtime.evaluate', {
    expression: `(() => {
      const p = Array.from(document.querySelectorAll('footer p')).find(el => el.innerText.includes('Versell Technology Ltda') || el.innerText.includes('Versell Tecnologia'));
      if (!p) return null;
      const r = p.getBoundingClientRect();
      const parent = p.parentElement;
      const pr = parent.getBoundingClientRect();
      return {
        text: p.innerText,
        rect: {
          left: r.left,
          top: r.top + window.scrollY,
          width: r.width,
          height: r.height
        },
        parentRect: {
          left: pr.left,
          top: pr.top + window.scrollY,
          width: pr.width,
          height: pr.height
        }
      };
    })()`,
    returnByValue: true
  });

  console.log('Disclaimer info:', info.result.value);
  const v = info.result.value;

  if (v) {
    const ss = await send('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: 0,
        y: v.parentRect.top - 25,
        width: 1024,
        height: v.parentRect.height + 50,
        scale: 1
      },
      captureBeyondViewport: true
    });

    fs.writeFileSync('C:\\Users\\Nilto\\.gemini\\antigravity\\brain\\72d170e4-9940-412d-a4b1-03f753d4e3a0\\footer_disclaimer_after.png', Buffer.from(ss.data, 'base64'));
    console.log('Saved footer_disclaimer_after.png');
  }

  ws.close();
  chrome.kill();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

