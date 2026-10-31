import { spawn } from 'child_process';
import fs from 'fs';

async function main() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--window-size=500,1000',
    'http://localhost:3000'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch('http://127.0.0.1:9222/json/list');
    const tabs = await listRes.json();
    const pageTab = tabs.find(t => t.type === 'page');
    if (!pageTab) throw new Error('No page tab');

    const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

    let id = 1;
    const send = (method, params = {}) => new Promise(resolve => {
      const msgId = id++;
      const handler = (e) => {
        const data = JSON.parse(e.data);
        if (data.id === msgId) {
          ws.removeEventListener('message', handler);
          resolve(data.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });

    await new Promise(r => ws.addEventListener('open', r));

    await send('Page.enable');
    await send('DOM.enable');

    // Emulate standard 390px mobile viewport (iPhone 14 / modern Android)
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true,
      fitWindow: false
    });

    await send('Page.navigate', { url: 'http://localhost:3000' });
    await new Promise(r => setTimeout(r, 3000));

    // Evaluate metrics
    const evalRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const devSec = document.querySelector('#desenvolvedores');
        const h2 = devSec ? devSec.querySelector('h2') : null;
        const p = devSec ? devSec.querySelector('p') : null;
        const list = devSec ? devSec.querySelector('.space-y-4') : null;
        const items = list ? Array.from(list.children).map(c => ({
          text: c.innerText.trim(),
          w: c.getBoundingClientRect().width,
          h: c.getBoundingClientRect().height,
          left: c.getBoundingClientRect().left
        })) : [];

        return {
          h2Text: h2 ? h2.innerText.trim() : null,
          h2Width: h2 ? h2.getBoundingClientRect().width : null,
          h2Height: h2 ? h2.getBoundingClientRect().height : null,
          h2Left: h2 ? h2.getBoundingClientRect().left : null,
          pText: p ? p.innerText.trim() : null,
          pAlign: p ? window.getComputedStyle(p).textAlign : null,
          pLeft: p ? p.getBoundingClientRect().left : null,
          items
        };
      })()`,
      returnByValue: true
    });

    console.log('Metrics:', JSON.stringify(evalRes.result ? evalRes.result.value : evalRes, null, 2));

    // Helper to capture section
    async function captureSection(selector, filename, clipHeight = 560) {
      await send('Runtime.evaluate', {
        expression: `document.querySelector('${selector}').scrollIntoView({ block: 'start' });`
      });
      await new Promise(r => setTimeout(r, 700));

      const rectRes = await send('Runtime.evaluate', {
        expression: `(() => {
          const el = document.querySelector('${selector}');
          const rect = el.getBoundingClientRect();
          return { top: rect.top, left: rect.left };
        })()`,
        returnByValue: true
      });
      const top = Math.max(0, rectRes.result.value.top);

      const shot = await send('Page.captureScreenshot', {
        clip: {
          x: 0,
          y: top,
          width: 390,
          height: clipHeight,
          scale: 2
        }
      });
      fs.writeFileSync(`C:\\Users\\Nilto\\.gemini\\antigravity\\brain\\72d170e4-9940-412d-a4b1-03f753d4e3a0\\${filename}`, Buffer.from(shot.data, 'base64'));
      console.log(`Saved ${filename}`);
    }

    await captureSection('#desenvolvedores', 'dev_mobile_left_aligned.png', 560);
    await captureSection('#seguranca', 'security_mobile_left_aligned.png', 540);
    await captureSection('#suporte', 'support_mobile_left_aligned.png', 520);
    await captureSection('#faq', 'faq_mobile_left_aligned.png', 480);

    ws.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    chrome.kill();
  }
}

main();
