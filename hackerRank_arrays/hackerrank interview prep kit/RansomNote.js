function checkMagazine(magazine, note) {
  // Write your code here
  let answer = "Yes";

  for (let x = 0; x < note.length; x++) {
    let ind = magazine.indexOf(note[x]);
    if (ind < 0) {
      console.log("No");
      return;
    }
    magazine.splice(ind, 1);
    answer = "Yes";
  }

  console.log(answer);
  return;
}

let magazine = ["give", "me", "one", "grand", "today", "night"];
let note = ["give", "one", "grand", "today"];
checkMagazine(magazine, note);
