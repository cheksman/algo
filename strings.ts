// find the maximum occurring character in a given string


// STEPS
// 1. split string into array of characters
// 2. loop through the array
// 3. for every equal character, increment by one

var str = "ogagaochekwupeterthedarklordofdutsealhajiabujanigeriaafrictheworld"

const getMaxChar = (inp) => {
    let letters = {};
    for (let i of inp) {
      if (letters[i] > 0) {
        letters[i] = letters[i] + 1;
      } else {
        letters[i] = 1;
      }
    }
    return Object.keys(letters).reduce((a, b) => letters[a] > letters[b] ? a : b)
  };

console.log(getMaxChar(str))

  const removeDuplicates = (inp: string) : string => {

    const words = inp.split(" ")
    return words.reduce((a, b) : string => {
      if(a.indexOf(b) > -1) {
          return a
      }
      return `${a} ${b}`
    })
  }