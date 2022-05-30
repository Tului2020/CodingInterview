const singleNum = (nums) => {
  nums = [...nums.sort(), undefined];

  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) return nums[i];
  }
}

console.log(singleNum([2, 1, 1, 0, 0]));


