function saveUserInfo(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const name = document.getElementById('name').value;
  const telPart1 = document.getElementById('telPart1').value;
  const telPart2 = document.getElementById('telPart2').value;
  const telPart3 = document.getElementById('telPart3').value;
  const address = document.getElementById('address').value;
  const birth = document.getElementById('birth').value;
  const tel = telPart1 + telPart2 + telPart3;

  // 유효성 검사
  if (!/^[a-zA-Z0-9]{8,}$/.test(username)) {
    alert("아이디는 영문자와 숫자로 이루어진 8자리 이상이어야 합니다.");
    document.getElementById('username').value = ""; // 작성 내용 삭제
    document.getElementById('username').focus();
    return;
  }

  if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/.test(password)) {
    alert("비밀번호는 영문자, 숫자, 특수문자를 포함하여 7자리 이상이어야 합니다.");
    document.getElementById('password').value = ""; // 작성 내용 삭제
    document.getElementById('password').focus();
    return;
  }

  if (password !== confirmPassword) {
    alert("비밀번호가 일치하지 않습니다.");
    document.getElementById('confirmPassword').value = ""; // 작성 내용 삭제
    document.getElementById('confirmPassword').focus();
    return;
  }

  if (!/^[가-힣]{2,8}$/.test(name)) {
    alert("이름은 한글로 2~8자 이내로 작성해야 합니다.");
    document.getElementById('name').value = ""; // 작성 내용 삭제
    document.getElementById('name').focus();
    return;
  }

  if (!/^010$/.test(telPart1) || !/^\d{3,4}$/.test(telPart2) || !/^\d{4}$/.test(telPart3)) {
    alert("전화번호 형식이 잘못되었습니다.");
    document.getElementById('telPart1').value = "";
    document.getElementById('telPart2').value = "";
    document.getElementById('telPart3').value = ""; // 오류 발생 시 해당 작성 내용 초기화
    document.getElementById('telPart1').focus();  // 초기화 후 해당 지역 포커스
    return;
  }

  const birthDate = new Date(birth);
  const today = new Date();
  if (birthDate > today) {
    alert("생년월일 입력값이 잘못되었습니다.");
    document.getElementById('birth').value = ""; // 오류 발생 시 해당 작성 내용 초기화
    document.getElementById('birth').focus(); // 초기화 후 해당 지역 포커스
    return;
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  if (age < 15) {
    alert("15세 이상부터 가입이 가능합니다.");
    document.getElementById('birth').value = ""; // 오류 발생 시 해당 작성 내용 초기화
    document.getElementById('birth').focus(); // 초기화 후 해당 지역 포커스
    return;
  }

  const userInfo = {
    username,
    password,
    name,
    tel,
    address,
    birth
  };

  localStorage.setItem('userInfo', JSON.stringify(userInfo));
  if (confirm('회원가입 되었습니다. 확인을 누르면 로그인 페이지로 이동합니다.')) {
      window.location.href = 'index.html';
  }
}