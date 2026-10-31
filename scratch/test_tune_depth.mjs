import { spawn } from 'child_process';
import fs from 'fs';

async function testSettings(settings) {
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
  await new Promise(r => setTimeout(r, 2500));

  await send('Runtime.evaluate', { expression: `window.scrollTo(0, 1600);` });
  await new Promise(r => setTimeout(r, 1000));

  for (let i = 0; i < settings.length; i++) {
    const s = settings[i];

    await send('Runtime.evaluate', {
      expression: `(() => {
        const img = document.querySelector('img[src*="MacBook-Air-2022-3"]');
        if (!img) return;
        const container = img.parentElement;
        container.style.width = '${s.width}';
        container.style.height = '${s.height}';
        container.style.marginRight = '${s.marginRight}';
        container.style.marginBottom = '${s.marginBottom}';
        container.style.marginLeft = 'auto';
      })()`
    });

    await new Promise(r => setTimeout(r, 600));

    const info = await send('Runtime.evaluate', {
      expression: `(() => {
        const img = document.querySelector('img[src*="MacBook-Air-2022-3"]');
        const card = img.closest('div[class*="col-span-2"]') || img.parentElement.parentElement;
        const rCard = card.getBoundingClientRect();
        return {
          card: { x: Math.round(rCard.x), y: Math.round(rCard.top + window.scrollY), width: Math.round(rCard.width), height: Math.round(rCard.height) }
        };
      })()`,
      returnByValue: true
    });

    const c = info.result.result.value.card;
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
      fs.writeFileSync(`scratch/depth_${s.name}.png`, Buffer.from(shotData, 'base64'));
    }
  }

  ws.close();
  chrome.kill();
}

const settings = [
  // Sinking the keyboard: height 270px, mb -95px, mr -75px, width 670px
  { name: 'D1_670x270_mr75_mb95', width: '670px', height: '270px', marginRight: '-75px', marginBottom: '-95px' },
  // Sinking slightly more: height 280px, mb -105px, mr -80px, width 680px
  { name: 'D2_680x280_mr80_mb105', width: '680px', height: '280px', marginRight: '-80px', marginBottom: '-105px' },
  // Sinking slightly less: height 260px, mb -85px, mr -70px, width 650px
  { name: 'D3_650x260_mr70_mb85', width: '650px', height: '260px', marginRight: '-70px', marginBottom: '-85px' },
  // Option D4: height 290px, mb -115px, mr -85px, width 700px
  { name: 'D4_700x290_mr85_mb115', width: '700px', height: '290px', marginRight: '-85px', marginBottom: '-115px' },
];

testSettings(settings).catch(console.error);

