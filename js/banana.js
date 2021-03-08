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

cool.addEventListener('click', () => {
    cool.classList.toggle('cool_closed');
    for(let i = 0; i < ico.length; i++) {
        ico[i].classList.toggle('elem_hidden');
    }
    arrow.classList.toggle('arrow_turn');
    
});
      
