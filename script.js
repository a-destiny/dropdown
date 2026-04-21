const menuBtn = document.getElementById('menuBtn');
const navContent = document.querySelector('.rightNav');

menuBtn.addEventListener('click', () => {
    navContent.classList.toggle('active');
    menuBtn.textContent = navContent.classList.contains('active') ? '✕' : '☰';
});
