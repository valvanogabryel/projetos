document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
});

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        let restartBtn = document.createElement('button')
        const restartDiv = document.getElementById('restart')
        setTimeout(() => {
            alert(`Jogador ${playerTurn + 1} venceu!`);
        }, 10)

        restartBtn.type = 'button'
        restartBtn.setAttribute('onclick', restartGame)
        restartBtn.innerText = 'REINICIAR JOGO'
        restartDiv.appendChild(restartBtn)
    }
    updateSquare(position)
};

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTurn = 0;
    symbols = ['o', 'x'];
    endGame = false;

    updateSquares()
}

function updateSquares() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];
        if (symbol != '') {
            symbol = ''
            square.innerHTML = '';
        }
    })
}


