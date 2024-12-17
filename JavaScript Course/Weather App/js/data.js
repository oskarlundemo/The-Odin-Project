import {Forecast} from "./forecast.js";
import {swipeHeader, invalidInput, initializeUI} from "./dom.js";



export async function getData(input) {
    const apiKey = 'W4UHL2984MKFPDC9W65DSRR6Z';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&contentType=json&unitGroup=metric&key=${apiKey}&locations=${encodeURIComponent(input)}`;

    try {
        const response = await fetch(url, {"method": "GET",});
        const weatherData = await response.json();
        console.log(weatherData);
        swipeHeader();
        let forecast = new Forecast(weatherData.locations?.[input])

        initializeUI(forecast);

        console.log(forecast);
        // Return new Forecast här
        return forecast;
    } catch (err) {
        invalidInput('Invalid input');
        console.error('Error:', err);
    }
}