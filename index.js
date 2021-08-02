const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    speed: 2000,
    direction: 'horizontal',
    loop: true,
  

    autoplay: {
    delay: 2000,
    },

    fadeEffect: {
    crossFade: true
    },  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

function disableselect(e){
    return false
    }
    function reEnable(){
    return true
    }
    document.onselectstart=new Function ("return false")
    if (window.sidebar){
    document.onmousedown=disableselect
    document.onclick=reEnable
    }


$('.accordion').accordion({
      active: true,
      collapsible: true,
      heightStyle: 'content',
      header: '> .accordion-item > .accordion-header'

    });


window.addEventListener('DOMContentLoaded', function() {
      document.querySelector('#burger').addEventListener('click', function(){          /* меню */
          document.querySelector('#menu').classList.toggle('is-active')
      })
      })

$( function() {
        $( "#tabs" ).tabs();
        
      } );

