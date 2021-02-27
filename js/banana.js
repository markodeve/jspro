console.log('banana js cool library');

const container = document.querySelector('.contain'),
      arrow = document.querySelector('.hover_arrow');

arrow.addEventListener('click', () => {
    container.classList.toggle('contain_up');
    arrow.classList.toggle('chevron');
});