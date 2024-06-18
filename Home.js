// 로그아웃 기능
function logout() {
  // 로그아웃 로직 (예: 세션 초기화, 로컬 스토리지 초기화 등)
  localStorage.removeItem('userInfo'); // 예시: 로컬 스토리지 초기화
  window.location.href = 'index.html'; // 로그인 페이지로 이동
}

// 마이페이지 이동 기능
function goToMyPage() {
  window.location.href = 'mypage.html'; // 마이페이지로 이동
}

// 로그인한 사용자 이름 표시
document.addEventListener('DOMContentLoaded', function() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (userInfo && userInfo.username) {
      document.getElementById('usernameButton').innerText = userInfo.username + " 님";
  }
});
