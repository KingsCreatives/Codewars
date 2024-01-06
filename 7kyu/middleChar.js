function getMiddle(s) {
    const len = s.length;
    const middleIndex = Math.floor(len / 2);

    if (len % 2 === 0) {
        return s.slice(middleIndex - 1, middleIndex + 1);
    } else {
        return s[middleIndex];
    }
}
