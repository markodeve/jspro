"use strict";

// let admin;

// let name = "Mark";

// admin = name;

// console.log(admin);


// let bigBlueGreenPlanet = "Earth";

// let currentSiteUser;


// prompt('hey');

// confirm();

// let userName = prompt('your name');

// console.log(userName);


//TO STRING
// let Vola = true;
// console.log(Vola);
// Vola = String(Vola);
// console.log(Vola);

//TO NUMBER
// let Pira = "123";
// console.log(typeof(Pira));
// Pira = Number(Pira);
// console.log(typeof(Pira));




// let a = "123";

// let b = "112";

// console.log(+a + (+b));


// const foundingYear = 1776;

// let answer = +prompt('What year the US was founded?' ,'');

// if (answer == foundingYear) {
//     console.log(`That's right! The USA was founded in ${answer}!`);
// } else if (answer >= 1900) {
//     console.log("Nooo that's so close to our days!");
// } else if (answer <= 1600) {
//     console.log(`Nooo that was relatively long time ago!`);
// } else {
//     console.log(`No! The USA wasn't founded in ${answer}...`);
// }


// let accessAllowed;

// let age = prompt(`How old are you?`, ``);

// if (age >= 18) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false;
// }

// let accessAllowed = (age >= 18) ? true : false;


// console.log(accessAllowed);

// let age = prompt('How old are you?');

// let message = (age <= 3) ? 'hey little baby!' :
//  (age <= 16) ? 'hey teenager!' :
//  (age <= 18) ? 'How is your life?' :
//  (age <= 90) ? 'hellow young man!' :
//  (age <= 100) ? 'hellow a young person!' :
//  (age < 100) ? 'heyyyy!' : 'hey';

//  console.log(message);


// let userAnswer = prompt('What is the official name of JavaScript?', '');

// let Correct = (userAnswer == 'ECMAscript') ? 'YES!!! YOU KNEW IT!!' : `NOooOO! it's ECMAscript`;

// console.log(Correct);


// let number = +prompt('Enter a number', '');

// if (number >= 1) {
//     console.log(1);
// } else if (number == 0) {
//     console.log(0);
// } else if (number < 0) {
//     console.log(-1);
// }

// let result;

// let a = 2;
// let b = 5;

// (a + b < 4) ? (console.log('a little!')) : (console.log('a lot!'));



// let login = prompt('who are you?', '');
// let message;

// if (login == 'Employee') {
//   message = 'Hi';
// } else if (login == 'Director') {
//   message = 'Good day!';
// } else if (login == '') {
//   message = 'No login!';
// } else {
//   message = 'Koosi';
// }

// message =
// (login == 'Employee') ? ('hi') : 
// (login == 'Director') ? ('good day sir!') :
// (login == '') ? ('no login') :
// ('koosi');

// console.log(message);

// let hour = prompt('what hour do you wanna visit the mivinis?', '');

// if (hour < 9 || hour > 23) {
//     console.log('The mivinis is closed these hours');
// } else {
//     console.log('The mivinis is open in these hours');
// }

// let products = {
//     fruit: 'klubnika',
//     vegetable: 'pomidory'
    
// };

// let age = 14;

// if (age >= 14 && age <= 90) {
//     console.log(`${age} is in the diapason between 14 and 90`);
// } else {
//     console.log(`${age} is outside of the diapason of 14 and 90`);
// }

// let age = 14;

// if (age < 14 || age > 90) {
//     console.log(`${age} is outside of range of 14 to 90`);
// } else {
//     console.log(`${age} is inside the range of 14 to 90`);
// }


// let login = prompt('enter login', '');

// if ((login == '') || (login == null)) {
//     console.log('abandoned');
// } else if (login == 'admin' || login == 'Admin') {
//     let password = prompt('enter password', '');
//     if (password == 'koosi') {
//         console.log('success, logged in');
//     } else if (password == '' || password == null){
//         console.log('password check unsuccesful');
//     } else {
//         console.log('incorrect password');
//     }
// } else {
//     console.log('user not recognized');
// }

//CYCLES

// let i = 0;
// while (i < 11) {
//     console.log(i);
//     i++;
// }

// let i = 3;
// while (i) { 
//   console.log(i);
//   i--;
// }

// let Amish = 250;

// do {
//     console.log(Amish);
//     Amish++;
// } while (Amish < 300 + 1);


// for (let x = 150; x > 100; x--) {
//     console.log(x);
// }


//BREAK

// let sum = 0;

// while (true) {

//   let value = +prompt("Введите Number", '');

//   if (!value) break;

//   sum += value;

// }
// console.log( 'Сумма: ' + sum );


//CONTINUE
// for(let i = 0; i < 30; i++) {
//     if (i % 2 == 0) continue;
//     console.log(i);
// }


// let guests = ['Moishe', 'Dovid', 'Menashe', 'Shneur', 'Pisa'];


// for (let i = 0; i < guests.length; i++) {
//     if ((guests[i] == 'Menashe') || (guests[i] == 'Shneur') || (guests[i] == 'Pisa')) continue;
//     console.log(guests[i]);  
// }


// outer: for (let i = 0; i < 30; i++) {
//     for (let j = 0; j < 30; j++) {
//         let input = prompt(`Meaning of coordinates is: (${i}, ${j})`, '');
//         if (!input) break outer; //come out from both cycles

//     }
// }

// console.log('ready');


// for (let i = 1; i <= 10; i++) {
    
//     if ((i % 2) == 0) {
//         console.log(i);
//     }
   
// }


// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!` );
//   }


// let i = 0;
// while (i < 3) {
//     console.log(`number ${i}!`);
//     i++;
// }


// let num;

// do {
//   num = prompt("Write a number more then 100", 0);
// } while (num <= 100 && num);

// console.log(num);

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { 

//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextPrime;
//   }

//   console.log(i); 
// }


//SWITCH

// let stylee = +prompt('number please: 10, 15, 18, 19 or more then 19', '');

// switch (stylee) {
//     case 10:
//         console.log('a little');
//         break;
//     case 15:
//         console.log('better!');
//         break;
//     case 18:
//         console.log('almost perfect');
//         break;
//     case 19:
//         console.log('in cabbage!');
//         break;
//     default:
//         break;
// }


// let pop = +prompt('cmonn', '');
//!!! checking is strict !!!
// switch (pop) {
//     case 10:
//     case 11:
//     case 12://grouping cases
//         console.log(pop);
//         break;
//     default:
//         console.log('hahaha');
// }

// let brouser = 'Opera';

// if (brouser == 'Edge') {
//     console.log("It's Edge");
// } else if (brouser == 'Chrome' || brouser == 'Firefox' || brouser == 'Safari' || brouser == 'Opera') {
//     console.log(`We also support ${brouser}`);
// } else {
//     console.log(`We hope it's "allright"!`);
// }


// const number2 = +prompt('Введите число между 0 и 3', '');

// if (number2 === 0) {
//   alert('Вы ввели число 0');
// }

// if (number2 === 1) {
//   alert('Вы ввели число 1');
// }

// if (number2 === 2 || number2 === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

// const numero = +prompt('write a number between 0 and 3', '');

// switch (numero) {
//     case 0:
//         console.log('You have entered the number 0');
//         break;
//     case 1:
//         console.log('You have entered the number 1');
//         break;
//     case 2:
//     case 3:
//         console.log('You have entered 2 or 3');
//         break;
//         default:
//         break;
// }

