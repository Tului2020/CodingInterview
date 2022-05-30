[1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

const containsDuplicate = (arr) => arr.some((val, idx) => arr.indexOf(val) !== idx);

const containsDuplicateHash = (arr) => {
  const vals = {};
  var duplicate = false;

  arr.forEach(val => {
    if (vals[val]) {
      duplicate = true;
      return;
    }
    vals[val] = 1;
  });
  return duplicate;
};

console.log(containsDuplicateHash([1, 2, 3, 4]));
