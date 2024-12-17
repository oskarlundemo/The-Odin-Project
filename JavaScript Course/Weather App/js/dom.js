



export function swipeHeader () {
    const header = document.querySelector('header');
    header.classList.add('swipeRight');
    header.classList.add('hidden');
}

export function invalidInput (errorMsg) {
    const input = document.querySelector('.searchBar');
    input.value = '';
    input.placeholder = errorMsg;
    input.classList.toggle('errorShake')

    setTimeout(() => {
        input.classList.remove('errorShake');
        input.placeholder = 'Enter a location';
    }, 2000);
}


export function initializeUI (data) {
    const allElements = Array.from(
        document.querySelectorAll('.currentDay *')); // Selects all child elements

    console.log(data.currentConditions.conditions);
    imageSelector(data.currentConditions.conditions)

    allElements.forEach(element => {
        if (element.tagName === 'H1')
            element.textContent = data.city + ', ' + data.country;

        if (element.tagName === 'H2')
            element.textContent = data.currentConditions.temp + '°C';

        if (element.tagName === 'P' && element.id === 'description')
            element.textContent = data.currentConditions.conditions;

        if (element.id === 'highest')
            element.textContent = 'H: ' + data.currentConditions.maxt + '°C / ';

        if (element.id ==='lowest') {
            element.textContent = 'L: '+ data.currentConditions.mint + '°C';
        }

    });

    console.log(allElements); // Array of elements inside .currentDay
}

async function imageSelector(description) {
    const srcWeather = document.querySelector('.currentDay').firstElementChild;
    if (description.toLowerCase().includes('sun')) {
        srcWeather.innerHTML = await switchSvg('./icons/sun.svg')
        srcWeather.style.fill = 'yellow';
    }
    else if (description.toLowerCase().includes('cloud')) {
        srcWeather.innerHTML = await switchSvg('./icons/cloud.svg')
        srcWeather.style.fill = 'grey';
    }

    else if (description.toLowerCase().includes('rain'))
        srcWeather.innerHTML = await switchSvg('./icons/rain.svg')
    else if (description.toLowerCase().includes('snow'))
        srcWeather.innerHTML = await switchSvg('./icons/snow.svg')
    else {
        srcWeather.innerHTML = await switchSvg('./icons/sun.svg')
        srcWeather.style.fill = 'yellow';
    }
}


async function switchSvg (svgFilePath) {
    try {
        const response = await fetch(svgFilePath);  // Fetch the SVG file
        const svgSoruce = await response.text();
        let path = svgSoruce.split('>');

        return path[1] + path[2] + '>';
    } catch (err) {
        console.error('Error loading SVG:', err);
    }
}



document.addEventListener('DOMContentLoaded', () => {

    const sideBar = document.getElementById('menuIcon');
    sideBar.addEventListener('click', () => {
        const menu = document.querySelector('.sidebar');
        const ul = document.querySelector('.dropDown')
        ul.classList.toggle('show')
        menu.classList.toggle('open');
    })

    const menu = document.querySelector('.dropdown-btn');
    menu.addEventListener('click', (ev) => {
        const subMenu = document.querySelector('.sub-menu');
        const svg = menu.lastElementChild

        subMenu.classList.toggle('show');
        svg.classList.toggle('rotate');
    })
})



