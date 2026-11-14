

age = 24;
console.log(age);
PRICE = 100;
console.log(PRICE);
x = null;
console.log(x);
y = undefined;
console.log(y);
isActive = true;
console.log(isActive);
isFollowing = false;
console.log(isFollowing);
let fullName = 'mahesh';
console.log(fullName);
const PI = 3.14;
console.log(PI);
let firstName = 'mahesh';
let lastName = 'nalla';
console.log(firstName + ' ' + lastName);
firstName = "Mahesh";
console.log(firstName + ' ' + lastName);
//PI = 2.6;
//console.log(PI);


let subject;

console.log(subject);
subject = "Mathematics"; // you can declare a variable without initializing it.
console.log(subject);
let marks = null; // you can declare a variable and initialize it with null.
marks = 100; // you can reassign a variable that is initialized with null.
console.log(marks);

//const a;  you cannot declare a constant without initializing it
//console.log(a);

//const b = 10; you cannot reassign a constant variable
// A block scope is a set of statements that are enclosed in curly braces {}.
// A block scope is created whenever you use a pair of curly braces {}.
// A block scope can be created inside a function, an if statement, a for loop, or any other block of code.

// let and const are block scoped, while var is function scoped.
// This means that variables declared with let and const are only accessible within the block they are defined in,
// while variables declared with var are accessible throughout the entire function they are defined in.
{
    let firstName = 'mahesh';
    console.log(firstName);
}
{
    let firstName = 'nalla';
    console.log(firstName);
}

// same variable name can be used in different block scopes,
// but not in the same block scope.
// a block is a set of statements that are enclosed in curly braces {}.

let z;

let k = null;

// the type of z is undefined where as the type of k is object because null is an object in JavaScript.
console.log(typeof z); // undefined
console.log(typeof k); // object
//the difference between undefined and null is that undefined means a variable has been declared but has not yet been assigned a value,
//while null is an assignment value that represents no value or no object.
//datatypes are divided into two types: primitive and non-primitive.
// Primitive data types are string, number, boolean, null, undefined, and symbol.
// Non-primitive data types are object, array, and function.
// an object is a collection of properties,
// and a property is an association between a name (or key) and a value.

const student = {
    name: "mahesh",
    age: 32,
    degree: "PhD"
};
console.log(student);

console.log(student.name);// dot notation
console.log(student['age']);// bracket notation
// values can be accessed using dot notation or bracket notation.
// Dot notation is more common and easier to read,
// but bracket notation is useful when the property name is dynamic or contains special characters.

student.age = student.age +1 ; // you can change the value of a property in an object.
console.log(student.age);

student["degree"] = "M.Tech"; // you can change the value of a property in an object using bracket notation.
console.log(student["degree"]);

//here the student is a constant object, but the properties of the object can be changed.
// you cannot reassign a constant object, but you can change the properties of the object.

//Q1. Create a constant object called "product" to store information about a product, including its name, price, and quantity.
// Then, update the price and quantity of the product and log the updated object to the console.

const product = {
    name: "Laptop",
    price: 1000,
    quantity: 10,
    rating: 4.5
};
product.price = 1200;
product.quantity = 15;
console.log(product);

//Q2. Createa constant called profile to store information about a instagram profile,
// including its username, followers, and following.
// Then, update the followers and following of the profile and log the updated object to the console.

const Profile = {
    username: "mahesh_nalla",
    followers: 1000,
    following: 500,
    isFollowing: true
};
Profile.followers = 1500;
Profile.following = 600;
console.log(Profile);

//why the type of profile is a function but Profile is an object?

//ƒ profile() { [native code] }?
//this means that profile is a function that is defined in the global scope, and it is a native function that is built into JavaScript.

const profile = {
    username: "mahesh_nalla",
    followers: 1000,
    following: 500,
    isFollowing: true
};
console.log(typeof profile);
console.log(profile);
