//৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর প্রস্থ নিবে। তারপর সেই আয়তক্ষেত্র এর area (ক্ষেত্রফল) কে রেজাল্ট হিসেবে রিটার্ন করবে।
function areaOfRectangel(length, width) {
    let area = length * width;
    return area;
}
const MyLength = 20;
const Mywidth = 10;
const areaResult = areaOfRectangel(MyLength, Mywidth);
console.log(areaResult);