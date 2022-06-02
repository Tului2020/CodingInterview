const findDuplicate = (nums) => {
  const numsHash = {};
  for (let i = 0; i < nums.length; i++) {
    if (numsHash[nums[i]]) return nums[i];
    numsHash[nums[i]] = true;
  }
};


console.log(findDuplicate([1, 3, 4, 2, 2]));
