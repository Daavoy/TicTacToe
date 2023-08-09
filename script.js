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