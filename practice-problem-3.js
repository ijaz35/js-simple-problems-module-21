//একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 

let summation = 0;

function averageArray(array) {
    for (let i = 0; i < array.length; i++) {
        let arrayItem = array[i];
        summation = summation + arrayItem;
    }
    const average = summation / array.length;
    return average;
}
const myArray = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
const averageResult = averageArray(myArray);
console.log('average of the numbers of your arry is: ', averageResult);
