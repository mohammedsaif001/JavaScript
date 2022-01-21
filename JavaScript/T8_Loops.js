console.log("T8 Loopings in JS");

//General Loops: For Loop, While Loop , Do-While Loop

//For Loop
console.warn("For Loop");
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// While loop
console.warn("While Loop");
let j = 1;
while (j <= 10) {
    console.log(j);
    j += 1;
}

//Do While Loop
console.warn("Do - While Loop");
let k = 1;
do {
    console.log(k);
    if(k === 5){
        break;
    }
    k += 1;
} while (k <= 10);

console.log("Looping is completed");


//ContinueStatement

console.warn("Continue Statement");
let x = 1
do {
    if(x===5) {
        x+=1;
        continue;
    }
    console.log(x);
    x+=1;

}while(x<=10);

console.log("Continue statemnt Executed by jumping from 4 -> 6");

//Continue Statement skips the currrent iteration and moves to next Iteration
//Break Statements comes out of the Loop




//For Each Loop
console.warn("For Earch Loop");
let arr = [10,50,20,60,37];
console.log(arr);

arr.forEach(function(ele){
    console.log(ele);
});

//NOrmal Method
console.log("Normal Iteration from Array");
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
    
}

console.warn("Another Method");
for(i in arr){
    console.log(arr[i]);
}


//Iterating - Object
console.warn("Iterating Over Object");
let obj = {
    name : "saif",
    age : 21,
    cgpa : 9.1,
    college : 'presidency University'
};
for(let key in obj){
    // console.log(key);
    // console.log(obj[key]);
    console.log(`${key} -> ${obj[key]}`);
}