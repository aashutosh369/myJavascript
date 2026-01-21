let str = "aeiou";
// let str = 'hello'
let vovels = "aeiou";
let count = 0;
for (let i = 0; i < str.length - 1; i++) {
  if (vovels.includes(str[i]) && vovels.includes(str[i + 1])) {
    count++;
  }
}
console.log(count)


