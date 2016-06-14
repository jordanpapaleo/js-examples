/*
let and const
creates block scoping: loops, if
super helpful with hoisting issues

const create a constant reference to an object
const creates a a constant value to a primitive
*/

let message = 'hi'

{
  message = 'bye'
}

console.log(message) // 'hi

//ex --------------------
var funcsA = []
for (var i = 0; i < 5; i++) {
  funcsA.push(function () {
    console.log(i);
  })
}

funcsA.forEach(function (fn) {
  fn();
})

// 10, 10, 10, 10, 10

var funcsB = []
for (let i = 0; i < 5; i++) {
  funcsB.push(function () {
    console.log(i);
  })
}

funcsB.forEach(function (fn) {
  fn();
})

// 0, 1, 2, 3, 4
