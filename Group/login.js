async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:5025/api/Auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });

    if (response.ok) {
        const data = await response.json();

        localStorage.setItem("token", data.token);

        window.location.href = "admin.html";
    } else {
        document.getElementById("error").innerText = "Feil login!";
    }
}