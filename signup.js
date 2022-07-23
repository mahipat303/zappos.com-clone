document.querySelector("#form").addEventListener("submit", collectData);
arr = JSON.parse(localStorage.getItem("signupdata")) || [];
function collectData(event) {
  event.preventDefault();
  data = {
    pname: form.name.value,
    email: form.mail.value,
    pass: form.password.value,
    pass1: form.password1.value,
  };
  if (data.email == "" || data.number == "" || data.pass == "") {
    alert("Fill all the details");
  } else if (data.pass != data.pass1) {
    alert("Passwords must match");
  } else {
    console.log("hello");
    arr.push(data);
    store(arr);
    form.reset();
  }
}
function store(arr) {
  localStorage.setItem("signupdata", JSON.stringify(arr));
  window.location.href = "Login.html";
}
