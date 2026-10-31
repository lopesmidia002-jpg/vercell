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
        return { text: h.innerText, left: r.left, top: r.top + window.scrollY, width: r.width, height: r.height };
      });
    })()`,
    returnByValue: true
  });

  console.log('Rects:', rects.result.value);
  const row1 = rects.result.value.slice(0, 3);
  if (row1.length === 3) {
    const minLeft = Math.min(...row1.map(r => r.left));
    const maxRight = Math.max(...row1.map(r => r.left + r.width));
    const minTop = Math.min(...row1.map(r => r.top));
    const maxBottom = Math.max(...row1.map(r => r.top + r.height));

    const ss = await send('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: minLeft - 10,
        y: minTop - 5,
        width: (maxRight - minLeft) + 20,
        height: (maxBottom - minTop) + 10,
        scale: 1
      },
      captureBeyondViewport: true
    });

    fs.writeFileSync('scratch/local_solutions_row1.png', Buffer.from(ss.data, 'base64'));
    console.log('Saved scratch/local_solutions_row1.png');
  }

  ws.close();
  chrome.kill();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

