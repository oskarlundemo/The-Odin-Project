



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


export async function initializeUI(data) {
    const allElements = Array.from(
        document.querySelectorAll('.currentDay *')); // Selects all child elements

    const table = document.querySelector('table');
    const headerWeahter = document.querySelector('.currentDay');
    table.classList.remove('hidden');
    headerWeahter.classList.remove('hidden');

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(element => {
        if (element.tagName !== 'HEADER')
        element.classList.remove('hidden');
    })

    allElements.forEach(element => {
        if (element.tagName === 'IMG')
            element.src = imageSelector(data.currentConditions.conditions)

        if (element.tagName === 'H1')
            element.textContent = data.city + ', ' + data.country;

        if (element.tagName === 'H2')
            element.textContent = data.currentConditions.temp + '°C';

        if (element.tagName === 'P' && element.id === 'description')
            element.textContent = data.currentConditions.conditions;

        if (element.id === 'highest')
            element.textContent = 'H: ' + data.currentConditions.maxt + '°C / ';

        if (element.id === 'lowest') {
            element.textContent = 'L: ' + data.currentConditions.mint + '°C';
        }
    });

    const upcomingProjections = document.querySelector('.weatherContent')

    for (const day of data.futureProjection) {

        const projectionContainer = document.createElement('div');
        projectionContainer.classList.add('projectionContainer');

        const date = document.createElement('h3');
        date.textContent = parseTimeString(day.datetimeStr);

        const icon = document.createElement('img');
        icon.src = await imageSelector(day.conditions); // Use returned markup

        const temp = document.createElement('p');
        temp.attributes = 'temp';
        temp.textContent = `H: ${day.maxt} °C / L: ${day.mint} °C`;

        projectionContainer.append(date);
        projectionContainer.append(icon);
        projectionContainer.append(temp);

        upcomingProjections.append(projectionContainer);
    }

}


function parseTimeString (timeStr) {
    const [year, month] = timeStr.split('-').map(Number);
    const day = timeStr.split('-')[2].split('T')[0];
    const date = new Date(Date.UTC(year, month - 1, day));

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekdays[date.getUTCDay()];
}



function imageSelector(description) {
    return description.toLowerCase().includes('sun') ? './icons/sun.svg' :
        description.toLowerCase().includes('cloud') ? './icons/cloud.svg' :
            description.toLowerCase().includes('rain') ? './icons/rain.svg' :
                description.toLowerCase().includes('snow') ? './icons/snow.svg' :
                    './icons/sun.svg';
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
        menu.classList.toggle('active');
        const subMenu = document.querySelector('.sub-menu');
        const svg = menu.lastElementChild

        subMenu.classList.toggle('show');
        svg.classList.toggle('rotate');
    })
})



