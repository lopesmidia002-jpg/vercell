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
      const sec = document.querySelector('#seguranca');
      if (!sec) return 'sec not found';
      const h2 = sec.querySelector('h2');
      const p = sec.querySelector('p');
      const link = sec.querySelector('a[href="#politicas"]');
      const emails = sec.querySelector('.space-y-2');

      return {
        h2Align: h2 ? window.getComputedStyle(h2).textAlign : null,
        h2Left: h2 ? h2.getBoundingClientRect().left : null,
        pAlign: p ? window.getComputedStyle(p).textAlign : null,
        pLeft: p ? p.getBoundingClientRect().left : null,
        linkLeft: link ? link.getBoundingClientRect().left : null,
        emailsAlign: emails ? window.getComputedStyle(emails).textAlign : null,
        emailsLeft: emails ? emails.getBoundingClientRect().left : null,
      };
    })()`,
    returnByValue: true
  });

  console.log('Security Metrics:', JSON.stringify(info.result ? info.result.value : info, null, 2));

  // scroll to #seguranca and screenshot
  await send('Runtime.evaluate', {
    expression: `document.querySelector('#seguranca').scrollIntoView();`
  });
  await new Promise(r => setTimeout(r, 600));

  const pos = await send('Runtime.evaluate', {
    expression: `(() => {
      const sec = document.querySelector('#seguranca');
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
      height: 480,
      scale: 2
    }
  });
  fs.writeFileSync('C:\\Users\\Nilto\\.gemini\\antigravity\\brain\\72d170e4-9940-412d-a4b1-03f753d4e3a0\\security_exact_shot.png', Buffer.from(shot.data, 'base64'));
  console.log('Saved security_exact_shot.png');

  ws.close();
  chrome.kill();
}

main();

