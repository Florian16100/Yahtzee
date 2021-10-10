const LancerUn = require("./sum");
const LancerDeux = require("./sum");
const LancerTrois = require("./sum");
const LancerQuatre = require("./sum");
const LancerCinq = require("./sum");
const LancerSix = require("./sum");
const LancerBrelan = require("./sum");
const LancerSquare = require("./sum");
const LancerSmallSuite = require("./sum");
const LancerBigSuite = require("./sum");

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

  describe.each(dataOne)(`Nombre de 1 : `, (one) => {
    it(`Le résultat de ${one.rolls} est ${one.result}`, () => {
      const result = LancerUn.One(one.rolls);
      expect(result).toBe(one.result);
    });
  });


  const dataTwo = [
    {
        rolls: [1, 2, 3, 4, 5],
        result : 2,
    },
    {
        rolls: [1, 1, 3, 4, 5],
        result: 0,
    },
    {
        rolls: [1, 2, 2, 4, 5],
        result: 4,
    }
  ];

  describe.each(dataTwo)(`Nombre de 2 : `, (two) => {
    it(`Le résultat ${two.rolls} est ${two.result}`, () => {
      const result = LancerDeux.Two(two.rolls);
      expect(result).toBe(two.result);
    });
  });

  const dataThree = [
    {
        rolls: [1, 2, 3, 4, 5],
        result : 3,
    },
    {
        rolls: [1, 1, 2, 4, 5],
        result: 0,
    },
    {
        rolls: [1, 3, 3, 3, 4],
        result: 9,
    }
  ];

  describe.each(dataThree)(`Nombre de 3 : `, (three) => {
    it(`Le résultat ${three.rolls} est ${three.result}`, () => {
      const result = LancerTrois.Three(three.rolls);
      expect(result).toBe(three.result);
    });
  });


  const dataFour = [
    {
        rolls: [1, 2, 3, 4, 5],
        result : 4,
    },
    {
        rolls: [4, 4, 4, 4, 6],
        result: 16,
    },
    {
        rolls: [1, 4, 4, 2, 4],
        result: 12,
    }
  ];

  describe.each(dataFour)(`Nombre de 4 : `, (four) => {
    it(`Le résultat ${four.rolls} est ${four.result}`, () => {
      const result = LancerQuatre.Four(four.rolls);
      expect(result).toBe(four.result);
    });
  });


  const dataFive = [
    {
        rolls: [1, 2, 3, 4, 5],
        result : 5,
    },
    {
        rolls: [1, 1, 2, 6, 4],
        result: 0,
    },
    {
        rolls: [5, 3, 5, 2, 5],
        result: 15,
    }
  ];

  describe.each(dataFive)(`Nombre de 5 : `, (five) => {
    it(`Le résultat ${five.rolls} est ${five.result}`, () => {
      const result = LancerCinq.Five(five.rolls);
      expect(result).toBe(five.result);
    });
  });
  
  const dataSix = [
    {
        rolls: [1, 6, 6, 4, 6],
        result : 18,
    },
    {
        rolls: [1, 1, 2, 5, 4],
        result: 0,
    },
    {
        rolls: [1, 3, 6, 2, 6],
        result: 12,
    }
  ];

  describe.each(dataSix)(`Nombre de 6 : `, (six) => {
    it(`Le résultat ${six.rolls} est ${six.result}`, () => {
      const result = LancerSix.Six(six.rolls);
      expect(result).toBe(six.result);
    });
  });

  const dataBrelan = [
    {
      rolls: [1,2,3,4,5], 
      result: 0
    },
    {
      rolls: [1,2,1,1,5], 
      result: 10
    },
    {
      rolls: [4,2,4,3,4], 
      result: 17
    },
 ]
 describe.each(dataBrelan)('Résultat pour un Brelan :', ({rolls, result}) => {
     it(`Pour ${rolls} le score est ${result}`, () => {
         const result = LancerBrelan.Brelan('brellan', rolls)
         expect(result).toBe(result);
     });
 });
 
 
 
 const dataSquare = [
     {
       rolls: [1,2,3,4,5], 
       result: 0
      },
     {
       rolls: [1,5,5,5,5], 
       result: 21
      },
     {
       rolls: [3,3,5,3,3], 
       result: 17
      },
 ]
 describe.each(dataSquare)('Résultat pour un carré :', ({rolls, result}) => {
     it(`Pour ${rolls} le resultat est ${result}`, () => {
         const result = LancerSquare.Square('carré', rolls)
         expect(result).toBe(result);
     });
 });

 const dataSmallSuite = [
  {
    rolls: [1, 2, 3, 4, 5], 
    result: 30
  },
  {
    rolls: [3, 5, 2, 5, 4], 
    result: 30
  },
  {
    rolls: [6, 5, 6, 4, 1], 
    result: 0
  },
]

describe.each(dataSmallSuite)('Petite suite', ({rolls, result}) => {
  it(`Pour ${rolls} le resultat est ${result}`, () => {
      const result = LancerSmallSuite.SmallSuite('Petite suite', rolls)
      expect(result).toBe(result);
  });
});

const dataBigSuite = [
  {
    rolls: [1, 2, 3, 4, 5], 
    result: 40
  },
  {
    rolls: [6, 5, 2, 4, 3], 
    result: 40
  },
  {
    rolls: [1, 2, 6, 5, 5], 
    result: 0
  },
]
describe.each(dataBigSuite)('Grande suite', ({rolls, result}) => {
  it(`Pour ${rolls} le resultat est ${result}`, () => {
      const result = LancerBigSuite.BigSuite('Grande suite', rolls)
      expect(result).toBe(result);
  });
});