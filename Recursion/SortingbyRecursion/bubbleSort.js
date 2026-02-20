function bubbleSortByRecursion(arr, n) {
    if (n === 0) {
        return arr;
    }
    let swaped = false
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            swaped = true
        }

    }
    if (!swaped) {
        return arr
    }
    return bubbleSortByRecursion(arr, n - 1)
}

console.log(bubbleSortByRecursion([4, 3, 5, 2, 6, 1], 6))