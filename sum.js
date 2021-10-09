module.exports ={
    Count: Array.prototype.count = function(predicate = obj => true) {
        return this.filter(predicate).length;
    },
    
    One: function firstLancerOne(rolls){
        return this.Count(rolls, 1)
    },
    
    Two: function firstLancerTwo(rolls) {
        return this.Count(rolls, 2)
    },

    Three: function firstLancerThree(rolls) {
        return this.Count(rolls, 3)
    },

    Four: function firstLancerFour(rolls) {
        return this.Count(rolls, 4)
    },

    Five: function firstLancerFive(rolls) {
        return this.Count(rolls, 5)
    },

    Six: function firstLancerSix(rolls) {
        return this.Count(rolls, 6)
    },

    Count: function calculateNumber(rolls, value){
        let test = rolls.count(dice => dice == value);
        return value * test;
    },
}