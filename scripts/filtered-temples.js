const yearSpan = document.querySelector("#currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');

})

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-1813-thumb.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-55302-thumb.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-60988-thumb.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-thumb.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-29514-thumb.jpg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12720-thumb.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-1336-thumb.jpg"
    },
    {
        templeName: "Bangkok Thailand",
        location: "Bangkok, Thailand",
        dedicated: "2019, January, 26",
        area: 48525,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-thumb.jpg"
    },
    {
        templeName: "Bern Switzerland",
        location: "Zollikofen, Switzerland",
        dedicated: "1953, August, 5",
        area: 35546,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54640-thumb.jpg"
    },
    {
        templeName: "Okinawa Japan",
        location: "Matsumoto Okinawa- shi, Okinawa - ken, Okinawa, Japan",
        dedicated: "2020, December, 5",
        area: 12437,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54640-thumb.jpg"
    },
    {
        templeName: "Apia Samoa",
        location: "Pesega, Apia",
        dedicated: "1981, February, 19",
        area: 18691,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-thumb.jpg"
    },
    {
        templeName: "Frankfurt Germany",
        location: "Friedrichsdorf/TS, Germany",
        dedicated: "1985, July, 1",
        area: 32895,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-6600-thumb.jpg"
    },
    
];

createTempleCard(temples);

document.getElementById("home").addEventListener("click", () => {
    createTempleCard(temples);
});

document.getElementById("old").addEventListener("click", () => {
    const oldTemples = temples.filter(t => {
        const year = parseInt(t.dedicated.split(",")[0].trim());
        return year < 1900;
    })
    createTempleCard(oldTemples);
});

document.getElementById("new").addEventListener("click", () => {
    const newTemples = temples.filter(t => {
        const year = parseInt(t.dedicated.split(",")[0].trim());
        return year > 2000;
    })
    createTempleCard(newTemples);
});

document.getElementById("large").addEventListener("click", () => {
    const largeTemples = temples.filter(t => parseInt(t.area) > 90000);
    createTempleCard(largeTemples);
});

document.getElementById("small").addEventListener("click", () => {
    const smallTemples = temples.filter(t => parseInt(t.area) < 10000);
    createTempleCard(smallTemples);
});


function createTempleCard(temples) {
    document.querySelector(".templeCards").innerHTML = "";
    temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);


        document.querySelector(".templeCards").appendChild(card);

    });
}