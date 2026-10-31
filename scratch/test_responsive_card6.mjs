import { spawn } from 'child_process';
import fs from 'fs';

async function testResponsive() {
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

  const viewports = [
    { name: 'desktop_1280', width: 1280, height: 900, mobile: false, scroll: 1600 },
    { name: 'tablet_768', width: 768, height: 1024, mobile: false, scroll: 2800 },
    { name: 'mobile_390', width: 390, height: 844, mobile: true, scroll: 4600 }
  ];

  for (const vp of viewports) {
    await send('Emulation.setDeviceMetricsOverride', { width: vp.width, height: vp.height, deviceScaleFactor: 1, mobile: vp.mobile });
    await send('Page.navigate', { url: 'http://localhost:3000' });
    await new Promise(r => setTimeout(r, 2000));

    await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${vp.scroll});` });
    await new Promise(r => setTimeout(r, 800));

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
      fs.writeFileSync(`scratch/responsive_${vp.name}.png`, Buffer.from(shotData, 'base64'));
      console.log(`Saved scratch/responsive_${vp.name}.png`);
    }
  }

  ws.close();
  chrome.kill();
}

testResponsive().catch(console.error);
