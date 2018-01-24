
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

let menuAcco = document.getElementsByClassName('menu__item');

    for (let i = 0; i < menuAcco.length; i++) {
    menuAcco[i].addEventListener("click", function () {
        if (!(this.classList.contains('menu__item_active'))) {
            for (let i = 0; i < menuAcco.length; i++) {
                menuAcco[i].classList.remove("menu__item_active");
            }
            this.classList.add("menu__item_active")
        }
        else {
            this.classList.remove("menu__item_active")
        }
    })
}
//one page scroll
$(document).ready(function() {
	$('#fullpage').fullpage({
          anchors:['first-section', 'best', 'burgers', 'team', 'menu', 'review', 'form', 'section-map'],
          menu: '#myMenu'
  });
});
  

//map
 ymaps.ready(init);

 var placemarks = [
     {
     	latitude: 59.98,
     	longitude: 30.31,
     	balloonContent: 'Адрес'
     },
     {
     	latitude: 59.90,
     	longitude: 30.32,
     	balloonContent: 'Адрес'
     },
     {
        latitude: 59.95,
     	longitude: 30.38,
     	balloonContent: 'Адрес'
     },
      {
        latitude: 59.92,
     	longitude: 30.49,
     	balloonContent: 'Адрес'
     }
 ];
 function init() {
 	   var map = new ymaps.Map('map', {
 	   	          center: [59.94, 30.32],
 	   	          zoom: 12,
 	   	          controls: ['zoomControl'],
 	   	          behaviors: ['drag']
 	   });

 	   placemarks.forEach(function(obj) {
             var placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
 	   	         balloonContent: obj.balloonContent
       },
        {
       	    iconLayout: 'default#image',
       	    iconImageHref: 'icons/map-marker.svg',
       	    iconImageSize: [46, 57],
       	    iconImageOffset: [-23, -20]
 	});
              map.geoObjects.add(placemark);
  });
}          

//form

$(function () {
    function ajaxForm (form) {
        let url = form.attr('action'),
            data = form.serialize();

        return $.ajax({
            type: 'POST',
            url: url,
            data: data,
            dataType: 'JSON'
        });
    }

    function submitForm(e) {
        e.preventDefault();

        let form = $(e.target),
            request = ajaxForm(form);

        request.done(function(msg) {
            let mes = msg.mes,
                status = msg.status;
            if (status === 'OK') {
                openModal('Cпасибо за заказ!',mes,'green')
            } else{
                openModal('Извините, сервер не работает.',mes,'red')
            }
        });

        request.fail(function(jqXHR, textStatus) {
            openModal('Извините, сервер не работает.',textStatus,'red')
        });
    }

    $('#order').on('submit', submitForm);
});	  
      

 	

 	  
 