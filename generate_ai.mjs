import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure API key is set correctly
});

async function generateAIContent() {
    try {
        console.log("🚀 Generating AI content...");

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [{ "role": "user", "content": "Write an inspiring message for my homepage." }]
        });

        const aiResponse = completion.choices[0].message.content;
        console.log("📌 AI Response:\n", aiResponse);

        // Ensure AI content is placed inside the correct HTML tag
        let htmlContent = fs.readFileSync("index.html", "utf8");
        htmlContent = htmlContent.replace(
            '<p id="ai-content">Loading AI-generated content...</p>',
            `<p id="ai-content">${aiResponse}</p>`
        );

        fs.writeFileSync("index.html", htmlContent);
        console.log("✅ AI content saved to index.html");
    } catch (error) {
        console.error("❌ API Request Failed:", error.message);
    }
}

generateAIContent();
