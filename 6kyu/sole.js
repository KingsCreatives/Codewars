function solve(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxConsonantValue = 0;
    let currentConsonantValue = 0;

    const getConsonantValue = (char) => {
        return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    };

    for (const char of s) {
        if (vowels.has(char)) {
            maxConsonantValue = Math.max(maxConsonantValue, currentConsonantValue);
            currentConsonantValue = 0;
        } else {
            currentConsonantValue += getConsonantValue(char);
        }
    }

    return Math.max(maxConsonantValue, currentConsonantValue);
};