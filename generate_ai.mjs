import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in your environment
});

async function generateAIContent() {
    try {
        console.log("🚀 Generating AI content...");

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [{ "role": "user", "content": "Write an inspiring homepage message." }]
        });

        const aiResponse = completion.choices[0].message.content;
        console.log("📌 AI Response:\n", aiResponse);

        // ✅ Save AI-generated content into index.html with full structure
        fs.writeFileSync("index.html", `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Beacon of Light</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f4f4f4; }
                h1 { color: #333; text-align: center; }
                p { font-size: 18px; color: #555; text-align: center; }
                .container { max-width: 800px; margin: auto; padding: 20px; background: white; box-shadow: 0 0 10px rgba(0,0,0,0.1); border-radius: 10px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to Beacon of Light</h1>
                <p>${aiResponse}</p>
            </div>
        </body>
        </html>
        `);
        console.log("✅ AI content saved to index.html");
    } catch (error) {
        console.error("❌ API Request Failed:", error.message);
    }
}

generateAIContent();
