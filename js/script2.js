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


// function LogMessage() {
//     console.log('message');
// }

// LogMessage();



// let Keidar = "Dov";

// function HelloKeidar() {
//     let message = `Hello ${Keidar}`;
//     console.log(message);
// }

// HelloKeidar();

// let userName = "Pas";

// function Mesa() {
//     userName = "pataya";
//     let message = `Hello ${userName}`;
//     console.log(message);
// }

// console.log(userName);
// Mesa();
// console.log(userName);


// let Kachan = 'Kochang, Thailand';

// function Tryer() {
//     let Kachan = 'Bangkok, Thailand';
//     console.log(Kachan);
// }

// console.log(Kachan);
// Tryer();
// console.log(Kachan);


// function ThaiResort(place, hotel) {
//     console.log(`Your destinations is ${place}: ${hotel}`);
// }

// ThaiResort('Kochang', 'Raddison');

// function Levitas(cool, text = 'no value') {//default parametr
//     console.log(cool, text);
// }

// Levitas('wow');

// function Texter2() {
//     console.log('second text');
// }

// function Texter(first, second = Texter2()) {
//     console.log(first);
    
// } 

// Texter('hi1');


// function Veod(a, b) {
//     return a + b;
// }

// console.log(Veod(10, 50));


// function CheckAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('shaved shorter and flip-floper');
//     }
// }

// let age = prompt('how old are you?', 18);

// if (CheckAge(age)) {
//     console.log('Access granted');
// } else {
//     console.log('acces closed');
// }

// function Nelutu(a, b) {
//     if (a < b) {
//         return a;
//     } else if (b < a) {
//         return b;
//     } else {
//         console.log('they are equal');
//     }
// }

//FUNCTION EXPRESSION

// let sayHi = function() {
//     console.log('Hi');
// };

// let AlsoHi = sayHi;

// AlsoHi();


//CALLBACKS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function Asking(text, yes, no) {
//     if (confirm(text)){
//          yes();
//     } else {
//         no();
// }
// }

// function Yeah() {
//     console.log('Yeah Shlomi');
// }

// function Nope() {
//     console.log('nope Shlomi');
// }

// Asking('you?', Yeah, Nope);


// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

// function Timer(text, day, night) {
//     if(confirm(text)) { day(); } else { night(); }
// }

// Timer(
//     'Day or night?',
//     //ANONYMOUS FUNCTIONS
//     function () { console.log("It's day"); },
//     function() { console.log("It's night"); }
//     //ALSO
//     // () => { console.log("It's day"); },
//     // () => { console.log("It's night"); }
// );


// let Lupu = function Maf() {
//     console.log('hahaha');
// };

// Lupu();



// let GetRestApi = (a, b, d) => {
//     if (a > 10) {
//         console.log('first not more then 10');
//     } else if (b > 20) {
//         console.log('second not more then 20');
//     } else if (d > 5) {
//         console.log('third not more then 5');
//     } else {
//         return a + b * d;
//     }
    
// };

// console.log(GetRestApi(102, 32, 25));

// let SychovHardLearning = (a, b) => a + b;

// let CheeseBurger = (a) => a * 2;

// let Win = () => console.log('Win');

// let AgeChess = prompt('How much squares on board', '');

// let Yes = 

// (AgeChess < 0) ? () => console.log('Noo not above cero!') :
// (AgeChess > 100) ? () => console.log('That is too much!') :
// (AgeChess != 64) ? () => console.log('Not correct answer') :
// () => console.log('Yes correct!'); 
         

// Yes();


// let nana = +prompt('A number', '');

// console.log(nana);
// //NaN


// let games = [];

// for (let i = 0; i < 5; i++) {
//     games[i] = prompt(`enter games`); 
// }

// console.log(games);


// let powaa = (a, b) => (a ** b);



//OBJECTS

// let user = new Object();

// //Literal notation>>>

// let user2 = {};

// let users = {
//     user1: 'John',
//     user2: {
//         name: 'Michael',
//         "likes tomatoes": false
//     },
//     user3: 'Steve',
//     user5: 'Di Gianni',
//     user7: {
//         name: 'Vic',
//         isAdmin: true
//     }
// };

// let tomatoLove = "likes tomatoes";

// users.user2[tomatoLove] = 'Will love them soon';

// users.user7.isAdmin = false;

// delete users.user7.isAdmin;

// users.user7 = 'Vic';

//COMPUTED PROPERTIES

// let vegetable = prompt('which vegetable to buy', 'tomato');

// let bag = {
//     [vegetable]: 10
// };

// console.log(bag.tomato);


// let makeSychov = (name, age, skills) => {
//     return {
//         name: name,
//         age: age,
//         skills
//     };
// };

// let Sycha = makeSychov('Saveliy', 97, 99.99999998);

// console.log(Sycha);

//THE IN

// let Duo = {
//     helpful: 'no',
//     free: 'no'
// };

// console.log('free' in Duo);


// let Treviso = {
//     ability: undefined
// };

// console.log(Treviso.ability); //will give undefined

// console.log('ability' in Treviso); //Will give klubnichka


//FOR IN CYCLE

// let Money = {
//     currency: "Australian dollar",
//     yearFounded: 30,
//     isGood: true
// };

// for (let koosi in Money) {
//     console.log(koosi);//keys
//     console.log(Money[koosi]);//values
    
// }


// let user = {
//     name: "John",
//     surname: "Smith"
// };

// user.name = "Pete";


// delete user.name;


// let shedule = {
//     Odorlo: 'odorlo'
// };

// let isEmpty = (obj) => {
//     for(let key in obj) {
//         return false;
//     }
//     return true;
// };

// console.log(isEmpty(shedule));


// let Salaries = {
//     Smilga: 19000,
//     Smith: 2500,
//     Peter: 3000
// };

// let sum = 0;

// for (let koosi in Salaries) {
//     sum += Salaries[koosi];
// }

// console.log(sum);


// let menu = {
//     width: 500,
//     height: 500,
//     textAlign: 'center'
// };

// let multiplyNumeric = (obj) => {
//     for(let key in obj) {
//         if (typeof(obj[key]) == 'number') {
//             (obj[key] *= 2);
//         } 
//     }
// };

// multiplyNumeric(menu);

// console.log(menu);

// let Tomatoes = {
//     type: 'pri'
// };

// let TomatoesVeggie = Tomatoes;

// TomatoesVeggie.type = 'Vegetable';


// //CREATE INDEPENDENT OBJECT COPY
// let Pishta = {
//     age: 89,
//     job: 'Builder'
// };

// let clone = {};

// for (let key in Pishta) {
//     clone[key] = Pishta[key];
// }

// clone.age = 99;
// clone.job = 'engineer';

// console.log(Pishta);
// console.log(clone);


// let user = { name: "Salo" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // copy all svoystva from permissions1 and permissions2 to user

// Object.assign(user, permissions1, permissions2);

// console.log(user);

// let Students = {};

// Object.assign(Students, {name1: 'Ganskiy', name2: 'Vionkova', name3: 'Grusha', name5: 'Marko'});
// //WE CLONE LIKE THIS NOW. WILL COPY TO EMPTY OBJECT AND WILL RETURN IT
// let cloneStudents = Object.assign({}, Students);



