var name = document.getElementById("name").Value;
var email = document.getElementById("email").Value;
var phonenum = document.getElementById("phonenum").Value;
var pass1 = document.getElementById("pass1").Value;
var pass2 = document.getElementById("pass2").Value;
var form = document.getElementById("form");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  fun();
})
function fun() {
  if (name == "") {
    document.getElementById('msg1').innerHTML = "**Username cannot be empty.";
    return false;
  }
  else if ((name.length < 3) || (name.length > 20)) {
    document.getElementById('msg1').innerHTML = "**Username must be between 3 to 20 characters.";
    return false;
  }
  else if (email == "") {
    document.getElementById('msg2').innerHTML = "**email id cannot be empty.";
    return false;
  }
  else if (email.indexOf('@') == -1) {
    document.getElementById('msg2').innerHTML = "**sample email id is abc@gmail.com";
    return false;
  }
  else if (phonenum == "") {
    document.getElementById('msg3').innerHTML = "**enter your mobile number.";
    return false;
  }
  else if (phonenum.length != 10) {
    document.getElementById('msg3').innerHTML = "**Mobile number should  consists of 10 digits."
    return false;
  }
  else if (pass1 == "") {
    document.getElementById('msg4').innerHTML = "**Enter Password.";
    return false;
  }
  else if (pass1.length <= 5 || pass1.length > 20) {
    document.getElementById('msg4').innerHTML = "**password length should   be in between 6 to 20 characters. ";
    return false;
  }
  else if (pass2 == "") {
    document.getElementById('msg5').innerHTML = "**Enter Confirm Password.";
    return false;
  }
  else if (pass1 != pass2) {
    document.getElementById('msg5').innerHTML = "**Password do not match.  ";
    return false;
  }
}

