//২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  
const num1 = 123;
const num2 = 23;
const num3 = 11;
if (num1 < num2 && num1 < num3) {
    console.log('smallest number is: ', num1);
} else if (num2 < num3 && num2 < num3) {
    console.log('smallest number is: ', num2);
} else {
    console.log('smallest number is: ', num3);
}