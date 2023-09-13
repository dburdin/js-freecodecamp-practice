// * 7
// const numbers = [51, 18, 13, 24, 7, 85, 19, 3, 1];

// * Poly,Mango,Ajax,Kiwi
// const friends = ["Poly", "Mango", "Ajax", "Kiwi"];

//  * jAVAsCRIPT
// const string = "JavaScript";

//  * top-10-benefits-of-react-framework
// const title = "Top 10 benefits of React framework";

// * Sum of array`s elements
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 35, 45];

// * Splice | Remove.Add.Update
// const items = [51, 18, 13, 24, 7, 85, 19, 3];

// function findFriendByName(allFriends, name) {
//   for (const friend of allFriends) {
//     if (friend.name === name) {
//       console.log(`${name} is in your friendlist`);
//       return;
//     }
//   }
//   console.log(`${name} is not in your friendlist `);
// }

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Bobby"));

// function getOnlineFriends(allFriends) {
//   let onlineFriends = [];
//   for (const friend of allFriends) {
//     if (friend.online) {
// onlineFriends.push(friend);
//     }
//   }

//   return onlineFriends;
// }
// console.log(getOnlineFriends(friends));
// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };
//     for (const item of this.items) {
//       if (product.name === item.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;

//     for (const item of items) {
//       if (item.name === productName) {
//         const index = items.indexOf(item);
//         items.splice(index, 1);
//         break;
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;

//     let totalPrice = 0;
//     for (const { price, quantity } of items) {
//       totalPrice += Number(price) * quantity;
//     }
//     return totalPrice;
//   },
//   icnreaseQuantity() {},
//   decreaseQuantity() {},
// };

// cart.add({ name: "apple", price: "50" });
// cart.add({ name: "melon", price: "150" });
// cart.add({ name: "banana", price: "250" });
// cart.add({ name: "strawberry", price: "350" });

// console.table(cart.getItems());

// cart.remove("apple");
// cart.add({ name: "strawberry", price: "350" });

// console.table(cart.items);
// console.table(cart.countTotalPrice());

// const fnA = function (parameter) {
//   const innerVariable = "Значення внутрішньої змінної функцї fnA";

//   const innerFunction = function () {};
// };
// for (let index = 0; index < array.length; index++) {
//   const element = arraSy[index];
// }

// const friends = [
//   {
//     name: "Mango",
//     online: false,
//     xp: 150,
//     tags: ["js", "html"],
//   },
//   {
//     name: "Kiwi",
//     online: true,
//     xp: 160,
//     tags: ["js", "html", "node.js"],
//   },
//   {
//     name: "Poly",
//     online: false,
//     xp: 140,
//     tags: ["js", "css", "react"],
//   },
//   {
//     name: "Ajax",
//     online: true,
//     xp: 100,
//     tags: ["html", "css", "react"],
//   },
// ];

// const totalXp = friends.reduce((total, friend) => total + friend.xp, 0);
// const allTags = friends.reduce((acc, friend) => [...friend.tags, ...acc], []);
// const statsTags = allTags.reduce(
//   (acc, tag) => ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }),
//   {}
// );

// const onlineAndSorted = friends.filter((friend) => friend.online).sort((a, b) => a.xp - b.xp);
// console.log(totalXp);
// console.log(allTags);

// console.log(statsTags);
// console.log(onlineAndSorted);

// const a = Math.PI;

// console.log(Math);
// function fakeBin(x) {
//   const arr = x.split("");

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 5) {
//       arr[i] = 1;
//     } else {
//       arr[i] = 0;
//     }
//   }

//   return arr;
// }

// console.log(fakeBin("45385593107843568"));

// async function getPoki() {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
//   const poki = await response.json();

//   return poki.abilities;
// }
// console.log(await getPoki());

// function freezeObj() {
//   const MATH_CONSTANTS = {
//     PI: 3.14,
//   };
//   // Only change code below this line
//   Object.freeze(MATH_CONSTANTS);
//   // Only change code above this line
//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch (ex) {
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();

// console.log("PI", PI);

// var magic = function () {
//   return new Date();
// };

// const magic = () => new Date();

// var myConcat = function (arr1, arr2) {
//   return arr1.concat(arr2);
// };

// const myConcat = (arr1, arr2) => arr1.concat(arr2);

// console.log(myConcat([1, 2], [3, 4, 5]));

// const increment = (number = 1, value) => number + value;

// const sum = (...args) => {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }

//   return total;
// };

// console.log(sum(1, 2, 3));

// const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
// let arr2;

// arr2 = [...arr1]; // Change this line

// console.log(arr2);

// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80,
// };

// const { today, tomorrow } = HIGH_TEMPERATURES;

// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80,
// };

// const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// ! Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object

// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 },
// };

// const {
//   today: { low: lowToday, high: highToday },
// } = LOCAL_FORECAST;
// console.log("lowTodat", lowToday);
// console.log("highToday", highToday);

//  ! Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

// let a = 8,
//   b = 6;

// [a, b] = [b, a]

// ! Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice(). removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted.

// function removeFirstTwo(list) {
//   const [a, b, ...arr] = list;

//   return arr;
// }

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);
// console.log(sourceWithoutFirstTwo);

// ! Use destructuring assignment within the argument to the function half to send only max and min inside the function.

// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };

// const half = ({max, min}) => (max + min) / 2.0;

// !Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.
// !Use an iterator method (any kind of loop) to get the desired output (shown below).

// [
//  ! '<li class="text-warning">no-var</li>',
//  ! '<li class="text-warning">var-on-top</li>',
//  !  '<li class="text-warning">linebreak</li>',
// ];

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"],
// };
// function makeList(arr) {

//   let failureItems = [];

//   for (const item of arr) {
//     failureItems.push(...[`<li class="text-warning">${item}</li>`]);
//   }

//   return failureItems;
// }

// const failuresList = makeList(result.failure);

// console.log(failuresList);

//! Use object property shorthand with object literals to create and return an object with name, age and gender properties.

// const createPerson = (name, age, gender) => {
//   return {
//     name,
//     age,
//     gender,
//   };
// };

//! Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

// const bicycle = {
//   gear: 2,
//   setGear(newGear) {
//     this.gear = newGear;
//   }
// };

// bicycle.setGear(3);
// console.log(bicycle.gear);

// ! Use the class keyword and write a constructor to create the Vegetable class.
// ! The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.

// class Vegetable {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const carrot = new Vegetable("carrot");
// console.log(carrot);
// console.log(carrot.name);
//! Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

// !In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.

//! Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

// !Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.

// !This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.

//! In other words, you are abstracting implementation details from the user.

// class Thermostat {
//   constructor(temperature) {
//     this._temperature = (5 / 9) * (temperature - 32);
//   }

//   get temperature() {
//     return this._temperature;
//   }

//   set temperature(updatedTemperature) {
//     this._temperature = updatedTemperature;
//   }
// }

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale

// console.log(thermos.temp);

// ! Create a new promise called makeServerRequest. Pass in a function with resolve and reject parameters to the constructor.

// const makeServerRequest = new Promise((resolve, reject) => {});

// ! Make the promise handle success and failure. If responseFromServer is true, call the resolve method to successfully complete the promise. Pass resolve a string with the value We got the data. If responseFromServer is false, use the reject method instead and pass it the string: Data not received.

// const makeServerRequest = new Promise((resolve, reject) => {
//   let responseFromServer;

//   if (responseFromServer) {
//     resolve("We got the data");
//   } else {
//     reject("Data not received");
//   }
// });

//! Add the then method to your promise. Use result as the parameter of its callback function and log result to the console.

// const makeServerRequest = new Promise((resolve, reject) => {
//   let responseFromServer = true;

//   if (responseFromServer) {
//     resolve("We got the data");
//   } else {
//     reject("Data not received");
//   }
// });

// makeServerRequest.then((result) => console.log(result));

//! Add the catch method to your promise. Use error as the parameter of its callback function and log error to the console.

// const makeServerRequest = new Promise((resolve, reject) => {

//   let responseFromServer = false;

//   if (responseFromServer) {
//     resolve("We got the data");
//   } else {
//     reject("Data not received");
//   }
// });

// makeServerRequest
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => console.log(error));

// * REGULAR EXPRESSIONS

//! Apply the regex myRegex on the string myString using the .test() method.

// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);

// ! Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.

// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/;
// let result = waldoRegex.test(waldoIsHiding);

// ! Complete the regex petRegex to match the pets dog, cat, bird, or fish.

// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/;
// let result = petRegex.test(petString);

// ! Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

// let myString = "freeCodeCamp";
// let fccRegex = /freeCodeCamp/i;
// let result = fccRegex.test(myString);
// console.log(result);

// ! Apply the .match() method to extract the string coding.
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/;
// let result = extractStr.match(codingRegex);
// console.log(result);

//! Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.
//! Note - You can have multiple flags on your regex like /search/gi
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle/gi;
// let result = twinkleStar.match(starRegex);

// console.log(result);

//! Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /un./;
// let result = unRegex.test(exampleStr);

//! Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample. Note: Be sure to match both upper- and lowercase vowels.
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi;
// let result = vowelRegex.test(quoteSample);
// console.log(result);
// console.log(quoteSample.match(vowelRegex));

//! Match all the letters in the string quoteSample.Note: Be sure to match both uppercase and lowercase letters.
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/gi;
// let result = quoteSample.match(alphabetRegex);

// ! Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.
// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/gi;
// let result = quoteSample.match(myRegex);
// console.log(result);

//! Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
// let quoteSample = "3 blind mice.";
// let myRegex = /[^0-9^aeiou]/gi;
// let result = quoteSample.match(myRegex);
// console.log(result);

//! You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.
// let difficultSpelling = "Mississippi";
// let myRegex = /s+/gi;
// let result = difficultSpelling.match(myRegex);

//! For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.
// let chewieRegex = /Aa*/;
// let result = chewieQuote.match(chewieRegex);

//! Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // Change this line
// let result = text.match(myRegex);
// console.log(result);

//! Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.
// let reCriminals = /C+/;

//! Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.
// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/;
// let result = calRegex.test(rickyAndCal);

//! Use the anchor character ($) to match the string caboose at the end of the string caboose.
// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/;
// let result = lastRegex.test(caboose);

//! Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g;
// let result = quoteSample.match(alphabetRegexV2).length;
// console.log(result);

//! Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.
// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g;
// let result = quoteSample.match(nonAlphabetRegex).length;

//! Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.
// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g;
// let result = movieName.match(numRegex).length;

//! Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.
// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g;
// let result = movieName.match(noNumRegex).length;

//! Change the regex userCheck to fit the constraints listed above.
//! Usernames can only use alpha-numeric characters.
//! Username cannot start with the number.
//! Username letters can be lowercase and uppercase.
//! The only numbers in the username have to be at the end. There can be zero or more of them at the end.
//! Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
// let username = "JackOfAllTrades";
// let bla = "c57bT3";
// let geg = "Michle2";
let userCheck = /^[a-z]([a-z]+\d*|\d{2,})$/gi;
// let result = userCheck.test(username);

// console.log(username.match(userCheck));
// console.log(geg.match(userCheck));
// console.log(bla.match(userCheck));

//! Change the regex countWhiteSpace to look for multiple whitespace characters in a string.
// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/gi;
// let result = sample.match(countWhiteSpace);

//! Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.
// let sample = "Whitespace is important in separating words";
// let countNonWhiteSpace = /\S/gi;
// let result = sample.match(countNonWhiteSpace);

//! Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.
// let ohStr = "Ohhh no";
// let ohRegex = /oh{3,6}\sno/gi;
// let result = ohRegex.test(ohStr);

//! Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.
// let haStr = "Hazzzzah";
// let haRegex = /Haz{4,}ah/gi;
// let result = haRegex.test(haStr);

//! Change the regex timRegex to match the word Timber only when it has four letter m's.
// let timStr = "Timmmmber";
// let tim2 = "Timmmmmber";
// let timRegex = /Tim{4}ber/gi;
// let result = timRegex.test(timStr);
// console.log(result);

// !Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.
// let favWord = "favorite";
// let favRegex = /favou?rite/gi;
// let result = favRegex.test(favWord);

//! Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
let sampleWord = "astronaut";
let pwRegex = /^(?=\w{6,})(?=.*\d{2})/gi;
let result = pwRegex.test(sampleWord);

let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex));
console.log(noquit.match(qRegex));
