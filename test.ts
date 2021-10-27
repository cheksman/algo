// const myArray = [1, 2, 3, 4, 5]
// myArray.map((item) => console.log(item));
// myArray.forEach((item) => {
//     console.log(item)
// })
// myArray.reduce

// const myObject = { x: 1, y: "hi" }

// Object.keys(myObject).map((key) => console.log(key))
// Object.keys(myObject).forEach((item) => {
//     console.log(item)
// })
// Object.entries(myObject).map((key) => console.log(key[0]))
// Object.(myObject).forEach((item) => {
//     console.log(item)
// })

// Object.values(myObject).map((key) => console.log(key))
// Object.values(myObject).forEach((item) => {
//     console.log(item)
// })
// Object.keys(myObject).forEach((item) => {
//     console.log(item)
// })
// let authors = []
// let bookIds = []
// let titles = []
// const getBooks = () => {
//     return new Promise((resolve) => {
//       resolve([
//         {
//           bookId: 1,
//           author: "bob"
//         },
//         {
//           bookId: 2,
//           author: "sally"
//         }
//       ]);
//     }).
//   };

//   getBooks()

//   const getTitle = (bookId) => {
//     return new Promise((resolve, reject) => {
//       switch (bookId) {
//         case 1:
//           resolve({ title: "Greeting the World" });
//           break;
//         case 2:
//           resolve({ title: "Hello World!" });
//           break;
//         default:
//           reject(new Error("404 - book not found"));
//       }
//     })
//   };

//   bookIds.forEach((id) => {
//     getTitle(id)
//   })

//   const obj = {
//     authors: authors,
//     titles: titles
//   }

//   console.log(obj)

// var str = "ogagaochekwupeterthedarklordofdutsealhajiabujanigeriaafrictheworljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjd";

// const getMaxChara = (inp) => {
//   let letters = {};
//   for (let i in inp) {
//     if (letters[inp[i]] > 0) {
//       letters[inp[i]] = letters[inp[i]] + 1;
//     } else {
//       letters[inp[i]] = 1;
//     }
//   }
//   return Object.keys(letters).reduce((a, b) => letters[a] > letters[b] ? a : b)
// };

// console.log(getMaxChara(str));

// const str2 = "Abe got paid. if Abe was a monster, why did Abe get paid"

// const removeDuplicate = (inp) => {

//   const words = inp.split(" ")
//   return words.reduce((a, b) => {
//     if(a.indexOf(b) > -1) {
//         return a
//     }
//     return `${a} ${b}`
//   })
// }

// console.log(removeDuplicate(str2))

// const a = [1,4,3,2]

// function reverseArray(a) {
//   // Write your code here
//   let revArr = []
//   for( let i of a) {
//    revArr.splice(0, 0, i)
//   }
//   return revArr
// }

// console.log(reverseArray(a))

// const S = "00-44  48 5555 836"

// function rearrangeString(str) {
//   const newStr = String(str).replace(/ |-/g, "");
//   let arr1 = []
//   let arr2 = []
//   let chunk1 = ''
//   let chunk2 = ''

//   if(newStr.length%3 === 1){
//     chunk1 = newStr.slice(0, newStr.length - 5)
//     chunk2 = newStr.slice(newStr.length - 5)
//     arr1 = chunk1.match(/.{3}/g)
//     arr2 = chunk2.match(/.{2}/g)
//     arr1 = [...arr1, ...arr2]
//     chunk1 = arr1.join("-")
//   }
//   if(newStr.length%3 === 2){
//     chunk1 = newStr.slice(0, newStr.length - 3)
//     chunk2 = newStr.slice(newStr.length - 3)
//     arr1 = chunk1.match(/.{3}/g)
//     arr2 = chunk2.match(/.{2}/g)
//     arr1 = [...arr1, ...arr2]
//     chunk1 = arr1.join("-")
//   }
//   if(newStr.length%3 === 0){
//     arr1 = newStr.match(/.{3}/g)
//     chunk1 = arr1.join("-")
//   }

//   return chunk1
// }

// rearrangeString(S)

// const str1 = "I am groot";
// const str2 = "This is";

// function removeFunction(param1, param2) {
//   let param1Arr = param1.toLowerCase().split("");
//   let arr1 = [];
//   param1Arr.forEach((a) => {
//     if (!param2.replace(/ /g, "").toLowerCase().includes(a)) {
//       arr1.push(a)
//     }
//   });
//   return arr1.join("")
// }

// function Delete(strA, strB) {
//   var first = {};
//   var result = [];
//   for (let char of strB.toLowerCase()) {
//     first[char] = first[char] || 0 + 1;
//   }
//   for (let char of strA.replace(/ /g, "").toLowerCase()) {
//     if (!first[char]) {
//       result.push(char);
//     }
//   }

//   return result.join("");
// }

// console.log(Delete(str1, str2));

// const A = []
// const B = []
// const C = ""

// function Solution (par1, par2, par3) {
//   let arr1 = []
//   let final = ""

//   par2.forEach(p => {
//     if(p.includes(par3)) {
//       arr1.push(p)
//     }
//   })

//   final = arr1.reduce((d, e) => {
//     return parseInt(d.slice(d.indexOf(par3))) > parseInt(e.slice(e.indexOf(par3))) ? d : e
//   })

//   return par1[par2.indexOf(final)]
// }

// const getMinChar = (inp) => {
//     let letters = {};
//     for (let i in inp) {
//       if (letters[inp[i]] > 0) {
//         letters[inp[i]] = letters[inp[i]] + 1;
//       } else {
//         letters[inp[i]] = 1;
//       }
//     }
//     return Object.keys(letters).reduce((a, b) => letters[a] < letters[b] ? a : b)
//   };

// const getCharCount = (inp) => {
//     let letters = {};
//     for (let i of inp.toLowerCase()) {
//       if (letters[i] > 0) {
//         letters[i] = letters[i] + 1;
//       } else {
//         letters[i] = 1;
//       }
//     }
//     return Object.entries(letters).map(ite => `${ite[0]}${ite[1]}`).join("")
//   };

//   console.log(getCharCount("aaAbbbcc"))

// function getPerm(n) {
//   let open = "(";
//   let close = ")";
//   for (let index = 0; index < Number(n); index++) {}
// }

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

function getPalindrom(s) {
  let arr1 = [];
  for (const i in s[0]) {
    let chunk1 = s.slice(i);
    arr1.push(chunk1);
  }

  for(i in s[1]) {
    arr1.filter(item => item.includes(i))
  }

  for (const i of arr1) {
    String(i).
  }
}

getPalindrom("babad");

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Input: n = 1
// Output: ["()"]