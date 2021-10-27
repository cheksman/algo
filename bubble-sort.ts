function bubbleSort1(arr: number[]) {
  for (let k = 1; k < arr.length; k++) {
    for (let i = 0; i < arr.length - k - 1; i++) {
      let j = i + 1;
      let tempVal = arr[i];
      if (arr[i] > arr[j]) {
        arr[i] = arr[j];
        arr[j] = tempVal;
      }
    }
  }
}
