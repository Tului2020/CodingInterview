const lengthOfLongestSubstringKDistinct = (s, k) => {
  if (s.length * k === 0) return 0;
  let [left, right] = [0, 0];
  let maxLength = 1;
  const tracker = {};

  while (right < s.length) {
    // console.log(right, s[right]);
    tracker[s[right]] = right;
    // console.log(tracker);
    if (Object.keys(tracker).length > k) {
      const leftChar = Object.keys(tracker).reduce((_left, iter) => tracker[_left] < tracker[iter] ? _left : iter);
      delete tracker[leftChar];
      // console.log('Math.max(maxLength, left - right)', Math.max(maxLength, right - left));
      maxLength = Math.max(maxLength, right - left);
      left++;
      // console.log('leftChar', leftChar);
    }
    right++;
    // console.log('max', maxLength);
  }
  // console.log(tracker);
  // return maxLength;
  return Math.max(maxLength, right - left);
}


// console.log(lengthOfLongestSubstringKDistinct('loveleetcode', 4));
console.log(lengthOfLongestSubstringKDistinct("abaccc", 2));
console.log(lengthOfLongestSubstringKDistinct("aa", 1));

