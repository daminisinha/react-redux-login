import {validateEmail} from './Validation';

describe('Test Suite for Validation',()=>{

    it('Checking for correct input',()=>{
        expect(validateEmail("daminisinha64@gmail.com")).toBe(true);
    })

    it('Checking for wrong input',()=>{
        expect(validateEmail("sdlsdf")).toEqual("Please enter a valid email address.");
    })
    
    
})