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
  await new Promise(r => setTimeout(r, 3000));

  const logoInfo = await send('Runtime.evaluate', {
    expression: `(() => {
      const img = document.querySelector('img[alt="Versell 3D Icon"]');
      if (!img) return null;
      const r = img.getBoundingClientRect();
      const parent = img.closest('.lg\\:col-span-5') || img.parentElement;
      const pr = parent.getBoundingClientRect();
      return {
        img: { left: r.left, top: r.top, width: r.width, height: r.height },
        parent: { left: pr.left, top: pr.top, width: pr.width, height: pr.height }
      };
    })()`,
    returnByValue: true
  });

  console.log('Logo info:', JSON.stringify(logoInfo.result.value, null, 2));
  const info = logoInfo.result.value;

  if (info) {
    // Capture around the logo with margin to see the radial glow
    const clip = {
      x: Math.max(0, info.img.left - 100),
      y: Math.max(0, info.img.top - 60),
      width: info.img.width + 200,
      height: info.img.height + 120,
      scale: 1
    };

    const shot = await send('Page.captureScreenshot', {
      format: 'png',
      clip: clip
    });
    fs.writeFileSync('scratch/hero_logo_glow_after.png', Buffer.from(shot.data, 'base64'));
    console.log('Saved scratch/hero_logo_glow_after.png');
  }

  // Also capture the full hero section
  const heroShot = await send('Page.captureScreenshot', {
    format: 'png',
    clip: { x: 0, y: 0, width: 1280, height: 750, scale: 1 }
  });
  fs.writeFileSync('scratch/hero_section_full.png', Buffer.from(heroShot.data, 'base64'));
  console.log('Saved scratch/hero_section_full.png');

  ws.close();
  chrome.kill();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

