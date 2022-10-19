const StringChallenge = (str: string) => {
  let num = Number(str);
  if (num < 0 || num > 5) {
    return [];
  }
  let rating = (Math.round(num * 2) / 2).toFixed(1);
  let res = [];
  let fullStar = Math.floor(Number(rating));
  let empStar = Math.floor(5 - Number(rating));
  if (fullStar) {
    for (let x = 0; x < fullStar; x++) {
      res.push("full");
    }
  }

  if (Math.abs(5 - (fullStar + empStar))) {
    res.push("half");
  }
  for (let x = 0; x < empStar; x++) {
    res.push("empty");
  }
  return res;
};

const form = document.getElementById("form");
const rating = document.querySelector(".rating") as HTMLInputElement | null;
const result = document.querySelector(".result");
let resString = "";
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (rating?.value) {
    let res = StringChallenge(rating.value);
    res.forEach(
      (res) =>
        (resString += `<img src="assets/${res}.webp" class="rate-star" />`)
    );
    result.innerHTML = resString;
  }
});

// console.log(StringChallenge("2.5"));
// console.log(StringChallenge("1.3"));
// console.log(StringChallenge("2.9"));
// console.log(StringChallenge("6"));
// console.log(StringChallenge("1.7"));
