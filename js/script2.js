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

