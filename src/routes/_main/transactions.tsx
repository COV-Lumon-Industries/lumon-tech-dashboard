import { createFileRoute } from "@tanstack/react-router";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
export const Route = createFileRoute("/_main/transactions")({
  component: RouteComponent,
});

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
  return (
    <div className="w-full min-h-screen md:px-12 md:pb-12 pb-32 overflow-auto">
      <div className="w-full flex flex-col justify-start items-start px-6 mt-8">
        {/* Header */}
        <div className="w-full flex flex-row justify-between items-start mt-4">
          <div className="text-[26px] font-bold">Transactions</div>
        </div>
        <div className="mt-4 w-full border rounded-[10px]">
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
