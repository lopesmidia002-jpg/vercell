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
      const hero = document.querySelector('section');
      const badgeContainer = hero ? hero.querySelector('.w-full.flex.justify-center') : null;
      const badge = badgeContainer ? badgeContainer.querySelector('div[class*="rounded-full"]') : null;
      const badgeSpan = badge ? badge.querySelector('span:last-child') : null;
      const h1 = hero ? hero.querySelector('h1') : null;

      const bRect = badge ? badge.getBoundingClientRect() : null;
      const h1Rect = h1 ? h1.getBoundingClientRect() : null;

      return {
        badgeFound: !!badge,
        badgeText: badgeSpan ? badgeSpan.innerText : null,
        badgeWidth: bRect ? bRect.width : null,
        badgeHeight: bRect ? bRect.height : null,
        badgeLeft: bRect ? bRect.left : null,
        badgeRight: bRect ? bRect.right : null,
        badgeCenterDelta: bRect ? ((bRect.left + bRect.right) / 2) - (390 / 2) : null,
        badgeWhiteSpace: badge ? window.getComputedStyle(badge).whiteSpace : null,
        spanWhiteSpace: badgeSpan ? window.getComputedStyle(badgeSpan).whiteSpace : null,
        h1Height: h1Rect ? h1Rect.height : null
      };
    })()`,
    returnByValue: true
  });

  console.log('Hero Badge Inspection:', JSON.stringify(info.result ? info.result.value : info, null, 2));

  // Capture hero top
  const shot = await send('Page.captureScreenshot', {
    clip: { x: 0, y: 0, width: 390, height: 420, scale: 2 }
  });
  fs.writeFileSync('C:\\Users\\Nilto\\.gemini\\antigravity\\brain\\72d170e4-9940-412d-a4b1-03f753d4e3a0\\hero_mobile_centered_badge.png', Buffer.from(shot.data, 'base64'));
  console.log('Saved hero_mobile_centered_badge.png');

  ws.close();
  chrome.kill();
}

main();
