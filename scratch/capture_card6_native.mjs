import { spawn } from 'child_process';
import fs from 'fs';

async function captureCard6() {
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
      if (d.id === msgId) { ws.removeEventListener('message', h); r(d); }
    };
    ws.addEventListener('message', h);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

  await new Promise(r => ws.addEventListener('open', r));
  await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 3000));

  await send('Runtime.evaluate', { expression: `window.scrollTo(0, 1600);` });
  await new Promise(r => setTimeout(r, 800));

  const c = await send('Runtime.evaluate', {
    expression: `(() => {
      const img = document.querySelector('img[src*="MacBook-Air-2022-3"]');
      const card = img.closest('div[class*="col-span-2"]') || img.parentElement.parentElement;
      const r = card.getBoundingClientRect();
      return {
        x: Math.round(r.x),
        y: Math.round(r.top + window.scrollY),
        width: Math.round(r.width),
        height: Math.round(r.height)
      };
    })()`,
    returnByValue: true
  });

  const cardClip = c.result.result.value;
  console.log('Card clip:', cardClip);

  const shot = await send('Page.captureScreenshot', {
    format: 'png',
    clip: {
      x: Math.max(0, cardClip.x - 5),
      y: Math.max(0, cardClip.y - 5),
      width: cardClip.width + 10,
      height: cardClip.height + 10,
      scale: 1
    },
    captureBeyondViewport: true
  });

  const shotData = shot.data || (shot.result && shot.result.data);
  if (shotData) {
    fs.writeFileSync('scratch/card6_native_rendered.png', Buffer.from(shotData, 'base64'));
    console.log('Saved scratch/card6_native_rendered.png');
  }

  ws.close();
  chrome.kill();
}

captureCard6().catch(console.error);

