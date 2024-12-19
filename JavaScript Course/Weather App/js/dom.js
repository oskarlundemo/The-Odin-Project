import {getData} from "./data.js";

export function swipeHeader () {
    const header = document.querySelector('header');
    header.classList.add('swipeRight');
    header.classList.add('hidden');


}

export function invalidInput (errorMsg) {
    const input = document.querySelectorAll('.searchBar');

    input.forEach(input => {
        input.value = '';
        input.placeholder = errorMsg;
        input.classList.toggle('errorShake')
    })

    setTimeout(() => {

        input.forEach(input => {
            input.classList.remove('errorShake');
            input.placeholder = 'Enter a location';
        })
    }, 2000);
}



export async function initializeUI(data) {
    swipeHeader();
    await printCurrentWeather(data);
    showHiddenElements();
    await printWeatherCards(data);

    const fahrenHeit = document.getElementById('fahren');
    const celsius = document.getElementById('celsius');

    fahrenHeit.addEventListener('click', function () {
        if (celsius.checked) {
            celsius.checked = false;
            convertDataToFahrenheit(data);
            fahrenHeit.checked = true;
        }
    });

    celsius.addEventListener('click', function () {
        if (fahrenHeit.checked) {
            convertDataToCelsius(data);
            fahrenHeit.checked = false;
            celsius.checked = true;
        }
    });
}


async function printCurrentWeather(data) {
    const allElements = Array.from(
        document.querySelectorAll('.currentDay *')); // Selects all child elements

    for (const element of allElements) {
        if (element.tagName === 'IMG')
            element.src = await imageSelector(data.currentConditions.conditions); // Await if imageSelector is async

        if (element.tagName === 'H1')
            element.textContent = `${data.city}, ${data.country}`;

        if (element.tagName === 'H2')
            element.textContent = `${Math.round(data.currentConditions.temp)} ${unitParser(data.unit)}`;

        if (element.id === 'description')
            element.textContent = `${data.currentConditions.conditions}`; // Fixed typo and removed the colon

        if (element.id === 'temperatures')
            element.textContent = `H: ${Math.round(data.currentConditions.maxt)} ${unitParser(data.unit)} / L: ${Math.round(data.currentConditions.mint)} ${unitParser(data.unit)}`;
    }
}

function showHiddenElements () {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(element => {
        if (element.tagName !== 'HEADER')
            element.classList.remove('hidden');
    })
}

function convertDataToFahrenheit (data) {

    data.currentConditions.temp = celiusToFahrenheit(data.currentConditions.temp);
    data.currentConditions.maxt = celiusToFahrenheit(data.currentConditions.maxt)
    data.currentConditions.mint = celiusToFahrenheit(data.currentConditions.mint);
    data.unit = unitParser('F');

    data.futureProjection.forEach(temperatures => {
        temperatures.maxt = celiusToFahrenheit(temperatures.maxt);
        temperatures.mint = celiusToFahrenheit(temperatures.mint);
    })

    printWeatherCards(data)
        .then(r => printCurrentWeather(data));
}

function convertDataToCelsius (data) {
    data.currentConditions.temp = fahrenheitToCelsius(data.currentConditions.temp);
    data.currentConditions.maxt = fahrenheitToCelsius(data.currentConditions.maxt)
    data.currentConditions.mint = fahrenheitToCelsius(data.currentConditions.mint);
    data.unit = unitParser('C');

    data.futureProjection.forEach(temperatures => {
        temperatures.maxt = fahrenheitToCelsius(temperatures.maxt);
        temperatures.mint = fahrenheitToCelsius(temperatures.mint);
    })

    printWeatherCards(data)
        .then(r => printCurrentWeather(data));
}


const celiusToFahrenheit = (c) => Math.round((c * 9/5) + 32)
const fahrenheitToCelsius = (f) => Math.round((f - 32) * 5/9)

function unitParser (unit) {
    return unit.includes('C')? '°C' : '°F';
}


function wipeChildren (parent) {
    while (parent.hasChildNodes()) {parent.removeChild(parent.lastChild);}
}

async function printWeatherCards (data) {
    const upcomingProjections = document.querySelector('.weatherContent')

    wipeChildren(upcomingProjections);

    for (const day of data.futureProjection) {

        const projectionContainer = document.createElement('div');
        projectionContainer.classList.add('projectionContainer');

        const date = document.createElement('h3');
        date.textContent = parseTimeString(day.datetimeStr);

        const icon = document.createElement('img');
        icon.src = await imageSelector(day.conditions); // Use returned markup

        const temp = document.createElement('p');
        temp.textContent = `H: ${Math.round(day.maxt)} ${unitParser(data.unit)} / L: ${Math.round(day.mint)} ${unitParser(data.unit)}`;

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

    document.getElementById('newSearch').addEventListener('keydown',  event => {
        if (event.key === 'Enter') {
            getData(document.getElementById('newSearch').value);
            document.getElementById('newSearch').value = '';  // Clear the input field after search.
        }

    })

    document.querySelector('.new searchBtn').addEventListener('click', () => {        getData(document.getElementById('newSearch').value);
        document.getElementById('newSearch').value = '';  // Clear the input field after search.
    })
})