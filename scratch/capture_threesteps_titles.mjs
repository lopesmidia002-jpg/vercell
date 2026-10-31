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

  const stepsInfo = await send('Runtime.evaluate', {
    expression: `(() => {
      const h3s = Array.from(document.querySelectorAll('#como-comecar h3'));
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

  console.log('ThreeSteps titles info:', stepsInfo.result.value);
  const titles = stepsInfo.result.value;

  if (titles.length === 3) {
    const minLeft = Math.min(...titles.map(r => r.left));
    const maxRight = Math.max(...titles.map(r => r.left + r.width));
    const minTop = Math.min(...titles.map(r => r.top));
    const maxBottom = Math.max(...titles.map(r => r.top + r.height));

    const ss = await send('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: Math.max(0, minLeft - 10),
        y: Math.max(0, minTop - 5),
        width: (maxRight - minLeft) + 20,
        height: (maxBottom - minTop) + 10,
        scale: 1
      },
      captureBeyondViewport: true
    });
    fs.writeFileSync('C:\\Users\\Nilto\\.gemini\\antigravity\\brain\\72d170e4-9940-412d-a4b1-03f753d4e3a0\\threesteps_titles_after.png', Buffer.from(ss.data, 'base64'));
    console.log('Saved threesteps_titles_after.png');
  }

  ws.close();
  chrome.kill();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

