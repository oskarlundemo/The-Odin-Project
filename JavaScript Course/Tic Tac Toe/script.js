


document.addEventListener('DOMContentLoaded', function (e) {

    const square = document.getElementsByClassName('cell');
    const startButton = document.getElementById('startBtn')

    const overlay = document.getElementById('overlay');
    const greetingsMenu = document.getElementById('userGreeting');

    startButton.addEventListener('click', function (e) {
        e.preventDefault();
        greetingsMenu.classList.remove('active');
    })


    let spinBtn = document.getElementById('spinBtn');
    let wheel = document.getElementById('wheel');

    spinBtn.addEventListener('click', function (e) {
        console.log("Snart spyr jag")
        let number = Math.ceil(Math.random() * 10000)
        wheel.style.transform = "rotate(" + number + "deg)";
        console.log(number);
    })

})