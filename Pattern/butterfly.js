let n = 4;
// *******************PART1*******************//
for (let i = 1; i <= n; i++) {
  let line = "";
  for (let j = 1; j < i; j++) {
    line += "*";
    // if(j<=i){
    //      line +="*"
    // }else if(j>i && j<2*i){
    //     line +="k"
    // }
  }
  for (let j = 0; j <= n - i; j++) {
    line += " ";
  }
  for (let j = 0; j <= n - i; j++) {
    line += " ";
  }
  for (let j = 1; j < i; j++) {
    line += "*";
  }
  // for(let k=1; k<=2*n; k++){
  //     line +="*"
  // }

  console.log(line);
}

// *******************PART2*******************//
let line2 = "";
for (let k = 1; k <= 2 * n; k++) {
  line2 += "*";
// console.log("*")
}
console.log(line2)


// *******************PART3*******************//

for(let i=1; i<n; i++){
    let line3 = ""
    for(let j=n-i; j>0; j--){
        line3 += "*"
    }
    for(let j=1; j<=i; j++){
        line3 += " "
    }
    for(let j=1; j<=i; j++){
        line3 += " "
    }
    for(let j=n-i; j>0; j--){
        line3 += "*"
    }
    console.log(line3)
}
