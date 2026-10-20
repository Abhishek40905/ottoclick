const { spawn } = require('child_process');

const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
  '--headless',
  '--remote-debugging-port=9222',
  '--disable-gpu',
  '--window-size=1280,1024',
  'http://localhost:4174/about-us/'
]);

setTimeout(async () => {
  try {
    const res = await fetch('http://127.0.0.1:9222/json');
    const list = await res.json();
    const page = list.find(t => t.url.includes('about-us'));
    if (!page) {
      console.log('No page found, targets:', list);
      edge.kill();
      return;
    }
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    ws.onopen = () => {
      const expr = `(() => {
        const getRect = sel => {
          const el = document.querySelector(sel);
          if (!el) return null;
          const r = el.getBoundingClientRect();
          const cs = window.getComputedStyle(el);
          return { top: r.top, bottom: r.bottom, height: r.height, marginTop: cs.marginTop, marginBottom: cs.marginBottom, position: cs.position, zIndex: cs.zIndex };
        };
        return {
          hero: getRect('.reference-page-hero'),
          heroCopy: getRect('.reference-page-hero > div:first-child'),
          heroSlideshowWrap: getRect('.reference-page-hero-slideshow'),
          slideshowContainer: getRect('.hero-slideshow-container'),
          statRow: getRect('.reference-stat-row'),
          copySection: getRect('.reference-copy-section')
        };
      })()`;
      ws.send(JSON.stringify({ id: 1, method: 'Runtime.evaluate', params: { expression: expr, returnByValue: true } }));
    };
    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      console.log('EVAL RESULT:', JSON.stringify(data.result?.result?.value, null, 2));
      edge.kill();
      process.exit(0);
    };
  } catch (err) {
    console.error('Error:', err);
    edge.kill();
    process.exit(1);
  }
}, 2000);
