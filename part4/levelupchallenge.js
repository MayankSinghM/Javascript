// 1.
// let teas = ["green tea","black tea","chai","oolong tea"]
// let selectteas =[];
// for (let i=0 ; i<teas.length;i++){
//     if (teas[i] === "chai"){
//         break;
//     }
//     selectteas.push(teas[i])
// }
// console.log(selectteas)

// //2.
// let cityList = ["London","New York","Paris","Berlin"]
// let visiteCities = []
// for (let i=0; i < cityList.length ; i++){
//     if(cityList[i] === "Paris"){
//         continue;
//     }
//     visiteCities.push(cityList[i])
// }
// console.log(visiteCities)

//3.//forof loop  directly access the element of array
// let numbers = [1,2,3,4,5]
// let smallNumbers = []
// for (const i of numbers) {
//     if (i===4){
//         break;
//     }
//     smallNumbers.push(i)
//  }
// console.log(smallNumbers)

// //4.
// let chai = ["chai","green tea","herbal tea", "black tea"]
// let PreferredTeas = [];
// for (const ele of chai) {
//     if (ele=="herbal tea"){
//         continue;
//     }
//     PreferredTeas.push(ele)
    
// }
// console.log(PreferredTeas)

//5. //for in loops help to go through the keys of object
let citiesPopulation = {
    "London":8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
}
let cityPopulation = {}
// console.log(Object.keys(citiesPopulation))
// console.log(Object.values(citiesPopulation))
for (const city in citiesPopulation) {
    if (city=="Berlin"){
        break;
    }
    // key = value
    cityPopulation[city] = citiesPopulation[city]
   
    
    
}
console.log(cityPopulation);


//6.
let worldCities = {
    "London":8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000  
}
let largecities = {}

for (const key in worldCities){
    if (worldCities[key] < 3000000){
        continue;
    }
    largecities[key] = worldCities[key]
}
console.log(largecities)


//7. for each--> it helps to

let arr = ["earl grey","green tea","chai","oolang tea"]
let availableTeas = []
arr.forEach( function(tea) {
    if(tea === 'chai'){
        return;
    }
    availableTeas.push(tea);
    
});
console.log(availableTeas)

//8.
let city = ["Berlin","Tokyo","Sydney","Paris"]
let traveledCities = []
city.forEach((c) => {
    if (c==="Berlin"){
        return;
    }else{
        traveledCities.push(c)
    }
    
});
console.log(traveledCities);

//9.
let arr4 = [2,5,7,9]
let doubledNumbers = []
arr4.forEach((a) => {
    if (a===7){
        return;
    }
    doubledNumbers.push(a*2)
});
console.log(doubledNumbers)

//10.
let teas = ["chai","green tea","jasmine tea","herbal tea"]
let shortTeas = []
for (const ele of teas) {
    if (ele.length>10){
        break;
    }
    shortTeas.push(ele)
    
}
console.log(shortTeas)