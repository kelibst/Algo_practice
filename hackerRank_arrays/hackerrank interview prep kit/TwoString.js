function twoStrings(s1, s2) {
  // Write your code here
  let rotatingString = "";
  let receivingString = "";
  if (s1.length > s2.length) {
    rotatingString = s2;
    receivingString = s1;
  } else {
    rotatingString = s1;
    receivingString = s2;
  }
  for (let x = 0; x < rotatingString.length; x++) {
    if (receivingString.includes(rotatingString[x])) {
      console.log("YES");
      return "YES";
    }
  }
  console.log("NO");
  return "NO";
}

//https://www.hackerrank.com/challenges/two-strings/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps&h_r=next-challenge&h_v=zen
