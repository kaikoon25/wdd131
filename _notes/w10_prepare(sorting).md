## Sorting

The process of rearranging objects in a particular order, usually asc or desc

Because JS sorts by turning numbers into strings, use:

    function compareFn(a,b) {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
        return 0;
    }
    const sortList = list.sort(compareFn)

-1, 1, and 0 move it's place in the index.
TimSort

---

Make sure strings are all converted to lowercase because uppercase and lowercase letters are sorted diffirently in most programing languages
*Use* .toLowerCase

    let lowerPets = petList.map(pet +> pet.toLowerCase());

Then it will correctly sort in alphabetical order with
    lowerPets.sort();

---

When sorting object properties, make sure in the function to say which property you want it to sort:

    function compareFn(a,b) {
        if (a.property < b.property) {
            return -1;
        } else if (a.property > b.property) {
            return 1;
        }
        return 0;
    }
    const/let sortList = list.sort(compareFn)

---
*Sorting with .sort()*

The .sort() method reorders the items in an array based on rules you define.

*Getting a random number with Math.random()*

Math.random() generates a random decimal number between 0 and 1. When combined with .floor and multiplication you can get random whole numbers.

    // Returns a random integer from 0 to 9:
    Math.floor(Math.random() * 10);

*Looping using a set number with a for loop*

A for loop is a way to repeat a block of code a set number of times.

    for (let i = 0; i < 5; i++) {
    console.log(hikes[i].name);
    }
let i = 0; starts at 0 (initialize the counter).

i < 5; is the condition that as long as it is true the loop will keep going.

i++ increases i by 1 each time through the loop.

*.includes()*

Will find out if a certain value exists in a string.

*.find()*
Searches an array and returns those that include a certain string.