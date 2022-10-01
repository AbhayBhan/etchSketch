const main = document.querySelector('.container');
const whiteBtn = document.querySelector('#white-btn');
let gridRow = [];
let box = [];
let whiteToggle = false;

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

whiteBtn.addEventListener('click',() => {
    whiteToggle = !whiteToggle;
    if(whiteToggle){
        whiteBtn.style.backgroundColor = '#808080';
    }
    else{
        whiteBtn.style.backgroundColor = 'white';
    }
})


const boxes = document.querySelectorAll('.box');

boxes.forEach((gridBox) => {
    gridBox.addEventListener('mouseover', () => {
        if(whiteToggle){
            gridBox.style.backgroundColor = 'white';
        }
        else{
            gridBox.style.backgroundColor = 'black';
        }
    })
})
