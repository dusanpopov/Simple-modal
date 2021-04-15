const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".modal-btn__open");
const closeModalBtn = document.querySelector(".modal__btn-close");

openModalBtn.addEventListener("click", () => {
    overlay.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
    overlay.style.display = "none";
});
