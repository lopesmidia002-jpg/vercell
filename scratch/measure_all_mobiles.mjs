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

  const widths = [360, 375, 390, 412, 430];

  for (const w of widths) {
    await send('Emulation.setDeviceMetricsOverride', { width: w, height: 844, deviceScaleFactor: 2, mobile: true });
    await send('Page.navigate', { url: 'http://localhost:3000' });
    await new Promise(r => setTimeout(r, 1500));

    const info = await send('Runtime.evaluate', {
      expression: `(() => {
        const cards = Array.from(document.querySelectorAll('#produtos .rounded-\\\\[32px\\\\]'));
        return cards.map(c => {
          const title = c.querySelector('h3')?.innerText?.replace(/\\s+/g, ' ');
          const r = c.getBoundingClientRect();
          const p = c.querySelector('p');
          const rP = p ? p.getBoundingClientRect() : null;
          return {
            title,
            cardHeight: Math.round(r.height),
            cardWidth: Math.round(r.width),
            emptySpaceBelowP: rP ? Math.round(r.bottom - rP.bottom) : null
          };
        });
      })()`,
      returnByValue: true
    });

    console.log(`Width ${w}px:`, JSON.stringify(info.result.result.value, null, 2));
  }

  ws.close();
  chrome.kill();
}

main().catch(console.error);

