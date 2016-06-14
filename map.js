/*
key value map
object has prototype by default there are keys in the map regardless
map keys can be anything
maps have size methoda
*/

var myMap = new Map();

/*
API
set()
get()
size
clear()
has()
*/

myMap.set('foo', 'bar');
myMap.set('hello', 'world');

console.log(myMap.get('foo')); // bar
console.log(myMap.get('plop')); // undevined
console.log(myMap.size); // 2
console.log(myMap.has('plop')); // false
console.log(myMap.has('hello')); // true
console.log(myMap.clear()); // 0
/*
Iterators
keys()
entries()
values
*/

for (var keys of myMap.keys()) {

}

for (var keys of myMap.values()) {

}
