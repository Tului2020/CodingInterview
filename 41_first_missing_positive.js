const firstMissingPositive = (nums) => {
  const numHash = {};
  let max = 0;

  nums.forEach(num => {
    numHash[num] = true;
    max = Math.max(num, max);
  });

  for (let i = 1; i <= max; i++) {
    if (!numHash[i]) return i;
  }

}

console.log(firstMissingPositive([7, 8, 9, 11, 12]));




