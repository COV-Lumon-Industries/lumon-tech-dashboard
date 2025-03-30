import http from "@/lib/axios";
import { TransactionsResponse } from "@/types/transactions";

export function PostDocument(url: string){
    return http.post("/documents/", { url })
}

export function CreateTransactionData(url: string){
    return http.post("/transactions", { url })
}

export async function GetTransactionData() {
    return http.get<TransactionsResponse>("/transactions/")
}