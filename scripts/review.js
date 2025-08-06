const queryParams = new URLSearchParams(window.location.search);
const isSubmitted = queryParams.has("productName"); 

if (isSubmitted) {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);

    const counterDisplay = document.getElementById("reviewCounter");
    if (counterDisplay) {
        counterDisplay.textContent = `You've submitted ${reviewCount} review${reviewCount === 1 ? "" : "s"}!`;
    }
}

