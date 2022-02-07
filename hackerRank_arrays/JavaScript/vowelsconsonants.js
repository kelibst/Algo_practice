function vowelsAndConsonants(s) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vow = [];
  let consonants = [];

  for (let x of s) {
    vowels.includes(x) ? vow.push(x) : consonants.push(x);
    // console.log(x)
  }
  // console.log(vow)
  for (let x of vow) {
    console.log(x);
  }
  for (let x of consonants) {
    console.log(x);
  }
}
