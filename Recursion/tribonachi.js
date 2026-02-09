function fibTribonachiSeq(n){
    if(n <= 2) return 1;
    return fibTribonachiSeq(n-1) + fibTribonachiSeq(n-2) + fibTribonachiSeq(n-3)
}
console.log(fibTribonachiSeq(5))