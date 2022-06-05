const insertionSort = (unsortedArr) => {
  for (let i = 0; i < unsortedArr.length; i++) {
    const currentItem = unsortedArr[i];
    let j = i - 1;

    while ((j > -1) && (unsortedArr[j] > currentItem)) {
      unsortedArr[j + 1] = unsortedArr[j--];
    }
    unsortedArr[j + 1] = currentItem;

  }
  return unsortedArr;
}


console.log(insertionSort([4, 8, 7, 2, 11, 1, 3]));
