

export class Forecast {

    constructor (data) {
        this.city = data.address.substring(0, data.address.indexOf(','));
        this.country = data.address.substring(data.address.lastIndexOf(',') + 2, data.address.length);
        this.currentConditions = data.values[0];
        this.futureProjection = data.values.splice(1, data.values.length);
    }
}