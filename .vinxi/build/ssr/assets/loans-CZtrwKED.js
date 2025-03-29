import { jsx as e, jsxs as o } from "react/jsx-runtime";
import {
  C as v,
  a as S,
  b as C,
  d as D,
  c as N,
  e as L,
  D as R,
} from "./card-DDNd0Tpl.js";
import { c as l, B as w, I as y } from "./input-BnCMX1ET.js";
import * as P from "@radix-ui/react-label";
import * as m from "react";
import * as A from "recharts";
import {
  RadialBarChart as $,
  PolarGrid as j,
  RadialBar as T,
  PolarRadiusAxis as z,
  Label as M,
} from "recharts";
import * as d from "@radix-ui/react-dialog";
import { XIcon as K, CreditCardIcon as q } from "lucide-react";
import { Slot as H } from "@radix-ui/react-slot";
import {
  FormProvider as G,
  Controller as O,
  useFormContext as E,
  useFormState as Y,
  useForm as U,
} from "react-hook-form";
import { z as h } from "zod";
import { zodResolver as V } from "@hookform/resolvers/zod";
import "@tanstack/react-table";
import "./dropdown-menu-CT42GEhg.js";
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
  return e(d.Root, { "data-slot": "dialog", ...t });
}
function J({ ...t }) {
  return e(d.Trigger, { "data-slot": "dialog-trigger", ...t });
}
function Q({ ...t }) {
  return e(d.Portal, { "data-slot": "dialog-portal", ...t });
}
function W({ className: t, ...r }) {
  return e(d.Overlay, {
    "data-slot": "dialog-overlay",
    className: l(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
      t,
    ),
    ...r,
  });
}
function Z({ className: t, children: r, ...a }) {
  return o(Q, {
    "data-slot": "dialog-portal",
    children: [
      e(W, {}),
      o(d.Content, {
        "data-slot": "dialog-content",
        className: l(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          t,
        ),
        ...a,
        children: [
          r,
          o(d.Close, {
            className:
              "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            children: [
              e(K, {}),
              e("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function B({ className: t, ...r }) {
  return e("div", {
    "data-slot": "dialog-header",
    className: l("flex flex-col gap-2 text-center sm:text-left", t),
    ...r,
  });
}
function ee({ className: t, ...r }) {
  return e(d.Title, {
    "data-slot": "dialog-title",
    className: l("text-lg leading-none font-semibold", t),
    ...r,
  });
}
function te({ className: t, ...r }) {
  return e(d.Description, {
    "data-slot": "dialog-description",
    className: l("text-muted-foreground text-sm", t),
    ...r,
  });
}
function _({ className: t, ...r }) {
  return e(P.Root, {
    "data-slot": "label",
    className: l(
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
      cell: ({ getValue: t }) => `₵${t().toLocaleString()}`,
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
        return e("span", {
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
  oe = m.createContext(null);
function ne({ id: t, className: r, children: a, config: n, ...i }) {
  const c = m.useId(),
    u = `chart-${t || c.replace(/:/g, "")}`;
  return e(oe.Provider, {
    value: { config: n },
    children: o("div", {
      "data-slot": "chart",
      "data-chart": u,
      className: l(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        r,
      ),
      ...i,
      children: [
        e(se, { id: u, config: n }),
        e(A.ResponsiveContainer, { children: a }),
      ],
    }),
  });
}
const se = ({ id: t, config: r }) => {
    const a = Object.entries(r).filter(([, n]) => n.theme || n.color);
    return a.length
      ? e("style", {
          dangerouslySetInnerHTML: {
            __html: Object.entries(ae).map(
              ([n, i]) => `
${i} [data-chart=${t}] {
${a.map(([c, u]) => {
  const s = u.theme?.[n] || u.color;
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
  return o(v, {
    className: "flex flex-col",
    children: [
      o(S, {
        className: "items-center pb-0",
        children: [
          e(C, { children: "Credit Score" }),
          e(D, { children: "Updated March 2025" }),
        ],
      }),
      e(N, {
        className: "flex-1 pb-0",
        children: e(ne, {
          config: { score: { label: "Credit Score", color: "currentColor" } },
          className: "mx-auto aspect-square max-h-[250px]",
          children: o($, {
            data: c,
            startAngle: 180,
            endAngle: -180,
            innerRadius: 80,
            outerRadius: 110,
            children: [
              e(j, {
                gridType: "circle",
                radialLines: !1,
                stroke: "none",
                className: "first:fill-muted last:fill-background",
                polarRadius: [86, 74],
              }),
              e(T, { dataKey: "score", background: !0, cornerRadius: 10 }),
              e(z, {
                tick: !1,
                tickLine: !1,
                axisLine: !1,
                children: e(M, {
                  content: ({ viewBox: s }) => {
                    if (s && "cx" in s && "cy" in s)
                      return o("text", {
                        x: s.cx,
                        y: s.cy,
                        textAnchor: "middle",
                        dominantBaseline: "middle",
                        children: [
                          e("tspan", {
                            x: s.cx,
                            y: (s.cy ?? 0) - 12,
                            className: "fill-foreground text-4xl font-bold",
                            children: 720,
                          }),
                          e("tspan", {
                            x: s.cx,
                            y: (s.cy ?? 0) + 12,
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
      e(L, {
        className: "flex-col gap-2 text-sm",
        children: o("div", {
          className: "mt-2 text-center font-medium",
          style: { color: a },
          children: [n, "% chance of loan approval"],
        }),
      }),
    ],
  });
}
const ce = G,
  k = m.createContext({}),
  f = ({ ...t }) =>
    e(k.Provider, { value: { name: t.name }, children: e(O, { ...t }) }),
  I = () => {
    const t = m.useContext(k),
      r = m.useContext(F),
      { getFieldState: a } = E(),
      n = Y({ name: t.name }),
      i = a(t.name, n);
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
  F = m.createContext({});
function g({ className: t, ...r }) {
  const a = m.useId();
  return e(F.Provider, {
    value: { id: a },
    children: e("div", {
      "data-slot": "form-item",
      className: l("grid gap-2", t),
      ...r,
    }),
  });
}
function p({ className: t, ...r }) {
  const { error: a, formItemId: n } = I();
  return e(_, {
    "data-slot": "form-label",
    "data-error": !!a,
    className: l("data-[error=true]:text-destructive", t),
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
  return e(H, {
    "data-slot": "form-control",
    id: a,
    "aria-describedby": r ? `${n} ${i}` : `${n}`,
    "aria-invalid": !!r,
    ...t,
  });
}
function b({ className: t, ...r }) {
  const { error: a, formMessageId: n } = I(),
    i = a ? String(a?.message ?? "") : r.children;
  return i
    ? e("p", {
        "data-slot": "form-message",
        id: n,
        className: l("text-destructive text-sm", t),
        ...r,
        children: i,
      })
    : null;
}
function de({ className: t, ...r }) {
  return e("textarea", {
    "data-slot": "textarea",
    className: l(
      "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      t,
    ),
    ...r,
  });
}
const me = h.object({
  amount: h.number().min(1e3, "Minimum loan amount is 1000"),
  interest_rate: h.number().min(0, "Interest rate cannot be negative"),
  loan_duration: h.number().min(1, "Loan duration must be at least 1 month"),
  purpose: h.string().min(10, "Purpose must be at least 10 characters"),
});
function ue() {
  const t = U({
    resolver: V(me),
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
  return o(X, {
    children: [
      e(J, {
        asChild: !0,
        children: e(w, {
          variant: "outline",
          className: "bg-white",
          children: "Request Loan",
        }),
      }),
      o(Z, {
        className: "sm:max-w-[425px]",
        children: [
          o(B, {
            children: [
              e(ee, { children: "Request a loan" }),
              e(te, {
                children:
                  "Fill out this form for peer-to-peer loans. Note: Your credit score determines how trust worthy you are for this loan",
              }),
            ],
          }),
          e(ce, {
            ...t,
            children: o("form", {
              onSubmit: t.handleSubmit(r),
              className: "space-y-4",
              children: [
                e(f, {
                  control: t.control,
                  name: "amount",
                  render: ({ field: a }) =>
                    o(g, {
                      children: [
                        e(p, { children: "Loan Amount" }),
                        e(x, { children: e(y, { type: "number", ...a }) }),
                        e(b, {}),
                      ],
                    }),
                }),
                e(f, {
                  control: t.control,
                  name: "interest_rate",
                  render: ({ field: a }) =>
                    o(g, {
                      children: [
                        e(p, { children: "Interest Rate (%)" }),
                        e(x, {
                          children: e(y, {
                            type: "number",
                            step: "0.01",
                            ...a,
                          }),
                        }),
                        e(b, {}),
                      ],
                    }),
                }),
                e(f, {
                  control: t.control,
                  name: "loan_duration",
                  render: ({ field: a }) =>
                    o(g, {
                      children: [
                        e(p, { children: "Loan Duration (months)" }),
                        e(x, { children: e(y, { type: "number", ...a }) }),
                        e(b, {}),
                      ],
                    }),
                }),
                e(f, {
                  control: t.control,
                  name: "purpose",
                  render: ({ field: a }) =>
                    o(g, {
                      children: [
                        e(p, { children: "Purpose" }),
                        e(x, { children: e(de, { ...a }) }),
                        e(b, {}),
                      ],
                    }),
                }),
                e(w, {
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
  return o("div", {
    className: "w-full min-h-screen pb-8",
    children: [
      o("div", {
        className: "grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mb-4",
        children: [
          o(v, {
            className:
              "min-h-64 rounded-lg bg-white shadow-none  lg:col-span-2 p-6",
            children: [
              e(S, {
                children: e(C, {
                  className: "text-xl font-semibold text-gray-800",
                  children: "AI-Powered DeFi Lending & Financial Insights",
                }),
              }),
              o(N, {
                className: "text-gray-600",
                children: [
                  e("p", {
                    children:
                      "Combining micro-investing, financial literacy, and DeFi peer-to-peer lending, this platform empowers users with AI-driven financial advice. Secure transactions, automated repayments, and AI credit scoring provide a seamless lending experience.",
                  }),
                  e("p", {
                    className: "mt-2",
                    children:
                      "Features include goal-based investing, AI-powered financial insights, and smart contract-backed lending, ensuring transparency and security in every transaction.",
                  }),
                ],
              }),
            ],
          }),
          o("div", {
            className: "flex flex-col gap-2  ",
            children: [
              o(v, {
                className:
                  "bg-green-gray-gradient min-h-64 flex flex-col justify-between p-5 text-white h-48",
                children: [
                  o(C, {
                    className: "w-full max-h-fit flex flex-row justify-between",
                    children: [
                      o("div", {
                        children: [
                          e(_, {
                            className: "text-sm text-neutral-300",
                            children: "Account Balance",
                          }),
                          e("p", {
                            className: "text-2xl font-semibold font-raleway",
                            children: "Ghc 9000.00",
                          }),
                        ],
                      }),
                      e(q, { className: "w-6 h-6 text-white" }),
                    ],
                  }),
                  o(N, {
                    className: "p-0",
                    children: [
                      e(_, {
                        className: "text-md text-neutral-200",
                        children: "Papa Yaw Agyeman-Gyekye",
                      }),
                      e("p", {
                        className: "text-xl font-medium font-raleway",
                        children: "020******8341",
                      }),
                    ],
                  }),
                ],
              }),
              o("div", {
                className: "grid grid-cols-2 gap-5 ",
                children: [
                  e(w, {
                    className: "bg-black text-white hover:bg-gray-800",
                    children: "Switch Account",
                  }),
                  e(ue, {}),
                ],
              }),
            ],
          }),
        ],
      }),
      o("div", {
        className: "grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-10",
        children: [
          e("div", {
            className: "h-full rounded lg:col-span-2",
            children: e(R, {
              title: "Loan Listings",
              data: [],
              isLoading: !1,
              columns: re,
            }),
          }),
          e("div", { className: "h-full ", children: e(le, {}) }),
        ],
      }),
    ],
  });
};
export { Ae as component };
