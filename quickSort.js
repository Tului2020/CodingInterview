
const quickSort = (unsortedArr) => {
  if (unsortedArr.length === 0) return [];

  const left = [];
  const right = [];
  const pivot = unsortedArr[0];

  for (let i = 1; i < unsortedArr.length; i++) {
    (unsortedArr[i] < pivot ? left : right).push(unsortedArr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const unsortedArr = [21, 3, 123, 12, 3, 21, 32, 13, 21, 3, 123, 124120, 213, 210];
console.log(JSON.stringify(unsortedArr));
const sortedArr = quickSort(unsortedArr);
console.log(JSON.stringify(sortedArr));


