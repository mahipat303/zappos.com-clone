form2 = document.getElementById("addform");
form2.addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("cardform").style.display = "initial";
});

form1 = document.querySelector("#cardform");
form1.addEventListener("submit", getData);
function getData(event) {
  event.preventDefault();
  cardNumber = form1.card.value;
  expiry = form1.expiry.value;
  cvv = form1.cvv.value;
  personName = form1.name.value;
  if (card == "" || expiry == "" || cvv == "" || personName == "") {
    alert("fill all the detail");
  } else if (
    cardNumber == "1234567890" &&
    expiry == "01/2023" &&
    cvv == "303"
  ) {
    window.location.href = "otp.html";
  } else {
    alert("error");
  }
}

document.querySelector(".logo>img").addEventListener("click", gohome);
function gohome() {
  console.log("hello");
  window.location.href = "index.html";
}
