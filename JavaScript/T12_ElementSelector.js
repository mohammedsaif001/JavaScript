console.log(" T12 HTML SELECTORS");
/*
Element Selector: 
1. Single Elemnt Selector
2. Multi Element Selector

*/


//Single ELement Selector
let ele = document.getElementById('myfirst');
// ele = ele.className; //To get the the class of particular ele
// ele = ele.childNodes;
// ele = ele.parentNode;


ele.style.color = 'red' //TO change the css properties of a particular elemenr

ele.innerText = "Child1 -> BEast"

ele.innerHTML = "<h1>FUCK YOU </h1>"
console.log(ele.innerHTML);


//Query Selectors
let sel = document.querySelector('#myfirst'); //ID SELECTOR
sel = document.querySelector('.child'); //CLASS SELECTOR
sel = document.querySelector('h1'); //HTML TAG SELECTOR only 1st
console.log(sel);



//Multi Element Selector
let ele1 = document.getElementsByClassName('child');
console.log(ele1);
console.log(ele1[0]);

let elems = document.getElementsByClassName('container');
console.log(elems[0].getElementsByClassName('child'));


//Get Ele by Tag Name
let div = document.getElementsByTagName('div');
console.log(div);

//Changing TAg by Css in for each loop

let changeDiv = document.getElementsByTagName('div');
Array.from(changeDiv).forEach(ele => {
    ele.style.color = 'blue';
})