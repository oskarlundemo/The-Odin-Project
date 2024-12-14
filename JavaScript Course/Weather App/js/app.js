

import {Data} from "./data.js";
import {swipeRight} from "./dom.js";


document.addEventListener('DOMContentLoaded', function () {


    document.querySelector('.searchBtn').addEventListener('click', function () {
        let location = document.querySelector('.searchBar').value;
        swipeRight();

        // const data = new Data(location);
    })

})