function checkForMatchingBraces(string) {
    let pattern = /^(\{(?:[^}{]|\{(?:[^}{]|\{[^}{]*\})*\})*\})/g;
    return string === "" || string.match(pattern) ? true : false
}
module.exports = checkForMatchingBraces