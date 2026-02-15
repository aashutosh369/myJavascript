// Reverse the given String 

let str = 'abc'
function a(str) {

    let line = ''
    function reverse(str, i = 0) {
        if (i === str.length) {
            return 0
        }
        reverse(str, i + 1)
        // process.stdout.write(str[i])
        line += str[i]
    }
    reverse(str)
    return line
}
console.log(a(str))