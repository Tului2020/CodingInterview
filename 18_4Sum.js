const fourSum = (nums, target = 0) => {
  const results = [];
  nums = nums.sort();
  console.table(nums)

  for (let i = 0; i < nums.length - 3; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if ((j !== i + 1) && nums[j] === nums[j - 1]) continue;
      let left = j + 1;
      let right = nums.length - 1;
      console.log('<------------------------------------->');
      console.log([i, j, left, right]);
      const _target = target - nums[i] - nums[j];
      while (left < right) {
        const sum = nums[left] + nums[right];
        if (_target < sum) {
          right--;
          console.log([i, j, left, right], 'right--', _target, sum);
        } else if (_target > sum) {
          left++;
          console.log([i, j, left, right], 'left++', _target, sum);
        } else {
          results.push([nums[i], nums[j], nums[left], nums[right]]);
          console.log('solution ---->', [i, j, left, right]);
          while (nums[right - 1] === nums[right]) right--;
          while (nums[left + 1] === nums[left]) left++;
          left++;
          right--;
        }
      }
    }
  }

  return results;
}

// console.log(fourSum([1, 0, -1, 0, -2, 2]));
// console.log(fourSum([2, 2, 2, 2, 2], 8));
// console.log(fourSum([0, 4, -5, 2, -2, 4, 2, -1, 4], 12));
console.log(fourSum([-1, 0, -5, -2, -2, -4, 0, 1, -2], -9));
