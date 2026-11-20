*A function to greet someone:*
function greetName(name) {
    console.log('Hello ' + name);
}

Calling the function:
greetName("Ruby")
greetName("Bob")


*Another example*
let h1Content = document.querySelector('h1')
let num1 = 2
let num2 = 5

<!-- h1Content.textContent = addIt(num1, num2); -->

function addIt(n1, n2) {
    return(n1 + n2)
}

h1Content.textContent = addIt(num1, num2);
*Don't have to use different names, but can.*

*We can call the function above or below. Which is called hoisting.*
*Only declaration functions can be hoisted.*

*Function expression. Above is an anonymous function I think.*
let add = function addIt(n1, n2) {
    return(n1 + n2)
}
*Good for when you need to use the function many times. Just cannot be hoisted.*

console.log(add(3, 5));


*You can make a parameter inside a function a call to another function*


*Arrow function, useful for short simple functions.*
let sum = (no1, no2) => no1 + no2;

console.log(sum(5, 6));
*Can make the parameters empty if the function is so simple it does not need inputs.*

---------------------------------------------------------

**Conditional Operators**
>
<
>=
<=
==
=== *Equal to value and type*
!== *Not equal to value or not equal to type*
&& *AND operator, both conditions must be true*
|| *OR operator (either condition can be true)*
! *NOT operator (inverts the condition)*


if(temperature > 80) {
    console.log("It's hot outside!");
} else if (temperature < 40) {
    console.log("It's freezing!")
} else {
    console.log("It's a pleasant day.");
}

if (inputUser === username && inputPass === password) {
    console.log("Welcome back.");
} else {
    console.log("Invalid credentials, please try again.");
}


*Instead of writing numerous else if conditions, you can use the switch statement.*
*Break will stop the execution of the switch block once a match is found.*

let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the workweek.");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Just another day.");
}

--------------------------------------------------

Events are actions or occurrences that trigger JS code to run making the web page interactive.
Event examples:
- Clicking a button
- Moving a mouse
- Pressing a key
- Submitting a form

Types of Events (of some)
*parameter*
*Mouse events*
- click
- mouseover
- mouseout
*Keyboard events*
- keydown
- keyup
*Form events*
- submit
- input
*Document Events*
- scroll
- DOMContentLoaded

const button = document.getElementById('myButton');
button.addEvetListener('click', function () {
    document.getElementById('message').textContent = 'Button was clicked!';
});
*Makes button element, adds an event listener for the 'click' event, then changes the text of the paragraph.*
*If I use an already made (named) function instead of defining a new function, don't include the empty parentheses after the function name and simply do, for example,*
button.addEventListener('click', showMessage)

*To pass a parameter with an event, or in other words send a parameter when an event is triggered, is to use an  anonymous or arrow function to call the function*

const btn = document.getElementById('myBtn');
function greet(name) {
    console.log('Hello, ${name}!');
}

btn.addEventListener('click', () => greet('Alice'));