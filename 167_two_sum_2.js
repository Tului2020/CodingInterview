const twoSum = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] === target) return [left + 1, right + 1];
    if (nums[left] + nums[right] > target) right--;
    else left++;
  }

  return [-1, -1];
}

console.log(twoSum([2, 7, 11, 15], 9))
