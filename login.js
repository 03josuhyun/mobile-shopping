$(function () {
  $('.back').on('click',function(){
    window.history.back();
  });

  fetch('./json_file/json01.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);

      $('.login_btn').on('click', function () {
        const userId = $('.user_id').val();
        const userPW = $('.user_pw').val();

        const user = data.find(item => {
          return item.customer_id === userId && item.customer_pw === userPW;
        })

        if (user) {
          alert('로그인에 성공하셨습니다.');
          window.location.href = './index.html';
        } else {
          alert('일치하지 않는 계정입니다.')
        }
      });
    })
    .catch(error => {
      console.error('데이터를 불러오지 못했습니다.', error);
    });
});