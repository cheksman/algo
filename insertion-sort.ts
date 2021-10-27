function insertionSort1(arr) {
    for (let k = 1; k < arr.length - 1; k++) {
        let tempVal = arr[k];
        let empty = k;
        while (empty > 0 && arr[empty - 1] > tempVal) {
            arr[empty] = arr[empty - 1]
            empty = empty - 1
        }
        arr[empty] = tempVal
    }
}