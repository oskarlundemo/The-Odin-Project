


document.addEventListener('DOMContentLoaded', function(){
    darkMode();
    toggleAccountCreation();
})


export const darkMode = () => {
    let darkmode = localStorage.getItem('darkmode');
    const themeSwitch = document.getElementById('theme-switch');

    const enableDarkmode = () => {
        document.documentElement.classList.add('darkmode');
        localStorage.setItem('darkmode', 'active');
    }
    const disableDarkmode = () => {
        document.documentElement.classList.remove('darkmode');
        localStorage.setItem('darkmode', null);
    }

    if (darkmode === 'active') enableDarkmode();

    themeSwitch.addEventListener('click', function(){
        darkmode = localStorage.getItem('darkmode');
        darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
    })
}

const toggleAccountCreation = () => {
    const createAccountLink = document.querySelector('.create-account');
    const popUpModule = document.querySelector('.pop-up-box');
    const overlay = document.querySelector('.overlay');
    const closeIcon = document.querySelector('.close');

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
}

