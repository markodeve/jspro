// console.log('banana js cool library');

const container = document.querySelector('.contain'),
      arrow = document.querySelector('.hover_arrow'),
      dots = document.querySelector('.dotss'),
      list = document.querySelector('.list');

arrow.addEventListener('click', () => {
    container.classList.toggle('contain_up');
    arrow.classList.toggle('chevron');
});

dots.addEventListener('click', () => {
    list.classList.toggle('lista');
});