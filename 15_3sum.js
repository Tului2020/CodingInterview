const threeSum = (nums) => {
  const results = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (0 < i && nums[i] === nums[i - 1]) continue;
    const target = -nums[i];

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[left] + nums[right];
      if (target < sum) {
        right--;
      } else if (target > sum) {
        left++;
      } else {
        results.push([nums[i], nums[left], nums[right]]);
        while(nums[right] === nums[right - 1]) right--;
        while(nums[left] === nums[left + 1]) left++;
        left++;
        right--;
      }
    }
  }

  return results;
}



console.log(threeSum([-1, 0, 1, 2, -1, -4]));


