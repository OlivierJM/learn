import { sumOfOdd } from './functions'

describe('functions', () => {
    it('should exist', () => {
        expect(sumOfOdd()).toBeDefined()
    })
    it('should calculates properly', () => {
        expect(sumOfOdd([1, 2, 3, 4, 9])).toBe(13)
    })
    
})