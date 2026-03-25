from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import relationship
from ..db.base import Base

class Vendor(Base):
    __tablename__ = "vendors"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True)
    criticality_score = Column(Float)
    penalty_percentage_rate = Column(Float)
    flexibility_index = Column(Float)
    transactions = relationship("Transaction", back_populates="vendor")