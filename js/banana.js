// console.log('banana js cool library');

// const container = document.querySelector('.contain'),
//       arrow = document.querySelector('.hover_arrow'),
//       dots = document.querySelector('.dotss'),
//       list = document.querySelector('.list');

// arrow.addEventListener('click', () => {
//     container.classList.toggle('contain_up');
//     arrow.classList.toggle('chevron');
// });

// dots.addEventListener('click', () => {
//     list.classList.toggle('lista');
// });

// COOL

const cool = document.querySelector('.cool'),
    ico = document.querySelectorAll('.elem_ic'),
    arrow = document.querySelector('.elem_ic1');

arrow.addEventListener('click', () => {
    cool.classList.toggle('cool_closed');
    for(let i = 0; i < ico.length; i++) {
        ico[i].classList.toggle('elem_hidden');
    }
    arrow.classList.toggle('arrow_turn');
    
});
      
/*************/

const btn = document.getElementById('api');
let timerId,
    i = 0;


function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;


    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 540) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);


// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('Loaded');
//     i++;
// }

// let id = setTimeout(function log() {
//     console.log('Pos');
//     id = setTimeout(log, 5000);
// }, 500);