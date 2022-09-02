//১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 
const numbers = [22, 4, 56, 11, 10, 1, 4];
var smallest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
console.log('the smallest number of the array is ', smallest);