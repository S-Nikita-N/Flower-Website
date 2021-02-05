$(document).ready(function(){
const flowersSlider = new Swiper('.flowers-slider', {
  // Optional parameters
  slidesPerView: 6,
  loop: true,

  

  // стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // adaptive settings
 breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 4,
      
    },
     990: {
      slidesPerView: 5,
      
    },
     1200: {
      slidesPerView: 6,
      
    }
     
  }
});

const reviewSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,

  // стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});



});



$("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
      opts : {
        caption : 'First caption',
        thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
      }
    },
    {
      src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
      opts : {
        caption : 'Second caption',
        thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});