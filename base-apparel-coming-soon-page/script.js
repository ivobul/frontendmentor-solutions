const form  = document.querySelector('.form');
const email = document.querySelector('#email');
const emailError = document.querySelector('.error');

// prevent the browser from showing default HTML5 validation error 
// message bubble
document.addEventListener('invalid', (function(){
  return function(e) {
  //prevent the browser from showing default error bubble / hint
  e.preventDefault();
  // optionally fire off some custom validation handler
  // myValidation();
  };
})(), true);

email.addEventListener('input', function () {
  // Each time the user types something, we check if the
  // form fields are valid.
  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.innerText = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
    email.classList.remove('icon-error'); // Show the icon error
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit
  if (!email.value) {
    event.preventDefault();
    
    emailError.innerText = 'You need to enter an email address.';
    emailError.classList.add('active');
    email.classList.add('icon-error');
  }
});

function showError() {
  if(email.validity.typeMismatch) {
    // If the field doesn't contain an email address
    // display the following error message.
    emailError.innerText = 'Please provide a valid email.';
    // Show the icon error
    email.classList.add('icon-error');
  } 
  
  /* It isn't needed at this situation  
  else if(email.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    emailError.innerText = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
    email.classList.add('icon-error');
  }
  */
  
  // Set the styling appropriately
  emailError.classList.add('active');
}
