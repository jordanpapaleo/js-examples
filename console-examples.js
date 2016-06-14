// console grouping
for (var i = 0, j = 100; i < j; i++) {
  console.group(i)
    console.log('Some stuff')
    console.log('Some more stuff')
    console.groupCollapsed()
      console.log('Even more junk')
    console.groupEnd()
  console.groupEnd()
}

// CSS
console.log('%chey', 'color: blue; font-weight: bold; font-size: 36px;')

// Timing
console.time('start')
var array = []
for (var i = 0; i < 1000000; i++) {
  array.push({ i })
}
console.timeEnd('start')

// Table
function Character(name, power) {
  this.name = name;
  this.power = power;
  this.favoriteColor = 'fuscia'
}

var buffy = new Character('buffy', 'slayer')
var willow = new Character('willow', 'witch')
var spike = new Character('spike', 'vampire')

var chars = [buffy, willow, spike]
var charsByName = {
  buffy,
  willow,
  spike
}

console.table(chars)
console.table(charsByName)
console.table(charsByName, ["power"])
