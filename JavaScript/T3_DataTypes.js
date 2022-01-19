/*
Tutorial 3

Data Types in JS: 
1. Primitive : Memory Allocation in Stack
2. Reference Data Type : Memory Allocation in Heap

Primitive -> strings, numbers, boolean, null, undefined, symbol (symbol introduced in es6)
Reference -> Arrays, Object Literals, Functions, Dates
*/

console.log("Tutorila 3 -> DataTypes Tutorials");

// PRIMITVE DATA TYPES
//String
var name = 'VILLAIN';
console.log("My Name is",name);
console.log("Data type is "+typeof(name));
console.log("Data type is "+typeof name);
console.log("Data type is "+(typeof name)); //Originally Shown

//Numbers
let mark = 90;
console.log("Dat Type is "+(typeof mark));

let mark2 = 45.98; //Even for decimal its number and not float
console.log("Dat Type is "+(typeof mark2));

//Boolean
let isDriver = false;
console.log("Data Type is "+(typeof isDriver));

//Null
let nullVar = null;
console.log("Data Type is "+(typeof nullVar));

//Undefined
let undef = undefined;
console.log("Data Type is "+(typeof undef));


//REFERENCE DATA TYPES
//Arrays
let myArr = [1,2,3,4];
console.log("Data Type is "+(typeof myArr));

myArr = [1,2,3,4,null];
console.log("Data Type is "+(typeof myArr));

myArr = [1,2,3,4,null,'Happy Birthday'];
console.log("Data Type is "+(typeof myArr));

//Object Literals
let marks3 = {
    saif :44,
    rupam : 78,
    rohan : 78.65
}
console.log(marks3);
console.log("Data Type is "+(typeof marks3));

//Functions
function nameFun(params) {
    
}
console.log("Data Type is "+(typeof nameFun));

//Date Function
let date = new Date();
console.log(typeof date)