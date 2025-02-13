import openai
import os

# Load API key from environment variable
api_key = os.getenv("OPENAI_API_KEY")

if not api_key:
    raise ValueError("❌ API key not found! Set OPENAI_API_KEY in your environment.")

openai.api_key = api_key

def generate_ai_content(prompt):
    """Generates AI-generated content using OpenAI API"""
    response = openai.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "system", "content": prompt}]
    )
    return response.choices[0].message.content

# Example usage
print("🚀 Generating AI content...\n")
homepage_content = generate_ai_content("Write an inspiring message for my homepage.")
print(f"📌 AI Response:\n{homepage_content}")
