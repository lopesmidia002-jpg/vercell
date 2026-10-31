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
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await send('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 2500));

  const info = await send('Runtime.evaluate', {
    expression: `(() => {
      const sec = document.querySelector('#pix');
      if (!sec) return null;
      const h2 = sec.querySelector('h2');
      const badge = sec.querySelector('div[class*="rounded-full"]');
      const p = sec.querySelector('p');

      const h2Rect = h2 ? h2.getBoundingClientRect() : null;
      const badgeRect = badge ? badge.getBoundingClientRect() : null;
      const pRect = p ? p.getBoundingClientRect() : null;

      return {
        h2Text: h2 ? h2.innerText.trim() : null,
        h2Height: h2Rect ? h2Rect.height : null,
        h2Width: h2Rect ? h2Rect.width : null,
        h2Left: h2Rect ? h2Rect.left : null,
        h2WhiteSpace: h2 ? window.getComputedStyle(h2).whiteSpace : null,
        h2Align: h2 ? window.getComputedStyle(h2).textAlign : null,
        badgeLeft: badgeRect ? badgeRect.left : null,
        pLeft: pRect ? pRect.left : null
      };
    })()`,
    returnByValue: true
  });

  console.log('ValueCards Inspection on 390px Mobile:');
  console.log(JSON.stringify(info.result ? info.result.value : info, null, 2));

  // scroll to #pix and capture screenshot
  await send('Runtime.evaluate', {
    expression: `document.querySelector('#pix').scrollIntoView();`
  });
  await new Promise(r => setTimeout(r, 600));

  const pos = await send('Runtime.evaluate', {
    expression: `(() => {
      const sec = document.querySelector('#pix');
      const rect = sec.getBoundingClientRect();
      return { top: rect.top, left: rect.left };
    })()`,
    returnByValue: true
  });

  const shot = await send('Page.captureScreenshot', {
    clip: {
      x: 0,
      y: Math.max(0, pos.result.value.top),
      width: 390,
      height: 300,
      scale: 2
    }
  });
  fs.writeFileSync('C:\\Users\\Nilto\\.gemini\\antigravity\\brain\\72d170e4-9940-412d-a4b1-03f753d4e3a0\\valuecards_mobile_single_line.png', Buffer.from(shot.data, 'base64'));
  console.log('Saved valuecards_mobile_single_line.png');

  ws.close();
  chrome.kill();
}

main();

