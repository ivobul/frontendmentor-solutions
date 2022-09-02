const form1  = document.querySelector('.page-header__form');
const form2  = document.querySelector('.page-main__form');
const email1 = document.querySelector('.page-header__email');
const email2 = document.querySelector('.page-main__email');
const error1 = document.querySelector('#error1');
const error2 = document.querySelector('#error2');

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

email1.addEventListener('input', function () {
  // Each time the user types something, we check if the
  // form fields are valid.
  if (email1.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    error1.innerText = ''; // Reset the content of the message
    error1.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

email2.addEventListener('input', function () {
  // Each time the user types something, we check if the
  // form fields are valid.
  if (email2.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    error2.innerText = ''; // Reset the content of the message
    error2.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form1.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit
  if (!email1.value) {
    event.preventDefault();
    
    error1.innerText = 'You need to enter an email address.';
    error1.classList.add('active');
  }
});

form2.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit
  if (!email2.value) {
    event.preventDefault();
    
    error2.innerText = 'You need to enter an email address.';
    error2.classList.add('active');
  }
});

function showError() {
  if (email1.validity.typeMismatch) {
    // If the field doesn't contain an email address
    // display the following error message.
    error1.innerText = 'Please provide a valid email.';
    // Set the styling appropriately
    error1.classList.add('active');
  } 
  else if (email2.validity.typeMismatch) {
    // If the field doesn't contain an email address
    // display the following error message.
    error2.innerText = 'Please provide a valid email.';
    // Set the styling appropriately
    error2.classList.add('active');
  } 
}