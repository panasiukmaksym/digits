const hamburgerMenu = document.querySelector('.nav__menu ');
const bgMenu = document.querySelector('.phone-menu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu__close');

hamburgerMenu.addEventListener('click', (event) => {
    bgMenu.style.display = 'block';
    setTimeout( () => {
        bgMenu.style.opacity = 1;
        menu.style.marginLeft = '0px';
    }, 100);
});

bgMenu.addEventListener('click', (event) => {
    if ( event.target && event.target === bgMenu ) {
        menu.style.marginLeft = '-100%';
        bgMenu.style.opacity = 0;
        setTimeout( () => {
            bgMenu.style.display = 'none';
        }, 200);
    }
});

closeMenu.addEventListener('click', (event) => {
    menu.style.marginLeft = '-100%';
    bgMenu.style.opacity = 0;
    setTimeout( () => {
        bgMenu.style.display = 'none';
    }, 200);
});
