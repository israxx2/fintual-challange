import moment from "moment";

var dateBase = moment('31/12/1999', 'DD/MM/YYYY').utcOffset(0);
const numberOfElements = (365 * 22);

let arrayOfStocks = [];

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * @param {Integer} min 
 * @param {Integer} max 
 * @returns {Float}
 */
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

//Generate seed
for (let i = 0; i <= numberOfElements; i++) {
    let stock = {
        "date": dateBase.add(1, 'day').toDate(),
        "price": getRandom(10, 50) + i
    }
    console.log(stock);
    arrayOfStocks.push(stock);
}

export default arrayOfStocks;