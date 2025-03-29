import { j as d, R as g, r as Pe } from "./client-B6Fwjkna.js";
import {
  g as Ie,
  i as A,
  G as Be,
  a as Q,
  m as Ge,
  b as $,
  T as Re,
  s as Z,
  f as D,
  c as me,
  L as pe,
  d as Fe,
  e as Me,
  u as fe,
  h as he,
  j as Ke,
  k as We,
  l as Ve,
  w as be,
  n as ke,
  o as q,
  p as He,
  q as Ue,
  r as Ye,
  t as qe,
  B as oe,
  C as ee,
  v as te,
  x as re,
  y as ne,
  R as Xe,
  z as Je,
  A as Qe,
  D as Ze,
} from "./generateCategoricalChart-cXdD9WE3.js";
import { c as et, e as M, B as tt } from "./input-CHU7cpM5.js";
import "./dropdown-menu-DJQEXZ3J.js";
/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rt = [
    ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
    [
      "path",
      { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
    ],
  ],
  nt = et("dollar-sign", rt),
  it = [
    { accessorKey: "transaction", header: "Transaction" },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ getValue: e }) => new Date(e()).toLocaleDateString(),
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ getValue: e }) => {
        const t = e();
        return d.jsxs("span", {
          className: t < 0 ? "text-red-500" : "text-green-500",
          children: [t.toLocaleString(), " USD"],
        });
      },
    },
    { accessorKey: "category", header: "Category" },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ getValue: e }) => {
        const t = e();
        return d.jsx("span", {
          className: `px-2 py-1 rounded ${t === "completed" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"}`,
          children: t,
        });
      },
    },
    {
      accessorKey: "",
      header: "Actions",
      cell: ({ row: e }) => (
        console.log(e.original.amount),
        d.jsx("div", { children: "Add a table action/ dropdown if you want" })
      ),
    },
  ];
function _e(e, t, n) {
  if (t < 1) return [];
  if (t === 1 && n === void 0) return e;
  for (var r = [], i = 0; i < e.length; i += t) r.push(e[i]);
  return r;
}
function ot(e, t, n) {
  var r = { width: e.width + t.width, height: e.height + t.height };
  return Ie(r, n);
}
function at(e, t, n) {
  var r = n === "width",
    i = e.x,
    o = e.y,
    a = e.width,
    s = e.height;
  return t === 1
    ? { start: r ? i : o, end: r ? i + a : o + s }
    : { start: r ? i + a : o + s, end: r ? i : o };
}
function V(e, t, n, r, i) {
  if (e * t < e * r || e * t > e * i) return !1;
  var o = n();
  return e * (t - (e * o) / 2 - r) >= 0 && e * (t + (e * o) / 2 - i) <= 0;
}
function ct(e, t) {
  return _e(e, t + 1);
}
function lt(e, t, n, r, i) {
  for (
    var o = (r || []).slice(),
      a = t.start,
      s = t.end,
      l = 0,
      h = 1,
      c = a,
      v = function () {
        var p = r?.[l];
        if (p === void 0) return { v: _e(r, h) };
        var b = l,
          y,
          O = function () {
            return y === void 0 && (y = n(p, b)), y;
          },
          x = p.coordinate,
          m = l === 0 || V(e, x, O, c, s);
        m || ((l = 0), (c = a), (h += 1)),
          m && ((c = x + e * (O() / 2 + i)), (l += h));
      },
      f;
    h <= o.length;

  )
    if (((f = v()), f)) return f.v;
  return [];
}
function K(e) {
  "@babel/helpers - typeof";
  return (
    (K =
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
    K(e)
  );
}
function ge(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ge(Object(n), !0).forEach(function (r) {
          st(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ge(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function st(e, t, n) {
  return (
    (t = ut(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ut(e) {
  var t = ft(e, "string");
  return K(t) == "symbol" ? t : t + "";
}
function ft(e, t) {
  if (K(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (K(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ht(e, t, n, r, i) {
  for (
    var o = (r || []).slice(),
      a = o.length,
      s = t.start,
      l = t.end,
      h = function (f) {
        var u = o[f],
          p,
          b = function () {
            return p === void 0 && (p = n(u, f)), p;
          };
        if (f === a - 1) {
          var y = e * (u.coordinate + (e * b()) / 2 - l);
          o[f] = u = P(
            P({}, u),
            {},
            { tickCoord: y > 0 ? u.coordinate - y * e : u.coordinate },
          );
        } else o[f] = u = P(P({}, u), {}, { tickCoord: u.coordinate });
        var O = V(e, u.tickCoord, b, s, l);
        O &&
          ((l = u.tickCoord - e * (b() / 2 + i)),
          (o[f] = P(P({}, u), {}, { isShow: !0 })));
      },
      c = a - 1;
    c >= 0;
    c--
  )
    h(c);
  return o;
}
function dt(e, t, n, r, i, o) {
  var a = (r || []).slice(),
    s = a.length,
    l = t.start,
    h = t.end;
  if (o) {
    var c = r[s - 1],
      v = n(c, s - 1),
      f = e * (c.coordinate + (e * v) / 2 - h);
    a[s - 1] = c = P(
      P({}, c),
      {},
      { tickCoord: f > 0 ? c.coordinate - f * e : c.coordinate },
    );
    var u = V(
      e,
      c.tickCoord,
      function () {
        return v;
      },
      l,
      h,
    );
    u &&
      ((h = c.tickCoord - e * (v / 2 + i)),
      (a[s - 1] = P(P({}, c), {}, { isShow: !0 })));
  }
  for (
    var p = o ? s - 1 : s,
      b = function (x) {
        var m = a[x],
          w,
          j = function () {
            return w === void 0 && (w = n(m, x)), w;
          };
        if (x === 0) {
          var S = e * (m.coordinate - (e * j()) / 2 - l);
          a[x] = m = P(
            P({}, m),
            {},
            { tickCoord: S < 0 ? m.coordinate - S * e : m.coordinate },
          );
        } else a[x] = m = P(P({}, m), {}, { tickCoord: m.coordinate });
        var T = V(e, m.tickCoord, j, l, h);
        T &&
          ((l = m.tickCoord + e * (j() / 2 + i)),
          (a[x] = P(P({}, m), {}, { isShow: !0 })));
      },
      y = 0;
    y < p;
    y++
  )
    b(y);
  return a;
}
function de(e, t, n) {
  var r = e.tick,
    i = e.ticks,
    o = e.viewBox,
    a = e.minTickGap,
    s = e.orientation,
    l = e.interval,
    h = e.tickFormatter,
    c = e.unit,
    v = e.angle;
  if (!i || !i.length || !r) return [];
  if (A(l) || Be.isSsr) return ct(i, typeof l == "number" && A(l) ? l : 0);
  var f = [],
    u = s === "top" || s === "bottom" ? "width" : "height",
    p =
      c && u === "width"
        ? Q(c, { fontSize: t, letterSpacing: n })
        : { width: 0, height: 0 },
    b = function (m, w) {
      var j = $(h) ? h(m.value, w) : m.value;
      return u === "width"
        ? ot(Q(j, { fontSize: t, letterSpacing: n }), p, v)
        : Q(j, { fontSize: t, letterSpacing: n })[u];
    },
    y = i.length >= 2 ? Ge(i[1].coordinate - i[0].coordinate) : 1,
    O = at(o, y, u);
  return l === "equidistantPreserveStart"
    ? lt(y, O, b, i, a)
    : (l === "preserveStart" || l === "preserveStartEnd"
        ? (f = dt(y, O, b, i, a, l === "preserveStartEnd"))
        : (f = ht(y, O, b, i, a)),
      f.filter(function (x) {
        return x.isShow;
      }));
}
var yt = ["viewBox"],
  vt = ["viewBox"],
  mt = ["ticks"];
function I(e) {
  "@babel/helpers - typeof";
  return (
    (I =
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
    I(e)
  );
}
function L() {
  return (
    (L = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    L.apply(this, arguments)
  );
}
function xe(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xe(Object(n), !0).forEach(function (r) {
          ye(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : xe(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function ie(e, t) {
  if (e == null) return {};
  var n = pt(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function pt(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function bt(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function we(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, Ae(r.key), r);
  }
}
function gt(e, t, n) {
  return (
    t && we(e.prototype, t),
    n && we(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function xt(e, t, n) {
  return (
    (t = H(t)),
    wt(
      e,
      Se() ? Reflect.construct(t, n || [], H(e).constructor) : t.apply(e, n),
    )
  );
}
function wt(e, t) {
  if (t && (I(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Ot(e);
}
function Ot(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Se() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (Se = function () {
    return !!e;
  })();
}
function H(e) {
  return (
    (H = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    H(e)
  );
}
function jt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ae(e, t);
}
function ae(e, t) {
  return (
    (ae = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    ae(e, t)
  );
}
function ye(e, t, n) {
  return (
    (t = Ae(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ae(e) {
  var t = Pt(e, "string");
  return I(t) == "symbol" ? t : t + "";
}
function Pt(e, t) {
  if (I(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (I(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var R = (function (e) {
  function t(n) {
    var r;
    return (
      bt(this, t),
      (r = xt(this, t, [n])),
      (r.state = { fontSize: "", letterSpacing: "" }),
      r
    );
  }
  return (
    jt(t, e),
    gt(
      t,
      [
        {
          key: "shouldComponentUpdate",
          value: function (r, i) {
            var o = r.viewBox,
              a = ie(r, yt),
              s = this.props,
              l = s.viewBox,
              h = ie(s, vt);
            return !Z(o, l) || !Z(a, h) || !Z(i, this.state);
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            var r = this.layerReference;
            if (r) {
              var i = r.getElementsByClassName(
                "recharts-cartesian-axis-tick-value",
              )[0];
              i &&
                this.setState({
                  fontSize: window.getComputedStyle(i).fontSize,
                  letterSpacing: window.getComputedStyle(i).letterSpacing,
                });
            }
          },
        },
        {
          key: "getTickLineCoord",
          value: function (r) {
            var i = this.props,
              o = i.x,
              a = i.y,
              s = i.width,
              l = i.height,
              h = i.orientation,
              c = i.tickSize,
              v = i.mirror,
              f = i.tickMargin,
              u,
              p,
              b,
              y,
              O,
              x,
              m = v ? -1 : 1,
              w = r.tickSize || c,
              j = A(r.tickCoord) ? r.tickCoord : r.coordinate;
            switch (h) {
              case "top":
                (u = p = r.coordinate),
                  (y = a + +!v * l),
                  (b = y - m * w),
                  (x = b - m * f),
                  (O = j);
                break;
              case "left":
                (b = y = r.coordinate),
                  (p = o + +!v * s),
                  (u = p - m * w),
                  (O = u - m * f),
                  (x = j);
                break;
              case "right":
                (b = y = r.coordinate),
                  (p = o + +v * s),
                  (u = p + m * w),
                  (O = u + m * f),
                  (x = j);
                break;
              default:
                (u = p = r.coordinate),
                  (y = a + +v * l),
                  (b = y + m * w),
                  (x = b + m * f),
                  (O = j);
                break;
            }
            return {
              line: { x1: u, y1: b, x2: p, y2: y },
              tick: { x: O, y: x },
            };
          },
        },
        {
          key: "getTickTextAnchor",
          value: function () {
            var r = this.props,
              i = r.orientation,
              o = r.mirror,
              a;
            switch (i) {
              case "left":
                a = o ? "start" : "end";
                break;
              case "right":
                a = o ? "end" : "start";
                break;
              default:
                a = "middle";
                break;
            }
            return a;
          },
        },
        {
          key: "getTickVerticalAnchor",
          value: function () {
            var r = this.props,
              i = r.orientation,
              o = r.mirror,
              a = "end";
            switch (i) {
              case "left":
              case "right":
                a = "middle";
                break;
              case "top":
                a = o ? "start" : "end";
                break;
              default:
                a = o ? "end" : "start";
                break;
            }
            return a;
          },
        },
        {
          key: "renderAxisLine",
          value: function () {
            var r = this.props,
              i = r.x,
              o = r.y,
              a = r.width,
              s = r.height,
              l = r.orientation,
              h = r.mirror,
              c = r.axisLine,
              v = _(
                _(_({}, D(this.props, !1)), D(c, !1)),
                {},
                { fill: "none" },
              );
            if (l === "top" || l === "bottom") {
              var f = +((l === "top" && !h) || (l === "bottom" && h));
              v = _(
                _({}, v),
                {},
                { x1: i, y1: o + f * s, x2: i + a, y2: o + f * s },
              );
            } else {
              var u = +((l === "left" && !h) || (l === "right" && h));
              v = _(
                _({}, v),
                {},
                { x1: i + u * a, y1: o, x2: i + u * a, y2: o + s },
              );
            }
            return g.createElement(
              "line",
              L({}, v, {
                className: M(
                  "recharts-cartesian-axis-line",
                  me(c, "className"),
                ),
              }),
            );
          },
        },
        {
          key: "renderTicks",
          value: function (r, i, o) {
            var a = this,
              s = this.props,
              l = s.tickLine,
              h = s.stroke,
              c = s.tick,
              v = s.tickFormatter,
              f = s.unit,
              u = de(_(_({}, this.props), {}, { ticks: r }), i, o),
              p = this.getTickTextAnchor(),
              b = this.getTickVerticalAnchor(),
              y = D(this.props, !1),
              O = D(c, !1),
              x = _(_({}, y), {}, { fill: "none" }, D(l, !1)),
              m = u.map(function (w, j) {
                var S = a.getTickLineCoord(w),
                  T = S.line,
                  F = S.tick,
                  N = _(
                    _(
                      _(
                        _({ textAnchor: p, verticalAnchor: b }, y),
                        {},
                        { stroke: "none", fill: h },
                        O,
                      ),
                      F,
                    ),
                    {},
                    {
                      index: j,
                      payload: w,
                      visibleTicksCount: u.length,
                      tickFormatter: v,
                    },
                  );
                return g.createElement(
                  pe,
                  L(
                    {
                      className: "recharts-cartesian-axis-tick",
                      key: "tick-"
                        .concat(w.value, "-")
                        .concat(w.coordinate, "-")
                        .concat(w.tickCoord),
                    },
                    Fe(a.props, w, j),
                  ),
                  l &&
                    g.createElement(
                      "line",
                      L({}, x, T, {
                        className: M(
                          "recharts-cartesian-axis-tick-line",
                          me(l, "className"),
                        ),
                      }),
                    ),
                  c &&
                    t.renderTickItem(
                      c,
                      N,
                      "".concat($(v) ? v(w.value, j) : w.value).concat(f || ""),
                    ),
                );
              });
            return g.createElement(
              "g",
              { className: "recharts-cartesian-axis-ticks" },
              m,
            );
          },
        },
        {
          key: "render",
          value: function () {
            var r = this,
              i = this.props,
              o = i.axisLine,
              a = i.width,
              s = i.height,
              l = i.ticksGenerator,
              h = i.className,
              c = i.hide;
            if (c) return null;
            var v = this.props,
              f = v.ticks,
              u = ie(v, mt),
              p = f;
            return (
              $(l) && (p = f && f.length > 0 ? l(this.props) : l(u)),
              a <= 0 || s <= 0 || !p || !p.length
                ? null
                : g.createElement(
                    pe,
                    {
                      className: M("recharts-cartesian-axis", h),
                      ref: function (y) {
                        r.layerReference = y;
                      },
                    },
                    o && this.renderAxisLine(),
                    this.renderTicks(
                      p,
                      this.state.fontSize,
                      this.state.letterSpacing,
                    ),
                    Me.renderCallByParent(this.props),
                  )
            );
          },
        },
      ],
      [
        {
          key: "renderTickItem",
          value: function (r, i, o) {
            var a;
            return (
              g.isValidElement(r)
                ? (a = g.cloneElement(r, i))
                : $(r)
                  ? (a = r(i))
                  : (a = g.createElement(
                      Re,
                      L({}, i, {
                        className: "recharts-cartesian-axis-tick-value",
                      }),
                      o,
                    )),
              a
            );
          },
        },
      ],
    )
  );
})(Pe.Component);
ye(R, "displayName", "CartesianAxis");
ye(R, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  orientation: "bottom",
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd",
});
var kt = ["x1", "y1", "x2", "y2", "key"],
  _t = ["offset"];
function C(e) {
  "@babel/helpers - typeof";
  return (
    (C =
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
    C(e)
  );
}
function Oe(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Oe(Object(n), !0).forEach(function (r) {
          St(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Oe(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function St(e, t, n) {
  return (
    (t = At(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function At(e) {
  var t = Tt(e, "string");
  return C(t) == "symbol" ? t : t + "";
}
function Tt(e, t) {
  if (C(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (C(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function E() {
  return (
    (E = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    E.apply(this, arguments)
  );
}
function je(e, t) {
  if (e == null) return {};
  var n = Et(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Et(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var $t = function (t) {
  var n = t.fill;
  if (!n || n === "none") return null;
  var r = t.fillOpacity,
    i = t.x,
    o = t.y,
    a = t.width,
    s = t.height,
    l = t.ry;
  return g.createElement("rect", {
    x: i,
    y: o,
    ry: l,
    width: a,
    height: s,
    stroke: "none",
    fill: n,
    fillOpacity: r,
    className: "recharts-cartesian-grid-bg",
  });
};
function Te(e, t) {
  var n;
  if (g.isValidElement(e)) n = g.cloneElement(e, t);
  else if ($(e)) n = e(t);
  else {
    var r = t.x1,
      i = t.y1,
      o = t.x2,
      a = t.y2,
      s = t.key,
      l = je(t, kt),
      h = D(l, !1);
    h.offset;
    var c = je(h, _t);
    n = g.createElement(
      "line",
      E({}, c, { x1: r, y1: i, x2: o, y2: a, fill: "none", key: s }),
    );
  }
  return n;
}
function Ct(e) {
  var t = e.x,
    n = e.width,
    r = e.horizontal,
    i = r === void 0 ? !0 : r,
    o = e.horizontalPoints;
  if (!i || !o || !o.length) return null;
  var a = o.map(function (s, l) {
    var h = k(
      k({}, e),
      {},
      { x1: t, y1: s, x2: t + n, y2: s, key: "line-".concat(l), index: l },
    );
    return Te(i, h);
  });
  return g.createElement(
    "g",
    { className: "recharts-cartesian-grid-horizontal" },
    a,
  );
}
function Nt(e) {
  var t = e.y,
    n = e.height,
    r = e.vertical,
    i = r === void 0 ? !0 : r,
    o = e.verticalPoints;
  if (!i || !o || !o.length) return null;
  var a = o.map(function (s, l) {
    var h = k(
      k({}, e),
      {},
      { x1: s, y1: t, x2: s, y2: t + n, key: "line-".concat(l), index: l },
    );
    return Te(i, h);
  });
  return g.createElement(
    "g",
    { className: "recharts-cartesian-grid-vertical" },
    a,
  );
}
function zt(e) {
  var t = e.horizontalFill,
    n = e.fillOpacity,
    r = e.x,
    i = e.y,
    o = e.width,
    a = e.height,
    s = e.horizontalPoints,
    l = e.horizontal,
    h = l === void 0 ? !0 : l;
  if (!h || !t || !t.length) return null;
  var c = s
    .map(function (f) {
      return Math.round(f + i - i);
    })
    .sort(function (f, u) {
      return f - u;
    });
  i !== c[0] && c.unshift(0);
  var v = c.map(function (f, u) {
    var p = !c[u + 1],
      b = p ? i + a - f : c[u + 1] - f;
    if (b <= 0) return null;
    var y = u % t.length;
    return g.createElement("rect", {
      key: "react-".concat(u),
      y: f,
      x: r,
      height: b,
      width: o,
      stroke: "none",
      fill: t[y],
      fillOpacity: n,
      className: "recharts-cartesian-grid-bg",
    });
  });
  return g.createElement(
    "g",
    { className: "recharts-cartesian-gridstripes-horizontal" },
    v,
  );
}
function Dt(e) {
  var t = e.vertical,
    n = t === void 0 ? !0 : t,
    r = e.verticalFill,
    i = e.fillOpacity,
    o = e.x,
    a = e.y,
    s = e.width,
    l = e.height,
    h = e.verticalPoints;
  if (!n || !r || !r.length) return null;
  var c = h
    .map(function (f) {
      return Math.round(f + o - o);
    })
    .sort(function (f, u) {
      return f - u;
    });
  o !== c[0] && c.unshift(0);
  var v = c.map(function (f, u) {
    var p = !c[u + 1],
      b = p ? o + s - f : c[u + 1] - f;
    if (b <= 0) return null;
    var y = u % r.length;
    return g.createElement("rect", {
      key: "react-".concat(u),
      x: f,
      y: a,
      width: b,
      height: l,
      stroke: "none",
      fill: r[y],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg",
    });
  });
  return g.createElement(
    "g",
    { className: "recharts-cartesian-gridstripes-vertical" },
    v,
  );
}
var Lt = function (t, n) {
    var r = t.xAxis,
      i = t.width,
      o = t.height,
      a = t.offset;
    return ke(
      de(
        k(
          k(k({}, R.defaultProps), r),
          {},
          { ticks: q(r, !0), viewBox: { x: 0, y: 0, width: i, height: o } },
        ),
      ),
      a.left,
      a.left + a.width,
      n,
    );
  },
  It = function (t, n) {
    var r = t.yAxis,
      i = t.width,
      o = t.height,
      a = t.offset;
    return ke(
      de(
        k(
          k(k({}, R.defaultProps), r),
          {},
          { ticks: q(r, !0), viewBox: { x: 0, y: 0, width: i, height: o } },
        ),
      ),
      a.top,
      a.top + a.height,
      n,
    );
  },
  z = {
    horizontal: !0,
    vertical: !0,
    stroke: "#ccc",
    fill: "none",
    verticalFill: [],
    horizontalFill: [],
  };
function Ee(e) {
  var t,
    n,
    r,
    i,
    o,
    a,
    s = fe(),
    l = he(),
    h = Ke(),
    c = k(
      k({}, e),
      {},
      {
        stroke: (t = e.stroke) !== null && t !== void 0 ? t : z.stroke,
        fill: (n = e.fill) !== null && n !== void 0 ? n : z.fill,
        horizontal:
          (r = e.horizontal) !== null && r !== void 0 ? r : z.horizontal,
        horizontalFill:
          (i = e.horizontalFill) !== null && i !== void 0
            ? i
            : z.horizontalFill,
        vertical: (o = e.vertical) !== null && o !== void 0 ? o : z.vertical,
        verticalFill:
          (a = e.verticalFill) !== null && a !== void 0 ? a : z.verticalFill,
        x: A(e.x) ? e.x : h.left,
        y: A(e.y) ? e.y : h.top,
        width: A(e.width) ? e.width : h.width,
        height: A(e.height) ? e.height : h.height,
      },
    ),
    v = c.x,
    f = c.y,
    u = c.width,
    p = c.height,
    b = c.syncWithTicks,
    y = c.horizontalValues,
    O = c.verticalValues,
    x = We(),
    m = Ve();
  if (
    !A(u) ||
    u <= 0 ||
    !A(p) ||
    p <= 0 ||
    !A(v) ||
    v !== +v ||
    !A(f) ||
    f !== +f
  )
    return null;
  var w = c.verticalCoordinatesGenerator || Lt,
    j = c.horizontalCoordinatesGenerator || It,
    S = c.horizontalPoints,
    T = c.verticalPoints;
  if ((!S || !S.length) && $(j)) {
    var F = y && y.length,
      N = j(
        {
          yAxis: m ? k(k({}, m), {}, { ticks: F ? y : m.ticks }) : void 0,
          width: s,
          height: l,
          offset: h,
        },
        F ? !0 : b,
      );
    be(
      Array.isArray(N),
      "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(
        C(N),
        "]",
      ),
    ),
      Array.isArray(N) && (S = N);
  }
  if ((!T || !T.length) && $(w)) {
    var ve = O && O.length,
      W = w(
        {
          xAxis: x ? k(k({}, x), {}, { ticks: ve ? O : x.ticks }) : void 0,
          width: s,
          height: l,
          offset: h,
        },
        ve ? !0 : b,
      );
    be(
      Array.isArray(W),
      "verticalCoordinatesGenerator should return Array but instead it returned [".concat(
        C(W),
        "]",
      ),
    ),
      Array.isArray(W) && (T = W);
  }
  return g.createElement(
    "g",
    { className: "recharts-cartesian-grid" },
    g.createElement($t, {
      fill: c.fill,
      fillOpacity: c.fillOpacity,
      x: c.x,
      y: c.y,
      width: c.width,
      height: c.height,
      ry: c.ry,
    }),
    g.createElement(
      Ct,
      E({}, c, { offset: h, horizontalPoints: S, xAxis: x, yAxis: m }),
    ),
    g.createElement(
      Nt,
      E({}, c, { offset: h, verticalPoints: T, xAxis: x, yAxis: m }),
    ),
    g.createElement(zt, E({}, c, { horizontalPoints: S })),
    g.createElement(Dt, E({}, c, { verticalPoints: T })),
  );
}
Ee.displayName = "CartesianGrid";
function B(e) {
  "@babel/helpers - typeof";
  return (
    (B =
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
    B(e)
  );
}
function Bt(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gt(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, Ne(r.key), r);
  }
}
function Rt(e, t, n) {
  return (
    t && Gt(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Ft(e, t, n) {
  return (
    (t = U(t)),
    Mt(
      e,
      $e() ? Reflect.construct(t, n || [], U(e).constructor) : t.apply(e, n),
    )
  );
}
function Mt(e, t) {
  if (t && (B(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Kt(e);
}
function Kt(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function $e() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return ($e = function () {
    return !!e;
  })();
}
function U(e) {
  return (
    (U = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    U(e)
  );
}
function Wt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ce(e, t);
}
function ce(e, t) {
  return (
    (ce = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    ce(e, t)
  );
}
function Ce(e, t, n) {
  return (
    (t = Ne(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ne(e) {
  var t = Vt(e, "string");
  return B(t) == "symbol" ? t : t + "";
}
function Vt(e, t) {
  if (B(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (B(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function le() {
  return (
    (le = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    le.apply(this, arguments)
  );
}
function Ht(e) {
  var t = e.xAxisId,
    n = fe(),
    r = he(),
    i = He(t);
  return i == null
    ? null
    : g.createElement(
        R,
        le({}, i, {
          className: M(
            "recharts-".concat(i.axisType, " ").concat(i.axisType),
            i.className,
          ),
          viewBox: { x: 0, y: 0, width: n, height: r },
          ticksGenerator: function (a) {
            return q(a, !0);
          },
        }),
      );
}
var X = (function (e) {
  function t() {
    return Bt(this, t), Ft(this, t, arguments);
  }
  return (
    Wt(t, e),
    Rt(t, [
      {
        key: "render",
        value: function () {
          return g.createElement(Ht, this.props);
        },
      },
    ])
  );
})(g.Component);
Ce(X, "displayName", "XAxis");
Ce(X, "defaultProps", {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: { left: 0, right: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0,
});
function G(e) {
  "@babel/helpers - typeof";
  return (
    (G =
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
    G(e)
  );
}
function Ut(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Yt(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, Le(r.key), r);
  }
}
function qt(e, t, n) {
  return (
    t && Yt(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Xt(e, t, n) {
  return (
    (t = Y(t)),
    Jt(
      e,
      ze() ? Reflect.construct(t, n || [], Y(e).constructor) : t.apply(e, n),
    )
  );
}
function Jt(e, t) {
  if (t && (G(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Qt(e);
}
function Qt(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function ze() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (ze = function () {
    return !!e;
  })();
}
function Y(e) {
  return (
    (Y = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Y(e)
  );
}
function Zt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && se(e, t);
}
function se(e, t) {
  return (
    (se = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    se(e, t)
  );
}
function De(e, t, n) {
  return (
    (t = Le(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Le(e) {
  var t = er(e, "string");
  return G(t) == "symbol" ? t : t + "";
}
function er(e, t) {
  if (G(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (G(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function ue() {
  return (
    (ue = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ue.apply(this, arguments)
  );
}
var tr = function (t) {
    var n = t.yAxisId,
      r = fe(),
      i = he(),
      o = Ue(n);
    return o == null
      ? null
      : g.createElement(
          R,
          ue({}, o, {
            className: M(
              "recharts-".concat(o.axisType, " ").concat(o.axisType),
              o.className,
            ),
            viewBox: { x: 0, y: 0, width: r, height: i },
            ticksGenerator: function (s) {
              return q(s, !0);
            },
          }),
        );
  },
  J = (function (e) {
    function t() {
      return Ut(this, t), Xt(this, t, arguments);
    }
    return (
      Zt(t, e),
      qt(t, [
        {
          key: "render",
          value: function () {
            return g.createElement(tr, this.props);
          },
        },
      ])
    );
  })(g.Component);
De(J, "displayName", "YAxis");
De(J, "defaultProps", {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: { top: 0, bottom: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
});
var rr = Ye({
  chartName: "BarChart",
  GraphicalChild: oe,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [
    { axisType: "xAxis", AxisComp: X },
    { axisType: "yAxis", AxisComp: J },
  ],
  formatAxisMap: qe,
});
const nr = [
    { id: "1", name: "Bank of America", balance: 5e3, currency: "USD" },
    { id: "2", name: "MTN Mobile Money", balance: 1200, currency: "GHS" },
    { id: "3", name: "Wise USD", balance: 800, currency: "USD" },
    { id: "4", name: "PayPal", balance: 300, currency: "USD" },
  ],
  ir = [
    { month: "Jan", income: 5e3, expenses: 3e3 },
    { month: "Feb", income: 4500, expenses: 2500 },
    { month: "Mar", income: 6e3, expenses: 3200 },
    { month: "Apr", income: 7e3, expenses: 3500 },
    { month: "May", income: 6500, expenses: 4e3 },
    { month: "Jun", income: 7200, expenses: 3800 },
    { month: "Jul", income: 8e3, expenses: 4200 },
    { month: "Aug", income: 9e3, expenses: 4500 },
    { month: "Sep", income: 8500, expenses: 4700 },
    { month: "Oct", income: 9500, expenses: 5e3 },
    { month: "Nov", income: 1e4, expenses: 5500 },
    { month: "Dec", income: 11e3, expenses: 6e3 },
  ],
  sr = function () {
    const [t] = Pe.useState(nr);
    return d.jsxs("div", {
      className: "w-full ",
      children: [
        d.jsxs("div", {
          className: "w-full flex flex-row justify-between items-start mb-6",
          children: [
            d.jsx("div", {
              className: "text-2xl font-bold",
              children: "Dashboard",
            }),
            d.jsx(tt, { children: "Add Account" }),
          ],
        }),
        d.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8",
          children: ["My Balance", "Monthly Income", "Monthly Expenses"].map(
            (n) =>
              d.jsxs(
                ee,
                {
                  className: "w-full cursor-pointer h-auto",
                  children: [
                    d.jsxs(te, {
                      className:
                        "flex flex-row items-center justify-between space-y-0 pb-2",
                      children: [
                        d.jsx(re, {
                          className: "text-sm font-medium",
                          children: n,
                        }),
                        d.jsx(nt, {
                          className: "w-4 h-4 text-muted-foreground",
                        }),
                      ],
                    }),
                    d.jsx(ne, {
                      children: d.jsx("div", {
                        className: "text-2xl font-bold",
                        children: "$ 100,000",
                      }),
                    }),
                  ],
                },
                n,
              ),
          ),
        }),
        d.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-7 gap-6 mb-8",
          children: [
            d.jsxs(ee, {
              className: "col-span-1 md:col-span-5 h-auto",
              children: [
                d.jsx(te, {
                  children: d.jsx(re, {
                    children: "Monthly Income & Expenses",
                  }),
                }),
                d.jsx(ne, {
                  className: "h-64 md:h-80",
                  children: d.jsx(Xe, {
                    width: "100%",
                    height: "100%",
                    children: d.jsxs(rr, {
                      data: ir,
                      margin: { top: 20, right: 20, left: 30, bottom: 0 },
                      children: [
                        d.jsx(Ee, {
                          strokeDasharray: "3 3",
                          vertical: !1,
                          stroke: "#e0e0e0",
                        }),
                        d.jsx(X, {
                          dataKey: "month",
                          tickLine: !1,
                          tickMargin: 10,
                        }),
                        d.jsx(J, {
                          tickLine: !1,
                          tickMargin: 10,
                          axisLine: !1,
                        }),
                        d.jsx(Je, {}),
                        d.jsx(Qe, {}),
                        d.jsx(oe, {
                          dataKey: "income",
                          fill: "#1A1E4C",
                          radius: 4,
                          name: "Income",
                        }),
                        d.jsx(oe, {
                          dataKey: "expenses",
                          fill: "#2463EB",
                          radius: 4,
                          name: "Expenses",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            d.jsxs(ee, {
              className: "col-span-1 md:col-span-2 h-auto",
              children: [
                d.jsx(te, { children: d.jsx(re, { children: "My Accounts" }) }),
                d.jsx(ne, {
                  children: d.jsx("div", {
                    className: "flex flex-col gap-4 w-full",
                    children: t.length
                      ? t.map((n) =>
                          d.jsxs(
                            "div",
                            {
                              className:
                                "flex justify-between border-b last:border-none w-full pb-4",
                              children: [
                                d.jsxs("div", {
                                  className:
                                    "flex items-center gap-4 cursor-pointer",
                                  children: [
                                    d.jsx("div", {
                                      className:
                                        "h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-bold text-lg",
                                      children: n.name.charAt(0),
                                    }),
                                    d.jsxs("div", {
                                      children: [
                                        d.jsx("p", {
                                          className: "text-sm font-medium",
                                          children: n.name,
                                        }),
                                        d.jsx("p", {
                                          className:
                                            "text-sm text-muted-foreground",
                                          children: n.currency,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                d.jsxs("div", {
                                  className: "font-medium",
                                  children: [
                                    n.balance.toLocaleString(),
                                    " ",
                                    n.currency,
                                  ],
                                }),
                              ],
                            },
                            n.id,
                          ),
                        )
                      : d.jsx("div", {
                          className:
                            "flex flex-col items-center justify-center text-center py-6",
                          children: d.jsx("p", {
                            className: "text-muted-foreground text-sm",
                            children: "No accounts available to display.",
                          }),
                        }),
                  }),
                }),
              ],
            }),
          ],
        }),
        d.jsx(Ze, {
          columns: it,
          title: "Recent Transactions",
          data: [],
          isLoading: !1,
          inputPlaceholder: "Search transactions Id",
          inputKey: "transaction",
          onClickCell: (n) => {
            console.log("apple", n);
          },
        }),
      ],
    });
  };
export { sr as component };
