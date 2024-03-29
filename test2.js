const Immutable = require('immutable');

// simply transform the list of animals with leg counts into an object with sum of leg counts
const transform = (fromShape) => {
  // Sums up number of legs using a combination of the reduce method and update method
  const toShape = fromShape.reduce((acc, cur) => acc.update("legs", x => x + cur.get("legs")));
  return toShape;
};

const fromShape = Immutable.fromJS({
  dog: {
    legs: 4,
  },
  cat: {
    legs: 4,
  },
  bird: {
    legs: 2,
  },
  snake: {
    legs: 0,
  },
});

const toShape = Immutable.fromJS({
  legs: 10,
});

module.exports = {
  transform,
  toShape,
  fromShape,
};