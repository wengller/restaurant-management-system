const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

//! buttons
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});

cartBtn.addEventListener("click", function () {
  cartItem.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(cartBtn) &&
      !e.composedPath().includes(cartItem)
    ) {
      cartItem.classList.remove("active");
    }
  });
});

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});

// script.js

document.addEventListener("DOMContentLoaded", function() {
  const addToCartButtons = document.querySelectorAll(".btn");

  addToCartButtons.forEach(button => {
      button.addEventListener("click", function(event) {
          event.preventDefault(); // Sayfa yenilemesini önlemek için

          const productContainer = this.closest(".box"); // Ürünün bulunduğu containerı bul
          const productImg = productContainer.querySelector("img").src; // Ürün resmini al
          const productName = productContainer.querySelector("h3").innerText; // Ürün adını al
          const productPrice = productContainer.querySelector(".price").innerText; // Ürün fiyatını al

          addToCart(productImg, productName, productPrice); // Sepete ekleme fonksiyonunu çağır
      });
  });
  function addToCart(imgSrc, name, price) {
      const cartItemsContainer = document.querySelector(".cart-items-container");

      // Yeni ürün öğesi oluştur
      const newItem = document.createElement("div");
      newItem.classList.add("cart-item");
      newItem.innerHTML = `
          <i class="fas fa-times remove-item"></i>
          <img src="${imgSrc}" alt="${name}" />
          <div class="content">
              <h3>${name}</h3>
              <div class="price">${price}</div>
          </div>
      `;

      // Sepetin içine yeni ürünü ekle
      //cartItemsContainer.appendChild(newItem);
       // Yeni cart item'ı container'a ekle
cartItemsContainer.insertBefore(newItem, cartItemsContainer.lastElementChild);
// Cart items container'ın yüksekliğini güncelle
const newHeight = cartItemsContainer.scrollHeight + "px";
cartItemsContainer.style.height = newHeight;

// Yeni eklenen ürünün çarpı simgesine tıklanıldığında removeCartItem fonksiyonunu çağır
const removeIcon = newItem.querySelector('.remove-item');
removeIcon.addEventListener('click', removeCartItem);

}
  });



  // Fonksiyon, sepetten bir ürünü kaldırmak için kullanılır
function removeCartItem(event) {
  const clickedIcon = event.target; // Tıklanan ikonu bul
  const cartItem = clickedIcon.closest('.cart-item'); // Tıklanan ikonun ürününü bul
  cartItem.remove(); // Ürünü sepetten kaldır
}

// Tüm 'fas fa-times' ikonlarına tıklanıldığında removeCartItem fonksiyonunu çağır
const removeIcons = document.querySelectorAll('.cart-item .fas.fa-times');
removeIcons.forEach(icon => {
  icon.addEventListener('click', removeCartItem);
});