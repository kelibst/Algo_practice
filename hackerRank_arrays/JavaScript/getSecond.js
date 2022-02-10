function getSecondLargest(nums) {
  // Complete the function
  nums = nums.sort((a, b) => a - b).reverse();
  nums = [...new Set(nums)];
  let res = nums.length > 1 ? nums[1] : nums[0];
  return res;
}
// https://www.hackerrank.com/challenges/js10-arrays/problem?isFullScreen=true
