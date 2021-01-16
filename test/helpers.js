import syntaxHelpers from './../WerkstukDev5/helpers/syntaxHelpers.js'
/**
* [description]
* @params:
* @returns: 
*/

describe('check capital syntax function', () => {
    test('Empty', () => {
        expect(syntaxHelpers.addCapital("")).toBe(null);
        expect(syntaxHelpers.addCapital(123)).toBe(null);
        expect(syntaxHelpers.addCapital("a")).toBe(null);})
        
    test('Hello world comes back the same', () => {
        expect(syntaxHelpers.addCapital("hello world")).toBe("Hello world");
    })
    test('hello world comes back as Hello world', () => {
        expect(syntaxHelpers.addCapital("hello world")).toBe("Hello world");
    })

})

describe('check punctiation syntax function', () => {
    test('Empty', () => {
        expect(syntaxHelpers.addPunctiation("")).toBe(null);
        expect(syntaxHelpers.addPunctiation(123)).toBe(null);
        expect(syntaxHelpers.addCapital("a")).toBe(null);
    })
    test('hello world comes back as Hello world', () => {
        expect(syntaxHelpers.addCapital("hello world")).toBe("Hello world");
    })

})