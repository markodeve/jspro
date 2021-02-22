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


//017
// const loa = "teSto";
// // const loamas = [1, 2, 3, 5];


// // console.log(loa[2]);

// console.log(loa.toUpperCase());
// console.log(loa.toLowerCase());
// // console.log(loa);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));//stroke starts from 5th

// const toff = "Hello world";

// console.log(toff.slice(6, 11));//world

// console.log(toff.slice(6));//world

// console.log(toff.substring(6, 11));


//                     //start//how much symbols
// console.log(toff.substr(6, 5));


// const numaaa = 12.2;

// console.log(Math.round(numaaa));

// const testa = "12.2px";
// console.log(parseInt(testa));//rounds as well
// console.log(parseFloat(testa));//not rounds

//practice 18


//DIFFICULTBACK FUNCTION

// function first() {
//     //do somethung
//     setTimeout(function(){
//         console.log(1);
//     }, 500);
// }


// function second() {
//     console.log(2);
// }

// first();
// second();
//callback function is a function
// that shoud be executed when the
// other fuction finalized it's execution

//difficultback func:(!!!)

// function learmJS(lang, callback) {
//     console.log(`I learn: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('I finished this lesson!');
// }

// learmJS('Go', done);


//objects methods

// const options = {
//     name: 'Miàntuán',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'blue',
//         bg: 'purple'
//     },
//     makeTesto: function() {
//         console.log('testo'); //our method
//     }
// };

// options.makeTesto();

// //destructuration

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);//we get array

// console.log(options.name);


// delete options.name;

// console.log(options);

// for (let pisa in options) {
//     console.log(`option ${pisa} has the value ${options[pisa]}`);
// }


// const manelist = {
//     name: 'Nicolae Guta',
//     song: 'Sus paharele',
//     age: '90',
//     children: {
//         Nicusor: 'guta',
//         Nicu: 'gutaa'
//     }
// };

// let count = 0;
// for (let key in manelist) {
//     if (typeof(manelist[key]) === 'object') {
//         for (let i2 in manelist[key] ) {
//             console.log(`manelist is ${i2} and ${manelist[key][i2]}`);
//             count++;
//         }
//     } else {
//         console.log(`manelist is ${key} and ${manelist[key]}`);
//         count++;
//     } 
// };
// console.log(count);



//ARREYS

// const arrey = [1, 2, 3, 6, 8];
// arrey[99] = 0;
// console.log(arrey.length);//gives 100
// console.log(arrey);



// arrey.pop(); //delets last element

// arrey.push(11, 15);// adds

// console.log(arrey);

// for (let i = 0; i < arrey.length; i++) {
//     console.log(arrey[i]);
// }


// for (let value of arrey) {
//     console.log(value);
// }


// const arrey2 = [1, 3, 5, 7, 8];

// arrey2.forEach(function(item, i, arrey2){
//     console.log(`${i}: ${item} inside massive ${arrey2}`);
// });

// const sttr = prompt("", "");
// const products = sttr.split(", ");
// products.sort();
// console.log(products.join('; '));


// let a = 5,
//     b = a;

//     b = b + 5;
// console.log(b);
// console.log(a);

// const objaa = {
//     a: 5,
//     b: 1
// };

//link:
// const copy = objaa;

// copy.a = 10;
// //when changing in copy we modify our initial object
// console.log(copy);
// console.log(objaa);


//cloning object
// function copy (mainObject) {
//     let objCopy = {};

//     let key;
//     for (key in mainObject) {
//         objCopy[key] = mainObject [key];
//     }
//     return objCopy;
// }

// const numberss = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 9
//     }
// };

// const newNumberss = copy(numberss);
// //surface copy
// newNumberss.a = 10;

// //will also link:
// newNumberss.c.x = 19;

// // console.log(newNumberss);
// // console.log(numberss);

// const adda = {
//     d: 17,
//     e: 20
// };

// //independent surface copy of object
// const clona = Object.assign({}, adda);

// clona.d = 20;

// // console.log(adda);
// // console.log(clona);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'adidasi';
// console.log(newArray);
// console.log(oldArray);



// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'fb'];

// console.log(internet);

// function loga(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const numo = [2, 5, 7];
// //razbiraet massiv
// loga(...numo);

// const array10 = ["a", "b"];

// const newArray10 = [...array10];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj2 = {...q};

// console.log(newObj2);

//OBJECT ORIENTED PROGRAMMING

// var a = "object oriented programming";

// var b = a.toUpperCase();

// console.log(b);

// let strolo = "some";
// let strObj = new String(strolo);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);



// const soldier = {
//     health: 1000,
//     armor: 100,
//     sayHello: function() {
//         console.log("hello");
//     }
// };


// const johny = Object.create(soldier);

// const johny = {
//     health: 900
// };


//decapre
// johny.__proto__ = soldier;


///new
// Object.setPrototypeOf(johny, soldier);

// console.log(johny.armor);

// johny.sayHello();

//TO STRING

//1)

// console.log((String(null)));
// console.log(typeof(String(4)));

// // 2)
// console.log(typeof(5 + ''));

// const numaaaa = 5;

// console.log("https://google.com/catalog/" + numaaaa);

// const fontSize = 26 + 'px';

// TO NUMBER
// //1)
// console.log(typeof(Number('4')));
// //2)
// console.log(typeof(+'5'));

// //3)

// console.log(typeof(parseInt("15px", 10)));


// let answww = +prompt("Hello", "");

//To Bulani


//false:
// 0, '', null, undefined, NaN

// let switcher = null;

// if (switcher) {
//     console.log('working...');
// }


// 2)

// console.log(typeof(Boolean('4')));

// // 3)

// console.log(typeof(!!"4444"));

//!!!!!!!!!!!!!!

//&& stamps on lie

//|| stamps on truth

// const boxxx = document.getElementById('box');

// const batana = document.getElementsByTagName('button')[1];

