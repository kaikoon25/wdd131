## Objects

Collections of related data. A way to organize and structure data.

People
    name
    age
    occupation

Properties and methods

let person = {
    name: "Jacob",
    age: 25
    job: "Developer"
};

### Properties

person.name returns "Jacob"
person.age returns 25
These values can be used like any other variable

console.log(person.job)

let title = document.querySelector('h1');
title.textContent = person.name

### Methods

let car = {
    brand: "Honda",
    model: "Passport",
    start: function() {
        console.log("Car is starting...");
    }
};
Will console log when that method (start(?)) is called

*for a function method in a object, it could be*
    *return this.price * this.quantity;*
"this" refers to the object. Picking the property price and the property quantity.

