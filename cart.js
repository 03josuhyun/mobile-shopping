$(function () {
  let cnt01 = 1;
  const price01 = $('.item_price01');
  const Unitprice01 = Number(price01.text().replace(',', '').replace('원', ''));
  $('.btn_plus01').click(function () {
    cnt01++;
    if (cnt01 > 5) {
      cnt01 = 5;
      alert('최대 5개까지만 구매 가능합니다');
    }
    $('.count_box01').text(cnt01);
    totalPrice();
    Cnt();

    price01.text((cnt01 * Unitprice01).toLocaleString() + '원');
  });
  $('.btn_minus01').click(function () {
    cnt01--;
    if (cnt01 < 1) {
      alert('최소 1개부터 구매하셔야합니다');
    }
    $('.count_box01').text(cnt01);
    totalPrice();
    Cnt();

    price01.text((cnt01 * Unitprice01).toLocaleString() + '원');
  });
  /**/

  /**/
  let cnt02 = 1;
  const price02 = $('.item_price02');
  const Unitprice02 = Number(price02.text().replace(',', '').replace('원', ''));

  $('.btn_plus02').click(function () {
    cnt02++;
    if (cnt02 > 5) {
      cnt02 = 5;
      alert('최대 5개까지만 구매 가능합니다');
    }
    $('.count_box02').text(cnt02);
    totalPrice();
    Cnt();

    price02.text((cnt02 * Unitprice02).toLocaleString() + '원');
  });

  $('.btn_minus02').click(function () {
    cnt02--;
    if (cnt02 < 1) {
      alert('최소 1개부터 구매하셔야합니다');
    }
    $('.count_box02').text(cnt02);
    totalPrice();
    Cnt();

    price02.text((cnt02 * Unitprice02).toLocaleString() + '원');
  });

  /**/
  const total = $('.total');
  function totalPrice() {
    total.text(((cnt01 * Unitprice01) + (cnt02 * Unitprice02)).toLocaleString() + '원');
  }
  const totalCnt = $('.total_cnt');
  function Cnt () {
    totalCnt.text('('+'총'+(cnt01 + cnt02)+'개'+')');
  }
  /**/
  
  /**/
  $('.item_cupon01').click(function(){
    $('.cupon_popup01').fadeIn();
  });
  $('.cupon_result').click(function(){
    $('.cupon_popup01').fadeOut();
  });
  $('.cupon_x').click(function(){
    $('.cupon_popup01').fadeOut();
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const totalTerms = document.querySelector('.total_btn');
  const termsEls = document.querySelectorAll('.item_btn');
  const term01 = document.querySelector('.item_btn01');
  const term02 = document.querySelector('.item_btn02');

  totalTerms.addEventListener('click', totalCheck);
  term01.addEventListener('click', termsCheck);
  term02.addEventListener('click', termsCheck);
  function totalCheck() {
    if (totalTerms.checked === true) {
      termsEls.forEach(termsEl => {
        termsEl.checked = true
      });
    } else {
      termsEls.forEach(termsEl => {
        termsEl.checked = false;
      });
    }
  }
  function termsCheck() {
    if (term01.checked && term02.checked) {
      totalTerms.checked = true;
    } else {
      totalCheck.checked = false;
    }
  }
});