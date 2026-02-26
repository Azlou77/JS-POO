// Create img
const img = new Image(50, 50);
img.src = "js.png";

const container = document.getElementById("container");
const table = document.querySelector("table");
let row = table.insertRow(-1);
for ( let i = 0; i < 5; i++){
    let newCell = row.insertCell(-1);
    newCell.textContent = "cell 21";
    
}
