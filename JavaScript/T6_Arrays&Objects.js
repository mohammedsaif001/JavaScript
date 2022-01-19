console.log("T6 -> Arrays & Objects");

let marks = [78,69,52,36];
const fruits = ['Orange','Banana','Apple'];
const mixed = ['Saif',9.1,[8.87,9.5],true];

//Using Array Constructor
const arr = new Array(23,45,78,96);
console.log(arr);
console.log(mixed);
console.log(fruits);
console.log(marks);

console.log(arr.length);
console.log(Array.isArray(fruits));
console.log(Array.isArray("IS A ARRAY?"));

console.log(arr);

//Changing value in array
arr[1] = 98;
console.log(arr);

//Getting individual Value
console.log(arr[3]);

console.log(marks);
let value = marks.indexOf(52);
console.log(value);


//Mutating or Modifying Arrays
marks.push(100); //Adding Element at LAst
console.log(marks);

marks.unshift(10); //Adding Element at First
console.log(marks);

marks.pop() //Removing last element
console.log(marks);

marks.shift(); //Removing First Element
console.log(marks);

marks.splice(1,2); //Removes Continuos elements here it starts from 1st element and removes 2 successive elements
console.log(marks);

marks.reverse(); //Reverses an Array
console.log(marks);

//Concatenate 2 Arrays
console.log(marks);
let marks1 = [10,20,30];
console.log(marks1);
marks1 = marks1.concat(marks); //Doesnt work if its defned with 'const'
console.log(marks1);



//OBJECTS
let myObj = {
    name : 'saif',
    college: 'Presidency University',
    cgpa : 9.8,
    cities : ['Hyderabad','Bangalore','Mumbai']
}
console.log(myObj);
console.table(myObj);
console.log(myObj.cities);
console.log(myObj['cities']);