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
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await send('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 2500));

  const info = await send('Runtime.evaluate', {
    expression: `(() => {
      const section = document.getElementById('produtos');
      if (!section) return { error: 'produtos not found' };
      const cards = Array.from(section.querySelectorAll('.rounded-\\\\[32px\\\\]'));
      const details = cards.map((c, i) => {
        const r = c.getBoundingClientRect();
        const title = c.querySelector('h3')?.innerText?.replace(/\\s+/g, ' ') || 'card-' + i;
        return {
          index: i,
          title,
          height: Math.round(r.height),
          width: Math.round(r.width),
          top: Math.round(r.top + window.scrollY),
          bottom: Math.round(r.bottom + window.scrollY)
        };
      });
      return { count: cards.length, details };
    })()`,
    returnByValue: true
  });

  console.log('MOBILE BENTO CARDS:', JSON.stringify(info.result.result.value, null, 2));

  // Let's capture Cards 2, 3, 4, 5 in mobile view
  const cardsInfo = info.result.result.value.details;
  if (cardsInfo && cardsInfo.length >= 5) {
    const startY = cardsInfo[1].top - 10; // Card 2 top
    const endY = cardsInfo[4].bottom + 10; // Card 5 bottom
    const totalH = endY - startY;

    console.log(`Capturing from Y=${startY} to Y=${endY}, totalH=${totalH}`);

    const shot = await send('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: 0,
        y: startY,
        width: 390,
        height: Math.min(totalH, 2000),
        scale: 1
      },
      captureBeyondViewport: true
    });

    const shotData = shot.data || (shot.result && shot.result.data);
    if (shotData) {
      fs.writeFileSync('scratch/bento_mobile_cards_2_to_5.png', Buffer.from(shotData, 'base64'));
      console.log('Saved scratch/bento_mobile_cards_2_to_5.png');
    }
  }

  // Also capture full section
  const sectionShot = await send('Runtime.evaluate', {
    expression: `(() => {
      const s = document.getElementById('produtos');
      const r = s.getBoundingClientRect();
      return { x: 0, y: Math.round(r.top + window.scrollY), width: 390, height: Math.round(r.height) };
    })()`,
    returnByValue: true
  });
  const secClip = sectionShot.result.result.value;
  if (secClip) {
    const shot = await send('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: 0,
        y: secClip.y,
        width: 390,
        height: secClip.height,
        scale: 1
      },
      captureBeyondViewport: true
    });
    const shotData = shot.data || (shot.result && shot.result.data);
    if (shotData) {
      fs.writeFileSync('scratch/bento_mobile_full_section.png', Buffer.from(shotData, 'base64'));
      console.log('Saved scratch/bento_mobile_full_section.png');
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

