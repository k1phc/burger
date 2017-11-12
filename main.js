var menuOpen = document.querySelector('#menuOpen');
var menuClose = document.querySelector('#menuClose');
var menuList = document.querySelector('.hamb-menu__list');


menuOpen.addEventListener('click', function(elem){
    menuList.classList.add('hamb-menu__list_active');
});
menuClose.addEventListener('click', function(){
    menuList.classList.remove('hamb-menu__list_active');
});
