/** Fintual Challange 
 * Author: Eduardo I. González T.
 * 
 * Construct a simple Portfolio class that has a collection of Stocks and a "Profit" method that receives 2 
 * dates and returns the profit of the Portfolio between those dates. Assume each Stock has a "Price" method 
 * that receives a date and returns its price.
 * Bonus Track: make the Profit method return the "annualized return" of the portfolio between the given dates.
*/

import moment from 'moment';
import { argv } from 'process';

import Portfolio from './models/Portfolio.js'



let stringStartDate = null;
let stringEndDate = null;


//Search arguments of the console
argv.forEach((val, index) => {
    if (val.includes("--START_DATE=")) stringStartDate = val.substr(13, 10);
    if (val.includes("--END_DATE=")) stringEndDate = val.substr(11, 11);
});

//initialize the dates entered
const startDate = moment(stringStartDate.trim(), 'DD/MM/YYYY').utcOffset(0);
const endDate = moment(stringEndDate.trim(), 'DD/MM/YYYY').utcOffset(0);

//seek the profit
const profit = Portfolio.Profit(startDate.toDate(), endDate.toDate());

if(profit) console.log('\nThe profit is ' + "\x1b[36m "+profit+"\x1b[0m" + (profit <= 0 ? ' :(' : ' :D'));

console.log("\nFor Fintual <3.-")