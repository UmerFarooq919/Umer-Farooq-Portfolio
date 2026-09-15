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
