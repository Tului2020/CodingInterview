const threeSum = (nums, target = 0) => {
  const results = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const _target = target - nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[left] + nums[right];
      if (_target < sum) {
        right--;
      } else if (_target > sum) {
        left++;
      } else {
        results.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (nums[right] === nums[right + 1]) right--;
        while (nums[left] === nums[left - 1]) left++;
      }
    }
  }

  return results;
}



console.log(threeSum([-1, 0, 1, 2, -1, -4]));


