import "dotenv/config";
import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Loads from .env
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

        // ✅ Save AI-generated content into index.html
        fs.writeFileSync("index.html", `<html><body><h1>Welcome</h1><p>${aiResponse}</p></body></html>`);
        console.log("✅ AI content saved to index.html");
    } catch (error) {
        console.error("❌ API Request Failed:", error.message);
    }
}

generateAIContent();
