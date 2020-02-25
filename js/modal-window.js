let modalOverlay = document.querySelector("#modal-overlay"),
    closeButton = document.querySelector("#close-button"),
    openButton = document.querySelector("#open-button-1");

closeButton.addEventListener("click", function () { //Добавление слушателя на событие клик. Если нажали, оверлею придается класс closed
    modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", function () {
    modalOverlay.classList.toggle("closed");
});
