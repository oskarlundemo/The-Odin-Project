import {Forecast} from "./forecast.js";
import {invalidInput, initializeUI} from "./dom.js";



export async function getData(input, unit) {
    const apiKey = 'W4UHL2984MKFPDC9W65DSRR6Z';
    const testUnit = 'metric';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&contentType=json&unitGroup=${testUnit}&key=${apiKey}&locations=${encodeURIComponent(input)}`;

    try {
        const response = await fetch(url, {"method": "GET",});
        const weatherData = await response.json();
        let forecast = await new Forecast(weatherData, input)
        await initializeUI(forecast);

        console.log(forecast);
        return forecast;
    } catch (err) {
        invalidInput('Invalid input');
        console.error('Error:', err);
    }
}