firebase.auth().onAuthStateChanged(function (user) {
  const logoutDiv = document.getElementById('logout-button');
  const loginDiv = document.getElementById('login-button');
  if (user) {
    loginDiv.style.display = 'none';
    logoutDiv.style.display = 'flex';
  } else {
    loginDiv.style.display = 'flex';
    logoutDiv.style.display = 'none';
  }
});
