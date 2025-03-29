import http from "@/lib/axios";

export function PostDocument(url:string){
    return http.post("/documents/",url)
}
export function CreateTransactionData(url:string){
    return http.post("/transactions",url)
}