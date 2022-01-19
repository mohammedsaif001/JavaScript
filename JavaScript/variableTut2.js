console.log("Tutorial 2");
//Variables in JS
// var, let, const

// var has global scope
// let is block level scope

var name = 'Saif';
var msg = `Bring it On!!`
console.log(name,msg);
console.log(name + " "+ msg);

var sec = 7;
var secString = '7';

console.log(sec,"is a Number");
console.log(secString,"is a String");

//Rules for creating JAvascript variables
// 1) Can't start with numbers
// 2) Can start with Number, letter, $, _
// 3) Case Sensitive

var $city = 'Bangalore';
console.log($city);

name = 'Variable name is changed here'
console.log(name);

const Name = 'SAIF';
console.log(Name);

// Name = 'Mohammed Saif';  Changing of 'const' variable is not defined but it can be done in 'var'
// console.log(Name);

// const x; // Cant leave const as black we need to initialize it

{
    let city = "Frankfurt";
    console.log(city);
}

// console.log(city); gives error as let is defined in block

const arr1 = [10,20,30,40];
console.log(arr1);
arr1.push(50);
console.log(arr1);

/* Most Common Programming Case Types: 
1. camelCase
2. kebab-case
3. snake_case
4. PascalCase
*/