const fruits = [
  {
    id: 501,
    name: "Apple",
    color: "Red",
    taste: "Sweet",
  },
  {
    id: 502,
    name: "Banana",
    color: "Yellow",
    taste: "Sweet",
  },
  {
    id: 503,
    name: "Orange",
    color: "Orange",
    taste: "Citrusy",
  },
  {
    id: 504,
    name: "Grapes",
    color: "Purple",
    taste: "Sweet",
  },
  {
    id: 505,
    name: "Kiwi",
    color: "Green",
    taste: "Tangy",
  },
];

/**********
Question 1:
You have a function getFruitColor(fruit) that:
- receives a fruit object
- returns the color of the fruit
Don't forget to uncomment the console.log
===
ANSWER: Red
**********/

function getFruitColor(fruit) {
  // Your code here

  return fruit.color;
}
// console.log(getFruitColor(fruits[0]));

/**********
Question 2:
You have a function that:.t
- receives a fruit object
- receives a taste description (string)
- returns true if the fruit's taste matches the provided description, otherwise returns false
===
ANSWER: true
**********/

function isFruitTasteMatching(fruit, taste) {
  // Your code here

  return fruit.taste === taste;
}
// console.log(isFruitTasteMatching(fruits[3], "Sweet"));

/**********
Question 3:
addFruit(fruits, fruit):
- receives an array of fruit objects
- receives a new fruit object (with id, name, color, and taste)
- adds the new fruit to the array
- returns the updated array
===
ANSWER: 
[
  {
    "id": 501,
    "name": "Apple",
    "color": "Red",
    "taste": "Sweet"
  },
  {
    "id": 502,
    "name": "Banana",
    "color": "Yellow",
    "taste": "Sweet"
  },
  {
    "id": 503,
    "name": "Orange",
    "color": "Orange",
    "taste": "Citrusy"
  },
  {
    "id": 504,
    "name": "Grapes",
    "color": "Purple",
    "taste": "Sweet"
  },
  {
    "id": 505,
    "name": "Kiwi",
    "color": "Green",
    "taste": "Tangy"
  },
  {
    "id": 506,
    "name": "Mango",
    "color": "Yellow",
    "taste": "Sweet"
  }
]
**********/

function addFruit(fruits, fruit) {
  // Your code here

  fruits.push(fruit);
  return fruits;
}

const newFruit = {
  id: 506,
  name: "Mango",
  color: "Yellow",
  taste: "Sweet",
};

console.log(addFruit(fruits, newFruit));

/**********
Question 4:
countSweetFruits(fruits):
- receives an array of fruit objects
- returns the number of fruits with a sweet taste
===
ANSWER: 4
**********/

function countSweetFruits(fruits) {
  // Your code here

  return fruits.filter((fruit) => fruit.taste === "Sweet").length;
}
console.log(countSweetFruits(fruits));
