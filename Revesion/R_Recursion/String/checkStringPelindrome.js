// Cheack the given string is pelindrome or not 

function pelindromeCheacker(str,i=0,j=str.length-1){
    if(i>j) return  `Given String ${str} is Pelindrome`
    if(str[i] !== str[j]) return `Given String ${str} is not a Pelindrome String`
    return pelindromeCheacker(str,i+1,j-1)
}
let str = 'ABBA'
console.log(pelindromeCheacker(str))
console.log(pelindromeCheacker('cbaabc'))
console.log(pelindromeCheacker('ldjf'))
console.log(pelindromeCheacker('aba'))
console.log(pelindromeCheacker('abab'))