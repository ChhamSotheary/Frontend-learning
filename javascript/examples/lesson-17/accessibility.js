const openButton = document.querySelector("#open-help");
const dialog = document.querySelector("#help-dialog");
const closeButton = document.querySelector("#close-help");

openButton.addEventListener("click", () => {
  dialog.showModal();
  closeButton.focus();
});

closeButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => openButton.focus());
