



$(document).ready(function () {


    let totalSum = 0;
    let currentNumbers = ''

    let secondString = '';
    let currentOperator = '';


    $('.button').on('click', function (e) {

        if (currentNumbers !== null) {
            secondString += this.id;
        }

        currentNumbers += this.id.toString();
        $('#displayNumbers').text(currentNumbers);

    });


    $('.operation').on('click', function (e) {


        $('#displayNumbers').text('');
        currentOperator = this.id;

        console.log(currentOperator)
    })






});