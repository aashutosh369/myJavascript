// let a = 10;
// let b = 5;
// let c = "+";
function calculate(a, b, c) {
  switch (c) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
        console.log(a * b);
        break
    case "/":
        console.log(a / b);
        break
    default:
      console.log("Invalid Operator");
  }
}

calculate(10, 5, "/");
