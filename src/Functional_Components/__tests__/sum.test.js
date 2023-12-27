import {sum} from "../sum"

test("sum of function that calculate the sum of the numbers", ()=>{
 
    const result = sum(3,4)
    
    // Asseration
    expect(result).toBe(7)
})