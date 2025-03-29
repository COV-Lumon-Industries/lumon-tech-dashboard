import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function globalTableFilterFn(
  row: any,
  columnId: any,
  filterValues: any
): boolean {
  const status: string = row.getValue(columnId);
  return filterValues.includes(status.toLowerCase());
}


