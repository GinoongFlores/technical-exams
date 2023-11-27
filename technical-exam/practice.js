
// array of numbers 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const arrMap = arr.map((num, index) => {
//     console.log(num, index)
//     return num
// })

// for (let i of arr) {
//     console.log(i)
// }

// array of strings
const arrStr = ["Apple", "Banana", "Mango", "Orange"]

arrStr.forEach((fruit) => {
    if (fruit === "Banana") {
        // console.log(fruit);
    }
})


// console.log(arrStr.splice(1, 2))

// arrStr.map((fruit) => (console.log(fruit)))

// Object

let obj = { name: "John", age: 30 }
// console.log(obj);

// array of objects
let arrObj = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 40 }
]
// console.log(arrObj[0]) 

// Delete properties from the object
// delete obj.age
// console.log(obj)

// Variables
function testVar() {
    var x = 1
    if (true) {
        var x = 2
        console.log(x)
    }
    console.log(x)
}

function testLet() {
    let x = 1;
    if (true) {
        let x = 2;
        console.log(x)
    }
    console.log(x)
}

// testVar()
// testLet()

// Control Structures
let y = 10
if (y > 5) {
    // console.log("y is greather than 5")
} else {
    // console.log("y is less than 5")
}

let fruit = "apple";
switch (fruit) {
    case 'banana':
        console.log("I'm a banana")
        break

    case 'apple':
        console.log("I'm an apple")
        break;

    default:
        console.log("I'm not one of those fruits")
}

// Functions

function greet() { // function declaration
    console.log("Hello World!")
}

// greet()

let greetFunc = function () { // function expression
    console.log("Hello World!")
}

// greetFunc()

let greetArrowFunc = () => {
    console.log("Hello World!") // arrow function 
}

// greetArrowFunc()

function greetParam(name) {
    console.log("Hello " + name)
}


// function modifyArr(arr, callback) {
//     arr.push(100);

//     callback();
// }

// var arrNum = [1, 2, 3, 4, 5]

// modifyArr(arrNum, function () {
//     console.log("array has been modified", arrNum);
// })

// JS recursion
function countDown(num) {

    // Base case
    if (num <= 0) {
        console.log("Done!");
        return;
    }

    // Recursive case
    console.log(num);
    countDown(num - 1);

}

console.log(countDown(10))


