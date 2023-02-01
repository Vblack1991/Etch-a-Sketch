//create variable for container
const container = document.getElementById('container');


//loop div into grid
for (let i = 1; i < 257; i++) {
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

