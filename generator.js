function * greet() {
  console.log(`You called 'next()'`);
  yeild 'hello'
  yeild 'are'
  yeild 'you'
}

let greeter = greet()
console.log(greeter.next());
console.log(greeter.next());
console.log(greeter.next());
