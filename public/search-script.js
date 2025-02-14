document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.querySelector(".search-input");
    let contentItems = document.querySelectorAll(".content-item");
    let paginationContainer = document.querySelector(".pagination");
    let showAllButton = document.querySelector(".show-all");
    let resultsPerPage = 10;
    let currentPage = 1;

    function filterContent() {
        let query = searchInput.value.toLowerCase();
        let filteredItems = [];

        contentItems.forEach(item => {
            let text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                filteredItems.push(item);
            }
        });

        paginateResults(filteredItems);
    }

    function paginateResults(filteredItems) {
        let totalPages = Math.ceil(filteredItems.length / resultsPerPage);
        let start = (currentPage - 1) * resultsPerPage;
        let end = start + resultsPerPage;
        let visibleItems = filteredItems.slice(start, end);

        contentItems.forEach(item => item.style.display = "none");
        visibleItems.forEach(item => item.style.display = "block");

        updatePaginationButtons(totalPages);
    }

    function updatePaginationButtons(totalPages) {
        paginationContainer.innerHTML = "";

        if (totalPages > 1) {
            let prevButton = document.createElement("button");
            prevButton.textContent = "⬅ Prev";
            prevButton.disabled = (currentPage === 1);
            prevButton.addEventListener("click", () => {
                if (currentPage > 1) {
                    currentPage--;
                    filterContent();
                }
            });
            paginationContainer.appendChild(prevButton);

            let nextButton = document.createElement("button");
            nextButton.textContent = "Next ➡";
            nextButton.disabled = (currentPage === totalPages);
            nextButton.addEventListener("click", () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    filterContent();
                }
            });
            paginationContainer.appendChild(nextButton);
        }
    }

    searchInput.addEventListener("input", filterContent);
    showAllButton.addEventListener("click", () => {
        searchInput.value = "";
        currentPage = 1;
        filterContent();
    });

    filterContent();
});
