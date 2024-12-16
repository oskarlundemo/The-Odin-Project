import {Data} from "./data.js";




export function start (location) {
    const header = document.querySelector('header');
    header.classList.add('swipeRight');
    header.classList.add('hidden');
    const data = new Data(location);
}

export function toggleSubMenu () {

}
