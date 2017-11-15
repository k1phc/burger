let menuOpen = document.getElementById('menuOpen');
let menuClose = document.getElementById('menuClose');
let menuList = document.querySelector('.hamb-menu__list');
let body = document.querySelector('body');

menuOpen.addEventListener('click', function(){
    menuList.classList.add('hamb-menu__list_active');
    body.classList.add('fixed-block');
});
menuClose.addEventListener('click', function(){
    menuList.classList.remove('hamb-menu__list_active');
    body.classList.remove('fixed-block');
});


