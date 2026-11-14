//for loop
for (let i = 0; i < 5; i++) {
    console.log('this is a for loop');
}

/* for loop is a control structure that allows you to execute a block of code multiple times */

// infinite loop
// for (let i = 0; i < 5; i--) {
//     console.log('this is an infinite loop');
// }

//while loop
let i = 0;
while (i < 5) {
    console.log('this is a while loop');
    i++;
}

/* while loop is a control structure that allows you to execute a block of code multiple times as long as a specified condition is true */
/* the difference between a for loop and a while loop is that a for loop is used when you know how many times you want to execute a block of code,
while a while loop is used when you want to execute a block of code as long as a specified condition is true */

// do while loop
let j = 0;
do {
    console.log('this is a do while loop');
    j++;
} while (j < 5);
/* do while loop is a control structure that allows you to execute a block of code at least once and then continue executing it as long as a specified condition is true */

// for...of loop
let size = 0;
let str = 'this is a string';
for (const char of str) {
    console.log(char);
    size++;
}
console.log(`the size of the string is ${size}`);
/* for...of loop is a control structure that allows you to iterate over the values of a string, character by character */

// const array = ['this', 'is', 'a', 'for...of', 'loop'];
// for (const element of array) {
//     console.log(element);
// }
// /* for...of loop is a control structure that allows you to iterate over the values of an iterable object, such as an array */

/* for of loop cannot be used to iterate over the properties of an object, because objects are not iterable. However, you can use a for...in loop to iterate over the properties of an object. */
/* for...in loop
is a control structure that allows you to iterate over the properties of an object, one property at a time */
const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for (const key in obj) {
    console.log(key, obj[key]);
}
/* for...in loop is a control structure that allows you to iterate over the properties of an object, one property at a time */

/* practice excercise*/
//Qs1. print all even numbers from 1 to 100.
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}



