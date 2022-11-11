let board = ['', '', '', '', '', '', '', '', ''];
let playerTurn = 0;
let symbols = ['o', 'x'];
let endGame = false;
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handleMove(position) {
    if (endGame) {
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[playerTurn];

        endGame = isWin()

        if (!endGame) {
            playerTurn = (playerTurn == 0) ? 1 : 0;
        }
    }

    return endGame;
}


function isWin() {
    for (let i = 0; i < winningCombinations.length; i++) {
        let sequences = winningCombinations[i];

        let firstPosition = sequences[0];
        let secondPosition = sequences[1];
        let thirdPosition = sequences[2];

        if (board[firstPosition] == board[secondPosition] &&
            board[firstPosition] == board[thirdPosition] &&
            board[firstPosition] != '') {
            return true
        }
    }

    return false
}