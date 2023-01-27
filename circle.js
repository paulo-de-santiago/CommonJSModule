//Implementation detail
const _radius = new WeakMap();

//Public interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radius " + _radius.get(this));
  }
}

module.exports = Circle; //Object that is exported
//With more than one class
//module.exports.Square = Square;
