const sideMenu = document.getElementById("sideMenu");
const openMenuButton = document.getElementById("openMenuButton");
const closeMenuButton = document.getElementById("closeMenuButton");
const shadowDiv = document.querySelector(".shadow-div");
const nextArrow = document.querySelector(".next-arrow");
const previousArrow = document.querySelector(".previous-arrow");
const products = document.querySelectorAll(".products");
const cartIcon = document.querySelector(".cart-icon-container");
const cartContent = document.querySelector(".cart-content-container");
const quantity = document.querySelector(".quantity");
const plusIcon = document.getElementById("plusIcon");
const minusIcon = document.getElementById("minusIcon");
const addToCart = document.querySelector('.add-to-cart');
const removeFromCart = document.querySelector('.remove-from-cart');
const quantityIndicator = document.querySelector('.quantity-indicator');
const checkoutProductPrice = document.getElementById('checkoutProductPrice');
const checkoutQuantity = document.getElementById('checkoutQuantity');
const checkoutTotal = document.getElementById('checkoutTotal');
const cartEmpty = document.querySelector('.cart-empty');


closeMenuButton.addEventListener("click", function (e) {
  sideMenu.classList.remove("show");
  shadowDiv.classList.remove("show");
  document.body.classList.remove('overflow-hidden');
});
openMenuButton.addEventListener("click", function (e) {
  sideMenu.classList.add("show");
  shadowDiv.classList.add("show");
  document.body.classList.add('overflow-hidden');
});

let currentIndex = 0;
nextArrow.addEventListener("click", function (e) {
  products.forEach((product) => {
    product.style.zIndex = 1;
  });

  currentIndex = (currentIndex + 1) % products.length;
  products[currentIndex].style.zIndex = products.length + 1;
});

previousArrow.addEventListener("click", function (e) {
  products.forEach((product) => {
    product.style.zIndex = 1;
  });

  currentIndex = (currentIndex + 1) % products.length;
  products[currentIndex].style.zIndex = products.length + 1;
});

cartIcon.addEventListener("click", function (e) {
  if (!cartContent.classList.contains("show")) {
    cartContent.classList.add("show");
  } else {
    cartContent.classList.remove("show");
  }
});


plusIcon.addEventListener("click", function (e) {
  quantity.textContent = parseInt(quantity.textContent) + 1;
  let max = 5;
  if(parseInt(quantity.textContent) > max){
    quantity.textContent = 5;
    alert('excceeded amount in inventory');
  };
});
minusIcon.addEventListener("click", function (e) {
  quantity.textContent = parseInt(quantity.textContent) - 1;
  if (parseInt(quantity.textContent) <= 0) {
    quantity.textContent = parseInt(quantity.textContent) * 0;
  }
});

addToCart.addEventListener('click', function(e){
  if(parseInt(quantity.textContent) >= 1){
    quantityIndicator.classList.add('show');
  quantityIndicator.textContent = parseInt(quantity.textContent);
  checkoutQuantity.textContent = parseInt(quantity.textContent);
  checkoutTotal.textContent = parseInt(quantity.textContent) * parseInt(checkoutProductPrice.textContent);
  cartEmpty.classList.add('hide');
};

if(quantityIndicator.classList.contains('hide')){
  quantityIndicator.classList.remove('hide');
};
});
removeFromCart.addEventListener('click', function(e){
  cartEmpty.classList.remove('hide');
 quantityIndicator.classList.add('hide');
});
