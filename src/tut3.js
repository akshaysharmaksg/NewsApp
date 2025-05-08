// create a object in js 
student = {

  name: "abhishek",
  age: 25,
  phone_number: 77377444
};
console.log(student)
//add a number to a string 
let a="harry"
console.log(a+5)
//find type of the a 
console.log(typeof a)
//create a const object in js you can change later to hold a number
const number ={
  num :11
}
console.log(number)
number.num=100
console.log(number)
//create a dixonaey to hold five words 
let am ={
  "word1" : "hello",
  "word2" : "world",
  "word3" : "python",
  "word4" : "javascript",
}
console.log(am)

//airthematic operators
let f=20
let g=30 
console.log(f+g)
console.log(f*g)
console.log(f/g)
console.log(f%g)
console.log(f++) 
console.log(f--) 
console.log(++f) 
console.log(--f) 
console.log(f)


let st={
  rohan:44,
  shivika:88,
  aman:54,
  rapan:54
}

for(let a in st){
  console.log("the marks of "+ a + "are " + st[a])
}

for(let b of "harry"){
  console.log(b)
}



