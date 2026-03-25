import google.generativeai as genai
from ..core.config import settings

class LLMService:
    def __init__(self):
        genai.configure(api_key=settings.GEMINI_API_KEY)
        self.model = genai.GenerativeModel('gemini-1.5-flash')

    async def draft_restructuring_email(self, vendor_name, total, payment, flexibility):
        return {"email_body": "Restructuring request...", "justification": "Preserving cash."}