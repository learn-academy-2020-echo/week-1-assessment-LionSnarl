// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.
//*********
// Don't laugh but I forgot the "quotes" on the describe portion of my test and made the test work by having the initialization of function addThemUp so my test knew what to call on... I see how useful strings are here in finding throughout the entire document something called "addThemUp"
// var numbers1 = 24
// var numbers2 = 22
// var numbers3 = numbers1 + numbers2
// const addThemUp = (numbers1, numbers2) =>{
//   return numbers3
// }
//*********
// this test below FAILS

// describe("addThemUp", () =>{
//   test("Takes two numbers as arguments and returns the sum", () =>{
//     expect(addThemUp()).toEqual()
//   })
// })
// now just add in the two numbers as arguments to equal the third var
describe("addThemUp", () =>{
  test("Takes two numbers as arguments and returns the sum", () =>{
    expect(addThemUp(24, 22)).toEqual(46)
  })
})


// --------------------1b) See the test fail. THEN write the code to make the test pass.
//this is where I honestly feel like its cheating? I define the summation of the two numbers as a variable and call upon it... I definitely need way more practice!

var numbers1 = 24
var numbers2 = 22

const addThemUp = (numbers1, numbers2) =>{
  return numbers1 + numbers2
}

// I also think I can make that const shorter
// const addThemUp = (numbers1, numbers2) => (numbers1 + numbers2)

// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

// this test is built for my function, meant to fail and it fails

// describe("triangleArea", () =>{
//   test("Takes the base and the height of a triangle and returns the area", () =>{
//     expect(triangleArea()).toEqual()
//   })
// })

describe("triangleArea", () =>{
  test("Takes the base and the height of a triangle and returns the area", () =>{
    expect(triangleArea(base, height)).toEqual(area)
    })
  })

// --------------------2b) See the test fail. THEN write the code to make the test pass.
var height = 2
var base = 4
var area = (base * height) / 2

const triangleArea = () =>{
  return (base * height) / 2
}


// honestly, I need some serious work with my test building and coding overall!!!
