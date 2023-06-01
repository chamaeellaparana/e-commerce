firebase.auth().onAuthStateChanged(function (user) {
  const logoutDiv = document.getElementById('logout-button');
  const loginDiv = document.getElementById('login-button');
  const verificationStatus = document.getElementById('verification-status');
  if (user) {
    loginDiv.style.display = 'none';
    logoutDiv.style.display = 'flex';
    verificationStatus.display = 'flex';
  } else {
    loginDiv.style.display = 'flex';
    logoutDiv.style.display = 'none';
  }
  if (loginDiv.style.display == 'flex') {
    verificationStatus.display = 'none';
  }
});
