// Complete the freqQuery function below.
function freqQuery(queries) {
  let data = {};
  let result = [];
  let resArr = [];
  for (let x = 0; x < queries.length; x++) {
    let command = queries[x][0];
    let val = queries[x][1];
    if (command === 1 && data[val]) {
      data[val] = data[val] += 1;
      result[val] = result[val] += 1;
    } else if (command === 1) {
      data[val] = 1;
      result[val] = 1;
    }

    if (command === 2 && data[val]) {
      data[val] = data[val] -= 1;
      result[val] = result[val] -= 1;
    }

    if (command === 3) {
      // console.log(Object.keys(data))
      if (result.includes(val)) {
        resArr.push(1);
      } else {
        resArr.push(0);
      }
    }
  }

  console.log(resArr);
  return resArr;
}
