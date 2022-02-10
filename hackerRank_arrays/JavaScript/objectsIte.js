function getCount(objects) {
  let count = 0;
  for (let val of objects) {
    if (val.x == val.y) count += 1;
  }
  return count;
}
// https://www.hackerrank.com/challenges/js10-count-objects/problem?isFullScreen=true
