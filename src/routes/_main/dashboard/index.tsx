"use client"

import { useState } from "react"
import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Wallet } from "lucide-react"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

import { Link } from "@tanstack/react-router"
import { useQuery } from "@tanstack/react-query"
import { GetTransactionData, GetAllAccounts } from "@/services/account"

interface TransactionsResponse {
  status: string
  data: {
    meta: {
      page: number
      page_size: number
      total: number
    }
    transactions: {
      transaction_date: string
      from_name: string
      from_number: string
      transaction_type: string
      balance_before: number
      balance_after: number
      amount: number
      to_number: string
      to_name: string
      reference: string
      user_id: string
    }[]
  }
}

export const Route = createFileRoute("/_main/dashboard/")({
  component: RouteComponent,
})

interface Account {
  id: string
  name: string
  balance: number
  currency: string
  type: string
}

const accountsData: Account[] = [
  { id: "1", name: "Fidelity Bank", balance: 5000, currency: "₵" ,type : "bank" },
  { id: "2", name: "MTN Mobile Money", balance: 1200, currency: "₵" , type : "wallet"},
  { id: "3", name: "Achieve by petra", balance: 800, currency: "₵", type : "wallet" },
  { id: "4", name: "Accrue", balance: 300, currency: "₵" , type : "wallet"},
]

// Helper function to get week number and date range
const getWeekDetails = (date: Date) => {
  // Clone the date to avoid modifying the original
  const d = new Date(date.getTime())

  // Set to the first day of the week (Sunday)
  d.setDate(d.getDate() - d.getDay())
  const weekStart = new Date(d)

  // Set to the last day of the week (Saturday)
  d.setDate(d.getDate() + 6)
  const weekEnd = new Date(d)

  // Format dates as MM/DD
  const formatDate = (date: Date) => `${date.getMonth() + 1}/${date.getDate()}`

  return {
    weekLabel: `${formatDate(weekStart)}-${formatDate(weekEnd)}`,
    weekKey: `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`,
  }
}

const processTransactionDataByWeek = (transactions: TransactionsResponse["data"]["transactions"] | undefined) => {
  if (!transactions || transactions.length === 0) {
    return []
  }

  // Create an object to store weekly totals
  const weeklyTotals: Record<string, { week: string; income: number; expenses: number }> = {}

  // Sort transactions by date (newest first)
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.transaction_date).getTime() - new Date(a.transaction_date).getTime(),
  )

  // Get unique weeks from transactions (limit to last 8 weeks for readability)
  const uniqueWeeks = new Set<string>()
  const processedDates = new Set<string>()

  sortedTransactions.forEach((transaction) => {
    const transactionDate = new Date(transaction.transaction_date)
    const { weekKey, weekLabel } = getWeekDetails(transactionDate)

    // Add this week if we haven't seen it before
    if (!processedDates.has(weekKey)) {
      uniqueWeeks.add(weekKey)
      processedDates.add(weekKey)

      // Initialize the week with zero values
      weeklyTotals[weekKey] = {
        week: weekLabel,
        income: 0,
        expenses: 0,
      }
    }
  })

  // Limit to last 8 weeks
  const recentWeeks = Array.from(uniqueWeeks).slice(0, 8)

  // Process each transaction
  sortedTransactions.forEach((transaction) => {
    const transactionDate = new Date(transaction.transaction_date)
    const { weekKey } = getWeekDetails(transactionDate)

    // Only process transactions from recent weeks
    if (recentWeeks.includes(weekKey) && weeklyTotals[weekKey]) {
      if (transaction.transaction_type === "CREDIT") {
        weeklyTotals[weekKey].income += transaction.amount
      } else if (transaction.transaction_type === "DEBIT") {
        weeklyTotals[weekKey].expenses += transaction.amount
      }
    }
  })

  // Convert the object to an array and sort by week (oldest first)
  return Object.entries(weeklyTotals)
    .sort((a, b) => {
      // Extract dates from week keys (format: YYYY-MM-DD)
      const dateA = new Date(Number.parseInt(a[0].split("-")[0]), Number.parseInt(a[0].split("-")[1]) - 1, Number.parseInt(a[0].split("-")[2]))
      const dateB = new Date(Number.parseInt(b[0].split("-")[0]), Number.parseInt(b[0].split("-")[1]) - 1, Number.parseInt(b[0].split("-")[2]))
      return dateA.getTime() - dateB.getTime()
    })
    .map(([_, value]) => value)
}

function RouteComponent() {
  const [accounts] = useState<Account[]>(accountsData)

  const { data, isPending } = useQuery<TransactionsResponse>({
    queryKey: ["accounts", "transactions"],
    queryFn: GetTransactionData,
  })

  const {data:wallets } = useQuery({
    queryKey:["wallets"],
    queryFn:GetAllAccounts
  })

  console.log("account",wallets)

  const chartData = processTransactionDataByWeek(data?.data?.transactions)

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
          <Card className="w-full cursor-pointer md:h-full h-[150px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">My Balance</CardTitle>
              <Wallet className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-start">
              ₵{" "}
                {data?.data?.transactions && data.data.transactions.length > 0
                  ? data.data.transactions[0].balance_after.toLocaleString()
                  : "0.00"}
              </div>
            </CardContent>
          </Card>

          <Card className="w-full cursor-pointer md:h-full h-[150px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
              <Wallet className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-start">
              ₵{" "}
                {data?.data?.transactions
                  ? data.data.transactions
                      .filter((t) => t.transaction_type === "CREDIT")
                      .reduce((sum, t) => sum + t.amount, 0)
                      .toLocaleString()
                  : "0.00"}
              </div>
            </CardContent>
          </Card>

          <Card className="w-full cursor-pointer md:h-full h-[150px]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
              <Wallet className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-start">
              ₵{" "}
                {data?.data?.transactions
                  ? data.data.transactions
                      .filter((t) => t.transaction_type === "DEBIT")
                      .reduce((sum, t) => sum + t.amount, 0)
                      .toLocaleString()
                  : "0.00"}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Accounts & Chart Section */}
        <div className="mt-12 w-full flex md:flex-row flex-col gap-6">
          {/* Accounts - Left */}

          {/* Bar Chart - Right */}
          <Card className="md:w-[70%] w-full md:h-auto h-[370px] md:block hidden">
            <CardHeader>
              <CardTitle>Weekly Income & Expenses</CardTitle>
            </CardHeader>
            <CardContent className="p-4 h-[300px]">
              {isPending ? (
                <div className="flex items-center justify-center h-full">
                  <p>Loading chart data...</p>
                </div>
              ) : chartData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 20, right: 20, left: 30, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                    <XAxis dataKey="week" tickLine={false} tickMargin={10} angle={-15} height={60} textAnchor="end" />
                    <YAxis tickLine={false} tickMargin={10} axisLine={false} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="income" fill="#166434" radius={4} name="Income" />
                    <Bar dataKey="expenses" fill="#5DD68B" radius={4} name="Expenses" />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p>No transaction data available for chart</p>
                </div>
              )}
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
                    <div key={account.id} className="flex justify-between border-b last:border-none w-full pb-4">
                      <div className="flex items-center gap-4 cursor-pointer">
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-bold text-lg">
                          {account.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{account.name}</p>
                          <p className="text-sm text-muted-foreground">{account.type}</p>
                        </div>
                      </div>
                      <div className="font-medium">
                      {account.currency} {account.balance.toLocaleString()} 
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-6">
                    <p className="text-muted-foreground text-sm">No accounts available to display.</p>
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
                <TableHead>From/To</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Reference</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isPending ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-4">
                    Loading transactions...
                  </TableCell>
                </TableRow>
              ) : data?.data?.transactions && data.data.transactions.length > 0 ? (
                data.data.transactions.map((transaction, index) => (
                  <TableRow key={index}>
                    <TableCell>{transaction.transaction_type}</TableCell>
                    <TableCell>{new Date(transaction.transaction_date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      {transaction.transaction_type === "CREDIT"
                        ? `From: ${transaction.from_name || transaction.from_number}`
                        : `To: ${transaction.to_name || transaction.to_number}`}
                    </TableCell>
                    <TableCell
                      className={transaction.transaction_type === "CREDIT" ? "text-green-700" : "text-red-500"}
                    >
                      {transaction.transaction_type === "CREDIT" ? "+" : "-"}₵{transaction.amount.toFixed(2)}
                    </TableCell>
                    <TableCell>{transaction.transaction_type}</TableCell>
                    <TableCell>{transaction.reference}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-4">
                    No transactions available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

