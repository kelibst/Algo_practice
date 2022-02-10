class Polygon {
  constructor(array) {
    this.sides = array;
  }

  perimeter = () => this.sides.reduce((total, val) => total + val);
}
// https://www.hackerrank.com/challenges/js10-class/problem?isFullScreen=true
