$(function () {
  const totalTerms = document.getElementById('total_terms');
  const termsEls = document.querySelectorAll('.terms_el');
  const terms01 = document.getElementById('terms01');
  const terms02 = document.getElementById('terms02');
  const terms03 = document.getElementById('terms03');
  const btnNext = document.querySelector('.btn_next');


  totalTerms.addEventListener('click', totalCheck);
  terms01.addEventListener('click', termsCheck);
  terms02.addEventListener('click', termsCheck);
  terms03.addEventListener('click', termsCheck);

  function totalCheck() {
    if (totalTerms.checked) {
      termsEls.forEach(termsEl => {
        termsEl.checked = true;
      });
    } else {
      termsEls.forEach(termsEl => {
        termsEl.checked = false;
      });
    }
  }
  function termsCheck() {
    if (terms01.checked && terms02.checked && terms03.checked) {
      totalTerms.checked = true;
    } else {
      totalTerms.checked = false;
    }
  }

  btnNext.addEventListener('click', function (e) {
    if (totalTerms.checked) {
      alert('전체약관을 동의다 하셨습니다');
    } else {
      e.preventDefault();
      alert('동의를 다 하지않았습니다');
    }
  });

  $('.terms01 span').on('click', function () {
    $('.terms01 p').stop().slideToggle('slow');
  });
  $('.terms02 span').on('click', function () {
    $('.terms02 p').stop().slideToggle('slow');
  });
  $('.terms03 span').on('click', function () {
    $('.terms03 p').stop().slideToggle('slow');
  });
  //terms

  $('.btn_can').click(function () {
    alert('약관동의를 취소하여 로그인 페이지로 이동합니다');
  })
});

