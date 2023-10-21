function solve(arr) {
    let dominantElements = [];
    let maxRight = Number.NEGATIVE_INFINITY;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] >= maxRight) {
            maxRight = arr[i];
            dominantElements.unshift(arr[i]);
        }
    }

    return dominantElements.filter((ele, index) => dominantElements.indexOf(ele) === index)
}
