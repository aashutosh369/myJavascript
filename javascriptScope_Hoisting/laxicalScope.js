function outer() {
  let message = 'Hi';
  function inner() {
    console.log(message);
  }
  inner();
}
outer();