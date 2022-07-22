cartData = JSON.parse(localStorage.getItem("cart")) || [];
display(cartData);
function display(data) {
  document.querySelector(".appendhere").innerHTML = "";
  data.forEach((ele, index) => {
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
    // if (ele.qua) {
    //   qua = ele.qua;
    // } else {
    //   qua = 1;
    // }
    // let newp = qua * ele.price;
    h2.innerText = ele.price;
    select = document.createElement("select");
    // option0 = document.createElement("option");
    // option0.value = "6";
    // option0.innerText = "6";

    option1 = document.createElement("option");
    option1.value = "1";
    option1.innerText = "1";
    option2 = document.createElement("option");
    option2.value = "2";
    option2.innerText = "2";
    option3 = document.createElement("option");
    option3.value = "3";
    option3.innerText = "3";
    option4 = document.createElement("option");
    option4.value = "4";
    option4.innerText = "4";
    option5 = document.createElement("option");
    option5.value = "5";
    option5.innerText = "5";
    select.append(option1, option2, option3, option4, option5);
    select.addEventListener("change", function () {
      quantityChange(ele, index);
    });
    btn = document.createElement("button");
    btn.innerText = "REMOVE";
    btn.addEventListener("click", function () {
      removeCart(ele, index);
    });
    productprice.append(h2, select, btn);
    productdetail.append(cartproductimage, cartproductdetail);
    cartappenditem.append(productdetail, productprice);
    document.querySelector(".appendhere").append(cartappenditem);
  });
}

function removeCart(ele, index) {
  cartData = cartData.filter(function (element) {
    return element.code != ele.code;
  });
  localStorage.setItem("cart", JSON.stringify(cartData));
  display(cartData);
}

function quantityChange(ele, index) {
  // quantity = document.querySelector("select").value;

  quantity = select.value;
  select.style.color = "red";
  console.log(quantity);
  cartData = JSON.parse(localStorage.getItem("cart")) || [];
  cartData.forEach(function (element) {
    if (element.code == ele.code) {
      element.qua = Number(quantity);
    }
  });
  localStorage.setItem("cart", JSON.stringify(cartData));
  // display(cartData);
}
