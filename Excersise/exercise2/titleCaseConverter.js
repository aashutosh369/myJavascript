// Title Case Converter
// Difficulty: Easy
// Topics: Strings, loops, arrays

// Convert a sentence to title case (first letter of each word capitalized).

// Test Cases:
// Input	                 Output
// "hello world"	         "Hello World"
// "javaScript is awesome"	 "Javascript Is Awesome"
// "the quick brown fox"	 "The Quick Brown Fox"
// Hint: Split into words, capitalize first letter of each, join back.

// ⚡   // let str = "hello world"
        // let str = "javaScript is awesome"
        // let str2 = ""
        // str2 += str[0].toUpperCase()
        // for(let i = 1 ; i < str.length ; i++){
        //     if(str[i] === ' '){
        //         str2 += ' '
        //        str2 += str[i+1].toUpperCase()
        //        i++
        //     }else{
        //         str2 += str[i]
        //     }
        // }
        // console.log(str2)

// ⚡  //  SECOND WAY 

        // let str = "javaScript is awesome"
        // let strArr = str.split(' ')
        // // console.log(str.split(" "))
        // // console.log(strArr)
        // for(let i = 0; i <strArr.length; i++){
        //     let word = strArr[i]
        //     strArr[i] = word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()
        // }
        // console.log(strArr.join(' '))