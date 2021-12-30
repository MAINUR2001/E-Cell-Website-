const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("ul");
const image=document.querySelector(".image");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    image.remove();
}
const navLink = document.querySelectorAll("li");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
console.log(navMenu)