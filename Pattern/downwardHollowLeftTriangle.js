// * * * * * 9  //part1
// *     *   7 //part2 
// *   *     5         
// * *       3
// *         1

// ###############part1###############
let n = 5
let line = ""
for(let i=1; i<=n; i++){
    line +="* "
}
console.log(line)
// ###############part2###############

for(let i=1; i<n; i++){
    let line2 =""
    for(let j=1; j<=2*(n-i)-1; j++){
        if(j==1 || j==2*(n-i)-1){
            line2 += "*"
        }else{
            line2 +=" "
        }
    }
    console.log(line2)
}