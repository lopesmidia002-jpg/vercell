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
  // 390x844 mobile viewport
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await send('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 2500));

  const info = await send('Runtime.evaluate', {
    expression: `(() => {
      const h3s = Array.from(document.querySelectorAll('#produtos h3'));
      const apiH3 = h3s.find(h => h.innerText.includes('API de Pix'));
      if (!apiH3) return { error: 'API de Pix not found' };
      const card = apiH3.closest('.relative.overflow-hidden') || apiH3.parentElement.parentElement;
      const rCard = card.getBoundingClientRect();
      const p = card.querySelector('p');
      const rP = p ? p.getBoundingClientRect() : null;
      return {
        card: { x: Math.round(rCard.x), y: Math.round(rCard.top + window.scrollY), width: Math.round(rCard.width), height: Math.round(rCard.height) },
        emptyBelow: rP ? Math.round(rCard.bottom - rP.bottom) : null,
        allCards: h3s.map((h, i) => {
          const c = h.closest('[class*="rounded-[32px]"]') || h.parentElement.parentElement;
          return {
            title: h.innerText.replace(/\\s+/g, ' '),
            height: Math.round(c.getBoundingClientRect().height)
          };
        })
      };
    })()`,
    returnByValue: true
  });

  const val = info.result?.result?.value || info.result?.value;
  console.log('CARD 2 INFO:', JSON.stringify(val, null, 2));

  if (val && val.card) {
    const c = val.card;
    const shot = await send('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: Math.max(0, c.x - 5),
        y: Math.max(0, c.y - 5),
        width: c.width + 10,
        height: c.height + 10,
        scale: 1
      },
      captureBeyondViewport: true
    });

    const shotData = shot.data || (shot.result && shot.result.data);
    if (shotData) {
      fs.writeFileSync('scratch/card2_mobile_compact.png', Buffer.from(shotData, 'base64'));
      console.log('Saved scratch/card2_mobile_compact.png');
    }
  }

  ws.close();
  chrome.kill();
  process.exit(0);
}

main().catch(console.error);
