
// *
// * *
// *   *
// *     *
// * * * * *


let n=5;
for(let i=1; i<n; i++){
    let line =""
    for(let j=1;j<=2*i-1;j++){
        if(j==1 || j == 2*i-1) {
            line += "*"
        }else{
            line += " "
        }
    }
    console.log(line)
}
let line = ""
for(let i=1; i<=n; i++){
    
    line += "* "
    
}

console.log(line)