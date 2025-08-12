//Wildlife fact of the day
const facts = [
    "Elephants communicate through ground vibrations.",
    "Giraffes only need 5 to 30 minutes of sleep per day.",
    "Cheetahs can accelerate from 0 to 60 mph in just 3 seconds.",
    "Zebras' stripes help deter biting flies.",
    "Lions rest for up to 20 hours a day.",
    "A giraffe's neck has the same number of vertebrae as a human's—just longer!",
    "Elephants can detect water sources up to 12 miles away.",
    "Lions rest for up to 20 hours a day to conserve energy for hunting.",
    "The cheetah is the fastest land animal, reaching speeds of 70 mph.",
    "Hippos secrete a natural sunscreen that protects their skin from the sun."
];


document.addEventListener("DOMContentLoaded", () => {
    const factElement = document.getElementById("fact");
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factElement.textContent = randomFact;
});

//hamburger menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');

});

// carousel images
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

window.addEventListener('resize', updateCarousel);




//date and year
const yearSpan = document.querySelector("#currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;