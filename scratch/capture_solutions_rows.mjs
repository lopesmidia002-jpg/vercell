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

  const rects = await send('Runtime.evaluate', {
    expression: `(() => {
      const h3s = Array.from(document.querySelectorAll('#para-quem h3'));
      return h3s.map(h => {
        const r = h.getBoundingClientRect();
        const style = window.getComputedStyle(h);
        return {
          text: h.innerText,
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

  console.log('Solutions titles info:', rects.result.value);
  const titles = rects.result.value;

  // Row 1
  const r1 = titles.slice(0, 3);
  const minLeft1 = Math.min(...r1.map(r => r.left));
  const maxRight1 = Math.max(...r1.map(r => r.left + r.width));
  const minTop1 = Math.min(...r1.map(r => r.top));
  const maxBottom1 = Math.max(...r1.map(r => r.top + r.height));

  const ss1 = await send('Page.captureScreenshot', {
    format: 'png',
    clip: {
      x: minLeft1 - 10,
      y: minTop1 - 5,
      width: (maxRight1 - minLeft1) + 20,
      height: (maxBottom1 - minTop1) + 10,
      scale: 1
    },
    captureBeyondViewport: true
  });
  fs.writeFileSync('C:\\Users\\Nilto\\.gemini\\antigravity\\brain\\72d170e4-9940-412d-a4b1-03f753d4e3a0\\solutions_row1_after.png', Buffer.from(ss1.data, 'base64'));

  // Row 2
  const r2 = titles.slice(3, 6);
  const minLeft2 = Math.min(...r2.map(r => r.left));
  const maxRight2 = Math.max(...r2.map(r => r.left + r.width));
  const minTop2 = Math.min(...r2.map(r => r.top));
  const maxBottom2 = Math.max(...r2.map(r => r.top + r.height));

  const ss2 = await send('Page.captureScreenshot', {
    format: 'png',
    clip: {
      x: minLeft2 - 10,
      y: minTop2 - 5,
      width: (maxRight2 - minLeft2) + 20,
      height: (maxBottom2 - minTop2) + 10,
      scale: 1
    },
    captureBeyondViewport: true
  });
  fs.writeFileSync('C:\\Users\\Nilto\\.gemini\\antigravity\\brain\\72d170e4-9940-412d-a4b1-03f753d4e3a0\\solutions_row2_after.png', Buffer.from(ss2.data, 'base64'));

  // Also capture BentoGrid "Abrir conta grátis" link
  const bentoLink = await send('Runtime.evaluate', {
    expression: `(() => {
      const a = Array.from(document.querySelectorAll('a')).find(el => el.innerText.includes('Abrir conta grátis') && el.closest('#produtos'));
      if (!a) return null;
      const r = a.getBoundingClientRect();
      const style = window.getComputedStyle(a);
      return {
        left: r.left,
        top: r.top + window.scrollY,
        width: r.width,
        height: r.height,
        fontWeight: style.fontWeight
      };
    })()`,
    returnByValue: true
  });

  if (bentoLink.result.value) {
    const bl = bentoLink.result.value;
    const ss3 = await send('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: Math.max(0, bl.left - 15),
        y: Math.max(0, bl.top - 10),
        width: bl.width + 30,
        height: bl.height + 20,
        scale: 1
      },
      captureBeyondViewport: true
    });
    fs.writeFileSync('C:\\Users\\Nilto\\.gemini\\antigravity\\brain\\72d170e4-9940-412d-a4b1-03f753d4e3a0\\bento_abrir_conta_after.png', Buffer.from(ss3.data, 'base64'));
    console.log('Bento link info:', bl);
  }

  ws.close();
  chrome.kill();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

