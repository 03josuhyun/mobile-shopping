document.addEventListener('DOMContentLoaded', function () {
  let DeliBtn = document.querySelector('.deli_btn');
  DeliBtn.addEventListener('click', () => {
    if (DeliBtn.checked === true) {
      document.getElementById('deli_name').value = document.getElementById('user_name').value;

      const tel = document.getElementById('tel').value + '-' +
        document.getElementById('tel_second').value + '-' +
        document.getElementById('tel_third').value;

      document.getElementById('deli_tel').value = tel;

      const addr = document.getElementById('user_addr').value + '-' +
        document.getElementById('user_addr01').value + '-' +
        document.getElementById('user_addr02').value;

      document.getElementById('deli_addr').value = addr;
    } else {
      document.getElementById('deli_name').value = '';
      document.getElementById('deli_tel').value = '';
      document.getElementById('deli_addr').value = '';
    }

  });
  const tel = document.getElementById('tel').value + '-' +
        document.getElementById('tel_second').value + '-' +
        document.getElementById('tel_third').value;

  const emails = document.getElementById('emails');
  const email = document.getElementById('email')
  emails.addEventListener('change', ()=>{
    let emailName = emails.options[emails.selectedIndex].innerText;
    document.getElementById('email').value = emailName;
  });

  const nextBtn = document.querySelector('.next_btn');
  const popUp = document.querySelector('.popup');
  let state = false;

  nextBtn.addEventListener('click', function(){
    if(state){
      popUp.style.display = 'none';
      state = false;
    }else {
      popUp.style.display = 'block';
      state = true;
    }
  });//popup

  document.getElementById('popup_btn').addEventListener('click', function(){
    setTimeout(function(){
      window.location.href = "./index.html"
    },1000)
  });

});


$(function () {
  $('.addr_find').click(function () {
    new daum.Postcode({
      oncomplete: function (data) {
        /*$('#address').val(data.address);*/

        $('#user_addr').val(data.zonecode);
        $('#user_addr01').val(data.address);
        $('#user_addr02').focus();
      }
    }).open();
  });

  $('.tel_btn').click(function(){
    alert('전화로 인증되었습니다');
  });

});