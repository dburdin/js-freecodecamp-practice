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

// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object

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
