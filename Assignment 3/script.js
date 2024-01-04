

$(document).ready(function () {

    let x;
    let y;



    let canvasSize = 17;

    canvasSize = canvasSize - (canvasSize % 4);

    for (let i = 0; i < canvasSize; i++) {
        $('#boxArea').append($('<div class="mouseArea"><div> </div></div>'))
    }

    let childContainer = $('.mouseArea')


    childContainer.on('mouseenter', function (e) {
        $(this).css("background-color", "red");

        x = e.clientX;
        y = e.clientY;

    });

    childContainer.on('mouseleave', function (e) {
        $(this).css("background-color", "white")
    });


})


