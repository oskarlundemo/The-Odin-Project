



document.addEventListener('DOMContentLoaded', () => {

    const newPostButton = document.querySelector('.create-post');
    const popUpModule = document.querySelector('.pop-up-box');
    const overlay = document.querySelector('.overlay');
    const closeIcon = document.querySelector('.close');
    const author = document.querySelector('.hidden-input');


    newPostButton.addEventListener('click', () => {
        popUpModule.classList.add('show');
        overlay.classList.add('show');

        overlay.addEventListener('click', function(){
            popUpModule.classList.remove('show');
            overlay.classList.remove('show');
        })
    })



    author.addEventListener('mouseenter', () => {
        const memberContainer = document.createElement('div');
        memberContainer.classList.add('member-container');

        const hiddenForm = document.createElement('form');
        hiddenForm.method = 'post';
        hiddenForm.action = '/home/member';

        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('search-box');
        input.name = 'secret';

        hiddenForm.appendChild(input);
        memberContainer.appendChild(hiddenForm);
        author.replaceWith(memberContainer);


    })



    closeIcon.addEventListener('click', function(){
        popUpModule.classList.remove('show');
        overlay.classList.remove('show');
    })
})