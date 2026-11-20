nums = [12, 10, 8, 3];

console.log(nums.sort(compareFn));

function compareFn(a,b) {
  if (a.price < b.price) {
    return -1;
  } else if (a.price > b.price) {
    return 1;
  }
 return 0;
}

const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

let simpleSort = simpleList.sort();
console.log(simpleSort);

let lowerList = simpleList.map(function(fruit) {
    return fruit.toLowerCase();
})

let lowerSort = lowerList.sort();
console.log(lowerSort);

// !!
let searchTerm = 'co';
let filterFruit = lowerSort.filter(searchFruit);

function searchFruit(item) {
    return item.includes(searchTerm);
}

console.log(filterFruit);
// !!

const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];

let productSort = products.sort(compareFn);
console.log(productSort);
// Returns whole object but now sorted by price. However, now the numbers sort is broken.


const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];

// !!
let query = 'dog';
let filterdList = animals.filter(searchList);

function searchList(animal) {
    return animal.name.toLowerCase().includes(query.toLocaleLowerCase());
}
console.log(filterdList);

let queryTrait = 'wild';
let filteredTraits = animals.filter(searchTraits);

function searchTraits(animal) {
    return animal.traits.find((trait) => trait.toLowerCase().includes(queryTrait.toLowerCase()));
}
// needed to add .find((trait) => trait.)
console.log(filteredTraits);

// -------------------------------------------------

