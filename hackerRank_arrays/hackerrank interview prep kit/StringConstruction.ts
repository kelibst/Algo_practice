function stringConstruction(s: string): number {
  let resArr = s.split("");
  let res: number = [...new Set(resArr)].length;
  return res;
}
// https://www.hackerrank.com/challenges/string-construction/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
