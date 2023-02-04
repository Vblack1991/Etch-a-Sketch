//create variable for container and row
const container = document.getElementById('container');

//loop div into grid
for (let i = 1; i < 257; i++) {
    container.style.setProperty('grid-template-columns', 'repeat('+ 16 +', 1fr)');
    
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    container.appendChild(row);
    
    //changes color when entering/leaving divs
    function hoverStart() {
        row.setAttribute('style', 'background-color: red;');
    }
    row.addEventListener('mouseover', hoverStart);
    
    function hoverEnd() {
        row.setAttribute('style', 'background-color: blue;');
    }
    row.addEventListener('mouseout', hoverEnd);
    };

//replaces old grid with new one
function newGrid () {
    let squareInput = prompt('Please enter number of squares(per side) for new grid');
    let squareTotal = squareInput * squareInput + 1;
    
    if (squareInput > 0 && squareInput <= 100) {
        container.style.setProperty('grid-template-columns', 'repeat('+ squareInput +', 1fr)');
        container.replaceChildren();
    for (let x = 1; x < squareTotal; x++) {

        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);

    function hoverStart() {
        row.setAttribute('style', 'background-color: red;');
    }
    row.addEventListener('mouseover', hoverStart);

    function hoverEnd() {
        row.setAttribute('style', 'background-color: blue;');
    }
    row.addEventListener('mouseout', hoverEnd);
    }
    } else if (squareInput > 100) {
    squareInput = prompt('Please enter a number less than or equal to 100');
    container.style.setProperty('grid-template-columns', 'repeat('+ squareInput +', 1fr)');
    container.replaceChildren();
    for (let x = 1; x < squareTotal; x++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);

    function hoverStart() {
        row.setAttribute('style', 'background-color: red;');
    }
    row.addEventListener('mouseover', hoverStart);

    function hoverEnd() {
        row.setAttribute('style', 'background-color: blue;');
    }
    row.addEventListener('mouseout', hoverEnd);
    }
    }
};
