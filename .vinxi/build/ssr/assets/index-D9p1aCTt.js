import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { C as r, a as o, b as c, c as l, D as m } from "./card-DDNd0Tpl.js";
import { B as d } from "./input-BnCMX1ET.js";
import { DollarSign as h } from "lucide-react";
import { useState as p } from "react";
import {
  ResponsiveContainer as u,
  BarChart as x,
  CartesianGrid as f,
  XAxis as y,
  YAxis as g,
  Tooltip as b,
  Legend as N,
  Bar as i,
} from "recharts";
import "@tanstack/react-table";
import "./dropdown-menu-CT42GEhg.js";
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
        return n("span", {
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
        return e("span", {
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
        e("div", { children: "Add a table action/ dropdown if you want" })
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
    const [s] = p(w);
    return n("div", {
      className: "w-full ",
      children: [
        n("div", {
          className: "w-full flex flex-row justify-between items-start mb-6",
          children: [
            e("div", {
              className: "text-2xl font-bold",
              children: "Dashboard",
            }),
            e(d, { children: "Add Account" }),
          ],
        }),
        e("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8",
          children: ["My Balance", "Monthly Income", "Monthly Expenses"].map(
            (a) =>
              n(
                r,
                {
                  className: "w-full cursor-pointer h-auto",
                  children: [
                    n(o, {
                      className:
                        "flex flex-row items-center justify-between space-y-0 pb-2",
                      children: [
                        e(c, { className: "text-sm font-medium", children: a }),
                        e(h, { className: "w-4 h-4 text-muted-foreground" }),
                      ],
                    }),
                    e(l, {
                      children: e("div", {
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
        n("div", {
          className: "grid grid-cols-1 md:grid-cols-7 gap-6 mb-8",
          children: [
            n(r, {
              className: "col-span-1 md:col-span-5 h-auto",
              children: [
                e(o, {
                  children: e(c, { children: "Monthly Income & Expenses" }),
                }),
                e(l, {
                  className: "h-64 md:h-80",
                  children: e(u, {
                    width: "100%",
                    height: "100%",
                    children: n(x, {
                      data: D,
                      margin: { top: 20, right: 20, left: 30, bottom: 0 },
                      children: [
                        e(f, {
                          strokeDasharray: "3 3",
                          vertical: !1,
                          stroke: "#e0e0e0",
                        }),
                        e(y, {
                          dataKey: "month",
                          tickLine: !1,
                          tickMargin: 10,
                        }),
                        e(g, { tickLine: !1, tickMargin: 10, axisLine: !1 }),
                        e(b, {}),
                        e(N, {}),
                        e(i, {
                          dataKey: "income",
                          fill: "#1A1E4C",
                          radius: 4,
                          name: "Income",
                        }),
                        e(i, {
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
            n(r, {
              className: "col-span-1 md:col-span-2 h-auto",
              children: [
                e(o, { children: e(c, { children: "My Accounts" }) }),
                e(l, {
                  children: e("div", {
                    className: "flex flex-col gap-4 w-full",
                    children: s.length
                      ? s.map((a) =>
                          n(
                            "div",
                            {
                              className:
                                "flex justify-between border-b last:border-none w-full pb-4",
                              children: [
                                n("div", {
                                  className:
                                    "flex items-center gap-4 cursor-pointer",
                                  children: [
                                    e("div", {
                                      className:
                                        "h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-bold text-lg",
                                      children: a.name.charAt(0),
                                    }),
                                    n("div", {
                                      children: [
                                        e("p", {
                                          className: "text-sm font-medium",
                                          children: a.name,
                                        }),
                                        e("p", {
                                          className:
                                            "text-sm text-muted-foreground",
                                          children: a.currency,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                n("div", {
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
                      : e("div", {
                          className:
                            "flex flex-col items-center justify-center text-center py-6",
                          children: e("p", {
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
        e(m, {
          columns: v,
          title: "Recent Transactions",
          data: [],
          isLoading: !1,
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
