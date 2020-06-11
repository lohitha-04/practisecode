//to change image on clicking.
let myimage = document.querySelector('img').onclick = function () {
  let mysrc = myimage.getAttribute('src');
  if (mysrc === 'images/images.jpg') {
    myimage.setAtrribute('src', 'images/rose.jpg');
  } else {
    myimage.setAtrribute('src', 'images/images.jpg');
  }
}
//to display an alert message.
let myh2 = document.querySelector('h2').onclick = function () {
  alert('Ouuch! Dont pouch me!');
}

//Adding a welcome message.
let mybutton = document.querySelector('button');
let myh1 = document.querySelector('h1');

mybutton.onclick = function () {
  setUserName();
}

function setUserName() {
  let myname = prompt('enter your name:');
  if (!myname) {
    setUserName();
  } else {
    localStorage.setItem('name', myname);
    myh1.innerHTML = 'Welcome to Google Chrome, ' + myname;
  }
}
//To initialise the above functin only on first visit.
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedname = localStorage.getItem('name');
  myh1.innerHTML = 'Welcome to Google Chrome, ' + storedname;
}

