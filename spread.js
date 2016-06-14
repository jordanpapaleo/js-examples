// Take an array and spread it to its individual items

console.log([1, 2, 3]); // [1, 2, 3]
console.log(...[1, 2, 3]); // 1 2 3

let first = [1, 2, 4]
let second = [4, 5, 6]

first.push(second) // [1, 2, 3, [4, 5, 6]]
first.push(...second) //[1, 2, 3, 4, 5, 6]
