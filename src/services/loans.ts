import http from "@/lib/axios";
import { CreditScoreResponse, LoanRequestsResponse } from "@/types/loan-requests";

export function GetAllLoans(){
    return http.get<LoanRequestsResponse>("/loan-requests")
}

export function GenerateCreditScore(userId: string){
    return http.get<CreditScoreResponse>(`/transactions/credit`)
}
