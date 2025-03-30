export type LoanRequestsResponse = {
  status: string;
  data: {
    loan_requests: LoanRequest[];
    page: number;
    page_size: number;
    total: number;
  };
};

export type CreditScoreResponse = {
  status: string;
  data: {
    credit_score: number;
  };
}

export interface LoanRequest {
  id: string;
  amount: number;
  borrower_id: string;
  borrower: Borrower;
  created_at: string;
  updated_at: string;
  interest_rate: number;
  loan_duration: number;
  purpose: string;
  status: string;
}

export interface Borrower {
  id: string;
  username: string;
  password: string;
  email: string;
  user_role: string;
  phone_number: string;
  accounts: any[] | null;
  loan_requests: any[] | null;
  credit_score: number;
}