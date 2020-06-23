const form = document.getElementById('form');
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const number = document.getElementById('number').value;
const pass1 = document.getElementById('pass1').value;
const pass2 = document.getElementById('pass2').value;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  myfunction();
});

function myfunction() {
  if (namevalue === "") {
    setErrorFor(name, 'Username cannot be empty.');
  } else {
    setSuccessFor(name);
  }
  if (emailvalue === "") {
    setErrorFor(email, 'email cannot be empty.');
  } else if (email.indexOf('@') === -1) {
    setErrorFor(email, 'email entered is not valid.');
  } else {
    setSuccessFor(email);
  }
  if (numbervalue === "") {
    setErrorFor(number, 'Mobile number cannot be empty.');
  } else if ('numbervalue != 10') {
    setErrorFor(number, 'Mobile number not valid.');
  } else {
    setSuccessFor(number);
  }
  if (pass1value === "") {
    setErrorFor(pass1, 'Password cannot be empty.');
  } else {
    setSuccessFor(pass1);
  }
  if (pass2value !== pass1value) {
    setErrorFor(pass2, 'Re-enter password.');
  } else {
    setSuccessFor(pass2);
  }
  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.classname = 'form-control error';
  }
  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classname = 'form-control success';
  }
}
