

$(document).ready(function () {

    let mouseMove = $('#boxArea');
    mouseMove.on('mouseover', ChangeDivColor);



    for (i = 0; i < 16; i ++) {
        $('#boxArea').append($('<div class="mouseArea"></div>'))

    }

    function ChangeDivColor () {

        let x = 0;
        let y = 0;


        $('.mouseArea').on("mousemove", function (event) {
            x = event.pageX;
            y = event.pageY;

            console.log(event.pageX + ", " + event.pageY);

            let test = TargetedElemnt(x,y);

            test.style.backgroundColor = 'black';
        });


    }

});



function TargetedElemnt (x,y) {


    let target = document.elementFromPoint(x, y);

    if (target === $('mouseArea'))
        alert('hej')

    return target;
}
