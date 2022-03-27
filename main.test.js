const checkForMatchingBraces = require('./main')

test('Checks for pair open and closing curly braces', () => {
    expect(checkForMatchingBraces("{}")).toBe(true)
})

test('Checks for even pairs of curly braces', () => {
    expect(checkForMatchingBraces("{{}")).toBe(false)
})
test('Checks if it ignores any character within the pair of curly braces', () => {
    expect(checkForMatchingBraces("{djkhkd2345%##^%}")).toBe(true)
})
test('Checks an empty string', () => {
    expect(checkForMatchingBraces("")).toBe(true)
})
test('Checks if there is a closing curly brace first', () => {
    expect(checkForMatchingBraces("}{")).toBe(false)
})
