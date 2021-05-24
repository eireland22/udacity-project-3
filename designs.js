// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Grid making function
function makeGrid() {

  const canvas = document.getElementById('pixelCanvas'); // Setting pc
  const gridHeight = document.getElementById('inputHeight').value; // Setting gh
  const gridWidth = document.getElementById('inputWidth').value; // Setting gw
  canvas.innerHTML = ''; // Deleting child rows
  for (let i = 0; i < gridHeight; i++) { // Looping over rows by height
    let row = canvas.insertRow(i);

    for (let j = 0; j < gridWidth; j++) { // Looping over cells by width
      let cell = row.insertCell(j);

      cell.addEventListener('click', function(event) { // Adding click event
        // On click, background color becomes the selected color
        event.target.style.backgroundColor = document.getElementById('colorPicker').value;
      });
    }
  }
}

// Adding click event to submit function
document.getElementById('sizePicker').addEventListener('submit', function(event) {
  event.preventDefault();
  // Finally the grid is made
  makeGrid();
});
