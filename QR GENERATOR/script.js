function Generate() {
    let qrImage = document.getElementById("qrImage");
    let qrText = document.getElementById("qrText").value;

    if (qrText.trim() === "") {
        alert("Please enter a valid URL or text!");
        return;
    }

    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText);
}
