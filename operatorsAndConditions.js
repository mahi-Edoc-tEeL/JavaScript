// this is a single line comment

/* this is a multi-line comment
   that spans multiple lines */

// Airthmetic Operators
let a = 10;
let b = 5;
let c = a + b; // Addition
let d = a - b; // Subtraction
let e = a * b; // Multiplication
let f = a / b; // Division
let g = a % b; // Modulus
console.log("a: " + a, "b: " + b);
console.log("Addition: " + c);
console.log("Subtraction: " + d);
console.log("Multiplication: " + e);
console.log("Division: " + f);
console.log("Modulus: " + g);
console.log("Exponentiation: " + (a ** b)); // Exponentiation

// increment and decrement operators
let x = 10;
console.log("x: " + x);
console.log("Increment: " + (++x));
console.log("Decrement: " + (--x));

/* increment and decrement operators are unitary operators,
 which means they only operate on a single operand.
The increment operator (++) increases the value of the operand by 1,
while the decrement operator (--) decreases the value of the operand by 1.*/

// the difference between pre-increment and post-increment is that pre-increment increases the value of the operand before it is used in an expression,
// while post-increment increases the value of the operand after it is used in an expression.
// The same applies to pre-decrement and post-decrement.

/* a++ is equal to a = a + 1, but the value of a++ is the original value of a before the increment.
   ++a is equal to a = a + 1, but the value of ++a is the new value of a after the increment. */

console.log("Pre-increment: " + (++x)); // Pre-increment
console.log("Post-increment: " + (x++)); // Post-increment
console.log("Value of x after post-increment: " + x); // Value of x after post-increment

/* a-- is equal to a = a - 1, but the value of a-- is the original value of a before the decrement.
   --a is equal to a = a - 1, but the value of --a is the new value of a after the decrement. */
console.log("Pre-decrement: " + (--x)); // Pre-decrement
console.log("Post-decrement: " + (x--)); // Post-decrement
console.log("Value of x after post-decrement: " + x); // Value of x after post-decrement

//assignment Operators
let y = 10;
console.log("y: " + y);
y += 5;
/* y = y + 5 this is an assignment operator that adds the value on the right to the variable on the left and assigns the result to the variable on the left. */
console.log("y after += 5: " + y);
y -= 3;
/* y = y - 3 this is an assignment operator that subtracts the value on the right from the variable on the left and assigns the result to the variable on the left. */
console.log("y after -= 3: " + y);
y *= 2; // y = y * 2 this is an assignment operator that multiplies the variable on the left by the value on the right and assigns the result to the variable on the left.
console.log("y after *= 2: " + y);
y /= 4; // y = y / 4 this is an assignment operator that divides the variable on the left by the value on the right and assigns the result to the variable on the left.
console.log("y after /= 4: " + y);
y %= 3; // y = y % 3 this is an assignment operator that calculates the remainder of the division of the variable on the left by the value on the right and assigns the result to the variable on the left.
console.log("y after %= 3: " + y);


/* there should not be any spaces between the operator and the assignment operator,
for example y += 5 is correct, but y + = 5 is incorrect.*/

//comparison Operators
let n = 10;
let m = 20;
console.log("n: " + n);
console.log("m: " + m);
console.log("n == m: " + (n == m)); // equal to
console.log("n != m: " + (n != m)); // not equal to
console.log("n < m: " + (n < m)); // less than
console.log("n > m: " + (n > m)); // greater than
console.log("n <= m: " + (n <= m)); // less than or equal to
console.log("n >= m: " + (n >= m)); // greater than or equal to

/* == is the equality operator that checks if the values of two operands are equal, and returns true if they are equal, and false if they are not equal.
   != is the inequality operator that checks if the values of two operands are not equal, and returns true if they are not equal, and false if they are equal.
   < is the less than operator that checks if the value of the left operand is less than the value of the right operand, and returns true if it is, and false if it is not.
   > is the greater than operator that checks if the value of the left operand is greater than the value of the right operand, and returns true if it is, and false if it is not.
   <= is the less than or equal to operator that checks if the value of the left operand is less than or equal to the value of the right operand, and returns true if it is, and false if it is not.
   >= is the greater than or equal to operator that checks if the value of the left operand is greater than or equal to the value of the right operand, and returns true if it is, and false if it is not.*/

/* the difference between == and === is that == checks for equality of values, while === checks for equality of values and types.
   For example, 10 == "10" is true, but 10 === "10" is false.*/

/* the difference between != and !== is that != checks for inequality of values, while !== checks for inequality of values and types.
   For example, 10 != "10" is false, but 10 !== "10" is true.*/
/* the difference between < and <= is that < checks if the left operand is less than the right operand, while <= checks if the left operand is less than or equal to the right operand.
   For example, 10 < 10 is false, but 10 <= 10 is true.*/
/* the difference between > and >= is that > checks if the left operand is greater than the right operand, while >= checks if the left operand is greater than or equal to the right operand.
   For example, 10 > 10 is false, but 10 >= 10 is true.*/

/* with == the datatypes are converted to the same type before comparison,
while with === the datatypes are not converted and must be the same for the comparison to return true.*/

let p = 10;
let q = "10";
console.log("p: " + p);
console.log("q: " + q);
console.log("p == q: " + (p == q)); // true because the datatypes are converted to the same type before comparison
console.log("p === q: " + (p === q)); // false because the datatypes are not converted and must be the same for the comparison to return true

// the conversion of datatypes is called type coercion, and it can lead to unexpected results if not handled properly.
// It is generally recommended to use === and !== for comparisons to avoid type coercion issues.

// the implicit conversion follows the left to right rule, which means that the left operand is converted to the type of the right operand before comparison.

// i.e here the p is converted to a string before comparison, so the comparison is between "10" and "10", which is true.

//logical Operators
let r = true;
let s = false;
console.log("r: " + r);
console.log("s: " + s);
console.log("r && s: " + (r && s));
console.log("r || s: " + (r || s));
console.log("!r: " + !r);
// the logical AND operator (&&) returns true if both operands are true, and false if either operand is false.
// the logical OR operator (||) returns true if either operand is true, and false if both operands are false.
// the logical NOT operator (!) returns true if the operand is false, and false if the operand is true.

let condition1 = r>s;
let condition2 = r===s;
console.log("condition1: " + condition1);
console.log("condition2: " + condition2);
console.log("condition1 && condition2: " + (condition1 && condition2));
console.log("condition1 || condition2: " + (condition1 || condition2));
console.log("!condition1: " + !condition1);

//logical operator table
// condition1 | condition2 | condition1 && condition2 | condition1 || condition2 | !condition1
//     true    |    true    |           true            |           true            |     false
//     true    |    false   |           false           |           true            |     false
//     false   |    true    |           false           |           true            |     true
//     false   |    false   |           false           |           false           |     true

/*conditional statements*/
//if statement
{
   let age = 18;
   if (age >= 18) {
      console.log("You are an adult.");
   }
   /*multiple if statements can be used to check multiple conditions,
   and the else statement can be used to execute code if none of the conditions are true.*/

   if (age < 18) {
      console.log("You are a minor.");
   }
   //both if statements are independent of each other, and both can be executed if their conditions are true.
}
//if else statement
{
   let age = 18;
   if (age >= 18) {
      console.log("You are an adult.");
   } else {
      console.log("You are a minor.");
   }
// the if statement checks if the condition is true, and if it is, it executes the code block inside the if statement.
/* multiple if statements can be used to check multiple conditions,
 and the else statement can be used to execute code if none of the conditions are true.*/

}

{
   let score = 85;
   if (score >= 90) {
      console.log("You got an A.");
   } else if (score >= 80) {
      console.log("You got a B.");
   } else {
      console.log("You got a C.");
   }
   // the else if statement checks if the condition is true, and if it is, it executes the code block inside the else if statement.
   // If none of the conditions are true, the else statement is executed.
}


/*if a single statement is to be executed inside the if, else if, or else block,
the curly braces can be omitted. but this is generally not recommended for readability.*/

{
   let score = 85;
   if (score >= 90) console.log("You got an A.");
   else if (score >= 80) console.log("You got a B.");
   else console.log("You got a C.");
}

//ternary operator
{
   let age = 18;
   let message = (age >= 18) ? "You are an adult." : "You are a minor.";
   console.log(message);
   // the ternary operator is a shorthand for the if else statement, and it can be used to assign a value to a variable based on a condition.
   // The syntax is: condition ? value_if_true : value_if_false;
}
//you can also print the message directly without assigning it to a variable.
{
   let score = 10;
   console.log((score >= 18) ? "pass" : "fail");
}

/* MDN Web Docs is a great resource for learning about JavaScript operators and conditions.
You can find more information about operators and conditions in JavaScript at:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators*/

/* You can also find more information about the ternary operator at:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator*/


{
   //switch statement
   let day = 3;
   switch (day) {
      case 1:
         console.log("Monday");
         break;
      case 2:
         console.log("Tuesday");
         break;
      case 3:
         console.log("Wednesday");
         break;
      case 4:
         console.log("Thursday");
         break;
      case 5:
         console.log("Friday");
         break;
      case 6:
         console.log("Saturday");
         break;
      case 7:
         console.log("Sunday");
         break;
      default:
         console.log("Invalid day");
   }
/* The switch statement is used to perform different actions based on different conditions.
The switch statement evaluates an expression and matches the value of the expression to a case clause, and executes the associated block of code.
If no case matches, the default block of code is executed. The break statement is used to exit the switch statement after a case is executed. */

}

//about MDN web DOCs
/* MDN Web Docs is a comprehensive resource for web developers, providing documentation and tutorials on web technologies such as HTML, CSS, JavaScript, and more.
 It is maintained by Mozilla, the organization behind the Firefox web browser, and is widely regarded as one of the most reliable and up-to-date sources of information for web development.

MDN Web Docs offers a wide range of resources, including:
- Detailed documentation on web standards and APIs, including HTML, CSS, JavaScript, and more.
- Tutorials and guides for beginners and experienced developers alike.
- Interactive examples and code snippets to help developers learn by doing.
- A community-driven approach, allowing developers to contribute and improve the documentation.*/

//Practice Exercises
/*Qs1 Getuser to input a number using prompt. check if the number is a muliple of 7 or not*/
{
   let num = parseInt(prompt("Enter a number: "));
   if (num % 7 === 0) {
      console.log(num + " is a multiple of 7.");
   } else {
      console.log(num + " is not a multiple of 7.");
   }
}
//prompt is a built-in function in JavaScript that displays a dialog box that prompts the user for input.
//It returns the input as a string, so we need to use parseInt() to convert it to an integer before performing the modulus operation.

/* Qs2. Write a code which can give grades to students according to their scores*/
{
   let score = parseInt(prompt("Enter the student's score: "));
   if (Number.isNaN(score) || score < 0 || score > 100) {
      console.log("Please enter a score between 0 and 100.");
   } else if (score >= 90 && score <= 100) {
      console.log("Grade: A");
   } else if (score >= 80 && score < 90) {
      console.log("Grade: B");
   } else if (score >= 70 && score < 80) {
      console.log("Grade: C");
   } else if (score >= 0 && score < 70) {
      console.log("Grade: D");
   }
   else {
      console.log("Fail");
   }
   //number.isNaN() is a built-in function in JavaScript that checks if a value is NaN (Not-a-Number).
   // It returns true if the value is NaN, and false otherwise.
}
