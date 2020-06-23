function checkform() {
  const username = document.getElementById("name").value;
  const number = document.getElementById("num").value;
  const password1 = document.getElementById("pass1").value;
  const password2 = document.getElementById("pass2").value;
  const form = document.getElementById("form");

  if (username === "") {
    document.getElementById("msg1").innerHTML = ("Username cannot be empty!");
    return false;
  }
  if (username.length < 6 || username.lenght > 20) {
    document.getElementById("msg1").innerHTML = "name must be 5 to 20 characters length.";
    return false;
  }
  if (number == "" || number.length != 10) {
    document.getElementById("msg2").innerHTML = "Mobile number is not valid";
    return false;
  }
  if (password1.length < 6) {
    document.getElementById("msg3").innerHTML = "Password should be atleast 6 characters";
    return false;
  }
  if (password2 != password1) {
    document.getElementById("msg4").innerHTML = "Passwords do not match";
    return false;
  }
  return (true);
}
// function to convert form data to json.
function toJSONString(form) {
  var obj = {};
  var elements = form.querySelectorAll("input");
  for (var i = 0; i < elements.length; ++i) {
    var element = elements[i];
    var name = element.name;
    var value = element.value;

    if (name) {
      obj[name] = value;
    }
  }

  return JSON.stringify(obj);
}

const output = toJSONString();
// Submitting form data in json.

form.addEventListner('submit', function (e) {
  var xhttp = new XMLHttpRequest();
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(output);
})



