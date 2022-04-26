function dataFinder(data) {
  // Write your code here

  const find = (minRange, maxRange, value) => {
    try {
      const res = data.includes(value, minRange);
      return res;
    } catch (e) {
      return "Invalid range";
    }
  };
  return find;
}

// function dataFinder(data) {
//     // Write your code here

//    const find = (minRange, maxRange, value) => {
//         try {
//             if (maxRange >= data.length) {
//                 throw new Error("Error: Invalid range")
//                      return "Error: Invalid range"
//     }
//    }
//    return find
// }
