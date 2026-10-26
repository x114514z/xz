document.querySelectorAll('pre').forEach(pre => {
  // 代码框样式
  pre.style.cssText = `
    position: relative;
    background: #1e1e1e;
    color: #e6e6e6;
    border-radius: 6px;
    padding: 12px 14px;
    margin: 12px 0;
    overflow-x: auto;
    max-width: 100%;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
  `;
  // code 里也保证不撑破
  const code = pre.querySelector('code');
  if (code) {
    code.style.cssText = `
      display: block;
      white-space: pre;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: 13px;
      line-height: 1.5;
    `;
  }
  // 复制按钮
  const btn = document.createElement('button');
  btn.textContent = '复制';
  btn.style.cssText = `
    position: absolute;
    top: 6px;
    right: 6px;
    font-size: 12px;
    padding: 3px 10px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background: #9B2226;
    color: #1C1814;
    font-weight: bold;
    transition: background .15s;
    z-index: 1;
  `;
  btn.onmouseenter = () => btn.style.background = '#b52b30';
  btn.onmouseleave = () => btn.style.background = '#9B2226';
  btn.onclick = () => {
    const text = pre.querySelector('code')?.innerText ?? pre.innerText;
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = '已复制!';
      setTimeout(() => btn.textContent = '复制', 1500);
    });
  };
  pre.appendChild(btn);
});