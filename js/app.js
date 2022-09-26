"use strict"

const header = document.querySelector('.main-header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        header.classList.add('main-header--scroll');
    }
    if (window.scrollY == 0) {
        header.classList.remove('main-header--scroll');
    }
});


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (evt) {
        evt.preventDefault()

        const blockID = anchor.getAttribute('href').substring(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// Меню Бургер

const MenuIcon = document.querySelector(".main-nav__menu-icon");
const MenuBody = document.querySelector(".main-nav__menu");

if (MenuIcon) {
    MenuIcon.addEventListener("click", function (e) {
        MenuBody.classList.toggle('main-nav__menu--hidden');
    })
}
