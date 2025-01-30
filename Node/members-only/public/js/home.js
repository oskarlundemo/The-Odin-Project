



document.addEventListener('DOMContentLoaded', () => {

    const newPostButton = document.querySelector('.create-post');
    const popUpModule = document.querySelector('.pop-up-box');
    const overlay = document.querySelector('.overlay');
    const closeIcon = document.querySelector('.close');

    newPostButton.addEventListener('click', () => {
        popUpModule.classList.add('show');
        overlay.classList.add('show');

        overlay.addEventListener('click', function(){
            popUpModule.classList.remove('show');
            overlay.classList.remove('show');
        })
    })

    closeIcon.addEventListener('click', function(){
        popUpModule.classList.remove('show');
        overlay.classList.remove('show');
    })
})