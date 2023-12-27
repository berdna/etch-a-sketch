// Container Styles
const container = document.querySelector('div');
container.parentNode.style.display = 'flex';
container.parentNode.style['justify-content'] = 'center';
container.parentNode.style['align-items'] = 'center';
container.style.border = ['1px solid black'];
container.style.width = '500px';
container.style.height = '500px';
container.parentNode.style.height = '100vh';

const pixelRow = document.getElementById(['pixel-row']);

// button functions
const btn = document.getElementById('gridGen');
btn.addEventListener('click', function(e) {
    let val = prompt("What size grid would you like to make?");
    makeGrid(val);
});


// JS Grid Divs
// let gridSize = 16;
// for (let i = 0; i < gridSize; i++) {
//     const grid = document.createElement('div');
//     grid.classList.add('grid-item');
//     pixelRow.appendChild(grid);
// }
function makeGrid(num) {
    for(let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.setAttribute('id', 'pixel-row');
        container.appendChild(row);
        for(let k = 0; k < num; k++) {
            const pixel = document.createElement('div');
            pixel.classList.add('grid-item');
            pixel.addEventListener('mouseover', function(e) {
                e.target.style['background-color'] = 'blue';
            });
            row.appendChild(pixel);
        }
    }
}

// pixel.addEventListener('hover', function(e) {
//     e.target.style[background-color] = 'blue';
// });

// function randColor () {
    
// }
// function makeGrid(num) {
//     let gridSize = num * num;

//     for(let i = 0; i < gridSize; i++) {
//         const grid = document.createElement('div');
//         container.appendChild(grid);
//     }
// }
