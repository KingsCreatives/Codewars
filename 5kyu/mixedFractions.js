function mixedFraction(s){
    // Parsing the numerator and denominator from the input string
    const [numerator, denominator] = s.split('/').map(Number);
    
    // Handling division by zero
    if (denominator === 0) {
        throw new Error("Division by zero");
    }

    // Handling the case when the numerator is zero
    if (numerator === 0) {
        return '0';
    }

    // Determining the sign
    const sign = (numerator < 0) !== (denominator < 0) && numerator !== 0 ? '-' : '';

    // Calculating absolute values for numerator and denominator
    const absNumerator = Math.abs(numerator);
    const absDenominator = Math.abs(denominator);

    // Calculating integer part
    const integerPart = Math.floor(absNumerator / absDenominator);

    // Calculating remaining numerator after removing the integer part
    const remainder = absNumerator % absDenominator;

    // If there is no remainder, return the integer part only
    if (remainder === 0) {
        return `${sign}${integerPart}`;
    }

    // Finding the greatest common divisor (gcd) of the remainder and denominator
    const hcf = (a, b) => (b === 0 ? a : hcf(b, a % b));
    const commonDivisor = hcf(remainder, absDenominator);

    // Calculating the reduced numerator and denominator
    const reducedNumerator = remainder / commonDivisor;
    const reducedDenominator = absDenominator / commonDivisor;

    // Constructing the result string
    const result = integerPart === 0
        ? `${sign}${reducedNumerator}/${reducedDenominator}`
        : `${sign}${integerPart} ${reducedNumerator}/${reducedDenominator}`;

    return result;
}