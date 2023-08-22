// leeetcode - lenOfLastSTr
var lengthOfLastWord = function(s) {
    s = s.trim().split(' ')
    let lastItem = s[s.length -1]
    return lastItem.length;
};
