"use strict"; 

//we work in modern regime


//DATA TYPES


// let number = 5;
// const leftBorderWidth = 1;

// let umaNuma = 5.6;

// console.log(4 / 0); //infinity
// console.log('string' * 0); //nan

// const persone = "Alex";

// const bool = false;

// let aaa;
// console.log(aaa); //undefined

// const obj = {
//     name: "Johny",
//     age: 91,
//     isFunny: false
// };


// console.log(obj.name);
// console.log(obj["name"]); //also works but must use quotation marks 
//but better to use the dot one


// let img = ["plum.png", "orange.jpg", 6, "apple.bmp", {}, []];
// console.log(img[1]);


// alert('Hello');

// const result = confirm('LAAla is Lala?');
// console.log(result);

// const answer = prompt("Do you have 81?", "81");
// console.log(typeof(answer));

//all from users is string


// const answers = [];

// answers[0] = prompt('what is your name', '');
// answers[1] = prompt('what is your surnma', '');
// answers[2] = prompt('how old are you', '');

// console.log(typeof(answers));


//interpolation instead of "lalala" + var + "lalala" .....

// const oreh = 'tuys';
//works only with small oblique quotation marks


// console.log(`https://someurl.com/${oreh}/5`);

// const pis = "Moishe";

// alert(`Hello, ${pis}`);


// console.log(5 + "100");

// let inc = 10,
//     dec = 10;

// ++inc;
// --dec;

// console.log(++inc);
// console.log(--dec);

// console.log(5%2);

// console.log(2 * 3 === '6');//false
// console.log(2 * 3 == '6');//klubnika



// const isLala = true,
//       isClose = false;
// //only when all true
// console.log(isLala && isClose); //false

// //if only one
// console.log(isLala || isClose); //klubnika


// let pull = "pull";
// let  merge = "merge";



//practice 1


// const numberOfFilms = +prompt('How many films did you watch?', '');

// const personalMoviesDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// const a = prompt('One of tha last watched films', ''),
//       b = prompt('what qualification will give?', ''),
//       c = prompt('One of tha last watched films', ''),
//       d = prompt('One of tha last watched films', '');

// personalMoviesDB.movies[a] = b;
// personalMoviesDB.movies[c] = d;

// console.log(personalMoviesDB);



//IF ELSE + CONDITIONS

// if (5 == 11) {
//     console.log('ok!');
// } else {
//     console.log('error');
// }



// if (num < 49) {
//     console.log("error");
// } else if(num > 100) {
//     console.log("too much!");
// } else {
//     console.log('yeah!');
// }

//ternarka h
//condition    //if yes this       //if not this  
// (num === 50) ? console.log('ok') : console.log("error");

//SWITCH!
// const num = 1000;

// switch (num) {
//     case 59: 
//         console.log("not right!");
//         break;
//     case 100:
//         console.log("also not right!");
//         break;
//     case 500:
//         console.log('YEAP!');
//         break; 
//     default:  
//         console.log('hmmm...');
//         break; 
// }

//CYCLES

// let numa = 50;

// while (numa <= 55) {
//     console.log(numa);
//     numa++;
// }

//other

// do {
//     console.log(numa);
//     numa++; 
// }
// while (numa < 55);

//FOR

// let pis = 5;

// for (let i = 1; i < 10; i++) {

//     if (i === 5) {
//         // break;
//         //below skip step but not break
//         continue;
//     }

//     console.log(i);
    
// }

//practice 2
// const numberOfFilms2 = +prompt('How many films did you watch?', '');

// const personalMoviesDB2 = {
//     count: numberOfFilms2,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// for(let i = 0; i < 2; i++) {
//     const a2 = prompt('One of tha last watched films', ''),
//           b2 = prompt('what qualification will give?', '');


//     if(a2 != null && b2 != null && a2 != '' && b2 != '' && a2.length < 50) {
//         personalMoviesDB2.movies[a2] = b2;
        
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }


//     if (personalMoviesDB2.count < 10) {
//         console.log('ohohohoho');
//     } else if (personalMoviesDB2.count >= 10 && personalMoviesDB2.count < 30) {
//         console.log('lelelele');
//     } else if (personalMoviesDB2.count >= 30) {
//         console.log('eeeeeee!');
//     } else {
//         console.log('error');
//     }
// }



// console.log(personalMoviesDB2);

//FUNC

// let num2 = 20; //global variable

// function showFixes(text) {
//     console.log(text);
//     let num2 = 20; //local variable
// }

// showFixes("word");

// function cal(a, b) {
//     return (a + b);
// }

// console.log(cal(11, 15));
// console.log(cal(124, 315));

// function red() {
//     let num = 50;
//     return num;//returns the local variable to the external world
// }

// const otherNum = red();
// console.log(otherNum);

// const loger = function() {
//     console.log("hello"); //only after obyavlenie this funcion works
// };

// loger();


// const cal2 = (a, b) => { 
//     console.log('1');
//     return a + b;
// };