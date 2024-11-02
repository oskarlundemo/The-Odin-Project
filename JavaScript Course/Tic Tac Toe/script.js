

document.addEventListener('DOMContentLoaded', function (e) {


    const firstUsername = document.getElementById('player1')
    const secondUsername = document.getElementById('player2')

    class Player {
        constructor (name) {
            this.name = name;
            this.score = 0;
        }
    }

    const square = document.getElementsByClassName('cell');

    const startButton = document.getElementById('startBtn')
    const overlay = document.getElementById('overlay');
    const greetingsMenu = document.getElementById('userGreeting');


    let spinBtn = document.getElementById('spinBtn');
    let spinner = document.getElementById('spinner');
    let wheel = document.getElementById('wheel');
    let winnerPoint = document.getElementById('arrow');

    spinBtn.addEventListener('click', function (e) {
        console.log("Snart spyr jag")
        let number = Math.ceil(Math.random() * 10000)
        wheel.style.transform = "rotate(" + number + "deg)";
        console.log(number);
    })


    startButton.addEventListener('click', function (e) {
        e.preventDefault();
        greetingsMenu.classList.remove('active');

        const player1 = new Player(firstUsername.value);
        const player2 = new Player(secondUsername.value);

        console.log(player1)
        console.log(player2);


        const circelNameOne = document.getElementById("playerOneName")
        circelNameOne.textContent = player1.name;

        const circelNameTwo = document.getElementById("playerTwoName")
        circelNameTwo.textContent = player2.name;


        spinner.classList.add('active');
        spinBtn.classList.add('active');
        winnerPoint.classList.add('active');


    })



})