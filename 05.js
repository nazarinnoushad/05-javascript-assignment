/*-let str = "JAVASCRIPT"
console.log(str.toLowerCase())

let str="java script"
  console.log(str.toUpperCase())

  let description="Ashique"
  console.log(description.substring(0,5))

  let text=" I'am Nazarin Noushad";
 console.log(text.replace("Nazarin","Nourin"));

 let text="          set of characters enclosed in single quotes";
 console.log(text.trim());

 let text="wonderful";
 console.log(text.split(""));

 const fruits=["banana","orange","lemon","apple","mango"];
 console.log(fruits.slice(1,3));*/

let userName=prompt("Enter Your Name:")
let FirstLetter=userName.slice(0,1).toUpperCase()
let restOftheLetters=userName.slice(1,userName.length).toLowerCase()
let nameToDisplay=FirstLetter+restOftheLetters
alert(`hey ${nameToDisplay}`)

