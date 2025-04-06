
let popup = document.getElementById("popup");

function openPopup() {
  popup.style.visibility = "visible";
  popup.style.transform = "translate(-50%, -50%) scale(1)";
}

function closePopup() {
  popup.style.visibility = "hidden";
  popup.style.transform = "translate(-50%, -50%) scale(0.1)";
}