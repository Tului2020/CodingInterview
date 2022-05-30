const twoSum = (nums, target) => {
  const tracker = {};

  for (let i = 0; i < nums.length; i++) {
    if (tracker[nums[i]] > -1) return [tracker[nums[i]], i];
    tracker[target - nums[i]] = i;
  }
}


console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
