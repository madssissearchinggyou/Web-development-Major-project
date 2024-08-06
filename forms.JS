function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = ''; // Clear previous error messages
  
    // Validation criteria
    let isValid = true;
  
    if (fullName.length < 5) {
      displayError('Full Name must be at least 5 characters');
      isValid = false;
    }
  
    if (!email.includes('@')) {
      displayError('Enter a valid Email ID');
      isValid = false;
    }
  
    if (phone.length !== 10 || phone === '1234567890' || isNaN(phone)) {
      displayError('Enter a valid 10-digit Phone Number');
      isValid = false;
    }
  
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
      displayError('Password must be at least 8 characters long and not be "password" or your name');
      isValid = false;
    }
  
    if (password !== confirmPassword) {
      displayError('Passwords do not match');
      isValid = false;
    }
  
    // If all fields are valid, submit the form
    if (isValid) {
      alert('Form submitted successfully');
      document.getElementById('registrationForm').reset(); // Reset form after submission
    }
  
    function displayError(message) {
      const errorPara = document.createElement('p');
      errorPara.textContent = message;
      errorMessages.appendChild(errorPara);
    }
  }
