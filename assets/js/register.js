// Form submit event handler

document
  .getElementById('registration-form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get user input values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var name = document.getElementById('name').value;

    // Create user account with Firebase Authentication
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        var user = userCredential.user;
        // Update additional user information if needed
        return user.updateProfile({
          displayName: name,
        });
      })
      .then(function () {
        // Registration successful, redirect or show a success message
        console.log('Registration successful');
      })
      .catch(function (error) {
        // Handle errors during registration
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error('Registration failed:', errorMessage);
      });
  });
