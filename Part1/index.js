console.log("hello");
let board = [];

function play(clickedId) {
  const playerSpan = document.getElementById("player");
  const clickedElement = document.getElementById(clickedId);

  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    board[clickedId] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    board[clickedId] = "O";
  }
  console.log(board);

  const topLeft = board[0];
  const topMid = board[1];
  const topRight = board[2];
  const midLeft = board[3];
  const midMid = board[4];
  const midRight = board[5];
  const bottomLeft = board[6];
  const bottomMid = board[7];
  const bottomRight = board[8];

  if (
    topRight !== undefined &&
    topRight === midRight &&
    topRight === bottomRight
  ) {
    alert(`${topRight} Won!`);
    return;
  }

  if (topMid !== undefined && topMid === midMid && topMid === bottomMid) {
    alert(`${topMid} Won!`);
    return;
  }

  if (topLeft !== undefined && topLeft === midLeft && topLeft === bottomLeft) {
    alert(`${topLeft} Won!`);
    return;
  }

  if (topRight !== undefined && topRight === topMid && topRight === topLeft) {
    alert(`${topRight} Won!`);
  }

  if (midLeft !== undefined && midLeft === midMid && midLeft === midRight) {
    alert(`${midLeft} Won!`);
    return;
  }

  if (
    bottomLeft !== undefined &&
    bottomLeft === bottomMid &&
    bottomLeft === bottomRight
  ) {
    alert(`${bottomLeft} Won!`);
    return;
  }

  if (topLeft !== undefined && topLeft === midMid && topLeft === bottomRight) {
    alert(`${topLeft} Won!`);
    return;
  }

  if (
    topRight !== undefined &&
    topRight === midMid &&
    topRight === bottomLeft
  ) {
    alert(`${topRight} Won!`);
    return;
  }

  let boardFull = true;
  for (let i = 0; i < 9; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game suckers! Nobody wins!");
  }
}
