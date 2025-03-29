import { jsxs, jsx } from "react/jsx-runtime";
import * as n from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { EyeOff, Eye, LoaderCircle } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function i(...r) {
  return twMerge(clsx(r));
}
function I(r, a, o) {
  const e = r.getValue(a);
  return o.includes(e.toLowerCase());
}
const w = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
          table: "",
          pagination: "",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  y = n.forwardRef(
    ({ className: r, variant: a, size: o, asChild: e = false, ...s }, n) =>
      jsx(e ? Slot : "button", {
        className: i(w({ variant: a, size: o, className: r })),
        ref: n,
        ...s,
        children: s.isLoading
          ? jsx(LoaderCircle, { className: "animate-spin h-4 w-4" })
          : s.children,
      }),
  );
y.displayName = "Button";
const N = n.forwardRef(({ className: r, type: a, fieldInfo: o, ...e }, s) => {
  const [n$1, c] = n.useState(a !== "password"),
    l = o;
  return jsxs("div", {
    className: i("relative flex w-full flex-col gap-2", e.labelClassName),
    children: [
      e.label &&
        jsx("label", {
          htmlFor: e.id,
          className: i(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            e.labelClassName,
          ),
          children: e.label,
        }),
      jsxs("div", {
        className: "relative w-full",
        children: [
          jsx("input", {
            type: n$1 ? "text" : a,
            className: i(
              "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              r,
            ),
            ref: s,
            ...e,
          }),
          a === "password" &&
            jsx("button", {
              type: "button",
              className:
                "absolute right-2.5 bottom-2.5 text-gray-500 hover:text-gray-700",
              onClick: () => c(!n$1),
              children: n$1
                ? jsx(EyeOff, { className: "h-4 w-4" })
                : jsx(Eye, { className: "h-4 w-4" }),
            }),
        ],
      }),
      (l == null ? void 0 : l.state.meta.isTouched) &&
      l.state.meta.errors.length
        ? jsx("em", {
            className: "text-xs text-red-700",
            children: l.state.meta.errors.map((m) => m.message).join(", "),
          })
        : null,
    ],
  });
});
N.displayName = "Input";

export { I, N, i, y };
//# sourceMappingURL=input-BnCMX1ET.mjs.map
