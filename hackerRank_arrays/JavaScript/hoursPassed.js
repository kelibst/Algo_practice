function hoursPassed(t1, t2) {
  const regex = /([^:]+)/;
  let l1Num = Number(t1.match(regex)[0]);
  let l2Num = Number(t2.match(regex)[0]);

  if (
    (t1.includes("AM") && t2.includes("AM")) ||
    (t1.includes("PM") && t2.includes("PM"))
  ) {
    if (l2Num > l1Num) {
      let res = l2Num - l1Num;
      return `${res} hours`;
    }
    let res = l2Num - l1Num + 12;
    return `${res} hours`;
  } else if (t1.includes("AM") && t2.includes("PM")) {
    let res = 12 - l1Num + l2Num;
    return `${res} hours`;
  } else if (t1.includes("PM") && t2.includes("AM")) {
    let res = 12 - l1Num + (12 - l2Num);
    return `${res} hours`;
  }
  return "No time has passed.";
}

// both is am or pm
// 8am 10am 1pm 5pm

//1 am another pm
//11 am 10pm
// 12-t1 = 1 + t2

// 1pm another am
// t1= 9pm t2 = 4am
// 9-12 + 12 - 4
