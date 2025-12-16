# backend/main.py
from fastapi import FastAPI, HTTPException # type: ignore
from fastapi.middleware.cors import CORSMiddleware # type: ignore
from pydantic import BaseModel # type: ignore
from google import genai
from google.genai import types # type: ignore
import pathlib

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
client = genai.Client(api_key="AIzaSyAelbrm277aIcnprzdJeuIPmuUMY9mnHCw")

# Path to your PDF book
PDF_FILEPATH = pathlib.Path("physicalai.pdf")


@app.post("/chat")
async def chat(request: ChatRequest):
    print("Received prompt:", request.prompt)
    try:
        # Read PDF bytes
        pdf_bytes = PDF_FILEPATH.read_bytes()
        prompt = f"Answer the question: '{request.prompt}' based on the content of the PDF document"
        # Send PDF + user prompt to Gemini
        response = client.models.generate_content(
  model="gemini-2.5-flash",
  contents=[
      types.Part.from_bytes(
        data=PDF_FILEPATH.read_bytes(),
        mime_type='application/pdf',
      ),
      prompt])
        print("Gemini response:", response.text)

        return {"response": response.text}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
