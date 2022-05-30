const maxSubArray = (nums) => {
  let maxVal = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let subMaxVal = 0;
    for (let j = i; j < nums.length; j++) {
      subMaxVal += nums[j];
      maxVal = Math.max(maxVal, subMaxVal);
    }
  }
  return maxVal;
}


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

const maxSubArray2 = (nums) => {
  let currentSubarray = nums[0];
  let maxSubarray = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSubarray = Math.max(nums[i], nums[i] + currentSubarray);
    maxSubarray = Math.max(maxSubarray, currentSubarray);
  }
  return maxSubarray;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
