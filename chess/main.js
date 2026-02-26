// Create imgage
const img = new Image(50, 50);
img.src = "js.png";


const container = document.getElementById("container");
const table = document.getElementById("table");

// Create component 5 cells in  1 row
function addCellsInRow() {
  let row = table.insertRow(-1);
  for (let i = 0; i < 5; i++) {
    let newCell = row.insertCell(-1);
    newCell.textContent = "cell 21";

  /* Place Checkerboard in the 3 row, position 3
     Row ${row.rowIndex} Cell ${i};
     row.rowIndex == 3 + ${i} == 3 via boucle for i = 0 au début
     Image cell postion 
     If cell the 3 row, position 3 alors
     Img include Cell include Row include Table
  */
    if (row.rowIndex == 2 && i == 2 ) {
      newCell.textContent = " ";
      newCell.appendChild(img);
      
    }
  }
}

// Repeat 5 times component addCellsInRow()
function finalCheckboard(){
    for (let j = 0; j < 5; j++) {
    const newRow = addCellsInRow();
   
    }
}
// Display final checkboard
finalCheckboard();




