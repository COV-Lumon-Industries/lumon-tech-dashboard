import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { DollarSign,Receipt } from "lucide-react";

export const Route = createFileRoute("/_main/dashboard")({
  component: RouteComponent,
});

interface Account {
  id: string;
  name: string;
  balance: number;
  currency: string;
}

const accountsData: Account[] = [
  { id: "1", name: "Bank of America", balance: 5000, currency: "USD" },
  { id: "2", name: "MTN Mobile Money", balance: 1200, currency: "GHS" },
  { id: "3", name: "Wise USD", balance: 800, currency: "USD" },
  { id: "4", name: "PayPal", balance: 300, currency: "USD" },
];

function RouteComponent() {
  const [transactionsLoading, setTransactionsLoading] = useState(false);
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      description: "Salary Payment",
      date: "2025-03-25",
      amount: 2500.0,
      category: "Salary",
      status: "completed",
      type: "income",
    },
    {
      id: 2,
      description: "Rent Payment",
      date: "2025-03-22",
      amount: 1200.0,
      category: "Housing",
      status: "completed",
      type: "expense",
    },
    {
      id: 3,
      description: "Grocery Shopping",
      date: "2025-03-20",
      amount: 156.78,
      category: "Food",
      status: "completed",
      type: "expense",
    },
    {
      id: 4,
      description: "Freelance Work",
      date: "2025-03-18",
      amount: 750.0,
      category: "Contract Work",
      status: "pending",
      type: "income",
    },
    {
      id: 5,
      description: "Utility Bills",
      date: "2025-03-15",
      amount: 215.42,
      category: "Utilities",
      status: "pending",
      type: "expense",
    },
    {
      id: 6,
      description: "Online Course",
      date: "2025-03-12",
      amount: 99.99,
      category: "Education",
      status: "completed",
      type: "expense",
    },
    {
      id: 7,
      description: "Stock Dividend",
      date: "2025-03-10",
      amount: 325.5,
      category: "Investment",
      status: "completed",
      type: "income",
    },
    {
      id: 8,
      description: "Car Repair",
      date: "2025-03-05",
      amount: 430.0,
      category: "Automotive",
      status: "failed",
      type: "expense",
    },
  ]);
  const [accounts, setAccounts] = useState<Account[]>(accountsData);

  return (
    <div className="w-full md:px-12 md:pb-12 pb-32">
      <div className="w-full flex flex-col justify-start items-start px-6 mt-8">
        {/* Header */}
        <div className="w-full flex md:flex-row flex-col justify-between items-center mt-4">
          <div className="text-[26px] font-bold">Dashboard</div>
          <Button >Add Account</Button>
        </div>

        {/* Balance Cards */}
        <div className="flex flex-col md:flex-row gap-4 w-full mt-6">
          {["My Balance", "Monthly Income", "Monthly Expenses"].map((title) => (
            <Card
              key={title}
              className="w-full cursor-pointer md:h-full h-[150px]"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <DollarSign className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-start">$ 100,000</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Transactions Table */}
        
        
        <div className="mt-12 w-full flex justify-between gap-6">
          {/* Transactions Table - Left */}
          <div className="border rounded-[10px]  w-full ">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">Transaction</TableHead>
                  <TableHead className="text-left">Date</TableHead>
                  <TableHead className="text-left">Amount</TableHead>
                  <TableHead className="text-left">Category</TableHead>
                  <TableHead className="text-left">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.length > 0 ? (
                  transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="text-left whitespace-nowrap">
                        {transaction.description}
                      </TableCell>
                      <TableCell className="text-left">
                        {transaction.date}
                      </TableCell>
                      <TableCell
                        className={`text-left font-medium ${
                          transaction.type === "income"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {transaction.type === "income" ? "+" : "-"}$
                        {transaction.amount.toFixed(2)}
                      </TableCell>
                      <TableCell className="text-left">
                        {transaction.category}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            transaction.status === "completed"
                              ? "bg-green-100 text-green-700"
                              : transaction.status === "pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-6">
                      <div className="flex flex-col items-center">
                        <Receipt className="h-5 w-5 mb-2" />
                        No Transactions
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Accounts - Right */}
          <Card className="w-[750px] ">
            <CardHeader>
              <CardTitle>My Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 w-full">
                {accounts.length ? (
                  accounts.slice(0, 5).map((account) => (
                    <div
                      key={account.id}
                      className="flex justify-between border-b last:border-none w-full pb-4"
                    >
                      <div className="flex items-center justify-between gap-4 w-full cursor-pointer">
                        <div className="flex gap-4 items-center">
                          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-bold text-lg">
                            {account.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{account.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {account.currency}
                            </p>
                          </div>
                        </div>
                        <div className="font-medium">
                          {account.balance.toLocaleString()} {account.currency}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-6">
                    <p className="text-muted-foreground text-sm">
                      No accounts available to display.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    
    </div>
  );
}
