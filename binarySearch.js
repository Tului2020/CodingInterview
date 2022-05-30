const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    const midValue = arr[mid];

    if (midValue === target) {
      return mid;
    } else if (target < midValue) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return null;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 55));
