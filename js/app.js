const basketIcons = document.querySelectorAll(".store-item-icon");
const infoCartDiv = document.getElementById("cart-info");

const cart = document.getElementById("cart");
const total = document.querySelector(".cart-total-container");

// First show cart

infoCartDiv.addEventListener("click", (e) => {
  console.log("info card is clciked");
  cart.classList.toggle("show-cart");
});

basketIcons.forEach((basket) => {
  basket.addEventListener("click", (e) => {
    alert("Item added to the cart!");

    if (e.target.parentElement.classList.contains("store-item-icon")) {
      let fullPath = e.target.parentElement.previousElementSibling.src;
      console.log(fullPath);
      let position = fullPath.indexOf("img") + 3; //removing img rom the front of position thats way +3;
      console.log("Position:", position);

      let partPath = fullPath.slice(position);
      console.log("partPath:", partPath);

      //object

      const item = {};
      //we add img to object
      item.img = `img-cart${partPath}`;

      let name =
        e.target.parentElement.parentElement.nextElementSibling.children[0]
          .children[0].textContent;
      let price =
        e.target.parentElement.parentElement.nextElementSibling.children[0]
          .children[1].textContent;

      // we add name to object
      item.name = name;

      let finalPrice = price.slice(1).trim();
      console.log("Final price:", finalPrice);

      item.price = finalPrice;

      console.log("item object:", item);

      //create new Card

      const cardItem = document.createElement("div");
      console.log(cardItem);
      cardItem.classList.add(
        "cart-item",
        "d-flex",
        "justify-content-between",
        "text-capitalize",
        "my-3"
      );

      cardItem.innerHTML = `<img src=${item.img} class="img-fluid rounded-circle" id="item-img" alt="">
<div class="item-text">

  <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
  <span>$</span>
  <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
</div>
<a href="#" id='cart-item-remove' class="cart-item-remove">
  <i class="fas fa-trash"></i>
</a>`;

      //Add cartItem to cart

      cart.insertBefore(cardItem, total);
    }
  });
});
