const API_URL = "http://localhost:5025/api/Reviews";

const reviewsList = document.getElementById("reviewsList");
const form = document.getElementById("reviewForm");

alert("reviews.js çalıştı");

document.addEventListener("DOMContentLoaded", loadReviews);

async function loadReviews() {
    const response = await fetch(API_URL);
    const reviews = await response.json();

    reviewsList.innerHTML = "";

    reviews.forEach(review => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <h3>${review.fullName}</h3>
            <p>${review.comment}</p>
            <p>⭐ ${review.rating}</p>
        `;

        reviewsList.appendChild(div);
    });
}

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    alert("Send butonuna basıldı");

    const fullName = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fullName: fullName,
            rating: 5,
            comment: comment
        })
    });

    alert("POST status: " + response.status);

    const text = await response.text();
    alert("Backend cevabı: " + text);

    form.reset();
    loadReviews();
});