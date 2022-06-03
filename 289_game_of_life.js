const gameOfLife = (board) => {
  const nextState = new Array(board.length).fill(0).map(() => new Array(board[0].length).fill(0));

  const surroundings = [
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1]
  ];

  const getAdjacentAlive = (x, y) => surroundings.reduce((acc, [_x, _y]) => acc + +!!board[x + _x]?.[y + _y], 0);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const adjacentAlive = getAdjacentAlive(i, j);
      if (board[i][j] === 1) {
        nextState[i][j] = +([2, 3].includes(adjacentAlive));
      } else {
        nextState[i][j] = +(adjacentAlive === 3);
      }
    }
  }

  return nextState;
};


// gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]).forEach(s => console.log(s));
gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]).forEach(s => console.log(s));



