

import {Forecast} from "./forecast.js";
import {getData} from "./data.js";


document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.searchBar').addEventListener('keydown',  event => {
        if (event.key === 'Enter')
            getData(document.querySelector('.searchBar').value);
    })

    document.querySelector('.searchBtn').addEventListener('click', () => {
        getData(document.querySelector('.searchBar').value);
    })

})