

import {Forecast} from "./forecast.js";
import {getData} from "./data.js";


document.addEventListener('DOMContentLoaded', () => {


    let string = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>'
    let parseString = string.split('<')[0];

    console.log(string)

    document.querySelector('.searchBar').addEventListener('keydown',  event => {
        if (event.key === 'Enter')
            getData(document.querySelector('.searchBar').value);
    })

    document.querySelector('.searchBtn').addEventListener('click', () => {
        getData(document.querySelector('.searchBar').value);
    })

})