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
  // 1280x900 viewport (standard desktop)
  await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 2500));

  for (let i = 0; i < settings.length; i++) {
    const s = settings[i];
    console.log(`Testing setting ${i}: ${s.name}`);

    // Apply inline style to the laptop container
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

    await new Promise(r => setTimeout(r, 500));

    // Capture card 6 screenshot
    const info = await send('Runtime.evaluate', {
      expression: `(() => {
        const img = document.querySelector('img[src*="MacBook-Air-2022-3"]');
        const card = img.closest('div[class*="col-span-2"]') || img.parentElement.parentElement;
        const rCard = card.getBoundingClientRect();
        return {
          x: Math.round(rCard.x),
          y: Math.round(rCard.top + window.scrollY),
          width: Math.round(rCard.width),
          height: Math.round(rCard.height)
        };
      })()`,
      returnByValue: true
    });

    const c = info.result.result.value;
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
      fs.writeFileSync(`scratch/test_zoom_${i}.png`, Buffer.from(shotData, 'base64'));
      console.log(`Saved scratch/test_zoom_${i}.png`);
    }
  }

  ws.close();
  chrome.kill();
}

const settings = [
  // Current: w=860px, h=320px, mr=-48px, mb=-64px
  { name: 'current', width: '860px', height: '320px', marginRight: '-48px', marginBottom: '-64px' },
  // Option 1: w=640px, h=250px, mr=-36px, mb=-45px
  { name: 'opt1_640x250', width: '640px', height: '250px', marginRight: '-36px', marginBottom: '-45px' },
  // Option 2: w=600px, h=240px, mr=-32px, mb=-50px
  { name: 'opt2_600x240', width: '600px', height: '240px', marginRight: '-32px', marginBottom: '-50px' },
  // Option 3: w=560px, h=220px, mr=-28px, mb=-40px
  { name: 'opt3_560x220', width: '560px', height: '220px', marginRight: '-28px', marginBottom: '-40px' },
  // Option 4: w=620px, h=230px, mr=-30px, mb=-40px
  { name: 'opt4_620x230', width: '620px', height: '230px', marginRight: '-30px', marginBottom: '-40px' },
  // Option 5: w=580px, h=225px, mr=-24px, mb=-38px
  { name: 'opt5_580x225', width: '580px', height: '225px', marginRight: '-24px', marginBottom: '-38px' }
];

testSettings(settings).catch(console.error);

