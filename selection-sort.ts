function selectionSort1(array: number[]) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex: number = i;
        let tempVal: number;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }

        tempVal = array[i]
        array[i] = array[minIndex]
        array[minIndex] = tempVal
    }
}

selectionSort([1, 4, 3, 43, 98, 8, 9, 12, 9, 89, 87, 11, 12, 32, 23, 64, 45, 67])