/** TOGGLE MENU DESKTOP */

const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const iconMenu = document.querySelector(".menu-icon-mobile");
const menuMobile = document.querySelector(".mobile-menu");

const shoppingIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

const cardsContainer = document.querySelector(".cards-container");

shoppingIcon.addEventListener("click", toggleProductDetail);
email.addEventListener("click", toggleDesktopMenu);
iconMenu.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const productDetailClose = productDetail.classList.contains("inactive");
  if (productDetailClose) {
    menuMobile.classList.toggle("inactive");
  } else {
    toggleProductDetail();
    menuMobile.classList.toggle("inactive");
  }
}

function toggleProductDetail() {
  const mobileMenuClose = menuMobile.classList.contains("inactive");

  if (mobileMenuClose) {
    productDetail.classList.toggle("inactive");
  } else {
    toggleMobileMenu();
    productDetail.classList.toggle("inactive");
  }
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "MotoBike",
  price: 620,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Platanla",
  price: 12000,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
   cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);
