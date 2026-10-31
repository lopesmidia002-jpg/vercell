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

  const itemsInfo = await send('Runtime.evaluate', {
    expression: `(() => {
      const allRows = Array.from(document.querySelectorAll('div')).filter(d => {
        return d.innerText.includes('Pix 24/7') && d.innerText.includes('Infraestrutura completa') && d.children.length === 3;
      });
      // The last one is PreFooterCta
      const highlightRow = allRows[allRows.length - 1];
      if (!highlightRow) return null;
      const r = highlightRow.getBoundingClientRect();
      const children = Array.from(highlightRow.children).map(c => {
        const cr = c.getBoundingClientRect();
        return {
          text: c.innerText.trim(),
          left: cr.left,
          top: cr.top + window.scrollY,
          width: cr.width,
          height: cr.height
        };
      });
      return {
        rowRect: {
          left: r.left,
          top: r.top + window.scrollY,
          width: r.width,
          height: r.height
        },
        children
      };
    })()`,
    returnByValue: true
  });

  console.log('PreFooter items info:', JSON.stringify(itemsInfo.result.value, null, 2));
  const val = itemsInfo.result.value;

  if (val) {
    const ss = await send('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: Math.max(0, val.rowRect.left - 20),
        y: Math.max(0, val.rowRect.top - 12),
        width: val.rowRect.width + 40,
        height: val.rowRect.height + 24,
        scale: 1
      },
      captureBeyondViewport: true
    });

    fs.writeFileSync('C:\\Users\\Nilto\\.gemini\\antigravity\\brain\\72d170e4-9940-412d-a4b1-03f753d4e3a0\\prefooter_icons_after.png', Buffer.from(ss.data, 'base64'));
    console.log('Saved prefooter_icons_after.png');
  }

  ws.close();
  chrome.kill();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
