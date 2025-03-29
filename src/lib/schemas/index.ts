import {z} from "zod"; 
export const LoanSchema = z.object({
    amount: z.number().min(1000, "Minimum loan amount is 1000"),
    interest_rate: z.number().min(0, "Interest rate cannot be negative"),
    loan_duration: z.number().min(1, "Loan duration must be at least 1 month"),
    purpose: z.string().min(10, "Purpose must be at least 10 characters"),
  });
  
  export type LoanSchemaTypeValues = z.infer<typeof LoanSchema>;
  