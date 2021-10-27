function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i === 0; i--) {
    console.log(str[i]);
    newStr = newStr + str[i];
  }
  return newStr;
}

function calculateFactors(arr, target) {
  let val;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < target) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] < target) {
          val = arr[i] + arr[j];
          if (val === target) {
            return [i + 1, j + 1];
          }
        }
      }
    }
  }
}

console.log(calculateFactors([2, 7, 11, 15], 9));
