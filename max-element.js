//find the largest element of an array
/* function findMax(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const array = [12, 34, 56, 78];
const largest = findMax(array);
console.log(largest);
 */

//find the smallest element of an array
function findMin(numbers) {
    let smallest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element < smallest) {
            smallest = element;
        }

    }
    return smallest;
}
const array = [12, 34, 56, 78];
const smallest = findMin(array);
console.log(smallest);