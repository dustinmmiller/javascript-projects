//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.
/*let sortNum = function (arr) {
    let minimumArr = [];
    while (arr.length > 0) {
        let minimumValue = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (minimumValue >= arr[i]) {
             minimumValue = arr[i];
            }
        }
        minimumArr.push(minimumValue);
        arr.splice((arr.indexOf(minimumValue)), 1);
    }
    return minimumArr;
};*/
function sortNum(arr) {
    let minimumArr = arr[0];
    for(let i = 0; i < arr.length; i++){
        if (minimumArr > arr[i]){
            minimumArr = arr[i];
        }
    }
    return minimumArr;
}
//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(sortNum(nums2));
