const main = document.querySelector('.container');
let gridRow = [];
let box = [];

for(let i=0; i<8; ++i){
    gridRow[i] = document.createElement('div');
    gridRow[i].classList.add('grid-row');
    for(let j=0; j<8; ++j){
        box[j] = document.createElement('div');
        box[j].classList.add('box');
        gridRow[i].appendChild(box[j]);
    }
    main.append(gridRow[i]);
}

const boxes = document.querySelectorAll('.box');

boxes.forEach((gridBox) => {
    gridBox.addEventListener('mouseover', () => {
        gridBox.style.backgroundColor = 'black';
    })
})
