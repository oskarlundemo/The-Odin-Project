


document.addEventListener('DOMContentLoaded', function(){


    const createAccountLink = document.querySelector('.create-account');
    const popUpModule = document.querySelector('.pop-up-box');
    const overlay = document.querySelector('.overlay');
    const closeIcon = document.querySelector('.close');


    const newUserForm = document.querySelector('.add-form');
    const createButton = document.querySelector('.create-button');

    newUserForm.addEventListener('submit', async (e) => {

    });



    closeIcon.addEventListener('click', function(){
        popUpModule.classList.remove('show');
        overlay.classList.remove('show');
    })

    createAccountLink.addEventListener('click', function(e) {
        popUpModule.classList.add('show');
        overlay.classList.add('show');

        overlay.addEventListener('click', function(){
            popUpModule.classList.remove('show');
            overlay.classList.remove('show');
        })
    })
})