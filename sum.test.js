const firstLancerTwo = require("./sum");
const firstLancerOne = require("./sum")

const dataOne = [
    {
        rolls: [1, 2, 3, 4, 5],
        result : 1,
    },
    {
        rolls: [2, 2, 3, 4, 5],
        result: 0,
    },
    {
        rolls: [1, 2, 1, 4, 5],
        result: 2,
    }
  ];

  describe.each(dataOne)(`nombre de un `, (one) => {
    it(`le résultat ${one.rolls} correspond à ${one.result}`, () => {
      const result = firstLancerOne(one.rolls);
      // const result = firstLancerOne([1,2,3,4,5]);

      expect(result).toBe(one.result);
    });
  });


  
// J'essaye autre chose  (qui ne marche pas pour l'instant)

// function Yahtzee {
//     it('Test One', () =>{
//         int tab:Array<number> = {1,4,5,1,1}
//         int value = Yahtzee.isOne(tab)
//         assert.equal(3,value);
//     });
//     it('Test Two', () =>{
//         int tab:Array<number> = {2,5,3,2,2}
//         int value = Yahtzee.isTwo(tab)
//         assert.equal(6,value);
//     });
//     it('Test Three', () =>{
//         int tab:Array<number> = {3,5,3,3,3}
//         int value = Yahtzee.isThree(tab)
//         assert.equal(12,value);
//     }); 
     
//     }