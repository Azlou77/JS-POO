const img = new Image(50, 50);
img.src = "img/js.png";

const table = document.getElementById("table");

// Position actuelle de l'image
let currentRow = 2;
let currentCell = 2;

function addCellsInRow() {
  let row = table.insertRow(-1);

  for (let i = 0; i < 5; i++) {
    let cell = row.insertCell(-1);
  }
}

function finalCheckboard() {
  for (let j = 0; j < 5; j++) {
    addCellsInRow();
  }

  // Place l'image à la position initiale (row 2, cell 2)
  placeImage(currentRow, currentCell);

  placeImageBonus(randRow, randCell);
}

// Place l'image dans la cellule ciblée
function placeImage(row, cell) {
  const targetCell = table.rows[row]?.cells[cell];
  if (targetCell) {
    targetCell.appendChild(img);
  }
}

// Place l'image bonus dans la cellule  aléatoire
const imgBonus = new Image(50, 50);
imgBonus.src = "img/bonus.png";



// Position actuelle de l'image bonus
let randRow = getRandomInt(0, 4);
let randCell = getRandomInt(0, 4);

// Génère un nombre entre 0 et 4
function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function placeImageBonus(row, cell){
   const randCell = table.rows[row]?.cells[cell];
  if (randCell) {
    randCell.appendChild(imgBonus);
  }
}


// Écoute les touches clavier UNE SEULE FOIS en dehors des boucles
window.addEventListener("keydown", (evt) => {
  let newRow = currentRow;
  let newCell = currentCell;

  if (evt.key === "ArrowUp") {
    newRow--;
  } else if (evt.key === "ArrowDown") {
    newRow++;
  } else if (evt.key === "ArrowRight") {
    newCell++;
  } else if (evt.key === "ArrowLeft") {
    newCell--;
  }

  // Vérifie que la nouvelle position est dans les limites du tableau
  const maxRows = table.rows.length - 1;
  const maxCells = table.rows[0].cells.length - 1;

  if (newRow >= 0 && newRow <= maxRows && newCell >= 0 && newCell <= maxCells) {
    currentRow = newRow;
    currentCell = newCell;
    placeImage(currentRow, currentCell);
    placeImageBonus(randRow, randCell);
  }
});
// 
finalCheckboard();

