const strArr = ["[1, 2, 3]", "[1, 2, 3, 4]"]
const addStringArray = (par: string[]) => {

    let arr0 = JSON.parse(par[0])
    let arr1 = JSON.parse(par[1])
    let arr2 = []

    let numArr = []

    if(arr0.length > arr1.length) {
        arr2 = arr0.slice(arr1.length)
        for (let i = 0; i < arr1.length; i++) {
           let val = arr0[i] + arr1[i];
           numArr.push(val)
        }
        numArr = numArr.concat(arr2)
    } else if (arr1.length > arr0.length) {
        arr2 = arr1.slice(arr0.length)
        for (let i = 0; i < arr0.length; i++) {
           let val = arr0[i] + arr1[i];
           numArr.push(val)
        }
        numArr = numArr.concat(arr2)
    } else {
        for (let i = 0; i < arr0.length; i++) {
            let val = arr0[i] + arr1[i];
            numArr.push(val)
         }
    }
    
    return numArr.join('-')
}