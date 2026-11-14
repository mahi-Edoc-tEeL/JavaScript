//Arrays
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // Output: apple
console.log(fruits.length); // Output: 3
/* arrays are used to store multiple values in a single variable.
They can hold values of different data types, including numbers, strings, and even other arrays.
You can access elements in an array using their index,
 which starts at 0. The length property returns the number of elements in the array. */

// we use array when we want to store multiple values in a single variable.
let marks = [90, 85, 78, 92];
console.log(marks[0]); // Output: 90
console.log(marks.length); // Output: 4

//length is a property of an array that returns the number of elements in the array.
// It is useful for determining the size of the array and for iterating through its elements.

// there is a difference between properties and methods in JavaScript. Properties are values associated with an object,
// while methods are functions that can be called on an object.
// In the case of arrays, length is a property that returns the number of elements in the array,
// while push() and pop() are methods that can be used to add or remove elements from the array.

/*the type of an array in JavaScript is "object". This is because arrays are a type of object that can hold multiple values.
You can check the type of an array using the typeof operator, which will return "object".
However, you can also use the Array.isArray() method to check if a variable is an array,
which will return true if it is an array and false otherwise.*/

/* array is a special type of object in JavaScript that is used to store multiple values in a single variable.
 Here in array the indecies will act as keys just like in objects */

 // You can  modify elements in an array by assigning a new value to a specific index.
fruits[1] = "grape";
console.log(fruits); // Output: ["apple", "grape", "orange"]

//Looping over an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
};

// we can also use for of loop to iterate over an array
for (let fruit of fruits) {
    console.log(fruit);
}

// we can also use for in loop to iterate over an array
for (let index in fruits) {
    console.log(fruits[index]);
}

// we can also use forEach() method to iterate over an array
fruits.forEach(function(fruit) {
    console.log(fruit);
});

//Practice Questions
//QS1 For a given array with marks of students -> [85,97,76,88,92],
// find the average marks of the students.
let mark = [85, 97, 76, 88, 92];
let sum = 0;
for (let i = 0; i < mark.length; i++) {
    sum += mark[i];
}
let average = sum / mark.length;
console.log(average);
//Qs2. For a given array with prices of 5 items ->[250,645,300,900,50]
// All items have an offer of 10% OFF on them. change the array to store final price after applying offer.
let prices = [250, 645, 300, 900, 50];
for (let index in prices) {
    prices[index] = prices[index] - (prices[index] * 0.1);
}
console.log(prices);

/* methods*/
// method name | description
// push() | adds one or more elements to the end of an array and returns the new length of the array.
// pop() | removes the last element from an array and returns that element.


// You can add elements to an array using the push() method.
fruits.push("kiwi");
console.log(fruits); // Output: ["apple", "grape", "orange", "kiwi"]

// You can remove the last element from an array using the pop() method.
fruits.pop();
console.log(fruits); // Output: ["apple", "grape", "orange"]

//toString() method converts an array to a string and returns the result.
let fruitsString = fruits.toString();
console.log(fruitsString); // Output: "apple,grape,orange"

//toString will not change the original array, it will return a new string representation of the array.

//i.e some methods will change the original array and some will not change the original array.

//Concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let vegetables = ["carrot", "broccoli", "spinach"];
let food = fruits.concat(vegetables);
console.log(food); // Output: ["apple", "grape", "orange", "carrot", "broccoli", "spinach"]

//unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift("mango");
console.log(fruits); // Output: ["mango", "apple", "grape", "orange"]

//shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
fruits.shift(); // Output: "mango"
console.log(fruits); // Output: ["apple", "grape", "orange"]

//Slice and Splice
//slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
//Slice(start, end) - start is the index at which to begin extraction, and end is the index at which to end extraction (not included).
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ["grape", "orange"]
//if we give only one argument then it will slice the array from that index to the end of the array.
let slicedFruits2 = fruits.slice(1);
console.log(slicedFruits2); // Output: ["grape", "orange"]

//if we don't give any argument then it will slice the whole array.
let slicedFruits3 = fruits.slice();
console.log(slicedFruits3); // Output: ["apple", "grape", "orange"]


//Splice(start, deleteCount, item1, item2, ...) - start is the index at which to start changing the array, deleteCount is the number of elements to remove,
// and item1, item2, ... are the elements to add to the array.
//splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
fruits.splice(1, 2, "banana", "pear");
console.log(fruits); // Output: ["apple", "banana", "pear", "orange"]

//Splice can be used to replace elements in an array, while slice is used to create a new array from a portion of an existing array.
// In splice if we give only one argument then it will remove all the elements from that index to the end of the array.
// if we don't give any argument then it will not remove any element from the array. It will just add the new elements at the given index.


//Prectice Questions
//Qs1. Create an array to store companies -> ["Google", "Microsoft", "Apple", "Amazon", "Facebook"]
/*remove the first company form the array*/
companies.shift();

//remove apple and ola  in its place
companies.splice(2, 1, "Ola");
// add amazon at the end of the array
companies.push("Amazon");



