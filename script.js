const connectBtn = document.getElementById("connectBtn");
const status = document.getElementById("status");

connectBtn.addEventListener("click", () => {

    alert("підключення гаманця");

    status.textContent = "Гаманець підключено";

});