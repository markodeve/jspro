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

// let employees = {};

// let firstStackEmployee = {
//     name2: 'David',
//     experience2: 10
// };

// let secondStackEmployee = {
//     name: 'Boris',
//     experience: 7
// };

// Object.assign(employees, firstStackEmployee, secondStackEmployee);

// console.log(employees);

//NESTED CLONING

// let dishes = {
//     name: 'Tofu',
//     sizes: {
//         large: 190,
//         medium: 100
//     }
// };

// // console.log(dishes.sizes.large);

// let clone = Object.assign({}, dishes);

// console.log(clone);

// clone.sizes.large = 0;

// console.log(dishes);

//THIS THIS THIS THIS THIS 

// let usa = {
//     name: 'Fred',
//     age: 101,
//     SayHi() {
//         console.log(this.name);
//     }
// };

// usa.SayHi();


// let Asia = {
//     food: 'delicious',
//     people: 'A lot',
//     SayHello() {
//         console.log(this.food);
//     }
// };

// Asia.SayHello();
// let Asia2 = Asia;
// Asia = null;

// Asia2.SayHello();

// let Molo = {
//     name: 'Milk',
//     price: 19,
//     change(a, b) {
//         this.price += a;
//         this.name = b;
//     }
// };

// Molo.change(2100, 'Bread');

// console.log(Molo);

// let calculator = {
//     read() {
//        this.a = +prompt('first number', 0); 
//        this.b = +prompt('second number', 0); 
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     }

// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// let Lesnisa = {
//     step: 0,
//     stepUp() {
//         this.step++;
//         return this;
//     },
//     stepDown() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         console.log(this.step);
//         return this;
//     }
// };

// // Lesnisa.stepUp();
// // Lesnisa.stepUp();
// // Lesnisa.stepUp();
// // Lesnisa.stepDown();
// // Lesnisa.showStep();

//WE ADD RETURN THIS; TO ACHIEVE THIS CHAIN HIERARCHY
// Lesnisa.stepUp().stepUp().stepUp().showStep();

// //FUNCTION CONSTRUCTOR

// function Person(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new Person('Gand');

// console.log(user);

// function Gamer(level) {
//     this.level = level;
//     this.game = true;
// }

// let Markosh = new Gamer('Warrent officer 1');
// let ChernigovGuy = new Gamer('Captain');

// console.log(Markosh);
// console.log(ChernigovGuy);
// //CONSTRUCTION FUNCTION START FROM CAPITAL LETTER AS A GOLBAL AGREEMENT

// function Potato(dish) {
//     this.dish = dish;
    
//     this.giveDish = function() {
//         console.log(`You will eat ${this.dish}`);
//     };
// } 

// let fries = new Potato('Fries');

// fries.giveDish();
// console.log(fries);


// function Calculator() {
//     this.read = function() {
//         this.a = +prompt('a', 0);
//         this.b = +prompt('b', 0);
//     };
//     this.sum = function() {
//         return this.a + this.b;
//     };
//     this.mul = function() {
//         return this.a * this.b;
//       };

// }

// let calculator = new Calculator();
// calculator.read();

// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );

// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function() {
//         this.value += +prompt('number', '');
//     };

// }

// let accumulator = new Accumulator(3);
// accumulator.read();
// accumulator.read();
// console.log(accumulator);

// let user = {
//     name: 'Phill',
//     adress: {
//         city: 'Mccalister',
//         street: undefined
//     }
// };

// let user = {};

// console.log(user?.adress?.street);

// let user = null;

// console.log( user?.address );
// console.log( user?.address.street );

// let user = {
//     admin() {
//         console.log('I am administrator');
//     }
// };

// let user2 = {};

// user.admin?.();
// user2.admin?.();

// let Ahbaba = {
//     salo: 'Tauala'
// };

// let Ahbaba3 = null;

// let tefteli = 'salo';

// console.log( Ahbaba?.[tefteli] ); 
// console.log( Ahbaba3?.[tefteli] );

// let ur = ['tomato', 'pickle', 'carrot'];

// ur.push(['onion', 'garlic']);

// console.log(ur);

//SYMBOL

// let id = Symbol('Dexter');

// console.log(id);
// // alert(id.toString());
// console.log(id.description);

// let Pyramid = {
//     name: "Ehnaton"
// };

// let di = Symbol('di');

// Pyramid[di] = 1;

// console.log(Pyramid[di]);

// let objInit = {
//     name: 'Paul',
//     youtube: 'Languages'
// };

// let objInit2 = {
//     name: 'George',
//     present: 'Jacket'
// };

// let Com = objInit + objInit2;

// let Chess = (obj) => {
//     if (obj) {
//         console.log('Klubnichka perechnaya');
//     } else {
//         console.log('Chili from Oliver');
//     }
// };

// Chess(objInit);

// let Onions = ["White", "Green", "Yellow", "Brown", "Purple"];

// Onions.forEach((item, index) => {
    
// });

// const Garlics = ['Hot', 'Spicy', 'Strong'];

// const X = Garlics.map((item) => {
//     return item.slice(0, 2);
// });

// console.log(X);

// const grass = ['Green', 'Allen', 'Summer', 'Koosi', 'zozozozozozozo', 'zazazazaza', 'Dor'];

// const List = grass.filter((item) => {
//     return item.length < 9;
// });

// console.log(List);

// const tomatoes = [1, 2, 3];

// tomatoes.reduce((result, item) => {
//     return result + item;
// }, 0);



// let food = [['apples-', 'pears-', 'strawberries-'],
//             ['tomatoes-', 'onions-', 'garlic-'],
//             ['tofu-', 'soya-', 'oil-']];


// const gooder = food.map((item) => {
//     for(let i = 0; i < item.length; i++) {
//         let naew = [];
//         let fix = item[i];
//         naew.push(fix);
        
//     }
    
// });

// let amb = ['amb1', 'amb2', 'amb3'];

// amb.push('amb5');
// amb.unshift('amb0.1');

// console.log(amb);

// let foodList1 = ['onion', 'garlic', 'tomatoes'],
//     foodList2 = ['eggs', 'noodles', 'nuts'];

// let totalFoodList = foodList1.concat(foodList2);

// let userGroup = [
//     ['user1-', 'user2-', 'user3-'],
//     ['user5-', 'user6-', 'user7-'], 
//     ['user8-', 'user9-', 'user10-'],
//     ['user11-', 'user12-', 'user15-']
// ];

// let fix = (userGroup.flat().map(item => item.slice(0, -1)));
// console.log(fix);

// console.log(fix.join(""));

// let veg = ['onions', 'tomatoes', 'noodles', 'garlics', 'tofu'];

// let randomVeg = Math.floor(Math.random() * 5);

// console.log(veg[randomVeg]);

// let food = ['Burgers', 'Hot-dogs', 'Steak', 'Salad', 'Banana', 'Bread'];
// let price = ['100$', '190$', '280$'];
// let comment = ['Bon appetit!', 'Eat it with pleasure!', 'Come back soon!'];

// let randomFood = food[Math.floor(Math.random() * food.length)];
// let randomPrice = price[Math.floor(Math.random() * 3)];
// let randomComment = comment[Math.floor(Math.random() * 3)];

// console.log(`Your order is: ${randomFood}. The price to pay is: ${randomPrice}. ${randomComment}`);

// let names = ['Eater', 'Gron', 'Pol', 'Gnis', 'Gap'];
// let food = ['burgers', 'salad', 'hot-dogs', 'pizza', 'rice'];
// let tool = ['fork', 'spoon', 'knife', 'stick'];
// let des = ['yummy', 'good', 'super', 'amazing', 'awesome', 'delicious'];
// let sauce = ['mustard', 'ketchup', 'tartar', 'aglioli', 'mayonnaise'];

// let randFood = food[Math.floor(Math.random() * food.length)];
// let randtool = tool[Math.floor(Math.random() * tool.length)];
// let randDes = des[Math.floor(Math.random() * des.length)];
// let randSauce = sauce[Math.floor(Math.random() * sauce.length)];
// let randName = names[Math.floor(Math.random() * names.length)];

// let res = `Hello! We will call you ${randName}. Look ${randName}, 
// we advice you to eat ${randFood} today. You know why? Because it's very ${randDes}!
// We advice you to eat it with ${randtool} and with ${randSauce} sauce!`;

// console.log(res);

// let bob = {
//     age: '99',
//     height: '185'
// };

// bob.food = "soup";
// console.log(bob.food);

// let cheeses = [
//     {name: 'chedder', price: 20},
//     {name: 'parmezan', price: 50},
//     {name: 'dor-blu', price: 75},
// ];

// let orhidea = {
//     name: 'Orhidea',
//     quantity: 90,
//     seasons: [1, 2, 3, 5, 7]
// };
// let tulip = {
//     name: 'Tulip',
//     quantity: 100,
//     seasons: [3, 70, 30, 17]
// };
// let chamomile = {
//     name: 'Сhamomile',
//     quantity: 190,
//     seasons: [1, 8, 3, 1, 7]
// };

// const flowers = [orhidea, tulip, chamomile];

// console.log(flowers[0].seasons[0]);


//SET TIMEOUT

// const serverLoading = setTimeout(() => {
//     console.log('Server loading...');
// }, 100);

// const serverLoaded = setTimeout((text) => {
//     console.log(text);
// }, 3000, 'Server loaded');


// const timerId = setTimeout(logger, 2000);

// clearInterval(timerId);

// function logger () {
//     console.log('text');
// }

// for (var n = 2; n < 10000; n *= 2) {
//     console.log(n);
//    }

// let p = 2;
// while (p < 10000) {
//     console.log(p);
//     p *= 2;
// }

// let beautifulAnimals = ['cat', 'dog', 'bird', 'parrot', 'leon'];

// for (let i = 0; i < beautifulAnimals.length; i++) {
//     console.log(beautifulAnimals[i] += ' is a beautiful animal');
// }


// let alphabet = 'abcdefghijklmnopqrstuwxyz';

// let randomString = "";

// while(randomString.length < 5) {
//     randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
    
// }

// console.log(randomString);


// var input = "javascript is osem";
// var output = "";

// for (let i = 0; i < input.length; i++) {
//     if (input[i] == 'j') {
//         output += '7';
//     } else if (input[i] == 't') {
//         output += '1';
//     } else {
//         output += input[i];
//     }
// }

// console.log(output);

// let dor = 'Hello what\'s up? this is a backslash: \\';

// console.log(dor);

// let obje = {
//     name: 'user',
//     word: 'hello',
//     SayHello() {
//      console.log(this.name += 'dor');
//     }
// };

// let infoMa = "Regele manelelor manele meneleistu manele";

// // console.log(infoMa.indexOf('manele'));

// let target = "manele";

// let pos = 0;

// while (true) {
//     let foundPos = infoMa.indexOf(target, pos);
//     if (foundPos == -1) break;

//     console.log(`Found here ${foundPos}`);
//     pos = foundPos + 1;
// }

// let dos = 'Did Mark Nunez made the world record of eating hot peppers?';

// let inform = (str) => {
//     if (str.includes('peppers')) {
//         console.log('Yes, peppers included');
//     } 
//     else {
//         console.log('Peppers are not included');
//     }
// };

// inform(dos);

// let lod = "I don't know what you head about me";

// console.log(lod.startsWith('I'));
// console.log(lod.endsWith('e'));

// let poa = 'vardamaleus';

// console.log(poa.slice(3, 7));

// console.log(poa.substring(7, 3));

// console.log(poa.substr(3, 4));

// let capFl = (word) => {
//     return word[0].toUpperCase() + word.slice(1);
    
// };

// capFl('dor');


// let checkSpam = (string) => {
//     let spam = string.toLowerCase();
//     return (spam.includes('viagra') || spam.includes('xxx'));
    
// };


// let trunCat = (string, max) => {
//    return (string.length > max) ? string.slice(0, max - 1) + '…' : string;
// };

// trunCat('Vardas has sent os to you', 15);

// let extractCurrencyValue = (price) => {
//     return +price.slice(1);
//     }; 

// let fun = [1, 3, 5, function Door() {
//     console.log('door');
// }];


// let door = ['swift', 'api', 'log', '_logs'];

// door.push('web_socket_spray');

// console.log(door);

// let via = ['Cintinelli', 'Rossi', 'Gocci'];

// let viaCurrent = via.pop();

// console.log(viaCurrent);

// via.unshift('Galli', 'Dossi', 'Alli');

// console.log(via);

// let ulan = {
//     ulan1: 'Dor',
//     ulan2: 'Pol',
//     ulan3: 'Vis'
// };

// let naam = Object.values(ulan);

// console.log(naam);

// let bio = {
//     name: 'Min',
//     surname: 'zhao',
//     age: 99,
// };

// for (const i in bio) {
//     console.log(`${i} ${bio[i]}`);
// }

// let city = ['Modena', 'Parma'];

// let alternate = city;

// alternate[0] = 'Fidenza';

// console.log(city);

// let citta = ['Modena', 'Parma', 'Fidenza'];

// for (let i in citta) {
//     console.dir(citta[i]);
// }


// let sheeps = [true, true, true, true, true, false, true, true, false];

// function countSheeps(arrayOfSheep) {
//     let count = 0;
//     let uncount = 0;
//     for (let i = 0; i < arrayOfSheep.length; i++) {
//         if (arrayOfSheep[i]) {
//             count += 1;
//         } else {
//             uncount += 1;
//         }
//     }
//     console.log('Sheeps found: ' + count);
//     console.log('Sheeps not found: ' + uncount);
//    return count, uncount; 
//   }
//     countSheeps(sheeps);
  
// let styles = ['Jazz', 'Blues'];

// styles.push('Rock-n-roll');

// styles[1] = 'Classic';

// styles.shift(0);

// styles.unshift('Rap', 'Raggea')

// console.log(styles);

// let arr = ['Lecco', 'Bergamo', 'Padova', 'Bologna', 'Genova'];

// arr.splice(2, 0, 'Roma', 'Pisa');

// console.log(arr);

// const now = new Date('2021-03-14');

// new Date.parse('2021-03-14');

// console.log(now.setHours(18));
// console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//     let some = i ** 3;
// }

// let end = new Date();

// alert(`cycle worled for ${end - start} ms`);

// let arr = ['banana', 'pineapple', 'apple', 'pear', 'strawberry'];

// let result = arr.map((item) => {
//     return item += 's';
// });

// console.log(result);

// let str = 'testo';

// console.log(str.split(""));


// let par = ['Tuki', 'Koosi', 'Dor', 'Lar', 'Bar'];

// let str = par.join(', ');

// console.log(str);

// let numb = [100, 200, 300, 500, 700];

// let result = numb.reduce((sum, current) => {
//     return sum + current;
// }, 0);

// console.log(result);

// console.log('10' / '5'); //NaN

// console.log('Peter' / 2); //NaN

// let naame = prompt('name', '');

// console.log(`Hello ${naame}`);

// let nol = null;

// let nasa = String(nol);

// console.log(nasa);

// let price = 10;
// let burgers = +prompt('How many burgers do you want?', '');

// if (burgers >= 100) {
//     console.log('Processing order...');
//     setTimeout(() => {
//         console.log('Wow, ' + burgers + '! that a lot of burgers');
//         console.log('Price to pay: ' + (burgers * price) + '$');
//     }, 2000);
    
// } else if (burgers >= 50) {
//     console.log('Processing order...');
//     setTimeout(() => {
//         console.log('Wow ' + burgers + '! that is pretty much burgers!');
//         console.log('Price to pay: ' + (burgers * price) + '$');
//     }, 2000);
// } else if (burgers >= 10) {
//     console.log('Processing order...');
//    setTimeout(() => {
//     console.log('Ok, you will get ' + burgers + ' burgers. But ' + burgers + ' is a lot!');
//     console.log('Price to pay: ' + (burgers * price) + '$');
//    }, 2000);
// } else if (burgers >= 5) {
//     console.log('Processing order...');
//     setTimeout(() => {
//         console.log('Good thanks! Are you sure you can eat ' + burgers + ' burgers?');
//         console.log('Price to pay: ' + (burgers * price) + '$');
//     }, 2000);
// } else {
//     console.log('Processing order...');
//     setTimeout(() => {
//         console.log('Ok, order of '+ burgers + ' burgers is recieved');
//         console.log('Price to pay: ' + (burgers * price) + '$');
//     }, 2000);
// }


// const vox = document.querySelector('.vox');

// const width = vox.clientWidth;
// const height = vox.clientHeight;

// const width = vox.offsetWidth;
// const height = vox.offsetHeight;

// const width = vox.scrollWidth;
// const height = vox.scrollHeight;

// console.log(width, height);

// let doo = ['pooh', 'copy', 'DHCP'];

// for(let i = 0; i < doo.length; i++) {
//     console.log(doo[i]);
//     (doo[i] == 'copy') ? console.log('copy found') : false;
// }

// let https = ['DHCP', 'UDP', 'LED', 'SSL', 'SSH'];

// for (let i = 0; i < https.length; i++) {
    
//     for (let j = 0; j < https[i].length; j++) {
//         console.log(https[i][j]);
        
//     }
// }

// let numma = +prompt('enter a number', '');

// if (numma > 0) {
//     console.log(1);
// } else if (numma == 0) {
//     console.log(0);
// } else {
//     console.log(-1);
// }


// for (let i = 0; i < 100; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
    
// }

// let nummm = +prompt('enter a number');

// let fizzBuzz = (num) => {
    
//     for (let i = 0; i < num; i++) {
//         if (num[i] % 3 == 0) {
//             num[i] = 'Fizz';
//         } else if (num[i] % 5 == 0) {
//             num[i] = 'Buzz';
//         }     
//     }
    
// };

// fizzBuzz(nummm);

// const vox = document.querySelector('.vox');

// let width = vox.clientWidth;
// let height = vox.clientHeight;

// const width = vox.offsetWidth;
// const height = vox.offsetHeight;

// let width = vox.scrollWidth;
// const height = vox.scrollHeight;

// const btn = document.getElementById('btn');

// console.log(vox.getBoundingClientRect().top);


// GET CSS STYLES
// const style = window.getComputedStyle(vox);

// console.log(style.display);

// const show = document.querySelector('.show');


// console.log(document.documentElement.scrollTop);


//CONSTRUCTOR FUNCTIONS AND PROTOTYPE

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//        console.log(`Hello ${this.name}`); 
//     };
// }

// User.prototype.eat = function() {
//     console.log(`User ${this.name} has eaten`);
// };

// const dor = new User('Dor', 98);
// const pid = new User('Pid', 91);

// dor.eat();

// dor.hello();
// pid.hello();

// console.log(dor);
// console.log(pid);


//CALL CONTEXT

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(10, 5);

// const obj = {
//     a: 20,
//     b: 100,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

// function Pos(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// let Chan = new Pos('Chan', 89);



// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const useer = {
//     name: 'Gov'
// };

// sayName.call(useer, 'Dor');
// sayName.apply(useer, ['Dor']);

// function count(num) {
//     return this * num;
// }

// const cheeseBurger = count.bind(2);
// console.log(cheeseBurger(3));
// console.log(cheeseBurger(100));

// 1) SIMPLE FUNCTION: THIS = WINDOW, BUT WITH USE STRICT WILL BE UNDEFINED.
// 2) CONTEXT OF OBJECT METHODS WILL BE THE OBJECT
// 3) THIS IN CONSTRUCTORS AND CLASSES IS A NEW OBJECT EXEMPLAR
// 5) HAND BINDING THIS: CALL, APPLY, BIND

// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     this.style.backgroundColor = 'yellow';
// });

// btn.addEventListener('click', (e) => {
//     e.target.style.backgroundColor = 'yellow';
//     console.log(e.target);
// });

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this.num);
//         };

//         say();
//     }
// };

// obj.sayNumber();

// const cheeseBurger2 = a => a * 2;

// console.log(cheeseBurger2(90));




//ES6 CLASSES

// class Poloa {
//     constructor(locationX, locationY) {
//         this.locationX = locationX;
//         this.locationY = locationY;
//     }

//     calcArea() {
//         return this.locationX * this.locationY;
//     }
// }

// class PalmPresenceInfo extends Poloa {
//     constructor (locationX, locationY, text, palm) {
//         super(locationX, locationY); //takes from class by hierarchy, should be on top
//         this.text = text;
//         this.palm = palm;
//     }
//     showMyProps() {
//         console.log(`Text: ${this.text}, palms: ${this.palm}`)
//     }
// }


// const boPhut = new PalmPresenceInfo(100, 200, 'Resort', true);

// boPhut.showMyProps();
// console.log(boPhut.calcArea());

// const Pataya = new Poloa(100, 100); 
// const Kochang = new Poloa(50, 50);

// console.log(Pataya.calcArea());
// console.log(Kochang.calcArea());

// const log = function(a, b, ...rest) {
//    console.log(a, b, rest);   
// };

// log('basic', 'rest', 'pa', 'restlogftch', 'Menelu');

// function calcOrCheesburger(number, basis = 2) {
//     console.log(number * basis);
// }

// calcOrCheesburger(3);

//JSON 

// const persone = {
//     name: 'Lyod',
//     tel: '+0000000',
//     orders: {
//         vegetable: 'Tomato',
//         liquid: 'Olive oil'
//     }
// };

// //DEEP CLONING
// const coool = JSON.parse(JSON.stringify(persone));

// coool.orders.vegetable = 'Radish';


// console.log(coool);
// console.log(persone);

// let loa = ['a', 'b', 'c', 'd', 'e'];

// for (let i = 0; i < loa.length; i++) {
    
//     if(loa[i] == 'd') {
//         continue;
//     }

//     console.log(loa[i]);
// }

// function Dor(dor, name = 'Dor') {
//     console.log('hello' + dor + name);
// }

// function Show(talo, salo = function() {
//     return console.log('second argument was not added');
// }) {
//     console.log(talo, salo);
// }

// let asa = () => {
    
//     let count = 0;
//     for (let i = 0; i < 10; i++) {
//        prompt('enter, 10 times');
//        count++;
//        console.log(i);        
//     }

//     return count;

// };

// function saydor() {
//     console.log('dor');
// }

// let fun = saydor;

// fun();
// sayhi();


// function ask(qwaha, yes, no) {
//     if (confirm(qwaha)) yes();
//     else no();
// }

// function showOk() {
//     console.log('you Harry');
// }

// function Dart() {
//     console.log('You are Dart');
// }

// ask('You are Harry or Dart?', showOk, Dart);

// function Darting(value, logic, physics) {
//     let inee = prompt(value);
//     if (inee) {
//         logic();
//         console.log(`So it's ${inee}`);
//     } else {
//         physics();
//     }
// }

// function contextLogic() {
//     console.log('Logic API context extends');
   
// }

// function physicsMatrixClient() {
//     console.log('Fetchable renaming log phys');
// }

// Darting('Logical expresser', contextLogic, physicsMatrixClient);

// function agent(email, client, utility) {
//     let mail = confirm(email);
//     if (mail) {
//         client();
//         console.log(`delay storage field comparison retrieves ${mail}`);
//     } else {
//         utility();
//     }
// }

// function dataArchitecture() {
//     console.log('Task recasting...');
//     setTimeout(() => {
//         console.log('Remote service library-based');
//     }, 1000);
// }

// function publicToken() {
//     console.log('Specification class source binary');
// }

// agent('Provider path state transfer', dataArchitecture, publicToken);


// function runtimeAccess(embedded, fledged, linking) {
//     if (confirm(embedded)) {
//         fledged();
//     } else {
//         linking();
//     }
// }

// runtimeAccess(
//     'Runtime advanced',
//     function() {console.log('interpreter-based code'); },
//     function() {console.log('acceleration chip'); }
// );




// let mvc = 1000;
// let automate;
// if (mvc > 100) {
    
//    automate = function automate() {
//         console.log('mapping subcommand');
//     };
   
// } else {
//     automate = function automate() {
//         console.log('task stream');
//     };
// }

// automate();


// let dynamic = prompt('component input', '');

// let dataRender = (dynamic < 900) ?
//     function() { console.log('market share'); } :
//     function() { console.log('environment log controller'); };

// dataRender();

// let viewVariant = prompt('Pattern reuse set channel route', '');

// let stateEncap = (viewVariant == 17000) ?
//     function () { console.log('object interchangable'); } :
//     function () { console.log('defines algorythm optimized'); };

// stateEncap();


// let invocalLoad = prompt('Implement async suitable', 19000);

// let extanceArch = (invocalLoad >= 19000) ?
//     function () { console.log('Portable class EX'); } :
//     function () { console.log('Runtime query model'); };

// extanceArch();

// let duplexGenerate = 11;

// let sendComponent;

// if (duplexGenerate == 10) {
//     sendComponent = function() {
//         console.log('Basis websocket');
//     };
// } else {
//     sendComponent = function() {
//         console.log('Protocol cleartext');
//     };
// }

// sendComponent();

// let transEstablish = prompt('Hostname registry', 19000);

// let domainCertificate = (transEstablish >= 19000) ?
//     function() { console.log('Adress explicit'); } :
//     function() { console.log('Encryption role'); };

//     domainCertificate();


// let structureEmphasis = (polymorph, constructs) => polymorph + constructs;

// let absPrimitive = gl => gl * 10;

// let semaList = prompt('Parse diagram', '');

// let contextRoot = (semaList > 17000) ?
//     () => console.log('Branch cast') :
//     () => console.log('Portability byte');
    
// contextRoot();


// let binExp = prompt('reserve log', '');

// let wireRouting = (binExp == 'plugged') ?
//     () => {
//         console.log('Routing binary...');
//         setTimeout(() => {
//         console.log('Wire socket def');
//     }, 1000); }:
//     () => console.log('reverse exp log');

//     wireRouting();

// let patternType = +prompt('Include component', '');

// let renderBuild = (patternType == 10) ?
//     (a) => {
//         console.log(a * patternType);   
//     } :
//     (a) => console.log(a);

// renderBuild(1000);


// let resolveFile = (a, b) => {
//     let screenCall = a + b;
//     return screenCall;
// };

// resolveFile(10, 10);

// let ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// };

// ask('You agree',
//     () => {console.log('you agreed'); },
//     () => { console.log('dor'); }
// );

// let inta = new Object();

// let instanceLayer = {};

// let runHeap = {
//     analog: 'prototype inheritance',
//     dispatchPublic: 19000,
//     abstract: 'External cycle',
//     'Data call': 'Link implement'
// };

// runHeap.passingUnderscore = true;

// delete runHeap.abstract;

// const relyEach = {
//     moduleStands: 1,
//     'Class field': 'Point general'
// };

// relyEach.moduleStands = 0;

// relyEach['Class field'] = 'Consists mutable';
// relyEach['Solve pattern'] = 'Noun parallel';


// let implicitState = {
//     Algfill: 'routExtends'
// };

// let expQuote = 'Algfill';

// implicitState[expQuote] = 'BinSec';

// implicitState[extMode] = 'StrawBin';

// let parseState = prompt('Parse state binary root', '');

// let focusField = {
//     actModul: ''
// };

// focusField.actModul = parseState;


// let publicRef = prompt('Lirary model stack', 'dos');

// let distInclude = {
//     [publicRef]: 19000 
// };

// console.log(distInclude.dos);


// let ReleaseFix = prompt('Module aware', 'wrapping');

// let supportDefault = {};

// let dor = prompt();

// supportDefault.wrapping = dor;


// console.log(supportDefault);



// let holdCaller = prompt('State range', '');

// let caseStruct = {
//     [holdCaller + 'int']: 90
// };

// console.log(caseStruct);


// function logState(bin, log) {
//     return {
//         bin: bin,
//         log: log
//     };
// }

// let showRerun = logState('Read call', 19000);

// console.log(showRerun);


// function apiBin (prop, logs) {
//     return {
//         prop,
//         logs
//     };
// }

// let checkOverlay = apiBin('void state run api', 'route extends socket');

// console.log(checkOverlay);




// let binaryPrompt = prompt('', '');
// let involveMove = prompt('', '');

// let haltStore = {
//     ['assignState' + involveMove]: binaryPrompt
// };

// console.log(haltStore);

// function intCompile(gen, cons) {
//     return {
//         gen,
//         cons
//     };
// }

// let deterDesc = intCompile('Get', 'Cab');

// console.log(deterDesc);
// console.log("gen" in deterDesc);
// console.log("cons" in deterDesc);

// let typeAccess = {
//     enumState: undefined
// };

// console.log('enumState' in typeAccess);

// let explOverlap = {
//     rowState: 'Runtime func',
//     tabularSoph: 'Assign dep',
//     routeExplicit: 17000
// };


// for (let bin in explOverlap) {
//     console.log(bin);
//     console.log(explOverlap[bin]);
// }





// let sourceIntroduce = {
//     cli: 'GarCol',
//     directId: 'CompLib',
//     altDll: 17000
// };

// for (let key in sourceIntroduce) {
//     console.log(sourceIntroduce[key]);
//     console.log(key);
// }

// let binRoot = {
//     "+95": "ServeOut",
//     "+98": "DeterBin",
//     "+91": "StateSwitchBin" 
// };

// for(let code in binRoot) {
//     console.log(code);
// }


// let engineFor = "+90.1";
// let browseAff = "900";

// console.log(Number(Math.trunc(engineFor)));
// console.log(Number(browseAff));


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   function multo(obj) {

//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//     }
//     console.log(obj);
//   }

// multo(menu);


// console.log(menu);


// let binLogs = {
//     section: "LowVol"
// };

// let hexVal = binLogs;

// hexVal.section = "dor";

// let IntRef = {
//     binRoot: '17000',
//     portRed: '1000',
//     statusDub: 'RedirectXR'

// };

// let IntDup = {};

// for (let key in IntRef) {
//     IntDup[key] = IntRef[key];
// }

// IntDup.statusDub = 'FetchDataRed';

// console.log(IntDup);
// console.log(IntRef);




// let reRoutFix = {
//     RunBin: "Custom",
//     Routs: {
//         sameRef: 1100,
//         DestFix: 1900
//     }
// };

// let readFixBin = {
//     stateRerun: "Redirect secure pool",
//     objConstState: "Visible port net",
//     portCheck: 19000
// };

// for (let key in readFixBin) {
//     console.log(key);
//     console.log(readFixBin[key]);
// }


//link
// let dirApis = {
//     soloRun: "Logs json binary"
// };
//                   //link2
// let dirApisLink = dirApis; 

// dirApisLink.soloRun = "Logs json rerun";



// let binaryRun2 = "Binary code rerun bin api";

// let chuncksApi = binaryRun2.slice(7, 11);
// let chuncksApiNegative = binaryRun2.slice(-9, -5);
// let chunckApiRest = binaryRun2.slice(5);

// console.log(chuncksApi);
// console.log(chuncksApiNegative);
// console.log(chunckApiRest);

// let grayBinSpace = "Repeat box library connect second run security if needed";
// let sectionPart = grayBinSpace.substring(5, 15);
// console.log(sectionPart);

// let bundleYpos = "Position Y specs documentation reload on fetch rerun twise cases specs";

// let specsLibs = bundleYpos.substr(10, 30);

// console.log(specsLibs);

// let questionaryListRun = "Second run specifies binary roots logs from LetSoro-2 bundle";

// let currentDutyPos = "PositionSpec";

// let questionaryFixedValue = questionaryListRun.replace("LetSoro-2", currentDutyPos);

// console.log(questionaryFixedValue);


// let caseCheck = "Js written React implemented React libs ready react sys run bins";


//Not global match (with slashes and i and without quotes)
// let canChange = caseCheck.replace(/REACT/i, "Angular");
// let canChangeGlobal = caseCheck.replace(/react/g, "Vu");

// console.log(canChange);
// console.log(canChangeGlobal);

// let binaryaccessLet = "Ukulele otdaam gefi dosy peno udy no pomardo";

// let basapaa = binaryaccessLet[0];

// console.log(basapaa);

// binaryaccessLet.split("");

// let time = +prompt('What time is it now?');
// let isweekend = confirm('it is weekend today?');

// if (time <= 8 || time >= 18 || isweekend) {
//     console.log('The mivinka is closed today');
// } else {
//     console.log('Welcome to the mivinka!');
// }

// let dor1 = false;
// let dor2 = false;
// let dor3 = "Dora Dolorez";

// console.log(dor1 || dor2 || dor3 || "Dor");

// let agBin = 10;

// if (agBin >= 14 && agBin <= 90) {
//     console.log('yamal');
// } else {
//     console.log('nano');
// }

// let agBin2 = 60;

// if (agBin2 <= 14 || agBin2 >= 90) {
//     console.log('yamal');
// } else {
//     console.log('nano');
// }


// let dualBinApi = 'port8000';

// (dualBinApi === 'port9000') ? console.log('port9000 fetching...') : console.log('Api rerun logs');

// let year = 2090;

// let cond = (year == 2090);

// if (cond) {
//     console.log('Dor');
// } else {
//     console.log('DorDor');
// }

// let RedirApiB = +prompt('Seam logs border env', '');

// let RunAdopt = (RedirApiB > 50) ? 'hosted Root 1x09' : 'host rerun nuxt refactor';

// console.log(RunAdopt);




// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// const Dor = true;

// if (typeof Dor == 'string') {
//     console.log('checkerd');
// }

// switch (Dor) {
//     case false:
//         console.log('Domestic portal chem pospone logs');
//         break;
//     case true:
//         console.log('prepare system boot machinery state apis');
//         break;

//     default:
//         break;
// }






// let keyRed = true;

// switch (typeof keyRed) {
//     case ('string'):
//         console.log('Type is string');
//         break;
//     case ('number'):
//         console.log('Type is number');
//         break;
//     case ('boolean'):
//         console.log('Type is boolean');
//         break;
//     default:
//         break;
// }


// let logsCash = 990;

// switch (bolt) {
//     case (999):
//         console.log('api rerun');
//         break;
//     case (998):
//         console.log('check flutter str');
//         break;
//     default:
//         console.log('bin logs cash register');
//         break;
// }

// let boxa = document.querySelector('.testo');

// boxa.addEventListener('click', (e) => {
//     boxa.classList.add('sleeves');
//     console.log(e);
// });

// window.addEventListener('click', (e) => {
//     if (e.target != boxa) {
//         boxa.classList.remove('sleeves');
//     }
// });

// let bin1 = 1;

// function dor1() {
//     let bin2 = 2;
// }

// function dor2() {
//     let bin3 = 3;
//     return bin3;
// }

// function runApiFix2 (check1) {
//     let resetLog = check1 * 999;
//     return resetLog;
// }

// let runApiFix1 = () => {

// };

// runApiFix2(10);

// let logDoor = (log) => {
//     let api = 10;
//     console.log(log * api);
// };

// logDoor();

// let dorlogssys = 'port start 1000 rerun on';

// let logCheckBin = (port) => {
//     dorlogssys = 'port start 1100 rerun on:';
//     console.log(dorlogssys + port);
// };

// console.log(logCheckBin(10));


// let doorPortNum = (port, num = "default num") => {
//     console.log(port);
//     console.log(num);
// };

// let apifet1 = 10;

// let binsbindoor = (door) => {
//     apifet1 = 20;
//     return door * apifet1;
// };

// console.log(apifet1);

// function callState(binKey, allow, rerun) {
//     binKey = +prompt('bin key for log');

//     if (binKey > 10) {
//         allow();
//     } else {
//         rerun();
//     }
// }

// function dor1 () {
//     console.log('allow');
// }

// function dor2 () {
//     console.log('rerun');
// }


// let add7 = (num) => {
//     console.log(num + 7);
// };

// let multiply = (a, b) => a * b;


// let capitalize = (string) => {
//     let firstLetter = string[0];
//     let rain = string.slice(1);
//     console.log(firstLetter.toUpperCase() + rain);
// };

// let lasLetter = (string) => {
//     let ll = string.slice(-1);
//     console.log(ll);
// };

// let binRequest = +prompt('bin request');

// for (let i = 0; i <= binRequest; i++) {
//     if ((i % 5 === 0) && (i % 3 === 0)) {
//         console.log('Dor');
//     } else if (i % 3 === 0) {
//         console.log('Dor3');
//     } else if (i % 5 === 0) {
//         console.log('DorBin');
//     } else {
//         console.log(i);
//     }
// }

// let melo = Math.floor(Math.random() * 10 + 1);
// let playerGuess = +prompt('enter number');

// let guessing = (pc, player) => {
    
//     console.log(`Your number is ${player} now waiting for pc tp guess`);
//     setTimeout(() => {
//         console.log(`PC says the number is ${pc}`);
//         if (pc === player) {
//         console.log('The PC has guessed! Wow!');
//     } else {
//         console.log('PC failed to guess');
//     }
//     }, 2000);
// };

// guessing(melo, playerGuess);


//stone, paper, scissors start =======================>

// let computerPlay = () => {
//     let guess = Math.floor(Math.random() * 3) + 1;
//     if (guess == 1) {
//         guess = 'paper';
//     } else if (guess == 2) {
//         guess = 'stone';
//     } else {
//         guess = 'scissors';
//     }
//     return guess;
// };

// let playerGuess = () => {
//     let player = prompt('paper, stone or scissors?');
//     return player;
// };

// let humanScore = 0;
// let compScore = 0;

// let playRound = (player, computer) => {
//     let human = player.toLowerCase();
    
//     if (human == 'paper' && computer == 'stone') {
//         console.log(`You guessed ${human} and computer guessed ${computer} You won!`);
//         humanScore += 1;
//     } else if (human == 'stone' && computer == 'paper') {
//         console.log(`You guessed ${human} and computer guessed ${computer} You lost!`);
//         compScore += 1;
//     } else if (human == 'scissors' && computer == 'stone') {
//         console.log(`You guessed ${human} and computer guessed ${computer} You lost!`);
//         compScore += 1;
//     } else if (human == 'stone' && computer == 'scissors') {
//         console.log(`You guessed ${human} and computer guessed ${computer} You won!`);
//         humanScore += 1;
//     } else if (human == 'paper' && computer == 'scissors') {
//         console.log(`You guessed ${human} and computer guessed ${computer} You lost!`);
//         compScore += 1;
//     } else if (human == 'scissors' && computer == 'paper') {
//         console.log(`You guessed ${human} and computer guessed ${computer} You won!`);
//         humanScore += 1;
//     } else if (human == computer) {
//         console.log(`You guessed ${human} and computer guessed ${computer} it's the same!`);
//     } else {
//         console.log('you havent did not introduce the correct option, 1 point goes to the computer');
//         compScore += 1;
//     }
// };

// let game = () => {
//     playRound(playerGuess(), computerPlay());
//     playRound(playerGuess(), computerPlay());
//     playRound(playerGuess(), computerPlay());
//     playRound(playerGuess(), computerPlay());
//     playRound(playerGuess(), computerPlay());
//     if (humanScore > compScore) {
//         console.log('Player wins');
//     } else if (humanScore < compScore) {
//         console.log('Computer wins');
//     } else {
//         console.log('you both did the same!');
//     }
// };

//stone, paper, scissors until here ==============================>

// let leopard = 'Leopard';

// let leo = leopard.replace('p', 'n');

// console.log(leo);

// const binRerunSecond = ['api check 1', 'api check 2', 'api check 3'];

// let apiCheckValidate = (api) => {
//     return api + ' validated logs rerun message bins reopen';
// };

// const validatedApi = binRerunSecond.map(apiCheckValidate);

// console.log(validatedApi);

// const rerunSegment = ['port1', 'por2/n >>> res.!', 'systemCashLogs'];

// for (const os of rerunSegment) {
//     console.log(os);
// }

// let portNum = (num) => {
//       let dor = num + '7' + '1';
//       return dor.toUpperCase() + ' 000';
// };

// const newLogs = rerunSegment.map(portNum);

// console.log(newLogs);

// const logSpecs = [190, 9110, 119, 990, 810, 12555];

// let zeroRerunState = (spec) => {
//     return spec.toString().includes(0);
// };

// const allowedLogRerun = logSpecs.filter(zeroRerunState);

// console.log(allowedLogRerun);

// const tveLogs = ['shutRerun', 'progSkip', 'rerun', 'gestion', 'specSearch'];

// const filtered = tveLogs.filter((tve) => tve.startsWith('g'));
// console.log(filtered);

// const viewMappingSpec = ['log1', 'rerunBin2', 'searchResubmit', 'portRerunBins', 'postSameNum'];

// const rerunedSame = viewMappingSpec.filter((dor) => dor.startsWith('p'));

// console.log(rerunedSame);

// let portLogsRerun = +prompt('post rerun');

// while (portLogsRerun < 10) {
//     console.log('port logs cached memory bin rerun err repost process bins');
//     portLogsRerun++;
// }

// let dorBin;

// while (dorBin != 10) {
//     dorBin = prompt('');
// }



// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }

//     console.log(i);
// }

// let logCallRerun;

// do {
//     logCallRerun = prompt('');
// } while (logCallRerun < 100 && logCallRerun); 



// let varTimes = (word, times) => {
//     let resulta = '';
//     for (let i = 0; i < times; i++) {
//         resulta += word;
//     }
//     return resulta;
// };

// varTimes('dor', 3);


// let opsLogs = 'rerun bin apis';

// let array1 = [];

// for (let i = 0; i < opsLogs.length; i++) {
    
//     array1.push(opsLogs[i]);
    
    
// }
// array1.reverse();

// console.log(array1.join(''));


// let reverseApi = (str) => {
//     let array1 = [];

//     for(let i = 0; i < str.length; i++) {
//         array1.push(str[i]);
//     }
//     array1.reverse();

//     let array2 = array1.join('');

//     return array2;
// };

// let apisLogsRun = [1, 2, 3, 4, 5];

// let rerunSpecs = [];

// for (let i = 0; i < apisLogsRun.length; i++) {
//     if (apisLogsRun[i] !== 4) {
//         rerunSpecs.push(apisLogsRun[i]);
//     }
// }

// console.log(rerunSpecs);


// const removeFromArray = function(array, ...rest) {
   
//         let dor = array.filter(dora => !rest.includes(dora));

//         return dor;
// };

// removeFromArray([1, 2, 3, 4, 5, 6, 7], 4, 5, 6, 7);



// let namebinlogs = ['rerunBin%', 'apiRejFac', 'Run', 'messageLogsErr', 'ConstRerun%'];

// let namm = namebinlogs.filter(name => name.length <= 3);
// let dirBin = namebinlogs.filter(name => name.includes('%'));

// console.log(namm);
// console.log(dirBin);

// const sumBin = (int1, int2) => {

//     let sum = 0;

//     if (int1 < int2) {
//         for (let i = int1; i < int2; i++) {
//             sum += i;
//         }
//         return sum + int2;
//     } else {
//         for (let i = int2; i < int1; i++) {
//             sum += i;
//         }
//         return sum + int1;
//     }
// };


// let glue = (clay) => {

//     if (clay % 4 == 0) {
//         return true;
//     } else if (clay % 100 == 0 && clay % 400 != 0) {
//         return true;
//     } else {
//         return false;
//     }

// };


// let dirArrange = [1, 2, 3, 4, 5, 6, 7];

// let rerunChatBin = (arr) => {

    
//     return arr[Math.floor(Math.random() * arr.length)];

// };

// rerunChatBin(dirArrange);

// let signalRerun = "Signal";

// let additio = (stroke) => {
//     return stroke += 'Evo';
// };

// additio(signalRerun);


// let arrangeDirMeta = ['seriesBin', 'dirRerun', 'metaReload'];

// let dor = [];

// arrangeDirMeta.forEach(function (params) {
//     dor.push(params += 'evaluated');
//     return dor;
// });




// let BinApi1 = [1, 1, 1, 1, 1];

// while (BinApi1.length != 5) {
//     let dor;
//     BinApi1.push(dor = prompt('Introduce 5 BinApi keys'));

// }

// let BinApi2 = [];

// BinApi1.forEach(function (params) {
//     let rerunDir = ['Port1', 'Port2', 'Port3', 'Port5', 'port6'];
//     return BinApi2.push(params += rerunDir[Math.floor(Math.random() * BinApi1.length)]);
// });

// console.log(BinApi2);

// let dor = document.getElementById('dor');

// let redp = document.createElement('p');
// let blueh3 = document.createElement('h2');
// let pink = document.createElement('div');
// let pp = document.createElement('p');
// let innerH1 = document.createElement('h1');

// redp.style = "color: red";
// blueh3.style = "color: blue";
// pink.style = "border: 1px solid black; background-color: pink";

// redp.textContent = "Hey I’m red!";
// blueh3.textContent = "I'm a blue h3!";
// pp.textContent = "ME TOO!";
// innerH1.textContent = "I'm in a div";

// pink.appendChild(pp);
// pink.appendChild(innerH1);

// dor.appendChild(redp);
// dor.appendChild(blueh3);
// dor.appendChild(pink);

// const doorBtn = document.getElementById('door');

// doorBtn.addEventListener('click', (e) => {
//     console.log(e.target);
//     console.log(e);
//     e.target.hidden = true;
// });

// doorBtn.addEventListener('click', (e) => {
//     console.log(e);
//     if (e.shiftKey == true && e.altKey == true) {
//         console.log('You clicked with shift and alt keys pressed');
//     } else if (e.shiftKey == true) {
//         console.log('You clicked with shift key pressed');
//     } else if (e.altKey == true) {
//         console.log('You clicked with alt key pressed');
//     }
// });

// const logsOps = [1, 2, 3];

// logsOps.forEach((dor) => console.log(dor + 'dor'));


// const doorBtn = document.getElementById('door');

// doorBtn.addEventListener('click', (e) => {
//     e.target.style.background = 'red'; 
// });

// const buttons = document.querySelectorAll('.btnDor'),
//       reset = document.querySelector('.btnReset');

// buttons.forEach((button) => {
//     button.addEventListener('click', (e) => {
//         e.target.classList.toggle('blue');
//     });
//     button.addEventListener('dblclick', (e) => {
//         e.target.classList.toggle('green');
//     });
// });

// reset.addEventListener('click', () => {
//     buttons.forEach(element => {
//         element.classList.remove('blue', 'green');
//     });
// });


// const circle = document.querySelectorAll('.round_square');

// circle.forEach(element => element.addEventListener('click', (e) =>{
//     e.target.classList.toggle('rs_none');
// }));

// const par = document.querySelector('.par');
// const chi = document.querySelector('.ch');

// chi.addEventListener('click', (e) => {
//     e.stopPropagation();
// });

// par.addEventListener('click', (e) => {
//     e.stopPropagation();
//     par.remove();
// });

// let colda = document.createElement('a');

// document.body.appendChild(colda);

// colda.setAttribute('href', '#');

// colda.innerText = 'dos';

// let closeUpBin = document.querySelector('.lista');

// let doraa = document.querySelector('.losaa');

// const cbxApi = document.getElementById('api_sys');
// const btnApi = document.getElementById('asa_btn');

// function Clo(e) {
//     e.preventDefault();
//     console.error('Can not be checked, press the Api log button to deblock');
// }

// cbxApi.addEventListener('click', Clo);

// btnApi.addEventListener('click', () => {
//     cbxApi.removeEventListener('click', Clo);
//     console.log('Checkbox unblocked');
// });

// const selectBtn = document.querySelector('.bottom_cont');
// const startBtn = document.querySelector('.start_round');
// const pcScore = document.querySelector('.pc-score');
// const playerScore = document.querySelector('.player-score');
// const pcSel = document.querySelector('.pc-select');
// const userSel = document.querySelector('.player-select');
// const popupWin = document.querySelector('.popup_win');
// const winner = document.querySelector('.popup_winner');
// const popupBtn = document.querySelector('.popup_btn');

// let playerGuess;
// let pcGuess;

// const computerPlay = () => {
//     let pcGuess = Math.floor(Math.random() * 3 + 1);
//     switch (pcGuess) {
//         case 1:
//             pcGuess = 'rock';
//             break;
//         case 2: 
//             pcGuess = 'paper';
//             break;
//         case 3:
//             pcGuess = 'scissors';
//             break;
    
//         default:
//             break;
//     }

//     switch (pcGuess) {
//         case 'rock':
//             pcSel.textContent = '⛰';
//             break;
//         case 'paper':
//             pcSel.textContent = '📃';
//             break;
//         case 'scissors':
//             pcSel.textContent = '✂';
//             break;
//         default:
//             break;
//     }

//     return pcGuess;
    
// };


// let pcPoints = 0;
// let userPoints = 0;


// const playerPlay = () => {
    
//     selectBtn.addEventListener('click', function rpsSelection(e)  {
        
        


//         if (!e.target.classList.contains('bottom_cont')) {


//             if (e.target.classList.contains('rock')) {
//                 playerGuess = 'rock';
//             } if (e.target.classList.contains('paper')) {
//                 playerGuess = 'paper';
//             } if (e.target.classList.contains('scissors')) {
//                 playerGuess = 'scissors';
//             } 


//             userSel.textContent = e.target.textContent;
//         console.log(playerGuess);
//         let pcGuess2 = computerPlay();
//         console.log(pcGuess2);
        
//         if (pcGuess2 == 'rock' && playerGuess == 'paper') {
//             userPoints += 1;
//         }
//         if (pcGuess2 == 'paper' && playerGuess == 'scissors') {
//             userPoints += 1;
//         }
//         if (pcGuess2 == 'scissors' && playerGuess == 'rock') {
//             userPoints += 1;
//         }
//         if (pcGuess2 == 'paper' && playerGuess == 'rock') {
//             pcPoints += 1;
//         }
//         if (pcGuess2 == 'scissors' && playerGuess == 'paper') {
//             pcPoints += 1;
//         }
//         if (pcGuess2 == 'rock' && playerGuess == 'scissors') {
//             pcPoints += 1;
//         }
        
        
//        playerScore.textContent = userPoints;
//        pcScore.textContent = pcPoints;
    
//        if(userPoints >= 5 || pcPoints >= 5) {
//            selectBtn.removeEventListener('click', rpsSelection);
//            if (userPoints > pcPoints) {
//                winner.textContent = 'User wins';
//            } else if (pcPoints > userPoints) {
//                winner.textContent = 'PC wins';
//            } else {
//                winner.textContent = 'Draw';
//            }
//            popupWin.classList.add('popup_win_show');

//             }
//         }
    
//     });    

    
// };



// startBtn.addEventListener('click', () => {
// userPoints = 0;
// pcPoints = 0;
// playerScore.textContent = userPoints;
// pcScore.textContent = pcPoints;
// pcSel.textContent = '';
// userSel.textContent = '';
// });
// startBtn.addEventListener('click', playerPlay);

// popupBtn.addEventListener('click', () => {
//     popupWin.classList.remove('popup_win_show');
// });



