import io
from PIL import Image
from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

# --------------------------------------------------
# Enable CORS
# --------------------------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --------------------------------------------------
# Health Check
# --------------------------------------------------
@app.get("/")
def read_root():
    return {"message": "VACHAN Backend Running"}

# --------------------------------------------------
# DEMO MODE
# Gemma disabled for local demo
# --------------------------------------------------
print("=" * 50)
print("VACHAN BACKEND RUNNING IN DEMO MODE")
print("Gemma model loading is disabled.")
print("=" * 50)

# --------------------------------------------------
# Confidence Messages
# --------------------------------------------------
CONFIDENCE_LABELS = {
    "English": {
        "high": "This information is clearly supported.",
        "medium": "This is likely correct — consider double-checking.",
        "low": "This is uncertain — consult an advisor."
    },
    "Bengali": {
        "high": "এই তথ্যটি স্পষ্টভাবে সমর্থিত।",
        "medium": "এটি সম্ভবত সঠিক — যাচাই করে নিন।",
        "low": "এটি অনিশ্চিত — একজন পরামর্শদাতার সাথে কথা বলুন।"
    },
    "Hindi": {
        "high": "यह जानकारी स्पष्ट रूप से समर्थित है।",
        "medium": "यह सही होने की संभावना है।",
        "low": "यह अनिश्चित है।"
    }
}


def get_confidence_tag(score, language="English"):
    percent = round(score * 100)

    if score >= 0.75:
        tier = "high"
    elif score >= 0.5:
        tier = "medium"
    else:
        tier = "low"

    labels = CONFIDENCE_LABELS.get(language, CONFIDENCE_LABELS["English"])

    return {
        "percent": percent,
        "message": labels[tier]
    }


# --------------------------------------------------
# Analyze Endpoint
# --------------------------------------------------
@app.post("/analyze")
async def analyze_document(
    file: UploadFile = File(...),
    user_request: str = Form(...),
    language: str = Form(...),
    detail_level: str = Form(...)
):

    try:

        # Just verify an image can be opened
        file_bytes = await file.read()
        Image.open(io.BytesIO(file_bytes))

        confidence = get_confidence_tag(0.89, language)

        return {
            "summary": f"Document '{file.filename}' analyzed successfully.",

            "explanation":
                f"This is a demo backend response.\n\n"
                f"User Question: {user_request}\n"
                f"Language: {language}\n"
                f"Detail Level: {detail_level}\n\n"
                f"In the final version this response will come directly from Gemma 4 running in the Kaggle notebook.",

            "confidence_score": confidence["percent"],

            "confidence_level": "HIGH"
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


# --------------------------------------------------
# Run Server
# --------------------------------------------------
if __name__ == "__main__":
    uvicorn.run(
        "app:app",
        host="127.0.0.1",
        port=8000,
        reload=True
    )