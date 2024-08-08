/*————————————————————
| CODE OUTPUTS       |
| \' single quotes   |
| \" double quote    |
| \\ backslash       |
| \n new line        |
| \r return carriage |
| \t tab             |
| \b backspace       |
| \f form feed       |
—————————————————————*/

//YouTube link: https://youtu.be/PkZNo7MFNFg

//VARIABLES
var greeting = "Hello\n"; //String Literal (use '', "", or ``) *strings are immutable*
var firstName = "Waris";
var middleName; //Undefined
var lastName = 'Sripatoomrak';
console.log(greeting, firstName, lastName);

var myStr = "This comes 1st, ";
myStr += "this comes 2nd.";
console.log(myStr);

var myStr2 = "My name is " + firstName + " " + lastName + ", and I am well!";
console.log(myStr2);

var variableLength;
var variable = "Waris_Sripatoomrak";
console.log(variable.length); //.length will return an int of numbers in variable str

//CONSTANTS
const interestRate = 0.3; //Number Literal + Constant
console.log(interestRate);
var isApproved = false; //Boolean Literal
console.log(isApproved);
var selectedColor = null; //Clearing variable"s value, no selection
console.log(selectedColor);

//OBJECTS
var name;
var age;
var person = { //{} Object Literal
    name1: "Beam", age1: 16,
    name2: "Cody", age2: 18
};
//OBJECTS; Dot Notation: changing person"s name
person.name1 = "Aie"; // <- change name from "Beam" to "Aie"
person.name2 = "Kyle"; // <- change name from "Cody" to "Kyle"
person.age1 = 29; // <- change age from 16 to 29
person.age2 = 10; // <- change age from 18 to 10
console.log(person);

//ARRAYS
var selectedColors = ["red", "blue", "green", "magenta", "cyan", "black"]; // [] for array
console.log(selectedColors[0], selectedColors[9], selectedColors[3]); //[] for getting a char at a specific index within a str
console.log(selectedColors.length);

var selectedColors = "Red";
console.log(selectedColors[0], selectedColors[1]);
var longWord = "Pneumonoultramicroscopicsilicovolcanoconiosis!";
lastLetter = longWord[longWord.length - 1] //[] for getting a char at a specific index within a str
console.log(lastLetter);

var multidimensionalArray = [["Beam", 23], ["Aie", 65]];
multidimensionalArray[0] = ["Nay", 31]
console.log(multidimensionalArray[0]);

var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// (Want to display 5)
console.log("The displayed number is", myArray[1][1]); //myArray[element][index]; both counts from 0 1 2 ...

var pushingArray = [1, 2, 3];
pushingArray.push("🌟", "🌸", "💦"); //push() will add items to the end of an array
console.log(pushingArray);
console.table(pushingArray);

var poppingArray2 = [4, 5, 6];
poppingArray2.pop(); //pop() will remove the last element of an array
console.log(poppingArray2);
console.table(poppingArray2);

var shiftingArray = [7, 8, 9];
shiftingArray.shift(); //shift() will remove the first element of an array
console.log(shiftingArray);
console.table(shiftingArray);

var unshiftingArray = [10, 11, 12];
unshiftingArray.unshift("🌟", "🌸", "💦"); //unshift() will add items to the beginning of an array
console.table(unshiftingArray);
console.log(unshiftingArray);

var shoppingList = [["milk", 3], ["eggs", 3], ["beef", 2], ["veggies", 5]];
console.table(shoppingList);

//FUNCTIONS
function reusableFunction() {
    console.log("This function is reusable!");
}
reusableFunction();
reusableFunction();
reusableFunction();

//passing values to func with arguments
function withParameters(x, y, z) {
    //parameters = placeholders for values to be input in a func when called
    console.log((x + y) * z);
}
withParameters(600, 9050, 5060); //parameters are x=600, y=9050, z=5060

function withArgs(x, y, z) {
    console.log((x + y) / z);
}
withArgs(62, 90, 30);

// #1 Version ไปกำหนดตัวแปร myName ตอนรัน function เลย
function hello(myName) {
    console.log("Hey there, " + myName + ".");
}
hello("\"Beam\"");
hello(`"Beam"`);

// #2 Version กำหนดตัวแปร myName ก่อนรัน function
var myName = "Japan"
function hello(myName) {
    console.log("Hey there, " + myName + ".");
}
hello(myName);

//WORD BLANKS
function wordBlank(noun, adj, adv, verb) {
    var formedSentence = "";
    formedSentence += "The " + adj + " " + noun + " is " + verb + " " + adv + ".";
    return formedSentence;
}
console.log(wordBlank("box", "miniscule", "rapidly", "flying"));
console.log(wordBlank("bird", "big", "shoeless", "walking"));

//MATH
//calculating values
function cube(number) {
    return number * number * number;
}
console.log(cube(69420));

console.log(66 + 10, "離さないでよ " + `"手を!" '手を!'`);

var myVariable = 2;
console.log(myVariable + 20);

var remainder;
remainder = 11 % 6;
console.log(remainder);

var a = 43;
a += 2; //shortcut for a = a + 2
//more functions: -=, *=, /=
console.log(a);

/* SCOPES (Global, Local)
Scope = accessibility of a variable from somewhere
Global scope = A variable can be accessed everywhere
Local scope = A variable can ONLY be accessed in a code block */
const flower = "dandelion"; // <- GLOBAL

function start() {
    message = "hey there"; // <- GLOBAL
    const flower = "lily"; // <- LOCAL
    //console.log(flower); // <- Returns local variable because local takes precedence over global
}
console.log(flower); // <- Returns global variable because it can be accessed everywhere

function end() {
    var message = "bye";
}