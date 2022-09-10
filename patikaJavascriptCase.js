function oddishOrEvenish(n) {
  let digits = n.toString();
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum = sum + parseInt(digits[i]);
  }

  if (sum % 2 == 1) return "Odd";
  else return "Even";
}

console.log(oddishOrEvenish(123));
