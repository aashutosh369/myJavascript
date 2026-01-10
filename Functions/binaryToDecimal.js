function binToDec(s) {
  let binary = s;
  let sum = 0;
  let power = 0;
  let indexCount = binary.length-1
  
  for(let i= indexCount; i>=0;i--){
    // console.log(i)
    sum += (binary[i])*(2**power)
    power++;
  }
  return(sum)
}

console.log(binToDec("11010"));
