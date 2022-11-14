const cellElements = document.querySelectorAll('[data-cell]');
const board = document.querySelector('[data-board]');
const winningTextElement = document.querySelector('[data-winning-message-text]');
const winningMessage = document.querySelector('[data-winning-message]');
const restartButton = document.querySelector('[data-restart-button]');
let isCircleTurn;
const winningStates = [
    //Horizontal states
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //Vertical states
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //Diagonal states
    [0, 4, 8],
    [2, 4, 6],
];

const start = () => {
    isCircleTurn = false;

    for (const cell of cellElements) {
        cell.classList.remove("o");
        cell.classList.remove("x");
        cell.removeEventListener("click", handleClick);
        cell.addEventListener("click", handleClick, { once: true });
    };

    setBoardHoverClass();
    winningMessage.classList.remove('show-winning-message');
};

const endGame = (isDraw) => {
    if (isDraw) {
        winningTextElement.innerText = 'Empate!';
    } else {
        winningTextElement.innerHTML = isCircleTurn ? 'Jogador 2 venceu!' : 'Jogador 1 venceu!';
    };

    winningMessage.classList.add('show-winning-message');
};

const verifyVictory = (currentPlayer) => {
    return winningStates.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentPlayer);
        });
    });
};

const verifyDraw = () => {
    return [...cellElements].every(cell => {
        return cell.classList.contains('x') || cell.classList.contains('o');
    });
};

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
};

const setBoardHoverClass = () => {
    board.classList.remove('o');
    board.classList.remove('x');

    if (isCircleTurn) {
        board.classList.add('o');
    } else {
        board.classList.add('x');
    };
};

const swapTurns = () => {
    isCircleTurn = !isCircleTurn;
    setBoardHoverClass();
};

const handleClick = (element) => {
    const cell = element.target;
    const classToAdd = isCircleTurn ? 'o' : 'x';

    placeMark(cell, classToAdd);

    const isWin = verifyVictory(classToAdd);
    const isDraw = verifyDraw();

    if (isWin) {
        endGame(false);
    } else if (isDraw) {
        endGame(true);
    } else {
        swapTurns();

    };
};

start();

restartButton.addEventListener('click', start);