const container = document.querySelector('.container');
const stylecss = '.cell:hover{background-color: white;}';
for (let i = 0; i < 576; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.id = i;
    
    cell.addEventListener('click', () =>  {
        
        cell.style.backgroundColor = 'black';
        
        
    });
    const button = document.querySelector('.resetBtn');
    button.addEventListener('click', () => {
            cell.style.backgroundColor = 'white';
            
            
        });
    container.appendChild(cell);

}
