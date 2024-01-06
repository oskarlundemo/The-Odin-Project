

$(document).ready(function () {

    let x;
    let y;

    let colorPicker = $('#color');
    let pickedColor;

    let sizePicker = $('#pixels');
    let amountPixels;



    for (let i = 0; i < 16; i++) {
        $('#boxArea').append($('<div class="mouseArea"><div> </div></div>'))
    }

    sizePicker.on('change', function (e) {
        let tmp = e.target.value;
        amountPixels = SizeDivider(tmp)

        $('#sizeInfo').text(amountPixels + ' X ' + amountPixels);
    });


    let childContainer = $('.mouseArea')

    colorPicker.on('input', function (e) {
        pickedColor = e.target.value;
        $('#colorInfo').css('color', pickedColor);

        console.log(pickedColor);
    });


    childContainer.on('mouseenter', function (e) {
        $(this).css("background-color", pickedColor);

        x = e.clientX;
        y = e.clientY;

    });

    childContainer.on('mouseleave', function (e) {
        $(this).css("background-color", "white")
    });


    function Draw () {


    }


    function SizeDivider (inpt) {

        if (inpt > 1 && inpt < 20) {
            return 1;
        } else if (inpt >= 20 && inpt < 40) {
            return 4;
        } else if (inpt >= 40 && inpt < 60) {
            return 16;
        } else if (inpt >= 60 && inpt < 80) {
            return 64;
        } else {
            return 128;
        }
    }
})


