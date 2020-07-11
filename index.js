import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final */
const final2014 = fifaData.filter((e) => {
    return e.Year === 2014 && e.Stage === "Final";
});
console.log(final2014[0]["Home Team Name"])
/*(b) Away Team name for 2014 world cup final*/

console.log(final2014[0]["Away Team Name"])
/*(c) Home Team goals for 2014 world cup final*/

console.log(final2014[0]["Home Team Goals"])
/*(d) Away Team goals for 2014 world cup final*/

console.log(final2014[0]["Away Team Goals"])
/*(e) Winner of 2014 world cup final */

console.log(final2014[0]["Win conditions"])


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    const finalsData = data.filter((e) => {
        return e.Stage === "Final";
    });
    return finalsData
};

getFinals(fifaData);
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {

    const years = cb(fifaData).map((Year) => {
        return { 'Year': Year.Year }
    });

    return years

};

getYears(getFinals)
/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(cb) {

    const winners = []
    const winnersTemp = cb(fifaData)

    for (let i = 0; i < winnersTemp.length; i++) {
        if (winnersTemp[i][`Home Team Goals`] > winnersTemp[i][`Away Team Goals`]) {
            winners.push(winnersTemp[i]['Home Team Name'])
        } else {
            winners.push(winnersTemp[i][`Away Team Name`])
        }

    }
    return winners
}

getWinners(getFinals);

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cbYears, cbWinners) {

    const winners = cbWinners(getFinals)
    const years = cbYears(getFinals)

    for (let i = 0; i < years.length; i++) {
        console.log("In", years[i], winners[i], "won the world cup!")
    }
};

getWinnersByYear(getYears, getWinners);

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const averageGoals = []
    function averageNums(num1, num2) {
        var a = ((num1 + num2) / 2)
        return a
    };
    for (let i = 0; i < data.length; i++) {
        data.Push(averageNums())

    }
    console.log(averageGoals)
};

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
