import { DataTable } from "@/components/shared/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/auth-provider";

import { columns } from "@/features/loans/columns";
import CreditScoreCard from "@/features/loans/credit-score";
import { RequestLoanDialog } from "@/features/loans/request-loan";
import { maskNumber } from "@/lib";
import { getWalletData } from "@/services/account";
import { GetAllLoans } from "@/services/loans";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { CreditCardIcon } from "lucide-react";

export const Route = createFileRoute("/_main/dashboard/loans")({
  component: RouteComponent,
});

function RouteComponent() {
  const {user} = useAuth();
  const {data,isLoading} = useQuery({
    queryKey:["loans"],
    queryFn: GetAllLoans
  });
  const {data: walletData } = useQuery({
    queryKey:["userDataWalend"],
    queryFn: () => getWalletData(user?.id ?? ""),
    enabled: !!user?.id,
  });

  console.log("HERE",data)
  return (
    <div className="w-full min-h-screen pb-8">
      <div className="w-full flex flex-row justify-between items-start mt-4">
          <div className="text-[26px] font-bold">Loans</div>
       
        </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mb-4 mt-4">
        <Card className="min-h-64 rounded-lg bg-white shadow-none  lg:col-span-2 p-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">
              AI-Powered DeFi Lending & Financial Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            <p>
              Combining micro-investing, financial literacy, and DeFi
              peer-to-peer lending, this platform empowers users with AI-driven
              financial advice. Secure transactions, automated repayments, and
              AI credit scoring provide a seamless lending experience.
            </p>
            <p className="mt-2">
              Features include goal-based investing, AI-powered financial
              insights, and smart contract-backed lending, ensuring transparency
              and security in every transaction.
            </p>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-2  ">
          <Card className="bg-green-gray-gradient min-h-64 flex flex-col justify-between p-5 text-white h-48">
            <CardTitle className="w-full max-h-fit flex flex-row justify-between">
              <div>
                <Label className="text-sm text-neutral-300">
                  Account Balance
                </Label>
                <p className="text-2xl font-semibold font-raleway">
                  Ghc 5000
                </p>
              </div>
              <CreditCardIcon className="w-6 h-6 text-white" />
            </CardTitle>
            <CardContent className="p-0">
              <Label className="text-md text-neutral-200">
                {user?.username}
              </Label>
              <p className="text-xl font-medium font-raleway">{maskNumber(user?.phone_number ?? "")}</p>
            </CardContent>
          </Card>
          <div className="grid grid-cols-2 gap-5 ">
            <Button className="text-white hover:bg-gray-800">
              Switch Account
            </Button>
            <RequestLoanDialog />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-10">
        <div className="h-full rounded lg:col-span-2">
          <DataTable
            title="Loan Listings"
            data={data?.data?.loan_requests ?? []}
            isLoading={isLoading}
            columns={columns as any}
          />
        </div>
        <div className="h-full ">
          <CreditScoreCard />
        </div>
      </div>
    </div>
  );
}