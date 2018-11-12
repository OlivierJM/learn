// test for variables
import { language, name } from './variables'


describe('language variable defined and assigned', () => {
    it('language variable should be defined', () =>{
        expect(language).toBeDefined();
    });
    it('language variable should contain Javascript', () => {
        expect(language).toBe('Javascript');
    })
})
describe('name variable defined and assigned', () => {
    it('name variable should be defined', () =>{
        expect(name).toBeDefined();
    });
    it('name variable should contain John', () => {
        expect(name).toBe('John');
    })
})