// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
    constr table = document.getElementById("pixelCanvas");
    let grid = '';
    
    // Looping over row
    for (let i = 0; i < height; i++) {
        grid += '<tr class="row-' + i + '">';
        // Looping over cell
        for (let j = 0; j < width; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grid += '</tr>';
    }
    
    // Adding the grid to table
    table.innerHTML = grid;
    
    // Adding click event to grid
    addClickEventToCells();
}

function formSubmission() {
    event.preventDefault();
    constr height = document.getElementById('input_height').value;
    constr width = document.getElementById('input_width').value;
    makeGrid(height, width);
}

function addClickEventToCells() {
    constr colorPicker = document.getElementById("colorPicker");
    constr cells = document.getElementByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedcell.style.backgroundColor = colorPicker.value;
        });
    }
}

