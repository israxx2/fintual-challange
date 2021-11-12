import Stock from "./Stock.js";

import moment from "moment";

export default class Portfolio {
    constructor() { }

    /**
     * Returns the profit of the Portfolio between those dates
     * @param {Date} startDate 
     * @param {Date} endDate 
     * @returns {Float} or null
     */
    static Profit = (startDate, endDate) => {
        try {
            if (!moment(startDate).isValid()) throw new Error(`The start date is invalid`);
            if (!moment(endDate).isValid()) throw new Error(`The date end date is invalid`);

            return Stock.Price(endDate) - Stock.Price(startDate);

        } catch (e) {
            console.log(e.message);
            return null;
        }
    }
}