// button drop down menu that listens for mouse clicks of diffirent options between light and dark mode
// Light mode is the default styling in the css page. But it needs to be changed back manually
// Dark mode has a dark gray background, white text, and diffirent logo image. The blue text may need to be a lighter blue
// Need to select: drop down button, logo image, blue text, and content


let selectElem = document.querySelector('select');
let logo = document.querySelector('#logo');
let h2 = document.querySelector('#h2');
let content = document.querySelector('#content');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = '#333333'
        content.style.color = 'white'
        content.style.border = ('1px, solid, lightgray')
        h2.style.color = '#A1C4E6'
        logo.setAttribute('src', 'byui-logo-white.png')
    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = 'white'
        content.style.color = 'black'
        content.style.border = ('1px, solid, darkgray')
        h2.style.color = '#035f9c'
        logo.setAttribute('src', 'byui-logo-blue.png')
    }
}        
// document.content.style.border = ('1px, solid, lightgray')            