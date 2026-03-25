from sqlalchemy import Column, Integer, Float, ForeignKey, DateTime, String
from sqlalchemy.orm import relationship
from ..db.base import Base

class Transaction(Base):
    __tablename__ = "transactions"
    id = Column(Integer, primary_key=True, index=True)
    vendor_id = Column(Integer, ForeignKey("vendors.id"))
    amount_total = Column(Float)
    amount_remaining = Column(Float)
    due_date = Column(DateTime)
    status = Column(String)
    vendor = relationship("Vendor", back_populates="transactions")