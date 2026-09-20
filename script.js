/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


/* Close mobile menu when clicking a link */

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* =========================================
   DEMO CONTACT FORM
========================================= */

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const button = contactForm.querySelector(".form-submit");

    button.innerHTML = "Inquiry Received ✓";

    button.style.background = "#211f1d";

});