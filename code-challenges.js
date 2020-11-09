// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Psuedo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process


// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

/* I'll leave my variables alone, so my function const below can handle each var
..and use if/else if/else inside..
*/

var temp1 = 35
var temp2 = 350
var temp3 = 212
var notATemp1 = "hey y'all"

const boilingPoint = (temp) => {
if (temp < 212){
  //console.log("35 is below boiling point");
  return "35 is below boiling point"
}else if (temp > 212) {
  return "350 is above boiling point"
}else if (temp === 212){
  return "212 is at boiling point"
}else{
  //this is my catch all for data types that are NOT numbers
  return "error"
}
}
console.log(boilingPoint(temp1));
console.log(boilingPoint(temp2));
console.log(boilingPoint(temp3));
// this is me testing my function for anything that is not a number type
console.log(boilingPoint(notATemp1));


/*
***
***I have not finished this comment yet*** I will come back and build this on a later date for fun..
var temps = [
  {temp1: 35},
  {temp2: 350},
  {temp3: 212},
]
const boilingPoint = () =>
  return`    `
***
*/


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

/* going to use a for loop to multiply each data point on this array, using let and .length  for(let i=0; i<myNumbers1.length; i++) and console log (myNumbers1[i] * 5) to have terminal multiply for us... just to clarify i=index of the array, so we start my loops index at 0, i is then set for <(length of myNumbers1) amount of iterations and I want the i++ telling it to keep going after each loop is completed until the declared ending of the .length of myNumbers1 */

var myNumbers1 = [3, 7, 0, 6, -9]

for(let i=0; i<myNumbers1.length; i++){
  //return myNumbers1[i] * 5
  console.log(myNumbers1[i] * 5)
}
//I had issues with this here ^^

// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]
/* This .map will iterate through the original array and return a new array with each index multiplied by 5 */

var myNumbers2 = [8, -7, 0, 6, 2]
/*
const blankA = nameOfMyVar.map(anyThing => {
 return anyThing * 5 then console log (nameOfMyVar)
*/
const multiply = myNumbers2.map(value => {
    return value * 5
})
console.log(multiply)
// below is a shortened version, I must prefer this.
const multiply1 = myNumbers2.map(value => value * 5)
console.log(multiply1);

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

/* I remember from instruction (thank goodness) that we cannot use OR || but we must use && because using OR makes the first condition false but the rest true (*would like further explaination please*), but using AND && creates the condition where only letters that satisfy ALL the conditions get let through.
*/
var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"
/* I need to build a const blankA = () => {
and have a let .split("") so each of my letters is seperate
so my let .filter(value =>{
can return every value that is NOT !== "a", "e", "i", "o", "u"
and lastly, i must use .join("") <-- specifically like that to turn it back into a single string format.
this one is harder and I need more practice just memorizing building for sure
*/
const vowel = (string) => {
let stringSplit = string.split("")
let filteredArray= stringSplit.filter(value => {
return  value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"
})
return filteredArray.join("")
}
//call my vowel(variables)
console.log(vowel(stringWithVowels1));
console.log(vowel(stringWithVowels2));


// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

/* I want to use the function .typeof somewhere maybe before my const so that way when I use my if/else statement and it is not a string it will return back right away because the function is only going to filter "strings".
**********
When I look back at this comment, I really wish I didn't follow my own advise at first!! making my if statement for only strings would be best because as I stated below it can make my else statement encompass everything else that isn't a string.
*/


var notAString1 = true
var notAString2 = 42

const defNotAString = (value) => {
  /*so I knew i wanted to typeof value for strictly only strings and make the filter only act on strings FIRST, because then my else statement can cover EVERYTHING not a string */
  if (typeof value === "string"){
    //essentially its the same function, but i added an if statement above so that if it WAS a string by using typeof, the function would act upon it and if it WASNT a string through typeof, my else statement can return any var !=="string" through string interpelation
    let stringSplit = string.split("")
    let filteredArray= stringSplit.filter(value => {
    return  value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"
    })
    return filteredArray.join("")
}else{
return `${value} is not a string!`
}
}
//below is from the previous question #4 that i didn't want to copy directly because I knew I needed to try and refactor it to suppliment an if/else statement
// const vowel = (string) => {
// let stringSplit = string.split("")
// let filteredArray= stringSplit.filter(value => {
// return  value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"
// })
// return filteredArray.join("")
// }

//call my vowel(vars)
console.log(defNotAString(notAString1));
console.log(defNotAString(notAString2));


// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [
  { name: "Itchy", animal: "mouse" },
  { name: "Stimpy", animal: "cat" },
  { name: "Daffy", animal: "duck" },
  { name: "Scratchy", animal: "cat" },
  { name: "Ren", animal: "dog" },
  { name: "Felix", animal: "cat" }
]
// so with my var Toonimals declared, I want to const
// declare a function that takes in an array(arbitrary-remember it can be named pineapples)
const getOnlyCat = (array) => {
  // return a higher-order function that takes in the arguement array, i am going to name it toonimal so i dont get confused with using arbitrary "value", as long as I know that toonimal is in the "value" spot of the function..
  return array.filter(toonimal  => {
    // return only the values that have an animal: "cat" ..
    //I need to use dot notation to get the right answer for Animal: "cat" and i am using console log below to see what it will show as dot notation to understand more and it was a check to see if i was even correct with dot notation...
  //console.log(toonimal.animal);
  //so here I know that dot.notation works for conloging-- NOW I JUST NEED TO MAKE IT ONLY EQUAL "cats"
  return toonimal.animal === "cat"
  })
}
//conlog on my higher order function getOnlyCat for toonimals
  console.log(getOnlyCat(toonimals));

//below is me trying to build and understand .map to know exactly what is going on with a .map  because I knew i needed to have to call for it in quesetion #7
// const getOnlyCat = (array) => {
//   array.map((value, index, array) => {
// console.log(value);
// })
// }
// console.log(getOnlyCatIndex(toonimals));
//


// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"


var toonimals = [
  { name: "Itchy", animal: "mouse" },
  { name: "Stimpy", animal: "cat" },
  { name: "Daffy", animal: "duck" },
  { name: "Scratchy", animal: "cat" },
  { name: "Ren", animal: "dog" },
  { name: "Felix", animal: "cat" }
]
//create a function called getNoCat
//takes in argument array
const getNoCat = (array) => {
//filter array for a return of toonimal.animal that doesnt equal "cat" by using dot notation again and the bang operator
let nonCats = array.filter(toonimal =>{
  return toonimal.animal !== "cat"
})
//console.log(nonCats); this was a check to see if my filter worked
//of the noncats, im going to only return the names
//also forgot to type the let below so added it
let names = nonCats.map(animal =>{
  //i wrote .name first because i didnt know what went in front of it yet, but knew i needed dot notation
  return animal.name
})
//console.log(names); this is a check to see if my .map worked
return names
}
console.log(getNoCat(toonimals));


/*
space for some notes, thanks for stopping by! :

const getNoCat = (array) => {
  return array.filter(toonimal  => {
  console.log(toonimal.animal);
//so I can tell the filter to find me NO CATS with BANG
  return toonimal.animal !== "cat"
//so what I want to do is get rid of the animal portion but i want it to be neat and build another nest for it.. and i realize that my return will not let me do that so i practiced with .map to figure out why i wasn't using it correctly
    const noCatsFunc = (array) => {
      let mappedAnimals = array.map(noCats =>{
        return noCats !== toonimal.animal
      })
      return mappedAnimals
    }
  })
}
  console.log(getNoCat(toonimals));
  // console.log(noCatsFunc(noCats));
const 
*/
