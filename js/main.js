
// hamburger menu
let menuOpen = document.getElementById('menuOpen'),
    menuClose = document.getElementById('menuClose'),
    menuList = document.querySelector('.hamb-menu__list'),
    body = document.querySelector('body');

menuOpen.addEventListener('click', function(){
    menuList.classList.add('hamb-menu__list_active');
    body.classList.add('fixed-block');
});
menuClose.addEventListener('click', function(){
    menuList.classList.remove('hamb-menu__list_active');
    body.classList.remove('fixed-block');
});


//slider

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
  	   items : 1,
  	   margin : 160,
  	   dots : false,
  	   // loop : true,
  });

   var owl = $('.owl-carousel');
          owl.owlCarousel();
          $('.arrow-next').click(function() {
           owl.trigger('next.owl.carousel');
          })
          $('.arrow-prev').click(function() {
           owl.trigger('prev.owl.carousel', [300]);
          })    
});


//team acco

let teamAcco = document.getElementsByClassName('mmbr__item');

    for (let i = 0; i < teamAcco.length; i++) {
    teamAcco[i].addEventListener("click", function () {
        if (!(this.classList.contains('mmbr__item_active'))) {
            for (let i = 0; i < teamAcco.length; i++) {
                teamAcco[i].classList.remove("mmbr__item_active");
            }
            this.classList.add("mmbr__item_active")
        }
        else {
            this.classList.remove("mmbr__item_active")
        }
    })
}

 //menu acco

// let menuAcco = document.getElementsByClassName('menu__item');

//     for (let i = 0; i < menuAcco.length; i++) {
//     menuAcco[i].addEventListener("click", function () {
//         if (!(this.classList.contains('menu__item_active'))) {
//             for (let i = 0; i < menuAcco.length; i++) {
//                 menuAcco[i].classList.remove("menu__item_active");
//             }
//             this.classList.add("menu__item_active")
//         }
//         else {
//             this.classList.remove("menu__item_active")
//         }
//     })
// }
//one page scroll
$(document).ready(function() {
	$('#fullpage').fullpage();
});

 let accoMenu = document.querySelector('.menu__accordion'),
    listMenu = accoMenu.children

accoMenu.addEventListener('click', function (event) {
    let target = event.target
    if (!target.classList.contains('menu__item-title')) {
        return
    }

    event.preventDefault()
    target = target.parentNode
    if (target.classList.contains('menu__item_active')) {
        target.classList.remove('menu__item_active')
        return
    } else {
        for (var i = 0; i < listMenu.length; i++) {
            listMenu[i].classList.remove('menu__item_active')
            target.classList.add('menu__item_active')
        }
    }
})
