Rectangle.prototype.area = function (w, h) {
  return this.w * this.h;
};

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
  constructor(param) {
    super();
    this.w = param;
    this.h = param;
  }
}
