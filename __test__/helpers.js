import SyntaxHelpers from './../WerkstukDev5/helpers/SyntaxHelpers.js'

describe('check capital syntax function', () => {
    test('Empty', () => {
        expect(SyntaxHelpers.addCapital("")).toBe(null);
        expect(SyntaxHelpers.addCapital(123)).toBe(null);
        expect(SyntaxHelpers.addCapital("a")).toBe(null);})
        
    test('Hello world comes back the same', () => {
        expect(SyntaxHelpers.addCapital("hello world")).toBe("Hello world");
    })
    test('hello world comes back as Hello world', () => {
        expect(SyntaxHelpers.addCapital("hello world")).toBe("Hello world");
    })

})

describe('check punctiation syntax function', () => {
    test('Empty', () => {
        expect(SyntaxHelpers.addPunctiation("")).toBe(null);
        expect(SyntaxHelpers.addPunctiation(123)).toBe(null);
        expect(SyntaxHelpers.addCapital("a")).toBe(null);
    })
    test('hello world comes back as Hello world', () => {
        expect(SyntaxHelpers.addCapital("hello world")).toBe("Hello world");
    })

})