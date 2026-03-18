// Remove 'a' from the given string
        //Recursively...

function RemoveA(str,idx=0,n=str.length){
    if(idx === n) return ''
    let ch = ''
    ch += str[idx]
    return ((str[idx] === 'a') ? '' : ch )+ RemoveA(str,idx+1,n)
}
let str = 'abcax'
console.log(RemoveA(str))
