document.querySelector("#form").addEventListener("submit", collectData);

function collectData(event) {
  inputArr = [];
  event.preventDefault();
  data1 = {
    email: form.mail.value,
    pass: form.password.value,
  };

  if (data1.email == "" || data1.pass == "") {
    alert("Fill all the details");
  } else {
    console.log(data1);
    inputArr.push(data1);
    store(inputArr);
  }
}
function store(inputArr) {
  storedData = JSON.parse(localStorage.getItem("signupdata")) || [];
  inputpass = inputArr[0].pass;
  inputemail = inputArr[0].email;
  for (i = 0; i < storedData.length; i++) {
    if (storedData[i].email == inputemail) {
      if (storedData[i].pass == inputpass) {
        localStorage.setItem("entry", 1);
        alert("login successful");
        window.location.href = "index.html";
        form.reset();
        break;
      } else {
        alert("Wrong password");
        break;
      }
    }
    if (i == storedData.length - 1 && storedData[i].email != inputemail) {
      alert("Register your Email");
    }
  }
}
