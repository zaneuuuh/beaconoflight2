const fs = require('fs');

const topics = [
    { name: "Topic 1", emoji: "🧬" },
    { name: "Topic 2", emoji: "⚡" },
    { name: "Topic 3", emoji: "🌠" },
    { name: "Topic 4", emoji: "🔮" },
    { name: "Topic 5", emoji: "🎶" },
    { name: "Topic 6", emoji: "🎨" },
    { name: "Topic 7", emoji: "🕊️" },
    { name: "Topic 8", emoji: "🌿" }
];

topics.forEach(topic => {
    const filename = topic.name.toLowerCase().replace(" ", "_") + ".html";
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${topic.emoji} ${topic.name} - Beacon of Light</title>
        <style>
            body { background-color: #121212; color: #ffffff; font-family: Arial, sans-serif; text-align: center; margin: 0; padding: 0; }
            header { background: linear-gradient(45deg, #FFD700, #FF8C00); padding: 15px; font-size: 24px; font-weight: bold; color: #000; }
            nav { background-color: #333; padding: 10px; }
            nav button { background: linear-gradient(45deg, #FFD700, #FF8C00); color: white; border: none; padding: 15px; margin: 5px; cursor: pointer; font-size: 16px; border-radius: 8px; transition: 0.3s; }
            nav button:hover { background: linear-gradient(45deg, #FF8C00, #FFD700); }
            #content { padding: 20px; }
        </style>
    </head>
    <body>
        <header>${topic.emoji} Welcome to ${topic.name}</header>
        <nav>
            <button onclick="window.location.href='index.html'">🏠 Home</button>
            ${topics.map(t => `<button onclick="window.location.href='${t.name.toLowerCase().replace(" ", "_")}.html'">${t.emoji} ${t.name}</button>`).join("")}
        </nav>
        <div id="content">
            <h2>${topic.emoji} ${topic.name}</h2>
            <p>✨ Explore the divine knowledge of **${topic.name}**. 🧬🌞</p>
        </div>
    </body>
    </html>
    `;
    fs.writeFileSync(filename, htmlContent);
    console.log(`Generated: ${filename}`);
});

console.log("🔥🔥🔥 All topic pages have been generated with **MODULAR EMOJIS**! 🔥🔥🔥");
