// let n = 6;

function hollowNumberDiamondPattern(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n - i; j++) {
      line += " ";
    }
    line += i;
    if (i > 1) {
      for (let j = 0; j < 2 * i - 3; j++) {
        line += " ";
      }
      line += i;
    }
    console.log(line);
  }

  for (let i = n - 1; i > 0; i--) {
    let line = "";
    for (let j = 0; j < n - i; j++) {
      line += " ";
    }
    line += i;
    if (i > 1) {
      for (let j = 0; j < 2 * i - 3; j++) {
        line += " ";
      }
      line += i;
    }
    console.log(line);
  }
}

hollowNumberDiamondPattern(6);
hollowNumberDiamondPattern(5);
hollowNumberDiamondPattern(4);
