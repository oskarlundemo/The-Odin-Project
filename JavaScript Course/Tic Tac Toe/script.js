


const startingField = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '' ]
]



class Player {
    constructor (name, symbol) {
        this.name = name;
        this.score = 0;
        this.symbol = symbol;
    }
}

const turnDecider = document.getElementById('turnSelector');
const playeroneHeader = document.getElementById('p1');
const playerTwoHeader = document.getElementById('p2');

class GameLogic {


    constructor(player1, player2, gamePlan) {
        this.player1 = player1;
        this.player2 = player2;
        this.gamePlan = gamePlan;
        this.cells = document.querySelectorAll('.cell');
        this.initializeBoard();
        this.currentPlayer = this.player1;
    };


    initializeBoard() {
        this.cells.forEach((cell, index) => {
            cell.addEventListener('click', () => this.handleMove(cell));
        });

        playeroneHeader.textContent = this.player1.name;
        playerTwoHeader.textContent = this.player2.name;
    }

    handleMove(cell) {

        const row = cell.id[0];
        const col = cell.id[1];

        if (this.gamePlan[row] [col] === '') {
            cell.textContent = this.currentPlayer.symbol;
            this.gamePlan[row][col] = this.currentPlayer.symbol;
        }

        if (this.winningMove(this.currentPlayer)) {
            this.currentPlayer.score++;
            alert(`${this.currentPlayer.name} wins!`);
            this.resetBoard();
        } else {
            this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1
        }

        if (this.gamePlan.every(row => row.every(cell => cell !== ''))) {
            alert('Game Over, draw!');
            this.resetBoard();
        }

        console.log(this);
    }

    resetBoard() {
        this.gamePlan = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.cells.forEach(cell => cell.textContent = '');
    }


    winningMove(player) {

        const rowWin = (player) => {

            for (let row of this.gamePlan) {
                if (row.every(cell => cell === player.symbol)) {
                    return true;
                }   else {
                    return false;
                }
            }
        }

        const columnWin = (player) => {
            for (let i = 0; i < this.gamePlan[0].length; i++) {
                if (this.gamePlan[1][i] === player.symbol
                    && this.gamePlan[2] [i] === player.symbol
                    && this.gamePlan[0] [i] === player.symbol)
                    return true;
            }
            return false;
        }

        const diagonalWin = (player) => {
            if ((this.gamePlan[0] [0] === player.symbol
                    && this.gamePlan[1] [1] === player.symbol
                    && this.gamePlan [2] [2] === player.symbol)
                || (this.gamePlan [0] [2] === player.symbol
                    && this.gamePlan[1] [1]
                    && this.gamePlan [2] [1] === player.symbol))
                return true;
            else {
                return false;
            }
        }

        return rowWin(player) || columnWin(player) || diagonalWin(player);
    }
}





document.addEventListener('DOMContentLoaded', function (e) {


    const player1 = new Player();
    const player2 = new Player();

    const game = new GameLogic(player1, player2, startingField);


    const firstUsername = document.getElementById('player1');
    const secondUsername = document.getElementById('player2');
    const startButton = document.getElementById('startBtn');
    const overlay = document.getElementById('overlay');
    const greetingsMenu = document.getElementById('userGreeting');
    const spinBtn = document.getElementById('spinBtn');
    const spinner = document.getElementById('spinner');
    const wheel = document.getElementById('wheel');
    const winnerPoint = document.getElementById('arrow');



    spinBtn.addEventListener('click', function (e) {

        const totalDegrees = Math.floor((Math.random() * 2000))
        wheel.style.transform = `rotate(${totalDegrees}deg)`;

        const firstDraw = totalDegrees % 360;
        const draw = document.getElementById('currentPlayer');
        const turnDecider = document.getElementById('turnSelector');

        player1.name = firstUsername.value;
        player2.name = secondUsername.value;

        setTimeout(() => {

            if (firstDraw > 180) {
                game.currentPlayer = player2;
                draw.textContent = player2.name;
            } else {
                game.currentPlayer = player1;
                draw.textContent = player1.name;
            }

            spinner.classList.remove('active');
            overlay.classList.remove('active');
            winnerPoint.classList.remove('active');
            turnDecider.classList.add('active');

        }, 4000);

    })

    startButton.addEventListener('click', function (e) {
        e.preventDefault();
        greetingsMenu.classList.remove('active');

        player1.name = firstUsername.value;
        player2.name = secondUsername.value;
        player1.symbol = 'X';
        player2.symbol = 'O';

        const circleOne = document.getElementById("playerOneName")
        circleOne.textContent = player1.name;

        const circleTwo = document.getElementById("playerTwoName")
        circleTwo.textContent = player2.name;

        spinner.classList.add('active');
        spinBtn.classList.add('active');
        winnerPoint.classList.add('active');
    })

})
