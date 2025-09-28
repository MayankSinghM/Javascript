// Number

let balance = 120;
let anotherBalance = new Number(130);

// console.log(balance); //120
// console.log(anotherBalance.valueOf()); // [Number: 130]
console.log(typeof(balance));  //Number
console.log(typeof(anotherBalance)); //object

//boolean
let isLoggedin = true;
let anptherLoggedin = new Boolean(false); //not

// null and undefined

let firstName; //undefined
console.log(firstName);
let SecondName = null; //null

//string


let mystring ="hello";
let mystring2 = 'hola';
const n = "Alice";
const res = "Hello, " + n + "!";
console.log(res);

let mystring3 = `hello world ${mystring} !`; //template string //string interploation  //{``}backtick symbol
console.log(mystring3);

let demoOne = `Value is ${2 + 1}`;
console.log(demoOne);

// symbol provide unique identity to the object 
// symbol is always unique

let sym1 = Symbol()
let sym2 = Symbol()
console.log(sym1); //Symbol()
console.log(sym1 == sym2); //false

let sym3 = Symbol("hitesh");
let sym4 = Symbol("hitesh");
console.log(sym3 == sym4); //false
