firebase.auth().onAuthStateChanged(function (user) {
  const loginDiv = document.getElementById('logout-button');
  const logoutDiv = document.getElementById('logout-in');
  if (!user) {
    loginDiv.style.display = 'none';
    logoutDiv.style.display = 'flex';
  } else {
    loginDiv.style.display = 'flex';
    logoutDiv.style.display = 'none';
  }
});
