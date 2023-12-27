// Container Styles
const container = document.querySelector('div');
container.parentNode.style.display = 'flex';
container.parentNode.style['justify-content'] = 'center';
container.parentNode.style['align-items'] = 'center';
container.style.border = ['1px solid black'];
container.style.width = '500px';
container.style.height = '500px';
container.parentNode.style.height = '100vh';

// JS Grid Divs
let gridSize = 16 * 16;
for (let i = 0; i < gridSize; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid-item');
    container.appendChild(grid);
}
// function makeGrid(num) {
//     let gridSize = num * num;

//     for(let i = 0; i < gridSize; i++) {
//         const grid = document.createElement('div');
//         container.appendChild(grid);
//     }
// }
