const bubbleSort = (unsortedArray) => {
  const sortedArr = [...unsortedArray];
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < sortedArr.length - 1; i++) {
      if (sortedArr[i] > sortedArr[i + 1]) {
        isSorted = false;
        [sortedArr[i], sortedArr[i + 1]] = [sortedArr[i + 1], sortedArr[i]];
      }
    }
  }
  return sortedArr;
}


console.log(bubbleSort([2, 8, 5, 3, 9, 4, 1]));

