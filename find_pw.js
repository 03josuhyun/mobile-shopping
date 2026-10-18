$(function () {

  $('.back').on('click',function(){
    window.history.back();
  });

  const tab = $('.find .find_tab li');
  const sheet = $('.find .find_sheet>div');
  let index = 0;

  tab.click(function () {
    tab.removeClass('on_tab');
    $(this).addClass('on_tab');

    index = $(this).index();

    sheet.removeClass('on_sheet');
    sheet.eq(index).addClass('on_sheet');
  });
  //tab

  const telBtn = $('.tel_btn button');
  const telTxt = $('.tel_in input');
  telBtn.click(function () {
    if (telTxt.val().length === 0) {
      alert('전화번호를 입력해주세요');
    } else {
      alert('입력하신 전화번호로 인증번호를 보냈습니다.');
    }
  });
  //tel

  const btnTel = $('.tel_num button');
  const telNum = $('.tel_num input');
  const btnNext = $('.btn_next button')
  const num = '951753';
  const popup = $('.popup');

  btnTel.click(function () {
    if (telNum.val() === num) {
      alert('인증번호가 확인되었습니다');
      popup.show();
    } else {
      alert('인증번호가 옳지 않습니다');
      btnNext.click(function () {
        alert('인증번호 확인이 끝난 후 눌러주세요');
      });
    }
  });
  //tel_num

  const emailBtn = $('.next_btn button');
  const emailTxt = $('.email_do input');
  emailBtn.click(function () {
    if (emailTxt.val().length === 0) {
      alert('이메일를 입력해주세요');
    } else {
      popup.show();
    }
  });
  //email_tel

  const emails = document.getElementById('emails');
  emails.addEventListener('change', () => {
    let emailName = emails.options[emails.selectedIndex].innerText;
    document.getElementById('email').value = emailName;
  });

  const newPw = $('.new .new_pw');
  const newPw01 = $('.new01 .new_pw01');
  const btnChk = $('.btn_chk');

  btnChk.click(function(){
    if(newPw.val() === newPw01.val()){
      alert('비밀번호가 등록이 되었습니다');
      popup.hide();
      alert('로그인 페이지로 이동합니다');
      window.location.href = './login.html';
    }else {
      alert('비밀번호가 동일하지 않습니다 다시 입력해주세요')
    }

  });


});

document.addEventListener(function () {

});