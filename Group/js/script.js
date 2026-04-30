const searchForm = document.querySelector(".search-form");
const cartItemsContainer = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");
    cartItemsContainer.classList.remove("active");
    navbar.classList.remove("active");
  });
}

if (cartBtn) {
  cartBtn.addEventListener("click", () => {
    cartItemsContainer.classList.toggle("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
  });
}

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    cartItemsContainer.classList.remove("active");
  });
}

window.addEventListener("scroll", () => {
  searchForm.classList.remove("active");
  cartItemsContainer.classList.remove("active");
  navbar.classList.remove("active");
});
