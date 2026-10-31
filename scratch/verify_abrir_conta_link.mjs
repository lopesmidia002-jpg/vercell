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

  const linkInfo = await send('Runtime.evaluate', {
    expression: `(() => {
      const links = Array.from(document.querySelectorAll('a')).filter(a => a.innerText.includes('Abrir conta grátis'));
      return links.map(link => {
        const rect = link.getBoundingClientRect();
        const style = window.getComputedStyle(link);
        return {
          href: link.getAttribute('href'),
          text: link.innerText.trim(),
          fontWeight: style.fontWeight,
          color: style.color,
          fontSize: style.fontSize,
          rect: {
            left: rect.left,
            top: rect.top + window.scrollY,
            width: rect.width,
            height: rect.height
          }
        };
      });
    })()`,
    returnByValue: true
  });

  console.log('Links found:', JSON.stringify(linkInfo.result.value, null, 2));

  // Find BentoGrid link
  const bentoLink = linkInfo.result.value.find(l => l.rect.top < 5000);
  if (bentoLink) {
    const clip = {
      x: Math.max(0, bentoLink.rect.left - 20),
      y: Math.max(0, bentoLink.rect.top - 15),
      width: bentoLink.rect.width + 40,
      height: bentoLink.rect.height + 30,
      scale: 2
    };

    const ss = await send('Page.captureScreenshot', {
      format: 'png',
      clip: clip,
      captureBeyondViewport: true
    });

    fs.writeFileSync('C:\\Users\\Nilto\\.gemini\\antigravity\\brain\\72d170e4-9940-412d-a4b1-03f753d4e3a0\\abrir_conta_regular_shot.png', Buffer.from(ss.data, 'base64'));
    console.log('Saved screenshot of bento link');
  }

  ws.close();
  chrome.kill();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

