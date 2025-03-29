import { isRedirect as S, isNotFound as C } from "@tanstack/router-core";
import j from "tiny-invariant";
import {
  eventHandler as N,
  toWebRequest as b,
  getResponseStatus as I,
  getEvent as O,
} from "@tanstack/start-server-core";
import { startSerializer as u } from "@tanstack/start-client-core";
const D = {},
  q = N(L),
  d = D;
async function L(n) {
  const t = b(n);
  return await J({ request: t, event: n });
}
function A(n) {
  return n.replace(/^\/|\/$/g, "");
}
async function J({ request: n, event: t }) {
  const s = new AbortController(),
    i = s.signal,
    v = () => s.abort();
  t.node.req.on("close", v);
  const h = n.method,
    g = new URL(n.url, "http://localhost:3000"),
    E = new RegExp(`${A("/_server")}/([^/?#]+)`),
    y = g.pathname.match(E),
    o = y ? y[1] : null,
    c = Object.fromEntries(g.searchParams.entries()),
    w = "createServerFn" in c,
    T = "raw" in c;
  if (typeof o != "string")
    throw new Error("Invalid server action param for serverFnId: " + o);
  const m = d[o];
  if (!m)
    throw (
      (console.log("serverFnManifest", d),
      new Error("Server function info not found for " + o))
    );
  let l;
  if (((l = await m.importer()), !l))
    throw (
      (console.log("serverFnManifest", d),
      new Error("Server function module not resolved for " + o))
    );
  const a = l[m.functionName];
  if (!a)
    throw (
      (console.log("serverFnManifest", d),
      console.log("fnModule", l),
      new Error(
        `Server function module export not resolved for serverFn ID: ${o}`,
      ))
    );
  const M = ["multipart/form-data", "application/x-www-form-urlencoded"],
    f = await (async () => {
      try {
        let e = await (async () => {
          if (
            n.headers.get("Content-Type") &&
            M.some((r) => {
              var R;
              return (R = n.headers.get("Content-Type")) == null
                ? void 0
                : R.includes(r);
            })
          )
            return (
              j(
                h.toLowerCase() !== "get",
                "GET requests with FormData payloads are not supported",
              ),
              await a(await n.formData(), i)
            );
          if (h.toLowerCase() === "get") {
            let r = c;
            return w && (r = c.payload), (r = r && u.parse(r)), await a(r, i);
          }
          const p = await n.text(),
            F = u.parse(p);
          return w ? await a(F, i) : await a(...F, i);
        })();
        return e.result instanceof Response
          ? e.result
          : !w && ((e = e.result), e instanceof Response)
            ? e
            : S(e) || C(e)
              ? x(e)
              : new Response(e !== void 0 ? u.stringify(e) : void 0, {
                  status: I(O()),
                  headers: { "Content-Type": "application/json" },
                });
      } catch (e) {
        return e instanceof Response
          ? e
          : S(e) || C(e)
            ? x(e)
            : (console.info(),
              console.info("Server Fn Error!"),
              console.info(),
              console.error(e),
              console.info(),
              new Response(u.stringify(e), {
                status: 500,
                headers: { "Content-Type": "application/json" },
              }));
      }
    })();
  if ((t.node.req.removeListener("close", v), T)) return f;
  if (f.headers.get("Content-Type") === "application/json") {
    const p = await f.clone().text();
    p && JSON.stringify(JSON.parse(p));
  }
  return f;
}
function x(n) {
  const { headers: t, ...s } = n;
  return new Response(JSON.stringify(s), {
    status: 200,
    headers: { "Content-Type": "application/json", ...(t || {}) },
  });
}
export { q as default };
