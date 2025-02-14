// Function to load content dynamically
function loadContent(page) {
    const content = document.getElementById('content');

    let pageContent = {
        "home": "<h2>Welcome to home</h2><p>Explore the insights and knowledge within this topic.</p>",
        "blog": "<h2>Welcome to the Blog</h2><p>Read the latest articles and insights here.</p>",
        "about": "<h2>About Us</h2><p>Learn more about Beacon of Light and our mission.</p>",
        "contact": "<h2>Contact Us</h2><p>Get in touch with us for any questions.</p>",
        "topic1": "<h2>Topic 1</h2><p>Detailed information about Topic 1.</p>",
        "topic2": "<h2>Topic 2</h2><p>Detailed information about Topic 2.</p>",
        "topic3": "<h2>Topic 3</h2><p>Detailed information about Topic 3.</p>",
        "topic4": "<h2>Topic 4</h2><p>Detailed information about Topic 4.</p>",
        "topic5": "<h2>Topic 5</h2><p>Detailed information about Topic 5.</p>",
        "topic6": "<h2>Topic 6</h2><p>Detailed information about Topic 6.</p>",
        "topic7": "<h2>Topic 7</h2><p>Detailed information about Topic 7.</p>",
        "topic8": "<h2>Topic 8</h2><p>Detailed information about Topic 8.</p>"
    };

    content.innerHTML = pageContent[page] || "<h2>Page Not Found</h2><p>The requested page does not exist.</p>";
}
