import { jsx as e, jsxs as o } from "react/jsx-runtime";
import { Outlet as ie } from "@tanstack/react-router";
import {
  XIcon as ne,
  PanelLeft as oe,
  ChevronsUpDown as se,
  Sparkles as de,
  BadgeCheck as le,
  CreditCard as ce,
  Bell as ue,
  LogOut as me,
  GalleryVerticalEnd as be,
  AudioWaveform as fe,
  Command as pe,
  SquareTerminal as ge,
  Bot as he,
  BookOpen as xe,
  Settings2 as ve,
  ChevronRight as we,
} from "lucide-react";
import * as n from "react";
import { Slot as x } from "@radix-ui/react-slot";
import { cva as Ne } from "class-variance-authority";
import { c as i, B as Se, I as ye } from "./input-BnCMX1ET.js";
import {
  S as j,
  D as q,
  a as H,
  b as Ce,
  c as Me,
  d as z,
  e as E,
  f as N,
} from "./dropdown-menu-CT42GEhg.js";
import * as p from "@radix-ui/react-dialog";
import * as h from "@radix-ui/react-tooltip";
import * as D from "@radix-ui/react-avatar";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-separator";
import "@radix-ui/react-dropdown-menu";
const I = 768;
function _e() {
  const [a, t] = n.useState(void 0);
  return (
    n.useEffect(() => {
      const r = window.matchMedia(`(max-width: ${I - 1}px)`),
        s = () => {
          t(window.innerWidth < I);
        };
      return (
        r.addEventListener("change", s),
        t(window.innerWidth < I),
        () => r.removeEventListener("change", s)
      );
    }, []),
    !!a
  );
}
function ke({ ...a }) {
  return e(p.Root, { "data-slot": "sheet", ...a });
}
function Re({ ...a }) {
  return e(p.Portal, { "data-slot": "sheet-portal", ...a });
}
function ze({ className: a, ...t }) {
  return e(p.Overlay, {
    "data-slot": "sheet-overlay",
    className: i(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
      a,
    ),
    ...t,
  });
}
function Ie({ className: a, children: t, side: r = "right", ...s }) {
  return o(Re, {
    children: [
      e(ze, {}),
      o(p.Content, {
        "data-slot": "sheet-content",
        className: i(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          r === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          r === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          r === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          r === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          a,
        ),
        ...s,
        children: [
          t,
          o(p.Close, {
            className:
              "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
            children: [
              e(ne, { className: "size-4" }),
              e("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Be({ className: a, ...t }) {
  return e("div", {
    "data-slot": "sheet-header",
    className: i("flex flex-col gap-1.5 p-4", a),
    ...t,
  });
}
function De({ className: a, ...t }) {
  return e(p.Title, {
    "data-slot": "sheet-title",
    className: i("text-foreground font-semibold", a),
    ...t,
  });
}
function Ae({ className: a, ...t }) {
  return e(p.Description, {
    "data-slot": "sheet-description",
    className: i("text-muted-foreground text-sm", a),
    ...t,
  });
}
function T({ className: a, ...t }) {
  return e("div", {
    "data-slot": "skeleton",
    className: i("bg-accent animate-pulse rounded-md", a),
    ...t,
  });
}
function K({ delayDuration: a = 0, ...t }) {
  return e(h.Provider, {
    "data-slot": "tooltip-provider",
    delayDuration: a,
    ...t,
  });
}
function Ee({ ...a }) {
  return e(K, { children: e(h.Root, { "data-slot": "tooltip", ...a }) });
}
function Te({ ...a }) {
  return e(h.Trigger, { "data-slot": "tooltip-trigger", ...a });
}
function Oe({ className: a, sideOffset: t = 0, children: r, ...s }) {
  return e(h.Portal, {
    children: o(h.Content, {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: i(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        a,
      ),
      ...s,
      children: [
        r,
        e(h.Arrow, {
          className:
            "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]",
        }),
      ],
    }),
  });
}
const Pe = "sidebar_state",
  Le = 60 * 60 * 24 * 7,
  Ge = "16rem",
  je = "18rem",
  qe = "3rem",
  He = "b",
  F = n.createContext(null);
function S() {
  const a = n.useContext(F);
  if (!a) throw new Error("useSidebar must be used within a SidebarProvider.");
  return a;
}
const W = n.forwardRef(
  (
    {
      defaultOpen: a = !0,
      open: t,
      onOpenChange: r,
      className: s,
      style: d,
      children: l,
      ...f
    },
    v,
  ) => {
    const u = _e(),
      [g, m] = n.useState(!1),
      [y, te] = n.useState(a),
      w = t ?? y,
      C = n.useCallback(
        (c) => {
          const b = typeof c == "function" ? c(w) : c;
          r ? r(b) : te(b),
            (document.cookie = `${Pe}=${b}; path=/; max-age=${Le}`);
        },
        [r, w],
      ),
      M = n.useCallback(() => (u ? m((c) => !c) : C((c) => !c)), [u, C, m]);
    n.useEffect(() => {
      const c = (b) => {
        b.key === He && (b.metaKey || b.ctrlKey) && (b.preventDefault(), M());
      };
      return (
        window.addEventListener("keydown", c),
        () => window.removeEventListener("keydown", c)
      );
    }, [M]);
    const A = w ? "expanded" : "collapsed",
      re = n.useMemo(
        () => ({
          state: A,
          open: w,
          setOpen: C,
          isMobile: u,
          openMobile: g,
          setOpenMobile: m,
          toggleSidebar: M,
        }),
        [A, w, C, u, g, m, M],
      );
    return e(F.Provider, {
      value: re,
      children: e(K, {
        delayDuration: 0,
        children: e("div", {
          style: { "--sidebar-width": Ge, "--sidebar-width-icon": qe, ...d },
          className: i(
            "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
            s,
          ),
          ref: v,
          ...f,
          children: l,
        }),
      }),
    });
  },
);
W.displayName = "SidebarProvider";
const $ = n.forwardRef(
  (
    {
      side: a = "left",
      variant: t = "sidebar",
      collapsible: r = "offcanvas",
      className: s,
      children: d,
      ...l
    },
    f,
  ) => {
    const { isMobile: v, state: u, openMobile: g, setOpenMobile: m } = S();
    return r === "none"
      ? e("div", {
          className: i(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            s,
          ),
          ref: f,
          ...l,
          children: d,
        })
      : v
        ? e(ke, {
            open: g,
            onOpenChange: m,
            ...l,
            children: o(Ie, {
              "data-sidebar": "sidebar",
              "data-mobile": "true",
              className:
                "w-[--sidebar-width] bg-green-800 p-0 text-white [&>button]:hidden",
              style: { "--sidebar-width": je },
              side: a,
              children: [
                o(Be, {
                  className: "sr-only",
                  children: [
                    e(De, { children: "Sidebar" }),
                    e(Ae, { children: "Displays the mobile sidebar." }),
                  ],
                }),
                e("div", {
                  className: "flex h-full w-full flex-col",
                  children: d,
                }),
              ],
            }),
          })
        : o("div", {
            ref: f,
            className: "group peer hidden text-white md:block",
            "data-state": u,
            "data-collapsible": u === "collapsed" ? r : "",
            "data-variant": t,
            "data-side": a,
            children: [
              e("div", {
                className: i(
                  "relative w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
                  "group-data-[collapsible=offcanvas]:w-0",
                  "group-data-[side=right]:rotate-180",
                  t === "floating" || t === "inset"
                    ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
                    : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]",
                ),
              }),
              e("div", {
                className: i(
                  "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
                  a === "left"
                    ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
                    : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                  t === "floating" || t === "inset"
                    ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
                    : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
                  s,
                ),
                ...l,
                children: e("div", {
                  "data-sidebar": "sidebar",
                  className:
                    "flex h-full w-full flex-col bg-green-800 group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                  children: d,
                }),
              }),
            ],
          });
  },
);
$.displayName = "Sidebar";
const U = n.forwardRef(({ className: a, onClick: t, ...r }, s) => {
  const { toggleSidebar: d } = S();
  return o(Se, {
    ref: s,
    "data-sidebar": "trigger",
    variant: "ghost",
    size: "icon",
    className: i("h-7 w-7", a),
    onClick: (l) => {
      t?.(l), d();
    },
    ...r,
    children: [
      e(oe, {}),
      e("span", { className: "sr-only", children: "Toggle Sidebar" }),
    ],
  });
});
U.displayName = "SidebarTrigger";
const V = n.forwardRef(({ className: a, ...t }, r) => {
  const { toggleSidebar: s } = S();
  return e("button", {
    ref: r,
    "data-sidebar": "rail",
    "aria-label": "Toggle Sidebar",
    tabIndex: -1,
    onClick: s,
    title: "Toggle Sidebar",
    className: i(
      "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
      "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
      "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
      "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
      "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
      "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
      a,
    ),
    ...t,
  });
});
V.displayName = "SidebarRail";
const Y = n.forwardRef(({ className: a, ...t }, r) =>
  e("main", {
    ref: r,
    className: i(
      "relative flex w-full flex-1 flex-col bg-background",
      "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
      a,
    ),
    ...t,
  }),
);
Y.displayName = "SidebarInset";
const Ke = n.forwardRef(({ className: a, ...t }, r) =>
  e(ye, {
    ref: r,
    "data-sidebar": "input",
    className: i(
      "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
      a,
    ),
    ...t,
  }),
);
Ke.displayName = "SidebarInput";
const X = n.forwardRef(({ className: a, ...t }, r) =>
  e("div", {
    ref: r,
    "data-sidebar": "header",
    className: i("flex flex-col gap-2 p-2", a),
    ...t,
  }),
);
X.displayName = "SidebarHeader";
const Z = n.forwardRef(({ className: a, ...t }, r) =>
  e("div", {
    ref: r,
    "data-sidebar": "footer",
    className: i("flex flex-col gap-2 p-2", a),
    ...t,
  }),
);
Z.displayName = "SidebarFooter";
const Fe = n.forwardRef(({ className: a, ...t }, r) =>
  e(j, {
    ref: r,
    "data-sidebar": "separator",
    className: i("mx-2 w-auto bg-sidebar-border", a),
    ...t,
  }),
);
Fe.displayName = "SidebarSeparator";
const J = n.forwardRef(({ className: a, ...t }, r) =>
  e("div", {
    ref: r,
    "data-sidebar": "content",
    className: i(
      "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
      a,
    ),
    ...t,
  }),
);
J.displayName = "SidebarContent";
const Q = n.forwardRef(({ className: a, ...t }, r) =>
  e("div", {
    ref: r,
    "data-sidebar": "group",
    className: i("relative flex w-full min-w-0 flex-col p-2", a),
    ...t,
  }),
);
Q.displayName = "SidebarGroup";
const ee = n.forwardRef(({ className: a, asChild: t = !1, ...r }, s) =>
  e(t ? x : "div", {
    ref: s,
    "data-sidebar": "group-label",
    className: i(
      "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
      a,
    ),
    ...r,
  }),
);
ee.displayName = "SidebarGroupLabel";
const We = n.forwardRef(({ className: a, asChild: t = !1, ...r }, s) =>
  e(t ? x : "button", {
    ref: s,
    "data-sidebar": "group-action",
    className: i(
      "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      "after:absolute after:-inset-2 after:md:hidden",
      "group-data-[collapsible=icon]:hidden",
      a,
    ),
    ...r,
  }),
);
We.displayName = "SidebarGroupAction";
const $e = n.forwardRef(({ className: a, ...t }, r) =>
  e("div", {
    ref: r,
    "data-sidebar": "group-content",
    className: i("w-full text-sm", a),
    ...t,
  }),
);
$e.displayName = "SidebarGroupContent";
const _ = n.forwardRef(({ className: a, ...t }, r) =>
  e("ul", {
    ref: r,
    "data-sidebar": "menu",
    className: i("flex w-full min-w-0 flex-col gap-1", a),
    ...t,
  }),
);
_.displayName = "SidebarMenu";
const k = n.forwardRef(({ className: a, ...t }, r) =>
  e("li", {
    ref: r,
    "data-sidebar": "menu-item",
    className: i("group/menu-item relative", a),
    ...t,
  }),
);
k.displayName = "SidebarMenuItem";
const Ue = Ne(
    "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
          outline:
            "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
        },
        size: {
          default: "h-8 text-sm",
          sm: "h-7 text-xs",
          lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  R = n.forwardRef(
    (
      {
        asChild: a = !1,
        isActive: t = !1,
        variant: r = "default",
        size: s = "default",
        tooltip: d,
        className: l,
        ...f
      },
      v,
    ) => {
      const u = a ? x : "button",
        { isMobile: g, state: m } = S(),
        y = e(u, {
          ref: v,
          "data-sidebar": "menu-button",
          "data-size": s,
          "data-active": t,
          className: i(Ue({ variant: r, size: s }), l),
          ...f,
        });
      return d
        ? (typeof d == "string" && (d = { children: d }),
          o(Ee, {
            children: [
              e(Te, { asChild: !0, children: y }),
              e(Oe, {
                side: "right",
                align: "center",
                hidden: m !== "collapsed" || g,
                ...d,
              }),
            ],
          }))
        : y;
    },
  );
R.displayName = "SidebarMenuButton";
const Ve = n.forwardRef(
  ({ className: a, asChild: t = !1, showOnHover: r = !1, ...s }, d) =>
    e(t ? x : "button", {
      ref: d,
      "data-sidebar": "menu-action",
      className: i(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        r &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        a,
      ),
      ...s,
    }),
);
Ve.displayName = "SidebarMenuAction";
const Ye = n.forwardRef(({ className: a, ...t }, r) =>
  e("div", {
    ref: r,
    "data-sidebar": "menu-badge",
    className: i(
      "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      a,
    ),
    ...t,
  }),
);
Ye.displayName = "SidebarMenuBadge";
const Xe = n.forwardRef(({ className: a, showIcon: t = !1, ...r }, s) => {
  const d = n.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return o("div", {
    ref: s,
    "data-sidebar": "menu-skeleton",
    className: i("flex h-8 items-center gap-2 rounded-md px-2", a),
    ...r,
    children: [
      t &&
        e(T, {
          className: "size-4 rounded-md",
          "data-sidebar": "menu-skeleton-icon",
        }),
      e(T, {
        className: "h-4 max-w-[--skeleton-width] flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: { "--skeleton-width": d },
      }),
    ],
  });
});
Xe.displayName = "SidebarMenuSkeleton";
const Ze = n.forwardRef(({ className: a, ...t }, r) =>
  e("ul", {
    ref: r,
    "data-sidebar": "menu-sub",
    className: i(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      a,
    ),
    ...t,
  }),
);
Ze.displayName = "SidebarMenuSub";
const Je = n.forwardRef(({ ...a }, t) => e("li", { ref: t, ...a }));
Je.displayName = "SidebarMenuSubItem";
const Qe = n.forwardRef(
  ({ asChild: a = !1, size: t = "md", isActive: r, className: s, ...d }, l) =>
    e(a ? x : "a", {
      ref: l,
      "data-sidebar": "menu-sub-button",
      "data-size": t,
      "data-active": r,
      className: i(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        t === "sm" && "text-xs",
        t === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        s,
      ),
      ...d,
    }),
);
Qe.displayName = "SidebarMenuSubButton";
function ea({ items: a }) {
  return o(Q, {
    children: [
      e(ee, { className: "text-neutral-300", children: "Platform" }),
      e(_, {
        children: a.map((t) =>
          e(
            k,
            {
              children: e(R, {
                asChild: !0,
                children: o("a", {
                  href: t.url,
                  className: "flex items-center gap-2",
                  children: [
                    t.icon && e(t.icon, {}),
                    e("span", { children: t.title }),
                  ],
                }),
              }),
            },
            t.title,
          ),
        ),
      }),
    ],
  });
}
function O({ className: a, ...t }) {
  return e(D.Root, {
    "data-slot": "avatar",
    className: i(
      "relative flex size-8 shrink-0 overflow-hidden rounded-full",
      a,
    ),
    ...t,
  });
}
function P({ className: a, ...t }) {
  return e(D.Image, {
    "data-slot": "avatar-image",
    className: i("aspect-square size-full", a),
    ...t,
  });
}
function L({ className: a, ...t }) {
  return e(D.Fallback, {
    "data-slot": "avatar-fallback",
    className: i(
      "bg-muted flex size-full items-center justify-center rounded-full",
      a,
    ),
    ...t,
  });
}
function aa({ user: a }) {
  const { isMobile: t } = S();
  return e(_, {
    children: e(k, {
      children: o(q, {
        children: [
          e(H, {
            asChild: !0,
            children: o(R, {
              size: "lg",
              className:
                "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
              children: [
                o(O, {
                  className: "h-8 w-8 rounded-lg",
                  children: [
                    e(P, { src: a.avatar, alt: a.name }),
                    e(L, { className: "rounded-lg", children: "CN" }),
                  ],
                }),
                o("div", {
                  className: "grid flex-1 text-left text-sm leading-tight",
                  children: [
                    e("span", {
                      className: "truncate font-semibold",
                      children: a.name,
                    }),
                    e("span", {
                      className: "truncate text-xs",
                      children: a.email,
                    }),
                  ],
                }),
                e(se, { className: "ml-auto size-4" }),
              ],
            }),
          }),
          o(Ce, {
            className:
              "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg",
            side: t ? "bottom" : "right",
            align: "end",
            sideOffset: 4,
            children: [
              e(Me, {
                className: "p-0 font-normal",
                children: o("div", {
                  className:
                    "flex items-center gap-2 px-1 py-1.5 text-left text-sm",
                  children: [
                    o(O, {
                      className: "h-8 w-8 rounded-lg",
                      children: [
                        e(P, { src: a.avatar, alt: a.name }),
                        e(L, { className: "rounded-lg", children: "CN" }),
                      ],
                    }),
                    o("div", {
                      className: "grid flex-1 text-left text-sm leading-tight",
                      children: [
                        e("span", {
                          className: "truncate font-semibold",
                          children: a.name,
                        }),
                        e("span", {
                          className: "truncate text-xs",
                          children: a.email,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              e(z, {}),
              e(E, {
                children: o(N, { children: [e(de, {}), "Upgrade to Pro"] }),
              }),
              e(z, {}),
              o(E, {
                children: [
                  o(N, { children: [e(le, {}), "Account"] }),
                  o(N, { children: [e(ce, {}), "Billing"] }),
                  o(N, { children: [e(ue, {}), "Notifications"] }),
                ],
              }),
              e(z, {}),
              o(N, { children: [e(me, {}), "Log out"] }),
            ],
          }),
        ],
      }),
    }),
  });
}
const ae = "/_build/assets/ChatGPT_Image_Mar_28_2025_11_31_52_PM-DZYhncqj.webp";
function ta({ teams: a }) {
  return e(_, {
    children: e(k, {
      children: e(q, {
        children: e(H, {
          asChild: !0,
          children: o(R, {
            size: "lg",
            className:
              "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-green-700",
            children: [
              e("div", {
                className:
                  "flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground",
                children: e("img", {
                  src: ae,
                  className: "w-full h-full rounded-md",
                }),
              }),
              o("div", {
                className: "grid flex-1 text-left text-sm leading-tight",
                children: [
                  e("span", {
                    className: "truncate font-semibold",
                    children: a[0].name,
                  }),
                  e("span", {
                    className: "truncate text-xs",
                    children: a[0].plan,
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    }),
  });
}
const B = {
  user: { name: "Lumon", email: "m@example.com", avatar: ae },
  teams: [
    { name: "Acme Inc", logo: be, plan: "Enterprise" },
    { name: "Acme Corp.", logo: fe, plan: "Startup" },
    { name: "Evil Corp.", logo: pe, plan: "Free" },
  ],
  navMain: [
    { title: "Playground", url: "#", icon: ge, isActive: !0 },
    { title: "Models", url: "#", icon: he },
    { title: "Documentation", url: "#", icon: xe },
    { title: "Settings", url: "#", icon: ve },
  ],
};
function ra({ ...a }) {
  return o($, {
    collapsible: "icon",
    ...a,
    children: [
      e(X, { children: e(ta, { teams: B.teams }) }),
      e(J, { children: e(ea, { items: B.navMain }) }),
      e(Z, { children: e(aa, { user: B.user }) }),
      e(V, {}),
    ],
  });
}
function ia({ ...a }) {
  return e("nav", {
    "aria-label": "breadcrumb",
    "data-slot": "breadcrumb",
    ...a,
  });
}
function na({ className: a, ...t }) {
  return e("ol", {
    "data-slot": "breadcrumb-list",
    className: i(
      "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
      a,
    ),
    ...t,
  });
}
function G({ className: a, ...t }) {
  return e("li", {
    "data-slot": "breadcrumb-item",
    className: i("inline-flex items-center gap-1.5", a),
    ...t,
  });
}
function oa({ asChild: a, className: t, ...r }) {
  return e(a ? x : "a", {
    "data-slot": "breadcrumb-link",
    className: i("hover:text-foreground transition-colors", t),
    ...r,
  });
}
function sa({ className: a, ...t }) {
  return e("span", {
    "data-slot": "breadcrumb-page",
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: i("text-foreground font-normal", a),
    ...t,
  });
}
function da({ children: a, className: t, ...r }) {
  return e("li", {
    "data-slot": "breadcrumb-separator",
    role: "presentation",
    "aria-hidden": "true",
    className: i("[&>svg]:size-3.5", t),
    ...r,
    children: a ?? e(we, {}),
  });
}
const wa = function () {
  return o(W, {
    children: [
      e(ra, {}),
      o(Y, {
        className: "flex flex-col h-screen overflow-hidden",
        children: [
          e("header", {
            className:
              "flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12",
            children: o("div", {
              className: "flex items-center gap-2 px-4",
              children: [
                e(U, { className: "-ml-1" }),
                e(j, { orientation: "vertical", className: "mr-2 h-4" }),
                e(ia, {
                  children: o(na, {
                    children: [
                      e(G, {
                        className: "hidden md:block",
                        children: e(oa, {
                          href: "#",
                          children: "Building Your Application",
                        }),
                      }),
                      e(da, { className: "hidden md:block" }),
                      e(G, { children: e(sa, { children: "Data Fetching" }) }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          e("div", { className: " px-6 py-8", children: e(ie, {}) }),
        ],
      }),
    ],
  });
};
export { wa as component };
