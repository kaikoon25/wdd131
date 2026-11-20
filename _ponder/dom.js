const title = document.querySelector('h1');
console.log(title);
title.textContent = 'Web Page Components';

document.querySelector('#topics').style.color = 'red';
// If you want it as a variable:
// let topics = document.querySelector('#topics');
// topics.style.color = 'red';
// Does the same thing just saves it as a variable

// Same as above just another way, already knows its an ID
document.getElementById('topics').style.color = 'purple';

let list = document.querySelector('.list');
list.style.border = '3px solid black';
//border: how thick, what kind, and what color

let para = document.querySelector('p');
//para.style.backgroundColor = 'lightblue';
para.classList.add('background');
//Added css rules in the css file for the class background. This simply adds the class background to the first 'p' element, and that class background now has rules/changes in the css

document.querySelector('body').classList.add('background');
// Now everything in the body has the class background lol
// Interesting how the above purple change still works. Not simple list by list like css

const image =document.querySelector('img');
image.setAttribute('src', 'images/logos_google.jpg')


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'red';
})
                