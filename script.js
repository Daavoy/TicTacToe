const BoardContainer = document.querySelector(".board-container")




const GameBoard = (() => {
    const board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']

    return { board }
})();

const Player = (name, charater) => {
    const getName = () => name;
    const getCharacter = () => charater;
    return { getName, getCharacter }
}

const GameContoller = (() => {

})();


function checkForWin(board) {
    return horizontalWin(board) || verticalWin(board) || diagonalWin(board)
}

function horizontalWin(board) {
    return (board[0] === board[1] && board[0] === board[2]) ||
        (board[3] === board[4] && board[3] === board[5]) ||
        (board[6] === board[7] && board[6] === board[8])
}

function verticalWin(board) {
    return (board[0] === board[3] && board[0] === board[6]) ||
        (board[1] === board[4] && board[1] === board[7]) ||
        (board[2] === board[5] && board[2] === board[8])
}
function diagonalWin(board) {
    return (board[0] === board[4] && board[0] === board[8]) ||
        (board[2] === board[4] && board[2] === board[6])
}


function populateBoard() {

    let gameBoard = GameBoard.board;

    for (let i = 0; i < 10; i++) {

        createBoardSquare(gameBoard[i], i);
    }
}

populateBoard()
function createBoardSquare(x, n) {
    const boardSquare = document.createElement("div");
    boardSquare.classList = "board-square"
    boardSquare.textContent = x;
    BoardContainer.appendChild(boardSquare);
}

BoardContainer.addEventListener(("click"), function (event) {
    if (event.target.classList.contains("board-square")) {
        console.log(event.target.textContent)
    }
})


console.log(isGameOver(['x', 'o', 'o',
    'o', 'o', 'x',
    'x', 'x', 'o']))