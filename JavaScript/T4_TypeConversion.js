console.log("Tutorial 4 TypeConversion & TypeCoersion");
//TYPE CONVERSION
//Number to String
let myVar = 34;
console.log(myVar+" is a "+typeof myVar);

myVarString = String(myVar);
console.log(myVarString+" is a "+typeof myVarString);

//Boolean to String
let booleanVar = true;
console.log(booleanVar,(typeof booleanVar));

booleanVar = String(true);
console.log(booleanVar,(typeof booleanVar));

//Date to String
let date = new Date();
console.log(date,(typeof date));

date = String(new Date());
console.log(date,(typeof date));


//Array to String
let arr = [10,25,45,63];
console.log(arr,(typeof arr));
console.log(arr.length,(typeof arr));


//Array to String
arr = String([10,25,45,63]);
console.log(arr,(typeof arr));
console.log(arr.length,(typeof arr));

//toString
let i = 8;
console.log(i,i.toString());



//String to Number
let stri = "3456789";
console.log(stri,(typeof stri));
striNum = Number(stri);
console.log(striNum,(typeof striNum));

let random = "45689lk";
console.log(random,(typeof random));
randomNum = Number(random);
console.log(randomNum,(typeof randomNum)); //Returns NaN which means notANumber because there is a letter in that variable which cant be converted to numerical

//Boolean to Number
let isTrue = false;
console.log(isTrue,(typeof isTrue));
let isTrueString = Number(isTrue);
console.log(isTrueString,(typeof isTrueString));


//Parse Int -> Strictly Converts value to integer
let number = '3698.2364';
console.log(number,(typeof number));

number = Number(number);
console.log(number,(typeof number));

number = parseInt(number); 
console.log(number,(typeof number));

//Parse Float
let n = '789';
console.log(n,(typeof n));
let nFloat = parseFloat(n);
console.log(nFloat,(typeof nFloat));

//toFixed -> Cutom decimal point Numbers(Round Off)
let value = 78.963214587;
console.log(value);
console.log(value.toFixed(3));
let newValue = value.toFixed(2);
console.log(newValue,(typeof newValue));





//TYPE CO-ERCION
let myStr = "789";
let myNum = 85;

console.log(myStr+myNum);
console.log(Number(myStr)+myNum);