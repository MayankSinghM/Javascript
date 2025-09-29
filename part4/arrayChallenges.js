/*
1. Declare an array named 'teaflavors' that contains
the strings `"greentea"` , `"black tea"` , `"oolang tea"`.
    Access the first element of the array and store it 
    in a variable named `firstTea`.
*/

let teaflavors = ["green tea","black tea","oolang tea"]


let firstTea = teaflavors[0]
console.log(firstTea)


/*
  2.Declare an array named `cities` containing
  `"London"`, `"Tokyo"` , and `"New York"`.
  Access the third element in the array and store it
  in a variable named `favoriteCity */

let cities = ["London","Tokyo","Paris","New York"]
let favoriteCity = cities[2]
console.log(favoriteCity)


// 3.
let teatypes = ["herbaltea","whitetea","masalatea"]
console.log(teatypes)
teatypes[2] = "jasmine"
console.log(teatypes)

// 4.
let citiesVisited = ["Mumbai","Sydney"]
citiesVisited.push("Berlin")
console.log(citiesVisited)

//5.
const testOrders = ["chai", "iced tea", "matcha" ,"earl grey"]
let lastOrder = testOrders.pop()
console.log(lastOrder)
console.log(testOrders)

//6.
let popularTeas = ["green tea", "oolong tea", "chai"]
let softcopyTeas = popularTeas
popularTeas.pop();
console.log(softcopyTeas)
console.log(popularTeas)

//7.

let topcities = ["Berlin", "Singapore", "New York"]
// let hardCopyCities = [...topcities]; //rest and spread operator give a hard copy
let hardCopyCities = topcities.slice();
topcities.pop()
console.log(hardCopyCities)
console.log(topcities)

//8.
let europeanCities = ["Paris","Rome"]
let asianCities = ["Tokyo","Bangkok"]
// let worldcities = europeanCities + asianCities //return string
// let worldcities = [europeanCities,asianCities] //gives a 2d array
let worldcities = europeanCities.concat(asianCities)
console.log(europeanCities.concat(asianCities))
console.log(worldcities)

//9.
let teaMenu = ["masala",'w']
let menulength = teaMenu.length;
console.log(menulength)

//10.
let cityBucketList = ["kyoto","London","Cape Town","Vancover"]
let isLondoninList = cityBucketList.includes("London")
console.log(isLondoninList)