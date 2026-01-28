//Question : 
    // Implicit Global Variable

function demo(){
    value = 100;
}
demo()
console.log(value)

// in {demo()}..>>function {value}-> is not declered with (let, const, var)
// -> so javascript make it global (non-strict mode) 
    // [NOTE:-> this is only possible when if you call the function (ex->{demo()})] 
    // ->when you call the function then it will reach at {value = 100} and it found that, value is not defined with (let, const, var)..>> js make it as Global variable
// -> now {console.log(value)} gives 100
    // if {demo()} function not call before {console.log(value)}..>> then it gives [ReferenceError: value is not defined]