import { ColumnDef, flexRender, Table } from "@tanstack/react-table";

import { TableCell, TableRow } from "@/components/ui/table";


type DataTableContentProps<TData, TValue> = {
  isLoading: boolean;
  table: Table<TData>;
  columns: ColumnDef<TData, TValue>[];
  onClickCell?: (row: TData, column: ColumnDef<TData, TValue>) => void;
};

export function DataTableContent<TData, TValue>({
  columns,
  table,
  isLoading,
  onClickCell,
}: Readonly<DataTableContentProps<TData, TValue>>) {
  if (isLoading)
    return (
      <TableRow>
        <TableCell colSpan={columns.length} className="h-24 text-center">
          <p className="text-sm">Fetching..</p>
        </TableCell>
      </TableRow>
    );

  if (!table.getRowModel().rows?.length)
    return (
      <TableRow>
        <TableCell colSpan={columns.length} className="h-24 text-center">
          <p className="text-lg font-medium">No results.</p>
        </TableCell>
      </TableRow>
    );

  return table.getRowModel().rows.map((row) => (
    <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
      {row.getVisibleCells().map((cell) => (
        <TableCell
          key={cell.id}
          onClick={() => {
            const clickedCell = cell.column.columnDef;
            if (onClickCell) {
              onClickCell(row.original, clickedCell);
            }
          }}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  ));
}
