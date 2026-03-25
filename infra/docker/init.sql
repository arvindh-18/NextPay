-- Create Vendors with default Criticality and Flexibility
INSERT INTO vendors (name, criticality_score, penalty_percentage_rate, flexibility_index) 
VALUES 
('AWS Cloud Services', 1.0, 0.05, 0.1), -- Low flexibility, high criticality
('Office Supplies Corp', 0.2, 0.02, 0.9), -- High flexibility
('Main Street Rent', 0.9, 0.10, 0.3);