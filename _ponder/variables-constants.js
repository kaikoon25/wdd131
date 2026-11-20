const PI = 3.14;
let radius = 3;
let area = radius * radius * PI;
/* PI is not like pi. Upper and lowercase matter */
/* Every line ends with a ; */

console.log(area); /* Simply sends it to the console. So we can see */

radius = 20;
area = radius * radius * PI; /* Geuss you need to recalculate */

console.log(area);


// Type coersion
const one = 1;
const two = '2';

let result = one * two;
console.log(result);

result = one + two;
console.log(result);

/* Number must be capitalized */
result = one + Number(two);
console.log(result);


// Scope
let course = "CSE131"; //global scope
/* Below is basically "if true is true". True is always true. if (true) will always run and if (false) will never run */
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    