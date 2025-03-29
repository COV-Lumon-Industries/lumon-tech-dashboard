import { Table } from '@tanstack/react-table';
import { MixerHorizontalIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';


interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function DataTableViewOptions<TData>({
  table,
}: Readonly<DataTableViewOptionsProps<TData>>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button
  size="sm"
  variant="table"
  className="hidden  border-2 lg:flex lg:items-center lg:justify-center text-neutral-dark space-x-2"
>
  <MixerHorizontalIcon className="h-4 w-4" />
  <p className="text-sm leading-none">View</p>
</Button>

      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>
           <p className="leading-7 [&:not(:first-child)]:mt-6">Toggle columns</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {
          // table.getAllColumns.length <= 1 ? (
          //   <div className="w-full flex h-12 items-center justify-center">
          //     <Typography variant="text-m-light" className='text-neutral-dark'>No columns</Typography>
          //   </div>
          // ) : (
          table
            .getAllColumns()
            .filter(
              (column) =>
                typeof column.accessorFn !== 'undefined' && column.getCanHide()
            )
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })
          // )
        }
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
