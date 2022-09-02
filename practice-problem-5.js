//৫. কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 

const array = [121, 342, 54, 665, 78, 12, 345, 22, 66, 89, 46];

function findLarge(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let item = numbers[i];
        if (item > largest) {
            largest = item;
        }
    }
    return largest;
}

var largestNumber = findLarge(array);
var indexOfFirstLarge = array.indexOf(largestNumber);
array.splice(indexOfFirstLarge, 1);//remove the first large number
console.log(array);
var secondLarge = findLarge(array);
console.log(secondLarge);
var num = Math.max(33, 44, 66);
console.log(num);