module.exports = function check(str, bracketsConfig) {
    
    const brackets = Object.fromEntries(bracketsConfig);
    const buffer = [];
    
    for (let i = 0; i < str.length; i++) {
        if (buffer[0] === str[i]) {
            buffer.shift();
        } else if (brackets[str[i]]) {
            buffer.unshift(brackets[str[i]]);
        } else {
            return false;
        }
    }

    return buffer.length === 0;
}
