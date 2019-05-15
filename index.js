function bacteria() {
  const aliveCells = process.argv.slice(2),
    cells = getCells(),
    toLive = [],
    toDie = [];

  cells.forEach(cell => {
    const neighbouringCells = getNeighbours(cell);

    const aliveNeighbours = neighbouringCells.filter(function(cell) {
      return aliveCells.indexOf(`${cell[0]},${cell[1]}`) !== -1;
    });

    const isAlive = aliveCells.includes(`${cell[0]},${cell[1]}`);

    const aliveNeighboursNum = aliveNeighbours.length;

    if (aliveNeighboursNum < 2 && isAlive) {
      toDie.push(cell);
    } else if (aliveNeighboursNum === 3 && !isAlive) {
      toLive.push(cell);
    } else if (aliveNeighboursNum > 3 && isAlive) {
      toDie.push(cell);
    } else if (
      (aliveNeighboursNum === 2 && isAlive) ||
      (aliveNeighboursNum === 3 && !isAlive)
    ) {
      toLive.push(cell);
    }
  });

  toLive.forEach(el => {
    console.log(el);
  });

  console.log("END");
}

function getNeighbours(a) {
  const [x, y] = a;
  var coords = [];
  for (var i = x - 1; i < x + 2; i++) {
    for (var j = y - 1; j < y + 2; j++) {
      if (i == x && j == y) {
        continue;
      } else {
        coords.push([i, j]);
      }
    }
  }

  return coords;
}

function getCells() {
  const result = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      result.push([i, j]);
    }
  }
  return result;
}

console.log(bacteria());

