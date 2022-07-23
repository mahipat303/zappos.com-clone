form = document.getElementById("form");
document.getElementById("form").addEventListener("submit", varification);
function varification(event) {
  event.preventDefault();
  otp = form.otp.value;
  if (otp == "") {
    alert("enter otp");
  } else {
    if (otp == "1234") {
      alert("payment successful");
      window.location.href = "index.html";
    } else {
      alert("Wrong OTP");
    }
  }
}
