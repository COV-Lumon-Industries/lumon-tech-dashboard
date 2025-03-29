import { jsx, jsxs } from "react/jsx-runtime";
import * as i from "@radix-ui/react-separator";
import { i as i$1 } from "./input-BnCMX1ET.mjs";
import * as a from "@radix-ui/react-dropdown-menu";
import { CheckIcon } from "lucide-react";

function p({
  className: t,
  orientation: o = "horizontal",
  decorative: n = true,
  ...d
}) {
  return jsx(i.Root, {
    "data-slot": "separator-root",
    decorative: n,
    orientation: o,
    className: i$1(
      "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
      t,
    ),
    ...d,
  });
}
function f({ ...t }) {
  return jsx(a.Root, { "data-slot": "dropdown-menu", ...t });
}
function v({ ...t }) {
  return jsx(a.Trigger, { "data-slot": "dropdown-menu-trigger", ...t });
}
function g({ className: t, sideOffset: o = 4, ...n }) {
  return jsx(a.Portal, {
    children: jsx(a.Content, {
      "data-slot": "dropdown-menu-content",
      sideOffset: o,
      className: i$1(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        t,
      ),
      ...n,
    }),
  });
}
function x({ ...t }) {
  return jsx(a.Group, { "data-slot": "dropdown-menu-group", ...t });
}
function h({ className: t, inset: o, variant: n = "default", ...d }) {
  return jsx(a.Item, {
    "data-slot": "dropdown-menu-item",
    "data-inset": o,
    "data-variant": n,
    className: i$1(
      "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      t,
    ),
    ...d,
  });
}
function b({ className: t, children: o, checked: n, ...d }) {
  return jsxs(a.CheckboxItem, {
    "data-slot": "dropdown-menu-checkbox-item",
    className: i$1(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      t,
    ),
    checked: n,
    ...d,
    children: [
      jsx("span", {
        className:
          "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: jsx(a.ItemIndicator, {
          children: jsx(CheckIcon, { className: "size-4" }),
        }),
      }),
      o,
    ],
  });
}
function w({ className: t, inset: o, ...n }) {
  return jsx(a.Label, {
    "data-slot": "dropdown-menu-label",
    "data-inset": o,
    className: i$1("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", t),
    ...n,
  });
}
function z({ className: t, ...o }) {
  return jsx(a.Separator, {
    "data-slot": "dropdown-menu-separator",
    className: i$1("bg-border -mx-1 my-1 h-px", t),
    ...o,
  });
}

export { b, f, g, h, p, v, w, x, z };
//# sourceMappingURL=dropdown-menu-CT42GEhg.mjs.map
