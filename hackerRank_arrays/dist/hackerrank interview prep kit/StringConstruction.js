function stringConstruction(s) {
    let resArr = s.split("");
    let res = [...new Set(resArr)].length;
    return res;
}
// https://www.hackerrank.com/challenges/string-construction/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
