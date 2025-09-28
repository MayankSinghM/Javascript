//object




const username = {
    'first Name' : 'Mayank',
    islockin : true,
};

username.firstName = 'Rohit'

username.lastName = 'Singh';
console.log(username)

console.log(username['first Name']);

let today = new Date();

console.log(today.getDate())


// Array

let anotheruser = ["hitesh",true];
let heros = ['a','b','c',true]

// implicit type conversion

console.log('1' + 1); //implicit type conversion into string
console.log('1' - 1); // implicit type conversion into integer

let isValue = '2abc'
console.log(typeof Number(isValue)); //typeof nan is also a number

console.log(Number(null));

