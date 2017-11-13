var menuOpen = document.getElementById('menuOpen');
var menuClose = document.getElementById('menuClose');
var menuList = document.querySelector('.hamb-menu__list');

menuOpen.addEventListener('click', function(){
    menuList.classList.add('hamb-menu__list_active');
});
menuClose.addEventListener('click', function(){
    menuList.classList.remove('hamb-menu__list_active');
});
