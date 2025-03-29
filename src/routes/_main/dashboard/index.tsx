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
import { DollarSign } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/dashboard/")({
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

const revenueData = [
  { month: "Jan", income: 5000, expenses: 3000 },
  { month: "Feb", income: 4500, expenses: 2500 },
  { month: "Mar", income: 6000, expenses: 3200 },
  { month: "Apr", income: 7000, expenses: 3500 },
  { month: "May", income: 6500, expenses: 4000 },
  { month: "Jun", income: 7200, expenses: 3800 },
  { month: "Jul", income: 8000, expenses: 4200 },
  { month: "Aug", income: 9000, expenses: 4500 },
  { month: "Sep", income: 8500, expenses: 4700 },
  { month: "Oct", income: 9500, expenses: 5000 },
  { month: "Nov", income: 10000, expenses: 5500 },
  { month: "Dec", income: 11000, expenses: 6000 },
];

const transactions = [
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
];
function RouteComponent() {
  const [accounts] = useState<Account[]>(accountsData);

  return (
    <div className="container mx-auto ">
      <div className="w-full flex flex-col justify-start items-start">
        {/* Header */}
        <div className="w-full flex flex-row justify-between items-start mt-4">
          <div className="text-[26px] font-bold">Dashboard</div>
          <Link to="/dashboard/add-account">
            <Button>Add Account</Button>
          </Link>
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

        {/* Accounts & Chart Section */}
        <div className="mt-12 w-full flex md:flex-row flex-col gap-6">
          {/* Accounts - Left */}

          {/* Bar Chart - Right */}
          <Card className="md:w-[70%] w-full md:h-auto h-[370px] md:block hidden">
            <CardHeader>
              <CardTitle>Monthly Income & Expenses</CardTitle>
            </CardHeader>
            <CardContent className="p-4 h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={revenueData}
                  margin={{ top: 20, right: 20, left: 30, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e0e0e0"
                  />
                  <XAxis dataKey="month" tickLine={false} tickMargin={10} />
                  <YAxis tickLine={false} tickMargin={10} axisLine={false} />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="income"
                    fill="#166434"
                    radius={4}
                    name="Income"
                  />
                  <Bar
                    dataKey="expenses"
                    fill="#5DD68B"
                    radius={4}
                    name="Expenses"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="md:w-[30%] w-full">
            <CardHeader>
              <CardTitle>My Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 w-full">
                {accounts.length ? (
                  accounts.map((account) => (
                    <div
                      key={account.id}
                      className="flex justify-between border-b last:border-none w-full pb-4"
                    >
                      <div className="flex items-center gap-4 cursor-pointer">
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

        <div className="w-full md:mt-6 mt-8">
          <div className="w-full flex flex-row justify-between ">
            <div className="text-[23px] font-bold">Recent Transactions</div>
            <div className="underline cursor-pointer">view more</div>
          </div>
        </div>
        {/* Transactions Table */}
        <div className="mt-4 w-full border rounded-[10px] overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell
                    className={
                      transaction.type === "income"
                        ? "text-green-700"
                        : "text-red-500"
                    }
                  >
                    {transaction.type === "income" ? "+" : "-"}$
                    {transaction.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>{transaction.category}</TableCell>
                  <TableCell>{transaction.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
