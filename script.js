// function clickMe() {
//     alert('i am here')
// }

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    let tempVal;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    tempVal = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tempVal;
  }
}

function bubbleSort(arr) {
  for (let k = 1; k < arr.length; k++) {
    for (let i = 0; i < arr.length - k - 1; i++) {
      let j = i + 1;
      let tempVal = arr[i];
      if (arr[i] > arr[j]) {
          arr[i] = arr[j]
          arr[j] = tempVal
      }
    }
  }
}

function insertionSort(arr) {
    for (let k = 1; k < arr.length; k++) {
        let tempVal = arr[k];
        let empty = k;
        while (empty > 0 && arr[empty - 1] > tempVal) {
            arr[empty] = arr[empty - 1]
            empty = empty - 1
        }
        arr[empty] = tempVal
    }
}

let myArr = [1, 4, 3, 43, 98, 8, 9, 12, 9, 89, 87, 11, 12, 32, 23, 64, 45, 67];
insertionSort(myArr)
console.log(myArr);
