const LancerUn = require("./sum");
const LancerDeux = require("./sum");
const LancerTrois = require("./sum");
const LancerQuatre = require("./sum");
const LancerCinq = require("./sum");
const LancerSix = require("./sum");

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

  describe.each(dataTwo)(`nombre de deux `, (two) => {
    it(`le résultat ${two.rolls} correspond à ${two.result}`, () => {
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
        rolls: [1, 3, 3, 2, 4],
        result: 6,
    }
  ];

  describe.each(dataThree)(`nombre de trois `, (three) => {
    it(`le résultat ${three.rolls} correspond à ${three.result}`, () => {
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
        rolls: [1, 1, 2, 6, 5],
        result: 0,
    },
    {
        rolls: [1, 3, 4, 2, 4],
        result: 8,
    }
  ];

  describe.each(dataFour)(`nombre de quatre `, (four) => {
    it(`le résultat ${four.rolls} correspond à ${four.result}`, () => {
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
        rolls: [1, 3, 5, 2, 5],
        result: 10,
    }
  ];

  describe.each(dataFive)(`nombre de cinq `, (five) => {
    it(`le résultat ${five.rolls} correspond à ${five.result}`, () => {
      const result = LancerCinq.Five(five.rolls);
      expect(result).toBe(five.result);
    });
  });
  
  const dataSix = [
    {
        rolls: [1, 2, 3, 4, 6],
        result : 6,
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

  describe.each(dataSix)(`nombre de six `, (six) => {
    it(`le résultat ${six.rolls} correspond à ${six.result}`, () => {
      const result = LancerSix.Six(six.rolls);
      expect(result).toBe(six.result);
    });
  });