document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedback-form");
    const feedbackList = document.getElementById("feedback-list");
    const storedFeedback = JSON.parse(localStorage.getItem("feedbackData")) || [];

    function updateFeedbackList() {
        feedbackList.innerHTML = storedFeedback.map(entry => `<p>${entry}</p>`).join('');
    }

    feedbackForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const feedbackInput = document.getElementById("feedback").value;
        if (feedbackInput.trim() !== "") {
            storedFeedback.push(feedbackInput);
            localStorage.setItem("feedbackData", JSON.stringify(storedFeedback));
            updateFeedbackList();
            feedbackForm.reset();
        }
    });

    updateFeedbackList();
});
