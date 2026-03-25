from fastapi import APIRouter, UploadFile, File, Depends, HTTPException
from sqlalchemy.orm import Session
from .deps import get_db
from ..services.ocr_service import OCRService, HighRiskExtractionException

router = APIRouter()
ocr_service = OCRService()

@router.post("/upload")
async def upload_document(file: UploadFile = File(...), db: Session = Depends(get_db)):
    content = await file.read()
    try:
        data = await ocr_service.extract_invoice_data(content, file.content_type)
        return {"status": "success", "data": data}
    except HighRiskExtractionException as e:
        raise HTTPException(status_code=422, detail={"error": "Confidence Gate Breach", "score": e.score})