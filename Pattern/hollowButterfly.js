let n = 3;
for(let i=1; i<=2*n-1;i++){
    let line = ""
    for(let j=1; j<=2*n-1; j++){
        // line +="*"
        if(j==i || j==2*n-i){
            line +="*"
        }else{
            line +=" "
        }
    }
    console.log(line)
}