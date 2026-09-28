document.addEventListener('DOMContentLoaded', function () {
  const onTab01 = $('.today .today_tab ul li');
  const onSheet01 = $('.today .today_sheet>div');

  onTab01.on('click', function () {
    onTab01.removeClass('tab_on01');
    $(this).addClass('tab_on01');

    const index01 = $(this).index();

    onSheet01.removeClass('sheet_on01');
    onSheet01.eq(index01).addClass('sheet_on01');
  });
  //today_box

  $('.today_item_add').each(function () {
    const btn = $(this);
    const item02 = btn.prev('.item02');

    let index02 = false;

    btn.on('click', function () {
      if (index02 === false) {
        item02.css('display', 'flex');
        index02 = true;
      } else {
        item02.css('display', 'none');
        index02 = false;
      }
    });
  });
  //today_box, today_add

  const onTab02 = $('.mbti_box .mbti_tab ul li');
  const onSheet02 = $('.mbti_box .mbti_sheet>div');

  onTab02.on('click', function () {
    onTab02.removeClass('tab_on02');
    $(this).addClass('tab_on02');

    const index02 = $(this).index();

    onSheet02.removeClass('sheet_on02');
    onSheet02.eq(index02).addClass('sheet_on02');
  });
  //mbti_box

  const onTab03 = $('.season_box .season_tab ul li');
  const onSheet03 = $('.season_box .season_sheet>div');
  const seasonBox = $('.season_box .season_tab');

  onTab03.on('click', function () {
    onTab03.removeClass('tab_on03');
    $(this).addClass('tab_on03');

    const index03 = $(this).index();

    onSheet03.removeClass('sheet_on03');
    onSheet03.eq(index03).addClass('sheet_on03');

    if (index03 === 0) {
      seasonBox.css('background-image', 'url("./img/season_bg04 copy.jpg")');
    }
    if (index03 === 1) {
      seasonBox.css('background-image', 'url("./img/season_bg02.jpg")');
    }
    if (index03 === 2) {
      seasonBox.css('background-image', 'url("./img/season_bg05 copy.jpg")');
    }
    if (index03 === 3) {
      seasonBox.css('background-image', 'url("./img/season_bg01.jpg")');
    }
  });
  //season_box

  const onTab04 = $('.season_event_box .event_tab ul li');
  const onSheet04 = $('.season_event_box .event_sheet>div');


  onTab04.on('click', function () {
    onTab04.removeClass('tab_on04');
    $(this).addClass('tab_on04');

    const index04 = $(this).index();

    onSheet04.removeClass('sheet_on04');
    onSheet04.eq(index04).addClass('sheet_on04');
  });
  //season_event_box
});

$(function () {
  $('.lnb01 i').on('click', function () {
    $('.lnb01_in').toggle('slow');
  });
  $('.lnb02 i').on('click', function () {
    $('.lnb02_in').toggle('slow');
  });
  $('.lnb03 i').on('click', function () {
    $('.lnb03_in').toggle('slow');
  });
  $('.lnb04 i').on('click', function () {
    $('.lnb04_in').toggle('slow');
  });
  $('.lnb05 i').on('click', function () {
    $('.lnb05_in').toggle('slow');
  });
  $('.lnb06 i').on('click', function () {
    $('.lnb06_in').toggle('slow');
  });
  $('.lnb08 i').on('click', function () {
    $('.lnb08_in').toggle('slow');
  });
  $('.lnb09 i').on('click', function () {
    $('.lnb09_in').toggle('slow');
  });

  $('.popup01').on('click', function () {
    $('.celeb_popup01').fadeIn();
  });

  $('.popup_x').on('click', function () {
    $('.celeb_popup01').fadeOut();
  });

  $('.popup02').on('click', function () {
    $('.celeb_popup02').fadeIn();
  });

  $('.popup_x').on('click', function () {
    $('.celeb_popup02').fadeOut();
  });

  $('.cart').on('click', function () {
    $('.cart_popup').show();
  });

  $('.cart_close').on('click', function () {
    $('.cart_popup').hide();
  });

  const heartBtn = $('.heart');
  const heartPop = $('.heart_popup');
  let index = false;

  heartBtn.on('click', function () {
    if (!index) {
      heartPop.stop(true, true).fadeIn('fast').delay(1000).fadeOut('fast');
      $(this).find('img').attr('src', './img/icon_img_2clickcopy.png');
      index = true;
    } else {
      $(this).find('img').attr('src', './img/icon_img_2.png');
      index = false;
    }
  });
});