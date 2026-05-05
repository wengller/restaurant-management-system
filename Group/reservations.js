const RESERVATION_API_URL = "http://localhost:5025/api/reservations";

document.addEventListener("DOMContentLoaded", function () {
  const reservationForm = document.getElementById("reservation-form");
  const message = document.getElementById("reservation-message");

  reservationForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const reservation = {
      fullName: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      guestCount: Number(document.getElementById("guestCount").value)
    };

    try {
      const response = await fetch(RESERVATION_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(reservation)
      });

      if (!response.ok) {
        throw new Error("Reservation failed");
      }

      message.textContent = "Reservasjonen ble registrert.";
      message.style.color = "lightgreen";

      reservationForm.reset();
    } catch (error) {
      message.textContent = "Reservasjonen kunne ikke registreres.";
      message.style.color = "red";
      console.error(error);
    }
  });
});