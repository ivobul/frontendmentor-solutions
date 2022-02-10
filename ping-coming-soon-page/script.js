/*
  Validating forms using javascript: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#validating_forms_using_javascript
*/

const form  = document.querySelector('form');
const email = document.querySelector('#email');
const emailError = document.querySelector('.error');

// prevent the browser from showing default HTML5 validation error message bubble
document.addEventListener('invalid', (function(){
  return function(e) {
    //prevent the browser from showing default error bubble / hint
    e.preventDefault();
  };
})(), true);

email.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.classList.remove("active");
    emailError.innerText = ''; // Reset the content of the message
    email.style.borderColor = "hsl(223, 87%, 63%)"; // Change the border color of the email field from red to blue - success
  } 
  else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit

  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.classList.add("active");
    emailError.innerText = 'You need to enter an e-mail address.';
    // Change the border color of the email field from gray to red - error
    email.style.borderColor = "hsl(354, 100%, 66%)";
  } 
  else if (email.validity.patternMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.classList.add("active");
    emailError.innerText = 'Entered value needs to be an e-mail address.';
    // Change the border color of the email field from gray to red - error
    email.style.borderColor = "hsl(354, 100%, 66%)";
  }
}