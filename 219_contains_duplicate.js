const containsNearbyDuplicate = (nums, k) => {
  for (let i = 0; i < nums.length; i++) {
    for (let _k = 1; _k <= k && i + _k < nums.length; _k++) {
      if (nums[i] === nums[i + _k]) return true;
    }
  }
  return false;
}


console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));