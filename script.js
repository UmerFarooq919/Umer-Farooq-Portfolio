<<<<<<< HEAD
let index = 0;
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

function slideRight() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(slideRight, 3000);
=======
let index = 0;
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

function slideRight() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(slideRight, 3000);
>>>>>>> e30d7ec3959c56dd7cb5ad8806529e6c78c0cd85
