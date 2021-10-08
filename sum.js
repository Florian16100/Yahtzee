const { it } = require("@jest/globals");
const { assert } = require("console");

Array.prototype.count = function(predicate = obj => true) {
    return this.filter(predicate).length;
  };

function firstLancerOne(rolls){
    return calculateNumber(rolls, 1)
}


function calculateNumber(rolls, value){
    console.log(rolls)
    let test = rolls.count(dice => dice == value);
    return value * test;
}


module.exports = firstLancerOne;

