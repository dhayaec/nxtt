import { add, isEven, multiply } from './utils'

describe('utils', () => {
    describe('add()', () => {
        test('should add two numbers', () => {
            expect(add(1, 2)).toEqual(3)
        })
    })

    describe('multiply()', () => {
        test('should multiply two numbers', () => {
            expect(multiply(1, 2)).toEqual(2)
        })
    })

    describe('isEven', () => {
        it('should find odd or even', () => {
            expect(isEven(2)).toEqual(true)
        })
    })
})
