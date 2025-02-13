document.addEventListener("DOMContentLoaded", function () {
    fetch("blog-data.json")
        .then(response => response.json())
        .then(data => {
            if (!data || data.length === 0) {
                document.getElementById("posts-list").innerHTML = "<p>No blogs available.</p>";
                return;
            }

            let categoryList = document.getElementById("category-list");
            let postsList = document.getElementById("posts-list");

            let categories = [...new Set(data.map(post => post.category))];

            categories.forEach(category => {
                let button = document.createElement("button");
                button.textContent = category;
                button.classList.add("category-item");
                button.onclick = function (event) {
                    event.preventDefault(); // Prevents opening Google search
                    filterByCategory(category, data);
                };
                categoryList.appendChild(button);
            });

            loadPosts(data);
        })
        .catch(error => {
            console.error("Error loading blogs:", error);
            document.getElementById("posts-list").innerHTML = "<p>Error loading blog posts.</p>";
        });
});

function filterByCategory(category, data) {
    let postsList = document.getElementById("posts-list");
    postsList.innerHTML = "";

    let filteredPosts = data.filter(post => post.category === category);

    if (filteredPosts.length === 0) {
        postsList.innerHTML = "<p>No posts available in this category.</p>";
        return;
    }

    filteredPosts.forEach(post => {
        let li = document.createElement("li");
        li.innerHTML = `<a href="${post.link}">${post.title}</a> - ${post.description}`;
        postsList.appendChild(li);
    });
}

function loadPosts(data) {
    let postsList = document.getElementById("posts-list");
    postsList.innerHTML = "";

    data.forEach(post => {
        let li = document.createElement("li");
        li.innerHTML = `<a href="${post.link}">${post.title}</a> - ${post.description}`;
        postsList.appendChild(li);
    });
}
