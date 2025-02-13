function highlightSelectedTopic(topicId) {
    // Reset all buttons to default color
    document.querySelectorAll("nav button").forEach(button => {
        button.style.backgroundColor = ""; // Reset to default
    });

    // Highlight the selected topic button
    let selectedButton = document.getElementById(topicId);
    if (selectedButton) {
        selectedButton.style.backgroundColor = "#FFD700"; // Gold color for highlight
    }
}

// Ensure highlight works when page loads
document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
    if (currentPage) {
        highlightSelectedTopic(currentPage);
    }
});
