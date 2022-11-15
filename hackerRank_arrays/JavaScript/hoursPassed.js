// function hoursPassed(t1, t2) {
//   const regex = /([^:]+)/;
//   let l1Num = Number(t1.match(regex)[0]);
//   let l2Num = Number(t2.match(regex)[0]);
//   let res = 0;
//   if (
//     (t1.includes("AM") && t2.includes("AM")) ||
//     (t1.includes("PM") && t2.includes("PM"))
//   ) {
//     if (l2Num - l1Num > 0) {
//       res = l2Num - l1Num;
//     } else if (Math.abs(l2Num - l1Num)) {
//       res = 24 - Math.abs(l2Num - l1Num);
//     }
//   } else if (
//     (t1.includes("AM") && t2.includes("PM")) ||
//     (t1.includes("PM") && t2.includes("AM"))
//   ) {
//     res = 12 - l1Num + l2Num;
//   }
//   return res ? `${res} hours` : "No time has passed.";
// }

console.log(hoursPassed("3:00 AM", "9:00 AM"));
console.log(hoursPassed("3:00 AM", "1:00 AM"));
console.log(hoursPassed("2:00 PM", "4:00 PM"));

console.log(hoursPassed("1:00 AM", "3:00 PM"));
console.log(hoursPassed("3:00 PM", "3:00 AM"));

console.log(hoursPassed("12:00 AM", "10:00 PM"));

// // let [strVector, resVector] = [
// //   [
// //     ["3:00 AM", "9:00 AM"],
// //     ["2:00 PM", "4:00 PM"],
// //     ["1:00 AM", "3:00 PM"],
// //     ["2:00 AM", "3:00 PM"],
// //     ["8:00 AM", "8:00 PM"],
// //     ["12:00 AM", "10:00 PM"],
// //     ["1:00 AM", "1:00 AM"],
// //     ["12:00 PM", "12:00 PM"],
// //   ],
// //   [
// //     "6 hours",
// //     "2 hours",
// //     "14 hours",
// //     "13 hours",
// //     "12 hours",
// //     "22 hours",
// //     "No time has passed.",
// //     "No time has passed.",
// //   ],
// // ];
// // for (let i in strVector)
// //   Test.assertSimilar(hoursPassed(...strVector[i]), resVector[i]);

// // both is am or pm
// // 8am 10am 1pm 5pm

// // t1 = 4am t2 = 1am

// //1 am another pm
// //11 am 10pm
// // 12-t1 = 1 + t2

// // 1pm another am
// // t1= 9pm t2 = 4am
// // 9-12 + 12 - 4

function hoursPassed(t1, t2) {
  let t1Num = Number(t1.split(":")[0]);
  let t2Num = Number(t2.split(":")[0]);
  let res = 0;
  if (t1.includes("PM")) {
    t1Num = t1Num + 12;
  }
  if (t2.includes("PM")) {
    t2Num = t2Num + 12;
  }
  if (t1.includes("AM") && t1Num === 12) {
    t1Num = 0;
  }
  if (t2.includes("AM") && t2Num === 12) {
    t2Num = 0;
  }

  if (t2Num < t1Num) {
    t2Num = 24 - t2Num;
  }

  res = t2Num - t1Num;
  return res ? `${res} hours` : "No time has passed.";
}
