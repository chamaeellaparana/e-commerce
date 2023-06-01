firebase.auth().onAuthStateChanged(function (user) {
  const loginDiv = document.getElementById('logout-button');
  if (!user) {
    loginDiv.textContent = 'LOGIN';
  } else {
    loginDiv.textContent = 'lOGOUT';
  }
});
