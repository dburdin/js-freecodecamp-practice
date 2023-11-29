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
//   canary.freeze(MATH_CONSTANTS);
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

// ! Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST canary

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

// !Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result canary and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.
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

//! Use canary property shorthand with canary literals to create and return an canary with name, age and gender properties.

// const createPerson = (name, age, gender) => {
//   return {
//     name,
//     age,
//     gender,
//   };
// };

//! Refactor the function setGear inside the canary bicycle to use the shorthand syntax described above.

// const bicycle = {
//   gear: 2,
//   setGear(newGear) {
//     this.gear = newGear;
//   }
// };

// bicycle.setGear(3);
// console.log(bicycle.gear);

// ! Use the class keyword and write a constructor to create the Vegetable class.
// ! The Vegetable class allows you to create a vegetable canary with a property name that gets passed to the constructor.

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
// let userCheck = /^[a-z]([a-z]+\d*|\d{2,})$/gi;
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
// let sampleWord = "astronaut";
// let pwRegex = /^(?=\w{6,})(?=.*\d{2})/gi;
// let result = pwRegex.test(sampleWord);

// let quit = "qu";
// let noquit = "qt";
// let quRegex = /q(?=u)/;
// let qRegex = /q(?!u)/;
// console.log(quit.match(quRegex));
// console.log(noquit.match(qRegex));

//! Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.
//! Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.
// let myString = "Eleanor Roosevelt";
// let myRegex = /(Eleanor|Franklin\s.\.)\sRoosevelt/gi;
// let result = myRegex.test(myString);

//! Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.
// let repeatNum = "42 42 42";
// let reRegex = /^(\d+) \1 \1$/gi;
// let result = reRegex.test(repeatNum);

// console.log(repeatNum.match(reRegex));

//!Write a regex fixRegex using three capture groups that will search for each word in the string one two three. Then update the replaceText variable to replace one two three with the string three two one and assign the result to the result variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.
// let str = "one two three";
// let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
// let replaceText = "$3 $2 $1";
// console.log(replaceText);
// let result = str.replace(fixRegex, replaceText);

// console.log(result);

//! Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.
//! Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.
// let hello = "   Hello, World!  ";
// let wsRegex = /\s\s+/g;
// let result = hello.replace(wsRegex, "");
// console.log(result);

// * DEBUGGING

//! Fix the two spelling errors in the code so the netWorkingCapital calculation works.
// let receivables = 10;
// let payables = 8;
// let netWorkingCapital = receivables - payables;
// console.log(`Net working capital is: ${netWorkingCapital}`);

//! Fix the string so it either uses different quotes for the href value, or escape the existing ones. Keep the double quote marks around the entire string.
// let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
// console.log(innerHtml);

//! In this example, the code block within the if statement will run for any value of y, unless y is falsy. The else block, which we expect to run here, will not actually run.
// let x = 7;
// let y = 9;
// let result = "to come";

// if (x === y) {
//   result = "Equal!";
// } else {
//   result = "Not equal!";
// }

// console.log(result);

//! Fix the code so the variable result is set to the value returned from calling the function getNine.
// function getNine() {
//   let x = 6;
//   let y = 3;
//   return x + y;
// }

// let result = getNine();
// console.log(result);

//! The function raiseToPower raises a base to an exponent. Unfortunately, it's not called properly - fix the code so the value of power is the expected 8.
// function raiseToPower(b, e) {
//   return Math.pow(b, e);
// }

// let base = 2;
// let exp = 3;
// let power = raiseToPower(base, exp);
// console.log(power);

//! Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.
// function countToFive() {
//   let firstFive = "12345";
//   let len = firstFive.length;

//   for (let i = 0; i < len; i++) {

//     console.log(firstFive[i]);
//   }
// }

// countToFive();

//! The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes. Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].
// function zeroArray(m, n) {
//   let newArray = [];
//   let row = [];
//   for (let i = 0; i < m; i++) {
//     console.log("row in i", row);
//     for (let j = 0; j < n; j++) {
//       row.push(0);
//       console.log("row in j", row);
//     }
//     console.log("row in func", row);

//     newArray.push(row);
//     row = [];
//   }
//   return newArray;
// }

// let matrix = zeroArray(3, 2);
// console.log(matrix);

// The myFunc() function contains an infinite loop because the terminal condition i != 4 will never evaluate to false (and break the looping) - i will increment by 2 each pass, and jump right over 4 since i is odd to start. Fix the comparison operator in the terminal condition so the loop only runs for i less than or equal to 4.
// function myFunc() {
//   for (let i = 1; i <= 4; i += 2) {
//     console.log("Still going!");
//   }
// }

// * Basic Data Structures

//! We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.
// const arr = [2, 4, 5, 1, 7, 5, 2, 1];

// console.log(arr.splice(1, 4));

// console.log(arr);

//! We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.

// function htmlColorNames(arr) {

//   arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");

//   return arr;
// }

// console.log(
//   htmlColorNames(["DarkGoldenRod", "WhiteSmoke", "LavenderBlush", "PaleTurquoise", "FireBrick"])
// );

//! We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny.
// function forecast(arr) {
//   // Only change code below this line
//   const newArr = arr.slice(2, 4);
//   return newArr;
// }

// // Only change code above this line
// console.log(forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"]));

//! We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).
// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // Only change code below this line
//     newArr.push([...arr]);
//     // Only change code above this line
//     num--;
//   }
//   return newArr;
// }

// console.log(copyMachine([true, false, true], 2));

//! We have defined a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].

// function spreadOut() {
//   let fragment = ["to", "code"];
//   let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
//   return sentence;
// }

// console.log(spreadOut());

//! indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.
// function quickCheck(arr, elem) {
//   if (arr.indexOf(elem) === -1) {
//     return false;
//   }
//   return true;
// }

// console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

//! We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.

// function filteredArray(arr, elem) {
//   let newArr = [];
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     if (element.indexOf(elem) === -1) {
//       newArr.push(element);
//     }
//   }
//   // Only change code above this line
//   return newArr;
// }

// console.log(
//   filteredArray(
//     [
//       [3, 2, 3],
//       [1, 6, 3],
//       [3, 13, 26],
//       [19, 3, 9],
//       [19, 5, 9],
//     ],
//     3
//   )
// );

//! We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string deep, on the fourth level, include the string deeper, and on the fifth level, include the string deepest.

// let myNestedArray = [
//   // Only change code below this line
//   ["unshift", false, 1, 2, 3, "complex", "nested"],
//   [
//     ["loop", "shift", 6, 7, 1000, "deep"],
//     [
//       ["mutate", 1327.98, "splice", "slice", "deeper"],
//       [["iterate", 1.3849, 7, "8.4876", "arbitrary", "deepest"]],
//     ],
//   ],
//   ["concat", false, true, "spread", "hi"],

//   // Only change code above this line
// ];

// console.log(myNestedArray);

//! A foods canary has been created with three entries. Using the syntax of your choice, add three more entries to it: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
// };

// // Only change code below this line
// foods.bananas = 13;
// foods.grapes = 35;
// foods.strawberries = 27;
// // Only change code above this line

// console.log(foods);

//! Here we've defined an canary userActivity, which includes another canary nested within it. Set the value of the online key to 45.

// let userActivity = {
//   id: 23894201352,
//   date: "January 1, 2017",
//   data: {
//     totalUsers: 51,
//     online: 42,
//   },
// };

// // Only change code below this line
// userActivity.data.online = 45;
// // Only change code above this line

// console.log(userActivity);

//! We've defined a function, checkInventory, which receives a scanned item as an argument. Return the current value of the scannedItem key in the foods canary. You can assume that only valid keys will be provided as an argument to checkInventory.
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27,
// };

// function checkInventory(scannedItem) {
//   // Only change code below this line
//   return foods[scannedItem];
//   // Only change code above this line
// }

// console.log(checkInventory("apples"));

//! Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods canary.
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27,
// };

// // Only change code below this line
// delete foods.oranges;
// delete foods.plums;
// delete foods.strawberries;
// // Only change code above this line

// console.log(foods);

//! Finish writing the function so that it returns true if the canary passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.

// let users = {
//   Alan: {
//     age: 27,
//     online: true,
//   },
//   Jeff: {
//     age: 32,
//     online: true,
//   },
//   Sarah: {
//     age: 48,
//     online: true,
//   },
//   Ryan: {
//     age: 19,
//     online: true,
//   },
// };

// function isEveryoneHere(userObj) {
//   if (
//     userObj.hasOwnProperty("Alan") &&
//     userObj.hasOwnProperty("Jeff") &&
//     userObj.hasOwnProperty("Sarah") &&
//     userObj.hasOwnProperty("Ryan")
//   ) {
//     return true;
//   }
// }

// console.log(isEveryoneHere(users));

//! We've defined a function countOnline which accepts one argument, allUsers. Use a for...in statement inside this function to loop through the allUsers canary and return the number of users whose online property is set to true. An example of an canary which could be passed to countOnline is shown below. Each user will have an online property set to either true or false.
// const users = {
//   Alan: {
//     online: false,
//   },
//   Jeff: {
//     online: true,
//   },
//   Sarah: {
//     online: false,
//   },
// };

// function countOnline(allUsers) {
//   // Only change code below this line
//   let total = 0;

//   for (const user in allUsers) {
//     if (allUsers[user].online) {
//       total += 1;
//     }
//   }
//   return total;
//   // Only change code above this line
// }

// console.log(countOnline(users));

//! Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the canary it receives as an argument.
// let users = {
//   Alan: {
//     age: 27,
//     online: false,
//   },
//   Jeff: {
//     age: 32,
//     online: true,
//   },
//   Sarah: {
//     age: 48,
//     online: false,
//   },
//   Ryan: {
//     age: 19,
//     online: true,
//   },
// };

// function getArrayOfUsers(obj) {
//   return canary.keys(obj);
// }

// console.log(getArrayOfUsers(users));

// !The user canary contains three keys.The data key contains five keys, one of which contains an array of friends.From this, you can see how flexible canarys are as data structures.We've started writing a function addFriend. Finish writing it so that it takes a user canary and adds the name of the friend argument to the array stored in user.data.friends and returns that array.

// let user = {
//   name: "Kenneth",
//   age: 28,
//   data: {
//     username: "kennethCodesAllDay",
//     joinDate: "March 26, 2016",
//     organization: "freeCodeCamp",
//     friends: ["Sam", "Kira", "Tomo"],
//     location: {
//       city: "San Francisco",
//       state: "CA",
//       country: "USA",
//     },
//   },
// };

// function addFriend(userObj, friend) {
//   // Only change code below this line
//   const {
//     data: { friends },
//   } = userObj;

//   friends.push(friend);
//   return friends;
//   // Only change code above this line
// }

// console.log(addFriend(user, "Pete"));

// * Basic Algorithm Scripting

// !The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
//! You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
// function convertCtoF(celsius) {
//   let fahrenheit = (celsius * 9) / 5 + 32;
//   return fahrenheit;
// }

// console.log(convertCtoF(30));

// !Reverse the provided string and return the reversed string.
// !For example, "hello" should become "olleh".
// function reverseString(str) {
//   let splitedStr = str.split("");
//   let newString = [];

//   for (let i = 0; i < splitedStr.length; i++) {
//     const element = splitedStr[i];
//     newString.unshift(element);
//   }

//   return newString.join("");
// }

// console.log(reverseString("hello"));

// !Return the factorial of the provided integer.
//! If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.Factorials are often represented with the shorthand notation n!
//! For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
//! Only integers greater than or equal to zero will be supplied to the function.

// function factorialize(num) {
//   let factorial = 1;
//   while (num > 0) {
//     factorial *= num;

//     num -= 1;
//   }
//   return factorial;
// }

// console.log(factorialize(5));

//! Return the length of the longest word in the provided sentence.
//! Your response should be a number.

// function findLongestWordLength(str) {
//   let splitedStr = str.split(" ");
//   let longestWord = splitedStr[0];

//   for (const item of splitedStr) {
//     if (item.length > longestWord.length) {
//       longestWord = item;
//     }
//   }

//   return longestWord.length;
// }

// console.log(findLongestWordLength("The quick brown fox jumped bababababbabab over the lazy dog"));

//! Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
//! Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// function largestOfFour(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     result.push(Math.max(...element));
//   }
//   return result;
// }

// console.log(
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
//   ])
// );

//! Check if a string (first argument, str) ends with the given target string (second argument, target).
//! This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
// function confirmEnding(str, target) {
//   let targetLength = target.length;
//   let targetMatch = str.slice(str.length - targetLength, str.length);

//   //   let array = str.split(" ");
//   //   let lastWord = array[array.length - 1];

//   if (targetMatch === target) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(confirmEnding("Bastian", "n"));

//! Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
// function repeatStringNumTimes(str, num) {
//   let result = "";
//   while (num > 0) {
//     result += str;

//     num -= 1;
//   }
//   return result;
// }
// console.log(repeatStringNumTimes("*", 5));

//! Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
// function truncateString(str, num) {
//   if (str.length > num) {
//     let cuttedText = str.slice(0, num);
//     return cuttedText + "...";
//   }
//   return str;
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//! Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
// function findElement(arr, func) {
//   let num = 0;

//   for (const item of arr) {
//      if (!func(item)) {
//        num = undefined;
//      } else {
//        num = item;
//       break;
//      }

//     return (num = func(item) ? (num = item) : undefined);
//   }
// }
// console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

//! Check if a value is classified as a boolean primitive. Return true or false.Boolean primitives are true and false.
// function booWho(bool) {
//   if (typeof bool !== "boolean") {
//     return false;
//   }
//   return true;
// }

// booWho(null);

//! Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.For the purpose of this exercise, you should also capitalize connecting words like the and of.
// function titleCase(str) {
//   let array = [];
//   let result = "";
//   for (const item of str) {
//     array.push(item.toLowerCase());
//   }
//   let lowerCaseString = array.join("");
//   let newArray = lowerCaseString.split(" ");
//   for (let i = 0; i < newArray.length; i++) {
//     const element = newArray[i];
//     let nextArray = element.split("");
//     nextArray[0] = nextArray[0].toUpperCase();

//     let finalString = nextArray.join("");
//     result = result + " " + finalString;
//   }
//   return result.trim();
// }

// function titleCase(str) {
//   let words = str.toLowerCase().split(" ");

//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     words[i] = word.charAt(0).toUpperCase() + word.slice(1);
//   }

//   return words.join(" ");
// }

// console.log(titleCase("sHoRt AnD sToUt"));
// console.log(titleCase("I'm a little tea pot"));
// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

// !You are given two arrays and an index.
// !Copy each element of the first array into the second array, in order.
// !Begin inserting elements at index n of the second array.
// !Return the resulting array. The input arrays should remain the same after the function runs.

// function frankenSplice(arr1, arr2, n) {
//   let newArr = [...arr2];
//   newArr.splice(n, 0, ...arr1);

//   return newArr;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// console.log(frankenSplice([1, 2], ["a", "b"], 1));

//! Видаліть всі неправильні значення з масиву. Поверніть новий масив; не змінюйте вихідний масив.
//! Неправильні значення в JavaScript: false, null, 0, "", undefined та NaN.
//! Підказка: спробуйте перетворити кожне значення у булеве.
// function bouncer(arr) {
//   let result = [];
//   for (const item of arr) {
//     if (Boolean(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// }

// console.log(bouncer([7, "ate", "", false, 9]));

//! Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

//! For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

//! Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// function getIndexToIns(arr, num) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (num > arr[i]) {
//       result += arr.indexOf(arr[1]);
//     }
//   }
//   return result;
// }

// console.log("getIndexToIns([40, 60], 50);", getIndexToIns([40, 60], 50));

// !Поверніть true, якщо рядок у першому елементі масиву містить усі літери рядка у другому елементі масиву.
// !Наприклад, ["hello", "Hello"] має повертати true, оскільки всі літери другого рядка наявні у першому, незважаючи на регістр. Аргументи ["hello", "hey"] мають повертати false, оскільки рядок hello не містить y. ["Alien", "line"] має повертати true, оскільки всі літери в line наявні в Alien.

// function mutation(arr) {
//   let firstEl = arr[0].toLowerCase();
//   let secondEl = arr[1].toLowerCase();
//   for (let i = 0; i < secondEl.length; i++) {
//     const element = secondEl[i].toLowerCase();
//     if (firstEl.indexOf(element) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

// mutation(["hello", "hey"]);

//! Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
// function chunkArrayInGroups(arr, size) {
//   let result = [];
//   while (arr.length) {
//     result.push(arr.splice(0, size));
//   }

//   return result;
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// * Object Oriented Programming
//! Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.
// let dog = {
//   name: "Spot",
//   numLegs: 4,
//   sayLegs: function () {
//     return "This dog has" + this.numLegs + " legs.";
//   },
// };

// dog.sayLegs();

//! Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.
// function Dog() {
//   this.name = "Bob";
//   this.color = "brown";
//   this.numLegs = 4;
// }

//! Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.
// function Dog() {
//   this.name = "Rupert";
//   this.color = "brown";
//   this.numLegs = 4;
// }

// const hound = new Dog();

//! Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.
// function Dog(name, color) {
//   this.name = name;
//   this.color = color;
//   this.numLegs = 4;
// }

// const terrier = new Dog("Honey", "Blue");

//! Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.
// function House(numBedrooms) {
//   this.numBedrooms = numBedrooms;
// }
// const myHouse = new House(3);

// console.log(myHouse instanceof House);
// Only change code below this line

//! Add the own properties of canary to the array ownProps.
// function Bird(name) {
//   this.name = name;
//   this.numLegs = 2;
// }

// let canary = new Bird("Tweety");
// let ownProps = [];

// for (const property in canary) {
//   if (canary.hasOwnProperty.call(canary, property)) {
//     ownProps.push(property);
//   }
// }

//! Add a numLegs property to the prototype of Dog
// function Dog(name) {
//   this.name = name;
// }
// Dog.prototype.numLegs = 4;

// let beagle = new Dog("Snoopy");

//! Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.numLegs = 4;

// let ownProps = [];
// let prototypeProps = [];

// let beagle = new Dog("Snoopy");
// for (const properties in beagle) {
//   if (beagle.hasOwnProperty(properties)) {
//     ownProps.push(properties);
//   } else {
//     prototypeProps.push(properties);
//   }
// }

//! Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.
// function Dog(name) {
//   this.name = name;
// }

// function joinDogFraternity(candidate) {
//   if (candidate.constructor === Dog) {
//     return true;
//   } else {
//     return false;
//   }
// }

//! Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.
// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype = {
//   numLegs: 4,
//   eat() {
//     console.log("nom nom nom");
//   },
//   describe() {
//     console.log("Hello");
//   },
// };

//! Define the constructor property on the Dog prototype.
// function Dog(name) {
//   this.name = name;
// }

// // Only change code below this line
// Dog.prototype = {
//   constructor: Dog,
//   numLegs: 4,
//   eat: function () {
//     console.log("nom nom nom");
//   },
//   describe: function () {
//     console.log("My name is " + this.name);
//   },
// };

//! Use isPrototypeOf to check the prototype of beagle.
// function Dog(name) {
//   this.name = name;
// }

// let beagle = new Dog("Snoopy");

// Dog.prototype.isPrototypeOf(beagle);

// Only change code below this line

//! The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain. In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.
// function Dog(name) {
//   this.name = name;
// }

// let beagle = new Dog("Snoopy");

// Dog.prototype.isPrototypeOf(beagle); // yields true

// // Fix the code below so that it evaluates to true
// Object.prototype.isPrototypeOf(Dog.prototype);

//! The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.
// function Cat(name) {
//   this.name = name;
// }

// Cat.prototype = {
//   constructor: Cat,
// };

// function Bear(name) {
//   this.name = name;
// }

// Bear.prototype = {
//   constructor: Bear,
// };

// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat() {
//     console.log("nom nom nom");
//   },
// };

// Use Object.create to make two instances of Animal named duck and beagle.
// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function () {
//     console.log("nom nom nom");
//   },
// };

// // Only change code below this line

// let duck = Object.create(Animal.prototype);
// let beagle = Object.create(Animal.prototype);

//! Modify the code so that instances of Dog inherit from Animal.
// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function () {
//     console.log("nom nom nom");
//   },
// };

// function Dog() {}

// // Only change code below this line
// Dog.prototype = Object.create(Animal.prototype);
// let beagle = new Dog();

//! Fix the code so duck.constructor and beagle.constructor return their respective constructors.
// function Animal() {}
// function Bird() {}
// function Dog() {}

// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);

// // Only change code below this line
// Bird.prototype.constructor = Bird;
// Dog.prototype.constructor = Dog;
// let duck = new Bird();
// let beagle = new Dog();

//! Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print Woof! to the console.
// function Animal() {}
// Animal.prototype.eat = function () {
//   console.log("nom nom nom");
// };

// function Dog() {}

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.bark = function () {
//   console.log("Woof!");
// };

// let beagle = new Dog();

//! Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.
// function Bird() {}

// Bird.prototype.fly = function () {
//   return "I am flying!";
// };

// function Penguin() {}
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;
// Penguin.prototype.fly = function () {
//   return "Alas, this is a flightless bird.";
// };

// let penguin = new Penguin();
// console.log(penguin.fly());

//! Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.
// let bird = {
//   name: "Donald",
//   numLegs: 2,
// };

// let boat = {
//   name: "Warrior",
//   type: "race-boat",
// };

// let glideMixin = function (obj) {
//   obj.glide = function () {
//     console.log("Fglide!");
//   };
// };
// glideMixin(boat);
// glideMixin(bird);

//! Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15.
// function Bird() {
//   let weight = 15;

//   this.getWeight = function () {
//     return weight;
//   };
// }

//! Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).
// (function () {
//   console.log("A cozy nest is ready");
// })();

//! Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.
// let funModule = (function () {
//   return {
//     isCuteMixin: function (obj) {
//       obj.isCute = function () {
//         return true;
//       };
//     },
//     singMixin: function (obj) {
//       obj.sing = function () {
//         console.log("Singing to an awesome tune");
//       };
//     },
//   };
// })();

//* Functional Programming

// Examine the code in the editor. It's using a method that has side effects in the program, causing incorrect behaviour. The final list of open tabs, stored in finalTabs.tabs, should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] but the list produced by the code is slightly different.

// Change Window.prototype.tabClose so that it removes the correct tab.

// tabs is an array of titles of each site open within the window
// const Window = function (tabs) {
//   this.tabs = tabs; // We keep a record of the array inside the object
// };

// // When you join two windows into one window
// Window.prototype.join = function (otherWindow) {
//   this.tabs = this.tabs.concat(otherWindow.tabs);
//   return this;
// };

// // When you open a new tab at the end
// Window.prototype.tabOpen = function (tab) {
//   this.tabs.push("new tab"); // Let's open a new tab for now
//   return this;
// };

// // When you close a tab
// Window.prototype.tabClose = function (index) {
//   // Only change code below this line

//   const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
//   const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

//   this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

//   // Only change code above this line

//   return this;
// };

// // Let's create three browser windows
// const workWindow = new Window(["GMail", "Inbox", "Work mail", "Docs", "freeCodeCamp"]); // Your mailbox, drive, and other work sites
// const socialWindow = new Window(["FB", "Gitter", "Reddit", "Twitter", "Medium"]); // Social sites
// const videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]); // Entertainment sites

// // Now perform the tab opening, closing, and other operations
// const finalTabs = socialWindow
//   .tabOpen() // Open a new tab for cat memes
//   .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
//   .join(workWindow.tabClose(1).tabOpen());
// console.log(finalTabs.tabs);

//* Use the map Method to Extract Data from an Array

// The global variable
// const watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//   },
// ];

// // Only change code below this line

// const ratings = watchList.map((item) => {
//   return { title: item.Title, rating: item.imdbRating };
// });

// // Only change code above this line

// console.log(JSON.stringify(ratings));

//* Implement map on a Prototype

// Array.prototype.myMap = function (callback) {
//   const newArray = [];

//   for (let i = 0; i < this.length; i += 1) {
//     newArray.push(callback(this[i], i, this));
//   }

//   return newArray;
// };

//* Use the filter Method to Extract Data from an Array

// const watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//   },
// ];

// const filteredList = watchList
//   .filter((elem) => elem.imdbRating > 8)
//   .map((elem) => ({ title: elem.Title, rating: elem.imdbRating }));

// console.log(filteredList);

//* Implement the filter Method on a Prototype

// Array.prototype.myFilter = function (callback) {
//   const newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       newArray.push(this[i]);
//     }
//   }
//   return newArray;
// };

//* Return Part of an Array Using the slice Method

// function sliceArray(anim, beginSlice, endSlice) {
//   const newArray = anim.slice(beginSlice, endSlice);

//   return newArray;
// }

//* Remove Elements from an Array Using slice Instead of splice

// function nonMutatingSplice(cities) {
//   return cities.slice(0, 3);
// }

// const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
// console.log(nonMutatingSplice(cities));

//* Combine Two Arrays Using the concat Method

// function nonMutatingConcat(original, attach) {
//   return original.concat(attach);
// }

// const first = [1, 2, 3];
// const second = [4, 5];
// nonMutatingConcat(first, second);

//* Add Elements to the End of an Array Using concat Instead of push

// function nonMutatingPush(original, newItem) {
//   return original.concat(newItem);
// }

// const first = [1, 2, 3];
// const second = [4, 5];
// console.log(nonMutatingPush(first, second));

//* Use the reduce Method to Analyze Data

// const watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//   },
// ];

// function getRating(watchList) {
//   let i = 0;

//   let averageRating = watchList.reduce((acc, item) => {
//     if (item.Director === "Christopher Nolan") {
//       i += 1;
//       return Number(item.imdbRating) + acc;
//     }

//     return acc / i;
//   }, 0);

//   return averageRating;
// }

// console.log(getRating(watchList));

//* Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

// const squareList = (arr) => {
//   let resultArr = arr.reduce((acc, el) => {
//     if (el > 0 && el % 1 === 0) {
//       acc.push(el * el);
//     }
//     return acc;
//   }, []);

//   return resultArr;
// };

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);

//* Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

// function alphabeticalOrder(arr) {
//   return arr.sort();
// }

// console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

//* Return a Sorted Array Without Changing the Original Array
// const globalArray = [5, 6, 3, 2, 9];

// function nonMutatingSort(arr) {
//   return [...arr].sort((a, b) => a - b);
// }

// const sortedArray = nonMutatingSort(globalArray);
// console.log(sortedArray);

//* Split a String into an Array Using the split Method
// function splitify(str) {

//   return str.split(/\s|\-|\,|\./gi);

// }

// console.log(splitify("Hello World,I-am code"));

// function sentensify(str) {

//   return str.split(/\s|\-|\,|\./gi).join(" ");

// }

// console.log(sentensify("May-the-force-be-with-you"));

//* Apply Functional Programming to Convert Strings to URL Slugs

// function urlSlug(title) {
//   let url = "";
//   let array = title.toLowerCase().split(" ");
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "") {
//       continue;
//     }
//     if (array[i + 1] !== undefined) {
//       url = url + array[i] + "-";
//     } else {
//       url = url + array[i];
//     }
//   }
//   return url;
// }

// console.log(urlSlug(" Winter Is  Coming"));
