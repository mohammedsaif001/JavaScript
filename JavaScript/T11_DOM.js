console.log("T11 DOM ");
let a = document;
a = document.all;
a = document.body;
a = document.forms;

a = document.all;
// a.forEach(function (ele){
//     console.log(ele);
// }) //Its not possible to do this here so instead try

// Array.from(a).forEach(function(ele){
//     console.log(ele);
// })

a = document.links;
console.log(a);

a = document.links[0].href;
console.log(a);

