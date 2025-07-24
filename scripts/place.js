// Windchill calculation
function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1); 
}

const temp = parseFloat(document.getElementById("temperature").textContent);
const speed = parseFloat(document.getElementById("windspeed").textContent);

const chill = (temp <= 10 && speed > 4.8)
    ? calculateWindChill(temp, speed)
    : "N/A";

document.getElementById("windchill").textContent = chill;






const yearSpan = document.querySelector("#currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;