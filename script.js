const BoardContainer = document.querySelector(".board-container")
const GameBoard = (() => {
    const board = []

    return { board }
})();

const Player = (name, character) => {

    return { name, character }
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
            console.log("Board: " + checkForWin(gameBoard))
            makeMove(player, gameBoard);

        }
    }
    return { startGame }
})();

const gameBoard = GameBoard.board
const playerOne = Player("One", 'X');
const playerTwo = Player("Two", 'O')
let player = playerOne
populateBoard(gameBoard);

// function startGame() {

//     const gameBoard = GameBoard.board;
//     populateBoard(gameBoard);
//     const playerOne = Player("One", 'X');
//     const playerTwo = Player("Two", 'O')
//     let player = playerOne

//     for (let i = 0; i < 10; i++) {
//         if (!checkForWin(gameBoard)) {
//             makeMove(player, gameBoard);
//             player.character === playerOne.character ? player = playerTwo : player = playerOne;
//             console.log("hello")
//             console.log(`GameBoard ${gameBoard}`)
//         }
//     }



// }

//todo -> put startgame inside game object
//todo -> create mechanic for changing players, and announcing victors on screen

// function makeMove(player, board) {

BoardContainer.addEventListener(("click"), function (event) {

    if (event.target.classList.contains("board-square")) {
        const squareVal = event.target
        if (squareVal.textContent === 'O' || squareVal.textContent === 'X') {
            console.log("Invalid placement")
            return;
        }
        gameBoard[squareVal.getAttribute("data-value")] = player.character

        squareVal.textContent = player.character
    }
    if (checkForWin(gameBoard)) {
        console.log(player.name + " won the game")
        return;
    }
    player.character === playerOne.character ? player = playerTwo : player = playerOne;

})


function isValidChar(char) {
    return (char === 'O' || char === 'X')
}



function checkForWin(board) {
    return horizontalWin(board) || verticalWin(board) || diagonalWin(board)
}

function horizontalWin(board) {
    return (isValidChar(board[0]) && (board[0] === board[1] && board[0] === board[2])) ||
        (isValidChar(board[3]) && (board[3] === board[4] && board[3] === board[5])) ||
        (isValidChar(board[6]) && (board[6] === board[7] && board[6] === board[8]))
}

function verticalWin(board) {
    return (isValidChar(board[0]) && (board[0] === board[3] && board[0] === board[6])) ||
        (isValidChar(board[1]) && (board[1] === board[4] && board[1] === board[7])) ||
        (isValidChar(board[2]) && (board[2] === board[5] && board[2] === board[8]))
}
function diagonalWin(board) {
    return (isValidChar(board[0]) && (board[0] === board[4] && board[0] === board[8])) ||
        (isValidChar(board[2]) && (board[2] === board[4] && board[2] === board[6]))
}


function populateBoard(gameBoard) {
    for (let i = 0; i < 9; i++) {
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

