document.addEventListener('DOMContentLoaded', function (){
  const optionBox = document.querySelector('.option_box');
  const optionBtn = document.querySelector('.option_btn');
  let state = false;

  optionBtn.addEventListener('click',function(){
    if(state) {
      optionBox.style.display = 'none';
      state = false;
    }else {
      optionBox.style.display = 'block';
      state = true;
    }
  });

  
});

$(function(){
  $('.back').on('click',function(){
    window.history.back();
  });
  
  $('.selected').on('click',function(){
    $('.select').toggleClass('active');
  });

  $('.option_close').on('click',function(){
    $('.option_box').hide();
  });

  $('.cart').on('click',function(){
    $('.cart_popup').show();
  });

  $('.cart_close').on('click',function(){
    $('.cart_popup').hide();
  });

  const heartBtn = $('.heart');
  const heartPop = $('.heart_popup');
  let index = false;

  heartBtn.on('click',function(){
    if(!index){
      heartPop.stop(true,true).fadeIn('fast').delay(1000).fadeOut('fast');
      $(this).find('img').attr('src','./img/icon_img_2clickcopy.png');
      index = true;
    }else{
      $(this).find('img').attr('src','./img/icon_img_2.png');
      index = false;
    }
  });
});