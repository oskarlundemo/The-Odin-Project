

$(document).ready(function () {

    let x;
    let y;

    let colorPicker = $('#color');
    let pickedColor;

    let sizePicker = $('#pixels');
    let amountPixels;

    let clrBtn = $('#clearBtn');



    sizePicker.on('change', function (e) {
        let tmp = e.target.value;
        amountPixels = SizeDivider(tmp)

        let boxes = document.querySelectorAll('.grid');
        boxes.forEach(box => {
            box.remove();//removes old grid
        });

        createGrid(amountPixels)

        $('#sizeInfo').text(amountPixels + ' X ' + amountPixels);
    });

    function createGrid (pixels) {
        for (let i = 0; i < (pixels * pixels); i++) {
            $('#boxArea').append($('<div class="grid" ></div>'))

            /**
             *
             *
            grid.classList.add('grid');
            const grid = document.createElement('div')
            const boxSize = 250 / pixels; // creates the dynamic squeres
            grid.style.width = boxSize + 'px';
            grid.style.height = boxSize + 'px';
            $('#boxArea').append(grid);
                */
        }
    }

    colorPicker.on('input', function (e) {
        pickedColor = e.target.value;
        $('#colorInfo').css('color', pickedColor);

        console.log(pickedColor);
    });


    $('#boxArea').on('mousedown', '.grid',function (e) {

        x = e.clientX;
        y = e.clientY;

        $('#boxArea').on('mouseenter', '.grid', function () {

            $(this).css("background-color", pickedColor);
        });
    });

    clrBtn.on('click', function () {

        $('.grid').css('background-color', 'white');
    });

    function SizeDivider (inpt) {

        const inputNumber = parseFloat(inpt);

        if (inputNumber >= 0 && inputNumber < 20) {
            return 1;
        }
        if (inputNumber < 40) {
            return 4;
        }
        if (inputNumber < 60) {
            return 16;
        }
        if (inputNumber < 80) {
            return 64;
        }
        return 128;
    }
})


