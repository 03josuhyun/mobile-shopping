document.addEventListener('DOMContentLoaded', function () {
  const onTab01 = $('.item_box .item_tab ul li');
  const onSheet01 = $('.item_box .item_sheet>div');

  onTab01.on('click', function () {
    onTab01.removeClass('on_tab');
    $(this).addClass('on_tab');

    const index = $(this).index();

    onSheet01.removeClass('on_sheet');
    onSheet01.eq(index).addClass('on_sheet');
  });
  //item_box

  const qandaAddBtn = document.querySelector('.qanda_input_add');

  qandaAddBtn.addEventListener('click', function () {
    const qandaText = document.querySelector('.qanda_input_text');
    const qandaList = document.querySelector('.qanda_list');

    let newP = document.createElement('p');
    newP.className = 'qanda_new';
    let newId = document.createElement('p');
    newId.className = 'id_new';
    let newIdText = document.createTextNode(qandaText.value);
    let newText = document.createTextNode(qandaText.value);

    newP.appendChild(newIdText);
    newP.appendChild(newText);

    if (qandaText.value) {
      qandaList.insertBefore(newP, qandaList.children[0]);
    } else {
      alert('Q&A를 입력해야합니다');
    }

    qandaText.value = '';
    qandaText.focus();

  });


});

$(function () {
  $('.back').on('click', function () {
    window.history.back();
  });

  $('.img_btn').on('click', function () {
    $('.img02').fadeToggle();
  });
  //img_sheet

  $('.star_selected').on('click', function () {
    $('.option_star').toggleClass('active');
  });

  $('.option_selected').on('click', function () {
    $('.option').toggleClass('active01');
  });

  $('.share').on('click', function () {
    $('.share_popup').show();
  });
  $('.share_close').on('click', function () {
    $('.share_popup').hide();
  });
  $('.share_btn').on('click', function () {
    $('.share_popup').hide();
  });

  let index = false;
  $('.heart').on('click', function () {
    if (!index) {
      $(this).find('img').attr('src', './img/icon_heartcopy.png');
      index = true;
    } else {
      $(this).find('img').attr('src', './img/icon_heart.png');
      index = false;
    }
  });

  $('.add_btn').on('click', function () {
    $('.review_popup').show();
  });
  $('.review_popup_x').on('click', function () {
    $('.review_popup').hide();
  });

  /*$('.review_popup_btn').on('click',function(){
    const star = $('.review_popup_star').val();
    const reviewText = $('.review_popup03_txt').val();

    if(!reviewText) {
      alert('리뷰 내용을 입력해주세요')
      $('.review_popup03_txt').focus();
      return;
    }

    let newReview = 

    $('.review_popup').hide();
  });*/


  $('.qanda_add').on('click', function () {
    $('.qanda_input').css('display', 'block');
  });

  // $('.qanda_input_add').on('click',function(){
  //   const userId = user.user_id;

  //   const today = new Date();
  //   const year = new Year();
  //   const month = String(today.getMonth()+1).padStart(2, '0');
  //   const day = String(today.getDate()).padStart(2, '0');

  //   const date = `${year}.${month}.${day}`;

  //   const qandaText = $('.qanda_input_text').val();

  //   if(qandaText === ''){
  //     alert('문의 내용을 입력해주세요');
  //     return;
  //   }

  //   $('.qanda_list').append()
  // });



  $('.bar_item_option select').on('change', function () {
    let optionText = $(this).find('option:selected').text();

    $('.bar_txt').text(optionText);
  });

  /*$('.cart_btn').on('click', function () {
    $('.bar_popup_cart').slideToggle();
    if ($('.bar_txt').text().trim() === '') {
      alert('옵션을 선택해주세요');
    } else {
      alert('장바구니에 담겼습니다.');
    }
  });

  $('.pay_btn').on('click', function () {
    $('.bar_popup_cart').slideToggle();
  });
  */

  $('.bar_up').on('click', function () {
    $('.bar_popup_cart').toggleClass('open');
    $(this).toggleClass('rotate');
  });


});
