import { fruits } from './arrays'

describe('arrays', () => {
    it('should exists', () => {
        expect(fruits).toBeDefined()
    })
    it('should contains 5 items', () => {
        expect(fruits).toHaveLength(5)
    })
    it('should contain apple', () => {
        expect(fruits).toContain('apple')
    })
})