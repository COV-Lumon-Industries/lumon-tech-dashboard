import {
  r as C,
  c as ls,
  d as us,
  e as rt,
  f as cs,
  g as ds,
  h as fs,
  i as nt,
  k as hs,
  l as it,
  m as ps,
  n as ms,
  S as ys,
  s as bs,
  o as ot,
  p as vs,
  q as Mt,
  v as gs,
  w as I,
  x as Ss,
  D as ke,
  j as de,
  y as ze,
} from "./client-B6Fwjkna.js";
const ws = "Error preloading route! ☝️";
function Ms(e, t) {
  const r = ls(),
    [s, n] = C.useState(!1),
    i = C.useRef(!1),
    o = us(t),
    {
      activeProps: a = () => ({ className: "active" }),
      inactiveProps: p = () => ({}),
      activeOptions: l,
      to: u,
      preload: f,
      preloadDelay: d,
      hashScrollIntoView: b,
      replace: h,
      startTransition: y,
      resetScroll: m,
      viewTransition: g,
      children: v,
      target: w,
      disabled: M,
      style: A,
      className: P,
      onClick: R,
      onFocus: O,
      onMouseEnter: N,
      onMouseLeave: U,
      onTouchStart: j,
      ignoreBlocker: G,
      ...Q
    } = e,
    {
      params: Zt,
      search: E,
      hash: B,
      state: bn,
      mask: vn,
      reloadDocument: gn,
      ...Ge
    } = Q,
    Qe = C.useMemo(() => {
      try {
        return new URL(`${u}`), "external";
      } catch {}
      return "internal";
    }, [u]),
    Yt = rt({ select: (F) => F.location.search, structuralSharing: !0 }),
    Ze = cs({
      select: (F) => {
        var T;
        return e.from ?? ((T = F[F.length - 1]) == null ? void 0 : T.fullPath);
      },
    }),
    $ = C.useMemo(() => ({ ...e, from: Ze }), [e, Ze]),
    q = C.useMemo(() => r.buildLocation($), [r, $, Yt]),
    Z = C.useMemo(
      () => ($.reloadDocument ? !1 : (f ?? r.options.defaultPreload)),
      [r.options.defaultPreload, f, $.reloadDocument],
    ),
    es = d ?? r.options.defaultPreloadDelay ?? 0,
    Fe = rt({
      select: (F) => {
        if (l?.exact) {
          if (!hs(F.location.pathname, q.pathname, r.basepath)) return !1;
        } else {
          const T = it(F.location.pathname, r.basepath).split("/");
          if (
            !it(q.pathname, r.basepath)
              .split("/")
              .every((os, as) => os === T[as])
          )
            return !1;
        }
        return (l?.includeSearch ?? !0) &&
          !ps(F.location.search, q.search, {
            partial: !l?.exact,
            ignoreUndefined: !l?.explicitUndefined,
          })
          ? !1
          : l?.includeHash
            ? F.location.hash === q.hash
            : !0;
      },
    }),
    J = C.useCallback(() => {
      r.preloadRoute($).catch((F) => {
        console.warn(F), console.warn(ws);
      });
    }, [$, r]),
    ts = C.useCallback(
      (F) => {
        F?.isIntersecting && J();
      },
      [J],
    );
  if (
    (ds(o, ts, { rootMargin: "100px" }, { disabled: !!M || Z !== "viewport" }),
    fs(() => {
      i.current || (!M && Z === "render" && (J(), (i.current = !0)));
    }, [M, J, Z]),
    Qe === "external")
  )
    return {
      ...Ge,
      ref: o,
      type: Qe,
      href: u,
      ...(v && { children: v }),
      ...(w && { target: w }),
      ...(M && { disabled: M }),
      ...(A && { style: A }),
      ...(P && { className: P }),
      ...(R && { onClick: R }),
      ...(O && { onFocus: O }),
      ...(N && { onMouseEnter: N }),
      ...(U && { onMouseLeave: U }),
      ...(j && { onTouchStart: j }),
    };
  const ss = (F) => {
      if (
        !M &&
        !Es(F) &&
        !F.defaultPrevented &&
        (!w || w === "_self") &&
        F.button === 0
      ) {
        F.preventDefault(),
          ms.flushSync(() => {
            n(!0);
          });
        const T = r.subscribe("onResolved", () => {
          T(), n(!1);
        });
        return r.navigate({
          ...$,
          replace: h,
          resetScroll: m,
          hashScrollIntoView: b,
          startTransition: y,
          viewTransition: g,
          ignoreBlocker: G,
        });
      }
    },
    Ye = (F) => {
      M || (Z && J());
    },
    rs = Ye,
    ns = (F) => {
      if (M) return;
      const T = F.target || {};
      if (Z) {
        if (T.preloadTimeout) return;
        T.preloadTimeout = setTimeout(() => {
          (T.preloadTimeout = null), J();
        }, es);
      }
    },
    is = (F) => {
      if (M) return;
      const T = F.target || {};
      T.preloadTimeout &&
        (clearTimeout(T.preloadTimeout), (T.preloadTimeout = null));
    },
    Y = (F) => (T) => {
      var Oe;
      (Oe = T.persist) == null || Oe.call(T),
        F.filter(Boolean).forEach((st) => {
          T.defaultPrevented || st(T);
        });
    },
    Ae = Fe ? (nt(a, {}) ?? {}) : {},
    Re = Fe ? {} : nt(p, {}),
    et = [P, Ae.className, Re.className].filter(Boolean).join(" "),
    tt = { ...A, ...Ae.style, ...Re.style };
  return {
    ...Ge,
    ...Ae,
    ...Re,
    href: M
      ? void 0
      : q.maskedLocation
        ? r.history.createHref(q.maskedLocation.href)
        : r.history.createHref(q.href),
    ref: o,
    onClick: Y([R, ss]),
    onFocus: Y([O, Ye]),
    onMouseEnter: Y([N, ns]),
    onMouseLeave: Y([U, is]),
    onTouchStart: Y([j, rs]),
    disabled: !!M,
    target: w,
    ...(Object.keys(tt).length && { style: tt }),
    ...(et && { className: et }),
    ...(M && { role: "link", "aria-disabled": !0 }),
    ...(Fe && { "data-status": "active", "aria-current": "page" }),
    ...(s && { "data-transitioning": "transitioning" }),
  };
}
const wn = C.forwardRef((e, t) => {
  const { _asChild: r, ...s } = e,
    { type: n, ref: i, ...o } = Ms(s, t),
    a =
      typeof s.children == "function"
        ? s.children({ isActive: o["data-status"] === "active" })
        : s.children;
  return (
    typeof r > "u" && delete o.disabled,
    C.createElement(r || "a", { ...o, ref: i }, a)
  );
});
function Es(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Fs = class extends ys {
  #s;
  #r = void 0;
  #e;
  #t;
  constructor(e, t) {
    super(), (this.#s = e), this.setOptions(t), this.bindMethods(), this.#n();
  }
  bindMethods() {
    (this.mutate = this.mutate.bind(this)),
      (this.reset = this.reset.bind(this));
  }
  setOptions(e) {
    const t = this.options;
    (this.options = this.#s.defaultMutationOptions(e)),
      bs(this.options, t) ||
        this.#s
          .getMutationCache()
          .notify({
            type: "observerOptionsUpdated",
            mutation: this.#e,
            observer: this,
          }),
      t?.mutationKey &&
      this.options.mutationKey &&
      ot(t.mutationKey) !== ot(this.options.mutationKey)
        ? this.reset()
        : this.#e?.state.status === "pending" &&
          this.#e.setOptions(this.options);
  }
  onUnsubscribe() {
    this.hasListeners() || this.#e?.removeObserver(this);
  }
  onMutationUpdate(e) {
    this.#n(), this.#i(e);
  }
  getCurrentResult() {
    return this.#r;
  }
  reset() {
    this.#e?.removeObserver(this), (this.#e = void 0), this.#n(), this.#i();
  }
  mutate(e, t) {
    return (
      (this.#t = t),
      this.#e?.removeObserver(this),
      (this.#e = this.#s.getMutationCache().build(this.#s, this.options)),
      this.#e.addObserver(this),
      this.#e.execute(e)
    );
  }
  #n() {
    const e = this.#e?.state ?? vs();
    this.#r = {
      ...e,
      isPending: e.status === "pending",
      isSuccess: e.status === "success",
      isError: e.status === "error",
      isIdle: e.status === "idle",
      mutate: this.mutate,
      reset: this.reset,
    };
  }
  #i(e) {
    Mt.batch(() => {
      if (this.#t && this.hasListeners()) {
        const t = this.#r.variables,
          r = this.#r.context;
        e?.type === "success"
          ? (this.#t.onSuccess?.(e.data, t, r),
            this.#t.onSettled?.(e.data, null, t, r))
          : e?.type === "error" &&
            (this.#t.onError?.(e.error, t, r),
            this.#t.onSettled?.(void 0, e.error, t, r));
      }
      this.listeners.forEach((t) => {
        t(this.#r);
      });
    });
  }
};
function As(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function Rs() {}
function Mn(e, t) {
  const r = gs(),
    [s] = C.useState(() => new Fs(r, e));
  C.useEffect(() => {
    s.setOptions(e);
  }, [s, e]);
  const n = C.useSyncExternalStore(
      C.useCallback((o) => s.subscribe(Mt.batchCalls(o)), [s]),
      () => s.getCurrentResult(),
      () => s.getCurrentResult(),
    ),
    i = C.useCallback(
      (o, a) => {
        s.mutate(o, a).catch(Rs);
      },
      [s],
    );
  if (n.error && As(s.options.throwOnError, [n.error])) throw n.error;
  return { ...n, mutate: i, mutateAsync: n.mutate };
}
function ye(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Et(e, t) {
  return Ke(t).reduce((s, n) => {
    if (s === null) return null;
    if (typeof s < "u") return s[n];
  }, e);
}
function Te(e, t, r) {
  const s = Ke(t);
  function n(i) {
    if (!s.length) return ye(r, i);
    const o = s.shift();
    if (typeof o == "string" || (typeof o == "number" && !Array.isArray(i)))
      return typeof i == "object"
        ? (i === null && (i = {}), { ...i, [o]: n(i[o]) })
        : { [o]: n() };
    if (Array.isArray(i) && typeof o == "number") {
      const a = i.slice(0, o);
      return [...(a.length ? a : new Array(o)), n(i[o]), ...i.slice(o + 1)];
    }
    return [...new Array(o), n()];
  }
  return n(e);
}
function Os(e, t) {
  const r = Ke(t);
  function s(n) {
    if (!n) return;
    if (r.length === 1) {
      const o = r[0];
      if (Array.isArray(n) && typeof o == "number")
        return n.filter((l, u) => u !== o);
      const { [o]: a, ...p } = n;
      return p;
    }
    const i = r.shift();
    if (typeof i == "string" && typeof n == "object")
      return { ...n, [i]: s(n[i]) };
    if (typeof i == "number" && Array.isArray(n)) {
      if (i >= n.length) return n;
      const o = n.slice(0, i);
      return [...(o.length ? o : new Array(i)), s(n[i]), ...n.slice(i + 1)];
    }
    throw new Error("It seems we have created an infinite loop in deleteBy. ");
  }
  return s(e);
}
const Ts = /^(\d*)$/gm,
  _s = /\.(\d*)\./gm,
  Cs = /^(\d*)\./gm,
  Ps = /\.(\d*$)/gm,
  Vs = /\.{2,}/gm,
  Ne = "__int__",
  ie = `${Ne}$1`;
function Ke(e) {
  if (Array.isArray(e)) return [...e];
  if (typeof e != "string") throw new Error("Path must be a string.");
  return e
    .replace(/\[/g, ".")
    .replace(/\]/g, "")
    .replace(Ts, ie)
    .replace(_s, `.${ie}.`)
    .replace(Cs, `${ie}.`)
    .replace(Ps, `.${ie}`)
    .replace(Vs, ".")
    .split(".")
    .map((t) =>
      t.indexOf(Ne) === 0 ? parseInt(t.substring(Ne.length), 10) : t,
    );
}
function xs(e) {
  return !(Array.isArray(e) && e.length === 0);
}
function Be(e, t) {
  const { asyncDebounceMs: r } = t,
    {
      onChangeAsync: s,
      onBlurAsync: n,
      onSubmitAsync: i,
      onBlurAsyncDebounceMs: o,
      onChangeAsyncDebounceMs: a,
    } = t.validators || {},
    p = r ?? 0,
    l = { cause: "change", validate: s, debounceMs: a ?? p },
    u = { cause: "blur", validate: n, debounceMs: o ?? p },
    f = { cause: "submit", validate: i, debounceMs: 0 },
    d = (b) => ({ ...b, debounceMs: 0 });
  switch (e) {
    case "submit":
      return [d(l), d(u), f];
    case "blur":
      return [u];
    case "change":
      return [l];
    case "server":
    default:
      return [];
  }
}
function De(e, t) {
  const {
      onChange: r,
      onBlur: s,
      onSubmit: n,
      onMount: i,
    } = t.validators || {},
    o = { cause: "change", validate: r },
    a = { cause: "blur", validate: s },
    p = { cause: "submit", validate: n },
    l = { cause: "mount", validate: i },
    u = { cause: "server", validate: () => {} };
  switch (e) {
    case "mount":
      return [l];
    case "submit":
      return [o, a, p, u];
    case "server":
      return [u];
    case "blur":
      return [a, u];
    case "change":
    default:
      return [o, u];
  }
}
const Ft = (e) => !!e && typeof e == "object" && "fields" in e;
function _e(e, t) {
  if (Object.is(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [s, n] of e) if (!t.has(s) || !Object.is(n, t.get(s))) return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const s of e) if (!t.has(s)) return !1;
    return !0;
  }
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length) return !1;
  for (let s = 0; s < r.length; s++)
    if (
      !Object.prototype.hasOwnProperty.call(t, r[s]) ||
      !Object.is(e[r[s]], t[r[s]])
    )
      return !1;
  return !0;
}
function ks(e) {
  const t = new Map();
  for (const r of e) {
    const s = [...(r.path ?? [])]
      .map((n) => {
        const i = typeof n == "object" ? n.key : n;
        return typeof i == "number" ? `[${i}]` : i;
      })
      .join(".")
      .replace(/\.\[/g, "[");
    t.set(s, (t.get(s) ?? []).concat(r));
  }
  return Object.fromEntries(t);
}
const Ns = (e) => e,
  Bs = (e) => {
    const t = ks(e);
    return { form: t, fields: t };
  },
  at = (e, t) => (e === "form" ? Bs(t) : Ns(t)),
  At = {
    validate({ value: e, validationSource: t }, r) {
      const s = r["~standard"].validate(e);
      if (s instanceof Promise)
        throw new Error("async function passed to sync validator");
      if (s.issues) return at(t, s.issues);
    },
    async validateAsync({ value: e, validationSource: t }, r) {
      const s = await r["~standard"].validate(e);
      if (s.issues) return at(t, s.issues);
    },
  },
  Rt = (e) => !!e && "~standard" in e,
  fe = {
    isValidating: !1,
    isTouched: !1,
    isBlurred: !1,
    isDirty: !1,
    isPristine: !0,
    errors: [],
    errorMap: {},
  };
function oe(e) {
  function t(f, d, b, h) {
    const y = s(f, d, b, h);
    ({
      insert: () => a(y, f, d),
      remove: () => p(y),
      swap: () => h !== void 0 && u(y, f, d, h),
      move: () => h !== void 0 && l(y, f, d, h),
    })[b]();
  }
  function r(f, d) {
    return `${f}[${d}]`;
  }
  function s(f, d, b, h) {
    const y = [r(f, d)];
    if (b === "swap") y.push(r(f, h));
    else if (b === "move") {
      const [m, g] = [Math.min(d, h), Math.max(d, h)];
      for (let v = m; v <= g; v++) y.push(r(f, v));
    } else {
      const m = e.getFieldValue(f),
        g = Array.isArray(m) ? m.length : 0;
      for (let v = d + 1; v < g; v++) y.push(r(f, v));
    }
    return Object.keys(e.fieldInfo).filter((m) =>
      y.some((g) => m.startsWith(g)),
    );
  }
  function n(f, d) {
    return f.replace(/\[(\d+)\]/, (b, h) => {
      const y = parseInt(h, 10);
      return `[${d === "up" ? y + 1 : Math.max(0, y - 1)}]`;
    });
  }
  function i(f, d) {
    (d === "up" ? f : [...f].reverse()).forEach((h) => {
      const y = n(h.toString(), d),
        m = e.getFieldMeta(y);
      m ? e.setFieldMeta(h, m) : e.setFieldMeta(h, o());
    });
  }
  const o = () => fe,
    a = (f, d, b) => {
      i(f, "down"),
        f.forEach((h) => {
          h.toString().startsWith(r(d, b)) && e.setFieldMeta(h, o());
        });
    },
    p = (f) => {
      i(f, "up");
    },
    l = (f, d, b, h) => {
      const y = new Map(
        Object.keys(e.fieldInfo)
          .filter((m) => m.startsWith(r(d, b)))
          .map((m) => [m, e.getFieldMeta(m)]),
      );
      i(f, b < h ? "up" : "down"),
        Object.keys(e.fieldInfo)
          .filter((m) => m.startsWith(r(d, h)))
          .forEach((m) => {
            const g = m.replace(r(d, h), r(d, b)),
              v = y.get(g);
            v && e.setFieldMeta(m, v);
          });
    },
    u = (f, d, b, h) => {
      f.forEach((y) => {
        if (!y.toString().startsWith(r(d, b))) return;
        const m = y.toString().replace(r(d, b), r(d, h)),
          [g, v] = [e.getFieldMeta(y), e.getFieldMeta(m)];
        g && e.setFieldMeta(m, g), v && e.setFieldMeta(y, v);
      });
    };
  return { handleArrayFieldMetaShift: t };
}
function Ce(e) {
  return {
    values: e.values ?? {},
    errorMap: e.errorMap ?? {},
    fieldMetaBase: e.fieldMetaBase ?? {},
    isSubmitted: e.isSubmitted ?? !1,
    isSubmitting: e.isSubmitting ?? !1,
    isValidating: e.isValidating ?? !1,
    submissionAttempts: e.submissionAttempts ?? 0,
    isSubmitSuccessful: e.isSubmitSuccessful ?? !1,
    validationMetaMap: e.validationMetaMap ?? {
      onChange: void 0,
      onBlur: void 0,
      onSubmit: void 0,
      onMount: void 0,
      onServer: void 0,
    },
  };
}
class Ds {
  constructor(t) {
    var r;
    (this.options = {}),
      (this.fieldInfo = {}),
      (this.prevTransformArray = []),
      (this.cumulativeFieldsErrorMap = {}),
      (this.mount = () => {
        const s = this.fieldMetaDerived.mount(),
          n = this.store.mount(),
          i = () => {
            s(), n();
          },
          { onMount: o } = this.options.validators || {};
        return o && this.validateSync("mount"), i;
      }),
      (this.update = (s) => {
        var n, i;
        if (!s) return;
        const o = this.options;
        this.options = s;
        const a = !!(
            (i = (n = s.transform) == null ? void 0 : n.deps) != null &&
            i.some((u, f) => u !== this.prevTransformArray[f])
          ),
          p =
            s.defaultValues &&
            !_e(s.defaultValues, o.defaultValues) &&
            !this.state.isTouched,
          l = !_e(s.defaultState, o.defaultState) && !this.state.isTouched;
        (!p && !l && !a) ||
          I(() => {
            this.baseStore.setState(() =>
              Ce(
                Object.assign(
                  {},
                  this.state,
                  l ? s.defaultState : {},
                  p ? { values: s.defaultValues } : {},
                  a ? { _force_re_eval: !this.state._force_re_eval } : {},
                ),
              ),
            );
          });
      }),
      (this.reset = (s, n) => {
        const { fieldMeta: i } = this.state,
          o = this.resetFieldMeta(i);
        s &&
          !n?.keepDefaultValues &&
          (this.options = { ...this.options, defaultValues: s }),
          this.baseStore.setState(() => {
            var a;
            return Ce({
              ...this.options.defaultState,
              values:
                s ??
                this.options.defaultValues ??
                ((a = this.options.defaultState) == null ? void 0 : a.values),
              fieldMetaBase: o,
            });
          });
      }),
      (this.validateAllFields = async (s) => {
        const n = [];
        return (
          I(() => {
            Object.values(this.fieldInfo).forEach((o) => {
              if (!o.instance) return;
              const a = o.instance;
              n.push(
                Promise.resolve().then(() =>
                  a.validate(s, { skipFormValidation: !0 }),
                ),
              ),
                o.instance.state.meta.isTouched ||
                  o.instance.setMeta((p) => ({ ...p, isTouched: !0 }));
            });
          }),
          (await Promise.all(n)).flat()
        );
      }),
      (this.validateArrayFieldsStartingFrom = async (s, n, i) => {
        const o = this.getFieldValue(s),
          a = Array.isArray(o) ? Math.max(o.length - 1, 0) : null,
          p = [`${s}[${n}]`];
        for (let d = n + 1; d <= (a ?? 0); d++) p.push(`${s}[${d}]`);
        const l = Object.keys(this.fieldInfo).filter((d) =>
            p.some((b) => d.startsWith(b)),
          ),
          u = [];
        return (
          I(() => {
            l.forEach((d) => {
              u.push(Promise.resolve().then(() => this.validateField(d, i)));
            });
          }),
          (await Promise.all(u)).flat()
        );
      }),
      (this.validateField = (s, n) => {
        var i;
        const o = (i = this.fieldInfo[s]) == null ? void 0 : i.instance;
        return o
          ? (o.state.meta.isTouched ||
              o.setMeta((a) => ({ ...a, isTouched: !0 })),
            o.validate(n))
          : [];
      }),
      (this.validateSync = (s) => {
        const n = De(s, this.options);
        let i = !1;
        const o = {};
        return (
          I(() => {
            var a;
            for (const l of n) {
              if (!l.validate) continue;
              const u = this.runValidator({
                  validate: l.validate,
                  value: {
                    value: this.state.values,
                    formApi: this,
                    validationSource: "form",
                  },
                  type: "validate",
                }),
                { formError: f, fieldErrors: d } = Le(u),
                b = ae(l.cause);
              if (d)
                for (const [h, y] of Object.entries(d)) {
                  const g = {
                    ...(this.cumulativeFieldsErrorMap[h] || {}),
                    [b]: y,
                  };
                  (o[h] = g), (this.cumulativeFieldsErrorMap[h] = g);
                  const v = this.getFieldMeta(h);
                  v &&
                    v.errorMap[b] !== y &&
                    this.setFieldMeta(h, (w) => ({
                      ...w,
                      errorMap: { ...w.errorMap, [b]: y },
                    }));
                }
              for (const h of Object.keys(this.cumulativeFieldsErrorMap)) {
                const y = this.getFieldMeta(h);
                y?.errorMap[b] &&
                  !((a = o[h]) != null && a[b]) &&
                  ((this.cumulativeFieldsErrorMap[h] = {
                    ...this.cumulativeFieldsErrorMap[h],
                    [b]: void 0,
                  }),
                  this.setFieldMeta(h, (m) => ({
                    ...m,
                    errorMap: { ...m.errorMap, [b]: void 0 },
                  })));
              }
              this.state.errorMap[b] !== f &&
                this.baseStore.setState((h) => ({
                  ...h,
                  errorMap: { ...h.errorMap, [b]: f },
                })),
                (f || d) && (i = !0);
            }
            const p = ae("submit");
            this.state.errorMap[p] &&
              s !== "submit" &&
              !i &&
              this.baseStore.setState((l) => ({
                ...l,
                errorMap: { ...l.errorMap, [p]: void 0 },
              }));
          }),
          { hasErrored: i, fieldsErrorMap: o }
        );
      }),
      (this.validateAsync = async (s) => {
        const n = Be(s, this.options);
        this.state.isFormValidating ||
          this.baseStore.setState((l) => ({ ...l, isFormValidating: !0 }));
        const i = [];
        let o;
        for (const l of n) {
          if (!l.validate) continue;
          const u = ae(l.cause),
            f = this.state.validationMetaMap[u];
          f?.lastAbortController.abort();
          const d = new AbortController();
          (this.state.validationMetaMap[u] = { lastAbortController: d }),
            i.push(
              new Promise(async (b) => {
                let h;
                try {
                  h = await new Promise((v, w) => {
                    setTimeout(async () => {
                      if (d.signal.aborted) return v(void 0);
                      try {
                        v(
                          await this.runValidator({
                            validate: l.validate,
                            value: {
                              value: this.state.values,
                              formApi: this,
                              validationSource: "form",
                              signal: d.signal,
                            },
                            type: "validateAsync",
                          }),
                        );
                      } catch (M) {
                        w(M);
                      }
                    }, l.debounceMs);
                  });
                } catch (v) {
                  h = v;
                }
                const { formError: y, fieldErrors: m } = Le(h);
                m && (o = o ? { ...o, ...m } : m);
                const g = ae(l.cause);
                if (o)
                  for (const [v, w] of Object.entries(o)) {
                    const M = this.getFieldMeta(v);
                    M &&
                      M.errorMap[g] !== w &&
                      this.setFieldMeta(v, (A) => ({
                        ...A,
                        errorMap: { ...A.errorMap, [g]: w },
                      }));
                  }
                this.baseStore.setState((v) => ({
                  ...v,
                  errorMap: { ...v.errorMap, [g]: y },
                })),
                  b(o ? { fieldErrors: o, errorMapKey: g } : void 0);
              }),
            );
        }
        let a = [];
        const p = {};
        if (i.length) {
          a = await Promise.all(i);
          for (const l of a)
            if (l?.fieldErrors) {
              const { errorMapKey: u } = l;
              for (const [f, d] of Object.entries(l.fieldErrors)) {
                const h = { ...(p[f] || {}), [u]: d };
                p[f] = h;
              }
            }
        }
        return (
          this.baseStore.setState((l) => ({ ...l, isFormValidating: !1 })), p
        );
      }),
      (this.validate = (s) => {
        const { hasErrored: n, fieldsErrorMap: i } = this.validateSync(s);
        return n && !this.options.asyncAlways ? i : this.validateAsync(s);
      }),
      (this.getFieldValue = (s) => Et(this.state.values, s)),
      (this.getFieldMeta = (s) => this.state.fieldMeta[s]),
      (this.getFieldInfo = (s) => {
        var n;
        return (
          (n = this.fieldInfo)[s] ||
          (n[s] = {
            instance: null,
            validationMetaMap: {
              onChange: void 0,
              onBlur: void 0,
              onSubmit: void 0,
              onMount: void 0,
              onServer: void 0,
            },
          })
        );
      }),
      (this.setFieldMeta = (s, n) => {
        this.baseStore.setState((i) => ({
          ...i,
          fieldMetaBase: { ...i.fieldMetaBase, [s]: ye(n, i.fieldMetaBase[s]) },
        }));
      }),
      (this.resetFieldMeta = (s) =>
        Object.keys(s).reduce((n, i) => {
          const o = i;
          return (n[o] = fe), n;
        }, {})),
      (this.setFieldValue = (s, n, i) => {
        const o = i?.dontUpdateMeta ?? !1;
        I(() => {
          o ||
            this.setFieldMeta(s, (a) => ({
              ...a,
              isTouched: !0,
              isDirty: !0,
              errorMap: { ...a?.errorMap, onMount: void 0 },
            })),
            this.baseStore.setState((a) => ({
              ...a,
              values: Te(a.values, s, n),
            }));
        });
      }),
      (this.deleteField = (s) => {
        const i = [
          ...Object.keys(this.fieldInfo).filter((o) => {
            const a = s.toString();
            return o !== a && o.startsWith(a);
          }),
          s,
        ];
        this.baseStore.setState((o) => {
          const a = { ...o };
          return (
            i.forEach((p) => {
              (a.values = Os(a.values, p)),
                delete this.fieldInfo[p],
                delete a.fieldMetaBase[p];
            }),
            a
          );
        });
      }),
      (this.pushFieldValue = (s, n, i) => {
        this.setFieldValue(s, (o) => [...(Array.isArray(o) ? o : []), n], i),
          this.validateField(s, "change");
      }),
      (this.insertFieldValue = async (s, n, i, o) => {
        this.setFieldValue(s, (a) => [...a.slice(0, n), i, ...a.slice(n)], o),
          await this.validateField(s, "change"),
          oe(this).handleArrayFieldMetaShift(s, n, "insert"),
          await this.validateArrayFieldsStartingFrom(s, n, "change");
      }),
      (this.replaceFieldValue = async (s, n, i, o) => {
        this.setFieldValue(s, (a) => a.map((p, l) => (l === n ? i : p)), o),
          await this.validateField(s, "change"),
          await this.validateArrayFieldsStartingFrom(s, n, "change");
      }),
      (this.removeFieldValue = async (s, n, i) => {
        const o = this.getFieldValue(s),
          a = Array.isArray(o) ? Math.max(o.length - 1, 0) : null;
        if (
          (this.setFieldValue(s, (p) => p.filter((l, u) => u !== n), i),
          oe(this).handleArrayFieldMetaShift(s, n, "remove"),
          a !== null)
        ) {
          const p = `${s}[${a}]`;
          this.deleteField(p);
        }
        await this.validateField(s, "change"),
          await this.validateArrayFieldsStartingFrom(s, n, "change");
      }),
      (this.swapFieldValues = (s, n, i, o) => {
        this.setFieldValue(
          s,
          (a) => {
            const p = a[n],
              l = a[i];
            return Te(Te(a, `${n}`, l), `${i}`, p);
          },
          o,
        ),
          oe(this).handleArrayFieldMetaShift(s, n, "swap", i),
          this.validateField(s, "change"),
          this.validateField(`${s}[${n}]`, "change"),
          this.validateField(`${s}[${i}]`, "change");
      }),
      (this.moveFieldValues = (s, n, i, o) => {
        this.setFieldValue(s, (a) => (a.splice(i, 0, a.splice(n, 1)[0]), a), o),
          oe(this).handleArrayFieldMetaShift(s, n, "move", i),
          this.validateField(s, "change"),
          this.validateField(`${s}[${n}]`, "change"),
          this.validateField(`${s}[${i}]`, "change");
      }),
      (this.resetField = (s) => {
        this.baseStore.setState((n) => ({
          ...n,
          fieldMetaBase: { ...n.fieldMetaBase, [s]: fe },
          values: {
            ...n.values,
            [s]: this.options.defaultValues && this.options.defaultValues[s],
          },
        }));
      }),
      (this.getAllErrors = () => ({
        form: { errors: this.state.errors, errorMap: this.state.errorMap },
        fields: Object.entries(this.state.fieldMeta).reduce(
          (s, [n, i]) => (
            Object.keys(i).length &&
              i.errors.length &&
              (s[n] = { errors: i.errors, errorMap: i.errorMap }),
            s
          ),
          {},
        ),
      })),
      (this.baseStore = new Ss(
        Ce({
          ...t?.defaultState,
          values:
            t?.defaultValues ??
            ((r = t?.defaultState) == null ? void 0 : r.values),
        }),
      )),
      (this.fieldMetaDerived = new ke({
        deps: [this.baseStore],
        fn: ({ prevDepVals: s, currDepVals: n, prevVal: i }) => {
          var o;
          const a = i,
            p = s?.[0],
            l = n[0];
          let u = 0;
          const f = {};
          for (const d of Object.keys(l.fieldMetaBase)) {
            const b = l.fieldMetaBase[d],
              h = p?.fieldMetaBase[d],
              y = a?.[d];
            let m = y?.errors;
            if (!h || b.errorMap !== h.errorMap) {
              m = Object.values(b.errorMap ?? {}).filter((w) => w !== void 0);
              const v =
                (o = this.getFieldInfo(d)) == null ? void 0 : o.instance;
              v && !v.options.disableErrorFlat && (m = m?.flat(1));
            }
            const g = !b.isDirty;
            if (y && y.isPristine === g && y.errors === m && b === h) {
              (f[d] = y), u++;
              continue;
            }
            f[d] = { ...b, errors: m, isPristine: g };
          }
          return Object.keys(l.fieldMetaBase).length &&
            a &&
            u === Object.keys(l.fieldMetaBase).length
            ? a
            : f;
        },
      })),
      (this.store = new ke({
        deps: [this.baseStore, this.fieldMetaDerived],
        fn: ({ prevDepVals: s, currDepVals: n, prevVal: i }) => {
          var o, a, p, l;
          const u = i,
            f = s?.[0],
            d = n[0],
            b = Object.values(d.fieldMetaBase),
            h = b.some((E) => E?.isValidating),
            y = !b.some(
              (E) =>
                E?.errorMap && xs(Object.values(E.errorMap).filter(Boolean)),
            ),
            m = b.some((E) => E?.isTouched),
            g = b.some((E) => E?.isBlurred),
            v = m && ((o = d?.errorMap) == null ? void 0 : o.onMount),
            w = b.some((E) => E?.isDirty),
            M = !w,
            A = !!(
              ((a = d.errorMap) != null && a.onMount) ||
              b.some((E) => {
                var B;
                return (B = E?.errorMap) == null ? void 0 : B.onMount;
              })
            ),
            P = !!h;
          let R = u?.errors ?? [];
          (!f || d.errorMap !== f.errorMap) &&
            (R = Object.values(d.errorMap).reduce(
              (E, B) =>
                B === void 0
                  ? E
                  : B && Ft(B)
                    ? (E.push(B.form), E)
                    : (E.push(B), E),
              [],
            ));
          const O = R.length === 0,
            N = y && O,
            U =
              (d.submissionAttempts === 0 && !m && !A) ||
              (!P && !d.isSubmitting && N);
          let j = d.errorMap;
          if (
            (v &&
              ((R = R.filter((E) => E !== d.errorMap.onMount)),
              (j = Object.assign(j, { onMount: void 0 }))),
            u &&
              f &&
              u.errorMap === j &&
              u.fieldMeta === this.fieldMetaDerived.state &&
              u.errors === R &&
              u.isFieldsValidating === h &&
              u.isFieldsValid === y &&
              u.isFormValid === O &&
              u.isValid === N &&
              u.canSubmit === U &&
              u.isTouched === m &&
              u.isBlurred === g &&
              u.isPristine === M &&
              u.isDirty === w &&
              _e(f, d))
          )
            return u;
          let G = {
            ...d,
            errorMap: j,
            fieldMeta: this.fieldMetaDerived.state,
            errors: R,
            isFieldsValidating: h,
            isFieldsValid: y,
            isFormValid: O,
            isValid: N,
            canSubmit: U,
            isTouched: m,
            isBlurred: g,
            isPristine: M,
            isDirty: w,
          };
          const Q =
            ((p = this.options.transform) == null ? void 0 : p.deps) ?? [];
          if (
            Q.length !== this.prevTransformArray.length ||
            Q.some((E, B) => E !== this.prevTransformArray[B])
          ) {
            const E = Object.assign({}, this, { state: G });
            (l = this.options.transform) == null || l.fn(E),
              (G = E.state),
              (this.prevTransformArray = Q);
          }
          return G;
        },
      })),
      (this.handleSubmit = this.handleSubmit.bind(this)),
      this.update(t || {});
  }
  get state() {
    return this.store.state;
  }
  runValidator(t) {
    return Rt(t.validate)
      ? At[t.type](t.value, t.validate)
      : t.validate(t.value);
  }
  async handleSubmit(t) {
    var r, s, n, i, o, a;
    if (
      (this.baseStore.setState((l) => ({
        ...l,
        isSubmitted: !1,
        submissionAttempts: l.submissionAttempts + 1,
        isSubmitSuccessful: !1,
      })),
      !this.state.canSubmit)
    )
      return;
    this.baseStore.setState((l) => ({ ...l, isSubmitting: !0 }));
    const p = () => {
      this.baseStore.setState((l) => ({ ...l, isSubmitting: !1 }));
    };
    if ((await this.validateAllFields("submit"), !this.state.isFieldsValid)) {
      p(),
        (s = (r = this.options).onSubmitInvalid) == null ||
          s.call(r, { value: this.state.values, formApi: this });
      return;
    }
    if ((await this.validate("submit"), !this.state.isValid)) {
      p(),
        (i = (n = this.options).onSubmitInvalid) == null ||
          i.call(n, { value: this.state.values, formApi: this });
      return;
    }
    I(() => {
      Object.values(this.fieldInfo).forEach((l) => {
        var u, f, d;
        (d =
          (f = (u = l.instance) == null ? void 0 : u.options.listeners) == null
            ? void 0
            : f.onSubmit) == null ||
          d.call(f, { value: l.instance.state.value, fieldApi: l.instance });
      });
    });
    try {
      await ((a = (o = this.options).onSubmit) == null
        ? void 0
        : a.call(o, {
            value: this.state.values,
            formApi: this,
            meta: t ?? this.options.onSubmitMeta,
          })),
        I(() => {
          this.baseStore.setState((l) => ({
            ...l,
            isSubmitted: !0,
            isSubmitSuccessful: !0,
          })),
            p();
        });
    } catch (l) {
      throw (
        (this.baseStore.setState((u) => ({ ...u, isSubmitSuccessful: !1 })),
        p(),
        l)
      );
    }
  }
  setErrorMap(t) {
    this.baseStore.setState((r) => ({
      ...r,
      errorMap: { ...r.errorMap, ...t },
    }));
  }
}
function Le(e) {
  if (e) {
    if (Ft(e)) {
      const t = Le(e.form).formError,
        r = e.fields;
      return { formError: t, fieldErrors: r };
    }
    return { formError: e };
  }
  return { formError: void 0 };
}
function ae(e) {
  switch (e) {
    case "submit":
      return "onSubmit";
    case "blur":
      return "onBlur";
    case "mount":
      return "onMount";
    case "server":
      return "onServer";
    case "change":
    default:
      return "onChange";
  }
}
class Ls {
  constructor(t) {
    (this.options = {}),
      (this.mount = () => {
        var r, s;
        const n = this.store.mount();
        this.options.defaultValue !== void 0 &&
          this.form.setFieldValue(this.name, this.options.defaultValue, {
            dontUpdateMeta: !0,
          });
        const i = this.getInfo();
        (i.instance = this), this.update(this.options);
        const { onMount: o } = this.options.validators || {};
        if (o) {
          const a = this.runValidator({
            validate: o,
            value: {
              value: this.state.value,
              fieldApi: this,
              validationSource: "field",
            },
            type: "validate",
          });
          a &&
            this.setMeta((p) => ({
              ...p,
              errorMap: { ...p?.errorMap, onMount: a },
            }));
        }
        return (
          (s = (r = this.options.listeners) == null ? void 0 : r.onMount) ==
            null || s.call(r, { value: this.state.value, fieldApi: this }),
          n
        );
      }),
      (this.update = (r) => {
        if (this.state.value === void 0) {
          const s = Et(r.form.options.defaultValues, r.name);
          r.defaultValue !== void 0
            ? this.setValue(r.defaultValue, { dontUpdateMeta: !0 })
            : s !== void 0 && this.setValue(s, { dontUpdateMeta: !0 });
        }
        this.form.getFieldMeta(this.name) === void 0 &&
          this.setMeta(this.state.meta),
          (this.options = r),
          (this.name = r.name);
      }),
      (this.getValue = () => this.form.getFieldValue(this.name)),
      (this.setValue = (r, s) => {
        var n, i;
        this.form.setFieldValue(this.name, r, s),
          (i = (n = this.options.listeners) == null ? void 0 : n.onChange) ==
            null || i.call(n, { value: this.state.value, fieldApi: this }),
          this.validate("change");
      }),
      (this.getMeta = () => this.store.state.meta),
      (this.setMeta = (r) => this.form.setFieldMeta(this.name, r)),
      (this.getInfo = () => this.form.getFieldInfo(this.name)),
      (this.pushValue = (r, s) => {
        var n, i;
        this.form.pushFieldValue(this.name, r, s),
          (i = (n = this.options.listeners) == null ? void 0 : n.onChange) ==
            null || i.call(n, { value: this.state.value, fieldApi: this });
      }),
      (this.insertValue = (r, s, n) => {
        var i, o;
        this.form.insertFieldValue(this.name, r, s, n),
          (o = (i = this.options.listeners) == null ? void 0 : i.onChange) ==
            null || o.call(i, { value: this.state.value, fieldApi: this });
      }),
      (this.replaceValue = (r, s, n) => {
        var i, o;
        this.form.replaceFieldValue(this.name, r, s, n),
          (o = (i = this.options.listeners) == null ? void 0 : i.onChange) ==
            null || o.call(i, { value: this.state.value, fieldApi: this });
      }),
      (this.removeValue = (r, s) => {
        var n, i;
        this.form.removeFieldValue(this.name, r, s),
          (i = (n = this.options.listeners) == null ? void 0 : n.onChange) ==
            null || i.call(n, { value: this.state.value, fieldApi: this });
      }),
      (this.swapValues = (r, s, n) => {
        var i, o;
        this.form.swapFieldValues(this.name, r, s, n),
          (o = (i = this.options.listeners) == null ? void 0 : i.onChange) ==
            null || o.call(i, { value: this.state.value, fieldApi: this });
      }),
      (this.moveValue = (r, s, n) => {
        var i, o;
        this.form.moveFieldValues(this.name, r, s, n),
          (o = (i = this.options.listeners) == null ? void 0 : i.onChange) ==
            null || o.call(i, { value: this.state.value, fieldApi: this });
      }),
      (this.getLinkedFields = (r) => {
        const s = Object.values(this.form.fieldInfo),
          n = [];
        for (const i of s) {
          if (!i.instance) continue;
          const { onChangeListenTo: o, onBlurListenTo: a } =
            i.instance.options.validators || {};
          r === "change" && o?.includes(this.name) && n.push(i.instance),
            r === "blur" && a?.includes(this.name) && n.push(i.instance);
        }
        return n;
      }),
      (this.validateSync = (r, s) => {
        const n = De(r, this.options),
          o = this.getLinkedFields(r).reduce((l, u) => {
            const f = De(r, u.options);
            return (
              f.forEach((d) => {
                d.field = u;
              }),
              l.concat(f)
            );
          }, []);
        let a = !1;
        I(() => {
          const l = (u, f) => {
            const d = ee(f.cause),
              b = f.validate
                ? lt(
                    u.runValidator({
                      validate: f.validate,
                      value: {
                        value: u.store.state.value,
                        validationSource: "field",
                        fieldApi: u,
                      },
                      type: "validate",
                    }),
                  )
                : s[d];
            u.state.meta.errorMap[d] !== b &&
              u.setMeta((h) => ({
                ...h,
                errorMap: { ...h.errorMap, [ee(f.cause)]: b || s[d] },
              })),
              (b || s[d]) && (a = !0);
          };
          for (const u of n) l(this, u);
          for (const u of o) u.validate && l(u.field, u);
        });
        const p = ee("submit");
        return (
          this.state.meta.errorMap[p] &&
            r !== "submit" &&
            !a &&
            this.setMeta((l) => ({
              ...l,
              errorMap: { ...l.errorMap, [p]: void 0 },
            })),
          { hasErrored: a }
        );
      }),
      (this.validateAsync = async (r, s) => {
        const n = Be(r, this.options),
          i = await s,
          o = this.getLinkedFields(r),
          a = o.reduce((d, b) => {
            const h = Be(r, b.options);
            return (
              h.forEach((y) => {
                y.field = b;
              }),
              d.concat(h)
            );
          }, []);
        this.state.meta.isValidating ||
          this.setMeta((d) => ({ ...d, isValidating: !0 }));
        for (const d of o) d.setMeta((b) => ({ ...b, isValidating: !0 }));
        const p = [],
          l = [],
          u = (d, b, h) => {
            const y = ee(b.cause),
              m = d.getInfo().validationMetaMap[y];
            m?.lastAbortController.abort();
            const g = new AbortController();
            (this.getInfo().validationMetaMap[y] = { lastAbortController: g }),
              h.push(
                new Promise(async (v) => {
                  var w;
                  let M;
                  try {
                    M = await new Promise((O, N) => {
                      this.timeoutIds[b.cause] &&
                        clearTimeout(this.timeoutIds[b.cause]),
                        (this.timeoutIds[b.cause] = setTimeout(async () => {
                          if (g.signal.aborted) return O(void 0);
                          try {
                            O(
                              await this.runValidator({
                                validate: b.validate,
                                value: {
                                  value: d.store.state.value,
                                  fieldApi: d,
                                  signal: g.signal,
                                  validationSource: "field",
                                },
                                type: "validateAsync",
                              }),
                            );
                          } catch (U) {
                            N(U);
                          }
                        }, b.debounceMs));
                    });
                  } catch (O) {
                    M = O;
                  }
                  if (g.signal.aborted) return v(void 0);
                  const A = lt(M),
                    P = (w = i[this.name]) == null ? void 0 : w[y],
                    R = A || P;
                  d.setMeta((O) => ({
                    ...O,
                    errorMap: { ...O?.errorMap, [y]: R },
                  })),
                    v(R);
                }),
              );
          };
        for (const d of n) d.validate && u(this, d, p);
        for (const d of a) d.validate && u(d.field, d, l);
        let f = [];
        (p.length || l.length) &&
          ((f = await Promise.all(p)), await Promise.all(l)),
          this.setMeta((d) => ({ ...d, isValidating: !1 }));
        for (const d of o) d.setMeta((b) => ({ ...b, isValidating: !1 }));
        return f.filter(Boolean);
      }),
      (this.validate = (r, s) => {
        var n;
        if (!this.state.meta.isTouched) return [];
        const { fieldsErrorMap: i } = s?.skipFormValidation
            ? { fieldsErrorMap: {} }
            : this.form.validateSync(r),
          { hasErrored: o } = this.validateSync(r, i[this.name] ?? {});
        if (o && !this.options.asyncAlways)
          return (
            (n = this.getInfo().validationMetaMap[ee(r)]) == null ||
              n.lastAbortController.abort(),
            this.state.meta.errors
          );
        const a = s?.skipFormValidation
          ? Promise.resolve({})
          : this.form.validateAsync(r);
        return this.validateAsync(r, a);
      }),
      (this.handleChange = (r) => {
        this.setValue(r);
      }),
      (this.handleBlur = () => {
        var r, s;
        this.state.meta.isTouched ||
          (this.setMeta((i) => ({ ...i, isTouched: !0 })),
          this.validate("change")),
          this.state.meta.isBlurred ||
            this.setMeta((i) => ({ ...i, isBlurred: !0 })),
          this.validate("blur"),
          (s = (r = this.options.listeners) == null ? void 0 : r.onBlur) ==
            null || s.call(r, { value: this.state.value, fieldApi: this });
      }),
      (this.form = t.form),
      (this.name = t.name),
      (this.timeoutIds = {}),
      (this.store = new ke({
        deps: [this.form.store],
        fn: () => {
          const r = this.form.getFieldValue(this.name),
            s = this.form.getFieldMeta(this.name) ?? {
              ...fe,
              ...t.defaultMeta,
            };
          return { value: r, meta: s };
        },
      })),
      (this.options = t);
  }
  get state() {
    return this.store.state;
  }
  runValidator(t) {
    return Rt(t.validate)
      ? At[t.type](t.value, t.validate)
      : t.validate(t.value);
  }
  setErrorMap(t) {
    this.setMeta((r) => ({ ...r, errorMap: { ...r.errorMap, ...t } }));
  }
}
function lt(e) {
  if (e) return e;
}
function ee(e) {
  switch (e) {
    case "submit":
      return "onSubmit";
    case "blur":
      return "onBlur";
    case "mount":
      return "onMount";
    case "server":
      return "onServer";
    case "change":
    default:
      return "onChange";
  }
}
const he = typeof window < "u" ? C.useLayoutEffect : C.useEffect;
function Us(e) {
  const [t] = C.useState(() => {
    const s = new Ls({ ...e, form: e.form, name: e.name });
    return (s.Field = Ot), s;
  });
  return (
    he(t.mount, [t]),
    he(() => {
      t.update(e);
    }),
    ze(
      t.store,
      e.mode === "array"
        ? (r) => [r.meta, Object.keys(r.value ?? []).length]
        : void 0,
    ),
    t
  );
}
const Ot = ({ children: e, ...t }) => {
  const r = Us(t),
    s = C.useMemo(() => ye(e, r), [e, r, r.state.value, r.state.meta]);
  return de.jsx(de.Fragment, { children: s });
};
function js({ form: e, selector: t, children: r }) {
  const s = ze(e.store, t);
  return ye(r, s);
}
function En(e) {
  const [t] = C.useState(() => {
    const r = new Ds(e),
      s = r;
    return (
      (s.Field = function (i) {
        return de.jsx(Ot, { ...i, form: r });
      }),
      (s.Subscribe = (n) =>
        de.jsx(js, { form: r, selector: n.selector, children: n.children })),
      s
    );
  });
  return (
    he(t.mount, []),
    ze(t.store, (r) => r.isSubmitting),
    he(() => {
      t.update(e);
    }),
    t
  );
}
function Tt(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Is } = Object.prototype,
  { getPrototypeOf: Je } = Object,
  be = ((e) => (t) => {
    const r = Is.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  D = (e) => ((e = e.toLowerCase()), (t) => be(t) === e),
  ve = (e) => (t) => typeof t === e,
  { isArray: W } = Array,
  se = ve("undefined");
function $s(e) {
  return (
    e !== null &&
    !se(e) &&
    e.constructor !== null &&
    !se(e.constructor) &&
    k(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const _t = D("ArrayBuffer");
function qs(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && _t(e.buffer)),
    t
  );
}
const Hs = ve("string"),
  k = ve("function"),
  Ct = ve("number"),
  ge = (e) => e !== null && typeof e == "object",
  zs = (e) => e === !0 || e === !1,
  le = (e) => {
    if (be(e) !== "object") return !1;
    const t = Je(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Ks = D("Date"),
  Js = D("File"),
  Ws = D("Blob"),
  Xs = D("FileList"),
  Gs = (e) => ge(e) && k(e.pipe),
  Qs = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (k(e.append) &&
          ((t = be(e)) === "formdata" ||
            (t === "object" &&
              k(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Zs = D("URLSearchParams"),
  [Ys, er, tr, sr] = ["ReadableStream", "Request", "Response", "Headers"].map(
    D,
  ),
  rr = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function re(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let s, n;
  if ((typeof e != "object" && (e = [e]), W(e)))
    for (s = 0, n = e.length; s < n; s++) t.call(null, e[s], s, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = i.length;
    let a;
    for (s = 0; s < o; s++) (a = i[s]), t.call(null, e[a], a, e);
  }
}
function Pt(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let s = r.length,
    n;
  for (; s-- > 0; ) if (((n = r[s]), t === n.toLowerCase())) return n;
  return null;
}
const H =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  Vt = (e) => !se(e) && e !== H;
function Ue() {
  const { caseless: e } = (Vt(this) && this) || {},
    t = {},
    r = (s, n) => {
      const i = (e && Pt(t, n)) || n;
      le(t[i]) && le(s)
        ? (t[i] = Ue(t[i], s))
        : le(s)
          ? (t[i] = Ue({}, s))
          : W(s)
            ? (t[i] = s.slice())
            : (t[i] = s);
    };
  for (let s = 0, n = arguments.length; s < n; s++)
    arguments[s] && re(arguments[s], r);
  return t;
}
const nr = (e, t, r, { allOwnKeys: s } = {}) => (
    re(
      t,
      (n, i) => {
        r && k(n) ? (e[i] = Tt(n, r)) : (e[i] = n);
      },
      { allOwnKeys: s },
    ),
    e
  ),
  ir = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  or = (e, t, r, s) => {
    (e.prototype = Object.create(t.prototype, s)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      r && Object.assign(e.prototype, r);
  },
  ar = (e, t, r, s) => {
    let n, i, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (n = Object.getOwnPropertyNames(e), i = n.length; i-- > 0; )
        (o = n[i]), (!s || s(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = r !== !1 && Je(e);
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t;
  },
  lr = (e, t, r) => {
    (e = String(e)),
      (r === void 0 || r > e.length) && (r = e.length),
      (r -= t.length);
    const s = e.indexOf(t, r);
    return s !== -1 && s === r;
  },
  ur = (e) => {
    if (!e) return null;
    if (W(e)) return e;
    let t = e.length;
    if (!Ct(t)) return null;
    const r = new Array(t);
    for (; t-- > 0; ) r[t] = e[t];
    return r;
  },
  cr = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Je(Uint8Array)),
  dr = (e, t) => {
    const s = (e && e[Symbol.iterator]).call(e);
    let n;
    for (; (n = s.next()) && !n.done; ) {
      const i = n.value;
      t.call(e, i[0], i[1]);
    }
  },
  fr = (e, t) => {
    let r;
    const s = [];
    for (; (r = e.exec(t)) !== null; ) s.push(r);
    return s;
  },
  hr = D("HTMLFormElement"),
  pr = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, s, n) {
      return s.toUpperCase() + n;
    }),
  ut = (
    ({ hasOwnProperty: e }) =>
    (t, r) =>
      e.call(t, r)
  )(Object.prototype),
  mr = D("RegExp"),
  xt = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e),
      s = {};
    re(r, (n, i) => {
      let o;
      (o = t(n, i, e)) !== !1 && (s[i] = o || n);
    }),
      Object.defineProperties(e, s);
  },
  yr = (e) => {
    xt(e, (t, r) => {
      if (k(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
        return !1;
      const s = e[r];
      if (k(s)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  br = (e, t) => {
    const r = {},
      s = (n) => {
        n.forEach((i) => {
          r[i] = !0;
        });
      };
    return W(e) ? s(e) : s(String(e).split(t)), r;
  },
  vr = () => {},
  gr = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function Sr(e) {
  return !!(
    e &&
    k(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const wr = (e) => {
    const t = new Array(10),
      r = (s, n) => {
        if (ge(s)) {
          if (t.indexOf(s) >= 0) return;
          if (!("toJSON" in s)) {
            t[n] = s;
            const i = W(s) ? [] : {};
            return (
              re(s, (o, a) => {
                const p = r(o, n + 1);
                !se(p) && (i[a] = p);
              }),
              (t[n] = void 0),
              i
            );
          }
        }
        return s;
      };
    return r(e, 0);
  },
  Mr = D("AsyncFunction"),
  Er = (e) => e && (ge(e) || k(e)) && k(e.then) && k(e.catch),
  kt = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((r, s) => (
            H.addEventListener(
              "message",
              ({ source: n, data: i }) => {
                n === H && i === r && s.length && s.shift()();
              },
              !1,
            ),
            (n) => {
              s.push(n), H.postMessage(r, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (r) => setTimeout(r))(
    typeof setImmediate == "function",
    k(H.postMessage),
  ),
  Fr =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(H)
      : (typeof process < "u" && process.nextTick) || kt,
  c = {
    isArray: W,
    isArrayBuffer: _t,
    isBuffer: $s,
    isFormData: Qs,
    isArrayBufferView: qs,
    isString: Hs,
    isNumber: Ct,
    isBoolean: zs,
    isObject: ge,
    isPlainObject: le,
    isReadableStream: Ys,
    isRequest: er,
    isResponse: tr,
    isHeaders: sr,
    isUndefined: se,
    isDate: Ks,
    isFile: Js,
    isBlob: Ws,
    isRegExp: mr,
    isFunction: k,
    isStream: Gs,
    isURLSearchParams: Zs,
    isTypedArray: cr,
    isFileList: Xs,
    forEach: re,
    merge: Ue,
    extend: nr,
    trim: rr,
    stripBOM: ir,
    inherits: or,
    toFlatObject: ar,
    kindOf: be,
    kindOfTest: D,
    endsWith: lr,
    toArray: ur,
    forEachEntry: dr,
    matchAll: fr,
    isHTMLForm: hr,
    hasOwnProperty: ut,
    hasOwnProp: ut,
    reduceDescriptors: xt,
    freezeMethods: yr,
    toObjectSet: br,
    toCamelCase: pr,
    noop: vr,
    toFiniteNumber: gr,
    findKey: Pt,
    global: H,
    isContextDefined: Vt,
    isSpecCompliantForm: Sr,
    toJSONObject: wr,
    isAsyncFn: Mr,
    isThenable: Er,
    setImmediate: kt,
    asap: Fr,
  };
function S(e, t, r, s, n) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    r && (this.config = r),
    s && (this.request = s),
    n && ((this.response = n), (this.status = n.status ? n.status : null));
}
c.inherits(S, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: c.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Nt = S.prototype,
  Bt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Bt[e] = { value: e };
});
Object.defineProperties(S, Bt);
Object.defineProperty(Nt, "isAxiosError", { value: !0 });
S.from = (e, t, r, s, n, i) => {
  const o = Object.create(Nt);
  return (
    c.toFlatObject(
      e,
      o,
      function (p) {
        return p !== Error.prototype;
      },
      (a) => a !== "isAxiosError",
    ),
    S.call(o, e.message, t, r, s, n),
    (o.cause = e),
    (o.name = e.name),
    i && Object.assign(o, i),
    o
  );
};
const Ar = null;
function je(e) {
  return c.isPlainObject(e) || c.isArray(e);
}
function Dt(e) {
  return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ct(e, t, r) {
  return e
    ? e
        .concat(t)
        .map(function (n, i) {
          return (n = Dt(n)), !r && i ? "[" + n + "]" : n;
        })
        .join(r ? "." : "")
    : t;
}
function Rr(e) {
  return c.isArray(e) && !e.some(je);
}
const Or = c.toFlatObject(c, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Se(e, t, r) {
  if (!c.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (r = c.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, m) {
        return !c.isUndefined(m[y]);
      },
    ));
  const s = r.metaTokens,
    n = r.visitor || u,
    i = r.dots,
    o = r.indexes,
    p = (r.Blob || (typeof Blob < "u" && Blob)) && c.isSpecCompliantForm(t);
  if (!c.isFunction(n)) throw new TypeError("visitor must be a function");
  function l(h) {
    if (h === null) return "";
    if (c.isDate(h)) return h.toISOString();
    if (!p && c.isBlob(h))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(h) || c.isTypedArray(h)
      ? p && typeof Blob == "function"
        ? new Blob([h])
        : Buffer.from(h)
      : h;
  }
  function u(h, y, m) {
    let g = h;
    if (h && !m && typeof h == "object") {
      if (c.endsWith(y, "{}"))
        (y = s ? y : y.slice(0, -2)), (h = JSON.stringify(h));
      else if (
        (c.isArray(h) && Rr(h)) ||
        ((c.isFileList(h) || c.endsWith(y, "[]")) && (g = c.toArray(h)))
      )
        return (
          (y = Dt(y)),
          g.forEach(function (w, M) {
            !(c.isUndefined(w) || w === null) &&
              t.append(
                o === !0 ? ct([y], M, i) : o === null ? y : y + "[]",
                l(w),
              );
          }),
          !1
        );
    }
    return je(h) ? !0 : (t.append(ct(m, y, i), l(h)), !1);
  }
  const f = [],
    d = Object.assign(Or, {
      defaultVisitor: u,
      convertValue: l,
      isVisitable: je,
    });
  function b(h, y) {
    if (!c.isUndefined(h)) {
      if (f.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      f.push(h),
        c.forEach(h, function (g, v) {
          (!(c.isUndefined(g) || g === null) &&
            n.call(t, g, c.isString(v) ? v.trim() : v, y, d)) === !0 &&
            b(g, y ? y.concat(v) : [v]);
        }),
        f.pop();
    }
  }
  if (!c.isObject(e)) throw new TypeError("data must be an object");
  return b(e), t;
}
function dt(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (s) {
    return t[s];
  });
}
function We(e, t) {
  (this._pairs = []), e && Se(e, this, t);
}
const Lt = We.prototype;
Lt.append = function (t, r) {
  this._pairs.push([t, r]);
};
Lt.toString = function (t) {
  const r = t
    ? function (s) {
        return t.call(this, s, dt);
      }
    : dt;
  return this._pairs
    .map(function (n) {
      return r(n[0]) + "=" + r(n[1]);
    }, "")
    .join("&");
};
function Tr(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Ut(e, t, r) {
  if (!t) return e;
  const s = (r && r.encode) || Tr;
  c.isFunction(r) && (r = { serialize: r });
  const n = r && r.serialize;
  let i;
  if (
    (n
      ? (i = n(t, r))
      : (i = c.isURLSearchParams(t) ? t.toString() : new We(t, r).toString(s)),
    i)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class ft {
  constructor() {
    this.handlers = [];
  }
  use(t, r, s) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: r,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    c.forEach(this.handlers, function (s) {
      s !== null && t(s);
    });
  }
}
const jt = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  _r = typeof URLSearchParams < "u" ? URLSearchParams : We,
  Cr = typeof FormData < "u" ? FormData : null,
  Pr = typeof Blob < "u" ? Blob : null,
  Vr = {
    isBrowser: !0,
    classes: { URLSearchParams: _r, FormData: Cr, Blob: Pr },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Xe = typeof window < "u" && typeof document < "u",
  Ie = (typeof navigator == "object" && navigator) || void 0,
  xr =
    Xe &&
    (!Ie || ["ReactNative", "NativeScript", "NS"].indexOf(Ie.product) < 0),
  kr =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Nr = (Xe && window.location.href) || "http://localhost",
  Br = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Xe,
        hasStandardBrowserEnv: xr,
        hasStandardBrowserWebWorkerEnv: kr,
        navigator: Ie,
        origin: Nr,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  V = { ...Br, ...Vr };
function Dr(e, t) {
  return Se(
    e,
    new V.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (r, s, n, i) {
          return V.isNode && c.isBuffer(r)
            ? (this.append(s, r.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function Lr(e) {
  return c
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function Ur(e) {
  const t = {},
    r = Object.keys(e);
  let s;
  const n = r.length;
  let i;
  for (s = 0; s < n; s++) (i = r[s]), (t[i] = e[i]);
  return t;
}
function It(e) {
  function t(r, s, n, i) {
    let o = r[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o),
      p = i >= r.length;
    return (
      (o = !o && c.isArray(n) ? n.length : o),
      p
        ? (c.hasOwnProp(n, o) ? (n[o] = [n[o], s]) : (n[o] = s), !a)
        : ((!n[o] || !c.isObject(n[o])) && (n[o] = []),
          t(r, s, n[o], i) && c.isArray(n[o]) && (n[o] = Ur(n[o])),
          !a)
    );
  }
  if (c.isFormData(e) && c.isFunction(e.entries)) {
    const r = {};
    return (
      c.forEachEntry(e, (s, n) => {
        t(Lr(s), n, r, 0);
      }),
      r
    );
  }
  return null;
}
function jr(e, t, r) {
  if (c.isString(e))
    try {
      return (t || JSON.parse)(e), c.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (r || JSON.stringify)(e);
}
const ne = {
  transitional: jt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, r) {
      const s = r.getContentType() || "",
        n = s.indexOf("application/json") > -1,
        i = c.isObject(t);
      if ((i && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t)))
        return n ? JSON.stringify(It(t)) : t;
      if (
        c.isArrayBuffer(t) ||
        c.isBuffer(t) ||
        c.isStream(t) ||
        c.isFile(t) ||
        c.isBlob(t) ||
        c.isReadableStream(t)
      )
        return t;
      if (c.isArrayBufferView(t)) return t.buffer;
      if (c.isURLSearchParams(t))
        return (
          r.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let a;
      if (i) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return Dr(t, this.formSerializer).toString();
        if ((a = c.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
          const p = this.env && this.env.FormData;
          return Se(
            a ? { "files[]": t } : t,
            p && new p(),
            this.formSerializer,
          );
        }
      }
      return i || n ? (r.setContentType("application/json", !1), jr(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const r = this.transitional || ne.transitional,
        s = r && r.forcedJSONParsing,
        n = this.responseType === "json";
      if (c.isResponse(t) || c.isReadableStream(t)) return t;
      if (t && c.isString(t) && ((s && !this.responseType) || n)) {
        const o = !(r && r.silentJSONParsing) && n;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? S.from(a, S.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: V.classes.FormData, Blob: V.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
c.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ne.headers[e] = {};
});
const Ir = c.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  $r = (e) => {
    const t = {};
    let r, s, n;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (o) {
            (n = o.indexOf(":")),
              (r = o.substring(0, n).trim().toLowerCase()),
              (s = o.substring(n + 1).trim()),
              !(!r || (t[r] && Ir[r])) &&
                (r === "set-cookie"
                  ? t[r]
                    ? t[r].push(s)
                    : (t[r] = [s])
                  : (t[r] = t[r] ? t[r] + ", " + s : s));
          }),
      t
    );
  },
  ht = Symbol("internals");
function te(e) {
  return e && String(e).trim().toLowerCase();
}
function ue(e) {
  return e === !1 || e == null ? e : c.isArray(e) ? e.map(ue) : String(e);
}
function qr(e) {
  const t = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = r.exec(e)); ) t[s[1]] = s[2];
  return t;
}
const Hr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Pe(e, t, r, s, n) {
  if (c.isFunction(s)) return s.call(this, t, r);
  if ((n && (t = r), !!c.isString(t))) {
    if (c.isString(s)) return t.indexOf(s) !== -1;
    if (c.isRegExp(s)) return s.test(t);
  }
}
function zr(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, r, s) => r.toUpperCase() + s);
}
function Kr(e, t) {
  const r = c.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + r, {
      value: function (n, i, o) {
        return this[s].call(this, t, n, i, o);
      },
      configurable: !0,
    });
  });
}
let x = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, s) {
    const n = this;
    function i(a, p, l) {
      const u = te(p);
      if (!u) throw new Error("header name must be a non-empty string");
      const f = c.findKey(n, u);
      (!f || n[f] === void 0 || l === !0 || (l === void 0 && n[f] !== !1)) &&
        (n[f || p] = ue(a));
    }
    const o = (a, p) => c.forEach(a, (l, u) => i(l, u, p));
    if (c.isPlainObject(t) || t instanceof this.constructor) o(t, r);
    else if (c.isString(t) && (t = t.trim()) && !Hr(t)) o($r(t), r);
    else if (c.isHeaders(t)) for (const [a, p] of t.entries()) i(p, a, s);
    else t != null && i(r, t, s);
    return this;
  }
  get(t, r) {
    if (((t = te(t)), t)) {
      const s = c.findKey(this, t);
      if (s) {
        const n = this[s];
        if (!r) return n;
        if (r === !0) return qr(n);
        if (c.isFunction(r)) return r.call(this, n, s);
        if (c.isRegExp(r)) return r.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (((t = te(t)), t)) {
      const s = c.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!r || Pe(this, this[s], s, r)));
    }
    return !1;
  }
  delete(t, r) {
    const s = this;
    let n = !1;
    function i(o) {
      if (((o = te(o)), o)) {
        const a = c.findKey(s, o);
        a && (!r || Pe(s, s[a], a, r)) && (delete s[a], (n = !0));
      }
    }
    return c.isArray(t) ? t.forEach(i) : i(t), n;
  }
  clear(t) {
    const r = Object.keys(this);
    let s = r.length,
      n = !1;
    for (; s--; ) {
      const i = r[s];
      (!t || Pe(this, this[i], i, t, !0)) && (delete this[i], (n = !0));
    }
    return n;
  }
  normalize(t) {
    const r = this,
      s = {};
    return (
      c.forEach(this, (n, i) => {
        const o = c.findKey(s, i);
        if (o) {
          (r[o] = ue(n)), delete r[i];
          return;
        }
        const a = t ? zr(i) : String(i).trim();
        a !== i && delete r[i], (r[a] = ue(n)), (s[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = Object.create(null);
    return (
      c.forEach(this, (s, n) => {
        s != null && s !== !1 && (r[n] = t && c.isArray(s) ? s.join(", ") : s);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const s = new this(t);
    return r.forEach((n) => s.set(n)), s;
  }
  static accessor(t) {
    const s = (this[ht] = this[ht] = { accessors: {} }).accessors,
      n = this.prototype;
    function i(o) {
      const a = te(o);
      s[a] || (Kr(n, o), (s[a] = !0));
    }
    return c.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
x.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
c.reduceDescriptors(x.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[r] = s;
    },
  };
});
c.freezeMethods(x);
function Ve(e, t) {
  const r = this || ne,
    s = t || r,
    n = x.from(s.headers);
  let i = s.data;
  return (
    c.forEach(e, function (a) {
      i = a.call(r, i, n.normalize(), t ? t.status : void 0);
    }),
    n.normalize(),
    i
  );
}
function $t(e) {
  return !!(e && e.__CANCEL__);
}
function X(e, t, r) {
  S.call(this, e ?? "canceled", S.ERR_CANCELED, t, r),
    (this.name = "CanceledError");
}
c.inherits(X, S, { __CANCEL__: !0 });
function qt(e, t, r) {
  const s = r.config.validateStatus;
  !r.status || !s || s(r.status)
    ? e(r)
    : t(
        new S(
          "Request failed with status code " + r.status,
          [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r,
        ),
      );
}
function Jr(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Wr(e, t) {
  e = e || 10;
  const r = new Array(e),
    s = new Array(e);
  let n = 0,
    i = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (p) {
      const l = Date.now(),
        u = s[i];
      o || (o = l), (r[n] = p), (s[n] = l);
      let f = i,
        d = 0;
      for (; f !== n; ) (d += r[f++]), (f = f % e);
      if (((n = (n + 1) % e), n === i && (i = (i + 1) % e), l - o < t)) return;
      const b = u && l - u;
      return b ? Math.round((d * 1e3) / b) : void 0;
    }
  );
}
function Xr(e, t) {
  let r = 0,
    s = 1e3 / t,
    n,
    i;
  const o = (l, u = Date.now()) => {
    (r = u), (n = null), i && (clearTimeout(i), (i = null)), e.apply(null, l);
  };
  return [
    (...l) => {
      const u = Date.now(),
        f = u - r;
      f >= s
        ? o(l, u)
        : ((n = l),
          i ||
            (i = setTimeout(() => {
              (i = null), o(n);
            }, s - f)));
    },
    () => n && o(n),
  ];
}
const pe = (e, t, r = 3) => {
    let s = 0;
    const n = Wr(50, 250);
    return Xr((i) => {
      const o = i.loaded,
        a = i.lengthComputable ? i.total : void 0,
        p = o - s,
        l = n(p),
        u = o <= a;
      s = o;
      const f = {
        loaded: o,
        total: a,
        progress: a ? o / a : void 0,
        bytes: p,
        rate: l || void 0,
        estimated: l && a && u ? (a - o) / l : void 0,
        event: i,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, r);
  },
  pt = (e, t) => {
    const r = e != null;
    return [(s) => t[0]({ lengthComputable: r, total: e, loaded: s }), t[1]];
  },
  mt =
    (e) =>
    (...t) =>
      c.asap(() => e(...t)),
  Gr = V.hasStandardBrowserEnv
    ? ((e, t) => (r) => (
        (r = new URL(r, V.origin)),
        e.protocol === r.protocol &&
          e.host === r.host &&
          (t || e.port === r.port)
      ))(
        new URL(V.origin),
        V.navigator && /(msie|trident)/i.test(V.navigator.userAgent),
      )
    : () => !0,
  Qr = V.hasStandardBrowserEnv
    ? {
        write(e, t, r, s, n, i) {
          const o = [e + "=" + encodeURIComponent(t)];
          c.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()),
            c.isString(s) && o.push("path=" + s),
            c.isString(n) && o.push("domain=" + n),
            i === !0 && o.push("secure"),
            (document.cookie = o.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Zr(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Yr(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ht(e, t, r) {
  let s = !Zr(t);
  return e && (s || r == !1) ? Yr(e, t) : t;
}
const yt = (e) => (e instanceof x ? { ...e } : e);
function K(e, t) {
  t = t || {};
  const r = {};
  function s(l, u, f, d) {
    return c.isPlainObject(l) && c.isPlainObject(u)
      ? c.merge.call({ caseless: d }, l, u)
      : c.isPlainObject(u)
        ? c.merge({}, u)
        : c.isArray(u)
          ? u.slice()
          : u;
  }
  function n(l, u, f, d) {
    if (c.isUndefined(u)) {
      if (!c.isUndefined(l)) return s(void 0, l, f, d);
    } else return s(l, u, f, d);
  }
  function i(l, u) {
    if (!c.isUndefined(u)) return s(void 0, u);
  }
  function o(l, u) {
    if (c.isUndefined(u)) {
      if (!c.isUndefined(l)) return s(void 0, l);
    } else return s(void 0, u);
  }
  function a(l, u, f) {
    if (f in t) return s(l, u);
    if (f in e) return s(void 0, l);
  }
  const p = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (l, u, f) => n(yt(l), yt(u), f, !0),
  };
  return (
    c.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const f = p[u] || n,
        d = f(e[u], t[u], u);
      (c.isUndefined(d) && f !== a) || (r[u] = d);
    }),
    r
  );
}
const zt = (e) => {
    const t = K({}, e);
    let {
      data: r,
      withXSRFToken: s,
      xsrfHeaderName: n,
      xsrfCookieName: i,
      headers: o,
      auth: a,
    } = t;
    (t.headers = o = x.from(o)),
      (t.url = Ut(
        Ht(t.baseURL, t.url, t.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer,
      )),
      a &&
        o.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : ""),
            ),
        );
    let p;
    if (c.isFormData(r)) {
      if (V.hasStandardBrowserEnv || V.hasStandardBrowserWebWorkerEnv)
        o.setContentType(void 0);
      else if ((p = o.getContentType()) !== !1) {
        const [l, ...u] = p
          ? p
              .split(";")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        o.setContentType([l || "multipart/form-data", ...u].join("; "));
      }
    }
    if (
      V.hasStandardBrowserEnv &&
      (s && c.isFunction(s) && (s = s(t)), s || (s !== !1 && Gr(t.url)))
    ) {
      const l = n && i && Qr.read(i);
      l && o.set(n, l);
    }
    return t;
  },
  en = typeof XMLHttpRequest < "u",
  tn =
    en &&
    function (e) {
      return new Promise(function (r, s) {
        const n = zt(e);
        let i = n.data;
        const o = x.from(n.headers).normalize();
        let { responseType: a, onUploadProgress: p, onDownloadProgress: l } = n,
          u,
          f,
          d,
          b,
          h;
        function y() {
          b && b(),
            h && h(),
            n.cancelToken && n.cancelToken.unsubscribe(u),
            n.signal && n.signal.removeEventListener("abort", u);
        }
        let m = new XMLHttpRequest();
        m.open(n.method.toUpperCase(), n.url, !0), (m.timeout = n.timeout);
        function g() {
          if (!m) return;
          const w = x.from(
              "getAllResponseHeaders" in m && m.getAllResponseHeaders(),
            ),
            A = {
              data:
                !a || a === "text" || a === "json"
                  ? m.responseText
                  : m.response,
              status: m.status,
              statusText: m.statusText,
              headers: w,
              config: e,
              request: m,
            };
          qt(
            function (R) {
              r(R), y();
            },
            function (R) {
              s(R), y();
            },
            A,
          ),
            (m = null);
        }
        "onloadend" in m
          ? (m.onloadend = g)
          : (m.onreadystatechange = function () {
              !m ||
                m.readyState !== 4 ||
                (m.status === 0 &&
                  !(m.responseURL && m.responseURL.indexOf("file:") === 0)) ||
                setTimeout(g);
            }),
          (m.onabort = function () {
            m &&
              (s(new S("Request aborted", S.ECONNABORTED, e, m)), (m = null));
          }),
          (m.onerror = function () {
            s(new S("Network Error", S.ERR_NETWORK, e, m)), (m = null);
          }),
          (m.ontimeout = function () {
            let M = n.timeout
              ? "timeout of " + n.timeout + "ms exceeded"
              : "timeout exceeded";
            const A = n.transitional || jt;
            n.timeoutErrorMessage && (M = n.timeoutErrorMessage),
              s(
                new S(
                  M,
                  A.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
                  e,
                  m,
                ),
              ),
              (m = null);
          }),
          i === void 0 && o.setContentType(null),
          "setRequestHeader" in m &&
            c.forEach(o.toJSON(), function (M, A) {
              m.setRequestHeader(A, M);
            }),
          c.isUndefined(n.withCredentials) ||
            (m.withCredentials = !!n.withCredentials),
          a && a !== "json" && (m.responseType = n.responseType),
          l && (([d, h] = pe(l, !0)), m.addEventListener("progress", d)),
          p &&
            m.upload &&
            (([f, b] = pe(p)),
            m.upload.addEventListener("progress", f),
            m.upload.addEventListener("loadend", b)),
          (n.cancelToken || n.signal) &&
            ((u = (w) => {
              m &&
                (s(!w || w.type ? new X(null, e, m) : w),
                m.abort(),
                (m = null));
            }),
            n.cancelToken && n.cancelToken.subscribe(u),
            n.signal &&
              (n.signal.aborted ? u() : n.signal.addEventListener("abort", u)));
        const v = Jr(n.url);
        if (v && V.protocols.indexOf(v) === -1) {
          s(new S("Unsupported protocol " + v + ":", S.ERR_BAD_REQUEST, e));
          return;
        }
        m.send(i || null);
      });
    },
  sn = (e, t) => {
    const { length: r } = (e = e ? e.filter(Boolean) : []);
    if (t || r) {
      let s = new AbortController(),
        n;
      const i = function (l) {
        if (!n) {
          (n = !0), a();
          const u = l instanceof Error ? l : this.reason;
          s.abort(
            u instanceof S ? u : new X(u instanceof Error ? u.message : u),
          );
        }
      };
      let o =
        t &&
        setTimeout(() => {
          (o = null), i(new S(`timeout ${t} of ms exceeded`, S.ETIMEDOUT));
        }, t);
      const a = () => {
        e &&
          (o && clearTimeout(o),
          (o = null),
          e.forEach((l) => {
            l.unsubscribe
              ? l.unsubscribe(i)
              : l.removeEventListener("abort", i);
          }),
          (e = null));
      };
      e.forEach((l) => l.addEventListener("abort", i));
      const { signal: p } = s;
      return (p.unsubscribe = () => c.asap(a)), p;
    }
  },
  rn = function* (e, t) {
    let r = e.byteLength;
    if (r < t) {
      yield e;
      return;
    }
    let s = 0,
      n;
    for (; s < r; ) (n = s + t), yield e.slice(s, n), (s = n);
  },
  nn = async function* (e, t) {
    for await (const r of on(e)) yield* rn(r, t);
  },
  on = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: r, value: s } = await t.read();
        if (r) break;
        yield s;
      }
    } finally {
      await t.cancel();
    }
  },
  bt = (e, t, r, s) => {
    const n = nn(e, t);
    let i = 0,
      o,
      a = (p) => {
        o || ((o = !0), s && s(p));
      };
    return new ReadableStream(
      {
        async pull(p) {
          try {
            const { done: l, value: u } = await n.next();
            if (l) {
              a(), p.close();
              return;
            }
            let f = u.byteLength;
            if (r) {
              let d = (i += f);
              r(d);
            }
            p.enqueue(new Uint8Array(u));
          } catch (l) {
            throw (a(l), l);
          }
        },
        cancel(p) {
          return a(p), n.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  we =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Kt = we && typeof ReadableStream == "function",
  an =
    we &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Jt = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  ln =
    Kt &&
    Jt(() => {
      let e = !1;
      const t = new Request(V.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  vt = 64 * 1024,
  $e = Kt && Jt(() => c.isReadableStream(new Response("").body)),
  me = { stream: $e && ((e) => e.body) };
we &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !me[t] &&
        (me[t] = c.isFunction(e[t])
          ? (r) => r[t]()
          : (r, s) => {
              throw new S(
                `Response type '${t}' is not supported`,
                S.ERR_NOT_SUPPORT,
                s,
              );
            });
    });
  })(new Response());
const un = async (e) => {
    if (e == null) return 0;
    if (c.isBlob(e)) return e.size;
    if (c.isSpecCompliantForm(e))
      return (
        await new Request(V.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (c.isArrayBufferView(e) || c.isArrayBuffer(e)) return e.byteLength;
    if ((c.isURLSearchParams(e) && (e = e + ""), c.isString(e)))
      return (await an(e)).byteLength;
  },
  cn = async (e, t) => {
    const r = c.toFiniteNumber(e.getContentLength());
    return r ?? un(t);
  },
  dn =
    we &&
    (async (e) => {
      let {
        url: t,
        method: r,
        data: s,
        signal: n,
        cancelToken: i,
        timeout: o,
        onDownloadProgress: a,
        onUploadProgress: p,
        responseType: l,
        headers: u,
        withCredentials: f = "same-origin",
        fetchOptions: d,
      } = zt(e);
      l = l ? (l + "").toLowerCase() : "text";
      let b = sn([n, i && i.toAbortSignal()], o),
        h;
      const y =
        b &&
        b.unsubscribe &&
        (() => {
          b.unsubscribe();
        });
      let m;
      try {
        if (
          p &&
          ln &&
          r !== "get" &&
          r !== "head" &&
          (m = await cn(u, s)) !== 0
        ) {
          let A = new Request(t, { method: "POST", body: s, duplex: "half" }),
            P;
          if (
            (c.isFormData(s) &&
              (P = A.headers.get("content-type")) &&
              u.setContentType(P),
            A.body)
          ) {
            const [R, O] = pt(m, pe(mt(p)));
            s = bt(A.body, vt, R, O);
          }
        }
        c.isString(f) || (f = f ? "include" : "omit");
        const g = "credentials" in Request.prototype;
        h = new Request(t, {
          ...d,
          signal: b,
          method: r.toUpperCase(),
          headers: u.normalize().toJSON(),
          body: s,
          duplex: "half",
          credentials: g ? f : void 0,
        });
        let v = await fetch(h);
        const w = $e && (l === "stream" || l === "response");
        if ($e && (a || (w && y))) {
          const A = {};
          ["status", "statusText", "headers"].forEach((N) => {
            A[N] = v[N];
          });
          const P = c.toFiniteNumber(v.headers.get("content-length")),
            [R, O] = (a && pt(P, pe(mt(a), !0))) || [];
          v = new Response(
            bt(v.body, vt, R, () => {
              O && O(), y && y();
            }),
            A,
          );
        }
        l = l || "text";
        let M = await me[c.findKey(me, l) || "text"](v, e);
        return (
          !w && y && y(),
          await new Promise((A, P) => {
            qt(A, P, {
              data: M,
              headers: x.from(v.headers),
              status: v.status,
              statusText: v.statusText,
              config: e,
              request: h,
            });
          })
        );
      } catch (g) {
        throw (
          (y && y(),
          g && g.name === "TypeError" && /fetch/i.test(g.message)
            ? Object.assign(new S("Network Error", S.ERR_NETWORK, e, h), {
                cause: g.cause || g,
              })
            : S.from(g, g && g.code, e, h))
        );
      }
    }),
  qe = { http: Ar, xhr: tn, fetch: dn };
c.forEach(qe, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const gt = (e) => `- ${e}`,
  fn = (e) => c.isFunction(e) || e === null || e === !1,
  Wt = {
    getAdapter: (e) => {
      e = c.isArray(e) ? e : [e];
      const { length: t } = e;
      let r, s;
      const n = {};
      for (let i = 0; i < t; i++) {
        r = e[i];
        let o;
        if (
          ((s = r),
          !fn(r) && ((s = qe[(o = String(r)).toLowerCase()]), s === void 0))
        )
          throw new S(`Unknown adapter '${o}'`);
        if (s) break;
        n[o || "#" + i] = s;
      }
      if (!s) {
        const i = Object.entries(n).map(
          ([a, p]) =>
            `adapter ${a} ` +
            (p === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let o = t
          ? i.length > 1
            ? `since :
` +
              i.map(gt).join(`
`)
            : " " + gt(i[0])
          : "as no adapter specified";
        throw new S(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT",
        );
      }
      return s;
    },
    adapters: qe,
  };
function xe(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new X(null, e);
}
function St(e) {
  return (
    xe(e),
    (e.headers = x.from(e.headers)),
    (e.data = Ve.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Wt.getAdapter(e.adapter || ne.adapter)(e).then(
      function (s) {
        return (
          xe(e),
          (s.data = Ve.call(e, e.transformResponse, s)),
          (s.headers = x.from(s.headers)),
          s
        );
      },
      function (s) {
        return (
          $t(s) ||
            (xe(e),
            s &&
              s.response &&
              ((s.response.data = Ve.call(e, e.transformResponse, s.response)),
              (s.response.headers = x.from(s.response.headers)))),
          Promise.reject(s)
        );
      },
    )
  );
}
const Xt = "1.8.4",
  Me = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Me[e] = function (s) {
      return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const wt = {};
Me.transitional = function (t, r, s) {
  function n(i, o) {
    return (
      "[Axios v" +
      Xt +
      "] Transitional option '" +
      i +
      "'" +
      o +
      (s ? ". " + s : "")
    );
  }
  return (i, o, a) => {
    if (t === !1)
      throw new S(
        n(o, " has been removed" + (r ? " in " + r : "")),
        S.ERR_DEPRECATED,
      );
    return (
      r &&
        !wt[o] &&
        ((wt[o] = !0),
        console.warn(
          n(
            o,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future",
          ),
        )),
      t ? t(i, o, a) : !0
    );
  };
};
Me.spelling = function (t) {
  return (r, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function hn(e, t, r) {
  if (typeof e != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let n = s.length;
  for (; n-- > 0; ) {
    const i = s[n],
      o = t[i];
    if (o) {
      const a = e[i],
        p = a === void 0 || o(a, i, e);
      if (p !== !0)
        throw new S("option " + i + " must be " + p, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new S("Unknown option " + i, S.ERR_BAD_OPTION);
  }
}
const ce = { assertOptions: hn, validators: Me },
  L = ce.validators;
let z = class {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new ft(), response: new ft() });
  }
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (s) {
      if (s instanceof Error) {
        let n = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(n)
          : (n = new Error());
        const i = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack
            ? i &&
              !String(s.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (s.stack +=
                `
` + i)
            : (s.stack = i);
        } catch {}
      }
      throw s;
    }
  }
  _request(t, r) {
    typeof t == "string" ? ((r = r || {}), (r.url = t)) : (r = t || {}),
      (r = K(this.defaults, r));
    const { transitional: s, paramsSerializer: n, headers: i } = r;
    s !== void 0 &&
      ce.assertOptions(
        s,
        {
          silentJSONParsing: L.transitional(L.boolean),
          forcedJSONParsing: L.transitional(L.boolean),
          clarifyTimeoutError: L.transitional(L.boolean),
        },
        !1,
      ),
      n != null &&
        (c.isFunction(n)
          ? (r.paramsSerializer = { serialize: n })
          : ce.assertOptions(
              n,
              { encode: L.function, serialize: L.function },
              !0,
            )),
      r.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (r.allowAbsoluteUrls = !0)),
      ce.assertOptions(
        r,
        {
          baseUrl: L.spelling("baseURL"),
          withXsrfToken: L.spelling("withXSRFToken"),
        },
        !0,
      ),
      (r.method = (r.method || this.defaults.method || "get").toLowerCase());
    let o = i && c.merge(i.common, i[r.method]);
    i &&
      c.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (h) => {
          delete i[h];
        },
      ),
      (r.headers = x.concat(o, i));
    const a = [];
    let p = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == "function" && y.runWhen(r) === !1) ||
        ((p = p && y.synchronous), a.unshift(y.fulfilled, y.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function (y) {
      l.push(y.fulfilled, y.rejected);
    });
    let u,
      f = 0,
      d;
    if (!p) {
      const h = [St.bind(this), void 0];
      for (
        h.unshift.apply(h, a),
          h.push.apply(h, l),
          d = h.length,
          u = Promise.resolve(r);
        f < d;

      )
        u = u.then(h[f++], h[f++]);
      return u;
    }
    d = a.length;
    let b = r;
    for (f = 0; f < d; ) {
      const h = a[f++],
        y = a[f++];
      try {
        b = h(b);
      } catch (m) {
        y.call(this, m);
        break;
      }
    }
    try {
      u = St.call(this, b);
    } catch (h) {
      return Promise.reject(h);
    }
    for (f = 0, d = l.length; f < d; ) u = u.then(l[f++], l[f++]);
    return u;
  }
  getUri(t) {
    t = K(this.defaults, t);
    const r = Ht(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Ut(r, t.params, t.paramsSerializer);
  }
};
c.forEach(["delete", "get", "head", "options"], function (t) {
  z.prototype[t] = function (r, s) {
    return this.request(
      K(s || {}, { method: t, url: r, data: (s || {}).data }),
    );
  };
});
c.forEach(["post", "put", "patch"], function (t) {
  function r(s) {
    return function (i, o, a) {
      return this.request(
        K(a || {}, {
          method: t,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: o,
        }),
      );
    };
  }
  (z.prototype[t] = r()), (z.prototype[t + "Form"] = r(!0));
});
let pn = class Gt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function (i) {
      r = i;
    });
    const s = this;
    this.promise.then((n) => {
      if (!s._listeners) return;
      let i = s._listeners.length;
      for (; i-- > 0; ) s._listeners[i](n);
      s._listeners = null;
    }),
      (this.promise.then = (n) => {
        let i;
        const o = new Promise((a) => {
          s.subscribe(a), (i = a);
        }).then(n);
        return (
          (o.cancel = function () {
            s.unsubscribe(i);
          }),
          o
        );
      }),
      t(function (i, o, a) {
        s.reason || ((s.reason = new X(i, o, a)), r(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      r = (s) => {
        t.abort(s);
      };
    return (
      this.subscribe(r),
      (t.signal.unsubscribe = () => this.unsubscribe(r)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Gt(function (n) {
        t = n;
      }),
      cancel: t,
    };
  }
};
function mn(e) {
  return function (r) {
    return e.apply(null, r);
  };
}
function yn(e) {
  return c.isObject(e) && e.isAxiosError === !0;
}
const He = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(He).forEach(([e, t]) => {
  He[t] = e;
});
function Qt(e) {
  const t = new z(e),
    r = Tt(z.prototype.request, t);
  return (
    c.extend(r, z.prototype, t, { allOwnKeys: !0 }),
    c.extend(r, t, null, { allOwnKeys: !0 }),
    (r.create = function (n) {
      return Qt(K(e, n));
    }),
    r
  );
}
const _ = Qt(ne);
_.Axios = z;
_.CanceledError = X;
_.CancelToken = pn;
_.isCancel = $t;
_.VERSION = Xt;
_.toFormData = Se;
_.AxiosError = S;
_.Cancel = _.CanceledError;
_.all = function (t) {
  return Promise.all(t);
};
_.spread = mn;
_.isAxiosError = yn;
_.mergeConfig = K;
_.AxiosHeaders = x;
_.formToJSON = (e) => It(c.isHTMLForm(e) ? new FormData(e) : e);
_.getAdapter = Wt.getAdapter;
_.HttpStatusCode = He;
_.default = _;
const {
    Axios: Rn,
    AxiosError: On,
    CanceledError: Tn,
    isCancel: _n,
    CancelToken: Cn,
    VERSION: Pn,
    all: Vn,
    Cancel: xn,
    isAxiosError: kn,
    spread: Nn,
    toFormData: Bn,
    AxiosHeaders: Dn,
    HttpStatusCode: Ln,
    formToJSON: Un,
    getAdapter: jn,
    mergeConfig: In,
  } = _,
  Ee = _.create({
    baseURL: void 0,
    headers: { "Content-Type": "application/json" },
  });
Ee.interceptors.request.use((e) => {
  const t = localStorage.getItem("token");
  return t && (e.headers.Authorization = `Bearer ${t}`), e;
});
Ee.interceptors.response.use(
  (e) => e.data,
  (e) => Promise.reject(e),
);
const $n = async (e) => Ee.post("/auth/register", e),
  qn = async (e) => Ee.post("/auth/login", e);
export { wn as L, En as a, qn as b, $n as p, Mn as u };
