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
      const h3s = Array.from(document.querySelectorAll('#produtos h3'));
      const c2 = h3s[1].closest('.relative.overflow-hidden') || h3s[1].parentElement.parentElement;
      const c5 = h3s[4].closest('.bg-white') || h3s[4].parentElement.parentElement;
      const r2 = c2.getBoundingClientRect();
      const r5 = c5.getBoundingClientRect();
      return {
        y: Math.round(r2.top + window.scrollY - 10),
        height: Math.round(r5.bottom - r2.top + 20)
      };
    })()`,
    returnByValue: true
  });

  const val = info.result?.result?.value;
  if (val) {
    const shot = await send('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: 0,
        y: val.y,
        width: 390,
        height: val.height,
        scale: 1
      },
      captureBeyondViewport: true
    });

    const shotData = shot.data || (shot.result && shot.result.data);
    if (shotData) {
      fs.writeFileSync('scratch/bento_mobile_cards_compact_stack.png', Buffer.from(shotData, 'base64'));
      console.log('Saved scratch/bento_mobile_cards_compact_stack.png');
    }
  }

  ws.close();
  chrome.kill();
}

main().catch(console.error);

