import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as n from "react";
import {
  useReactTable,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getFacetedRowModel,
  getSortedRowModel,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { i, I as I$1, y, N as N$1 } from "./input-BnCMX1ET.mjs";
import {
  p,
  f,
  v as v$1,
  g,
  w as w$1,
  z as z$1,
  b as b$1,
} from "./dropdown-menu-CT42GEhg.mjs";
import {
  Cross2Icon,
  DoubleArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowRightIcon,
  MixerHorizontalIcon,
  PlusCircledIcon,
  CheckIcon,
} from "@radix-ui/react-icons";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { Command } from "cmdk";
import {
  ArrowLeftCircleIcon,
  ChevronDownIcon,
  CheckIcon as CheckIcon$1,
  SearchIcon,
  ChevronUpIcon,
} from "lucide-react";
import * as b from "@radix-ui/react-popover";
import * as d from "@radix-ui/react-select";

function we({ className: t, ...a }) {
  return jsx("div", {
    "data-slot": "table-container",
    className: "relative w-full overflow-x-auto",
    children: jsx("table", {
      "data-slot": "table",
      className: i("w-full caption-bottom text-sm", t),
      ...a,
    }),
  });
}
function Ne({ className: t, ...a }) {
  return jsx("thead", {
    "data-slot": "table-header",
    className: i("[&_tr]:border-b", t),
    ...a,
  });
}
function Ce({ className: t, ...a }) {
  return jsx("tbody", {
    "data-slot": "table-body",
    className: i("[&_tr:last-child]:border-0", t),
    ...a,
  });
}
function v({ className: t, ...a }) {
  return jsx("tr", {
    "data-slot": "table-row",
    className: i(
      "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
      t,
    ),
    ...a,
  });
}
function ye({ className: t, ...a }) {
  return jsx("th", {
    "data-slot": "table-head",
    className: i(
      "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      t,
    ),
    ...a,
  });
}
function w({ className: t, ...a }) {
  return jsx("td", {
    "data-slot": "table-cell",
    className: i(
      "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      t,
    ),
    ...a,
  });
}
function Se({ columns: t, table: a, isLoading: s, onClickCell: i }) {
  var _a;
  return s
    ? jsx(v, {
        children: jsx(w, {
          colSpan: t.length,
          className: "h-24 text-center",
          children: jsx("p", { className: "text-sm", children: "Fetching.." }),
        }),
      })
    : ((_a = a.getRowModel().rows) == null ? void 0 : _a.length)
      ? a.getRowModel().rows.map((l) =>
          jsx(
            v,
            {
              "data-state": l.getIsSelected() && "selected",
              children: l.getVisibleCells().map((o) =>
                jsx(
                  w,
                  {
                    onClick: () => {
                      const c = o.column.columnDef;
                      i && i(l.original, c);
                    },
                    children: flexRender(
                      o.column.columnDef.cell,
                      o.getContext(),
                    ),
                  },
                  o.id,
                ),
              ),
            },
            l.id,
          ),
        )
      : jsx(v, {
          children: jsx(w, {
            colSpan: t.length,
            className: "h-24 text-center",
            children: jsx("p", {
              className: "text-lg font-medium",
              children: "No results.",
            }),
          }),
        });
}
const ke = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        table: "",
      },
    },
    defaultVariants: { variant: "default" },
  },
);
function N({ className: t, variant: a, asChild: s = false, ...i$1 }) {
  return jsx(s ? Slot : "span", {
    "data-slot": "badge",
    className: i(ke({ variant: a }), t),
    ...i$1,
  });
}
function Ie({ className: t, ...a }) {
  return jsx(Command, {
    "data-slot": "command",
    className: i(
      "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
      t,
    ),
    ...a,
  });
}
function ze({ className: t, ...a }) {
  return jsxs("div", {
    "data-slot": "command-input-wrapper",
    className: "flex h-9 items-center gap-2 border-b px-3",
    children: [
      jsx(SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
      jsx(Command.Input, {
        "data-slot": "command-input",
        className: i(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          t,
        ),
        ...a,
      }),
    ],
  });
}
function Fe({ className: t, ...a }) {
  return jsx(Command.List, {
    "data-slot": "command-list",
    className: i(
      "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
      t,
    ),
    ...a,
  });
}
function Pe({ ...t }) {
  return jsx(Command.Empty, {
    "data-slot": "command-empty",
    className: "py-6 text-center text-sm",
    ...t,
  });
}
function I({ className: t, ...a }) {
  return jsx(Command.Group, {
    "data-slot": "command-group",
    className: i(
      "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
      t,
    ),
    ...a,
  });
}
function Re({ className: t, ...a }) {
  return jsx(Command.Separator, {
    "data-slot": "command-separator",
    className: i("bg-border -mx-1 h-px", t),
    ...a,
  });
}
function z({ className: t, ...a }) {
  return jsx(Command.Item, {
    "data-slot": "command-item",
    className: i(
      "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      t,
    ),
    ...a,
  });
}
function Ve({ ...t }) {
  return jsx(b.Root, { "data-slot": "popover", ...t });
}
function De({ ...t }) {
  return jsx(b.Trigger, { "data-slot": "popover-trigger", ...t });
}
function Te({ className: t, align: a = "center", sideOffset: s = 4, ...i$1 }) {
  return jsx(b.Portal, {
    children: jsx(b.Content, {
      "data-slot": "popover-content",
      align: a,
      sideOffset: s,
      className: i(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        t,
      ),
      ...i$1,
    }),
  });
}
function _e({ column: t, title: a, options: s }) {
  const i$1 = t == null ? void 0 : t.getFacetedUniqueValues(),
    l = new Set(t == null ? void 0 : t.getFilterValue());
  return jsxs(Ve, {
    children: [
      jsx(De, {
        asChild: true,
        children: jsxs(y, {
          variant: "outline",
          className: "border-dashed",
          children: [
            jsx(PlusCircledIcon, { className: "mr-2 h-4 w-4" }),
            jsx("p", { className: "text-neutral-dark", children: a }),
            (l == null ? void 0 : l.size) > 0 &&
              jsxs(Fragment, {
                children: [
                  jsx(p, { orientation: "vertical", className: "mx-2 h-4" }),
                  jsx(N, {
                    variant: "table",
                    className: "rounded-sm px-1 font-normal lg:hidden",
                    children: l.size,
                  }),
                  jsx("div", {
                    className: "hidden space-x-1 lg:flex",
                    children:
                      l.size > 1
                        ? jsxs(N, {
                            variant: "table",
                            children: [l.size, " selected"],
                          })
                        : s
                            .filter((o) => l.has(o.value))
                            .map((o) =>
                              jsx(
                                N,
                                { variant: "table", children: o.label },
                                o.value,
                              ),
                            ),
                  }),
                ],
              }),
          ],
        }),
      }),
      jsx(Te, {
        className: "max-w-[250px] p-0",
        align: "center",
        children: jsxs(Ie, {
          children: [
            jsx(ze, { placeholder: a }),
            jsxs(Fe, {
              children: [
                jsx(Pe, { children: "No results found." }),
                jsx(I, {
                  children: s.map((o) => {
                    const c = l.has(o.value);
                    return jsxs(
                      z,
                      {
                        onSelect: () => {
                          c ? l.delete(o.value) : l.add(o.value);
                          const p = Array.from(l);
                          t == null
                            ? void 0
                            : t.setFilterValue(p.length ? p : void 0);
                        },
                        children: [
                          jsx("div", {
                            className: i(
                              "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                              c
                                ? "bg-primary text-primary-foreground"
                                : "opacity-50 [&_svg]:invisible",
                            ),
                            children: jsx(CheckIcon, {
                              className: i("h-4 w-4"),
                            }),
                          }),
                          o.icon &&
                            jsx(o.icon, {
                              className: "mr-2 h-4 w-4 text-muted-foreground",
                            }),
                          jsx("span", { children: o.label }),
                          (i$1 == null ? void 0 : i$1.get(o.value)) &&
                            jsx("span", {
                              className:
                                "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs",
                              children: i$1.get(o.value),
                            }),
                        ],
                      },
                      o.value,
                    );
                  }),
                }),
                l.size > 0 &&
                  jsxs(Fragment, {
                    children: [
                      jsx(Re, {}),
                      jsx(I, {
                        children: jsx(z, {
                          onSelect: () =>
                            t == null ? void 0 : t.setFilterValue(void 0),
                          className: "justify-center text-center",
                          children: "Clear filters",
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Me({ table: t }) {
  return jsxs(f, {
    children: [
      jsx(v$1, {
        asChild: true,
        children: jsxs(y, {
          size: "sm",
          variant: "table",
          className:
            "hidden  border-2 lg:flex lg:items-center lg:justify-center text-neutral-dark space-x-2",
          children: [
            jsx(MixerHorizontalIcon, { className: "h-4 w-4" }),
            jsx("p", { className: "text-sm leading-none", children: "View" }),
          ],
        }),
      }),
      jsxs(g, {
        align: "end",
        className: "w-[150px]",
        children: [
          jsx(w$1, {
            children: jsx("p", {
              className: "leading-7 [&:not(:first-child)]:mt-6",
              children: "Toggle columns",
            }),
          }),
          jsx(z$1, {}),
          t
            .getAllColumns()
            .filter((a) => typeof a.accessorFn < "u" && a.getCanHide())
            .map((a) =>
              jsx(
                b$1,
                {
                  className: "capitalize",
                  checked: a.getIsVisible(),
                  onCheckedChange: (s) => a.toggleVisibility(!!s),
                  children: a.id,
                },
                a.id,
              ),
            ),
        ],
      }),
    ],
  });
}
function je({
  table: t,
  title: a,
  inputKey: s,
  facetOptions: i,
  showColumnControl: l,
  inputPlaceholder: o = "Filter anything...",
  handleRefreshTable: c,
}) {
  var _a, _b;
  const p = t.getState().columnFilters.length > 0;
  return jsxs("div", {
    className: "h-auto px-2 flex flex-col gap-y-4",
    children: [
      jsxs("div", {
        className: "flex items-center justify-between gap-x-2",
        children: [
          a && jsx("h2", { className: "text-2xl font-semibold", children: a }),
          jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              l && jsx(Me, { table: t }),
              c &&
                jsxs(y, {
                  onClick: c,
                  className: "gap-2",
                  children: [
                    jsx(ArrowLeftCircleIcon, { className: "w-4 h-4" }),
                    " Refresh",
                  ],
                }),
            ],
          }),
        ],
      }),
      jsxs("div", {
        className: "flex gap-x-2 items-center justify-between",
        children: [
          s &&
            jsx(N$1, {
              className: "w-full sm:max-w-xs lg:w-[250px]",
              placeholder: o,
              value:
                (_b =
                  (_a = t.getColumn(s)) == null
                    ? void 0
                    : _a.getFilterValue()) != null
                  ? _b
                  : "",
              onChange: (m) => {
                var _a2;
                return (_a2 = t.getColumn(s)) == null
                  ? void 0
                  : _a2.setFilterValue(m.target.value);
              },
              containerClassName: "w-full sm:max-w-xs lg:w-[250px]",
            }),
          jsxs("div", {
            className:
              "flex flex-col items-center md:flex-row gap-1 md:gap-x-2",
            children: [
              i == null
                ? void 0
                : i.map(
                    (m) =>
                      t.getColumn(m.key) &&
                      jsx(
                        _e,
                        {
                          column: t.getColumn(m.key),
                          title: m.label,
                          options: m.options,
                        },
                        m.key,
                      ),
                  ),
              p &&
                jsxs(y, {
                  variant: "table",
                  onClick: () => t.resetColumnFilters(),
                  className: "h-8 px-2 lg:px-3",
                  children: [
                    "Reset",
                    jsx(Cross2Icon, { className: "ml-2 h-4 w-4" }),
                  ],
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Be({ ...t }) {
  return jsx(d.Root, { "data-slot": "select", ...t });
}
function Ge({ ...t }) {
  return jsx(d.Value, { "data-slot": "select-value", ...t });
}
function Ae({ className: t, size: a = "default", children: s, ...i$1 }) {
  return jsxs(d.Trigger, {
    "data-slot": "select-trigger",
    "data-size": a,
    className: i(
      "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      t,
    ),
    ...i$1,
    children: [
      s,
      jsx(d.Icon, {
        asChild: true,
        children: jsx(ChevronDownIcon, { className: "size-4 opacity-50" }),
      }),
    ],
  });
}
function He({ className: t, children: a, position: s = "popper", ...i$1 }) {
  return jsx(d.Portal, {
    children: jsxs(d.Content, {
      "data-slot": "select-content",
      className: i(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        s === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        t,
      ),
      position: s,
      ...i$1,
      children: [
        jsx(Ue, {}),
        jsx(d.Viewport, {
          className: i(
            "p-1",
            s === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1",
          ),
          children: a,
        }),
        jsx($e, {}),
      ],
    }),
  });
}
function Le({ className: t, children: a, ...s }) {
  return jsxs(d.Item, {
    "data-slot": "select-item",
    className: i(
      "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
      t,
    ),
    ...s,
    children: [
      jsx("span", {
        className: "absolute right-2 flex size-3.5 items-center justify-center",
        children: jsx(d.ItemIndicator, {
          children: jsx(CheckIcon$1, { className: "size-4" }),
        }),
      }),
      jsx(d.ItemText, { children: a }),
    ],
  });
}
function Ue({ className: t, ...a }) {
  return jsx(d.ScrollUpButton, {
    "data-slot": "select-scroll-up-button",
    className: i("flex cursor-default items-center justify-center py-1", t),
    ...a,
    children: jsx(ChevronUpIcon, { className: "size-4" }),
  });
}
function $e({ className: t, ...a }) {
  return jsx(d.ScrollDownButton, {
    "data-slot": "select-scroll-down-button",
    className: i("flex cursor-default items-center justify-center py-1", t),
    ...a,
    children: jsx(ChevronDownIcon, { className: "size-4" }),
  });
}
const qe = [5, 10, 20];
function Ee({ table: t }) {
  return jsxs("div", {
    className:
      "flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 px-2",
    children: [
      jsx("div", {
        className: "flex-1 text-muted-foreground",
        children: jsxs("p", {
          children: [
            t.getFilteredSelectedRowModel().rows.length,
            " of",
            " ",
            t.getFilteredRowModel().rows.length,
            " row(s) selected.",
          ],
        }),
      }),
      jsxs("div", {
        className:
          "flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4 lg:space-x-6",
        children: [
          jsxs("div", {
            className: "flex items-center space-x-2",
            children: [
              jsx("p", {
                className: "text-muted-foreground",
                children: "Rows per page",
              }),
              jsxs(Be, {
                value: `${t.getState().pagination.pageSize}`,
                onValueChange: (a) => {
                  t.setPageSize(Number(a));
                },
                children: [
                  jsx(Ae, {
                    className: "h-8 w-16",
                    children: jsx(Ge, {
                      placeholder: t.getState().pagination.pageSize,
                    }),
                  }),
                  jsx(He, {
                    side: "top",
                    children: qe.map((a) =>
                      jsx(Le, { value: `${a}`, children: a }, a),
                    ),
                  }),
                ],
              }),
            ],
          }),
          jsxs("div", {
            className: "flex items-center space-x-2",
            children: [
              jsx("p", {
                className: "text-muted-foreground",
                children: "Go to page:",
              }),
              jsx(N$1, {
                type: "number",
                min: "1",
                max: t.getPageCount(),
                defaultValue: t.getState().pagination.pageIndex + 1,
                onChange: (a) => {
                  const s = a.target.value ? Number(a.target.value) - 1 : 0;
                  t.setPageIndex(s);
                },
                className: "w-16 sm:w-20",
              }),
            ],
          }),
          jsxs("div", {
            className: " flex flex-row items-center",
            children: [
              jsx("div", {
                className:
                  "flex w-full justify-start sm:w-auto sm:justify-center",
                children: jsxs("p", {
                  className: "text-muted-foreground text-sm",
                  children: [
                    "Page ",
                    t.getState().pagination.pageIndex + 1,
                    " of",
                    " ",
                    t.getPageCount(),
                  ],
                }),
              }),
              jsxs("div", {
                className: "flex items-center space-x-2",
                children: [
                  jsxs(y, {
                    variant: "pagination",
                    size: "icon",
                    className: "h-8 w-8 p-0 lg:flex hidden",
                    onClick: () => t.setPageIndex(0),
                    disabled: !t.getCanPreviousPage(),
                    children: [
                      jsx("span", {
                        className: "sr-only",
                        children: "Go to first page",
                      }),
                      jsx(DoubleArrowLeftIcon, { className: "h-4 w-4" }),
                    ],
                  }),
                  jsxs(y, {
                    variant: "pagination",
                    size: "icon",
                    className: "h-8 w-8 p-0",
                    onClick: () => t.previousPage(),
                    disabled: !t.getCanPreviousPage(),
                    children: [
                      jsx("span", {
                        className: "sr-only",
                        children: "Go to previous page",
                      }),
                      jsx(ChevronLeftIcon, { className: "h-4 w-4" }),
                    ],
                  }),
                  jsxs(y, {
                    variant: "pagination",
                    size: "icon",
                    className: "h-8 w-8 p-0",
                    onClick: () => t.nextPage(),
                    disabled: !t.getCanNextPage(),
                    children: [
                      jsx("span", {
                        className: "sr-only",
                        children: "Go to next page",
                      }),
                      jsx(ChevronRightIcon, { className: "h-4 w-4" }),
                    ],
                  }),
                  jsxs(y, {
                    variant: "pagination",
                    size: "icon",
                    className: "h-8 w-8 p-0 lg:flex hidden",
                    onClick: () => t.setPageIndex(t.getPageCount() - 1),
                    disabled: !t.getCanNextPage(),
                    children: [
                      jsx("span", {
                        className: "sr-only",
                        children: "Go to last page",
                      }),
                      jsx(DoubleArrowRightIcon, { className: "h-4 w-4" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function tt({
  data: t,
  title: a,
  columns: s,
  inputKey: i$1,
  initialSort: l,
  facetOptions: o,
  bodyClassName: c,
  tableClassName: p$1,
  isLoading: m = false,
  containerClassName: V,
  showColumnControl: D = true,
  inputPlaceholder: T = "Filter anything...",
  onClickCell: _,
  handleRefreshTable: M,
}) {
  const y = n.useRef(null),
    [j, B] = n.useState({}),
    [G, A] = n.useState({ pageIndex: 0, pageSize: 10 }),
    [H, L] = n.useState(l != null ? l : []),
    [U, $] = n.useState([]),
    [q, E] = n.useState({}),
    O = () => {
      var _a;
      (_a = y == null ? void 0 : y.current) == null
        ? void 0
        : _a.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    x = useReactTable({
      data: t,
      columns: s,
      state: {
        sorting: H,
        pagination: G,
        rowSelection: j,
        columnFilters: U,
        columnVisibility: q,
      },
      manualPagination: true,
      enableRowSelection: true,
      onSortingChange: L,
      onPaginationChange: A,
      onRowSelectionChange: B,
      onColumnFiltersChange: $,
      onColumnVisibilityChange: E,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFacetedRowModel: getFacetedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getFacetedUniqueValues: getFacetedUniqueValues(),
      globalFilterFn: I$1,
    });
  return jsxs("div", {
    ref: y,
    className: i(
      "flex flex-col space-y-4 px-4 py-3 bg-background rounded-xl border border-neutral-lighter shadow-sm shadow-neutral-lighter",
      V,
    ),
    children: [
      jsx(je, {
        title: a,
        table: x,
        inputKey: i$1,
        facetOptions: o,
        inputPlaceholder: T,
        showColumnControl: D,
        handleRefreshTable: M,
      }),
      jsx(p, {}),
      jsxs(we, {
        className: i("max-h-64 overflow-auto", p$1),
        children: [
          jsx(Ne, {
            children: x
              .getHeaderGroups()
              .map((S) =>
                jsx(
                  v,
                  {
                    children: S.headers.map((f) =>
                      jsx(
                        ye,
                        {
                          className: "text-sm leading-[16px] font-medium",
                          colSpan: f.colSpan,
                          children: f.isPlaceholder
                            ? null
                            : flexRender(
                                f.column.columnDef.header,
                                f.getContext(),
                              ),
                        },
                        f.id,
                      ),
                    ),
                  },
                  S.id,
                ),
              ),
          }),
          jsx(Ce, {
            className: i("max-h-64 overflow-auto mini-scrollbar", c),
            children: jsx(Se, {
              table: x,
              columns: s,
              isLoading: m,
              onClickCell: _,
            }),
          }),
        ],
      }),
      jsx(p, {}),
      jsx("div", {
        className: "w-full overflow-x-auto",
        children: jsx(Ee, { resetScroll: O, table: x }),
      }),
    ],
  });
}
function at({ className: t, ...a }) {
  return jsx("div", {
    "data-slot": "card",
    className: i(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      t,
    ),
    ...a,
  });
}
function rt({ className: t, ...a }) {
  return jsx("div", {
    "data-slot": "card-header",
    className: i(
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
      t,
    ),
    ...a,
  });
}
function nt({ className: t, ...a }) {
  return jsx("div", {
    "data-slot": "card-title",
    className: i("leading-none font-semibold", t),
    ...a,
  });
}
function st({ className: t, ...a }) {
  return jsx("div", {
    "data-slot": "card-description",
    className: i("text-muted-foreground text-sm", t),
    ...a,
  });
}
function ot({ className: t, ...a }) {
  return jsx("div", {
    "data-slot": "card-content",
    className: i("px-6", t),
    ...a,
  });
}
function lt({ className: t, ...a }) {
  return jsx("div", {
    "data-slot": "card-footer",
    className: i("flex items-center px-6 [.border-t]:pt-6", t),
    ...a,
  });
}

export { at as a, lt as l, nt as n, ot as o, rt as r, st as s, tt as t };
//# sourceMappingURL=card-DDNd0Tpl.mjs.map
