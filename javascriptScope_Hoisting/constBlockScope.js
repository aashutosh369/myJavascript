//Question:
    // const Block scope
{
    var x = 50
}
console.log(x)
// it will gives an ReferenceError: x is not defined 
    // ->b/c {const}->follow block scope 
    // ->{const} & {console.log(x)} both are not in the same bloce so ReferenceError will occure
