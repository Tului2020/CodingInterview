const maxSlidingWindow = (nums, k) => {
  const _maxSlidingWindow = [];
  const tempNums = nums.slice(0, k);

  for (let i = k; i <= nums.length; i++) {
    _maxSlidingWindow.push([...tempNums].sort((a, b) => a - b)[k - 1]);
    tempNums.shift();
    tempNums.push(nums[i]);
  }

  return _maxSlidingWindow;
};



console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// console.log(maxSlidingWindow([4, -2], 2));
console.log(maxSlidingWindow([7, 2, 4], 2));

