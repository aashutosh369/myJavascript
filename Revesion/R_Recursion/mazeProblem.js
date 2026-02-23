// Find total number of valid path to reach at [m-1,n-1] in maze from [0,0]

function mazePath(i,j,m,n){
    if(i>=m || j>=n) return 0;
    if(i === m-1 && j === n-1) return 1;
    return mazePath(i+1,j,m,n) + mazePath(i,j+1,m,n)
}

console.log(mazePath(0,0,3,3))