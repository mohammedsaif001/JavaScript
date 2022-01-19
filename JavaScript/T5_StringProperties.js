console.log("Tutorial 5 -> String Properties");

let name1 = "Villain";
const greetings = "Hello";
console.log(greetings,name1);
console.log(greetings + " "+ name1);

//Concatenation using '+' Operator
let html;
html = "<h1>This is a Heading</h1>" +
        "<p>This a Paragraph</p>";
console.log(html);

//Concatenation
let Heading = "<h1>This is a Heading</h1>";
let para = "<p>This a Paragraph</p>";
let body = Heading.concat(para);
console.log(body);

//Length of a String
console.log("'body' variable contains " + body.length +" characters");
console.log(body.length);

//Upper to Lower & Vice-Versa

let Lower = "this_is_defined_in_lower_case";
let Upper = "THIS_IS_DEFINED_IN_UPPER_CASE";

console.log(Lower.toUpperCase());
console.log(Upper.toLowerCase());


//Indexing
console.log(Lower[1]);
console.log(html[1]);

console.log(Lower.indexOf('defined'));
console.log(Lower.indexOf('saif')); //Return -1 if not present

console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<')); 

console.log(html.charAt(0));

console.log(Lower.endsWith('case'));
console.log(Lower.endsWith('se'));
console.log(Lower.endsWith('CASE'));

console.log(Lower.substring(0,5));

console.log(Lower.slice(-4)); //NEgative indexing can be done

console.log(html.split(' '));

console.log(html.replace('This','Its')); //Replaces only 1st occurence


//Template Literals
let fruit1 = 'Orange';
let fruit2 = 'Apple';

let myHtml = `Hello ${name1} 
<h1>This is List of Fruits </h1>
<p>${fruit1} & ${fruit2}</p>
`;

// document.body.innerHTML = myHtml;
console.log(myHtml);




