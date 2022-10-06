const StringChallenge = (str) => {
    let num = Number(str);
    if (num < 0 || num > 5) {
        console.log("wrong number");
        return "Error: wrong number";
    }
    let rating = (Math.round(num * 2) / 2).toFixed(1);
    let res = [];
    let fullStar = Math.floor(Number(rating));
    let empStar = Math.floor(5 - Number(rating));
    console.log(rating, "full");
    if (fullStar) {
        for (let x = 0; x < fullStar; x++) {
            res.push("full");
        }
    }
    console.log(Math.abs(5 - (fullStar + empStar)));
    if (Math.abs(5 - (fullStar + empStar))) {
        res.push("half");
    }
    for (let x = 0; x < empStar; x++) {
        res.push("empty");
    }
    console.log(res.join(" "));
};
StringChallenge("2.5");
StringChallenge("1.3");
StringChallenge("2.9");
StringChallenge("6");
StringChallenge("1.7");
