//create variable for container
const container = document.getElementById('container');


//loop div into grid
for (let i = 1; i < 257; i++) {
let row = document.createElement('div');
row.setAttribute('class', 'row');
container.appendChild(row);

function hEffect() {
    row.setAttribute('style', 'background-color: red;');
}

row.addEventListener('mouseover', hEffect, true);
}

//hover effect that changes divs color


