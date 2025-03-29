import http from "@/lib/axios";

export function GetAllLoans(){
    return http.get("/loan-requests")
}