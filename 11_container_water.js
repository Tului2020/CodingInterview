const maxArea = (height) => {
  let _maxArea = 0;
  let right = height.length - 1;
  let left = 0;

  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    _maxArea = Math.max(minHeight * (right - left), _maxArea);
    height[left] > height[right] ? right-- : left++;
  }

  return _maxArea;
}






console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

