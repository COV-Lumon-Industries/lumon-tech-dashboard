export type Loan = {
    id: string;
    amount: number;
    borrower_id: string;
    created_at: string; 
    updated_at: string;
    interest_rate: number;
    loan_duration: number; 
    status: "pending" | "approved" | "rejected";
  };
  