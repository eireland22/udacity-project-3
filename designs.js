// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
    constr table = document.getElementById("pixelCanvas");
    let grid = '';
    
    // Looping over row
    for (let n = 0; n < height; n++) {
        grid += '<tr class="row-' + n + '">';
        // Looping over cell
        for (let m = 0; m < width; m++) {
            grid += '<td class="cell" id="row-' + n + '_cell-' + m + '"></td>';
        }
        grid += '</tr>';
    }
    
    // Adding the grid to table
    table.innerHTML = grid;
    
    // Adding click event to grid
    addClickEventToCells();
}
