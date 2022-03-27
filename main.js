function checkForMatchingBraces(string) {
    let pattern = /^(\{(?:[^}{]|\{(?:[^}{]|\{[^}{]*\})*\})*\})/g;
    if(string === "" || string.match(pattern))
        return true
    else 
        return false
}
module.exports = checkForMatchingBraces