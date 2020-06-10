function fun() {
  var uname = document.getElementById('name').value;
  var emailid = document.getElementById('email').value;
  var number = document.getElementById('phonenum').value;
  var password1 = document.getElementById('pass1').value;
  var password2 = document.getElementById('pass2').value;
  var form1 = document.getElementById('form');

  if (uname == "") {
    document.getElementById("msg1").innerHTML = "**Username cannot be empty.";
    return false;
  }
  if ((uname.length <= 3) || (uname.length > 20)) {
    document.getElementById('msg1').innerHTML = "**Username must be between 3 to 20 characters.";
    return false;
  }
  if (emailid == "") {
    document.getElementById('msg2').innerHTML = "**email id cannot be empty.";
    return false;
  }
  if (emailid.indexOf('@') == -1) {
    document.getElementById('msg2').innerHTML = "**sample email id is abc@gmail.com";
    return false;
  }
  if (number == "") {
    document.getElementById('msg3').innerHTML = "**enter your mobile number.";
    return false;
  }
  if (number.length != 10) {
    document.getElementById('msg3').innerHTML = "**Mobile number should  consists of 10 digits."
    return false;
  }
  if (password1 == "") {
    document.getElementById('msg4').innerHTML = "**Enter Password.";
    return false;
  }
  if (password1.length <= 5 || password1.length > 20) {
    document.getElementById('msg4').innerHTML = "**password length should   be in between 6 to 20 characters. ";
    return false;
  }
  if (password2 == "") {
    document.getElementById('msg5').innerHTML = "**Enter Confirm Password.";
    return false;
  }
  if (password1 != password2) {
    document.getElementById('msg5').innerHTML = "**Password do not match.  ";
    return false;
  }
}

