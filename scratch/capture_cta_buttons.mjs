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
  await new Promise(r => setTimeout(r, 2500));

  const ctaInfo = await send('Runtime.evaluate', {
    expression: `(() => {
      const btns = Array.from(document.querySelectorAll('a')).filter(a => a.innerText.includes('Abrir minha conta'));
      return btns.map(b => {
        const r = b.getBoundingClientRect();
        const style = window.getComputedStyle(b);
        return {
          text: b.innerText.trim(),
          left: r.left,
          top: r.top + window.scrollY,
          width: r.width,
          height: r.height,
          fontWeight: style.fontWeight,
          fontFamily: style.fontFamily
        };
      });
    })()`,
    returnByValue: true
  });

  console.log('CTA buttons info:', ctaInfo.result.value);

  // Capture Hero CTA button
  const heroBtn = ctaInfo.result.value.find(b => b.top < 1000);
  if (heroBtn) {
    const ss = await send('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: Math.max(0, heroBtn.left - 10),
        y: Math.max(0, heroBtn.top - 10),
        width: heroBtn.width + 20,
        height: heroBtn.height + 20,
        scale: 1
      },
      captureBeyondViewport: true
    });
    fs.writeFileSync('C:\\Users\\Nilto\\.gemini\\antigravity\\brain\\72d170e4-9940-412d-a4b1-03f753d4e3a0\\abrir_minha_conta_after.png', Buffer.from(ss.data, 'base64'));
    console.log('Saved abrir_minha_conta_after.png');
  }

  ws.close();
  chrome.kill();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

