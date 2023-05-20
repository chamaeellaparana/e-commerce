// Form submit event handler
// Check Firebase Auth initialization
if (typeof firebase.auth === 'undefined') {
  console.error('Firebase Authentication is not properly initialized.');
}

// Form submit event handler
document
  .getElementById('login-form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get user input values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Sign in user with Firebase Authentication
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        var user = userCredential.user;
        // Do something after successful login, e.g., redirect to a different page
        console.log('Login successful');
        window.location.href = 'BloomCosmetics.html';
      })
      .catch(function (error) {
        // Handle errors during login
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error('Login failed:', errorMessage);
      });
  });
