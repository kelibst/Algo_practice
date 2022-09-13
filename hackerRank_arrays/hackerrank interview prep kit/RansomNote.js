function checkMagazine(magazine, note) {
  // Write your code here
  // console.log(magazine)
  // console.log(note)
  let answer = "Yes";
  if (note.length > magazine.length) {
    console.log("No");
    return;
  }

  for (let x = 0; x < note.length; x++) {
    if (!magazine.includes(note[x], x)) {
      console.log("No");
      return;
    }
  }

  console.log(answer);
  return;
}

let magazine = ["give", "me", "one", "grand", "today", "night"];
let note = ["give", "one", "grand", "today"];
checkMagazine(magazine, note);
