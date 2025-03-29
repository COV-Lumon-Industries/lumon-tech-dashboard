import { jsxs, jsx } from "react/jsx-runtime";
import {
  a as at,
  r as rt,
  n as nt,
  o as ot,
  t as tt,
  s as st,
  l as lt,
} from "./card-DDNd0Tpl.mjs";
import { y, i, N } from "./input-BnCMX1ET.mjs";
import * as P from "@radix-ui/react-label";
import * as n from "react";
import * as A from "recharts";
import {
  RadialBarChart,
  PolarGrid,
  RadialBar,
  PolarRadiusAxis,
  Label,
} from "recharts";
import * as d from "@radix-ui/react-dialog";
import { CreditCardIcon, XIcon } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import {
  useForm,
  FormProvider,
  Controller,
  useFormContext,
  useFormState,
} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "@tanstack/react-table";
import "./dropdown-menu-CT42GEhg.mjs";
import "@radix-ui/react-separator";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-icons";
import "class-variance-authority";
import "cmdk";
import "@radix-ui/react-popover";
import "@radix-ui/react-select";
import "clsx";
import "tailwind-merge";

function X({ ...t }) {
  return jsx(d.Root, { "data-slot": "dialog", ...t });
}
function J({ ...t }) {
  return jsx(d.Trigger, { "data-slot": "dialog-trigger", ...t });
}
function Q({ ...t }) {
  return jsx(d.Portal, { "data-slot": "dialog-portal", ...t });
}
function W({ className: t, ...r }) {
  return jsx(d.Overlay, {
    "data-slot": "dialog-overlay",
    className: i(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
      t,
    ),
    ...r,
  });
}
function Z({ className: t, children: r, ...a }) {
  return jsxs(Q, {
    "data-slot": "dialog-portal",
    children: [
      jsx(W, {}),
      jsxs(d.Content, {
        "data-slot": "dialog-content",
        className: i(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          t,
        ),
        ...a,
        children: [
          r,
          jsxs(d.Close, {
            className:
              "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            children: [
              jsx(XIcon, {}),
              jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function B({ className: t, ...r }) {
  return jsx("div", {
    "data-slot": "dialog-header",
    className: i("flex flex-col gap-2 text-center sm:text-left", t),
    ...r,
  });
}
function ee({ className: t, ...r }) {
  return jsx(d.Title, {
    "data-slot": "dialog-title",
    className: i("text-lg leading-none font-semibold", t),
    ...r,
  });
}
function te({ className: t, ...r }) {
  return jsx(d.Description, {
    "data-slot": "dialog-description",
    className: i("text-muted-foreground text-sm", t),
    ...r,
  });
}
function _({ className: t, ...r }) {
  return jsx(P.Root, {
    "data-slot": "label",
    className: i(
      "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      t,
    ),
    ...r,
  });
}
const re = [
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ getValue: t }) => `\u20B5${t().toLocaleString()}`,
    },
    { accessorKey: "borrower_id", header: "Borrower" },
    {
      accessorKey: "created_at",
      header: "Created At",
      cell: ({ getValue: t }) => new Date(t()).toLocaleString(),
    },
    {
      accessorKey: "interest_rate",
      header: "Interest Rate (%)",
      cell: ({ getValue: t }) => `${t()}%`,
    },
    { accessorKey: "loan_duration", header: "Duration (Months)" },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ getValue: t }) => {
        const r = t();
        return jsx("span", {
          className:
            {
              pending: "text-yellow-500",
              approved: "text-green-500",
              rejected: "text-red-500",
            }[r] || "text-gray-500",
          children: r,
        });
      },
    },
  ],
  ae = { light: "", dark: ".dark" },
  oe = n.createContext(null);
function ne({ id: t, className: r, children: a, config: n$1, ...i$1 }) {
  const c = n.useId(),
    u = `chart-${t || c.replace(/:/g, "")}`;
  return jsx(oe.Provider, {
    value: { config: n$1 },
    children: jsxs("div", {
      "data-slot": "chart",
      "data-chart": u,
      className: i(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        r,
      ),
      ...i$1,
      children: [
        jsx(se, { id: u, config: n$1 }),
        jsx(A.ResponsiveContainer, { children: a }),
      ],
    }),
  });
}
const se = ({ id: t, config: r }) => {
    const a = Object.entries(r).filter(([, n]) => n.theme || n.color);
    return a.length
      ? jsx("style", {
          dangerouslySetInnerHTML: {
            __html: Object.entries(ae).map(
              ([n, i]) => `
${i} [data-chart=${t}] {
${a.map(([c, u]) => {
  var _a;
  const s = ((_a = u.theme) == null ? void 0 : _a[n]) || u.color;
  return s ? `  --color-${c}: ${s};` : null;
}).join(`
`)}
}
`,
            ).join(`
`),
          },
        })
      : null;
  },
  ie = (t) => ({ status: "Good", color: "hsl(48, 96%, 53%)", loanChance: 80 });
function le() {
  const { status: r, color: a, loanChance: n } = ie(),
    c = [{ name: "Credit Score", score: (720 / 1e3) * 100, fill: a }];
  return jsxs(at, {
    className: "flex flex-col",
    children: [
      jsxs(rt, {
        className: "items-center pb-0",
        children: [
          jsx(nt, { children: "Credit Score" }),
          jsx(st, { children: "Updated March 2025" }),
        ],
      }),
      jsx(ot, {
        className: "flex-1 pb-0",
        children: jsx(ne, {
          config: { score: { label: "Credit Score", color: "currentColor" } },
          className: "mx-auto aspect-square max-h-[250px]",
          children: jsxs(RadialBarChart, {
            data: c,
            startAngle: 180,
            endAngle: -180,
            innerRadius: 80,
            outerRadius: 110,
            children: [
              jsx(PolarGrid, {
                gridType: "circle",
                radialLines: false,
                stroke: "none",
                className: "first:fill-muted last:fill-background",
                polarRadius: [86, 74],
              }),
              jsx(RadialBar, {
                dataKey: "score",
                background: true,
                cornerRadius: 10,
              }),
              jsx(PolarRadiusAxis, {
                tick: false,
                tickLine: false,
                axisLine: false,
                children: jsx(Label, {
                  content: ({ viewBox: s }) => {
                    var _a, _b;
                    if (s && "cx" in s && "cy" in s)
                      return jsxs("text", {
                        x: s.cx,
                        y: s.cy,
                        textAnchor: "middle",
                        dominantBaseline: "middle",
                        children: [
                          jsx("tspan", {
                            x: s.cx,
                            y: ((_a = s.cy) != null ? _a : 0) - 12,
                            className: "fill-foreground text-4xl font-bold",
                            children: 720,
                          }),
                          jsx("tspan", {
                            x: s.cx,
                            y: ((_b = s.cy) != null ? _b : 0) + 12,
                            className: "fill-muted-foreground",
                            children: r,
                          }),
                        ],
                      });
                  },
                }),
              }),
            ],
          }),
        }),
      }),
      jsx(lt, {
        className: "flex-col gap-2 text-sm",
        children: jsxs("div", {
          className: "mt-2 text-center font-medium",
          style: { color: a },
          children: [n, "% chance of loan approval"],
        }),
      }),
    ],
  });
}
const ce = FormProvider,
  k = n.createContext({}),
  f = ({ ...t }) =>
    jsx(k.Provider, {
      value: { name: t.name },
      children: jsx(Controller, { ...t }),
    }),
  I = () => {
    const t = n.useContext(k),
      r = n.useContext(F),
      { getFieldState: a } = useFormContext(),
      n$1 = useFormState({ name: t.name }),
      i = a(t.name, n$1);
    if (!t) throw new Error("useFormField should be used within <FormField>");
    const { id: c } = r;
    return {
      id: c,
      name: t.name,
      formItemId: `${c}-form-item`,
      formDescriptionId: `${c}-form-item-description`,
      formMessageId: `${c}-form-item-message`,
      ...i,
    };
  },
  F = n.createContext({});
function g({ className: t, ...r }) {
  const a = n.useId();
  return jsx(F.Provider, {
    value: { id: a },
    children: jsx("div", {
      "data-slot": "form-item",
      className: i("grid gap-2", t),
      ...r,
    }),
  });
}
function p({ className: t, ...r }) {
  const { error: a, formItemId: n } = I();
  return jsx(_, {
    "data-slot": "form-label",
    "data-error": !!a,
    className: i("data-[error=true]:text-destructive", t),
    htmlFor: n,
    ...r,
  });
}
function x({ ...t }) {
  const {
    error: r,
    formItemId: a,
    formDescriptionId: n,
    formMessageId: i,
  } = I();
  return jsx(Slot, {
    "data-slot": "form-control",
    id: a,
    "aria-describedby": r ? `${n} ${i}` : `${n}`,
    "aria-invalid": !!r,
    ...t,
  });
}
function b({ className: t, ...r }) {
  var _a;
  const { error: a, formMessageId: n } = I(),
    i$1 = a
      ? String((_a = a == null ? void 0 : a.message) != null ? _a : "")
      : r.children;
  return i$1
    ? jsx("p", {
        "data-slot": "form-message",
        id: n,
        className: i("text-destructive text-sm", t),
        ...r,
        children: i$1,
      })
    : null;
}
function de({ className: t, ...r }) {
  return jsx("textarea", {
    "data-slot": "textarea",
    className: i(
      "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      t,
    ),
    ...r,
  });
}
const me = z.object({
  amount: z.number().min(1e3, "Minimum loan amount is 1000"),
  interest_rate: z.number().min(0, "Interest rate cannot be negative"),
  loan_duration: z.number().min(1, "Loan duration must be at least 1 month"),
  purpose: z.string().min(10, "Purpose must be at least 10 characters"),
});
function ue() {
  const t = useForm({
    resolver: zodResolver(me),
    defaultValues: {
      amount: 5e5,
      interest_rate: 5.75,
      loan_duration: 24,
      purpose: "Home Renovation",
    },
  });
  function r(a) {
    console.log(a);
  }
  return jsxs(X, {
    children: [
      jsx(J, {
        asChild: true,
        children: jsx(y, {
          variant: "outline",
          className: "bg-white",
          children: "Request Loan",
        }),
      }),
      jsxs(Z, {
        className: "sm:max-w-[425px]",
        children: [
          jsxs(B, {
            children: [
              jsx(ee, { children: "Request a loan" }),
              jsx(te, {
                children:
                  "Fill out this form for peer-to-peer loans. Note: Your credit score determines how trust worthy you are for this loan",
              }),
            ],
          }),
          jsx(ce, {
            ...t,
            children: jsxs("form", {
              onSubmit: t.handleSubmit(r),
              className: "space-y-4",
              children: [
                jsx(f, {
                  control: t.control,
                  name: "amount",
                  render: ({ field: a }) =>
                    jsxs(g, {
                      children: [
                        jsx(p, { children: "Loan Amount" }),
                        jsx(x, { children: jsx(N, { type: "number", ...a }) }),
                        jsx(b, {}),
                      ],
                    }),
                }),
                jsx(f, {
                  control: t.control,
                  name: "interest_rate",
                  render: ({ field: a }) =>
                    jsxs(g, {
                      children: [
                        jsx(p, { children: "Interest Rate (%)" }),
                        jsx(x, {
                          children: jsx(N, {
                            type: "number",
                            step: "0.01",
                            ...a,
                          }),
                        }),
                        jsx(b, {}),
                      ],
                    }),
                }),
                jsx(f, {
                  control: t.control,
                  name: "loan_duration",
                  render: ({ field: a }) =>
                    jsxs(g, {
                      children: [
                        jsx(p, { children: "Loan Duration (months)" }),
                        jsx(x, { children: jsx(N, { type: "number", ...a }) }),
                        jsx(b, {}),
                      ],
                    }),
                }),
                jsx(f, {
                  control: t.control,
                  name: "purpose",
                  render: ({ field: a }) =>
                    jsxs(g, {
                      children: [
                        jsx(p, { children: "Purpose" }),
                        jsx(x, { children: jsx(de, { ...a }) }),
                        jsx(b, {}),
                      ],
                    }),
                }),
                jsx(y, {
                  type: "submit",
                  className: "w-full",
                  children: "Submit Loan Application",
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
const Ae = function () {
  return jsxs("div", {
    className: "w-full min-h-screen pb-8",
    children: [
      jsxs("div", {
        className: "grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mb-4",
        children: [
          jsxs(at, {
            className:
              "min-h-64 rounded-lg bg-white shadow-none  lg:col-span-2 p-6",
            children: [
              jsx(rt, {
                children: jsx(nt, {
                  className: "text-xl font-semibold text-gray-800",
                  children: "AI-Powered DeFi Lending & Financial Insights",
                }),
              }),
              jsxs(ot, {
                className: "text-gray-600",
                children: [
                  jsx("p", {
                    children:
                      "Combining micro-investing, financial literacy, and DeFi peer-to-peer lending, this platform empowers users with AI-driven financial advice. Secure transactions, automated repayments, and AI credit scoring provide a seamless lending experience.",
                  }),
                  jsx("p", {
                    className: "mt-2",
                    children:
                      "Features include goal-based investing, AI-powered financial insights, and smart contract-backed lending, ensuring transparency and security in every transaction.",
                  }),
                ],
              }),
            ],
          }),
          jsxs("div", {
            className: "flex flex-col gap-2  ",
            children: [
              jsxs(at, {
                className:
                  "bg-green-gray-gradient min-h-64 flex flex-col justify-between p-5 text-white h-48",
                children: [
                  jsxs(nt, {
                    className: "w-full max-h-fit flex flex-row justify-between",
                    children: [
                      jsxs("div", {
                        children: [
                          jsx(_, {
                            className: "text-sm text-neutral-300",
                            children: "Account Balance",
                          }),
                          jsx("p", {
                            className: "text-2xl font-semibold font-raleway",
                            children: "Ghc 9000.00",
                          }),
                        ],
                      }),
                      jsx(CreditCardIcon, { className: "w-6 h-6 text-white" }),
                    ],
                  }),
                  jsxs(ot, {
                    className: "p-0",
                    children: [
                      jsx(_, {
                        className: "text-md text-neutral-200",
                        children: "Papa Yaw Agyeman-Gyekye",
                      }),
                      jsx("p", {
                        className: "text-xl font-medium font-raleway",
                        children: "020******8341",
                      }),
                    ],
                  }),
                ],
              }),
              jsxs("div", {
                className: "grid grid-cols-2 gap-5 ",
                children: [
                  jsx(y, {
                    className: "bg-black text-white hover:bg-gray-800",
                    children: "Switch Account",
                  }),
                  jsx(ue, {}),
                ],
              }),
            ],
          }),
        ],
      }),
      jsxs("div", {
        className: "grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-10",
        children: [
          jsx("div", {
            className: "h-full rounded lg:col-span-2",
            children: jsx(tt, {
              title: "Loan Listings",
              data: [],
              isLoading: false,
              columns: re,
            }),
          }),
          jsx("div", { className: "h-full ", children: jsx(le, {}) }),
        ],
      }),
    ],
  });
};

export { Ae as component };
//# sourceMappingURL=loans-CZtrwKED.mjs.map
