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

  const info = await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.includes('Voltar para o Topo'));
      if (!btn) return { error: 'btn not found' };
      const col = btn.parentElement.parentElement;
      const cnpjP = Array.from(col.querySelectorAll('p')).find(p => p.innerText.includes('CNPJ'));
      if (!cnpjP) return { error: 'cnpj not found' };
      const btnRect = btn.getBoundingClientRect();
      const cnpjRect = cnpjP.getBoundingClientRect();
      const colRect = col.getBoundingClientRect();
      return {
        gap: btnRect.top - (cnpjRect.top + cnpjRect.height),
        btnRect: { left: btnRect.left, top: btnRect.top + window.scrollY, width: btnRect.width, height: btnRect.height },
        colRect: { left: colRect.left, top: colRect.top + window.scrollY, width: colRect.width, height: colRect.height }
      };
    })()`,
    returnByValue: true
  });

  console.log('Result:', info.result.value);
  const v = info.result.value;

  if (v && !v.error) {
    const ss = await send('Page.captureScreenshot', {
      format: 'png',
      clip: {
        x: Math.max(0, v.colRect.left - 15),
        y: Math.max(0, v.colRect.top - 15),
        width: v.colRect.width + 30,
        height: (v.btnRect.top + v.btnRect.height + 25) - v.colRect.top,
        scale: 1
      },
      captureBeyondViewport: true
    });

    fs.writeFileSync('C:\\Users\\Nilto\\.gemini\\antigravity\\brain\\72d170e4-9940-412d-a4b1-03f753d4e3a0\\footer_fale_conosco_after.png', Buffer.from(ss.data, 'base64'));
    console.log('Saved footer_fale_conosco_after.png');
  }

  ws.close();
  chrome.kill();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
