const Container = require('./container.js');

var array = new Container(1,2,3,6,8,2,5,4,3);

var newArr = array.filter((a)=> a % 2 == 0);

console.log(array.array);
console.log(newArr.array);

