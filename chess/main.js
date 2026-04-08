const img = new Image(50, 50);
img.src = "img/js.png";

const table = document.getElementById("table");

// Position actuelle de l'image
let currentRow = 5;
let currentCell = 5;

// Tableaux de coordonnées des doubles cases (sortis des boucles)
let tabNumberRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let tabNumberCell = [5];

// Vérifie si une position est une double case
function isInDoubleCase(rowIndex, cellIndex) {
  let rowFound = tabNumberRow.includes(rowIndex);
  let cellFound = tabNumberCell.includes(cellIndex);

  if (rowFound && cellFound) {
    let targetCell = table.rows[rowIndex]?.cells[cellIndex];
    if (targetCell) {
      //targetCell.textContent = "ok";
      targetCell.colSpan = 2;
      
      targetCell.classList.add("highlightBorder");
      console.log(`Double case trouvée : row ${rowIndex}, cell ${cellIndex}`);
    }
    return true;
  }
  return false;
}

function addCellsInRow() {
  let row = table.insertRow(-1);

  for (let i = 0; i < 10; i++) {
    let cell = row.insertCell(-1);
    cell.textContent = `${row.rowIndex}-${cell.cellIndex}`;
  }
}

function finalCheckboard() {
  for (let j = 0; j < 10; j++) {
    addCellsInRow();
  }

  // Applique "ok" sur toutes les doubles cases après construction du tableau
  for (let r = 0; r < table.rows.length; r++) {
    for (let c = 0; c < table.rows[r].cells.length; c++) {
      isInDoubleCase(r, c);
    }
  }

  placeImage(currentRow, currentCell);
  placeImageBonus(randRow, randCell);
}

// Place l'image principale
function placeImage(row, cell) {
  const targetCell = table.rows[row]?.cells[cell];
  if (targetCell) {
    targetCell.appendChild(img);
  }
}

// Image bonus
const imgBonus = new Image(50, 50);
imgBonus.src = "img/bonus.png";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randRow = getRandomInt(0, 4);
let randCell = getRandomInt(0, 4);

function placeImageBonus(row, cell) {
  const targetCell = table.rows[row]?.cells[cell];
  if (targetCell) {
    targetCell.appendChild(imgBonus);
  }
}

// Keydown
window.addEventListener("keydown", (evt) => {
  let newRow = currentRow;
  let newCell = currentCell;

  if (evt.key === "ArrowUp") newRow--;
  else if (evt.key === "ArrowDown") newRow++;
  else if (evt.key === "ArrowRight") newCell++;
  else if (evt.key === "ArrowLeft") newCell--;

  const maxRows = table.rows.length - 1;
  const maxCells = table.rows[0].cells.length - 1;

  if (newRow >= 0 && newRow <= maxRows && newCell >= 0 && newCell <= maxCells) {
    currentRow = newRow;
    currentCell = newCell;

    // Vérifie si on est sur une double case
    if (isInDoubleCase(currentRow, currentCell)) {
      console.log("Tu es sur une double case !");
    }

    placeImage(currentRow, currentCell);
    placeImageBonus(randRow, randCell);
  }
});

finalCheckboard();