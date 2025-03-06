// CAROUSEL
const slides = document.getElementsByClassName("carousel-image");
const prevButton = document.getElementById("carousel-button-prev");
const nextButton = document.getElementById("carousel-button-next");
let position = 0;
const numberOfSlides = slides.length;

function hideImage() {

    for (const slide of slides) {
        slide.classList.remove("carousel-image-visible");
        slide.classList.add("carousel-image-hidden");
    }
}

const nextMove = function(e) {
    hideImage();
}

const previousMove = function(e) {
    hideImage();
}

const handleNextMove = function(e) {
    hideImage();

    if (position === numberOfSlides - 1) {
        position = 0;
    } else {
        position++;
    }

    slides[position].classList.add("carousel-image-visible");
}

const handlePrevMove = function(e) {
    hideImage();

    if (position === 0) {
        position = numberOfSlides - 1;
    } else {
        position--;
    }

    slides[position].classList.add("carousel-image-visible");
}

nextButton.addEventListener("click", handleNextMove);
prevButton.addEventListener("click", handlePrevMove);
// CAROUSEL

//SEARCHBAR
document.getElementById("searchBar").addEventListener('keydown', function (e) {

    if (e.key === 'Enter') {
        // need to see first
      }

});