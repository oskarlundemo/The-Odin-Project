

$(document).ready(function () {

    let x;
    let y;

    let coolorPicker = $('#favcolor');
    let pickedColor;



    let canvasSize = 17;

    canvasSize = canvasSize - (canvasSize % 4);

    for (let i = 0; i < 16; i++) {
        $('#boxArea').append($('<div class="mouseArea"><div> </div></div>'))

    }

    let childContainer = $('.mouseArea')


    coolorPicker.on('click', CoolorPicker);


    childContainer.on('mouseenter', function (e) {
        $(this).css("background-color", "red");

        x = e.clientX;
        y = e.clientY;

    });

    childContainer.on('mouseleave', function (e) {
        $(this).css("background-color", "white")
    });


    function CoolorPicker () {

        picker = $('#favcolor').val();

        console.log(picker);
    }


})


