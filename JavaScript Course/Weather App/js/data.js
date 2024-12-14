



export class Data {

    constructor (location) {
        this.data = getData(location)
    }
}



async function getData(location) {
    const apiKey = 'W4UHL2984MKFPDC9W65DSRR6Z';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&contentType=json&unitGroup=metric&key=${apiKey}&locations=${encodeURIComponent(location)}`;

    try {
        const response = await fetch(url, {"method": "GET",});
        const weatherData = await response.json();
        console.log(weatherData);
        return weatherData;
    } catch (err) {
        console.error('Error:', err);
    }
}