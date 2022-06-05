const twoSum = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    sum < target ? left++ : right --;
  }

  return [-1, -1];
}

console.log(twoSum([2, 7, 11, 15], 10));
