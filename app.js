const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");

openModalBtn.addEventListener("click", () => {
    overlay.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    overlay.style.display = "none";
})

overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    modal.style.display = "block";
})