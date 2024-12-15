



export function start () {

    const header = document.querySelector('header')
    header.classList.add('swipeRight')
    const sideBar = document.querySelector('aside')
    sideBar.classList.remove('hidden')

    header.classList.add('hidden')
}


document.addEventListener('DOMContentLoaded', function (ev) {


    const sideBar = document.querySelector('aside');

    sideBar.addEventListener('drag', function (ev) {
        console.log(ev.clientX)
    })

})

