function multiplicationTable(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        let row = [];
        for (let j = 1; j <= n; j++) {
            row.push(i * j);
        }
        result.push(row);
    }

    return result;
}