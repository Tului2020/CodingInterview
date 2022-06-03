const longestConsecutive = (nums) => {
  if (!nums.length) return 0;
  let longestStreak = 1;
  let currentStreak = 1;

  nums = nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    if (nums[i] - nums[i - 1] === 1) {
      currentStreak += 1;
    } else {
      longestStreak = Math.max(currentStreak, longestStreak);
      currentStreak = 1;
    }
  }

  return Math.max(currentStreak, longestStreak);
};


// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));


