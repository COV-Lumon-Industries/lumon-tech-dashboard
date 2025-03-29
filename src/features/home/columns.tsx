type Transaction = {
    transaction: string;
    date: string;
    amount: number;
    category: string;
    status: "completed" | "pending";
  };
  

  import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "transaction",
    header: "Transaction",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ getValue }) => new Date(getValue() as string).toLocaleDateString(),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ getValue }) => {
      const amount = getValue() as number;
      return (
        <span className={amount < 0 ? "text-red-500" : "text-green-500"}>
          {amount.toLocaleString()} USD
        </span>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue() as "completed" | "pending";
      return (
        <span
          className={`px-2 py-1 rounded ${
            status === "completed" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"
          }`}
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorKey:"",
    header:"Actions",
    cell: ({ row }) => {
        console.log(row.original.amount)
     return   <div>Add a table action/ dropdown if you want</div>
    }

  }
];
