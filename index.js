entry = localStorage.getItem("entry") || 0;
if (entry == 1) {
  div1 = document.createElement("div");
  a1 = document.createElement("a");
  a1.innerText = "Logout";
  a1.className = "logout";
  div1.append(a1);
  div2 = document.createElement("div");
  img = document.createElement("img");
  img.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLjU0NS41NDVoMS41Yy43MjggMCAxLjM2OC40OCAxLjU3MSAxLjE3OWwzLjQ3NSAxMS45MTItMS45MTYgMi4zOTZBMS4yMTEgMS4yMTEgMCAwIDAgNi4xMiAxOGgxNS4xNTIiIHN0cm9rZT0iIzFGMUYxRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNNy4wOSAxMy42MzZoMTAuOTYyYy42MzQgMCAxLjIxMS0uMzY2IDEuNDgxLS45NEwyMy4zNCA0LjYxYy4wNzYtLjE2Mi4xMTYtLjMzOC4xMTYtLjUxNnYtLjE1NGMwLS42Ny0uNTQzLTEuMjEyLTEuMjEyLTEuMjEySDQuMzYzIiBzdHJva2U9IiMxRjFGMUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PGNpcmNsZSBmaWxsPSIjMUYxRjFGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGN4PSI2LjU0NSIgY3k9IjIxLjgxOCIgcj0iMS42MzYiLz48Y2lyY2xlIGZpbGw9IiMxRjFGMUYiIGZpbGwtcnVsZT0ibm9uemVybyIgY3g9IjE5LjYzNiIgY3k9IjIxLjgxOCIgcj0iMS42MzYiLz48L2c+PC9zdmc+";
  img.href = "cart.html";
  div2.append(img);
  document.querySelector(".loginbtn").append(div1, div2);
} else {
  div1 = document.createElement("div");
  a1 = document.createElement("a");
  a1.innerText = "Signin";
  a1.href = "Login.html";
  div1.append(a1);
  div2 = document.createElement("div");
  a2 = document.createElement("a");
  a2.innerText = "Register";
  //   a2.href = "Login.html";
  a2.className = "hello";
  div2.append(a2);
  document.querySelector(".loginbtn").append(div1, div2);
}

document.querySelector(".hello").addEventListener("click", function () {
  jadu = document.querySelector(".zdiv");
  jadu.style.display = "grid";
  jadu.style.zIndex = "10000";
  // document.getElementById("main").style.opacity = "0.3";
  document.getElementById("header").style.opacity = "0.7";
  document.getElementById("bigbannermain").style.opacity = "0.7";

});

document.getElementById("close").addEventListener("click", function () {
  jadu = document.querySelector(".zdiv");
  jadu.style.display = "none";
  document.getElementById("header").style.opacity = "1";
  document.getElementById("bigbannermain").style.opacity = "1";
});

document.querySelector(".logout").addEventListener("click", function () {
  localStorage.setItem("entry", 0);
  window.location.href = "/index.html";
});
