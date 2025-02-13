import os

# Load the template
with open("template.html", "r") as file:
    template = file.read()

# Pages to generate
pages = {
    "index.html": {
        "title": "Home - BeaconOfLight",
        "content": """
            <header class='hero'>
                <h1>Welcome to BeaconOfLight</h1>
                <p>Your hub for AI, digital sovereignty, and spiritual wisdom.</p>
            </header>
            <div class='content-item'>
                <h2>🌟 Our Mission</h2>
                <p>Empowering individuals with knowledge about AI, digital sovereignty, and ethics.</p>
            </div>
            <div class='content-item'>
                <h2>🔎 Explore</h2>
                <p>Read our blog, learn new insights, and grow with us.</p>
            </div>
        """
    },
    "about.html": {
        "title": "About - BeaconOfLight",
        "content": """
            <h2>🌟 About Us</h2>
            <p>BeaconOfLight is dedicated to ethical AI, digital sovereignty, and human freedom.</p>
        """
    },
    "blog.html": {
        "title": "Blog - BeaconOfLight",
        "content": """
            <h2>📝 Blog</h2>
            <p>Stay updated with the latest in AI, technology, and spiritual insights.</p>
        """
    },
    "contact.html": {
        "title": "Contact - BeaconOfLight",
        "content": """
            <h2>📬 Contact Us</h2>
            <p>Reach out to us for collaborations, discussions, or insights.</p>
        """
    }
}

# Generate each page
for filename, data in pages.items():
    page_content = template.replace("{{pageTitle}}", data["title"]).replace("{{content}}", data["content"])
    
    with open(filename, "w") as file:
        file.write(page_content)

print("✅ Website generated successfully!")
