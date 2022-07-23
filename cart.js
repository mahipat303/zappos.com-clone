cartData = JSON.parse(localStorage.getItem("cart")) || [];
display(cartData);
function display(data) {
  total = 0;
  totalprice = 0;
  document.querySelector(".appendhere").innerHTML = "";
  data.forEach((ele, index) => {
    quat = ele.qua;
    total += quat;
    document.querySelector(".totalitems").innerText = total;
    document.querySelector(".totalitems1").innerText = total;
    cartappenditem = document.createElement("div");
    cartappenditem.className = "cartappenditem";
    productdetail = document.createElement("div");
    productdetail.className = "productdetail";
    cartproductimage = document.createElement("div");
    cartproductimage.className = "cartproductimage";
    proimg = document.createElement("img");
    proimg.src = ele.img;
    cartproductimage.append(proimg);
    cartproductdetail = document.createElement("div");
    cartproductdetail.className = "cartproductdetail";
    h3 = document.createElement("h3");
    h3.innerText = ele.brand;
    p1 = document.createElement("p");
    p1.innerText = ele.name;
    p2 = document.createElement("p");
    p2.innerText = ele.color;
    cartproductdetail.append(h3, p1, p2);
    productprice = document.createElement("div");
    productprice.className = "productprice";
    h2 = document.createElement("h2");
    if (ele.qua) {
      qua = ele.qua;
    }
    let newp = qua * ele.price;
    h2.innerText = newp;
    btn1 = document.createElement("button");
    btn1.innerText = "+";
    btn1.className = "minusbtnforp";
    btn1.addEventListener("click", function () {
      removeCarto(ele, index);
    });
    btn2 = document.createElement("button");
    btn2.innerText = "-";
    btn2.className = "minusbtnforp";
    btn2.addEventListener("click", function () {
      removeCartoo(ele, index);
    });
    btn = document.createElement("button");
    btn.innerText = "REMOVE";
    btn.addEventListener("click", function () {
      removeCart(ele, index);
    });
    p2 = document.createElement("p");
    p2.innerText = qua;
    productprice.append(h2, btn1, p2, btn2, btn);
    productdetail.append(cartproductimage, cartproductdetail);
    cartappenditem.append(productdetail, productprice);
    document.querySelector(".appendhere").append(cartappenditem);
    totalprice += newp;
    document.querySelector(".cartvaluet").innerText = totalprice;
  });
}

function removeCart(ele, index) {
  cartData = cartData.filter(function (element) {
    return element.code != ele.code;
  });
  localStorage.setItem("cart", JSON.stringify(cartData));
  display(cartData);
}
function removeCarto(ele, index) {
  btn1.style.color = "red";
  cartData = JSON.parse(localStorage.getItem("cart")) || [];
  cartData.forEach(function (element) {
    if (element.code == ele.code) {
      element.qua++;
    }
  });

  localStorage.setItem("cart", JSON.stringify(cartData));
  display(cartData);
}
function removeCartoo(ele, index) {
  cartData = JSON.parse(localStorage.getItem("cart")) || [];
  cartData.forEach(function (element) {
    if (element.code == ele.code) {
      if (element.qua > 1) {
        element.qua--;
      }
    }
  });

  localStorage.setItem("cart", JSON.stringify(cartData));
  display(cartData);
}

document
  .querySelector(".summarymain>button")
  .addEventListener("click", checOut);
function checOut() {
  console.log("hello");
  window.location.href = "checkout.html";
}

// navbar script starts here ====================>>>>>>>>>>>>>>>>>>>>>>

document.querySelector(".logo>img").addEventListener("click", gohome);
function gohome() {
  console.log("hello");
  window.location.href = "index.html";
}

entry = localStorage.getItem("entry") || 0;

if (entry == 1) {
  div1 = document.createElement("div");
  a1 = document.createElement("a");
  a1.innerText = "Logout";
  a1.className = "logout";
  div1.append(a1);
  document.querySelector(".loginbtn").append(div1);
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

document.querySelector(".logout").addEventListener("click", function () {
  localStorage.setItem("entry", 0);
  window.location.href = "/index.html";
});
