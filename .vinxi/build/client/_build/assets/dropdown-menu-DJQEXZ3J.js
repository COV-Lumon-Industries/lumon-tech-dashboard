import {
  r as c,
  j as g,
  n as Cn,
  E as yo,
  F as xo,
  R as de,
} from "./client-B6Fwjkna.js";
import {
  c as bo,
  b as Ie,
  a as Re,
  u as B,
  f as Rn,
} from "./input-CHU7cpM5.js";
/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Eo = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  Co = bo("check", Eo);
var Ro = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  F = Ro.reduce((e, t) => {
    const n = c.forwardRef((r, o) => {
      const { asChild: i, ...s } = r,
        a = i ? Ie : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        g.jsx(a, { ...s, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Sn(e, t) {
  e && Cn.flushSync(() => e.dispatchEvent(t));
}
var So = "Separator",
  en = "horizontal",
  Mo = ["horizontal", "vertical"],
  Mn = c.forwardRef((e, t) => {
    const { decorative: n, orientation: r = en, ...o } = e,
      i = Ao(r) ? r : en,
      a = n
        ? { role: "none" }
        : {
            "aria-orientation": i === "vertical" ? i : void 0,
            role: "separator",
          };
    return g.jsx(F.div, { "data-orientation": i, ...a, ...o, ref: t });
  });
Mn.displayName = So;
function Ao(e) {
  return Mo.includes(e);
}
var Po = Mn;
function Fc({
  className: e,
  orientation: t = "horizontal",
  decorative: n = !0,
  ...r
}) {
  return g.jsx(Po, {
    "data-slot": "separator-root",
    decorative: n,
    orientation: t,
    className: Re(
      "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
      e,
    ),
    ...r,
  });
}
function P(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e?.(o), n === !1 || !o.defaultPrevented)) return t?.(o);
  };
}
function Oo(e, t) {
  const n = c.createContext(t),
    r = (i) => {
      const { children: s, ...a } = i,
        d = c.useMemo(() => a, Object.values(a));
      return g.jsx(n.Provider, { value: d, children: s });
    };
  r.displayName = e + "Provider";
  function o(i) {
    const s = c.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Se(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = c.createContext(s),
      d = n.length;
    n = [...n, s];
    const u = (l) => {
      const { scope: m, children: v, ...h } = l,
        p = m?.[e]?.[d] || a,
        w = c.useMemo(() => h, Object.values(h));
      return g.jsx(p.Provider, { value: w, children: v });
    };
    u.displayName = i + "Provider";
    function f(l, m) {
      const v = m?.[e]?.[d] || a,
        h = c.useContext(v);
      if (h) return h;
      if (s !== void 0) return s;
      throw new Error(`\`${l}\` must be used within \`${i}\``);
    }
    return [u, f];
  }
  const o = () => {
    const i = n.map((s) => c.createContext(s));
    return function (a) {
      const d = a?.[e] || i;
      return c.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: d } }), [a, d]);
    };
  };
  return (o.scopeName = e), [r, Do(o, ...t)];
}
function Do(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: d, scopeName: u }) => {
        const l = d(i)[`__scope${u}`];
        return { ...a, ...l };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var fe = globalThis?.document ? c.useLayoutEffect : () => {},
  _o = yo.useId || (() => {}),
  Io = 0;
function xe(e) {
  const [t, n] = c.useState(_o());
  return (
    fe(() => {
      n((r) => r ?? String(Io++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
function V(e) {
  const t = c.useRef(e);
  return (
    c.useEffect(() => {
      t.current = e;
    }),
    c.useMemo(
      () =>
        (...n) =>
          t.current?.(...n),
      [],
    )
  );
}
function Pt({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = No({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    s = i ? e : r,
    a = V(n),
    d = c.useCallback(
      (u) => {
        if (i) {
          const l = typeof u == "function" ? u(e) : u;
          l !== e && a(l);
        } else o(u);
      },
      [i, e, o, a],
    );
  return [s, d];
}
function No({ defaultProp: e, onChange: t }) {
  const n = c.useState(e),
    [r] = n,
    o = c.useRef(r),
    i = V(t);
  return (
    c.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
function To(e, t = globalThis?.document) {
  const n = V(e);
  c.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var Fo = "DismissableLayer",
  bt = "dismissableLayer.update",
  Lo = "dismissableLayer.pointerDownOutside",
  ko = "dismissableLayer.focusOutside",
  tn,
  An = c.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Ot = c.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: a,
        ...d
      } = e,
      u = c.useContext(An),
      [f, l] = c.useState(null),
      m = f?.ownerDocument ?? globalThis?.document,
      [, v] = c.useState({}),
      h = B(t, (R) => l(R)),
      p = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      y = p.indexOf(w),
      x = f ? p.indexOf(f) : -1,
      E = u.layersWithOutsidePointerEventsDisabled.size > 0,
      b = x >= y,
      C = Wo((R) => {
        const M = R.target,
          I = [...u.branches].some((D) => D.contains(M));
        !b || I || (o?.(R), s?.(R), R.defaultPrevented || a?.());
      }, m),
      A = Bo((R) => {
        const M = R.target;
        [...u.branches].some((D) => D.contains(M)) ||
          (i?.(R), s?.(R), R.defaultPrevented || a?.());
      }, m);
    return (
      To((R) => {
        x === u.layers.size - 1 &&
          (r?.(R), !R.defaultPrevented && a && (R.preventDefault(), a()));
      }, m),
      c.useEffect(() => {
        if (f)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((tn = m.body.style.pointerEvents),
                (m.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(f)),
            u.layers.add(f),
            nn(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (m.body.style.pointerEvents = tn);
            }
          );
      }, [f, m, n, u]),
      c.useEffect(
        () => () => {
          f &&
            (u.layers.delete(f),
            u.layersWithOutsidePointerEventsDisabled.delete(f),
            nn());
        },
        [f, u],
      ),
      c.useEffect(() => {
        const R = () => v({});
        return (
          document.addEventListener(bt, R),
          () => document.removeEventListener(bt, R)
        );
      }, []),
      g.jsx(F.div, {
        ...d,
        ref: h,
        style: {
          pointerEvents: E ? (b ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: P(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: P(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: P(e.onPointerDownCapture, C.onPointerDownCapture),
      })
    );
  });
Ot.displayName = Fo;
var jo = "DismissableLayerBranch",
  $o = c.forwardRef((e, t) => {
    const n = c.useContext(An),
      r = c.useRef(null),
      o = B(t, r);
    return (
      c.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      g.jsx(F.div, { ...e, ref: o })
    );
  });
$o.displayName = jo;
function Wo(e, t = globalThis?.document) {
  const n = V(e),
    r = c.useRef(!1),
    o = c.useRef(() => {});
  return (
    c.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let d = function () {
              Pn(Lo, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = d),
                t.addEventListener("click", o.current, { once: !0 }))
              : d();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Bo(e, t = globalThis?.document) {
  const n = V(e),
    r = c.useRef(!1);
  return (
    c.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          Pn(ko, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function nn() {
  const e = new CustomEvent(bt);
  document.dispatchEvent(e);
}
function Pn(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Sn(o, i) : o.dispatchEvent(i);
}
var dt = "focusScope.autoFocusOnMount",
  ft = "focusScope.autoFocusOnUnmount",
  rn = { bubbles: !1, cancelable: !0 },
  Uo = "FocusScope",
  Dt = c.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...s
      } = e,
      [a, d] = c.useState(null),
      u = V(o),
      f = V(i),
      l = c.useRef(null),
      m = B(t, (p) => d(p)),
      v = c.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    c.useEffect(() => {
      if (r) {
        let p = function (E) {
            if (v.paused || !a) return;
            const b = E.target;
            a.contains(b) ? (l.current = b) : oe(l.current, { select: !0 });
          },
          w = function (E) {
            if (v.paused || !a) return;
            const b = E.relatedTarget;
            b !== null && (a.contains(b) || oe(l.current, { select: !0 }));
          },
          y = function (E) {
            if (document.activeElement === document.body)
              for (const C of E) C.removedNodes.length > 0 && oe(a);
          };
        document.addEventListener("focusin", p),
          document.addEventListener("focusout", w);
        const x = new MutationObserver(y);
        return (
          a && x.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", p),
              document.removeEventListener("focusout", w),
              x.disconnect();
          }
        );
      }
    }, [r, a, v.paused]),
      c.useEffect(() => {
        if (a) {
          sn.add(v);
          const p = document.activeElement;
          if (!a.contains(p)) {
            const y = new CustomEvent(dt, rn);
            a.addEventListener(dt, u),
              a.dispatchEvent(y),
              y.defaultPrevented ||
                (Go(Yo(On(a)), { select: !0 }),
                document.activeElement === p && oe(a));
          }
          return () => {
            a.removeEventListener(dt, u),
              setTimeout(() => {
                const y = new CustomEvent(ft, rn);
                a.addEventListener(ft, f),
                  a.dispatchEvent(y),
                  y.defaultPrevented || oe(p ?? document.body, { select: !0 }),
                  a.removeEventListener(ft, f),
                  sn.remove(v);
              }, 0);
          };
        }
      }, [a, u, f, v]);
    const h = c.useCallback(
      (p) => {
        if ((!n && !r) || v.paused) return;
        const w = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey,
          y = document.activeElement;
        if (w && y) {
          const x = p.currentTarget,
            [E, b] = Ko(x);
          E && b
            ? !p.shiftKey && y === b
              ? (p.preventDefault(), n && oe(E, { select: !0 }))
              : p.shiftKey &&
                y === E &&
                (p.preventDefault(), n && oe(b, { select: !0 }))
            : y === x && p.preventDefault();
        }
      },
      [n, r, v.paused],
    );
    return g.jsx(F.div, { tabIndex: -1, ...s, ref: m, onKeyDown: h });
  });
Dt.displayName = Uo;
function Go(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((oe(r, { select: t }), document.activeElement !== n)) return;
}
function Ko(e) {
  const t = On(e),
    n = on(t, e),
    r = on(t.reverse(), e);
  return [n, r];
}
function On(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function on(e, t) {
  for (const n of e) if (!Ho(n, { upTo: t })) return n;
}
function Ho(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function zo(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function oe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && zo(e) && t && e.select();
  }
}
var sn = Vo();
function Vo() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), (e = an(e, t)), e.unshift(t);
    },
    remove(t) {
      (e = an(e, t)), e[0]?.resume();
    },
  };
}
function an(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Yo(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Xo = "Portal",
  _t = c.forwardRef((e, t) => {
    const { container: n, ...r } = e,
      [o, i] = c.useState(!1);
    fe(() => i(!0), []);
    const s = n || (o && globalThis?.document?.body);
    return s ? xo.createPortal(g.jsx(F.div, { ...r, ref: t }), s) : null;
  });
_t.displayName = Xo;
function qo(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var ce = (e) => {
  const { present: t, children: n } = e,
    r = Zo(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n),
    i = B(r.ref, Qo(o));
  return typeof n == "function" || r.isPresent
    ? c.cloneElement(o, { ref: i })
    : null;
};
ce.displayName = "Presence";
function Zo(e) {
  const [t, n] = c.useState(),
    r = c.useRef({}),
    o = c.useRef(e),
    i = c.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, d] = qo(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    c.useEffect(() => {
      const u = Ue(r.current);
      i.current = a === "mounted" ? u : "none";
    }, [a]),
    fe(() => {
      const u = r.current,
        f = o.current;
      if (f !== e) {
        const m = i.current,
          v = Ue(u);
        e
          ? d("MOUNT")
          : v === "none" || u?.display === "none"
            ? d("UNMOUNT")
            : d(f && m !== v ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, d]),
    fe(() => {
      if (t) {
        let u;
        const f = t.ownerDocument.defaultView ?? window,
          l = (v) => {
            const p = Ue(r.current).includes(v.animationName);
            if (v.target === t && p && (d("ANIMATION_END"), !o.current)) {
              const w = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = f.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                }));
            }
          },
          m = (v) => {
            v.target === t && (i.current = Ue(r.current));
          };
        return (
          t.addEventListener("animationstart", m),
          t.addEventListener("animationcancel", l),
          t.addEventListener("animationend", l),
          () => {
            f.clearTimeout(u),
              t.removeEventListener("animationstart", m),
              t.removeEventListener("animationcancel", l),
              t.removeEventListener("animationend", l);
          }
        );
      } else d("ANIMATION_END");
    }, [t, d]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: c.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function Ue(e) {
  return e?.animationName || "none";
}
function Qo(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var pt = 0;
function Dn() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? cn()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? cn()),
      pt++,
      () => {
        pt === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          pt--;
      }
    );
  }, []);
}
function cn() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var Q = function () {
  return (
    (Q =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    Q.apply(this, arguments)
  );
};
function _n(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function Jo(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ye = "right-scroll-bar-position",
  Xe = "width-before-scroll-bar",
  ei = "with-scroll-bars-hidden",
  ti = "--removed-body-scroll-bar-size";
function mt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ni(e, t) {
  var n = c.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var ri = typeof window < "u" ? c.useLayoutEffect : c.useEffect,
  un = new WeakMap();
function oi(e, t) {
  var n = ni(null, function (r) {
    return e.forEach(function (o) {
      return mt(o, r);
    });
  });
  return (
    ri(
      function () {
        var r = un.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            s = n.current;
          o.forEach(function (a) {
            i.has(a) || mt(a, null);
          }),
            i.forEach(function (a) {
              o.has(a) || mt(a, s);
            });
        }
        un.set(n, e);
      },
      [e],
    ),
    n
  );
}
function ii(e) {
  return e;
}
function si(e, t) {
  t === void 0 && (t = ii);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (a) {
              return a !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(i);
        }
        n = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(i), (s = n);
        }
        var d = function () {
            var f = s;
            (s = []), f.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(d);
          };
        u(),
          (n = {
            push: function (f) {
              s.push(f), u();
            },
            filter: function (f) {
              return (s = s.filter(f)), n;
            },
          });
      },
    };
  return o;
}
function ai(e) {
  e === void 0 && (e = {});
  var t = si(null);
  return (t.options = Q({ async: !0, ssr: !1 }, e)), t;
}
var In = function (e) {
  var t = e.sideCar,
    n = _n(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return c.createElement(r, Q({}, n));
};
In.isSideCarExport = !0;
function ci(e, t) {
  return e.useMedium(t), In;
}
var Nn = ai(),
  vt = function () {},
  ot = c.forwardRef(function (e, t) {
    var n = c.useRef(null),
      r = c.useState({
        onScrollCapture: vt,
        onWheelCapture: vt,
        onTouchMoveCapture: vt,
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      a = e.children,
      d = e.className,
      u = e.removeScrollBar,
      f = e.enabled,
      l = e.shards,
      m = e.sideCar,
      v = e.noIsolation,
      h = e.inert,
      p = e.allowPinchZoom,
      w = e.as,
      y = w === void 0 ? "div" : w,
      x = e.gapMode,
      E = _n(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      b = m,
      C = oi([n, t]),
      A = Q(Q({}, E), o);
    return c.createElement(
      c.Fragment,
      null,
      f &&
        c.createElement(b, {
          sideCar: Nn,
          removeScrollBar: u,
          shards: l,
          noIsolation: v,
          inert: h,
          setCallbacks: i,
          allowPinchZoom: !!p,
          lockRef: n,
          gapMode: x,
        }),
      s
        ? c.cloneElement(c.Children.only(a), Q(Q({}, A), { ref: C }))
        : c.createElement(y, Q({}, A, { className: d, ref: C }), a),
    );
  });
ot.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
ot.classNames = { fullWidth: Xe, zeroRight: Ye };
var ui = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function li() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ui();
  return t && e.setAttribute("nonce", t), e;
}
function di(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function fi(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var pi = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = li()) && (di(t, n), fi(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  mi = function () {
    var e = pi();
    return function (t, n) {
      c.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  Tn = function () {
    var e = mi(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  vi = { left: 0, top: 0, right: 0, gap: 0 },
  ht = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  hi = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [ht(n), ht(r), ht(o)];
  },
  gi = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return vi;
    var t = hi(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  wi = Tn(),
  be = "data-scroll-locked",
  yi = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          ei,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          be,
          `] {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  i,
                  `px;
    padding-right: `,
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `,
                ),
            n === "padding" &&
              "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          Ye,
          ` {
    right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          Xe,
          ` {
    margin-right: `,
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(Ye, " .")
        .concat(
          Ye,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(Xe, " .")
        .concat(
          Xe,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body[`,
        )
        .concat(
          be,
          `] {
    `,
        )
        .concat(ti, ": ")
        .concat(
          a,
          `px;
  }
`,
        )
    );
  },
  ln = function () {
    var e = parseInt(document.body.getAttribute(be) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  xi = function () {
    c.useEffect(function () {
      return (
        document.body.setAttribute(be, (ln() + 1).toString()),
        function () {
          var e = ln() - 1;
          e <= 0
            ? document.body.removeAttribute(be)
            : document.body.setAttribute(be, e.toString());
        }
      );
    }, []);
  },
  bi = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    xi();
    var i = c.useMemo(
      function () {
        return gi(o);
      },
      [o],
    );
    return c.createElement(wi, { styles: yi(i, !t, o, n ? "" : "!important") });
  },
  Et = !1;
if (typeof window < "u")
  try {
    var Ge = Object.defineProperty({}, "passive", {
      get: function () {
        return (Et = !0), !0;
      },
    });
    window.addEventListener("test", Ge, Ge),
      window.removeEventListener("test", Ge, Ge);
  } catch {
    Et = !1;
  }
var ge = Et ? { passive: !1 } : !1,
  Ei = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Fn = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !Ei(e) && n[t] === "visible")
    );
  },
  Ci = function (e) {
    return Fn(e, "overflowY");
  },
  Ri = function (e) {
    return Fn(e, "overflowX");
  },
  dn = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = Ln(e, r);
      if (o) {
        var i = kn(e, r),
          s = i[1],
          a = i[2];
        if (s > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  Si = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  Mi = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Ln = function (e, t) {
    return e === "v" ? Ci(t) : Ri(t);
  },
  kn = function (e, t) {
    return e === "v" ? Si(t) : Mi(t);
  },
  Ai = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  Pi = function (e, t, n, r, o) {
    var i = Ai(e, window.getComputedStyle(t).direction),
      s = i * r,
      a = n.target,
      d = t.contains(a),
      u = !1,
      f = s > 0,
      l = 0,
      m = 0;
    do {
      var v = kn(e, a),
        h = v[0],
        p = v[1],
        w = v[2],
        y = p - w - i * h;
      (h || y) && Ln(e, a) && ((l += y), (m += h)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!d && a !== document.body) || (d && (t.contains(a) || t === a)));
    return ((f && Math.abs(l) < 1) || (!f && Math.abs(m) < 1)) && (u = !0), u;
  },
  Ke = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  fn = function (e) {
    return [e.deltaX, e.deltaY];
  },
  pn = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Oi = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Di = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  _i = 0,
  we = [];
function Ii(e) {
  var t = c.useRef([]),
    n = c.useRef([0, 0]),
    r = c.useRef(),
    o = c.useState(_i++)[0],
    i = c.useState(Tn)[0],
    s = c.useRef(e);
  c.useEffect(
    function () {
      s.current = e;
    },
    [e],
  ),
    c.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var p = Jo([e.lockRef.current], (e.shards || []).map(pn), !0).filter(
            Boolean,
          );
          return (
            p.forEach(function (w) {
              return w.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                p.forEach(function (w) {
                  return w.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var a = c.useCallback(function (p, w) {
      if (
        ("touches" in p && p.touches.length === 2) ||
        (p.type === "wheel" && p.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var y = Ke(p),
        x = n.current,
        E = "deltaX" in p ? p.deltaX : x[0] - y[0],
        b = "deltaY" in p ? p.deltaY : x[1] - y[1],
        C,
        A = p.target,
        R = Math.abs(E) > Math.abs(b) ? "h" : "v";
      if ("touches" in p && R === "h" && A.type === "range") return !1;
      var M = dn(R, A);
      if (!M) return !0;
      if ((M ? (C = R) : ((C = R === "v" ? "h" : "v"), (M = dn(R, A))), !M))
        return !1;
      if (
        (!r.current && "changedTouches" in p && (E || b) && (r.current = C), !C)
      )
        return !0;
      var I = r.current || C;
      return Pi(I, w, p, I === "h" ? E : b);
    }, []),
    d = c.useCallback(function (p) {
      var w = p;
      if (!(!we.length || we[we.length - 1] !== i)) {
        var y = "deltaY" in w ? fn(w) : Ke(w),
          x = t.current.filter(function (C) {
            return (
              C.name === w.type &&
              (C.target === w.target || w.target === C.shadowParent) &&
              Oi(C.delta, y)
            );
          })[0];
        if (x && x.should) {
          w.cancelable && w.preventDefault();
          return;
        }
        if (!x) {
          var E = (s.current.shards || [])
              .map(pn)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(w.target);
              }),
            b = E.length > 0 ? a(w, E[0]) : !s.current.noIsolation;
          b && w.cancelable && w.preventDefault();
        }
      }
    }, []),
    u = c.useCallback(function (p, w, y, x) {
      var E = { name: p, delta: w, target: y, should: x, shadowParent: Ni(y) };
      t.current.push(E),
        setTimeout(function () {
          t.current = t.current.filter(function (b) {
            return b !== E;
          });
        }, 1);
    }, []),
    f = c.useCallback(function (p) {
      (n.current = Ke(p)), (r.current = void 0);
    }, []),
    l = c.useCallback(function (p) {
      u(p.type, fn(p), p.target, a(p, e.lockRef.current));
    }, []),
    m = c.useCallback(function (p) {
      u(p.type, Ke(p), p.target, a(p, e.lockRef.current));
    }, []);
  c.useEffect(function () {
    return (
      we.push(i),
      e.setCallbacks({
        onScrollCapture: l,
        onWheelCapture: l,
        onTouchMoveCapture: m,
      }),
      document.addEventListener("wheel", d, ge),
      document.addEventListener("touchmove", d, ge),
      document.addEventListener("touchstart", f, ge),
      function () {
        (we = we.filter(function (p) {
          return p !== i;
        })),
          document.removeEventListener("wheel", d, ge),
          document.removeEventListener("touchmove", d, ge),
          document.removeEventListener("touchstart", f, ge);
      }
    );
  }, []);
  var v = e.removeScrollBar,
    h = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    h ? c.createElement(i, { styles: Di(o) }) : null,
    v ? c.createElement(bi, { gapMode: e.gapMode }) : null,
  );
}
function Ni(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const Ti = ci(Nn, Ii);
var It = c.forwardRef(function (e, t) {
  return c.createElement(ot, Q({}, e, { ref: t, sideCar: Ti }));
});
It.classNames = ot.classNames;
var Fi = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  ye = new WeakMap(),
  He = new WeakMap(),
  ze = {},
  gt = 0,
  jn = function (e) {
    return e && (e.host || jn(e.parentNode));
  },
  Li = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = jn(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  ki = function (e, t, n, r) {
    var o = Li(t, Array.isArray(e) ? e : [e]);
    ze[n] || (ze[n] = new WeakMap());
    var i = ze[n],
      s = [],
      a = new Set(),
      d = new Set(o),
      u = function (l) {
        !l || a.has(l) || (a.add(l), u(l.parentNode));
      };
    o.forEach(u);
    var f = function (l) {
      !l ||
        d.has(l) ||
        Array.prototype.forEach.call(l.children, function (m) {
          if (a.has(m)) f(m);
          else
            try {
              var v = m.getAttribute(r),
                h = v !== null && v !== "false",
                p = (ye.get(m) || 0) + 1,
                w = (i.get(m) || 0) + 1;
              ye.set(m, p),
                i.set(m, w),
                s.push(m),
                p === 1 && h && He.set(m, !0),
                w === 1 && m.setAttribute(n, "true"),
                h || m.setAttribute(r, "true");
            } catch (y) {
              console.error("aria-hidden: cannot operate on ", m, y);
            }
        });
    };
    return (
      f(t),
      a.clear(),
      gt++,
      function () {
        s.forEach(function (l) {
          var m = ye.get(l) - 1,
            v = i.get(l) - 1;
          ye.set(l, m),
            i.set(l, v),
            m || (He.has(l) || l.removeAttribute(r), He.delete(l)),
            v || l.removeAttribute(n);
        }),
          gt--,
          gt ||
            ((ye = new WeakMap()),
            (ye = new WeakMap()),
            (He = new WeakMap()),
            (ze = {}));
      }
    );
  },
  $n = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = Fi(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        ki(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Nt = "Dialog",
  [Wn, Lc] = Se(Nt),
  [ji, q] = Wn(Nt),
  Bn = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: s = !0,
      } = e,
      a = c.useRef(null),
      d = c.useRef(null),
      [u = !1, f] = Pt({ prop: r, defaultProp: o, onChange: i });
    return g.jsx(ji, {
      scope: t,
      triggerRef: a,
      contentRef: d,
      contentId: xe(),
      titleId: xe(),
      descriptionId: xe(),
      open: u,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((l) => !l), [f]),
      modal: s,
      children: n,
    });
  };
Bn.displayName = Nt;
var Un = "DialogTrigger",
  Gn = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = q(Un, n),
      i = B(t, o.triggerRef);
    return g.jsx(F.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": Lt(o.open),
      ...r,
      ref: i,
      onClick: P(e.onClick, o.onOpenToggle),
    });
  });
Gn.displayName = Un;
var Tt = "DialogPortal",
  [$i, Kn] = Wn(Tt, { forceMount: void 0 }),
  Hn = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      i = q(Tt, t);
    return g.jsx($i, {
      scope: t,
      forceMount: n,
      children: c.Children.map(r, (s) =>
        g.jsx(ce, {
          present: n || i.open,
          children: g.jsx(_t, { asChild: !0, container: o, children: s }),
        }),
      ),
    });
  };
Hn.displayName = Tt;
var Ze = "DialogOverlay",
  zn = c.forwardRef((e, t) => {
    const n = Kn(Ze, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = q(Ze, e.__scopeDialog);
    return i.modal
      ? g.jsx(ce, {
          present: r || i.open,
          children: g.jsx(Wi, { ...o, ref: t }),
        })
      : null;
  });
zn.displayName = Ze;
var Wi = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = q(Ze, n);
    return g.jsx(It, {
      as: Ie,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: g.jsx(F.div, {
        "data-state": Lt(o.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  pe = "DialogContent",
  Vn = c.forwardRef((e, t) => {
    const n = Kn(pe, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = q(pe, e.__scopeDialog);
    return g.jsx(ce, {
      present: r || i.open,
      children: i.modal
        ? g.jsx(Bi, { ...o, ref: t })
        : g.jsx(Ui, { ...o, ref: t }),
    });
  });
Vn.displayName = pe;
var Bi = c.forwardRef((e, t) => {
    const n = q(pe, e.__scopeDialog),
      r = c.useRef(null),
      o = B(t, n.contentRef, r);
    return (
      c.useEffect(() => {
        const i = r.current;
        if (i) return $n(i);
      }, []),
      g.jsx(Yn, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: P(e.onCloseAutoFocus, (i) => {
          i.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: P(e.onPointerDownOutside, (i) => {
          const s = i.detail.originalEvent,
            a = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || a) && i.preventDefault();
        }),
        onFocusOutside: P(e.onFocusOutside, (i) => i.preventDefault()),
      })
    );
  }),
  Ui = c.forwardRef((e, t) => {
    const n = q(pe, e.__scopeDialog),
      r = c.useRef(!1),
      o = c.useRef(!1);
    return g.jsx(Yn, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (i) => {
        e.onCloseAutoFocus?.(i),
          i.defaultPrevented ||
            (r.current || n.triggerRef.current?.focus(), i.preventDefault()),
          (r.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (i) => {
        e.onInteractOutside?.(i),
          i.defaultPrevented ||
            ((r.current = !0),
            i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const s = i.target;
        n.triggerRef.current?.contains(s) && i.preventDefault(),
          i.detail.originalEvent.type === "focusin" &&
            o.current &&
            i.preventDefault();
      },
    });
  }),
  Yn = c.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        ...s
      } = e,
      a = q(pe, n),
      d = c.useRef(null),
      u = B(t, d);
    return (
      Dn(),
      g.jsxs(g.Fragment, {
        children: [
          g.jsx(Dt, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: g.jsx(Ot, {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Lt(a.open),
              ...s,
              ref: u,
              onDismiss: () => a.onOpenChange(!1),
            }),
          }),
          g.jsxs(g.Fragment, {
            children: [
              g.jsx(Gi, { titleId: a.titleId }),
              g.jsx(Hi, { contentRef: d, descriptionId: a.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Ft = "DialogTitle",
  Xn = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = q(Ft, n);
    return g.jsx(F.h2, { id: o.titleId, ...r, ref: t });
  });
Xn.displayName = Ft;
var qn = "DialogDescription",
  Zn = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = q(qn, n);
    return g.jsx(F.p, { id: o.descriptionId, ...r, ref: t });
  });
Zn.displayName = qn;
var Qn = "DialogClose",
  Jn = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = q(Qn, n);
    return g.jsx(F.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: P(e.onClick, () => o.onOpenChange(!1)),
    });
  });
Jn.displayName = Qn;
function Lt(e) {
  return e ? "open" : "closed";
}
var er = "DialogTitleWarning",
  [kc, tr] = Oo(er, { contentName: pe, titleName: Ft, docsSlug: "dialog" }),
  Gi = ({ titleId: e }) => {
    const t = tr(er),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      c.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  Ki = "DialogDescriptionWarning",
  Hi = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${tr(Ki).contentName}}.`;
    return (
      c.useEffect(() => {
        const o = e.current?.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  jc = Bn,
  $c = Gn,
  Wc = Hn,
  Bc = zn,
  Uc = Vn,
  Gc = Xn,
  Kc = Zn,
  Hc = Jn;
const zi = ["top", "right", "bottom", "left"],
  ie = Math.min,
  K = Math.max,
  Qe = Math.round,
  Ve = Math.floor,
  J = (e) => ({ x: e, y: e }),
  Vi = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Yi = { start: "end", end: "start" };
function Ct(e, t, n) {
  return K(e, ie(t, n));
}
function ne(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function re(e) {
  return e.split("-")[0];
}
function Me(e) {
  return e.split("-")[1];
}
function kt(e) {
  return e === "x" ? "y" : "x";
}
function jt(e) {
  return e === "y" ? "height" : "width";
}
function se(e) {
  return ["top", "bottom"].includes(re(e)) ? "y" : "x";
}
function $t(e) {
  return kt(se(e));
}
function Xi(e, t, n) {
  n === void 0 && (n = !1);
  const r = Me(e),
    o = $t(e),
    i = jt(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return t.reference[i] > t.floating[i] && (s = Je(s)), [s, Je(s)];
}
function qi(e) {
  const t = Je(e);
  return [Rt(e), t, Rt(t)];
}
function Rt(e) {
  return e.replace(/start|end/g, (t) => Yi[t]);
}
function Zi(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function Qi(e, t, n, r) {
  const o = Me(e);
  let i = Zi(re(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Rt)))), i
  );
}
function Je(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Vi[t]);
}
function Ji(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function nr(e) {
  return typeof e != "number"
    ? Ji(e)
    : { top: e, right: e, bottom: e, left: e };
}
function et(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function mn(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = se(t),
    s = $t(t),
    a = jt(s),
    d = re(t),
    u = i === "y",
    f = r.x + r.width / 2 - o.width / 2,
    l = r.y + r.height / 2 - o.height / 2,
    m = r[a] / 2 - o[a] / 2;
  let v;
  switch (d) {
    case "top":
      v = { x: f, y: r.y - o.height };
      break;
    case "bottom":
      v = { x: f, y: r.y + r.height };
      break;
    case "right":
      v = { x: r.x + r.width, y: l };
      break;
    case "left":
      v = { x: r.x - o.width, y: l };
      break;
    default:
      v = { x: r.x, y: r.y };
  }
  switch (Me(t)) {
    case "start":
      v[s] -= m * (n && u ? -1 : 1);
      break;
    case "end":
      v[s] += m * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const es = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    a = i.filter(Boolean),
    d = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: f, y: l } = mn(u, r, d),
    m = r,
    v = {},
    h = 0;
  for (let p = 0; p < a.length; p++) {
    const { name: w, fn: y } = a[p],
      {
        x,
        y: E,
        data: b,
        reset: C,
      } = await y({
        x: f,
        y: l,
        initialPlacement: r,
        placement: m,
        strategy: o,
        middlewareData: v,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (f = x ?? f),
      (l = E ?? l),
      (v = { ...v, [w]: { ...v[w], ...b } }),
      C &&
        h <= 50 &&
        (h++,
        typeof C == "object" &&
          (C.placement && (m = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : C.rects),
          ({ x: f, y: l } = mn(u, m, d))),
        (p = -1));
  }
  return { x: f, y: l, placement: m, strategy: o, middlewareData: v };
};
async function Ne(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: a, strategy: d } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: f = "viewport",
      elementContext: l = "floating",
      altBoundary: m = !1,
      padding: v = 0,
    } = ne(t, e),
    h = nr(v),
    w = a[m ? (l === "floating" ? "reference" : "floating") : l],
    y = et(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: f,
        strategy: d,
      }),
    ),
    x =
      l === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    E = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    b = (await (i.isElement == null ? void 0 : i.isElement(E)))
      ? (await (i.getScale == null ? void 0 : i.getScale(E))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = et(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: x,
            offsetParent: E,
            strategy: d,
          })
        : x,
    );
  return {
    top: (y.top - C.top + h.top) / b.y,
    bottom: (C.bottom - y.bottom + h.bottom) / b.y,
    left: (y.left - C.left + h.left) / b.x,
    right: (C.right - y.right + h.right) / b.x,
  };
}
const ts = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: a,
          middlewareData: d,
        } = t,
        { element: u, padding: f = 0 } = ne(e, t) || {};
      if (u == null) return {};
      const l = nr(f),
        m = { x: n, y: r },
        v = $t(o),
        h = jt(v),
        p = await s.getDimensions(u),
        w = v === "y",
        y = w ? "top" : "left",
        x = w ? "bottom" : "right",
        E = w ? "clientHeight" : "clientWidth",
        b = i.reference[h] + i.reference[v] - m[v] - i.floating[h],
        C = m[v] - i.reference[v],
        A = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let R = A ? A[E] : 0;
      (!R || !(await (s.isElement == null ? void 0 : s.isElement(A)))) &&
        (R = a.floating[E] || i.floating[h]);
      const M = b / 2 - C / 2,
        I = R / 2 - p[h] / 2 - 1,
        D = ie(l[y], I),
        L = ie(l[x], I),
        k = D,
        T = R - p[h] - L,
        N = R / 2 - p[h] / 2 + M,
        U = Ct(k, N, T),
        _ =
          !d.arrow &&
          Me(o) != null &&
          N !== U &&
          i.reference[h] / 2 - (N < k ? D : L) - p[h] / 2 < 0,
        j = _ ? (N < k ? N - k : N - T) : 0;
      return {
        [v]: m[v] + j,
        data: {
          [v]: U,
          centerOffset: N - U - j,
          ...(_ && { alignmentOffset: j }),
        },
        reset: _,
      };
    },
  }),
  ns = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: a,
              platform: d,
              elements: u,
            } = t,
            {
              mainAxis: f = !0,
              crossAxis: l = !0,
              fallbackPlacements: m,
              fallbackStrategy: v = "bestFit",
              fallbackAxisSideDirection: h = "none",
              flipAlignment: p = !0,
              ...w
            } = ne(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const y = re(o),
            x = se(a),
            E = re(a) === a,
            b = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)),
            C = m || (E || !p ? [Je(a)] : qi(a)),
            A = h !== "none";
          !m && A && C.push(...Qi(a, p, h, b));
          const R = [a, ...C],
            M = await Ne(t, w),
            I = [];
          let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((f && I.push(M[y]), l)) {
            const N = Xi(o, s, b);
            I.push(M[N[0]], M[N[1]]);
          }
          if (
            ((D = [...D, { placement: o, overflows: I }]),
            !I.every((N) => N <= 0))
          ) {
            var L, k;
            const N = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1,
              U = R[N];
            if (U)
              return {
                data: { index: N, overflows: D },
                reset: { placement: U },
              };
            let _ =
              (k = D.filter((j) => j.overflows[0] <= 0).sort(
                (j, O) => j.overflows[1] - O.overflows[1],
              )[0]) == null
                ? void 0
                : k.placement;
            if (!_)
              switch (v) {
                case "bestFit": {
                  var T;
                  const j =
                    (T = D.filter((O) => {
                      if (A) {
                        const S = se(O.placement);
                        return S === x || S === "y";
                      }
                      return !0;
                    })
                      .map((O) => [
                        O.placement,
                        O.overflows
                          .filter((S) => S > 0)
                          .reduce((S, W) => S + W, 0),
                      ])
                      .sort((O, S) => O[1] - S[1])[0]) == null
                      ? void 0
                      : T[0];
                  j && (_ = j);
                  break;
                }
                case "initialPlacement":
                  _ = a;
                  break;
              }
            if (o !== _) return { reset: { placement: _ } };
          }
          return {};
        },
      }
    );
  };
function vn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function hn(e) {
  return zi.some((t) => e[t] >= 0);
}
const rs = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = ne(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await Ne(t, { ...o, elementContext: "reference" }),
              s = vn(i, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: hn(s) },
            };
          }
          case "escaped": {
            const i = await Ne(t, { ...o, altBoundary: !0 }),
              s = vn(i, n.floating);
            return { data: { escapedOffsets: s, escaped: hn(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function os(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = re(n),
    a = Me(n),
    d = se(n) === "y",
    u = ["left", "top"].includes(s) ? -1 : 1,
    f = i && d ? -1 : 1,
    l = ne(t, e);
  let {
    mainAxis: m,
    crossAxis: v,
    alignmentAxis: h,
  } = typeof l == "number"
    ? { mainAxis: l, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: l.mainAxis || 0,
        crossAxis: l.crossAxis || 0,
        alignmentAxis: l.alignmentAxis,
      };
  return (
    a && typeof h == "number" && (v = a === "end" ? h * -1 : h),
    d ? { x: v * f, y: m * u } : { x: m * u, y: v * f }
  );
}
const is = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: a } = t,
            d = await os(t, e);
          return s === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + d.x, y: i + d.y, data: { ...d, placement: s } };
        },
      }
    );
  },
  ss = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (w) => {
                  let { x: y, y: x } = w;
                  return { x: y, y: x };
                },
              },
              ...d
            } = ne(e, t),
            u = { x: n, y: r },
            f = await Ne(t, d),
            l = se(re(o)),
            m = kt(l);
          let v = u[m],
            h = u[l];
          if (i) {
            const w = m === "y" ? "top" : "left",
              y = m === "y" ? "bottom" : "right",
              x = v + f[w],
              E = v - f[y];
            v = Ct(x, v, E);
          }
          if (s) {
            const w = l === "y" ? "top" : "left",
              y = l === "y" ? "bottom" : "right",
              x = h + f[w],
              E = h - f[y];
            h = Ct(x, h, E);
          }
          const p = a.fn({ ...t, [m]: v, [l]: h });
          return {
            ...p,
            data: { x: p.x - n, y: p.y - r, enabled: { [m]: i, [l]: s } },
          };
        },
      }
    );
  },
  as = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: a = 0, mainAxis: d = !0, crossAxis: u = !0 } = ne(e, t),
            f = { x: n, y: r },
            l = se(o),
            m = kt(l);
          let v = f[m],
            h = f[l];
          const p = ne(a, t),
            w =
              typeof p == "number"
                ? { mainAxis: p, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...p };
          if (d) {
            const E = m === "y" ? "height" : "width",
              b = i.reference[m] - i.floating[E] + w.mainAxis,
              C = i.reference[m] + i.reference[E] - w.mainAxis;
            v < b ? (v = b) : v > C && (v = C);
          }
          if (u) {
            var y, x;
            const E = m === "y" ? "width" : "height",
              b = ["top", "left"].includes(re(o)),
              C =
                i.reference[l] -
                i.floating[E] +
                ((b && ((y = s.offset) == null ? void 0 : y[l])) || 0) +
                (b ? 0 : w.crossAxis),
              A =
                i.reference[l] +
                i.reference[E] +
                (b ? 0 : ((x = s.offset) == null ? void 0 : x[l]) || 0) -
                (b ? w.crossAxis : 0);
            h < C ? (h = C) : h > A && (h = A);
          }
          return { [m]: v, [l]: h };
        },
      }
    );
  },
  cs = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: a } = t,
            { apply: d = () => {}, ...u } = ne(e, t),
            f = await Ne(t, u),
            l = re(o),
            m = Me(o),
            v = se(o) === "y",
            { width: h, height: p } = i.floating;
          let w, y;
          l === "top" || l === "bottom"
            ? ((w = l),
              (y =
                m ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((y = l), (w = m === "end" ? "top" : "bottom"));
          const x = p - f.top - f.bottom,
            E = h - f.left - f.right,
            b = ie(p - f[w], x),
            C = ie(h - f[y], E),
            A = !t.middlewareData.shift;
          let R = b,
            M = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (M = E),
            (r = t.middlewareData.shift) != null && r.enabled.y && (R = x),
            A && !m)
          ) {
            const D = K(f.left, 0),
              L = K(f.right, 0),
              k = K(f.top, 0),
              T = K(f.bottom, 0);
            v
              ? (M = h - 2 * (D !== 0 || L !== 0 ? D + L : K(f.left, f.right)))
              : (R = p - 2 * (k !== 0 || T !== 0 ? k + T : K(f.top, f.bottom)));
          }
          await d({ ...t, availableWidth: M, availableHeight: R });
          const I = await s.getDimensions(a.floating);
          return h !== I.width || p !== I.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function it() {
  return typeof window < "u";
}
function Ae(e) {
  return rr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function H(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function te(e) {
  var t;
  return (t = (rr(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function rr(e) {
  return it() ? e instanceof Node || e instanceof H(e).Node : !1;
}
function Y(e) {
  return it() ? e instanceof Element || e instanceof H(e).Element : !1;
}
function ee(e) {
  return it() ? e instanceof HTMLElement || e instanceof H(e).HTMLElement : !1;
}
function gn(e) {
  return !it() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof H(e).ShadowRoot;
}
function ke(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = X(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function us(e) {
  return ["table", "td", "th"].includes(Ae(e));
}
function st(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Wt(e) {
  const t = Bt(),
    n = Y(e) ? X(e) : e;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((r) =>
      n[r] ? n[r] !== "none" : !1,
    ) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (r) => (n.willChange || "").includes(r),
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r),
    )
  );
}
function ls(e) {
  let t = ae(e);
  for (; ee(t) && !Ce(t); ) {
    if (Wt(t)) return t;
    if (st(t)) return null;
    t = ae(t);
  }
  return null;
}
function Bt() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ce(e) {
  return ["html", "body", "#document"].includes(Ae(e));
}
function X(e) {
  return H(e).getComputedStyle(e);
}
function at(e) {
  return Y(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function ae(e) {
  if (Ae(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (gn(e) && e.host) || te(e);
  return gn(t) ? t.host : t;
}
function or(e) {
  const t = ae(e);
  return Ce(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : ee(t) && ke(t)
      ? t
      : or(t);
}
function Te(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = or(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = H(o);
  if (i) {
    const a = St(s);
    return t.concat(
      s,
      s.visualViewport || [],
      ke(o) ? o : [],
      a && n ? Te(a) : [],
    );
  }
  return t.concat(o, Te(o, [], n));
}
function St(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ir(e) {
  const t = X(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = ee(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    a = Qe(n) !== i || Qe(r) !== s;
  return a && ((n = i), (r = s)), { width: n, height: r, $: a };
}
function Ut(e) {
  return Y(e) ? e : e.contextElement;
}
function Ee(e) {
  const t = Ut(e);
  if (!ee(t)) return J(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = ir(t);
  let s = (i ? Qe(n.width) : n.width) / r,
    a = (i ? Qe(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  );
}
const ds = J(0);
function sr(e) {
  const t = H(e);
  return !Bt() || !t.visualViewport
    ? ds
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function fs(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== H(e)) ? !1 : t;
}
function me(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = Ut(e);
  let s = J(1);
  t && (r ? Y(r) && (s = Ee(r)) : (s = Ee(e)));
  const a = fs(i, n, r) ? sr(i) : J(0);
  let d = (o.left + a.x) / s.x,
    u = (o.top + a.y) / s.y,
    f = o.width / s.x,
    l = o.height / s.y;
  if (i) {
    const m = H(i),
      v = r && Y(r) ? H(r) : r;
    let h = m,
      p = St(h);
    for (; p && r && v !== h; ) {
      const w = Ee(p),
        y = p.getBoundingClientRect(),
        x = X(p),
        E = y.left + (p.clientLeft + parseFloat(x.paddingLeft)) * w.x,
        b = y.top + (p.clientTop + parseFloat(x.paddingTop)) * w.y;
      (d *= w.x),
        (u *= w.y),
        (f *= w.x),
        (l *= w.y),
        (d += E),
        (u += b),
        (h = H(p)),
        (p = St(h));
    }
  }
  return et({ width: f, height: l, x: d, y: u });
}
function Gt(e, t) {
  const n = at(e).scrollLeft;
  return t ? t.left + n : me(te(e)).left + n;
}
function ar(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : Gt(e, r)),
    i = r.top + t.scrollTop;
  return { x: o, y: i };
}
function ps(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = te(r),
    a = t ? st(t.floating) : !1;
  if (r === s || (a && i)) return n;
  let d = { scrollLeft: 0, scrollTop: 0 },
    u = J(1);
  const f = J(0),
    l = ee(r);
  if (
    (l || (!l && !i)) &&
    ((Ae(r) !== "body" || ke(s)) && (d = at(r)), ee(r))
  ) {
    const v = me(r);
    (u = Ee(r)), (f.x = v.x + r.clientLeft), (f.y = v.y + r.clientTop);
  }
  const m = s && !l && !i ? ar(s, d, !0) : J(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - d.scrollLeft * u.x + f.x + m.x,
    y: n.y * u.y - d.scrollTop * u.y + f.y + m.y,
  };
}
function ms(e) {
  return Array.from(e.getClientRects());
}
function vs(e) {
  const t = te(e),
    n = at(e),
    r = e.ownerDocument.body,
    o = K(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = K(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Gt(e);
  const a = -n.scrollTop;
  return (
    X(r).direction === "rtl" && (s += K(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: a }
  );
}
function hs(e, t) {
  const n = H(e),
    r = te(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    d = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const u = Bt();
    (!u || (u && t === "fixed")) && ((a = o.offsetLeft), (d = o.offsetTop));
  }
  return { width: i, height: s, x: a, y: d };
}
function gs(e, t) {
  const n = me(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = ee(e) ? Ee(e) : J(1),
    s = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    d = o * i.x,
    u = r * i.y;
  return { width: s, height: a, x: d, y: u };
}
function wn(e, t, n) {
  let r;
  if (t === "viewport") r = hs(e, n);
  else if (t === "document") r = vs(te(e));
  else if (Y(t)) r = gs(t, n);
  else {
    const o = sr(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return et(r);
}
function cr(e, t) {
  const n = ae(e);
  return n === t || !Y(n) || Ce(n) ? !1 : X(n).position === "fixed" || cr(n, t);
}
function ws(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Te(e, [], !1).filter((a) => Y(a) && Ae(a) !== "body"),
    o = null;
  const i = X(e).position === "fixed";
  let s = i ? ae(e) : e;
  for (; Y(s) && !Ce(s); ) {
    const a = X(s),
      d = Wt(s);
    !d && a.position === "fixed" && (o = null),
      (
        i
          ? !d && !o
          : (!d &&
              a.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (ke(s) && !d && cr(e, s))
      )
        ? (r = r.filter((f) => f !== s))
        : (o = a),
      (s = ae(s));
  }
  return t.set(e, r), r;
}
function ys(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? st(t)
          ? []
          : ws(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = s[0],
    d = s.reduce(
      (u, f) => {
        const l = wn(t, f, o);
        return (
          (u.top = K(l.top, u.top)),
          (u.right = ie(l.right, u.right)),
          (u.bottom = ie(l.bottom, u.bottom)),
          (u.left = K(l.left, u.left)),
          u
        );
      },
      wn(t, a, o),
    );
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top,
  };
}
function xs(e) {
  const { width: t, height: n } = ir(e);
  return { width: t, height: n };
}
function bs(e, t, n) {
  const r = ee(t),
    o = te(t),
    i = n === "fixed",
    s = me(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const d = J(0);
  if (r || (!r && !i))
    if (((Ae(t) !== "body" || ke(o)) && (a = at(t)), r)) {
      const m = me(t, !0, i, t);
      (d.x = m.x + t.clientLeft), (d.y = m.y + t.clientTop);
    } else o && (d.x = Gt(o));
  const u = o && !r && !i ? ar(o, a) : J(0),
    f = s.left + a.scrollLeft - d.x - u.x,
    l = s.top + a.scrollTop - d.y - u.y;
  return { x: f, y: l, width: s.width, height: s.height };
}
function wt(e) {
  return X(e).position === "static";
}
function yn(e, t) {
  if (!ee(e) || X(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return te(e) === n && (n = n.ownerDocument.body), n;
}
function ur(e, t) {
  const n = H(e);
  if (st(e)) return n;
  if (!ee(e)) {
    let o = ae(e);
    for (; o && !Ce(o); ) {
      if (Y(o) && !wt(o)) return o;
      o = ae(o);
    }
    return n;
  }
  let r = yn(e, t);
  for (; r && us(r) && wt(r); ) r = yn(r, t);
  return r && Ce(r) && wt(r) && !Wt(r) ? n : r || ls(e) || n;
}
const Es = async function (e) {
  const t = this.getOffsetParent || ur,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: bs(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Cs(e) {
  return X(e).direction === "rtl";
}
const Rs = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ps,
  getDocumentElement: te,
  getClippingRect: ys,
  getOffsetParent: ur,
  getElementRects: Es,
  getClientRects: ms,
  getDimensions: xs,
  getScale: Ee,
  isElement: Y,
  isRTL: Cs,
};
function lr(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function Ss(e, t) {
  let n = null,
    r;
  const o = te(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function s(a, d) {
    a === void 0 && (a = !1), d === void 0 && (d = 1), i();
    const u = e.getBoundingClientRect(),
      { left: f, top: l, width: m, height: v } = u;
    if ((a || t(), !m || !v)) return;
    const h = Ve(l),
      p = Ve(o.clientWidth - (f + m)),
      w = Ve(o.clientHeight - (l + v)),
      y = Ve(f),
      E = {
        rootMargin: -h + "px " + -p + "px " + -w + "px " + -y + "px",
        threshold: K(0, ie(1, d)) || 1,
      };
    let b = !0;
    function C(A) {
      const R = A[0].intersectionRatio;
      if (R !== d) {
        if (!b) return s();
        R
          ? s(!1, R)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      R === 1 && !lr(u, e.getBoundingClientRect()) && s(), (b = !1);
    }
    try {
      n = new IntersectionObserver(C, { ...E, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, E);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Ms(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: d = !1,
    } = r,
    u = Ut(e),
    f = o || i ? [...(u ? Te(u) : []), ...Te(t)] : [];
  f.forEach((y) => {
    o && y.addEventListener("scroll", n, { passive: !0 }),
      i && y.addEventListener("resize", n);
  });
  const l = u && a ? Ss(u, n) : null;
  let m = -1,
    v = null;
  s &&
    ((v = new ResizeObserver((y) => {
      let [x] = y;
      x &&
        x.target === u &&
        v &&
        (v.unobserve(t),
        cancelAnimationFrame(m),
        (m = requestAnimationFrame(() => {
          var E;
          (E = v) == null || E.observe(t);
        }))),
        n();
    })),
    u && !d && v.observe(u),
    v.observe(t));
  let h,
    p = d ? me(e) : null;
  d && w();
  function w() {
    const y = me(e);
    p && !lr(p, y) && n(), (p = y), (h = requestAnimationFrame(w));
  }
  return (
    n(),
    () => {
      var y;
      f.forEach((x) => {
        o && x.removeEventListener("scroll", n),
          i && x.removeEventListener("resize", n);
      }),
        l?.(),
        (y = v) == null || y.disconnect(),
        (v = null),
        d && cancelAnimationFrame(h);
    }
  );
}
const As = is,
  Ps = ss,
  Os = ns,
  Ds = cs,
  _s = rs,
  xn = ts,
  Is = as,
  Ns = (e, t, n) => {
    const r = new Map(),
      o = { platform: Rs, ...n },
      i = { ...o.platform, _c: r };
    return es(e, t, { ...o, platform: i });
  };
var qe = typeof document < "u" ? c.useLayoutEffect : c.useEffect;
function tt(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!tt(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !tt(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function dr(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function bn(e, t) {
  const n = dr(e);
  return Math.round(t * n) / n;
}
function yt(e) {
  const t = c.useRef(e);
  return (
    qe(() => {
      t.current = e;
    }),
    t
  );
}
function Ts(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: a = !0,
      whileElementsMounted: d,
      open: u,
    } = e,
    [f, l] = c.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [m, v] = c.useState(r);
  tt(m, r) || v(r);
  const [h, p] = c.useState(null),
    [w, y] = c.useState(null),
    x = c.useCallback((O) => {
      O !== A.current && ((A.current = O), p(O));
    }, []),
    E = c.useCallback((O) => {
      O !== R.current && ((R.current = O), y(O));
    }, []),
    b = i || h,
    C = s || w,
    A = c.useRef(null),
    R = c.useRef(null),
    M = c.useRef(f),
    I = d != null,
    D = yt(d),
    L = yt(o),
    k = yt(u),
    T = c.useCallback(() => {
      if (!A.current || !R.current) return;
      const O = { placement: t, strategy: n, middleware: m };
      L.current && (O.platform = L.current),
        Ns(A.current, R.current, O).then((S) => {
          const W = { ...S, isPositioned: k.current !== !1 };
          N.current &&
            !tt(M.current, W) &&
            ((M.current = W),
            Cn.flushSync(() => {
              l(W);
            }));
        });
    }, [m, t, n, L, k]);
  qe(() => {
    u === !1 &&
      M.current.isPositioned &&
      ((M.current.isPositioned = !1), l((O) => ({ ...O, isPositioned: !1 })));
  }, [u]);
  const N = c.useRef(!1);
  qe(
    () => (
      (N.current = !0),
      () => {
        N.current = !1;
      }
    ),
    [],
  ),
    qe(() => {
      if ((b && (A.current = b), C && (R.current = C), b && C)) {
        if (D.current) return D.current(b, C, T);
        T();
      }
    }, [b, C, T, D, I]);
  const U = c.useMemo(
      () => ({ reference: A, floating: R, setReference: x, setFloating: E }),
      [x, E],
    ),
    _ = c.useMemo(() => ({ reference: b, floating: C }), [b, C]),
    j = c.useMemo(() => {
      const O = { position: n, left: 0, top: 0 };
      if (!_.floating) return O;
      const S = bn(_.floating, f.x),
        W = bn(_.floating, f.y);
      return a
        ? {
            ...O,
            transform: "translate(" + S + "px, " + W + "px)",
            ...(dr(_.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: S, top: W };
    }, [n, a, _.floating, f.x, f.y]);
  return c.useMemo(
    () => ({ ...f, update: T, refs: U, elements: _, floatingStyles: j }),
    [f, T, U, _, j],
  );
}
const Fs = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? xn({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? xn({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  },
  Ls = (e, t) => ({ ...As(e), options: [e, t] }),
  ks = (e, t) => ({ ...Ps(e), options: [e, t] }),
  js = (e, t) => ({ ...Is(e), options: [e, t] }),
  $s = (e, t) => ({ ...Os(e), options: [e, t] }),
  Ws = (e, t) => ({ ...Ds(e), options: [e, t] }),
  Bs = (e, t) => ({ ..._s(e), options: [e, t] }),
  Us = (e, t) => ({ ...Fs(e), options: [e, t] });
var Gs = "Arrow",
  fr = c.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return g.jsx(F.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : g.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
fr.displayName = Gs;
var Ks = fr;
function Hs(e) {
  const [t, n] = c.useState(void 0);
  return (
    fe(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, a;
          if ("borderBoxSize" in i) {
            const d = i.borderBoxSize,
              u = Array.isArray(d) ? d[0] : d;
            (s = u.inlineSize), (a = u.blockSize);
          } else (s = e.offsetWidth), (a = e.offsetHeight);
          n({ width: s, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var Kt = "Popper",
  [pr, mr] = Se(Kt),
  [zs, vr] = pr(Kt),
  hr = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = c.useState(null);
    return g.jsx(zs, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
hr.displayName = Kt;
var gr = "PopperAnchor",
  wr = c.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = vr(gr, n),
      s = c.useRef(null),
      a = B(t, s);
    return (
      c.useEffect(() => {
        i.onAnchorChange(r?.current || s.current);
      }),
      r ? null : g.jsx(F.div, { ...o, ref: a })
    );
  });
wr.displayName = gr;
var Ht = "PopperContent",
  [Vs, Ys] = pr(Ht),
  yr = c.forwardRef((e, t) => {
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: a = 0,
        avoidCollisions: d = !0,
        collisionBoundary: u = [],
        collisionPadding: f = 0,
        sticky: l = "partial",
        hideWhenDetached: m = !1,
        updatePositionStrategy: v = "optimized",
        onPlaced: h,
        ...p
      } = e,
      w = vr(Ht, n),
      [y, x] = c.useState(null),
      E = B(t, ($) => x($)),
      [b, C] = c.useState(null),
      A = Hs(b),
      R = A?.width ?? 0,
      M = A?.height ?? 0,
      I = r + (i !== "center" ? "-" + i : ""),
      D =
        typeof f == "number"
          ? f
          : { top: 0, right: 0, bottom: 0, left: 0, ...f },
      L = Array.isArray(u) ? u : [u],
      k = L.length > 0,
      T = { padding: D, boundary: L.filter(qs), altBoundary: k },
      {
        refs: N,
        floatingStyles: U,
        placement: _,
        isPositioned: j,
        middlewareData: O,
      } = Ts({
        strategy: "fixed",
        placement: I,
        whileElementsMounted: (...$) =>
          Ms(...$, { animationFrame: v === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          Ls({ mainAxis: o + M, alignmentAxis: s }),
          d &&
            ks({
              mainAxis: !0,
              crossAxis: !1,
              limiter: l === "partial" ? js() : void 0,
              ...T,
            }),
          d && $s({ ...T }),
          Ws({
            ...T,
            apply: ({
              elements: $,
              rects: De,
              availableWidth: vo,
              availableHeight: ho,
            }) => {
              const { width: go, height: wo } = De.reference,
                Be = $.floating.style;
              Be.setProperty("--radix-popper-available-width", `${vo}px`),
                Be.setProperty("--radix-popper-available-height", `${ho}px`),
                Be.setProperty("--radix-popper-anchor-width", `${go}px`),
                Be.setProperty("--radix-popper-anchor-height", `${wo}px`);
            },
          }),
          b && Us({ element: b, padding: a }),
          Zs({ arrowWidth: R, arrowHeight: M }),
          m && Bs({ strategy: "referenceHidden", ...T }),
        ],
      }),
      [S, W] = Er(_),
      Z = V(h);
    fe(() => {
      j && Z?.();
    }, [j, Z]);
    const ue = O.arrow?.x,
      Pe = O.arrow?.y,
      Oe = O.arrow?.centerOffset !== 0,
      [We, le] = c.useState();
    return (
      fe(() => {
        y && le(window.getComputedStyle(y).zIndex);
      }, [y]),
      g.jsx("div", {
        ref: N.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...U,
          transform: j ? U.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: We,
          "--radix-popper-transform-origin": [
            O.transformOrigin?.x,
            O.transformOrigin?.y,
          ].join(" "),
          ...(O.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: g.jsx(Vs, {
          scope: n,
          placedSide: S,
          onArrowChange: C,
          arrowX: ue,
          arrowY: Pe,
          shouldHideArrow: Oe,
          children: g.jsx(F.div, {
            "data-side": S,
            "data-align": W,
            ...p,
            ref: E,
            style: { ...p.style, animation: j ? void 0 : "none" },
          }),
        }),
      })
    );
  });
yr.displayName = Ht;
var xr = "PopperArrow",
  Xs = { top: "bottom", right: "left", bottom: "top", left: "right" },
  br = c.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = Ys(xr, r),
      s = Xs[i.placedSide];
    return g.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: g.jsx(Ks, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
br.displayName = xr;
function qs(e) {
  return e !== null;
}
var Zs = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t,
      s = o.arrow?.centerOffset !== 0,
      a = s ? 0 : e.arrowWidth,
      d = s ? 0 : e.arrowHeight,
      [u, f] = Er(n),
      l = { start: "0%", center: "50%", end: "100%" }[f],
      m = (o.arrow?.x ?? 0) + a / 2,
      v = (o.arrow?.y ?? 0) + d / 2;
    let h = "",
      p = "";
    return (
      u === "bottom"
        ? ((h = s ? l : `${m}px`), (p = `${-d}px`))
        : u === "top"
          ? ((h = s ? l : `${m}px`), (p = `${r.floating.height + d}px`))
          : u === "right"
            ? ((h = `${-d}px`), (p = s ? l : `${v}px`))
            : u === "left" &&
              ((h = `${r.floating.width + d}px`), (p = s ? l : `${v}px`)),
      { data: { x: h, y: p } }
    );
  },
});
function Er(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Qs = hr,
  Js = wr,
  ea = yr,
  ta = br,
  na = "VisuallyHidden",
  Cr = c.forwardRef((e, t) =>
    g.jsx(F.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    }),
  );
Cr.displayName = na;
var zc = Cr;
function Rr(e) {
  const t = e + "CollectionProvider",
    [n, r] = Se(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (v) => {
      const { scope: h, children: p } = v,
        w = de.useRef(null),
        y = de.useRef(new Map()).current;
      return g.jsx(o, { scope: h, itemMap: y, collectionRef: w, children: p });
    };
  s.displayName = t;
  const a = e + "CollectionSlot",
    d = de.forwardRef((v, h) => {
      const { scope: p, children: w } = v,
        y = i(a, p),
        x = B(h, y.collectionRef);
      return g.jsx(Ie, { ref: x, children: w });
    });
  d.displayName = a;
  const u = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    l = de.forwardRef((v, h) => {
      const { scope: p, children: w, ...y } = v,
        x = de.useRef(null),
        E = B(h, x),
        b = i(u, p);
      return (
        de.useEffect(
          () => (
            b.itemMap.set(x, { ref: x, ...y }), () => void b.itemMap.delete(x)
          ),
        ),
        g.jsx(Ie, { [f]: "", ref: E, children: w })
      );
    });
  l.displayName = u;
  function m(v) {
    const h = i(e + "CollectionConsumer", v);
    return de.useCallback(() => {
      const w = h.collectionRef.current;
      if (!w) return [];
      const y = Array.from(w.querySelectorAll(`[${f}]`));
      return Array.from(h.itemMap.values()).sort(
        (b, C) => y.indexOf(b.ref.current) - y.indexOf(C.ref.current),
      );
    }, [h.collectionRef, h.itemMap]);
  }
  return [{ Provider: s, Slot: d, ItemSlot: l }, m, r];
}
var ra = c.createContext(void 0);
function Sr(e) {
  const t = c.useContext(ra);
  return e || t || "ltr";
}
var xt = "rovingFocusGroup.onEntryFocus",
  oa = { bubbles: !1, cancelable: !0 },
  ct = "RovingFocusGroup",
  [Mt, Mr, ia] = Rr(ct),
  [sa, Ar] = Se(ct, [ia]),
  [aa, ca] = sa(ct),
  Pr = c.forwardRef((e, t) =>
    g.jsx(Mt.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: g.jsx(Mt.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: g.jsx(ua, { ...e, ref: t }),
      }),
    }),
  );
Pr.displayName = ct;
var ua = c.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: i,
        currentTabStopId: s,
        defaultCurrentTabStopId: a,
        onCurrentTabStopIdChange: d,
        onEntryFocus: u,
        preventScrollOnEntryFocus: f = !1,
        ...l
      } = e,
      m = c.useRef(null),
      v = B(t, m),
      h = Sr(i),
      [p = null, w] = Pt({ prop: s, defaultProp: a, onChange: d }),
      [y, x] = c.useState(!1),
      E = V(u),
      b = Mr(n),
      C = c.useRef(!1),
      [A, R] = c.useState(0);
    return (
      c.useEffect(() => {
        const M = m.current;
        if (M)
          return M.addEventListener(xt, E), () => M.removeEventListener(xt, E);
      }, [E]),
      g.jsx(aa, {
        scope: n,
        orientation: r,
        dir: h,
        loop: o,
        currentTabStopId: p,
        onItemFocus: c.useCallback((M) => w(M), [w]),
        onItemShiftTab: c.useCallback(() => x(!0), []),
        onFocusableItemAdd: c.useCallback(() => R((M) => M + 1), []),
        onFocusableItemRemove: c.useCallback(() => R((M) => M - 1), []),
        children: g.jsx(F.div, {
          tabIndex: y || A === 0 ? -1 : 0,
          "data-orientation": r,
          ...l,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: P(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: P(e.onFocus, (M) => {
            const I = !C.current;
            if (M.target === M.currentTarget && I && !y) {
              const D = new CustomEvent(xt, oa);
              if ((M.currentTarget.dispatchEvent(D), !D.defaultPrevented)) {
                const L = b().filter((_) => _.focusable),
                  k = L.find((_) => _.active),
                  T = L.find((_) => _.id === p),
                  U = [k, T, ...L].filter(Boolean).map((_) => _.ref.current);
                _r(U, f);
              }
            }
            C.current = !1;
          }),
          onBlur: P(e.onBlur, () => x(!1)),
        }),
      })
    );
  }),
  Or = "RovingFocusGroupItem",
  Dr = c.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: o = !1,
        tabStopId: i,
        ...s
      } = e,
      a = xe(),
      d = i || a,
      u = ca(Or, n),
      f = u.currentTabStopId === d,
      l = Mr(n),
      { onFocusableItemAdd: m, onFocusableItemRemove: v } = u;
    return (
      c.useEffect(() => {
        if (r) return m(), () => v();
      }, [r, m, v]),
      g.jsx(Mt.ItemSlot, {
        scope: n,
        id: d,
        focusable: r,
        active: o,
        children: g.jsx(F.span, {
          tabIndex: f ? 0 : -1,
          "data-orientation": u.orientation,
          ...s,
          ref: t,
          onMouseDown: P(e.onMouseDown, (h) => {
            r ? u.onItemFocus(d) : h.preventDefault();
          }),
          onFocus: P(e.onFocus, () => u.onItemFocus(d)),
          onKeyDown: P(e.onKeyDown, (h) => {
            if (h.key === "Tab" && h.shiftKey) {
              u.onItemShiftTab();
              return;
            }
            if (h.target !== h.currentTarget) return;
            const p = fa(h, u.orientation, u.dir);
            if (p !== void 0) {
              if (h.metaKey || h.ctrlKey || h.altKey || h.shiftKey) return;
              h.preventDefault();
              let y = l()
                .filter((x) => x.focusable)
                .map((x) => x.ref.current);
              if (p === "last") y.reverse();
              else if (p === "prev" || p === "next") {
                p === "prev" && y.reverse();
                const x = y.indexOf(h.currentTarget);
                y = u.loop ? pa(y, x + 1) : y.slice(x + 1);
              }
              setTimeout(() => _r(y));
            }
          }),
        }),
      })
    );
  });
Dr.displayName = Or;
var la = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function da(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
      ? "ArrowRight"
      : e === "ArrowRight"
        ? "ArrowLeft"
        : e;
}
function fa(e, t, n) {
  const r = da(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return la[r];
}
function _r(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function pa(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var ma = Pr,
  va = Dr,
  At = ["Enter", " "],
  ha = ["ArrowDown", "PageUp", "Home"],
  Ir = ["ArrowUp", "PageDown", "End"],
  ga = [...ha, ...Ir],
  wa = { ltr: [...At, "ArrowRight"], rtl: [...At, "ArrowLeft"] },
  ya = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  je = "Menu",
  [Fe, xa, ba] = Rr(je),
  [ve, Nr] = Se(je, [ba, mr, Ar]),
  ut = mr(),
  Tr = Ar(),
  [Ea, he] = ve(je),
  [Ca, $e] = ve(je),
  Fr = (e) => {
    const {
        __scopeMenu: t,
        open: n = !1,
        children: r,
        dir: o,
        onOpenChange: i,
        modal: s = !0,
      } = e,
      a = ut(t),
      [d, u] = c.useState(null),
      f = c.useRef(!1),
      l = V(i),
      m = Sr(o);
    return (
      c.useEffect(() => {
        const v = () => {
            (f.current = !0),
              document.addEventListener("pointerdown", h, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener("pointermove", h, {
                capture: !0,
                once: !0,
              });
          },
          h = () => (f.current = !1);
        return (
          document.addEventListener("keydown", v, { capture: !0 }),
          () => {
            document.removeEventListener("keydown", v, { capture: !0 }),
              document.removeEventListener("pointerdown", h, { capture: !0 }),
              document.removeEventListener("pointermove", h, { capture: !0 });
          }
        );
      }, []),
      g.jsx(Qs, {
        ...a,
        children: g.jsx(Ea, {
          scope: t,
          open: n,
          onOpenChange: l,
          content: d,
          onContentChange: u,
          children: g.jsx(Ca, {
            scope: t,
            onClose: c.useCallback(() => l(!1), [l]),
            isUsingKeyboardRef: f,
            dir: m,
            modal: s,
            children: r,
          }),
        }),
      })
    );
  };
Fr.displayName = je;
var Ra = "MenuAnchor",
  zt = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = ut(n);
    return g.jsx(Js, { ...o, ...r, ref: t });
  });
zt.displayName = Ra;
var Vt = "MenuPortal",
  [Sa, Lr] = ve(Vt, { forceMount: void 0 }),
  kr = (e) => {
    const { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
      i = he(Vt, t);
    return g.jsx(Sa, {
      scope: t,
      forceMount: n,
      children: g.jsx(ce, {
        present: n || i.open,
        children: g.jsx(_t, { asChild: !0, container: o, children: r }),
      }),
    });
  };
kr.displayName = Vt;
var z = "MenuContent",
  [Ma, Yt] = ve(z),
  jr = c.forwardRef((e, t) => {
    const n = Lr(z, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      i = he(z, e.__scopeMenu),
      s = $e(z, e.__scopeMenu);
    return g.jsx(Fe.Provider, {
      scope: e.__scopeMenu,
      children: g.jsx(ce, {
        present: r || i.open,
        children: g.jsx(Fe.Slot, {
          scope: e.__scopeMenu,
          children: s.modal
            ? g.jsx(Aa, { ...o, ref: t })
            : g.jsx(Pa, { ...o, ref: t }),
        }),
      }),
    });
  }),
  Aa = c.forwardRef((e, t) => {
    const n = he(z, e.__scopeMenu),
      r = c.useRef(null),
      o = B(t, r);
    return (
      c.useEffect(() => {
        const i = r.current;
        if (i) return $n(i);
      }, []),
      g.jsx(Xt, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: P(e.onFocusOutside, (i) => i.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => n.onOpenChange(!1),
      })
    );
  }),
  Pa = c.forwardRef((e, t) => {
    const n = he(z, e.__scopeMenu);
    return g.jsx(Xt, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1),
    });
  }),
  Xt = c.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: r = !1,
        trapFocus: o,
        onOpenAutoFocus: i,
        onCloseAutoFocus: s,
        disableOutsidePointerEvents: a,
        onEntryFocus: d,
        onEscapeKeyDown: u,
        onPointerDownOutside: f,
        onFocusOutside: l,
        onInteractOutside: m,
        onDismiss: v,
        disableOutsideScroll: h,
        ...p
      } = e,
      w = he(z, n),
      y = $e(z, n),
      x = ut(n),
      E = Tr(n),
      b = xa(n),
      [C, A] = c.useState(null),
      R = c.useRef(null),
      M = B(t, R, w.onContentChange),
      I = c.useRef(0),
      D = c.useRef(""),
      L = c.useRef(0),
      k = c.useRef(null),
      T = c.useRef("right"),
      N = c.useRef(0),
      U = h ? It : c.Fragment,
      _ = h ? { as: Ie, allowPinchZoom: !0 } : void 0,
      j = (S) => {
        const W = D.current + S,
          Z = b().filter(($) => !$.disabled),
          ue = document.activeElement,
          Pe = Z.find(($) => $.ref.current === ue)?.textValue,
          Oe = Z.map(($) => $.textValue),
          We = Wa(Oe, W, Pe),
          le = Z.find(($) => $.textValue === We)?.ref.current;
        (function $(De) {
          (D.current = De),
            window.clearTimeout(I.current),
            De !== "" && (I.current = window.setTimeout(() => $(""), 1e3));
        })(W),
          le && setTimeout(() => le.focus());
      };
    c.useEffect(() => () => window.clearTimeout(I.current), []), Dn();
    const O = c.useCallback(
      (S) => T.current === k.current?.side && Ua(S, k.current?.area),
      [],
    );
    return g.jsx(Ma, {
      scope: n,
      searchRef: D,
      onItemEnter: c.useCallback(
        (S) => {
          O(S) && S.preventDefault();
        },
        [O],
      ),
      onItemLeave: c.useCallback(
        (S) => {
          O(S) || (R.current?.focus(), A(null));
        },
        [O],
      ),
      onTriggerLeave: c.useCallback(
        (S) => {
          O(S) && S.preventDefault();
        },
        [O],
      ),
      pointerGraceTimerRef: L,
      onPointerGraceIntentChange: c.useCallback((S) => {
        k.current = S;
      }, []),
      children: g.jsx(U, {
        ..._,
        children: g.jsx(Dt, {
          asChild: !0,
          trapped: o,
          onMountAutoFocus: P(i, (S) => {
            S.preventDefault(), R.current?.focus({ preventScroll: !0 });
          }),
          onUnmountAutoFocus: s,
          children: g.jsx(Ot, {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onEscapeKeyDown: u,
            onPointerDownOutside: f,
            onFocusOutside: l,
            onInteractOutside: m,
            onDismiss: v,
            children: g.jsx(ma, {
              asChild: !0,
              ...E,
              dir: y.dir,
              orientation: "vertical",
              loop: r,
              currentTabStopId: C,
              onCurrentTabStopIdChange: A,
              onEntryFocus: P(d, (S) => {
                y.isUsingKeyboardRef.current || S.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: g.jsx(ea, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": eo(w.open),
                "data-radix-menu-content": "",
                dir: y.dir,
                ...x,
                ...p,
                ref: M,
                style: { outline: "none", ...p.style },
                onKeyDown: P(p.onKeyDown, (S) => {
                  const Z =
                      S.target.closest("[data-radix-menu-content]") ===
                      S.currentTarget,
                    ue = S.ctrlKey || S.altKey || S.metaKey,
                    Pe = S.key.length === 1;
                  Z &&
                    (S.key === "Tab" && S.preventDefault(),
                    !ue && Pe && j(S.key));
                  const Oe = R.current;
                  if (S.target !== Oe || !ga.includes(S.key)) return;
                  S.preventDefault();
                  const le = b()
                    .filter(($) => !$.disabled)
                    .map(($) => $.ref.current);
                  Ir.includes(S.key) && le.reverse(), ja(le);
                }),
                onBlur: P(e.onBlur, (S) => {
                  S.currentTarget.contains(S.target) ||
                    (window.clearTimeout(I.current), (D.current = ""));
                }),
                onPointerMove: P(
                  e.onPointerMove,
                  Le((S) => {
                    const W = S.target,
                      Z = N.current !== S.clientX;
                    if (S.currentTarget.contains(W) && Z) {
                      const ue = S.clientX > N.current ? "right" : "left";
                      (T.current = ue), (N.current = S.clientX);
                    }
                  }),
                ),
              }),
            }),
          }),
        }),
      }),
    });
  });
jr.displayName = z;
var Oa = "MenuGroup",
  qt = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return g.jsx(F.div, { role: "group", ...r, ref: t });
  });
qt.displayName = Oa;
var Da = "MenuLabel",
  $r = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return g.jsx(F.div, { ...r, ref: t });
  });
$r.displayName = Da;
var nt = "MenuItem",
  En = "menu.itemSelect",
  lt = c.forwardRef((e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e,
      i = c.useRef(null),
      s = $e(nt, e.__scopeMenu),
      a = Yt(nt, e.__scopeMenu),
      d = B(t, i),
      u = c.useRef(!1),
      f = () => {
        const l = i.current;
        if (!n && l) {
          const m = new CustomEvent(En, { bubbles: !0, cancelable: !0 });
          l.addEventListener(En, (v) => r?.(v), { once: !0 }),
            Sn(l, m),
            m.defaultPrevented ? (u.current = !1) : s.onClose();
        }
      };
    return g.jsx(Wr, {
      ...o,
      ref: d,
      disabled: n,
      onClick: P(e.onClick, f),
      onPointerDown: (l) => {
        e.onPointerDown?.(l), (u.current = !0);
      },
      onPointerUp: P(e.onPointerUp, (l) => {
        u.current || l.currentTarget?.click();
      }),
      onKeyDown: P(e.onKeyDown, (l) => {
        const m = a.searchRef.current !== "";
        n ||
          (m && l.key === " ") ||
          (At.includes(l.key) && (l.currentTarget.click(), l.preventDefault()));
      }),
    });
  });
lt.displayName = nt;
var Wr = c.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e,
      s = Yt(nt, n),
      a = Tr(n),
      d = c.useRef(null),
      u = B(t, d),
      [f, l] = c.useState(!1),
      [m, v] = c.useState("");
    return (
      c.useEffect(() => {
        const h = d.current;
        h && v((h.textContent ?? "").trim());
      }, [i.children]),
      g.jsx(Fe.ItemSlot, {
        scope: n,
        disabled: r,
        textValue: o ?? m,
        children: g.jsx(va, {
          asChild: !0,
          ...a,
          focusable: !r,
          children: g.jsx(F.div, {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: u,
            onPointerMove: P(
              e.onPointerMove,
              Le((h) => {
                r
                  ? s.onItemLeave(h)
                  : (s.onItemEnter(h),
                    h.defaultPrevented ||
                      h.currentTarget.focus({ preventScroll: !0 }));
              }),
            ),
            onPointerLeave: P(
              e.onPointerLeave,
              Le((h) => s.onItemLeave(h)),
            ),
            onFocus: P(e.onFocus, () => l(!0)),
            onBlur: P(e.onBlur, () => l(!1)),
          }),
        }),
      })
    );
  }),
  _a = "MenuCheckboxItem",
  Br = c.forwardRef((e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return g.jsx(zr, {
      scope: e.__scopeMenu,
      checked: n,
      children: g.jsx(lt, {
        role: "menuitemcheckbox",
        "aria-checked": rt(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Qt(n),
        onSelect: P(o.onSelect, () => r?.(rt(n) ? !0 : !n), {
          checkForDefaultPrevented: !1,
        }),
      }),
    });
  });
Br.displayName = _a;
var Ur = "MenuRadioGroup",
  [Ia, Na] = ve(Ur, { value: void 0, onValueChange: () => {} }),
  Gr = c.forwardRef((e, t) => {
    const { value: n, onValueChange: r, ...o } = e,
      i = V(r);
    return g.jsx(Ia, {
      scope: e.__scopeMenu,
      value: n,
      onValueChange: i,
      children: g.jsx(qt, { ...o, ref: t }),
    });
  });
Gr.displayName = Ur;
var Kr = "MenuRadioItem",
  Hr = c.forwardRef((e, t) => {
    const { value: n, ...r } = e,
      o = Na(Kr, e.__scopeMenu),
      i = n === o.value;
    return g.jsx(zr, {
      scope: e.__scopeMenu,
      checked: i,
      children: g.jsx(lt, {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": Qt(i),
        onSelect: P(r.onSelect, () => o.onValueChange?.(n), {
          checkForDefaultPrevented: !1,
        }),
      }),
    });
  });
Hr.displayName = Kr;
var Zt = "MenuItemIndicator",
  [zr, Ta] = ve(Zt, { checked: !1 }),
  Vr = c.forwardRef((e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e,
      i = Ta(Zt, n);
    return g.jsx(ce, {
      present: r || rt(i.checked) || i.checked === !0,
      children: g.jsx(F.span, { ...o, ref: t, "data-state": Qt(i.checked) }),
    });
  });
Vr.displayName = Zt;
var Fa = "MenuSeparator",
  Yr = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return g.jsx(F.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...r,
      ref: t,
    });
  });
Yr.displayName = Fa;
var La = "MenuArrow",
  Xr = c.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = ut(n);
    return g.jsx(ta, { ...o, ...r, ref: t });
  });
Xr.displayName = La;
var ka = "MenuSub",
  [Vc, qr] = ve(ka),
  _e = "MenuSubTrigger",
  Zr = c.forwardRef((e, t) => {
    const n = he(_e, e.__scopeMenu),
      r = $e(_e, e.__scopeMenu),
      o = qr(_e, e.__scopeMenu),
      i = Yt(_e, e.__scopeMenu),
      s = c.useRef(null),
      { pointerGraceTimerRef: a, onPointerGraceIntentChange: d } = i,
      u = { __scopeMenu: e.__scopeMenu },
      f = c.useCallback(() => {
        s.current && window.clearTimeout(s.current), (s.current = null);
      }, []);
    return (
      c.useEffect(() => f, [f]),
      c.useEffect(() => {
        const l = a.current;
        return () => {
          window.clearTimeout(l), d(null);
        };
      }, [a, d]),
      g.jsx(zt, {
        asChild: !0,
        ...u,
        children: g.jsx(Wr, {
          id: o.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": n.open,
          "aria-controls": o.contentId,
          "data-state": eo(n.open),
          ...e,
          ref: Rn(t, o.onTriggerChange),
          onClick: (l) => {
            e.onClick?.(l),
              !(e.disabled || l.defaultPrevented) &&
                (l.currentTarget.focus(), n.open || n.onOpenChange(!0));
          },
          onPointerMove: P(
            e.onPointerMove,
            Le((l) => {
              i.onItemEnter(l),
                !l.defaultPrevented &&
                  !e.disabled &&
                  !n.open &&
                  !s.current &&
                  (i.onPointerGraceIntentChange(null),
                  (s.current = window.setTimeout(() => {
                    n.onOpenChange(!0), f();
                  }, 100)));
            }),
          ),
          onPointerLeave: P(
            e.onPointerLeave,
            Le((l) => {
              f();
              const m = n.content?.getBoundingClientRect();
              if (m) {
                const v = n.content?.dataset.side,
                  h = v === "right",
                  p = h ? -5 : 5,
                  w = m[h ? "left" : "right"],
                  y = m[h ? "right" : "left"];
                i.onPointerGraceIntentChange({
                  area: [
                    { x: l.clientX + p, y: l.clientY },
                    { x: w, y: m.top },
                    { x: y, y: m.top },
                    { x: y, y: m.bottom },
                    { x: w, y: m.bottom },
                  ],
                  side: v,
                }),
                  window.clearTimeout(a.current),
                  (a.current = window.setTimeout(
                    () => i.onPointerGraceIntentChange(null),
                    300,
                  ));
              } else {
                if ((i.onTriggerLeave(l), l.defaultPrevented)) return;
                i.onPointerGraceIntentChange(null);
              }
            }),
          ),
          onKeyDown: P(e.onKeyDown, (l) => {
            const m = i.searchRef.current !== "";
            e.disabled ||
              (m && l.key === " ") ||
              (wa[r.dir].includes(l.key) &&
                (n.onOpenChange(!0), n.content?.focus(), l.preventDefault()));
          }),
        }),
      })
    );
  });
Zr.displayName = _e;
var Qr = "MenuSubContent",
  Jr = c.forwardRef((e, t) => {
    const n = Lr(z, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      i = he(z, e.__scopeMenu),
      s = $e(z, e.__scopeMenu),
      a = qr(Qr, e.__scopeMenu),
      d = c.useRef(null),
      u = B(t, d);
    return g.jsx(Fe.Provider, {
      scope: e.__scopeMenu,
      children: g.jsx(ce, {
        present: r || i.open,
        children: g.jsx(Fe.Slot, {
          scope: e.__scopeMenu,
          children: g.jsx(Xt, {
            id: a.contentId,
            "aria-labelledby": a.triggerId,
            ...o,
            ref: u,
            align: "start",
            side: s.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: (f) => {
              s.isUsingKeyboardRef.current && d.current?.focus(),
                f.preventDefault();
            },
            onCloseAutoFocus: (f) => f.preventDefault(),
            onFocusOutside: P(e.onFocusOutside, (f) => {
              f.target !== a.trigger && i.onOpenChange(!1);
            }),
            onEscapeKeyDown: P(e.onEscapeKeyDown, (f) => {
              s.onClose(), f.preventDefault();
            }),
            onKeyDown: P(e.onKeyDown, (f) => {
              const l = f.currentTarget.contains(f.target),
                m = ya[s.dir].includes(f.key);
              l &&
                m &&
                (i.onOpenChange(!1), a.trigger?.focus(), f.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
Jr.displayName = Qr;
function eo(e) {
  return e ? "open" : "closed";
}
function rt(e) {
  return e === "indeterminate";
}
function Qt(e) {
  return rt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function ja(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function $a(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Wa(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1;
  let s = $a(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const d = s.find((u) => u.toLowerCase().startsWith(o.toLowerCase()));
  return d !== n ? d : void 0;
}
function Ba(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x,
      d = t[i].y,
      u = t[s].x,
      f = t[s].y;
    d > r != f > r && n < ((u - a) * (r - d)) / (f - d) + a && (o = !o);
  }
  return o;
}
function Ua(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Ba(n, t);
}
function Le(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
var Ga = Fr,
  Ka = zt,
  Ha = kr,
  za = jr,
  Va = qt,
  Ya = $r,
  Xa = lt,
  qa = Br,
  Za = Gr,
  Qa = Hr,
  Ja = Vr,
  ec = Yr,
  tc = Xr,
  nc = Zr,
  rc = Jr,
  Jt = "DropdownMenu",
  [oc, Yc] = Se(Jt, [Nr]),
  G = Nr(),
  [ic, to] = oc(Jt),
  no = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: n,
        dir: r,
        open: o,
        defaultOpen: i,
        onOpenChange: s,
        modal: a = !0,
      } = e,
      d = G(t),
      u = c.useRef(null),
      [f = !1, l] = Pt({ prop: o, defaultProp: i, onChange: s });
    return g.jsx(ic, {
      scope: t,
      triggerId: xe(),
      triggerRef: u,
      contentId: xe(),
      open: f,
      onOpenChange: l,
      onOpenToggle: c.useCallback(() => l((m) => !m), [l]),
      modal: a,
      children: g.jsx(Ga, {
        ...d,
        open: f,
        onOpenChange: l,
        dir: r,
        modal: a,
        children: n,
      }),
    });
  };
no.displayName = Jt;
var ro = "DropdownMenuTrigger",
  oo = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e,
      i = to(ro, n),
      s = G(n);
    return g.jsx(Ka, {
      asChild: !0,
      ...s,
      children: g.jsx(F.button, {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Rn(t, i.triggerRef),
        onPointerDown: P(e.onPointerDown, (a) => {
          !r &&
            a.button === 0 &&
            a.ctrlKey === !1 &&
            (i.onOpenToggle(), i.open || a.preventDefault());
        }),
        onKeyDown: P(e.onKeyDown, (a) => {
          r ||
            (["Enter", " "].includes(a.key) && i.onOpenToggle(),
            a.key === "ArrowDown" && i.onOpenChange(!0),
            ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
        }),
      }),
    });
  });
oo.displayName = ro;
var sc = "DropdownMenuPortal",
  io = (e) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      r = G(t);
    return g.jsx(Ha, { ...r, ...n });
  };
io.displayName = sc;
var so = "DropdownMenuContent",
  ao = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = to(so, n),
      i = G(n),
      s = c.useRef(!1);
    return g.jsx(za, {
      id: o.contentId,
      "aria-labelledby": o.triggerId,
      ...i,
      ...r,
      ref: t,
      onCloseAutoFocus: P(e.onCloseAutoFocus, (a) => {
        s.current || o.triggerRef.current?.focus(),
          (s.current = !1),
          a.preventDefault();
      }),
      onInteractOutside: P(e.onInteractOutside, (a) => {
        const d = a.detail.originalEvent,
          u = d.button === 0 && d.ctrlKey === !0,
          f = d.button === 2 || u;
        (!o.modal || f) && (s.current = !0);
      }),
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
ao.displayName = so;
var ac = "DropdownMenuGroup",
  co = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = G(n);
    return g.jsx(Va, { ...o, ...r, ref: t });
  });
co.displayName = ac;
var cc = "DropdownMenuLabel",
  uo = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = G(n);
    return g.jsx(Ya, { ...o, ...r, ref: t });
  });
uo.displayName = cc;
var uc = "DropdownMenuItem",
  lo = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = G(n);
    return g.jsx(Xa, { ...o, ...r, ref: t });
  });
lo.displayName = uc;
var lc = "DropdownMenuCheckboxItem",
  fo = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = G(n);
    return g.jsx(qa, { ...o, ...r, ref: t });
  });
fo.displayName = lc;
var dc = "DropdownMenuRadioGroup",
  fc = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = G(n);
    return g.jsx(Za, { ...o, ...r, ref: t });
  });
fc.displayName = dc;
var pc = "DropdownMenuRadioItem",
  mc = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = G(n);
    return g.jsx(Qa, { ...o, ...r, ref: t });
  });
mc.displayName = pc;
var vc = "DropdownMenuItemIndicator",
  po = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = G(n);
    return g.jsx(Ja, { ...o, ...r, ref: t });
  });
po.displayName = vc;
var hc = "DropdownMenuSeparator",
  mo = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = G(n);
    return g.jsx(ec, { ...o, ...r, ref: t });
  });
mo.displayName = hc;
var gc = "DropdownMenuArrow",
  wc = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = G(n);
    return g.jsx(tc, { ...o, ...r, ref: t });
  });
wc.displayName = gc;
var yc = "DropdownMenuSubTrigger",
  xc = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = G(n);
    return g.jsx(nc, { ...o, ...r, ref: t });
  });
xc.displayName = yc;
var bc = "DropdownMenuSubContent",
  Ec = c.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = G(n);
    return g.jsx(rc, {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
Ec.displayName = bc;
var Cc = no,
  Rc = oo,
  Sc = io,
  Mc = ao,
  Ac = co,
  Pc = uo,
  Oc = lo,
  Dc = fo,
  _c = po,
  Ic = mo;
function Xc({ ...e }) {
  return g.jsx(Cc, { "data-slot": "dropdown-menu", ...e });
}
function qc({ ...e }) {
  return g.jsx(Rc, { "data-slot": "dropdown-menu-trigger", ...e });
}
function Zc({ className: e, sideOffset: t = 4, ...n }) {
  return g.jsx(Sc, {
    children: g.jsx(Mc, {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: Re(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e,
      ),
      ...n,
    }),
  });
}
function Qc({ ...e }) {
  return g.jsx(Ac, { "data-slot": "dropdown-menu-group", ...e });
}
function Jc({ className: e, inset: t, variant: n = "default", ...r }) {
  return g.jsx(Oc, {
    "data-slot": "dropdown-menu-item",
    "data-inset": t,
    "data-variant": n,
    className: Re(
      "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      e,
    ),
    ...r,
  });
}
function eu({ className: e, children: t, checked: n, ...r }) {
  return g.jsxs(Dc, {
    "data-slot": "dropdown-menu-checkbox-item",
    className: Re(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      e,
    ),
    checked: n,
    ...r,
    children: [
      g.jsx("span", {
        className:
          "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
        children: g.jsx(_c, { children: g.jsx(Co, { className: "size-4" }) }),
      }),
      t,
    ],
  });
}
function tu({ className: e, inset: t, ...n }) {
  return g.jsx(Pc, {
    "data-slot": "dropdown-menu-label",
    "data-inset": t,
    className: Re("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
    ...n,
  });
}
function nu({ className: e, ...t }) {
  return g.jsx(Ic, {
    "data-slot": "dropdown-menu-separator",
    className: Re("bg-border -mx-1 my-1 h-px", e),
    ...t,
  });
}
export {
  Js as A,
  Dn as B,
  Uc as C,
  Kc as D,
  eu as E,
  Dt as F,
  Sr as G,
  Rr as H,
  Co as I,
  Bc as O,
  Wc as P,
  jc as R,
  Fc as S,
  Gc as T,
  Cr as V,
  Hc as a,
  mr as b,
  Se as c,
  Pt as d,
  Qs as e,
  F as f,
  P as g,
  ce as h,
  _t as i,
  ta as j,
  Ot as k,
  ea as l,
  zc as m,
  V as n,
  fe as o,
  Xc as p,
  qc as q,
  Zc as r,
  tu as s,
  nu as t,
  xe as u,
  Qc as v,
  Jc as w,
  $c as x,
  $n as y,
  It as z,
};
