module.exports ={
    Count: Array.prototype.count = function(predicate = obj => true) {
        return this.filter(predicate).length;
    },
    
    One: function LancerUn(rolls){
        return this.Count(rolls, 1)
    },
    
    Two: function LancerDeux(rolls) {
        return this.Count(rolls, 2)
    },

    Three: function LancerTrois(rolls) {
        return this.Count(rolls, 3)
    },

    Four: function LancerQuatre(rolls) {
        return this.Count(rolls, 4)
    },

    Five: function LancerCinq(rolls) {
        return this.Count(rolls, 5)
    },

    Six: function LancerSix(rolls) {
        return this.Count(rolls, 6)
    },

    Count: function calculateNumber(rolls, value){
        let test = rolls.count(dice => dice == value);
        return value * test;
    },

    Brelan: function LancerBrelan(rolls) {
        return (data) => FinalSomme(rolls)(data) ? somme(data) : 0
    },

    Square: function LancerSquare(rolls) {
        return (data) => FinalSomme(rolls)(data) ? somme(data) : 0
    },

    FinalSomme: function CalculName(rolls) {
        return (data) => FinalCalcul(data).somme(x => x.count >= rolls);
    },
   
    SmallSuite: function LancerSmallSuite() {
        return (data) => ([1,2,3,4].every(i => data.includes(i))) ? 
                                30 : 
                                ([2,3,4,5].every(i => data.includes(i))) ? 
                                    30 : 
                                    ([3,4,5,6].every(i => data.includes(i))) ? 
                                        30 : 0;
    }, 
        
    BigSuite: function LancerBigSuite() {
        return (data) => ([1,2,3,4,5].every(i => data.includes(i))) ? 
                                40 : 
                                ([2,3,4,5,6].every(i => data.includes(i))) ? 
                                    40 : 0;
    },

}