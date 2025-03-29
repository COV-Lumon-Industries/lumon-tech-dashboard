import {
  QueryClient as P,
  QueryClientProvider as E,
} from "@tanstack/react-query";
import {
  RouterProvider as F,
  createRootRouteWithContext as W,
  Outlet as j,
  HeadContent as D,
  Scripts as O,
  createFileRoute as s,
  lazyRouteComponent as i,
  createRouter as U,
} from "@tanstack/react-router";
import { jsx as n, jsxs as h } from "react/jsx-runtime";
import l from "react";
import { useTheme as N } from "next-themes";
import { Toaster as k } from "sonner";
import { z as c } from "zod";
import z from "tiny-invariant";
import { PassThrough as H } from "node:stream";
import { isbot as b } from "isbot";
import m from "react-dom/server";
import {
  defineHandlerCallback as J,
  transformReadableStreamWithRouter as L,
  transformPipeableStreamWithRouter as B,
  createStartHandler as G,
} from "@tanstack/start-server-core";
const Q = () => ({
  routes: {
    __root__: {
      filePath: "__root.tsx",
      children: ["/_auth", "/_main"],
      preloads: [
        "/_build/assets/client-ub1Wy6z7.js",
        "/_build/assets/client-B6Fwjkna.js",
      ],
    },
    "/_auth": {
      filePath: "_auth.tsx",
      children: ["/_auth/login", "/_auth/signup"],
    },
    "/_main": {
      filePath: "_main.tsx",
      children: ["/_main/dashboard", "/_main/"],
    },
    "/_auth/login": { filePath: "_auth/login.tsx", parent: "/_auth" },
    "/_auth/signup": { filePath: "_auth/signup.tsx", parent: "/_auth" },
    "/_main/dashboard": {
      filePath: "_main/dashboard.tsx",
      parent: "/_main",
      children: ["/_main/dashboard/loans", "/_main/dashboard/"],
    },
    "/_main/": { filePath: "_main/index.tsx", parent: "/_main" },
    "/_main/dashboard/loans": {
      filePath: "_main/dashboard/loans.tsx",
      parent: "/_main/dashboard",
    },
    "/_main/dashboard/": {
      filePath: "_main/dashboard/index.tsx",
      parent: "/_main/dashboard",
    },
  },
});
function Y(t) {
  return globalThis.MANIFEST[t];
}
function K() {
  const t = Q(),
    e = (t.routes.__root__ = t.routes.__root__ || {});
  e.assets = e.assets || [];
  let a = "";
  const o = Y("client"),
    r = o.inputs[o.handler]?.output.path;
  return (
    r || z(r, "Could not find client entry in vinxi manifest"),
    e.assets.push({
      tag: "script",
      attrs: { type: "module", suppressHydrationWarning: !0, async: !0 },
      children: `${a}import("${r}")`,
    }),
    t
  );
}
function Z() {
  const t = K();
  return {
    ...t,
    routes: Object.fromEntries(
      Object.entries(t.routes).map(([e, a]) => {
        const { preloads: o, assets: r } = a;
        return [e, { preloads: o, assets: r }];
      }),
    ),
  };
}
function C(t) {
  return n(F, { router: t.router });
}
const q = J(async ({ request: t, router: e, responseHeaders: a }) => {
    if (typeof m.renderToReadableStream == "function") {
      const o = await m.renderToReadableStream(n(C, { router: e }), {
        signal: t.signal,
      });
      b(t.headers.get("User-Agent")) && (await o.allReady);
      const r = L(e, o);
      return new Response(r, { status: e.state.statusCode, headers: a });
    }
    if (typeof m.renderToPipeableStream == "function") {
      const o = new H();
      try {
        const d = m.renderToPipeableStream(n(C, { router: e }), {
          ...(b(t.headers.get("User-Agent"))
            ? {
                onAllReady() {
                  d.pipe(o);
                },
              }
            : {
                onShellReady() {
                  d.pipe(o);
                },
              }),
          onError: (u, I) => {
            console.error("Error in renderToPipeableStream:", u, I);
          },
        });
      } catch (d) {
        console.error("Error in renderToPipeableStream:", d);
      }
      const r = B(e, o);
      return new Response(r, { status: e.state.statusCode, headers: a });
    }
    throw new Error(
      "No renderToReadableStream or renderToPipeableStream found in react-dom/server. Ensure you are using a version of react-dom that supports streaming.",
    );
  }),
  $ = l.createContext(null),
  p = "lumon_auth_user",
  V = ({ children: t }) => {
    const [e, a] = l.useState(() => {
        if (typeof window > "u") return null;
        const u = localStorage.getItem(p);
        return u ? JSON.parse(u) : null;
      }),
      o = !!e;
    console.log(o);
    const r = l.useCallback(async () => {
        typeof window < "u" && localStorage.removeItem(p), a(null);
      }, []),
      d = l.useCallback(async (u) => {
        typeof window < "u" && localStorage.setItem(p, JSON.stringify(u)), a(u);
      }, []);
    return (
      l.useEffect(() => {
        e && typeof window < "u" && localStorage.setItem(p, JSON.stringify(e));
      }, [e]),
      n($.Provider, {
        value: { user: e, isAuthenticated: o, login: d, logout: r },
        children: t,
      })
    );
  };
function Ot() {
  const t = l.useContext($);
  if (!t) throw new Error("useAuth must be used within an AuthProvider");
  return t;
}
const X = "/_build/assets/app-BzPYWJrc.css",
  tt = ({ ...t }) => {
    const { theme: e = "system" } = N();
    return n(k, {
      theme: e,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
      },
      ...t,
    });
  },
  f = W()({
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Lumon" },
      ],
      links: [{ rel: "stylesheet", href: X }],
    }),
    component: et,
  });
function et() {
  const t = new P();
  return n(ot, {
    children: n(E, {
      client: t,
      children: h(V, { children: [n(j, {}), n(tt, {})] }),
    }),
  });
}
function ot({ children: t }) {
  return h("html", {
    children: [
      n("head", { children: n(D, {}) }),
      h("body", { children: [t, n(O, {})] }),
    ],
  });
}
const nt = () => import("./_main-Bpym5h4K.js"),
  S = s("/_main")({ component: i(nt, "component", () => S.ssr) }),
  rt = () => import("./_auth-DLzmU9Gd.js"),
  y = s("/_auth")({ component: i(rt, "component", () => y.ssr) }),
  at = () => import("./index-CJTS1ZbK.js"),
  x = s("/_main/")({ component: i(at, "component", () => x.ssr) }),
  st = () => import("./dashboard-D7TZ2uBY.js"),
  w = s("/_main/dashboard")({ component: i(st, "component", () => w.ssr) }),
  it = () => import("./signup-k2adHtpd.js"),
  v = s("/_auth/signup")({ component: i(it, "component", () => v.ssr) }),
  Ut = c.object({
    username: c
      .string()
      .min(3, "Username must be at least 3 characters long")
      .max(20, "Username must be at most 20 characters long")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores",
      ),
    email: c.string().email("Invalid email format"),
    password: c
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(100, "Password must be at most 100 characters long"),
  }),
  ut = () => import("./login-DG1dOCiZ.js"),
  M = s("/_auth/login")({ component: i(ut, "component", () => M.ssr) }),
  dt = () => import("./index-D9p1aCTt.js"),
  A = s("/_main/dashboard/")({ component: i(dt, "component", () => A.ssr) }),
  lt = () => import("./loans-CZtrwKED.js"),
  T = s("/_main/dashboard/loans")({
    component: i(lt, "component", () => T.ssr),
  }),
  _ = S.update({ id: "/_main", getParentRoute: () => f }),
  R = y.update({ id: "/_auth", getParentRoute: () => f }),
  ct = x.update({ id: "/", path: "/", getParentRoute: () => _ }),
  g = w.update({
    id: "/dashboard",
    path: "/dashboard",
    getParentRoute: () => _,
  }),
  mt = v.update({ id: "/signup", path: "/signup", getParentRoute: () => R }),
  pt = M.update({ id: "/login", path: "/login", getParentRoute: () => R }),
  ht = A.update({ id: "/", path: "/", getParentRoute: () => g }),
  ft = T.update({ id: "/loans", path: "/loans", getParentRoute: () => g }),
  _t = { AuthLoginRoute: pt, AuthSignupRoute: mt },
  Rt = R._addFileChildren(_t),
  gt = { MainDashboardLoansRoute: ft, MainDashboardIndexRoute: ht },
  bt = g._addFileChildren(gt),
  Ct = { MainDashboardRoute: bt, MainIndexRoute: ct },
  Pt = _._addFileChildren(Ct),
  $t = { AuthRoute: Rt, MainRoute: Pt },
  St = f._addFileChildren($t)._addFileTypes();
function yt() {
  const t = new P();
  return U({
    routeTree: St,
    context: { queryClient: t, auth: void 0 },
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
  });
}
const Nt = G({ createRouter: yt, getRouterManifest: Z })(q);
export { Ot as a, Nt as h, Ut as u };
