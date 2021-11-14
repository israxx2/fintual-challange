import moment from "moment";
import totalStocksPerDay from "../store/index.js";

export default class Stock {

    constructor({ date, price }) {
        this.date = date;
        this.price = price;
    }
    /**
     * returns the price based on the date.
     * @param {Date} date 
     * @returns {Float} or null
     */
    static Price(date) {
        try {

            //validates if it is of type Date

            let inputDateInstanceOfMoment = moment(date);
            if (!inputDateInstanceOfMoment.isValid()) throw new Error(`the date ${date} is invalid`);

            let amount = null;
            totalStocksPerDay.forEach(stock => {
                //search the stocks of the input date

                let instanceOfMoment = moment(stock.date);

                if (instanceOfMoment.utcOffset(0).diff(inputDateInstanceOfMoment, 'days') === 0) {
                    amount += stock.price;
                    console.log(`The stock price registered by the date ${inputDateInstanceOfMoment.format('DD/MM/YYYY')} was\x1b[36m ${stock.price}\x1b[0m`);
                }

            });

            //validate if it found a price
            if (!amount) throw new Error("no actions were found on one of the dates indicated");

            return amount;
        } catch (e) {
            console.log(e.message);
            return null;
        }
    }
}
