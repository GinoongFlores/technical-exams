// Have the function ArrayMatching(strArr) read the array of strings stored
// in strArr which will contain only two elements, both of which will represent
// an array of positive integers. For example: if strArr


// is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], then both elements in the input
// represent two integer arrays, and your goal for this challenge is to
// add the elements in corresponding locations from both arrays. For the

// example input, your program should do the following additions:
// [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17].

// Your program should finally return this resulting array in a string format
// with each element separated by a hyphen: 6-4-13-17.
// If the two arrays do not have the same amount of elements, then simply
// append the remaining elements onto the new array (example shown below). B
// oth arrays will be in the format: [e1, e2, e3, ...] where at least one element
// will exist in each array.

function ArrayMatchingChallenge(strArr) {
    //code goes here

    let arrStr0 = strArr[0]
    let arryStr1 = strArr[1]

    // Remove the square brackets from the strings 
    let cleanedArrStr0 = arrStr0.replace(/[\[\]']+/g, '')
    let cleanedArrStr1 = arryStr1.replace(/[\[\]']+/g, '')

    // Convert the cleaned strings to arrays of numbers 
    let toArr0 = cleanedArrStr0.split(',').map(Number)
    let toArr1 = cleanedArrStr1.split(',').map(Number)

    // an empty array to store the sum of the two arrays
    let resultArr = []

    // Determine the length of the longest array
    let maxLength = Math.max(toArr0.length, toArr0.length)

    // Iterate over the longest array
    for (let i = 0; i < maxLength; i++) {
        // Add the corresponding elements of the two arrays
        // if one array is shorter, add the remaining elements of the longer array
        let sum = ((toArr0[i] || 0) + (toArr1[i] || 0))
        resultArr.push(sum)
    }

    // Convert the result array to a string with hyphens
    let resultStr = resultArr.join('-')
    console.log(resultStr)
    return resultStr
}

// console.log(ArrayMatchingChallenge(["[1, 2, 5, 6]", "[5, 2, 8, 11]"]))

function run_test() {
    let test_case_1 = ArrayMatchingChallenge(["[1, 2, 5, 6]", "[5, 2, 8, 11]"]);
    console.log('Test Case 1: ', test_case_1 === "6-4-13-17" ? 'Correct' : 'Incorrect ')
    let test_case_2 = ArrayMatchingChallenge(["[10, 1, 41]", "[2, 1, 0, 18]"]);
    console.log('Test Case 2: ', test_case_2 === "12-2-41-18" ? 'Correct' : 'Incorrect')
}

run_test();
