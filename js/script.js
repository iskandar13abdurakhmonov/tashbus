const headerBurger = document.querySelector('.burger-menu');
const headerContent = document.querySelector('.nav');
const headerBtns = document.querySelector('.header__btns');

headerBurger.addEventListener("click", () => {
    headerBurger.classList.toggle("active");
    headerContent.classList.toggle("active");
    headerBtns.classList.toggle("active");
})

document.querySelectorAll(".nav__link").forEach(n => n.addEventListener("click", () => {
    headerBurger.classList.remove("active")
    headerContent.classList.remove("active")
    headerBtns.classList.remove("active");
}))

