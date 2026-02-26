// Create imgage
const img = new Image(50, 50);
img.src = "js.png";


const container = document.getElementById("container");
const table = document.getElementById("table");


// Create component 5 cells in  1 row
function addCellsInRow() {
  let row = table.insertRow(-1);
  for (let i = 0; i < 5; i++) {
    let cell = row.insertCell(-1);
    cell.textContent = "cell 21";
    
  
  /* Place Checkerboard in the 3 row, position 3
     Row ${row.rowIndex} Cell ${i};
     row.rowIndex == 3 + ${i} == 3 via boucle for i = 0 au début
     Image cell postion 
     If cell the 3 row, position 3 then
     Img include Cell include Row include Table
  */
  let button = document.createElement("button");
  button.addEventListener("keydown", evt => {
    console.log(evt.key);
  })
  
  if (row.rowIndex == 2 && cell.cellIndex == 2) {
    cell.textContent = " ";
    // Include img in button
    button.appendChild(img);
    
    
  }   
  // Place button for event keydown
  cell.appendChild(button);
  
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

/* How to move image in checkboard
   Key word: keydown 
   if keydown == arrow up alors moveup
   if keydown == arrow bottom alors movebottom
   if keydown == arrow left alors moveleft
   if keydown == arrow right alors moveright
*/
/* Define current position: if image include in row 3, position 3  then
*/
// function defineCurrentPosition(){
//   finalCheckboard();
//   if (row.rowIndex == 2 && i == 2 && cell.appendChild(img)){
//     cell.textContent = "This is current position";
//   }
// }


