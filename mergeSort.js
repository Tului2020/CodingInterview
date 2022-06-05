const mergeSort = (unsortedArr) => {
  if (unsortedArr.length < 2) return unsortedArr;

  const midIdx = Math.floor(unsortedArr.length / 2);
  const left = mergeSort(unsortedArr.slice(0, midIdx));
  const right = mergeSort(unsortedArr.slice(midIdx));

  return mergeHelper(left, right);
}


const mergeHelper = (leftArr, rightArr) => {
  const mergedArray = [];

  while (leftArr.length && rightArr.length) {
    mergedArray.push((leftArr[0] > rightArr[0] ? rightArr : leftArr).shift());
  }

  return mergedArray.concat(leftArr).concat(rightArr);
}

console.log(mergeSort([34, 321, 4, 324, 1, 31, 4, 32, 432, 14, 3, 214, 31, 2]));
console.log(mergeSort([4, 8, 7, 2, 11, 1, 3]));






