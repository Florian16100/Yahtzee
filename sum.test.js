const firstLancerOne = require("./sum")

const data = [
    {
        sides: [1, 2, 3, 4, 5],
        result : 1,
    },
    {
        sides: [2, 2, 3, 4, 5],
        result: 0,
    },
  ];

  describe.each(data)(`nombre de un `, (one) => {
    it(`le résultat ${one.sides} correspond à ${one.result}`, () => {
      const result = firstLancerOne(...one.sides);

      expect(result).toBe(one.result);
    });
  });


