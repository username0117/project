function validateLogin() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var userInfo = JSON.parse(localStorage.getItem('userInfo'));

  if (username && password) {
      if (userInfo && userInfo.username === username && userInfo.password === password) {
          window.location.href = 'Home.html';
      } else {
          alert('가입 정보가 확인되지 않습니다. ID와 Password 정보를 확인해 주세요.');
      }
  } else {
      alert('ID와 비밀번호를 입력하세요.');
  }
}

function goToJoin() {
  window.location.href = 'join.html';
}