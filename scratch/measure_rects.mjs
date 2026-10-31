import { spawn } from 'child_process';

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
  await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 2500));

  const rects = await send('Runtime.evaluate', {
    expression: `(() => {
      const img = document.querySelector('img[alt="Versell 3D Icon"]');
      const col = img ? img.closest('div[class*="col-span"]') : null;
      const glow = col ? col.firstElementChild : null;
      const heroSectionGlow = document.querySelector('.lime-glow-hero');
      return {
        img: img ? {
          x: img.getBoundingClientRect().x,
          y: img.getBoundingClientRect().y,
          width: img.getBoundingClientRect().width,
          height: img.getBoundingClientRect().height,
          right: img.getBoundingClientRect().right
        } : null,
        col: col ? {
          x: col.getBoundingClientRect().x,
          width: col.getBoundingClientRect().width,
          right: col.getBoundingClientRect().right
        } : null,
        glow: glow ? {
          x: glow.getBoundingClientRect().x,
          width: glow.getBoundingClientRect().width,
          right: glow.getBoundingClientRect().right
        } : null,
        heroSectionGlow: heroSectionGlow ? {
          x: heroSectionGlow.getBoundingClientRect().x,
          width: heroSectionGlow.getBoundingClientRect().width,
          right: heroSectionGlow.getBoundingClientRect().right
        } : null
      };
    })()`,
    returnByValue: true
  });
  console.log('MEASURED RECTS:');
  console.log(JSON.stringify(rects, null, 2));

  ws.close();
  chrome.kill();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
