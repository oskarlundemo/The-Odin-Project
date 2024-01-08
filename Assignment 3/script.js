

$(document).ready(function () {

    let x;
    let y;


    let mouseDown = 0;

    let colorPicker = $('#color');
    let pickedColor;

    let sizePicker = $('#pixels');
    let amountPixels;

    let clrBtn = $('#clearBtn');


    clrBtn.on('mouseover', function(e) {
        $(this).css('font-weight','800')

        clrBtn.on('mouseleave', function(e) {
            $(this).css('font-weight',"")
        })
    })

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

        const boxWidth = $('#boxArea').width();
        const boxHeight = $('#boxArea').height();

        for (let i = 0; i < (pixels * pixels); i++) {
            $('#boxArea').append($('<div class="grid" ></div>'));
        }


        $('.grid').css('height', boxHeight / pixels);
        $('.grid').css('width', boxWidth / pixels);

    }

    colorPicker.on('input', function (e) {
        pickedColor = e.target.value;
        $('#colorInfo').css('color', pickedColor);
    });


    $('#boxArea').on('mouseenter', '.grid',function (e) {

        x = e.clientX;
        y = e.clientY;

        $(this).css("background-color", pickedColor);
        
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


