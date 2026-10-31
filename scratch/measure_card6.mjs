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
      if (d.id === msgId) { ws.removeEventListener('message', h); r(d); }
    };
    ws.addEventListener('message', h);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

  await new Promise(r => ws.addEventListener('open', r));
  await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 1200, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 2500));

  await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('solucoes') || document.querySelector('section:has(img[src*="MacBook"])') || document.body;
      window.scrollTo(0, 1500);
    })()`
  });
  await new Promise(r => setTimeout(r, 2000));

  const info = await send('Runtime.evaluate', {
    expression: `(() => {
      const img = document.querySelector('img[src*="MacBook-Air-2022-3"]') || document.querySelector('img[alt*="MacBook"]') || document.querySelector('img[alt*="Dashboard"]');
      if (!img) {
        return { error: 'img not found', allImgs: Array.from(document.querySelectorAll('img')).map(i => i.src) };
      }
      const card = img.closest('div[class*="col-span-2"]') || img.parentElement;
      const rImg = img.getBoundingClientRect();
      const rCard = card.getBoundingClientRect();
      return {
        card: { x: rCard.x, y: rCard.top + window.scrollY, width: rCard.width, height: rCard.height, right: rCard.right, bottom: rCard.bottom },
        img: { x: rImg.x, y: rImg.top + window.scrollY, width: rImg.width, height: rImg.height, right: rImg.right, bottom: rImg.bottom },
        leftMargin: rImg.x - rCard.x,
        rightMargin: rCard.right - rImg.right,
        bottomMargin: rCard.bottom - rImg.bottom
      };
    })()`,
    returnByValue: true
  });

  console.log('MEASURED CARD 6:', JSON.stringify(info, null, 2));

  // Capture Card 6 screenshot
  const val = info.result.result.value;
  if (val && !val.error) {
    try {
      const clip = {
        x: Math.max(0, val.card.x - 10),
        y: Math.max(0, val.card.y - 10),
        width: Math.round(val.card.width + 20),
        height: Math.round(val.card.height + 20),
        scale: 1
      };
      console.log('Capturing clip:', clip);
      const shot = await send('Page.captureScreenshot', {
        format: 'png',
        clip: clip,
        captureBeyondViewport: true
      });
      const shotData = shot.data || (shot.result && shot.result.data);
      if (shotData) {
        fs.writeFileSync('scratch/card6_current.png', Buffer.from(shotData, 'base64'));
        console.log('Saved scratch/card6_current.png');
      } else {
        console.log('shot object:', JSON.stringify(shot));
      }
    } catch (e) {
      console.error('Screenshot error:', e);
    }
  }

  ws.close();
  chrome.kill();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
