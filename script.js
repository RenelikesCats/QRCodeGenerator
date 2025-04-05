const qrImage = document.getElementById("qrImage");
const errorMsg = document.getElementById("errorMessage");

document.getElementById("generateBtn").addEventListener("click", () => {
  const qrText = document.getElementById("qrText");

  if (qrText.value.length > 0) {
    errorMsg.hidden = true;
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${qrText.value}`;
    qrImage.classList.remove("hidden");
  } else {
    errorMsg.hidden = false;
    qrImage.classList.add("hidden");
    qrText.classList.add("input-shake");

    setTimeout(() => {
      qrText.classList.remove("input-shake");
    }, 500);
  }
});
