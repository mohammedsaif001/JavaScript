console.log("T10 Manipulating Websites using JS Window Object");

//DOM - Document Object Model

let a = window.document;
// window.alert("hello Villain"); 
// alert("hello Villain");
// a = prompt("Enter Your NAme");
// a= confirm("Are You SUre to Delete"); //Returns Boolean

a = window.innerHeight;
a = window.innerWidth;
a = innerWidth;

a = scrollX;
a = scrollY;

//We can skip writing window. because window objects are global so instead of writing window.scrollX we can directly write scrollX

a = location;
// a = location.reload(); //To reload the page
// a = location.href = '//presidencyuniversity.in'; //Goes to a new webpage
// a = location.toString(); //Get the URL of the webpage
a=window.history;
a = history.go(-1);
console.log(a);