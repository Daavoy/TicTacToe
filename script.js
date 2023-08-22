const BoardContainer = document.querySelector(".board-container")




const GameBoard = (() => {
    const board = new Array(9)

    return { board }
})();

const Player = (name, charater) => {

    return { name, charater }
}

const GameContoller = (() => {

    const startGame = () => {

        const gameBoard = GameBoard.board;
        populateBoard(gameBoard);
        const playerOne = Player("One", 'X');
        const playerTwo = Player("Two", 'O')
        const player = playerOne
        console.log(`GameBoard ${gameBoard}`)
        while (!checkForWin(gameBoard)) {
            makeMove(player, gameBoard);

        }
    }
    return { startGame }
})();


function startGame() {

    const gameBoard = GameBoard.board;
    populateBoard(gameBoard);
    const playerOne = Player("One", 'X');
    const playerTwo = Player("Two", 'O')
    const player = playerOne
    console.log(`GameBoard ${gameBoard}`)

    makeMove(player, gameBoard);


}
startGame()


function makeMove(player, board) {
    BoardContainer.addEventListener(("click"), function (event) {

        console.log(player.getCharacter)
        if (event.target.classList.contains("board-square")) {
            const squareVal = event.target
            if (squareVal.textContent === 'O' || squareVal.textContent === 'X') {
                console.log("Invalid placement")
            }
            board[squareVal.getAttribute("data-value")] = player.charater

            squareVal.textContent = player.charater
        }
    })
}

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


function populateBoard(gameBoard) {
    for (let i = 0; i < 9; i++) {
        console.log(i);
        gameBoard[i] = '';
        createBoardSquare('', i);
    }
}


function createBoardSquare(x, i) {
    const boardSquare = document.createElement("div");
    boardSquare.classList = "board-square"
    boardSquare.textContent = x;
    boardSquare.setAttribute("data-value", i);
    BoardContainer.appendChild(boardSquare);
}




console.log(checkForWin(['x', 'o', 'o',
    'o', 'o', 'x',
    'x', 'x', 'o']))