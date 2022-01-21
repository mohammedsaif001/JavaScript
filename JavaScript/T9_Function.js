console.log("Functions in JavaScript");
let name1 = 'Villain';
let name2 = "Beast";

function birthdayWish(inputName,relation="Your Friend") {
    console.log(`How do you keep getting older but looking younger? Just one of the many amazing things about you!\nHappy Birthday ${inputName}\n${relation}`);
}

birthdayWish(name1,'Your Bro');
birthdayWish(name2);


//Returning a Value

function add(n1,n2){
    sum = n1 + n2;
    return sum;
}

res = add(15,65);
console.log("Addition =",res);

// Function in a Object
let myObj = {
    name : "SAIF",
    game : function(){
        return 'SAN ANDREAS';
    }
};

console.log(myObj.game());

//Note: let/const has block level scope & var has function level scope