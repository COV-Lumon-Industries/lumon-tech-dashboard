import {
  r as O,
  j as C,
  n as G0,
  B as hi,
  z as ge,
  R as I,
  C as ur,
} from "./client-B6Fwjkna.js";
import {
  c as wa,
  a as se,
  b as Wf,
  d as nS,
  f as xn,
  u as Xe,
  B as jt,
  I as W0,
  g as iS,
  e as me,
} from "./input-CHU7cpM5.js";
import {
  u as st,
  f as Oe,
  R as aS,
  P as oS,
  O as uS,
  C as sS,
  b as Sa,
  d as bc,
  e as K0,
  c as X0,
  g as Se,
  A as Kf,
  h as Y0,
  i as Z0,
  y as J0,
  z as Q0,
  B as eb,
  F as tb,
  k as rb,
  l as nb,
  j as ib,
  S as xc,
  p as lS,
  q as cS,
  r as fS,
  s as dS,
  t as pS,
  E as hS,
  G as gS,
  H as vS,
  o as Dt,
  V as mS,
  n as yS,
  I as bS,
} from "./dropdown-menu-DJQEXZ3J.js";
/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xS = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  ab = wa("chevron-down", xS);
/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wS = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  SS = wa("chevron-up", wS);
/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _S = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M16 12H8", key: "1fr5h0" }],
    ["path", { d: "m12 8-4 4 4 4", key: "15vm53" }],
  ],
  OS = wa("circle-arrow-left", _S);
/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const PS = [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
  ],
  CS = wa("search", PS);
/**
 * table-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function It(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ze(e, t) {
  return (r) => {
    t.setState((n) => ({ ...n, [e]: It(r, n[e]) }));
  };
}
function _a(e) {
  return e instanceof Function;
}
function AS(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function ES(e, t) {
  const r = [],
    n = (i) => {
      i.forEach((a) => {
        r.push(a);
        const o = t(a);
        o != null && o.length && n(o);
      });
    };
  return n(e), r;
}
function Q(e, t, r) {
  let n = [],
    i;
  return (a) => {
    let o;
    r.key && r.debug && (o = Date.now());
    const u = e(a);
    if (!(u.length !== n.length || u.some((f, c) => n[c] !== f))) return i;
    n = u;
    let l;
    if (
      (r.key && r.debug && (l = Date.now()),
      (i = t(...u)),
      r == null || r.onChange == null || r.onChange(i),
      r.key && r.debug && r != null && r.debug())
    ) {
      const f = Math.round((Date.now() - o) * 100) / 100,
        c = Math.round((Date.now() - l) * 100) / 100,
        d = c / 16,
        p = (v, h) => {
          for (v = String(v); v.length < h; ) v = " " + v;
          return v;
        };
      console.info(
        `%c⏱ ${p(c, 5)} /${p(f, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * d, 120))}deg 100% 31%);`,
        r?.key,
      );
    }
    return i;
  };
}
function ee(e, t, r, n) {
  return {
    debug: () => {
      var i;
      return (i = e?.debugAll) != null ? i : e[t];
    },
    key: !1,
    onChange: n,
  };
}
function TS(e, t, r, n) {
  const i = () => {
      var o;
      return (o = a.getValue()) != null ? o : e.options.renderFallbackValue;
    },
    a = {
      id: `${t.id}_${r.id}`,
      row: t,
      column: r,
      getValue: () => t.getValue(n),
      renderValue: i,
      getContext: Q(
        () => [e, r, t, a],
        (o, u, s, l) => ({
          table: o,
          column: u,
          row: s,
          cell: l,
          getValue: l.getValue,
          renderValue: l.renderValue,
        }),
        ee(e.options, "debugCells"),
      ),
    };
  return (
    e._features.forEach((o) => {
      o.createCell == null || o.createCell(a, r, t, e);
    }, {}),
    a
  );
}
function RS(e, t, r, n) {
  var i, a;
  const u = { ...e._getDefaultColumnDef(), ...t },
    s = u.accessorKey;
  let l =
      (i =
        (a = u.id) != null
          ? a
          : s
            ? typeof String.prototype.replaceAll == "function"
              ? s.replaceAll(".", "_")
              : s.replace(/\./g, "_")
            : void 0) != null
        ? i
        : typeof u.header == "string"
          ? u.header
          : void 0,
    f;
  if (
    (u.accessorFn
      ? (f = u.accessorFn)
      : s &&
        (s.includes(".")
          ? (f = (d) => {
              let p = d;
              for (const h of s.split(".")) {
                var v;
                p = (v = p) == null ? void 0 : v[h];
              }
              return p;
            })
          : (f = (d) => d[u.accessorKey])),
    !l)
  )
    throw new Error();
  let c = {
    id: `${String(l)}`,
    accessorFn: f,
    parent: n,
    depth: r,
    columnDef: u,
    columns: [],
    getFlatColumns: Q(
      () => [!0],
      () => {
        var d;
        return [
          c,
          ...((d = c.columns) == null
            ? void 0
            : d.flatMap((p) => p.getFlatColumns())),
        ];
      },
      ee(e.options, "debugColumns"),
    ),
    getLeafColumns: Q(
      () => [e._getOrderColumnsFn()],
      (d) => {
        var p;
        if ((p = c.columns) != null && p.length) {
          let v = c.columns.flatMap((h) => h.getLeafColumns());
          return d(v);
        }
        return [c];
      },
      ee(e.options, "debugColumns"),
    ),
  };
  for (const d of e._features) d.createColumn == null || d.createColumn(c, e);
  return c;
}
const Ne = "debugHeaders";
function ap(e, t, r) {
  var n;
  let a = {
    id: (n = r.id) != null ? n : t.id,
    column: t,
    index: r.index,
    isPlaceholder: !!r.isPlaceholder,
    placeholderId: r.placeholderId,
    depth: r.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const o = [],
        u = (s) => {
          s.subHeaders && s.subHeaders.length && s.subHeaders.map(u), o.push(s);
        };
      return u(a), o;
    },
    getContext: () => ({ table: e, header: a, column: t }),
  };
  return (
    e._features.forEach((o) => {
      o.createHeader == null || o.createHeader(a, e);
    }),
    a
  );
}
const MS = {
  createTable: (e) => {
    (e.getHeaderGroups = Q(
      () => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right,
      ],
      (t, r, n, i) => {
        var a, o;
        const u =
            (a = n?.map((c) => r.find((d) => d.id === c)).filter(Boolean)) !=
            null
              ? a
              : [],
          s =
            (o = i?.map((c) => r.find((d) => d.id === c)).filter(Boolean)) !=
            null
              ? o
              : [],
          l = r.filter(
            (c) =>
              !(n != null && n.includes(c.id)) &&
              !(i != null && i.includes(c.id)),
          );
        return gi(t, [...u, ...l, ...s], e);
      },
      ee(e.options, Ne),
    )),
      (e.getCenterHeaderGroups = Q(
        () => [
          e.getAllColumns(),
          e.getVisibleLeafColumns(),
          e.getState().columnPinning.left,
          e.getState().columnPinning.right,
        ],
        (t, r, n, i) => (
          (r = r.filter(
            (a) =>
              !(n != null && n.includes(a.id)) &&
              !(i != null && i.includes(a.id)),
          )),
          gi(t, r, e, "center")
        ),
        ee(e.options, Ne),
      )),
      (e.getLeftHeaderGroups = Q(
        () => [
          e.getAllColumns(),
          e.getVisibleLeafColumns(),
          e.getState().columnPinning.left,
        ],
        (t, r, n) => {
          var i;
          const a =
            (i = n?.map((o) => r.find((u) => u.id === o)).filter(Boolean)) !=
            null
              ? i
              : [];
          return gi(t, a, e, "left");
        },
        ee(e.options, Ne),
      )),
      (e.getRightHeaderGroups = Q(
        () => [
          e.getAllColumns(),
          e.getVisibleLeafColumns(),
          e.getState().columnPinning.right,
        ],
        (t, r, n) => {
          var i;
          const a =
            (i = n?.map((o) => r.find((u) => u.id === o)).filter(Boolean)) !=
            null
              ? i
              : [];
          return gi(t, a, e, "right");
        },
        ee(e.options, Ne),
      )),
      (e.getFooterGroups = Q(
        () => [e.getHeaderGroups()],
        (t) => [...t].reverse(),
        ee(e.options, Ne),
      )),
      (e.getLeftFooterGroups = Q(
        () => [e.getLeftHeaderGroups()],
        (t) => [...t].reverse(),
        ee(e.options, Ne),
      )),
      (e.getCenterFooterGroups = Q(
        () => [e.getCenterHeaderGroups()],
        (t) => [...t].reverse(),
        ee(e.options, Ne),
      )),
      (e.getRightFooterGroups = Q(
        () => [e.getRightHeaderGroups()],
        (t) => [...t].reverse(),
        ee(e.options, Ne),
      )),
      (e.getFlatHeaders = Q(
        () => [e.getHeaderGroups()],
        (t) => t.map((r) => r.headers).flat(),
        ee(e.options, Ne),
      )),
      (e.getLeftFlatHeaders = Q(
        () => [e.getLeftHeaderGroups()],
        (t) => t.map((r) => r.headers).flat(),
        ee(e.options, Ne),
      )),
      (e.getCenterFlatHeaders = Q(
        () => [e.getCenterHeaderGroups()],
        (t) => t.map((r) => r.headers).flat(),
        ee(e.options, Ne),
      )),
      (e.getRightFlatHeaders = Q(
        () => [e.getRightHeaderGroups()],
        (t) => t.map((r) => r.headers).flat(),
        ee(e.options, Ne),
      )),
      (e.getCenterLeafHeaders = Q(
        () => [e.getCenterFlatHeaders()],
        (t) =>
          t.filter((r) => {
            var n;
            return !((n = r.subHeaders) != null && n.length);
          }),
        ee(e.options, Ne),
      )),
      (e.getLeftLeafHeaders = Q(
        () => [e.getLeftFlatHeaders()],
        (t) =>
          t.filter((r) => {
            var n;
            return !((n = r.subHeaders) != null && n.length);
          }),
        ee(e.options, Ne),
      )),
      (e.getRightLeafHeaders = Q(
        () => [e.getRightFlatHeaders()],
        (t) =>
          t.filter((r) => {
            var n;
            return !((n = r.subHeaders) != null && n.length);
          }),
        ee(e.options, Ne),
      )),
      (e.getLeafHeaders = Q(
        () => [
          e.getLeftHeaderGroups(),
          e.getCenterHeaderGroups(),
          e.getRightHeaderGroups(),
        ],
        (t, r, n) => {
          var i, a, o, u, s, l;
          return [
            ...((i = (a = t[0]) == null ? void 0 : a.headers) != null ? i : []),
            ...((o = (u = r[0]) == null ? void 0 : u.headers) != null ? o : []),
            ...((s = (l = n[0]) == null ? void 0 : l.headers) != null ? s : []),
          ]
            .map((f) => f.getLeafHeaders())
            .flat();
        },
        ee(e.options, Ne),
      ));
  },
};
function gi(e, t, r, n) {
  var i, a;
  let o = 0;
  const u = function (d, p) {
    p === void 0 && (p = 1),
      (o = Math.max(o, p)),
      d
        .filter((v) => v.getIsVisible())
        .forEach((v) => {
          var h;
          (h = v.columns) != null && h.length && u(v.columns, p + 1);
        }, 0);
  };
  u(e);
  let s = [];
  const l = (d, p) => {
      const v = {
          depth: p,
          id: [n, `${p}`].filter(Boolean).join("_"),
          headers: [],
        },
        h = [];
      d.forEach((g) => {
        const y = [...h].reverse()[0],
          b = g.column.depth === v.depth;
        let w,
          _ = !1;
        if (
          (b && g.column.parent
            ? (w = g.column.parent)
            : ((w = g.column), (_ = !0)),
          y && y?.column === w)
        )
          y.subHeaders.push(g);
        else {
          const m = ap(r, w, {
            id: [n, p, w.id, g?.id].filter(Boolean).join("_"),
            isPlaceholder: _,
            placeholderId: _
              ? `${h.filter((x) => x.column === w).length}`
              : void 0,
            depth: p,
            index: h.length,
          });
          m.subHeaders.push(g), h.push(m);
        }
        v.headers.push(g), (g.headerGroup = v);
      }),
        s.push(v),
        p > 0 && l(h, p - 1);
    },
    f = t.map((d, p) => ap(r, d, { depth: o, index: p }));
  l(f, o - 1), s.reverse();
  const c = (d) =>
    d
      .filter((v) => v.column.getIsVisible())
      .map((v) => {
        let h = 0,
          g = 0,
          y = [0];
        v.subHeaders && v.subHeaders.length
          ? ((y = []),
            c(v.subHeaders).forEach((w) => {
              let { colSpan: _, rowSpan: m } = w;
              (h += _), y.push(m);
            }))
          : (h = 1);
        const b = Math.min(...y);
        return (
          (g = g + b),
          (v.colSpan = h),
          (v.rowSpan = g),
          { colSpan: h, rowSpan: g }
        );
      });
  return c((i = (a = s[0]) == null ? void 0 : a.headers) != null ? i : []), s;
}
const Xf = (e, t, r, n, i, a, o) => {
    let u = {
      id: t,
      index: n,
      original: r,
      depth: i,
      parentId: o,
      _valuesCache: {},
      _uniqueValuesCache: {},
      getValue: (s) => {
        if (u._valuesCache.hasOwnProperty(s)) return u._valuesCache[s];
        const l = e.getColumn(s);
        if (l != null && l.accessorFn)
          return (
            (u._valuesCache[s] = l.accessorFn(u.original, n)), u._valuesCache[s]
          );
      },
      getUniqueValues: (s) => {
        if (u._uniqueValuesCache.hasOwnProperty(s))
          return u._uniqueValuesCache[s];
        const l = e.getColumn(s);
        if (l != null && l.accessorFn)
          return l.columnDef.getUniqueValues
            ? ((u._uniqueValuesCache[s] = l.columnDef.getUniqueValues(
                u.original,
                n,
              )),
              u._uniqueValuesCache[s])
            : ((u._uniqueValuesCache[s] = [u.getValue(s)]),
              u._uniqueValuesCache[s]);
      },
      renderValue: (s) => {
        var l;
        return (l = u.getValue(s)) != null ? l : e.options.renderFallbackValue;
      },
      subRows: [],
      getLeafRows: () => ES(u.subRows, (s) => s.subRows),
      getParentRow: () => (u.parentId ? e.getRow(u.parentId, !0) : void 0),
      getParentRows: () => {
        let s = [],
          l = u;
        for (;;) {
          const f = l.getParentRow();
          if (!f) break;
          s.push(f), (l = f);
        }
        return s.reverse();
      },
      getAllCells: Q(
        () => [e.getAllLeafColumns()],
        (s) => s.map((l) => TS(e, u, l, l.id)),
        ee(e.options, "debugRows"),
      ),
      _getAllCellsByColumnId: Q(
        () => [u.getAllCells()],
        (s) => s.reduce((l, f) => ((l[f.column.id] = f), l), {}),
        ee(e.options, "debugRows"),
      ),
    };
    for (let s = 0; s < e._features.length; s++) {
      const l = e._features[s];
      l == null || l.createRow == null || l.createRow(u, e);
    }
    return u;
  },
  jS = {
    createColumn: (e, t) => {
      (e._getFacetedRowModel =
        t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id)),
        (e.getFacetedRowModel = () =>
          e._getFacetedRowModel
            ? e._getFacetedRowModel()
            : t.getPreFilteredRowModel()),
        (e._getFacetedUniqueValues =
          t.options.getFacetedUniqueValues &&
          t.options.getFacetedUniqueValues(t, e.id)),
        (e.getFacetedUniqueValues = () =>
          e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : new Map()),
        (e._getFacetedMinMaxValues =
          t.options.getFacetedMinMaxValues &&
          t.options.getFacetedMinMaxValues(t, e.id)),
        (e.getFacetedMinMaxValues = () => {
          if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
        });
    },
  },
  ob = (e, t, r) => {
    var n, i;
    const a =
      r == null || (n = r.toString()) == null ? void 0 : n.toLowerCase();
    return !!(
      !(
        (i = e.getValue(t)) == null ||
        (i = i.toString()) == null ||
        (i = i.toLowerCase()) == null
      ) && i.includes(a)
    );
  };
ob.autoRemove = (e) => nt(e);
const ub = (e, t, r) => {
  var n;
  return !!(
    !((n = e.getValue(t)) == null || (n = n.toString()) == null) &&
    n.includes(r)
  );
};
ub.autoRemove = (e) => nt(e);
const sb = (e, t, r) => {
  var n;
  return (
    ((n = e.getValue(t)) == null || (n = n.toString()) == null
      ? void 0
      : n.toLowerCase()) === r?.toLowerCase()
  );
};
sb.autoRemove = (e) => nt(e);
const lb = (e, t, r) => {
  var n;
  return (n = e.getValue(t)) == null ? void 0 : n.includes(r);
};
lb.autoRemove = (e) => nt(e);
const cb = (e, t, r) =>
  !r.some((n) => {
    var i;
    return !((i = e.getValue(t)) != null && i.includes(n));
  });
cb.autoRemove = (e) => nt(e) || !(e != null && e.length);
const fb = (e, t, r) =>
  r.some((n) => {
    var i;
    return (i = e.getValue(t)) == null ? void 0 : i.includes(n);
  });
fb.autoRemove = (e) => nt(e) || !(e != null && e.length);
const db = (e, t, r) => e.getValue(t) === r;
db.autoRemove = (e) => nt(e);
const pb = (e, t, r) => e.getValue(t) == r;
pb.autoRemove = (e) => nt(e);
const Yf = (e, t, r) => {
  let [n, i] = r;
  const a = e.getValue(t);
  return a >= n && a <= i;
};
Yf.resolveFilterValue = (e) => {
  let [t, r] = e,
    n = typeof t != "number" ? parseFloat(t) : t,
    i = typeof r != "number" ? parseFloat(r) : r,
    a = t === null || Number.isNaN(n) ? -1 / 0 : n,
    o = r === null || Number.isNaN(i) ? 1 / 0 : i;
  if (a > o) {
    const u = a;
    (a = o), (o = u);
  }
  return [a, o];
};
Yf.autoRemove = (e) => nt(e) || (nt(e[0]) && nt(e[1]));
const vt = {
  includesString: ob,
  includesStringSensitive: ub,
  equalsString: sb,
  arrIncludes: lb,
  arrIncludesAll: cb,
  arrIncludesSome: fb,
  equals: db,
  weakEquals: pb,
  inNumberRange: Yf,
};
function nt(e) {
  return e == null || e === "";
}
const IS = {
  getDefaultColumnDef: () => ({ filterFn: "auto" }),
  getInitialState: (e) => ({ columnFilters: [], ...e }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: ze("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100,
  }),
  createColumn: (e, t) => {
    (e.getAutoFilterFn = () => {
      const r = t.getCoreRowModel().flatRows[0],
        n = r?.getValue(e.id);
      return typeof n == "string"
        ? vt.includesString
        : typeof n == "number"
          ? vt.inNumberRange
          : typeof n == "boolean" || (n !== null && typeof n == "object")
            ? vt.equals
            : Array.isArray(n)
              ? vt.arrIncludes
              : vt.weakEquals;
    }),
      (e.getFilterFn = () => {
        var r, n;
        return _a(e.columnDef.filterFn)
          ? e.columnDef.filterFn
          : e.columnDef.filterFn === "auto"
            ? e.getAutoFilterFn()
            : (r =
                  (n = t.options.filterFns) == null
                    ? void 0
                    : n[e.columnDef.filterFn]) != null
              ? r
              : vt[e.columnDef.filterFn];
      }),
      (e.getCanFilter = () => {
        var r, n, i;
        return (
          ((r = e.columnDef.enableColumnFilter) != null ? r : !0) &&
          ((n = t.options.enableColumnFilters) != null ? n : !0) &&
          ((i = t.options.enableFilters) != null ? i : !0) &&
          !!e.accessorFn
        );
      }),
      (e.getIsFiltered = () => e.getFilterIndex() > -1),
      (e.getFilterValue = () => {
        var r;
        return (r = t.getState().columnFilters) == null ||
          (r = r.find((n) => n.id === e.id)) == null
          ? void 0
          : r.value;
      }),
      (e.getFilterIndex = () => {
        var r, n;
        return (r =
          (n = t.getState().columnFilters) == null
            ? void 0
            : n.findIndex((i) => i.id === e.id)) != null
          ? r
          : -1;
      }),
      (e.setFilterValue = (r) => {
        t.setColumnFilters((n) => {
          const i = e.getFilterFn(),
            a = n?.find((f) => f.id === e.id),
            o = It(r, a ? a.value : void 0);
          if (op(i, o, e)) {
            var u;
            return (u = n?.filter((f) => f.id !== e.id)) != null ? u : [];
          }
          const s = { id: e.id, value: o };
          if (a) {
            var l;
            return (l = n?.map((f) => (f.id === e.id ? s : f))) != null
              ? l
              : [];
          }
          return n != null && n.length ? [...n, s] : [s];
        });
      });
  },
  createRow: (e, t) => {
    (e.columnFilters = {}), (e.columnFiltersMeta = {});
  },
  createTable: (e) => {
    (e.setColumnFilters = (t) => {
      const r = e.getAllLeafColumns(),
        n = (i) => {
          var a;
          return (a = It(t, i)) == null
            ? void 0
            : a.filter((o) => {
                const u = r.find((s) => s.id === o.id);
                if (u) {
                  const s = u.getFilterFn();
                  if (op(s, o.value, u)) return !1;
                }
                return !0;
              });
        };
      e.options.onColumnFiltersChange == null ||
        e.options.onColumnFiltersChange(n);
    }),
      (e.resetColumnFilters = (t) => {
        var r, n;
        e.setColumnFilters(
          t
            ? []
            : (r = (n = e.initialState) == null ? void 0 : n.columnFilters) !=
                null
              ? r
              : [],
        );
      }),
      (e.getPreFilteredRowModel = () => e.getCoreRowModel()),
      (e.getFilteredRowModel = () => (
        !e._getFilteredRowModel &&
          e.options.getFilteredRowModel &&
          (e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
        e.options.manualFiltering || !e._getFilteredRowModel
          ? e.getPreFilteredRowModel()
          : e._getFilteredRowModel()
      ));
  },
};
function op(e, t, r) {
  return (
    (e && e.autoRemove ? e.autoRemove(t, r) : !1) ||
    typeof t > "u" ||
    (typeof t == "string" && !t)
  );
}
const $S = (e, t, r) =>
    r.reduce((n, i) => {
      const a = i.getValue(e);
      return n + (typeof a == "number" ? a : 0);
    }, 0),
  NS = (e, t, r) => {
    let n;
    return (
      r.forEach((i) => {
        const a = i.getValue(e);
        a != null && (n > a || (n === void 0 && a >= a)) && (n = a);
      }),
      n
    );
  },
  DS = (e, t, r) => {
    let n;
    return (
      r.forEach((i) => {
        const a = i.getValue(e);
        a != null && (n < a || (n === void 0 && a >= a)) && (n = a);
      }),
      n
    );
  },
  kS = (e, t, r) => {
    let n, i;
    return (
      r.forEach((a) => {
        const o = a.getValue(e);
        o != null &&
          (n === void 0
            ? o >= o && (n = i = o)
            : (n > o && (n = o), i < o && (i = o)));
      }),
      [n, i]
    );
  },
  qS = (e, t) => {
    let r = 0,
      n = 0;
    if (
      (t.forEach((i) => {
        let a = i.getValue(e);
        a != null && (a = +a) >= a && (++r, (n += a));
      }),
      r)
    )
      return n / r;
  },
  FS = (e, t) => {
    if (!t.length) return;
    const r = t.map((a) => a.getValue(e));
    if (!AS(r)) return;
    if (r.length === 1) return r[0];
    const n = Math.floor(r.length / 2),
      i = r.sort((a, o) => a - o);
    return r.length % 2 !== 0 ? i[n] : (i[n - 1] + i[n]) / 2;
  },
  LS = (e, t) => Array.from(new Set(t.map((r) => r.getValue(e))).values()),
  BS = (e, t) => new Set(t.map((r) => r.getValue(e))).size,
  VS = (e, t) => t.length,
  so = {
    sum: $S,
    min: NS,
    max: DS,
    extent: kS,
    mean: qS,
    median: FS,
    unique: LS,
    uniqueCount: BS,
    count: VS,
  },
  HS = {
    getDefaultColumnDef: () => ({
      aggregatedCell: (e) => {
        var t, r;
        return (t =
          (r = e.getValue()) == null || r.toString == null
            ? void 0
            : r.toString()) != null
          ? t
          : null;
      },
      aggregationFn: "auto",
    }),
    getInitialState: (e) => ({ grouping: [], ...e }),
    getDefaultOptions: (e) => ({
      onGroupingChange: ze("grouping", e),
      groupedColumnMode: "reorder",
    }),
    createColumn: (e, t) => {
      (e.toggleGrouping = () => {
        t.setGrouping((r) =>
          r != null && r.includes(e.id)
            ? r.filter((n) => n !== e.id)
            : [...(r ?? []), e.id],
        );
      }),
        (e.getCanGroup = () => {
          var r, n;
          return (
            ((r = e.columnDef.enableGrouping) != null ? r : !0) &&
            ((n = t.options.enableGrouping) != null ? n : !0) &&
            (!!e.accessorFn || !!e.columnDef.getGroupingValue)
          );
        }),
        (e.getIsGrouped = () => {
          var r;
          return (r = t.getState().grouping) == null
            ? void 0
            : r.includes(e.id);
        }),
        (e.getGroupedIndex = () => {
          var r;
          return (r = t.getState().grouping) == null ? void 0 : r.indexOf(e.id);
        }),
        (e.getToggleGroupingHandler = () => {
          const r = e.getCanGroup();
          return () => {
            r && e.toggleGrouping();
          };
        }),
        (e.getAutoAggregationFn = () => {
          const r = t.getCoreRowModel().flatRows[0],
            n = r?.getValue(e.id);
          if (typeof n == "number") return so.sum;
          if (Object.prototype.toString.call(n) === "[object Date]")
            return so.extent;
        }),
        (e.getAggregationFn = () => {
          var r, n;
          if (!e) throw new Error();
          return _a(e.columnDef.aggregationFn)
            ? e.columnDef.aggregationFn
            : e.columnDef.aggregationFn === "auto"
              ? e.getAutoAggregationFn()
              : (r =
                    (n = t.options.aggregationFns) == null
                      ? void 0
                      : n[e.columnDef.aggregationFn]) != null
                ? r
                : so[e.columnDef.aggregationFn];
        });
    },
    createTable: (e) => {
      (e.setGrouping = (t) =>
        e.options.onGroupingChange == null
          ? void 0
          : e.options.onGroupingChange(t)),
        (e.resetGrouping = (t) => {
          var r, n;
          e.setGrouping(
            t
              ? []
              : (r = (n = e.initialState) == null ? void 0 : n.grouping) != null
                ? r
                : [],
          );
        }),
        (e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
        (e.getGroupedRowModel = () => (
          !e._getGroupedRowModel &&
            e.options.getGroupedRowModel &&
            (e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
          e.options.manualGrouping || !e._getGroupedRowModel
            ? e.getPreGroupedRowModel()
            : e._getGroupedRowModel()
        ));
    },
    createRow: (e, t) => {
      (e.getIsGrouped = () => !!e.groupingColumnId),
        (e.getGroupingValue = (r) => {
          if (e._groupingValuesCache.hasOwnProperty(r))
            return e._groupingValuesCache[r];
          const n = t.getColumn(r);
          return n != null && n.columnDef.getGroupingValue
            ? ((e._groupingValuesCache[r] = n.columnDef.getGroupingValue(
                e.original,
              )),
              e._groupingValuesCache[r])
            : e.getValue(r);
        }),
        (e._groupingValuesCache = {});
    },
    createCell: (e, t, r, n) => {
      (e.getIsGrouped = () => t.getIsGrouped() && t.id === r.groupingColumnId),
        (e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped()),
        (e.getIsAggregated = () => {
          var i;
          return (
            !e.getIsGrouped() &&
            !e.getIsPlaceholder() &&
            !!((i = r.subRows) != null && i.length)
          );
        });
    },
  };
function zS(e, t, r) {
  if (!(t != null && t.length) || !r) return e;
  const n = e.filter((a) => !t.includes(a.id));
  return r === "remove"
    ? n
    : [...t.map((a) => e.find((o) => o.id === a)).filter(Boolean), ...n];
}
const US = {
    getInitialState: (e) => ({ columnOrder: [], ...e }),
    getDefaultOptions: (e) => ({ onColumnOrderChange: ze("columnOrder", e) }),
    createColumn: (e, t) => {
      (e.getIndex = Q(
        (r) => [vn(t, r)],
        (r) => r.findIndex((n) => n.id === e.id),
        ee(t.options, "debugColumns"),
      )),
        (e.getIsFirstColumn = (r) => {
          var n;
          return ((n = vn(t, r)[0]) == null ? void 0 : n.id) === e.id;
        }),
        (e.getIsLastColumn = (r) => {
          var n;
          const i = vn(t, r);
          return ((n = i[i.length - 1]) == null ? void 0 : n.id) === e.id;
        });
    },
    createTable: (e) => {
      (e.setColumnOrder = (t) =>
        e.options.onColumnOrderChange == null
          ? void 0
          : e.options.onColumnOrderChange(t)),
        (e.resetColumnOrder = (t) => {
          var r;
          e.setColumnOrder(
            t ? [] : (r = e.initialState.columnOrder) != null ? r : [],
          );
        }),
        (e._getOrderColumnsFn = Q(
          () => [
            e.getState().columnOrder,
            e.getState().grouping,
            e.options.groupedColumnMode,
          ],
          (t, r, n) => (i) => {
            let a = [];
            if (!(t != null && t.length)) a = i;
            else {
              const o = [...t],
                u = [...i];
              for (; u.length && o.length; ) {
                const s = o.shift(),
                  l = u.findIndex((f) => f.id === s);
                l > -1 && a.push(u.splice(l, 1)[0]);
              }
              a = [...a, ...u];
            }
            return zS(a, r, n);
          },
          ee(e.options, "debugTable"),
        ));
    },
  },
  lo = () => ({ left: [], right: [] }),
  GS = {
    getInitialState: (e) => ({ columnPinning: lo(), ...e }),
    getDefaultOptions: (e) => ({
      onColumnPinningChange: ze("columnPinning", e),
    }),
    createColumn: (e, t) => {
      (e.pin = (r) => {
        const n = e
          .getLeafColumns()
          .map((i) => i.id)
          .filter(Boolean);
        t.setColumnPinning((i) => {
          var a, o;
          if (r === "right") {
            var u, s;
            return {
              left: ((u = i?.left) != null ? u : []).filter(
                (c) => !(n != null && n.includes(c)),
              ),
              right: [
                ...((s = i?.right) != null ? s : []).filter(
                  (c) => !(n != null && n.includes(c)),
                ),
                ...n,
              ],
            };
          }
          if (r === "left") {
            var l, f;
            return {
              left: [
                ...((l = i?.left) != null ? l : []).filter(
                  (c) => !(n != null && n.includes(c)),
                ),
                ...n,
              ],
              right: ((f = i?.right) != null ? f : []).filter(
                (c) => !(n != null && n.includes(c)),
              ),
            };
          }
          return {
            left: ((a = i?.left) != null ? a : []).filter(
              (c) => !(n != null && n.includes(c)),
            ),
            right: ((o = i?.right) != null ? o : []).filter(
              (c) => !(n != null && n.includes(c)),
            ),
          };
        });
      }),
        (e.getCanPin = () =>
          e.getLeafColumns().some((n) => {
            var i, a, o;
            return (
              ((i = n.columnDef.enablePinning) != null ? i : !0) &&
              ((a =
                (o = t.options.enableColumnPinning) != null
                  ? o
                  : t.options.enablePinning) != null
                ? a
                : !0)
            );
          })),
        (e.getIsPinned = () => {
          const r = e.getLeafColumns().map((u) => u.id),
            { left: n, right: i } = t.getState().columnPinning,
            a = r.some((u) => n?.includes(u)),
            o = r.some((u) => i?.includes(u));
          return a ? "left" : o ? "right" : !1;
        }),
        (e.getPinnedIndex = () => {
          var r, n;
          const i = e.getIsPinned();
          return i
            ? (r =
                (n = t.getState().columnPinning) == null || (n = n[i]) == null
                  ? void 0
                  : n.indexOf(e.id)) != null
              ? r
              : -1
            : 0;
        });
    },
    createRow: (e, t) => {
      (e.getCenterVisibleCells = Q(
        () => [
          e._getAllVisibleCells(),
          t.getState().columnPinning.left,
          t.getState().columnPinning.right,
        ],
        (r, n, i) => {
          const a = [...(n ?? []), ...(i ?? [])];
          return r.filter((o) => !a.includes(o.column.id));
        },
        ee(t.options, "debugRows"),
      )),
        (e.getLeftVisibleCells = Q(
          () => [e._getAllVisibleCells(), t.getState().columnPinning.left],
          (r, n) =>
            (n ?? [])
              .map((a) => r.find((o) => o.column.id === a))
              .filter(Boolean)
              .map((a) => ({ ...a, position: "left" })),
          ee(t.options, "debugRows"),
        )),
        (e.getRightVisibleCells = Q(
          () => [e._getAllVisibleCells(), t.getState().columnPinning.right],
          (r, n) =>
            (n ?? [])
              .map((a) => r.find((o) => o.column.id === a))
              .filter(Boolean)
              .map((a) => ({ ...a, position: "right" })),
          ee(t.options, "debugRows"),
        ));
    },
    createTable: (e) => {
      (e.setColumnPinning = (t) =>
        e.options.onColumnPinningChange == null
          ? void 0
          : e.options.onColumnPinningChange(t)),
        (e.resetColumnPinning = (t) => {
          var r, n;
          return e.setColumnPinning(
            t
              ? lo()
              : (r = (n = e.initialState) == null ? void 0 : n.columnPinning) !=
                  null
                ? r
                : lo(),
          );
        }),
        (e.getIsSomeColumnsPinned = (t) => {
          var r;
          const n = e.getState().columnPinning;
          if (!t) {
            var i, a;
            return !!(
              ((i = n.left) != null && i.length) ||
              ((a = n.right) != null && a.length)
            );
          }
          return !!((r = n[t]) != null && r.length);
        }),
        (e.getLeftLeafColumns = Q(
          () => [e.getAllLeafColumns(), e.getState().columnPinning.left],
          (t, r) =>
            (r ?? []).map((n) => t.find((i) => i.id === n)).filter(Boolean),
          ee(e.options, "debugColumns"),
        )),
        (e.getRightLeafColumns = Q(
          () => [e.getAllLeafColumns(), e.getState().columnPinning.right],
          (t, r) =>
            (r ?? []).map((n) => t.find((i) => i.id === n)).filter(Boolean),
          ee(e.options, "debugColumns"),
        )),
        (e.getCenterLeafColumns = Q(
          () => [
            e.getAllLeafColumns(),
            e.getState().columnPinning.left,
            e.getState().columnPinning.right,
          ],
          (t, r, n) => {
            const i = [...(r ?? []), ...(n ?? [])];
            return t.filter((a) => !i.includes(a.id));
          },
          ee(e.options, "debugColumns"),
        ));
    },
  },
  vi = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
  co = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: !1,
    columnSizingStart: [],
  }),
  WS = {
    getDefaultColumnDef: () => vi,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: co(),
      ...e,
    }),
    getDefaultOptions: (e) => ({
      columnResizeMode: "onEnd",
      columnResizeDirection: "ltr",
      onColumnSizingChange: ze("columnSizing", e),
      onColumnSizingInfoChange: ze("columnSizingInfo", e),
    }),
    createColumn: (e, t) => {
      (e.getSize = () => {
        var r, n, i;
        const a = t.getState().columnSizing[e.id];
        return Math.min(
          Math.max(
            (r = e.columnDef.minSize) != null ? r : vi.minSize,
            (n = a ?? e.columnDef.size) != null ? n : vi.size,
          ),
          (i = e.columnDef.maxSize) != null ? i : vi.maxSize,
        );
      }),
        (e.getStart = Q(
          (r) => [r, vn(t, r), t.getState().columnSizing],
          (r, n) =>
            n.slice(0, e.getIndex(r)).reduce((i, a) => i + a.getSize(), 0),
          ee(t.options, "debugColumns"),
        )),
        (e.getAfter = Q(
          (r) => [r, vn(t, r), t.getState().columnSizing],
          (r, n) =>
            n.slice(e.getIndex(r) + 1).reduce((i, a) => i + a.getSize(), 0),
          ee(t.options, "debugColumns"),
        )),
        (e.resetSize = () => {
          t.setColumnSizing((r) => {
            let { [e.id]: n, ...i } = r;
            return i;
          });
        }),
        (e.getCanResize = () => {
          var r, n;
          return (
            ((r = e.columnDef.enableResizing) != null ? r : !0) &&
            ((n = t.options.enableColumnResizing) != null ? n : !0)
          );
        }),
        (e.getIsResizing = () =>
          t.getState().columnSizingInfo.isResizingColumn === e.id);
    },
    createHeader: (e, t) => {
      (e.getSize = () => {
        let r = 0;
        const n = (i) => {
          if (i.subHeaders.length) i.subHeaders.forEach(n);
          else {
            var a;
            r += (a = i.column.getSize()) != null ? a : 0;
          }
        };
        return n(e), r;
      }),
        (e.getStart = () => {
          if (e.index > 0) {
            const r = e.headerGroup.headers[e.index - 1];
            return r.getStart() + r.getSize();
          }
          return 0;
        }),
        (e.getResizeHandler = (r) => {
          const n = t.getColumn(e.column.id),
            i = n?.getCanResize();
          return (a) => {
            if (
              !n ||
              !i ||
              (a.persist == null || a.persist(),
              fo(a) && a.touches && a.touches.length > 1)
            )
              return;
            const o = e.getSize(),
              u = e
                ? e
                    .getLeafHeaders()
                    .map((y) => [y.column.id, y.column.getSize()])
                : [[n.id, n.getSize()]],
              s = fo(a) ? Math.round(a.touches[0].clientX) : a.clientX,
              l = {},
              f = (y, b) => {
                typeof b == "number" &&
                  (t.setColumnSizingInfo((w) => {
                    var _, m;
                    const x =
                        t.options.columnResizeDirection === "rtl" ? -1 : 1,
                      S = (b - ((_ = w?.startOffset) != null ? _ : 0)) * x,
                      P = Math.max(
                        S / ((m = w?.startSize) != null ? m : 0),
                        -0.999999,
                      );
                    return (
                      w.columnSizingStart.forEach((E) => {
                        let [j, A] = E;
                        l[j] = Math.round(Math.max(A + A * P, 0) * 100) / 100;
                      }),
                      { ...w, deltaOffset: S, deltaPercentage: P }
                    );
                  }),
                  (t.options.columnResizeMode === "onChange" || y === "end") &&
                    t.setColumnSizing((w) => ({ ...w, ...l })));
              },
              c = (y) => f("move", y),
              d = (y) => {
                f("end", y),
                  t.setColumnSizingInfo((b) => ({
                    ...b,
                    isResizingColumn: !1,
                    startOffset: null,
                    startSize: null,
                    deltaOffset: null,
                    deltaPercentage: null,
                    columnSizingStart: [],
                  }));
              },
              p = r || typeof document < "u" ? document : null,
              v = {
                moveHandler: (y) => c(y.clientX),
                upHandler: (y) => {
                  p?.removeEventListener("mousemove", v.moveHandler),
                    p?.removeEventListener("mouseup", v.upHandler),
                    d(y.clientX);
                },
              },
              h = {
                moveHandler: (y) => (
                  y.cancelable && (y.preventDefault(), y.stopPropagation()),
                  c(y.touches[0].clientX),
                  !1
                ),
                upHandler: (y) => {
                  var b;
                  p?.removeEventListener("touchmove", h.moveHandler),
                    p?.removeEventListener("touchend", h.upHandler),
                    y.cancelable && (y.preventDefault(), y.stopPropagation()),
                    d((b = y.touches[0]) == null ? void 0 : b.clientX);
                },
              },
              g = KS() ? { passive: !1 } : !1;
            fo(a)
              ? (p?.addEventListener("touchmove", h.moveHandler, g),
                p?.addEventListener("touchend", h.upHandler, g))
              : (p?.addEventListener("mousemove", v.moveHandler, g),
                p?.addEventListener("mouseup", v.upHandler, g)),
              t.setColumnSizingInfo((y) => ({
                ...y,
                startOffset: s,
                startSize: o,
                deltaOffset: 0,
                deltaPercentage: 0,
                columnSizingStart: u,
                isResizingColumn: n.id,
              }));
          };
        });
    },
    createTable: (e) => {
      (e.setColumnSizing = (t) =>
        e.options.onColumnSizingChange == null
          ? void 0
          : e.options.onColumnSizingChange(t)),
        (e.setColumnSizingInfo = (t) =>
          e.options.onColumnSizingInfoChange == null
            ? void 0
            : e.options.onColumnSizingInfoChange(t)),
        (e.resetColumnSizing = (t) => {
          var r;
          e.setColumnSizing(
            t ? {} : (r = e.initialState.columnSizing) != null ? r : {},
          );
        }),
        (e.resetHeaderSizeInfo = (t) => {
          var r;
          e.setColumnSizingInfo(
            t ? co() : (r = e.initialState.columnSizingInfo) != null ? r : co(),
          );
        }),
        (e.getTotalSize = () => {
          var t, r;
          return (t =
            (r = e.getHeaderGroups()[0]) == null
              ? void 0
              : r.headers.reduce((n, i) => n + i.getSize(), 0)) != null
            ? t
            : 0;
        }),
        (e.getLeftTotalSize = () => {
          var t, r;
          return (t =
            (r = e.getLeftHeaderGroups()[0]) == null
              ? void 0
              : r.headers.reduce((n, i) => n + i.getSize(), 0)) != null
            ? t
            : 0;
        }),
        (e.getCenterTotalSize = () => {
          var t, r;
          return (t =
            (r = e.getCenterHeaderGroups()[0]) == null
              ? void 0
              : r.headers.reduce((n, i) => n + i.getSize(), 0)) != null
            ? t
            : 0;
        }),
        (e.getRightTotalSize = () => {
          var t, r;
          return (t =
            (r = e.getRightHeaderGroups()[0]) == null
              ? void 0
              : r.headers.reduce((n, i) => n + i.getSize(), 0)) != null
            ? t
            : 0;
        });
    },
  };
let mi = null;
function KS() {
  if (typeof mi == "boolean") return mi;
  let e = !1;
  try {
    const t = {
        get passive() {
          return (e = !0), !1;
        },
      },
      r = () => {};
    window.addEventListener("test", r, t),
      window.removeEventListener("test", r);
  } catch {
    e = !1;
  }
  return (mi = e), mi;
}
function fo(e) {
  return e.type === "touchstart";
}
const XS = {
  getInitialState: (e) => ({ columnVisibility: {}, ...e }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: ze("columnVisibility", e),
  }),
  createColumn: (e, t) => {
    (e.toggleVisibility = (r) => {
      e.getCanHide() &&
        t.setColumnVisibility((n) => ({
          ...n,
          [e.id]: r ?? !e.getIsVisible(),
        }));
    }),
      (e.getIsVisible = () => {
        var r, n;
        const i = e.columns;
        return (r = i.length
          ? i.some((a) => a.getIsVisible())
          : (n = t.getState().columnVisibility) == null
            ? void 0
            : n[e.id]) != null
          ? r
          : !0;
      }),
      (e.getCanHide = () => {
        var r, n;
        return (
          ((r = e.columnDef.enableHiding) != null ? r : !0) &&
          ((n = t.options.enableHiding) != null ? n : !0)
        );
      }),
      (e.getToggleVisibilityHandler = () => (r) => {
        e.toggleVisibility == null || e.toggleVisibility(r.target.checked);
      });
  },
  createRow: (e, t) => {
    (e._getAllVisibleCells = Q(
      () => [e.getAllCells(), t.getState().columnVisibility],
      (r) => r.filter((n) => n.column.getIsVisible()),
      ee(t.options, "debugRows"),
    )),
      (e.getVisibleCells = Q(
        () => [
          e.getLeftVisibleCells(),
          e.getCenterVisibleCells(),
          e.getRightVisibleCells(),
        ],
        (r, n, i) => [...r, ...n, ...i],
        ee(t.options, "debugRows"),
      ));
  },
  createTable: (e) => {
    const t = (r, n) =>
      Q(
        () => [
          n(),
          n()
            .filter((i) => i.getIsVisible())
            .map((i) => i.id)
            .join("_"),
        ],
        (i) =>
          i.filter((a) => (a.getIsVisible == null ? void 0 : a.getIsVisible())),
        ee(e.options, "debugColumns"),
      );
    (e.getVisibleFlatColumns = t("getVisibleFlatColumns", () =>
      e.getAllFlatColumns(),
    )),
      (e.getVisibleLeafColumns = t("getVisibleLeafColumns", () =>
        e.getAllLeafColumns(),
      )),
      (e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () =>
        e.getLeftLeafColumns(),
      )),
      (e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () =>
        e.getRightLeafColumns(),
      )),
      (e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () =>
        e.getCenterLeafColumns(),
      )),
      (e.setColumnVisibility = (r) =>
        e.options.onColumnVisibilityChange == null
          ? void 0
          : e.options.onColumnVisibilityChange(r)),
      (e.resetColumnVisibility = (r) => {
        var n;
        e.setColumnVisibility(
          r ? {} : (n = e.initialState.columnVisibility) != null ? n : {},
        );
      }),
      (e.toggleAllColumnsVisible = (r) => {
        var n;
        (r = (n = r) != null ? n : !e.getIsAllColumnsVisible()),
          e.setColumnVisibility(
            e
              .getAllLeafColumns()
              .reduce(
                (i, a) => ({
                  ...i,
                  [a.id]: r || !(a.getCanHide != null && a.getCanHide()),
                }),
                {},
              ),
          );
      }),
      (e.getIsAllColumnsVisible = () =>
        !e
          .getAllLeafColumns()
          .some((r) => !(r.getIsVisible != null && r.getIsVisible()))),
      (e.getIsSomeColumnsVisible = () =>
        e
          .getAllLeafColumns()
          .some((r) => (r.getIsVisible == null ? void 0 : r.getIsVisible()))),
      (e.getToggleAllColumnsVisibilityHandler = () => (r) => {
        var n;
        e.toggleAllColumnsVisible((n = r.target) == null ? void 0 : n.checked);
      });
  },
};
function vn(e, t) {
  return t
    ? t === "center"
      ? e.getCenterVisibleLeafColumns()
      : t === "left"
        ? e.getLeftVisibleLeafColumns()
        : e.getRightVisibleLeafColumns()
    : e.getVisibleLeafColumns();
}
const YS = {
    createTable: (e) => {
      (e._getGlobalFacetedRowModel =
        e.options.getFacetedRowModel &&
        e.options.getFacetedRowModel(e, "__global__")),
        (e.getGlobalFacetedRowModel = () =>
          e.options.manualFiltering || !e._getGlobalFacetedRowModel
            ? e.getPreFilteredRowModel()
            : e._getGlobalFacetedRowModel()),
        (e._getGlobalFacetedUniqueValues =
          e.options.getFacetedUniqueValues &&
          e.options.getFacetedUniqueValues(e, "__global__")),
        (e.getGlobalFacetedUniqueValues = () =>
          e._getGlobalFacetedUniqueValues
            ? e._getGlobalFacetedUniqueValues()
            : new Map()),
        (e._getGlobalFacetedMinMaxValues =
          e.options.getFacetedMinMaxValues &&
          e.options.getFacetedMinMaxValues(e, "__global__")),
        (e.getGlobalFacetedMinMaxValues = () => {
          if (e._getGlobalFacetedMinMaxValues)
            return e._getGlobalFacetedMinMaxValues();
        });
    },
  },
  ZS = {
    getInitialState: (e) => ({ globalFilter: void 0, ...e }),
    getDefaultOptions: (e) => ({
      onGlobalFilterChange: ze("globalFilter", e),
      globalFilterFn: "auto",
      getColumnCanGlobalFilter: (t) => {
        var r;
        const n =
          (r = e.getCoreRowModel().flatRows[0]) == null ||
          (r = r._getAllCellsByColumnId()[t.id]) == null
            ? void 0
            : r.getValue();
        return typeof n == "string" || typeof n == "number";
      },
    }),
    createColumn: (e, t) => {
      e.getCanGlobalFilter = () => {
        var r, n, i, a;
        return (
          ((r = e.columnDef.enableGlobalFilter) != null ? r : !0) &&
          ((n = t.options.enableGlobalFilter) != null ? n : !0) &&
          ((i = t.options.enableFilters) != null ? i : !0) &&
          ((a =
            t.options.getColumnCanGlobalFilter == null
              ? void 0
              : t.options.getColumnCanGlobalFilter(e)) != null
            ? a
            : !0) &&
          !!e.accessorFn
        );
      };
    },
    createTable: (e) => {
      (e.getGlobalAutoFilterFn = () => vt.includesString),
        (e.getGlobalFilterFn = () => {
          var t, r;
          const { globalFilterFn: n } = e.options;
          return _a(n)
            ? n
            : n === "auto"
              ? e.getGlobalAutoFilterFn()
              : (t = (r = e.options.filterFns) == null ? void 0 : r[n]) != null
                ? t
                : vt[n];
        }),
        (e.setGlobalFilter = (t) => {
          e.options.onGlobalFilterChange == null ||
            e.options.onGlobalFilterChange(t);
        }),
        (e.resetGlobalFilter = (t) => {
          e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
        });
    },
  },
  JS = {
    getInitialState: (e) => ({ expanded: {}, ...e }),
    getDefaultOptions: (e) => ({
      onExpandedChange: ze("expanded", e),
      paginateExpandedRows: !0,
    }),
    createTable: (e) => {
      let t = !1,
        r = !1;
      (e._autoResetExpanded = () => {
        var n, i;
        if (!t) {
          e._queue(() => {
            t = !0;
          });
          return;
        }
        if (
          (n =
            (i = e.options.autoResetAll) != null
              ? i
              : e.options.autoResetExpanded) != null
            ? n
            : !e.options.manualExpanding
        ) {
          if (r) return;
          (r = !0),
            e._queue(() => {
              e.resetExpanded(), (r = !1);
            });
        }
      }),
        (e.setExpanded = (n) =>
          e.options.onExpandedChange == null
            ? void 0
            : e.options.onExpandedChange(n)),
        (e.toggleAllRowsExpanded = (n) => {
          (n ?? !e.getIsAllRowsExpanded())
            ? e.setExpanded(!0)
            : e.setExpanded({});
        }),
        (e.resetExpanded = (n) => {
          var i, a;
          e.setExpanded(
            n
              ? {}
              : (i = (a = e.initialState) == null ? void 0 : a.expanded) != null
                ? i
                : {},
          );
        }),
        (e.getCanSomeRowsExpand = () =>
          e.getPrePaginationRowModel().flatRows.some((n) => n.getCanExpand())),
        (e.getToggleAllRowsExpandedHandler = () => (n) => {
          n.persist == null || n.persist(), e.toggleAllRowsExpanded();
        }),
        (e.getIsSomeRowsExpanded = () => {
          const n = e.getState().expanded;
          return n === !0 || Object.values(n).some(Boolean);
        }),
        (e.getIsAllRowsExpanded = () => {
          const n = e.getState().expanded;
          return typeof n == "boolean"
            ? n === !0
            : !(
                !Object.keys(n).length ||
                e.getRowModel().flatRows.some((i) => !i.getIsExpanded())
              );
        }),
        (e.getExpandedDepth = () => {
          let n = 0;
          return (
            (e.getState().expanded === !0
              ? Object.keys(e.getRowModel().rowsById)
              : Object.keys(e.getState().expanded)
            ).forEach((a) => {
              const o = a.split(".");
              n = Math.max(n, o.length);
            }),
            n
          );
        }),
        (e.getPreExpandedRowModel = () => e.getSortedRowModel()),
        (e.getExpandedRowModel = () => (
          !e._getExpandedRowModel &&
            e.options.getExpandedRowModel &&
            (e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
          e.options.manualExpanding || !e._getExpandedRowModel
            ? e.getPreExpandedRowModel()
            : e._getExpandedRowModel()
        ));
    },
    createRow: (e, t) => {
      (e.toggleExpanded = (r) => {
        t.setExpanded((n) => {
          var i;
          const a = n === !0 ? !0 : !!(n != null && n[e.id]);
          let o = {};
          if (
            (n === !0
              ? Object.keys(t.getRowModel().rowsById).forEach((u) => {
                  o[u] = !0;
                })
              : (o = n),
            (r = (i = r) != null ? i : !a),
            !a && r)
          )
            return { ...o, [e.id]: !0 };
          if (a && !r) {
            const { [e.id]: u, ...s } = o;
            return s;
          }
          return n;
        });
      }),
        (e.getIsExpanded = () => {
          var r;
          const n = t.getState().expanded;
          return !!((r =
            t.options.getIsRowExpanded == null
              ? void 0
              : t.options.getIsRowExpanded(e)) != null
            ? r
            : n === !0 || n?.[e.id]);
        }),
        (e.getCanExpand = () => {
          var r, n, i;
          return (r =
            t.options.getRowCanExpand == null
              ? void 0
              : t.options.getRowCanExpand(e)) != null
            ? r
            : ((n = t.options.enableExpanding) != null ? n : !0) &&
                !!((i = e.subRows) != null && i.length);
        }),
        (e.getIsAllParentsExpanded = () => {
          let r = !0,
            n = e;
          for (; r && n.parentId; )
            (n = t.getRow(n.parentId, !0)), (r = n.getIsExpanded());
          return r;
        }),
        (e.getToggleExpandedHandler = () => {
          const r = e.getCanExpand();
          return () => {
            r && e.toggleExpanded();
          };
        });
    },
  },
  wc = 0,
  Sc = 10,
  po = () => ({ pageIndex: wc, pageSize: Sc }),
  QS = {
    getInitialState: (e) => ({
      ...e,
      pagination: { ...po(), ...e?.pagination },
    }),
    getDefaultOptions: (e) => ({ onPaginationChange: ze("pagination", e) }),
    createTable: (e) => {
      let t = !1,
        r = !1;
      (e._autoResetPageIndex = () => {
        var n, i;
        if (!t) {
          e._queue(() => {
            t = !0;
          });
          return;
        }
        if (
          (n =
            (i = e.options.autoResetAll) != null
              ? i
              : e.options.autoResetPageIndex) != null
            ? n
            : !e.options.manualPagination
        ) {
          if (r) return;
          (r = !0),
            e._queue(() => {
              e.resetPageIndex(), (r = !1);
            });
        }
      }),
        (e.setPagination = (n) => {
          const i = (a) => It(n, a);
          return e.options.onPaginationChange == null
            ? void 0
            : e.options.onPaginationChange(i);
        }),
        (e.resetPagination = (n) => {
          var i;
          e.setPagination(
            n ? po() : (i = e.initialState.pagination) != null ? i : po(),
          );
        }),
        (e.setPageIndex = (n) => {
          e.setPagination((i) => {
            let a = It(n, i.pageIndex);
            const o =
              typeof e.options.pageCount > "u" || e.options.pageCount === -1
                ? Number.MAX_SAFE_INTEGER
                : e.options.pageCount - 1;
            return (a = Math.max(0, Math.min(a, o))), { ...i, pageIndex: a };
          });
        }),
        (e.resetPageIndex = (n) => {
          var i, a;
          e.setPageIndex(
            n
              ? wc
              : (i =
                    (a = e.initialState) == null || (a = a.pagination) == null
                      ? void 0
                      : a.pageIndex) != null
                ? i
                : wc,
          );
        }),
        (e.resetPageSize = (n) => {
          var i, a;
          e.setPageSize(
            n
              ? Sc
              : (i =
                    (a = e.initialState) == null || (a = a.pagination) == null
                      ? void 0
                      : a.pageSize) != null
                ? i
                : Sc,
          );
        }),
        (e.setPageSize = (n) => {
          e.setPagination((i) => {
            const a = Math.max(1, It(n, i.pageSize)),
              o = i.pageSize * i.pageIndex,
              u = Math.floor(o / a);
            return { ...i, pageIndex: u, pageSize: a };
          });
        }),
        (e.setPageCount = (n) =>
          e.setPagination((i) => {
            var a;
            let o = It(n, (a = e.options.pageCount) != null ? a : -1);
            return (
              typeof o == "number" && (o = Math.max(-1, o)),
              { ...i, pageCount: o }
            );
          })),
        (e.getPageOptions = Q(
          () => [e.getPageCount()],
          (n) => {
            let i = [];
            return (
              n && n > 0 && (i = [...new Array(n)].fill(null).map((a, o) => o)),
              i
            );
          },
          ee(e.options, "debugTable"),
        )),
        (e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0),
        (e.getCanNextPage = () => {
          const { pageIndex: n } = e.getState().pagination,
            i = e.getPageCount();
          return i === -1 ? !0 : i === 0 ? !1 : n < i - 1;
        }),
        (e.previousPage = () => e.setPageIndex((n) => n - 1)),
        (e.nextPage = () => e.setPageIndex((n) => n + 1)),
        (e.firstPage = () => e.setPageIndex(0)),
        (e.lastPage = () => e.setPageIndex(e.getPageCount() - 1)),
        (e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
        (e.getPaginationRowModel = () => (
          !e._getPaginationRowModel &&
            e.options.getPaginationRowModel &&
            (e._getPaginationRowModel = e.options.getPaginationRowModel(e)),
          e.options.manualPagination || !e._getPaginationRowModel
            ? e.getPrePaginationRowModel()
            : e._getPaginationRowModel()
        )),
        (e.getPageCount = () => {
          var n;
          return (n = e.options.pageCount) != null
            ? n
            : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
        }),
        (e.getRowCount = () => {
          var n;
          return (n = e.options.rowCount) != null
            ? n
            : e.getPrePaginationRowModel().rows.length;
        });
    },
  },
  ho = () => ({ top: [], bottom: [] }),
  e_ = {
    getInitialState: (e) => ({ rowPinning: ho(), ...e }),
    getDefaultOptions: (e) => ({ onRowPinningChange: ze("rowPinning", e) }),
    createRow: (e, t) => {
      (e.pin = (r, n, i) => {
        const a = n
            ? e.getLeafRows().map((s) => {
                let { id: l } = s;
                return l;
              })
            : [],
          o = i
            ? e.getParentRows().map((s) => {
                let { id: l } = s;
                return l;
              })
            : [],
          u = new Set([...o, e.id, ...a]);
        t.setRowPinning((s) => {
          var l, f;
          if (r === "bottom") {
            var c, d;
            return {
              top: ((c = s?.top) != null ? c : []).filter(
                (h) => !(u != null && u.has(h)),
              ),
              bottom: [
                ...((d = s?.bottom) != null ? d : []).filter(
                  (h) => !(u != null && u.has(h)),
                ),
                ...Array.from(u),
              ],
            };
          }
          if (r === "top") {
            var p, v;
            return {
              top: [
                ...((p = s?.top) != null ? p : []).filter(
                  (h) => !(u != null && u.has(h)),
                ),
                ...Array.from(u),
              ],
              bottom: ((v = s?.bottom) != null ? v : []).filter(
                (h) => !(u != null && u.has(h)),
              ),
            };
          }
          return {
            top: ((l = s?.top) != null ? l : []).filter(
              (h) => !(u != null && u.has(h)),
            ),
            bottom: ((f = s?.bottom) != null ? f : []).filter(
              (h) => !(u != null && u.has(h)),
            ),
          };
        });
      }),
        (e.getCanPin = () => {
          var r;
          const { enableRowPinning: n, enablePinning: i } = t.options;
          return typeof n == "function" ? n(e) : (r = n ?? i) != null ? r : !0;
        }),
        (e.getIsPinned = () => {
          const r = [e.id],
            { top: n, bottom: i } = t.getState().rowPinning,
            a = r.some((u) => n?.includes(u)),
            o = r.some((u) => i?.includes(u));
          return a ? "top" : o ? "bottom" : !1;
        }),
        (e.getPinnedIndex = () => {
          var r, n;
          const i = e.getIsPinned();
          if (!i) return -1;
          const a =
            (r = i === "top" ? t.getTopRows() : t.getBottomRows()) == null
              ? void 0
              : r.map((o) => {
                  let { id: u } = o;
                  return u;
                });
          return (n = a?.indexOf(e.id)) != null ? n : -1;
        });
    },
    createTable: (e) => {
      (e.setRowPinning = (t) =>
        e.options.onRowPinningChange == null
          ? void 0
          : e.options.onRowPinningChange(t)),
        (e.resetRowPinning = (t) => {
          var r, n;
          return e.setRowPinning(
            t
              ? ho()
              : (r = (n = e.initialState) == null ? void 0 : n.rowPinning) !=
                  null
                ? r
                : ho(),
          );
        }),
        (e.getIsSomeRowsPinned = (t) => {
          var r;
          const n = e.getState().rowPinning;
          if (!t) {
            var i, a;
            return !!(
              ((i = n.top) != null && i.length) ||
              ((a = n.bottom) != null && a.length)
            );
          }
          return !!((r = n[t]) != null && r.length);
        }),
        (e._getPinnedRows = (t, r, n) => {
          var i;
          return (
            (i = e.options.keepPinnedRows) == null || i
              ? (r ?? []).map((o) => {
                  const u = e.getRow(o, !0);
                  return u.getIsAllParentsExpanded() ? u : null;
                })
              : (r ?? []).map((o) => t.find((u) => u.id === o))
          )
            .filter(Boolean)
            .map((o) => ({ ...o, position: n }));
        }),
        (e.getTopRows = Q(
          () => [e.getRowModel().rows, e.getState().rowPinning.top],
          (t, r) => e._getPinnedRows(t, r, "top"),
          ee(e.options, "debugRows"),
        )),
        (e.getBottomRows = Q(
          () => [e.getRowModel().rows, e.getState().rowPinning.bottom],
          (t, r) => e._getPinnedRows(t, r, "bottom"),
          ee(e.options, "debugRows"),
        )),
        (e.getCenterRows = Q(
          () => [
            e.getRowModel().rows,
            e.getState().rowPinning.top,
            e.getState().rowPinning.bottom,
          ],
          (t, r, n) => {
            const i = new Set([...(r ?? []), ...(n ?? [])]);
            return t.filter((a) => !i.has(a.id));
          },
          ee(e.options, "debugRows"),
        ));
    },
  },
  t_ = {
    getInitialState: (e) => ({ rowSelection: {}, ...e }),
    getDefaultOptions: (e) => ({
      onRowSelectionChange: ze("rowSelection", e),
      enableRowSelection: !0,
      enableMultiRowSelection: !0,
      enableSubRowSelection: !0,
    }),
    createTable: (e) => {
      (e.setRowSelection = (t) =>
        e.options.onRowSelectionChange == null
          ? void 0
          : e.options.onRowSelectionChange(t)),
        (e.resetRowSelection = (t) => {
          var r;
          return e.setRowSelection(
            t ? {} : (r = e.initialState.rowSelection) != null ? r : {},
          );
        }),
        (e.toggleAllRowsSelected = (t) => {
          e.setRowSelection((r) => {
            t = typeof t < "u" ? t : !e.getIsAllRowsSelected();
            const n = { ...r },
              i = e.getPreGroupedRowModel().flatRows;
            return (
              t
                ? i.forEach((a) => {
                    a.getCanSelect() && (n[a.id] = !0);
                  })
                : i.forEach((a) => {
                    delete n[a.id];
                  }),
              n
            );
          });
        }),
        (e.toggleAllPageRowsSelected = (t) =>
          e.setRowSelection((r) => {
            const n = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(),
              i = { ...r };
            return (
              e.getRowModel().rows.forEach((a) => {
                _c(i, a.id, n, !0, e);
              }),
              i
            );
          })),
        (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
        (e.getSelectedRowModel = Q(
          () => [e.getState().rowSelection, e.getCoreRowModel()],
          (t, r) =>
            Object.keys(t).length
              ? go(e, r)
              : { rows: [], flatRows: [], rowsById: {} },
          ee(e.options, "debugTable"),
        )),
        (e.getFilteredSelectedRowModel = Q(
          () => [e.getState().rowSelection, e.getFilteredRowModel()],
          (t, r) =>
            Object.keys(t).length
              ? go(e, r)
              : { rows: [], flatRows: [], rowsById: {} },
          ee(e.options, "debugTable"),
        )),
        (e.getGroupedSelectedRowModel = Q(
          () => [e.getState().rowSelection, e.getSortedRowModel()],
          (t, r) =>
            Object.keys(t).length
              ? go(e, r)
              : { rows: [], flatRows: [], rowsById: {} },
          ee(e.options, "debugTable"),
        )),
        (e.getIsAllRowsSelected = () => {
          const t = e.getFilteredRowModel().flatRows,
            { rowSelection: r } = e.getState();
          let n = !!(t.length && Object.keys(r).length);
          return (
            n && t.some((i) => i.getCanSelect() && !r[i.id]) && (n = !1), n
          );
        }),
        (e.getIsAllPageRowsSelected = () => {
          const t = e
              .getPaginationRowModel()
              .flatRows.filter((i) => i.getCanSelect()),
            { rowSelection: r } = e.getState();
          let n = !!t.length;
          return n && t.some((i) => !r[i.id]) && (n = !1), n;
        }),
        (e.getIsSomeRowsSelected = () => {
          var t;
          const r = Object.keys(
            (t = e.getState().rowSelection) != null ? t : {},
          ).length;
          return r > 0 && r < e.getFilteredRowModel().flatRows.length;
        }),
        (e.getIsSomePageRowsSelected = () => {
          const t = e.getPaginationRowModel().flatRows;
          return e.getIsAllPageRowsSelected()
            ? !1
            : t
                .filter((r) => r.getCanSelect())
                .some((r) => r.getIsSelected() || r.getIsSomeSelected());
        }),
        (e.getToggleAllRowsSelectedHandler = () => (t) => {
          e.toggleAllRowsSelected(t.target.checked);
        }),
        (e.getToggleAllPageRowsSelectedHandler = () => (t) => {
          e.toggleAllPageRowsSelected(t.target.checked);
        });
    },
    createRow: (e, t) => {
      (e.toggleSelected = (r, n) => {
        const i = e.getIsSelected();
        t.setRowSelection((a) => {
          var o;
          if (((r = typeof r < "u" ? r : !i), e.getCanSelect() && i === r))
            return a;
          const u = { ...a };
          return _c(u, e.id, r, (o = n?.selectChildren) != null ? o : !0, t), u;
        });
      }),
        (e.getIsSelected = () => {
          const { rowSelection: r } = t.getState();
          return Zf(e, r);
        }),
        (e.getIsSomeSelected = () => {
          const { rowSelection: r } = t.getState();
          return Oc(e, r) === "some";
        }),
        (e.getIsAllSubRowsSelected = () => {
          const { rowSelection: r } = t.getState();
          return Oc(e, r) === "all";
        }),
        (e.getCanSelect = () => {
          var r;
          return typeof t.options.enableRowSelection == "function"
            ? t.options.enableRowSelection(e)
            : (r = t.options.enableRowSelection) != null
              ? r
              : !0;
        }),
        (e.getCanSelectSubRows = () => {
          var r;
          return typeof t.options.enableSubRowSelection == "function"
            ? t.options.enableSubRowSelection(e)
            : (r = t.options.enableSubRowSelection) != null
              ? r
              : !0;
        }),
        (e.getCanMultiSelect = () => {
          var r;
          return typeof t.options.enableMultiRowSelection == "function"
            ? t.options.enableMultiRowSelection(e)
            : (r = t.options.enableMultiRowSelection) != null
              ? r
              : !0;
        }),
        (e.getToggleSelectedHandler = () => {
          const r = e.getCanSelect();
          return (n) => {
            var i;
            r && e.toggleSelected((i = n.target) == null ? void 0 : i.checked);
          };
        });
    },
  },
  _c = (e, t, r, n, i) => {
    var a;
    const o = i.getRow(t, !0);
    r
      ? (o.getCanMultiSelect() || Object.keys(e).forEach((u) => delete e[u]),
        o.getCanSelect() && (e[t] = !0))
      : delete e[t],
      n &&
        (a = o.subRows) != null &&
        a.length &&
        o.getCanSelectSubRows() &&
        o.subRows.forEach((u) => _c(e, u.id, r, n, i));
  };
function go(e, t) {
  const r = e.getState().rowSelection,
    n = [],
    i = {},
    a = function (o, u) {
      return o
        .map((s) => {
          var l;
          const f = Zf(s, r);
          if (
            (f && (n.push(s), (i[s.id] = s)),
            (l = s.subRows) != null &&
              l.length &&
              (s = { ...s, subRows: a(s.subRows) }),
            f)
          )
            return s;
        })
        .filter(Boolean);
    };
  return { rows: a(t.rows), flatRows: n, rowsById: i };
}
function Zf(e, t) {
  var r;
  return (r = t[e.id]) != null ? r : !1;
}
function Oc(e, t, r) {
  var n;
  if (!((n = e.subRows) != null && n.length)) return !1;
  let i = !0,
    a = !1;
  return (
    e.subRows.forEach((o) => {
      if (
        !(a && !i) &&
        (o.getCanSelect() && (Zf(o, t) ? (a = !0) : (i = !1)),
        o.subRows && o.subRows.length)
      ) {
        const u = Oc(o, t);
        u === "all" ? (a = !0) : (u === "some" && (a = !0), (i = !1));
      }
    }),
    i ? "all" : a ? "some" : !1
  );
}
const Pc = /([0-9]+)/gm,
  r_ = (e, t, r) =>
    hb(kt(e.getValue(r)).toLowerCase(), kt(t.getValue(r)).toLowerCase()),
  n_ = (e, t, r) => hb(kt(e.getValue(r)), kt(t.getValue(r))),
  i_ = (e, t, r) =>
    Jf(kt(e.getValue(r)).toLowerCase(), kt(t.getValue(r)).toLowerCase()),
  a_ = (e, t, r) => Jf(kt(e.getValue(r)), kt(t.getValue(r))),
  o_ = (e, t, r) => {
    const n = e.getValue(r),
      i = t.getValue(r);
    return n > i ? 1 : n < i ? -1 : 0;
  },
  u_ = (e, t, r) => Jf(e.getValue(r), t.getValue(r));
function Jf(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function kt(e) {
  return typeof e == "number"
    ? isNaN(e) || e === 1 / 0 || e === -1 / 0
      ? ""
      : String(e)
    : typeof e == "string"
      ? e
      : "";
}
function hb(e, t) {
  const r = e.split(Pc).filter(Boolean),
    n = t.split(Pc).filter(Boolean);
  for (; r.length && n.length; ) {
    const i = r.shift(),
      a = n.shift(),
      o = parseInt(i, 10),
      u = parseInt(a, 10),
      s = [o, u].sort();
    if (isNaN(s[0])) {
      if (i > a) return 1;
      if (a > i) return -1;
      continue;
    }
    if (isNaN(s[1])) return isNaN(o) ? -1 : 1;
    if (o > u) return 1;
    if (u > o) return -1;
  }
  return r.length - n.length;
}
const Qr = {
    alphanumeric: r_,
    alphanumericCaseSensitive: n_,
    text: i_,
    textCaseSensitive: a_,
    datetime: o_,
    basic: u_,
  },
  s_ = {
    getInitialState: (e) => ({ sorting: [], ...e }),
    getDefaultColumnDef: () => ({ sortingFn: "auto", sortUndefined: 1 }),
    getDefaultOptions: (e) => ({
      onSortingChange: ze("sorting", e),
      isMultiSortEvent: (t) => t.shiftKey,
    }),
    createColumn: (e, t) => {
      (e.getAutoSortingFn = () => {
        const r = t.getFilteredRowModel().flatRows.slice(10);
        let n = !1;
        for (const i of r) {
          const a = i?.getValue(e.id);
          if (Object.prototype.toString.call(a) === "[object Date]")
            return Qr.datetime;
          if (typeof a == "string" && ((n = !0), a.split(Pc).length > 1))
            return Qr.alphanumeric;
        }
        return n ? Qr.text : Qr.basic;
      }),
        (e.getAutoSortDir = () => {
          const r = t.getFilteredRowModel().flatRows[0];
          return typeof r?.getValue(e.id) == "string" ? "asc" : "desc";
        }),
        (e.getSortingFn = () => {
          var r, n;
          if (!e) throw new Error();
          return _a(e.columnDef.sortingFn)
            ? e.columnDef.sortingFn
            : e.columnDef.sortingFn === "auto"
              ? e.getAutoSortingFn()
              : (r =
                    (n = t.options.sortingFns) == null
                      ? void 0
                      : n[e.columnDef.sortingFn]) != null
                ? r
                : Qr[e.columnDef.sortingFn];
        }),
        (e.toggleSorting = (r, n) => {
          const i = e.getNextSortingOrder(),
            a = typeof r < "u" && r !== null;
          t.setSorting((o) => {
            const u = o?.find((p) => p.id === e.id),
              s = o?.findIndex((p) => p.id === e.id);
            let l = [],
              f,
              c = a ? r : i === "desc";
            if (
              (o != null && o.length && e.getCanMultiSort() && n
                ? u
                  ? (f = "toggle")
                  : (f = "add")
                : o != null && o.length && s !== o.length - 1
                  ? (f = "replace")
                  : u
                    ? (f = "toggle")
                    : (f = "replace"),
              f === "toggle" && (a || i || (f = "remove")),
              f === "add")
            ) {
              var d;
              (l = [...o, { id: e.id, desc: c }]),
                l.splice(
                  0,
                  l.length -
                    ((d = t.options.maxMultiSortColCount) != null
                      ? d
                      : Number.MAX_SAFE_INTEGER),
                );
            } else
              f === "toggle"
                ? (l = o.map((p) => (p.id === e.id ? { ...p, desc: c } : p)))
                : f === "remove"
                  ? (l = o.filter((p) => p.id !== e.id))
                  : (l = [{ id: e.id, desc: c }]);
            return l;
          });
        }),
        (e.getFirstSortDir = () => {
          var r, n;
          return (
            (r =
              (n = e.columnDef.sortDescFirst) != null
                ? n
                : t.options.sortDescFirst) != null
              ? r
              : e.getAutoSortDir() === "desc"
          )
            ? "desc"
            : "asc";
        }),
        (e.getNextSortingOrder = (r) => {
          var n, i;
          const a = e.getFirstSortDir(),
            o = e.getIsSorted();
          return o
            ? o !== a &&
              ((n = t.options.enableSortingRemoval) == null || n) &&
              (!(r && (i = t.options.enableMultiRemove) != null) || i)
              ? !1
              : o === "desc"
                ? "asc"
                : "desc"
            : a;
        }),
        (e.getCanSort = () => {
          var r, n;
          return (
            ((r = e.columnDef.enableSorting) != null ? r : !0) &&
            ((n = t.options.enableSorting) != null ? n : !0) &&
            !!e.accessorFn
          );
        }),
        (e.getCanMultiSort = () => {
          var r, n;
          return (r =
            (n = e.columnDef.enableMultiSort) != null
              ? n
              : t.options.enableMultiSort) != null
            ? r
            : !!e.accessorFn;
        }),
        (e.getIsSorted = () => {
          var r;
          const n =
            (r = t.getState().sorting) == null
              ? void 0
              : r.find((i) => i.id === e.id);
          return n ? (n.desc ? "desc" : "asc") : !1;
        }),
        (e.getSortIndex = () => {
          var r, n;
          return (r =
            (n = t.getState().sorting) == null
              ? void 0
              : n.findIndex((i) => i.id === e.id)) != null
            ? r
            : -1;
        }),
        (e.clearSorting = () => {
          t.setSorting((r) =>
            r != null && r.length ? r.filter((n) => n.id !== e.id) : [],
          );
        }),
        (e.getToggleSortingHandler = () => {
          const r = e.getCanSort();
          return (n) => {
            r &&
              (n.persist == null || n.persist(),
              e.toggleSorting == null ||
                e.toggleSorting(
                  void 0,
                  e.getCanMultiSort()
                    ? t.options.isMultiSortEvent == null
                      ? void 0
                      : t.options.isMultiSortEvent(n)
                    : !1,
                ));
          };
        });
    },
    createTable: (e) => {
      (e.setSorting = (t) =>
        e.options.onSortingChange == null
          ? void 0
          : e.options.onSortingChange(t)),
        (e.resetSorting = (t) => {
          var r, n;
          e.setSorting(
            t
              ? []
              : (r = (n = e.initialState) == null ? void 0 : n.sorting) != null
                ? r
                : [],
          );
        }),
        (e.getPreSortedRowModel = () => e.getGroupedRowModel()),
        (e.getSortedRowModel = () => (
          !e._getSortedRowModel &&
            e.options.getSortedRowModel &&
            (e._getSortedRowModel = e.options.getSortedRowModel(e)),
          e.options.manualSorting || !e._getSortedRowModel
            ? e.getPreSortedRowModel()
            : e._getSortedRowModel()
        ));
    },
  },
  l_ = [MS, XS, US, GS, jS, IS, YS, ZS, s_, HS, JS, QS, e_, t_, WS];
function c_(e) {
  var t, r;
  const n = [...l_, ...((t = e._features) != null ? t : [])];
  let i = { _features: n };
  const a = i._features.reduce(
      (d, p) =>
        Object.assign(
          d,
          p.getDefaultOptions == null ? void 0 : p.getDefaultOptions(i),
        ),
      {},
    ),
    o = (d) =>
      i.options.mergeOptions ? i.options.mergeOptions(a, d) : { ...a, ...d };
  let s = { ...{}, ...((r = e.initialState) != null ? r : {}) };
  i._features.forEach((d) => {
    var p;
    s =
      (p = d.getInitialState == null ? void 0 : d.getInitialState(s)) != null
        ? p
        : s;
  });
  const l = [];
  let f = !1;
  const c = {
    _features: n,
    options: { ...a, ...e },
    initialState: s,
    _queue: (d) => {
      l.push(d),
        f ||
          ((f = !0),
          Promise.resolve()
            .then(() => {
              for (; l.length; ) l.shift()();
              f = !1;
            })
            .catch((p) =>
              setTimeout(() => {
                throw p;
              }),
            ));
    },
    reset: () => {
      i.setState(i.initialState);
    },
    setOptions: (d) => {
      const p = It(d, i.options);
      i.options = o(p);
    },
    getState: () => i.options.state,
    setState: (d) => {
      i.options.onStateChange == null || i.options.onStateChange(d);
    },
    _getRowId: (d, p, v) => {
      var h;
      return (h =
        i.options.getRowId == null ? void 0 : i.options.getRowId(d, p, v)) !=
        null
        ? h
        : `${v ? [v.id, p].join(".") : p}`;
    },
    getCoreRowModel: () => (
      i._getCoreRowModel || (i._getCoreRowModel = i.options.getCoreRowModel(i)),
      i._getCoreRowModel()
    ),
    getRowModel: () => i.getPaginationRowModel(),
    getRow: (d, p) => {
      let v = (p ? i.getPrePaginationRowModel() : i.getRowModel()).rowsById[d];
      if (!v && ((v = i.getCoreRowModel().rowsById[d]), !v)) throw new Error();
      return v;
    },
    _getDefaultColumnDef: Q(
      () => [i.options.defaultColumn],
      (d) => {
        var p;
        return (
          (d = (p = d) != null ? p : {}),
          {
            header: (v) => {
              const h = v.header.column.columnDef;
              return h.accessorKey ? h.accessorKey : h.accessorFn ? h.id : null;
            },
            cell: (v) => {
              var h, g;
              return (h =
                (g = v.renderValue()) == null || g.toString == null
                  ? void 0
                  : g.toString()) != null
                ? h
                : null;
            },
            ...i._features.reduce(
              (v, h) =>
                Object.assign(
                  v,
                  h.getDefaultColumnDef == null
                    ? void 0
                    : h.getDefaultColumnDef(),
                ),
              {},
            ),
            ...d,
          }
        );
      },
      ee(e, "debugColumns"),
    ),
    _getColumnDefs: () => i.options.columns,
    getAllColumns: Q(
      () => [i._getColumnDefs()],
      (d) => {
        const p = function (v, h, g) {
          return (
            g === void 0 && (g = 0),
            v.map((y) => {
              const b = RS(i, y, g, h),
                w = y;
              return (b.columns = w.columns ? p(w.columns, b, g + 1) : []), b;
            })
          );
        };
        return p(d);
      },
      ee(e, "debugColumns"),
    ),
    getAllFlatColumns: Q(
      () => [i.getAllColumns()],
      (d) => d.flatMap((p) => p.getFlatColumns()),
      ee(e, "debugColumns"),
    ),
    _getAllFlatColumnsById: Q(
      () => [i.getAllFlatColumns()],
      (d) => d.reduce((p, v) => ((p[v.id] = v), p), {}),
      ee(e, "debugColumns"),
    ),
    getAllLeafColumns: Q(
      () => [i.getAllColumns(), i._getOrderColumnsFn()],
      (d, p) => {
        let v = d.flatMap((h) => h.getLeafColumns());
        return p(v);
      },
      ee(e, "debugColumns"),
    ),
    getColumn: (d) => i._getAllFlatColumnsById()[d],
  };
  Object.assign(i, c);
  for (let d = 0; d < i._features.length; d++) {
    const p = i._features[d];
    p == null || p.createTable == null || p.createTable(i);
  }
  return i;
}
function f_() {
  return (e) =>
    Q(
      () => [e.options.data],
      (t) => {
        const r = { rows: [], flatRows: [], rowsById: {} },
          n = function (i, a, o) {
            a === void 0 && (a = 0);
            const u = [];
            for (let l = 0; l < i.length; l++) {
              const f = Xf(
                e,
                e._getRowId(i[l], l, o),
                i[l],
                l,
                a,
                void 0,
                o?.id,
              );
              if (
                (r.flatRows.push(f),
                (r.rowsById[f.id] = f),
                u.push(f),
                e.options.getSubRows)
              ) {
                var s;
                (f.originalSubRows = e.options.getSubRows(i[l], l)),
                  (s = f.originalSubRows) != null &&
                    s.length &&
                    (f.subRows = n(f.originalSubRows, a + 1, f));
              }
            }
            return u;
          };
        return (r.rows = n(t)), r;
      },
      ee(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()),
    );
}
function gb(e, t, r) {
  return r.options.filterFromLeafRows ? d_(e, t, r) : p_(e, t, r);
}
function d_(e, t, r) {
  var n;
  const i = [],
    a = {},
    o = (n = r.options.maxLeafRowFilterDepth) != null ? n : 100,
    u = function (s, l) {
      l === void 0 && (l = 0);
      const f = [];
      for (let d = 0; d < s.length; d++) {
        var c;
        let p = s[d];
        const v = Xf(r, p.id, p.original, p.index, p.depth, void 0, p.parentId);
        if (
          ((v.columnFilters = p.columnFilters),
          (c = p.subRows) != null && c.length && l < o)
        ) {
          if (
            ((v.subRows = u(p.subRows, l + 1)),
            (p = v),
            t(p) && !v.subRows.length)
          ) {
            f.push(p), (a[p.id] = p), i.push(p);
            continue;
          }
          if (t(p) || v.subRows.length) {
            f.push(p), (a[p.id] = p), i.push(p);
            continue;
          }
        } else (p = v), t(p) && (f.push(p), (a[p.id] = p), i.push(p));
      }
      return f;
    };
  return { rows: u(e), flatRows: i, rowsById: a };
}
function p_(e, t, r) {
  var n;
  const i = [],
    a = {},
    o = (n = r.options.maxLeafRowFilterDepth) != null ? n : 100,
    u = function (s, l) {
      l === void 0 && (l = 0);
      const f = [];
      for (let d = 0; d < s.length; d++) {
        let p = s[d];
        if (t(p)) {
          var c;
          if ((c = p.subRows) != null && c.length && l < o) {
            const h = Xf(
              r,
              p.id,
              p.original,
              p.index,
              p.depth,
              void 0,
              p.parentId,
            );
            (h.subRows = u(p.subRows, l + 1)), (p = h);
          }
          f.push(p), i.push(p), (a[p.id] = p);
        }
      }
      return f;
    };
  return { rows: u(e), flatRows: i, rowsById: a };
}
function h_() {
  return (e, t) =>
    Q(
      () => [
        e.getPreFilteredRowModel(),
        e.getState().columnFilters,
        e.getState().globalFilter,
        e.getFilteredRowModel(),
      ],
      (r, n, i) => {
        if (!r.rows.length || (!(n != null && n.length) && !i)) return r;
        const a = [
            ...n.map((u) => u.id).filter((u) => u !== t),
            i ? "__global__" : void 0,
          ].filter(Boolean),
          o = (u) => {
            for (let s = 0; s < a.length; s++)
              if (u.columnFilters[a[s]] === !1) return !1;
            return !0;
          };
        return gb(r.rows, o, e);
      },
      ee(e.options, "debugTable"),
    );
}
function g_() {
  return (e, t) =>
    Q(
      () => {
        var r;
        return [(r = e.getColumn(t)) == null ? void 0 : r.getFacetedRowModel()];
      },
      (r) => {
        if (!r) return new Map();
        let n = new Map();
        for (let a = 0; a < r.flatRows.length; a++) {
          const o = r.flatRows[a].getUniqueValues(t);
          for (let u = 0; u < o.length; u++) {
            const s = o[u];
            if (n.has(s)) {
              var i;
              n.set(s, ((i = n.get(s)) != null ? i : 0) + 1);
            } else n.set(s, 1);
          }
        }
        return n;
      },
      ee(e.options, "debugTable"),
    );
}
function v_() {
  return (e) =>
    Q(
      () => [
        e.getPreFilteredRowModel(),
        e.getState().columnFilters,
        e.getState().globalFilter,
      ],
      (t, r, n) => {
        if (!t.rows.length || (!(r != null && r.length) && !n)) {
          for (let d = 0; d < t.flatRows.length; d++)
            (t.flatRows[d].columnFilters = {}),
              (t.flatRows[d].columnFiltersMeta = {});
          return t;
        }
        const i = [],
          a = [];
        (r ?? []).forEach((d) => {
          var p;
          const v = e.getColumn(d.id);
          if (!v) return;
          const h = v.getFilterFn();
          h &&
            i.push({
              id: d.id,
              filterFn: h,
              resolvedValue:
                (p =
                  h.resolveFilterValue == null
                    ? void 0
                    : h.resolveFilterValue(d.value)) != null
                  ? p
                  : d.value,
            });
        });
        const o = (r ?? []).map((d) => d.id),
          u = e.getGlobalFilterFn(),
          s = e.getAllLeafColumns().filter((d) => d.getCanGlobalFilter());
        n &&
          u &&
          s.length &&
          (o.push("__global__"),
          s.forEach((d) => {
            var p;
            a.push({
              id: d.id,
              filterFn: u,
              resolvedValue:
                (p =
                  u.resolveFilterValue == null
                    ? void 0
                    : u.resolveFilterValue(n)) != null
                  ? p
                  : n,
            });
          }));
        let l, f;
        for (let d = 0; d < t.flatRows.length; d++) {
          const p = t.flatRows[d];
          if (((p.columnFilters = {}), i.length))
            for (let v = 0; v < i.length; v++) {
              l = i[v];
              const h = l.id;
              p.columnFilters[h] = l.filterFn(p, h, l.resolvedValue, (g) => {
                p.columnFiltersMeta[h] = g;
              });
            }
          if (a.length) {
            for (let v = 0; v < a.length; v++) {
              f = a[v];
              const h = f.id;
              if (
                f.filterFn(p, h, f.resolvedValue, (g) => {
                  p.columnFiltersMeta[h] = g;
                })
              ) {
                p.columnFilters.__global__ = !0;
                break;
              }
            }
            p.columnFilters.__global__ !== !0 &&
              (p.columnFilters.__global__ = !1);
          }
        }
        const c = (d) => {
          for (let p = 0; p < o.length; p++)
            if (d.columnFilters[o[p]] === !1) return !1;
          return !0;
        };
        return gb(t.rows, c, e);
      },
      ee(e.options, "debugTable", "getFilteredRowModel", () =>
        e._autoResetPageIndex(),
      ),
    );
}
function m_() {
  return (e) =>
    Q(
      () => [e.getState().sorting, e.getPreSortedRowModel()],
      (t, r) => {
        if (!r.rows.length || !(t != null && t.length)) return r;
        const n = e.getState().sorting,
          i = [],
          a = n.filter((s) => {
            var l;
            return (l = e.getColumn(s.id)) == null ? void 0 : l.getCanSort();
          }),
          o = {};
        a.forEach((s) => {
          const l = e.getColumn(s.id);
          l &&
            (o[s.id] = {
              sortUndefined: l.columnDef.sortUndefined,
              invertSorting: l.columnDef.invertSorting,
              sortingFn: l.getSortingFn(),
            });
        });
        const u = (s) => {
          const l = s.map((f) => ({ ...f }));
          return (
            l.sort((f, c) => {
              for (let p = 0; p < a.length; p += 1) {
                var d;
                const v = a[p],
                  h = o[v.id],
                  g = h.sortUndefined,
                  y = (d = v?.desc) != null ? d : !1;
                let b = 0;
                if (g) {
                  const w = f.getValue(v.id),
                    _ = c.getValue(v.id),
                    m = w === void 0,
                    x = _ === void 0;
                  if (m || x) {
                    if (g === "first") return m ? -1 : 1;
                    if (g === "last") return m ? 1 : -1;
                    b = m && x ? 0 : m ? g : -g;
                  }
                }
                if ((b === 0 && (b = h.sortingFn(f, c, v.id)), b !== 0))
                  return y && (b *= -1), h.invertSorting && (b *= -1), b;
              }
              return f.index - c.index;
            }),
            l.forEach((f) => {
              var c;
              i.push(f),
                (c = f.subRows) != null &&
                  c.length &&
                  (f.subRows = u(f.subRows));
            }),
            l
          );
        };
        return { rows: u(r.rows), flatRows: i, rowsById: r.rowsById };
      },
      ee(e.options, "debugTable", "getSortedRowModel", () =>
        e._autoResetPageIndex(),
      ),
    );
}
/**
 * react-table
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vb(e, t) {
  return e ? (y_(e) ? O.createElement(e, t) : e) : null;
}
function y_(e) {
  return b_(e) || typeof e == "function" || x_(e);
}
function b_(e) {
  return (
    typeof e == "function" &&
    (() => {
      const t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })()
  );
}
function x_(e) {
  return (
    typeof e == "object" &&
    typeof e.$$typeof == "symbol" &&
    ["react.memo", "react.forward_ref"].includes(e.$$typeof.description)
  );
}
function w_(e) {
  const t = {
      state: {},
      onStateChange: () => {},
      renderFallbackValue: null,
      ...e,
    },
    [r] = O.useState(() => ({ current: c_(t) })),
    [n, i] = O.useState(() => r.current.initialState);
  return (
    r.current.setOptions((a) => ({
      ...a,
      ...e,
      state: { ...n, ...e.state },
      onStateChange: (o) => {
        i(o), e.onStateChange == null || e.onStateChange(o);
      },
    })),
    r.current
  );
}
function S_({ className: e, ...t }) {
  return C.jsx("div", {
    "data-slot": "table-container",
    className: "relative w-full overflow-x-auto",
    children: C.jsx("table", {
      "data-slot": "table",
      className: se("w-full caption-bottom text-sm", e),
      ...t,
    }),
  });
}
function __({ className: e, ...t }) {
  return C.jsx("thead", {
    "data-slot": "table-header",
    className: se("[&_tr]:border-b", e),
    ...t,
  });
}
function O_({ className: e, ...t }) {
  return C.jsx("tbody", {
    "data-slot": "table-body",
    className: se("[&_tr:last-child]:border-0", e),
    ...t,
  });
}
function Mi({ className: e, ...t }) {
  return C.jsx("tr", {
    "data-slot": "table-row",
    className: se(
      "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
      e,
    ),
    ...t,
  });
}
function P_({ className: e, ...t }) {
  return C.jsx("th", {
    "data-slot": "table-head",
    className: se(
      "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e,
    ),
    ...t,
  });
}
function vo({ className: e, ...t }) {
  return C.jsx("td", {
    "data-slot": "table-cell",
    className: se(
      "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e,
    ),
    ...t,
  });
}
function C_({ columns: e, table: t, isLoading: r, onClickCell: n }) {
  return r
    ? C.jsx(Mi, {
        children: C.jsx(vo, {
          colSpan: e.length,
          className: "h-24 text-center",
          children: C.jsx("p", {
            className: "text-sm",
            children: "Fetching..",
          }),
        }),
      })
    : t.getRowModel().rows?.length
      ? t.getRowModel().rows.map((i) =>
          C.jsx(
            Mi,
            {
              "data-state": i.getIsSelected() && "selected",
              children: i.getVisibleCells().map((a) =>
                C.jsx(
                  vo,
                  {
                    onClick: () => {
                      const o = a.column.columnDef;
                      n && n(i.original, o);
                    },
                    children: vb(a.column.columnDef.cell, a.getContext()),
                  },
                  a.id,
                ),
              ),
            },
            i.id,
          ),
        )
      : C.jsx(Mi, {
          children: C.jsx(vo, {
            colSpan: e.length,
            className: "h-24 text-center",
            children: C.jsx("p", {
              className: "text-lg font-medium",
              children: "No results.",
            }),
          }),
        });
}
function Lt(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var A_ = ["color"],
  E_ = O.forwardRef(function (e, t) {
    var r = e.color,
      n = r === void 0 ? "currentColor" : r,
      i = Lt(e, A_);
    return O.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        i,
        { ref: t },
      ),
      O.createElement("path", {
        d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
        fill: n,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  T_ = ["color"],
  R_ = O.forwardRef(function (e, t) {
    var r = e.color,
      n = r === void 0 ? "currentColor" : r,
      i = Lt(e, T_);
    return O.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        i,
        { ref: t },
      ),
      O.createElement("path", {
        d: "M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z",
        fill: n,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  M_ = ["color"],
  j_ = O.forwardRef(function (e, t) {
    var r = e.color,
      n = r === void 0 ? "currentColor" : r,
      i = Lt(e, M_);
    return O.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        i,
        { ref: t },
      ),
      O.createElement("path", {
        d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
        fill: n,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  I_ = ["color"],
  $_ = O.forwardRef(function (e, t) {
    var r = e.color,
      n = r === void 0 ? "currentColor" : r,
      i = Lt(e, I_);
    return O.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        i,
        { ref: t },
      ),
      O.createElement("path", {
        d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
        fill: n,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  N_ = ["color"],
  D_ = O.forwardRef(function (e, t) {
    var r = e.color,
      n = r === void 0 ? "currentColor" : r,
      i = Lt(e, N_);
    return O.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        i,
        { ref: t },
      ),
      O.createElement("path", {
        d: "M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z",
        fill: n,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  k_ = ["color"],
  q_ = O.forwardRef(function (e, t) {
    var r = e.color,
      n = r === void 0 ? "currentColor" : r,
      i = Lt(e, k_);
    return O.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        i,
        { ref: t },
      ),
      O.createElement("path", {
        d: "M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z",
        fill: n,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  F_ = ["color"],
  L_ = O.forwardRef(function (e, t) {
    var r = e.color,
      n = r === void 0 ? "currentColor" : r,
      i = Lt(e, F_);
    return O.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        i,
        { ref: t },
      ),
      O.createElement("path", {
        d: "M5.5 3C4.67157 3 4 3.67157 4 4.5C4 5.32843 4.67157 6 5.5 6C6.32843 6 7 5.32843 7 4.5C7 3.67157 6.32843 3 5.5 3ZM3 5C3.01671 5 3.03323 4.99918 3.04952 4.99758C3.28022 6.1399 4.28967 7 5.5 7C6.71033 7 7.71978 6.1399 7.95048 4.99758C7.96677 4.99918 7.98329 5 8 5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H8C7.98329 4 7.96677 4.00082 7.95048 4.00242C7.71978 2.86009 6.71033 2 5.5 2C4.28967 2 3.28022 2.86009 3.04952 4.00242C3.03323 4.00082 3.01671 4 3 4H1.5C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5H3ZM11.9505 10.9976C11.7198 12.1399 10.7103 13 9.5 13C8.28967 13 7.28022 12.1399 7.04952 10.9976C7.03323 10.9992 7.01671 11 7 11H1.5C1.22386 11 1 10.7761 1 10.5C1 10.2239 1.22386 10 1.5 10H7C7.01671 10 7.03323 10.0008 7.04952 10.0024C7.28022 8.8601 8.28967 8 9.5 8C10.7103 8 11.7198 8.8601 11.9505 10.0024C11.9668 10.0008 11.9833 10 12 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H12C11.9833 11 11.9668 10.9992 11.9505 10.9976ZM8 10.5C8 9.67157 8.67157 9 9.5 9C10.3284 9 11 9.67157 11 10.5C11 11.3284 10.3284 12 9.5 12C8.67157 12 8 11.3284 8 10.5Z",
        fill: n,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  B_ = ["color"],
  V_ = O.forwardRef(function (e, t) {
    var r = e.color,
      n = r === void 0 ? "currentColor" : r,
      i = Lt(e, B_);
    return O.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        i,
        { ref: t },
      ),
      O.createElement("path", {
        d: "M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z",
        fill: n,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  });
const H_ = nS(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        table: "",
      },
    },
    defaultVariants: { variant: "default" },
  },
);
function mo({ className: e, variant: t, asChild: r = !1, ...n }) {
  const i = r ? Wf : "span";
  return C.jsx(i, {
    "data-slot": "badge",
    className: se(H_({ variant: t }), e),
    ...n,
  });
}
var up = 1,
  z_ = 0.9,
  U_ = 0.8,
  G_ = 0.17,
  yo = 0.1,
  bo = 0.999,
  W_ = 0.9999,
  K_ = 0.99,
  X_ = /[\\\/_+.#"@\[\(\{&]/,
  Y_ = /[\\\/_+.#"@\[\(\{&]/g,
  Z_ = /[\s-]/,
  mb = /[\s-]/g;
function Cc(e, t, r, n, i, a, o) {
  if (a === t.length) return i === e.length ? up : K_;
  var u = `${i},${a}`;
  if (o[u] !== void 0) return o[u];
  for (var s = n.charAt(a), l = r.indexOf(s, i), f = 0, c, d, p, v; l >= 0; )
    (c = Cc(e, t, r, n, l + 1, a + 1, o)),
      c > f &&
        (l === i
          ? (c *= up)
          : X_.test(e.charAt(l - 1))
            ? ((c *= U_),
              (p = e.slice(i, l - 1).match(Y_)),
              p && i > 0 && (c *= Math.pow(bo, p.length)))
            : Z_.test(e.charAt(l - 1))
              ? ((c *= z_),
                (v = e.slice(i, l - 1).match(mb)),
                v && i > 0 && (c *= Math.pow(bo, v.length)))
              : ((c *= G_), i > 0 && (c *= Math.pow(bo, l - i))),
        e.charAt(l) !== t.charAt(a) && (c *= W_)),
      ((c < yo && r.charAt(l - 1) === n.charAt(a + 1)) ||
        (n.charAt(a + 1) === n.charAt(a) && r.charAt(l - 1) !== n.charAt(a))) &&
        ((d = Cc(e, t, r, n, l + 1, a + 2, o)), d * yo > c && (c = d * yo)),
      c > f && (f = c),
      (l = r.indexOf(s, l + 1));
  return (o[u] = f), f;
}
function sp(e) {
  return e.toLowerCase().replace(mb, " ");
}
function J_(e, t, r) {
  return (
    (e = r && r.length > 0 ? `${e + " " + r.join(" ")}` : e),
    Cc(e, t, sp(e), sp(t), 0, 0, {})
  );
}
var en = '[cmdk-group=""]',
  xo = '[cmdk-group-items=""]',
  Q_ = '[cmdk-group-heading=""]',
  yb = '[cmdk-item=""]',
  lp = `${yb}:not([aria-disabled="true"])`,
  Ac = "cmdk-item-select",
  xr = "data-value",
  eO = (e, t, r) => J_(e, t, r),
  bb = O.createContext(void 0),
  ti = () => O.useContext(bb),
  xb = O.createContext(void 0),
  Qf = () => O.useContext(xb),
  wb = O.createContext(void 0),
  Sb = O.forwardRef((e, t) => {
    let r = wr(() => {
        var R, B;
        return {
          search: "",
          value:
            (B = (R = e.value) != null ? R : e.defaultValue) != null ? B : "",
          selectedItemId: void 0,
          filtered: { count: 0, items: new Map(), groups: new Set() },
        };
      }),
      n = wr(() => new Set()),
      i = wr(() => new Map()),
      a = wr(() => new Map()),
      o = wr(() => new Set()),
      u = _b(e),
      {
        label: s,
        children: l,
        value: f,
        onValueChange: c,
        filter: d,
        shouldFilter: p,
        loop: v,
        disablePointerSelection: h = !1,
        vimBindings: g = !0,
        ...y
      } = e,
      b = st(),
      w = st(),
      _ = st(),
      m = O.useRef(null),
      x = fO();
    sr(() => {
      if (f !== void 0) {
        let R = f.trim();
        (r.current.value = R), S.emit();
      }
    }, [f]),
      sr(() => {
        x(6, M);
      }, []);
    let S = O.useMemo(
        () => ({
          subscribe: (R) => (o.current.add(R), () => o.current.delete(R)),
          snapshot: () => r.current,
          setState: (R, B, X) => {
            var z, ne, U, re;
            if (!Object.is(r.current[R], B)) {
              if (((r.current[R] = B), R === "search")) T(), j(), x(1, A);
              else if (R === "value") {
                if (
                  document.activeElement.hasAttribute("cmdk-input") ||
                  document.activeElement.hasAttribute("cmdk-root")
                ) {
                  let L = document.getElementById(_);
                  L
                    ? L.focus()
                    : (z = document.getElementById(b)) == null || z.focus();
                }
                if (
                  (x(7, () => {
                    var L;
                    (r.current.selectedItemId =
                      (L = N()) == null ? void 0 : L.id),
                      S.emit();
                  }),
                  X || x(5, M),
                  ((ne = u.current) == null ? void 0 : ne.value) !== void 0)
                ) {
                  let L = B ?? "";
                  (re = (U = u.current).onValueChange) == null || re.call(U, L);
                  return;
                }
              }
              S.emit();
            }
          },
          emit: () => {
            o.current.forEach((R) => R());
          },
        }),
        [],
      ),
      P = O.useMemo(
        () => ({
          value: (R, B, X) => {
            var z;
            B !== ((z = a.current.get(R)) == null ? void 0 : z.value) &&
              (a.current.set(R, { value: B, keywords: X }),
              r.current.filtered.items.set(R, E(B, X)),
              x(2, () => {
                j(), S.emit();
              }));
          },
          item: (R, B) => (
            n.current.add(R),
            B &&
              (i.current.has(B)
                ? i.current.get(B).add(R)
                : i.current.set(B, new Set([R]))),
            x(3, () => {
              T(), j(), r.current.value || A(), S.emit();
            }),
            () => {
              a.current.delete(R),
                n.current.delete(R),
                r.current.filtered.items.delete(R);
              let X = N();
              x(4, () => {
                T(), X?.getAttribute("id") === R && A(), S.emit();
              });
            }
          ),
          group: (R) => (
            i.current.has(R) || i.current.set(R, new Set()),
            () => {
              a.current.delete(R), i.current.delete(R);
            }
          ),
          filter: () => u.current.shouldFilter,
          label: s || e["aria-label"],
          getDisablePointerSelection: () => u.current.disablePointerSelection,
          listId: b,
          inputId: _,
          labelId: w,
          listInnerRef: m,
        }),
        [],
      );
    function E(R, B) {
      var X, z;
      let ne =
        (z = (X = u.current) == null ? void 0 : X.filter) != null ? z : eO;
      return R ? ne(R, r.current.search, B) : 0;
    }
    function j() {
      if (!r.current.search || u.current.shouldFilter === !1) return;
      let R = r.current.filtered.items,
        B = [];
      r.current.filtered.groups.forEach((z) => {
        let ne = i.current.get(z),
          U = 0;
        ne.forEach((re) => {
          let L = R.get(re);
          U = Math.max(L, U);
        }),
          B.push([z, U]);
      });
      let X = m.current;
      $()
        .sort((z, ne) => {
          var U, re;
          let L = z.getAttribute("id"),
            G = ne.getAttribute("id");
          return (
            ((U = R.get(G)) != null ? U : 0) -
            ((re = R.get(L)) != null ? re : 0)
          );
        })
        .forEach((z) => {
          let ne = z.closest(xo);
          ne
            ? ne.appendChild(
                z.parentElement === ne ? z : z.closest(`${xo} > *`),
              )
            : X.appendChild(z.parentElement === X ? z : z.closest(`${xo} > *`));
        }),
        B.sort((z, ne) => ne[1] - z[1]).forEach((z) => {
          var ne;
          let U =
            (ne = m.current) == null
              ? void 0
              : ne.querySelector(`${en}[${xr}="${encodeURIComponent(z[0])}"]`);
          U?.parentElement.appendChild(U);
        });
    }
    function A() {
      let R = $().find((X) => X.getAttribute("aria-disabled") !== "true"),
        B = R?.getAttribute(xr);
      S.setState("value", B || void 0);
    }
    function T() {
      var R, B, X, z;
      if (!r.current.search || u.current.shouldFilter === !1) {
        r.current.filtered.count = n.current.size;
        return;
      }
      r.current.filtered.groups = new Set();
      let ne = 0;
      for (let U of n.current) {
        let re =
            (B = (R = a.current.get(U)) == null ? void 0 : R.value) != null
              ? B
              : "",
          L =
            (z = (X = a.current.get(U)) == null ? void 0 : X.keywords) != null
              ? z
              : [],
          G = E(re, L);
        r.current.filtered.items.set(U, G), G > 0 && ne++;
      }
      for (let [U, re] of i.current)
        for (let L of re)
          if (r.current.filtered.items.get(L) > 0) {
            r.current.filtered.groups.add(U);
            break;
          }
      r.current.filtered.count = ne;
    }
    function M() {
      var R, B, X;
      let z = N();
      z &&
        (((R = z.parentElement) == null ? void 0 : R.firstChild) === z &&
          ((X = (B = z.closest(en)) == null ? void 0 : B.querySelector(Q_)) ==
            null ||
            X.scrollIntoView({ block: "nearest" })),
        z.scrollIntoView({ block: "nearest" }));
    }
    function N() {
      var R;
      return (R = m.current) == null
        ? void 0
        : R.querySelector(`${yb}[aria-selected="true"]`);
    }
    function $() {
      var R;
      return Array.from(
        ((R = m.current) == null ? void 0 : R.querySelectorAll(lp)) || [],
      );
    }
    function k(R) {
      let B = $()[R];
      B && S.setState("value", B.getAttribute(xr));
    }
    function F(R) {
      var B;
      let X = N(),
        z = $(),
        ne = z.findIndex((re) => re === X),
        U = z[ne + R];
      (B = u.current) != null &&
        B.loop &&
        (U =
          ne + R < 0
            ? z[z.length - 1]
            : ne + R === z.length
              ? z[0]
              : z[ne + R]),
        U && S.setState("value", U.getAttribute(xr));
    }
    function V(R) {
      let B = N(),
        X = B?.closest(en),
        z;
      for (; X && !z; )
        (X = R > 0 ? lO(X, en) : cO(X, en)), (z = X?.querySelector(lp));
      z ? S.setState("value", z.getAttribute(xr)) : F(R);
    }
    let H = () => k($().length - 1),
      Z = (R) => {
        R.preventDefault(), R.metaKey ? H() : R.altKey ? V(1) : F(1);
      },
      J = (R) => {
        R.preventDefault(), R.metaKey ? k(0) : R.altKey ? V(-1) : F(-1);
      };
    return O.createElement(
      Oe.div,
      {
        ref: t,
        tabIndex: -1,
        ...y,
        "cmdk-root": "",
        onKeyDown: (R) => {
          var B;
          (B = y.onKeyDown) == null || B.call(y, R);
          let X = R.nativeEvent.isComposing || R.keyCode === 229;
          if (!(R.defaultPrevented || X))
            switch (R.key) {
              case "n":
              case "j": {
                g && R.ctrlKey && Z(R);
                break;
              }
              case "ArrowDown": {
                Z(R);
                break;
              }
              case "p":
              case "k": {
                g && R.ctrlKey && J(R);
                break;
              }
              case "ArrowUp": {
                J(R);
                break;
              }
              case "Home": {
                R.preventDefault(), k(0);
                break;
              }
              case "End": {
                R.preventDefault(), H();
                break;
              }
              case "Enter": {
                R.preventDefault();
                let z = N();
                if (z) {
                  let ne = new Event(Ac);
                  z.dispatchEvent(ne);
                }
              }
            }
        },
      },
      O.createElement(
        "label",
        { "cmdk-label": "", htmlFor: P.inputId, id: P.labelId, style: pO },
        s,
      ),
      Oa(e, (R) =>
        O.createElement(
          xb.Provider,
          { value: S },
          O.createElement(bb.Provider, { value: P }, R),
        ),
      ),
    );
  }),
  tO = O.forwardRef((e, t) => {
    var r, n;
    let i = st(),
      a = O.useRef(null),
      o = O.useContext(wb),
      u = ti(),
      s = _b(e),
      l =
        (n = (r = s.current) == null ? void 0 : r.forceMount) != null
          ? n
          : o?.forceMount;
    sr(() => {
      if (!l) return u.item(i, o?.id);
    }, [l]);
    let f = Ob(i, a, [e.value, e.children, a], e.keywords),
      c = Qf(),
      d = qt((x) => x.value && x.value === f.current),
      p = qt((x) =>
        l || u.filter() === !1
          ? !0
          : x.search
            ? x.filtered.items.get(i) > 0
            : !0,
      );
    O.useEffect(() => {
      let x = a.current;
      if (!(!x || e.disabled))
        return x.addEventListener(Ac, v), () => x.removeEventListener(Ac, v);
    }, [p, e.onSelect, e.disabled]);
    function v() {
      var x, S;
      h(), (S = (x = s.current).onSelect) == null || S.call(x, f.current);
    }
    function h() {
      c.setState("value", f.current, !0);
    }
    if (!p) return null;
    let {
      disabled: g,
      value: y,
      onSelect: b,
      forceMount: w,
      keywords: _,
      ...m
    } = e;
    return O.createElement(
      Oe.div,
      {
        ref: xn(a, t),
        ...m,
        id: i,
        "cmdk-item": "",
        role: "option",
        "aria-disabled": !!g,
        "aria-selected": !!d,
        "data-disabled": !!g,
        "data-selected": !!d,
        onPointerMove: g || u.getDisablePointerSelection() ? void 0 : h,
        onClick: g ? void 0 : v,
      },
      e.children,
    );
  }),
  rO = O.forwardRef((e, t) => {
    let { heading: r, children: n, forceMount: i, ...a } = e,
      o = st(),
      u = O.useRef(null),
      s = O.useRef(null),
      l = st(),
      f = ti(),
      c = qt((p) =>
        i || f.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(o) : !0,
      );
    sr(() => f.group(o), []), Ob(o, u, [e.value, e.heading, s]);
    let d = O.useMemo(() => ({ id: o, forceMount: i }), [i]);
    return O.createElement(
      Oe.div,
      {
        ref: xn(u, t),
        ...a,
        "cmdk-group": "",
        role: "presentation",
        hidden: c ? void 0 : !0,
      },
      r &&
        O.createElement(
          "div",
          { ref: s, "cmdk-group-heading": "", "aria-hidden": !0, id: l },
          r,
        ),
      Oa(e, (p) =>
        O.createElement(
          "div",
          {
            "cmdk-group-items": "",
            role: "group",
            "aria-labelledby": r ? l : void 0,
          },
          O.createElement(wb.Provider, { value: d }, p),
        ),
      ),
    );
  }),
  nO = O.forwardRef((e, t) => {
    let { alwaysRender: r, ...n } = e,
      i = O.useRef(null),
      a = qt((o) => !o.search);
    return !r && !a
      ? null
      : O.createElement(Oe.div, {
          ref: xn(i, t),
          ...n,
          "cmdk-separator": "",
          role: "separator",
        });
  }),
  iO = O.forwardRef((e, t) => {
    let { onValueChange: r, ...n } = e,
      i = e.value != null,
      a = Qf(),
      o = qt((l) => l.search),
      u = qt((l) => l.selectedItemId),
      s = ti();
    return (
      O.useEffect(() => {
        e.value != null && a.setState("search", e.value);
      }, [e.value]),
      O.createElement(Oe.input, {
        ref: t,
        ...n,
        "cmdk-input": "",
        autoComplete: "off",
        autoCorrect: "off",
        spellCheck: !1,
        "aria-autocomplete": "list",
        role: "combobox",
        "aria-expanded": !0,
        "aria-controls": s.listId,
        "aria-labelledby": s.labelId,
        "aria-activedescendant": u,
        id: s.inputId,
        type: "text",
        value: i ? e.value : o,
        onChange: (l) => {
          i || a.setState("search", l.target.value), r?.(l.target.value);
        },
      })
    );
  }),
  aO = O.forwardRef((e, t) => {
    let { children: r, label: n = "Suggestions", ...i } = e,
      a = O.useRef(null),
      o = O.useRef(null),
      u = qt((l) => l.selectedItemId),
      s = ti();
    return (
      O.useEffect(() => {
        if (o.current && a.current) {
          let l = o.current,
            f = a.current,
            c,
            d = new ResizeObserver(() => {
              c = requestAnimationFrame(() => {
                let p = l.offsetHeight;
                f.style.setProperty("--cmdk-list-height", p.toFixed(1) + "px");
              });
            });
          return (
            d.observe(l),
            () => {
              cancelAnimationFrame(c), d.unobserve(l);
            }
          );
        }
      }, []),
      O.createElement(
        Oe.div,
        {
          ref: xn(a, t),
          ...i,
          "cmdk-list": "",
          role: "listbox",
          tabIndex: -1,
          "aria-activedescendant": u,
          "aria-label": n,
          id: s.listId,
        },
        Oa(e, (l) =>
          O.createElement(
            "div",
            { ref: xn(o, s.listInnerRef), "cmdk-list-sizer": "" },
            l,
          ),
        ),
      )
    );
  }),
  oO = O.forwardRef((e, t) => {
    let {
      open: r,
      onOpenChange: n,
      overlayClassName: i,
      contentClassName: a,
      container: o,
      ...u
    } = e;
    return O.createElement(
      aS,
      { open: r, onOpenChange: n },
      O.createElement(
        oS,
        { container: o },
        O.createElement(uS, { "cmdk-overlay": "", className: i }),
        O.createElement(
          sS,
          { "aria-label": e.label, "cmdk-dialog": "", className: a },
          O.createElement(Sb, { ref: t, ...u }),
        ),
      ),
    );
  }),
  uO = O.forwardRef((e, t) =>
    qt((r) => r.filtered.count === 0)
      ? O.createElement(Oe.div, {
          ref: t,
          ...e,
          "cmdk-empty": "",
          role: "presentation",
        })
      : null,
  ),
  sO = O.forwardRef((e, t) => {
    let { progress: r, children: n, label: i = "Loading...", ...a } = e;
    return O.createElement(
      Oe.div,
      {
        ref: t,
        ...a,
        "cmdk-loading": "",
        role: "progressbar",
        "aria-valuenow": r,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": i,
      },
      Oa(e, (o) => O.createElement("div", { "aria-hidden": !0 }, o)),
    );
  }),
  fr = Object.assign(Sb, {
    List: aO,
    Item: tO,
    Input: iO,
    Group: rO,
    Separator: nO,
    Dialog: oO,
    Empty: uO,
    Loading: sO,
  });
function lO(e, t) {
  let r = e.nextElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.nextElementSibling;
  }
}
function cO(e, t) {
  let r = e.previousElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.previousElementSibling;
  }
}
function _b(e) {
  let t = O.useRef(e);
  return (
    sr(() => {
      t.current = e;
    }),
    t
  );
}
var sr = typeof window > "u" ? O.useEffect : O.useLayoutEffect;
function wr(e) {
  let t = O.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function qt(e) {
  let t = Qf(),
    r = () => e(t.snapshot());
  return O.useSyncExternalStore(t.subscribe, r, r);
}
function Ob(e, t, r, n = []) {
  let i = O.useRef(),
    a = ti();
  return (
    sr(() => {
      var o;
      let u = (() => {
          var l;
          for (let f of r) {
            if (typeof f == "string") return f.trim();
            if (typeof f == "object" && "current" in f)
              return f.current
                ? (l = f.current.textContent) == null
                  ? void 0
                  : l.trim()
                : i.current;
          }
        })(),
        s = n.map((l) => l.trim());
      a.value(e, u, s),
        (o = t.current) == null || o.setAttribute(xr, u),
        (i.current = u);
    }),
    i
  );
}
var fO = () => {
  let [e, t] = O.useState(),
    r = wr(() => new Map());
  return (
    sr(() => {
      r.current.forEach((n) => n()), (r.current = new Map());
    }, [e]),
    (n, i) => {
      r.current.set(n, i), t({});
    }
  );
};
function dO(e) {
  let t = e.type;
  return typeof t == "function"
    ? t(e.props)
    : "render" in t
      ? t.render(e.props)
      : e;
}
function Oa({ asChild: e, children: t }, r) {
  return e && O.isValidElement(t)
    ? O.cloneElement(dO(t), { ref: t.ref }, r(t.props.children))
    : r(t);
}
var pO = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
};
function hO({ className: e, ...t }) {
  return C.jsx(fr, {
    "data-slot": "command",
    className: se(
      "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
      e,
    ),
    ...t,
  });
}
function gO({ className: e, ...t }) {
  return C.jsxs("div", {
    "data-slot": "command-input-wrapper",
    className: "flex h-9 items-center gap-2 border-b px-3",
    children: [
      C.jsx(CS, { className: "size-4 shrink-0 opacity-50" }),
      C.jsx(fr.Input, {
        "data-slot": "command-input",
        className: se(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          e,
        ),
        ...t,
      }),
    ],
  });
}
function vO({ className: e, ...t }) {
  return C.jsx(fr.List, {
    "data-slot": "command-list",
    className: se(
      "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
      e,
    ),
    ...t,
  });
}
function mO({ ...e }) {
  return C.jsx(fr.Empty, {
    "data-slot": "command-empty",
    className: "py-6 text-center text-sm",
    ...e,
  });
}
function cp({ className: e, ...t }) {
  return C.jsx(fr.Group, {
    "data-slot": "command-group",
    className: se(
      "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
      e,
    ),
    ...t,
  });
}
function yO({ className: e, ...t }) {
  return C.jsx(fr.Separator, {
    "data-slot": "command-separator",
    className: se("bg-border -mx-1 h-px", e),
    ...t,
  });
}
function fp({ className: e, ...t }) {
  return C.jsx(fr.Item, {
    "data-slot": "command-item",
    className: se(
      "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      e,
    ),
    ...t,
  });
}
var ed = "Popover",
  [Pb, oL] = X0(ed, [Sa]),
  ri = Sa(),
  [bO, Bt] = Pb(ed),
  Cb = (e) => {
    const {
        __scopePopover: t,
        children: r,
        open: n,
        defaultOpen: i,
        onOpenChange: a,
        modal: o = !1,
      } = e,
      u = ri(t),
      s = O.useRef(null),
      [l, f] = O.useState(!1),
      [c = !1, d] = bc({ prop: n, defaultProp: i, onChange: a });
    return C.jsx(K0, {
      ...u,
      children: C.jsx(bO, {
        scope: t,
        contentId: st(),
        triggerRef: s,
        open: c,
        onOpenChange: d,
        onOpenToggle: O.useCallback(() => d((p) => !p), [d]),
        hasCustomAnchor: l,
        onCustomAnchorAdd: O.useCallback(() => f(!0), []),
        onCustomAnchorRemove: O.useCallback(() => f(!1), []),
        modal: o,
        children: r,
      }),
    });
  };
Cb.displayName = ed;
var Ab = "PopoverAnchor",
  xO = O.forwardRef((e, t) => {
    const { __scopePopover: r, ...n } = e,
      i = Bt(Ab, r),
      a = ri(r),
      { onCustomAnchorAdd: o, onCustomAnchorRemove: u } = i;
    return (
      O.useEffect(() => (o(), () => u()), [o, u]),
      C.jsx(Kf, { ...a, ...n, ref: t })
    );
  });
xO.displayName = Ab;
var Eb = "PopoverTrigger",
  Tb = O.forwardRef((e, t) => {
    const { __scopePopover: r, ...n } = e,
      i = Bt(Eb, r),
      a = ri(r),
      o = Xe(t, i.triggerRef),
      u = C.jsx(Oe.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.contentId,
        "data-state": $b(i.open),
        ...n,
        ref: o,
        onClick: Se(e.onClick, i.onOpenToggle),
      });
    return i.hasCustomAnchor
      ? u
      : C.jsx(Kf, { asChild: !0, ...a, children: u });
  });
Tb.displayName = Eb;
var td = "PopoverPortal",
  [wO, SO] = Pb(td, { forceMount: void 0 }),
  Rb = (e) => {
    const { __scopePopover: t, forceMount: r, children: n, container: i } = e,
      a = Bt(td, t);
    return C.jsx(wO, {
      scope: t,
      forceMount: r,
      children: C.jsx(Y0, {
        present: r || a.open,
        children: C.jsx(Z0, { asChild: !0, container: i, children: n }),
      }),
    });
  };
Rb.displayName = td;
var Ar = "PopoverContent",
  Mb = O.forwardRef((e, t) => {
    const r = SO(Ar, e.__scopePopover),
      { forceMount: n = r.forceMount, ...i } = e,
      a = Bt(Ar, e.__scopePopover);
    return C.jsx(Y0, {
      present: n || a.open,
      children: a.modal
        ? C.jsx(_O, { ...i, ref: t })
        : C.jsx(OO, { ...i, ref: t }),
    });
  });
Mb.displayName = Ar;
var _O = O.forwardRef((e, t) => {
    const r = Bt(Ar, e.__scopePopover),
      n = O.useRef(null),
      i = Xe(t, n),
      a = O.useRef(!1);
    return (
      O.useEffect(() => {
        const o = n.current;
        if (o) return J0(o);
      }, []),
      C.jsx(Q0, {
        as: Wf,
        allowPinchZoom: !0,
        children: C.jsx(jb, {
          ...e,
          ref: i,
          trapFocus: r.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: Se(e.onCloseAutoFocus, (o) => {
            o.preventDefault(), a.current || r.triggerRef.current?.focus();
          }),
          onPointerDownOutside: Se(
            e.onPointerDownOutside,
            (o) => {
              const u = o.detail.originalEvent,
                s = u.button === 0 && u.ctrlKey === !0,
                l = u.button === 2 || s;
              a.current = l;
            },
            { checkForDefaultPrevented: !1 },
          ),
          onFocusOutside: Se(e.onFocusOutside, (o) => o.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
        }),
      })
    );
  }),
  OO = O.forwardRef((e, t) => {
    const r = Bt(Ar, e.__scopePopover),
      n = O.useRef(!1),
      i = O.useRef(!1);
    return C.jsx(jb, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (a) => {
        e.onCloseAutoFocus?.(a),
          a.defaultPrevented ||
            (n.current || r.triggerRef.current?.focus(), a.preventDefault()),
          (n.current = !1),
          (i.current = !1);
      },
      onInteractOutside: (a) => {
        e.onInteractOutside?.(a),
          a.defaultPrevented ||
            ((n.current = !0),
            a.detail.originalEvent.type === "pointerdown" && (i.current = !0));
        const o = a.target;
        r.triggerRef.current?.contains(o) && a.preventDefault(),
          a.detail.originalEvent.type === "focusin" &&
            i.current &&
            a.preventDefault();
      },
    });
  }),
  jb = O.forwardRef((e, t) => {
    const {
        __scopePopover: r,
        trapFocus: n,
        onOpenAutoFocus: i,
        onCloseAutoFocus: a,
        disableOutsidePointerEvents: o,
        onEscapeKeyDown: u,
        onPointerDownOutside: s,
        onFocusOutside: l,
        onInteractOutside: f,
        ...c
      } = e,
      d = Bt(Ar, r),
      p = ri(r);
    return (
      eb(),
      C.jsx(tb, {
        asChild: !0,
        loop: !0,
        trapped: n,
        onMountAutoFocus: i,
        onUnmountAutoFocus: a,
        children: C.jsx(rb, {
          asChild: !0,
          disableOutsidePointerEvents: o,
          onInteractOutside: f,
          onEscapeKeyDown: u,
          onPointerDownOutside: s,
          onFocusOutside: l,
          onDismiss: () => d.onOpenChange(!1),
          children: C.jsx(nb, {
            "data-state": $b(d.open),
            role: "dialog",
            id: d.contentId,
            ...p,
            ...c,
            ref: t,
            style: {
              ...c.style,
              "--radix-popover-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-popover-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-popover-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-popover-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-popover-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          }),
        }),
      })
    );
  }),
  Ib = "PopoverClose",
  PO = O.forwardRef((e, t) => {
    const { __scopePopover: r, ...n } = e,
      i = Bt(Ib, r);
    return C.jsx(Oe.button, {
      type: "button",
      ...n,
      ref: t,
      onClick: Se(e.onClick, () => i.onOpenChange(!1)),
    });
  });
PO.displayName = Ib;
var CO = "PopoverArrow",
  AO = O.forwardRef((e, t) => {
    const { __scopePopover: r, ...n } = e,
      i = ri(r);
    return C.jsx(ib, { ...i, ...n, ref: t });
  });
AO.displayName = CO;
function $b(e) {
  return e ? "open" : "closed";
}
var EO = Cb,
  TO = Tb,
  RO = Rb,
  MO = Mb;
function jO({ ...e }) {
  return C.jsx(EO, { "data-slot": "popover", ...e });
}
function IO({ ...e }) {
  return C.jsx(TO, { "data-slot": "popover-trigger", ...e });
}
function $O({ className: e, align: t = "center", sideOffset: r = 4, ...n }) {
  return C.jsx(RO, {
    children: C.jsx(MO, {
      "data-slot": "popover-content",
      align: t,
      sideOffset: r,
      className: se(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e,
      ),
      ...n,
    }),
  });
}
function NO({ column: e, title: t, options: r }) {
  const n = e?.getFacetedUniqueValues(),
    i = new Set(e?.getFilterValue());
  return C.jsxs(jO, {
    children: [
      C.jsx(IO, {
        asChild: !0,
        children: C.jsxs(jt, {
          variant: "outline",
          className: "border-dashed",
          children: [
            C.jsx(V_, { className: "mr-2 h-4 w-4" }),
            C.jsx("p", { className: "text-neutral-dark", children: t }),
            i?.size > 0 &&
              C.jsxs(C.Fragment, {
                children: [
                  C.jsx(xc, { orientation: "vertical", className: "mx-2 h-4" }),
                  C.jsx(mo, {
                    variant: "table",
                    className: "rounded-sm px-1 font-normal lg:hidden",
                    children: i.size,
                  }),
                  C.jsx("div", {
                    className: "hidden space-x-1 lg:flex",
                    children:
                      i.size > 1
                        ? C.jsxs(mo, {
                            variant: "table",
                            children: [i.size, " selected"],
                          })
                        : r
                            .filter((a) => i.has(a.value))
                            .map((a) =>
                              C.jsx(
                                mo,
                                { variant: "table", children: a.label },
                                a.value,
                              ),
                            ),
                  }),
                ],
              }),
          ],
        }),
      }),
      C.jsx($O, {
        className: "max-w-[250px] p-0",
        align: "center",
        children: C.jsxs(hO, {
          children: [
            C.jsx(gO, { placeholder: t }),
            C.jsxs(vO, {
              children: [
                C.jsx(mO, { children: "No results found." }),
                C.jsx(cp, {
                  children: r.map((a) => {
                    const o = i.has(a.value);
                    return C.jsxs(
                      fp,
                      {
                        onSelect: () => {
                          o ? i.delete(a.value) : i.add(a.value);
                          const u = Array.from(i);
                          e?.setFilterValue(u.length ? u : void 0);
                        },
                        children: [
                          C.jsx("div", {
                            className: se(
                              "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                              o
                                ? "bg-primary text-primary-foreground"
                                : "opacity-50 [&_svg]:invisible",
                            ),
                            children: C.jsx(E_, { className: se("h-4 w-4") }),
                          }),
                          a.icon &&
                            C.jsx(a.icon, {
                              className: "mr-2 h-4 w-4 text-muted-foreground",
                            }),
                          C.jsx("span", { children: a.label }),
                          n?.get(a.value) &&
                            C.jsx("span", {
                              className:
                                "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs",
                              children: n.get(a.value),
                            }),
                        ],
                      },
                      a.value,
                    );
                  }),
                }),
                i.size > 0 &&
                  C.jsxs(C.Fragment, {
                    children: [
                      C.jsx(yO, {}),
                      C.jsx(cp, {
                        children: C.jsx(fp, {
                          onSelect: () => e?.setFilterValue(void 0),
                          className: "justify-center text-center",
                          children: "Clear filters",
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function DO({ table: e }) {
  return C.jsxs(lS, {
    children: [
      C.jsx(cS, {
        asChild: !0,
        children: C.jsxs(jt, {
          size: "sm",
          variant: "table",
          className:
            "hidden  border-2 lg:flex lg:items-center lg:justify-center text-neutral-dark space-x-2",
          children: [
            C.jsx(L_, { className: "h-4 w-4" }),
            C.jsx("p", { className: "text-sm leading-none", children: "View" }),
          ],
        }),
      }),
      C.jsxs(fS, {
        align: "end",
        className: "w-[150px]",
        children: [
          C.jsx(dS, {
            children: C.jsx("p", {
              className: "leading-7 [&:not(:first-child)]:mt-6",
              children: "Toggle columns",
            }),
          }),
          C.jsx(pS, {}),
          e
            .getAllColumns()
            .filter((t) => typeof t.accessorFn < "u" && t.getCanHide())
            .map((t) =>
              C.jsx(
                hS,
                {
                  className: "capitalize",
                  checked: t.getIsVisible(),
                  onCheckedChange: (r) => t.toggleVisibility(!!r),
                  children: t.id,
                },
                t.id,
              ),
            ),
        ],
      }),
    ],
  });
}
function kO({
  table: e,
  title: t,
  inputKey: r,
  facetOptions: n,
  showColumnControl: i,
  inputPlaceholder: a = "Filter anything...",
  handleRefreshTable: o,
}) {
  const u = e.getState().columnFilters.length > 0;
  return C.jsxs("div", {
    className: "h-auto px-2 flex flex-col gap-y-4",
    children: [
      C.jsxs("div", {
        className: "flex items-center justify-between gap-x-2",
        children: [
          t &&
            C.jsx("h2", { className: "text-2xl font-semibold", children: t }),
          C.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              i && C.jsx(DO, { table: e }),
              o &&
                C.jsxs(jt, {
                  onClick: o,
                  className: "gap-2",
                  children: [C.jsx(OS, { className: "w-4 h-4" }), " Refresh"],
                }),
            ],
          }),
        ],
      }),
      C.jsxs("div", {
        className: "flex gap-x-2 items-center justify-between",
        children: [
          r &&
            C.jsx(W0, {
              className: "w-full sm:max-w-xs lg:w-[250px]",
              placeholder: a,
              value: e.getColumn(r)?.getFilterValue() ?? "",
              onChange: (s) => e.getColumn(r)?.setFilterValue(s.target.value),
              containerClassName: "w-full sm:max-w-xs lg:w-[250px]",
            }),
          C.jsxs("div", {
            className:
              "flex flex-col items-center md:flex-row gap-1 md:gap-x-2",
            children: [
              n?.map(
                (s) =>
                  e.getColumn(s.key) &&
                  C.jsx(
                    NO,
                    {
                      column: e.getColumn(s.key),
                      title: s.label,
                      options: s.options,
                    },
                    s.key,
                  ),
              ),
              u &&
                C.jsxs(jt, {
                  variant: "table",
                  onClick: () => e.resetColumnFilters(),
                  className: "h-8 px-2 lg:px-3",
                  children: ["Reset", C.jsx($_, { className: "ml-2 h-4 w-4" })],
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function dp(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function qO(e) {
  const t = O.useRef({ value: e, previous: e });
  return O.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
var FO = [" ", "Enter", "ArrowUp", "ArrowDown"],
  LO = [" ", "Enter"],
  ni = "Select",
  [Pa, Ca, BO] = vS(ni),
  [Gr, uL] = X0(ni, [BO, Sa]),
  Aa = Sa(),
  [VO, Vt] = Gr(ni),
  [HO, zO] = Gr(ni),
  Nb = (e) => {
    const {
        __scopeSelect: t,
        children: r,
        open: n,
        defaultOpen: i,
        onOpenChange: a,
        value: o,
        defaultValue: u,
        onValueChange: s,
        dir: l,
        name: f,
        autoComplete: c,
        disabled: d,
        required: p,
        form: v,
      } = e,
      h = Aa(t),
      [g, y] = O.useState(null),
      [b, w] = O.useState(null),
      [_, m] = O.useState(!1),
      x = gS(l),
      [S = !1, P] = bc({ prop: n, defaultProp: i, onChange: a }),
      [E, j] = bc({ prop: o, defaultProp: u, onChange: s }),
      A = O.useRef(null),
      T = g ? v || !!g.closest("form") : !0,
      [M, N] = O.useState(new Set()),
      $ = Array.from(M)
        .map((k) => k.props.value)
        .join(";");
    return C.jsx(K0, {
      ...h,
      children: C.jsxs(VO, {
        required: p,
        scope: t,
        trigger: g,
        onTriggerChange: y,
        valueNode: b,
        onValueNodeChange: w,
        valueNodeHasChildren: _,
        onValueNodeHasChildrenChange: m,
        contentId: st(),
        value: E,
        onValueChange: j,
        open: S,
        onOpenChange: P,
        dir: x,
        triggerPointerDownPosRef: A,
        disabled: d,
        children: [
          C.jsx(Pa.Provider, {
            scope: t,
            children: C.jsx(HO, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: O.useCallback((k) => {
                N((F) => new Set(F).add(k));
              }, []),
              onNativeOptionRemove: O.useCallback((k) => {
                N((F) => {
                  const V = new Set(F);
                  return V.delete(k), V;
                });
              }, []),
              children: r,
            }),
          }),
          T
            ? C.jsxs(
                ix,
                {
                  "aria-hidden": !0,
                  required: p,
                  tabIndex: -1,
                  name: f,
                  autoComplete: c,
                  value: E,
                  onChange: (k) => j(k.target.value),
                  disabled: d,
                  form: v,
                  children: [
                    E === void 0 ? C.jsx("option", { value: "" }) : null,
                    Array.from(M),
                  ],
                },
                $,
              )
            : null,
        ],
      }),
    });
  };
Nb.displayName = ni;
var Db = "SelectTrigger",
  kb = O.forwardRef((e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...i } = e,
      a = Aa(r),
      o = Vt(Db, r),
      u = o.disabled || n,
      s = Xe(t, o.onTriggerChange),
      l = Ca(r),
      f = O.useRef("touch"),
      [c, d, p] = ax((h) => {
        const g = l().filter((w) => !w.disabled),
          y = g.find((w) => w.value === o.value),
          b = ox(g, h, y);
        b !== void 0 && o.onValueChange(b.value);
      }),
      v = (h) => {
        u || (o.onOpenChange(!0), p()),
          h &&
            (o.triggerPointerDownPosRef.current = {
              x: Math.round(h.pageX),
              y: Math.round(h.pageY),
            });
      };
    return C.jsx(Kf, {
      asChild: !0,
      ...a,
      children: C.jsx(Oe.button, {
        type: "button",
        role: "combobox",
        "aria-controls": o.contentId,
        "aria-expanded": o.open,
        "aria-required": o.required,
        "aria-autocomplete": "none",
        dir: o.dir,
        "data-state": o.open ? "open" : "closed",
        disabled: u,
        "data-disabled": u ? "" : void 0,
        "data-placeholder": nx(o.value) ? "" : void 0,
        ...i,
        ref: s,
        onClick: Se(i.onClick, (h) => {
          h.currentTarget.focus(), f.current !== "mouse" && v(h);
        }),
        onPointerDown: Se(i.onPointerDown, (h) => {
          f.current = h.pointerType;
          const g = h.target;
          g.hasPointerCapture(h.pointerId) &&
            g.releasePointerCapture(h.pointerId),
            h.button === 0 &&
              h.ctrlKey === !1 &&
              h.pointerType === "mouse" &&
              (v(h), h.preventDefault());
        }),
        onKeyDown: Se(i.onKeyDown, (h) => {
          const g = c.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) &&
            h.key.length === 1 &&
            d(h.key),
            !(g && h.key === " ") &&
              FO.includes(h.key) &&
              (v(), h.preventDefault());
        }),
      }),
    });
  });
kb.displayName = Db;
var qb = "SelectValue",
  Fb = O.forwardRef((e, t) => {
    const {
        __scopeSelect: r,
        className: n,
        style: i,
        children: a,
        placeholder: o = "",
        ...u
      } = e,
      s = Vt(qb, r),
      { onValueNodeHasChildrenChange: l } = s,
      f = a !== void 0,
      c = Xe(t, s.onValueNodeChange);
    return (
      Dt(() => {
        l(f);
      }, [l, f]),
      C.jsx(Oe.span, {
        ...u,
        ref: c,
        style: { pointerEvents: "none" },
        children: nx(s.value) ? C.jsx(C.Fragment, { children: o }) : a,
      })
    );
  });
Fb.displayName = qb;
var UO = "SelectIcon",
  Lb = O.forwardRef((e, t) => {
    const { __scopeSelect: r, children: n, ...i } = e;
    return C.jsx(Oe.span, {
      "aria-hidden": !0,
      ...i,
      ref: t,
      children: n || "▼",
    });
  });
Lb.displayName = UO;
var GO = "SelectPortal",
  Bb = (e) => C.jsx(Z0, { asChild: !0, ...e });
Bb.displayName = GO;
var lr = "SelectContent",
  Vb = O.forwardRef((e, t) => {
    const r = Vt(lr, e.__scopeSelect),
      [n, i] = O.useState();
    if (
      (Dt(() => {
        i(new DocumentFragment());
      }, []),
      !r.open)
    ) {
      const a = n;
      return a
        ? G0.createPortal(
            C.jsx(Hb, {
              scope: e.__scopeSelect,
              children: C.jsx(Pa.Slot, {
                scope: e.__scopeSelect,
                children: C.jsx("div", { children: e.children }),
              }),
            }),
            a,
          )
        : null;
    }
    return C.jsx(zb, { ...e, ref: t });
  });
Vb.displayName = lr;
var Qe = 10,
  [Hb, Ht] = Gr(lr),
  WO = "SelectContentImpl",
  zb = O.forwardRef((e, t) => {
    const {
        __scopeSelect: r,
        position: n = "item-aligned",
        onCloseAutoFocus: i,
        onEscapeKeyDown: a,
        onPointerDownOutside: o,
        side: u,
        sideOffset: s,
        align: l,
        alignOffset: f,
        arrowPadding: c,
        collisionBoundary: d,
        collisionPadding: p,
        sticky: v,
        hideWhenDetached: h,
        avoidCollisions: g,
        ...y
      } = e,
      b = Vt(lr, r),
      [w, _] = O.useState(null),
      [m, x] = O.useState(null),
      S = Xe(t, (U) => _(U)),
      [P, E] = O.useState(null),
      [j, A] = O.useState(null),
      T = Ca(r),
      [M, N] = O.useState(!1),
      $ = O.useRef(!1);
    O.useEffect(() => {
      if (w) return J0(w);
    }, [w]),
      eb();
    const k = O.useCallback(
        (U) => {
          const [re, ...L] = T().map((q) => q.ref.current),
            [G] = L.slice(-1),
            Y = document.activeElement;
          for (const q of U)
            if (
              q === Y ||
              (q?.scrollIntoView({ block: "nearest" }),
              q === re && m && (m.scrollTop = 0),
              q === G && m && (m.scrollTop = m.scrollHeight),
              q?.focus(),
              document.activeElement !== Y)
            )
              return;
        },
        [T, m],
      ),
      F = O.useCallback(() => k([P, w]), [k, P, w]);
    O.useEffect(() => {
      M && F();
    }, [M, F]);
    const { onOpenChange: V, triggerPointerDownPosRef: H } = b;
    O.useEffect(() => {
      if (w) {
        let U = { x: 0, y: 0 };
        const re = (G) => {
            U = {
              x: Math.abs(Math.round(G.pageX) - (H.current?.x ?? 0)),
              y: Math.abs(Math.round(G.pageY) - (H.current?.y ?? 0)),
            };
          },
          L = (G) => {
            U.x <= 10 && U.y <= 10
              ? G.preventDefault()
              : w.contains(G.target) || V(!1),
              document.removeEventListener("pointermove", re),
              (H.current = null);
          };
        return (
          H.current !== null &&
            (document.addEventListener("pointermove", re),
            document.addEventListener("pointerup", L, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", re),
              document.removeEventListener("pointerup", L, { capture: !0 });
          }
        );
      }
    }, [w, V, H]),
      O.useEffect(() => {
        const U = () => V(!1);
        return (
          window.addEventListener("blur", U),
          window.addEventListener("resize", U),
          () => {
            window.removeEventListener("blur", U),
              window.removeEventListener("resize", U);
          }
        );
      }, [V]);
    const [Z, J] = ax((U) => {
        const re = T().filter((Y) => !Y.disabled),
          L = re.find((Y) => Y.ref.current === document.activeElement),
          G = ox(re, U, L);
        G && setTimeout(() => G.ref.current.focus());
      }),
      R = O.useCallback(
        (U, re, L) => {
          const G = !$.current && !L;
          ((b.value !== void 0 && b.value === re) || G) &&
            (E(U), G && ($.current = !0));
        },
        [b.value],
      ),
      B = O.useCallback(() => w?.focus(), [w]),
      X = O.useCallback(
        (U, re, L) => {
          const G = !$.current && !L;
          ((b.value !== void 0 && b.value === re) || G) && A(U);
        },
        [b.value],
      ),
      z = n === "popper" ? Ec : Ub,
      ne =
        z === Ec
          ? {
              side: u,
              sideOffset: s,
              align: l,
              alignOffset: f,
              arrowPadding: c,
              collisionBoundary: d,
              collisionPadding: p,
              sticky: v,
              hideWhenDetached: h,
              avoidCollisions: g,
            }
          : {};
    return C.jsx(Hb, {
      scope: r,
      content: w,
      viewport: m,
      onViewportChange: x,
      itemRefCallback: R,
      selectedItem: P,
      onItemLeave: B,
      itemTextRefCallback: X,
      focusSelectedItem: F,
      selectedItemText: j,
      position: n,
      isPositioned: M,
      searchRef: Z,
      children: C.jsx(Q0, {
        as: Wf,
        allowPinchZoom: !0,
        children: C.jsx(tb, {
          asChild: !0,
          trapped: b.open,
          onMountAutoFocus: (U) => {
            U.preventDefault();
          },
          onUnmountAutoFocus: Se(i, (U) => {
            b.trigger?.focus({ preventScroll: !0 }), U.preventDefault();
          }),
          children: C.jsx(rb, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: a,
            onPointerDownOutside: o,
            onFocusOutside: (U) => U.preventDefault(),
            onDismiss: () => b.onOpenChange(!1),
            children: C.jsx(z, {
              role: "listbox",
              id: b.contentId,
              "data-state": b.open ? "open" : "closed",
              dir: b.dir,
              onContextMenu: (U) => U.preventDefault(),
              ...y,
              ...ne,
              onPlaced: () => N(!0),
              ref: S,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...y.style,
              },
              onKeyDown: Se(y.onKeyDown, (U) => {
                const re = U.ctrlKey || U.altKey || U.metaKey;
                if (
                  (U.key === "Tab" && U.preventDefault(),
                  !re && U.key.length === 1 && J(U.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(U.key))
                ) {
                  let G = T()
                    .filter((Y) => !Y.disabled)
                    .map((Y) => Y.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(U.key) &&
                      (G = G.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(U.key))
                  ) {
                    const Y = U.target,
                      q = G.indexOf(Y);
                    G = G.slice(q + 1);
                  }
                  setTimeout(() => k(G)), U.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
zb.displayName = WO;
var KO = "SelectItemAlignedPosition",
  Ub = O.forwardRef((e, t) => {
    const { __scopeSelect: r, onPlaced: n, ...i } = e,
      a = Vt(lr, r),
      o = Ht(lr, r),
      [u, s] = O.useState(null),
      [l, f] = O.useState(null),
      c = Xe(t, (S) => f(S)),
      d = Ca(r),
      p = O.useRef(!1),
      v = O.useRef(!0),
      {
        viewport: h,
        selectedItem: g,
        selectedItemText: y,
        focusSelectedItem: b,
      } = o,
      w = O.useCallback(() => {
        if (a.trigger && a.valueNode && u && l && h && g && y) {
          const S = a.trigger.getBoundingClientRect(),
            P = l.getBoundingClientRect(),
            E = a.valueNode.getBoundingClientRect(),
            j = y.getBoundingClientRect();
          if (a.dir !== "rtl") {
            const Y = j.left - P.left,
              q = E.left - Y,
              le = S.left - q,
              ie = S.width + le,
              xe = Math.max(ie, P.width),
              we = window.innerWidth - Qe,
              Re = dp(q, [Qe, Math.max(Qe, we - xe)]);
            (u.style.minWidth = ie + "px"), (u.style.left = Re + "px");
          } else {
            const Y = P.right - j.right,
              q = window.innerWidth - E.right - Y,
              le = window.innerWidth - S.right - q,
              ie = S.width + le,
              xe = Math.max(ie, P.width),
              we = window.innerWidth - Qe,
              Re = dp(q, [Qe, Math.max(Qe, we - xe)]);
            (u.style.minWidth = ie + "px"), (u.style.right = Re + "px");
          }
          const A = d(),
            T = window.innerHeight - Qe * 2,
            M = h.scrollHeight,
            N = window.getComputedStyle(l),
            $ = parseInt(N.borderTopWidth, 10),
            k = parseInt(N.paddingTop, 10),
            F = parseInt(N.borderBottomWidth, 10),
            V = parseInt(N.paddingBottom, 10),
            H = $ + k + M + V + F,
            Z = Math.min(g.offsetHeight * 5, H),
            J = window.getComputedStyle(h),
            R = parseInt(J.paddingTop, 10),
            B = parseInt(J.paddingBottom, 10),
            X = S.top + S.height / 2 - Qe,
            z = T - X,
            ne = g.offsetHeight / 2,
            U = g.offsetTop + ne,
            re = $ + k + U,
            L = H - re;
          if (re <= X) {
            const Y = A.length > 0 && g === A[A.length - 1].ref.current;
            u.style.bottom = "0px";
            const q = l.clientHeight - h.offsetTop - h.offsetHeight,
              le = Math.max(z, ne + (Y ? B : 0) + q + F),
              ie = re + le;
            u.style.height = ie + "px";
          } else {
            const Y = A.length > 0 && g === A[0].ref.current;
            u.style.top = "0px";
            const le = Math.max(X, $ + h.offsetTop + (Y ? R : 0) + ne) + L;
            (u.style.height = le + "px"), (h.scrollTop = re - X + h.offsetTop);
          }
          (u.style.margin = `${Qe}px 0`),
            (u.style.minHeight = Z + "px"),
            (u.style.maxHeight = T + "px"),
            n?.(),
            requestAnimationFrame(() => (p.current = !0));
        }
      }, [d, a.trigger, a.valueNode, u, l, h, g, y, a.dir, n]);
    Dt(() => w(), [w]);
    const [_, m] = O.useState();
    Dt(() => {
      l && m(window.getComputedStyle(l).zIndex);
    }, [l]);
    const x = O.useCallback(
      (S) => {
        S && v.current === !0 && (w(), b?.(), (v.current = !1));
      },
      [w, b],
    );
    return C.jsx(YO, {
      scope: r,
      contentWrapper: u,
      shouldExpandOnScrollRef: p,
      onScrollButtonChange: x,
      children: C.jsx("div", {
        ref: s,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: _,
        },
        children: C.jsx(Oe.div, {
          ...i,
          ref: c,
          style: { boxSizing: "border-box", maxHeight: "100%", ...i.style },
        }),
      }),
    });
  });
Ub.displayName = KO;
var XO = "SelectPopperPosition",
  Ec = O.forwardRef((e, t) => {
    const {
        __scopeSelect: r,
        align: n = "start",
        collisionPadding: i = Qe,
        ...a
      } = e,
      o = Aa(r);
    return C.jsx(nb, {
      ...o,
      ...a,
      ref: t,
      align: n,
      collisionPadding: i,
      style: {
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
Ec.displayName = XO;
var [YO, rd] = Gr(lr, {}),
  Tc = "SelectViewport",
  Gb = O.forwardRef((e, t) => {
    const { __scopeSelect: r, nonce: n, ...i } = e,
      a = Ht(Tc, r),
      o = rd(Tc, r),
      u = Xe(t, a.onViewportChange),
      s = O.useRef(0);
    return C.jsxs(C.Fragment, {
      children: [
        C.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: n,
        }),
        C.jsx(Pa.Slot, {
          scope: r,
          children: C.jsx(Oe.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...i,
            ref: u,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...i.style,
            },
            onScroll: Se(i.onScroll, (l) => {
              const f = l.currentTarget,
                { contentWrapper: c, shouldExpandOnScrollRef: d } = o;
              if (d?.current && c) {
                const p = Math.abs(s.current - f.scrollTop);
                if (p > 0) {
                  const v = window.innerHeight - Qe * 2,
                    h = parseFloat(c.style.minHeight),
                    g = parseFloat(c.style.height),
                    y = Math.max(h, g);
                  if (y < v) {
                    const b = y + p,
                      w = Math.min(v, b),
                      _ = b - w;
                    (c.style.height = w + "px"),
                      c.style.bottom === "0px" &&
                        ((f.scrollTop = _ > 0 ? _ : 0),
                        (c.style.justifyContent = "flex-end"));
                  }
                }
              }
              s.current = f.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
Gb.displayName = Tc;
var Wb = "SelectGroup",
  [ZO, JO] = Gr(Wb),
  QO = O.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e,
      i = st();
    return C.jsx(ZO, {
      scope: r,
      id: i,
      children: C.jsx(Oe.div, {
        role: "group",
        "aria-labelledby": i,
        ...n,
        ref: t,
      }),
    });
  });
QO.displayName = Wb;
var Kb = "SelectLabel",
  eP = O.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e,
      i = JO(Kb, r);
    return C.jsx(Oe.div, { id: i.id, ...n, ref: t });
  });
eP.displayName = Kb;
var ji = "SelectItem",
  [tP, Xb] = Gr(ji),
  Yb = O.forwardRef((e, t) => {
    const {
        __scopeSelect: r,
        value: n,
        disabled: i = !1,
        textValue: a,
        ...o
      } = e,
      u = Vt(ji, r),
      s = Ht(ji, r),
      l = u.value === n,
      [f, c] = O.useState(a ?? ""),
      [d, p] = O.useState(!1),
      v = Xe(t, (b) => s.itemRefCallback?.(b, n, i)),
      h = st(),
      g = O.useRef("touch"),
      y = () => {
        i || (u.onValueChange(n), u.onOpenChange(!1));
      };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
      );
    return C.jsx(tP, {
      scope: r,
      value: n,
      disabled: i,
      textId: h,
      isSelected: l,
      onItemTextChange: O.useCallback((b) => {
        c((w) => w || (b?.textContent ?? "").trim());
      }, []),
      children: C.jsx(Pa.ItemSlot, {
        scope: r,
        value: n,
        disabled: i,
        textValue: f,
        children: C.jsx(Oe.div, {
          role: "option",
          "aria-labelledby": h,
          "data-highlighted": d ? "" : void 0,
          "aria-selected": l && d,
          "data-state": l ? "checked" : "unchecked",
          "aria-disabled": i || void 0,
          "data-disabled": i ? "" : void 0,
          tabIndex: i ? void 0 : -1,
          ...o,
          ref: v,
          onFocus: Se(o.onFocus, () => p(!0)),
          onBlur: Se(o.onBlur, () => p(!1)),
          onClick: Se(o.onClick, () => {
            g.current !== "mouse" && y();
          }),
          onPointerUp: Se(o.onPointerUp, () => {
            g.current === "mouse" && y();
          }),
          onPointerDown: Se(o.onPointerDown, (b) => {
            g.current = b.pointerType;
          }),
          onPointerMove: Se(o.onPointerMove, (b) => {
            (g.current = b.pointerType),
              i
                ? s.onItemLeave?.()
                : g.current === "mouse" &&
                  b.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: Se(o.onPointerLeave, (b) => {
            b.currentTarget === document.activeElement && s.onItemLeave?.();
          }),
          onKeyDown: Se(o.onKeyDown, (b) => {
            (s.searchRef?.current !== "" && b.key === " ") ||
              (LO.includes(b.key) && y(), b.key === " " && b.preventDefault());
          }),
        }),
      }),
    });
  });
Yb.displayName = ji;
var fn = "SelectItemText",
  Zb = O.forwardRef((e, t) => {
    const { __scopeSelect: r, className: n, style: i, ...a } = e,
      o = Vt(fn, r),
      u = Ht(fn, r),
      s = Xb(fn, r),
      l = zO(fn, r),
      [f, c] = O.useState(null),
      d = Xe(
        t,
        (y) => c(y),
        s.onItemTextChange,
        (y) => u.itemTextRefCallback?.(y, s.value, s.disabled),
      ),
      p = f?.textContent,
      v = O.useMemo(
        () =>
          C.jsx(
            "option",
            { value: s.value, disabled: s.disabled, children: p },
            s.value,
          ),
        [s.disabled, s.value, p],
      ),
      { onNativeOptionAdd: h, onNativeOptionRemove: g } = l;
    return (
      Dt(() => (h(v), () => g(v)), [h, g, v]),
      C.jsxs(C.Fragment, {
        children: [
          C.jsx(Oe.span, { id: s.textId, ...a, ref: d }),
          s.isSelected && o.valueNode && !o.valueNodeHasChildren
            ? G0.createPortal(a.children, o.valueNode)
            : null,
        ],
      })
    );
  });
Zb.displayName = fn;
var Jb = "SelectItemIndicator",
  Qb = O.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return Xb(Jb, r).isSelected
      ? C.jsx(Oe.span, { "aria-hidden": !0, ...n, ref: t })
      : null;
  });
Qb.displayName = Jb;
var Rc = "SelectScrollUpButton",
  ex = O.forwardRef((e, t) => {
    const r = Ht(Rc, e.__scopeSelect),
      n = rd(Rc, e.__scopeSelect),
      [i, a] = O.useState(!1),
      o = Xe(t, n.onScrollButtonChange);
    return (
      Dt(() => {
        if (r.viewport && r.isPositioned) {
          let u = function () {
            const l = s.scrollTop > 0;
            a(l);
          };
          const s = r.viewport;
          return (
            u(),
            s.addEventListener("scroll", u),
            () => s.removeEventListener("scroll", u)
          );
        }
      }, [r.viewport, r.isPositioned]),
      i
        ? C.jsx(rx, {
            ...e,
            ref: o,
            onAutoScroll: () => {
              const { viewport: u, selectedItem: s } = r;
              u && s && (u.scrollTop = u.scrollTop - s.offsetHeight);
            },
          })
        : null
    );
  });
ex.displayName = Rc;
var Mc = "SelectScrollDownButton",
  tx = O.forwardRef((e, t) => {
    const r = Ht(Mc, e.__scopeSelect),
      n = rd(Mc, e.__scopeSelect),
      [i, a] = O.useState(!1),
      o = Xe(t, n.onScrollButtonChange);
    return (
      Dt(() => {
        if (r.viewport && r.isPositioned) {
          let u = function () {
            const l = s.scrollHeight - s.clientHeight,
              f = Math.ceil(s.scrollTop) < l;
            a(f);
          };
          const s = r.viewport;
          return (
            u(),
            s.addEventListener("scroll", u),
            () => s.removeEventListener("scroll", u)
          );
        }
      }, [r.viewport, r.isPositioned]),
      i
        ? C.jsx(rx, {
            ...e,
            ref: o,
            onAutoScroll: () => {
              const { viewport: u, selectedItem: s } = r;
              u && s && (u.scrollTop = u.scrollTop + s.offsetHeight);
            },
          })
        : null
    );
  });
tx.displayName = Mc;
var rx = O.forwardRef((e, t) => {
    const { __scopeSelect: r, onAutoScroll: n, ...i } = e,
      a = Ht("SelectScrollButton", r),
      o = O.useRef(null),
      u = Ca(r),
      s = O.useCallback(() => {
        o.current !== null &&
          (window.clearInterval(o.current), (o.current = null));
      }, []);
    return (
      O.useEffect(() => () => s(), [s]),
      Dt(() => {
        u()
          .find((f) => f.ref.current === document.activeElement)
          ?.ref.current?.scrollIntoView({ block: "nearest" });
      }, [u]),
      C.jsx(Oe.div, {
        "aria-hidden": !0,
        ...i,
        ref: t,
        style: { flexShrink: 0, ...i.style },
        onPointerDown: Se(i.onPointerDown, () => {
          o.current === null && (o.current = window.setInterval(n, 50));
        }),
        onPointerMove: Se(i.onPointerMove, () => {
          a.onItemLeave?.(),
            o.current === null && (o.current = window.setInterval(n, 50));
        }),
        onPointerLeave: Se(i.onPointerLeave, () => {
          s();
        }),
      })
    );
  }),
  rP = "SelectSeparator",
  nP = O.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return C.jsx(Oe.div, { "aria-hidden": !0, ...n, ref: t });
  });
nP.displayName = rP;
var jc = "SelectArrow",
  iP = O.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e,
      i = Aa(r),
      a = Vt(jc, r),
      o = Ht(jc, r);
    return a.open && o.position === "popper"
      ? C.jsx(ib, { ...i, ...n, ref: t })
      : null;
  });
iP.displayName = jc;
function nx(e) {
  return e === "" || e === void 0;
}
var ix = O.forwardRef((e, t) => {
  const { value: r, ...n } = e,
    i = O.useRef(null),
    a = Xe(t, i),
    o = qO(r);
  return (
    O.useEffect(() => {
      const u = i.current,
        s = window.HTMLSelectElement.prototype,
        f = Object.getOwnPropertyDescriptor(s, "value").set;
      if (o !== r && f) {
        const c = new Event("change", { bubbles: !0 });
        f.call(u, r), u.dispatchEvent(c);
      }
    }, [o, r]),
    C.jsx(mS, {
      asChild: !0,
      children: C.jsx("select", { ...n, ref: a, defaultValue: r }),
    })
  );
});
ix.displayName = "BubbleSelect";
function ax(e) {
  const t = yS(e),
    r = O.useRef(""),
    n = O.useRef(0),
    i = O.useCallback(
      (o) => {
        const u = r.current + o;
        t(u),
          (function s(l) {
            (r.current = l),
              window.clearTimeout(n.current),
              l !== "" && (n.current = window.setTimeout(() => s(""), 1e3));
          })(u);
      },
      [t],
    ),
    a = O.useCallback(() => {
      (r.current = ""), window.clearTimeout(n.current);
    }, []);
  return O.useEffect(() => () => window.clearTimeout(n.current), []), [r, i, a];
}
function ox(e, t, r) {
  const i = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t,
    a = r ? e.indexOf(r) : -1;
  let o = aP(e, Math.max(a, 0));
  i.length === 1 && (o = o.filter((l) => l !== r));
  const s = o.find((l) =>
    l.textValue.toLowerCase().startsWith(i.toLowerCase()),
  );
  return s !== r ? s : void 0;
}
function aP(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var oP = Nb,
  uP = kb,
  sP = Fb,
  lP = Lb,
  cP = Bb,
  fP = Vb,
  dP = Gb,
  pP = Yb,
  hP = Zb,
  gP = Qb,
  vP = ex,
  mP = tx;
function yP({ ...e }) {
  return C.jsx(oP, { "data-slot": "select", ...e });
}
function bP({ ...e }) {
  return C.jsx(sP, { "data-slot": "select-value", ...e });
}
function xP({ className: e, size: t = "default", children: r, ...n }) {
  return C.jsxs(uP, {
    "data-slot": "select-trigger",
    "data-size": t,
    className: se(
      "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      e,
    ),
    ...n,
    children: [
      r,
      C.jsx(lP, {
        asChild: !0,
        children: C.jsx(ab, { className: "size-4 opacity-50" }),
      }),
    ],
  });
}
function wP({ className: e, children: t, position: r = "popper", ...n }) {
  return C.jsx(cP, {
    children: C.jsxs(fP, {
      "data-slot": "select-content",
      className: se(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        r === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e,
      ),
      position: r,
      ...n,
      children: [
        C.jsx(_P, {}),
        C.jsx(dP, {
          className: se(
            "p-1",
            r === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1",
          ),
          children: t,
        }),
        C.jsx(OP, {}),
      ],
    }),
  });
}
function SP({ className: e, children: t, ...r }) {
  return C.jsxs(pP, {
    "data-slot": "select-item",
    className: se(
      "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
      e,
    ),
    ...r,
    children: [
      C.jsx("span", {
        className: "absolute right-2 flex size-3.5 items-center justify-center",
        children: C.jsx(gP, { children: C.jsx(bS, { className: "size-4" }) }),
      }),
      C.jsx(hP, { children: t }),
    ],
  });
}
function _P({ className: e, ...t }) {
  return C.jsx(vP, {
    "data-slot": "select-scroll-up-button",
    className: se("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: C.jsx(SS, { className: "size-4" }),
  });
}
function OP({ className: e, ...t }) {
  return C.jsx(mP, {
    "data-slot": "select-scroll-down-button",
    className: se("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: C.jsx(ab, { className: "size-4" }),
  });
}
const PP = [5, 10, 20];
function CP({ table: e }) {
  return C.jsxs("div", {
    className:
      "flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 px-2",
    children: [
      C.jsx("div", {
        className: "flex-1 text-muted-foreground",
        children: C.jsxs("p", {
          children: [
            e.getFilteredSelectedRowModel().rows.length,
            " of",
            " ",
            e.getFilteredRowModel().rows.length,
            " row(s) selected.",
          ],
        }),
      }),
      C.jsxs("div", {
        className:
          "flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4 lg:space-x-6",
        children: [
          C.jsxs("div", {
            className: "flex items-center space-x-2",
            children: [
              C.jsx("p", {
                className: "text-muted-foreground",
                children: "Rows per page",
              }),
              C.jsxs(yP, {
                value: `${e.getState().pagination.pageSize}`,
                onValueChange: (t) => {
                  e.setPageSize(Number(t));
                },
                children: [
                  C.jsx(xP, {
                    className: "h-8 w-16",
                    children: C.jsx(bP, {
                      placeholder: e.getState().pagination.pageSize,
                    }),
                  }),
                  C.jsx(wP, {
                    side: "top",
                    children: PP.map((t) =>
                      C.jsx(SP, { value: `${t}`, children: t }, t),
                    ),
                  }),
                ],
              }),
            ],
          }),
          C.jsxs("div", {
            className: "flex items-center space-x-2",
            children: [
              C.jsx("p", {
                className: "text-muted-foreground",
                children: "Go to page:",
              }),
              C.jsx(W0, {
                type: "number",
                min: "1",
                max: e.getPageCount(),
                defaultValue: e.getState().pagination.pageIndex + 1,
                onChange: (t) => {
                  const r = t.target.value ? Number(t.target.value) - 1 : 0;
                  e.setPageIndex(r);
                },
                className: "w-16 sm:w-20",
              }),
            ],
          }),
          C.jsxs("div", {
            className: " flex flex-row items-center",
            children: [
              C.jsx("div", {
                className:
                  "flex w-full justify-start sm:w-auto sm:justify-center",
                children: C.jsxs("p", {
                  className: "text-muted-foreground text-sm",
                  children: [
                    "Page ",
                    e.getState().pagination.pageIndex + 1,
                    " of",
                    " ",
                    e.getPageCount(),
                  ],
                }),
              }),
              C.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [
                  C.jsxs(jt, {
                    variant: "pagination",
                    size: "icon",
                    className: "h-8 w-8 p-0 lg:flex hidden",
                    onClick: () => e.setPageIndex(0),
                    disabled: !e.getCanPreviousPage(),
                    children: [
                      C.jsx("span", {
                        className: "sr-only",
                        children: "Go to first page",
                      }),
                      C.jsx(D_, { className: "h-4 w-4" }),
                    ],
                  }),
                  C.jsxs(jt, {
                    variant: "pagination",
                    size: "icon",
                    className: "h-8 w-8 p-0",
                    onClick: () => e.previousPage(),
                    disabled: !e.getCanPreviousPage(),
                    children: [
                      C.jsx("span", {
                        className: "sr-only",
                        children: "Go to previous page",
                      }),
                      C.jsx(R_, { className: "h-4 w-4" }),
                    ],
                  }),
                  C.jsxs(jt, {
                    variant: "pagination",
                    size: "icon",
                    className: "h-8 w-8 p-0",
                    onClick: () => e.nextPage(),
                    disabled: !e.getCanNextPage(),
                    children: [
                      C.jsx("span", {
                        className: "sr-only",
                        children: "Go to next page",
                      }),
                      C.jsx(j_, { className: "h-4 w-4" }),
                    ],
                  }),
                  C.jsxs(jt, {
                    variant: "pagination",
                    size: "icon",
                    className: "h-8 w-8 p-0 lg:flex hidden",
                    onClick: () => e.setPageIndex(e.getPageCount() - 1),
                    disabled: !e.getCanNextPage(),
                    children: [
                      C.jsx("span", {
                        className: "sr-only",
                        children: "Go to last page",
                      }),
                      C.jsx(q_, { className: "h-4 w-4" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function sL({
  data: e,
  title: t,
  columns: r,
  inputKey: n,
  initialSort: i,
  facetOptions: a,
  bodyClassName: o,
  tableClassName: u,
  isLoading: s = !1,
  containerClassName: l,
  showColumnControl: f = !0,
  inputPlaceholder: c = "Filter anything...",
  onClickCell: d,
  handleRefreshTable: p,
}) {
  const v = O.useRef(null),
    [h, g] = O.useState({}),
    [y, b] = O.useState({ pageIndex: 0, pageSize: 10 }),
    [w, _] = O.useState(i ?? []),
    [m, x] = O.useState([]),
    [S, P] = O.useState({}),
    E = () => {
      v?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    j = w_({
      data: e,
      columns: r,
      state: {
        sorting: w,
        pagination: y,
        rowSelection: h,
        columnFilters: m,
        columnVisibility: S,
      },
      manualPagination: !0,
      enableRowSelection: !0,
      onSortingChange: _,
      onPaginationChange: b,
      onRowSelectionChange: g,
      onColumnFiltersChange: x,
      onColumnVisibilityChange: P,
      getCoreRowModel: f_(),
      getSortedRowModel: m_(),
      getFacetedRowModel: h_(),
      getFilteredRowModel: v_(),
      getFacetedUniqueValues: g_(),
      globalFilterFn: iS,
    });
  return C.jsxs("div", {
    ref: v,
    className: se(
      "flex flex-col space-y-4 px-4 py-3 bg-background rounded-xl border border-neutral-lighter shadow-sm shadow-neutral-lighter",
      l,
    ),
    children: [
      C.jsx(kO, {
        title: t,
        table: j,
        inputKey: n,
        facetOptions: a,
        inputPlaceholder: c,
        showColumnControl: f,
        handleRefreshTable: p,
      }),
      C.jsx(xc, {}),
      C.jsxs(S_, {
        className: se("max-h-64 overflow-auto", u),
        children: [
          C.jsx(__, {
            children: j
              .getHeaderGroups()
              .map((A) =>
                C.jsx(
                  Mi,
                  {
                    children: A.headers.map((T) =>
                      C.jsx(
                        P_,
                        {
                          className: "text-sm leading-[16px] font-medium",
                          colSpan: T.colSpan,
                          children: T.isPlaceholder
                            ? null
                            : vb(T.column.columnDef.header, T.getContext()),
                        },
                        T.id,
                      ),
                    ),
                  },
                  A.id,
                ),
              ),
          }),
          C.jsx(O_, {
            className: se("max-h-64 overflow-auto mini-scrollbar", o),
            children: C.jsx(C_, {
              table: j,
              columns: r,
              isLoading: s,
              onClickCell: d,
            }),
          }),
        ],
      }),
      C.jsx(xc, {}),
      C.jsx("div", {
        className: "w-full overflow-x-auto",
        children: C.jsx(CP, { resetScroll: E, table: j }),
      }),
    ],
  });
}
function lL({ className: e, ...t }) {
  return C.jsx("div", {
    "data-slot": "card",
    className: se(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      e,
    ),
    ...t,
  });
}
function cL({ className: e, ...t }) {
  return C.jsx("div", {
    "data-slot": "card-header",
    className: se(
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
      e,
    ),
    ...t,
  });
}
function fL({ className: e, ...t }) {
  return C.jsx("div", {
    "data-slot": "card-title",
    className: se("leading-none font-semibold", e),
    ...t,
  });
}
function dL({ className: e, ...t }) {
  return C.jsx("div", {
    "data-slot": "card-description",
    className: se("text-muted-foreground text-sm", e),
    ...t,
  });
}
function pL({ className: e, ...t }) {
  return C.jsx("div", {
    "data-slot": "card-content",
    className: se("px-6", e),
    ...t,
  });
}
function hL({ className: e, ...t }) {
  return C.jsx("div", {
    "data-slot": "card-footer",
    className: se("flex items-center px-6 [.border-t]:pt-6", e),
    ...t,
  });
}
var wo, pp;
function Le() {
  if (pp) return wo;
  pp = 1;
  var e = Array.isArray;
  return (wo = e), wo;
}
var So, hp;
function ux() {
  if (hp) return So;
  hp = 1;
  var e = typeof hi == "object" && hi && hi.Object === Object && hi;
  return (So = e), So;
}
var _o, gp;
function ht() {
  if (gp) return _o;
  gp = 1;
  var e = ux(),
    t = typeof self == "object" && self && self.Object === Object && self,
    r = e || t || Function("return this")();
  return (_o = r), _o;
}
var Oo, vp;
function ii() {
  if (vp) return Oo;
  vp = 1;
  var e = ht(),
    t = e.Symbol;
  return (Oo = t), Oo;
}
var Po, mp;
function AP() {
  if (mp) return Po;
  mp = 1;
  var e = ii(),
    t = Object.prototype,
    r = t.hasOwnProperty,
    n = t.toString,
    i = e ? e.toStringTag : void 0;
  function a(o) {
    var u = r.call(o, i),
      s = o[i];
    try {
      o[i] = void 0;
      var l = !0;
    } catch {}
    var f = n.call(o);
    return l && (u ? (o[i] = s) : delete o[i]), f;
  }
  return (Po = a), Po;
}
var Co, yp;
function EP() {
  if (yp) return Co;
  yp = 1;
  var e = Object.prototype,
    t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return (Co = r), Co;
}
var Ao, bp;
function Ct() {
  if (bp) return Ao;
  bp = 1;
  var e = ii(),
    t = AP(),
    r = EP(),
    n = "[object Null]",
    i = "[object Undefined]",
    a = e ? e.toStringTag : void 0;
  function o(u) {
    return u == null
      ? u === void 0
        ? i
        : n
      : a && a in Object(u)
        ? t(u)
        : r(u);
  }
  return (Ao = o), Ao;
}
var Eo, xp;
function At() {
  if (xp) return Eo;
  xp = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return (Eo = e), Eo;
}
var To, wp;
function Wr() {
  if (wp) return To;
  wp = 1;
  var e = Ct(),
    t = At(),
    r = "[object Symbol]";
  function n(i) {
    return typeof i == "symbol" || (t(i) && e(i) == r);
  }
  return (To = n), To;
}
var Ro, Sp;
function nd() {
  if (Sp) return Ro;
  Sp = 1;
  var e = Le(),
    t = Wr(),
    r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    n = /^\w*$/;
  function i(a, o) {
    if (e(a)) return !1;
    var u = typeof a;
    return u == "number" || u == "symbol" || u == "boolean" || a == null || t(a)
      ? !0
      : n.test(a) || !r.test(a) || (o != null && a in Object(o));
  }
  return (Ro = i), Ro;
}
var Mo, _p;
function zt() {
  if (_p) return Mo;
  _p = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return (Mo = e), Mo;
}
var jo, Op;
function id() {
  if (Op) return jo;
  Op = 1;
  var e = Ct(),
    t = zt(),
    r = "[object AsyncFunction]",
    n = "[object Function]",
    i = "[object GeneratorFunction]",
    a = "[object Proxy]";
  function o(u) {
    if (!t(u)) return !1;
    var s = e(u);
    return s == n || s == i || s == r || s == a;
  }
  return (jo = o), jo;
}
var Io, Pp;
function TP() {
  if (Pp) return Io;
  Pp = 1;
  var e = ht(),
    t = e["__core-js_shared__"];
  return (Io = t), Io;
}
var $o, Cp;
function RP() {
  if (Cp) return $o;
  Cp = 1;
  var e = TP(),
    t = (function () {
      var n = /[^.]+$/.exec((e && e.keys && e.keys.IE_PROTO) || "");
      return n ? "Symbol(src)_1." + n : "";
    })();
  function r(n) {
    return !!t && t in n;
  }
  return ($o = r), $o;
}
var No, Ap;
function sx() {
  if (Ap) return No;
  Ap = 1;
  var e = Function.prototype,
    t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {}
      try {
        return n + "";
      } catch {}
    }
    return "";
  }
  return (No = r), No;
}
var Do, Ep;
function MP() {
  if (Ep) return Do;
  Ep = 1;
  var e = id(),
    t = RP(),
    r = zt(),
    n = sx(),
    i = /[\\^$.*+?()[\]{}|]/g,
    a = /^\[object .+?Constructor\]$/,
    o = Function.prototype,
    u = Object.prototype,
    s = o.toString,
    l = u.hasOwnProperty,
    f = RegExp(
      "^" +
        s
          .call(l)
          .replace(i, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?",
          ) +
        "$",
    );
  function c(d) {
    if (!r(d) || t(d)) return !1;
    var p = e(d) ? f : a;
    return p.test(n(d));
  }
  return (Do = c), Do;
}
var ko, Tp;
function jP() {
  if (Tp) return ko;
  Tp = 1;
  function e(t, r) {
    return t?.[r];
  }
  return (ko = e), ko;
}
var qo, Rp;
function dr() {
  if (Rp) return qo;
  Rp = 1;
  var e = MP(),
    t = jP();
  function r(n, i) {
    var a = t(n, i);
    return e(a) ? a : void 0;
  }
  return (qo = r), qo;
}
var Fo, Mp;
function Ea() {
  if (Mp) return Fo;
  Mp = 1;
  var e = dr(),
    t = e(Object, "create");
  return (Fo = t), Fo;
}
var Lo, jp;
function IP() {
  if (jp) return Lo;
  jp = 1;
  var e = Ea();
  function t() {
    (this.__data__ = e ? e(null) : {}), (this.size = 0);
  }
  return (Lo = t), Lo;
}
var Bo, Ip;
function $P() {
  if (Ip) return Bo;
  Ip = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return (this.size -= r ? 1 : 0), r;
  }
  return (Bo = e), Bo;
}
var Vo, $p;
function NP() {
  if ($p) return Vo;
  $p = 1;
  var e = Ea(),
    t = "__lodash_hash_undefined__",
    r = Object.prototype,
    n = r.hasOwnProperty;
  function i(a) {
    var o = this.__data__;
    if (e) {
      var u = o[a];
      return u === t ? void 0 : u;
    }
    return n.call(o, a) ? o[a] : void 0;
  }
  return (Vo = i), Vo;
}
var Ho, Np;
function DP() {
  if (Np) return Ho;
  Np = 1;
  var e = Ea(),
    t = Object.prototype,
    r = t.hasOwnProperty;
  function n(i) {
    var a = this.__data__;
    return e ? a[i] !== void 0 : r.call(a, i);
  }
  return (Ho = n), Ho;
}
var zo, Dp;
function kP() {
  if (Dp) return zo;
  Dp = 1;
  var e = Ea(),
    t = "__lodash_hash_undefined__";
  function r(n, i) {
    var a = this.__data__;
    return (
      (this.size += this.has(n) ? 0 : 1),
      (a[n] = e && i === void 0 ? t : i),
      this
    );
  }
  return (zo = r), zo;
}
var Uo, kp;
function qP() {
  if (kp) return Uo;
  kp = 1;
  var e = IP(),
    t = $P(),
    r = NP(),
    n = DP(),
    i = kP();
  function a(o) {
    var u = -1,
      s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var l = o[u];
      this.set(l[0], l[1]);
    }
  }
  return (
    (a.prototype.clear = e),
    (a.prototype.delete = t),
    (a.prototype.get = r),
    (a.prototype.has = n),
    (a.prototype.set = i),
    (Uo = a),
    Uo
  );
}
var Go, qp;
function FP() {
  if (qp) return Go;
  qp = 1;
  function e() {
    (this.__data__ = []), (this.size = 0);
  }
  return (Go = e), Go;
}
var Wo, Fp;
function ad() {
  if (Fp) return Wo;
  Fp = 1;
  function e(t, r) {
    return t === r || (t !== t && r !== r);
  }
  return (Wo = e), Wo;
}
var Ko, Lp;
function Ta() {
  if (Lp) return Ko;
  Lp = 1;
  var e = ad();
  function t(r, n) {
    for (var i = r.length; i--; ) if (e(r[i][0], n)) return i;
    return -1;
  }
  return (Ko = t), Ko;
}
var Xo, Bp;
function LP() {
  if (Bp) return Xo;
  Bp = 1;
  var e = Ta(),
    t = Array.prototype,
    r = t.splice;
  function n(i) {
    var a = this.__data__,
      o = e(a, i);
    if (o < 0) return !1;
    var u = a.length - 1;
    return o == u ? a.pop() : r.call(a, o, 1), --this.size, !0;
  }
  return (Xo = n), Xo;
}
var Yo, Vp;
function BP() {
  if (Vp) return Yo;
  Vp = 1;
  var e = Ta();
  function t(r) {
    var n = this.__data__,
      i = e(n, r);
    return i < 0 ? void 0 : n[i][1];
  }
  return (Yo = t), Yo;
}
var Zo, Hp;
function VP() {
  if (Hp) return Zo;
  Hp = 1;
  var e = Ta();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return (Zo = t), Zo;
}
var Jo, zp;
function HP() {
  if (zp) return Jo;
  zp = 1;
  var e = Ta();
  function t(r, n) {
    var i = this.__data__,
      a = e(i, r);
    return a < 0 ? (++this.size, i.push([r, n])) : (i[a][1] = n), this;
  }
  return (Jo = t), Jo;
}
var Qo, Up;
function Ra() {
  if (Up) return Qo;
  Up = 1;
  var e = FP(),
    t = LP(),
    r = BP(),
    n = VP(),
    i = HP();
  function a(o) {
    var u = -1,
      s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var l = o[u];
      this.set(l[0], l[1]);
    }
  }
  return (
    (a.prototype.clear = e),
    (a.prototype.delete = t),
    (a.prototype.get = r),
    (a.prototype.has = n),
    (a.prototype.set = i),
    (Qo = a),
    Qo
  );
}
var eu, Gp;
function od() {
  if (Gp) return eu;
  Gp = 1;
  var e = dr(),
    t = ht(),
    r = e(t, "Map");
  return (eu = r), eu;
}
var tu, Wp;
function zP() {
  if (Wp) return tu;
  Wp = 1;
  var e = qP(),
    t = Ra(),
    r = od();
  function n() {
    (this.size = 0),
      (this.__data__ = { hash: new e(), map: new (r || t)(), string: new e() });
  }
  return (tu = n), tu;
}
var ru, Kp;
function UP() {
  if (Kp) return ru;
  Kp = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean"
      ? t !== "__proto__"
      : t === null;
  }
  return (ru = e), ru;
}
var nu, Xp;
function Ma() {
  if (Xp) return nu;
  Xp = 1;
  var e = UP();
  function t(r, n) {
    var i = r.__data__;
    return e(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
  }
  return (nu = t), nu;
}
var iu, Yp;
function GP() {
  if (Yp) return iu;
  Yp = 1;
  var e = Ma();
  function t(r) {
    var n = e(this, r).delete(r);
    return (this.size -= n ? 1 : 0), n;
  }
  return (iu = t), iu;
}
var au, Zp;
function WP() {
  if (Zp) return au;
  Zp = 1;
  var e = Ma();
  function t(r) {
    return e(this, r).get(r);
  }
  return (au = t), au;
}
var ou, Jp;
function KP() {
  if (Jp) return ou;
  Jp = 1;
  var e = Ma();
  function t(r) {
    return e(this, r).has(r);
  }
  return (ou = t), ou;
}
var uu, Qp;
function XP() {
  if (Qp) return uu;
  Qp = 1;
  var e = Ma();
  function t(r, n) {
    var i = e(this, r),
      a = i.size;
    return i.set(r, n), (this.size += i.size == a ? 0 : 1), this;
  }
  return (uu = t), uu;
}
var su, eh;
function ud() {
  if (eh) return su;
  eh = 1;
  var e = zP(),
    t = GP(),
    r = WP(),
    n = KP(),
    i = XP();
  function a(o) {
    var u = -1,
      s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var l = o[u];
      this.set(l[0], l[1]);
    }
  }
  return (
    (a.prototype.clear = e),
    (a.prototype.delete = t),
    (a.prototype.get = r),
    (a.prototype.has = n),
    (a.prototype.set = i),
    (su = a),
    su
  );
}
var lu, th;
function lx() {
  if (th) return lu;
  th = 1;
  var e = ud(),
    t = "Expected a function";
  function r(n, i) {
    if (typeof n != "function" || (i != null && typeof i != "function"))
      throw new TypeError(t);
    var a = function () {
      var o = arguments,
        u = i ? i.apply(this, o) : o[0],
        s = a.cache;
      if (s.has(u)) return s.get(u);
      var l = n.apply(this, o);
      return (a.cache = s.set(u, l) || s), l;
    };
    return (a.cache = new (r.Cache || e)()), a;
  }
  return (r.Cache = e), (lu = r), lu;
}
var cu, rh;
function YP() {
  if (rh) return cu;
  rh = 1;
  var e = lx(),
    t = 500;
  function r(n) {
    var i = e(n, function (o) {
        return a.size === t && a.clear(), o;
      }),
      a = i.cache;
    return i;
  }
  return (cu = r), cu;
}
var fu, nh;
function ZP() {
  if (nh) return fu;
  nh = 1;
  var e = YP(),
    t =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    r = /\\(\\)?/g,
    n = e(function (i) {
      var a = [];
      return (
        i.charCodeAt(0) === 46 && a.push(""),
        i.replace(t, function (o, u, s, l) {
          a.push(s ? l.replace(r, "$1") : u || o);
        }),
        a
      );
    });
  return (fu = n), fu;
}
var du, ih;
function sd() {
  if (ih) return du;
  ih = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = Array(i); ++n < i; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return (du = e), du;
}
var pu, ah;
function JP() {
  if (ah) return pu;
  ah = 1;
  var e = ii(),
    t = sd(),
    r = Le(),
    n = Wr(),
    i = e ? e.prototype : void 0,
    a = i ? i.toString : void 0;
  function o(u) {
    if (typeof u == "string") return u;
    if (r(u)) return t(u, o) + "";
    if (n(u)) return a ? a.call(u) : "";
    var s = u + "";
    return s == "0" && 1 / u == -1 / 0 ? "-0" : s;
  }
  return (pu = o), pu;
}
var hu, oh;
function cx() {
  if (oh) return hu;
  oh = 1;
  var e = JP();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return (hu = t), hu;
}
var gu, uh;
function fx() {
  if (uh) return gu;
  uh = 1;
  var e = Le(),
    t = nd(),
    r = ZP(),
    n = cx();
  function i(a, o) {
    return e(a) ? a : t(a, o) ? [a] : r(n(a));
  }
  return (gu = i), gu;
}
var vu, sh;
function ja() {
  if (sh) return vu;
  sh = 1;
  var e = Wr();
  function t(r) {
    if (typeof r == "string" || e(r)) return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return (vu = t), vu;
}
var mu, lh;
function ld() {
  if (lh) return mu;
  lh = 1;
  var e = fx(),
    t = ja();
  function r(n, i) {
    i = e(i, n);
    for (var a = 0, o = i.length; n != null && a < o; ) n = n[t(i[a++])];
    return a && a == o ? n : void 0;
  }
  return (mu = r), mu;
}
var yu, ch;
function dx() {
  if (ch) return yu;
  ch = 1;
  var e = ld();
  function t(r, n, i) {
    var a = r == null ? void 0 : e(r, n);
    return a === void 0 ? i : a;
  }
  return (yu = t), yu;
}
var QP = dx();
const lt = ge(QP);
var bu, fh;
function eC() {
  if (fh) return bu;
  fh = 1;
  function e(t) {
    return t == null;
  }
  return (bu = e), bu;
}
var tC = eC();
const ue = ge(tC);
var xu, dh;
function rC() {
  if (dh) return xu;
  dh = 1;
  var e = Ct(),
    t = Le(),
    r = At(),
    n = "[object String]";
  function i(a) {
    return typeof a == "string" || (!t(a) && r(a) && e(a) == n);
  }
  return (xu = i), xu;
}
var nC = rC();
const ai = ge(nC);
var iC = id();
const ae = ge(iC);
var aC = zt();
const Kr = ge(aC);
var wu = { exports: {} },
  ce = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ph;
function oC() {
  if (ph) return ce;
  ph = 1;
  var e = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    n = Symbol.for("react.strict_mode"),
    i = Symbol.for("react.profiler"),
    a = Symbol.for("react.provider"),
    o = Symbol.for("react.context"),
    u = Symbol.for("react.server_context"),
    s = Symbol.for("react.forward_ref"),
    l = Symbol.for("react.suspense"),
    f = Symbol.for("react.suspense_list"),
    c = Symbol.for("react.memo"),
    d = Symbol.for("react.lazy"),
    p = Symbol.for("react.offscreen"),
    v;
  v = Symbol.for("react.module.reference");
  function h(g) {
    if (typeof g == "object" && g !== null) {
      var y = g.$$typeof;
      switch (y) {
        case e:
          switch (((g = g.type), g)) {
            case r:
            case i:
            case n:
            case l:
            case f:
              return g;
            default:
              switch (((g = g && g.$$typeof), g)) {
                case u:
                case o:
                case s:
                case d:
                case c:
                case a:
                  return g;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return (
    (ce.ContextConsumer = o),
    (ce.ContextProvider = a),
    (ce.Element = e),
    (ce.ForwardRef = s),
    (ce.Fragment = r),
    (ce.Lazy = d),
    (ce.Memo = c),
    (ce.Portal = t),
    (ce.Profiler = i),
    (ce.StrictMode = n),
    (ce.Suspense = l),
    (ce.SuspenseList = f),
    (ce.isAsyncMode = function () {
      return !1;
    }),
    (ce.isConcurrentMode = function () {
      return !1;
    }),
    (ce.isContextConsumer = function (g) {
      return h(g) === o;
    }),
    (ce.isContextProvider = function (g) {
      return h(g) === a;
    }),
    (ce.isElement = function (g) {
      return typeof g == "object" && g !== null && g.$$typeof === e;
    }),
    (ce.isForwardRef = function (g) {
      return h(g) === s;
    }),
    (ce.isFragment = function (g) {
      return h(g) === r;
    }),
    (ce.isLazy = function (g) {
      return h(g) === d;
    }),
    (ce.isMemo = function (g) {
      return h(g) === c;
    }),
    (ce.isPortal = function (g) {
      return h(g) === t;
    }),
    (ce.isProfiler = function (g) {
      return h(g) === i;
    }),
    (ce.isStrictMode = function (g) {
      return h(g) === n;
    }),
    (ce.isSuspense = function (g) {
      return h(g) === l;
    }),
    (ce.isSuspenseList = function (g) {
      return h(g) === f;
    }),
    (ce.isValidElementType = function (g) {
      return (
        typeof g == "string" ||
        typeof g == "function" ||
        g === r ||
        g === i ||
        g === n ||
        g === l ||
        g === f ||
        g === p ||
        (typeof g == "object" &&
          g !== null &&
          (g.$$typeof === d ||
            g.$$typeof === c ||
            g.$$typeof === a ||
            g.$$typeof === o ||
            g.$$typeof === s ||
            g.$$typeof === v ||
            g.getModuleId !== void 0))
      );
    }),
    (ce.typeOf = h),
    ce
  );
}
var hh;
function uC() {
  return hh || ((hh = 1), (wu.exports = oC())), wu.exports;
}
var sC = uC(),
  Su,
  gh;
function px() {
  if (gh) return Su;
  gh = 1;
  var e = Ct(),
    t = At(),
    r = "[object Number]";
  function n(i) {
    return typeof i == "number" || (t(i) && e(i) == r);
  }
  return (Su = n), Su;
}
var _u, vh;
function lC() {
  if (vh) return _u;
  vh = 1;
  var e = px();
  function t(r) {
    return e(r) && r != +r;
  }
  return (_u = t), _u;
}
var cC = lC();
const oi = ge(cC);
var fC = px();
const dC = ge(fC);
var ot = function (t) {
    return t === 0 ? 0 : t > 0 ? 1 : -1;
  },
  er = function (t) {
    return ai(t) && t.indexOf("%") === t.length - 1;
  },
  W = function (t) {
    return dC(t) && !oi(t);
  },
  Ee = function (t) {
    return W(t) || ai(t);
  },
  pC = 0,
  Ia = function (t) {
    var r = ++pC;
    return "".concat(t || "").concat(r);
  },
  rt = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (!W(t) && !ai(t)) return n;
    var a;
    if (er(t)) {
      var o = t.indexOf("%");
      a = (r * parseFloat(t.slice(0, o))) / 100;
    } else a = +t;
    return oi(a) && (a = n), i && a > r && (a = r), a;
  },
  Mt = function (t) {
    if (!t) return null;
    var r = Object.keys(t);
    return r && r.length ? t[r[0]] : null;
  },
  hC = function (t) {
    if (!Array.isArray(t)) return !1;
    for (var r = t.length, n = {}, i = 0; i < r; i++)
      if (!n[t[i]]) n[t[i]] = !0;
      else return !0;
    return !1;
  },
  mr = function (t, r) {
    return W(t) && W(r)
      ? function (n) {
          return t + n * (r - t);
        }
      : function () {
          return r;
        };
  };
function Ic(e, t, r) {
  return !e || !e.length
    ? null
    : e.find(function (n) {
        return n && (typeof t == "function" ? t(n) : lt(n, t)) === r;
      });
}
function $c(e, t) {
  for (var r in e)
    if (
      {}.hasOwnProperty.call(e, r) &&
      (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])
    )
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function Nc(e) {
  "@babel/helpers - typeof";
  return (
    (Nc =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Nc(e)
  );
}
var gC = ["viewBox", "children"],
  vC = [
    "aria-activedescendant",
    "aria-atomic",
    "aria-autocomplete",
    "aria-busy",
    "aria-checked",
    "aria-colcount",
    "aria-colindex",
    "aria-colspan",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-disabled",
    "aria-errormessage",
    "aria-expanded",
    "aria-flowto",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-modal",
    "aria-multiline",
    "aria-multiselectable",
    "aria-orientation",
    "aria-owns",
    "aria-placeholder",
    "aria-posinset",
    "aria-pressed",
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-roledescription",
    "aria-rowcount",
    "aria-rowindex",
    "aria-rowspan",
    "aria-selected",
    "aria-setsize",
    "aria-sort",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "aria-valuetext",
    "className",
    "color",
    "height",
    "id",
    "lang",
    "max",
    "media",
    "method",
    "min",
    "name",
    "style",
    "target",
    "width",
    "role",
    "tabIndex",
    "accentHeight",
    "accumulate",
    "additive",
    "alignmentBaseline",
    "allowReorder",
    "alphabetic",
    "amplitude",
    "arabicForm",
    "ascent",
    "attributeName",
    "attributeType",
    "autoReverse",
    "azimuth",
    "baseFrequency",
    "baselineShift",
    "baseProfile",
    "bbox",
    "begin",
    "bias",
    "by",
    "calcMode",
    "capHeight",
    "clip",
    "clipPath",
    "clipPathUnits",
    "clipRule",
    "colorInterpolation",
    "colorInterpolationFilters",
    "colorProfile",
    "colorRendering",
    "contentScriptType",
    "contentStyleType",
    "cursor",
    "cx",
    "cy",
    "d",
    "decelerate",
    "descent",
    "diffuseConstant",
    "direction",
    "display",
    "divisor",
    "dominantBaseline",
    "dur",
    "dx",
    "dy",
    "edgeMode",
    "elevation",
    "enableBackground",
    "end",
    "exponent",
    "externalResourcesRequired",
    "fill",
    "fillOpacity",
    "fillRule",
    "filter",
    "filterRes",
    "filterUnits",
    "floodColor",
    "floodOpacity",
    "focusable",
    "fontFamily",
    "fontSize",
    "fontSizeAdjust",
    "fontStretch",
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "format",
    "from",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyphName",
    "glyphOrientationHorizontal",
    "glyphOrientationVertical",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "hanging",
    "horizAdvX",
    "horizOriginX",
    "href",
    "ideographic",
    "imageRendering",
    "in2",
    "in",
    "intercept",
    "k1",
    "k2",
    "k3",
    "k4",
    "k",
    "kernelMatrix",
    "kernelUnitLength",
    "kerning",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "letterSpacing",
    "lightingColor",
    "limitingConeAngle",
    "local",
    "markerEnd",
    "markerHeight",
    "markerMid",
    "markerStart",
    "markerUnits",
    "markerWidth",
    "mask",
    "maskContentUnits",
    "maskUnits",
    "mathematical",
    "mode",
    "numOctaves",
    "offset",
    "opacity",
    "operator",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "overlinePosition",
    "overlineThickness",
    "paintOrder",
    "panose1",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointerEvents",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "r",
    "radius",
    "refX",
    "refY",
    "renderingIntent",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "restart",
    "result",
    "rotate",
    "rx",
    "ry",
    "seed",
    "shapeRendering",
    "slope",
    "spacing",
    "specularConstant",
    "specularExponent",
    "speed",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stemh",
    "stemv",
    "stitchTiles",
    "stopColor",
    "stopOpacity",
    "strikethroughPosition",
    "strikethroughThickness",
    "string",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textAnchor",
    "textDecoration",
    "textLength",
    "textRendering",
    "to",
    "transform",
    "u1",
    "u2",
    "underlinePosition",
    "underlineThickness",
    "unicode",
    "unicodeBidi",
    "unicodeRange",
    "unitsPerEm",
    "vAlphabetic",
    "values",
    "vectorEffect",
    "version",
    "vertAdvY",
    "vertOriginX",
    "vertOriginY",
    "vHanging",
    "vIdeographic",
    "viewTarget",
    "visibility",
    "vMathematical",
    "widths",
    "wordSpacing",
    "writingMode",
    "x1",
    "x2",
    "x",
    "xChannelSelector",
    "xHeight",
    "xlinkActuate",
    "xlinkArcrole",
    "xlinkHref",
    "xlinkRole",
    "xlinkShow",
    "xlinkTitle",
    "xlinkType",
    "xmlBase",
    "xmlLang",
    "xmlns",
    "xmlnsXlink",
    "xmlSpace",
    "y1",
    "y2",
    "y",
    "yChannelSelector",
    "z",
    "zoomAndPan",
    "ref",
    "key",
    "angle",
  ],
  mh = ["points", "pathLength"],
  Ou = { svg: gC, polygon: mh, polyline: mh },
  cd = [
    "dangerouslySetInnerHTML",
    "onCopy",
    "onCopyCapture",
    "onCut",
    "onCutCapture",
    "onPaste",
    "onPasteCapture",
    "onCompositionEnd",
    "onCompositionEndCapture",
    "onCompositionStart",
    "onCompositionStartCapture",
    "onCompositionUpdate",
    "onCompositionUpdateCapture",
    "onFocus",
    "onFocusCapture",
    "onBlur",
    "onBlurCapture",
    "onChange",
    "onChangeCapture",
    "onBeforeInput",
    "onBeforeInputCapture",
    "onInput",
    "onInputCapture",
    "onReset",
    "onResetCapture",
    "onSubmit",
    "onSubmitCapture",
    "onInvalid",
    "onInvalidCapture",
    "onLoad",
    "onLoadCapture",
    "onError",
    "onErrorCapture",
    "onKeyDown",
    "onKeyDownCapture",
    "onKeyPress",
    "onKeyPressCapture",
    "onKeyUp",
    "onKeyUpCapture",
    "onAbort",
    "onAbortCapture",
    "onCanPlay",
    "onCanPlayCapture",
    "onCanPlayThrough",
    "onCanPlayThroughCapture",
    "onDurationChange",
    "onDurationChangeCapture",
    "onEmptied",
    "onEmptiedCapture",
    "onEncrypted",
    "onEncryptedCapture",
    "onEnded",
    "onEndedCapture",
    "onLoadedData",
    "onLoadedDataCapture",
    "onLoadedMetadata",
    "onLoadedMetadataCapture",
    "onLoadStart",
    "onLoadStartCapture",
    "onPause",
    "onPauseCapture",
    "onPlay",
    "onPlayCapture",
    "onPlaying",
    "onPlayingCapture",
    "onProgress",
    "onProgressCapture",
    "onRateChange",
    "onRateChangeCapture",
    "onSeeked",
    "onSeekedCapture",
    "onSeeking",
    "onSeekingCapture",
    "onStalled",
    "onStalledCapture",
    "onSuspend",
    "onSuspendCapture",
    "onTimeUpdate",
    "onTimeUpdateCapture",
    "onVolumeChange",
    "onVolumeChangeCapture",
    "onWaiting",
    "onWaitingCapture",
    "onAuxClick",
    "onAuxClickCapture",
    "onClick",
    "onClickCapture",
    "onContextMenu",
    "onContextMenuCapture",
    "onDoubleClick",
    "onDoubleClickCapture",
    "onDrag",
    "onDragCapture",
    "onDragEnd",
    "onDragEndCapture",
    "onDragEnter",
    "onDragEnterCapture",
    "onDragExit",
    "onDragExitCapture",
    "onDragLeave",
    "onDragLeaveCapture",
    "onDragOver",
    "onDragOverCapture",
    "onDragStart",
    "onDragStartCapture",
    "onDrop",
    "onDropCapture",
    "onMouseDown",
    "onMouseDownCapture",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseMoveCapture",
    "onMouseOut",
    "onMouseOutCapture",
    "onMouseOver",
    "onMouseOverCapture",
    "onMouseUp",
    "onMouseUpCapture",
    "onSelect",
    "onSelectCapture",
    "onTouchCancel",
    "onTouchCancelCapture",
    "onTouchEnd",
    "onTouchEndCapture",
    "onTouchMove",
    "onTouchMoveCapture",
    "onTouchStart",
    "onTouchStartCapture",
    "onPointerDown",
    "onPointerDownCapture",
    "onPointerMove",
    "onPointerMoveCapture",
    "onPointerUp",
    "onPointerUpCapture",
    "onPointerCancel",
    "onPointerCancelCapture",
    "onPointerEnter",
    "onPointerEnterCapture",
    "onPointerLeave",
    "onPointerLeaveCapture",
    "onPointerOver",
    "onPointerOverCapture",
    "onPointerOut",
    "onPointerOutCapture",
    "onGotPointerCapture",
    "onGotPointerCaptureCapture",
    "onLostPointerCapture",
    "onLostPointerCaptureCapture",
    "onScroll",
    "onScrollCapture",
    "onWheel",
    "onWheelCapture",
    "onAnimationStart",
    "onAnimationStartCapture",
    "onAnimationEnd",
    "onAnimationEndCapture",
    "onAnimationIteration",
    "onAnimationIterationCapture",
    "onTransitionEnd",
    "onTransitionEndCapture",
  ],
  Ii = function (t, r) {
    if (!t || typeof t == "function" || typeof t == "boolean") return null;
    var n = t;
    if ((O.isValidElement(t) && (n = t.props), !Kr(n))) return null;
    var i = {};
    return (
      Object.keys(n).forEach(function (a) {
        cd.includes(a) &&
          (i[a] =
            r ||
            function (o) {
              return n[a](n, o);
            });
      }),
      i
    );
  },
  mC = function (t, r, n) {
    return function (i) {
      return t(r, n, i), null;
    };
  },
  Dc = function (t, r, n) {
    if (!Kr(t) || Nc(t) !== "object") return null;
    var i = null;
    return (
      Object.keys(t).forEach(function (a) {
        var o = t[a];
        cd.includes(a) &&
          typeof o == "function" &&
          (i || (i = {}), (i[a] = mC(o, r, n)));
      }),
      i
    );
  },
  yC = ["children"],
  bC = ["children"];
function yh(e, t) {
  if (e == null) return {};
  var r = xC(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function xC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var bh = {
    click: "onClick",
    mousedown: "onMouseDown",
    mouseup: "onMouseUp",
    mouseover: "onMouseOver",
    mousemove: "onMouseMove",
    mouseout: "onMouseOut",
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    touchcancel: "onTouchCancel",
    touchend: "onTouchEnd",
    touchmove: "onTouchMove",
    touchstart: "onTouchStart",
    contextmenu: "onContextMenu",
    dblclick: "onDoubleClick",
  },
  wt = function (t) {
    return typeof t == "string"
      ? t
      : t
        ? t.displayName || t.name || "Component"
        : "";
  },
  xh = null,
  Pu = null,
  fd = function e(t) {
    if (t === xh && Array.isArray(Pu)) return Pu;
    var r = [];
    return (
      O.Children.forEach(t, function (n) {
        ue(n) ||
          (sC.isFragment(n) ? (r = r.concat(e(n.props.children))) : r.push(n));
      }),
      (Pu = r),
      (xh = t),
      r
    );
  };
function it(e, t) {
  var r = [],
    n = [];
  return (
    Array.isArray(t)
      ? (n = t.map(function (i) {
          return wt(i);
        }))
      : (n = [wt(t)]),
    fd(e).forEach(function (i) {
      var a = lt(i, "type.displayName") || lt(i, "type.name");
      n.indexOf(a) !== -1 && r.push(i);
    }),
    r
  );
}
function Ve(e, t) {
  var r = it(e, t);
  return r && r[0];
}
var wh = function (t) {
    if (!t || !t.props) return !1;
    var r = t.props,
      n = r.width,
      i = r.height;
    return !(!W(n) || n <= 0 || !W(i) || i <= 0);
  },
  wC = [
    "a",
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColormatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-url",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "lineGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "script",
    "set",
    "stop",
    "style",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "title",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern",
  ],
  SC = function (t) {
    return t && t.type && ai(t.type) && wC.indexOf(t.type) >= 0;
  },
  _C = function (t, r, n, i) {
    var a,
      o = (a = Ou?.[i]) !== null && a !== void 0 ? a : [];
    return (
      (!ae(t) && ((i && o.includes(r)) || vC.includes(r))) ||
      (n && cd.includes(r))
    );
  },
  ye = function (t, r, n) {
    if (!t || typeof t == "function" || typeof t == "boolean") return null;
    var i = t;
    if ((O.isValidElement(t) && (i = t.props), !Kr(i))) return null;
    var a = {};
    return (
      Object.keys(i).forEach(function (o) {
        var u;
        _C((u = i) === null || u === void 0 ? void 0 : u[o], o, r, n) &&
          (a[o] = i[o]);
      }),
      a
    );
  },
  kc = function e(t, r) {
    if (t === r) return !0;
    var n = O.Children.count(t);
    if (n !== O.Children.count(r)) return !1;
    if (n === 0) return !0;
    if (n === 1)
      return Sh(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
    for (var i = 0; i < n; i++) {
      var a = t[i],
        o = r[i];
      if (Array.isArray(a) || Array.isArray(o)) {
        if (!e(a, o)) return !1;
      } else if (!Sh(a, o)) return !1;
    }
    return !0;
  },
  Sh = function (t, r) {
    if (ue(t) && ue(r)) return !0;
    if (!ue(t) && !ue(r)) {
      var n = t.props || {},
        i = n.children,
        a = yh(n, yC),
        o = r.props || {},
        u = o.children,
        s = yh(o, bC);
      return i && u ? $c(a, s) && kc(i, u) : !i && !u ? $c(a, s) : !1;
    }
    return !1;
  },
  _h = function (t, r) {
    var n = [],
      i = {};
    return (
      fd(t).forEach(function (a, o) {
        if (SC(a)) n.push(a);
        else if (a) {
          var u = wt(a.type),
            s = r[u] || {},
            l = s.handler,
            f = s.once;
          if (l && (!f || !i[u])) {
            var c = l(a, u, o);
            n.push(c), (i[u] = !0);
          }
        }
      }),
      n
    );
  },
  OC = function (t) {
    var r = t && t.type;
    return r && bh[r] ? bh[r] : null;
  },
  PC = function (t, r) {
    return fd(r).indexOf(t);
  },
  CC = [
    "children",
    "width",
    "height",
    "viewBox",
    "className",
    "style",
    "title",
    "desc",
  ];
function qc() {
  return (
    (qc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    qc.apply(this, arguments)
  );
}
function AC(e, t) {
  if (e == null) return {};
  var r = EC(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function EC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Fc(e) {
  var t = e.children,
    r = e.width,
    n = e.height,
    i = e.viewBox,
    a = e.className,
    o = e.style,
    u = e.title,
    s = e.desc,
    l = AC(e, CC),
    f = i || { width: r, height: n, x: 0, y: 0 },
    c = me("recharts-surface", a);
  return I.createElement(
    "svg",
    qc({}, ye(l, !0, "svg"), {
      className: c,
      width: r,
      height: n,
      style: o,
      viewBox: ""
        .concat(f.x, " ")
        .concat(f.y, " ")
        .concat(f.width, " ")
        .concat(f.height),
    }),
    I.createElement("title", null, u),
    I.createElement("desc", null, s),
    t,
  );
}
var TC = ["children", "className"];
function Lc() {
  return (
    (Lc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Lc.apply(this, arguments)
  );
}
function RC(e, t) {
  if (e == null) return {};
  var r = MC(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function MC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var De = I.forwardRef(function (e, t) {
    var r = e.children,
      n = e.className,
      i = RC(e, TC),
      a = me("recharts-layer", n);
    return I.createElement("g", Lc({ className: a }, ye(i, !0), { ref: t }), r);
  }),
  nr = function (t, r) {
    for (
      var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2;
      a < n;
      a++
    )
      i[a - 2] = arguments[a];
  },
  Cu,
  Oh;
function jC() {
  if (Oh) return Cu;
  Oh = 1;
  function e(t, r, n) {
    var i = -1,
      a = t.length;
    r < 0 && (r = -r > a ? 0 : a + r),
      (n = n > a ? a : n),
      n < 0 && (n += a),
      (a = r > n ? 0 : (n - r) >>> 0),
      (r >>>= 0);
    for (var o = Array(a); ++i < a; ) o[i] = t[i + r];
    return o;
  }
  return (Cu = e), Cu;
}
var Au, Ph;
function IC() {
  if (Ph) return Au;
  Ph = 1;
  var e = jC();
  function t(r, n, i) {
    var a = r.length;
    return (i = i === void 0 ? a : i), !n && i >= a ? r : e(r, n, i);
  }
  return (Au = t), Au;
}
var Eu, Ch;
function hx() {
  if (Ch) return Eu;
  Ch = 1;
  var e = "\\ud800-\\udfff",
    t = "\\u0300-\\u036f",
    r = "\\ufe20-\\ufe2f",
    n = "\\u20d0-\\u20ff",
    i = t + r + n,
    a = "\\ufe0e\\ufe0f",
    o = "\\u200d",
    u = RegExp("[" + o + e + i + a + "]");
  function s(l) {
    return u.test(l);
  }
  return (Eu = s), Eu;
}
var Tu, Ah;
function $C() {
  if (Ah) return Tu;
  Ah = 1;
  function e(t) {
    return t.split("");
  }
  return (Tu = e), Tu;
}
var Ru, Eh;
function NC() {
  if (Eh) return Ru;
  Eh = 1;
  var e = "\\ud800-\\udfff",
    t = "\\u0300-\\u036f",
    r = "\\ufe20-\\ufe2f",
    n = "\\u20d0-\\u20ff",
    i = t + r + n,
    a = "\\ufe0e\\ufe0f",
    o = "[" + e + "]",
    u = "[" + i + "]",
    s = "\\ud83c[\\udffb-\\udfff]",
    l = "(?:" + u + "|" + s + ")",
    f = "[^" + e + "]",
    c = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    d = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    p = "\\u200d",
    v = l + "?",
    h = "[" + a + "]?",
    g = "(?:" + p + "(?:" + [f, c, d].join("|") + ")" + h + v + ")*",
    y = h + v + g,
    b = "(?:" + [f + u + "?", u, c, d, o].join("|") + ")",
    w = RegExp(s + "(?=" + s + ")|" + b + y, "g");
  function _(m) {
    return m.match(w) || [];
  }
  return (Ru = _), Ru;
}
var Mu, Th;
function DC() {
  if (Th) return Mu;
  Th = 1;
  var e = $C(),
    t = hx(),
    r = NC();
  function n(i) {
    return t(i) ? r(i) : e(i);
  }
  return (Mu = n), Mu;
}
var ju, Rh;
function kC() {
  if (Rh) return ju;
  Rh = 1;
  var e = IC(),
    t = hx(),
    r = DC(),
    n = cx();
  function i(a) {
    return function (o) {
      o = n(o);
      var u = t(o) ? r(o) : void 0,
        s = u ? u[0] : o.charAt(0),
        l = u ? e(u, 1).join("") : o.slice(1);
      return s[a]() + l;
    };
  }
  return (ju = i), ju;
}
var Iu, Mh;
function qC() {
  if (Mh) return Iu;
  Mh = 1;
  var e = kC(),
    t = e("toUpperCase");
  return (Iu = t), Iu;
}
var FC = qC();
const $a = ge(FC);
function he(e) {
  return function () {
    return e;
  };
}
const gx = Math.cos,
  $i = Math.sin,
  at = Math.sqrt,
  Ni = Math.PI,
  Na = 2 * Ni,
  Bc = Math.PI,
  Vc = 2 * Bc,
  Jt = 1e-6,
  LC = Vc - Jt;
function vx(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t) this._ += arguments[t] + e[t];
}
function BC(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return vx;
  const r = 10 ** t;
  return function (n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class VC {
  constructor(t) {
    (this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ""),
      (this._append = t == null ? vx : BC(t));
  }
  moveTo(t, r) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +r)}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${(this._x1 = +n)},${(this._y1 = +i)}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this
      ._append`C${+t},${+r},${+n},${+i},${(this._x1 = +a)},${(this._y1 = +o)}`;
  }
  arcTo(t, r, n, i, a) {
    if (((t = +t), (r = +r), (n = +n), (i = +i), (a = +a), a < 0))
      throw new Error(`negative radius: ${a}`);
    let o = this._x1,
      u = this._y1,
      s = n - t,
      l = i - r,
      f = o - t,
      c = u - r,
      d = f * f + c * c;
    if (this._x1 === null) this._append`M${(this._x1 = t)},${(this._y1 = r)}`;
    else if (d > Jt)
      if (!(Math.abs(c * s - l * f) > Jt) || !a)
        this._append`L${(this._x1 = t)},${(this._y1 = r)}`;
      else {
        let p = n - o,
          v = i - u,
          h = s * s + l * l,
          g = p * p + v * v,
          y = Math.sqrt(h),
          b = Math.sqrt(d),
          w = a * Math.tan((Bc - Math.acos((h + d - g) / (2 * y * b))) / 2),
          _ = w / b,
          m = w / y;
        Math.abs(_ - 1) > Jt && this._append`L${t + _ * f},${r + _ * c}`,
          this
            ._append`A${a},${a},0,0,${+(c * p > f * v)},${(this._x1 = t + m * s)},${(this._y1 = r + m * l)}`;
      }
  }
  arc(t, r, n, i, a, o) {
    if (((t = +t), (r = +r), (n = +n), (o = !!o), n < 0))
      throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i),
      s = n * Math.sin(i),
      l = t + u,
      f = r + s,
      c = 1 ^ o,
      d = o ? i - a : a - i;
    this._x1 === null
      ? this._append`M${l},${f}`
      : (Math.abs(this._x1 - l) > Jt || Math.abs(this._y1 - f) > Jt) &&
        this._append`L${l},${f}`,
      n &&
        (d < 0 && (d = (d % Vc) + Vc),
        d > LC
          ? this
              ._append`A${n},${n},0,1,${c},${t - u},${r - s}A${n},${n},0,1,${c},${(this._x1 = l)},${(this._y1 = f)}`
          : d > Jt &&
            this
              ._append`A${n},${n},0,${+(d >= Bc)},${c},${(this._x1 = t + n * Math.cos(a))},${(this._y1 = r + n * Math.sin(a))}`);
  }
  rect(t, r, n, i) {
    this
      ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}h${(n = +n)}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function dd(e) {
  let t = 3;
  return (
    (e.digits = function (r) {
      if (!arguments.length) return t;
      if (r == null) t = null;
      else {
        const n = Math.floor(r);
        if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
        t = n;
      }
      return e;
    }),
    () => new VC(t)
  );
}
function pd(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function mx(e) {
  this._context = e;
}
mx.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  },
};
function Da(e) {
  return new mx(e);
}
function yx(e) {
  return e[0];
}
function bx(e) {
  return e[1];
}
function xx(e, t) {
  var r = he(!0),
    n = null,
    i = Da,
    a = null,
    o = dd(u);
  (e = typeof e == "function" ? e : e === void 0 ? yx : he(e)),
    (t = typeof t == "function" ? t : t === void 0 ? bx : he(t));
  function u(s) {
    var l,
      f = (s = pd(s)).length,
      c,
      d = !1,
      p;
    for (n == null && (a = i((p = o()))), l = 0; l <= f; ++l)
      !(l < f && r((c = s[l]), l, s)) === d &&
        ((d = !d) ? a.lineStart() : a.lineEnd()),
        d && a.point(+e(c, l, s), +t(c, l, s));
    if (p) return (a = null), p + "" || null;
  }
  return (
    (u.x = function (s) {
      return arguments.length
        ? ((e = typeof s == "function" ? s : he(+s)), u)
        : e;
    }),
    (u.y = function (s) {
      return arguments.length
        ? ((t = typeof s == "function" ? s : he(+s)), u)
        : t;
    }),
    (u.defined = function (s) {
      return arguments.length
        ? ((r = typeof s == "function" ? s : he(!!s)), u)
        : r;
    }),
    (u.curve = function (s) {
      return arguments.length ? ((i = s), n != null && (a = i(n)), u) : i;
    }),
    (u.context = function (s) {
      return arguments.length
        ? (s == null ? (n = a = null) : (a = i((n = s))), u)
        : n;
    }),
    u
  );
}
function yi(e, t, r) {
  var n = null,
    i = he(!0),
    a = null,
    o = Da,
    u = null,
    s = dd(l);
  (e = typeof e == "function" ? e : e === void 0 ? yx : he(+e)),
    (t = typeof t == "function" ? t : he(t === void 0 ? 0 : +t)),
    (r = typeof r == "function" ? r : r === void 0 ? bx : he(+r));
  function l(c) {
    var d,
      p,
      v,
      h = (c = pd(c)).length,
      g,
      y = !1,
      b,
      w = new Array(h),
      _ = new Array(h);
    for (a == null && (u = o((b = s()))), d = 0; d <= h; ++d) {
      if (!(d < h && i((g = c[d]), d, c)) === y)
        if ((y = !y)) (p = d), u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), v = d - 1; v >= p; --v)
            u.point(w[v], _[v]);
          u.lineEnd(), u.areaEnd();
        }
      y &&
        ((w[d] = +e(g, d, c)),
        (_[d] = +t(g, d, c)),
        u.point(n ? +n(g, d, c) : w[d], r ? +r(g, d, c) : _[d]));
    }
    if (b) return (u = null), b + "" || null;
  }
  function f() {
    return xx().defined(i).curve(o).context(a);
  }
  return (
    (l.x = function (c) {
      return arguments.length
        ? ((e = typeof c == "function" ? c : he(+c)), (n = null), l)
        : e;
    }),
    (l.x0 = function (c) {
      return arguments.length
        ? ((e = typeof c == "function" ? c : he(+c)), l)
        : e;
    }),
    (l.x1 = function (c) {
      return arguments.length
        ? ((n = c == null ? null : typeof c == "function" ? c : he(+c)), l)
        : n;
    }),
    (l.y = function (c) {
      return arguments.length
        ? ((t = typeof c == "function" ? c : he(+c)), (r = null), l)
        : t;
    }),
    (l.y0 = function (c) {
      return arguments.length
        ? ((t = typeof c == "function" ? c : he(+c)), l)
        : t;
    }),
    (l.y1 = function (c) {
      return arguments.length
        ? ((r = c == null ? null : typeof c == "function" ? c : he(+c)), l)
        : r;
    }),
    (l.lineX0 = l.lineY0 =
      function () {
        return f().x(e).y(t);
      }),
    (l.lineY1 = function () {
      return f().x(e).y(r);
    }),
    (l.lineX1 = function () {
      return f().x(n).y(t);
    }),
    (l.defined = function (c) {
      return arguments.length
        ? ((i = typeof c == "function" ? c : he(!!c)), l)
        : i;
    }),
    (l.curve = function (c) {
      return arguments.length ? ((o = c), a != null && (u = o(a)), l) : o;
    }),
    (l.context = function (c) {
      return arguments.length
        ? (c == null ? (a = u = null) : (u = o((a = c))), l)
        : a;
    }),
    l
  );
}
class wx {
  constructor(t, r) {
    (this._context = t), (this._x = r);
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  }
  point(t, r) {
    switch (((t = +t), (r = +r), this._point)) {
      case 0: {
        (this._point = 1),
          this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + t) / 2),
              this._y0,
              this._x0,
              r,
              t,
              r,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + r) / 2),
              t,
              this._y0,
              t,
              r,
            );
        break;
      }
    }
    (this._x0 = t), (this._y0 = r);
  }
}
function HC(e) {
  return new wx(e, !0);
}
function zC(e) {
  return new wx(e, !1);
}
const hd = {
    draw(e, t) {
      const r = at(t / Ni);
      e.moveTo(r, 0), e.arc(0, 0, r, 0, Na);
    },
  },
  UC = {
    draw(e, t) {
      const r = at(t / 5) / 2;
      e.moveTo(-3 * r, -r),
        e.lineTo(-r, -r),
        e.lineTo(-r, -3 * r),
        e.lineTo(r, -3 * r),
        e.lineTo(r, -r),
        e.lineTo(3 * r, -r),
        e.lineTo(3 * r, r),
        e.lineTo(r, r),
        e.lineTo(r, 3 * r),
        e.lineTo(-r, 3 * r),
        e.lineTo(-r, r),
        e.lineTo(-3 * r, r),
        e.closePath();
    },
  },
  Sx = at(1 / 3),
  GC = Sx * 2,
  WC = {
    draw(e, t) {
      const r = at(t / GC),
        n = r * Sx;
      e.moveTo(0, -r),
        e.lineTo(n, 0),
        e.lineTo(0, r),
        e.lineTo(-n, 0),
        e.closePath();
    },
  },
  KC = {
    draw(e, t) {
      const r = at(t),
        n = -r / 2;
      e.rect(n, n, r, r);
    },
  },
  XC = 0.8908130915292852,
  _x = $i(Ni / 10) / $i((7 * Ni) / 10),
  YC = $i(Na / 10) * _x,
  ZC = -gx(Na / 10) * _x,
  JC = {
    draw(e, t) {
      const r = at(t * XC),
        n = YC * r,
        i = ZC * r;
      e.moveTo(0, -r), e.lineTo(n, i);
      for (let a = 1; a < 5; ++a) {
        const o = (Na * a) / 5,
          u = gx(o),
          s = $i(o);
        e.lineTo(s * r, -u * r), e.lineTo(u * n - s * i, s * n + u * i);
      }
      e.closePath();
    },
  },
  $u = at(3),
  QC = {
    draw(e, t) {
      const r = -at(t / ($u * 3));
      e.moveTo(0, r * 2),
        e.lineTo(-$u * r, -r),
        e.lineTo($u * r, -r),
        e.closePath();
    },
  },
  Ue = -0.5,
  Ge = at(3) / 2,
  Hc = 1 / at(12),
  eA = (Hc / 2 + 1) * 3,
  tA = {
    draw(e, t) {
      const r = at(t / eA),
        n = r / 2,
        i = r * Hc,
        a = n,
        o = r * Hc + r,
        u = -a,
        s = o;
      e.moveTo(n, i),
        e.lineTo(a, o),
        e.lineTo(u, s),
        e.lineTo(Ue * n - Ge * i, Ge * n + Ue * i),
        e.lineTo(Ue * a - Ge * o, Ge * a + Ue * o),
        e.lineTo(Ue * u - Ge * s, Ge * u + Ue * s),
        e.lineTo(Ue * n + Ge * i, Ue * i - Ge * n),
        e.lineTo(Ue * a + Ge * o, Ue * o - Ge * a),
        e.lineTo(Ue * u + Ge * s, Ue * s - Ge * u),
        e.closePath();
    },
  };
function rA(e, t) {
  let r = null,
    n = dd(i);
  (e = typeof e == "function" ? e : he(e || hd)),
    (t = typeof t == "function" ? t : he(t === void 0 ? 64 : +t));
  function i() {
    let a;
    if (
      (r || (r = a = n()),
      e.apply(this, arguments).draw(r, +t.apply(this, arguments)),
      a)
    )
      return (r = null), a + "" || null;
  }
  return (
    (i.type = function (a) {
      return arguments.length
        ? ((e = typeof a == "function" ? a : he(a)), i)
        : e;
    }),
    (i.size = function (a) {
      return arguments.length
        ? ((t = typeof a == "function" ? a : he(+a)), i)
        : t;
    }),
    (i.context = function (a) {
      return arguments.length ? ((r = a ?? null), i) : r;
    }),
    i
  );
}
function Di() {}
function ki(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6,
  );
}
function Ox(e) {
  this._context = e;
}
Ox.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        ki(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        (this._point = 3),
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6,
          );
      default:
        ki(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function nA(e) {
  return new Ox(e);
}
function Px(e) {
  this._context = e;
}
Px.prototype = {
  areaStart: Di,
  areaEnd: Di,
  lineStart: function () {
    (this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo(
          (this._x2 + 2 * this._x3) / 3,
          (this._y2 + 2 * this._y3) / 3,
        ),
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3,
          ),
          this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1), (this._x2 = e), (this._y2 = t);
        break;
      case 1:
        (this._point = 2), (this._x3 = e), (this._y3 = t);
        break;
      case 2:
        (this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + e) / 6,
            (this._y0 + 4 * this._y1 + t) / 6,
          );
        break;
      default:
        ki(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function iA(e) {
  return new Px(e);
}
function Cx(e) {
  this._context = e;
}
Cx.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6,
          n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        ki(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function aA(e) {
  return new Cx(e);
}
function Ax(e) {
  this._context = e;
}
Ax.prototype = {
  areaStart: Di,
  areaEnd: Di,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    (e = +e),
      (t = +t),
      this._point
        ? this._context.lineTo(e, t)
        : ((this._point = 1), this._context.moveTo(e, t));
  },
};
function oA(e) {
  return new Ax(e);
}
function jh(e) {
  return e < 0 ? -1 : 1;
}
function Ih(e, t, r) {
  var n = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (n || (i < 0 && -0)),
    o = (r - e._y1) / (i || (n < 0 && -0)),
    u = (a * i + o * n) / (n + i);
  return (
    (jh(a) + jh(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0
  );
}
function $h(e, t) {
  var r = e._x1 - e._x0;
  return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
}
function Nu(e, t, r) {
  var n = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function qi(e) {
  this._context = e;
}
qi.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Nu(this, this._t0, $h(this, this._t0));
        break;
    }
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    var r = NaN;
    if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
      switch (this._point) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(e, t)
              : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          (this._point = 3), Nu(this, $h(this, (r = Ih(this, e, t))), r);
          break;
        default:
          Nu(this, this._t0, (r = Ih(this, e, t)));
          break;
      }
      (this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = r);
    }
  },
};
function Ex(e) {
  this._context = new Tx(e);
}
(Ex.prototype = Object.create(qi.prototype)).point = function (e, t) {
  qi.prototype.point.call(this, t, e);
};
function Tx(e) {
  this._context = e;
}
Tx.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function (e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  },
};
function uA(e) {
  return new qi(e);
}
function sA(e) {
  return new Ex(e);
}
function Rx(e) {
  this._context = e;
}
Rx.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x = []), (this._y = []);
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      r = e.length;
    if (r)
      if (
        (this._line
          ? this._context.lineTo(e[0], t[0])
          : this._context.moveTo(e[0], t[0]),
        r === 2)
      )
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = Nh(e), i = Nh(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(
            n[0][a],
            i[0][a],
            n[1][a],
            i[1][a],
            e[o],
            t[o],
          );
    (this._line || (this._line !== 0 && r === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null);
  },
  point: function (e, t) {
    this._x.push(+e), this._y.push(+t);
  },
};
function Nh(e) {
  var t,
    r = e.length - 1,
    n,
    i = new Array(r),
    a = new Array(r),
    o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    (i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]);
  for (
    i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1;
    t < r;
    ++t
  )
    (n = i[t] / a[t - 1]), (a[t] -= n), (o[t] -= n * o[t - 1]);
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t)
    i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t)
    a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function lA(e) {
  return new Rx(e);
}
function ka(e, t) {
  (this._context = e), (this._t = t);
}
ka.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x = this._y = NaN), (this._point = 0);
  },
  lineEnd: function () {
    0 < this._t &&
      this._t < 1 &&
      this._point === 2 &&
      this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
      this._line >= 0 &&
        ((this._t = 1 - this._t), (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    (this._x = e), (this._y = t);
  },
};
function cA(e) {
  return new ka(e, 0.5);
}
function fA(e) {
  return new ka(e, 0);
}
function dA(e) {
  return new ka(e, 1);
}
function Er(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function zc(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function pA(e, t) {
  return e[t];
}
function hA(e) {
  const t = [];
  return (t.key = e), t;
}
function gA() {
  var e = he([]),
    t = zc,
    r = Er,
    n = pA;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), hA),
      u,
      s = o.length,
      l = -1,
      f;
    for (const c of a)
      for (u = 0, ++l; u < s; ++u)
        (o[u][l] = [0, +n(c, o[u].key, l, a)]).data = c;
    for (u = 0, f = pd(t(o)); u < s; ++u) o[f[u]].index = u;
    return r(o, f), o;
  }
  return (
    (i.keys = function (a) {
      return arguments.length
        ? ((e = typeof a == "function" ? a : he(Array.from(a))), i)
        : e;
    }),
    (i.value = function (a) {
      return arguments.length
        ? ((n = typeof a == "function" ? a : he(+a)), i)
        : n;
    }),
    (i.order = function (a) {
      return arguments.length
        ? ((t =
            a == null ? zc : typeof a == "function" ? a : he(Array.from(a))),
          i)
        : t;
    }),
    (i.offset = function (a) {
      return arguments.length ? ((r = a ?? Er), i) : r;
    }),
    i
  );
}
function vA(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    Er(e, t);
  }
}
function mA(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    Er(e, t);
  }
}
function yA(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, s = 0, l = 0; u < o; ++u) {
        for (
          var f = e[t[u]],
            c = f[n][1] || 0,
            d = f[n - 1][1] || 0,
            p = (c - d) / 2,
            v = 0;
          v < u;
          ++v
        ) {
          var h = e[t[v]],
            g = h[n][1] || 0,
            y = h[n - 1][1] || 0;
          p += g - y;
        }
        (s += c), (l += p * c);
      }
      (i[n - 1][1] += i[n - 1][0] = r), s && (r -= l / s);
    }
    (i[n - 1][1] += i[n - 1][0] = r), Er(e, t);
  }
}
function wn(e) {
  "@babel/helpers - typeof";
  return (
    (wn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    wn(e)
  );
}
var bA = ["type", "size", "sizeType"];
function Uc() {
  return (
    (Uc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Uc.apply(this, arguments)
  );
}
function Dh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function kh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Dh(Object(r), !0).forEach(function (n) {
          xA(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Dh(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function xA(e, t, r) {
  return (
    (t = wA(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function wA(e) {
  var t = SA(e, "string");
  return wn(t) == "symbol" ? t : t + "";
}
function SA(e, t) {
  if (wn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _A(e, t) {
  if (e == null) return {};
  var r = OA(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function OA(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Mx = {
    symbolCircle: hd,
    symbolCross: UC,
    symbolDiamond: WC,
    symbolSquare: KC,
    symbolStar: JC,
    symbolTriangle: QC,
    symbolWye: tA,
  },
  PA = Math.PI / 180,
  CA = function (t) {
    var r = "symbol".concat($a(t));
    return Mx[r] || hd;
  },
  AA = function (t, r, n) {
    if (r === "area") return t;
    switch (n) {
      case "cross":
        return (5 * t * t) / 9;
      case "diamond":
        return (0.5 * t * t) / Math.sqrt(3);
      case "square":
        return t * t;
      case "star": {
        var i = 18 * PA;
        return (
          1.25 *
          t *
          t *
          (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2))
        );
      }
      case "triangle":
        return (Math.sqrt(3) * t * t) / 4;
      case "wye":
        return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
      default:
        return (Math.PI * t * t) / 4;
    }
  },
  EA = function (t, r) {
    Mx["symbol".concat($a(t))] = r;
  },
  gd = function (t) {
    var r = t.type,
      n = r === void 0 ? "circle" : r,
      i = t.size,
      a = i === void 0 ? 64 : i,
      o = t.sizeType,
      u = o === void 0 ? "area" : o,
      s = _A(t, bA),
      l = kh(kh({}, s), {}, { type: n, size: a, sizeType: u }),
      f = function () {
        var g = CA(n),
          y = rA()
            .type(g)
            .size(AA(a, u, n));
        return y();
      },
      c = l.className,
      d = l.cx,
      p = l.cy,
      v = ye(l, !0);
    return d === +d && p === +p && a === +a
      ? I.createElement(
          "path",
          Uc({}, v, {
            className: me("recharts-symbols", c),
            transform: "translate(".concat(d, ", ").concat(p, ")"),
            d: f(),
          }),
        )
      : null;
  };
gd.registerSymbol = EA;
function Tr(e) {
  "@babel/helpers - typeof";
  return (
    (Tr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Tr(e)
  );
}
function Gc() {
  return (
    (Gc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Gc.apply(this, arguments)
  );
}
function qh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function TA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qh(Object(r), !0).forEach(function (n) {
          Sn(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : qh(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function RA(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function MA(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Ix(n.key), n);
  }
}
function jA(e, t, r) {
  return (
    t && MA(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function IA(e, t, r) {
  return (
    (t = Fi(t)),
    $A(
      e,
      jx() ? Reflect.construct(t, r || [], Fi(e).constructor) : t.apply(e, r),
    )
  );
}
function $A(e, t) {
  if (t && (Tr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return NA(e);
}
function NA(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function jx() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (jx = function () {
    return !!e;
  })();
}
function Fi(e) {
  return (
    (Fi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Fi(e)
  );
}
function DA(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Wc(e, t);
}
function Wc(e, t) {
  return (
    (Wc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Wc(e, t)
  );
}
function Sn(e, t, r) {
  return (
    (t = Ix(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Ix(e) {
  var t = kA(e, "string");
  return Tr(t) == "symbol" ? t : t + "";
}
function kA(e, t) {
  if (Tr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Tr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ze = 32,
  vd = (function (e) {
    function t() {
      return RA(this, t), IA(this, t, arguments);
    }
    return (
      DA(t, e),
      jA(t, [
        {
          key: "renderIcon",
          value: function (n) {
            var i = this.props.inactiveColor,
              a = Ze / 2,
              o = Ze / 6,
              u = Ze / 3,
              s = n.inactive ? i : n.color;
            if (n.type === "plainline")
              return I.createElement("line", {
                strokeWidth: 4,
                fill: "none",
                stroke: s,
                strokeDasharray: n.payload.strokeDasharray,
                x1: 0,
                y1: a,
                x2: Ze,
                y2: a,
                className: "recharts-legend-icon",
              });
            if (n.type === "line")
              return I.createElement("path", {
                strokeWidth: 4,
                fill: "none",
                stroke: s,
                d: "M0,"
                  .concat(a, "h")
                  .concat(
                    u,
                    `
            A`,
                  )
                  .concat(o, ",")
                  .concat(o, ",0,1,1,")
                  .concat(2 * u, ",")
                  .concat(
                    a,
                    `
            H`,
                  )
                  .concat(Ze, "M")
                  .concat(2 * u, ",")
                  .concat(
                    a,
                    `
            A`,
                  )
                  .concat(o, ",")
                  .concat(o, ",0,1,1,")
                  .concat(u, ",")
                  .concat(a),
                className: "recharts-legend-icon",
              });
            if (n.type === "rect")
              return I.createElement("path", {
                stroke: "none",
                fill: s,
                d: "M0,"
                  .concat(Ze / 8, "h")
                  .concat(Ze, "v")
                  .concat((Ze * 3) / 4, "h")
                  .concat(-32, "z"),
                className: "recharts-legend-icon",
              });
            if (I.isValidElement(n.legendIcon)) {
              var l = TA({}, n);
              return delete l.legendIcon, I.cloneElement(n.legendIcon, l);
            }
            return I.createElement(gd, {
              fill: s,
              cx: a,
              cy: a,
              size: Ze,
              sizeType: "diameter",
              type: n.type,
            });
          },
        },
        {
          key: "renderItems",
          value: function () {
            var n = this,
              i = this.props,
              a = i.payload,
              o = i.iconSize,
              u = i.layout,
              s = i.formatter,
              l = i.inactiveColor,
              f = { x: 0, y: 0, width: Ze, height: Ze },
              c = {
                display: u === "horizontal" ? "inline-block" : "block",
                marginRight: 10,
              },
              d = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4,
              };
            return a.map(function (p, v) {
              var h = p.formatter || s,
                g = me(
                  Sn(
                    Sn(
                      { "recharts-legend-item": !0 },
                      "legend-item-".concat(v),
                      !0,
                    ),
                    "inactive",
                    p.inactive,
                  ),
                );
              if (p.type === "none") return null;
              var y = ae(p.value) ? null : p.value;
              nr(
                !ae(p.value),
                `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`,
              );
              var b = p.inactive ? l : p.color;
              return I.createElement(
                "li",
                Gc(
                  { className: g, style: c, key: "legend-item-".concat(v) },
                  Dc(n.props, p, v),
                ),
                I.createElement(
                  Fc,
                  { width: o, height: o, viewBox: f, style: d },
                  n.renderIcon(p),
                ),
                I.createElement(
                  "span",
                  {
                    className: "recharts-legend-item-text",
                    style: { color: b },
                  },
                  h ? h(y, p, v) : y,
                ),
              );
            });
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.payload,
              a = n.layout,
              o = n.align;
            if (!i || !i.length) return null;
            var u = {
              padding: 0,
              margin: 0,
              textAlign: a === "horizontal" ? o : "left",
            };
            return I.createElement(
              "ul",
              { className: "recharts-default-legend", style: u },
              this.renderItems(),
            );
          },
        },
      ])
    );
  })(O.PureComponent);
Sn(vd, "displayName", "Legend");
Sn(vd, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc",
});
var Du, Fh;
function qA() {
  if (Fh) return Du;
  Fh = 1;
  var e = Ra();
  function t() {
    (this.__data__ = new e()), (this.size = 0);
  }
  return (Du = t), Du;
}
var ku, Lh;
function FA() {
  if (Lh) return ku;
  Lh = 1;
  function e(t) {
    var r = this.__data__,
      n = r.delete(t);
    return (this.size = r.size), n;
  }
  return (ku = e), ku;
}
var qu, Bh;
function LA() {
  if (Bh) return qu;
  Bh = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return (qu = e), qu;
}
var Fu, Vh;
function BA() {
  if (Vh) return Fu;
  Vh = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return (Fu = e), Fu;
}
var Lu, Hh;
function VA() {
  if (Hh) return Lu;
  Hh = 1;
  var e = Ra(),
    t = od(),
    r = ud(),
    n = 200;
  function i(a, o) {
    var u = this.__data__;
    if (u instanceof e) {
      var s = u.__data__;
      if (!t || s.length < n - 1)
        return s.push([a, o]), (this.size = ++u.size), this;
      u = this.__data__ = new r(s);
    }
    return u.set(a, o), (this.size = u.size), this;
  }
  return (Lu = i), Lu;
}
var Bu, zh;
function $x() {
  if (zh) return Bu;
  zh = 1;
  var e = Ra(),
    t = qA(),
    r = FA(),
    n = LA(),
    i = BA(),
    a = VA();
  function o(u) {
    var s = (this.__data__ = new e(u));
    this.size = s.size;
  }
  return (
    (o.prototype.clear = t),
    (o.prototype.delete = r),
    (o.prototype.get = n),
    (o.prototype.has = i),
    (o.prototype.set = a),
    (Bu = o),
    Bu
  );
}
var Vu, Uh;
function HA() {
  if (Uh) return Vu;
  Uh = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return (Vu = t), Vu;
}
var Hu, Gh;
function zA() {
  if (Gh) return Hu;
  Gh = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return (Hu = e), Hu;
}
var zu, Wh;
function Nx() {
  if (Wh) return zu;
  Wh = 1;
  var e = ud(),
    t = HA(),
    r = zA();
  function n(i) {
    var a = -1,
      o = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++a < o; ) this.add(i[a]);
  }
  return (
    (n.prototype.add = n.prototype.push = t),
    (n.prototype.has = r),
    (zu = n),
    zu
  );
}
var Uu, Kh;
function Dx() {
  if (Kh) return Uu;
  Kh = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
      if (r(t[n], n, t)) return !0;
    return !1;
  }
  return (Uu = e), Uu;
}
var Gu, Xh;
function kx() {
  if (Xh) return Gu;
  Xh = 1;
  function e(t, r) {
    return t.has(r);
  }
  return (Gu = e), Gu;
}
var Wu, Yh;
function qx() {
  if (Yh) return Wu;
  Yh = 1;
  var e = Nx(),
    t = Dx(),
    r = kx(),
    n = 1,
    i = 2;
  function a(o, u, s, l, f, c) {
    var d = s & n,
      p = o.length,
      v = u.length;
    if (p != v && !(d && v > p)) return !1;
    var h = c.get(o),
      g = c.get(u);
    if (h && g) return h == u && g == o;
    var y = -1,
      b = !0,
      w = s & i ? new e() : void 0;
    for (c.set(o, u), c.set(u, o); ++y < p; ) {
      var _ = o[y],
        m = u[y];
      if (l) var x = d ? l(m, _, y, u, o, c) : l(_, m, y, o, u, c);
      if (x !== void 0) {
        if (x) continue;
        b = !1;
        break;
      }
      if (w) {
        if (
          !t(u, function (S, P) {
            if (!r(w, P) && (_ === S || f(_, S, s, l, c))) return w.push(P);
          })
        ) {
          b = !1;
          break;
        }
      } else if (!(_ === m || f(_, m, s, l, c))) {
        b = !1;
        break;
      }
    }
    return c.delete(o), c.delete(u), b;
  }
  return (Wu = a), Wu;
}
var Ku, Zh;
function UA() {
  if (Zh) return Ku;
  Zh = 1;
  var e = ht(),
    t = e.Uint8Array;
  return (Ku = t), Ku;
}
var Xu, Jh;
function GA() {
  if (Jh) return Xu;
  Jh = 1;
  function e(t) {
    var r = -1,
      n = Array(t.size);
    return (
      t.forEach(function (i, a) {
        n[++r] = [a, i];
      }),
      n
    );
  }
  return (Xu = e), Xu;
}
var Yu, Qh;
function md() {
  if (Qh) return Yu;
  Qh = 1;
  function e(t) {
    var r = -1,
      n = Array(t.size);
    return (
      t.forEach(function (i) {
        n[++r] = i;
      }),
      n
    );
  }
  return (Yu = e), Yu;
}
var Zu, eg;
function WA() {
  if (eg) return Zu;
  eg = 1;
  var e = ii(),
    t = UA(),
    r = ad(),
    n = qx(),
    i = GA(),
    a = md(),
    o = 1,
    u = 2,
    s = "[object Boolean]",
    l = "[object Date]",
    f = "[object Error]",
    c = "[object Map]",
    d = "[object Number]",
    p = "[object RegExp]",
    v = "[object Set]",
    h = "[object String]",
    g = "[object Symbol]",
    y = "[object ArrayBuffer]",
    b = "[object DataView]",
    w = e ? e.prototype : void 0,
    _ = w ? w.valueOf : void 0;
  function m(x, S, P, E, j, A, T) {
    switch (P) {
      case b:
        if (x.byteLength != S.byteLength || x.byteOffset != S.byteOffset)
          return !1;
        (x = x.buffer), (S = S.buffer);
      case y:
        return !(x.byteLength != S.byteLength || !A(new t(x), new t(S)));
      case s:
      case l:
      case d:
        return r(+x, +S);
      case f:
        return x.name == S.name && x.message == S.message;
      case p:
      case h:
        return x == S + "";
      case c:
        var M = i;
      case v:
        var N = E & o;
        if ((M || (M = a), x.size != S.size && !N)) return !1;
        var $ = T.get(x);
        if ($) return $ == S;
        (E |= u), T.set(x, S);
        var k = n(M(x), M(S), E, j, A, T);
        return T.delete(x), k;
      case g:
        if (_) return _.call(x) == _.call(S);
    }
    return !1;
  }
  return (Zu = m), Zu;
}
var Ju, tg;
function Fx() {
  if (tg) return Ju;
  tg = 1;
  function e(t, r) {
    for (var n = -1, i = r.length, a = t.length; ++n < i; ) t[a + n] = r[n];
    return t;
  }
  return (Ju = e), Ju;
}
var Qu, rg;
function KA() {
  if (rg) return Qu;
  rg = 1;
  var e = Fx(),
    t = Le();
  function r(n, i, a) {
    var o = i(n);
    return t(n) ? o : e(o, a(n));
  }
  return (Qu = r), Qu;
}
var es, ng;
function XA() {
  if (ng) return es;
  ng = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = 0, o = []; ++n < i; ) {
      var u = t[n];
      r(u, n, t) && (o[a++] = u);
    }
    return o;
  }
  return (es = e), es;
}
var ts, ig;
function YA() {
  if (ig) return ts;
  ig = 1;
  function e() {
    return [];
  }
  return (ts = e), ts;
}
var rs, ag;
function ZA() {
  if (ag) return rs;
  ag = 1;
  var e = XA(),
    t = YA(),
    r = Object.prototype,
    n = r.propertyIsEnumerable,
    i = Object.getOwnPropertySymbols,
    a = i
      ? function (o) {
          return o == null
            ? []
            : ((o = Object(o)),
              e(i(o), function (u) {
                return n.call(o, u);
              }));
        }
      : t;
  return (rs = a), rs;
}
var ns, og;
function JA() {
  if (og) return ns;
  og = 1;
  function e(t, r) {
    for (var n = -1, i = Array(t); ++n < t; ) i[n] = r(n);
    return i;
  }
  return (ns = e), ns;
}
var is, ug;
function QA() {
  if (ug) return is;
  ug = 1;
  var e = Ct(),
    t = At(),
    r = "[object Arguments]";
  function n(i) {
    return t(i) && e(i) == r;
  }
  return (is = n), is;
}
var as, sg;
function yd() {
  if (sg) return as;
  sg = 1;
  var e = QA(),
    t = At(),
    r = Object.prototype,
    n = r.hasOwnProperty,
    i = r.propertyIsEnumerable,
    a = e(
      (function () {
        return arguments;
      })(),
    )
      ? e
      : function (o) {
          return t(o) && n.call(o, "callee") && !i.call(o, "callee");
        };
  return (as = a), as;
}
var dn = { exports: {} },
  os,
  lg;
function eE() {
  if (lg) return os;
  lg = 1;
  function e() {
    return !1;
  }
  return (os = e), os;
}
dn.exports;
var cg;
function Lx() {
  return (
    cg ||
      ((cg = 1),
      (function (e, t) {
        var r = ht(),
          n = eE(),
          i = t && !t.nodeType && t,
          a = i && !0 && e && !e.nodeType && e,
          o = a && a.exports === i,
          u = o ? r.Buffer : void 0,
          s = u ? u.isBuffer : void 0,
          l = s || n;
        e.exports = l;
      })(dn, dn.exports)),
    dn.exports
  );
}
var us, fg;
function bd() {
  if (fg) return us;
  fg = 1;
  var e = 9007199254740991,
    t = /^(?:0|[1-9]\d*)$/;
  function r(n, i) {
    var a = typeof n;
    return (
      (i = i ?? e),
      !!i &&
        (a == "number" || (a != "symbol" && t.test(n))) &&
        n > -1 &&
        n % 1 == 0 &&
        n < i
    );
  }
  return (us = r), us;
}
var ss, dg;
function xd() {
  if (dg) return ss;
  dg = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return (ss = t), ss;
}
var ls, pg;
function tE() {
  if (pg) return ls;
  pg = 1;
  var e = Ct(),
    t = xd(),
    r = At(),
    n = "[object Arguments]",
    i = "[object Array]",
    a = "[object Boolean]",
    o = "[object Date]",
    u = "[object Error]",
    s = "[object Function]",
    l = "[object Map]",
    f = "[object Number]",
    c = "[object Object]",
    d = "[object RegExp]",
    p = "[object Set]",
    v = "[object String]",
    h = "[object WeakMap]",
    g = "[object ArrayBuffer]",
    y = "[object DataView]",
    b = "[object Float32Array]",
    w = "[object Float64Array]",
    _ = "[object Int8Array]",
    m = "[object Int16Array]",
    x = "[object Int32Array]",
    S = "[object Uint8Array]",
    P = "[object Uint8ClampedArray]",
    E = "[object Uint16Array]",
    j = "[object Uint32Array]",
    A = {};
  (A[b] = A[w] = A[_] = A[m] = A[x] = A[S] = A[P] = A[E] = A[j] = !0),
    (A[n] =
      A[i] =
      A[g] =
      A[a] =
      A[y] =
      A[o] =
      A[u] =
      A[s] =
      A[l] =
      A[f] =
      A[c] =
      A[d] =
      A[p] =
      A[v] =
      A[h] =
        !1);
  function T(M) {
    return r(M) && t(M.length) && !!A[e(M)];
  }
  return (ls = T), ls;
}
var cs, hg;
function Bx() {
  if (hg) return cs;
  hg = 1;
  function e(t) {
    return function (r) {
      return t(r);
    };
  }
  return (cs = e), cs;
}
var pn = { exports: {} };
pn.exports;
var gg;
function rE() {
  return (
    gg ||
      ((gg = 1),
      (function (e, t) {
        var r = ux(),
          n = t && !t.nodeType && t,
          i = n && !0 && e && !e.nodeType && e,
          a = i && i.exports === n,
          o = a && r.process,
          u = (function () {
            try {
              var s = i && i.require && i.require("util").types;
              return s || (o && o.binding && o.binding("util"));
            } catch {}
          })();
        e.exports = u;
      })(pn, pn.exports)),
    pn.exports
  );
}
var fs, vg;
function Vx() {
  if (vg) return fs;
  vg = 1;
  var e = tE(),
    t = Bx(),
    r = rE(),
    n = r && r.isTypedArray,
    i = n ? t(n) : e;
  return (fs = i), fs;
}
var ds, mg;
function nE() {
  if (mg) return ds;
  mg = 1;
  var e = JA(),
    t = yd(),
    r = Le(),
    n = Lx(),
    i = bd(),
    a = Vx(),
    o = Object.prototype,
    u = o.hasOwnProperty;
  function s(l, f) {
    var c = r(l),
      d = !c && t(l),
      p = !c && !d && n(l),
      v = !c && !d && !p && a(l),
      h = c || d || p || v,
      g = h ? e(l.length, String) : [],
      y = g.length;
    for (var b in l)
      (f || u.call(l, b)) &&
        !(
          h &&
          (b == "length" ||
            (p && (b == "offset" || b == "parent")) ||
            (v && (b == "buffer" || b == "byteLength" || b == "byteOffset")) ||
            i(b, y))
        ) &&
        g.push(b);
    return g;
  }
  return (ds = s), ds;
}
var ps, yg;
function iE() {
  if (yg) return ps;
  yg = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor,
      i = (typeof n == "function" && n.prototype) || e;
    return r === i;
  }
  return (ps = t), ps;
}
var hs, bg;
function Hx() {
  if (bg) return hs;
  bg = 1;
  function e(t, r) {
    return function (n) {
      return t(r(n));
    };
  }
  return (hs = e), hs;
}
var gs, xg;
function aE() {
  if (xg) return gs;
  xg = 1;
  var e = Hx(),
    t = e(Object.keys, Object);
  return (gs = t), gs;
}
var vs, wg;
function oE() {
  if (wg) return vs;
  wg = 1;
  var e = iE(),
    t = aE(),
    r = Object.prototype,
    n = r.hasOwnProperty;
  function i(a) {
    if (!e(a)) return t(a);
    var o = [];
    for (var u in Object(a)) n.call(a, u) && u != "constructor" && o.push(u);
    return o;
  }
  return (vs = i), vs;
}
var ms, Sg;
function ui() {
  if (Sg) return ms;
  Sg = 1;
  var e = id(),
    t = xd();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return (ms = r), ms;
}
var ys, _g;
function qa() {
  if (_g) return ys;
  _g = 1;
  var e = nE(),
    t = oE(),
    r = ui();
  function n(i) {
    return r(i) ? e(i) : t(i);
  }
  return (ys = n), ys;
}
var bs, Og;
function uE() {
  if (Og) return bs;
  Og = 1;
  var e = KA(),
    t = ZA(),
    r = qa();
  function n(i) {
    return e(i, r, t);
  }
  return (bs = n), bs;
}
var xs, Pg;
function sE() {
  if (Pg) return xs;
  Pg = 1;
  var e = uE(),
    t = 1,
    r = Object.prototype,
    n = r.hasOwnProperty;
  function i(a, o, u, s, l, f) {
    var c = u & t,
      d = e(a),
      p = d.length,
      v = e(o),
      h = v.length;
    if (p != h && !c) return !1;
    for (var g = p; g--; ) {
      var y = d[g];
      if (!(c ? y in o : n.call(o, y))) return !1;
    }
    var b = f.get(a),
      w = f.get(o);
    if (b && w) return b == o && w == a;
    var _ = !0;
    f.set(a, o), f.set(o, a);
    for (var m = c; ++g < p; ) {
      y = d[g];
      var x = a[y],
        S = o[y];
      if (s) var P = c ? s(S, x, y, o, a, f) : s(x, S, y, a, o, f);
      if (!(P === void 0 ? x === S || l(x, S, u, s, f) : P)) {
        _ = !1;
        break;
      }
      m || (m = y == "constructor");
    }
    if (_ && !m) {
      var E = a.constructor,
        j = o.constructor;
      E != j &&
        "constructor" in a &&
        "constructor" in o &&
        !(
          typeof E == "function" &&
          E instanceof E &&
          typeof j == "function" &&
          j instanceof j
        ) &&
        (_ = !1);
    }
    return f.delete(a), f.delete(o), _;
  }
  return (xs = i), xs;
}
var ws, Cg;
function lE() {
  if (Cg) return ws;
  Cg = 1;
  var e = dr(),
    t = ht(),
    r = e(t, "DataView");
  return (ws = r), ws;
}
var Ss, Ag;
function cE() {
  if (Ag) return Ss;
  Ag = 1;
  var e = dr(),
    t = ht(),
    r = e(t, "Promise");
  return (Ss = r), Ss;
}
var _s, Eg;
function zx() {
  if (Eg) return _s;
  Eg = 1;
  var e = dr(),
    t = ht(),
    r = e(t, "Set");
  return (_s = r), _s;
}
var Os, Tg;
function fE() {
  if (Tg) return Os;
  Tg = 1;
  var e = dr(),
    t = ht(),
    r = e(t, "WeakMap");
  return (Os = r), Os;
}
var Ps, Rg;
function dE() {
  if (Rg) return Ps;
  Rg = 1;
  var e = lE(),
    t = od(),
    r = cE(),
    n = zx(),
    i = fE(),
    a = Ct(),
    o = sx(),
    u = "[object Map]",
    s = "[object Object]",
    l = "[object Promise]",
    f = "[object Set]",
    c = "[object WeakMap]",
    d = "[object DataView]",
    p = o(e),
    v = o(t),
    h = o(r),
    g = o(n),
    y = o(i),
    b = a;
  return (
    ((e && b(new e(new ArrayBuffer(1))) != d) ||
      (t && b(new t()) != u) ||
      (r && b(r.resolve()) != l) ||
      (n && b(new n()) != f) ||
      (i && b(new i()) != c)) &&
      (b = function (w) {
        var _ = a(w),
          m = _ == s ? w.constructor : void 0,
          x = m ? o(m) : "";
        if (x)
          switch (x) {
            case p:
              return d;
            case v:
              return u;
            case h:
              return l;
            case g:
              return f;
            case y:
              return c;
          }
        return _;
      }),
    (Ps = b),
    Ps
  );
}
var Cs, Mg;
function pE() {
  if (Mg) return Cs;
  Mg = 1;
  var e = $x(),
    t = qx(),
    r = WA(),
    n = sE(),
    i = dE(),
    a = Le(),
    o = Lx(),
    u = Vx(),
    s = 1,
    l = "[object Arguments]",
    f = "[object Array]",
    c = "[object Object]",
    d = Object.prototype,
    p = d.hasOwnProperty;
  function v(h, g, y, b, w, _) {
    var m = a(h),
      x = a(g),
      S = m ? f : i(h),
      P = x ? f : i(g);
    (S = S == l ? c : S), (P = P == l ? c : P);
    var E = S == c,
      j = P == c,
      A = S == P;
    if (A && o(h)) {
      if (!o(g)) return !1;
      (m = !0), (E = !1);
    }
    if (A && !E)
      return (
        _ || (_ = new e()),
        m || u(h) ? t(h, g, y, b, w, _) : r(h, g, S, y, b, w, _)
      );
    if (!(y & s)) {
      var T = E && p.call(h, "__wrapped__"),
        M = j && p.call(g, "__wrapped__");
      if (T || M) {
        var N = T ? h.value() : h,
          $ = M ? g.value() : g;
        return _ || (_ = new e()), w(N, $, y, b, _);
      }
    }
    return A ? (_ || (_ = new e()), n(h, g, y, b, w, _)) : !1;
  }
  return (Cs = v), Cs;
}
var As, jg;
function wd() {
  if (jg) return As;
  jg = 1;
  var e = pE(),
    t = At();
  function r(n, i, a, o, u) {
    return n === i
      ? !0
      : n == null || i == null || (!t(n) && !t(i))
        ? n !== n && i !== i
        : e(n, i, a, o, r, u);
  }
  return (As = r), As;
}
var Es, Ig;
function hE() {
  if (Ig) return Es;
  Ig = 1;
  var e = $x(),
    t = wd(),
    r = 1,
    n = 2;
  function i(a, o, u, s) {
    var l = u.length,
      f = l,
      c = !s;
    if (a == null) return !f;
    for (a = Object(a); l--; ) {
      var d = u[l];
      if (c && d[2] ? d[1] !== a[d[0]] : !(d[0] in a)) return !1;
    }
    for (; ++l < f; ) {
      d = u[l];
      var p = d[0],
        v = a[p],
        h = d[1];
      if (c && d[2]) {
        if (v === void 0 && !(p in a)) return !1;
      } else {
        var g = new e();
        if (s) var y = s(v, h, p, a, o, g);
        if (!(y === void 0 ? t(h, v, r | n, s, g) : y)) return !1;
      }
    }
    return !0;
  }
  return (Es = i), Es;
}
var Ts, $g;
function Ux() {
  if ($g) return Ts;
  $g = 1;
  var e = zt();
  function t(r) {
    return r === r && !e(r);
  }
  return (Ts = t), Ts;
}
var Rs, Ng;
function gE() {
  if (Ng) return Rs;
  Ng = 1;
  var e = Ux(),
    t = qa();
  function r(n) {
    for (var i = t(n), a = i.length; a--; ) {
      var o = i[a],
        u = n[o];
      i[a] = [o, u, e(u)];
    }
    return i;
  }
  return (Rs = r), Rs;
}
var Ms, Dg;
function Gx() {
  if (Dg) return Ms;
  Dg = 1;
  function e(t, r) {
    return function (n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return (Ms = e), Ms;
}
var js, kg;
function vE() {
  if (kg) return js;
  kg = 1;
  var e = hE(),
    t = gE(),
    r = Gx();
  function n(i) {
    var a = t(i);
    return a.length == 1 && a[0][2]
      ? r(a[0][0], a[0][1])
      : function (o) {
          return o === i || e(o, i, a);
        };
  }
  return (js = n), js;
}
var Is, qg;
function mE() {
  if (qg) return Is;
  qg = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return (Is = e), Is;
}
var $s, Fg;
function yE() {
  if (Fg) return $s;
  Fg = 1;
  var e = fx(),
    t = yd(),
    r = Le(),
    n = bd(),
    i = xd(),
    a = ja();
  function o(u, s, l) {
    s = e(s, u);
    for (var f = -1, c = s.length, d = !1; ++f < c; ) {
      var p = a(s[f]);
      if (!(d = u != null && l(u, p))) break;
      u = u[p];
    }
    return d || ++f != c
      ? d
      : ((c = u == null ? 0 : u.length),
        !!c && i(c) && n(p, c) && (r(u) || t(u)));
  }
  return ($s = o), $s;
}
var Ns, Lg;
function bE() {
  if (Lg) return Ns;
  Lg = 1;
  var e = mE(),
    t = yE();
  function r(n, i) {
    return n != null && t(n, i, e);
  }
  return (Ns = r), Ns;
}
var Ds, Bg;
function xE() {
  if (Bg) return Ds;
  Bg = 1;
  var e = wd(),
    t = dx(),
    r = bE(),
    n = nd(),
    i = Ux(),
    a = Gx(),
    o = ja(),
    u = 1,
    s = 2;
  function l(f, c) {
    return n(f) && i(c)
      ? a(o(f), c)
      : function (d) {
          var p = t(d, f);
          return p === void 0 && p === c ? r(d, f) : e(c, p, u | s);
        };
  }
  return (Ds = l), Ds;
}
var ks, Vg;
function Xr() {
  if (Vg) return ks;
  Vg = 1;
  function e(t) {
    return t;
  }
  return (ks = e), ks;
}
var qs, Hg;
function wE() {
  if (Hg) return qs;
  Hg = 1;
  function e(t) {
    return function (r) {
      return r?.[t];
    };
  }
  return (qs = e), qs;
}
var Fs, zg;
function SE() {
  if (zg) return Fs;
  zg = 1;
  var e = ld();
  function t(r) {
    return function (n) {
      return e(n, r);
    };
  }
  return (Fs = t), Fs;
}
var Ls, Ug;
function _E() {
  if (Ug) return Ls;
  Ug = 1;
  var e = wE(),
    t = SE(),
    r = nd(),
    n = ja();
  function i(a) {
    return r(a) ? e(n(a)) : t(a);
  }
  return (Ls = i), Ls;
}
var Bs, Gg;
function Ut() {
  if (Gg) return Bs;
  Gg = 1;
  var e = vE(),
    t = xE(),
    r = Xr(),
    n = Le(),
    i = _E();
  function a(o) {
    return typeof o == "function"
      ? o
      : o == null
        ? r
        : typeof o == "object"
          ? n(o)
            ? t(o[0], o[1])
            : e(o)
          : i(o);
  }
  return (Bs = a), Bs;
}
var Vs, Wg;
function Wx() {
  if (Wg) return Vs;
  Wg = 1;
  function e(t, r, n, i) {
    for (var a = t.length, o = n + (i ? 1 : -1); i ? o-- : ++o < a; )
      if (r(t[o], o, t)) return o;
    return -1;
  }
  return (Vs = e), Vs;
}
var Hs, Kg;
function OE() {
  if (Kg) return Hs;
  Kg = 1;
  function e(t) {
    return t !== t;
  }
  return (Hs = e), Hs;
}
var zs, Xg;
function PE() {
  if (Xg) return zs;
  Xg = 1;
  function e(t, r, n) {
    for (var i = n - 1, a = t.length; ++i < a; ) if (t[i] === r) return i;
    return -1;
  }
  return (zs = e), zs;
}
var Us, Yg;
function CE() {
  if (Yg) return Us;
  Yg = 1;
  var e = Wx(),
    t = OE(),
    r = PE();
  function n(i, a, o) {
    return a === a ? r(i, a, o) : e(i, t, o);
  }
  return (Us = n), Us;
}
var Gs, Zg;
function AE() {
  if (Zg) return Gs;
  Zg = 1;
  var e = CE();
  function t(r, n) {
    var i = r == null ? 0 : r.length;
    return !!i && e(r, n, 0) > -1;
  }
  return (Gs = t), Gs;
}
var Ws, Jg;
function EE() {
  if (Jg) return Ws;
  Jg = 1;
  function e(t, r, n) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
      if (n(r, t[i])) return !0;
    return !1;
  }
  return (Ws = e), Ws;
}
var Ks, Qg;
function TE() {
  if (Qg) return Ks;
  Qg = 1;
  function e() {}
  return (Ks = e), Ks;
}
var Xs, ev;
function RE() {
  if (ev) return Xs;
  ev = 1;
  var e = zx(),
    t = TE(),
    r = md(),
    n = 1 / 0,
    i =
      e && 1 / r(new e([, -0]))[1] == n
        ? function (a) {
            return new e(a);
          }
        : t;
  return (Xs = i), Xs;
}
var Ys, tv;
function ME() {
  if (tv) return Ys;
  tv = 1;
  var e = Nx(),
    t = AE(),
    r = EE(),
    n = kx(),
    i = RE(),
    a = md(),
    o = 200;
  function u(s, l, f) {
    var c = -1,
      d = t,
      p = s.length,
      v = !0,
      h = [],
      g = h;
    if (f) (v = !1), (d = r);
    else if (p >= o) {
      var y = l ? null : i(s);
      if (y) return a(y);
      (v = !1), (d = n), (g = new e());
    } else g = l ? [] : h;
    e: for (; ++c < p; ) {
      var b = s[c],
        w = l ? l(b) : b;
      if (((b = f || b !== 0 ? b : 0), v && w === w)) {
        for (var _ = g.length; _--; ) if (g[_] === w) continue e;
        l && g.push(w), h.push(b);
      } else d(g, w, f) || (g !== h && g.push(w), h.push(b));
    }
    return h;
  }
  return (Ys = u), Ys;
}
var Zs, rv;
function jE() {
  if (rv) return Zs;
  rv = 1;
  var e = Ut(),
    t = ME();
  function r(n, i) {
    return n && n.length ? t(n, e(i, 2)) : [];
  }
  return (Zs = r), Zs;
}
var IE = jE();
const nv = ge(IE);
function Kx(e, t, r) {
  return t === !0 ? nv(e, r) : ae(t) ? nv(e, t) : e;
}
function Rr(e) {
  "@babel/helpers - typeof";
  return (
    (Rr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Rr(e)
  );
}
var $E = ["ref"];
function iv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function gt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? iv(Object(r), !0).forEach(function (n) {
          Fa(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : iv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function NE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function av(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Yx(n.key), n);
  }
}
function DE(e, t, r) {
  return (
    t && av(e.prototype, t),
    r && av(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function kE(e, t, r) {
  return (
    (t = Li(t)),
    qE(
      e,
      Xx() ? Reflect.construct(t, r || [], Li(e).constructor) : t.apply(e, r),
    )
  );
}
function qE(e, t) {
  if (t && (Rr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return FE(e);
}
function FE(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Xx() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Xx = function () {
    return !!e;
  })();
}
function Li(e) {
  return (
    (Li = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Li(e)
  );
}
function LE(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Kc(e, t);
}
function Kc(e, t) {
  return (
    (Kc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Kc(e, t)
  );
}
function Fa(e, t, r) {
  return (
    (t = Yx(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Yx(e) {
  var t = BE(e, "string");
  return Rr(t) == "symbol" ? t : t + "";
}
function BE(e, t) {
  if (Rr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Rr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function VE(e, t) {
  if (e == null) return {};
  var r = HE(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function HE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function zE(e) {
  return e.value;
}
function UE(e, t) {
  if (I.isValidElement(e)) return I.cloneElement(e, t);
  if (typeof e == "function") return I.createElement(e, t);
  t.ref;
  var r = VE(t, $E);
  return I.createElement(vd, r);
}
var ov = 1,
  Or = (function (e) {
    function t() {
      var r;
      NE(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      return (
        (r = kE(this, t, [].concat(i))),
        Fa(r, "lastBoundingBox", { width: -1, height: -1 }),
        r
      );
    }
    return (
      LE(t, e),
      DE(
        t,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "getBBox",
            value: function () {
              if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var n = this.wrapperNode.getBoundingClientRect();
                return (
                  (n.height = this.wrapperNode.offsetHeight),
                  (n.width = this.wrapperNode.offsetWidth),
                  n
                );
              }
              return null;
            },
          },
          {
            key: "updateBBox",
            value: function () {
              var n = this.props.onBBoxUpdate,
                i = this.getBBox();
              i
                ? (Math.abs(i.width - this.lastBoundingBox.width) > ov ||
                    Math.abs(i.height - this.lastBoundingBox.height) > ov) &&
                  ((this.lastBoundingBox.width = i.width),
                  (this.lastBoundingBox.height = i.height),
                  n && n(i))
                : (this.lastBoundingBox.width !== -1 ||
                    this.lastBoundingBox.height !== -1) &&
                  ((this.lastBoundingBox.width = -1),
                  (this.lastBoundingBox.height = -1),
                  n && n(null));
            },
          },
          {
            key: "getBBoxSnapshot",
            value: function () {
              return this.lastBoundingBox.width >= 0 &&
                this.lastBoundingBox.height >= 0
                ? gt({}, this.lastBoundingBox)
                : { width: 0, height: 0 };
            },
          },
          {
            key: "getDefaultPosition",
            value: function (n) {
              var i = this.props,
                a = i.layout,
                o = i.align,
                u = i.verticalAlign,
                s = i.margin,
                l = i.chartWidth,
                f = i.chartHeight,
                c,
                d;
              if (
                !n ||
                ((n.left === void 0 || n.left === null) &&
                  (n.right === void 0 || n.right === null))
              )
                if (o === "center" && a === "vertical") {
                  var p = this.getBBoxSnapshot();
                  c = { left: ((l || 0) - p.width) / 2 };
                } else
                  c =
                    o === "right"
                      ? { right: (s && s.right) || 0 }
                      : { left: (s && s.left) || 0 };
              if (
                !n ||
                ((n.top === void 0 || n.top === null) &&
                  (n.bottom === void 0 || n.bottom === null))
              )
                if (u === "middle") {
                  var v = this.getBBoxSnapshot();
                  d = { top: ((f || 0) - v.height) / 2 };
                } else
                  d =
                    u === "bottom"
                      ? { bottom: (s && s.bottom) || 0 }
                      : { top: (s && s.top) || 0 };
              return gt(gt({}, c), d);
            },
          },
          {
            key: "render",
            value: function () {
              var n = this,
                i = this.props,
                a = i.content,
                o = i.width,
                u = i.height,
                s = i.wrapperStyle,
                l = i.payloadUniqBy,
                f = i.payload,
                c = gt(
                  gt(
                    {
                      position: "absolute",
                      width: o || "auto",
                      height: u || "auto",
                    },
                    this.getDefaultPosition(s),
                  ),
                  s,
                );
              return I.createElement(
                "div",
                {
                  className: "recharts-legend-wrapper",
                  style: c,
                  ref: function (p) {
                    n.wrapperNode = p;
                  },
                },
                UE(a, gt(gt({}, this.props), {}, { payload: Kx(f, l, zE) })),
              );
            },
          },
        ],
        [
          {
            key: "getWithHeight",
            value: function (n, i) {
              var a = gt(gt({}, this.defaultProps), n.props),
                o = a.layout;
              return o === "vertical" && W(n.props.height)
                ? { height: n.props.height }
                : o === "horizontal"
                  ? { width: n.props.width || i }
                  : null;
            },
          },
        ],
      )
    );
  })(O.PureComponent);
Fa(Or, "displayName", "Legend");
Fa(Or, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom",
});
var Js, uv;
function GE() {
  if (uv) return Js;
  uv = 1;
  var e = ii(),
    t = yd(),
    r = Le(),
    n = e ? e.isConcatSpreadable : void 0;
  function i(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return (Js = i), Js;
}
var Qs, sv;
function Zx() {
  if (sv) return Qs;
  sv = 1;
  var e = Fx(),
    t = GE();
  function r(n, i, a, o, u) {
    var s = -1,
      l = n.length;
    for (a || (a = t), u || (u = []); ++s < l; ) {
      var f = n[s];
      i > 0 && a(f)
        ? i > 1
          ? r(f, i - 1, a, o, u)
          : e(u, f)
        : o || (u[u.length] = f);
    }
    return u;
  }
  return (Qs = r), Qs;
}
var el, lv;
function WE() {
  if (lv) return el;
  lv = 1;
  function e(t) {
    return function (r, n, i) {
      for (var a = -1, o = Object(r), u = i(r), s = u.length; s--; ) {
        var l = u[t ? s : ++a];
        if (n(o[l], l, o) === !1) break;
      }
      return r;
    };
  }
  return (el = e), el;
}
var tl, cv;
function KE() {
  if (cv) return tl;
  cv = 1;
  var e = WE(),
    t = e();
  return (tl = t), tl;
}
var rl, fv;
function Jx() {
  if (fv) return rl;
  fv = 1;
  var e = KE(),
    t = qa();
  function r(n, i) {
    return n && e(n, i, t);
  }
  return (rl = r), rl;
}
var nl, dv;
function XE() {
  if (dv) return nl;
  dv = 1;
  var e = ui();
  function t(r, n) {
    return function (i, a) {
      if (i == null) return i;
      if (!e(i)) return r(i, a);
      for (
        var o = i.length, u = n ? o : -1, s = Object(i);
        (n ? u-- : ++u < o) && a(s[u], u, s) !== !1;

      );
      return i;
    };
  }
  return (nl = t), nl;
}
var il, pv;
function Sd() {
  if (pv) return il;
  pv = 1;
  var e = Jx(),
    t = XE(),
    r = t(e);
  return (il = r), il;
}
var al, hv;
function Qx() {
  if (hv) return al;
  hv = 1;
  var e = Sd(),
    t = ui();
  function r(n, i) {
    var a = -1,
      o = t(n) ? Array(n.length) : [];
    return (
      e(n, function (u, s, l) {
        o[++a] = i(u, s, l);
      }),
      o
    );
  }
  return (al = r), al;
}
var ol, gv;
function YE() {
  if (gv) return ol;
  gv = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; ) t[n] = t[n].value;
    return t;
  }
  return (ol = e), ol;
}
var ul, vv;
function ZE() {
  if (vv) return ul;
  vv = 1;
  var e = Wr();
  function t(r, n) {
    if (r !== n) {
      var i = r !== void 0,
        a = r === null,
        o = r === r,
        u = e(r),
        s = n !== void 0,
        l = n === null,
        f = n === n,
        c = e(n);
      if (
        (!l && !c && !u && r > n) ||
        (u && s && f && !l && !c) ||
        (a && s && f) ||
        (!i && f) ||
        !o
      )
        return 1;
      if (
        (!a && !u && !c && r < n) ||
        (c && i && o && !a && !u) ||
        (l && i && o) ||
        (!s && o) ||
        !f
      )
        return -1;
    }
    return 0;
  }
  return (ul = t), ul;
}
var sl, mv;
function JE() {
  if (mv) return sl;
  mv = 1;
  var e = ZE();
  function t(r, n, i) {
    for (
      var a = -1, o = r.criteria, u = n.criteria, s = o.length, l = i.length;
      ++a < s;

    ) {
      var f = e(o[a], u[a]);
      if (f) {
        if (a >= l) return f;
        var c = i[a];
        return f * (c == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return (sl = t), sl;
}
var ll, yv;
function QE() {
  if (yv) return ll;
  yv = 1;
  var e = sd(),
    t = ld(),
    r = Ut(),
    n = Qx(),
    i = YE(),
    a = Bx(),
    o = JE(),
    u = Xr(),
    s = Le();
  function l(f, c, d) {
    c.length
      ? (c = e(c, function (h) {
          return s(h)
            ? function (g) {
                return t(g, h.length === 1 ? h[0] : h);
              }
            : h;
        }))
      : (c = [u]);
    var p = -1;
    c = e(c, a(r));
    var v = n(f, function (h, g, y) {
      var b = e(c, function (w) {
        return w(h);
      });
      return { criteria: b, index: ++p, value: h };
    });
    return i(v, function (h, g) {
      return o(h, g, d);
    });
  }
  return (ll = l), ll;
}
var cl, bv;
function eT() {
  if (bv) return cl;
  bv = 1;
  function e(t, r, n) {
    switch (n.length) {
      case 0:
        return t.call(r);
      case 1:
        return t.call(r, n[0]);
      case 2:
        return t.call(r, n[0], n[1]);
      case 3:
        return t.call(r, n[0], n[1], n[2]);
    }
    return t.apply(r, n);
  }
  return (cl = e), cl;
}
var fl, xv;
function tT() {
  if (xv) return fl;
  xv = 1;
  var e = eT(),
    t = Math.max;
  function r(n, i, a) {
    return (
      (i = t(i === void 0 ? n.length - 1 : i, 0)),
      function () {
        for (
          var o = arguments, u = -1, s = t(o.length - i, 0), l = Array(s);
          ++u < s;

        )
          l[u] = o[i + u];
        u = -1;
        for (var f = Array(i + 1); ++u < i; ) f[u] = o[u];
        return (f[i] = a(l)), e(n, this, f);
      }
    );
  }
  return (fl = r), fl;
}
var dl, wv;
function rT() {
  if (wv) return dl;
  wv = 1;
  function e(t) {
    return function () {
      return t;
    };
  }
  return (dl = e), dl;
}
var pl, Sv;
function e1() {
  if (Sv) return pl;
  Sv = 1;
  var e = dr(),
    t = (function () {
      try {
        var r = e(Object, "defineProperty");
        return r({}, "", {}), r;
      } catch {}
    })();
  return (pl = t), pl;
}
var hl, _v;
function nT() {
  if (_v) return hl;
  _v = 1;
  var e = rT(),
    t = e1(),
    r = Xr(),
    n = t
      ? function (i, a) {
          return t(i, "toString", {
            configurable: !0,
            enumerable: !1,
            value: e(a),
            writable: !0,
          });
        }
      : r;
  return (hl = n), hl;
}
var gl, Ov;
function iT() {
  if (Ov) return gl;
  Ov = 1;
  var e = 800,
    t = 16,
    r = Date.now;
  function n(i) {
    var a = 0,
      o = 0;
    return function () {
      var u = r(),
        s = t - (u - o);
      if (((o = u), s > 0)) {
        if (++a >= e) return arguments[0];
      } else a = 0;
      return i.apply(void 0, arguments);
    };
  }
  return (gl = n), gl;
}
var vl, Pv;
function aT() {
  if (Pv) return vl;
  Pv = 1;
  var e = nT(),
    t = iT(),
    r = t(e);
  return (vl = r), vl;
}
var ml, Cv;
function oT() {
  if (Cv) return ml;
  Cv = 1;
  var e = Xr(),
    t = tT(),
    r = aT();
  function n(i, a) {
    return r(t(i, a, e), i + "");
  }
  return (ml = n), ml;
}
var yl, Av;
function La() {
  if (Av) return yl;
  Av = 1;
  var e = ad(),
    t = ui(),
    r = bd(),
    n = zt();
  function i(a, o, u) {
    if (!n(u)) return !1;
    var s = typeof o;
    return (s == "number" ? t(u) && r(o, u.length) : s == "string" && o in u)
      ? e(u[o], a)
      : !1;
  }
  return (yl = i), yl;
}
var bl, Ev;
function uT() {
  if (Ev) return bl;
  Ev = 1;
  var e = Zx(),
    t = QE(),
    r = oT(),
    n = La(),
    i = r(function (a, o) {
      if (a == null) return [];
      var u = o.length;
      return (
        u > 1 && n(a, o[0], o[1])
          ? (o = [])
          : u > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]),
        t(a, e(o, 1), [])
      );
    });
  return (bl = i), bl;
}
var sT = uT();
const _d = ge(sT);
function _n(e) {
  "@babel/helpers - typeof";
  return (
    (_n =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    _n(e)
  );
}
function Xc() {
  return (
    (Xc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Xc.apply(this, arguments)
  );
}
function lT(e, t) {
  return pT(e) || dT(e, t) || fT(e, t) || cT();
}
function cT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fT(e, t) {
  if (e) {
    if (typeof e == "string") return Tv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Tv(e, t);
  }
}
function Tv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function dT(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          s = !0
        );
    } catch (f) {
      (l = !0), (i = f);
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function pT(e) {
  if (Array.isArray(e)) return e;
}
function Rv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function xl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Rv(Object(r), !0).forEach(function (n) {
          hT(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Rv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function hT(e, t, r) {
  return (
    (t = gT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function gT(e) {
  var t = vT(e, "string");
  return _n(t) == "symbol" ? t : t + "";
}
function vT(e, t) {
  if (_n(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_n(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mT(e) {
  return Array.isArray(e) && Ee(e[0]) && Ee(e[1]) ? e.join(" ~ ") : e;
}
var yT = function (t) {
  var r = t.separator,
    n = r === void 0 ? " : " : r,
    i = t.contentStyle,
    a = i === void 0 ? {} : i,
    o = t.itemStyle,
    u = o === void 0 ? {} : o,
    s = t.labelStyle,
    l = s === void 0 ? {} : s,
    f = t.payload,
    c = t.formatter,
    d = t.itemSorter,
    p = t.wrapperClassName,
    v = t.labelClassName,
    h = t.label,
    g = t.labelFormatter,
    y = t.accessibilityLayer,
    b = y === void 0 ? !1 : y,
    w = function () {
      if (f && f.length) {
        var T = { padding: 0, margin: 0 },
          M = (d ? _d(f, d) : f).map(function (N, $) {
            if (N.type === "none") return null;
            var k = xl(
                {
                  display: "block",
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: N.color || "#000",
                },
                u,
              ),
              F = N.formatter || c || mT,
              V = N.value,
              H = N.name,
              Z = V,
              J = H;
            if (F && Z != null && J != null) {
              var R = F(V, H, N, $, f);
              if (Array.isArray(R)) {
                var B = lT(R, 2);
                (Z = B[0]), (J = B[1]);
              } else Z = R;
            }
            return I.createElement(
              "li",
              {
                className: "recharts-tooltip-item",
                key: "tooltip-item-".concat($),
                style: k,
              },
              Ee(J)
                ? I.createElement(
                    "span",
                    { className: "recharts-tooltip-item-name" },
                    J,
                  )
                : null,
              Ee(J)
                ? I.createElement(
                    "span",
                    { className: "recharts-tooltip-item-separator" },
                    n,
                  )
                : null,
              I.createElement(
                "span",
                { className: "recharts-tooltip-item-value" },
                Z,
              ),
              I.createElement(
                "span",
                { className: "recharts-tooltip-item-unit" },
                N.unit || "",
              ),
            );
          });
        return I.createElement(
          "ul",
          { className: "recharts-tooltip-item-list", style: T },
          M,
        );
      }
      return null;
    },
    _ = xl(
      {
        margin: 0,
        padding: 10,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        whiteSpace: "nowrap",
      },
      a,
    ),
    m = xl({ margin: 0 }, l),
    x = !ue(h),
    S = x ? h : "",
    P = me("recharts-default-tooltip", p),
    E = me("recharts-tooltip-label", v);
  x && g && f !== void 0 && f !== null && (S = g(h, f));
  var j = b ? { role: "status", "aria-live": "assertive" } : {};
  return I.createElement(
    "div",
    Xc({ className: P, style: _ }, j),
    I.createElement(
      "p",
      { className: E, style: m },
      I.isValidElement(S) ? S : "".concat(S),
    ),
    w(),
  );
};
function On(e) {
  "@babel/helpers - typeof";
  return (
    (On =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    On(e)
  );
}
function bi(e, t, r) {
  return (
    (t = bT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function bT(e) {
  var t = xT(e, "string");
  return On(t) == "symbol" ? t : t + "";
}
function xT(e, t) {
  if (On(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (On(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var tn = "recharts-tooltip-wrapper",
  wT = { visibility: "hidden" };
function ST(e) {
  var t = e.coordinate,
    r = e.translateX,
    n = e.translateY;
  return me(
    tn,
    bi(
      bi(
        bi(
          bi({}, "".concat(tn, "-right"), W(r) && t && W(t.x) && r >= t.x),
          "".concat(tn, "-left"),
          W(r) && t && W(t.x) && r < t.x,
        ),
        "".concat(tn, "-bottom"),
        W(n) && t && W(t.y) && n >= t.y,
      ),
      "".concat(tn, "-top"),
      W(n) && t && W(t.y) && n < t.y,
    ),
  );
}
function Mv(e) {
  var t = e.allowEscapeViewBox,
    r = e.coordinate,
    n = e.key,
    i = e.offsetTopLeft,
    a = e.position,
    o = e.reverseDirection,
    u = e.tooltipDimension,
    s = e.viewBox,
    l = e.viewBoxDimension;
  if (a && W(a[n])) return a[n];
  var f = r[n] - u - i,
    c = r[n] + i;
  if (t[n]) return o[n] ? f : c;
  if (o[n]) {
    var d = f,
      p = s[n];
    return d < p ? Math.max(c, s[n]) : Math.max(f, s[n]);
  }
  var v = c + u,
    h = s[n] + l;
  return v > h ? Math.max(f, s[n]) : Math.max(c, s[n]);
}
function _T(e) {
  var t = e.translateX,
    r = e.translateY,
    n = e.useTranslate3d;
  return {
    transform: n
      ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)")
      : "translate(".concat(t, "px, ").concat(r, "px)"),
  };
}
function OT(e) {
  var t = e.allowEscapeViewBox,
    r = e.coordinate,
    n = e.offsetTopLeft,
    i = e.position,
    a = e.reverseDirection,
    o = e.tooltipBox,
    u = e.useTranslate3d,
    s = e.viewBox,
    l,
    f,
    c;
  return (
    o.height > 0 && o.width > 0 && r
      ? ((f = Mv({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "x",
          offsetTopLeft: n,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.width,
          viewBox: s,
          viewBoxDimension: s.width,
        })),
        (c = Mv({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "y",
          offsetTopLeft: n,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.height,
          viewBox: s,
          viewBoxDimension: s.height,
        })),
        (l = _T({ translateX: f, translateY: c, useTranslate3d: u })))
      : (l = wT),
    {
      cssProperties: l,
      cssClasses: ST({ translateX: f, translateY: c, coordinate: r }),
    }
  );
}
function Mr(e) {
  "@babel/helpers - typeof";
  return (
    (Mr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Mr(e)
  );
}
function jv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Iv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jv(Object(r), !0).forEach(function (n) {
          Zc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : jv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function PT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function CT(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, r1(n.key), n);
  }
}
function AT(e, t, r) {
  return (
    t && CT(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ET(e, t, r) {
  return (
    (t = Bi(t)),
    TT(
      e,
      t1() ? Reflect.construct(t, r || [], Bi(e).constructor) : t.apply(e, r),
    )
  );
}
function TT(e, t) {
  if (t && (Mr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return RT(e);
}
function RT(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function t1() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (t1 = function () {
    return !!e;
  })();
}
function Bi(e) {
  return (
    (Bi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Bi(e)
  );
}
function MT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Yc(e, t);
}
function Yc(e, t) {
  return (
    (Yc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Yc(e, t)
  );
}
function Zc(e, t, r) {
  return (
    (t = r1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function r1(e) {
  var t = jT(e, "string");
  return Mr(t) == "symbol" ? t : t + "";
}
function jT(e, t) {
  if (Mr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var $v = 1,
  IT = (function (e) {
    function t() {
      var r;
      PT(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      return (
        (r = ET(this, t, [].concat(i))),
        Zc(r, "state", {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
          lastBoundingBox: { width: -1, height: -1 },
        }),
        Zc(r, "handleKeyDown", function (o) {
          if (o.key === "Escape") {
            var u, s, l, f;
            r.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x:
                  (u =
                    (s = r.props.coordinate) === null || s === void 0
                      ? void 0
                      : s.x) !== null && u !== void 0
                    ? u
                    : 0,
                y:
                  (l =
                    (f = r.props.coordinate) === null || f === void 0
                      ? void 0
                      : f.y) !== null && l !== void 0
                    ? l
                    : 0,
              },
            });
          }
        }),
        r
      );
    }
    return (
      MT(t, e),
      AT(t, [
        {
          key: "updateBBox",
          value: function () {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var n = this.wrapperNode.getBoundingClientRect();
              (Math.abs(n.width - this.state.lastBoundingBox.width) > $v ||
                Math.abs(n.height - this.state.lastBoundingBox.height) > $v) &&
                this.setState({
                  lastBoundingBox: { width: n.width, height: n.height },
                });
            } else
              (this.state.lastBoundingBox.width !== -1 ||
                this.state.lastBoundingBox.height !== -1) &&
                this.setState({ lastBoundingBox: { width: -1, height: -1 } });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            document.addEventListener("keydown", this.handleKeyDown),
              this.updateBBox();
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            document.removeEventListener("keydown", this.handleKeyDown);
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            var n, i;
            this.props.active && this.updateBBox(),
              this.state.dismissed &&
                (((n = this.props.coordinate) === null || n === void 0
                  ? void 0
                  : n.x) !== this.state.dismissedAtCoordinate.x ||
                  ((i = this.props.coordinate) === null || i === void 0
                    ? void 0
                    : i.y) !== this.state.dismissedAtCoordinate.y) &&
                (this.state.dismissed = !1);
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              i = this.props,
              a = i.active,
              o = i.allowEscapeViewBox,
              u = i.animationDuration,
              s = i.animationEasing,
              l = i.children,
              f = i.coordinate,
              c = i.hasPayload,
              d = i.isAnimationActive,
              p = i.offset,
              v = i.position,
              h = i.reverseDirection,
              g = i.useTranslate3d,
              y = i.viewBox,
              b = i.wrapperStyle,
              w = OT({
                allowEscapeViewBox: o,
                coordinate: f,
                offsetTopLeft: p,
                position: v,
                reverseDirection: h,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: g,
                viewBox: y,
              }),
              _ = w.cssClasses,
              m = w.cssProperties,
              x = Iv(
                Iv(
                  {
                    transition:
                      d && a ? "transform ".concat(u, "ms ").concat(s) : void 0,
                  },
                  m,
                ),
                {},
                {
                  pointerEvents: "none",
                  visibility:
                    !this.state.dismissed && a && c ? "visible" : "hidden",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                b,
              );
            return I.createElement(
              "div",
              {
                tabIndex: -1,
                className: _,
                style: x,
                ref: function (P) {
                  n.wrapperNode = P;
                },
              },
              l,
            );
          },
        },
      ])
    );
  })(O.PureComponent),
  $T = function () {
    return !(
      typeof window < "u" &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    );
  },
  Ba = { isSsr: $T() };
function jr(e) {
  "@babel/helpers - typeof";
  return (
    (jr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    jr(e)
  );
}
function Nv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Dv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nv(Object(r), !0).forEach(function (n) {
          Od(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Nv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function NT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function DT(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, i1(n.key), n);
  }
}
function kT(e, t, r) {
  return (
    t && DT(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function qT(e, t, r) {
  return (
    (t = Vi(t)),
    FT(
      e,
      n1() ? Reflect.construct(t, r || [], Vi(e).constructor) : t.apply(e, r),
    )
  );
}
function FT(e, t) {
  if (t && (jr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return LT(e);
}
function LT(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function n1() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (n1 = function () {
    return !!e;
  })();
}
function Vi(e) {
  return (
    (Vi = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Vi(e)
  );
}
function BT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Jc(e, t);
}
function Jc(e, t) {
  return (
    (Jc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Jc(e, t)
  );
}
function Od(e, t, r) {
  return (
    (t = i1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function i1(e) {
  var t = VT(e, "string");
  return jr(t) == "symbol" ? t : t + "";
}
function VT(e, t) {
  if (jr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (jr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function HT(e) {
  return e.dataKey;
}
function zT(e, t) {
  return I.isValidElement(e)
    ? I.cloneElement(e, t)
    : typeof e == "function"
      ? I.createElement(e, t)
      : I.createElement(yT, t);
}
var mt = (function (e) {
  function t() {
    return NT(this, t), qT(this, t, arguments);
  }
  return (
    BT(t, e),
    kT(t, [
      {
        key: "render",
        value: function () {
          var n = this,
            i = this.props,
            a = i.active,
            o = i.allowEscapeViewBox,
            u = i.animationDuration,
            s = i.animationEasing,
            l = i.content,
            f = i.coordinate,
            c = i.filterNull,
            d = i.isAnimationActive,
            p = i.offset,
            v = i.payload,
            h = i.payloadUniqBy,
            g = i.position,
            y = i.reverseDirection,
            b = i.useTranslate3d,
            w = i.viewBox,
            _ = i.wrapperStyle,
            m = v ?? [];
          c &&
            m.length &&
            (m = Kx(
              v.filter(function (S) {
                return (
                  S.value != null && (S.hide !== !0 || n.props.includeHidden)
                );
              }),
              h,
              HT,
            ));
          var x = m.length > 0;
          return I.createElement(
            IT,
            {
              allowEscapeViewBox: o,
              animationDuration: u,
              animationEasing: s,
              isAnimationActive: d,
              active: a,
              coordinate: f,
              hasPayload: x,
              offset: p,
              position: g,
              reverseDirection: y,
              useTranslate3d: b,
              viewBox: w,
              wrapperStyle: _,
            },
            zT(l, Dv(Dv({}, this.props), {}, { payload: m })),
          );
        },
      },
    ])
  );
})(O.PureComponent);
Od(mt, "displayName", "Tooltip");
Od(mt, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: { x: !1, y: !1 },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: { x: 0, y: 0 },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Ba.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: { x: !1, y: !1 },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: { x: 0, y: 0, height: 0, width: 0 },
  wrapperStyle: {},
});
var wl, kv;
function UT() {
  if (kv) return wl;
  kv = 1;
  var e = ht(),
    t = function () {
      return e.Date.now();
    };
  return (wl = t), wl;
}
var Sl, qv;
function GT() {
  if (qv) return Sl;
  qv = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); );
    return n;
  }
  return (Sl = t), Sl;
}
var _l, Fv;
function WT() {
  if (Fv) return _l;
  Fv = 1;
  var e = GT(),
    t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return (_l = r), _l;
}
var Ol, Lv;
function a1() {
  if (Lv) return Ol;
  Lv = 1;
  var e = WT(),
    t = zt(),
    r = Wr(),
    n = NaN,
    i = /^[-+]0x[0-9a-f]+$/i,
    a = /^0b[01]+$/i,
    o = /^0o[0-7]+$/i,
    u = parseInt;
  function s(l) {
    if (typeof l == "number") return l;
    if (r(l)) return n;
    if (t(l)) {
      var f = typeof l.valueOf == "function" ? l.valueOf() : l;
      l = t(f) ? f + "" : f;
    }
    if (typeof l != "string") return l === 0 ? l : +l;
    l = e(l);
    var c = a.test(l);
    return c || o.test(l) ? u(l.slice(2), c ? 2 : 8) : i.test(l) ? n : +l;
  }
  return (Ol = s), Ol;
}
var Pl, Bv;
function KT() {
  if (Bv) return Pl;
  Bv = 1;
  var e = zt(),
    t = UT(),
    r = a1(),
    n = "Expected a function",
    i = Math.max,
    a = Math.min;
  function o(u, s, l) {
    var f,
      c,
      d,
      p,
      v,
      h,
      g = 0,
      y = !1,
      b = !1,
      w = !0;
    if (typeof u != "function") throw new TypeError(n);
    (s = r(s) || 0),
      e(l) &&
        ((y = !!l.leading),
        (b = "maxWait" in l),
        (d = b ? i(r(l.maxWait) || 0, s) : d),
        (w = "trailing" in l ? !!l.trailing : w));
    function _(M) {
      var N = f,
        $ = c;
      return (f = c = void 0), (g = M), (p = u.apply($, N)), p;
    }
    function m(M) {
      return (g = M), (v = setTimeout(P, s)), y ? _(M) : p;
    }
    function x(M) {
      var N = M - h,
        $ = M - g,
        k = s - N;
      return b ? a(k, d - $) : k;
    }
    function S(M) {
      var N = M - h,
        $ = M - g;
      return h === void 0 || N >= s || N < 0 || (b && $ >= d);
    }
    function P() {
      var M = t();
      if (S(M)) return E(M);
      v = setTimeout(P, x(M));
    }
    function E(M) {
      return (v = void 0), w && f ? _(M) : ((f = c = void 0), p);
    }
    function j() {
      v !== void 0 && clearTimeout(v), (g = 0), (f = h = c = v = void 0);
    }
    function A() {
      return v === void 0 ? p : E(t());
    }
    function T() {
      var M = t(),
        N = S(M);
      if (((f = arguments), (c = this), (h = M), N)) {
        if (v === void 0) return m(h);
        if (b) return clearTimeout(v), (v = setTimeout(P, s)), _(h);
      }
      return v === void 0 && (v = setTimeout(P, s)), p;
    }
    return (T.cancel = j), (T.flush = A), T;
  }
  return (Pl = o), Pl;
}
var Cl, Vv;
function XT() {
  if (Vv) return Cl;
  Vv = 1;
  var e = KT(),
    t = zt(),
    r = "Expected a function";
  function n(i, a, o) {
    var u = !0,
      s = !0;
    if (typeof i != "function") throw new TypeError(r);
    return (
      t(o) &&
        ((u = "leading" in o ? !!o.leading : u),
        (s = "trailing" in o ? !!o.trailing : s)),
      e(i, a, { leading: u, maxWait: a, trailing: s })
    );
  }
  return (Cl = n), Cl;
}
var YT = XT();
const o1 = ge(YT);
function Pn(e) {
  "@babel/helpers - typeof";
  return (
    (Pn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Pn(e)
  );
}
function Hv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function xi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hv(Object(r), !0).forEach(function (n) {
          ZT(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Hv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ZT(e, t, r) {
  return (
    (t = JT(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function JT(e) {
  var t = QT(e, "string");
  return Pn(t) == "symbol" ? t : t + "";
}
function QT(e, t) {
  if (Pn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function eR(e, t) {
  return iR(e) || nR(e, t) || rR(e, t) || tR();
}
function tR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rR(e, t) {
  if (e) {
    if (typeof e == "string") return zv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return zv(e, t);
  }
}
function zv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function nR(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          s = !0
        );
    } catch (f) {
      (l = !0), (i = f);
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function iR(e) {
  if (Array.isArray(e)) return e;
}
var gL = O.forwardRef(function (e, t) {
    var r = e.aspect,
      n = e.initialDimension,
      i = n === void 0 ? { width: -1, height: -1 } : n,
      a = e.width,
      o = a === void 0 ? "100%" : a,
      u = e.height,
      s = u === void 0 ? "100%" : u,
      l = e.minWidth,
      f = l === void 0 ? 0 : l,
      c = e.minHeight,
      d = e.maxHeight,
      p = e.children,
      v = e.debounce,
      h = v === void 0 ? 0 : v,
      g = e.id,
      y = e.className,
      b = e.onResize,
      w = e.style,
      _ = w === void 0 ? {} : w,
      m = O.useRef(null),
      x = O.useRef();
    (x.current = b),
      O.useImperativeHandle(t, function () {
        return Object.defineProperty(m.current, "current", {
          get: function () {
            return (
              console.warn(
                "The usage of ref.current.current is deprecated and will no longer be supported.",
              ),
              m.current
            );
          },
          configurable: !0,
        });
      });
    var S = O.useState({ containerWidth: i.width, containerHeight: i.height }),
      P = eR(S, 2),
      E = P[0],
      j = P[1],
      A = O.useCallback(function (M, N) {
        j(function ($) {
          var k = Math.round(M),
            F = Math.round(N);
          return $.containerWidth === k && $.containerHeight === F
            ? $
            : { containerWidth: k, containerHeight: F };
        });
      }, []);
    O.useEffect(
      function () {
        var M = function (H) {
          var Z,
            J = H[0].contentRect,
            R = J.width,
            B = J.height;
          A(R, B), (Z = x.current) === null || Z === void 0 || Z.call(x, R, B);
        };
        h > 0 && (M = o1(M, h, { trailing: !0, leading: !1 }));
        var N = new ResizeObserver(M),
          $ = m.current.getBoundingClientRect(),
          k = $.width,
          F = $.height;
        return (
          A(k, F),
          N.observe(m.current),
          function () {
            N.disconnect();
          }
        );
      },
      [A, h],
    );
    var T = O.useMemo(
      function () {
        var M = E.containerWidth,
          N = E.containerHeight;
        if (M < 0 || N < 0) return null;
        nr(
          er(o) || er(s),
          `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
          o,
          s,
        ),
          nr(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
        var $ = er(o) ? M : o,
          k = er(s) ? N : s;
        r &&
          r > 0 &&
          ($ ? (k = $ / r) : k && ($ = k * r), d && k > d && (k = d)),
          nr(
            $ > 0 || k > 0,
            `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
            $,
            k,
            o,
            s,
            f,
            c,
            r,
          );
        var F = !Array.isArray(p) && wt(p.type).endsWith("Chart");
        return I.Children.map(p, function (V) {
          return I.isValidElement(V)
            ? O.cloneElement(
                V,
                xi(
                  { width: $, height: k },
                  F
                    ? {
                        style: xi(
                          {
                            height: "100%",
                            width: "100%",
                            maxHeight: k,
                            maxWidth: $,
                          },
                          V.props.style,
                        ),
                      }
                    : {},
                ),
              )
            : V;
        });
      },
      [r, p, s, d, c, f, E, o],
    );
    return I.createElement(
      "div",
      {
        id: g ? "".concat(g) : void 0,
        className: me("recharts-responsive-container", y),
        style: xi(
          xi({}, _),
          {},
          { width: o, height: s, minWidth: f, minHeight: c, maxHeight: d },
        ),
        ref: m,
      },
      T,
    );
  }),
  u1 = function (t) {
    return null;
  };
u1.displayName = "Cell";
function Cn(e) {
  "@babel/helpers - typeof";
  return (
    (Cn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Cn(e)
  );
}
function Uv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Qc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Uv(Object(r), !0).forEach(function (n) {
          aR(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Uv(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function aR(e, t, r) {
  return (
    (t = oR(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function oR(e) {
  var t = uR(e, "string");
  return Cn(t) == "symbol" ? t : t + "";
}
function uR(e, t) {
  if (Cn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Cn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var yr = { widthCache: {}, cacheCount: 0 },
  sR = 2e3,
  lR = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre",
  },
  Gv = "recharts_measurement_span";
function cR(e) {
  var t = Qc({}, e);
  return (
    Object.keys(t).forEach(function (r) {
      t[r] || delete t[r];
    }),
    t
  );
}
var Wv = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t == null || Ba.isSsr) return { width: 0, height: 0 };
    var n = cR(r),
      i = JSON.stringify({ text: t, copyStyle: n });
    if (yr.widthCache[i]) return yr.widthCache[i];
    try {
      var a = document.getElementById(Gv);
      a ||
        ((a = document.createElement("span")),
        a.setAttribute("id", Gv),
        a.setAttribute("aria-hidden", "true"),
        document.body.appendChild(a));
      var o = Qc(Qc({}, lR), n);
      Object.assign(a.style, o), (a.textContent = "".concat(t));
      var u = a.getBoundingClientRect(),
        s = { width: u.width, height: u.height };
      return (
        (yr.widthCache[i] = s),
        ++yr.cacheCount > sR && ((yr.cacheCount = 0), (yr.widthCache = {})),
        s
      );
    } catch {
      return { width: 0, height: 0 };
    }
  },
  fR = function (t) {
    return {
      top: t.top + window.scrollY - document.documentElement.clientTop,
      left: t.left + window.scrollX - document.documentElement.clientLeft,
    };
  };
function An(e) {
  "@babel/helpers - typeof";
  return (
    (An =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    An(e)
  );
}
function Hi(e, t) {
  return gR(e) || hR(e, t) || pR(e, t) || dR();
}
function dR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pR(e, t) {
  if (e) {
    if (typeof e == "string") return Kv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Kv(e, t);
  }
}
function Kv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function hR(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        s = !1;
      } else
        for (
          ;
          !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          s = !0
        );
    } catch (f) {
      (l = !0), (i = f);
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function gR(e) {
  if (Array.isArray(e)) return e;
}
function vR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Xv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, yR(n.key), n);
  }
}
function mR(e, t, r) {
  return (
    t && Xv(e.prototype, t),
    r && Xv(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function yR(e) {
  var t = bR(e, "string");
  return An(t) == "symbol" ? t : t + "";
}
function bR(e, t) {
  if (An(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (An(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Yv = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  Zv = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  xR = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  wR = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  s1 = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    in: 96,
    Q: 96 / (2.54 * 40),
    px: 1,
  },
  SR = Object.keys(s1),
  Sr = "NaN";
function _R(e, t) {
  return e * s1[t];
}
var wi = (function () {
  function e(t, r) {
    vR(this, e),
      (this.num = t),
      (this.unit = r),
      (this.num = t),
      (this.unit = r),
      Number.isNaN(t) && (this.unit = ""),
      r !== "" && !xR.test(r) && ((this.num = NaN), (this.unit = "")),
      SR.includes(r) && ((this.num = _R(t, r)), (this.unit = "px"));
  }
  return mR(
    e,
    [
      {
        key: "add",
        value: function (r) {
          return this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num + r.num, this.unit);
        },
      },
      {
        key: "subtract",
        value: function (r) {
          return this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num - r.num, this.unit);
        },
      },
      {
        key: "multiply",
        value: function (r) {
          return this.unit !== "" && r.unit !== "" && this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num * r.num, this.unit || r.unit);
        },
      },
      {
        key: "divide",
        value: function (r) {
          return this.unit !== "" && r.unit !== "" && this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num / r.num, this.unit || r.unit);
        },
      },
      {
        key: "toString",
        value: function () {
          return "".concat(this.num).concat(this.unit);
        },
      },
      {
        key: "isNaN",
        value: function () {
          return Number.isNaN(this.num);
        },
      },
    ],
    [
      {
        key: "parse",
        value: function (r) {
          var n,
            i = (n = wR.exec(r)) !== null && n !== void 0 ? n : [],
            a = Hi(i, 3),
            o = a[1],
            u = a[2];
          return new e(parseFloat(o), u ?? "");
        },
      },
    ],
  );
})();
function l1(e) {
  if (e.includes(Sr)) return Sr;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r,
      n = (r = Yv.exec(t)) !== null && r !== void 0 ? r : [],
      i = Hi(n, 4),
      a = i[1],
      o = i[2],
      u = i[3],
      s = wi.parse(a ?? ""),
      l = wi.parse(u ?? ""),
      f = o === "*" ? s.multiply(l) : s.divide(l);
    if (f.isNaN()) return Sr;
    t = t.replace(Yv, f.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var c,
      d = (c = Zv.exec(t)) !== null && c !== void 0 ? c : [],
      p = Hi(d, 4),
      v = p[1],
      h = p[2],
      g = p[3],
      y = wi.parse(v ?? ""),
      b = wi.parse(g ?? ""),
      w = h === "+" ? y.add(b) : y.subtract(b);
    if (w.isNaN()) return Sr;
    t = t.replace(Zv, w.toString());
  }
  return t;
}
var Jv = /\(([^()]*)\)/;
function OR(e) {
  for (var t = e; t.includes("("); ) {
    var r = Jv.exec(t),
      n = Hi(r, 2),
      i = n[1];
    t = t.replace(Jv, l1(i));
  }
  return t;
}
function PR(e) {
  var t = e.replace(/\s+/g, "");
  return (t = OR(t)), (t = l1(t)), t;
}
function CR(e) {
  try {
    return PR(e);
  } catch {
    return Sr;
  }
}
function Al(e) {
  var t = CR(e.slice(5, -1));
  return t === Sr ? "" : t;
}
var AR = [
    "x",
    "y",
    "lineHeight",
    "capHeight",
    "scaleToFit",
    "textAnchor",
    "verticalAnchor",
    "fill",
  ],
  ER = ["dx", "dy", "angle", "className", "breakAll"];
function ef() {
  return (
    (ef = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ef.apply(this, arguments)
  );
}
function Qv(e, t) {
  if (e == null) return {};
  var r = TR(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function TR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function em(e, t) {
  return IR(e) || jR(e, t) || MR(e, t) || RR();
}
function RR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MR(e, t) {
  if (e) {
    if (typeof e == "string") return tm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return tm(e, t);
  }
}
function tm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function jR(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        s = !1;
      } else
        for (
          ;
          !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          s = !0
        );
    } catch (f) {
      (l = !0), (i = f);
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function IR(e) {
  if (Array.isArray(e)) return e;
}
var c1 = /[ \f\n\r\t\v\u2028\u2029]+/,
  f1 = function (t) {
    var r = t.children,
      n = t.breakAll,
      i = t.style;
    try {
      var a = [];
      ue(r) ||
        (n ? (a = r.toString().split("")) : (a = r.toString().split(c1)));
      var o = a.map(function (s) {
          return { word: s, width: Wv(s, i).width };
        }),
        u = n ? 0 : Wv(" ", i).width;
      return { wordsWithComputedWidth: o, spaceWidth: u };
    } catch {
      return null;
    }
  },
  $R = function (t, r, n, i, a) {
    var o = t.maxLines,
      u = t.children,
      s = t.style,
      l = t.breakAll,
      f = W(o),
      c = u,
      d = function () {
        var $ =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return $.reduce(function (k, F) {
          var V = F.word,
            H = F.width,
            Z = k[k.length - 1];
          if (Z && (i == null || a || Z.width + H + n < Number(i)))
            Z.words.push(V), (Z.width += H + n);
          else {
            var J = { words: [V], width: H };
            k.push(J);
          }
          return k;
        }, []);
      },
      p = d(r),
      v = function ($) {
        return $.reduce(function (k, F) {
          return k.width > F.width ? k : F;
        });
      };
    if (!f) return p;
    for (
      var h = "…",
        g = function ($) {
          var k = c.slice(0, $),
            F = f1({
              breakAll: l,
              style: s,
              children: k + h,
            }).wordsWithComputedWidth,
            V = d(F),
            H = V.length > o || v(V).width > Number(i);
          return [H, V];
        },
        y = 0,
        b = c.length - 1,
        w = 0,
        _;
      y <= b && w <= c.length - 1;

    ) {
      var m = Math.floor((y + b) / 2),
        x = m - 1,
        S = g(x),
        P = em(S, 2),
        E = P[0],
        j = P[1],
        A = g(m),
        T = em(A, 1),
        M = T[0];
      if ((!E && !M && (y = m + 1), E && M && (b = m - 1), !E && M)) {
        _ = j;
        break;
      }
      w++;
    }
    return _ || p;
  },
  rm = function (t) {
    var r = ue(t) ? [] : t.toString().split(c1);
    return [{ words: r }];
  },
  NR = function (t) {
    var r = t.width,
      n = t.scaleToFit,
      i = t.children,
      a = t.style,
      o = t.breakAll,
      u = t.maxLines;
    if ((r || n) && !Ba.isSsr) {
      var s,
        l,
        f = f1({ breakAll: o, children: i, style: a });
      if (f) {
        var c = f.wordsWithComputedWidth,
          d = f.spaceWidth;
        (s = c), (l = d);
      } else return rm(i);
      return $R(
        { breakAll: o, children: i, maxLines: u, style: a },
        s,
        l,
        r,
        n,
      );
    }
    return rm(i);
  },
  nm = "#808080",
  tf = function (t) {
    var r = t.x,
      n = r === void 0 ? 0 : r,
      i = t.y,
      a = i === void 0 ? 0 : i,
      o = t.lineHeight,
      u = o === void 0 ? "1em" : o,
      s = t.capHeight,
      l = s === void 0 ? "0.71em" : s,
      f = t.scaleToFit,
      c = f === void 0 ? !1 : f,
      d = t.textAnchor,
      p = d === void 0 ? "start" : d,
      v = t.verticalAnchor,
      h = v === void 0 ? "end" : v,
      g = t.fill,
      y = g === void 0 ? nm : g,
      b = Qv(t, AR),
      w = O.useMemo(
        function () {
          return NR({
            breakAll: b.breakAll,
            children: b.children,
            maxLines: b.maxLines,
            scaleToFit: c,
            style: b.style,
            width: b.width,
          });
        },
        [b.breakAll, b.children, b.maxLines, c, b.style, b.width],
      ),
      _ = b.dx,
      m = b.dy,
      x = b.angle,
      S = b.className,
      P = b.breakAll,
      E = Qv(b, ER);
    if (!Ee(n) || !Ee(a)) return null;
    var j = n + (W(_) ? _ : 0),
      A = a + (W(m) ? m : 0),
      T;
    switch (h) {
      case "start":
        T = Al("calc(".concat(l, ")"));
        break;
      case "middle":
        T = Al(
          "calc("
            .concat((w.length - 1) / 2, " * -")
            .concat(u, " + (")
            .concat(l, " / 2))"),
        );
        break;
      default:
        T = Al("calc(".concat(w.length - 1, " * -").concat(u, ")"));
        break;
    }
    var M = [];
    if (c) {
      var N = w[0].width,
        $ = b.width;
      M.push("scale(".concat((W($) ? $ / N : 1) / N, ")"));
    }
    return (
      x && M.push("rotate(".concat(x, ", ").concat(j, ", ").concat(A, ")")),
      M.length && (E.transform = M.join(" ")),
      I.createElement(
        "text",
        ef({}, ye(E, !0), {
          x: j,
          y: A,
          className: me("recharts-text", S),
          textAnchor: p,
          fill: y.includes("url") ? nm : y,
        }),
        w.map(function (k, F) {
          var V = k.words.join(P ? "" : " ");
          return I.createElement(
            "tspan",
            { x: j, dy: F === 0 ? T : u, key: "".concat(V, "-").concat(F) },
            V,
          );
        }),
      )
    );
  };
function Nt(e, t) {
  return e == null || t == null
    ? NaN
    : e < t
      ? -1
      : e > t
        ? 1
        : e >= t
          ? 0
          : NaN;
}
function DR(e, t) {
  return e == null || t == null
    ? NaN
    : t < e
      ? -1
      : t > e
        ? 1
        : t >= e
          ? 0
          : NaN;
}
function Pd(e) {
  let t, r, n;
  e.length !== 2
    ? ((t = Nt), (r = (u, s) => Nt(e(u), s)), (n = (u, s) => e(u) - s))
    : ((t = e === Nt || e === DR ? e : kR), (r = e), (n = e));
  function i(u, s, l = 0, f = u.length) {
    if (l < f) {
      if (t(s, s) !== 0) return f;
      do {
        const c = (l + f) >>> 1;
        r(u[c], s) < 0 ? (l = c + 1) : (f = c);
      } while (l < f);
    }
    return l;
  }
  function a(u, s, l = 0, f = u.length) {
    if (l < f) {
      if (t(s, s) !== 0) return f;
      do {
        const c = (l + f) >>> 1;
        r(u[c], s) <= 0 ? (l = c + 1) : (f = c);
      } while (l < f);
    }
    return l;
  }
  function o(u, s, l = 0, f = u.length) {
    const c = i(u, s, l, f - 1);
    return c > l && n(u[c - 1], s) > -n(u[c], s) ? c - 1 : c;
  }
  return { left: i, center: o, right: a };
}
function kR() {
  return 0;
}
function d1(e) {
  return e === null ? NaN : +e;
}
function* qR(e, t) {
  for (let r of e) r != null && (r = +r) >= r && (yield r);
}
const FR = Pd(Nt),
  si = FR.right;
Pd(d1).center;
class im extends Map {
  constructor(t, r = VR) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: r },
      }),
      t != null)
    )
      for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(am(this, t));
  }
  has(t) {
    return super.has(am(this, t));
  }
  set(t, r) {
    return super.set(LR(this, t), r);
  }
  delete(t) {
    return super.delete(BR(this, t));
  }
}
function am({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function LR({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function BR({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && ((r = e.get(n)), e.delete(n)), r;
}
function VR(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function HR(e = Nt) {
  if (e === Nt) return p1;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function p1(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : e > t ? 1 : 0)
  );
}
const zR = Math.sqrt(50),
  UR = Math.sqrt(10),
  GR = Math.sqrt(2);
function zi(e, t, r) {
  const n = (t - e) / Math.max(0, r),
    i = Math.floor(Math.log10(n)),
    a = n / Math.pow(10, i),
    o = a >= zR ? 10 : a >= UR ? 5 : a >= GR ? 2 : 1;
  let u, s, l;
  return (
    i < 0
      ? ((l = Math.pow(10, -i) / o),
        (u = Math.round(e * l)),
        (s = Math.round(t * l)),
        u / l < e && ++u,
        s / l > t && --s,
        (l = -l))
      : ((l = Math.pow(10, i) * o),
        (u = Math.round(e / l)),
        (s = Math.round(t / l)),
        u * l < e && ++u,
        s * l > t && --s),
    s < u && 0.5 <= r && r < 2 ? zi(e, t, r * 2) : [u, s, l]
  );
}
function rf(e, t, r) {
  if (((t = +t), (e = +e), (r = +r), !(r > 0))) return [];
  if (e === t) return [e];
  const n = t < e,
    [i, a, o] = n ? zi(t, e, r) : zi(e, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1,
    s = new Array(u);
  if (n)
    if (o < 0) for (let l = 0; l < u; ++l) s[l] = (a - l) / -o;
    else for (let l = 0; l < u; ++l) s[l] = (a - l) * o;
  else if (o < 0) for (let l = 0; l < u; ++l) s[l] = (i + l) / -o;
  else for (let l = 0; l < u; ++l) s[l] = (i + l) * o;
  return s;
}
function nf(e, t, r) {
  return (t = +t), (e = +e), (r = +r), zi(e, t, r)[2];
}
function af(e, t, r) {
  (t = +t), (e = +e), (r = +r);
  const n = t < e,
    i = n ? nf(t, e, r) : nf(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function om(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || (r === void 0 && n >= n)) && (r = n);
  return r;
}
function um(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || (r === void 0 && n >= n)) && (r = n);
  return r;
}
function h1(e, t, r = 0, n = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (r = Math.floor(Math.max(0, r))),
    (n = Math.floor(Math.min(e.length - 1, n))),
    !(r <= t && t <= n))
  )
    return e;
  for (i = i === void 0 ? p1 : HR(i); n > r; ) {
    if (n - r > 600) {
      const s = n - r + 1,
        l = t - r + 1,
        f = Math.log(s),
        c = 0.5 * Math.exp((2 * f) / 3),
        d = 0.5 * Math.sqrt((f * c * (s - c)) / s) * (l - s / 2 < 0 ? -1 : 1),
        p = Math.max(r, Math.floor(t - (l * c) / s + d)),
        v = Math.min(n, Math.floor(t + ((s - l) * c) / s + d));
      h1(e, t, p, v, i);
    }
    const a = e[t];
    let o = r,
      u = n;
    for (rn(e, r, t), i(e[n], a) > 0 && rn(e, r, n); o < u; ) {
      for (rn(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o;
      for (; i(e[u], a) > 0; ) --u;
    }
    i(e[r], a) === 0 ? rn(e, r, u) : (++u, rn(e, u, n)),
      u <= t && (r = u + 1),
      t <= u && (n = u - 1);
  }
  return e;
}
function rn(e, t, r) {
  const n = e[t];
  (e[t] = e[r]), (e[r] = n);
}
function WR(e, t, r) {
  if (((e = Float64Array.from(qR(e))), !(!(n = e.length) || isNaN((t = +t))))) {
    if (t <= 0 || n < 2) return um(e);
    if (t >= 1) return om(e);
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = om(h1(e, a).subarray(0, a + 1)),
      u = um(e.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function KR(e, t, r = d1) {
  if (!(!(n = e.length) || isNaN((t = +t)))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = +r(e[a], a, e),
      u = +r(e[a + 1], a + 1, e);
    return o + (u - o) * (i - a);
  }
}
function XR(e, t, r) {
  (e = +e),
    (t = +t),
    (r = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +r);
  for (
    var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i);
    ++n < i;

  )
    a[n] = e + n * r;
  return a;
}
function Ye(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Et(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e),
        typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const of = Symbol("implicit");
function Cd() {
  var e = new im(),
    t = [],
    r = [],
    n = of;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== of) return n;
      e.set(a, (o = t.push(a) - 1));
    }
    return r[o % r.length];
  }
  return (
    (i.domain = function (a) {
      if (!arguments.length) return t.slice();
      (t = []), (e = new im());
      for (const o of a) e.has(o) || e.set(o, t.push(o) - 1);
      return i;
    }),
    (i.range = function (a) {
      return arguments.length ? ((r = Array.from(a)), i) : r.slice();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return Cd(t, r).unknown(n);
    }),
    Ye.apply(i, arguments),
    i
  );
}
function En() {
  var e = Cd().unknown(void 0),
    t = e.domain,
    r = e.range,
    n = 0,
    i = 1,
    a,
    o,
    u = !1,
    s = 0,
    l = 0,
    f = 0.5;
  delete e.unknown;
  function c() {
    var d = t().length,
      p = i < n,
      v = p ? i : n,
      h = p ? n : i;
    (a = (h - v) / Math.max(1, d - s + l * 2)),
      u && (a = Math.floor(a)),
      (v += (h - v - a * (d - s)) * f),
      (o = a * (1 - s)),
      u && ((v = Math.round(v)), (o = Math.round(o)));
    var g = XR(d).map(function (y) {
      return v + a * y;
    });
    return r(p ? g.reverse() : g);
  }
  return (
    (e.domain = function (d) {
      return arguments.length ? (t(d), c()) : t();
    }),
    (e.range = function (d) {
      return arguments.length
        ? (([n, i] = d), (n = +n), (i = +i), c())
        : [n, i];
    }),
    (e.rangeRound = function (d) {
      return ([n, i] = d), (n = +n), (i = +i), (u = !0), c();
    }),
    (e.bandwidth = function () {
      return o;
    }),
    (e.step = function () {
      return a;
    }),
    (e.round = function (d) {
      return arguments.length ? ((u = !!d), c()) : u;
    }),
    (e.padding = function (d) {
      return arguments.length ? ((s = Math.min(1, (l = +d))), c()) : s;
    }),
    (e.paddingInner = function (d) {
      return arguments.length ? ((s = Math.min(1, d)), c()) : s;
    }),
    (e.paddingOuter = function (d) {
      return arguments.length ? ((l = +d), c()) : l;
    }),
    (e.align = function (d) {
      return arguments.length ? ((f = Math.max(0, Math.min(1, d))), c()) : f;
    }),
    (e.copy = function () {
      return En(t(), [n, i]).round(u).paddingInner(s).paddingOuter(l).align(f);
    }),
    Ye.apply(c(), arguments)
  );
}
function g1(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return g1(t());
    }),
    e
  );
}
function mn() {
  return g1(En.apply(null, arguments).paddingInner(1));
}
function Ad(e, t, r) {
  (e.prototype = t.prototype = r), (r.constructor = e);
}
function v1(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function li() {}
var Tn = 0.7,
  Ui = 1 / Tn,
  Pr = "\\s*([+-]?\\d+)\\s*",
  Rn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  ct = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  YR = /^#([0-9a-f]{3,8})$/,
  ZR = new RegExp(`^rgb\\(${Pr},${Pr},${Pr}\\)$`),
  JR = new RegExp(`^rgb\\(${ct},${ct},${ct}\\)$`),
  QR = new RegExp(`^rgba\\(${Pr},${Pr},${Pr},${Rn}\\)$`),
  eM = new RegExp(`^rgba\\(${ct},${ct},${ct},${Rn}\\)$`),
  tM = new RegExp(`^hsl\\(${Rn},${ct},${ct}\\)$`),
  rM = new RegExp(`^hsla\\(${Rn},${ct},${ct},${Rn}\\)$`),
  sm = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Ad(li, Mn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: lm,
  formatHex: lm,
  formatHex8: nM,
  formatHsl: iM,
  formatRgb: cm,
  toString: cm,
});
function lm() {
  return this.rgb().formatHex();
}
function nM() {
  return this.rgb().formatHex8();
}
function iM() {
  return m1(this).formatHsl();
}
function cm() {
  return this.rgb().formatRgb();
}
function Mn(e) {
  var t, r;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = YR.exec(e))
      ? ((r = t[1].length),
        (t = parseInt(t[1], 16)),
        r === 6
          ? fm(t)
          : r === 3
            ? new Fe(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : r === 8
              ? Si(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : r === 4
                ? Si(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = ZR.exec(e))
        ? new Fe(t[1], t[2], t[3], 1)
        : (t = JR.exec(e))
          ? new Fe(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = QR.exec(e))
            ? Si(t[1], t[2], t[3], t[4])
            : (t = eM.exec(e))
              ? Si(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = tM.exec(e))
                ? hm(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = rM.exec(e))
                  ? hm(t[1], t[2] / 100, t[3] / 100, t[4])
                  : sm.hasOwnProperty(e)
                    ? fm(sm[e])
                    : e === "transparent"
                      ? new Fe(NaN, NaN, NaN, 0)
                      : null
  );
}
function fm(e) {
  return new Fe((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function Si(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Fe(e, t, r, n);
}
function aM(e) {
  return (
    e instanceof li || (e = Mn(e)),
    e ? ((e = e.rgb()), new Fe(e.r, e.g, e.b, e.opacity)) : new Fe()
  );
}
function uf(e, t, r, n) {
  return arguments.length === 1 ? aM(e) : new Fe(e, t, r, n ?? 1);
}
function Fe(e, t, r, n) {
  (this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n);
}
Ad(
  Fe,
  uf,
  v1(li, {
    brighter(e) {
      return (
        (e = e == null ? Ui : Math.pow(Ui, e)),
        new Fe(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Tn : Math.pow(Tn, e)),
        new Fe(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Fe(ir(this.r), ir(this.g), ir(this.b), Gi(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: dm,
    formatHex: dm,
    formatHex8: oM,
    formatRgb: pm,
    toString: pm,
  }),
);
function dm() {
  return `#${tr(this.r)}${tr(this.g)}${tr(this.b)}`;
}
function oM() {
  return `#${tr(this.r)}${tr(this.g)}${tr(this.b)}${tr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function pm() {
  const e = Gi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ir(this.r)}, ${ir(this.g)}, ${ir(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Gi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ir(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function tr(e) {
  return (e = ir(e)), (e < 16 ? "0" : "") + e.toString(16);
}
function hm(e, t, r, n) {
  return (
    n <= 0
      ? (e = t = r = NaN)
      : r <= 0 || r >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new tt(e, t, r, n)
  );
}
function m1(e) {
  if (e instanceof tt) return new tt(e.h, e.s, e.l, e.opacity);
  if ((e instanceof li || (e = Mn(e)), !e)) return new tt();
  if (e instanceof tt) return e;
  e = e.rgb();
  var t = e.r / 255,
    r = e.g / 255,
    n = e.b / 255,
    i = Math.min(t, r, n),
    a = Math.max(t, r, n),
    o = NaN,
    u = a - i,
    s = (a + i) / 2;
  return (
    u
      ? (t === a
          ? (o = (r - n) / u + (r < n) * 6)
          : r === a
            ? (o = (n - t) / u + 2)
            : (o = (t - r) / u + 4),
        (u /= s < 0.5 ? a + i : 2 - a - i),
        (o *= 60))
      : (u = s > 0 && s < 1 ? 0 : o),
    new tt(o, u, s, e.opacity)
  );
}
function uM(e, t, r, n) {
  return arguments.length === 1 ? m1(e) : new tt(e, t, r, n ?? 1);
}
function tt(e, t, r, n) {
  (this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n);
}
Ad(
  tt,
  uM,
  v1(li, {
    brighter(e) {
      return (
        (e = e == null ? Ui : Math.pow(Ui, e)),
        new tt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Tn : Math.pow(Tn, e)),
        new tt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        r = this.l,
        n = r + (r < 0.5 ? r : 1 - r) * t,
        i = 2 * r - n;
      return new Fe(
        El(e >= 240 ? e - 240 : e + 120, i, n),
        El(e, i, n),
        El(e < 120 ? e + 240 : e - 120, i, n),
        this.opacity,
      );
    },
    clamp() {
      return new tt(gm(this.h), _i(this.s), _i(this.l), Gi(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = Gi(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${gm(this.h)}, ${_i(this.s) * 100}%, ${_i(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  }),
);
function gm(e) {
  return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}
function _i(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function El(e, t, r) {
  return (
    (e < 60
      ? t + ((r - t) * e) / 60
      : e < 180
        ? r
        : e < 240
          ? t + ((r - t) * (240 - e)) / 60
          : t) * 255
  );
}
const Ed = (e) => () => e;
function sM(e, t) {
  return function (r) {
    return e + r * t;
  };
}
function lM(e, t, r) {
  return (
    (e = Math.pow(e, r)),
    (t = Math.pow(t, r) - e),
    (r = 1 / r),
    function (n) {
      return Math.pow(e + n * t, r);
    }
  );
}
function cM(e) {
  return (e = +e) == 1
    ? y1
    : function (t, r) {
        return r - t ? lM(t, r, e) : Ed(isNaN(t) ? r : t);
      };
}
function y1(e, t) {
  var r = t - e;
  return r ? sM(e, r) : Ed(isNaN(e) ? t : e);
}
const vm = (function e(t) {
  var r = cM(t);
  function n(i, a) {
    var o = r((i = uf(i)).r, (a = uf(a)).r),
      u = r(i.g, a.g),
      s = r(i.b, a.b),
      l = y1(i.opacity, a.opacity);
    return function (f) {
      return (
        (i.r = o(f)), (i.g = u(f)), (i.b = s(f)), (i.opacity = l(f)), i + ""
      );
    };
  }
  return (n.gamma = e), n;
})(1);
function fM(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0,
    n = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function dM(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function pM(e, t) {
  var r = t ? t.length : 0,
    n = e ? Math.min(r, e.length) : 0,
    i = new Array(n),
    a = new Array(r),
    o;
  for (o = 0; o < n; ++o) i[o] = Yr(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function (u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function hM(e, t) {
  var r = new Date();
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return r.setTime(e * (1 - n) + t * n), r;
    }
  );
}
function Wi(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return e * (1 - r) + t * r;
    }
  );
}
function gM(e, t) {
  var r = {},
    n = {},
    i;
  (e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {});
  for (i in t) i in e ? (r[i] = Yr(e[i], t[i])) : (n[i] = t[i]);
  return function (a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var sf = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Tl = new RegExp(sf.source, "g");
function vM(e) {
  return function () {
    return e;
  };
}
function mM(e) {
  return function (t) {
    return e(t) + "";
  };
}
function yM(e, t) {
  var r = (sf.lastIndex = Tl.lastIndex = 0),
    n,
    i,
    a,
    o = -1,
    u = [],
    s = [];
  for (e = e + "", t = t + ""; (n = sf.exec(e)) && (i = Tl.exec(t)); )
    (a = i.index) > r &&
      ((a = t.slice(r, a)), u[o] ? (u[o] += a) : (u[++o] = a)),
      (n = n[0]) === (i = i[0])
        ? u[o]
          ? (u[o] += i)
          : (u[++o] = i)
        : ((u[++o] = null), s.push({ i: o, x: Wi(n, i) })),
      (r = Tl.lastIndex);
  return (
    r < t.length && ((a = t.slice(r)), u[o] ? (u[o] += a) : (u[++o] = a)),
    u.length < 2
      ? s[0]
        ? mM(s[0].x)
        : vM(t)
      : ((t = s.length),
        function (l) {
          for (var f = 0, c; f < t; ++f) u[(c = s[f]).i] = c.x(l);
          return u.join("");
        })
  );
}
function Yr(e, t) {
  var r = typeof t,
    n;
  return t == null || r === "boolean"
    ? Ed(t)
    : (r === "number"
        ? Wi
        : r === "string"
          ? (n = Mn(t))
            ? ((t = n), vm)
            : yM
          : t instanceof Mn
            ? vm
            : t instanceof Date
              ? hM
              : dM(t)
                ? fM
                : Array.isArray(t)
                  ? pM
                  : (typeof t.valueOf != "function" &&
                        typeof t.toString != "function") ||
                      isNaN(t)
                    ? gM
                    : Wi)(e, t);
}
function Td(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return Math.round(e * (1 - r) + t * r);
    }
  );
}
function bM(e, t) {
  t === void 0 && ((t = e), (e = Yr));
  for (
    var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n);
    r < n;

  )
    a[r] = e(i, (i = t[++r]));
  return function (o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor((o *= n))));
    return a[u](o - u);
  };
}
function xM(e) {
  return function () {
    return e;
  };
}
function Ki(e) {
  return +e;
}
var mm = [0, 1];
function qe(e) {
  return e;
}
function lf(e, t) {
  return (t -= e = +e)
    ? function (r) {
        return (r - e) / t;
      }
    : xM(isNaN(t) ? NaN : 0.5);
}
function wM(e, t) {
  var r;
  return (
    e > t && ((r = e), (e = t), (t = r)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function SM(e, t, r) {
  var n = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < n ? ((n = lf(i, n)), (a = r(o, a))) : ((n = lf(n, i)), (a = r(a, o))),
    function (u) {
      return a(n(u));
    }
  );
}
function _M(e, t, r) {
  var n = Math.min(e.length, t.length) - 1,
    i = new Array(n),
    a = new Array(n),
    o = -1;
  for (
    e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < n;

  )
    (i[o] = lf(e[o], e[o + 1])), (a[o] = r(t[o], t[o + 1]));
  return function (u) {
    var s = si(e, u, 1, n) - 1;
    return a[s](i[s](u));
  };
}
function ci(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function Va() {
  var e = mm,
    t = mm,
    r = Yr,
    n,
    i,
    a,
    o = qe,
    u,
    s,
    l;
  function f() {
    var d = Math.min(e.length, t.length);
    return (
      o !== qe && (o = wM(e[0], e[d - 1])),
      (u = d > 2 ? _M : SM),
      (s = l = null),
      c
    );
  }
  function c(d) {
    return d == null || isNaN((d = +d))
      ? a
      : (s || (s = u(e.map(n), t, r)))(n(o(d)));
  }
  return (
    (c.invert = function (d) {
      return o(i((l || (l = u(t, e.map(n), Wi)))(d)));
    }),
    (c.domain = function (d) {
      return arguments.length ? ((e = Array.from(d, Ki)), f()) : e.slice();
    }),
    (c.range = function (d) {
      return arguments.length ? ((t = Array.from(d)), f()) : t.slice();
    }),
    (c.rangeRound = function (d) {
      return (t = Array.from(d)), (r = Td), f();
    }),
    (c.clamp = function (d) {
      return arguments.length ? ((o = d ? !0 : qe), f()) : o !== qe;
    }),
    (c.interpolate = function (d) {
      return arguments.length ? ((r = d), f()) : r;
    }),
    (c.unknown = function (d) {
      return arguments.length ? ((a = d), c) : a;
    }),
    function (d, p) {
      return (n = d), (i = p), f();
    }
  );
}
function Rd() {
  return Va()(qe, qe);
}
function OM(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString("en").replace(/,/g, "")
    : e.toString(10);
}
function Xi(e, t) {
  if (
    (r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0
  )
    return null;
  var r,
    n = e.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
}
function Ir(e) {
  return (e = Xi(Math.abs(e))), e ? e[1] : NaN;
}
function PM(e, t) {
  return function (r, n) {
    for (
      var i = r.length, a = [], o = 0, u = e[0], s = 0;
      i > 0 &&
      u > 0 &&
      (s + u + 1 > n && (u = Math.max(1, n - s)),
      a.push(r.substring((i -= u), i + u)),
      !((s += u + 1) > n));

    )
      u = e[(o = (o + 1) % e.length)];
    return a.reverse().join(t);
  };
}
function CM(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (r) {
      return e[+r];
    });
  };
}
var AM =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function jn(e) {
  if (!(t = AM.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Md({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
jn.prototype = Md.prototype;
function Md(e) {
  (this.fill = e.fill === void 0 ? " " : e.fill + ""),
    (this.align = e.align === void 0 ? ">" : e.align + ""),
    (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
    (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? "" : e.type + "");
}
Md.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function EM(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), (i = r);
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var b1;
function TM(e, t) {
  var r = Xi(e, t);
  if (!r) return e + "";
  var n = r[0],
    i = r[1],
    a = i - (b1 = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = n.length;
  return a === o
    ? n
    : a > o
      ? n + new Array(a - o + 1).join("0")
      : a > 0
        ? n.slice(0, a) + "." + n.slice(a)
        : "0." + new Array(1 - a).join("0") + Xi(e, Math.max(0, t + a - 1))[0];
}
function ym(e, t) {
  var r = Xi(e, t);
  if (!r) return e + "";
  var n = r[0],
    i = r[1];
  return i < 0
    ? "0." + new Array(-i).join("0") + n
    : n.length > i + 1
      ? n.slice(0, i + 1) + "." + n.slice(i + 1)
      : n + new Array(i - n.length + 2).join("0");
}
const bm = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: OM,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ym(e * 100, t),
  r: ym,
  s: TM,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function xm(e) {
  return e;
}
var wm = Array.prototype.map,
  Sm = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];
function RM(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? xm
        : PM(wm.call(e.grouping, Number), e.thousands + ""),
    r = e.currency === void 0 ? "" : e.currency[0] + "",
    n = e.currency === void 0 ? "" : e.currency[1] + "",
    i = e.decimal === void 0 ? "." : e.decimal + "",
    a = e.numerals === void 0 ? xm : CM(wm.call(e.numerals, String)),
    o = e.percent === void 0 ? "%" : e.percent + "",
    u = e.minus === void 0 ? "−" : e.minus + "",
    s = e.nan === void 0 ? "NaN" : e.nan + "";
  function l(c) {
    c = jn(c);
    var d = c.fill,
      p = c.align,
      v = c.sign,
      h = c.symbol,
      g = c.zero,
      y = c.width,
      b = c.comma,
      w = c.precision,
      _ = c.trim,
      m = c.type;
    m === "n"
      ? ((b = !0), (m = "g"))
      : bm[m] || (w === void 0 && (w = 12), (_ = !0), (m = "g")),
      (g || (d === "0" && p === "=")) && ((g = !0), (d = "0"), (p = "="));
    var x =
        h === "$"
          ? r
          : h === "#" && /[boxX]/.test(m)
            ? "0" + m.toLowerCase()
            : "",
      S = h === "$" ? n : /[%p]/.test(m) ? o : "",
      P = bm[m],
      E = /[defgprs%]/.test(m);
    w =
      w === void 0
        ? 6
        : /[gprs]/.test(m)
          ? Math.max(1, Math.min(21, w))
          : Math.max(0, Math.min(20, w));
    function j(A) {
      var T = x,
        M = S,
        N,
        $,
        k;
      if (m === "c") (M = P(A) + M), (A = "");
      else {
        A = +A;
        var F = A < 0 || 1 / A < 0;
        if (
          ((A = isNaN(A) ? s : P(Math.abs(A), w)),
          _ && (A = EM(A)),
          F && +A == 0 && v !== "+" && (F = !1),
          (T = (F ? (v === "(" ? v : u) : v === "-" || v === "(" ? "" : v) + T),
          (M =
            (m === "s" ? Sm[8 + b1 / 3] : "") +
            M +
            (F && v === "(" ? ")" : "")),
          E)
        ) {
          for (N = -1, $ = A.length; ++N < $; )
            if (((k = A.charCodeAt(N)), 48 > k || k > 57)) {
              (M = (k === 46 ? i + A.slice(N + 1) : A.slice(N)) + M),
                (A = A.slice(0, N));
              break;
            }
        }
      }
      b && !g && (A = t(A, 1 / 0));
      var V = T.length + A.length + M.length,
        H = V < y ? new Array(y - V + 1).join(d) : "";
      switch (
        (b && g && ((A = t(H + A, H.length ? y - M.length : 1 / 0)), (H = "")),
        p)
      ) {
        case "<":
          A = T + A + M + H;
          break;
        case "=":
          A = T + H + A + M;
          break;
        case "^":
          A = H.slice(0, (V = H.length >> 1)) + T + A + M + H.slice(V);
          break;
        default:
          A = H + T + A + M;
          break;
      }
      return a(A);
    }
    return (
      (j.toString = function () {
        return c + "";
      }),
      j
    );
  }
  function f(c, d) {
    var p = l(((c = jn(c)), (c.type = "f"), c)),
      v = Math.max(-8, Math.min(8, Math.floor(Ir(d) / 3))) * 3,
      h = Math.pow(10, -v),
      g = Sm[8 + v / 3];
    return function (y) {
      return p(h * y) + g;
    };
  }
  return { format: l, formatPrefix: f };
}
var Oi, jd, x1;
MM({ thousands: ",", grouping: [3], currency: ["$", ""] });
function MM(e) {
  return (Oi = RM(e)), (jd = Oi.format), (x1 = Oi.formatPrefix), Oi;
}
function jM(e) {
  return Math.max(0, -Ir(Math.abs(e)));
}
function IM(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(Ir(t) / 3))) * 3 - Ir(Math.abs(e)),
  );
}
function $M(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, Ir(t) - Ir(e)) + 1
  );
}
function w1(e, t, r, n) {
  var i = af(e, t, r),
    a;
  switch (((n = jn(n ?? ",f")), n.type)) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        n.precision == null && !isNaN((a = IM(i, o))) && (n.precision = a),
        x1(n, o)
      );
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null &&
        !isNaN((a = $M(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null &&
        !isNaN((a = jM(i))) &&
        (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return jd(n);
}
function Gt(e) {
  var t = e.domain;
  return (
    (e.ticks = function (r) {
      var n = t();
      return rf(n[0], n[n.length - 1], r ?? 10);
    }),
    (e.tickFormat = function (r, n) {
      var i = t();
      return w1(i[0], i[i.length - 1], r ?? 10, n);
    }),
    (e.nice = function (r) {
      r == null && (r = 10);
      var n = t(),
        i = 0,
        a = n.length - 1,
        o = n[i],
        u = n[a],
        s,
        l,
        f = 10;
      for (
        u < o && ((l = o), (o = u), (u = l), (l = i), (i = a), (a = l));
        f-- > 0;

      ) {
        if (((l = nf(o, u, r)), l === s)) return (n[i] = o), (n[a] = u), t(n);
        if (l > 0) (o = Math.floor(o / l) * l), (u = Math.ceil(u / l) * l);
        else if (l < 0) (o = Math.ceil(o * l) / l), (u = Math.floor(u * l) / l);
        else break;
        s = l;
      }
      return e;
    }),
    e
  );
}
function Yi() {
  var e = Rd();
  return (
    (e.copy = function () {
      return ci(e, Yi());
    }),
    Ye.apply(e, arguments),
    Gt(e)
  );
}
function S1(e) {
  var t;
  function r(n) {
    return n == null || isNaN((n = +n)) ? t : n;
  }
  return (
    (r.invert = r),
    (r.domain = r.range =
      function (n) {
        return arguments.length ? ((e = Array.from(n, Ki)), r) : e.slice();
      }),
    (r.unknown = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.copy = function () {
      return S1(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, Ki) : [0, 1]),
    Gt(r)
  );
}
function _1(e, t) {
  e = e.slice();
  var r = 0,
    n = e.length - 1,
    i = e[r],
    a = e[n],
    o;
  return (
    a < i && ((o = r), (r = n), (n = o), (o = i), (i = a), (a = o)),
    (e[r] = t.floor(i)),
    (e[n] = t.ceil(a)),
    e
  );
}
function _m(e) {
  return Math.log(e);
}
function Om(e) {
  return Math.exp(e);
}
function NM(e) {
  return -Math.log(-e);
}
function DM(e) {
  return -Math.exp(-e);
}
function kM(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function qM(e) {
  return e === 10 ? kM : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function FM(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function Pm(e) {
  return (t, r) => -e(-t, r);
}
function Id(e) {
  const t = e(_m, Om),
    r = t.domain;
  let n = 10,
    i,
    a;
  function o() {
    return (
      (i = FM(n)),
      (a = qM(n)),
      r()[0] < 0 ? ((i = Pm(i)), (a = Pm(a)), e(NM, DM)) : e(_m, Om),
      t
    );
  }
  return (
    (t.base = function (u) {
      return arguments.length ? ((n = +u), o()) : n;
    }),
    (t.domain = function (u) {
      return arguments.length ? (r(u), o()) : r();
    }),
    (t.ticks = (u) => {
      const s = r();
      let l = s[0],
        f = s[s.length - 1];
      const c = f < l;
      c && ([l, f] = [f, l]);
      let d = i(l),
        p = i(f),
        v,
        h;
      const g = u == null ? 10 : +u;
      let y = [];
      if (!(n % 1) && p - d < g) {
        if (((d = Math.floor(d)), (p = Math.ceil(p)), l > 0)) {
          for (; d <= p; ++d)
            for (v = 1; v < n; ++v)
              if (((h = d < 0 ? v / a(-d) : v * a(d)), !(h < l))) {
                if (h > f) break;
                y.push(h);
              }
        } else
          for (; d <= p; ++d)
            for (v = n - 1; v >= 1; --v)
              if (((h = d > 0 ? v / a(-d) : v * a(d)), !(h < l))) {
                if (h > f) break;
                y.push(h);
              }
        y.length * 2 < g && (y = rf(l, f, g));
      } else y = rf(d, p, Math.min(p - d, g)).map(a);
      return c ? y.reverse() : y;
    }),
    (t.tickFormat = (u, s) => {
      if (
        (u == null && (u = 10),
        s == null && (s = n === 10 ? "s" : ","),
        typeof s != "function" &&
          (!(n % 1) && (s = jn(s)).precision == null && (s.trim = !0),
          (s = jd(s))),
        u === 1 / 0)
      )
        return s;
      const l = Math.max(1, (n * u) / t.ticks().length);
      return (f) => {
        let c = f / a(Math.round(i(f)));
        return c * n < n - 0.5 && (c *= n), c <= l ? s(f) : "";
      };
    }),
    (t.nice = () =>
      r(
        _1(r(), {
          floor: (u) => a(Math.floor(i(u))),
          ceil: (u) => a(Math.ceil(i(u))),
        }),
      )),
    t
  );
}
function O1() {
  const e = Id(Va()).domain([1, 10]);
  return (e.copy = () => ci(e, O1()).base(e.base())), Ye.apply(e, arguments), e;
}
function Cm(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Am(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function $d(e) {
  var t = 1,
    r = e(Cm(t), Am(t));
  return (
    (r.constant = function (n) {
      return arguments.length ? e(Cm((t = +n)), Am(t)) : t;
    }),
    Gt(r)
  );
}
function P1() {
  var e = $d(Va());
  return (
    (e.copy = function () {
      return ci(e, P1()).constant(e.constant());
    }),
    Ye.apply(e, arguments)
  );
}
function Em(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function LM(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function BM(e) {
  return e < 0 ? -e * e : e * e;
}
function Nd(e) {
  var t = e(qe, qe),
    r = 1;
  function n() {
    return r === 1 ? e(qe, qe) : r === 0.5 ? e(LM, BM) : e(Em(r), Em(1 / r));
  }
  return (
    (t.exponent = function (i) {
      return arguments.length ? ((r = +i), n()) : r;
    }),
    Gt(t)
  );
}
function Dd() {
  var e = Nd(Va());
  return (
    (e.copy = function () {
      return ci(e, Dd()).exponent(e.exponent());
    }),
    Ye.apply(e, arguments),
    e
  );
}
function VM() {
  return Dd.apply(null, arguments).exponent(0.5);
}
function Tm(e) {
  return Math.sign(e) * e * e;
}
function HM(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function C1() {
  var e = Rd(),
    t = [0, 1],
    r = !1,
    n;
  function i(a) {
    var o = HM(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return (
    (i.invert = function (a) {
      return e.invert(Tm(a));
    }),
    (i.domain = function (a) {
      return arguments.length ? (e.domain(a), i) : e.domain();
    }),
    (i.range = function (a) {
      return arguments.length
        ? (e.range((t = Array.from(a, Ki)).map(Tm)), i)
        : t.slice();
    }),
    (i.rangeRound = function (a) {
      return i.range(a).round(!0);
    }),
    (i.round = function (a) {
      return arguments.length ? ((r = !!a), i) : r;
    }),
    (i.clamp = function (a) {
      return arguments.length ? (e.clamp(a), i) : e.clamp();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return C1(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
    }),
    Ye.apply(i, arguments),
    Gt(i)
  );
}
function A1() {
  var e = [],
    t = [],
    r = [],
    n;
  function i() {
    var o = 0,
      u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = KR(e, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN((o = +o)) ? n : t[si(r, o)];
  }
  return (
    (a.invertExtent = function (o) {
      var u = t.indexOf(o);
      return u < 0
        ? [NaN, NaN]
        : [u > 0 ? r[u - 1] : e[0], u < r.length ? r[u] : e[e.length - 1]];
    }),
    (a.domain = function (o) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let u of o) u != null && !isNaN((u = +u)) && e.push(u);
      return e.sort(Nt), i();
    }),
    (a.range = function (o) {
      return arguments.length ? ((t = Array.from(o)), i()) : t.slice();
    }),
    (a.unknown = function (o) {
      return arguments.length ? ((n = o), a) : n;
    }),
    (a.quantiles = function () {
      return r.slice();
    }),
    (a.copy = function () {
      return A1().domain(e).range(t).unknown(n);
    }),
    Ye.apply(a, arguments)
  );
}
function E1() {
  var e = 0,
    t = 1,
    r = 1,
    n = [0.5],
    i = [0, 1],
    a;
  function o(s) {
    return s != null && s <= s ? i[si(n, s, 0, r)] : a;
  }
  function u() {
    var s = -1;
    for (n = new Array(r); ++s < r; )
      n[s] = ((s + 1) * t - (s - r) * e) / (r + 1);
    return o;
  }
  return (
    (o.domain = function (s) {
      return arguments.length
        ? (([e, t] = s), (e = +e), (t = +t), u())
        : [e, t];
    }),
    (o.range = function (s) {
      return arguments.length
        ? ((r = (i = Array.from(s)).length - 1), u())
        : i.slice();
    }),
    (o.invertExtent = function (s) {
      var l = i.indexOf(s);
      return l < 0
        ? [NaN, NaN]
        : l < 1
          ? [e, n[0]]
          : l >= r
            ? [n[r - 1], t]
            : [n[l - 1], n[l]];
    }),
    (o.unknown = function (s) {
      return arguments.length && (a = s), o;
    }),
    (o.thresholds = function () {
      return n.slice();
    }),
    (o.copy = function () {
      return E1().domain([e, t]).range(i).unknown(a);
    }),
    Ye.apply(Gt(o), arguments)
  );
}
function T1() {
  var e = [0.5],
    t = [0, 1],
    r,
    n = 1;
  function i(a) {
    return a != null && a <= a ? t[si(e, a, 0, n)] : r;
  }
  return (
    (i.domain = function (a) {
      return arguments.length
        ? ((e = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i)
        : e.slice();
    }),
    (i.range = function (a) {
      return arguments.length
        ? ((t = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i)
        : t.slice();
    }),
    (i.invertExtent = function (a) {
      var o = t.indexOf(a);
      return [e[o - 1], e[o]];
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((r = a), i) : r;
    }),
    (i.copy = function () {
      return T1().domain(e).range(t).unknown(r);
    }),
    Ye.apply(i, arguments)
  );
}
const Rl = new Date(),
  Ml = new Date();
function Te(e, t, r, n) {
  function i(a) {
    return e((a = arguments.length === 0 ? new Date() : new Date(+a))), a;
  }
  return (
    (i.floor = (a) => (e((a = new Date(+a))), a)),
    (i.ceil = (a) => (e((a = new Date(a - 1))), t(a, 1), e(a), a)),
    (i.round = (a) => {
      const o = i(a),
        u = i.ceil(a);
      return a - o < u - a ? o : u;
    }),
    (i.offset = (a, o) => (
      t((a = new Date(+a)), o == null ? 1 : Math.floor(o)), a
    )),
    (i.range = (a, o, u) => {
      const s = [];
      if (
        ((a = i.ceil(a)),
        (u = u == null ? 1 : Math.floor(u)),
        !(a < o) || !(u > 0))
      )
        return s;
      let l;
      do s.push((l = new Date(+a))), t(a, u), e(a);
      while (l < a && a < o);
      return s;
    }),
    (i.filter = (a) =>
      Te(
        (o) => {
          if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
        },
        (o, u) => {
          if (o >= o)
            if (u < 0) for (; ++u <= 0; ) for (; t(o, -1), !a(o); );
            else for (; --u >= 0; ) for (; t(o, 1), !a(o); );
        },
      )),
    r &&
      ((i.count = (a, o) => (
        Rl.setTime(+a), Ml.setTime(+o), e(Rl), e(Ml), Math.floor(r(Rl, Ml))
      )),
      (i.every = (a) => (
        (a = Math.floor(a)),
        !isFinite(a) || !(a > 0)
          ? null
          : a > 1
            ? i.filter(
                n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0,
              )
            : i
      ))),
    i
  );
}
const Zi = Te(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
Zi.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? Te(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, r) => {
            t.setTime(+t + r * e);
          },
          (t, r) => (r - t) / e,
        )
      : Zi
);
Zi.range;
const bt = 1e3,
  We = bt * 60,
  xt = We * 60,
  _t = xt * 24,
  kd = _t * 7,
  Rm = _t * 30,
  jl = _t * 365,
  rr = Te(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * bt);
    },
    (e, t) => (t - e) / bt,
    (e) => e.getUTCSeconds(),
  );
rr.range;
const qd = Te(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * bt);
  },
  (e, t) => {
    e.setTime(+e + t * We);
  },
  (e, t) => (t - e) / We,
  (e) => e.getMinutes(),
);
qd.range;
const Fd = Te(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * We);
  },
  (e, t) => (t - e) / We,
  (e) => e.getUTCMinutes(),
);
Fd.range;
const Ld = Te(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * bt - e.getMinutes() * We,
    );
  },
  (e, t) => {
    e.setTime(+e + t * xt);
  },
  (e, t) => (t - e) / xt,
  (e) => e.getHours(),
);
Ld.range;
const Bd = Te(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * xt);
  },
  (e, t) => (t - e) / xt,
  (e) => e.getUTCHours(),
);
Bd.range;
const fi = Te(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * We) / _t,
  (e) => e.getDate() - 1,
);
fi.range;
const Ha = Te(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / _t,
  (e) => e.getUTCDate() - 1,
);
Ha.range;
const R1 = Te(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / _t,
  (e) => Math.floor(e / _t),
);
R1.range;
function pr(e) {
  return Te(
    (t) => {
      t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0);
    },
    (t, r) => {
      t.setDate(t.getDate() + r * 7);
    },
    (t, r) =>
      (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * We) / kd,
  );
}
const za = pr(0),
  Ji = pr(1),
  zM = pr(2),
  UM = pr(3),
  $r = pr(4),
  GM = pr(5),
  WM = pr(6);
za.range;
Ji.range;
zM.range;
UM.range;
$r.range;
GM.range;
WM.range;
function hr(e) {
  return Te(
    (t) => {
      t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0);
    },
    (t, r) => {
      t.setUTCDate(t.getUTCDate() + r * 7);
    },
    (t, r) => (r - t) / kd,
  );
}
const Ua = hr(0),
  Qi = hr(1),
  KM = hr(2),
  XM = hr(3),
  Nr = hr(4),
  YM = hr(5),
  ZM = hr(6);
Ua.range;
Qi.range;
KM.range;
XM.range;
Nr.range;
YM.range;
ZM.range;
const Vd = Te(
  (e) => {
    e.setDate(1), e.setHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) =>
    t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth(),
);
Vd.range;
const Hd = Te(
  (e) => {
    e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) =>
    t.getUTCMonth() -
    e.getUTCMonth() +
    (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth(),
);
Hd.range;
const Ot = Te(
  (e) => {
    e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
Ot.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Te(
        (t) => {
          t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0);
        },
        (t, r) => {
          t.setFullYear(t.getFullYear() + r * e);
        },
      );
Ot.range;
const Pt = Te(
  (e) => {
    e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
Pt.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Te(
        (t) => {
          t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0);
        },
        (t, r) => {
          t.setUTCFullYear(t.getUTCFullYear() + r * e);
        },
      );
Pt.range;
function M1(e, t, r, n, i, a) {
  const o = [
    [rr, 1, bt],
    [rr, 5, 5 * bt],
    [rr, 15, 15 * bt],
    [rr, 30, 30 * bt],
    [a, 1, We],
    [a, 5, 5 * We],
    [a, 15, 15 * We],
    [a, 30, 30 * We],
    [i, 1, xt],
    [i, 3, 3 * xt],
    [i, 6, 6 * xt],
    [i, 12, 12 * xt],
    [n, 1, _t],
    [n, 2, 2 * _t],
    [r, 1, kd],
    [t, 1, Rm],
    [t, 3, 3 * Rm],
    [e, 1, jl],
  ];
  function u(l, f, c) {
    const d = f < l;
    d && ([l, f] = [f, l]);
    const p = c && typeof c.range == "function" ? c : s(l, f, c),
      v = p ? p.range(l, +f + 1) : [];
    return d ? v.reverse() : v;
  }
  function s(l, f, c) {
    const d = Math.abs(f - l) / c,
      p = Pd(([, , g]) => g).right(o, d);
    if (p === o.length) return e.every(af(l / jl, f / jl, c));
    if (p === 0) return Zi.every(Math.max(af(l, f, c), 1));
    const [v, h] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return v.every(h);
  }
  return [u, s];
}
const [JM, QM] = M1(Pt, Hd, Ua, R1, Bd, Fd),
  [ej, tj] = M1(Ot, Vd, za, fi, Ld, qd);
function Il(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function $l(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function nn(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function rj(e) {
  var t = e.dateTime,
    r = e.date,
    n = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    u = e.months,
    s = e.shortMonths,
    l = an(i),
    f = on(i),
    c = an(a),
    d = on(a),
    p = an(o),
    v = on(o),
    h = an(u),
    g = on(u),
    y = an(s),
    b = on(s),
    w = {
      a: F,
      A: V,
      b: H,
      B: Z,
      c: null,
      d: Dm,
      e: Dm,
      f: Pj,
      g: Nj,
      G: kj,
      H: Sj,
      I: _j,
      j: Oj,
      L: j1,
      m: Cj,
      M: Aj,
      p: J,
      q: R,
      Q: Fm,
      s: Lm,
      S: Ej,
      u: Tj,
      U: Rj,
      V: Mj,
      w: jj,
      W: Ij,
      x: null,
      X: null,
      y: $j,
      Y: Dj,
      Z: qj,
      "%": qm,
    },
    _ = {
      a: B,
      A: X,
      b: z,
      B: ne,
      c: null,
      d: km,
      e: km,
      f: Vj,
      g: Jj,
      G: eI,
      H: Fj,
      I: Lj,
      j: Bj,
      L: $1,
      m: Hj,
      M: zj,
      p: U,
      q: re,
      Q: Fm,
      s: Lm,
      S: Uj,
      u: Gj,
      U: Wj,
      V: Kj,
      w: Xj,
      W: Yj,
      x: null,
      X: null,
      y: Zj,
      Y: Qj,
      Z: tI,
      "%": qm,
    },
    m = {
      a: j,
      A,
      b: T,
      B: M,
      c: N,
      d: $m,
      e: $m,
      f: yj,
      g: Im,
      G: jm,
      H: Nm,
      I: Nm,
      j: hj,
      L: mj,
      m: pj,
      M: gj,
      p: E,
      q: dj,
      Q: xj,
      s: wj,
      S: vj,
      u: uj,
      U: sj,
      V: lj,
      w: oj,
      W: cj,
      x: $,
      X: k,
      y: Im,
      Y: jm,
      Z: fj,
      "%": bj,
    };
  (w.x = x(r, w)),
    (w.X = x(n, w)),
    (w.c = x(t, w)),
    (_.x = x(r, _)),
    (_.X = x(n, _)),
    (_.c = x(t, _));
  function x(L, G) {
    return function (Y) {
      var q = [],
        le = -1,
        ie = 0,
        xe = L.length,
        we,
        Re,
        Tt;
      for (Y instanceof Date || (Y = new Date(+Y)); ++le < xe; )
        L.charCodeAt(le) === 37 &&
          (q.push(L.slice(ie, le)),
          (Re = Mm[(we = L.charAt(++le))]) != null
            ? (we = L.charAt(++le))
            : (Re = we === "e" ? " " : "0"),
          (Tt = G[we]) && (we = Tt(Y, Re)),
          q.push(we),
          (ie = le + 1));
      return q.push(L.slice(ie, le)), q.join("");
    };
  }
  function S(L, G) {
    return function (Y) {
      var q = nn(1900, void 0, 1),
        le = P(q, L, (Y += ""), 0),
        ie,
        xe;
      if (le != Y.length) return null;
      if ("Q" in q) return new Date(q.Q);
      if ("s" in q) return new Date(q.s * 1e3 + ("L" in q ? q.L : 0));
      if (
        (G && !("Z" in q) && (q.Z = 0),
        "p" in q && (q.H = (q.H % 12) + q.p * 12),
        q.m === void 0 && (q.m = "q" in q ? q.q : 0),
        "V" in q)
      ) {
        if (q.V < 1 || q.V > 53) return null;
        "w" in q || (q.w = 1),
          "Z" in q
            ? ((ie = $l(nn(q.y, 0, 1))),
              (xe = ie.getUTCDay()),
              (ie = xe > 4 || xe === 0 ? Qi.ceil(ie) : Qi(ie)),
              (ie = Ha.offset(ie, (q.V - 1) * 7)),
              (q.y = ie.getUTCFullYear()),
              (q.m = ie.getUTCMonth()),
              (q.d = ie.getUTCDate() + ((q.w + 6) % 7)))
            : ((ie = Il(nn(q.y, 0, 1))),
              (xe = ie.getDay()),
              (ie = xe > 4 || xe === 0 ? Ji.ceil(ie) : Ji(ie)),
              (ie = fi.offset(ie, (q.V - 1) * 7)),
              (q.y = ie.getFullYear()),
              (q.m = ie.getMonth()),
              (q.d = ie.getDate() + ((q.w + 6) % 7)));
      } else
        ("W" in q || "U" in q) &&
          ("w" in q || (q.w = "u" in q ? q.u % 7 : "W" in q ? 1 : 0),
          (xe =
            "Z" in q
              ? $l(nn(q.y, 0, 1)).getUTCDay()
              : Il(nn(q.y, 0, 1)).getDay()),
          (q.m = 0),
          (q.d =
            "W" in q
              ? ((q.w + 6) % 7) + q.W * 7 - ((xe + 5) % 7)
              : q.w + q.U * 7 - ((xe + 6) % 7)));
      return "Z" in q
        ? ((q.H += (q.Z / 100) | 0), (q.M += q.Z % 100), $l(q))
        : Il(q);
    };
  }
  function P(L, G, Y, q) {
    for (var le = 0, ie = G.length, xe = Y.length, we, Re; le < ie; ) {
      if (q >= xe) return -1;
      if (((we = G.charCodeAt(le++)), we === 37)) {
        if (
          ((we = G.charAt(le++)),
          (Re = m[we in Mm ? G.charAt(le++) : we]),
          !Re || (q = Re(L, Y, q)) < 0)
        )
          return -1;
      } else if (we != Y.charCodeAt(q++)) return -1;
    }
    return q;
  }
  function E(L, G, Y) {
    var q = l.exec(G.slice(Y));
    return q ? ((L.p = f.get(q[0].toLowerCase())), Y + q[0].length) : -1;
  }
  function j(L, G, Y) {
    var q = p.exec(G.slice(Y));
    return q ? ((L.w = v.get(q[0].toLowerCase())), Y + q[0].length) : -1;
  }
  function A(L, G, Y) {
    var q = c.exec(G.slice(Y));
    return q ? ((L.w = d.get(q[0].toLowerCase())), Y + q[0].length) : -1;
  }
  function T(L, G, Y) {
    var q = y.exec(G.slice(Y));
    return q ? ((L.m = b.get(q[0].toLowerCase())), Y + q[0].length) : -1;
  }
  function M(L, G, Y) {
    var q = h.exec(G.slice(Y));
    return q ? ((L.m = g.get(q[0].toLowerCase())), Y + q[0].length) : -1;
  }
  function N(L, G, Y) {
    return P(L, t, G, Y);
  }
  function $(L, G, Y) {
    return P(L, r, G, Y);
  }
  function k(L, G, Y) {
    return P(L, n, G, Y);
  }
  function F(L) {
    return o[L.getDay()];
  }
  function V(L) {
    return a[L.getDay()];
  }
  function H(L) {
    return s[L.getMonth()];
  }
  function Z(L) {
    return u[L.getMonth()];
  }
  function J(L) {
    return i[+(L.getHours() >= 12)];
  }
  function R(L) {
    return 1 + ~~(L.getMonth() / 3);
  }
  function B(L) {
    return o[L.getUTCDay()];
  }
  function X(L) {
    return a[L.getUTCDay()];
  }
  function z(L) {
    return s[L.getUTCMonth()];
  }
  function ne(L) {
    return u[L.getUTCMonth()];
  }
  function U(L) {
    return i[+(L.getUTCHours() >= 12)];
  }
  function re(L) {
    return 1 + ~~(L.getUTCMonth() / 3);
  }
  return {
    format: function (L) {
      var G = x((L += ""), w);
      return (
        (G.toString = function () {
          return L;
        }),
        G
      );
    },
    parse: function (L) {
      var G = S((L += ""), !1);
      return (
        (G.toString = function () {
          return L;
        }),
        G
      );
    },
    utcFormat: function (L) {
      var G = x((L += ""), _);
      return (
        (G.toString = function () {
          return L;
        }),
        G
      );
    },
    utcParse: function (L) {
      var G = S((L += ""), !0);
      return (
        (G.toString = function () {
          return L;
        }),
        G
      );
    },
  };
}
var Mm = { "-": "", _: " ", 0: "0" },
  je = /^\s*\d+/,
  nj = /^%/,
  ij = /[\\^$*+?|[\]().{}]/g;
function oe(e, t, r) {
  var n = e < 0 ? "-" : "",
    i = (n ? -e : e) + "",
    a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function aj(e) {
  return e.replace(ij, "\\$&");
}
function an(e) {
  return new RegExp("^(?:" + e.map(aj).join("|") + ")", "i");
}
function on(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function oj(e, t, r) {
  var n = je.exec(t.slice(r, r + 1));
  return n ? ((e.w = +n[0]), r + n[0].length) : -1;
}
function uj(e, t, r) {
  var n = je.exec(t.slice(r, r + 1));
  return n ? ((e.u = +n[0]), r + n[0].length) : -1;
}
function sj(e, t, r) {
  var n = je.exec(t.slice(r, r + 2));
  return n ? ((e.U = +n[0]), r + n[0].length) : -1;
}
function lj(e, t, r) {
  var n = je.exec(t.slice(r, r + 2));
  return n ? ((e.V = +n[0]), r + n[0].length) : -1;
}
function cj(e, t, r) {
  var n = je.exec(t.slice(r, r + 2));
  return n ? ((e.W = +n[0]), r + n[0].length) : -1;
}
function jm(e, t, r) {
  var n = je.exec(t.slice(r, r + 4));
  return n ? ((e.y = +n[0]), r + n[0].length) : -1;
}
function Im(e, t, r) {
  var n = je.exec(t.slice(r, r + 2));
  return n ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1;
}
function fj(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n
    ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length)
    : -1;
}
function dj(e, t, r) {
  var n = je.exec(t.slice(r, r + 1));
  return n ? ((e.q = n[0] * 3 - 3), r + n[0].length) : -1;
}
function pj(e, t, r) {
  var n = je.exec(t.slice(r, r + 2));
  return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
}
function $m(e, t, r) {
  var n = je.exec(t.slice(r, r + 2));
  return n ? ((e.d = +n[0]), r + n[0].length) : -1;
}
function hj(e, t, r) {
  var n = je.exec(t.slice(r, r + 3));
  return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
}
function Nm(e, t, r) {
  var n = je.exec(t.slice(r, r + 2));
  return n ? ((e.H = +n[0]), r + n[0].length) : -1;
}
function gj(e, t, r) {
  var n = je.exec(t.slice(r, r + 2));
  return n ? ((e.M = +n[0]), r + n[0].length) : -1;
}
function vj(e, t, r) {
  var n = je.exec(t.slice(r, r + 2));
  return n ? ((e.S = +n[0]), r + n[0].length) : -1;
}
function mj(e, t, r) {
  var n = je.exec(t.slice(r, r + 3));
  return n ? ((e.L = +n[0]), r + n[0].length) : -1;
}
function yj(e, t, r) {
  var n = je.exec(t.slice(r, r + 6));
  return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
}
function bj(e, t, r) {
  var n = nj.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function xj(e, t, r) {
  var n = je.exec(t.slice(r));
  return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
}
function wj(e, t, r) {
  var n = je.exec(t.slice(r));
  return n ? ((e.s = +n[0]), r + n[0].length) : -1;
}
function Dm(e, t) {
  return oe(e.getDate(), t, 2);
}
function Sj(e, t) {
  return oe(e.getHours(), t, 2);
}
function _j(e, t) {
  return oe(e.getHours() % 12 || 12, t, 2);
}
function Oj(e, t) {
  return oe(1 + fi.count(Ot(e), e), t, 3);
}
function j1(e, t) {
  return oe(e.getMilliseconds(), t, 3);
}
function Pj(e, t) {
  return j1(e, t) + "000";
}
function Cj(e, t) {
  return oe(e.getMonth() + 1, t, 2);
}
function Aj(e, t) {
  return oe(e.getMinutes(), t, 2);
}
function Ej(e, t) {
  return oe(e.getSeconds(), t, 2);
}
function Tj(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Rj(e, t) {
  return oe(za.count(Ot(e) - 1, e), t, 2);
}
function I1(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? $r(e) : $r.ceil(e);
}
function Mj(e, t) {
  return (e = I1(e)), oe($r.count(Ot(e), e) + (Ot(e).getDay() === 4), t, 2);
}
function jj(e) {
  return e.getDay();
}
function Ij(e, t) {
  return oe(Ji.count(Ot(e) - 1, e), t, 2);
}
function $j(e, t) {
  return oe(e.getFullYear() % 100, t, 2);
}
function Nj(e, t) {
  return (e = I1(e)), oe(e.getFullYear() % 100, t, 2);
}
function Dj(e, t) {
  return oe(e.getFullYear() % 1e4, t, 4);
}
function kj(e, t) {
  var r = e.getDay();
  return (
    (e = r >= 4 || r === 0 ? $r(e) : $r.ceil(e)),
    oe(e.getFullYear() % 1e4, t, 4)
  );
}
function qj(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? "-" : ((t *= -1), "+")) +
    oe((t / 60) | 0, "0", 2) +
    oe(t % 60, "0", 2)
  );
}
function km(e, t) {
  return oe(e.getUTCDate(), t, 2);
}
function Fj(e, t) {
  return oe(e.getUTCHours(), t, 2);
}
function Lj(e, t) {
  return oe(e.getUTCHours() % 12 || 12, t, 2);
}
function Bj(e, t) {
  return oe(1 + Ha.count(Pt(e), e), t, 3);
}
function $1(e, t) {
  return oe(e.getUTCMilliseconds(), t, 3);
}
function Vj(e, t) {
  return $1(e, t) + "000";
}
function Hj(e, t) {
  return oe(e.getUTCMonth() + 1, t, 2);
}
function zj(e, t) {
  return oe(e.getUTCMinutes(), t, 2);
}
function Uj(e, t) {
  return oe(e.getUTCSeconds(), t, 2);
}
function Gj(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Wj(e, t) {
  return oe(Ua.count(Pt(e) - 1, e), t, 2);
}
function N1(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Nr(e) : Nr.ceil(e);
}
function Kj(e, t) {
  return (e = N1(e)), oe(Nr.count(Pt(e), e) + (Pt(e).getUTCDay() === 4), t, 2);
}
function Xj(e) {
  return e.getUTCDay();
}
function Yj(e, t) {
  return oe(Qi.count(Pt(e) - 1, e), t, 2);
}
function Zj(e, t) {
  return oe(e.getUTCFullYear() % 100, t, 2);
}
function Jj(e, t) {
  return (e = N1(e)), oe(e.getUTCFullYear() % 100, t, 2);
}
function Qj(e, t) {
  return oe(e.getUTCFullYear() % 1e4, t, 4);
}
function eI(e, t) {
  var r = e.getUTCDay();
  return (
    (e = r >= 4 || r === 0 ? Nr(e) : Nr.ceil(e)),
    oe(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function tI() {
  return "+0000";
}
function qm() {
  return "%";
}
function Fm(e) {
  return +e;
}
function Lm(e) {
  return Math.floor(+e / 1e3);
}
var br, D1, k1;
rI({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
});
function rI(e) {
  return (
    (br = rj(e)),
    (D1 = br.format),
    br.parse,
    (k1 = br.utcFormat),
    br.utcParse,
    br
  );
}
function nI(e) {
  return new Date(e);
}
function iI(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function zd(e, t, r, n, i, a, o, u, s, l) {
  var f = Rd(),
    c = f.invert,
    d = f.domain,
    p = l(".%L"),
    v = l(":%S"),
    h = l("%I:%M"),
    g = l("%I %p"),
    y = l("%a %d"),
    b = l("%b %d"),
    w = l("%B"),
    _ = l("%Y");
  function m(x) {
    return (
      s(x) < x
        ? p
        : u(x) < x
          ? v
          : o(x) < x
            ? h
            : a(x) < x
              ? g
              : n(x) < x
                ? i(x) < x
                  ? y
                  : b
                : r(x) < x
                  ? w
                  : _
    )(x);
  }
  return (
    (f.invert = function (x) {
      return new Date(c(x));
    }),
    (f.domain = function (x) {
      return arguments.length ? d(Array.from(x, iI)) : d().map(nI);
    }),
    (f.ticks = function (x) {
      var S = d();
      return e(S[0], S[S.length - 1], x ?? 10);
    }),
    (f.tickFormat = function (x, S) {
      return S == null ? m : l(S);
    }),
    (f.nice = function (x) {
      var S = d();
      return (
        (!x || typeof x.range != "function") &&
          (x = t(S[0], S[S.length - 1], x ?? 10)),
        x ? d(_1(S, x)) : f
      );
    }),
    (f.copy = function () {
      return ci(f, zd(e, t, r, n, i, a, o, u, s, l));
    }),
    f
  );
}
function aI() {
  return Ye.apply(
    zd(ej, tj, Ot, Vd, za, fi, Ld, qd, rr, D1).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function oI() {
  return Ye.apply(
    zd(JM, QM, Pt, Hd, Ua, Ha, Bd, Fd, rr, k1).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function Ga() {
  var e = 0,
    t = 1,
    r,
    n,
    i,
    a,
    o = qe,
    u = !1,
    s;
  function l(c) {
    return c == null || isNaN((c = +c))
      ? s
      : o(
          i === 0
            ? 0.5
            : ((c = (a(c) - r) * i), u ? Math.max(0, Math.min(1, c)) : c),
        );
  }
  (l.domain = function (c) {
    return arguments.length
      ? (([e, t] = c),
        (r = a((e = +e))),
        (n = a((t = +t))),
        (i = r === n ? 0 : 1 / (n - r)),
        l)
      : [e, t];
  }),
    (l.clamp = function (c) {
      return arguments.length ? ((u = !!c), l) : u;
    }),
    (l.interpolator = function (c) {
      return arguments.length ? ((o = c), l) : o;
    });
  function f(c) {
    return function (d) {
      var p, v;
      return arguments.length ? (([p, v] = d), (o = c(p, v)), l) : [o(0), o(1)];
    };
  }
  return (
    (l.range = f(Yr)),
    (l.rangeRound = f(Td)),
    (l.unknown = function (c) {
      return arguments.length ? ((s = c), l) : s;
    }),
    function (c) {
      return (
        (a = c), (r = c(e)), (n = c(t)), (i = r === n ? 0 : 1 / (n - r)), l
      );
    }
  );
}
function Wt(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function q1() {
  var e = Gt(Ga()(qe));
  return (
    (e.copy = function () {
      return Wt(e, q1());
    }),
    Et.apply(e, arguments)
  );
}
function F1() {
  var e = Id(Ga()).domain([1, 10]);
  return (
    (e.copy = function () {
      return Wt(e, F1()).base(e.base());
    }),
    Et.apply(e, arguments)
  );
}
function L1() {
  var e = $d(Ga());
  return (
    (e.copy = function () {
      return Wt(e, L1()).constant(e.constant());
    }),
    Et.apply(e, arguments)
  );
}
function Ud() {
  var e = Nd(Ga());
  return (
    (e.copy = function () {
      return Wt(e, Ud()).exponent(e.exponent());
    }),
    Et.apply(e, arguments)
  );
}
function uI() {
  return Ud.apply(null, arguments).exponent(0.5);
}
function B1() {
  var e = [],
    t = qe;
  function r(n) {
    if (n != null && !isNaN((n = +n)))
      return t((si(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (r.domain = function (n) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let i of n) i != null && !isNaN((i = +i)) && e.push(i);
      return e.sort(Nt), r;
    }),
    (r.interpolator = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.range = function () {
      return e.map((n, i) => t(i / (e.length - 1)));
    }),
    (r.quantiles = function (n) {
      return Array.from({ length: n + 1 }, (i, a) => WR(e, a / n));
    }),
    (r.copy = function () {
      return B1(t).domain(e);
    }),
    Et.apply(r, arguments)
  );
}
function Wa() {
  var e = 0,
    t = 0.5,
    r = 1,
    n = 1,
    i,
    a,
    o,
    u,
    s,
    l = qe,
    f,
    c = !1,
    d;
  function p(h) {
    return isNaN((h = +h))
      ? d
      : ((h = 0.5 + ((h = +f(h)) - a) * (n * h < n * a ? u : s)),
        l(c ? Math.max(0, Math.min(1, h)) : h));
  }
  (p.domain = function (h) {
    return arguments.length
      ? (([e, t, r] = h),
        (i = f((e = +e))),
        (a = f((t = +t))),
        (o = f((r = +r))),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (s = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        p)
      : [e, t, r];
  }),
    (p.clamp = function (h) {
      return arguments.length ? ((c = !!h), p) : c;
    }),
    (p.interpolator = function (h) {
      return arguments.length ? ((l = h), p) : l;
    });
  function v(h) {
    return function (g) {
      var y, b, w;
      return arguments.length
        ? (([y, b, w] = g), (l = bM(h, [y, b, w])), p)
        : [l(0), l(0.5), l(1)];
    };
  }
  return (
    (p.range = v(Yr)),
    (p.rangeRound = v(Td)),
    (p.unknown = function (h) {
      return arguments.length ? ((d = h), p) : d;
    }),
    function (h) {
      return (
        (f = h),
        (i = h(e)),
        (a = h(t)),
        (o = h(r)),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (s = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        p
      );
    }
  );
}
function V1() {
  var e = Gt(Wa()(qe));
  return (
    (e.copy = function () {
      return Wt(e, V1());
    }),
    Et.apply(e, arguments)
  );
}
function H1() {
  var e = Id(Wa()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return Wt(e, H1()).base(e.base());
    }),
    Et.apply(e, arguments)
  );
}
function z1() {
  var e = $d(Wa());
  return (
    (e.copy = function () {
      return Wt(e, z1()).constant(e.constant());
    }),
    Et.apply(e, arguments)
  );
}
function Gd() {
  var e = Nd(Wa());
  return (
    (e.copy = function () {
      return Wt(e, Gd()).exponent(e.exponent());
    }),
    Et.apply(e, arguments)
  );
}
function sI() {
  return Gd.apply(null, arguments).exponent(0.5);
}
const Bm = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: En,
      scaleDiverging: V1,
      scaleDivergingLog: H1,
      scaleDivergingPow: Gd,
      scaleDivergingSqrt: sI,
      scaleDivergingSymlog: z1,
      scaleIdentity: S1,
      scaleImplicit: of,
      scaleLinear: Yi,
      scaleLog: O1,
      scaleOrdinal: Cd,
      scalePoint: mn,
      scalePow: Dd,
      scaleQuantile: A1,
      scaleQuantize: E1,
      scaleRadial: C1,
      scaleSequential: q1,
      scaleSequentialLog: F1,
      scaleSequentialPow: Ud,
      scaleSequentialQuantile: B1,
      scaleSequentialSqrt: uI,
      scaleSequentialSymlog: L1,
      scaleSqrt: VM,
      scaleSymlog: P1,
      scaleThreshold: T1,
      scaleTime: aI,
      scaleUtc: oI,
      tickFormat: w1,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
var Nl, Vm;
function U1() {
  if (Vm) return Nl;
  Vm = 1;
  var e = Wr();
  function t(r, n, i) {
    for (var a = -1, o = r.length; ++a < o; ) {
      var u = r[a],
        s = n(u);
      if (s != null && (l === void 0 ? s === s && !e(s) : i(s, l)))
        var l = s,
          f = u;
    }
    return f;
  }
  return (Nl = t), Nl;
}
var Dl, Hm;
function lI() {
  if (Hm) return Dl;
  Hm = 1;
  function e(t, r) {
    return t > r;
  }
  return (Dl = e), Dl;
}
var kl, zm;
function cI() {
  if (zm) return kl;
  zm = 1;
  var e = U1(),
    t = lI(),
    r = Xr();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return (kl = n), kl;
}
var fI = cI();
const Ka = ge(fI);
var ql, Um;
function dI() {
  if (Um) return ql;
  Um = 1;
  function e(t, r) {
    return t < r;
  }
  return (ql = e), ql;
}
var Fl, Gm;
function pI() {
  if (Gm) return Fl;
  Gm = 1;
  var e = U1(),
    t = dI(),
    r = Xr();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return (Fl = n), Fl;
}
var hI = pI();
const Xa = ge(hI);
var Ll, Wm;
function gI() {
  if (Wm) return Ll;
  Wm = 1;
  var e = sd(),
    t = Ut(),
    r = Qx(),
    n = Le();
  function i(a, o) {
    var u = n(a) ? e : r;
    return u(a, t(o, 3));
  }
  return (Ll = i), Ll;
}
var Bl, Km;
function vI() {
  if (Km) return Bl;
  Km = 1;
  var e = Zx(),
    t = gI();
  function r(n, i) {
    return e(t(n, i), 1);
  }
  return (Bl = r), Bl;
}
var mI = vI();
const yI = ge(mI);
var Vl, Xm;
function bI() {
  if (Xm) return Vl;
  Xm = 1;
  var e = wd();
  function t(r, n) {
    return e(r, n);
  }
  return (Vl = t), Vl;
}
var xI = bI();
const Wd = ge(xI);
var Zr = 1e9,
  wI = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
  },
  Xd,
  be = !0,
  Ke = "[DecimalError] ",
  ar = Ke + "Invalid argument: ",
  Kd = Ke + "Exponent out of range: ",
  Jr = Math.floor,
  Qt = Math.pow,
  SI = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  He,
  Me = 1e7,
  ve = 7,
  G1 = 9007199254740991,
  ea = Jr(G1 / ve),
  K = {};
K.absoluteValue = K.abs = function () {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
K.comparedTo = K.cmp = function (e) {
  var t,
    r,
    n,
    i,
    a = this;
  if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s;
  if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (a.s < 0) ? 1 : -1;
};
K.decimalPlaces = K.dp = function () {
  var e = this,
    t = e.d.length - 1,
    r = (t - e.e) * ve;
  if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
K.dividedBy = K.div = function (e) {
  return St(this, new this.constructor(e));
};
K.dividedToIntegerBy = K.idiv = function (e) {
  var t = this,
    r = t.constructor;
  return pe(St(t, new r(e), 0, 1), r.precision);
};
K.equals = K.eq = function (e) {
  return !this.cmp(e);
};
K.exponent = function () {
  return Ce(this);
};
K.greaterThan = K.gt = function (e) {
  return this.cmp(e) > 0;
};
K.greaterThanOrEqualTo = K.gte = function (e) {
  return this.cmp(e) >= 0;
};
K.isInteger = K.isint = function () {
  return this.e > this.d.length - 2;
};
K.isNegative = K.isneg = function () {
  return this.s < 0;
};
K.isPositive = K.ispos = function () {
  return this.s > 0;
};
K.isZero = function () {
  return this.s === 0;
};
K.lessThan = K.lt = function (e) {
  return this.cmp(e) < 0;
};
K.lessThanOrEqualTo = K.lte = function (e) {
  return this.cmp(e) < 1;
};
K.logarithm = K.log = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision,
    a = i + 5;
  if (e === void 0) e = new n(10);
  else if (((e = new n(e)), e.s < 1 || e.eq(He))) throw Error(Ke + "NaN");
  if (r.s < 1) throw Error(Ke + (r.s ? "NaN" : "-Infinity"));
  return r.eq(He)
    ? new n(0)
    : ((be = !1), (t = St(In(r, a), In(e, a), a)), (be = !0), pe(t, i));
};
K.minus = K.sub = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)), t.s == e.s ? X1(t, e) : W1(t, ((e.s = -e.s), e))
  );
};
K.modulo = K.mod = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision;
  if (((e = new n(e)), !e.s)) throw Error(Ke + "NaN");
  return r.s
    ? ((be = !1), (t = St(r, e, 0, 1).times(e)), (be = !0), r.minus(t))
    : pe(new n(r), i);
};
K.naturalExponential = K.exp = function () {
  return K1(this);
};
K.naturalLogarithm = K.ln = function () {
  return In(this);
};
K.negated = K.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s || 0), e;
};
K.plus = K.add = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)), t.s == e.s ? W1(t, e) : X1(t, ((e.s = -e.s), e))
  );
};
K.precision = K.sd = function (e) {
  var t,
    r,
    n,
    i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(ar + e);
  if (
    ((t = Ce(i) + 1), (n = i.d.length - 1), (r = n * ve + 1), (n = i.d[n]), n)
  ) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
K.squareRoot = K.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    a,
    o,
    u = this,
    s = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new s(0);
    throw Error(Ke + "NaN");
  }
  for (
    e = Ce(u),
      be = !1,
      i = Math.sqrt(+u),
      i == 0 || i == 1 / 0
        ? ((t = ut(u.d)),
          (t.length + e) % 2 == 0 && (t += "0"),
          (i = Math.sqrt(t)),
          (e = Jr((e + 1) / 2) - (e < 0 || e % 2)),
          i == 1 / 0
            ? (t = "5e" + e)
            : ((t = i.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + e)),
          (n = new s(t)))
        : (n = new s(i.toString())),
      r = s.precision,
      i = o = r + 3;
    ;

  )
    if (
      ((a = n),
      (n = a.plus(St(u, a, o + 2)).times(0.5)),
      ut(a.d).slice(0, o) === (t = ut(n.d)).slice(0, o))
    ) {
      if (((t = t.slice(o - 3, o + 1)), i == o && t == "4999")) {
        if ((pe(a, r + 1, 0), a.times(a).eq(u))) {
          n = a;
          break;
        }
      } else if (t != "9999") break;
      o += 4;
    }
  return (be = !0), pe(n, r);
};
K.times = K.mul = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u,
    s,
    l,
    f = this,
    c = f.constructor,
    d = f.d,
    p = (e = new c(e)).d;
  if (!f.s || !e.s) return new c(0);
  for (
    e.s *= f.s,
      r = f.e + e.e,
      s = d.length,
      l = p.length,
      s < l && ((a = d), (d = p), (p = a), (o = s), (s = l), (l = o)),
      a = [],
      o = s + l,
      n = o;
    n--;

  )
    a.push(0);
  for (n = l; --n >= 0; ) {
    for (t = 0, i = s + n; i > n; )
      (u = a[i] + p[n] * d[i - n - 1] + t),
        (a[i--] = u % Me | 0),
        (t = (u / Me) | 0);
    a[i] = (a[i] + t) % Me | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), (e.d = a), (e.e = r), be ? pe(e, c.precision) : e;
};
K.toDecimalPlaces = K.todp = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (dt(e, 0, Zr),
        t === void 0 ? (t = n.rounding) : dt(t, 0, 8),
        pe(r, e + Ce(r) + 1, t))
  );
};
K.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = cr(n, !0))
      : (dt(e, 0, Zr),
        t === void 0 ? (t = i.rounding) : dt(t, 0, 8),
        (n = pe(new i(n), e + 1, t)),
        (r = cr(n, !0, e + 1))),
    r
  );
};
K.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return e === void 0
    ? cr(i)
    : (dt(e, 0, Zr),
      t === void 0 ? (t = a.rounding) : dt(t, 0, 8),
      (n = pe(new a(i), e + Ce(i) + 1, t)),
      (r = cr(n.abs(), !1, e + Ce(n) + 1)),
      i.isneg() && !i.isZero() ? "-" + r : r);
};
K.toInteger = K.toint = function () {
  var e = this,
    t = e.constructor;
  return pe(new t(e), Ce(e) + 1, t.rounding);
};
K.toNumber = function () {
  return +this;
};
K.toPower = K.pow = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u = this,
    s = u.constructor,
    l = 12,
    f = +(e = new s(e));
  if (!e.s) return new s(He);
  if (((u = new s(u)), !u.s)) {
    if (e.s < 1) throw Error(Ke + "Infinity");
    return u;
  }
  if (u.eq(He)) return u;
  if (((n = s.precision), e.eq(He))) return pe(u, n);
  if (((t = e.e), (r = e.d.length - 1), (o = t >= r), (a = u.s), o)) {
    if ((r = f < 0 ? -f : f) <= G1) {
      for (
        i = new s(He), t = Math.ceil(n / ve + 4), be = !1;
        r % 2 && ((i = i.times(u)), Zm(i.d, t)), (r = Jr(r / 2)), r !== 0;

      )
        (u = u.times(u)), Zm(u.d, t);
      return (be = !0), e.s < 0 ? new s(He).div(i) : pe(i, n);
    }
  } else if (a < 0) throw Error(Ke + "NaN");
  return (
    (a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1),
    (u.s = 1),
    (be = !1),
    (i = e.times(In(u, n + l))),
    (be = !0),
    (i = K1(i)),
    (i.s = a),
    i
  );
};
K.toPrecision = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return (
    e === void 0
      ? ((r = Ce(i)), (n = cr(i, r <= a.toExpNeg || r >= a.toExpPos)))
      : (dt(e, 1, Zr),
        t === void 0 ? (t = a.rounding) : dt(t, 0, 8),
        (i = pe(new a(i), e, t)),
        (r = Ce(i)),
        (n = cr(i, e <= r || r <= a.toExpNeg, e))),
    n
  );
};
K.toSignificantDigits = K.tosd = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (dt(e, 1, Zr), t === void 0 ? (t = n.rounding) : dt(t, 0, 8)),
    pe(new n(r), e, t)
  );
};
K.toString =
  K.valueOf =
  K.val =
  K.toJSON =
  K[Symbol.for("nodejs.util.inspect.custom")] =
    function () {
      var e = this,
        t = Ce(e),
        r = e.constructor;
      return cr(e, t <= r.toExpNeg || t >= r.toExpPos);
    };
function W1(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    s,
    l,
    f = e.constructor,
    c = f.precision;
  if (!e.s || !t.s) return t.s || (t = new f(e)), be ? pe(t, c) : t;
  if (
    ((s = e.d),
    (l = t.d),
    (o = e.e),
    (i = t.e),
    (s = s.slice()),
    (a = o - i),
    a)
  ) {
    for (
      a < 0
        ? ((n = s), (a = -a), (u = l.length))
        : ((n = l), (i = o), (u = s.length)),
        o = Math.ceil(c / ve),
        u = o > u ? o + 1 : u + 1,
        a > u && ((a = u), (n.length = 1)),
        n.reverse();
      a--;

    )
      n.push(0);
    n.reverse();
  }
  for (
    u = s.length,
      a = l.length,
      u - a < 0 && ((a = u), (n = l), (l = s), (s = n)),
      r = 0;
    a;

  )
    (r = ((s[--a] = s[a] + l[a] + r) / Me) | 0), (s[a] %= Me);
  for (r && (s.unshift(r), ++i), u = s.length; s[--u] == 0; ) s.pop();
  return (t.d = s), (t.e = i), be ? pe(t, c) : t;
}
function dt(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(ar + e);
}
function ut(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    a = "",
    o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      (n = e[t] + ""), (r = ve - n.length), r && (a += Rt(r)), (a += n);
    (o = e[t]), (n = o + ""), (r = ve - n.length), r && (a += Rt(r));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var St = (function () {
  function e(n, i) {
    var a,
      o = 0,
      u = n.length;
    for (n = n.slice(); u--; )
      (a = n[u] * i + o), (n[u] = a % Me | 0), (o = (a / Me) | 0);
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var u, s;
    if (a != o) s = a > o ? 1 : -1;
    else
      for (u = s = 0; u < a; u++)
        if (n[u] != i[u]) {
          s = n[u] > i[u] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      (n[a] -= o), (o = n[a] < i[a] ? 1 : 0), (n[a] = o * Me + n[a] - i[a]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, i, a, o) {
    var u,
      s,
      l,
      f,
      c,
      d,
      p,
      v,
      h,
      g,
      y,
      b,
      w,
      _,
      m,
      x,
      S,
      P,
      E = n.constructor,
      j = n.s == i.s ? 1 : -1,
      A = n.d,
      T = i.d;
    if (!n.s) return new E(n);
    if (!i.s) throw Error(Ke + "Division by zero");
    for (
      s = n.e - i.e,
        S = T.length,
        m = A.length,
        p = new E(j),
        v = p.d = [],
        l = 0;
      T[l] == (A[l] || 0);

    )
      ++l;
    if (
      (T[l] > (A[l] || 0) && --s,
      a == null
        ? (b = a = E.precision)
        : o
          ? (b = a + (Ce(n) - Ce(i)) + 1)
          : (b = a),
      b < 0)
    )
      return new E(0);
    if (((b = (b / ve + 2) | 0), (l = 0), S == 1))
      for (f = 0, T = T[0], b++; (l < m || f) && b--; l++)
        (w = f * Me + (A[l] || 0)), (v[l] = (w / T) | 0), (f = w % T | 0);
    else {
      for (
        f = (Me / (T[0] + 1)) | 0,
          f > 1 &&
            ((T = e(T, f)), (A = e(A, f)), (S = T.length), (m = A.length)),
          _ = S,
          h = A.slice(0, S),
          g = h.length;
        g < S;

      )
        h[g++] = 0;
      (P = T.slice()), P.unshift(0), (x = T[0]), T[1] >= Me / 2 && ++x;
      do
        (f = 0),
          (u = t(T, h, S, g)),
          u < 0
            ? ((y = h[0]),
              S != g && (y = y * Me + (h[1] || 0)),
              (f = (y / x) | 0),
              f > 1
                ? (f >= Me && (f = Me - 1),
                  (c = e(T, f)),
                  (d = c.length),
                  (g = h.length),
                  (u = t(c, h, d, g)),
                  u == 1 && (f--, r(c, S < d ? P : T, d)))
                : (f == 0 && (u = f = 1), (c = T.slice())),
              (d = c.length),
              d < g && c.unshift(0),
              r(h, c, g),
              u == -1 &&
                ((g = h.length),
                (u = t(T, h, S, g)),
                u < 1 && (f++, r(h, S < g ? P : T, g))),
              (g = h.length))
            : u === 0 && (f++, (h = [0])),
          (v[l++] = f),
          u && h[0] ? (h[g++] = A[_] || 0) : ((h = [A[_]]), (g = 1));
      while ((_++ < m || h[0] !== void 0) && b--);
    }
    return v[0] || v.shift(), (p.e = s), pe(p, o ? a + Ce(p) + 1 : a);
  };
})();
function K1(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    s = 0,
    l = 0,
    f = e.constructor,
    c = f.precision;
  if (Ce(e) > 16) throw Error(Kd + Ce(e));
  if (!e.s) return new f(He);
  for (be = !1, u = c, o = new f(0.03125); e.abs().gte(0.1); )
    (e = e.times(o)), (l += 5);
  for (
    n = ((Math.log(Qt(2, l)) / Math.LN10) * 2 + 5) | 0,
      u += n,
      r = i = a = new f(He),
      f.precision = u;
    ;

  ) {
    if (
      ((i = pe(i.times(e), u)),
      (r = r.times(++s)),
      (o = a.plus(St(i, r, u))),
      ut(o.d).slice(0, u) === ut(a.d).slice(0, u))
    ) {
      for (; l--; ) a = pe(a.times(a), u);
      return (f.precision = c), t == null ? ((be = !0), pe(a, c)) : a;
    }
    a = o;
  }
}
function Ce(e) {
  for (var t = e.e * ve, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Hl(e, t, r) {
  if (t > e.LN10.sd())
    throw (
      ((be = !0),
      r && (e.precision = r),
      Error(Ke + "LN10 precision limit exceeded"))
    );
  return pe(new e(e.LN10), t);
}
function Rt(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function In(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    s,
    l,
    f,
    c = 1,
    d = 10,
    p = e,
    v = p.d,
    h = p.constructor,
    g = h.precision;
  if (p.s < 1) throw Error(Ke + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(He)) return new h(0);
  if ((t == null ? ((be = !1), (l = g)) : (l = t), p.eq(10)))
    return t == null && (be = !0), Hl(h, l);
  if (
    ((l += d),
    (h.precision = l),
    (r = ut(v)),
    (n = r.charAt(0)),
    (a = Ce(p)),
    Math.abs(a) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (p = p.times(e)), (r = ut(p.d)), (n = r.charAt(0)), c++;
    (a = Ce(p)),
      n > 1 ? ((p = new h("0." + r)), a++) : (p = new h(n + "." + r.slice(1)));
  } else
    return (
      (s = Hl(h, l + 2, g).times(a + "")),
      (p = In(new h(n + "." + r.slice(1)), l - d).plus(s)),
      (h.precision = g),
      t == null ? ((be = !0), pe(p, g)) : p
    );
  for (
    u = o = p = St(p.minus(He), p.plus(He), l), f = pe(p.times(p), l), i = 3;
    ;

  ) {
    if (
      ((o = pe(o.times(f), l)),
      (s = u.plus(St(o, new h(i), l))),
      ut(s.d).slice(0, l) === ut(u.d).slice(0, l))
    )
      return (
        (u = u.times(2)),
        a !== 0 && (u = u.plus(Hl(h, l + 2, g).times(a + ""))),
        (u = St(u, new h(c), l)),
        (h.precision = g),
        t == null ? ((be = !0), pe(u, g)) : u
      );
    (u = s), (i += 2);
  }
}
function Ym(e, t) {
  var r, n, i;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;

  )
    ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (((t = t.slice(n, i)), t)) {
    if (
      ((i -= n),
      (r = r - n - 1),
      (e.e = Jr(r / ve)),
      (e.d = []),
      (n = (r + 1) % ve),
      r < 0 && (n += ve),
      n < i)
    ) {
      for (n && e.d.push(+t.slice(0, n)), i -= ve; n < i; )
        e.d.push(+t.slice(n, (n += ve)));
      (t = t.slice(n)), (n = ve - t.length);
    } else n -= i;
    for (; n--; ) t += "0";
    if ((e.d.push(+t), be && (e.e > ea || e.e < -ea))) throw Error(Kd + r);
  } else (e.s = 0), (e.e = 0), (e.d = [0]);
  return e;
}
function pe(e, t, r) {
  var n,
    i,
    a,
    o,
    u,
    s,
    l,
    f,
    c = e.d;
  for (o = 1, a = c[0]; a >= 10; a /= 10) o++;
  if (((n = t - o), n < 0)) (n += ve), (i = t), (l = c[(f = 0)]);
  else {
    if (((f = Math.ceil((n + 1) / ve)), (a = c.length), f >= a)) return e;
    for (l = a = c[f], o = 1; a >= 10; a /= 10) o++;
    (n %= ve), (i = n - ve + o);
  }
  if (
    (r !== void 0 &&
      ((a = Qt(10, o - i - 1)),
      (u = (l / a) % 10 | 0),
      (s = t < 0 || c[f + 1] !== void 0 || l % a),
      (s =
        r < 4
          ? (u || s) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : u > 5 ||
            (u == 5 &&
              (r == 4 ||
                s ||
                (r == 6 &&
                  (n > 0 ? (i > 0 ? l / Qt(10, o - i) : 0) : c[f - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7))))),
    t < 1 || !c[0])
  )
    return (
      s
        ? ((a = Ce(e)),
          (c.length = 1),
          (t = t - a - 1),
          (c[0] = Qt(10, (ve - (t % ve)) % ve)),
          (e.e = Jr(-t / ve) || 0))
        : ((c.length = 1), (c[0] = e.e = e.s = 0)),
      e
    );
  if (
    (n == 0
      ? ((c.length = f), (a = 1), f--)
      : ((c.length = f + 1),
        (a = Qt(10, ve - n)),
        (c[f] = i > 0 ? ((l / Qt(10, o - i)) % Qt(10, i) | 0) * a : 0)),
    s)
  )
    for (;;)
      if (f == 0) {
        (c[0] += a) == Me && ((c[0] = 1), ++e.e);
        break;
      } else {
        if (((c[f] += a), c[f] != Me)) break;
        (c[f--] = 0), (a = 1);
      }
  for (n = c.length; c[--n] === 0; ) c.pop();
  if (be && (e.e > ea || e.e < -ea)) throw Error(Kd + Ce(e));
  return e;
}
function X1(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    s,
    l,
    f,
    c,
    d = e.constructor,
    p = d.precision;
  if (!e.s || !t.s)
    return t.s ? (t.s = -t.s) : (t = new d(e)), be ? pe(t, p) : t;
  if (
    ((s = e.d),
    (c = t.d),
    (n = t.e),
    (l = e.e),
    (s = s.slice()),
    (o = l - n),
    o)
  ) {
    for (
      f = o < 0,
        f
          ? ((r = s), (o = -o), (u = c.length))
          : ((r = c), (n = l), (u = s.length)),
        i = Math.max(Math.ceil(p / ve), u) + 2,
        o > i && ((o = i), (r.length = 1)),
        r.reverse(),
        i = o;
      i--;

    )
      r.push(0);
    r.reverse();
  } else {
    for (i = s.length, u = c.length, f = i < u, f && (u = i), i = 0; i < u; i++)
      if (s[i] != c[i]) {
        f = s[i] < c[i];
        break;
      }
    o = 0;
  }
  for (
    f && ((r = s), (s = c), (c = r), (t.s = -t.s)),
      u = s.length,
      i = c.length - u;
    i > 0;
    --i
  )
    s[u++] = 0;
  for (i = c.length; i > o; ) {
    if (s[--i] < c[i]) {
      for (a = i; a && s[--a] === 0; ) s[a] = Me - 1;
      --s[a], (s[i] += Me);
    }
    s[i] -= c[i];
  }
  for (; s[--u] === 0; ) s.pop();
  for (; s[0] === 0; s.shift()) --n;
  return s[0] ? ((t.d = s), (t.e = n), be ? pe(t, p) : t) : new d(0);
}
function cr(e, t, r) {
  var n,
    i = Ce(e),
    a = ut(e.d),
    o = a.length;
  return (
    t
      ? (r && (n = r - o) > 0
          ? (a = a.charAt(0) + "." + a.slice(1) + Rt(n))
          : o > 1 && (a = a.charAt(0) + "." + a.slice(1)),
        (a = a + (i < 0 ? "e" : "e+") + i))
      : i < 0
        ? ((a = "0." + Rt(-i - 1) + a), r && (n = r - o) > 0 && (a += Rt(n)))
        : i >= o
          ? ((a += Rt(i + 1 - o)),
            r && (n = r - i - 1) > 0 && (a = a + "." + Rt(n)))
          : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)),
            r && (n = r - o) > 0 && (i + 1 === o && (a += "."), (a += Rt(n)))),
    e.s < 0 ? "-" + a : a
  );
}
function Zm(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function Y1(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (((o.constructor = i), a instanceof i)) {
      (o.s = a.s), (o.e = a.e), (o.d = (a = a.d) ? a.slice() : a);
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0) throw Error(ar + a);
      if (a > 0) o.s = 1;
      else if (a < 0) (a = -a), (o.s = -1);
      else {
        (o.s = 0), (o.e = 0), (o.d = [0]);
        return;
      }
      if (a === ~~a && a < 1e7) {
        (o.e = 0), (o.d = [a]);
        return;
      }
      return Ym(o, a.toString());
    } else if (typeof a != "string") throw Error(ar + a);
    if (
      (a.charCodeAt(0) === 45 ? ((a = a.slice(1)), (o.s = -1)) : (o.s = 1),
      SI.test(a))
    )
      Ym(o, a);
    else throw Error(ar + a);
  }
  if (
    ((i.prototype = K),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.clone = Y1),
    (i.config = i.set = _I),
    e === void 0 && (e = {}),
    e)
  )
    for (
      n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0;
      t < n.length;

    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return i.config(e), i;
}
function _I(e) {
  if (!e || typeof e != "object") throw Error(Ke + "Object expected");
  var t,
    r,
    n,
    i = [
      "precision",
      1,
      Zr,
      "rounding",
      0,
      8,
      "toExpNeg",
      -1 / 0,
      0,
      "toExpPos",
      0,
      1 / 0,
    ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[(r = i[t])]) !== void 0)
      if (Jr(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(ar + r + ": " + n);
  if ((n = e[(r = "LN10")]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(ar + r + ": " + n);
  return this;
}
var Xd = Y1(wI);
He = new Xd(1);
const de = Xd;
function OI(e) {
  return EI(e) || AI(e) || CI(e) || PI();
}
function PI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CI(e, t) {
  if (e) {
    if (typeof e == "string") return cf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return cf(e, t);
  }
}
function AI(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function EI(e) {
  if (Array.isArray(e)) return cf(e);
}
function cf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var TI = function (t) {
    return t;
  },
  Z1 = {},
  J1 = function (t) {
    return t === Z1;
  },
  Jm = function (t) {
    return function r() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          J1(arguments.length <= 0 ? void 0 : arguments[0]))
        ? r
        : t.apply(void 0, arguments);
    };
  },
  RI = function e(t, r) {
    return t === 1
      ? r
      : Jm(function () {
          for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
          var o = i.filter(function (u) {
            return u !== Z1;
          }).length;
          return o >= t
            ? r.apply(void 0, i)
            : e(
                t - o,
                Jm(function () {
                  for (
                    var u = arguments.length, s = new Array(u), l = 0;
                    l < u;
                    l++
                  )
                    s[l] = arguments[l];
                  var f = i.map(function (c) {
                    return J1(c) ? s.shift() : c;
                  });
                  return r.apply(void 0, OI(f).concat(s));
                }),
              );
        });
  },
  Ya = function (t) {
    return RI(t.length, t);
  },
  ff = function (t, r) {
    for (var n = [], i = t; i < r; ++i) n[i - t] = i;
    return n;
  },
  MI = Ya(function (e, t) {
    return Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map(function (r) {
            return t[r];
          })
          .map(e);
  }),
  jI = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    if (!r.length) return TI;
    var i = r.reverse(),
      a = i[0],
      o = i.slice(1);
    return function () {
      return o.reduce(
        function (u, s) {
          return s(u);
        },
        a.apply(void 0, arguments),
      );
    };
  },
  df = function (t) {
    return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
  },
  Q1 = function (t) {
    var r = null,
      n = null;
    return function () {
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
        a[o] = arguments[o];
      return (
        (r &&
          a.every(function (u, s) {
            return u === r[s];
          })) ||
          ((r = a), (n = t.apply(void 0, a))),
        n
      );
    };
  };
function II(e) {
  var t;
  return (
    e === 0
      ? (t = 1)
      : (t = Math.floor(new de(e).abs().log(10).toNumber()) + 1),
    t
  );
}
function $I(e, t, r) {
  for (var n = new de(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), (n = n.add(r)), i++;
  return a;
}
var NI = Ya(function (e, t, r) {
    var n = +e,
      i = +t;
    return n + r * (i - n);
  }),
  DI = Ya(function (e, t, r) {
    var n = t - +e;
    return (n = n || 1 / 0), (r - e) / n;
  }),
  kI = Ya(function (e, t, r) {
    var n = t - +e;
    return (n = n || 1 / 0), Math.max(0, Math.min(1, (r - e) / n));
  });
const Za = {
  rangeStep: $I,
  getDigitCount: II,
  interpolateNumber: NI,
  uninterpolateNumber: DI,
  uninterpolateTruncation: kI,
};
function pf(e) {
  return LI(e) || FI(e) || ew(e) || qI();
}
function qI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FI(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function LI(e) {
  if (Array.isArray(e)) return hf(e);
}
function $n(e, t) {
  return HI(e) || VI(e, t) || ew(e, t) || BI();
}
function BI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ew(e, t) {
  if (e) {
    if (typeof e == "string") return hf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return hf(e, t);
  }
}
function hf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function VI(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (s) {
      (i = !0), (a = s);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function HI(e) {
  if (Array.isArray(e)) return e;
}
function tw(e) {
  var t = $n(e, 2),
    r = t[0],
    n = t[1],
    i = r,
    a = n;
  return r > n && ((i = n), (a = r)), [i, a];
}
function rw(e, t, r) {
  if (e.lte(0)) return new de(0);
  var n = Za.getDigitCount(e.toNumber()),
    i = new de(10).pow(n),
    a = e.div(i),
    o = n !== 1 ? 0.05 : 0.1,
    u = new de(Math.ceil(a.div(o).toNumber())).add(r).mul(o),
    s = u.mul(i);
  return t ? s : new de(Math.ceil(s));
}
function zI(e, t, r) {
  var n = 1,
    i = new de(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1
      ? ((n = new de(10).pow(Za.getDigitCount(e) - 1)),
        (i = new de(Math.floor(i.div(n).toNumber())).mul(n)))
      : a > 1 && (i = new de(Math.floor(e)));
  } else
    e === 0
      ? (i = new de(Math.floor((t - 1) / 2)))
      : r || (i = new de(Math.floor(e)));
  var o = Math.floor((t - 1) / 2),
    u = jI(
      MI(function (s) {
        return i.add(new de(s - o).mul(n)).toNumber();
      }),
      ff,
    );
  return u(0, t);
}
function nw(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return { step: new de(0), tickMin: new de(0), tickMax: new de(0) };
  var a = rw(new de(t).sub(e).div(r - 1), n, i),
    o;
  e <= 0 && t >= 0
    ? (o = new de(0))
    : ((o = new de(e).add(t).div(2)), (o = o.sub(new de(o).mod(a))));
  var u = Math.ceil(o.sub(e).div(a).toNumber()),
    s = Math.ceil(new de(t).sub(o).div(a).toNumber()),
    l = u + s + 1;
  return l > r
    ? nw(e, t, r, n, i + 1)
    : (l < r && ((s = t > 0 ? s + (r - l) : s), (u = t > 0 ? u : u + (r - l))),
      {
        step: a,
        tickMin: o.sub(new de(u).mul(a)),
        tickMax: o.add(new de(s).mul(a)),
      });
}
function UI(e) {
  var t = $n(e, 2),
    r = t[0],
    n = t[1],
    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = Math.max(i, 2),
    u = tw([r, n]),
    s = $n(u, 2),
    l = s[0],
    f = s[1];
  if (l === -1 / 0 || f === 1 / 0) {
    var c =
      f === 1 / 0
        ? [l].concat(
            pf(
              ff(0, i - 1).map(function () {
                return 1 / 0;
              }),
            ),
          )
        : [].concat(
            pf(
              ff(0, i - 1).map(function () {
                return -1 / 0;
              }),
            ),
            [f],
          );
    return r > n ? df(c) : c;
  }
  if (l === f) return zI(l, i, a);
  var d = nw(l, f, o, a),
    p = d.step,
    v = d.tickMin,
    h = d.tickMax,
    g = Za.rangeStep(v, h.add(new de(0.1).mul(p)), p);
  return r > n ? df(g) : g;
}
function GI(e, t) {
  var r = $n(e, 2),
    n = r[0],
    i = r[1],
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = tw([n, i]),
    u = $n(o, 2),
    s = u[0],
    l = u[1];
  if (s === -1 / 0 || l === 1 / 0) return [n, i];
  if (s === l) return [s];
  var f = Math.max(t, 2),
    c = rw(new de(l).sub(s).div(f - 1), a, 0),
    d = [].concat(
      pf(Za.rangeStep(new de(s), new de(l).sub(new de(0.99).mul(c)), c)),
      [l],
    );
  return n > i ? df(d) : d;
}
var WI = Q1(UI),
  KI = Q1(GI),
  XI = [
    "offset",
    "layout",
    "width",
    "dataKey",
    "data",
    "dataPointFormatter",
    "xAxis",
    "yAxis",
  ];
function Dr(e) {
  "@babel/helpers - typeof";
  return (
    (Dr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Dr(e)
  );
}
function ta() {
  return (
    (ta = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ta.apply(this, arguments)
  );
}
function YI(e, t) {
  return e$(e) || QI(e, t) || JI(e, t) || ZI();
}
function ZI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JI(e, t) {
  if (e) {
    if (typeof e == "string") return Qm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Qm(e, t);
  }
}
function Qm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function QI(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          s = !0
        );
    } catch (f) {
      (l = !0), (i = f);
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function e$(e) {
  if (Array.isArray(e)) return e;
}
function t$(e, t) {
  if (e == null) return {};
  var r = r$(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function r$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function n$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function i$(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, ow(n.key), n);
  }
}
function a$(e, t, r) {
  return (
    t && i$(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function o$(e, t, r) {
  return (
    (t = ra(t)),
    u$(
      e,
      iw() ? Reflect.construct(t, r || [], ra(e).constructor) : t.apply(e, r),
    )
  );
}
function u$(e, t) {
  if (t && (Dr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return s$(e);
}
function s$(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function iw() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (iw = function () {
    return !!e;
  })();
}
function ra(e) {
  return (
    (ra = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ra(e)
  );
}
function l$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && gf(e, t);
}
function gf(e, t) {
  return (
    (gf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    gf(e, t)
  );
}
function aw(e, t, r) {
  return (
    (t = ow(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ow(e) {
  var t = c$(e, "string");
  return Dr(t) == "symbol" ? t : t + "";
}
function c$(e, t) {
  if (Dr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Dr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ja = (function (e) {
  function t() {
    return n$(this, t), o$(this, t, arguments);
  }
  return (
    l$(t, e),
    a$(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            i = n.offset,
            a = n.layout,
            o = n.width,
            u = n.dataKey,
            s = n.data,
            l = n.dataPointFormatter,
            f = n.xAxis,
            c = n.yAxis,
            d = t$(n, XI),
            p = ye(d, !1);
          this.props.direction === "x" && f.type !== "number" && ur(!1);
          var v = s.map(function (h) {
            var g = l(h, u),
              y = g.x,
              b = g.y,
              w = g.value,
              _ = g.errorVal;
            if (!_) return null;
            var m = [],
              x,
              S;
            if (Array.isArray(_)) {
              var P = YI(_, 2);
              (x = P[0]), (S = P[1]);
            } else x = S = _;
            if (a === "vertical") {
              var E = f.scale,
                j = b + i,
                A = j + o,
                T = j - o,
                M = E(w - x),
                N = E(w + S);
              m.push({ x1: N, y1: A, x2: N, y2: T }),
                m.push({ x1: M, y1: j, x2: N, y2: j }),
                m.push({ x1: M, y1: A, x2: M, y2: T });
            } else if (a === "horizontal") {
              var $ = c.scale,
                k = y + i,
                F = k - o,
                V = k + o,
                H = $(w - x),
                Z = $(w + S);
              m.push({ x1: F, y1: Z, x2: V, y2: Z }),
                m.push({ x1: k, y1: H, x2: k, y2: Z }),
                m.push({ x1: F, y1: H, x2: V, y2: H });
            }
            return I.createElement(
              De,
              ta(
                {
                  className: "recharts-errorBar",
                  key: "bar-".concat(
                    m.map(function (J) {
                      return ""
                        .concat(J.x1, "-")
                        .concat(J.x2, "-")
                        .concat(J.y1, "-")
                        .concat(J.y2);
                    }),
                  ),
                },
                p,
              ),
              m.map(function (J) {
                return I.createElement(
                  "line",
                  ta({}, J, {
                    key: "line-"
                      .concat(J.x1, "-")
                      .concat(J.x2, "-")
                      .concat(J.y1, "-")
                      .concat(J.y2),
                  }),
                );
              }),
            );
          });
          return I.createElement(De, { className: "recharts-errorBars" }, v);
        },
      },
    ])
  );
})(I.Component);
aw(Ja, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal",
});
aw(Ja, "displayName", "ErrorBar");
function Nn(e) {
  "@babel/helpers - typeof";
  return (
    (Nn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Nn(e)
  );
}
function ey(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Zt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ey(Object(r), !0).forEach(function (n) {
          f$(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ey(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function f$(e, t, r) {
  return (
    (t = d$(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function d$(e) {
  var t = p$(e, "string");
  return Nn(t) == "symbol" ? t : t + "";
}
function p$(e, t) {
  if (Nn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Nn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var uw = function (t) {
  var r = t.children,
    n = t.formattedGraphicalItems,
    i = t.legendWidth,
    a = t.legendContent,
    o = Ve(r, Or);
  if (!o) return null;
  var u = Or.defaultProps,
    s = u !== void 0 ? Zt(Zt({}, u), o.props) : {},
    l;
  return (
    o.props && o.props.payload
      ? (l = o.props && o.props.payload)
      : a === "children"
        ? (l = (n || []).reduce(function (f, c) {
            var d = c.item,
              p = c.props,
              v = p.sectors || p.data || [];
            return f.concat(
              v.map(function (h) {
                return {
                  type: o.props.iconType || d.props.legendType,
                  value: h.name,
                  color: h.fill,
                  payload: h,
                };
              }),
            );
          }, []))
        : (l = (n || []).map(function (f) {
            var c = f.item,
              d = c.type.defaultProps,
              p = d !== void 0 ? Zt(Zt({}, d), c.props) : {},
              v = p.dataKey,
              h = p.name,
              g = p.legendType,
              y = p.hide;
            return {
              inactive: y,
              dataKey: v,
              type: s.iconType || g || "square",
              color: Yd(c),
              value: h || v,
              payload: p,
            };
          })),
    Zt(Zt(Zt({}, s), Or.getWithHeight(o, i)), {}, { payload: l, item: o })
  );
};
function Dn(e) {
  "@babel/helpers - typeof";
  return (
    (Dn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Dn(e)
  );
}
function ty(e) {
  return m$(e) || v$(e) || g$(e) || h$();
}
function h$() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function g$(e, t) {
  if (e) {
    if (typeof e == "string") return vf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return vf(e, t);
  }
}
function v$(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function m$(e) {
  if (Array.isArray(e)) return vf(e);
}
function vf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ry(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function _e(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ry(Object(r), !0).forEach(function (n) {
          Cr(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ry(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Cr(e, t, r) {
  return (
    (t = y$(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function y$(e) {
  var t = b$(e, "string");
  return Dn(t) == "symbol" ? t : t + "";
}
function b$(e, t) {
  if (Dn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Dn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pt(e, t, r) {
  return ue(e) || ue(t) ? r : Ee(t) ? lt(e, t, r) : ae(t) ? t(e) : r;
}
function yn(e, t, r, n) {
  var i = yI(e, function (u) {
    return pt(u, t);
  });
  if (r === "number") {
    var a = i.filter(function (u) {
      return W(u) || parseFloat(u);
    });
    return a.length ? [Xa(a), Ka(a)] : [1 / 0, -1 / 0];
  }
  var o = n
    ? i.filter(function (u) {
        return !ue(u);
      })
    : i;
  return o.map(function (u) {
    return Ee(u) || u instanceof Date ? u : "";
  });
}
var x$ = function (t) {
    var r,
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      i = arguments.length > 2 ? arguments[2] : void 0,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = -1,
      u = (r = n?.length) !== null && r !== void 0 ? r : 0;
    if (u <= 1) return 0;
    if (
      a &&
      a.axisType === "angleAxis" &&
      Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6
    )
      for (var s = a.range, l = 0; l < u; l++) {
        var f = l > 0 ? i[l - 1].coordinate : i[u - 1].coordinate,
          c = i[l].coordinate,
          d = l >= u - 1 ? i[0].coordinate : i[l + 1].coordinate,
          p = void 0;
        if (ot(c - f) !== ot(d - c)) {
          var v = [];
          if (ot(d - c) === ot(s[1] - s[0])) {
            p = d;
            var h = c + s[1] - s[0];
            (v[0] = Math.min(h, (h + f) / 2)),
              (v[1] = Math.max(h, (h + f) / 2));
          } else {
            p = f;
            var g = d + s[1] - s[0];
            (v[0] = Math.min(c, (g + c) / 2)),
              (v[1] = Math.max(c, (g + c) / 2));
          }
          var y = [Math.min(c, (p + c) / 2), Math.max(c, (p + c) / 2)];
          if ((t > y[0] && t <= y[1]) || (t >= v[0] && t <= v[1])) {
            o = i[l].index;
            break;
          }
        } else {
          var b = Math.min(f, d),
            w = Math.max(f, d);
          if (t > (b + c) / 2 && t <= (w + c) / 2) {
            o = i[l].index;
            break;
          }
        }
      }
    else
      for (var _ = 0; _ < u; _++)
        if (
          (_ === 0 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2) ||
          (_ > 0 &&
            _ < u - 1 &&
            t > (n[_].coordinate + n[_ - 1].coordinate) / 2 &&
            t <= (n[_].coordinate + n[_ + 1].coordinate) / 2) ||
          (_ === u - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2)
        ) {
          o = n[_].index;
          break;
        }
    return o;
  },
  Yd = function (t) {
    var r,
      n = t,
      i = n.type.displayName,
      a =
        (r = t.type) !== null && r !== void 0 && r.defaultProps
          ? _e(_e({}, t.type.defaultProps), t.props)
          : t.props,
      o = a.stroke,
      u = a.fill,
      s;
    switch (i) {
      case "Line":
        s = o;
        break;
      case "Area":
      case "Radar":
        s = o && o !== "none" ? o : u;
        break;
      default:
        s = u;
        break;
    }
    return s;
  },
  w$ = function (t) {
    var r = t.barSize,
      n = t.totalSize,
      i = t.stackGroups,
      a = i === void 0 ? {} : i;
    if (!a) return {};
    for (var o = {}, u = Object.keys(a), s = 0, l = u.length; s < l; s++)
      for (
        var f = a[u[s]].stackGroups, c = Object.keys(f), d = 0, p = c.length;
        d < p;
        d++
      ) {
        var v = f[c[d]],
          h = v.items,
          g = v.cateAxisId,
          y = h.filter(function (S) {
            return wt(S.type).indexOf("Bar") >= 0;
          });
        if (y && y.length) {
          var b = y[0].type.defaultProps,
            w = b !== void 0 ? _e(_e({}, b), y[0].props) : y[0].props,
            _ = w.barSize,
            m = w[g];
          o[m] || (o[m] = []);
          var x = ue(_) ? r : _;
          o[m].push({
            item: y[0],
            stackList: y.slice(1),
            barSize: ue(x) ? void 0 : rt(x, n, 0),
          });
        }
      }
    return o;
  },
  S$ = function (t) {
    var r = t.barGap,
      n = t.barCategoryGap,
      i = t.bandSize,
      a = t.sizeList,
      o = a === void 0 ? [] : a,
      u = t.maxBarSize,
      s = o.length;
    if (s < 1) return null;
    var l = rt(r, i, 0, !0),
      f,
      c = [];
    if (o[0].barSize === +o[0].barSize) {
      var d = !1,
        p = i / s,
        v = o.reduce(function (_, m) {
          return _ + m.barSize || 0;
        }, 0);
      (v += (s - 1) * l),
        v >= i && ((v -= (s - 1) * l), (l = 0)),
        v >= i && p > 0 && ((d = !0), (p *= 0.9), (v = s * p));
      var h = ((i - v) / 2) >> 0,
        g = { offset: h - l, size: 0 };
      f = o.reduce(function (_, m) {
        var x = {
            item: m.item,
            position: {
              offset: g.offset + g.size + l,
              size: d ? p : m.barSize,
            },
          },
          S = [].concat(ty(_), [x]);
        return (
          (g = S[S.length - 1].position),
          m.stackList &&
            m.stackList.length &&
            m.stackList.forEach(function (P) {
              S.push({ item: P, position: g });
            }),
          S
        );
      }, c);
    } else {
      var y = rt(n, i, 0, !0);
      i - 2 * y - (s - 1) * l <= 0 && (l = 0);
      var b = (i - 2 * y - (s - 1) * l) / s;
      b > 1 && (b >>= 0);
      var w = u === +u ? Math.min(b, u) : b;
      f = o.reduce(function (_, m, x) {
        var S = [].concat(ty(_), [
          {
            item: m.item,
            position: { offset: y + (b + l) * x + (b - w) / 2, size: w },
          },
        ]);
        return (
          m.stackList &&
            m.stackList.length &&
            m.stackList.forEach(function (P) {
              S.push({ item: P, position: S[S.length - 1].position });
            }),
          S
        );
      }, c);
    }
    return f;
  },
  _$ = function (t, r, n, i) {
    var a = n.children,
      o = n.width,
      u = n.margin,
      s = o - (u.left || 0) - (u.right || 0),
      l = uw({ children: a, legendWidth: s });
    if (l) {
      var f = i || {},
        c = f.width,
        d = f.height,
        p = l.align,
        v = l.verticalAlign,
        h = l.layout;
      if (
        (h === "vertical" || (h === "horizontal" && v === "middle")) &&
        p !== "center" &&
        W(t[p])
      )
        return _e(_e({}, t), {}, Cr({}, p, t[p] + (c || 0)));
      if (
        (h === "horizontal" || (h === "vertical" && p === "center")) &&
        v !== "middle" &&
        W(t[v])
      )
        return _e(_e({}, t), {}, Cr({}, v, t[v] + (d || 0)));
    }
    return t;
  },
  O$ = function (t, r, n) {
    return ue(r)
      ? !0
      : t === "horizontal"
        ? r === "yAxis"
        : t === "vertical" || n === "x"
          ? r === "xAxis"
          : n === "y"
            ? r === "yAxis"
            : !0;
  },
  sw = function (t, r, n, i, a) {
    var o = r.props.children,
      u = it(o, Ja).filter(function (l) {
        return O$(i, a, l.props.direction);
      });
    if (u && u.length) {
      var s = u.map(function (l) {
        return l.props.dataKey;
      });
      return t.reduce(
        function (l, f) {
          var c = pt(f, n);
          if (ue(c)) return l;
          var d = Array.isArray(c) ? [Xa(c), Ka(c)] : [c, c],
            p = s.reduce(
              function (v, h) {
                var g = pt(f, h, 0),
                  y = d[0] - Math.abs(Array.isArray(g) ? g[0] : g),
                  b = d[1] + Math.abs(Array.isArray(g) ? g[1] : g);
                return [Math.min(y, v[0]), Math.max(b, v[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(p[0], l[0]), Math.max(p[1], l[1])];
        },
        [1 / 0, -1 / 0],
      );
    }
    return null;
  },
  P$ = function (t, r, n, i, a) {
    var o = r
      .map(function (u) {
        return sw(t, u, n, a, i);
      })
      .filter(function (u) {
        return !ue(u);
      });
    return o && o.length
      ? o.reduce(
          function (u, s) {
            return [Math.min(u[0], s[0]), Math.max(u[1], s[1])];
          },
          [1 / 0, -1 / 0],
        )
      : null;
  },
  lw = function (t, r, n, i, a) {
    var o = r.map(function (s) {
      var l = s.props.dataKey;
      return (n === "number" && l && sw(t, s, l, i)) || yn(t, l, n, a);
    });
    if (n === "number")
      return o.reduce(
        function (s, l) {
          return [Math.min(s[0], l[0]), Math.max(s[1], l[1])];
        },
        [1 / 0, -1 / 0],
      );
    var u = {};
    return o.reduce(function (s, l) {
      for (var f = 0, c = l.length; f < c; f++)
        u[l[f]] || ((u[l[f]] = !0), s.push(l[f]));
      return s;
    }, []);
  },
  cw = function (t, r) {
    return (
      (t === "horizontal" && r === "xAxis") ||
      (t === "vertical" && r === "yAxis") ||
      (t === "centric" && r === "angleAxis") ||
      (t === "radial" && r === "radiusAxis")
    );
  },
  vL = function (t, r, n, i) {
    if (i)
      return t.map(function (s) {
        return s.coordinate;
      });
    var a,
      o,
      u = t.map(function (s) {
        return (
          s.coordinate === r && (a = !0),
          s.coordinate === n && (o = !0),
          s.coordinate
        );
      });
    return a || u.push(r), o || u.push(n), u;
  },
  hn = function (t, r, n) {
    if (!t) return null;
    var i = t.scale,
      a = t.duplicateDomain,
      o = t.type,
      u = t.range,
      s = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2,
      l = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / s : 0;
    if (
      ((l =
        t.axisType === "angleAxis" && u?.length >= 2
          ? ot(u[0] - u[1]) * 2 * l
          : l),
      r && (t.ticks || t.niceTicks))
    ) {
      var f = (t.ticks || t.niceTicks).map(function (c) {
        var d = a ? a.indexOf(c) : c;
        return { coordinate: i(d) + l, value: c, offset: l };
      });
      return f.filter(function (c) {
        return !oi(c.coordinate);
      });
    }
    return t.isCategorical && t.categoricalDomain
      ? t.categoricalDomain.map(function (c, d) {
          return { coordinate: i(c) + l, value: c, index: d, offset: l };
        })
      : i.ticks && !n
        ? i.ticks(t.tickCount).map(function (c) {
            return { coordinate: i(c) + l, value: c, offset: l };
          })
        : i.domain().map(function (c, d) {
            return {
              coordinate: i(c) + l,
              value: a ? a[c] : c,
              index: d,
              offset: l,
            };
          });
  },
  zl = new WeakMap(),
  Pi = function (t, r) {
    if (typeof r != "function") return t;
    zl.has(t) || zl.set(t, new WeakMap());
    var n = zl.get(t);
    if (n.has(r)) return n.get(r);
    var i = function () {
      t.apply(void 0, arguments), r.apply(void 0, arguments);
    };
    return n.set(r, i), i;
  },
  fw = function (t, r, n) {
    var i = t.scale,
      a = t.type,
      o = t.layout,
      u = t.axisType;
    if (i === "auto")
      return o === "radial" && u === "radiusAxis"
        ? { scale: En(), realScaleType: "band" }
        : o === "radial" && u === "angleAxis"
          ? { scale: Yi(), realScaleType: "linear" }
          : a === "category" &&
              r &&
              (r.indexOf("LineChart") >= 0 ||
                r.indexOf("AreaChart") >= 0 ||
                (r.indexOf("ComposedChart") >= 0 && !n))
            ? { scale: mn(), realScaleType: "point" }
            : a === "category"
              ? { scale: En(), realScaleType: "band" }
              : { scale: Yi(), realScaleType: "linear" };
    if (ai(i)) {
      var s = "scale".concat($a(i));
      return { scale: (Bm[s] || mn)(), realScaleType: Bm[s] ? s : "point" };
    }
    return ae(i) ? { scale: i } : { scale: mn(), realScaleType: "point" };
  },
  ny = 1e-4,
  dw = function (t) {
    var r = t.domain();
    if (!(!r || r.length <= 2)) {
      var n = r.length,
        i = t.range(),
        a = Math.min(i[0], i[1]) - ny,
        o = Math.max(i[0], i[1]) + ny,
        u = t(r[0]),
        s = t(r[n - 1]);
      (u < a || u > o || s < a || s > o) && t.domain([r[0], r[n - 1]]);
    }
  },
  C$ = function (t, r) {
    if (!t) return null;
    for (var n = 0, i = t.length; n < i; n++)
      if (t[n].item === r) return t[n].position;
    return null;
  },
  A$ = function (t, r) {
    if (!r || r.length !== 2 || !W(r[0]) || !W(r[1])) return t;
    var n = Math.min(r[0], r[1]),
      i = Math.max(r[0], r[1]),
      a = [t[0], t[1]];
    return (
      (!W(t[0]) || t[0] < n) && (a[0] = n),
      (!W(t[1]) || t[1] > i) && (a[1] = i),
      a[0] > i && (a[0] = i),
      a[1] < n && (a[1] = n),
      a
    );
  },
  E$ = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, i = t[0].length; n < i; ++n)
        for (var a = 0, o = 0, u = 0; u < r; ++u) {
          var s = oi(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
          s >= 0
            ? ((t[u][n][0] = a), (t[u][n][1] = a + s), (a = t[u][n][1]))
            : ((t[u][n][0] = o), (t[u][n][1] = o + s), (o = t[u][n][1]));
        }
  },
  T$ = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, i = t[0].length; n < i; ++n)
        for (var a = 0, o = 0; o < r; ++o) {
          var u = oi(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
          u >= 0
            ? ((t[o][n][0] = a), (t[o][n][1] = a + u), (a = t[o][n][1]))
            : ((t[o][n][0] = 0), (t[o][n][1] = 0));
        }
  },
  R$ = {
    sign: E$,
    expand: vA,
    none: Er,
    silhouette: mA,
    wiggle: yA,
    positive: T$,
  },
  M$ = function (t, r, n) {
    var i = r.map(function (u) {
        return u.props.dataKey;
      }),
      a = R$[n],
      o = gA()
        .keys(i)
        .value(function (u, s) {
          return +pt(u, s, 0);
        })
        .order(zc)
        .offset(a);
    return o(t);
  },
  j$ = function (t, r, n, i, a, o) {
    if (!t) return null;
    var u = o ? r.reverse() : r,
      s = {},
      l = u.reduce(function (c, d) {
        var p,
          v =
            (p = d.type) !== null && p !== void 0 && p.defaultProps
              ? _e(_e({}, d.type.defaultProps), d.props)
              : d.props,
          h = v.stackId,
          g = v.hide;
        if (g) return c;
        var y = v[n],
          b = c[y] || { hasStack: !1, stackGroups: {} };
        if (Ee(h)) {
          var w = b.stackGroups[h] || {
            numericAxisId: n,
            cateAxisId: i,
            items: [],
          };
          w.items.push(d), (b.hasStack = !0), (b.stackGroups[h] = w);
        } else
          b.stackGroups[Ia("_stackId_")] = {
            numericAxisId: n,
            cateAxisId: i,
            items: [d],
          };
        return _e(_e({}, c), {}, Cr({}, y, b));
      }, s),
      f = {};
    return Object.keys(l).reduce(function (c, d) {
      var p = l[d];
      if (p.hasStack) {
        var v = {};
        p.stackGroups = Object.keys(p.stackGroups).reduce(function (h, g) {
          var y = p.stackGroups[g];
          return _e(
            _e({}, h),
            {},
            Cr({}, g, {
              numericAxisId: n,
              cateAxisId: i,
              items: y.items,
              stackedData: M$(t, y.items, a),
            }),
          );
        }, v);
      }
      return _e(_e({}, c), {}, Cr({}, d, p));
    }, f);
  },
  pw = function (t, r) {
    var n = r.realScaleType,
      i = r.type,
      a = r.tickCount,
      o = r.originalDomain,
      u = r.allowDecimals,
      s = n || r.scale;
    if (s !== "auto" && s !== "linear") return null;
    if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
      var l = t.domain();
      if (!l.length) return null;
      var f = WI(l, a, u);
      return t.domain([Xa(f), Ka(f)]), { niceTicks: f };
    }
    if (a && i === "number") {
      var c = t.domain(),
        d = KI(c, a, u);
      return { niceTicks: d };
    }
    return null;
  },
  iy = function (t) {
    var r = t.axis,
      n = t.ticks,
      i = t.offset,
      a = t.bandSize,
      o = t.entry,
      u = t.index;
    if (r.type === "category") return n[u] ? n[u].coordinate + i : null;
    var s = pt(o, r.dataKey, r.domain[u]);
    return ue(s) ? null : r.scale(s) - a / 2 + i;
  },
  I$ = function (t) {
    var r = t.numericAxis,
      n = r.scale.domain();
    if (r.type === "number") {
      var i = Math.min(n[0], n[1]),
        a = Math.max(n[0], n[1]);
      return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
    }
    return n[0];
  },
  $$ = function (t, r) {
    var n,
      i =
        (n = t.type) !== null && n !== void 0 && n.defaultProps
          ? _e(_e({}, t.type.defaultProps), t.props)
          : t.props,
      a = i.stackId;
    if (Ee(a)) {
      var o = r[a];
      if (o) {
        var u = o.items.indexOf(t);
        return u >= 0 ? o.stackedData[u] : null;
      }
    }
    return null;
  },
  N$ = function (t) {
    return t.reduce(
      function (r, n) {
        return [Xa(n.concat([r[0]]).filter(W)), Ka(n.concat([r[1]]).filter(W))];
      },
      [1 / 0, -1 / 0],
    );
  },
  hw = function (t, r, n) {
    return Object.keys(t)
      .reduce(
        function (i, a) {
          var o = t[a],
            u = o.stackedData,
            s = u.reduce(
              function (l, f) {
                var c = N$(f.slice(r, n + 1));
                return [Math.min(l[0], c[0]), Math.max(l[1], c[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(s[0], i[0]), Math.max(s[1], i[1])];
        },
        [1 / 0, -1 / 0],
      )
      .map(function (i) {
        return i === 1 / 0 || i === -1 / 0 ? 0 : i;
      });
  },
  ay = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  oy = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  mf = function (t, r, n) {
    if (ae(t)) return t(r, n);
    if (!Array.isArray(t)) return r;
    var i = [];
    if (W(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
    else if (ay.test(t[0])) {
      var a = +ay.exec(t[0])[1];
      i[0] = r[0] - a;
    } else ae(t[0]) ? (i[0] = t[0](r[0])) : (i[0] = r[0]);
    if (W(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
    else if (oy.test(t[1])) {
      var o = +oy.exec(t[1])[1];
      i[1] = r[1] + o;
    } else ae(t[1]) ? (i[1] = t[1](r[1])) : (i[1] = r[1]);
    return i;
  },
  na = function (t, r, n) {
    if (t && t.scale && t.scale.bandwidth) {
      var i = t.scale.bandwidth();
      if (!n || i > 0) return i;
    }
    if (t && r && r.length >= 2) {
      for (
        var a = _d(r, function (c) {
            return c.coordinate;
          }),
          o = 1 / 0,
          u = 1,
          s = a.length;
        u < s;
        u++
      ) {
        var l = a[u],
          f = a[u - 1];
        o = Math.min((l.coordinate || 0) - (f.coordinate || 0), o);
      }
      return o === 1 / 0 ? 0 : o;
    }
    return n ? void 0 : 0;
  },
  uy = function (t, r, n) {
    return !t || !t.length || Wd(t, lt(n, "type.defaultProps.domain")) ? r : t;
  },
  gw = function (t, r) {
    var n = t.type.defaultProps
        ? _e(_e({}, t.type.defaultProps), t.props)
        : t.props,
      i = n.dataKey,
      a = n.name,
      o = n.unit,
      u = n.formatter,
      s = n.tooltipType,
      l = n.chartType,
      f = n.hide;
    return _e(
      _e({}, ye(t, !1)),
      {},
      {
        dataKey: i,
        unit: o,
        formatter: u,
        name: a || i,
        color: Yd(t),
        value: pt(r, i),
        type: s,
        payload: r,
        chartType: l,
        hide: f,
      },
    );
  };
function kn(e) {
  "@babel/helpers - typeof";
  return (
    (kn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    kn(e)
  );
}
function sy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sy(Object(r), !0).forEach(function (n) {
          vw(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sy(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function vw(e, t, r) {
  return (
    (t = D$(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function D$(e) {
  var t = k$(e, "string");
  return kn(t) == "symbol" ? t : t + "";
}
function k$(e, t) {
  if (kn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (kn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function q$(e, t) {
  return V$(e) || B$(e, t) || L$(e, t) || F$();
}
function F$() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function L$(e, t) {
  if (e) {
    if (typeof e == "string") return ly(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ly(e, t);
  }
}
function ly(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function B$(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          s = !0
        );
    } catch (f) {
      (l = !0), (i = f);
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function V$(e) {
  if (Array.isArray(e)) return e;
}
var ia = Math.PI / 180,
  H$ = function (t) {
    return (t * 180) / Math.PI;
  },
  $e = function (t, r, n, i) {
    return { x: t + Math.cos(-ia * i) * n, y: r + Math.sin(-ia * i) * n };
  },
  z$ = function (t, r) {
    var n =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { top: 0, right: 0, bottom: 0, left: 0 };
    return (
      Math.min(
        Math.abs(t - (n.left || 0) - (n.right || 0)),
        Math.abs(r - (n.top || 0) - (n.bottom || 0)),
      ) / 2
    );
  },
  mL = function (t, r, n, i, a) {
    var o = t.width,
      u = t.height,
      s = t.startAngle,
      l = t.endAngle,
      f = rt(t.cx, o, o / 2),
      c = rt(t.cy, u, u / 2),
      d = z$(o, u, n),
      p = rt(t.innerRadius, d, 0),
      v = rt(t.outerRadius, d, d * 0.8),
      h = Object.keys(r);
    return h.reduce(function (g, y) {
      var b = r[y],
        w = b.domain,
        _ = b.reversed,
        m;
      if (ue(b.range))
        i === "angleAxis" ? (m = [s, l]) : i === "radiusAxis" && (m = [p, v]),
          _ && (m = [m[1], m[0]]);
      else {
        m = b.range;
        var x = m,
          S = q$(x, 2);
        (s = S[0]), (l = S[1]);
      }
      var P = fw(b, a),
        E = P.realScaleType,
        j = P.scale;
      j.domain(w).range(m), dw(j);
      var A = pw(j, yt(yt({}, b), {}, { realScaleType: E })),
        T = yt(
          yt(yt({}, b), A),
          {},
          {
            range: m,
            radius: v,
            realScaleType: E,
            scale: j,
            cx: f,
            cy: c,
            innerRadius: p,
            outerRadius: v,
            startAngle: s,
            endAngle: l,
          },
        );
      return yt(yt({}, g), {}, vw({}, y, T));
    }, {});
  },
  U$ = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y;
    return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
  },
  G$ = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.cx,
      o = r.cy,
      u = U$({ x: n, y: i }, { x: a, y: o });
    if (u <= 0) return { radius: u };
    var s = (n - a) / u,
      l = Math.acos(s);
    return (
      i > o && (l = 2 * Math.PI - l),
      { radius: u, angle: H$(l), angleInRadian: l }
    );
  },
  W$ = function (t) {
    var r = t.startAngle,
      n = t.endAngle,
      i = Math.floor(r / 360),
      a = Math.floor(n / 360),
      o = Math.min(i, a);
    return { startAngle: r - o * 360, endAngle: n - o * 360 };
  },
  K$ = function (t, r) {
    var n = r.startAngle,
      i = r.endAngle,
      a = Math.floor(n / 360),
      o = Math.floor(i / 360),
      u = Math.min(a, o);
    return t + u * 360;
  },
  cy = function (t, r) {
    var n = t.x,
      i = t.y,
      a = G$({ x: n, y: i }, r),
      o = a.radius,
      u = a.angle,
      s = r.innerRadius,
      l = r.outerRadius;
    if (o < s || o > l) return !1;
    if (o === 0) return !0;
    var f = W$(r),
      c = f.startAngle,
      d = f.endAngle,
      p = u,
      v;
    if (c <= d) {
      for (; p > d; ) p -= 360;
      for (; p < c; ) p += 360;
      v = p >= c && p <= d;
    } else {
      for (; p > c; ) p -= 360;
      for (; p < d; ) p += 360;
      v = p >= d && p <= c;
    }
    return v ? yt(yt({}, r), {}, { radius: o, angle: K$(p, r) }) : null;
  },
  yL = function (t) {
    return !O.isValidElement(t) && !ae(t) && typeof t != "boolean"
      ? t.className
      : "";
  };
function qn(e) {
  "@babel/helpers - typeof";
  return (
    (qn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    qn(e)
  );
}
var X$ = ["offset"];
function Y$(e) {
  return e2(e) || Q$(e) || J$(e) || Z$();
}
function Z$() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function J$(e, t) {
  if (e) {
    if (typeof e == "string") return yf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return yf(e, t);
  }
}
function Q$(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function e2(e) {
  if (Array.isArray(e)) return yf(e);
}
function yf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function t2(e, t) {
  if (e == null) return {};
  var r = r2(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function r2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function fy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fy(Object(r), !0).forEach(function (n) {
          n2(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : fy(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function n2(e, t, r) {
  return (
    (t = i2(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function i2(e) {
  var t = a2(e, "string");
  return qn(t) == "symbol" ? t : t + "";
}
function a2(e, t) {
  if (qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Fn() {
  return (
    (Fn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Fn.apply(this, arguments)
  );
}
var o2 = function (t) {
    var r = t.value,
      n = t.formatter,
      i = ue(t.children) ? r : t.children;
    return ae(n) ? n(i) : i;
  },
  u2 = function (t, r) {
    var n = ot(r - t),
      i = Math.min(Math.abs(r - t), 360);
    return n * i;
  },
  s2 = function (t, r, n) {
    var i = t.position,
      a = t.viewBox,
      o = t.offset,
      u = t.className,
      s = a,
      l = s.cx,
      f = s.cy,
      c = s.innerRadius,
      d = s.outerRadius,
      p = s.startAngle,
      v = s.endAngle,
      h = s.clockWise,
      g = (c + d) / 2,
      y = u2(p, v),
      b = y >= 0 ? 1 : -1,
      w,
      _;
    i === "insideStart"
      ? ((w = p + b * o), (_ = h))
      : i === "insideEnd"
        ? ((w = v - b * o), (_ = !h))
        : i === "end" && ((w = v + b * o), (_ = h)),
      (_ = y <= 0 ? _ : !_);
    var m = $e(l, f, g, w),
      x = $e(l, f, g, w + (_ ? 1 : -1) * 359),
      S = "M"
        .concat(m.x, ",")
        .concat(
          m.y,
          `
    A`,
        )
        .concat(g, ",")
        .concat(g, ",0,1,")
        .concat(
          _ ? 0 : 1,
          `,
    `,
        )
        .concat(x.x, ",")
        .concat(x.y),
      P = ue(t.id) ? Ia("recharts-radial-line-") : t.id;
    return I.createElement(
      "text",
      Fn({}, n, {
        dominantBaseline: "central",
        className: me("recharts-radial-bar-label", u),
      }),
      I.createElement("defs", null, I.createElement("path", { id: P, d: S })),
      I.createElement("textPath", { xlinkHref: "#".concat(P) }, r),
    );
  },
  l2 = function (t) {
    var r = t.viewBox,
      n = t.offset,
      i = t.position,
      a = r,
      o = a.cx,
      u = a.cy,
      s = a.innerRadius,
      l = a.outerRadius,
      f = a.startAngle,
      c = a.endAngle,
      d = (f + c) / 2;
    if (i === "outside") {
      var p = $e(o, u, l + n, d),
        v = p.x,
        h = p.y;
      return {
        x: v,
        y: h,
        textAnchor: v >= o ? "start" : "end",
        verticalAnchor: "middle",
      };
    }
    if (i === "center")
      return { x: o, y: u, textAnchor: "middle", verticalAnchor: "middle" };
    if (i === "centerTop")
      return { x: o, y: u, textAnchor: "middle", verticalAnchor: "start" };
    if (i === "centerBottom")
      return { x: o, y: u, textAnchor: "middle", verticalAnchor: "end" };
    var g = (s + l) / 2,
      y = $e(o, u, g, d),
      b = y.x,
      w = y.y;
    return { x: b, y: w, textAnchor: "middle", verticalAnchor: "middle" };
  },
  c2 = function (t) {
    var r = t.viewBox,
      n = t.parentViewBox,
      i = t.offset,
      a = t.position,
      o = r,
      u = o.x,
      s = o.y,
      l = o.width,
      f = o.height,
      c = f >= 0 ? 1 : -1,
      d = c * i,
      p = c > 0 ? "end" : "start",
      v = c > 0 ? "start" : "end",
      h = l >= 0 ? 1 : -1,
      g = h * i,
      y = h > 0 ? "end" : "start",
      b = h > 0 ? "start" : "end";
    if (a === "top") {
      var w = {
        x: u + l / 2,
        y: s - c * i,
        textAnchor: "middle",
        verticalAnchor: p,
      };
      return Ae(Ae({}, w), n ? { height: Math.max(s - n.y, 0), width: l } : {});
    }
    if (a === "bottom") {
      var _ = {
        x: u + l / 2,
        y: s + f + d,
        textAnchor: "middle",
        verticalAnchor: v,
      };
      return Ae(
        Ae({}, _),
        n ? { height: Math.max(n.y + n.height - (s + f), 0), width: l } : {},
      );
    }
    if (a === "left") {
      var m = {
        x: u - g,
        y: s + f / 2,
        textAnchor: y,
        verticalAnchor: "middle",
      };
      return Ae(
        Ae({}, m),
        n ? { width: Math.max(m.x - n.x, 0), height: f } : {},
      );
    }
    if (a === "right") {
      var x = {
        x: u + l + g,
        y: s + f / 2,
        textAnchor: b,
        verticalAnchor: "middle",
      };
      return Ae(
        Ae({}, x),
        n ? { width: Math.max(n.x + n.width - x.x, 0), height: f } : {},
      );
    }
    var S = n ? { width: l, height: f } : {};
    return a === "insideLeft"
      ? Ae(
          { x: u + g, y: s + f / 2, textAnchor: b, verticalAnchor: "middle" },
          S,
        )
      : a === "insideRight"
        ? Ae(
            {
              x: u + l - g,
              y: s + f / 2,
              textAnchor: y,
              verticalAnchor: "middle",
            },
            S,
          )
        : a === "insideTop"
          ? Ae(
              {
                x: u + l / 2,
                y: s + d,
                textAnchor: "middle",
                verticalAnchor: v,
              },
              S,
            )
          : a === "insideBottom"
            ? Ae(
                {
                  x: u + l / 2,
                  y: s + f - d,
                  textAnchor: "middle",
                  verticalAnchor: p,
                },
                S,
              )
            : a === "insideTopLeft"
              ? Ae({ x: u + g, y: s + d, textAnchor: b, verticalAnchor: v }, S)
              : a === "insideTopRight"
                ? Ae(
                    {
                      x: u + l - g,
                      y: s + d,
                      textAnchor: y,
                      verticalAnchor: v,
                    },
                    S,
                  )
                : a === "insideBottomLeft"
                  ? Ae(
                      {
                        x: u + g,
                        y: s + f - d,
                        textAnchor: b,
                        verticalAnchor: p,
                      },
                      S,
                    )
                  : a === "insideBottomRight"
                    ? Ae(
                        {
                          x: u + l - g,
                          y: s + f - d,
                          textAnchor: y,
                          verticalAnchor: p,
                        },
                        S,
                      )
                    : Kr(a) && (W(a.x) || er(a.x)) && (W(a.y) || er(a.y))
                      ? Ae(
                          {
                            x: u + rt(a.x, l),
                            y: s + rt(a.y, f),
                            textAnchor: "end",
                            verticalAnchor: "end",
                          },
                          S,
                        )
                      : Ae(
                          {
                            x: u + l / 2,
                            y: s + f / 2,
                            textAnchor: "middle",
                            verticalAnchor: "middle",
                          },
                          S,
                        );
  },
  f2 = function (t) {
    return "cx" in t && W(t.cx);
  };
function ke(e) {
  var t = e.offset,
    r = t === void 0 ? 5 : t,
    n = t2(e, X$),
    i = Ae({ offset: r }, n),
    a = i.viewBox,
    o = i.position,
    u = i.value,
    s = i.children,
    l = i.content,
    f = i.className,
    c = f === void 0 ? "" : f,
    d = i.textBreakAll;
  if (!a || (ue(u) && ue(s) && !O.isValidElement(l) && !ae(l))) return null;
  if (O.isValidElement(l)) return O.cloneElement(l, i);
  var p;
  if (ae(l)) {
    if (((p = O.createElement(l, i)), O.isValidElement(p))) return p;
  } else p = o2(i);
  var v = f2(a),
    h = ye(i, !0);
  if (v && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return s2(i, p, h);
  var g = v ? l2(i) : c2(i);
  return I.createElement(
    tf,
    Fn({ className: me("recharts-label", c) }, h, g, { breakAll: d }),
    p,
  );
}
ke.displayName = "Label";
var mw = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.angle,
      a = t.startAngle,
      o = t.endAngle,
      u = t.r,
      s = t.radius,
      l = t.innerRadius,
      f = t.outerRadius,
      c = t.x,
      d = t.y,
      p = t.top,
      v = t.left,
      h = t.width,
      g = t.height,
      y = t.clockWise,
      b = t.labelViewBox;
    if (b) return b;
    if (W(h) && W(g)) {
      if (W(c) && W(d)) return { x: c, y: d, width: h, height: g };
      if (W(p) && W(v)) return { x: p, y: v, width: h, height: g };
    }
    return W(c) && W(d)
      ? { x: c, y: d, width: 0, height: 0 }
      : W(r) && W(n)
        ? {
            cx: r,
            cy: n,
            startAngle: a || i || 0,
            endAngle: o || i || 0,
            innerRadius: l || 0,
            outerRadius: f || s || u || 0,
            clockWise: y,
          }
        : t.viewBox
          ? t.viewBox
          : {};
  },
  d2 = function (t, r) {
    return t
      ? t === !0
        ? I.createElement(ke, { key: "label-implicit", viewBox: r })
        : Ee(t)
          ? I.createElement(ke, { key: "label-implicit", viewBox: r, value: t })
          : O.isValidElement(t)
            ? t.type === ke
              ? O.cloneElement(t, { key: "label-implicit", viewBox: r })
              : I.createElement(ke, {
                  key: "label-implicit",
                  content: t,
                  viewBox: r,
                })
            : ae(t)
              ? I.createElement(ke, {
                  key: "label-implicit",
                  content: t,
                  viewBox: r,
                })
              : Kr(t)
                ? I.createElement(
                    ke,
                    Fn({ viewBox: r }, t, { key: "label-implicit" }),
                  )
                : null
      : null;
  },
  p2 = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!t || (!t.children && n && !t.label)) return null;
    var i = t.children,
      a = mw(t),
      o = it(i, ke).map(function (s, l) {
        return O.cloneElement(s, { viewBox: r || a, key: "label-".concat(l) });
      });
    if (!n) return o;
    var u = d2(t.label, r || a);
    return [u].concat(Y$(o));
  };
ke.parseViewBox = mw;
ke.renderCallByParent = p2;
var Ul, dy;
function h2() {
  if (dy) return Ul;
  dy = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return (Ul = e), Ul;
}
var g2 = h2();
const v2 = ge(g2);
function Ln(e) {
  "@babel/helpers - typeof";
  return (
    (Ln =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ln(e)
  );
}
var m2 = ["valueAccessor"],
  y2 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function b2(e) {
  return _2(e) || S2(e) || w2(e) || x2();
}
function x2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function w2(e, t) {
  if (e) {
    if (typeof e == "string") return bf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return bf(e, t);
  }
}
function S2(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function _2(e) {
  if (Array.isArray(e)) return bf(e);
}
function bf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function aa() {
  return (
    (aa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    aa.apply(this, arguments)
  );
}
function py(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function hy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? py(Object(r), !0).forEach(function (n) {
          O2(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : py(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function O2(e, t, r) {
  return (
    (t = P2(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function P2(e) {
  var t = C2(e, "string");
  return Ln(t) == "symbol" ? t : t + "";
}
function C2(e, t) {
  if (Ln(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ln(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gy(e, t) {
  if (e == null) return {};
  var r = A2(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function A2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var E2 = function (t) {
  return Array.isArray(t.value) ? v2(t.value) : t.value;
};
function or(e) {
  var t = e.valueAccessor,
    r = t === void 0 ? E2 : t,
    n = gy(e, m2),
    i = n.data,
    a = n.dataKey,
    o = n.clockWise,
    u = n.id,
    s = n.textBreakAll,
    l = gy(n, y2);
  return !i || !i.length
    ? null
    : I.createElement(
        De,
        { className: "recharts-label-list" },
        i.map(function (f, c) {
          var d = ue(a) ? r(f, c) : pt(f && f.payload, a),
            p = ue(u) ? {} : { id: "".concat(u, "-").concat(c) };
          return I.createElement(
            ke,
            aa({}, ye(f, !0), l, p, {
              parentViewBox: f.parentViewBox,
              value: d,
              textBreakAll: s,
              viewBox: ke.parseViewBox(
                ue(o) ? f : hy(hy({}, f), {}, { clockWise: o }),
              ),
              key: "label-".concat(c),
              index: c,
            }),
          );
        }),
      );
}
or.displayName = "LabelList";
function T2(e, t) {
  return e
    ? e === !0
      ? I.createElement(or, { key: "labelList-implicit", data: t })
      : I.isValidElement(e) || ae(e)
        ? I.createElement(or, {
            key: "labelList-implicit",
            data: t,
            content: e,
          })
        : Kr(e)
          ? I.createElement(
              or,
              aa({ data: t }, e, { key: "labelList-implicit" }),
            )
          : null
    : null;
}
function R2(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || (!e.children && r && !e.label)) return null;
  var n = e.children,
    i = it(n, or).map(function (o, u) {
      return O.cloneElement(o, { data: t, key: "labelList-".concat(u) });
    });
  if (!r) return i;
  var a = T2(e.label, t);
  return [a].concat(b2(i));
}
or.renderCallByParent = R2;
function Bn(e) {
  "@babel/helpers - typeof";
  return (
    (Bn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Bn(e)
  );
}
function xf() {
  return (
    (xf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    xf.apply(this, arguments)
  );
}
function vy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function my(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vy(Object(r), !0).forEach(function (n) {
          M2(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : vy(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function M2(e, t, r) {
  return (
    (t = j2(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function j2(e) {
  var t = I2(e, "string");
  return Bn(t) == "symbol" ? t : t + "";
}
function I2(e, t) {
  if (Bn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Bn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $2 = function (t, r) {
    var n = ot(r - t),
      i = Math.min(Math.abs(r - t), 359.999);
    return n * i;
  },
  Ci = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.radius,
      a = t.angle,
      o = t.sign,
      u = t.isExternal,
      s = t.cornerRadius,
      l = t.cornerIsExternal,
      f = s * (u ? 1 : -1) + i,
      c = Math.asin(s / f) / ia,
      d = l ? a : a + o * c,
      p = $e(r, n, f, d),
      v = $e(r, n, i, d),
      h = l ? a - o * c : a,
      g = $e(r, n, f * Math.cos(c * ia), h);
    return { center: p, circleTangency: v, lineTangency: g, theta: c };
  },
  yw = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.startAngle,
      u = t.endAngle,
      s = $2(o, u),
      l = o + s,
      f = $e(r, n, a, o),
      c = $e(r, n, a, l),
      d = "M "
        .concat(f.x, ",")
        .concat(
          f.y,
          `
    A `,
        )
        .concat(a, ",")
        .concat(
          a,
          `,0,
    `,
        )
        .concat(+(Math.abs(s) > 180), ",")
        .concat(
          +(o > l),
          `,
    `,
        )
        .concat(c.x, ",")
        .concat(
          c.y,
          `
  `,
        );
    if (i > 0) {
      var p = $e(r, n, i, o),
        v = $e(r, n, i, l);
      d += "L "
        .concat(v.x, ",")
        .concat(
          v.y,
          `
            A `,
        )
        .concat(i, ",")
        .concat(
          i,
          `,0,
            `,
        )
        .concat(+(Math.abs(s) > 180), ",")
        .concat(
          +(o <= l),
          `,
            `,
        )
        .concat(p.x, ",")
        .concat(p.y, " Z");
    } else d += "L ".concat(r, ",").concat(n, " Z");
    return d;
  },
  N2 = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.cornerRadius,
      u = t.forceCornerRadius,
      s = t.cornerIsExternal,
      l = t.startAngle,
      f = t.endAngle,
      c = ot(f - l),
      d = Ci({
        cx: r,
        cy: n,
        radius: a,
        angle: l,
        sign: c,
        cornerRadius: o,
        cornerIsExternal: s,
      }),
      p = d.circleTangency,
      v = d.lineTangency,
      h = d.theta,
      g = Ci({
        cx: r,
        cy: n,
        radius: a,
        angle: f,
        sign: -c,
        cornerRadius: o,
        cornerIsExternal: s,
      }),
      y = g.circleTangency,
      b = g.lineTangency,
      w = g.theta,
      _ = s ? Math.abs(l - f) : Math.abs(l - f) - h - w;
    if (_ < 0)
      return u
        ? "M "
            .concat(v.x, ",")
            .concat(
              v.y,
              `
        a`,
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              o * 2,
              `,0
        a`,
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              -o * 2,
              `,0
      `,
            )
        : yw({
            cx: r,
            cy: n,
            innerRadius: i,
            outerRadius: a,
            startAngle: l,
            endAngle: f,
          });
    var m = "M "
      .concat(v.x, ",")
      .concat(
        v.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(c < 0), ",")
      .concat(p.x, ",")
      .concat(
        p.y,
        `
    A`,
      )
      .concat(a, ",")
      .concat(a, ",0,")
      .concat(+(_ > 180), ",")
      .concat(+(c < 0), ",")
      .concat(y.x, ",")
      .concat(
        y.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(c < 0), ",")
      .concat(b.x, ",")
      .concat(
        b.y,
        `
  `,
      );
    if (i > 0) {
      var x = Ci({
          cx: r,
          cy: n,
          radius: i,
          angle: l,
          sign: c,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: s,
        }),
        S = x.circleTangency,
        P = x.lineTangency,
        E = x.theta,
        j = Ci({
          cx: r,
          cy: n,
          radius: i,
          angle: f,
          sign: -c,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: s,
        }),
        A = j.circleTangency,
        T = j.lineTangency,
        M = j.theta,
        N = s ? Math.abs(l - f) : Math.abs(l - f) - E - M;
      if (N < 0 && o === 0)
        return "".concat(m, "L").concat(r, ",").concat(n, "Z");
      m += "L"
        .concat(T.x, ",")
        .concat(
          T.y,
          `
      A`,
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(c < 0), ",")
        .concat(A.x, ",")
        .concat(
          A.y,
          `
      A`,
        )
        .concat(i, ",")
        .concat(i, ",0,")
        .concat(+(N > 180), ",")
        .concat(+(c > 0), ",")
        .concat(S.x, ",")
        .concat(
          S.y,
          `
      A`,
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(c < 0), ",")
        .concat(P.x, ",")
        .concat(P.y, "Z");
    } else m += "L".concat(r, ",").concat(n, "Z");
    return m;
  },
  D2 = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  bw = function (t) {
    var r = my(my({}, D2), t),
      n = r.cx,
      i = r.cy,
      a = r.innerRadius,
      o = r.outerRadius,
      u = r.cornerRadius,
      s = r.forceCornerRadius,
      l = r.cornerIsExternal,
      f = r.startAngle,
      c = r.endAngle,
      d = r.className;
    if (o < a || f === c) return null;
    var p = me("recharts-sector", d),
      v = o - a,
      h = rt(u, v, 0, !0),
      g;
    return (
      h > 0 && Math.abs(f - c) < 360
        ? (g = N2({
            cx: n,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            cornerRadius: Math.min(h, v / 2),
            forceCornerRadius: s,
            cornerIsExternal: l,
            startAngle: f,
            endAngle: c,
          }))
        : (g = yw({
            cx: n,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            startAngle: f,
            endAngle: c,
          })),
      I.createElement(
        "path",
        xf({}, ye(r, !0), { className: p, d: g, role: "img" }),
      )
    );
  };
function Vn(e) {
  "@babel/helpers - typeof";
  return (
    (Vn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Vn(e)
  );
}
function wf() {
  return (
    (wf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    wf.apply(this, arguments)
  );
}
function yy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function by(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yy(Object(r), !0).forEach(function (n) {
          k2(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yy(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function k2(e, t, r) {
  return (
    (t = q2(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function q2(e) {
  var t = F2(e, "string");
  return Vn(t) == "symbol" ? t : t + "";
}
function F2(e, t) {
  if (Vn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Vn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var xy = {
    curveBasisClosed: iA,
    curveBasisOpen: aA,
    curveBasis: nA,
    curveBumpX: HC,
    curveBumpY: zC,
    curveLinearClosed: oA,
    curveLinear: Da,
    curveMonotoneX: uA,
    curveMonotoneY: sA,
    curveNatural: lA,
    curveStep: cA,
    curveStepAfter: dA,
    curveStepBefore: fA,
  },
  Ai = function (t) {
    return t.x === +t.x && t.y === +t.y;
  },
  un = function (t) {
    return t.x;
  },
  sn = function (t) {
    return t.y;
  },
  L2 = function (t, r) {
    if (ae(t)) return t;
    var n = "curve".concat($a(t));
    return (n === "curveMonotone" || n === "curveBump") && r
      ? xy["".concat(n).concat(r === "vertical" ? "Y" : "X")]
      : xy[n] || Da;
  },
  B2 = function (t) {
    var r = t.type,
      n = r === void 0 ? "linear" : r,
      i = t.points,
      a = i === void 0 ? [] : i,
      o = t.baseLine,
      u = t.layout,
      s = t.connectNulls,
      l = s === void 0 ? !1 : s,
      f = L2(n, u),
      c = l
        ? a.filter(function (h) {
            return Ai(h);
          })
        : a,
      d;
    if (Array.isArray(o)) {
      var p = l
          ? o.filter(function (h) {
              return Ai(h);
            })
          : o,
        v = c.map(function (h, g) {
          return by(by({}, h), {}, { base: p[g] });
        });
      return (
        u === "vertical"
          ? (d = yi()
              .y(sn)
              .x1(un)
              .x0(function (h) {
                return h.base.x;
              }))
          : (d = yi()
              .x(un)
              .y1(sn)
              .y0(function (h) {
                return h.base.y;
              })),
        d.defined(Ai).curve(f),
        d(v)
      );
    }
    return (
      u === "vertical" && W(o)
        ? (d = yi().y(sn).x1(un).x0(o))
        : W(o)
          ? (d = yi().x(un).y1(sn).y0(o))
          : (d = xx().x(un).y(sn)),
      d.defined(Ai).curve(f),
      d(c)
    );
  },
  wy = function (t) {
    var r = t.className,
      n = t.points,
      i = t.path,
      a = t.pathRef;
    if ((!n || !n.length) && !i) return null;
    var o = n && n.length ? B2(t) : i;
    return I.createElement(
      "path",
      wf({}, ye(t, !1), Ii(t), {
        className: me("recharts-curve", r),
        d: o,
        ref: a,
      }),
    );
  },
  Gl = { exports: {} },
  Wl,
  Sy;
function V2() {
  if (Sy) return Wl;
  Sy = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (Wl = e), Wl;
}
var Kl, _y;
function H2() {
  if (_y) return Kl;
  _y = 1;
  var e = V2();
  function t() {}
  function r() {}
  return (
    (r.resetWarningCache = t),
    (Kl = function () {
      function n(o, u, s, l, f, c) {
        if (c !== e) {
          var d = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
          );
          throw ((d.name = "Invariant Violation"), d);
        }
      }
      n.isRequired = n;
      function i() {
        return n;
      }
      var a = {
        array: n,
        bigint: n,
        bool: n,
        func: n,
        number: n,
        object: n,
        string: n,
        symbol: n,
        any: n,
        arrayOf: i,
        element: n,
        elementType: n,
        instanceOf: i,
        node: n,
        objectOf: i,
        oneOf: i,
        oneOfType: i,
        shape: i,
        exact: i,
        checkPropTypes: r,
        resetWarningCache: t,
      };
      return (a.PropTypes = a), a;
    }),
    Kl
  );
}
var Oy;
function z2() {
  return Oy || ((Oy = 1), (Gl.exports = H2()())), Gl.exports;
}
var U2 = z2();
const fe = ge(U2);
var G2 = Object.getOwnPropertyNames,
  W2 = Object.getOwnPropertySymbols,
  K2 = Object.prototype.hasOwnProperty;
function Py(e, t) {
  return function (n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function Ei(e) {
  return function (r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, i);
    var a = i.cache,
      o = a.get(r),
      u = a.get(n);
    if (o && u) return o === n && u === r;
    a.set(r, n), a.set(n, r);
    var s = e(r, n, i);
    return a.delete(r), a.delete(n), s;
  };
}
function Cy(e) {
  return G2(e).concat(W2(e));
}
var X2 =
  Object.hasOwn ||
  function (e, t) {
    return K2.call(e, t);
  };
function gr(e, t) {
  return e === t || (!e && !t && e !== e && t !== t);
}
var Y2 = "__v",
  Z2 = "__o",
  J2 = "_owner",
  Ay = Object.getOwnPropertyDescriptor,
  Ey = Object.keys;
function Q2(e, t, r) {
  var n = e.length;
  if (t.length !== n) return !1;
  for (; n-- > 0; ) if (!r.equals(e[n], t[n], n, n, e, t, r)) return !1;
  return !0;
}
function eN(e, t) {
  return gr(e.getTime(), t.getTime());
}
function tN(e, t) {
  return (
    e.name === t.name &&
    e.message === t.message &&
    e.cause === t.cause &&
    e.stack === t.stack
  );
}
function rN(e, t) {
  return e === t;
}
function Ty(e, t, r) {
  var n = e.size;
  if (n !== t.size) return !1;
  if (!n) return !0;
  for (
    var i = new Array(n), a = e.entries(), o, u, s = 0;
    (o = a.next()) && !o.done;

  ) {
    for (var l = t.entries(), f = !1, c = 0; (u = l.next()) && !u.done; ) {
      if (i[c]) {
        c++;
        continue;
      }
      var d = o.value,
        p = u.value;
      if (
        r.equals(d[0], p[0], s, c, e, t, r) &&
        r.equals(d[1], p[1], d[0], p[0], e, t, r)
      ) {
        f = i[c] = !0;
        break;
      }
      c++;
    }
    if (!f) return !1;
    s++;
  }
  return !0;
}
var nN = gr;
function iN(e, t, r) {
  var n = Ey(e),
    i = n.length;
  if (Ey(t).length !== i) return !1;
  for (; i-- > 0; ) if (!xw(e, t, r, n[i])) return !1;
  return !0;
}
function ln(e, t, r) {
  var n = Cy(e),
    i = n.length;
  if (Cy(t).length !== i) return !1;
  for (var a, o, u; i-- > 0; )
    if (
      ((a = n[i]),
      !xw(e, t, r, a) ||
        ((o = Ay(e, a)),
        (u = Ay(t, a)),
        (o || u) &&
          (!o ||
            !u ||
            o.configurable !== u.configurable ||
            o.enumerable !== u.enumerable ||
            o.writable !== u.writable)))
    )
      return !1;
  return !0;
}
function aN(e, t) {
  return gr(e.valueOf(), t.valueOf());
}
function oN(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Ry(e, t, r) {
  var n = e.size;
  if (n !== t.size) return !1;
  if (!n) return !0;
  for (
    var i = new Array(n), a = e.values(), o, u;
    (o = a.next()) && !o.done;

  ) {
    for (var s = t.values(), l = !1, f = 0; (u = s.next()) && !u.done; ) {
      if (!i[f] && r.equals(o.value, u.value, o.value, u.value, e, t, r)) {
        l = i[f] = !0;
        break;
      }
      f++;
    }
    if (!l) return !1;
  }
  return !0;
}
function uN(e, t) {
  var r = e.length;
  if (t.length !== r) return !1;
  for (; r-- > 0; ) if (e[r] !== t[r]) return !1;
  return !0;
}
function sN(e, t) {
  return (
    e.hostname === t.hostname &&
    e.pathname === t.pathname &&
    e.protocol === t.protocol &&
    e.port === t.port &&
    e.hash === t.hash &&
    e.username === t.username &&
    e.password === t.password
  );
}
function xw(e, t, r, n) {
  return (n === J2 || n === Z2 || n === Y2) && (e.$$typeof || t.$$typeof)
    ? !0
    : X2(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
var lN = "[object Arguments]",
  cN = "[object Boolean]",
  fN = "[object Date]",
  dN = "[object Error]",
  pN = "[object Map]",
  hN = "[object Number]",
  gN = "[object Object]",
  vN = "[object RegExp]",
  mN = "[object Set]",
  yN = "[object String]",
  bN = "[object URL]",
  xN = Array.isArray,
  My =
    typeof ArrayBuffer == "function" && ArrayBuffer.isView
      ? ArrayBuffer.isView
      : null,
  jy = Object.assign,
  wN = Object.prototype.toString.call.bind(Object.prototype.toString);
function SN(e) {
  var t = e.areArraysEqual,
    r = e.areDatesEqual,
    n = e.areErrorsEqual,
    i = e.areFunctionsEqual,
    a = e.areMapsEqual,
    o = e.areNumbersEqual,
    u = e.areObjectsEqual,
    s = e.arePrimitiveWrappersEqual,
    l = e.areRegExpsEqual,
    f = e.areSetsEqual,
    c = e.areTypedArraysEqual,
    d = e.areUrlsEqual;
  return function (v, h, g) {
    if (v === h) return !0;
    if (v == null || h == null) return !1;
    var y = typeof v;
    if (y !== typeof h) return !1;
    if (y !== "object")
      return y === "number" ? o(v, h, g) : y === "function" ? i(v, h, g) : !1;
    var b = v.constructor;
    if (b !== h.constructor) return !1;
    if (b === Object) return u(v, h, g);
    if (xN(v)) return t(v, h, g);
    if (My != null && My(v)) return c(v, h, g);
    if (b === Date) return r(v, h, g);
    if (b === RegExp) return l(v, h, g);
    if (b === Map) return a(v, h, g);
    if (b === Set) return f(v, h, g);
    var w = wN(v);
    return w === fN
      ? r(v, h, g)
      : w === vN
        ? l(v, h, g)
        : w === pN
          ? a(v, h, g)
          : w === mN
            ? f(v, h, g)
            : w === gN
              ? typeof v.then != "function" &&
                typeof h.then != "function" &&
                u(v, h, g)
              : w === bN
                ? d(v, h, g)
                : w === dN
                  ? n(v, h, g)
                  : w === lN
                    ? u(v, h, g)
                    : w === cN || w === hN || w === yN
                      ? s(v, h, g)
                      : !1;
  };
}
function _N(e) {
  var t = e.circular,
    r = e.createCustomConfig,
    n = e.strict,
    i = {
      areArraysEqual: n ? ln : Q2,
      areDatesEqual: eN,
      areErrorsEqual: tN,
      areFunctionsEqual: rN,
      areMapsEqual: n ? Py(Ty, ln) : Ty,
      areNumbersEqual: nN,
      areObjectsEqual: n ? ln : iN,
      arePrimitiveWrappersEqual: aN,
      areRegExpsEqual: oN,
      areSetsEqual: n ? Py(Ry, ln) : Ry,
      areTypedArraysEqual: n ? ln : uN,
      areUrlsEqual: sN,
    };
  if ((r && (i = jy({}, i, r(i))), t)) {
    var a = Ei(i.areArraysEqual),
      o = Ei(i.areMapsEqual),
      u = Ei(i.areObjectsEqual),
      s = Ei(i.areSetsEqual);
    i = jy({}, i, {
      areArraysEqual: a,
      areMapsEqual: o,
      areObjectsEqual: u,
      areSetsEqual: s,
    });
  }
  return i;
}
function ON(e) {
  return function (t, r, n, i, a, o, u) {
    return e(t, r, u);
  };
}
function PN(e) {
  var t = e.circular,
    r = e.comparator,
    n = e.createState,
    i = e.equals,
    a = e.strict;
  if (n)
    return function (s, l) {
      var f = n(),
        c = f.cache,
        d = c === void 0 ? (t ? new WeakMap() : void 0) : c,
        p = f.meta;
      return r(s, l, { cache: d, equals: i, meta: p, strict: a });
    };
  if (t)
    return function (s, l) {
      return r(s, l, {
        cache: new WeakMap(),
        equals: i,
        meta: void 0,
        strict: a,
      });
    };
  var o = { cache: void 0, equals: i, meta: void 0, strict: a };
  return function (s, l) {
    return r(s, l, o);
  };
}
var CN = Kt();
Kt({ strict: !0 });
Kt({ circular: !0 });
Kt({ circular: !0, strict: !0 });
Kt({
  createInternalComparator: function () {
    return gr;
  },
});
Kt({
  strict: !0,
  createInternalComparator: function () {
    return gr;
  },
});
Kt({
  circular: !0,
  createInternalComparator: function () {
    return gr;
  },
});
Kt({
  circular: !0,
  createInternalComparator: function () {
    return gr;
  },
  strict: !0,
});
function Kt(e) {
  e === void 0 && (e = {});
  var t = e.circular,
    r = t === void 0 ? !1 : t,
    n = e.createInternalComparator,
    i = e.createState,
    a = e.strict,
    o = a === void 0 ? !1 : a,
    u = _N(e),
    s = SN(u),
    l = n ? n(s) : ON(s);
  return PN({
    circular: r,
    comparator: s,
    createState: i,
    equals: l,
    strict: o,
  });
}
function AN(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function Iy(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = -1,
    n = function i(a) {
      r < 0 && (r = a), a - r > t ? (e(a), (r = -1)) : AN(i);
    };
  requestAnimationFrame(n);
}
function Sf(e) {
  "@babel/helpers - typeof";
  return (
    (Sf =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Sf(e)
  );
}
function EN(e) {
  return jN(e) || MN(e) || RN(e) || TN();
}
function TN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function RN(e, t) {
  if (e) {
    if (typeof e == "string") return $y(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return $y(e, t);
  }
}
function $y(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function MN(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function jN(e) {
  if (Array.isArray(e)) return e;
}
function IN() {
  var e = {},
    t = function () {
      return null;
    },
    r = !1,
    n = function i(a) {
      if (!r) {
        if (Array.isArray(a)) {
          if (!a.length) return;
          var o = a,
            u = EN(o),
            s = u[0],
            l = u.slice(1);
          if (typeof s == "number") {
            Iy(i.bind(null, l), s);
            return;
          }
          i(s), Iy(i.bind(null, l));
          return;
        }
        Sf(a) === "object" && ((e = a), t(e)), typeof a == "function" && a();
      }
    };
  return {
    stop: function () {
      r = !0;
    },
    start: function (a) {
      (r = !1), n(a);
    },
    subscribe: function (a) {
      return (
        (t = a),
        function () {
          t = function () {
            return null;
          };
        }
      );
    },
  };
}
function Hn(e) {
  "@babel/helpers - typeof";
  return (
    (Hn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Hn(e)
  );
}
function Ny(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Dy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ny(Object(r), !0).forEach(function (n) {
          ww(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ny(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ww(e, t, r) {
  return (
    (t = $N(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function $N(e) {
  var t = NN(e, "string");
  return Hn(t) === "symbol" ? t : String(t);
}
function NN(e, t) {
  if (Hn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Hn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var DN = function (t, r) {
    return [Object.keys(t), Object.keys(r)].reduce(function (n, i) {
      return n.filter(function (a) {
        return i.includes(a);
      });
    });
  },
  kN = function (t) {
    return t;
  },
  qN = function (t) {
    return t.replace(/([A-Z])/g, function (r) {
      return "-".concat(r.toLowerCase());
    });
  },
  bn = function (t, r) {
    return Object.keys(r).reduce(function (n, i) {
      return Dy(Dy({}, n), {}, ww({}, i, t(i, r[i])));
    }, {});
  },
  ky = function (t, r, n) {
    return t
      .map(function (i) {
        return "".concat(qN(i), " ").concat(r, "ms ").concat(n);
      })
      .join(",");
  };
function FN(e, t) {
  return VN(e) || BN(e, t) || Sw(e, t) || LN();
}
function LN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BN(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          s = !0
        );
    } catch (f) {
      (l = !0), (i = f);
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function VN(e) {
  if (Array.isArray(e)) return e;
}
function HN(e) {
  return GN(e) || UN(e) || Sw(e) || zN();
}
function zN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sw(e, t) {
  if (e) {
    if (typeof e == "string") return _f(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return _f(e, t);
  }
}
function UN(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function GN(e) {
  if (Array.isArray(e)) return _f(e);
}
function _f(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var oa = 1e-4,
  _w = function (t, r) {
    return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
  },
  Ow = function (t, r) {
    return t
      .map(function (n, i) {
        return n * Math.pow(r, i);
      })
      .reduce(function (n, i) {
        return n + i;
      });
  },
  qy = function (t, r) {
    return function (n) {
      var i = _w(t, r);
      return Ow(i, n);
    };
  },
  WN = function (t, r) {
    return function (n) {
      var i = _w(t, r),
        a = [].concat(
          HN(
            i
              .map(function (o, u) {
                return o * u;
              })
              .slice(1),
          ),
          [0],
        );
      return Ow(a, n);
    };
  },
  Fy = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var i = r[0],
      a = r[1],
      o = r[2],
      u = r[3];
    if (r.length === 1)
      switch (r[0]) {
        case "linear":
          (i = 0), (a = 0), (o = 1), (u = 1);
          break;
        case "ease":
          (i = 0.25), (a = 0.1), (o = 0.25), (u = 1);
          break;
        case "ease-in":
          (i = 0.42), (a = 0), (o = 1), (u = 1);
          break;
        case "ease-out":
          (i = 0.42), (a = 0), (o = 0.58), (u = 1);
          break;
        case "ease-in-out":
          (i = 0), (a = 0), (o = 0.58), (u = 1);
          break;
        default: {
          var s = r[0].split("(");
          if (
            s[0] === "cubic-bezier" &&
            s[1].split(")")[0].split(",").length === 4
          ) {
            var l = s[1]
                .split(")")[0]
                .split(",")
                .map(function (g) {
                  return parseFloat(g);
                }),
              f = FN(l, 4);
            (i = f[0]), (a = f[1]), (o = f[2]), (u = f[3]);
          }
        }
      }
    var c = qy(i, o),
      d = qy(a, u),
      p = WN(i, o),
      v = function (y) {
        return y > 1 ? 1 : y < 0 ? 0 : y;
      },
      h = function (y) {
        for (var b = y > 1 ? 1 : y, w = b, _ = 0; _ < 8; ++_) {
          var m = c(w) - b,
            x = p(w);
          if (Math.abs(m - b) < oa || x < oa) return d(w);
          w = v(w - m / x);
        }
        return d(w);
      };
    return (h.isStepper = !1), h;
  },
  KN = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.stiff,
      n = r === void 0 ? 100 : r,
      i = t.damping,
      a = i === void 0 ? 8 : i,
      o = t.dt,
      u = o === void 0 ? 17 : o,
      s = function (f, c, d) {
        var p = -(f - c) * n,
          v = d * a,
          h = d + ((p - v) * u) / 1e3,
          g = (d * u) / 1e3 + f;
        return Math.abs(g - c) < oa && Math.abs(h) < oa ? [c, 0] : [g, h];
      };
    return (s.isStepper = !0), (s.dt = u), s;
  },
  XN = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var i = r[0];
    if (typeof i == "string")
      switch (i) {
        case "ease":
        case "ease-in-out":
        case "ease-out":
        case "ease-in":
        case "linear":
          return Fy(i);
        case "spring":
          return KN();
        default:
          if (i.split("(")[0] === "cubic-bezier") return Fy(i);
      }
    return typeof i == "function" ? i : null;
  };
function zn(e) {
  "@babel/helpers - typeof";
  return (
    (zn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    zn(e)
  );
}
function Ly(e) {
  return JN(e) || ZN(e) || Pw(e) || YN();
}
function YN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZN(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function JN(e) {
  if (Array.isArray(e)) return Pf(e);
}
function By(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? By(Object(r), !0).forEach(function (n) {
          Of(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : By(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Of(e, t, r) {
  return (
    (t = QN(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function QN(e) {
  var t = eD(e, "string");
  return zn(t) === "symbol" ? t : String(t);
}
function eD(e, t) {
  if (zn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function tD(e, t) {
  return iD(e) || nD(e, t) || Pw(e, t) || rD();
}
function rD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pw(e, t) {
  if (e) {
    if (typeof e == "string") return Pf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Pf(e, t);
  }
}
function Pf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function nD(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          s = !0
        );
    } catch (f) {
      (l = !0), (i = f);
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function iD(e) {
  if (Array.isArray(e)) return e;
}
var ua = function (t, r, n) {
    return t + (r - t) * n;
  },
  Cf = function (t) {
    var r = t.from,
      n = t.to;
    return r !== n;
  },
  aD = function e(t, r, n) {
    var i = bn(function (a, o) {
      if (Cf(o)) {
        var u = t(o.from, o.to, o.velocity),
          s = tD(u, 2),
          l = s[0],
          f = s[1];
        return Ie(Ie({}, o), {}, { from: l, velocity: f });
      }
      return o;
    }, r);
    return n < 1
      ? bn(function (a, o) {
          return Cf(o)
            ? Ie(
                Ie({}, o),
                {},
                {
                  velocity: ua(o.velocity, i[a].velocity, n),
                  from: ua(o.from, i[a].from, n),
                },
              )
            : o;
        }, r)
      : e(t, i, n - 1);
  };
const oD = function (e, t, r, n, i) {
  var a = DN(e, t),
    o = a.reduce(function (g, y) {
      return Ie(Ie({}, g), {}, Of({}, y, [e[y], t[y]]));
    }, {}),
    u = a.reduce(function (g, y) {
      return Ie(
        Ie({}, g),
        {},
        Of({}, y, { from: e[y], velocity: 0, to: t[y] }),
      );
    }, {}),
    s = -1,
    l,
    f,
    c = function () {
      return null;
    },
    d = function () {
      return bn(function (y, b) {
        return b.from;
      }, u);
    },
    p = function () {
      return !Object.values(u).filter(Cf).length;
    },
    v = function (y) {
      l || (l = y);
      var b = y - l,
        w = b / r.dt;
      (u = aD(r, u, w)),
        i(Ie(Ie(Ie({}, e), t), d())),
        (l = y),
        p() || (s = requestAnimationFrame(c));
    },
    h = function (y) {
      f || (f = y);
      var b = (y - f) / n,
        w = bn(function (m, x) {
          return ua.apply(void 0, Ly(x).concat([r(b)]));
        }, o);
      if ((i(Ie(Ie(Ie({}, e), t), w)), b < 1)) s = requestAnimationFrame(c);
      else {
        var _ = bn(function (m, x) {
          return ua.apply(void 0, Ly(x).concat([r(1)]));
        }, o);
        i(Ie(Ie(Ie({}, e), t), _));
      }
    };
  return (
    (c = r.isStepper ? v : h),
    function () {
      return (
        requestAnimationFrame(c),
        function () {
          cancelAnimationFrame(s);
        }
      );
    }
  );
};
function kr(e) {
  "@babel/helpers - typeof";
  return (
    (kr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    kr(e)
  );
}
var uD = [
  "children",
  "begin",
  "duration",
  "attributeName",
  "easing",
  "isActive",
  "steps",
  "from",
  "to",
  "canBegin",
  "onAnimationEnd",
  "shouldReAnimate",
  "onAnimationReStart",
];
function sD(e, t) {
  if (e == null) return {};
  var r = lD(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function lD(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Xl(e) {
  return pD(e) || dD(e) || fD(e) || cD();
}
function cD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fD(e, t) {
  if (e) {
    if (typeof e == "string") return Af(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Af(e, t);
  }
}
function dD(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function pD(e) {
  if (Array.isArray(e)) return Af(e);
}
function Af(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Vy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vy(Object(r), !0).forEach(function (n) {
          gn(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Vy(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function gn(e, t, r) {
  return (
    (t = Cw(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function hD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gD(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Cw(n.key), n);
  }
}
function vD(e, t, r) {
  return (
    t && gD(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Cw(e) {
  var t = mD(e, "string");
  return kr(t) === "symbol" ? t : String(t);
}
function mD(e, t) {
  if (kr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (kr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Ef(e, t);
}
function Ef(e, t) {
  return (
    (Ef = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Ef(e, t)
  );
}
function bD(e) {
  var t = xD();
  return function () {
    var n = sa(e),
      i;
    if (t) {
      var a = sa(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return Tf(this, i);
  };
}
function Tf(e, t) {
  if (t && (kr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Rf(e);
}
function Rf(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function xD() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function sa(e) {
  return (
    (sa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    sa(e)
  );
}
var Ft = (function (e) {
  yD(r, e);
  var t = bD(r);
  function r(n, i) {
    var a;
    hD(this, r), (a = t.call(this, n, i));
    var o = a.props,
      u = o.isActive,
      s = o.attributeName,
      l = o.from,
      f = o.to,
      c = o.steps,
      d = o.children,
      p = o.duration;
    if (
      ((a.handleStyleChange = a.handleStyleChange.bind(Rf(a))),
      (a.changeStyle = a.changeStyle.bind(Rf(a))),
      !u || p <= 0)
    )
      return (
        (a.state = { style: {} }),
        typeof d == "function" && (a.state = { style: f }),
        Tf(a)
      );
    if (c && c.length) a.state = { style: c[0].style };
    else if (l) {
      if (typeof d == "function") return (a.state = { style: l }), Tf(a);
      a.state = { style: s ? gn({}, s, l) : l };
    } else a.state = { style: {} };
    return a;
  }
  return (
    vD(r, [
      {
        key: "componentDidMount",
        value: function () {
          var i = this.props,
            a = i.isActive,
            o = i.canBegin;
          (this.mounted = !0), !(!a || !o) && this.runAnimation(this.props);
        },
      },
      {
        key: "componentDidUpdate",
        value: function (i) {
          var a = this.props,
            o = a.isActive,
            u = a.canBegin,
            s = a.attributeName,
            l = a.shouldReAnimate,
            f = a.to,
            c = a.from,
            d = this.state.style;
          if (u) {
            if (!o) {
              var p = { style: s ? gn({}, s, f) : f };
              this.state &&
                d &&
                ((s && d[s] !== f) || (!s && d !== f)) &&
                this.setState(p);
              return;
            }
            if (!(CN(i.to, f) && i.canBegin && i.isActive)) {
              var v = !i.canBegin || !i.isActive;
              this.manager && this.manager.stop(),
                this.stopJSAnimation && this.stopJSAnimation();
              var h = v || l ? c : i.to;
              if (this.state && d) {
                var g = { style: s ? gn({}, s, h) : h };
                ((s && d[s] !== h) || (!s && d !== h)) && this.setState(g);
              }
              this.runAnimation(
                Je(Je({}, this.props), {}, { from: h, begin: 0 }),
              );
            }
          }
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.mounted = !1;
          var i = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(),
            this.manager && (this.manager.stop(), (this.manager = null)),
            this.stopJSAnimation && this.stopJSAnimation(),
            i && i();
        },
      },
      {
        key: "handleStyleChange",
        value: function (i) {
          this.changeStyle(i);
        },
      },
      {
        key: "changeStyle",
        value: function (i) {
          this.mounted && this.setState({ style: i });
        },
      },
      {
        key: "runJSAnimation",
        value: function (i) {
          var a = this,
            o = i.from,
            u = i.to,
            s = i.duration,
            l = i.easing,
            f = i.begin,
            c = i.onAnimationEnd,
            d = i.onAnimationStart,
            p = oD(o, u, XN(l), s, this.changeStyle),
            v = function () {
              a.stopJSAnimation = p();
            };
          this.manager.start([d, f, v, s, c]);
        },
      },
      {
        key: "runStepAnimation",
        value: function (i) {
          var a = this,
            o = i.steps,
            u = i.begin,
            s = i.onAnimationStart,
            l = o[0],
            f = l.style,
            c = l.duration,
            d = c === void 0 ? 0 : c,
            p = function (h, g, y) {
              if (y === 0) return h;
              var b = g.duration,
                w = g.easing,
                _ = w === void 0 ? "ease" : w,
                m = g.style,
                x = g.properties,
                S = g.onAnimationEnd,
                P = y > 0 ? o[y - 1] : g,
                E = x || Object.keys(m);
              if (typeof _ == "function" || _ === "spring")
                return [].concat(Xl(h), [
                  a.runJSAnimation.bind(a, {
                    from: P.style,
                    to: m,
                    duration: b,
                    easing: _,
                  }),
                  b,
                ]);
              var j = ky(E, b, _),
                A = Je(Je(Je({}, P.style), m), {}, { transition: j });
              return [].concat(Xl(h), [A, b, S]).filter(kN);
            };
          return this.manager.start(
            [s].concat(Xl(o.reduce(p, [f, Math.max(d, u)])), [
              i.onAnimationEnd,
            ]),
          );
        },
      },
      {
        key: "runAnimation",
        value: function (i) {
          this.manager || (this.manager = IN());
          var a = i.begin,
            o = i.duration,
            u = i.attributeName,
            s = i.to,
            l = i.easing,
            f = i.onAnimationStart,
            c = i.onAnimationEnd,
            d = i.steps,
            p = i.children,
            v = this.manager;
          if (
            ((this.unSubscribe = v.subscribe(this.handleStyleChange)),
            typeof l == "function" || typeof p == "function" || l === "spring")
          ) {
            this.runJSAnimation(i);
            return;
          }
          if (d.length > 1) {
            this.runStepAnimation(i);
            return;
          }
          var h = u ? gn({}, u, s) : s,
            g = ky(Object.keys(h), o, l);
          v.start([f, a, Je(Je({}, h), {}, { transition: g }), o, c]);
        },
      },
      {
        key: "render",
        value: function () {
          var i = this.props,
            a = i.children;
          i.begin;
          var o = i.duration;
          i.attributeName, i.easing;
          var u = i.isActive;
          i.steps,
            i.from,
            i.to,
            i.canBegin,
            i.onAnimationEnd,
            i.shouldReAnimate,
            i.onAnimationReStart;
          var s = sD(i, uD),
            l = O.Children.count(a),
            f = this.state.style;
          if (typeof a == "function") return a(f);
          if (!u || l === 0 || o <= 0) return a;
          var c = function (p) {
            var v = p.props,
              h = v.style,
              g = h === void 0 ? {} : h,
              y = v.className,
              b = O.cloneElement(
                p,
                Je(Je({}, s), {}, { style: Je(Je({}, g), f), className: y }),
              );
            return b;
          };
          return l === 1
            ? c(O.Children.only(a))
            : I.createElement(
                "div",
                null,
                O.Children.map(a, function (d) {
                  return c(d);
                }),
              );
        },
      },
    ]),
    r
  );
})(O.PureComponent);
Ft.displayName = "Animate";
Ft.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function () {},
  onAnimationStart: function () {},
};
Ft.propTypes = {
  from: fe.oneOfType([fe.object, fe.string]),
  to: fe.oneOfType([fe.object, fe.string]),
  attributeName: fe.string,
  duration: fe.number,
  begin: fe.number,
  easing: fe.oneOfType([fe.string, fe.func]),
  steps: fe.arrayOf(
    fe.shape({
      duration: fe.number.isRequired,
      style: fe.object.isRequired,
      easing: fe.oneOfType([
        fe.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]),
        fe.func,
      ]),
      properties: fe.arrayOf("string"),
      onAnimationEnd: fe.func,
    }),
  ),
  children: fe.oneOfType([fe.node, fe.func]),
  isActive: fe.bool,
  canBegin: fe.bool,
  onAnimationEnd: fe.func,
  shouldReAnimate: fe.bool,
  onAnimationStart: fe.func,
  onAnimationReStart: fe.func,
};
function Un(e) {
  "@babel/helpers - typeof";
  return (
    (Un =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Un(e)
  );
}
function la() {
  return (
    (la = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    la.apply(this, arguments)
  );
}
function wD(e, t) {
  return PD(e) || OD(e, t) || _D(e, t) || SD();
}
function SD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _D(e, t) {
  if (e) {
    if (typeof e == "string") return Hy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Hy(e, t);
  }
}
function Hy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function OD(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          s = !0
        );
    } catch (f) {
      (l = !0), (i = f);
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function PD(e) {
  if (Array.isArray(e)) return e;
}
function zy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Uy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zy(Object(r), !0).forEach(function (n) {
          CD(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : zy(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function CD(e, t, r) {
  return (
    (t = AD(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function AD(e) {
  var t = ED(e, "string");
  return Un(t) == "symbol" ? t : t + "";
}
function ED(e, t) {
  if (Un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Gy = function (t, r, n, i, a) {
    var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2),
      u = i >= 0 ? 1 : -1,
      s = n >= 0 ? 1 : -1,
      l = (i >= 0 && n >= 0) || (i < 0 && n < 0) ? 1 : 0,
      f;
    if (o > 0 && a instanceof Array) {
      for (var c = [0, 0, 0, 0], d = 0, p = 4; d < p; d++)
        c[d] = a[d] > o ? o : a[d];
      (f = "M".concat(t, ",").concat(r + u * c[0])),
        c[0] > 0 &&
          (f += "A "
            .concat(c[0], ",")
            .concat(c[0], ",0,0,")
            .concat(l, ",")
            .concat(t + s * c[0], ",")
            .concat(r)),
        (f += "L ".concat(t + n - s * c[1], ",").concat(r)),
        c[1] > 0 &&
          (f += "A "
            .concat(c[1], ",")
            .concat(c[1], ",0,0,")
            .concat(
              l,
              `,
        `,
            )
            .concat(t + n, ",")
            .concat(r + u * c[1])),
        (f += "L ".concat(t + n, ",").concat(r + i - u * c[2])),
        c[2] > 0 &&
          (f += "A "
            .concat(c[2], ",")
            .concat(c[2], ",0,0,")
            .concat(
              l,
              `,
        `,
            )
            .concat(t + n - s * c[2], ",")
            .concat(r + i)),
        (f += "L ".concat(t + s * c[3], ",").concat(r + i)),
        c[3] > 0 &&
          (f += "A "
            .concat(c[3], ",")
            .concat(c[3], ",0,0,")
            .concat(
              l,
              `,
        `,
            )
            .concat(t, ",")
            .concat(r + i - u * c[3])),
        (f += "Z");
    } else if (o > 0 && a === +a && a > 0) {
      var v = Math.min(o, a);
      f = "M "
        .concat(t, ",")
        .concat(
          r + u * v,
          `
            A `,
        )
        .concat(v, ",")
        .concat(v, ",0,0,")
        .concat(l, ",")
        .concat(t + s * v, ",")
        .concat(
          r,
          `
            L `,
        )
        .concat(t + n - s * v, ",")
        .concat(
          r,
          `
            A `,
        )
        .concat(v, ",")
        .concat(v, ",0,0,")
        .concat(l, ",")
        .concat(t + n, ",")
        .concat(
          r + u * v,
          `
            L `,
        )
        .concat(t + n, ",")
        .concat(
          r + i - u * v,
          `
            A `,
        )
        .concat(v, ",")
        .concat(v, ",0,0,")
        .concat(l, ",")
        .concat(t + n - s * v, ",")
        .concat(
          r + i,
          `
            L `,
        )
        .concat(t + s * v, ",")
        .concat(
          r + i,
          `
            A `,
        )
        .concat(v, ",")
        .concat(v, ",0,0,")
        .concat(l, ",")
        .concat(t, ",")
        .concat(r + i - u * v, " Z");
    } else
      f = "M "
        .concat(t, ",")
        .concat(r, " h ")
        .concat(n, " v ")
        .concat(i, " h ")
        .concat(-n, " Z");
    return f;
  },
  TD = function (t, r) {
    if (!t || !r) return !1;
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y,
      u = r.width,
      s = r.height;
    if (Math.abs(u) > 0 && Math.abs(s) > 0) {
      var l = Math.min(a, a + u),
        f = Math.max(a, a + u),
        c = Math.min(o, o + s),
        d = Math.max(o, o + s);
      return n >= l && n <= f && i >= c && i <= d;
    }
    return !1;
  },
  RD = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  Zd = function (t) {
    var r = Uy(Uy({}, RD), t),
      n = O.useRef(),
      i = O.useState(-1),
      a = wD(i, 2),
      o = a[0],
      u = a[1];
    O.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var _ = n.current.getTotalLength();
          _ && u(_);
        } catch {}
    }, []);
    var s = r.x,
      l = r.y,
      f = r.width,
      c = r.height,
      d = r.radius,
      p = r.className,
      v = r.animationEasing,
      h = r.animationDuration,
      g = r.animationBegin,
      y = r.isAnimationActive,
      b = r.isUpdateAnimationActive;
    if (s !== +s || l !== +l || f !== +f || c !== +c || f === 0 || c === 0)
      return null;
    var w = me("recharts-rectangle", p);
    return b
      ? I.createElement(
          Ft,
          {
            canBegin: o > 0,
            from: { width: f, height: c, x: s, y: l },
            to: { width: f, height: c, x: s, y: l },
            duration: h,
            animationEasing: v,
            isActive: b,
          },
          function (_) {
            var m = _.width,
              x = _.height,
              S = _.x,
              P = _.y;
            return I.createElement(
              Ft,
              {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: g,
                duration: h,
                isActive: y,
                easing: v,
              },
              I.createElement(
                "path",
                la({}, ye(r, !0), {
                  className: w,
                  d: Gy(S, P, m, x, d),
                  ref: n,
                }),
              ),
            );
          },
        )
      : I.createElement(
          "path",
          la({}, ye(r, !0), { className: w, d: Gy(s, l, f, c, d) }),
        );
  };
function Mf() {
  return (
    (Mf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Mf.apply(this, arguments)
  );
}
var Aw = function (t) {
  var r = t.cx,
    n = t.cy,
    i = t.r,
    a = t.className,
    o = me("recharts-dot", a);
  return r === +r && n === +n && i === +i
    ? I.createElement(
        "circle",
        Mf({}, ye(t, !1), Ii(t), { className: o, cx: r, cy: n, r: i }),
      )
    : null;
};
function Gn(e) {
  "@babel/helpers - typeof";
  return (
    (Gn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Gn(e)
  );
}
var MD = ["x", "y", "top", "left", "width", "height", "className"];
function jf() {
  return (
    (jf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    jf.apply(this, arguments)
  );
}
function Wy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function jD(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wy(Object(r), !0).forEach(function (n) {
          ID(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wy(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ID(e, t, r) {
  return (
    (t = $D(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function $D(e) {
  var t = ND(e, "string");
  return Gn(t) == "symbol" ? t : t + "";
}
function ND(e, t) {
  if (Gn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function DD(e, t) {
  if (e == null) return {};
  var r = kD(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function kD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var qD = function (t, r, n, i, a, o) {
    return "M"
      .concat(t, ",")
      .concat(a, "v")
      .concat(i, "M")
      .concat(o, ",")
      .concat(r, "h")
      .concat(n);
  },
  FD = function (t) {
    var r = t.x,
      n = r === void 0 ? 0 : r,
      i = t.y,
      a = i === void 0 ? 0 : i,
      o = t.top,
      u = o === void 0 ? 0 : o,
      s = t.left,
      l = s === void 0 ? 0 : s,
      f = t.width,
      c = f === void 0 ? 0 : f,
      d = t.height,
      p = d === void 0 ? 0 : d,
      v = t.className,
      h = DD(t, MD),
      g = jD({ x: n, y: a, top: u, left: l, width: c, height: p }, h);
    return !W(n) || !W(a) || !W(c) || !W(p) || !W(u) || !W(l)
      ? null
      : I.createElement(
          "path",
          jf({}, ye(g, !0), {
            className: me("recharts-cross", v),
            d: qD(n, a, c, p, u, l),
          }),
        );
  },
  Yl,
  Ky;
function LD() {
  if (Ky) return Yl;
  Ky = 1;
  var e = Hx(),
    t = e(Object.getPrototypeOf, Object);
  return (Yl = t), Yl;
}
var Zl, Xy;
function BD() {
  if (Xy) return Zl;
  Xy = 1;
  var e = Ct(),
    t = LD(),
    r = At(),
    n = "[object Object]",
    i = Function.prototype,
    a = Object.prototype,
    o = i.toString,
    u = a.hasOwnProperty,
    s = o.call(Object);
  function l(f) {
    if (!r(f) || e(f) != n) return !1;
    var c = t(f);
    if (c === null) return !0;
    var d = u.call(c, "constructor") && c.constructor;
    return typeof d == "function" && d instanceof d && o.call(d) == s;
  }
  return (Zl = l), Zl;
}
var VD = BD();
const HD = ge(VD);
var Jl, Yy;
function zD() {
  if (Yy) return Jl;
  Yy = 1;
  var e = Ct(),
    t = At(),
    r = "[object Boolean]";
  function n(i) {
    return i === !0 || i === !1 || (t(i) && e(i) == r);
  }
  return (Jl = n), Jl;
}
var UD = zD();
const GD = ge(UD);
function Wn(e) {
  "@babel/helpers - typeof";
  return (
    (Wn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Wn(e)
  );
}
function ca() {
  return (
    (ca = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ca.apply(this, arguments)
  );
}
function WD(e, t) {
  return ZD(e) || YD(e, t) || XD(e, t) || KD();
}
function KD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function XD(e, t) {
  if (e) {
    if (typeof e == "string") return Zy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Zy(e, t);
  }
}
function Zy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function YD(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          s = !0
        );
    } catch (f) {
      (l = !0), (i = f);
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function ZD(e) {
  if (Array.isArray(e)) return e;
}
function Jy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Qy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jy(Object(r), !0).forEach(function (n) {
          JD(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Jy(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function JD(e, t, r) {
  return (
    (t = QD(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function QD(e) {
  var t = ek(e, "string");
  return Wn(t) == "symbol" ? t : t + "";
}
function ek(e, t) {
  if (Wn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Wn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var e0 = function (t, r, n, i, a) {
    var o = n - i,
      u;
    return (
      (u = "M ".concat(t, ",").concat(r)),
      (u += "L ".concat(t + n, ",").concat(r)),
      (u += "L ".concat(t + n - o / 2, ",").concat(r + a)),
      (u += "L ".concat(t + n - o / 2 - i, ",").concat(r + a)),
      (u += "L ".concat(t, ",").concat(r, " Z")),
      u
    );
  },
  tk = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  rk = function (t) {
    var r = Qy(Qy({}, tk), t),
      n = O.useRef(),
      i = O.useState(-1),
      a = WD(i, 2),
      o = a[0],
      u = a[1];
    O.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var w = n.current.getTotalLength();
          w && u(w);
        } catch {}
    }, []);
    var s = r.x,
      l = r.y,
      f = r.upperWidth,
      c = r.lowerWidth,
      d = r.height,
      p = r.className,
      v = r.animationEasing,
      h = r.animationDuration,
      g = r.animationBegin,
      y = r.isUpdateAnimationActive;
    if (
      s !== +s ||
      l !== +l ||
      f !== +f ||
      c !== +c ||
      d !== +d ||
      (f === 0 && c === 0) ||
      d === 0
    )
      return null;
    var b = me("recharts-trapezoid", p);
    return y
      ? I.createElement(
          Ft,
          {
            canBegin: o > 0,
            from: { upperWidth: 0, lowerWidth: 0, height: d, x: s, y: l },
            to: { upperWidth: f, lowerWidth: c, height: d, x: s, y: l },
            duration: h,
            animationEasing: v,
            isActive: y,
          },
          function (w) {
            var _ = w.upperWidth,
              m = w.lowerWidth,
              x = w.height,
              S = w.x,
              P = w.y;
            return I.createElement(
              Ft,
              {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: g,
                duration: h,
                easing: v,
              },
              I.createElement(
                "path",
                ca({}, ye(r, !0), {
                  className: b,
                  d: e0(S, P, _, m, x),
                  ref: n,
                }),
              ),
            );
          },
        )
      : I.createElement(
          "g",
          null,
          I.createElement(
            "path",
            ca({}, ye(r, !0), { className: b, d: e0(s, l, f, c, d) }),
          ),
        );
  },
  nk = [
    "option",
    "shapeType",
    "propTransformer",
    "activeClassName",
    "isActive",
  ];
function Kn(e) {
  "@babel/helpers - typeof";
  return (
    (Kn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Kn(e)
  );
}
function ik(e, t) {
  if (e == null) return {};
  var r = ak(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function ak(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function t0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function fa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? t0(Object(r), !0).forEach(function (n) {
          ok(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : t0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ok(e, t, r) {
  return (
    (t = uk(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function uk(e) {
  var t = sk(e, "string");
  return Kn(t) == "symbol" ? t : t + "";
}
function sk(e, t) {
  if (Kn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Kn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function lk(e, t) {
  return fa(fa({}, t), e);
}
function ck(e, t) {
  return e === "symbols";
}
function r0(e) {
  var t = e.shapeType,
    r = e.elementProps;
  switch (t) {
    case "rectangle":
      return I.createElement(Zd, r);
    case "trapezoid":
      return I.createElement(rk, r);
    case "sector":
      return I.createElement(bw, r);
    case "symbols":
      if (ck(t)) return I.createElement(gd, r);
      break;
    default:
      return null;
  }
}
function fk(e) {
  return O.isValidElement(e) ? e.props : e;
}
function dk(e) {
  var t = e.option,
    r = e.shapeType,
    n = e.propTransformer,
    i = n === void 0 ? lk : n,
    a = e.activeClassName,
    o = a === void 0 ? "recharts-active-shape" : a,
    u = e.isActive,
    s = ik(e, nk),
    l;
  if (O.isValidElement(t)) l = O.cloneElement(t, fa(fa({}, s), fk(t)));
  else if (ae(t)) l = t(s);
  else if (HD(t) && !GD(t)) {
    var f = i(t, s);
    l = I.createElement(r0, { shapeType: r, elementProps: f });
  } else {
    var c = s;
    l = I.createElement(r0, { shapeType: r, elementProps: c });
  }
  return u ? I.createElement(De, { className: o }, l) : l;
}
function Qa(e, t) {
  return t != null && "trapezoids" in e.props;
}
function eo(e, t) {
  return t != null && "sectors" in e.props;
}
function Xn(e, t) {
  return t != null && "points" in e.props;
}
function pk(e, t) {
  var r,
    n,
    i =
      e.x ===
        (t == null || (r = t.labelViewBox) === null || r === void 0
          ? void 0
          : r.x) || e.x === t.x,
    a =
      e.y ===
        (t == null || (n = t.labelViewBox) === null || n === void 0
          ? void 0
          : n.y) || e.y === t.y;
  return i && a;
}
function hk(e, t) {
  var r = e.endAngle === t.endAngle,
    n = e.startAngle === t.startAngle;
  return r && n;
}
function gk(e, t) {
  var r = e.x === t.x,
    n = e.y === t.y,
    i = e.z === t.z;
  return r && n && i;
}
function vk(e, t) {
  var r;
  return Qa(e, t) ? (r = pk) : eo(e, t) ? (r = hk) : Xn(e, t) && (r = gk), r;
}
function mk(e, t) {
  var r;
  return (
    Qa(e, t)
      ? (r = "trapezoids")
      : eo(e, t)
        ? (r = "sectors")
        : Xn(e, t) && (r = "points"),
    r
  );
}
function yk(e, t) {
  if (Qa(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null ||
      r === void 0 ||
      (r = r[0]) === null ||
      r === void 0 ||
      (r = r.payload) === null ||
      r === void 0
      ? void 0
      : r.payload;
  }
  if (eo(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null ||
      n === void 0 ||
      (n = n[0]) === null ||
      n === void 0 ||
      (n = n.payload) === null ||
      n === void 0
      ? void 0
      : n.payload;
  }
  return Xn(e, t) ? t.payload : {};
}
function bk(e) {
  var t = e.activeTooltipItem,
    r = e.graphicalItem,
    n = e.itemData,
    i = mk(r, t),
    a = yk(r, t),
    o = n.filter(function (s, l) {
      var f = Wd(a, s),
        c = r.props[i].filter(function (v) {
          var h = vk(r, t);
          return h(v, t);
        }),
        d = r.props[i].indexOf(c[c.length - 1]),
        p = l === d;
      return f && p;
    }),
    u = n.indexOf(o[o.length - 1]);
  return u;
}
var Ql, n0;
function xk() {
  if (n0) return Ql;
  n0 = 1;
  var e = Math.ceil,
    t = Math.max;
  function r(n, i, a, o) {
    for (var u = -1, s = t(e((i - n) / (a || 1)), 0), l = Array(s); s--; )
      (l[o ? s : ++u] = n), (n += a);
    return l;
  }
  return (Ql = r), Ql;
}
var ec, i0;
function Ew() {
  if (i0) return ec;
  i0 = 1;
  var e = a1(),
    t = 1 / 0,
    r = 17976931348623157e292;
  function n(i) {
    if (!i) return i === 0 ? i : 0;
    if (((i = e(i)), i === t || i === -1 / 0)) {
      var a = i < 0 ? -1 : 1;
      return a * r;
    }
    return i === i ? i : 0;
  }
  return (ec = n), ec;
}
var tc, a0;
function wk() {
  if (a0) return tc;
  a0 = 1;
  var e = xk(),
    t = La(),
    r = Ew();
  function n(i) {
    return function (a, o, u) {
      return (
        u && typeof u != "number" && t(a, o, u) && (o = u = void 0),
        (a = r(a)),
        o === void 0 ? ((o = a), (a = 0)) : (o = r(o)),
        (u = u === void 0 ? (a < o ? 1 : -1) : r(u)),
        e(a, o, u, i)
      );
    };
  }
  return (tc = n), tc;
}
var rc, o0;
function Sk() {
  if (o0) return rc;
  o0 = 1;
  var e = wk(),
    t = e();
  return (rc = t), rc;
}
var _k = Sk();
const da = ge(_k);
function Yn(e) {
  "@babel/helpers - typeof";
  return (
    (Yn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Yn(e)
  );
}
function u0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function s0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? u0(Object(r), !0).forEach(function (n) {
          Tw(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : u0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Tw(e, t, r) {
  return (
    (t = Ok(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Ok(e) {
  var t = Pk(e, "string");
  return Yn(t) == "symbol" ? t : t + "";
}
function Pk(e, t) {
  if (Yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ck = ["Webkit", "Moz", "O", "ms"],
  Ak = function (t, r) {
    var n = t.replace(/(\w)/, function (a) {
        return a.toUpperCase();
      }),
      i = Ck.reduce(function (a, o) {
        return s0(s0({}, a), {}, Tw({}, o + n, r));
      }, {});
    return (i[t] = r), i;
  };
function qr(e) {
  "@babel/helpers - typeof";
  return (
    (qr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    qr(e)
  );
}
function pa() {
  return (
    (pa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    pa.apply(this, arguments)
  );
}
function l0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function nc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? l0(Object(r), !0).forEach(function (n) {
          Be(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : l0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ek(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function c0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Mw(n.key), n);
  }
}
function Tk(e, t, r) {
  return (
    t && c0(e.prototype, t),
    r && c0(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Rk(e, t, r) {
  return (
    (t = ha(t)),
    Mk(
      e,
      Rw() ? Reflect.construct(t, r || [], ha(e).constructor) : t.apply(e, r),
    )
  );
}
function Mk(e, t) {
  if (t && (qr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return jk(e);
}
function jk(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Rw() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Rw = function () {
    return !!e;
  })();
}
function ha(e) {
  return (
    (ha = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ha(e)
  );
}
function Ik(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && If(e, t);
}
function If(e, t) {
  return (
    (If = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    If(e, t)
  );
}
function Be(e, t, r) {
  return (
    (t = Mw(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Mw(e) {
  var t = $k(e, "string");
  return qr(t) == "symbol" ? t : t + "";
}
function $k(e, t) {
  if (qr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Nk = function (t) {
    var r = t.data,
      n = t.startIndex,
      i = t.endIndex,
      a = t.x,
      o = t.width,
      u = t.travellerWidth;
    if (!r || !r.length) return {};
    var s = r.length,
      l = mn()
        .domain(da(0, s))
        .range([a, a + o - u]),
      f = l.domain().map(function (c) {
        return l(c);
      });
    return {
      isTextActive: !1,
      isSlideMoving: !1,
      isTravellerMoving: !1,
      isTravellerFocused: !1,
      startX: l(n),
      endX: l(i),
      scale: l,
      scaleValues: f,
    };
  },
  f0 = function (t) {
    return t.changedTouches && !!t.changedTouches.length;
  },
  Fr = (function (e) {
    function t(r) {
      var n;
      return (
        Ek(this, t),
        (n = Rk(this, t, [r])),
        Be(n, "handleDrag", function (i) {
          n.leaveTimer && (clearTimeout(n.leaveTimer), (n.leaveTimer = null)),
            n.state.isTravellerMoving
              ? n.handleTravellerMove(i)
              : n.state.isSlideMoving && n.handleSlideDrag(i);
        }),
        Be(n, "handleTouchMove", function (i) {
          i.changedTouches != null &&
            i.changedTouches.length > 0 &&
            n.handleDrag(i.changedTouches[0]);
        }),
        Be(n, "handleDragEnd", function () {
          n.setState({ isTravellerMoving: !1, isSlideMoving: !1 }, function () {
            var i = n.props,
              a = i.endIndex,
              o = i.onDragEnd,
              u = i.startIndex;
            o?.({ endIndex: a, startIndex: u });
          }),
            n.detachDragEndListener();
        }),
        Be(n, "handleLeaveWrapper", function () {
          (n.state.isTravellerMoving || n.state.isSlideMoving) &&
            (n.leaveTimer = window.setTimeout(
              n.handleDragEnd,
              n.props.leaveTimeOut,
            ));
        }),
        Be(n, "handleEnterSlideOrTraveller", function () {
          n.setState({ isTextActive: !0 });
        }),
        Be(n, "handleLeaveSlideOrTraveller", function () {
          n.setState({ isTextActive: !1 });
        }),
        Be(n, "handleSlideDragStart", function (i) {
          var a = f0(i) ? i.changedTouches[0] : i;
          n.setState({
            isTravellerMoving: !1,
            isSlideMoving: !0,
            slideMoveStartX: a.pageX,
          }),
            n.attachDragEndListener();
        }),
        (n.travellerDragStartHandlers = {
          startX: n.handleTravellerDragStart.bind(n, "startX"),
          endX: n.handleTravellerDragStart.bind(n, "endX"),
        }),
        (n.state = {}),
        n
      );
    }
    return (
      Ik(t, e),
      Tk(
        t,
        [
          {
            key: "componentWillUnmount",
            value: function () {
              this.leaveTimer &&
                (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                this.detachDragEndListener();
            },
          },
          {
            key: "getIndex",
            value: function (n) {
              var i = n.startX,
                a = n.endX,
                o = this.state.scaleValues,
                u = this.props,
                s = u.gap,
                l = u.data,
                f = l.length - 1,
                c = Math.min(i, a),
                d = Math.max(i, a),
                p = t.getIndexInRange(o, c),
                v = t.getIndexInRange(o, d);
              return {
                startIndex: p - (p % s),
                endIndex: v === f ? f : v - (v % s),
              };
            },
          },
          {
            key: "getTextOfTick",
            value: function (n) {
              var i = this.props,
                a = i.data,
                o = i.tickFormatter,
                u = i.dataKey,
                s = pt(a[n], u, n);
              return ae(o) ? o(s, n) : s;
            },
          },
          {
            key: "attachDragEndListener",
            value: function () {
              window.addEventListener("mouseup", this.handleDragEnd, !0),
                window.addEventListener("touchend", this.handleDragEnd, !0),
                window.addEventListener("mousemove", this.handleDrag, !0);
            },
          },
          {
            key: "detachDragEndListener",
            value: function () {
              window.removeEventListener("mouseup", this.handleDragEnd, !0),
                window.removeEventListener("touchend", this.handleDragEnd, !0),
                window.removeEventListener("mousemove", this.handleDrag, !0);
            },
          },
          {
            key: "handleSlideDrag",
            value: function (n) {
              var i = this.state,
                a = i.slideMoveStartX,
                o = i.startX,
                u = i.endX,
                s = this.props,
                l = s.x,
                f = s.width,
                c = s.travellerWidth,
                d = s.startIndex,
                p = s.endIndex,
                v = s.onChange,
                h = n.pageX - a;
              h > 0
                ? (h = Math.min(h, l + f - c - u, l + f - c - o))
                : h < 0 && (h = Math.max(h, l - o, l - u));
              var g = this.getIndex({ startX: o + h, endX: u + h });
              (g.startIndex !== d || g.endIndex !== p) && v && v(g),
                this.setState({
                  startX: o + h,
                  endX: u + h,
                  slideMoveStartX: n.pageX,
                });
            },
          },
          {
            key: "handleTravellerDragStart",
            value: function (n, i) {
              var a = f0(i) ? i.changedTouches[0] : i;
              this.setState({
                isSlideMoving: !1,
                isTravellerMoving: !0,
                movingTravellerId: n,
                brushMoveStartX: a.pageX,
              }),
                this.attachDragEndListener();
            },
          },
          {
            key: "handleTravellerMove",
            value: function (n) {
              var i = this.state,
                a = i.brushMoveStartX,
                o = i.movingTravellerId,
                u = i.endX,
                s = i.startX,
                l = this.state[o],
                f = this.props,
                c = f.x,
                d = f.width,
                p = f.travellerWidth,
                v = f.onChange,
                h = f.gap,
                g = f.data,
                y = { startX: this.state.startX, endX: this.state.endX },
                b = n.pageX - a;
              b > 0
                ? (b = Math.min(b, c + d - p - l))
                : b < 0 && (b = Math.max(b, c - l)),
                (y[o] = l + b);
              var w = this.getIndex(y),
                _ = w.startIndex,
                m = w.endIndex,
                x = function () {
                  var P = g.length - 1;
                  return (
                    (o === "startX" && (u > s ? _ % h === 0 : m % h === 0)) ||
                    (u < s && m === P) ||
                    (o === "endX" && (u > s ? m % h === 0 : _ % h === 0)) ||
                    (u > s && m === P)
                  );
                };
              this.setState(
                Be(Be({}, o, l + b), "brushMoveStartX", n.pageX),
                function () {
                  v && x() && v(w);
                },
              );
            },
          },
          {
            key: "handleTravellerMoveKeyboard",
            value: function (n, i) {
              var a = this,
                o = this.state,
                u = o.scaleValues,
                s = o.startX,
                l = o.endX,
                f = this.state[i],
                c = u.indexOf(f);
              if (c !== -1) {
                var d = c + n;
                if (!(d === -1 || d >= u.length)) {
                  var p = u[d];
                  (i === "startX" && p >= l) ||
                    (i === "endX" && p <= s) ||
                    this.setState(Be({}, i, p), function () {
                      a.props.onChange(
                        a.getIndex({
                          startX: a.state.startX,
                          endX: a.state.endX,
                        }),
                      );
                    });
                }
              }
            },
          },
          {
            key: "renderBackground",
            value: function () {
              var n = this.props,
                i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                s = n.fill,
                l = n.stroke;
              return I.createElement("rect", {
                stroke: l,
                fill: s,
                x: i,
                y: a,
                width: o,
                height: u,
              });
            },
          },
          {
            key: "renderPanorama",
            value: function () {
              var n = this.props,
                i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                s = n.data,
                l = n.children,
                f = n.padding,
                c = O.Children.only(l);
              return c
                ? I.cloneElement(c, {
                    x: i,
                    y: a,
                    width: o,
                    height: u,
                    margin: f,
                    compact: !0,
                    data: s,
                  })
                : null;
            },
          },
          {
            key: "renderTravellerLayer",
            value: function (n, i) {
              var a,
                o,
                u = this,
                s = this.props,
                l = s.y,
                f = s.travellerWidth,
                c = s.height,
                d = s.traveller,
                p = s.ariaLabel,
                v = s.data,
                h = s.startIndex,
                g = s.endIndex,
                y = Math.max(n, this.props.x),
                b = nc(
                  nc({}, ye(this.props, !1)),
                  {},
                  { x: y, y: l, width: f, height: c },
                ),
                w =
                  p ||
                  "Min value: "
                    .concat(
                      (a = v[h]) === null || a === void 0 ? void 0 : a.name,
                      ", Max value: ",
                    )
                    .concat(
                      (o = v[g]) === null || o === void 0 ? void 0 : o.name,
                    );
              return I.createElement(
                De,
                {
                  tabIndex: 0,
                  role: "slider",
                  "aria-label": w,
                  "aria-valuenow": n,
                  className: "recharts-brush-traveller",
                  onMouseEnter: this.handleEnterSlideOrTraveller,
                  onMouseLeave: this.handleLeaveSlideOrTraveller,
                  onMouseDown: this.travellerDragStartHandlers[i],
                  onTouchStart: this.travellerDragStartHandlers[i],
                  onKeyDown: function (m) {
                    ["ArrowLeft", "ArrowRight"].includes(m.key) &&
                      (m.preventDefault(),
                      m.stopPropagation(),
                      u.handleTravellerMoveKeyboard(
                        m.key === "ArrowRight" ? 1 : -1,
                        i,
                      ));
                  },
                  onFocus: function () {
                    u.setState({ isTravellerFocused: !0 });
                  },
                  onBlur: function () {
                    u.setState({ isTravellerFocused: !1 });
                  },
                  style: { cursor: "col-resize" },
                },
                t.renderTraveller(d, b),
              );
            },
          },
          {
            key: "renderSlide",
            value: function (n, i) {
              var a = this.props,
                o = a.y,
                u = a.height,
                s = a.stroke,
                l = a.travellerWidth,
                f = Math.min(n, i) + l,
                c = Math.max(Math.abs(i - n) - l, 0);
              return I.createElement("rect", {
                className: "recharts-brush-slide",
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.handleSlideDragStart,
                onTouchStart: this.handleSlideDragStart,
                style: { cursor: "move" },
                stroke: "none",
                fill: s,
                fillOpacity: 0.2,
                x: f,
                y: o,
                width: c,
                height: u,
              });
            },
          },
          {
            key: "renderText",
            value: function () {
              var n = this.props,
                i = n.startIndex,
                a = n.endIndex,
                o = n.y,
                u = n.height,
                s = n.travellerWidth,
                l = n.stroke,
                f = this.state,
                c = f.startX,
                d = f.endX,
                p = 5,
                v = { pointerEvents: "none", fill: l };
              return I.createElement(
                De,
                { className: "recharts-brush-texts" },
                I.createElement(
                  tf,
                  pa(
                    {
                      textAnchor: "end",
                      verticalAnchor: "middle",
                      x: Math.min(c, d) - p,
                      y: o + u / 2,
                    },
                    v,
                  ),
                  this.getTextOfTick(i),
                ),
                I.createElement(
                  tf,
                  pa(
                    {
                      textAnchor: "start",
                      verticalAnchor: "middle",
                      x: Math.max(c, d) + s + p,
                      y: o + u / 2,
                    },
                    v,
                  ),
                  this.getTextOfTick(a),
                ),
              );
            },
          },
          {
            key: "render",
            value: function () {
              var n = this.props,
                i = n.data,
                a = n.className,
                o = n.children,
                u = n.x,
                s = n.y,
                l = n.width,
                f = n.height,
                c = n.alwaysShowText,
                d = this.state,
                p = d.startX,
                v = d.endX,
                h = d.isTextActive,
                g = d.isSlideMoving,
                y = d.isTravellerMoving,
                b = d.isTravellerFocused;
              if (
                !i ||
                !i.length ||
                !W(u) ||
                !W(s) ||
                !W(l) ||
                !W(f) ||
                l <= 0 ||
                f <= 0
              )
                return null;
              var w = me("recharts-brush", a),
                _ = I.Children.count(o) === 1,
                m = Ak("userSelect", "none");
              return I.createElement(
                De,
                {
                  className: w,
                  onMouseLeave: this.handleLeaveWrapper,
                  onTouchMove: this.handleTouchMove,
                  style: m,
                },
                this.renderBackground(),
                _ && this.renderPanorama(),
                this.renderSlide(p, v),
                this.renderTravellerLayer(p, "startX"),
                this.renderTravellerLayer(v, "endX"),
                (h || g || y || b || c) && this.renderText(),
              );
            },
          },
        ],
        [
          {
            key: "renderDefaultTraveller",
            value: function (n) {
              var i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                s = n.stroke,
                l = Math.floor(a + u / 2) - 1;
              return I.createElement(
                I.Fragment,
                null,
                I.createElement("rect", {
                  x: i,
                  y: a,
                  width: o,
                  height: u,
                  fill: s,
                  stroke: "none",
                }),
                I.createElement("line", {
                  x1: i + 1,
                  y1: l,
                  x2: i + o - 1,
                  y2: l,
                  fill: "none",
                  stroke: "#fff",
                }),
                I.createElement("line", {
                  x1: i + 1,
                  y1: l + 2,
                  x2: i + o - 1,
                  y2: l + 2,
                  fill: "none",
                  stroke: "#fff",
                }),
              );
            },
          },
          {
            key: "renderTraveller",
            value: function (n, i) {
              var a;
              return (
                I.isValidElement(n)
                  ? (a = I.cloneElement(n, i))
                  : ae(n)
                    ? (a = n(i))
                    : (a = t.renderDefaultTraveller(i)),
                a
              );
            },
          },
          {
            key: "getDerivedStateFromProps",
            value: function (n, i) {
              var a = n.data,
                o = n.width,
                u = n.x,
                s = n.travellerWidth,
                l = n.updateId,
                f = n.startIndex,
                c = n.endIndex;
              if (a !== i.prevData || l !== i.prevUpdateId)
                return nc(
                  {
                    prevData: a,
                    prevTravellerWidth: s,
                    prevUpdateId: l,
                    prevX: u,
                    prevWidth: o,
                  },
                  a && a.length
                    ? Nk({
                        data: a,
                        width: o,
                        x: u,
                        travellerWidth: s,
                        startIndex: f,
                        endIndex: c,
                      })
                    : { scale: null, scaleValues: null },
                );
              if (
                i.scale &&
                (o !== i.prevWidth ||
                  u !== i.prevX ||
                  s !== i.prevTravellerWidth)
              ) {
                i.scale.range([u, u + o - s]);
                var d = i.scale.domain().map(function (p) {
                  return i.scale(p);
                });
                return {
                  prevData: a,
                  prevTravellerWidth: s,
                  prevUpdateId: l,
                  prevX: u,
                  prevWidth: o,
                  startX: i.scale(n.startIndex),
                  endX: i.scale(n.endIndex),
                  scaleValues: d,
                };
              }
              return null;
            },
          },
          {
            key: "getIndexInRange",
            value: function (n, i) {
              for (var a = n.length, o = 0, u = a - 1; u - o > 1; ) {
                var s = Math.floor((o + u) / 2);
                n[s] > i ? (u = s) : (o = s);
              }
              return i >= n[u] ? u : o;
            },
          },
        ],
      )
    );
  })(O.PureComponent);
Be(Fr, "displayName", "Brush");
Be(Fr, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: { top: 1, right: 1, bottom: 1, left: 1 },
  leaveTimeOut: 1e3,
  alwaysShowText: !1,
});
var ic, d0;
function Dk() {
  if (d0) return ic;
  d0 = 1;
  var e = Sd();
  function t(r, n) {
    var i;
    return (
      e(r, function (a, o, u) {
        return (i = n(a, o, u)), !i;
      }),
      !!i
    );
  }
  return (ic = t), ic;
}
var ac, p0;
function kk() {
  if (p0) return ac;
  p0 = 1;
  var e = Dx(),
    t = Ut(),
    r = Dk(),
    n = Le(),
    i = La();
  function a(o, u, s) {
    var l = n(o) ? e : r;
    return s && i(o, u, s) && (u = void 0), l(o, t(u, 3));
  }
  return (ac = a), ac;
}
var qk = kk();
const Fk = ge(qk);
var ft = function (t, r) {
    var n = t.alwaysShow,
      i = t.ifOverflow;
    return n && (i = "extendDomain"), i === r;
  },
  oc,
  h0;
function Lk() {
  if (h0) return oc;
  h0 = 1;
  var e = e1();
  function t(r, n, i) {
    n == "__proto__" && e
      ? e(r, n, { configurable: !0, enumerable: !0, value: i, writable: !0 })
      : (r[n] = i);
  }
  return (oc = t), oc;
}
var uc, g0;
function Bk() {
  if (g0) return uc;
  g0 = 1;
  var e = Lk(),
    t = Jx(),
    r = Ut();
  function n(i, a) {
    var o = {};
    return (
      (a = r(a, 3)),
      t(i, function (u, s, l) {
        e(o, s, a(u, s, l));
      }),
      o
    );
  }
  return (uc = n), uc;
}
var Vk = Bk();
const Hk = ge(Vk);
var sc, v0;
function zk() {
  if (v0) return sc;
  v0 = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
      if (!r(t[n], n, t)) return !1;
    return !0;
  }
  return (sc = e), sc;
}
var lc, m0;
function Uk() {
  if (m0) return lc;
  m0 = 1;
  var e = Sd();
  function t(r, n) {
    var i = !0;
    return (
      e(r, function (a, o, u) {
        return (i = !!n(a, o, u)), i;
      }),
      i
    );
  }
  return (lc = t), lc;
}
var cc, y0;
function Gk() {
  if (y0) return cc;
  y0 = 1;
  var e = zk(),
    t = Uk(),
    r = Ut(),
    n = Le(),
    i = La();
  function a(o, u, s) {
    var l = n(o) ? e : t;
    return s && i(o, u, s) && (u = void 0), l(o, r(u, 3));
  }
  return (cc = a), cc;
}
var Wk = Gk();
const jw = ge(Wk);
var Kk = ["x", "y"];
function Zn(e) {
  "@babel/helpers - typeof";
  return (
    (Zn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Zn(e)
  );
}
function $f() {
  return (
    ($f = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    $f.apply(this, arguments)
  );
}
function b0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function cn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? b0(Object(r), !0).forEach(function (n) {
          Xk(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : b0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Xk(e, t, r) {
  return (
    (t = Yk(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Yk(e) {
  var t = Zk(e, "string");
  return Zn(t) == "symbol" ? t : t + "";
}
function Zk(e, t) {
  if (Zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Jk(e, t) {
  if (e == null) return {};
  var r = Qk(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function Qk(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function eq(e, t) {
  var r = e.x,
    n = e.y,
    i = Jk(e, Kk),
    a = "".concat(r),
    o = parseInt(a, 10),
    u = "".concat(n),
    s = parseInt(u, 10),
    l = "".concat(t.height || i.height),
    f = parseInt(l, 10),
    c = "".concat(t.width || i.width),
    d = parseInt(c, 10);
  return cn(
    cn(cn(cn(cn({}, t), i), o ? { x: o } : {}), s ? { y: s } : {}),
    {},
    { height: f, width: d, name: t.name, radius: t.radius },
  );
}
function x0(e) {
  return I.createElement(
    dk,
    $f(
      {
        shapeType: "rectangle",
        propTransformer: eq,
        activeClassName: "recharts-active-bar",
      },
      e,
    ),
  );
}
var tq = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return function (n, i) {
      if (typeof t == "number") return t;
      var a = typeof n == "number";
      return a ? t(n, i) : (a || ur(!1), r);
    };
  },
  rq = ["value", "background"],
  Iw;
function Lr(e) {
  "@babel/helpers - typeof";
  return (
    (Lr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Lr(e)
  );
}
function nq(e, t) {
  if (e == null) return {};
  var r = iq(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function iq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ga() {
  return (
    (ga = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ga.apply(this, arguments)
  );
}
function w0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Pe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? w0(Object(r), !0).forEach(function (n) {
          $t(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : w0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function aq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function S0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Nw(n.key), n);
  }
}
function oq(e, t, r) {
  return (
    t && S0(e.prototype, t),
    r && S0(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function uq(e, t, r) {
  return (
    (t = va(t)),
    sq(
      e,
      $w() ? Reflect.construct(t, r || [], va(e).constructor) : t.apply(e, r),
    )
  );
}
function sq(e, t) {
  if (t && (Lr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return lq(e);
}
function lq(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function $w() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return ($w = function () {
    return !!e;
  })();
}
function va(e) {
  return (
    (va = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    va(e)
  );
}
function cq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Nf(e, t);
}
function Nf(e, t) {
  return (
    (Nf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Nf(e, t)
  );
}
function $t(e, t, r) {
  return (
    (t = Nw(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Nw(e) {
  var t = fq(e, "string");
  return Lr(t) == "symbol" ? t : t + "";
}
function fq(e, t) {
  if (Lr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Lr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var di = (function (e) {
  function t() {
    var r;
    aq(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return (
      (r = uq(this, t, [].concat(i))),
      $t(r, "state", { isAnimationFinished: !1 }),
      $t(r, "id", Ia("recharts-bar-")),
      $t(r, "handleAnimationEnd", function () {
        var o = r.props.onAnimationEnd;
        r.setState({ isAnimationFinished: !0 }), o && o();
      }),
      $t(r, "handleAnimationStart", function () {
        var o = r.props.onAnimationStart;
        r.setState({ isAnimationFinished: !1 }), o && o();
      }),
      r
    );
  }
  return (
    cq(t, e),
    oq(
      t,
      [
        {
          key: "renderRectanglesStatically",
          value: function (n) {
            var i = this,
              a = this.props,
              o = a.shape,
              u = a.dataKey,
              s = a.activeIndex,
              l = a.activeBar,
              f = ye(this.props, !1);
            return (
              n &&
              n.map(function (c, d) {
                var p = d === s,
                  v = p ? l : o,
                  h = Pe(
                    Pe(Pe({}, f), c),
                    {},
                    {
                      isActive: p,
                      option: v,
                      index: d,
                      dataKey: u,
                      onAnimationStart: i.handleAnimationStart,
                      onAnimationEnd: i.handleAnimationEnd,
                    },
                  );
                return I.createElement(
                  De,
                  ga(
                    { className: "recharts-bar-rectangle" },
                    Dc(i.props, c, d),
                    {
                      key: "rectangle-"
                        .concat(c?.x, "-")
                        .concat(c?.y, "-")
                        .concat(c?.value),
                    },
                  ),
                  I.createElement(x0, h),
                );
              })
            );
          },
        },
        {
          key: "renderRectanglesWithAnimation",
          value: function () {
            var n = this,
              i = this.props,
              a = i.data,
              o = i.layout,
              u = i.isAnimationActive,
              s = i.animationBegin,
              l = i.animationDuration,
              f = i.animationEasing,
              c = i.animationId,
              d = this.state.prevData;
            return I.createElement(
              Ft,
              {
                begin: s,
                duration: l,
                isActive: u,
                easing: f,
                from: { t: 0 },
                to: { t: 1 },
                key: "bar-".concat(c),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (p) {
                var v = p.t,
                  h = a.map(function (g, y) {
                    var b = d && d[y];
                    if (b) {
                      var w = mr(b.x, g.x),
                        _ = mr(b.y, g.y),
                        m = mr(b.width, g.width),
                        x = mr(b.height, g.height);
                      return Pe(
                        Pe({}, g),
                        {},
                        { x: w(v), y: _(v), width: m(v), height: x(v) },
                      );
                    }
                    if (o === "horizontal") {
                      var S = mr(0, g.height),
                        P = S(v);
                      return Pe(
                        Pe({}, g),
                        {},
                        { y: g.y + g.height - P, height: P },
                      );
                    }
                    var E = mr(0, g.width),
                      j = E(v);
                    return Pe(Pe({}, g), {}, { width: j });
                  });
                return I.createElement(
                  De,
                  null,
                  n.renderRectanglesStatically(h),
                );
              },
            );
          },
        },
        {
          key: "renderRectangles",
          value: function () {
            var n = this.props,
              i = n.data,
              a = n.isAnimationActive,
              o = this.state.prevData;
            return a && i && i.length && (!o || !Wd(o, i))
              ? this.renderRectanglesWithAnimation()
              : this.renderRectanglesStatically(i);
          },
        },
        {
          key: "renderBackground",
          value: function () {
            var n = this,
              i = this.props,
              a = i.data,
              o = i.dataKey,
              u = i.activeIndex,
              s = ye(this.props.background, !1);
            return a.map(function (l, f) {
              l.value;
              var c = l.background,
                d = nq(l, rq);
              if (!c) return null;
              var p = Pe(
                Pe(
                  Pe(Pe(Pe({}, d), {}, { fill: "#eee" }, c), s),
                  Dc(n.props, l, f),
                ),
                {},
                {
                  onAnimationStart: n.handleAnimationStart,
                  onAnimationEnd: n.handleAnimationEnd,
                  dataKey: o,
                  index: f,
                  className: "recharts-bar-background-rectangle",
                },
              );
              return I.createElement(
                x0,
                ga(
                  {
                    key: "background-bar-".concat(f),
                    option: n.props.background,
                    isActive: f === u,
                  },
                  p,
                ),
              );
            });
          },
        },
        {
          key: "renderErrorBar",
          value: function (n, i) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished)
              return null;
            var a = this.props,
              o = a.data,
              u = a.xAxis,
              s = a.yAxis,
              l = a.layout,
              f = a.children,
              c = it(f, Ja);
            if (!c) return null;
            var d = l === "vertical" ? o[0].height / 2 : o[0].width / 2,
              p = function (g, y) {
                var b = Array.isArray(g.value) ? g.value[1] : g.value;
                return { x: g.x, y: g.y, value: b, errorVal: pt(g, y) };
              },
              v = { clipPath: n ? "url(#clipPath-".concat(i, ")") : null };
            return I.createElement(
              De,
              v,
              c.map(function (h) {
                return I.cloneElement(h, {
                  key: "error-bar-".concat(i, "-").concat(h.props.dataKey),
                  data: o,
                  xAxis: u,
                  yAxis: s,
                  layout: l,
                  offset: d,
                  dataPointFormatter: p,
                });
              }),
            );
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.hide,
              a = n.data,
              o = n.className,
              u = n.xAxis,
              s = n.yAxis,
              l = n.left,
              f = n.top,
              c = n.width,
              d = n.height,
              p = n.isAnimationActive,
              v = n.background,
              h = n.id;
            if (i || !a || !a.length) return null;
            var g = this.state.isAnimationFinished,
              y = me("recharts-bar", o),
              b = u && u.allowDataOverflow,
              w = s && s.allowDataOverflow,
              _ = b || w,
              m = ue(h) ? this.id : h;
            return I.createElement(
              De,
              { className: y },
              b || w
                ? I.createElement(
                    "defs",
                    null,
                    I.createElement(
                      "clipPath",
                      { id: "clipPath-".concat(m) },
                      I.createElement("rect", {
                        x: b ? l : l - c / 2,
                        y: w ? f : f - d / 2,
                        width: b ? c : c * 2,
                        height: w ? d : d * 2,
                      }),
                    ),
                  )
                : null,
              I.createElement(
                De,
                {
                  className: "recharts-bar-rectangles",
                  clipPath: _ ? "url(#clipPath-".concat(m, ")") : null,
                },
                v ? this.renderBackground() : null,
                this.renderRectangles(),
              ),
              this.renderErrorBar(_, m),
              (!p || g) && or.renderCallByParent(this.props, a),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (n, i) {
            return n.animationId !== i.prevAnimationId
              ? {
                  prevAnimationId: n.animationId,
                  curData: n.data,
                  prevData: i.curData,
                }
              : n.data !== i.curData
                ? { curData: n.data }
                : null;
          },
        },
      ],
    )
  );
})(O.PureComponent);
Iw = di;
$t(di, "displayName", "Bar");
$t(di, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !Ba.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
});
$t(di, "getComposedData", function (e) {
  var t = e.props,
    r = e.item,
    n = e.barPosition,
    i = e.bandSize,
    a = e.xAxis,
    o = e.yAxis,
    u = e.xAxisTicks,
    s = e.yAxisTicks,
    l = e.stackedData,
    f = e.dataStartIndex,
    c = e.displayedData,
    d = e.offset,
    p = C$(n, r);
  if (!p) return null;
  var v = t.layout,
    h = r.type.defaultProps,
    g = h !== void 0 ? Pe(Pe({}, h), r.props) : r.props,
    y = g.dataKey,
    b = g.children,
    w = g.minPointSize,
    _ = v === "horizontal" ? o : a,
    m = l ? _.scale.domain() : null,
    x = I$({ numericAxis: _ }),
    S = it(b, u1),
    P = c.map(function (E, j) {
      var A, T, M, N, $, k;
      l
        ? (A = A$(l[f + j], m))
        : ((A = pt(E, y)), Array.isArray(A) || (A = [x, A]));
      var F = tq(w, Iw.defaultProps.minPointSize)(A[1], j);
      if (v === "horizontal") {
        var V,
          H = [o.scale(A[0]), o.scale(A[1])],
          Z = H[0],
          J = H[1];
        (T = iy({
          axis: a,
          ticks: u,
          bandSize: i,
          offset: p.offset,
          entry: E,
          index: j,
        })),
          (M = (V = J ?? Z) !== null && V !== void 0 ? V : void 0),
          (N = p.size);
        var R = Z - J;
        if (
          (($ = Number.isNaN(R) ? 0 : R),
          (k = { x: T, y: o.y, width: N, height: o.height }),
          Math.abs(F) > 0 && Math.abs($) < Math.abs(F))
        ) {
          var B = ot($ || F) * (Math.abs(F) - Math.abs($));
          (M -= B), ($ += B);
        }
      } else {
        var X = [a.scale(A[0]), a.scale(A[1])],
          z = X[0],
          ne = X[1];
        if (
          ((T = z),
          (M = iy({
            axis: o,
            ticks: s,
            bandSize: i,
            offset: p.offset,
            entry: E,
            index: j,
          })),
          (N = ne - z),
          ($ = p.size),
          (k = { x: a.x, y: M, width: a.width, height: $ }),
          Math.abs(F) > 0 && Math.abs(N) < Math.abs(F))
        ) {
          var U = ot(N || F) * (Math.abs(F) - Math.abs(N));
          N += U;
        }
      }
      return Pe(
        Pe(
          Pe({}, E),
          {},
          {
            x: T,
            y: M,
            width: N,
            height: $,
            value: l ? A : A[1],
            payload: E,
            background: k,
          },
          S && S[j] && S[j].props,
        ),
        {},
        {
          tooltipPayload: [gw(r, E)],
          tooltipPosition: { x: T + N / 2, y: M + $ / 2 },
        },
      );
    });
  return Pe({ data: P, layout: v }, d);
});
function Jn(e) {
  "@babel/helpers - typeof";
  return (
    (Jn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Jn(e)
  );
}
function dq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Dw(n.key), n);
  }
}
function pq(e, t, r) {
  return (
    t && _0(e.prototype, t),
    r && _0(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function O0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? O0(Object(r), !0).forEach(function (n) {
          to(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : O0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function to(e, t, r) {
  return (
    (t = Dw(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Dw(e) {
  var t = hq(e, "string");
  return Jn(t) == "symbol" ? t : t + "";
}
function hq(e, t) {
  if (Jn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Jn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var bL = function (t, r, n, i, a) {
    var o = t.width,
      u = t.height,
      s = t.layout,
      l = t.children,
      f = Object.keys(r),
      c = {
        left: n.left,
        leftMirror: n.left,
        right: o - n.right,
        rightMirror: o - n.right,
        top: n.top,
        topMirror: n.top,
        bottom: u - n.bottom,
        bottomMirror: u - n.bottom,
      },
      d = !!Ve(l, di);
    return f.reduce(function (p, v) {
      var h = r[v],
        g = h.orientation,
        y = h.domain,
        b = h.padding,
        w = b === void 0 ? {} : b,
        _ = h.mirror,
        m = h.reversed,
        x = "".concat(g).concat(_ ? "Mirror" : ""),
        S,
        P,
        E,
        j,
        A;
      if (
        h.type === "number" &&
        (h.padding === "gap" || h.padding === "no-gap")
      ) {
        var T = y[1] - y[0],
          M = 1 / 0,
          N = h.categoricalDomain.sort();
        if (
          (N.forEach(function (X, z) {
            z > 0 && (M = Math.min((X || 0) - (N[z - 1] || 0), M));
          }),
          Number.isFinite(M))
        ) {
          var $ = M / T,
            k = h.layout === "vertical" ? n.height : n.width;
          if (
            (h.padding === "gap" && (S = ($ * k) / 2), h.padding === "no-gap")
          ) {
            var F = rt(t.barCategoryGap, $ * k),
              V = ($ * k) / 2;
            S = V - F - ((V - F) / k) * F;
          }
        }
      }
      i === "xAxis"
        ? (P = [
            n.left + (w.left || 0) + (S || 0),
            n.left + n.width - (w.right || 0) - (S || 0),
          ])
        : i === "yAxis"
          ? (P =
              s === "horizontal"
                ? [n.top + n.height - (w.bottom || 0), n.top + (w.top || 0)]
                : [
                    n.top + (w.top || 0) + (S || 0),
                    n.top + n.height - (w.bottom || 0) - (S || 0),
                  ])
          : (P = h.range),
        m && (P = [P[1], P[0]]);
      var H = fw(h, a, d),
        Z = H.scale,
        J = H.realScaleType;
      Z.domain(y).range(P), dw(Z);
      var R = pw(Z, et(et({}, h), {}, { realScaleType: J }));
      i === "xAxis"
        ? ((A = (g === "top" && !_) || (g === "bottom" && _)),
          (E = n.left),
          (j = c[x] - A * h.height))
        : i === "yAxis" &&
          ((A = (g === "left" && !_) || (g === "right" && _)),
          (E = c[x] - A * h.width),
          (j = n.top));
      var B = et(
        et(et({}, h), R),
        {},
        {
          realScaleType: J,
          x: E,
          y: j,
          scale: Z,
          width: i === "xAxis" ? n.width : h.width,
          height: i === "yAxis" ? n.height : h.height,
        },
      );
      return (
        (B.bandSize = na(B, R)),
        !h.hide && i === "xAxis"
          ? (c[x] += (A ? -1 : 1) * B.height)
          : h.hide || (c[x] += (A ? -1 : 1) * B.width),
        et(et({}, p), {}, to({}, v, B))
      );
    }, {});
  },
  kw = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y;
    return {
      x: Math.min(n, a),
      y: Math.min(i, o),
      width: Math.abs(a - n),
      height: Math.abs(o - i),
    };
  },
  gq = function (t) {
    var r = t.x1,
      n = t.y1,
      i = t.x2,
      a = t.y2;
    return kw({ x: r, y: n }, { x: i, y: a });
  },
  qw = (function () {
    function e(t) {
      dq(this, e), (this.scale = t);
    }
    return pq(
      e,
      [
        {
          key: "domain",
          get: function () {
            return this.scale.domain;
          },
        },
        {
          key: "range",
          get: function () {
            return this.scale.range;
          },
        },
        {
          key: "rangeMin",
          get: function () {
            return this.range()[0];
          },
        },
        {
          key: "rangeMax",
          get: function () {
            return this.range()[1];
          },
        },
        {
          key: "bandwidth",
          get: function () {
            return this.scale.bandwidth;
          },
        },
        {
          key: "apply",
          value: function (r) {
            var n =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {},
              i = n.bandAware,
              a = n.position;
            if (r !== void 0) {
              if (a)
                switch (a) {
                  case "start":
                    return this.scale(r);
                  case "middle": {
                    var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                    return this.scale(r) + o;
                  }
                  case "end": {
                    var u = this.bandwidth ? this.bandwidth() : 0;
                    return this.scale(r) + u;
                  }
                  default:
                    return this.scale(r);
                }
              if (i) {
                var s = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(r) + s;
              }
              return this.scale(r);
            }
          },
        },
        {
          key: "isInRange",
          value: function (r) {
            var n = this.range(),
              i = n[0],
              a = n[n.length - 1];
            return i <= a ? r >= i && r <= a : r >= a && r <= i;
          },
        },
      ],
      [
        {
          key: "create",
          value: function (r) {
            return new e(r);
          },
        },
      ],
    );
  })();
to(qw, "EPS", 1e-4);
var Jd = function (t) {
  var r = Object.keys(t).reduce(function (n, i) {
    return et(et({}, n), {}, to({}, i, qw.create(t[i])));
  }, {});
  return et(
    et({}, r),
    {},
    {
      apply: function (i) {
        var a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o = a.bandAware,
          u = a.position;
        return Hk(i, function (s, l) {
          return r[l].apply(s, { bandAware: o, position: u });
        });
      },
      isInRange: function (i) {
        return jw(i, function (a, o) {
          return r[o].isInRange(a);
        });
      },
    },
  );
};
function vq(e) {
  return ((e % 180) + 180) % 180;
}
var xL = function (t) {
    var r = t.width,
      n = t.height,
      i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      a = vq(i),
      o = (a * Math.PI) / 180,
      u = Math.atan(n / r),
      s = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
    return Math.abs(s);
  },
  fc,
  P0;
function mq() {
  if (P0) return fc;
  P0 = 1;
  var e = Ut(),
    t = ui(),
    r = qa();
  function n(i) {
    return function (a, o, u) {
      var s = Object(a);
      if (!t(a)) {
        var l = e(o, 3);
        (a = r(a)),
          (o = function (c) {
            return l(s[c], c, s);
          });
      }
      var f = i(a, o, u);
      return f > -1 ? s[l ? a[f] : f] : void 0;
    };
  }
  return (fc = n), fc;
}
var dc, C0;
function yq() {
  if (C0) return dc;
  C0 = 1;
  var e = Ew();
  function t(r) {
    var n = e(r),
      i = n % 1;
    return n === n ? (i ? n - i : n) : 0;
  }
  return (dc = t), dc;
}
var pc, A0;
function bq() {
  if (A0) return pc;
  A0 = 1;
  var e = Wx(),
    t = Ut(),
    r = yq(),
    n = Math.max;
  function i(a, o, u) {
    var s = a == null ? 0 : a.length;
    if (!s) return -1;
    var l = u == null ? 0 : r(u);
    return l < 0 && (l = n(s + l, 0)), e(a, t(o, 3), l);
  }
  return (pc = i), pc;
}
var hc, E0;
function xq() {
  if (E0) return hc;
  E0 = 1;
  var e = mq(),
    t = bq(),
    r = e(t);
  return (hc = r), hc;
}
var wq = xq();
const Sq = ge(wq);
var _q = lx();
const Oq = ge(_q);
var Pq = Oq(
    function (e) {
      return { x: e.left, y: e.top, width: e.width, height: e.height };
    },
    function (e) {
      return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
    },
  ),
  Qd = O.createContext(void 0),
  ep = O.createContext(void 0),
  Fw = O.createContext(void 0),
  Lw = O.createContext({}),
  Bw = O.createContext(void 0),
  Vw = O.createContext(0),
  Hw = O.createContext(0),
  T0 = function (t) {
    var r = t.state,
      n = r.xAxisMap,
      i = r.yAxisMap,
      a = r.offset,
      o = t.clipPathId,
      u = t.children,
      s = t.width,
      l = t.height,
      f = Pq(a);
    return I.createElement(
      Qd.Provider,
      { value: n },
      I.createElement(
        ep.Provider,
        { value: i },
        I.createElement(
          Lw.Provider,
          { value: a },
          I.createElement(
            Fw.Provider,
            { value: f },
            I.createElement(
              Bw.Provider,
              { value: o },
              I.createElement(
                Vw.Provider,
                { value: l },
                I.createElement(Hw.Provider, { value: s }, u),
              ),
            ),
          ),
        ),
      ),
    );
  },
  Cq = function () {
    return O.useContext(Bw);
  },
  Aq = function (t) {
    var r = O.useContext(Qd);
    r == null && ur(!1);
    var n = r[t];
    return n == null && ur(!1), n;
  },
  wL = function () {
    var t = O.useContext(Qd);
    return Mt(t);
  },
  SL = function () {
    var t = O.useContext(ep),
      r = Sq(t, function (n) {
        return jw(n.domain, Number.isFinite);
      });
    return r || Mt(t);
  },
  Eq = function (t) {
    var r = O.useContext(ep);
    r == null && ur(!1);
    var n = r[t];
    return n == null && ur(!1), n;
  },
  Tq = function () {
    var t = O.useContext(Fw);
    return t;
  },
  _L = function () {
    return O.useContext(Lw);
  },
  OL = function () {
    return O.useContext(Hw);
  },
  PL = function () {
    return O.useContext(Vw);
  };
function Br(e) {
  "@babel/helpers - typeof";
  return (
    (Br =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Br(e)
  );
}
function Rq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Mq(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Uw(n.key), n);
  }
}
function jq(e, t, r) {
  return (
    t && Mq(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Iq(e, t, r) {
  return (
    (t = ma(t)),
    $q(
      e,
      zw() ? Reflect.construct(t, r || [], ma(e).constructor) : t.apply(e, r),
    )
  );
}
function $q(e, t) {
  if (t && (Br(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Nq(e);
}
function Nq(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function zw() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (zw = function () {
    return !!e;
  })();
}
function ma(e) {
  return (
    (ma = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ma(e)
  );
}
function Dq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Df(e, t);
}
function Df(e, t) {
  return (
    (Df = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Df(e, t)
  );
}
function R0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function M0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? R0(Object(r), !0).forEach(function (n) {
          tp(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : R0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function tp(e, t, r) {
  return (
    (t = Uw(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Uw(e) {
  var t = kq(e, "string");
  return Br(t) == "symbol" ? t : t + "";
}
function kq(e, t) {
  if (Br(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Br(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function qq(e, t) {
  return Vq(e) || Bq(e, t) || Lq(e, t) || Fq();
}
function Fq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lq(e, t) {
  if (e) {
    if (typeof e == "string") return j0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return j0(e, t);
  }
}
function j0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Bq(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          s = !0
        );
    } catch (f) {
      (l = !0), (i = f);
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function Vq(e) {
  if (Array.isArray(e)) return e;
}
function kf() {
  return (
    (kf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    kf.apply(this, arguments)
  );
}
var Hq = function (t, r) {
    var n;
    return (
      I.isValidElement(t)
        ? (n = I.cloneElement(t, r))
        : ae(t)
          ? (n = t(r))
          : (n = I.createElement(
              "line",
              kf({}, r, { className: "recharts-reference-line-line" }),
            )),
      n
    );
  },
  zq = function (t, r, n, i, a, o, u, s, l) {
    var f = a.x,
      c = a.y,
      d = a.width,
      p = a.height;
    if (n) {
      var v = l.y,
        h = t.y.apply(v, { position: o });
      if (ft(l, "discard") && !t.y.isInRange(h)) return null;
      var g = [
        { x: f + d, y: h },
        { x: f, y: h },
      ];
      return s === "left" ? g.reverse() : g;
    }
    if (r) {
      var y = l.x,
        b = t.x.apply(y, { position: o });
      if (ft(l, "discard") && !t.x.isInRange(b)) return null;
      var w = [
        { x: b, y: c + p },
        { x: b, y: c },
      ];
      return u === "top" ? w.reverse() : w;
    }
    if (i) {
      var _ = l.segment,
        m = _.map(function (x) {
          return t.apply(x, { position: o });
        });
      return ft(l, "discard") &&
        Fk(m, function (x) {
          return !t.isInRange(x);
        })
        ? null
        : m;
    }
    return null;
  };
function Uq(e) {
  var t = e.x,
    r = e.y,
    n = e.segment,
    i = e.xAxisId,
    a = e.yAxisId,
    o = e.shape,
    u = e.className,
    s = e.alwaysShow,
    l = Cq(),
    f = Aq(i),
    c = Eq(a),
    d = Tq();
  if (!l || !d) return null;
  nr(
    s === void 0,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
  );
  var p = Jd({ x: f.scale, y: c.scale }),
    v = Ee(t),
    h = Ee(r),
    g = n && n.length === 2,
    y = zq(p, v, h, g, d, e.position, f.orientation, c.orientation, e);
  if (!y) return null;
  var b = qq(y, 2),
    w = b[0],
    _ = w.x,
    m = w.y,
    x = b[1],
    S = x.x,
    P = x.y,
    E = ft(e, "hidden") ? "url(#".concat(l, ")") : void 0,
    j = M0(M0({ clipPath: E }, ye(e, !0)), {}, { x1: _, y1: m, x2: S, y2: P });
  return I.createElement(
    De,
    { className: me("recharts-reference-line", u) },
    Hq(o, j),
    ke.renderCallByParent(e, gq({ x1: _, y1: m, x2: S, y2: P })),
  );
}
var rp = (function (e) {
  function t() {
    return Rq(this, t), Iq(this, t, arguments);
  }
  return (
    Dq(t, e),
    jq(t, [
      {
        key: "render",
        value: function () {
          return I.createElement(Uq, this.props);
        },
      },
    ])
  );
})(I.Component);
tp(rp, "displayName", "ReferenceLine");
tp(rp, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle",
});
function qf() {
  return (
    (qf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    qf.apply(this, arguments)
  );
}
function Vr(e) {
  "@babel/helpers - typeof";
  return (
    (Vr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Vr(e)
  );
}
function I0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function $0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? I0(Object(r), !0).forEach(function (n) {
          ro(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : I0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Gq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wq(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Ww(n.key), n);
  }
}
function Kq(e, t, r) {
  return (
    t && Wq(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Xq(e, t, r) {
  return (
    (t = ya(t)),
    Yq(
      e,
      Gw() ? Reflect.construct(t, r || [], ya(e).constructor) : t.apply(e, r),
    )
  );
}
function Yq(e, t) {
  if (t && (Vr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Zq(e);
}
function Zq(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Gw() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Gw = function () {
    return !!e;
  })();
}
function ya(e) {
  return (
    (ya = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ya(e)
  );
}
function Jq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Ff(e, t);
}
function Ff(e, t) {
  return (
    (Ff = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Ff(e, t)
  );
}
function ro(e, t, r) {
  return (
    (t = Ww(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Ww(e) {
  var t = Qq(e, "string");
  return Vr(t) == "symbol" ? t : t + "";
}
function Qq(e, t) {
  if (Vr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Vr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var eF = function (t) {
    var r = t.x,
      n = t.y,
      i = t.xAxis,
      a = t.yAxis,
      o = Jd({ x: i.scale, y: a.scale }),
      u = o.apply({ x: r, y: n }, { bandAware: !0 });
    return ft(t, "discard") && !o.isInRange(u) ? null : u;
  },
  no = (function (e) {
    function t() {
      return Gq(this, t), Xq(this, t, arguments);
    }
    return (
      Jq(t, e),
      Kq(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.x,
              a = n.y,
              o = n.r,
              u = n.alwaysShow,
              s = n.clipPathId,
              l = Ee(i),
              f = Ee(a);
            if (
              (nr(
                u === void 0,
                'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
              ),
              !l || !f)
            )
              return null;
            var c = eF(this.props);
            if (!c) return null;
            var d = c.x,
              p = c.y,
              v = this.props,
              h = v.shape,
              g = v.className,
              y = ft(this.props, "hidden") ? "url(#".concat(s, ")") : void 0,
              b = $0(
                $0({ clipPath: y }, ye(this.props, !0)),
                {},
                { cx: d, cy: p },
              );
            return I.createElement(
              De,
              { className: me("recharts-reference-dot", g) },
              t.renderDot(h, b),
              ke.renderCallByParent(this.props, {
                x: d - o,
                y: p - o,
                width: 2 * o,
                height: 2 * o,
              }),
            );
          },
        },
      ])
    );
  })(I.Component);
ro(no, "displayName", "ReferenceDot");
ro(no, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
});
ro(no, "renderDot", function (e, t) {
  var r;
  return (
    I.isValidElement(e)
      ? (r = I.cloneElement(e, t))
      : ae(e)
        ? (r = e(t))
        : (r = I.createElement(
            Aw,
            qf({}, t, {
              cx: t.cx,
              cy: t.cy,
              className: "recharts-reference-dot-dot",
            }),
          )),
    r
  );
});
function Lf() {
  return (
    (Lf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Lf.apply(this, arguments)
  );
}
function Hr(e) {
  "@babel/helpers - typeof";
  return (
    (Hr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Hr(e)
  );
}
function N0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function D0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? N0(Object(r), !0).forEach(function (n) {
          io(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : N0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function tF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Xw(n.key), n);
  }
}
function nF(e, t, r) {
  return (
    t && rF(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function iF(e, t, r) {
  return (
    (t = ba(t)),
    aF(
      e,
      Kw() ? Reflect.construct(t, r || [], ba(e).constructor) : t.apply(e, r),
    )
  );
}
function aF(e, t) {
  if (t && (Hr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return oF(e);
}
function oF(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Kw() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Kw = function () {
    return !!e;
  })();
}
function ba(e) {
  return (
    (ba = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ba(e)
  );
}
function uF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Bf(e, t);
}
function Bf(e, t) {
  return (
    (Bf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    Bf(e, t)
  );
}
function io(e, t, r) {
  return (
    (t = Xw(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Xw(e) {
  var t = sF(e, "string");
  return Hr(t) == "symbol" ? t : t + "";
}
function sF(e, t) {
  if (Hr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Hr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var lF = function (t, r, n, i, a) {
    var o = a.x1,
      u = a.x2,
      s = a.y1,
      l = a.y2,
      f = a.xAxis,
      c = a.yAxis;
    if (!f || !c) return null;
    var d = Jd({ x: f.scale, y: c.scale }),
      p = {
        x: t ? d.x.apply(o, { position: "start" }) : d.x.rangeMin,
        y: n ? d.y.apply(s, { position: "start" }) : d.y.rangeMin,
      },
      v = {
        x: r ? d.x.apply(u, { position: "end" }) : d.x.rangeMax,
        y: i ? d.y.apply(l, { position: "end" }) : d.y.rangeMax,
      };
    return ft(a, "discard") && (!d.isInRange(p) || !d.isInRange(v))
      ? null
      : kw(p, v);
  },
  ao = (function (e) {
    function t() {
      return tF(this, t), iF(this, t, arguments);
    }
    return (
      uF(t, e),
      nF(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.x1,
              a = n.x2,
              o = n.y1,
              u = n.y2,
              s = n.className,
              l = n.alwaysShow,
              f = n.clipPathId;
            nr(
              l === void 0,
              'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
            );
            var c = Ee(i),
              d = Ee(a),
              p = Ee(o),
              v = Ee(u),
              h = this.props.shape;
            if (!c && !d && !p && !v && !h) return null;
            var g = lF(c, d, p, v, this.props);
            if (!g && !h) return null;
            var y = ft(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
            return I.createElement(
              De,
              { className: me("recharts-reference-area", s) },
              t.renderRect(h, D0(D0({ clipPath: y }, ye(this.props, !0)), g)),
              ke.renderCallByParent(this.props, g),
            );
          },
        },
      ])
    );
  })(I.Component);
io(ao, "displayName", "ReferenceArea");
io(ao, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1,
});
io(ao, "renderRect", function (e, t) {
  var r;
  return (
    I.isValidElement(e)
      ? (r = I.cloneElement(e, t))
      : ae(e)
        ? (r = e(t))
        : (r = I.createElement(
            Zd,
            Lf({}, t, { className: "recharts-reference-area-rect" }),
          )),
    r
  );
});
function k0(e) {
  return pF(e) || dF(e) || fF(e) || cF();
}
function cF() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fF(e, t) {
  if (e) {
    if (typeof e == "string") return Vf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Vf(e, t);
  }
}
function dF(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function pF(e) {
  if (Array.isArray(e)) return Vf(e);
}
function Vf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Hf = function (t, r, n, i, a) {
    var o = it(t, rp),
      u = it(t, no),
      s = [].concat(k0(o), k0(u)),
      l = it(t, ao),
      f = "".concat(i, "Id"),
      c = i[0],
      d = r;
    if (
      (s.length &&
        (d = s.reduce(function (h, g) {
          if (
            g.props[f] === n &&
            ft(g.props, "extendDomain") &&
            W(g.props[c])
          ) {
            var y = g.props[c];
            return [Math.min(h[0], y), Math.max(h[1], y)];
          }
          return h;
        }, d)),
      l.length)
    ) {
      var p = "".concat(c, "1"),
        v = "".concat(c, "2");
      d = l.reduce(function (h, g) {
        if (
          g.props[f] === n &&
          ft(g.props, "extendDomain") &&
          W(g.props[p]) &&
          W(g.props[v])
        ) {
          var y = g.props[p],
            b = g.props[v];
          return [Math.min(h[0], y, b), Math.max(h[1], y, b)];
        }
        return h;
      }, d);
    }
    return (
      a &&
        a.length &&
        (d = a.reduce(function (h, g) {
          return W(g) ? [Math.min(h[0], g), Math.max(h[1], g)] : h;
        }, d)),
      d
    );
  },
  gc = { exports: {} },
  q0;
function hF() {
  return (
    q0 ||
      ((q0 = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function n() {}
        Object.create &&
          ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
        function i(s, l, f) {
          (this.fn = s), (this.context = l), (this.once = f || !1);
        }
        function a(s, l, f, c, d) {
          if (typeof f != "function")
            throw new TypeError("The listener must be a function");
          var p = new i(f, c || s, d),
            v = r ? r + l : l;
          return (
            s._events[v]
              ? s._events[v].fn
                ? (s._events[v] = [s._events[v], p])
                : s._events[v].push(p)
              : ((s._events[v] = p), s._eventsCount++),
            s
          );
        }
        function o(s, l) {
          --s._eventsCount === 0 ? (s._events = new n()) : delete s._events[l];
        }
        function u() {
          (this._events = new n()), (this._eventsCount = 0);
        }
        (u.prototype.eventNames = function () {
          var l = [],
            f,
            c;
          if (this._eventsCount === 0) return l;
          for (c in (f = this._events))
            t.call(f, c) && l.push(r ? c.slice(1) : c);
          return Object.getOwnPropertySymbols
            ? l.concat(Object.getOwnPropertySymbols(f))
            : l;
        }),
          (u.prototype.listeners = function (l) {
            var f = r ? r + l : l,
              c = this._events[f];
            if (!c) return [];
            if (c.fn) return [c.fn];
            for (var d = 0, p = c.length, v = new Array(p); d < p; d++)
              v[d] = c[d].fn;
            return v;
          }),
          (u.prototype.listenerCount = function (l) {
            var f = r ? r + l : l,
              c = this._events[f];
            return c ? (c.fn ? 1 : c.length) : 0;
          }),
          (u.prototype.emit = function (l, f, c, d, p, v) {
            var h = r ? r + l : l;
            if (!this._events[h]) return !1;
            var g = this._events[h],
              y = arguments.length,
              b,
              w;
            if (g.fn) {
              switch ((g.once && this.removeListener(l, g.fn, void 0, !0), y)) {
                case 1:
                  return g.fn.call(g.context), !0;
                case 2:
                  return g.fn.call(g.context, f), !0;
                case 3:
                  return g.fn.call(g.context, f, c), !0;
                case 4:
                  return g.fn.call(g.context, f, c, d), !0;
                case 5:
                  return g.fn.call(g.context, f, c, d, p), !0;
                case 6:
                  return g.fn.call(g.context, f, c, d, p, v), !0;
              }
              for (w = 1, b = new Array(y - 1); w < y; w++)
                b[w - 1] = arguments[w];
              g.fn.apply(g.context, b);
            } else {
              var _ = g.length,
                m;
              for (w = 0; w < _; w++)
                switch (
                  (g[w].once && this.removeListener(l, g[w].fn, void 0, !0), y)
                ) {
                  case 1:
                    g[w].fn.call(g[w].context);
                    break;
                  case 2:
                    g[w].fn.call(g[w].context, f);
                    break;
                  case 3:
                    g[w].fn.call(g[w].context, f, c);
                    break;
                  case 4:
                    g[w].fn.call(g[w].context, f, c, d);
                    break;
                  default:
                    if (!b)
                      for (m = 1, b = new Array(y - 1); m < y; m++)
                        b[m - 1] = arguments[m];
                    g[w].fn.apply(g[w].context, b);
                }
            }
            return !0;
          }),
          (u.prototype.on = function (l, f, c) {
            return a(this, l, f, c, !1);
          }),
          (u.prototype.once = function (l, f, c) {
            return a(this, l, f, c, !0);
          }),
          (u.prototype.removeListener = function (l, f, c, d) {
            var p = r ? r + l : l;
            if (!this._events[p]) return this;
            if (!f) return o(this, p), this;
            var v = this._events[p];
            if (v.fn)
              v.fn === f &&
                (!d || v.once) &&
                (!c || v.context === c) &&
                o(this, p);
            else {
              for (var h = 0, g = [], y = v.length; h < y; h++)
                (v[h].fn !== f ||
                  (d && !v[h].once) ||
                  (c && v[h].context !== c)) &&
                  g.push(v[h]);
              g.length
                ? (this._events[p] = g.length === 1 ? g[0] : g)
                : o(this, p);
            }
            return this;
          }),
          (u.prototype.removeAllListeners = function (l) {
            var f;
            return (
              l
                ? ((f = r ? r + l : l), this._events[f] && o(this, f))
                : ((this._events = new n()), (this._eventsCount = 0)),
              this
            );
          }),
          (u.prototype.off = u.prototype.removeListener),
          (u.prototype.addListener = u.prototype.on),
          (u.prefixed = r),
          (u.EventEmitter = u),
          (e.exports = u);
      })(gc)),
    gc.exports
  );
}
var gF = hF();
const vF = ge(gF);
var vc = new vF(),
  mc = "recharts.syncMouseEvents";
function Qn(e) {
  "@babel/helpers - typeof";
  return (
    (Qn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Qn(e)
  );
}
function mF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Yw(n.key), n);
  }
}
function bF(e, t, r) {
  return (
    t && yF(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function yc(e, t, r) {
  return (
    (t = Yw(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Yw(e) {
  var t = xF(e, "string");
  return Qn(t) == "symbol" ? t : t + "";
}
function xF(e, t) {
  if (Qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var wF = (function () {
  function e() {
    mF(this, e),
      yc(this, "activeIndex", 0),
      yc(this, "coordinateList", []),
      yc(this, "layout", "horizontal");
  }
  return bF(e, [
    {
      key: "setDetails",
      value: function (r) {
        var n,
          i = r.coordinateList,
          a = i === void 0 ? null : i,
          o = r.container,
          u = o === void 0 ? null : o,
          s = r.layout,
          l = s === void 0 ? null : s,
          f = r.offset,
          c = f === void 0 ? null : f,
          d = r.mouseHandlerCallback,
          p = d === void 0 ? null : d;
        (this.coordinateList =
          (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : []),
          (this.container = u ?? this.container),
          (this.layout = l ?? this.layout),
          (this.offset = c ?? this.offset),
          (this.mouseHandlerCallback = p ?? this.mouseHandlerCallback),
          (this.activeIndex = Math.min(
            Math.max(this.activeIndex, 0),
            this.coordinateList.length - 1,
          ));
      },
    },
    {
      key: "focus",
      value: function () {
        this.spoofMouse();
      },
    },
    {
      key: "keyboardEvent",
      value: function (r) {
        if (this.coordinateList.length !== 0)
          switch (r.key) {
            case "ArrowRight": {
              if (this.layout !== "horizontal") return;
              (this.activeIndex = Math.min(
                this.activeIndex + 1,
                this.coordinateList.length - 1,
              )),
                this.spoofMouse();
              break;
            }
            case "ArrowLeft": {
              if (this.layout !== "horizontal") return;
              (this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                this.spoofMouse();
              break;
            }
          }
      },
    },
    {
      key: "setIndex",
      value: function (r) {
        this.activeIndex = r;
      },
    },
    {
      key: "spoofMouse",
      value: function () {
        var r, n;
        if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
          var i = this.container.getBoundingClientRect(),
            a = i.x,
            o = i.y,
            u = i.height,
            s = this.coordinateList[this.activeIndex].coordinate,
            l =
              ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0,
            f =
              ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0,
            c = a + s + l,
            d = o + this.offset.top + u / 2 + f;
          this.mouseHandlerCallback({ pageX: c, pageY: d });
        }
      },
    },
  ]);
})();
function SF(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e?.[0],
      i = e?.[1];
    if (n && i && W(n) && W(i)) return !0;
  }
  return !1;
}
function _F(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n,
  };
}
function Zw(e) {
  var t = e.cx,
    r = e.cy,
    n = e.radius,
    i = e.startAngle,
    a = e.endAngle,
    o = $e(t, r, n, i),
    u = $e(t, r, n, a);
  return {
    points: [o, u],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a,
  };
}
function OF(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    (n = t.x), (a = n), (i = r.top), (o = r.top + r.height);
  else if (e === "vertical")
    (i = t.y), (o = i), (n = r.left), (a = r.left + r.width);
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var u = t.cx,
        s = t.cy,
        l = t.innerRadius,
        f = t.outerRadius,
        c = t.angle,
        d = $e(u, s, l, c),
        p = $e(u, s, f, c);
      (n = d.x), (i = d.y), (a = p.x), (o = p.y);
    } else return Zw(t);
  return [
    { x: n, y: i },
    { x: a, y: o },
  ];
}
function ei(e) {
  "@babel/helpers - typeof";
  return (
    (ei =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ei(e)
  );
}
function F0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Ti(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? F0(Object(r), !0).forEach(function (n) {
          PF(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : F0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function PF(e, t, r) {
  return (
    (t = CF(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function CF(e) {
  var t = AF(e, "string");
  return ei(t) == "symbol" ? t : t + "";
}
function AF(e, t) {
  if (ei(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ei(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function EF(e) {
  var t,
    r,
    n = e.element,
    i = e.tooltipEventType,
    a = e.isActive,
    o = e.activeCoordinate,
    u = e.activePayload,
    s = e.offset,
    l = e.activeTooltipIndex,
    f = e.tooltipAxisBandSize,
    c = e.layout,
    d = e.chartName,
    p =
      (t = n.props.cursor) !== null && t !== void 0
        ? t
        : (r = n.type.defaultProps) === null || r === void 0
          ? void 0
          : r.cursor;
  if (!n || !p || !a || !o || (d !== "ScatterChart" && i !== "axis"))
    return null;
  var v,
    h = wy;
  if (d === "ScatterChart") (v = o), (h = FD);
  else if (d === "BarChart") (v = _F(c, o, s, f)), (h = Zd);
  else if (c === "radial") {
    var g = Zw(o),
      y = g.cx,
      b = g.cy,
      w = g.radius,
      _ = g.startAngle,
      m = g.endAngle;
    (v = {
      cx: y,
      cy: b,
      startAngle: _,
      endAngle: m,
      innerRadius: w,
      outerRadius: w,
    }),
      (h = bw);
  } else (v = { points: OF(c, o, s) }), (h = wy);
  var x = Ti(
    Ti(Ti(Ti({ stroke: "#ccc", pointerEvents: "none" }, s), v), ye(p, !1)),
    {},
    {
      payload: u,
      payloadIndex: l,
      className: me("recharts-tooltip-cursor", p.className),
    },
  );
  return O.isValidElement(p) ? O.cloneElement(p, x) : O.createElement(h, x);
}
var TF = ["item"],
  RF = [
    "children",
    "className",
    "width",
    "height",
    "style",
    "compact",
    "title",
    "desc",
  ];
function zr(e) {
  "@babel/helpers - typeof";
  return (
    (zr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    zr(e)
  );
}
function _r() {
  return (
    (_r = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    _r.apply(this, arguments)
  );
}
function L0(e, t) {
  return IF(e) || jF(e, t) || Qw(e, t) || MF();
}
function MF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jF(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      u = [],
      s = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t);
          s = !0
        );
    } catch (f) {
      (l = !0), (i = f);
    } finally {
      try {
        if (!s && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (l) throw i;
      }
    }
    return u;
  }
}
function IF(e) {
  if (Array.isArray(e)) return e;
}
function B0(e, t) {
  if (e == null) return {};
  var r = $F(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function $F(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function NF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function DF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, eS(n.key), n);
  }
}
function kF(e, t, r) {
  return (
    t && DF(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function qF(e, t, r) {
  return (
    (t = xa(t)),
    FF(
      e,
      Jw() ? Reflect.construct(t, r || [], xa(e).constructor) : t.apply(e, r),
    )
  );
}
function FF(e, t) {
  if (t && (zr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return LF(e);
}
function LF(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Jw() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Jw = function () {
    return !!e;
  })();
}
function xa(e) {
  return (
    (xa = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    xa(e)
  );
}
function BF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && zf(e, t);
}
function zf(e, t) {
  return (
    (zf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return (n.__proto__ = i), n;
        }),
    zf(e, t)
  );
}
function Ur(e) {
  return zF(e) || HF(e) || Qw(e) || VF();
}
function VF() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qw(e, t) {
  if (e) {
    if (typeof e == "string") return Uf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Uf(e, t);
  }
}
function HF(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function zF(e) {
  if (Array.isArray(e)) return Uf(e);
}
function Uf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function V0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? V0(Object(r), !0).forEach(function (n) {
          te(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : V0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function te(e, t, r) {
  return (
    (t = eS(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function eS(e) {
  var t = UF(e, "string");
  return zr(t) == "symbol" ? t : t + "";
}
function UF(e, t) {
  if (zr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var GF = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
  WF = { width: "100%", height: "100%" },
  tS = { x: 0, y: 0 };
function Ri(e) {
  return e;
}
var KF = function (t, r) {
    return r === "horizontal"
      ? t.x
      : r === "vertical"
        ? t.y
        : r === "centric"
          ? t.angle
          : t.radius;
  },
  XF = function (t, r, n, i) {
    var a = r.find(function (f) {
      return f && f.index === n;
    });
    if (a) {
      if (t === "horizontal") return { x: a.coordinate, y: i.y };
      if (t === "vertical") return { x: i.x, y: a.coordinate };
      if (t === "centric") {
        var o = a.coordinate,
          u = i.radius;
        return D(
          D(D({}, i), $e(i.cx, i.cy, u, o)),
          {},
          { angle: o, radius: u },
        );
      }
      var s = a.coordinate,
        l = i.angle;
      return D(D(D({}, i), $e(i.cx, i.cy, s, l)), {}, { angle: l, radius: s });
    }
    return tS;
  },
  oo = function (t, r) {
    var n = r.graphicalItems,
      i = r.dataStartIndex,
      a = r.dataEndIndex,
      o = (n ?? []).reduce(function (u, s) {
        var l = s.props.data;
        return l && l.length ? [].concat(Ur(u), Ur(l)) : u;
      }, []);
    return o.length > 0
      ? o
      : t && t.length && W(i) && W(a)
        ? t.slice(i, a + 1)
        : [];
  };
function rS(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Gf = function (t, r, n, i) {
    var a = t.graphicalItems,
      o = t.tooltipAxis,
      u = oo(r, t);
    return n < 0 || !a || !a.length || n >= u.length
      ? null
      : a.reduce(function (s, l) {
          var f,
            c = (f = l.props.data) !== null && f !== void 0 ? f : r;
          c &&
            t.dataStartIndex + t.dataEndIndex !== 0 &&
            t.dataEndIndex - t.dataStartIndex >= n &&
            (c = c.slice(t.dataStartIndex, t.dataEndIndex + 1));
          var d;
          if (o.dataKey && !o.allowDuplicatedCategory) {
            var p = c === void 0 ? u : c;
            d = Ic(p, o.dataKey, i);
          } else d = (c && c[n]) || u[n];
          return d ? [].concat(Ur(s), [gw(l, d)]) : s;
        }, []);
  },
  H0 = function (t, r, n, i) {
    var a = i || { x: t.chartX, y: t.chartY },
      o = KF(a, n),
      u = t.orderedTooltipTicks,
      s = t.tooltipAxis,
      l = t.tooltipTicks,
      f = x$(o, u, l, s);
    if (f >= 0 && l) {
      var c = l[f] && l[f].value,
        d = Gf(t, r, f, c),
        p = XF(n, u, f, a);
      return {
        activeTooltipIndex: f,
        activeLabel: c,
        activePayload: d,
        activeCoordinate: p,
      };
    }
    return null;
  },
  YF = function (t, r) {
    var n = r.axes,
      i = r.graphicalItems,
      a = r.axisType,
      o = r.axisIdKey,
      u = r.stackGroups,
      s = r.dataStartIndex,
      l = r.dataEndIndex,
      f = t.layout,
      c = t.children,
      d = t.stackOffset,
      p = cw(f, a);
    return n.reduce(function (v, h) {
      var g,
        y =
          h.type.defaultProps !== void 0
            ? D(D({}, h.type.defaultProps), h.props)
            : h.props,
        b = y.type,
        w = y.dataKey,
        _ = y.allowDataOverflow,
        m = y.allowDuplicatedCategory,
        x = y.scale,
        S = y.ticks,
        P = y.includeHidden,
        E = y[o];
      if (v[E]) return v;
      var j = oo(t.data, {
          graphicalItems: i.filter(function (R) {
            var B,
              X =
                o in R.props
                  ? R.props[o]
                  : (B = R.type.defaultProps) === null || B === void 0
                    ? void 0
                    : B[o];
            return X === E;
          }),
          dataStartIndex: s,
          dataEndIndex: l,
        }),
        A = j.length,
        T,
        M,
        N;
      SF(y.domain, _, b) &&
        ((T = mf(y.domain, null, _)),
        p && (b === "number" || x !== "auto") && (N = yn(j, w, "category")));
      var $ = rS(b);
      if (!T || T.length === 0) {
        var k,
          F = (k = y.domain) !== null && k !== void 0 ? k : $;
        if (w) {
          if (((T = yn(j, w, b)), b === "category" && p)) {
            var V = hC(T);
            m && V
              ? ((M = T), (T = da(0, A)))
              : m ||
                (T = uy(F, T, h).reduce(function (R, B) {
                  return R.indexOf(B) >= 0 ? R : [].concat(Ur(R), [B]);
                }, []));
          } else if (b === "category")
            m
              ? (T = T.filter(function (R) {
                  return R !== "" && !ue(R);
                }))
              : (T = uy(F, T, h).reduce(function (R, B) {
                  return R.indexOf(B) >= 0 || B === "" || ue(B)
                    ? R
                    : [].concat(Ur(R), [B]);
                }, []));
          else if (b === "number") {
            var H = P$(
              j,
              i.filter(function (R) {
                var B,
                  X,
                  z =
                    o in R.props
                      ? R.props[o]
                      : (B = R.type.defaultProps) === null || B === void 0
                        ? void 0
                        : B[o],
                  ne =
                    "hide" in R.props
                      ? R.props.hide
                      : (X = R.type.defaultProps) === null || X === void 0
                        ? void 0
                        : X.hide;
                return z === E && (P || !ne);
              }),
              w,
              a,
              f,
            );
            H && (T = H);
          }
          p && (b === "number" || x !== "auto") && (N = yn(j, w, "category"));
        } else
          p
            ? (T = da(0, A))
            : u && u[E] && u[E].hasStack && b === "number"
              ? (T = d === "expand" ? [0, 1] : hw(u[E].stackGroups, s, l))
              : (T = lw(
                  j,
                  i.filter(function (R) {
                    var B = o in R.props ? R.props[o] : R.type.defaultProps[o],
                      X =
                        "hide" in R.props
                          ? R.props.hide
                          : R.type.defaultProps.hide;
                    return B === E && (P || !X);
                  }),
                  b,
                  f,
                  !0,
                ));
        if (b === "number") (T = Hf(c, T, E, a, S)), F && (T = mf(F, T, _));
        else if (b === "category" && F) {
          var Z = F,
            J = T.every(function (R) {
              return Z.indexOf(R) >= 0;
            });
          J && (T = Z);
        }
      }
      return D(
        D({}, v),
        {},
        te(
          {},
          E,
          D(
            D({}, y),
            {},
            {
              axisType: a,
              domain: T,
              categoricalDomain: N,
              duplicateDomain: M,
              originalDomain: (g = y.domain) !== null && g !== void 0 ? g : $,
              isCategorical: p,
              layout: f,
            },
          ),
        ),
      );
    }, {});
  },
  ZF = function (t, r) {
    var n = r.graphicalItems,
      i = r.Axis,
      a = r.axisType,
      o = r.axisIdKey,
      u = r.stackGroups,
      s = r.dataStartIndex,
      l = r.dataEndIndex,
      f = t.layout,
      c = t.children,
      d = oo(t.data, { graphicalItems: n, dataStartIndex: s, dataEndIndex: l }),
      p = d.length,
      v = cw(f, a),
      h = -1;
    return n.reduce(function (g, y) {
      var b =
          y.type.defaultProps !== void 0
            ? D(D({}, y.type.defaultProps), y.props)
            : y.props,
        w = b[o],
        _ = rS("number");
      if (!g[w]) {
        h++;
        var m;
        return (
          v
            ? (m = da(0, p))
            : u && u[w] && u[w].hasStack
              ? ((m = hw(u[w].stackGroups, s, l)), (m = Hf(c, m, w, a)))
              : ((m = mf(
                  _,
                  lw(
                    d,
                    n.filter(function (x) {
                      var S,
                        P,
                        E =
                          o in x.props
                            ? x.props[o]
                            : (S = x.type.defaultProps) === null || S === void 0
                              ? void 0
                              : S[o],
                        j =
                          "hide" in x.props
                            ? x.props.hide
                            : (P = x.type.defaultProps) === null || P === void 0
                              ? void 0
                              : P.hide;
                      return E === w && !j;
                    }),
                    "number",
                    f,
                  ),
                  i.defaultProps.allowDataOverflow,
                )),
                (m = Hf(c, m, w, a))),
          D(
            D({}, g),
            {},
            te(
              {},
              w,
              D(
                D({ axisType: a }, i.defaultProps),
                {},
                {
                  hide: !0,
                  orientation: lt(GF, "".concat(a, ".").concat(h % 2), null),
                  domain: m,
                  originalDomain: _,
                  isCategorical: v,
                  layout: f,
                },
              ),
            ),
          )
        );
      }
      return g;
    }, {});
  },
  JF = function (t, r) {
    var n = r.axisType,
      i = n === void 0 ? "xAxis" : n,
      a = r.AxisComp,
      o = r.graphicalItems,
      u = r.stackGroups,
      s = r.dataStartIndex,
      l = r.dataEndIndex,
      f = t.children,
      c = "".concat(i, "Id"),
      d = it(f, a),
      p = {};
    return (
      d && d.length
        ? (p = YF(t, {
            axes: d,
            graphicalItems: o,
            axisType: i,
            axisIdKey: c,
            stackGroups: u,
            dataStartIndex: s,
            dataEndIndex: l,
          }))
        : o &&
          o.length &&
          (p = ZF(t, {
            Axis: a,
            graphicalItems: o,
            axisType: i,
            axisIdKey: c,
            stackGroups: u,
            dataStartIndex: s,
            dataEndIndex: l,
          })),
      p
    );
  },
  QF = function (t) {
    var r = Mt(t),
      n = hn(r, !1, !0);
    return {
      tooltipTicks: n,
      orderedTooltipTicks: _d(n, function (i) {
        return i.coordinate;
      }),
      tooltipAxis: r,
      tooltipAxisBandSize: na(r, n),
    };
  },
  z0 = function (t) {
    var r = t.children,
      n = t.defaultShowTooltip,
      i = Ve(r, Fr),
      a = 0,
      o = 0;
    return (
      t.data && t.data.length !== 0 && (o = t.data.length - 1),
      i &&
        i.props &&
        (i.props.startIndex >= 0 && (a = i.props.startIndex),
        i.props.endIndex >= 0 && (o = i.props.endIndex)),
      {
        chartX: 0,
        chartY: 0,
        dataStartIndex: a,
        dataEndIndex: o,
        activeTooltipIndex: -1,
        isTooltipActive: !!n,
      }
    );
  },
  eL = function (t) {
    return !t || !t.length
      ? !1
      : t.some(function (r) {
          var n = wt(r && r.type);
          return n && n.indexOf("Bar") >= 0;
        });
  },
  U0 = function (t) {
    return t === "horizontal"
      ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
      : t === "vertical"
        ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
        : t === "centric"
          ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
          : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
  },
  tL = function (t, r) {
    var n = t.props,
      i = t.graphicalItems,
      a = t.xAxisMap,
      o = a === void 0 ? {} : a,
      u = t.yAxisMap,
      s = u === void 0 ? {} : u,
      l = n.width,
      f = n.height,
      c = n.children,
      d = n.margin || {},
      p = Ve(c, Fr),
      v = Ve(c, Or),
      h = Object.keys(s).reduce(
        function (m, x) {
          var S = s[x],
            P = S.orientation;
          return !S.mirror && !S.hide
            ? D(D({}, m), {}, te({}, P, m[P] + S.width))
            : m;
        },
        { left: d.left || 0, right: d.right || 0 },
      ),
      g = Object.keys(o).reduce(
        function (m, x) {
          var S = o[x],
            P = S.orientation;
          return !S.mirror && !S.hide
            ? D(D({}, m), {}, te({}, P, lt(m, "".concat(P)) + S.height))
            : m;
        },
        { top: d.top || 0, bottom: d.bottom || 0 },
      ),
      y = D(D({}, g), h),
      b = y.bottom;
    p && (y.bottom += p.props.height || Fr.defaultProps.height),
      v && r && (y = _$(y, i, n, r));
    var w = l - y.left - y.right,
      _ = f - y.top - y.bottom;
    return D(
      D({ brushBottom: b }, y),
      {},
      { width: Math.max(w, 0), height: Math.max(_, 0) },
    );
  },
  rL = function (t, r) {
    if (r === "xAxis") return t[r].width;
    if (r === "yAxis") return t[r].height;
  },
  CL = function (t) {
    var r = t.chartName,
      n = t.GraphicalChild,
      i = t.defaultTooltipEventType,
      a = i === void 0 ? "axis" : i,
      o = t.validateTooltipEventTypes,
      u = o === void 0 ? ["axis"] : o,
      s = t.axisComponents,
      l = t.legendContent,
      f = t.formatAxisMap,
      c = t.defaultProps,
      d = function (y, b) {
        var w = b.graphicalItems,
          _ = b.stackGroups,
          m = b.offset,
          x = b.updateId,
          S = b.dataStartIndex,
          P = b.dataEndIndex,
          E = y.barSize,
          j = y.layout,
          A = y.barGap,
          T = y.barCategoryGap,
          M = y.maxBarSize,
          N = U0(j),
          $ = N.numericAxisName,
          k = N.cateAxisName,
          F = eL(w),
          V = [];
        return (
          w.forEach(function (H, Z) {
            var J = oo(y.data, {
                graphicalItems: [H],
                dataStartIndex: S,
                dataEndIndex: P,
              }),
              R =
                H.type.defaultProps !== void 0
                  ? D(D({}, H.type.defaultProps), H.props)
                  : H.props,
              B = R.dataKey,
              X = R.maxBarSize,
              z = R["".concat($, "Id")],
              ne = R["".concat(k, "Id")],
              U = {},
              re = s.reduce(function (Xt, Yt) {
                var uo = b["".concat(Yt.axisType, "Map")],
                  np = R["".concat(Yt.axisType, "Id")];
                (uo && uo[np]) || Yt.axisType === "zAxis" || ur(!1);
                var ip = uo[np];
                return D(
                  D({}, Xt),
                  {},
                  te(
                    te({}, Yt.axisType, ip),
                    "".concat(Yt.axisType, "Ticks"),
                    hn(ip),
                  ),
                );
              }, U),
              L = re[k],
              G = re["".concat(k, "Ticks")],
              Y = _ && _[z] && _[z].hasStack && $$(H, _[z].stackGroups),
              q = wt(H.type).indexOf("Bar") >= 0,
              le = na(L, G),
              ie = [],
              xe =
                F && w$({ barSize: E, stackGroups: _, totalSize: rL(re, k) });
            if (q) {
              var we,
                Re,
                Tt = ue(X) ? M : X,
                vr =
                  (we =
                    (Re = na(L, G, !0)) !== null && Re !== void 0 ? Re : Tt) !==
                    null && we !== void 0
                    ? we
                    : 0;
              (ie = S$({
                barGap: A,
                barCategoryGap: T,
                bandSize: vr !== le ? vr : le,
                sizeList: xe[ne],
                maxBarSize: Tt,
              })),
                vr !== le &&
                  (ie = ie.map(function (Xt) {
                    return D(
                      D({}, Xt),
                      {},
                      {
                        position: D(
                          D({}, Xt.position),
                          {},
                          { offset: Xt.position.offset - vr / 2 },
                        ),
                      },
                    );
                  }));
            }
            var pi = H && H.type && H.type.getComposedData;
            pi &&
              V.push({
                props: D(
                  D(
                    {},
                    pi(
                      D(
                        D({}, re),
                        {},
                        {
                          displayedData: J,
                          props: y,
                          dataKey: B,
                          item: H,
                          bandSize: le,
                          barPosition: ie,
                          offset: m,
                          stackedData: Y,
                          layout: j,
                          dataStartIndex: S,
                          dataEndIndex: P,
                        },
                      ),
                    ),
                  ),
                  {},
                  te(
                    te(
                      te({ key: H.key || "item-".concat(Z) }, $, re[$]),
                      k,
                      re[k],
                    ),
                    "animationId",
                    x,
                  ),
                ),
                childIndex: PC(H, y.children),
                item: H,
              });
          }),
          V
        );
      },
      p = function (y, b) {
        var w = y.props,
          _ = y.dataStartIndex,
          m = y.dataEndIndex,
          x = y.updateId;
        if (!wh({ props: w })) return null;
        var S = w.children,
          P = w.layout,
          E = w.stackOffset,
          j = w.data,
          A = w.reverseStackOrder,
          T = U0(P),
          M = T.numericAxisName,
          N = T.cateAxisName,
          $ = it(S, n),
          k = j$(j, $, "".concat(M, "Id"), "".concat(N, "Id"), E, A),
          F = s.reduce(function (R, B) {
            var X = "".concat(B.axisType, "Map");
            return D(
              D({}, R),
              {},
              te(
                {},
                X,
                JF(
                  w,
                  D(
                    D({}, B),
                    {},
                    {
                      graphicalItems: $,
                      stackGroups: B.axisType === M && k,
                      dataStartIndex: _,
                      dataEndIndex: m,
                    },
                  ),
                ),
              ),
            );
          }, {}),
          V = tL(
            D(D({}, F), {}, { props: w, graphicalItems: $ }),
            b?.legendBBox,
          );
        Object.keys(F).forEach(function (R) {
          F[R] = f(w, F[R], V, R.replace("Map", ""), r);
        });
        var H = F["".concat(N, "Map")],
          Z = QF(H),
          J = d(
            w,
            D(
              D({}, F),
              {},
              {
                dataStartIndex: _,
                dataEndIndex: m,
                updateId: x,
                graphicalItems: $,
                stackGroups: k,
                offset: V,
              },
            ),
          );
        return D(
          D(
            {
              formattedGraphicalItems: J,
              graphicalItems: $,
              offset: V,
              stackGroups: k,
            },
            Z,
          ),
          F,
        );
      },
      v = (function (g) {
        function y(b) {
          var w, _, m;
          return (
            NF(this, y),
            (m = qF(this, y, [b])),
            te(m, "eventEmitterSymbol", Symbol("rechartsEventEmitter")),
            te(m, "accessibilityManager", new wF()),
            te(m, "handleLegendBBoxUpdate", function (x) {
              if (x) {
                var S = m.state,
                  P = S.dataStartIndex,
                  E = S.dataEndIndex,
                  j = S.updateId;
                m.setState(
                  D(
                    { legendBBox: x },
                    p(
                      {
                        props: m.props,
                        dataStartIndex: P,
                        dataEndIndex: E,
                        updateId: j,
                      },
                      D(D({}, m.state), {}, { legendBBox: x }),
                    ),
                  ),
                );
              }
            }),
            te(m, "handleReceiveSyncEvent", function (x, S, P) {
              if (m.props.syncId === x) {
                if (
                  P === m.eventEmitterSymbol &&
                  typeof m.props.syncMethod != "function"
                )
                  return;
                m.applySyncEvent(S);
              }
            }),
            te(m, "handleBrushChange", function (x) {
              var S = x.startIndex,
                P = x.endIndex;
              if (S !== m.state.dataStartIndex || P !== m.state.dataEndIndex) {
                var E = m.state.updateId;
                m.setState(function () {
                  return D(
                    { dataStartIndex: S, dataEndIndex: P },
                    p(
                      {
                        props: m.props,
                        dataStartIndex: S,
                        dataEndIndex: P,
                        updateId: E,
                      },
                      m.state,
                    ),
                  );
                }),
                  m.triggerSyncEvent({ dataStartIndex: S, dataEndIndex: P });
              }
            }),
            te(m, "handleMouseEnter", function (x) {
              var S = m.getMouseInfo(x);
              if (S) {
                var P = D(D({}, S), {}, { isTooltipActive: !0 });
                m.setState(P), m.triggerSyncEvent(P);
                var E = m.props.onMouseEnter;
                ae(E) && E(P, x);
              }
            }),
            te(m, "triggeredAfterMouseMove", function (x) {
              var S = m.getMouseInfo(x),
                P = S
                  ? D(D({}, S), {}, { isTooltipActive: !0 })
                  : { isTooltipActive: !1 };
              m.setState(P), m.triggerSyncEvent(P);
              var E = m.props.onMouseMove;
              ae(E) && E(P, x);
            }),
            te(m, "handleItemMouseEnter", function (x) {
              m.setState(function () {
                return {
                  isTooltipActive: !0,
                  activeItem: x,
                  activePayload: x.tooltipPayload,
                  activeCoordinate: x.tooltipPosition || { x: x.cx, y: x.cy },
                };
              });
            }),
            te(m, "handleItemMouseLeave", function () {
              m.setState(function () {
                return { isTooltipActive: !1 };
              });
            }),
            te(m, "handleMouseMove", function (x) {
              x.persist(), m.throttleTriggeredAfterMouseMove(x);
            }),
            te(m, "handleMouseLeave", function (x) {
              m.throttleTriggeredAfterMouseMove.cancel();
              var S = { isTooltipActive: !1 };
              m.setState(S), m.triggerSyncEvent(S);
              var P = m.props.onMouseLeave;
              ae(P) && P(S, x);
            }),
            te(m, "handleOuterEvent", function (x) {
              var S = OC(x),
                P = lt(m.props, "".concat(S));
              if (S && ae(P)) {
                var E, j;
                /.*touch.*/i.test(S)
                  ? (j = m.getMouseInfo(x.changedTouches[0]))
                  : (j = m.getMouseInfo(x)),
                  P((E = j) !== null && E !== void 0 ? E : {}, x);
              }
            }),
            te(m, "handleClick", function (x) {
              var S = m.getMouseInfo(x);
              if (S) {
                var P = D(D({}, S), {}, { isTooltipActive: !0 });
                m.setState(P), m.triggerSyncEvent(P);
                var E = m.props.onClick;
                ae(E) && E(P, x);
              }
            }),
            te(m, "handleMouseDown", function (x) {
              var S = m.props.onMouseDown;
              if (ae(S)) {
                var P = m.getMouseInfo(x);
                S(P, x);
              }
            }),
            te(m, "handleMouseUp", function (x) {
              var S = m.props.onMouseUp;
              if (ae(S)) {
                var P = m.getMouseInfo(x);
                S(P, x);
              }
            }),
            te(m, "handleTouchMove", function (x) {
              x.changedTouches != null &&
                x.changedTouches.length > 0 &&
                m.throttleTriggeredAfterMouseMove(x.changedTouches[0]);
            }),
            te(m, "handleTouchStart", function (x) {
              x.changedTouches != null &&
                x.changedTouches.length > 0 &&
                m.handleMouseDown(x.changedTouches[0]);
            }),
            te(m, "handleTouchEnd", function (x) {
              x.changedTouches != null &&
                x.changedTouches.length > 0 &&
                m.handleMouseUp(x.changedTouches[0]);
            }),
            te(m, "handleDoubleClick", function (x) {
              var S = m.props.onDoubleClick;
              if (ae(S)) {
                var P = m.getMouseInfo(x);
                S(P, x);
              }
            }),
            te(m, "handleContextMenu", function (x) {
              var S = m.props.onContextMenu;
              if (ae(S)) {
                var P = m.getMouseInfo(x);
                S(P, x);
              }
            }),
            te(m, "triggerSyncEvent", function (x) {
              m.props.syncId !== void 0 &&
                vc.emit(mc, m.props.syncId, x, m.eventEmitterSymbol);
            }),
            te(m, "applySyncEvent", function (x) {
              var S = m.props,
                P = S.layout,
                E = S.syncMethod,
                j = m.state.updateId,
                A = x.dataStartIndex,
                T = x.dataEndIndex;
              if (x.dataStartIndex !== void 0 || x.dataEndIndex !== void 0)
                m.setState(
                  D(
                    { dataStartIndex: A, dataEndIndex: T },
                    p(
                      {
                        props: m.props,
                        dataStartIndex: A,
                        dataEndIndex: T,
                        updateId: j,
                      },
                      m.state,
                    ),
                  ),
                );
              else if (x.activeTooltipIndex !== void 0) {
                var M = x.chartX,
                  N = x.chartY,
                  $ = x.activeTooltipIndex,
                  k = m.state,
                  F = k.offset,
                  V = k.tooltipTicks;
                if (!F) return;
                if (typeof E == "function") $ = E(V, x);
                else if (E === "value") {
                  $ = -1;
                  for (var H = 0; H < V.length; H++)
                    if (V[H].value === x.activeLabel) {
                      $ = H;
                      break;
                    }
                }
                var Z = D(D({}, F), {}, { x: F.left, y: F.top }),
                  J = Math.min(M, Z.x + Z.width),
                  R = Math.min(N, Z.y + Z.height),
                  B = V[$] && V[$].value,
                  X = Gf(m.state, m.props.data, $),
                  z = V[$]
                    ? {
                        x: P === "horizontal" ? V[$].coordinate : J,
                        y: P === "horizontal" ? R : V[$].coordinate,
                      }
                    : tS;
                m.setState(
                  D(
                    D({}, x),
                    {},
                    {
                      activeLabel: B,
                      activeCoordinate: z,
                      activePayload: X,
                      activeTooltipIndex: $,
                    },
                  ),
                );
              } else m.setState(x);
            }),
            te(m, "renderCursor", function (x) {
              var S,
                P = m.state,
                E = P.isTooltipActive,
                j = P.activeCoordinate,
                A = P.activePayload,
                T = P.offset,
                M = P.activeTooltipIndex,
                N = P.tooltipAxisBandSize,
                $ = m.getTooltipEventType(),
                k = (S = x.props.active) !== null && S !== void 0 ? S : E,
                F = m.props.layout,
                V = x.key || "_recharts-cursor";
              return I.createElement(EF, {
                key: V,
                activeCoordinate: j,
                activePayload: A,
                activeTooltipIndex: M,
                chartName: r,
                element: x,
                isActive: k,
                layout: F,
                offset: T,
                tooltipAxisBandSize: N,
                tooltipEventType: $,
              });
            }),
            te(m, "renderPolarAxis", function (x, S, P) {
              var E = lt(x, "type.axisType"),
                j = lt(m.state, "".concat(E, "Map")),
                A = x.type.defaultProps,
                T = A !== void 0 ? D(D({}, A), x.props) : x.props,
                M = j && j[T["".concat(E, "Id")]];
              return O.cloneElement(
                x,
                D(
                  D({}, M),
                  {},
                  {
                    className: me(E, M.className),
                    key: x.key || "".concat(S, "-").concat(P),
                    ticks: hn(M, !0),
                  },
                ),
              );
            }),
            te(m, "renderPolarGrid", function (x) {
              var S = x.props,
                P = S.radialLines,
                E = S.polarAngles,
                j = S.polarRadius,
                A = m.state,
                T = A.radiusAxisMap,
                M = A.angleAxisMap,
                N = Mt(T),
                $ = Mt(M),
                k = $.cx,
                F = $.cy,
                V = $.innerRadius,
                H = $.outerRadius;
              return O.cloneElement(x, {
                polarAngles: Array.isArray(E)
                  ? E
                  : hn($, !0).map(function (Z) {
                      return Z.coordinate;
                    }),
                polarRadius: Array.isArray(j)
                  ? j
                  : hn(N, !0).map(function (Z) {
                      return Z.coordinate;
                    }),
                cx: k,
                cy: F,
                innerRadius: V,
                outerRadius: H,
                key: x.key || "polar-grid",
                radialLines: P,
              });
            }),
            te(m, "renderLegend", function () {
              var x = m.state.formattedGraphicalItems,
                S = m.props,
                P = S.children,
                E = S.width,
                j = S.height,
                A = m.props.margin || {},
                T = E - (A.left || 0) - (A.right || 0),
                M = uw({
                  children: P,
                  formattedGraphicalItems: x,
                  legendWidth: T,
                  legendContent: l,
                });
              if (!M) return null;
              var N = M.item,
                $ = B0(M, TF);
              return O.cloneElement(
                N,
                D(
                  D({}, $),
                  {},
                  {
                    chartWidth: E,
                    chartHeight: j,
                    margin: A,
                    onBBoxUpdate: m.handleLegendBBoxUpdate,
                  },
                ),
              );
            }),
            te(m, "renderTooltip", function () {
              var x,
                S = m.props,
                P = S.children,
                E = S.accessibilityLayer,
                j = Ve(P, mt);
              if (!j) return null;
              var A = m.state,
                T = A.isTooltipActive,
                M = A.activeCoordinate,
                N = A.activePayload,
                $ = A.activeLabel,
                k = A.offset,
                F = (x = j.props.active) !== null && x !== void 0 ? x : T;
              return O.cloneElement(j, {
                viewBox: D(D({}, k), {}, { x: k.left, y: k.top }),
                active: F,
                label: $,
                payload: F ? N : [],
                coordinate: M,
                accessibilityLayer: E,
              });
            }),
            te(m, "renderBrush", function (x) {
              var S = m.props,
                P = S.margin,
                E = S.data,
                j = m.state,
                A = j.offset,
                T = j.dataStartIndex,
                M = j.dataEndIndex,
                N = j.updateId;
              return O.cloneElement(x, {
                key: x.key || "_recharts-brush",
                onChange: Pi(m.handleBrushChange, x.props.onChange),
                data: E,
                x: W(x.props.x) ? x.props.x : A.left,
                y: W(x.props.y)
                  ? x.props.y
                  : A.top + A.height + A.brushBottom - (P.bottom || 0),
                width: W(x.props.width) ? x.props.width : A.width,
                startIndex: T,
                endIndex: M,
                updateId: "brush-".concat(N),
              });
            }),
            te(m, "renderReferenceElement", function (x, S, P) {
              if (!x) return null;
              var E = m,
                j = E.clipPathId,
                A = m.state,
                T = A.xAxisMap,
                M = A.yAxisMap,
                N = A.offset,
                $ = x.type.defaultProps || {},
                k = x.props,
                F = k.xAxisId,
                V = F === void 0 ? $.xAxisId : F,
                H = k.yAxisId,
                Z = H === void 0 ? $.yAxisId : H;
              return O.cloneElement(x, {
                key: x.key || "".concat(S, "-").concat(P),
                xAxis: T[V],
                yAxis: M[Z],
                viewBox: {
                  x: N.left,
                  y: N.top,
                  width: N.width,
                  height: N.height,
                },
                clipPathId: j,
              });
            }),
            te(m, "renderActivePoints", function (x) {
              var S = x.item,
                P = x.activePoint,
                E = x.basePoint,
                j = x.childIndex,
                A = x.isRange,
                T = [],
                M = S.props.key,
                N =
                  S.item.type.defaultProps !== void 0
                    ? D(D({}, S.item.type.defaultProps), S.item.props)
                    : S.item.props,
                $ = N.activeDot,
                k = N.dataKey,
                F = D(
                  D(
                    {
                      index: j,
                      dataKey: k,
                      cx: P.x,
                      cy: P.y,
                      r: 4,
                      fill: Yd(S.item),
                      strokeWidth: 2,
                      stroke: "#fff",
                      payload: P.payload,
                      value: P.value,
                    },
                    ye($, !1),
                  ),
                  Ii($),
                );
              return (
                T.push(
                  y.renderActiveDot(
                    $,
                    F,
                    "".concat(M, "-activePoint-").concat(j),
                  ),
                ),
                E
                  ? T.push(
                      y.renderActiveDot(
                        $,
                        D(D({}, F), {}, { cx: E.x, cy: E.y }),
                        "".concat(M, "-basePoint-").concat(j),
                      ),
                    )
                  : A && T.push(null),
                T
              );
            }),
            te(m, "renderGraphicChild", function (x, S, P) {
              var E = m.filterFormatItem(x, S, P);
              if (!E) return null;
              var j = m.getTooltipEventType(),
                A = m.state,
                T = A.isTooltipActive,
                M = A.tooltipAxis,
                N = A.activeTooltipIndex,
                $ = A.activeLabel,
                k = m.props.children,
                F = Ve(k, mt),
                V = E.props,
                H = V.points,
                Z = V.isRange,
                J = V.baseLine,
                R =
                  E.item.type.defaultProps !== void 0
                    ? D(D({}, E.item.type.defaultProps), E.item.props)
                    : E.item.props,
                B = R.activeDot,
                X = R.hide,
                z = R.activeBar,
                ne = R.activeShape,
                U = !!(!X && T && F && (B || z || ne)),
                re = {};
              j !== "axis" && F && F.props.trigger === "click"
                ? (re = {
                    onClick: Pi(m.handleItemMouseEnter, x.props.onClick),
                  })
                : j !== "axis" &&
                  (re = {
                    onMouseLeave: Pi(
                      m.handleItemMouseLeave,
                      x.props.onMouseLeave,
                    ),
                    onMouseEnter: Pi(
                      m.handleItemMouseEnter,
                      x.props.onMouseEnter,
                    ),
                  });
              var L = O.cloneElement(x, D(D({}, E.props), re));
              function G(Yt) {
                return typeof M.dataKey == "function"
                  ? M.dataKey(Yt.payload)
                  : null;
              }
              if (U)
                if (N >= 0) {
                  var Y, q;
                  if (M.dataKey && !M.allowDuplicatedCategory) {
                    var le =
                      typeof M.dataKey == "function"
                        ? G
                        : "payload.".concat(M.dataKey.toString());
                    (Y = Ic(H, le, $)), (q = Z && J && Ic(J, le, $));
                  } else (Y = H?.[N]), (q = Z && J && J[N]);
                  if (ne || z) {
                    var ie =
                      x.props.activeIndex !== void 0 ? x.props.activeIndex : N;
                    return [
                      O.cloneElement(
                        x,
                        D(D(D({}, E.props), re), {}, { activeIndex: ie }),
                      ),
                      null,
                      null,
                    ];
                  }
                  if (!ue(Y))
                    return [L].concat(
                      Ur(
                        m.renderActivePoints({
                          item: E,
                          activePoint: Y,
                          basePoint: q,
                          childIndex: N,
                          isRange: Z,
                        }),
                      ),
                    );
                } else {
                  var xe,
                    we =
                      (xe = m.getItemByXY(m.state.activeCoordinate)) !== null &&
                      xe !== void 0
                        ? xe
                        : { graphicalItem: L },
                    Re = we.graphicalItem,
                    Tt = Re.item,
                    vr = Tt === void 0 ? x : Tt,
                    pi = Re.childIndex,
                    Xt = D(D(D({}, E.props), re), {}, { activeIndex: pi });
                  return [O.cloneElement(vr, Xt), null, null];
                }
              return Z ? [L, null, null] : [L, null];
            }),
            te(m, "renderCustomized", function (x, S, P) {
              return O.cloneElement(
                x,
                D(
                  D({ key: "recharts-customized-".concat(P) }, m.props),
                  m.state,
                ),
              );
            }),
            te(m, "renderMap", {
              CartesianGrid: { handler: Ri, once: !0 },
              ReferenceArea: { handler: m.renderReferenceElement },
              ReferenceLine: { handler: Ri },
              ReferenceDot: { handler: m.renderReferenceElement },
              XAxis: { handler: Ri },
              YAxis: { handler: Ri },
              Brush: { handler: m.renderBrush, once: !0 },
              Bar: { handler: m.renderGraphicChild },
              Line: { handler: m.renderGraphicChild },
              Area: { handler: m.renderGraphicChild },
              Radar: { handler: m.renderGraphicChild },
              RadialBar: { handler: m.renderGraphicChild },
              Scatter: { handler: m.renderGraphicChild },
              Pie: { handler: m.renderGraphicChild },
              Funnel: { handler: m.renderGraphicChild },
              Tooltip: { handler: m.renderCursor, once: !0 },
              PolarGrid: { handler: m.renderPolarGrid, once: !0 },
              PolarAngleAxis: { handler: m.renderPolarAxis },
              PolarRadiusAxis: { handler: m.renderPolarAxis },
              Customized: { handler: m.renderCustomized },
            }),
            (m.clipPathId = "".concat(
              (w = b.id) !== null && w !== void 0 ? w : Ia("recharts"),
              "-clip",
            )),
            (m.throttleTriggeredAfterMouseMove = o1(
              m.triggeredAfterMouseMove,
              (_ = b.throttleDelay) !== null && _ !== void 0 ? _ : 1e3 / 60,
            )),
            (m.state = {}),
            m
          );
        }
        return (
          BF(y, g),
          kF(y, [
            {
              key: "componentDidMount",
              value: function () {
                var w, _;
                this.addListener(),
                  this.accessibilityManager.setDetails({
                    container: this.container,
                    offset: {
                      left:
                        (w = this.props.margin.left) !== null && w !== void 0
                          ? w
                          : 0,
                      top:
                        (_ = this.props.margin.top) !== null && _ !== void 0
                          ? _
                          : 0,
                    },
                    coordinateList: this.state.tooltipTicks,
                    mouseHandlerCallback: this.triggeredAfterMouseMove,
                    layout: this.props.layout,
                  }),
                  this.displayDefaultTooltip();
              },
            },
            {
              key: "displayDefaultTooltip",
              value: function () {
                var w = this.props,
                  _ = w.children,
                  m = w.data,
                  x = w.height,
                  S = w.layout,
                  P = Ve(_, mt);
                if (P) {
                  var E = P.props.defaultIndex;
                  if (
                    !(
                      typeof E != "number" ||
                      E < 0 ||
                      E > this.state.tooltipTicks.length - 1
                    )
                  ) {
                    var j =
                        this.state.tooltipTicks[E] &&
                        this.state.tooltipTicks[E].value,
                      A = Gf(this.state, m, E, j),
                      T = this.state.tooltipTicks[E].coordinate,
                      M = (this.state.offset.top + x) / 2,
                      N = S === "horizontal",
                      $ = N ? { x: T, y: M } : { y: T, x: M },
                      k = this.state.formattedGraphicalItems.find(function (V) {
                        var H = V.item;
                        return H.type.name === "Scatter";
                      });
                    k &&
                      (($ = D(D({}, $), k.props.points[E].tooltipPosition)),
                      (A = k.props.points[E].tooltipPayload));
                    var F = {
                      activeTooltipIndex: E,
                      isTooltipActive: !0,
                      activeLabel: j,
                      activePayload: A,
                      activeCoordinate: $,
                    };
                    this.setState(F),
                      this.renderCursor(P),
                      this.accessibilityManager.setIndex(E);
                  }
                }
              },
            },
            {
              key: "getSnapshotBeforeUpdate",
              value: function (w, _) {
                if (!this.props.accessibilityLayer) return null;
                if (
                  (this.state.tooltipTicks !== _.tooltipTicks &&
                    this.accessibilityManager.setDetails({
                      coordinateList: this.state.tooltipTicks,
                    }),
                  this.props.layout !== w.layout &&
                    this.accessibilityManager.setDetails({
                      layout: this.props.layout,
                    }),
                  this.props.margin !== w.margin)
                ) {
                  var m, x;
                  this.accessibilityManager.setDetails({
                    offset: {
                      left:
                        (m = this.props.margin.left) !== null && m !== void 0
                          ? m
                          : 0,
                      top:
                        (x = this.props.margin.top) !== null && x !== void 0
                          ? x
                          : 0,
                    },
                  });
                }
                return null;
              },
            },
            {
              key: "componentDidUpdate",
              value: function (w) {
                kc([Ve(w.children, mt)], [Ve(this.props.children, mt)]) ||
                  this.displayDefaultTooltip();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.removeListener(),
                  this.throttleTriggeredAfterMouseMove.cancel();
              },
            },
            {
              key: "getTooltipEventType",
              value: function () {
                var w = Ve(this.props.children, mt);
                if (w && typeof w.props.shared == "boolean") {
                  var _ = w.props.shared ? "axis" : "item";
                  return u.indexOf(_) >= 0 ? _ : a;
                }
                return a;
              },
            },
            {
              key: "getMouseInfo",
              value: function (w) {
                if (!this.container) return null;
                var _ = this.container,
                  m = _.getBoundingClientRect(),
                  x = fR(m),
                  S = {
                    chartX: Math.round(w.pageX - x.left),
                    chartY: Math.round(w.pageY - x.top),
                  },
                  P = m.width / _.offsetWidth || 1,
                  E = this.inRange(S.chartX, S.chartY, P);
                if (!E) return null;
                var j = this.state,
                  A = j.xAxisMap,
                  T = j.yAxisMap,
                  M = this.getTooltipEventType();
                if (M !== "axis" && A && T) {
                  var N = Mt(A).scale,
                    $ = Mt(T).scale,
                    k = N && N.invert ? N.invert(S.chartX) : null,
                    F = $ && $.invert ? $.invert(S.chartY) : null;
                  return D(D({}, S), {}, { xValue: k, yValue: F });
                }
                var V = H0(this.state, this.props.data, this.props.layout, E);
                return V ? D(D({}, S), V) : null;
              },
            },
            {
              key: "inRange",
              value: function (w, _) {
                var m =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : 1,
                  x = this.props.layout,
                  S = w / m,
                  P = _ / m;
                if (x === "horizontal" || x === "vertical") {
                  var E = this.state.offset,
                    j =
                      S >= E.left &&
                      S <= E.left + E.width &&
                      P >= E.top &&
                      P <= E.top + E.height;
                  return j ? { x: S, y: P } : null;
                }
                var A = this.state,
                  T = A.angleAxisMap,
                  M = A.radiusAxisMap;
                if (T && M) {
                  var N = Mt(T);
                  return cy({ x: S, y: P }, N);
                }
                return null;
              },
            },
            {
              key: "parseEventsOfWrapper",
              value: function () {
                var w = this.props.children,
                  _ = this.getTooltipEventType(),
                  m = Ve(w, mt),
                  x = {};
                m &&
                  _ === "axis" &&
                  (m.props.trigger === "click"
                    ? (x = { onClick: this.handleClick })
                    : (x = {
                        onMouseEnter: this.handleMouseEnter,
                        onDoubleClick: this.handleDoubleClick,
                        onMouseMove: this.handleMouseMove,
                        onMouseLeave: this.handleMouseLeave,
                        onTouchMove: this.handleTouchMove,
                        onTouchStart: this.handleTouchStart,
                        onTouchEnd: this.handleTouchEnd,
                        onContextMenu: this.handleContextMenu,
                      }));
                var S = Ii(this.props, this.handleOuterEvent);
                return D(D({}, S), x);
              },
            },
            {
              key: "addListener",
              value: function () {
                vc.on(mc, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "removeListener",
              value: function () {
                vc.removeListener(mc, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "filterFormatItem",
              value: function (w, _, m) {
                for (
                  var x = this.state.formattedGraphicalItems,
                    S = 0,
                    P = x.length;
                  S < P;
                  S++
                ) {
                  var E = x[S];
                  if (
                    E.item === w ||
                    E.props.key === w.key ||
                    (_ === wt(E.item.type) && m === E.childIndex)
                  )
                    return E;
                }
                return null;
              },
            },
            {
              key: "renderClipPath",
              value: function () {
                var w = this.clipPathId,
                  _ = this.state.offset,
                  m = _.left,
                  x = _.top,
                  S = _.height,
                  P = _.width;
                return I.createElement(
                  "defs",
                  null,
                  I.createElement(
                    "clipPath",
                    { id: w },
                    I.createElement("rect", {
                      x: m,
                      y: x,
                      height: S,
                      width: P,
                    }),
                  ),
                );
              },
            },
            {
              key: "getXScales",
              value: function () {
                var w = this.state.xAxisMap;
                return w
                  ? Object.entries(w).reduce(function (_, m) {
                      var x = L0(m, 2),
                        S = x[0],
                        P = x[1];
                      return D(D({}, _), {}, te({}, S, P.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getYScales",
              value: function () {
                var w = this.state.yAxisMap;
                return w
                  ? Object.entries(w).reduce(function (_, m) {
                      var x = L0(m, 2),
                        S = x[0],
                        P = x[1];
                      return D(D({}, _), {}, te({}, S, P.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getXScaleByAxisId",
              value: function (w) {
                var _;
                return (_ = this.state.xAxisMap) === null ||
                  _ === void 0 ||
                  (_ = _[w]) === null ||
                  _ === void 0
                  ? void 0
                  : _.scale;
              },
            },
            {
              key: "getYScaleByAxisId",
              value: function (w) {
                var _;
                return (_ = this.state.yAxisMap) === null ||
                  _ === void 0 ||
                  (_ = _[w]) === null ||
                  _ === void 0
                  ? void 0
                  : _.scale;
              },
            },
            {
              key: "getItemByXY",
              value: function (w) {
                var _ = this.state,
                  m = _.formattedGraphicalItems,
                  x = _.activeItem;
                if (m && m.length)
                  for (var S = 0, P = m.length; S < P; S++) {
                    var E = m[S],
                      j = E.props,
                      A = E.item,
                      T =
                        A.type.defaultProps !== void 0
                          ? D(D({}, A.type.defaultProps), A.props)
                          : A.props,
                      M = wt(A.type);
                    if (M === "Bar") {
                      var N = (j.data || []).find(function (V) {
                        return TD(w, V);
                      });
                      if (N) return { graphicalItem: E, payload: N };
                    } else if (M === "RadialBar") {
                      var $ = (j.data || []).find(function (V) {
                        return cy(w, V);
                      });
                      if ($) return { graphicalItem: E, payload: $ };
                    } else if (Qa(E, x) || eo(E, x) || Xn(E, x)) {
                      var k = bk({
                          graphicalItem: E,
                          activeTooltipItem: x,
                          itemData: T.data,
                        }),
                        F = T.activeIndex === void 0 ? k : T.activeIndex;
                      return {
                        graphicalItem: D(D({}, E), {}, { childIndex: F }),
                        payload: Xn(E, x) ? T.data[k] : E.props.data[k],
                      };
                    }
                  }
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var w = this;
                if (!wh(this)) return null;
                var _ = this.props,
                  m = _.children,
                  x = _.className,
                  S = _.width,
                  P = _.height,
                  E = _.style,
                  j = _.compact,
                  A = _.title,
                  T = _.desc,
                  M = B0(_, RF),
                  N = ye(M, !1);
                if (j)
                  return I.createElement(
                    T0,
                    {
                      state: this.state,
                      width: this.props.width,
                      height: this.props.height,
                      clipPathId: this.clipPathId,
                    },
                    I.createElement(
                      Fc,
                      _r({}, N, { width: S, height: P, title: A, desc: T }),
                      this.renderClipPath(),
                      _h(m, this.renderMap),
                    ),
                  );
                if (this.props.accessibilityLayer) {
                  var $, k;
                  (N.tabIndex =
                    ($ = this.props.tabIndex) !== null && $ !== void 0 ? $ : 0),
                    (N.role =
                      (k = this.props.role) !== null && k !== void 0
                        ? k
                        : "application"),
                    (N.onKeyDown = function (V) {
                      w.accessibilityManager.keyboardEvent(V);
                    }),
                    (N.onFocus = function () {
                      w.accessibilityManager.focus();
                    });
                }
                var F = this.parseEventsOfWrapper();
                return I.createElement(
                  T0,
                  {
                    state: this.state,
                    width: this.props.width,
                    height: this.props.height,
                    clipPathId: this.clipPathId,
                  },
                  I.createElement(
                    "div",
                    _r(
                      {
                        className: me("recharts-wrapper", x),
                        style: D(
                          {
                            position: "relative",
                            cursor: "default",
                            width: S,
                            height: P,
                          },
                          E,
                        ),
                      },
                      F,
                      {
                        ref: function (H) {
                          w.container = H;
                        },
                      },
                    ),
                    I.createElement(
                      Fc,
                      _r({}, N, {
                        width: S,
                        height: P,
                        title: A,
                        desc: T,
                        style: WF,
                      }),
                      this.renderClipPath(),
                      _h(m, this.renderMap),
                    ),
                    this.renderLegend(),
                    this.renderTooltip(),
                  ),
                );
              },
            },
          ])
        );
      })(O.Component);
    te(v, "displayName", r),
      te(
        v,
        "defaultProps",
        D(
          {
            layout: "horizontal",
            stackOffset: "none",
            barCategoryGap: "10%",
            barGap: 4,
            margin: { top: 5, right: 5, bottom: 5, left: 5 },
            reverseStackOrder: !1,
            syncMethod: "index",
          },
          c,
        ),
      ),
      te(v, "getDerivedStateFromProps", function (g, y) {
        var b = g.dataKey,
          w = g.data,
          _ = g.children,
          m = g.width,
          x = g.height,
          S = g.layout,
          P = g.stackOffset,
          E = g.margin,
          j = y.dataStartIndex,
          A = y.dataEndIndex;
        if (y.updateId === void 0) {
          var T = z0(g);
          return D(
            D(
              D({}, T),
              {},
              { updateId: 0 },
              p(D(D({ props: g }, T), {}, { updateId: 0 }), y),
            ),
            {},
            {
              prevDataKey: b,
              prevData: w,
              prevWidth: m,
              prevHeight: x,
              prevLayout: S,
              prevStackOffset: P,
              prevMargin: E,
              prevChildren: _,
            },
          );
        }
        if (
          b !== y.prevDataKey ||
          w !== y.prevData ||
          m !== y.prevWidth ||
          x !== y.prevHeight ||
          S !== y.prevLayout ||
          P !== y.prevStackOffset ||
          !$c(E, y.prevMargin)
        ) {
          var M = z0(g),
            N = {
              chartX: y.chartX,
              chartY: y.chartY,
              isTooltipActive: y.isTooltipActive,
            },
            $ = D(D({}, H0(y, w, S)), {}, { updateId: y.updateId + 1 }),
            k = D(D(D({}, M), N), $);
          return D(
            D(D({}, k), p(D({ props: g }, k), y)),
            {},
            {
              prevDataKey: b,
              prevData: w,
              prevWidth: m,
              prevHeight: x,
              prevLayout: S,
              prevStackOffset: P,
              prevMargin: E,
              prevChildren: _,
            },
          );
        }
        if (!kc(_, y.prevChildren)) {
          var F,
            V,
            H,
            Z,
            J = Ve(_, Fr),
            R =
              J &&
              (F =
                (V = J.props) === null || V === void 0
                  ? void 0
                  : V.startIndex) !== null &&
              F !== void 0
                ? F
                : j,
            B =
              J &&
              (H =
                (Z = J.props) === null || Z === void 0
                  ? void 0
                  : Z.endIndex) !== null &&
              H !== void 0
                ? H
                : A,
            X = R !== j || B !== A,
            z = !ue(w),
            ne = z && !X ? y.updateId : y.updateId + 1;
          return D(
            D(
              { updateId: ne },
              p(
                D(
                  D({ props: g }, y),
                  {},
                  { updateId: ne, dataStartIndex: R, dataEndIndex: B },
                ),
                y,
              ),
            ),
            {},
            { prevChildren: _, dataStartIndex: R, dataEndIndex: B },
          );
        }
        return null;
      }),
      te(v, "renderActiveDot", function (g, y, b) {
        var w;
        return (
          O.isValidElement(g)
            ? (w = O.cloneElement(g, y))
            : ae(g)
              ? (w = g(y))
              : (w = I.createElement(Aw, y)),
          I.createElement(De, { className: "recharts-active-dot", key: b }, w)
        );
      });
    var h = O.forwardRef(function (y, b) {
      return I.createElement(v, _r({}, y, { ref: b }));
    });
    return (h.displayName = v.displayName), h;
  };
export {
  gw as $,
  Or as A,
  di as B,
  lL as C,
  sL as D,
  $e as E,
  U1 as F,
  Ba as G,
  lI as H,
  Ut as I,
  dI as J,
  yL as K,
  De as L,
  Aw as M,
  Ft as N,
  mr as O,
  Wd as P,
  or as Q,
  gL as R,
  dk as S,
  tf as T,
  C$ as U,
  I$ as V,
  it as W,
  u1 as X,
  A$ as Y,
  pt as Z,
  iy as _,
  Wv as a,
  mL as a0,
  dL as a1,
  hL as a2,
  ae as b,
  lt as c,
  Dc as d,
  ke as e,
  ye as f,
  xL as g,
  PL as h,
  W as i,
  _L as j,
  wL as k,
  SL as l,
  ot as m,
  vL as n,
  hn as o,
  Aq as p,
  Eq as q,
  CL as r,
  $c as s,
  bL as t,
  OL as u,
  cL as v,
  nr as w,
  fL as x,
  pL as y,
  mt as z,
};
