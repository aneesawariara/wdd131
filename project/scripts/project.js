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

function getSightings() {
    return JSON.parse(localStorage.getItem('wildlifeSightings')) || [];
}

function renderSightings() {
    const sightings = getSightings();
    const sightingsList = document.getElementById('sightingsList');
    sightingsList.innerHTML = '';

    sightings.forEach((sighting, index) => {
        const div = document.createElement('div');
        div.classList.add('sighting-entry');
        div.innerHTML = `
            <p><strong>Name:</strong> ${sighting.name}</p>
            <p><strong>Species:</strong> ${sighting.species}</p>
            <p><strong>Location:</strong> ${sighting.location}</p>
            <p><strong>Date:</strong> ${sighting.date}</p>
            <p><strong>Notes:</strong> ${sighting.notes}</p>
        `;
        sightingsList.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Fact of the Day
    const factElement = document.getElementById("fact");
    if (factElement) {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        factElement.textContent = `${randomFact}`;
    }

    // Form logic
    const form = document.getElementById('sightingForm');
    const sightingsList = document.getElementById('sightingsList');
    const clearButton = document.getElementById('clearSightings');

    renderSightings();

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const sighting = {
                name: form.visitorName.value.trim(),
                species: form.species.value.trim(),
                location: form.location.value.trim(),
                date: form.date.value,
                notes: form.notes.value.trim()
            };
            if (!sighting.name || !sighting.species || !sighting.location || !sighting.date) {
                alert('Please fill out all required fields.');
                return;
            }
            const sightings = getSightings();
            sightings.push(sighting);
            localStorage.setItem('wildlifeSightings', JSON.stringify(sightings));
            form.reset();
            renderSightings();
        });
    }

    if (clearButton) {
        clearButton.addEventListener('click', function () {
            if (confirm('Are you sure you want to clear all sightings?')) {
                localStorage.removeItem('wildlifeSightings');
                renderSightings();
            }
        });
    }
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
    const slideWidth = window.innerWidth; // Use viewport width
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

