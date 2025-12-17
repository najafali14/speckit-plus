# backend/main.py
from fastapi import FastAPI, HTTPException # type: ignore
from fastapi.middleware.cors import CORSMiddleware # type: ignore
from pydantic import BaseModel # type: ignore
from google import genai
from google.genai import types # type: ignore
import httpx


# Initialize FastAPI app
app = FastAPI(title="NajafAI Physical AI Chatbot Backend")

# Allow CORS from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model for request body
class ChatRequest(BaseModel):
    prompt: str

# Initialize Gemini client
client = genai.Client(api_key="AIzaSyB3NtkJyCHFeXZBmqoXONOQ38QumlTp6SA")

# Path to your PDF book
doc_url = "https://raw.githubusercontent.com/najafali14/speckit-plus/main/Backend/physicalai.pdf"
# Retrieve and encode the PDF byte
doc_data = httpx.get(doc_url).content


@app.post("/chat")
async def chat(request: ChatRequest):
    print("Received prompt:", request.prompt)

        # Read PDF bytes
    prompt = f"""
    You are an intelligent Physical AI & Humanoid Robotics assistant.

You are given a PDF document book as a reference source.

BEHAVIOR RULES:

1. If the user's message is basic conversation (greetings, introductions, small talk),
   respond normally and naturally.
   Examples: "hello", "hi", "how are you", "what is your name", "who are you".

2. If the user's question is informational or academic:
   a) Answer ONLY if the answer is explicitly present in the PDF.
   b) Use ONLY the information from the PDF.
   c) Keep the answer SHORT, clear, and direct.
   d) Do NOT add explanations, examples, or extra details.

3. If the informational answer is NOT found in the PDF,
   respond with exactly:
   "This information is not available in the provided book."

4. Do NOT mix PDF knowledge with general knowledge.
5. Do NOT mention the PDF, document, pages, or sources in your response.

User message:
{request.prompt}
    """
        # Send PDF + user prompt to Gemini
    response = client.models.generate_content(
  model="gemini-2.5-flash",
  contents=[
      types.Part.from_bytes(
        data=doc_data,
        mime_type='application/pdf',
      ),
      prompt
      ])
    print("Gemini response:", response.text)

    return {"response": response.text}

