import { Loan } from "@/types";
import { ColumnDef } from "@tanstack/react-table";


export const columns: ColumnDef<Loan>[] = [

  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ getValue }) => `₵${getValue<number>().toLocaleString()}`, // Format currency
  },
  {
    accessorKey: "borrower_id",
    header: "Borrower",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: ({ getValue }) => new Date(getValue<string>()).toLocaleString(), // Format date
  },

  {
    accessorKey: "interest_rate",
    header: "Interest Rate (%)",
    cell: ({ getValue }) => `${getValue<number>()}%`,
  },
  {
    accessorKey: "loan_duration",
    header: "Duration (Months)",
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();
      const statusColors: Record<string, string> = {
        pending: "text-yellow-500",
        approved: "text-green-500",
        rejected: "text-red-500",
      };
      return <span className={statusColors[status] || "text-gray-500"}>{status}</span>;
    },
  },
];
