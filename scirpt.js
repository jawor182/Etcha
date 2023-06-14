document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const colorGetter = document.getElementById('colorGetter');
    const resetBtn = document.querySelector('.resetBtn');
  
    let currentColor = 'black';
  
    for (let i = 0; i < 576; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.id = i;
  
      cell.addEventListener('click', () => {
        cell.style.backgroundColor = currentColor;
      });
  
      container.appendChild(cell);
    }
  
    const updateDynamicStyle = () => {
      const stylecss = `.cell:hover { background-color: ${currentColor}; }`;
      const styleElement = document.getElementById('dynamicStyle');
  
      if (styleElement) {
        styleElement.textContent = stylecss;
      } else {
        const newStyle = document.createElement('style');
        newStyle.id = 'dynamicStyle';
        newStyle.textContent = stylecss;
        document.head.appendChild(newStyle);
      }
    };
  
    resetBtn.addEventListener('click', () => {
      const cells = document.querySelectorAll('.cell');
      cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
        cell.style =`.cell:hover { background-color: ${currentColor}; }`;
      });
    });
  
    colorGetter.addEventListener('input', () => {
      currentColor = colorGetter.value;
      updateDynamicStyle();
    });
  
    updateDynamicStyle();
  });
  