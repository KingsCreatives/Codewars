function sumMul(n, m) {
    //your idea here
    if (n <= 0 || m <= 0) {
        return "INVALID"
    }t 
    let sum = 0

    for (let i = n; i < m; i++) {
        if (i % n === 0) {
            sum += i;
        }
    }
    return sum
}