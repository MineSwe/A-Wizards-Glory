// Gjord av Marcus 21/05-2024

// https://www.w3schools.com/howto/howto_js_dropdown.asp
// https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
// https://stackoverflow.com/questions/5338716/get-multiple-elements-by-id

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var elements = document.getElementsByClassName("navDropdownContent");
  var names = '';
  for(var i = 0; i < elements.length; i++) {
    var x = elements[i];
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
}


// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
function GetEmailOnClipboard() {
  var emailText = document.getElementById("getEmail").innerHTML;

  navigator.clipboard.writeText(emailText);

  var alert = document.getElementById("textCopiedAlert");
  alert.innerHTML = "Copied email adress!";
}

var loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) =>
{
  e.preventDefault();
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  var resultText = document.getElementById("loginResultText");
  if (password != confirmPassword) {
    resultText.innerHTML = "The passwords don't match!";
  }
  else {
    resultText.innerHTML = "Logged in!";
  }
});