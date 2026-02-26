// Create img
const img = new Image(50, 50);
img.src = "js.png";

const container = document.getElementById("container");
const table = document.getElementById("table");
// Create component 5 cells in  1 row
function addCellsInRow() {
    let row = table.insertRow(-1);
    for ( let i = 0; i < 5; i++){
        let newCell = row.insertCell(-1);
        newCell.textContent = "cell 21";
    }
}

// Repeat 5 times component addCellsInRow()
for (let j = 0; j < 5; j++) {
    const newRow = addCellsInRow();

}

