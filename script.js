<<<<<<< HEAD
function playFrequency(hz) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(hz, audioCtx.currentTime);
    oscillator.connect(audioCtx.destination);
    oscillator.start();
    setTimeout(() => oscillator.stop(), 5 * 1000); // Stops after 5 seconds
}
=======
// UNIVERSAL SEARCH SYSTEM FOR HOME, ABOUT, BLOG, AND CONTACT
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-input");
    const contentItems = document.querySelectorAll(".content-item");
    const showAllButton = document.querySelector(".show-all");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const searchText = searchInput.value.toLowerCase();
            contentItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(searchText) ? "block" : "none";
            });
        });
    }

    if (showAllButton) {
        showAllButton.addEventListener("click", function () {
            contentItems.forEach(item => {
                item.style.display = "block";
            });
            searchInput.value = "";
        });
    }
});
>>>>>>> origin/main
