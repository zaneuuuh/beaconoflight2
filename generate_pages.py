import openai

openai.api_key = "YOUR_OPENAI_API_KEY"

def generate_ai_content(prompt):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "system", "content": prompt}]
    )
    return response["choices"][0]["message"]["content"]

pages["creative.html"] = {
    "title": "Creative Zone | Beacon of Light",
    "header": "AI-Generated Creative Insights",
    "content": generate_ai_content("Generate a divine, inspirational message for the homepage.")
}
