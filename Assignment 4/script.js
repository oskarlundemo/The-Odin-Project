



$(document).ready(function () {

    let currentOperator = '';

    let currentNumbers = ''
    let secondString = '';

    let totalSum = 0;


    $('#reset').on('click', function (e) {

        $('#displayNumbers').text('0');

        currentNumbers = '';
        secondString = '';
    });

    $('.button').on('click', function (e) {

        if (ContainsOperator(currentNumbers)) {
            secondString += this.id;
            $('#displayNumbers').text(secondString);
        } else {
            currentNumbers += this.id.toString();
            $('#displayNumbers').text(currentNumbers);
        }

    });


    $('#sum').on('click', function (e) {

        $('.operation').css('background-color', "");
        totalSum = StringToNumber(currentNumbers, secondString, currentOperator)

        $('#displayNumbers').text(totalSum.toString());
        secondString = '';
        currentNumbers = totalSum;
    });


    function StringToNumber (firstString, secondString, operator) {

        let firstSeq = parseFloat(firstString);  // Use parseFloat for floating-point numbers
        let secondSeq = parseFloat(secondString);

        let result = 0;

        switch (operator) {
            case '+':
                result = firstSeq + secondSeq;
                break;

                case '-':
                    result = firstSeq - secondSeq;
                    break;


                case '*':
                 result = firstSeq * secondSeq;
                 break;


                case '/':
                    result = firstSeq / secondSeq;
                    break;


                    case '':
                        result = 0;
                        break;
            default:
                console.log('Invalid operator');
                break;
        }

        return result;
    }


    $('.operation').on('click', function (e) {

        $('.operation').css('background-color', "");

        $(this).css('background-color', 'darkorange');

        currentOperator = this.id;

        currentNumbers = currentNumbers + currentOperator;
    });

    function ContainsOperator (stringOfNumbers) {
        return /\+|-|\*|\//.test(stringOfNumbers);
    }
});