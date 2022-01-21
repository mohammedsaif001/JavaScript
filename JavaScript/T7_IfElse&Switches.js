console.log("T7 -> If Else & Switches");

const age = 47;
if(age==21){
    console.log("Age is 21");
}
else if (age>21){
    console.log("Age is greater 21");
}
else{
    console.log("Age is less than 21")
}


//Triple equal to operator is used to check condition as well as type like string and number should be same

let num = '81'
if(num === 81){
    console.log("False");
}
else if (num === '81'){
    console.log("Number & String is matched");
}
else{
    console.log("NOt Equal")
}


// const vari = 34;
if(typeof vari !== 'defined'){
    console.log("vari is not defined");
}
else{
    console.log("vari is defined");
}

const drivingEligibility = true;
if(drivingEligibility && age>=18){
    console.log("You Can Drive");
}
else{
    console.log("You cannot Drive");
}

//Ternary Operator
console.log(age==41?'Age is 41':'Age is not 45');



//Switch Statements
switch (age) {
    case 47:
        console.log("Age is 47");
        break;
    case 18:
        console.log("Age is 18");
        break;

    default:
        console.log("Age is not known");
        break;
}