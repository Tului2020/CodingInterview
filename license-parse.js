var licenseKeyFormatting = (s, k) => {
  const parsedString = s.replace(/-/g, '').toUpperCase();
  const firstStringLength = parsedString.length % k;

  let returnString = parsedString.slice(0, firstStringLength);
  for (let i = firstStringLength; i < parsedString.length; i += k) {
    returnString += (returnString.length ? '-' : '') + parsedString.slice(i, i + k);
  }

  return returnString;
};


// console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4));
// console.log(licenseKeyFormatting('2-5g-3-J', 2));
console.log(licenseKeyFormatting('2-4A0r7-4k', 3));