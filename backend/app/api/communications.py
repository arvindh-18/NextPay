from fastapi import APIRouter, Depends
from ..services.llm_service import LLMService
from ..schemas.optimization import OptimizationResponse

router = APIRouter()
llm_service = LLMService()

@router.post("/drafts")
async def generate_vendor_drafts(payload: OptimizationResponse):
    drafts = []
    for p in payload.payments:
        draft = await llm_service.draft_restructuring_email(
            vendor_name=p.vendor_name,
            total=p.original_amount,
            payment=p.recommended_payment,
            flexibility=p.flexibility_index
        )
        drafts.append(draft)
    return {"drafts": drafts}