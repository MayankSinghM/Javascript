//1.
function makeTea(typeofTea){
    return `Making ${typeofTea}`
}
let teaOrder = makeTea("green tea")
console.log(teaOrder)

//2.
function orderTea(teaType){
    function confirmOrder(){
        return "Order confirmed for chai"
    }
    result = confirmOrder()
    return result
}
let orderConfirmation = orderTea("chai");
console.log(orderConfirmation);

//3.
const calculateTotal = (price,quantity) => {
    return price * quantity
}
let totalcost = calculateTotal(399,100)
console.log(totalcost)
// ()=>{}  it is also a fuction called arrow function it is unnamed function
// const calclateTotal = (price, quantity) => price * quantity  // this is known as implicit return  mean we dont need to explicitly return and there is also it should be in same line

// Higher order function:
// where we can send function as a parameter and also we can return function
//4.
function makeTea(typeofTea){
    return `maketea: ${typeofTea}`;
}
function processTeaOrder(teaFunction){
    return teaFunction("earl grey")
}

let order = processTeaOrder(makeTea);
console.log(order);

//5.

function fn1(teaType){
    return `Making ${teaType}`
}
function createTeaMaker(){
    return function(teaType){
         return `Making ${teaType}`
    };
}

let teaMaker = createTeaMaker() // teamaker also storing function definition
let re = teaMaker("green tea");
console.log(re)

function flipBoolean(input) {
    console.log(typeof input)
    
    if (typeof input == "boolean"){
        console.log(input)
        return !input
        
    }else{
        return "It is not boolean"
    }
}

console.log(flipBoolean(1))
