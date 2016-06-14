var obj = {
  color: 'blue'
}

var { color } = obj

console.log(color); //blue

function generateObject() {
  return {
    name: 'Jordan'
  }
}

var { name:firstName } =  generateObject()
console.log(firstName); // Jordan

var [first,,,,fifth] = ['red', 'yellow', 'green', 'blue', 'orange']
console.log(first); // red
console.log(fifth); // orange


var people = [
  {
    name: 'Joe'
  },
  {
    name: 'Dan'
  },
  {
    name: 'Bob'
  },
  {
    name: 'Guy'
  }
]

people.forEach(({ name }) => {
  console.log(name);
})
