var first = 3;
var second = 7;
//first approach
console.log(first, second);
var temp = first;
first = second;
second = temp;
console.log(first, second);

//second approach or destructuring
[first, second] = [second, first];
console.log(first, second);