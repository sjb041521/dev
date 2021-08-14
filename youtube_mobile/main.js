const morBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

morBtn.addEventListener('click', () => {
    morBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});