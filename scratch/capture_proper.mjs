import { spawn } from 'child_process';
import fs from 'fs';

async function captureProper() {
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

  // Scroll card into view
  await send('Runtime.evaluate', {
    expression: `(() => {
      const img = document.querySelector('img[src*="MacBook-Air-2022-3"]');
      const card = img.closest('div[class*="col-span-2"]') || img.parentElement.parentElement;
      card.scrollIntoView({ block: 'center', inline: 'center' });
    })()`
  });
  await new Promise(r => setTimeout(r, 1000));

  // Get viewport-relative bounding rect
  const rectRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const img = document.querySelector('img[src*="MacBook-Air-2022-3"]');
      const card = img.closest('div[class*="col-span-2"]') || img.parentElement.parentElement;
      const r = card.getBoundingClientRect();
      return { x: r.x, y: r.y, width: r.width, height: r.height };
    })()`,
    returnByValue: true
  });

  const r = rectRes.result.result.value;
  console.log('Card viewport rect after scrollIntoView:', r);

  const shot = await send('Page.captureScreenshot', {
    format: 'png',
    clip: {
      x: Math.max(0, Math.round(r.x - 10)),
      y: Math.max(0, Math.round(r.y - 10)),
      width: Math.round(r.width + 20),
      height: Math.round(r.height + 20),
      scale: 1
    }
  });

  const shotData = shot.data || (shot.result && shot.result.data);
  if (shotData) {
    fs.writeFileSync('scratch/card6_exact_viewport.png', Buffer.from(shotData, 'base64'));
    console.log('Saved scratch/card6_exact_viewport.png');
  }

  ws.close();
  chrome.kill();
}

captureProper().catch(console.error);

