fetch('./json_file/json01.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    $(function () {

      $('.back').on('click', function () {
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

      btnTel.click(function () {
        if (telNum.val() === num) {
          alert('인증번호가 확인되었습니다');
          btnNext.click(function () {
            alert('아이디는 00000 입니다')
            window.location.href = './login.html';
          });
        } else {
          alert('인증번호가 옳지 않습니다');
          btnNext.click(function () {
            alert('인증번호 확인이 끝난 후 눌러주세요');
          });
        }
      });
      //tel_num
      /*----------------------------------------*/

      const emailBtn = $('.next_btn button');

      const userEmail = $('.user_email');
      const emailDomain = $('.email');

      emailBtn.click(function () {
        const emailId = userEmail.val().trim();
        const domain = emailDomain.val().trim();


        if (emailId.length === 0 || domain.length === 0) {
          alert('이메일를 입력해주세요');
          return;
        }
        const inputEmail = emailId + '@' + domain;

        const user = data.find(item => item.email === inputEmail);

        if (user) {
          alert('입력하신 이메일로 아이디를 보냈습니다');
        } else {
          alert('일치한 이메일 없습니다.');
        }
      });
      //email_tel

      const emails = document.getElementById('emails');

      /*emails.addEventListener('change', () => {
        const emailName = $(this).val();

        if(emailName === '직접입력'){
          emailDomain.val('');
          emailDomain.prop('readonly', false);
          emailDomain.focus();
        }else {
          emailDomain.val(emailName);
          emailDomain.prop('readonly', true);
        }
      });*/
      emails.addEventListener('change', () => {
        let emailName = emails.options[emails.selectedIndex].innerText;
        document.getElementById('email').value = emailName;
      });
    });
  }).catch(error => {
    console.error('데이터를 불러오지 못했습니다.', error);
  });


