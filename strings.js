//Strings

let greeting = "Hello, World!";
console.log(greeting);
console.log(greeting.length); // 13

//String methods

let str = "javaScript";
console.log(str[4]);
console.log(str.length);


str.charAt(1); // gives value "a"
str[1]; // gives value "a"

//Template Literals

let specialString = `this is a templeate literal `;
console.log(typeof specialString);


let obj = {
    item :'ipad',
    cost : 50000,
};

console.log('the cost of the ', obj.item, "is ", obj.cost);

// the above code can be written using template literals

let output = `the cost of ${obj.item} is ${obj.cost}`;
console.log(output);


// `this is a templete literals` , can be created using backticks ``

// templeate literals are a way to embedded expressions in strings

// creating strings by doing substitutions of placeholders are called string interpolation

/*`string text ${expression} string text`*/

let tempLit = `Total marks of a student A is ${90+90}`;
console.log(tempLit);

// we can add expressions also in the template literals, whcih supports the expressions like these.

//Escape Characters

console.log("java \nScript")
// \n is a escape character
// \t is tab space

console.log(str.length);

// Even with the escape characters the length of the string is combined lenght only.


//StringMethods

/* there are built in string methods, whcih  can be used to manipulate strings*/
// These methods will not change the original string, when you
// apply these methods it will create a copy of the string to work on
// Because  in javascript the strings are immutable


console.log(str.toUpperCase()); // converts to upper case
console.log(str.toLowerCase()); // converts to lower case
console.log(str.charAt(0)); // H
console.log(str.indexOf("World"));
console.log(str.substring(0, 5)); // Hello
console.log(str.replace("Script", "world")); // Hello, Universe!
// replace will replcae only once i.e first occured
// There is another methods to replace all i.e str.replaceAll()

let first = '   this is a JS     ';
//str.trim() // which removes the whitespaces from starting and ending  not in the middle
console.log(first.trim());

// str.slice(start. end?) // return part of the string

// str1.concat(str2) // joins str2 with str1

// There are lot of string methods which can be used when requreid.



/* Qs1 Prompt the user to enter their full name.
 Generate a username for them based on the input.
 strat with @, followed by their full name and ending with the fullname length*/

 let userName = prompt('Enter the fullName: ');

 console.log('@'+userName+userName.length);
 
// to read input using node js, use readline
/* const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter the fullName: ',(userName)=>{
     console.log('@'+userName+userName.length);
     readline.close();
});*/
