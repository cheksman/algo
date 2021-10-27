function longestSequence(arr = []) {
  let vals = {};
  arr.reduce((prev, curr, ind) => {
    if (ind % 2 === 0) {
      if (curr > prev) vals[ind] = ind;
    } else {
      if (curr < prev) vals[ind] = ind;
    }
    return curr
  }, 0);

  const allVals = Object.values(vals)
  console.log(allVals)
  console.log(vals)

//   return allVals.reduce((prev, curr) => curr - prev > prev ? curr + 1 : prev + 1, 0)
//   return vals;
  
}

const myArr = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8];

console.log(longestSequence(myArr));

function longestOutput(arr) {

}