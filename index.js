const menuBtn = document.querySelector('#menu-btn');
const sideBar = document.querySelector('aside');
const closeBtn = document.querySelector('#close-btn');
const themeChanger = document.querySelector('.theme-toggler');

menuBtn.addEventListener('click', () => {
    sideBar.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    sideBar.style.display = 'none'
})

themeChanger.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeChanger.querySelector('span:nth-child(1)').classList.toggle('active');
    themeChanger.querySelector('span:nth-child(2)').classList.toggle('active')
})