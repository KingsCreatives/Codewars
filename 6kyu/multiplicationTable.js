function multiplicationTable(n) {
    // Array to store the result
    let result = [];

    // Loop through each row
    for (let i = 1; i <= n; i++) {
        // Array to store the current row
        let row = [];

        // Loop through each column
        for (let j = 1; j <= n; j++) {
            // Calculate the product and add it to the row
            row.push(i * j);
        }

        // Add the row to the result
        result.push(row);
    }

    // Return the final multiplication table
    return result;
}







