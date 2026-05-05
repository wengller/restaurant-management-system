const API_URL = "http://localhost:5025/api/products";

let cart = [];

document.addEventListener("DOMContentLoaded", function () {
  loadProducts();
  setupCheckout();
});

async function loadProducts() {
  const productList = document.getElementById("product-list");

  try {
    const response = await fetch(API_URL);
    const products = await response.json();

    productList.innerHTML = "";

    products.forEach((product) => {
      productList.innerHTML += `
        <div class="box">
          <div class="box-head">
            <span class="title">${product.description}</span>
            <a href="#" class="name">${product.name}</a>
          </div>

          <div class="image">
            <img src="${product.imageUrl}" alt="${product.name}" />
          </div>

          <div class="box-bottom">
            <div class="info">
              <b class="price">${product.price} Kr</b>
              <span class="amount">${product.description}</span>
            </div>

            <div class="product-btn">
              <button class="add-cart-btn"
                onclick="addToCart('${product.name}', ${product.price}, '${product.imageUrl}')">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    });
  } catch (error) {
    productList.innerHTML = "<p>Produkter kunne ikke lastes.</p>";
    console.error(error);
  }
}

function addToCart(name, price, imageUrl) {
  cart.push({
    name: name,
    price: price,
    imageUrl: imageUrl
  });

  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart-list");
  const cartTotal = document.getElementById("cart-total");

  cartList.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartList.innerHTML += `
      <div class="cart-item">
        <i class="fas fa-times" onclick="removeFromCart(${index})"></i>
        <img src="${item.imageUrl}" alt="${item.name}" />
        <div class="content">
          <h3>${item.name}</h3>
          <div class="price">${item.price} Kr</div>
        </div>
      </div>
    `;
  });

  cartTotal.textContent = `Total: ${total} Kr`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function setupCheckout() {
  const checkoutBtn = document.getElementById("checkout-btn");

  checkoutBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Kurven er tom.");
      return;
    }

    alert("Bestillingen er registrert. Takk!");
    cart = [];
    renderCart();
  });
}