import { jsxs, jsx } from "react/jsx-runtime";
import {
  a as at,
  r as rt,
  n as nt,
  o as ot,
  t as tt,
} from "./card-DDNd0Tpl.mjs";
import { y } from "./input-BnCMX1ET.mjs";
import { DollarSign } from "lucide-react";
import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import "@tanstack/react-table";
import "./dropdown-menu-CT42GEhg.mjs";
import "@radix-ui/react-separator";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-icons";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "cmdk";
import "@radix-ui/react-popover";
import "@radix-ui/react-select";
import "clsx";
import "tailwind-merge";

const v = [
    { accessorKey: "transaction", header: "Transaction" },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ getValue: t }) => new Date(t()).toLocaleDateString(),
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ getValue: t }) => {
        const s = t();
        return jsxs("span", {
          className: s < 0 ? "text-red-500" : "text-green-500",
          children: [s.toLocaleString(), " USD"],
        });
      },
    },
    { accessorKey: "category", header: "Category" },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ getValue: t }) => {
        const s = t();
        return jsx("span", {
          className: `px-2 py-1 rounded ${s === "completed" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"}`,
          children: s,
        });
      },
    },
    {
      accessorKey: "",
      header: "Actions",
      cell: ({ row: t }) => (
        console.log(t.original.amount),
        jsx("div", { children: "Add a table action/ dropdown if you want" })
      ),
    },
  ],
  w = [
    { id: "1", name: "Bank of America", balance: 5e3, currency: "USD" },
    { id: "2", name: "MTN Mobile Money", balance: 1200, currency: "GHS" },
    { id: "3", name: "Wise USD", balance: 800, currency: "USD" },
    { id: "4", name: "PayPal", balance: 300, currency: "USD" },
  ],
  D = [
    { month: "Jan", income: 5e3, expenses: 3e3 },
    { month: "Feb", income: 4500, expenses: 2500 },
    { month: "Mar", income: 6e3, expenses: 3200 },
    { month: "Apr", income: 7e3, expenses: 3500 },
    { month: "May", income: 6500, expenses: 4e3 },
    { month: "Jun", income: 7200, expenses: 3800 },
    { month: "Jul", income: 8e3, expenses: 4200 },
    { month: "Aug", income: 9e3, expenses: 4500 },
    { month: "Sep", income: 8500, expenses: 4700 },
    { month: "Oct", income: 9500, expenses: 5e3 },
    { month: "Nov", income: 1e4, expenses: 5500 },
    { month: "Dec", income: 11e3, expenses: 6e3 },
  ],
  $ = function () {
    const [s] = useState(w);
    return jsxs("div", {
      className: "w-full ",
      children: [
        jsxs("div", {
          className: "w-full flex flex-row justify-between items-start mb-6",
          children: [
            jsx("div", {
              className: "text-2xl font-bold",
              children: "Dashboard",
            }),
            jsx(y, { children: "Add Account" }),
          ],
        }),
        jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8",
          children: ["My Balance", "Monthly Income", "Monthly Expenses"].map(
            (a) =>
              jsxs(
                at,
                {
                  className: "w-full cursor-pointer h-auto",
                  children: [
                    jsxs(rt, {
                      className:
                        "flex flex-row items-center justify-between space-y-0 pb-2",
                      children: [
                        jsx(nt, {
                          className: "text-sm font-medium",
                          children: a,
                        }),
                        jsx(DollarSign, {
                          className: "w-4 h-4 text-muted-foreground",
                        }),
                      ],
                    }),
                    jsx(ot, {
                      children: jsx("div", {
                        className: "text-2xl font-bold",
                        children: "$ 100,000",
                      }),
                    }),
                  ],
                },
                a,
              ),
          ),
        }),
        jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-7 gap-6 mb-8",
          children: [
            jsxs(at, {
              className: "col-span-1 md:col-span-5 h-auto",
              children: [
                jsx(rt, {
                  children: jsx(nt, { children: "Monthly Income & Expenses" }),
                }),
                jsx(ot, {
                  className: "h-64 md:h-80",
                  children: jsx(ResponsiveContainer, {
                    width: "100%",
                    height: "100%",
                    children: jsxs(BarChart, {
                      data: D,
                      margin: { top: 20, right: 20, left: 30, bottom: 0 },
                      children: [
                        jsx(CartesianGrid, {
                          strokeDasharray: "3 3",
                          vertical: false,
                          stroke: "#e0e0e0",
                        }),
                        jsx(XAxis, {
                          dataKey: "month",
                          tickLine: false,
                          tickMargin: 10,
                        }),
                        jsx(YAxis, {
                          tickLine: false,
                          tickMargin: 10,
                          axisLine: false,
                        }),
                        jsx(Tooltip, {}),
                        jsx(Legend, {}),
                        jsx(Bar, {
                          dataKey: "income",
                          fill: "#1A1E4C",
                          radius: 4,
                          name: "Income",
                        }),
                        jsx(Bar, {
                          dataKey: "expenses",
                          fill: "#2463EB",
                          radius: 4,
                          name: "Expenses",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            jsxs(at, {
              className: "col-span-1 md:col-span-2 h-auto",
              children: [
                jsx(rt, { children: jsx(nt, { children: "My Accounts" }) }),
                jsx(ot, {
                  children: jsx("div", {
                    className: "flex flex-col gap-4 w-full",
                    children: s.length
                      ? s.map((a) =>
                          jsxs(
                            "div",
                            {
                              className:
                                "flex justify-between border-b last:border-none w-full pb-4",
                              children: [
                                jsxs("div", {
                                  className:
                                    "flex items-center gap-4 cursor-pointer",
                                  children: [
                                    jsx("div", {
                                      className:
                                        "h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-bold text-lg",
                                      children: a.name.charAt(0),
                                    }),
                                    jsxs("div", {
                                      children: [
                                        jsx("p", {
                                          className: "text-sm font-medium",
                                          children: a.name,
                                        }),
                                        jsx("p", {
                                          className:
                                            "text-sm text-muted-foreground",
                                          children: a.currency,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxs("div", {
                                  className: "font-medium",
                                  children: [
                                    a.balance.toLocaleString(),
                                    " ",
                                    a.currency,
                                  ],
                                }),
                              ],
                            },
                            a.id,
                          ),
                        )
                      : jsx("div", {
                          className:
                            "flex flex-col items-center justify-center text-center py-6",
                          children: jsx("p", {
                            className: "text-muted-foreground text-sm",
                            children: "No accounts available to display.",
                          }),
                        }),
                  }),
                }),
              ],
            }),
          ],
        }),
        jsx(tt, {
          columns: v,
          title: "Recent Transactions",
          data: [],
          isLoading: false,
          inputPlaceholder: "Search transactions Id",
          inputKey: "transaction",
          onClickCell: (a) => {
            console.log("apple", a);
          },
        }),
      ],
    });
  };

export { $ as component };
//# sourceMappingURL=index-D9p1aCTt.mjs.map
