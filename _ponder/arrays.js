const steps = ['one', 'two', 'three'];

// steps.forEach(function(item){
//     console.log(item);
// })
// Annoynymus function as the parameter

steps.forEach(showStep);
function showStep(item){
    console.log(item)
};
// Calling a function as the parameter
// 'item' parameter could be anything

// -----------------------------------------------------------

let myList = document.querySelector('#myList');

const stepsHtml = steps.map(listTemplate)
function listTemplate(item){
    return `<li>${item}</li>`
    // Backtick, html tag, and ${} inside.
    // Template literal
};

myList.innerHTML = stepsHtml.join('');
// Had ","s in between the list items, so, .join('') makes it so there is nothing instead. We could do ('and') if you want an and in between instead of a comma, and whatever else.

let grades = ['A', 'B', 'C'];
let points;

let gpaPoints = grades.map(convert);

function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

console.log(gpaPoints);

// -----------------------------------------------------------

let totalPoints = gpaPoints.reduce(getTotal);

function getTotal(total, item){
    return total + item;
}

console.log(totalPoints);

let gpaAverage = totalPoints / gpaPoints.length;
console.log(gpaAverage);

// -----------------------------------------------------------

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
 
const shortWords = words.filter(function(word){
    return word.length < 6
    // Tomato is exactly six, so it wont show up.
});

console.log(shortWords);

// -----------------------------------------------------------

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber)
// Finds where the first 21 is and returns its index
console.log(luckyIndex)

// -----------------------------------------------------------

let container = document.querySelector('#studentContainer');

const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {
        last: 'Tanda', 
        first: 'Tamanda'
    }
    // Another way of visually organizing it
    // Three *objects*. All each have a last and first pair, match. 
];

students.forEach(function(item){
    let name = document.createElement('div');
    name.className = 'format';
    // Creates three more divs inside the original div (container) and adds a class 'format' to each.

    let html = `
        <span>${item.first}</span>
        <span>${item.last}</span>
        <hr>
    `
    // Grabs 'first' and 'last' from the object, which is the first and last name here. Added horizontal rule inbetween to show you can do a lot, add whatever.
    name.innerHTML = html
    container.appendChild(name);
})