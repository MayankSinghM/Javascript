// loops

//while loop
//sum from 1 to 5


// let i = 1
// let sum = 0
// while (i<=5){
//     sum += i 
//     i+=1  
// }
// console.log(sum)

//2.
let i = 5;
let countdown = [];
while (i>=1){
    countdown.push(i);
    i-=1;
}
console.log(countdown);

//3.
// let favoriteTea;
// let teacollection = [];
// do{
//     favoriteTea = prompt(`Enter the tea type(type "Stop" to finish)`);

//     if (favoriteTea !== "Stop"){
//         teacollection.push(favoriteTea)
//     }
// }while (favoriteTea !== "Stop");

//4.
let total = 0;
let k=1
do {
    total+=k
    k++
}while(k<=3);
console.log(total)

//5.
let arr1 = [2,4,6]
let multipliedNumbers = []
for (let j=0 ; j < arr1.length; j++){
    multipliedNumbers.push(arr1[j] * 2);

}
console.log(arr1)
console.log(multipliedNumbers)

6.
let arr2 = ["paris","new york","tokyo","london"]
let cityList =[];
for (let j=0 ; j< arr2.length;j++){
    cityList.push(arr2[j])
}
console.log(cityList)

