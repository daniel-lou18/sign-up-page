const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm');
const button = document.querySelector('.submit-button');
const submitSpan = document.querySelector('.submit-check');
const form = document.querySelector('[name="form-main"]');

password.addEventListener('focus', removeRedBorder);
passwordConfirm.addEventListener('focus', removeRedBorder);

form.addEventListener('submit', checkValidity);

function checkValidity(e) {
  if (password.value !== passwordConfirm.value) {
    password.classList.add('pw-not-equal');
    passwordConfirm.classList.add('pw-not-equal');
    submitSpan.textContent = 'Passwords are not matching';
    e.preventDefault();
  }
};

function removeRedBorder(e) {
  password.classList.remove('pw-not-equal');
  passwordConfirm.classList.remove('pw-not-equal');
};