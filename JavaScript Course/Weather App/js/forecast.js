

export class Forecast {

    constructor (data, input) {
        const locationData = data.locations?.[input];

        if (!locationData) {
            throw new Error('Invalid location');
        }

        this.city = locationData.address.substring(0, locationData.address.indexOf(','));
        this.country = locationData.address.substring(locationData.address.lastIndexOf(',') + 2, locationData.address.length);
        this.currentConditions = locationData.values[0];
        this.futureProjection = locationData.values.splice(1, locationData.values.length);
        this.unit = data.columns?.maxt.unit;
    }
}



