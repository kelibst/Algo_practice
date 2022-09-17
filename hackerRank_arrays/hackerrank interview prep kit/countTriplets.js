function countTriplets(arr, r) {
  let totalCount = 0;
  let possiblilities = {};
  let combos = {};

  arr.forEach((number) => {
    totalCount += combos[number] || 0;
    const nextNumber = number * r;
    combos[nextNumber] =
      (combos[nextNumber] || 0) + (possiblilities[number] || 0);
    possiblilities[nextNumber] = (possiblilities[nextNumber] || 0) + 1;
  });

  console.log(totalCount);
  return totalCount;

  //   let totalTriplets = 0;
  //   let totalCombo = 0;
  //   let resArr = [
  //     { value: arr[0], count: 0 },
  //     { value: arr[0] * r, count: 0 },
  //     { value: arr[0] * r * r, count: 0 },
  //   ];
  //   arr.forEach((ele, ind) => {
  //     if (ele === resArr[resArr.length - 3].value) {
  //       resArr[resArr.length - 3].count += 1;
  //     }
  //     if (ele === resArr[resArr.length - 2].value) {
  //       resArr[resArr.length - 2].count += 1;
  //     }
  //     if (ele === resArr[resArr.length - 1].value) {
  //       resArr[resArr.length - 1].count += 1;
  //     }
  //     if (resArr[resArr.length - 1].count) {
  //       resArr.push({ value: resArr[resArr.length - 1].value * r, count: 0 });
  //     }
  //   });
  //   resArr.forEach((val) => {
  //     if (val.count > 1) {
  //       totalCombo += val.count;
  //     }
  //   });
  //   totalTriplets = resArr.length - 3 || 1;
  //   console.log(totalTriplets * totalCombo);
  //   return totalTriplets * totalCombo;
}
const arr = [1, 2, 2, 4];
const r = 2;
const arr1 = [1, 5, 5, 25, 125];
const arr2 =
  "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1";
const r1 = 5;
const r2 = 1;

countTriplets(arr, r);
countTriplets(arr1, r1);
countTriplets(
  arr2.split(" ").map((x) => +x),
  r2
);

//https://www.hackerrank.com/challenges/count-triplets-1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
// console.log();
