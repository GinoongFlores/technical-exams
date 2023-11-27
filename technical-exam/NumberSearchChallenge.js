//Have the function NumberSearch(str) take the str parameter,
// search for all the numbers in the string, add them together,
// then return that final number divided by the total amount of
// letters in the string. 


// For example: if str is "Hello6 9World 2, Nic8e D7ay!"
// the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7
// you get 32. 

// Then there are 17 letters in the string. 32 / 17 = 1.882, and the
// final answer should be rounded to the nearest whole number, so the answer is 2.
// Only single digit numbers separated by spaces will be used throughout the whole
// string (So this won't ever be the case: hello44444 world).
// Each string will also have at least one letter.

/* 
* problem: "Hello6 9World 2, Nic8e D7ay!"

* find all the numbers & add them
* return the final number divided by the total amount of letters in string 
* 

*/


function NumberSearch(str) {
    //code goes here

    let sum = 0
    let temp = '';
    for (let i = 0; i < str.length; i++) {
        //check current item is Number or not
        if (Number(str[i])) {
            temp = temp + str[i];
            // reset temp string to empty if next item is not a number
            if (!Number(str[i + 1])) {
                sum = sum + Number(temp)
                temp = ''
            }
        }
    }

    let regex = /[a-zA-Z]/g; // only count letters
    let countStr = str.match(regex).length

    const addStr = sum / countStr;
    const answer = (Math.round(addStr));

    return answer
}

function run_test() {
    let test_case_1 = NumberSearch("Hello6 9World 2, Nic8e D7ay!");
    console.log('Test Case 1: ', test_case_1 === 2 ? 'Correct' : 'Incorrect')
    let test_case_2 = NumberSearch("1p2ol5e ** 6");
    console.log('Test Case 2: ', test_case_2 === 4 ? 'Correct' : 'Incorrect')
}

run_test();


