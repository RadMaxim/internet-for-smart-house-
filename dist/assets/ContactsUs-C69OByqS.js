import {
  j as b,
  H as je,
  P as ve,
  k as sr,
  B as or,
  T as De,
  e as K,
  l as rr,
  R as os,
} from "./index-C3Qoe1NT.js";
import { g as Ii, s as Mi, a as ar, u as hr } from "./index.esm-ypLV58Nb.js";
const ur = "_main_lzbvs_7",
  lr = "_section1_lzbvs_15",
  cr = "_section2_lzbvs_19",
  fr = "_section3_lzbvs_23",
  dr = "_section4_lzbvs_27",
  _r = { main: ur, section1: lr, section2: cr, section3: fr, section4: dr },
  mr = "_section1_container_1pwse_1",
  pr = "_heading_1pwse_9",
  Oi = { section1_container: mr, heading: pr },
  gr = () =>
    b.jsx(b.Fragment, {
      children: b.jsx("section", {
        className: Oi.section1,
        children: b.jsx("div", {
          className: Oi.section1_container,
          children: b.jsxs("div", {
            className: Oi.heading,
            children: [
              b.jsx(je, {
                positionX: "center",
                lvl: 1,
                color: 1,
                size: "2.5rem",
                children: "Blog Afrianska",
              }),
              b.jsx(ve, {
                positionX: "center",
                color: 1,
                children:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              }),
            ],
          }),
        }),
      }),
    }),
  vr = "_mainIMG_okogl_1",
  yr = { mainIMG: vr },
  xr = ({ src: u }) =>
    b.jsx("div", {
      className: yr.mainIMG,
      children: b.jsx("img", { src: u, alt: "" }),
    }),
  wr = "/assets/Group%20(1)-FYN2LhRC.png",
  br = "_section2_i9nn0_7",
  Pr = "_section2_container_i9nn0_13",
  rs = { section2: br, section2_container: Pr },
  Lr = "_form_Section_wu9ct_23",
  zi = { form_Section: Lr },
  as = (u, r, s) => {
    if (u && "reportValidity" in u) {
      const h = Ii(s, r);
      u.setCustomValidity((h && h.message) || ""), u.reportValidity();
    }
  },
  gs = (u, r) => {
    for (const s in r.fields) {
      const h = r.fields[s];
      h && h.ref && "reportValidity" in h.ref
        ? as(h.ref, s, u)
        : h.refs && h.refs.forEach((l) => as(l, s, u));
    }
  },
  Tr = (u, r) => {
    r.shouldUseNativeValidation && gs(u, r);
    const s = {};
    for (const h in u) {
      const l = Ii(r.fields, h),
        d = Object.assign(u[h] || {}, { ref: l && l.ref });
      if (Sr(r.names || Object.keys(u), h)) {
        const _ = Object.assign({}, Ii(s, h));
        Mi(_, "root", d), Mi(s, h, _);
      } else Mi(s, h, d);
    }
    return s;
  },
  Sr = (u, r) => u.some((s) => s.startsWith(r + "."));
function Er(u, r, s) {
  return (
    r === void 0 && (r = {}),
    s === void 0 && (s = {}),
    function (h, l, d) {
      try {
        return Promise.resolve(
          (function (_, v) {
            try {
              var p =
                (r.context,
                Promise.resolve(
                  u[s.mode === "sync" ? "validateSync" : "validate"](
                    h,
                    Object.assign({ abortEarly: !1 }, r, { context: l }),
                  ),
                ).then(function (x) {
                  return (
                    d.shouldUseNativeValidation && gs({}, d),
                    { values: s.raw ? h : x, errors: {} }
                  );
                }));
            } catch (x) {
              return v(x);
            }
            return p && p.then ? p.then(void 0, v) : p;
          })(0, function (_) {
            if (!_.inner) throw _;
            return {
              values: {},
              errors: Tr(
                ((v = _),
                (p = !d.shouldUseNativeValidation && d.criteriaMode === "all"),
                (v.inner || []).reduce(function (x, P) {
                  if (
                    (x[P.path] ||
                      (x[P.path] = { message: P.message, type: P.type }),
                    p)
                  ) {
                    var w = x[P.path].types,
                      M = w && w[P.type];
                    x[P.path] = ar(
                      P.path,
                      p,
                      x,
                      P.type,
                      M ? [].concat(M, P.message) : P.message,
                    );
                  }
                  return x;
                }, {})),
                d,
              ),
            };
            var v, p;
          }),
        );
      } catch (_) {
        return Promise.reject(_);
      }
    }
  );
}
function $t(u) {
  (this._maxSize = u), this.clear();
}
$t.prototype.clear = function () {
  (this._size = 0), (this._values = Object.create(null));
};
$t.prototype.get = function (u) {
  return this._values[u];
};
$t.prototype.set = function (u, r) {
  return (
    this._size >= this._maxSize && this.clear(),
    u in this._values || this._size++,
    (this._values[u] = r)
  );
};
var Cr = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
  vs = /^\d+$/,
  kr = /^\d/,
  Mr = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
  Or = /^\s*(['"]?)(.*?)(\1)\s*$/,
  $i = 512,
  hs = new $t($i),
  us = new $t($i),
  ls = new $t($i),
  jt = {
    Cache: $t,
    split: Bi,
    normalizePath: Ai,
    setter: function (u) {
      var r = Ai(u);
      return (
        us.get(u) ||
        us.set(u, function (h, l) {
          for (var d = 0, _ = r.length, v = h; d < _ - 1; ) {
            var p = r[d];
            if (p === "__proto__" || p === "constructor" || p === "prototype")
              return h;
            v = v[r[d++]];
          }
          v[r[d]] = l;
        })
      );
    },
    getter: function (u, r) {
      var s = Ai(u);
      return (
        ls.get(u) ||
        ls.set(u, function (l) {
          for (var d = 0, _ = s.length; d < _; )
            if (l != null || !r) l = l[s[d++]];
            else return;
          return l;
        })
      );
    },
    join: function (u) {
      return u.reduce(function (r, s) {
        return r + (Hi(s) || vs.test(s) ? "[" + s + "]" : (r ? "." : "") + s);
      }, "");
    },
    forEach: function (u, r, s) {
      zr(Array.isArray(u) ? u : Bi(u), r, s);
    },
  };
function Ai(u) {
  return (
    hs.get(u) ||
    hs.set(
      u,
      Bi(u).map(function (r) {
        return r.replace(Or, "$2");
      }),
    )
  );
}
function Bi(u) {
  return u.match(Cr) || [""];
}
function zr(u, r, s) {
  var h = u.length,
    l,
    d,
    _,
    v;
  for (d = 0; d < h; d++)
    (l = u[d]),
      l &&
        (Ir(l) && (l = '"' + l + '"'),
        (v = Hi(l)),
        (_ = !v && /^\d+$/.test(l)),
        r.call(s, l, v, _, d, u));
}
function Hi(u) {
  return typeof u == "string" && u && ["'", '"'].indexOf(u.charAt(0)) !== -1;
}
function Ar(u) {
  return u.match(kr) && !u.match(vs);
}
function Zr(u) {
  return Mr.test(u);
}
function Ir(u) {
  return !Hi(u) && (Ar(u) || Zr(u));
}
const Br =
    /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
  Ve = (u) => u.match(Br) || [],
  Ge = (u) => u[0].toUpperCase() + u.slice(1),
  Wi = (u, r) => Ve(u).join(r).toLowerCase(),
  ys = (u) =>
    Ve(u).reduce(
      (r, s) =>
        `${r}${r ? s[0].toUpperCase() + s.slice(1).toLowerCase() : s.toLowerCase()}`,
      "",
    ),
  Fr = (u) => Ge(ys(u)),
  Nr = (u) => Wi(u, "_"),
  Dr = (u) => Wi(u, "-"),
  Rr = (u) => Ge(Wi(u, " ")),
  jr = (u) => Ve(u).map(Ge).join(" ");
var Zi = {
    words: Ve,
    upperFirst: Ge,
    camelCase: ys,
    pascalCase: Fr,
    snakeCase: Nr,
    kebabCase: Dr,
    sentenceCase: Rr,
    titleCase: jr,
  },
  Ui = { exports: {} };
Ui.exports = function (u) {
  return xs($r(u), u);
};
Ui.exports.array = xs;
function xs(u, r) {
  var s = u.length,
    h = new Array(s),
    l = {},
    d = s,
    _ = Hr(r),
    v = Wr(u);
  for (
    r.forEach(function (x) {
      if (!v.has(x[0]) || !v.has(x[1]))
        throw new Error(
          "Unknown node. There is an unknown node in the supplied edges.",
        );
    });
    d--;

  )
    l[d] || p(u[d], d, new Set());
  return h;
  function p(x, P, w) {
    if (w.has(x)) {
      var M;
      try {
        M = ", node was:" + JSON.stringify(x);
      } catch {
        M = "";
      }
      throw new Error("Cyclic dependency" + M);
    }
    if (!v.has(x))
      throw new Error(
        "Found unknown node. Make sure to provided all involved nodes. Unknown node: " +
          JSON.stringify(x),
      );
    if (!l[P]) {
      l[P] = !0;
      var N = _.get(x) || new Set();
      if (((N = Array.from(N)), (P = N.length))) {
        w.add(x);
        do {
          var H = N[--P];
          p(H, v.get(H), w);
        } while (P);
        w.delete(x);
      }
      h[--s] = x;
    }
  }
}
function $r(u) {
  for (var r = new Set(), s = 0, h = u.length; s < h; s++) {
    var l = u[s];
    r.add(l[0]), r.add(l[1]);
  }
  return Array.from(r);
}
function Hr(u) {
  for (var r = new Map(), s = 0, h = u.length; s < h; s++) {
    var l = u[s];
    r.has(l[0]) || r.set(l[0], new Set()),
      r.has(l[1]) || r.set(l[1], new Set()),
      r.get(l[0]).add(l[1]);
  }
  return r;
}
function Wr(u) {
  for (var r = new Map(), s = 0, h = u.length; s < h; s++) r.set(u[s], s);
  return r;
}
var Ur = Ui.exports;
const Vr = sr(Ur),
  Gr = Object.prototype.toString,
  qr = Error.prototype.toString,
  Kr = RegExp.prototype.toString,
  Yr = typeof Symbol < "u" ? Symbol.prototype.toString : () => "",
  Xr = /^Symbol\((.*)\)(.*)$/;
function Jr(u) {
  return u != +u ? "NaN" : u === 0 && 1 / u < 0 ? "-0" : "" + u;
}
function cs(u, r = !1) {
  if (u == null || u === !0 || u === !1) return "" + u;
  const s = typeof u;
  if (s === "number") return Jr(u);
  if (s === "string") return r ? `"${u}"` : u;
  if (s === "function") return "[Function " + (u.name || "anonymous") + "]";
  if (s === "symbol") return Yr.call(u).replace(Xr, "Symbol($1)");
  const h = Gr.call(u).slice(8, -1);
  return h === "Date"
    ? isNaN(u.getTime())
      ? "" + u
      : u.toISOString(u)
    : h === "Error" || u instanceof Error
      ? "[" + qr.call(u) + "]"
      : h === "RegExp"
        ? Kr.call(u)
        : null;
}
function zt(u, r) {
  let s = cs(u, r);
  return s !== null
    ? s
    : JSON.stringify(
        u,
        function (h, l) {
          let d = cs(this[h], r);
          return d !== null ? d : l;
        },
        2,
      );
}
function ws(u) {
  return u == null ? [] : [].concat(u);
}
let bs,
  Ps,
  Ls,
  Qr = /\$\{\s*(\w+)\s*\}/g;
bs = Symbol.toStringTag;
class fs {
  constructor(r, s, h, l) {
    (this.name = void 0),
      (this.message = void 0),
      (this.value = void 0),
      (this.path = void 0),
      (this.type = void 0),
      (this.params = void 0),
      (this.errors = void 0),
      (this.inner = void 0),
      (this[bs] = "Error"),
      (this.name = "ValidationError"),
      (this.value = s),
      (this.path = h),
      (this.type = l),
      (this.errors = []),
      (this.inner = []),
      ws(r).forEach((d) => {
        if (ot.isError(d)) {
          this.errors.push(...d.errors);
          const _ = d.inner.length ? d.inner : [d];
          this.inner.push(..._);
        } else this.errors.push(d);
      }),
      (this.message =
        this.errors.length > 1
          ? `${this.errors.length} errors occurred`
          : this.errors[0]);
  }
}
Ps = Symbol.hasInstance;
Ls = Symbol.toStringTag;
class ot extends Error {
  static formatError(r, s) {
    const h = s.label || s.path || "this";
    return (
      h !== s.path && (s = Object.assign({}, s, { path: h })),
      typeof r == "string"
        ? r.replace(Qr, (l, d) => zt(s[d]))
        : typeof r == "function"
          ? r(s)
          : r
    );
  }
  static isError(r) {
    return r && r.name === "ValidationError";
  }
  constructor(r, s, h, l, d) {
    const _ = new fs(r, s, h, l);
    if (d) return _;
    super(),
      (this.value = void 0),
      (this.path = void 0),
      (this.type = void 0),
      (this.params = void 0),
      (this.errors = []),
      (this.inner = []),
      (this[Ls] = "Error"),
      (this.name = _.name),
      (this.message = _.message),
      (this.type = _.type),
      (this.value = _.value),
      (this.path = _.path),
      (this.errors = _.errors),
      (this.inner = _.inner),
      Error.captureStackTrace && Error.captureStackTrace(this, ot);
  }
  static [Ps](r) {
    return fs[Symbol.hasInstance](r) || super[Symbol.hasInstance](r);
  }
}
let vt = {
    default: "${path} is invalid",
    required: "${path} is a required field",
    defined: "${path} must be defined",
    notNull: "${path} cannot be null",
    oneOf: "${path} must be one of the following values: ${values}",
    notOneOf: "${path} must not be one of the following values: ${values}",
    notType: ({ path: u, type: r, value: s, originalValue: h }) => {
      const l =
        h != null && h !== s ? ` (cast from the value \`${zt(h, !0)}\`).` : ".";
      return r !== "mixed"
        ? `${u} must be a \`${r}\` type, but the final value was: \`${zt(s, !0)}\`` +
            l
        : `${u} must match the configured type. The validated value was: \`${zt(s, !0)}\`` +
            l;
    },
  },
  st = {
    length: "${path} must be exactly ${length} characters",
    min: "${path} must be at least ${min} characters",
    max: "${path} must be at most ${max} characters",
    matches: '${path} must match the following: "${regex}"',
    email: "${path} must be a valid email",
    url: "${path} must be a valid URL",
    uuid: "${path} must be a valid UUID",
    datetime: "${path} must be a valid ISO date-time",
    datetime_precision:
      "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
    datetime_offset:
      '${path} must be a valid ISO date-time with UTC "Z" timezone',
    trim: "${path} must be a trimmed string",
    lowercase: "${path} must be a lowercase string",
    uppercase: "${path} must be a upper case string",
  },
  ta = {
    min: "${path} must be greater than or equal to ${min}",
    max: "${path} must be less than or equal to ${max}",
    lessThan: "${path} must be less than ${less}",
    moreThan: "${path} must be greater than ${more}",
    positive: "${path} must be a positive number",
    negative: "${path} must be a negative number",
    integer: "${path} must be an integer",
  },
  Fi = {
    min: "${path} field must be later than ${min}",
    max: "${path} field must be at earlier than ${max}",
  },
  ea = { isValue: "${path} field must be ${value}" },
  Ni = { noUnknown: "${path} field has unspecified keys: ${unknown}" },
  ia = {
    min: "${path} field must have at least ${min} items",
    max: "${path} field must have less than or equal to ${max} items",
    length: "${path} must have ${length} items",
  },
  na = {
    notType: (u) => {
      const { path: r, value: s, spec: h } = u,
        l = h.types.length;
      if (Array.isArray(s)) {
        if (s.length < l)
          return `${r} tuple value has too few items, expected a length of ${l} but got ${s.length} for value: \`${zt(s, !0)}\``;
        if (s.length > l)
          return `${r} tuple value has too many items, expected a length of ${l} but got ${s.length} for value: \`${zt(s, !0)}\``;
      }
      return ot.formatError(vt.notType, u);
    },
  };
Object.assign(Object.create(null), {
  mixed: vt,
  string: st,
  number: ta,
  date: Fi,
  object: Ni,
  array: ia,
  boolean: ea,
  tuple: na,
});
const Vi = (u) => u && u.__isYupSchema__;
class We {
  static fromOptions(r, s) {
    if (!s.then && !s.otherwise)
      throw new TypeError(
        "either `then:` or `otherwise:` is required for `when()` conditions",
      );
    let { is: h, then: l, otherwise: d } = s,
      _ = typeof h == "function" ? h : (...v) => v.every((p) => p === h);
    return new We(r, (v, p) => {
      var x;
      let P = _(...v) ? l : d;
      return (x = P == null ? void 0 : P(p)) != null ? x : p;
    });
  }
  constructor(r, s) {
    (this.fn = void 0), (this.refs = r), (this.refs = r), (this.fn = s);
  }
  resolve(r, s) {
    let h = this.refs.map((d) =>
        d.getValue(
          s == null ? void 0 : s.value,
          s == null ? void 0 : s.parent,
          s == null ? void 0 : s.context,
        ),
      ),
      l = this.fn(h, r, s);
    if (l === void 0 || l === r) return r;
    if (!Vi(l)) throw new TypeError("conditions must return a schema object");
    return l.resolve(s);
  }
}
const Re = { context: "$", value: "." };
class Ht {
  constructor(r, s = {}) {
    if (
      ((this.key = void 0),
      (this.isContext = void 0),
      (this.isValue = void 0),
      (this.isSibling = void 0),
      (this.path = void 0),
      (this.getter = void 0),
      (this.map = void 0),
      typeof r != "string")
    )
      throw new TypeError("ref must be a string, got: " + r);
    if (((this.key = r.trim()), r === ""))
      throw new TypeError("ref must be a non-empty string");
    (this.isContext = this.key[0] === Re.context),
      (this.isValue = this.key[0] === Re.value),
      (this.isSibling = !this.isContext && !this.isValue);
    let h = this.isContext ? Re.context : this.isValue ? Re.value : "";
    (this.path = this.key.slice(h.length)),
      (this.getter = this.path && jt.getter(this.path, !0)),
      (this.map = s.map);
  }
  getValue(r, s, h) {
    let l = this.isContext ? h : this.isValue ? r : s;
    return (
      this.getter && (l = this.getter(l || {})),
      this.map && (l = this.map(l)),
      l
    );
  }
  cast(r, s) {
    return this.getValue(
      r,
      s == null ? void 0 : s.parent,
      s == null ? void 0 : s.context,
    );
  }
  resolve() {
    return this;
  }
  describe() {
    return { type: "ref", key: this.key };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(r) {
    return r && r.__isYupRef;
  }
}
Ht.prototype.__isYupRef = !0;
const Rt = (u) => u == null;
function Qt(u) {
  function r(
    { value: s, path: h = "", options: l, originalValue: d, schema: _ },
    v,
    p,
  ) {
    const { name: x, test: P, params: w, message: M, skipAbsent: N } = u;
    let {
      parent: H,
      context: z,
      abortEarly: rt = _.spec.abortEarly,
      disableStackTrace: xt = _.spec.disableStackTrace,
    } = l;
    function J(Z) {
      return Ht.isRef(Z) ? Z.getValue(s, H, z) : Z;
    }
    function tt(Z = {}) {
      const U = Object.assign(
        {
          value: s,
          originalValue: d,
          label: _.spec.label,
          path: Z.path || h,
          spec: _.spec,
          disableStackTrace: Z.disableStackTrace || xt,
        },
        w,
        Z.params,
      );
      for (const ht of Object.keys(U)) U[ht] = J(U[ht]);
      const ye = new ot(
        ot.formatError(Z.message || M, U),
        s,
        U.path,
        Z.type || x,
        U.disableStackTrace,
      );
      return (ye.params = U), ye;
    }
    const At = rt ? v : p;
    let Et = {
      path: h,
      parent: H,
      type: x,
      from: l.from,
      createError: tt,
      resolve: J,
      options: l,
      originalValue: d,
      schema: _,
    };
    const Zt = (Z) => {
        ot.isError(Z) ? At(Z) : Z ? p(null) : At(tt());
      },
      ee = (Z) => {
        ot.isError(Z) ? At(Z) : v(Z);
      };
    if (N && Rt(s)) return Zt(!0);
    let Ct;
    try {
      var ie;
      if (
        ((Ct = P.call(Et, s, Et)),
        typeof ((ie = Ct) == null ? void 0 : ie.then) == "function")
      ) {
        if (l.sync)
          throw new Error(
            `Validation test of type: "${Et.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`,
          );
        return Promise.resolve(Ct).then(Zt, ee);
      }
    } catch (Z) {
      ee(Z);
      return;
    }
    Zt(Ct);
  }
  return (r.OPTIONS = u), r;
}
function sa(u, r, s, h = s) {
  let l, d, _;
  return r
    ? (jt.forEach(r, (v, p, x) => {
        let P = p ? v.slice(1, v.length - 1) : v;
        u = u.resolve({ context: h, parent: l, value: s });
        let w = u.type === "tuple",
          M = x ? parseInt(P, 10) : 0;
        if (u.innerType || w) {
          if (w && !x)
            throw new Error(
              `Yup.reach cannot implicitly index into a tuple type. the path part "${_}" must contain an index to the tuple element, e.g. "${_}[0]"`,
            );
          if (s && M >= s.length)
            throw new Error(
              `Yup.reach cannot resolve an array item at index: ${v}, in the path: ${r}. because there is no value at that index. `,
            );
          (l = s), (s = s && s[M]), (u = w ? u.spec.types[M] : u.innerType);
        }
        if (!x) {
          if (!u.fields || !u.fields[P])
            throw new Error(
              `The schema does not contain the path: ${r}. (failed at: ${_} which is a type: "${u.type}")`,
            );
          (l = s), (s = s && s[P]), (u = u.fields[P]);
        }
        (d = P), (_ = p ? "[" + v + "]" : "." + v);
      }),
      { schema: u, parent: l, parentPath: d })
    : { parent: l, parentPath: r, schema: u };
}
class Ue extends Set {
  describe() {
    const r = [];
    for (const s of this.values()) r.push(Ht.isRef(s) ? s.describe() : s);
    return r;
  }
  resolveAll(r) {
    let s = [];
    for (const h of this.values()) s.push(r(h));
    return s;
  }
  clone() {
    return new Ue(this.values());
  }
  merge(r, s) {
    const h = this.clone();
    return r.forEach((l) => h.add(l)), s.forEach((l) => h.delete(l)), h;
  }
}
function te(u, r = new Map()) {
  if (Vi(u) || !u || typeof u != "object") return u;
  if (r.has(u)) return r.get(u);
  let s;
  if (u instanceof Date) (s = new Date(u.getTime())), r.set(u, s);
  else if (u instanceof RegExp) (s = new RegExp(u)), r.set(u, s);
  else if (Array.isArray(u)) {
    (s = new Array(u.length)), r.set(u, s);
    for (let h = 0; h < u.length; h++) s[h] = te(u[h], r);
  } else if (u instanceof Map) {
    (s = new Map()), r.set(u, s);
    for (const [h, l] of u.entries()) s.set(h, te(l, r));
  } else if (u instanceof Set) {
    (s = new Set()), r.set(u, s);
    for (const h of u) s.add(te(h, r));
  } else if (u instanceof Object) {
    (s = {}), r.set(u, s);
    for (const [h, l] of Object.entries(u)) s[h] = te(l, r);
  } else throw Error(`Unable to clone ${u}`);
  return s;
}
class yt {
  constructor(r) {
    (this.type = void 0),
      (this.deps = []),
      (this.tests = void 0),
      (this.transforms = void 0),
      (this.conditions = []),
      (this._mutate = void 0),
      (this.internalTests = {}),
      (this._whitelist = new Ue()),
      (this._blacklist = new Ue()),
      (this.exclusiveTests = Object.create(null)),
      (this._typeCheck = void 0),
      (this.spec = void 0),
      (this.tests = []),
      (this.transforms = []),
      this.withMutation(() => {
        this.typeError(vt.notType);
      }),
      (this.type = r.type),
      (this._typeCheck = r.check),
      (this.spec = Object.assign(
        {
          strip: !1,
          strict: !1,
          abortEarly: !0,
          recursive: !0,
          disableStackTrace: !1,
          nullable: !1,
          optional: !0,
          coerce: !0,
        },
        r == null ? void 0 : r.spec,
      )),
      this.withMutation((s) => {
        s.nonNullable();
      });
  }
  get _type() {
    return this.type;
  }
  clone(r) {
    if (this._mutate) return r && Object.assign(this.spec, r), this;
    const s = Object.create(Object.getPrototypeOf(this));
    return (
      (s.type = this.type),
      (s._typeCheck = this._typeCheck),
      (s._whitelist = this._whitelist.clone()),
      (s._blacklist = this._blacklist.clone()),
      (s.internalTests = Object.assign({}, this.internalTests)),
      (s.exclusiveTests = Object.assign({}, this.exclusiveTests)),
      (s.deps = [...this.deps]),
      (s.conditions = [...this.conditions]),
      (s.tests = [...this.tests]),
      (s.transforms = [...this.transforms]),
      (s.spec = te(Object.assign({}, this.spec, r))),
      s
    );
  }
  label(r) {
    let s = this.clone();
    return (s.spec.label = r), s;
  }
  meta(...r) {
    if (r.length === 0) return this.spec.meta;
    let s = this.clone();
    return (s.spec.meta = Object.assign(s.spec.meta || {}, r[0])), s;
  }
  withMutation(r) {
    let s = this._mutate;
    this._mutate = !0;
    let h = r(this);
    return (this._mutate = s), h;
  }
  concat(r) {
    if (!r || r === this) return this;
    if (r.type !== this.type && this.type !== "mixed")
      throw new TypeError(
        `You cannot \`concat()\` schema's of different types: ${this.type} and ${r.type}`,
      );
    let s = this,
      h = r.clone();
    const l = Object.assign({}, s.spec, h.spec);
    return (
      (h.spec = l),
      (h.internalTests = Object.assign({}, s.internalTests, h.internalTests)),
      (h._whitelist = s._whitelist.merge(r._whitelist, r._blacklist)),
      (h._blacklist = s._blacklist.merge(r._blacklist, r._whitelist)),
      (h.tests = s.tests),
      (h.exclusiveTests = s.exclusiveTests),
      h.withMutation((d) => {
        r.tests.forEach((_) => {
          d.test(_.OPTIONS);
        });
      }),
      (h.transforms = [...s.transforms, ...h.transforms]),
      h
    );
  }
  isType(r) {
    return r == null
      ? !!(
          (this.spec.nullable && r === null) ||
          (this.spec.optional && r === void 0)
        )
      : this._typeCheck(r);
  }
  resolve(r) {
    let s = this;
    if (s.conditions.length) {
      let h = s.conditions;
      (s = s.clone()),
        (s.conditions = []),
        (s = h.reduce((l, d) => d.resolve(l, r), s)),
        (s = s.resolve(r));
    }
    return s;
  }
  resolveOptions(r) {
    var s, h, l, d;
    return Object.assign({}, r, {
      from: r.from || [],
      strict: (s = r.strict) != null ? s : this.spec.strict,
      abortEarly: (h = r.abortEarly) != null ? h : this.spec.abortEarly,
      recursive: (l = r.recursive) != null ? l : this.spec.recursive,
      disableStackTrace:
        (d = r.disableStackTrace) != null ? d : this.spec.disableStackTrace,
    });
  }
  cast(r, s = {}) {
    let h = this.resolve(Object.assign({ value: r }, s)),
      l = s.assert === "ignore-optionality",
      d = h._cast(r, s);
    if (s.assert !== !1 && !h.isType(d)) {
      if (l && Rt(d)) return d;
      let _ = zt(r),
        v = zt(d);
      throw new TypeError(
        `The value of ${s.path || "field"} could not be cast to a value that satisfies the schema type: "${h.type}". 

attempted value: ${_} 
` + (v !== _ ? `result of cast: ${v}` : ""),
      );
    }
    return d;
  }
  _cast(r, s) {
    let h =
      r === void 0
        ? r
        : this.transforms.reduce((l, d) => d.call(this, l, r, this), r);
    return h === void 0 && (h = this.getDefault(s)), h;
  }
  _validate(r, s = {}, h, l) {
    let { path: d, originalValue: _ = r, strict: v = this.spec.strict } = s,
      p = r;
    v || (p = this._cast(p, Object.assign({ assert: !1 }, s)));
    let x = [];
    for (let P of Object.values(this.internalTests)) P && x.push(P);
    this.runTests(
      { path: d, value: p, originalValue: _, options: s, tests: x },
      h,
      (P) => {
        if (P.length) return l(P, p);
        this.runTests(
          {
            path: d,
            value: p,
            originalValue: _,
            options: s,
            tests: this.tests,
          },
          h,
          l,
        );
      },
    );
  }
  runTests(r, s, h) {
    let l = !1,
      { tests: d, value: _, originalValue: v, path: p, options: x } = r,
      P = (z) => {
        l || ((l = !0), s(z, _));
      },
      w = (z) => {
        l || ((l = !0), h(z, _));
      },
      M = d.length,
      N = [];
    if (!M) return w([]);
    let H = { value: _, originalValue: v, path: p, options: x, schema: this };
    for (let z = 0; z < d.length; z++) {
      const rt = d[z];
      rt(H, P, function (J) {
        J && (Array.isArray(J) ? N.push(...J) : N.push(J)), --M <= 0 && w(N);
      });
    }
  }
  asNestedTest({
    key: r,
    index: s,
    parent: h,
    parentPath: l,
    originalParent: d,
    options: _,
  }) {
    const v = r ?? s;
    if (v == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const p = typeof v == "number";
    let x = h[v];
    const P = Object.assign({}, _, {
      strict: !0,
      parent: h,
      value: x,
      originalValue: d[v],
      key: void 0,
      [p ? "index" : "key"]: v,
      path:
        p || v.includes(".")
          ? `${l || ""}[${p ? v : `"${v}"`}]`
          : (l ? `${l}.` : "") + r,
    });
    return (w, M, N) => this.resolve(P)._validate(x, P, M, N);
  }
  validate(r, s) {
    var h;
    let l = this.resolve(Object.assign({}, s, { value: r })),
      d =
        (h = s == null ? void 0 : s.disableStackTrace) != null
          ? h
          : l.spec.disableStackTrace;
    return new Promise((_, v) =>
      l._validate(
        r,
        s,
        (p, x) => {
          ot.isError(p) && (p.value = x), v(p);
        },
        (p, x) => {
          p.length ? v(new ot(p, x, void 0, void 0, d)) : _(x);
        },
      ),
    );
  }
  validateSync(r, s) {
    var h;
    let l = this.resolve(Object.assign({}, s, { value: r })),
      d,
      _ =
        (h = s == null ? void 0 : s.disableStackTrace) != null
          ? h
          : l.spec.disableStackTrace;
    return (
      l._validate(
        r,
        Object.assign({}, s, { sync: !0 }),
        (v, p) => {
          throw (ot.isError(v) && (v.value = p), v);
        },
        (v, p) => {
          if (v.length) throw new ot(v, r, void 0, void 0, _);
          d = p;
        },
      ),
      d
    );
  }
  isValid(r, s) {
    return this.validate(r, s).then(
      () => !0,
      (h) => {
        if (ot.isError(h)) return !1;
        throw h;
      },
    );
  }
  isValidSync(r, s) {
    try {
      return this.validateSync(r, s), !0;
    } catch (h) {
      if (ot.isError(h)) return !1;
      throw h;
    }
  }
  _getDefault(r) {
    let s = this.spec.default;
    return s == null ? s : typeof s == "function" ? s.call(this, r) : te(s);
  }
  getDefault(r) {
    return this.resolve(r || {})._getDefault(r);
  }
  default(r) {
    return arguments.length === 0
      ? this._getDefault()
      : this.clone({ default: r });
  }
  strict(r = !0) {
    return this.clone({ strict: r });
  }
  nullability(r, s) {
    const h = this.clone({ nullable: r });
    return (
      (h.internalTests.nullable = Qt({
        message: s,
        name: "nullable",
        test(l) {
          return l === null ? this.schema.spec.nullable : !0;
        },
      })),
      h
    );
  }
  optionality(r, s) {
    const h = this.clone({ optional: r });
    return (
      (h.internalTests.optionality = Qt({
        message: s,
        name: "optionality",
        test(l) {
          return l === void 0 ? this.schema.spec.optional : !0;
        },
      })),
      h
    );
  }
  optional() {
    return this.optionality(!0);
  }
  defined(r = vt.defined) {
    return this.optionality(!1, r);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(r = vt.notNull) {
    return this.nullability(!1, r);
  }
  required(r = vt.required) {
    return this.clone().withMutation((s) => s.nonNullable(r).defined(r));
  }
  notRequired() {
    return this.clone().withMutation((r) => r.nullable().optional());
  }
  transform(r) {
    let s = this.clone();
    return s.transforms.push(r), s;
  }
  test(...r) {
    let s;
    if (
      (r.length === 1
        ? typeof r[0] == "function"
          ? (s = { test: r[0] })
          : (s = r[0])
        : r.length === 2
          ? (s = { name: r[0], test: r[1] })
          : (s = { name: r[0], message: r[1], test: r[2] }),
      s.message === void 0 && (s.message = vt.default),
      typeof s.test != "function")
    )
      throw new TypeError("`test` is a required parameters");
    let h = this.clone(),
      l = Qt(s),
      d = s.exclusive || (s.name && h.exclusiveTests[s.name] === !0);
    if (s.exclusive && !s.name)
      throw new TypeError(
        "Exclusive tests must provide a unique `name` identifying the test",
      );
    return (
      s.name && (h.exclusiveTests[s.name] = !!s.exclusive),
      (h.tests = h.tests.filter(
        (_) =>
          !(
            _.OPTIONS.name === s.name &&
            (d || _.OPTIONS.test === l.OPTIONS.test)
          ),
      )),
      h.tests.push(l),
      h
    );
  }
  when(r, s) {
    !Array.isArray(r) && typeof r != "string" && ((s = r), (r = "."));
    let h = this.clone(),
      l = ws(r).map((d) => new Ht(d));
    return (
      l.forEach((d) => {
        d.isSibling && h.deps.push(d.key);
      }),
      h.conditions.push(
        typeof s == "function" ? new We(l, s) : We.fromOptions(l, s),
      ),
      h
    );
  }
  typeError(r) {
    let s = this.clone();
    return (
      (s.internalTests.typeError = Qt({
        message: r,
        name: "typeError",
        skipAbsent: !0,
        test(h) {
          return this.schema._typeCheck(h)
            ? !0
            : this.createError({ params: { type: this.schema.type } });
        },
      })),
      s
    );
  }
  oneOf(r, s = vt.oneOf) {
    let h = this.clone();
    return (
      r.forEach((l) => {
        h._whitelist.add(l), h._blacklist.delete(l);
      }),
      (h.internalTests.whiteList = Qt({
        message: s,
        name: "oneOf",
        skipAbsent: !0,
        test(l) {
          let d = this.schema._whitelist,
            _ = d.resolveAll(this.resolve);
          return _.includes(l)
            ? !0
            : this.createError({
                params: { values: Array.from(d).join(", "), resolved: _ },
              });
        },
      })),
      h
    );
  }
  notOneOf(r, s = vt.notOneOf) {
    let h = this.clone();
    return (
      r.forEach((l) => {
        h._blacklist.add(l), h._whitelist.delete(l);
      }),
      (h.internalTests.blacklist = Qt({
        message: s,
        name: "notOneOf",
        test(l) {
          let d = this.schema._blacklist,
            _ = d.resolveAll(this.resolve);
          return _.includes(l)
            ? this.createError({
                params: { values: Array.from(d).join(", "), resolved: _ },
              })
            : !0;
        },
      })),
      h
    );
  }
  strip(r = !0) {
    let s = this.clone();
    return (s.spec.strip = r), s;
  }
  describe(r) {
    const s = (r ? this.resolve(r) : this).clone(),
      { label: h, meta: l, optional: d, nullable: _ } = s.spec;
    return {
      meta: l,
      label: h,
      optional: d,
      nullable: _,
      default: s.getDefault(r),
      type: s.type,
      oneOf: s._whitelist.describe(),
      notOneOf: s._blacklist.describe(),
      tests: s.tests
        .map((p) => ({ name: p.OPTIONS.name, params: p.OPTIONS.params }))
        .filter((p, x, P) => P.findIndex((w) => w.name === p.name) === x),
    };
  }
}
yt.prototype.__isYupSchema__ = !0;
for (const u of ["validate", "validateSync"])
  yt.prototype[`${u}At`] = function (r, s, h = {}) {
    const { parent: l, parentPath: d, schema: _ } = sa(this, r, s, h.context);
    return _[u](l && l[d], Object.assign({}, h, { parent: l, path: r }));
  };
for (const u of ["equals", "is"]) yt.prototype[u] = yt.prototype.oneOf;
for (const u of ["not", "nope"]) yt.prototype[u] = yt.prototype.notOneOf;
const oa =
  /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function ra(u) {
  const r = Di(u);
  if (!r) return Date.parse ? Date.parse(u) : Number.NaN;
  if (r.z === void 0 && r.plusMinus === void 0)
    return new Date(
      r.year,
      r.month,
      r.day,
      r.hour,
      r.minute,
      r.second,
      r.millisecond,
    ).valueOf();
  let s = 0;
  return (
    r.z !== "Z" &&
      r.plusMinus !== void 0 &&
      ((s = r.hourOffset * 60 + r.minuteOffset),
      r.plusMinus === "+" && (s = 0 - s)),
    Date.UTC(
      r.year,
      r.month,
      r.day,
      r.hour,
      r.minute + s,
      r.second,
      r.millisecond,
    )
  );
}
function Di(u) {
  var r, s;
  const h = oa.exec(u);
  return h
    ? {
        year: St(h[1]),
        month: St(h[2], 1) - 1,
        day: St(h[3], 1),
        hour: St(h[4]),
        minute: St(h[5]),
        second: St(h[6]),
        millisecond: h[7] ? St(h[7].substring(0, 3)) : 0,
        precision:
          (r = (s = h[7]) == null ? void 0 : s.length) != null ? r : void 0,
        z: h[8] || void 0,
        plusMinus: h[9] || void 0,
        hourOffset: St(h[10]),
        minuteOffset: St(h[11]),
      }
    : null;
}
function St(u, r = 0) {
  return Number(u) || r;
}
let aa =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  ha =
    /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
  ua =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
  la = "^\\d{4}-\\d{2}-\\d{2}",
  ca = "\\d{2}:\\d{2}:\\d{2}",
  fa = "(([+-]\\d{2}(:?\\d{2})?)|Z)",
  da = new RegExp(`${la}T${ca}(\\.\\d+)?${fa}$`),
  _a = (u) => Rt(u) || u === u.trim(),
  ma = {}.toString();
function $e() {
  return new Ts();
}
class Ts extends yt {
  constructor() {
    super({
      type: "string",
      check(r) {
        return r instanceof String && (r = r.valueOf()), typeof r == "string";
      },
    }),
      this.withMutation(() => {
        this.transform((r, s, h) => {
          if (!h.spec.coerce || h.isType(r) || Array.isArray(r)) return r;
          const l = r != null && r.toString ? r.toString() : r;
          return l === ma ? r : l;
        });
      });
  }
  required(r) {
    return super
      .required(r)
      .withMutation((s) =>
        s.test({
          message: r || vt.required,
          name: "required",
          skipAbsent: !0,
          test: (h) => !!h.length,
        }),
      );
  }
  notRequired() {
    return super
      .notRequired()
      .withMutation(
        (r) => (
          (r.tests = r.tests.filter((s) => s.OPTIONS.name !== "required")), r
        ),
      );
  }
  length(r, s = st.length) {
    return this.test({
      message: s,
      name: "length",
      exclusive: !0,
      params: { length: r },
      skipAbsent: !0,
      test(h) {
        return h.length === this.resolve(r);
      },
    });
  }
  min(r, s = st.min) {
    return this.test({
      message: s,
      name: "min",
      exclusive: !0,
      params: { min: r },
      skipAbsent: !0,
      test(h) {
        return h.length >= this.resolve(r);
      },
    });
  }
  max(r, s = st.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: s,
      params: { max: r },
      skipAbsent: !0,
      test(h) {
        return h.length <= this.resolve(r);
      },
    });
  }
  matches(r, s) {
    let h = !1,
      l,
      d;
    return (
      s &&
        (typeof s == "object"
          ? ({ excludeEmptyString: h = !1, message: l, name: d } = s)
          : (l = s)),
      this.test({
        name: d || "matches",
        message: l || st.matches,
        params: { regex: r },
        skipAbsent: !0,
        test: (_) => (_ === "" && h) || _.search(r) !== -1,
      })
    );
  }
  email(r = st.email) {
    return this.matches(aa, {
      name: "email",
      message: r,
      excludeEmptyString: !0,
    });
  }
  url(r = st.url) {
    return this.matches(ha, {
      name: "url",
      message: r,
      excludeEmptyString: !0,
    });
  }
  uuid(r = st.uuid) {
    return this.matches(ua, {
      name: "uuid",
      message: r,
      excludeEmptyString: !1,
    });
  }
  datetime(r) {
    let s = "",
      h,
      l;
    return (
      r &&
        (typeof r == "object"
          ? ({
              message: s = "",
              allowOffset: h = !1,
              precision: l = void 0,
            } = r)
          : (s = r)),
      this.matches(da, {
        name: "datetime",
        message: s || st.datetime,
        excludeEmptyString: !0,
      })
        .test({
          name: "datetime_offset",
          message: s || st.datetime_offset,
          params: { allowOffset: h },
          skipAbsent: !0,
          test: (d) => {
            if (!d || h) return !0;
            const _ = Di(d);
            return _ ? !!_.z : !1;
          },
        })
        .test({
          name: "datetime_precision",
          message: s || st.datetime_precision,
          params: { precision: l },
          skipAbsent: !0,
          test: (d) => {
            if (!d || l == null) return !0;
            const _ = Di(d);
            return _ ? _.precision === l : !1;
          },
        })
    );
  }
  ensure() {
    return this.default("").transform((r) => (r === null ? "" : r));
  }
  trim(r = st.trim) {
    return this.transform((s) => (s != null ? s.trim() : s)).test({
      message: r,
      name: "trim",
      test: _a,
    });
  }
  lowercase(r = st.lowercase) {
    return this.transform((s) => (Rt(s) ? s : s.toLowerCase())).test({
      message: r,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (s) => Rt(s) || s === s.toLowerCase(),
    });
  }
  uppercase(r = st.uppercase) {
    return this.transform((s) => (Rt(s) ? s : s.toUpperCase())).test({
      message: r,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (s) => Rt(s) || s === s.toUpperCase(),
    });
  }
}
$e.prototype = Ts.prototype;
let pa = new Date(""),
  ga = (u) => Object.prototype.toString.call(u) === "[object Date]";
class qe extends yt {
  constructor() {
    super({
      type: "date",
      check(r) {
        return ga(r) && !isNaN(r.getTime());
      },
    }),
      this.withMutation(() => {
        this.transform((r, s, h) =>
          !h.spec.coerce || h.isType(r) || r === null
            ? r
            : ((r = ra(r)), isNaN(r) ? qe.INVALID_DATE : new Date(r)),
        );
      });
  }
  prepareParam(r, s) {
    let h;
    if (Ht.isRef(r)) h = r;
    else {
      let l = this.cast(r);
      if (!this._typeCheck(l))
        throw new TypeError(
          `\`${s}\` must be a Date or a value that can be \`cast()\` to a Date`,
        );
      h = l;
    }
    return h;
  }
  min(r, s = Fi.min) {
    let h = this.prepareParam(r, "min");
    return this.test({
      message: s,
      name: "min",
      exclusive: !0,
      params: { min: r },
      skipAbsent: !0,
      test(l) {
        return l >= this.resolve(h);
      },
    });
  }
  max(r, s = Fi.max) {
    let h = this.prepareParam(r, "max");
    return this.test({
      message: s,
      name: "max",
      exclusive: !0,
      params: { max: r },
      skipAbsent: !0,
      test(l) {
        return l <= this.resolve(h);
      },
    });
  }
}
qe.INVALID_DATE = pa;
qe.prototype;
function va(u, r = []) {
  let s = [],
    h = new Set(),
    l = new Set(r.map(([_, v]) => `${_}-${v}`));
  function d(_, v) {
    let p = jt.split(_)[0];
    h.add(p), l.has(`${v}-${p}`) || s.push([v, p]);
  }
  for (const _ of Object.keys(u)) {
    let v = u[_];
    h.add(_),
      Ht.isRef(v) && v.isSibling
        ? d(v.path, _)
        : Vi(v) && "deps" in v && v.deps.forEach((p) => d(p, _));
  }
  return Vr.array(Array.from(h), s).reverse();
}
function ds(u, r) {
  let s = 1 / 0;
  return (
    u.some((h, l) => {
      var d;
      if ((d = r.path) != null && d.includes(h)) return (s = l), !0;
    }),
    s
  );
}
function Ss(u) {
  return (r, s) => ds(u, r) - ds(u, s);
}
const ya = (u, r, s) => {
  if (typeof u != "string") return u;
  let h = u;
  try {
    h = JSON.parse(u);
  } catch {}
  return s.isType(h) ? h : u;
};
function He(u) {
  if ("fields" in u) {
    const r = {};
    for (const [s, h] of Object.entries(u.fields)) r[s] = He(h);
    return u.setFields(r);
  }
  if (u.type === "array") {
    const r = u.optional();
    return r.innerType && (r.innerType = He(r.innerType)), r;
  }
  return u.type === "tuple"
    ? u.optional().clone({ types: u.spec.types.map(He) })
    : "optional" in u
      ? u.optional()
      : u;
}
const xa = (u, r) => {
  const s = [...jt.normalizePath(r)];
  if (s.length === 1) return s[0] in u;
  let h = s.pop(),
    l = jt.getter(jt.join(s), !0)(u);
  return !!(l && h in l);
};
let _s = (u) => Object.prototype.toString.call(u) === "[object Object]";
function wa(u, r) {
  let s = Object.keys(u.fields);
  return Object.keys(r).filter((h) => s.indexOf(h) === -1);
}
const ba = Ss([]);
function Es(u) {
  return new Cs(u);
}
class Cs extends yt {
  constructor(r) {
    super({
      type: "object",
      check(s) {
        return _s(s) || typeof s == "function";
      },
    }),
      (this.fields = Object.create(null)),
      (this._sortErrors = ba),
      (this._nodes = []),
      (this._excludedEdges = []),
      this.withMutation(() => {
        r && this.shape(r);
      });
  }
  _cast(r, s = {}) {
    var h;
    let l = super._cast(r, s);
    if (l === void 0) return this.getDefault(s);
    if (!this._typeCheck(l)) return l;
    let d = this.fields,
      _ = (h = s.stripUnknown) != null ? h : this.spec.noUnknown,
      v = [].concat(
        this._nodes,
        Object.keys(l).filter((w) => !this._nodes.includes(w)),
      ),
      p = {},
      x = Object.assign({}, s, {
        parent: p,
        __validating: s.__validating || !1,
      }),
      P = !1;
    for (const w of v) {
      let M = d[w],
        N = w in l;
      if (M) {
        let H,
          z = l[w];
        (x.path = (s.path ? `${s.path}.` : "") + w),
          (M = M.resolve({ value: z, context: s.context, parent: p }));
        let rt = M instanceof yt ? M.spec : void 0,
          xt = rt == null ? void 0 : rt.strict;
        if (rt != null && rt.strip) {
          P = P || w in l;
          continue;
        }
        (H = !s.__validating || !xt ? M.cast(l[w], x) : l[w]),
          H !== void 0 && (p[w] = H);
      } else N && !_ && (p[w] = l[w]);
      (N !== w in p || p[w] !== l[w]) && (P = !0);
    }
    return P ? p : l;
  }
  _validate(r, s = {}, h, l) {
    let {
      from: d = [],
      originalValue: _ = r,
      recursive: v = this.spec.recursive,
    } = s;
    (s.from = [{ schema: this, value: _ }, ...d]),
      (s.__validating = !0),
      (s.originalValue = _),
      super._validate(r, s, h, (p, x) => {
        if (!v || !_s(x)) {
          l(p, x);
          return;
        }
        _ = _ || x;
        let P = [];
        for (let w of this._nodes) {
          let M = this.fields[w];
          !M ||
            Ht.isRef(M) ||
            P.push(
              M.asNestedTest({
                options: s,
                key: w,
                parent: x,
                parentPath: s.path,
                originalParent: _,
              }),
            );
        }
        this.runTests(
          { tests: P, value: x, originalValue: _, options: s },
          h,
          (w) => {
            l(w.sort(this._sortErrors).concat(p), x);
          },
        );
      });
  }
  clone(r) {
    const s = super.clone(r);
    return (
      (s.fields = Object.assign({}, this.fields)),
      (s._nodes = this._nodes),
      (s._excludedEdges = this._excludedEdges),
      (s._sortErrors = this._sortErrors),
      s
    );
  }
  concat(r) {
    let s = super.concat(r),
      h = s.fields;
    for (let [l, d] of Object.entries(this.fields)) {
      const _ = h[l];
      h[l] = _ === void 0 ? d : _;
    }
    return s.withMutation((l) =>
      l.setFields(h, [...this._excludedEdges, ...r._excludedEdges]),
    );
  }
  _getDefault(r) {
    if ("default" in this.spec) return super._getDefault(r);
    if (!this._nodes.length) return;
    let s = {};
    return (
      this._nodes.forEach((h) => {
        var l;
        const d = this.fields[h];
        let _ = r;
        (l = _) != null &&
          l.value &&
          (_ = Object.assign({}, _, { parent: _.value, value: _.value[h] })),
          (s[h] = d && "getDefault" in d ? d.getDefault(_) : void 0);
      }),
      s
    );
  }
  setFields(r, s) {
    let h = this.clone();
    return (
      (h.fields = r),
      (h._nodes = va(r, s)),
      (h._sortErrors = Ss(Object.keys(r))),
      s && (h._excludedEdges = s),
      h
    );
  }
  shape(r, s = []) {
    return this.clone().withMutation((h) => {
      let l = h._excludedEdges;
      return (
        s.length &&
          (Array.isArray(s[0]) || (s = [s]), (l = [...h._excludedEdges, ...s])),
        h.setFields(Object.assign(h.fields, r), l)
      );
    });
  }
  partial() {
    const r = {};
    for (const [s, h] of Object.entries(this.fields))
      r[s] =
        "optional" in h && h.optional instanceof Function ? h.optional() : h;
    return this.setFields(r);
  }
  deepPartial() {
    return He(this);
  }
  pick(r) {
    const s = {};
    for (const h of r) this.fields[h] && (s[h] = this.fields[h]);
    return this.setFields(
      s,
      this._excludedEdges.filter(([h, l]) => r.includes(h) && r.includes(l)),
    );
  }
  omit(r) {
    const s = [];
    for (const h of Object.keys(this.fields)) r.includes(h) || s.push(h);
    return this.pick(s);
  }
  from(r, s, h) {
    let l = jt.getter(r, !0);
    return this.transform((d) => {
      if (!d) return d;
      let _ = d;
      return (
        xa(d, r) &&
          ((_ = Object.assign({}, d)), h || delete _[r], (_[s] = l(d))),
        _
      );
    });
  }
  json() {
    return this.transform(ya);
  }
  noUnknown(r = !0, s = Ni.noUnknown) {
    typeof r != "boolean" && ((s = r), (r = !0));
    let h = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: s,
      test(l) {
        if (l == null) return !0;
        const d = wa(this.schema, l);
        return (
          !r ||
          d.length === 0 ||
          this.createError({ params: { unknown: d.join(", ") } })
        );
      },
    });
    return (h.spec.noUnknown = r), h;
  }
  unknown(r = !0, s = Ni.noUnknown) {
    return this.noUnknown(!r, s);
  }
  transformKeys(r) {
    return this.transform((s) => {
      if (!s) return s;
      const h = {};
      for (const l of Object.keys(s)) h[r(l)] = s[l];
      return h;
    });
  }
  camelCase() {
    return this.transformKeys(Zi.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Zi.snakeCase);
  }
  constantCase() {
    return this.transformKeys((r) => Zi.snakeCase(r).toUpperCase());
  }
  describe(r) {
    const s = (r ? this.resolve(r) : this).clone(),
      h = super.describe(r);
    h.fields = {};
    for (const [d, _] of Object.entries(s.fields)) {
      var l;
      let v = r;
      (l = v) != null &&
        l.value &&
        (v = Object.assign({}, v, { parent: v.value, value: v.value[d] })),
        (h.fields[d] = _.describe(v));
    }
    return h;
  }
}
Es.prototype = Cs.prototype;
const Pa = Es().shape({
    Full_Name: $e().required().min(10),
    Email: $e().required(),
    textArea: $e().required(),
  }),
  La = () => {
    var l, d, _;
    const {
        register: u,
        handleSubmit: r,
        formState: { errors: s },
      } = hr({ resolver: Er(Pa) }),
      h = async (v) => {
        const x = await (
          await fetch("/data/get", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(v),
          })
        ).json();
        console.log("worker", x), console.log("worker");
      };
    return b.jsx(b.Fragment, {
      children: b.jsx("form", {
        onSubmit: r(h),
        action: "#",
        children: b.jsxs("fieldset", {
          children: [
            b.jsxs("div", {
              className: zi.form_Section,
              children: [
                b.jsx("label", { htmlFor: "Full_Name", children: "Full Name" }),
                b.jsx("input", {
                  ...u("Full_Name"),
                  id: "Full_Name",
                  type: "text",
                  required: !0,
                  placeholder: "Your Name",
                }),
                b.jsx(ve, {
                  color: 5,
                  children:
                    ((l = s.Full_Name) == null ? void 0 : l.message) || "",
                }),
              ],
            }),
            b.jsx("legend", { children: "SEND US MESSAGE" }),
            b.jsxs("div", {
              className: zi.form_Section,
              children: [
                b.jsx("label", { htmlFor: "Email", children: "Email" }),
                b.jsx("input", {
                  ...u("Email"),
                  type: "email",
                  id: "Email",
                  placeholder: "Your Email",
                }),
                b.jsx(ve, {
                  color: 5,
                  children: ((d = s.Email) == null ? void 0 : d.message) || "",
                }),
              ],
            }),
            b.jsxs("div", {
              className: zi.form_Section,
              children: [
                b.jsx("label", { htmlFor: "Message", children: "Message" }),
                b.jsx("textarea", {
                  ...u("textArea"),
                  spellCheck: !0,
                  rows: 5,
                  cols: 30,
                  id: "Message",
                  placeholder: "Your Message",
                }),
                b.jsx(ve, {
                  color: 5,
                  children:
                    ((_ = s.textArea) == null ? void 0 : _.message) || "",
                }),
              ],
            }),
            b.jsx(or, { text: "SUBMIT", w: "100", h: 72 }),
          ],
        }),
      }),
    });
  },
  Ta = () =>
    b.jsx(b.Fragment, {
      children: b.jsx("section", {
        className: rs.section2,
        children: b.jsxs("div", {
          className: rs.section2_container,
          children: [
            b.jsxs("address", {
              children: [
                b.jsx(xr, { src: wr }),
                b.jsxs("div", {
                  children: [
                    b.jsx(je, {
                      size: "1.25rem",
                      color: 2,
                      lvl: 3,
                      children: "ADDRESS",
                    }),
                    b.jsx(ve, {
                      color: 2,
                      children:
                        "Id convallis placerat sit sed duis id amet volutpat quam a, pharetra.",
                    }),
                  ],
                }),
                b.jsxs("div", {
                  children: [
                    b.jsx(je, {
                      size: "1.25rem",
                      color: 2,
                      lvl: 3,
                      children: "PHONE",
                    }),
                    b.jsx(De, {
                      IMG: "phone",
                      place: "left",
                      children: "+62-812-7313-4321",
                    }),
                    b.jsx(De, {
                      IMG: "phone",
                      place: "left",
                      children: "+62-812-7313-4321",
                    }),
                  ],
                }),
                b.jsxs("div", {
                  children: [
                    b.jsx(je, {
                      size: "1.25rem",
                      color: 2,
                      lvl: 3,
                      children: "ONLINE SERVICE",
                    }),
                    b.jsx(De, {
                      IMG: "glob",
                      place: "left",
                      children: "www.afrianska.com",
                    }),
                    b.jsx(De, {
                      IMG: "letter",
                      place: "left",
                      children: "hello.afrian@gmail.com",
                    }),
                  ],
                }),
              ],
            }),
            b.jsx(La, {}),
          ],
        }),
      }),
    });
function Sa(u, r) {
  const s = K.useRef(r);
  K.useEffect(
    function () {
      r !== s.current &&
        u.attributionControl != null &&
        (s.current != null && u.attributionControl.removeAttribution(s.current),
        r != null && u.attributionControl.addAttribution(r)),
        (s.current = r);
    },
    [u, r],
  );
}
const Ea = 1;
function Ca(u) {
  return Object.freeze({ __version: Ea, map: u });
}
const ks = K.createContext(null),
  ka = ks.Provider;
function Ma() {
  const u = K.useContext(ks);
  if (u == null)
    throw new Error(
      "No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>",
    );
  return u;
}
function Oa(u) {
  function r(s, h) {
    const { instance: l } = u(s).current;
    return K.useImperativeHandle(h, () => l), null;
  }
  return K.forwardRef(r);
}
function za(u, r) {
  const s = K.useRef();
  K.useEffect(
    function () {
      return (
        r != null && u.instance.on(r),
        (s.current = r),
        function () {
          s.current != null && u.instance.off(s.current), (s.current = null);
        }
      );
    },
    [u, r],
  );
}
function Ms(u, r) {
  const s = u.pane ?? r.pane;
  return s ? { ...u, pane: s } : u;
}
var Ri = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */ (function (u, r) {
  (function (s, h) {
    h(r);
  })(rr, function (s) {
    var h = "1.9.4";
    function l(t) {
      var e, i, n, o;
      for (i = 1, n = arguments.length; i < n; i++) {
        o = arguments[i];
        for (e in o) t[e] = o[e];
      }
      return t;
    }
    var d =
      Object.create ||
      (function () {
        function t() {}
        return function (e) {
          return (t.prototype = e), new t();
        };
      })();
    function _(t, e) {
      var i = Array.prototype.slice;
      if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
      var n = i.call(arguments, 2);
      return function () {
        return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments);
      };
    }
    var v = 0;
    function p(t) {
      return "_leaflet_id" in t || (t._leaflet_id = ++v), t._leaflet_id;
    }
    function x(t, e, i) {
      var n, o, a, c;
      return (
        (c = function () {
          (n = !1), o && (a.apply(i, o), (o = !1));
        }),
        (a = function () {
          n
            ? (o = arguments)
            : (t.apply(i, arguments), setTimeout(c, e), (n = !0));
        }),
        a
      );
    }
    function P(t, e, i) {
      var n = e[1],
        o = e[0],
        a = n - o;
      return t === n && i ? t : ((((t - o) % a) + a) % a) + o;
    }
    function w() {
      return !1;
    }
    function M(t, e) {
      if (e === !1) return t;
      var i = Math.pow(10, e === void 0 ? 6 : e);
      return Math.round(t * i) / i;
    }
    function N(t) {
      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
    }
    function H(t) {
      return N(t).split(/\s+/);
    }
    function z(t, e) {
      Object.prototype.hasOwnProperty.call(t, "options") ||
        (t.options = t.options ? d(t.options) : {});
      for (var i in e) t.options[i] = e[i];
      return t.options;
    }
    function rt(t, e, i) {
      var n = [];
      for (var o in t)
        n.push(
          encodeURIComponent(i ? o.toUpperCase() : o) +
            "=" +
            encodeURIComponent(t[o]),
        );
      return (!e || e.indexOf("?") === -1 ? "?" : "&") + n.join("&");
    }
    var xt = /\{ *([\w_ -]+) *\}/g;
    function J(t, e) {
      return t.replace(xt, function (i, n) {
        var o = e[n];
        if (o === void 0)
          throw new Error("No value provided for variable " + i);
        return typeof o == "function" && (o = o(e)), o;
      });
    }
    var tt =
      Array.isArray ||
      function (t) {
        return Object.prototype.toString.call(t) === "[object Array]";
      };
    function At(t, e) {
      for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
      return -1;
    }
    var Et = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function Zt(t) {
      return window["webkit" + t] || window["moz" + t] || window["ms" + t];
    }
    var ee = 0;
    function Ke(t) {
      var e = +new Date(),
        i = Math.max(0, 16 - (e - ee));
      return (ee = e + i), window.setTimeout(t, i);
    }
    var Ct = window.requestAnimationFrame || Zt("RequestAnimationFrame") || Ke,
      ie =
        window.cancelAnimationFrame ||
        Zt("CancelAnimationFrame") ||
        Zt("CancelRequestAnimationFrame") ||
        function (t) {
          window.clearTimeout(t);
        };
    function Z(t, e, i) {
      if (i && Ct === Ke) t.call(e);
      else return Ct.call(window, _(t, e));
    }
    function U(t) {
      t && ie.call(window, t);
    }
    var ye = {
      __proto__: null,
      extend: l,
      create: d,
      bind: _,
      get lastId() {
        return v;
      },
      stamp: p,
      throttle: x,
      wrapNum: P,
      falseFn: w,
      formatNum: M,
      trim: N,
      splitWords: H,
      setOptions: z,
      getParamString: rt,
      template: J,
      isArray: tt,
      indexOf: At,
      emptyImageUrl: Et,
      requestFn: Ct,
      cancelFn: ie,
      requestAnimFrame: Z,
      cancelAnimFrame: U,
    };
    function ht() {}
    (ht.extend = function (t) {
      var e = function () {
          z(this),
            this.initialize && this.initialize.apply(this, arguments),
            this.callInitHooks();
        },
        i = (e.__super__ = this.prototype),
        n = d(i);
      (n.constructor = e), (e.prototype = n);
      for (var o in this)
        Object.prototype.hasOwnProperty.call(this, o) &&
          o !== "prototype" &&
          o !== "__super__" &&
          (e[o] = this[o]);
      return (
        t.statics && l(e, t.statics),
        t.includes && (zs(t.includes), l.apply(null, [n].concat(t.includes))),
        l(n, t),
        delete n.statics,
        delete n.includes,
        n.options &&
          ((n.options = i.options ? d(i.options) : {}),
          l(n.options, t.options)),
        (n._initHooks = []),
        (n.callInitHooks = function () {
          if (!this._initHooksCalled) {
            i.callInitHooks && i.callInitHooks.call(this),
              (this._initHooksCalled = !0);
            for (var a = 0, c = n._initHooks.length; a < c; a++)
              n._initHooks[a].call(this);
          }
        }),
        e
      );
    }),
      (ht.include = function (t) {
        var e = this.prototype.options;
        return (
          l(this.prototype, t),
          t.options &&
            ((this.prototype.options = e), this.mergeOptions(t.options)),
          this
        );
      }),
      (ht.mergeOptions = function (t) {
        return l(this.prototype.options, t), this;
      }),
      (ht.addInitHook = function (t) {
        var e = Array.prototype.slice.call(arguments, 1),
          i =
            typeof t == "function"
              ? t
              : function () {
                  this[t].apply(this, e);
                };
        return (
          (this.prototype._initHooks = this.prototype._initHooks || []),
          this.prototype._initHooks.push(i),
          this
        );
      });
    function zs(t) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        t = tt(t) ? t : [t];
        for (var e = 0; e < t.length; e++)
          t[e] === L.Mixin.Events &&
            console.warn(
              "Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",
              new Error().stack,
            );
      }
    }
    var at = {
      on: function (t, e, i) {
        if (typeof t == "object") for (var n in t) this._on(n, t[n], e);
        else {
          t = H(t);
          for (var o = 0, a = t.length; o < a; o++) this._on(t[o], e, i);
        }
        return this;
      },
      off: function (t, e, i) {
        if (!arguments.length) delete this._events;
        else if (typeof t == "object") for (var n in t) this._off(n, t[n], e);
        else {
          t = H(t);
          for (var o = arguments.length === 1, a = 0, c = t.length; a < c; a++)
            o ? this._off(t[a]) : this._off(t[a], e, i);
        }
        return this;
      },
      _on: function (t, e, i, n) {
        if (typeof e != "function") {
          console.warn("wrong listener type: " + typeof e);
          return;
        }
        if (this._listens(t, e, i) === !1) {
          i === this && (i = void 0);
          var o = { fn: e, ctx: i };
          n && (o.once = !0),
            (this._events = this._events || {}),
            (this._events[t] = this._events[t] || []),
            this._events[t].push(o);
        }
      },
      _off: function (t, e, i) {
        var n, o, a;
        if (this._events && ((n = this._events[t]), !!n)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (o = 0, a = n.length; o < a; o++) n[o].fn = w;
            delete this._events[t];
            return;
          }
          if (typeof e != "function") {
            console.warn("wrong listener type: " + typeof e);
            return;
          }
          var c = this._listens(t, e, i);
          if (c !== !1) {
            var f = n[c];
            this._firingCount &&
              ((f.fn = w), (this._events[t] = n = n.slice())),
              n.splice(c, 1);
          }
        }
      },
      fire: function (t, e, i) {
        if (!this.listens(t, i)) return this;
        var n = l({}, e, {
          type: t,
          target: this,
          sourceTarget: (e && e.sourceTarget) || this,
        });
        if (this._events) {
          var o = this._events[t];
          if (o) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var a = 0, c = o.length; a < c; a++) {
              var f = o[a],
                m = f.fn;
              f.once && this.off(t, m, f.ctx), m.call(f.ctx || this, n);
            }
            this._firingCount--;
          }
        }
        return i && this._propagateEvent(n), this;
      },
      listens: function (t, e, i, n) {
        typeof t != "string" && console.warn('"string" type argument expected');
        var o = e;
        typeof e != "function" && ((n = !!e), (o = void 0), (i = void 0));
        var a = this._events && this._events[t];
        if (a && a.length && this._listens(t, o, i) !== !1) return !0;
        if (n) {
          for (var c in this._eventParents)
            if (this._eventParents[c].listens(t, e, i, n)) return !0;
        }
        return !1;
      },
      _listens: function (t, e, i) {
        if (!this._events) return !1;
        var n = this._events[t] || [];
        if (!e) return !!n.length;
        i === this && (i = void 0);
        for (var o = 0, a = n.length; o < a; o++)
          if (n[o].fn === e && n[o].ctx === i) return o;
        return !1;
      },
      once: function (t, e, i) {
        if (typeof t == "object") for (var n in t) this._on(n, t[n], e, !0);
        else {
          t = H(t);
          for (var o = 0, a = t.length; o < a; o++) this._on(t[o], e, i, !0);
        }
        return this;
      },
      addEventParent: function (t) {
        return (
          (this._eventParents = this._eventParents || {}),
          (this._eventParents[p(t)] = t),
          this
        );
      },
      removeEventParent: function (t) {
        return this._eventParents && delete this._eventParents[p(t)], this;
      },
      _propagateEvent: function (t) {
        for (var e in this._eventParents)
          this._eventParents[e].fire(
            t.type,
            l({ layer: t.target, propagatedFrom: t.target }, t),
            !0,
          );
      },
    };
    (at.addEventListener = at.on),
      (at.removeEventListener = at.clearAllEventListeners = at.off),
      (at.addOneTimeEventListener = at.once),
      (at.fireEvent = at.fire),
      (at.hasEventListeners = at.listens);
    var ne = ht.extend(at);
    function C(t, e, i) {
      (this.x = i ? Math.round(t) : t), (this.y = i ? Math.round(e) : e);
    }
    var Gi =
      Math.trunc ||
      function (t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t);
      };
    C.prototype = {
      clone: function () {
        return new C(this.x, this.y);
      },
      add: function (t) {
        return this.clone()._add(E(t));
      },
      _add: function (t) {
        return (this.x += t.x), (this.y += t.y), this;
      },
      subtract: function (t) {
        return this.clone()._subtract(E(t));
      },
      _subtract: function (t) {
        return (this.x -= t.x), (this.y -= t.y), this;
      },
      divideBy: function (t) {
        return this.clone()._divideBy(t);
      },
      _divideBy: function (t) {
        return (this.x /= t), (this.y /= t), this;
      },
      multiplyBy: function (t) {
        return this.clone()._multiplyBy(t);
      },
      _multiplyBy: function (t) {
        return (this.x *= t), (this.y *= t), this;
      },
      scaleBy: function (t) {
        return new C(this.x * t.x, this.y * t.y);
      },
      unscaleBy: function (t) {
        return new C(this.x / t.x, this.y / t.y);
      },
      round: function () {
        return this.clone()._round();
      },
      _round: function () {
        return (
          (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
        );
      },
      floor: function () {
        return this.clone()._floor();
      },
      _floor: function () {
        return (
          (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
        );
      },
      ceil: function () {
        return this.clone()._ceil();
      },
      _ceil: function () {
        return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
      },
      trunc: function () {
        return this.clone()._trunc();
      },
      _trunc: function () {
        return (this.x = Gi(this.x)), (this.y = Gi(this.y)), this;
      },
      distanceTo: function (t) {
        t = E(t);
        var e = t.x - this.x,
          i = t.y - this.y;
        return Math.sqrt(e * e + i * i);
      },
      equals: function (t) {
        return (t = E(t)), t.x === this.x && t.y === this.y;
      },
      contains: function (t) {
        return (
          (t = E(t)),
          Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        );
      },
      toString: function () {
        return "Point(" + M(this.x) + ", " + M(this.y) + ")";
      },
    };
    function E(t, e, i) {
      return t instanceof C
        ? t
        : tt(t)
          ? new C(t[0], t[1])
          : t == null
            ? t
            : typeof t == "object" && "x" in t && "y" in t
              ? new C(t.x, t.y)
              : new C(t, e, i);
    }
    function j(t, e) {
      if (t)
        for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
          this.extend(i[n]);
    }
    j.prototype = {
      extend: function (t) {
        var e, i;
        if (!t) return this;
        if (t instanceof C || typeof t[0] == "number" || "x" in t) e = i = E(t);
        else if (((t = et(t)), (e = t.min), (i = t.max), !e || !i)) return this;
        return (
          !this.min && !this.max
            ? ((this.min = e.clone()), (this.max = i.clone()))
            : ((this.min.x = Math.min(e.x, this.min.x)),
              (this.max.x = Math.max(i.x, this.max.x)),
              (this.min.y = Math.min(e.y, this.min.y)),
              (this.max.y = Math.max(i.y, this.max.y))),
          this
        );
      },
      getCenter: function (t) {
        return E(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          t,
        );
      },
      getBottomLeft: function () {
        return E(this.min.x, this.max.y);
      },
      getTopRight: function () {
        return E(this.max.x, this.min.y);
      },
      getTopLeft: function () {
        return this.min;
      },
      getBottomRight: function () {
        return this.max;
      },
      getSize: function () {
        return this.max.subtract(this.min);
      },
      contains: function (t) {
        var e, i;
        return (
          typeof t[0] == "number" || t instanceof C ? (t = E(t)) : (t = et(t)),
          t instanceof j ? ((e = t.min), (i = t.max)) : (e = i = t),
          e.x >= this.min.x &&
            i.x <= this.max.x &&
            e.y >= this.min.y &&
            i.y <= this.max.y
        );
      },
      intersects: function (t) {
        t = et(t);
        var e = this.min,
          i = this.max,
          n = t.min,
          o = t.max,
          a = o.x >= e.x && n.x <= i.x,
          c = o.y >= e.y && n.y <= i.y;
        return a && c;
      },
      overlaps: function (t) {
        t = et(t);
        var e = this.min,
          i = this.max,
          n = t.min,
          o = t.max,
          a = o.x > e.x && n.x < i.x,
          c = o.y > e.y && n.y < i.y;
        return a && c;
      },
      isValid: function () {
        return !!(this.min && this.max);
      },
      pad: function (t) {
        var e = this.min,
          i = this.max,
          n = Math.abs(e.x - i.x) * t,
          o = Math.abs(e.y - i.y) * t;
        return et(E(e.x - n, e.y - o), E(i.x + n, i.y + o));
      },
      equals: function (t) {
        return t
          ? ((t = et(t)),
            this.min.equals(t.getTopLeft()) &&
              this.max.equals(t.getBottomRight()))
          : !1;
      },
    };
    function et(t, e) {
      return !t || t instanceof j ? t : new j(t, e);
    }
    function it(t, e) {
      if (t)
        for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
          this.extend(i[n]);
    }
    it.prototype = {
      extend: function (t) {
        var e = this._southWest,
          i = this._northEast,
          n,
          o;
        if (t instanceof D) (n = t), (o = t);
        else if (t instanceof it) {
          if (((n = t._southWest), (o = t._northEast), !n || !o)) return this;
        } else return t ? this.extend(I(t) || V(t)) : this;
        return (
          !e && !i
            ? ((this._southWest = new D(n.lat, n.lng)),
              (this._northEast = new D(o.lat, o.lng)))
            : ((e.lat = Math.min(n.lat, e.lat)),
              (e.lng = Math.min(n.lng, e.lng)),
              (i.lat = Math.max(o.lat, i.lat)),
              (i.lng = Math.max(o.lng, i.lng))),
          this
        );
      },
      pad: function (t) {
        var e = this._southWest,
          i = this._northEast,
          n = Math.abs(e.lat - i.lat) * t,
          o = Math.abs(e.lng - i.lng) * t;
        return new it(new D(e.lat - n, e.lng - o), new D(i.lat + n, i.lng + o));
      },
      getCenter: function () {
        return new D(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2,
        );
      },
      getSouthWest: function () {
        return this._southWest;
      },
      getNorthEast: function () {
        return this._northEast;
      },
      getNorthWest: function () {
        return new D(this.getNorth(), this.getWest());
      },
      getSouthEast: function () {
        return new D(this.getSouth(), this.getEast());
      },
      getWest: function () {
        return this._southWest.lng;
      },
      getSouth: function () {
        return this._southWest.lat;
      },
      getEast: function () {
        return this._northEast.lng;
      },
      getNorth: function () {
        return this._northEast.lat;
      },
      contains: function (t) {
        typeof t[0] == "number" || t instanceof D || "lat" in t
          ? (t = I(t))
          : (t = V(t));
        var e = this._southWest,
          i = this._northEast,
          n,
          o;
        return (
          t instanceof it
            ? ((n = t.getSouthWest()), (o = t.getNorthEast()))
            : (n = o = t),
          n.lat >= e.lat && o.lat <= i.lat && n.lng >= e.lng && o.lng <= i.lng
        );
      },
      intersects: function (t) {
        t = V(t);
        var e = this._southWest,
          i = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          a = o.lat >= e.lat && n.lat <= i.lat,
          c = o.lng >= e.lng && n.lng <= i.lng;
        return a && c;
      },
      overlaps: function (t) {
        t = V(t);
        var e = this._southWest,
          i = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          a = o.lat > e.lat && n.lat < i.lat,
          c = o.lng > e.lng && n.lng < i.lng;
        return a && c;
      },
      toBBoxString: function () {
        return [
          this.getWest(),
          this.getSouth(),
          this.getEast(),
          this.getNorth(),
        ].join(",");
      },
      equals: function (t, e) {
        return t
          ? ((t = V(t)),
            this._southWest.equals(t.getSouthWest(), e) &&
              this._northEast.equals(t.getNorthEast(), e))
          : !1;
      },
      isValid: function () {
        return !!(this._southWest && this._northEast);
      },
    };
    function V(t, e) {
      return t instanceof it ? t : new it(t, e);
    }
    function D(t, e, i) {
      if (isNaN(t) || isNaN(e))
        throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
      (this.lat = +t), (this.lng = +e), i !== void 0 && (this.alt = +i);
    }
    D.prototype = {
      equals: function (t, e) {
        if (!t) return !1;
        t = I(t);
        var i = Math.max(
          Math.abs(this.lat - t.lat),
          Math.abs(this.lng - t.lng),
        );
        return i <= (e === void 0 ? 1e-9 : e);
      },
      toString: function (t) {
        return "LatLng(" + M(this.lat, t) + ", " + M(this.lng, t) + ")";
      },
      distanceTo: function (t) {
        return kt.distance(this, I(t));
      },
      wrap: function () {
        return kt.wrapLatLng(this);
      },
      toBounds: function (t) {
        var e = (180 * t) / 40075017,
          i = e / Math.cos((Math.PI / 180) * this.lat);
        return V([this.lat - e, this.lng - i], [this.lat + e, this.lng + i]);
      },
      clone: function () {
        return new D(this.lat, this.lng, this.alt);
      },
    };
    function I(t, e, i) {
      return t instanceof D
        ? t
        : tt(t) && typeof t[0] != "object"
          ? t.length === 3
            ? new D(t[0], t[1], t[2])
            : t.length === 2
              ? new D(t[0], t[1])
              : null
          : t == null
            ? t
            : typeof t == "object" && "lat" in t
              ? new D(t.lat, "lng" in t ? t.lng : t.lon, t.alt)
              : e === void 0
                ? null
                : new D(t, e, i);
    }
    var wt = {
        latLngToPoint: function (t, e) {
          var i = this.projection.project(t),
            n = this.scale(e);
          return this.transformation._transform(i, n);
        },
        pointToLatLng: function (t, e) {
          var i = this.scale(e),
            n = this.transformation.untransform(t, i);
          return this.projection.unproject(n);
        },
        project: function (t) {
          return this.projection.project(t);
        },
        unproject: function (t) {
          return this.projection.unproject(t);
        },
        scale: function (t) {
          return 256 * Math.pow(2, t);
        },
        zoom: function (t) {
          return Math.log(t / 256) / Math.LN2;
        },
        getProjectedBounds: function (t) {
          if (this.infinite) return null;
          var e = this.projection.bounds,
            i = this.scale(t),
            n = this.transformation.transform(e.min, i),
            o = this.transformation.transform(e.max, i);
          return new j(n, o);
        },
        infinite: !1,
        wrapLatLng: function (t) {
          var e = this.wrapLng ? P(t.lng, this.wrapLng, !0) : t.lng,
            i = this.wrapLat ? P(t.lat, this.wrapLat, !0) : t.lat,
            n = t.alt;
          return new D(i, e, n);
        },
        wrapLatLngBounds: function (t) {
          var e = t.getCenter(),
            i = this.wrapLatLng(e),
            n = e.lat - i.lat,
            o = e.lng - i.lng;
          if (n === 0 && o === 0) return t;
          var a = t.getSouthWest(),
            c = t.getNorthEast(),
            f = new D(a.lat - n, a.lng - o),
            m = new D(c.lat - n, c.lng - o);
          return new it(f, m);
        },
      },
      kt = l({}, wt, {
        wrapLng: [-180, 180],
        R: 6371e3,
        distance: function (t, e) {
          var i = Math.PI / 180,
            n = t.lat * i,
            o = e.lat * i,
            a = Math.sin(((e.lat - t.lat) * i) / 2),
            c = Math.sin(((e.lng - t.lng) * i) / 2),
            f = a * a + Math.cos(n) * Math.cos(o) * c * c,
            m = 2 * Math.atan2(Math.sqrt(f), Math.sqrt(1 - f));
          return this.R * m;
        },
      }),
      qi = 6378137,
      Ye = {
        R: qi,
        MAX_LATITUDE: 85.0511287798,
        project: function (t) {
          var e = Math.PI / 180,
            i = this.MAX_LATITUDE,
            n = Math.max(Math.min(i, t.lat), -i),
            o = Math.sin(n * e);
          return new C(
            this.R * t.lng * e,
            (this.R * Math.log((1 + o) / (1 - o))) / 2,
          );
        },
        unproject: function (t) {
          var e = 180 / Math.PI;
          return new D(
            (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
            (t.x * e) / this.R,
          );
        },
        bounds: (function () {
          var t = qi * Math.PI;
          return new j([-t, -t], [t, t]);
        })(),
      };
    function Xe(t, e, i, n) {
      if (tt(t)) {
        (this._a = t[0]), (this._b = t[1]), (this._c = t[2]), (this._d = t[3]);
        return;
      }
      (this._a = t), (this._b = e), (this._c = i), (this._d = n);
    }
    Xe.prototype = {
      transform: function (t, e) {
        return this._transform(t.clone(), e);
      },
      _transform: function (t, e) {
        return (
          (e = e || 1),
          (t.x = e * (this._a * t.x + this._b)),
          (t.y = e * (this._c * t.y + this._d)),
          t
        );
      },
      untransform: function (t, e) {
        return (
          (e = e || 1),
          new C((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
        );
      },
    };
    function se(t, e, i, n) {
      return new Xe(t, e, i, n);
    }
    var Je = l({}, kt, {
        code: "EPSG:3857",
        projection: Ye,
        transformation: (function () {
          var t = 0.5 / (Math.PI * Ye.R);
          return se(t, 0.5, -t, 0.5);
        })(),
      }),
      As = l({}, Je, { code: "EPSG:900913" });
    function Ki(t) {
      return document.createElementNS("http://www.w3.org/2000/svg", t);
    }
    function Yi(t, e) {
      var i = "",
        n,
        o,
        a,
        c,
        f,
        m;
      for (n = 0, a = t.length; n < a; n++) {
        for (f = t[n], o = 0, c = f.length; o < c; o++)
          (m = f[o]), (i += (o ? "L" : "M") + m.x + " " + m.y);
        i += e ? (T.svg ? "z" : "x") : "";
      }
      return i || "M0 0";
    }
    var Qe = document.documentElement.style,
      xe = "ActiveXObject" in window,
      Zs = xe && !document.addEventListener,
      Xi = "msLaunchUri" in navigator && !("documentMode" in document),
      ti = _t("webkit"),
      Ji = _t("android"),
      Qi = _t("android 2") || _t("android 3"),
      Is = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
      Bs = Ji && _t("Google") && Is < 537 && !("AudioNode" in window),
      ei = !!window.opera,
      tn = !Xi && _t("chrome"),
      en = _t("gecko") && !ti && !ei && !xe,
      Fs = !tn && _t("safari"),
      nn = _t("phantom"),
      sn = "OTransition" in Qe,
      Ns = navigator.platform.indexOf("Win") === 0,
      on = xe && "transition" in Qe,
      ii =
        "WebKitCSSMatrix" in window &&
        "m11" in new window.WebKitCSSMatrix() &&
        !Qi,
      rn = "MozPerspective" in Qe,
      Ds = !window.L_DISABLE_3D && (on || ii || rn) && !sn && !nn,
      oe = typeof orientation < "u" || _t("mobile"),
      Rs = oe && ti,
      js = oe && ii,
      an = !window.PointerEvent && window.MSPointerEvent,
      hn = !!(window.PointerEvent || an),
      un = "ontouchstart" in window || !!window.TouchEvent,
      $s = !window.L_NO_TOUCH && (un || hn),
      Hs = oe && ei,
      Ws = oe && en,
      Us =
        (window.devicePixelRatio ||
          window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
      Vs = (function () {
        var t = !1;
        try {
          var e = Object.defineProperty({}, "passive", {
            get: function () {
              t = !0;
            },
          });
          window.addEventListener("testPassiveEventSupport", w, e),
            window.removeEventListener("testPassiveEventSupport", w, e);
        } catch {}
        return t;
      })(),
      Gs = (function () {
        return !!document.createElement("canvas").getContext;
      })(),
      ni = !!(document.createElementNS && Ki("svg").createSVGRect),
      qs =
        !!ni &&
        (function () {
          var t = document.createElement("div");
          return (
            (t.innerHTML = "<svg/>"),
            (t.firstChild && t.firstChild.namespaceURI) ===
              "http://www.w3.org/2000/svg"
          );
        })(),
      Ks =
        !ni &&
        (function () {
          try {
            var t = document.createElement("div");
            t.innerHTML = '<v:shape adj="1"/>';
            var e = t.firstChild;
            return (
              (e.style.behavior = "url(#default#VML)"),
              e && typeof e.adj == "object"
            );
          } catch {
            return !1;
          }
        })(),
      Ys = navigator.platform.indexOf("Mac") === 0,
      Xs = navigator.platform.indexOf("Linux") === 0;
    function _t(t) {
      return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
    }
    var T = {
        ie: xe,
        ielt9: Zs,
        edge: Xi,
        webkit: ti,
        android: Ji,
        android23: Qi,
        androidStock: Bs,
        opera: ei,
        chrome: tn,
        gecko: en,
        safari: Fs,
        phantom: nn,
        opera12: sn,
        win: Ns,
        ie3d: on,
        webkit3d: ii,
        gecko3d: rn,
        any3d: Ds,
        mobile: oe,
        mobileWebkit: Rs,
        mobileWebkit3d: js,
        msPointer: an,
        pointer: hn,
        touch: $s,
        touchNative: un,
        mobileOpera: Hs,
        mobileGecko: Ws,
        retina: Us,
        passiveEvents: Vs,
        canvas: Gs,
        svg: ni,
        vml: Ks,
        inlineSvg: qs,
        mac: Ys,
        linux: Xs,
      },
      ln = T.msPointer ? "MSPointerDown" : "pointerdown",
      cn = T.msPointer ? "MSPointerMove" : "pointermove",
      fn = T.msPointer ? "MSPointerUp" : "pointerup",
      dn = T.msPointer ? "MSPointerCancel" : "pointercancel",
      si = { touchstart: ln, touchmove: cn, touchend: fn, touchcancel: dn },
      _n = { touchstart: no, touchmove: we, touchend: we, touchcancel: we },
      Wt = {},
      mn = !1;
    function Js(t, e, i) {
      return (
        e === "touchstart" && io(),
        _n[e]
          ? ((i = _n[e].bind(this, i)), t.addEventListener(si[e], i, !1), i)
          : (console.warn("wrong event specified:", e), w)
      );
    }
    function Qs(t, e, i) {
      if (!si[e]) {
        console.warn("wrong event specified:", e);
        return;
      }
      t.removeEventListener(si[e], i, !1);
    }
    function to(t) {
      Wt[t.pointerId] = t;
    }
    function eo(t) {
      Wt[t.pointerId] && (Wt[t.pointerId] = t);
    }
    function pn(t) {
      delete Wt[t.pointerId];
    }
    function io() {
      mn ||
        (document.addEventListener(ln, to, !0),
        document.addEventListener(cn, eo, !0),
        document.addEventListener(fn, pn, !0),
        document.addEventListener(dn, pn, !0),
        (mn = !0));
    }
    function we(t, e) {
      if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
        e.touches = [];
        for (var i in Wt) e.touches.push(Wt[i]);
        (e.changedTouches = [e]), t(e);
      }
    }
    function no(t, e) {
      e.MSPOINTER_TYPE_TOUCH &&
        e.pointerType === e.MSPOINTER_TYPE_TOUCH &&
        X(e),
        we(t, e);
    }
    function so(t) {
      var e = {},
        i,
        n;
      for (n in t) (i = t[n]), (e[n] = i && i.bind ? i.bind(t) : i);
      return (
        (t = e),
        (e.type = "dblclick"),
        (e.detail = 2),
        (e.isTrusted = !1),
        (e._simulated = !0),
        e
      );
    }
    var oo = 200;
    function ro(t, e) {
      t.addEventListener("dblclick", e);
      var i = 0,
        n;
      function o(a) {
        if (a.detail !== 1) {
          n = a.detail;
          return;
        }
        if (
          !(
            a.pointerType === "mouse" ||
            (a.sourceCapabilities && !a.sourceCapabilities.firesTouchEvents)
          )
        ) {
          var c = wn(a);
          if (
            !(
              c.some(function (m) {
                return m instanceof HTMLLabelElement && m.attributes.for;
              }) &&
              !c.some(function (m) {
                return (
                  m instanceof HTMLInputElement ||
                  m instanceof HTMLSelectElement
                );
              })
            )
          ) {
            var f = Date.now();
            f - i <= oo ? (n++, n === 2 && e(so(a))) : (n = 1), (i = f);
          }
        }
      }
      return t.addEventListener("click", o), { dblclick: e, simDblclick: o };
    }
    function ao(t, e) {
      t.removeEventListener("dblclick", e.dblclick),
        t.removeEventListener("click", e.simDblclick);
    }
    var oi = Le([
        "transform",
        "webkitTransform",
        "OTransform",
        "MozTransform",
        "msTransform",
      ]),
      re = Le([
        "webkitTransition",
        "transition",
        "OTransition",
        "MozTransition",
        "msTransition",
      ]),
      gn =
        re === "webkitTransition" || re === "OTransition"
          ? re + "End"
          : "transitionend";
    function vn(t) {
      return typeof t == "string" ? document.getElementById(t) : t;
    }
    function ae(t, e) {
      var i = t.style[e] || (t.currentStyle && t.currentStyle[e]);
      if ((!i || i === "auto") && document.defaultView) {
        var n = document.defaultView.getComputedStyle(t, null);
        i = n ? n[e] : null;
      }
      return i === "auto" ? null : i;
    }
    function F(t, e, i) {
      var n = document.createElement(t);
      return (n.className = e || ""), i && i.appendChild(n), n;
    }
    function $(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    }
    function be(t) {
      for (; t.firstChild; ) t.removeChild(t.firstChild);
    }
    function Ut(t) {
      var e = t.parentNode;
      e && e.lastChild !== t && e.appendChild(t);
    }
    function Vt(t) {
      var e = t.parentNode;
      e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
    }
    function ri(t, e) {
      if (t.classList !== void 0) return t.classList.contains(e);
      var i = Pe(t);
      return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i);
    }
    function O(t, e) {
      if (t.classList !== void 0)
        for (var i = H(e), n = 0, o = i.length; n < o; n++)
          t.classList.add(i[n]);
      else if (!ri(t, e)) {
        var a = Pe(t);
        ai(t, (a ? a + " " : "") + e);
      }
    }
    function W(t, e) {
      t.classList !== void 0
        ? t.classList.remove(e)
        : ai(t, N((" " + Pe(t) + " ").replace(" " + e + " ", " ")));
    }
    function ai(t, e) {
      t.className.baseVal === void 0
        ? (t.className = e)
        : (t.className.baseVal = e);
    }
    function Pe(t) {
      return (
        t.correspondingElement && (t = t.correspondingElement),
        t.className.baseVal === void 0 ? t.className : t.className.baseVal
      );
    }
    function ut(t, e) {
      "opacity" in t.style
        ? (t.style.opacity = e)
        : "filter" in t.style && ho(t, e);
    }
    function ho(t, e) {
      var i = !1,
        n = "DXImageTransform.Microsoft.Alpha";
      try {
        i = t.filters.item(n);
      } catch {
        if (e === 1) return;
      }
      (e = Math.round(e * 100)),
        i
          ? ((i.Enabled = e !== 100), (i.Opacity = e))
          : (t.style.filter += " progid:" + n + "(opacity=" + e + ")");
    }
    function Le(t) {
      for (var e = document.documentElement.style, i = 0; i < t.length; i++)
        if (t[i] in e) return t[i];
      return !1;
    }
    function It(t, e, i) {
      var n = e || new C(0, 0);
      t.style[oi] =
        (T.ie3d
          ? "translate(" + n.x + "px," + n.y + "px)"
          : "translate3d(" + n.x + "px," + n.y + "px,0)") +
        (i ? " scale(" + i + ")" : "");
    }
    function G(t, e) {
      (t._leaflet_pos = e),
        T.any3d
          ? It(t, e)
          : ((t.style.left = e.x + "px"), (t.style.top = e.y + "px"));
    }
    function Bt(t) {
      return t._leaflet_pos || new C(0, 0);
    }
    var he, ue, hi;
    if ("onselectstart" in document)
      (he = function () {
        k(window, "selectstart", X);
      }),
        (ue = function () {
          R(window, "selectstart", X);
        });
    else {
      var le = Le([
        "userSelect",
        "WebkitUserSelect",
        "OUserSelect",
        "MozUserSelect",
        "msUserSelect",
      ]);
      (he = function () {
        if (le) {
          var t = document.documentElement.style;
          (hi = t[le]), (t[le] = "none");
        }
      }),
        (ue = function () {
          le && ((document.documentElement.style[le] = hi), (hi = void 0));
        });
    }
    function ui() {
      k(window, "dragstart", X);
    }
    function li() {
      R(window, "dragstart", X);
    }
    var Te, ci;
    function fi(t) {
      for (; t.tabIndex === -1; ) t = t.parentNode;
      t.style &&
        (Se(),
        (Te = t),
        (ci = t.style.outlineStyle),
        (t.style.outlineStyle = "none"),
        k(window, "keydown", Se));
    }
    function Se() {
      Te &&
        ((Te.style.outlineStyle = ci),
        (Te = void 0),
        (ci = void 0),
        R(window, "keydown", Se));
    }
    function yn(t) {
      do t = t.parentNode;
      while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
      return t;
    }
    function di(t) {
      var e = t.getBoundingClientRect();
      return {
        x: e.width / t.offsetWidth || 1,
        y: e.height / t.offsetHeight || 1,
        boundingClientRect: e,
      };
    }
    var uo = {
      __proto__: null,
      TRANSFORM: oi,
      TRANSITION: re,
      TRANSITION_END: gn,
      get: vn,
      getStyle: ae,
      create: F,
      remove: $,
      empty: be,
      toFront: Ut,
      toBack: Vt,
      hasClass: ri,
      addClass: O,
      removeClass: W,
      setClass: ai,
      getClass: Pe,
      setOpacity: ut,
      testProp: Le,
      setTransform: It,
      setPosition: G,
      getPosition: Bt,
      get disableTextSelection() {
        return he;
      },
      get enableTextSelection() {
        return ue;
      },
      disableImageDrag: ui,
      enableImageDrag: li,
      preventOutline: fi,
      restoreOutline: Se,
      getSizedParentNode: yn,
      getScale: di,
    };
    function k(t, e, i, n) {
      if (e && typeof e == "object") for (var o in e) mi(t, o, e[o], i);
      else {
        e = H(e);
        for (var a = 0, c = e.length; a < c; a++) mi(t, e[a], i, n);
      }
      return this;
    }
    var mt = "_leaflet_events";
    function R(t, e, i, n) {
      if (arguments.length === 1) xn(t), delete t[mt];
      else if (e && typeof e == "object") for (var o in e) pi(t, o, e[o], i);
      else if (((e = H(e)), arguments.length === 2))
        xn(t, function (f) {
          return At(e, f) !== -1;
        });
      else for (var a = 0, c = e.length; a < c; a++) pi(t, e[a], i, n);
      return this;
    }
    function xn(t, e) {
      for (var i in t[mt]) {
        var n = i.split(/\d/)[0];
        (!e || e(n)) && pi(t, n, null, null, i);
      }
    }
    var _i = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel",
    };
    function mi(t, e, i, n) {
      var o = e + p(i) + (n ? "_" + p(n) : "");
      if (t[mt] && t[mt][o]) return this;
      var a = function (f) {
          return i.call(n || t, f || window.event);
        },
        c = a;
      !T.touchNative && T.pointer && e.indexOf("touch") === 0
        ? (a = Js(t, e, a))
        : T.touch && e === "dblclick"
          ? (a = ro(t, a))
          : "addEventListener" in t
            ? e === "touchstart" ||
              e === "touchmove" ||
              e === "wheel" ||
              e === "mousewheel"
              ? t.addEventListener(
                  _i[e] || e,
                  a,
                  T.passiveEvents ? { passive: !1 } : !1,
                )
              : e === "mouseenter" || e === "mouseleave"
                ? ((a = function (f) {
                    (f = f || window.event), vi(t, f) && c(f);
                  }),
                  t.addEventListener(_i[e], a, !1))
                : t.addEventListener(e, c, !1)
            : t.attachEvent("on" + e, a),
        (t[mt] = t[mt] || {}),
        (t[mt][o] = a);
    }
    function pi(t, e, i, n, o) {
      o = o || e + p(i) + (n ? "_" + p(n) : "");
      var a = t[mt] && t[mt][o];
      if (!a) return this;
      !T.touchNative && T.pointer && e.indexOf("touch") === 0
        ? Qs(t, e, a)
        : T.touch && e === "dblclick"
          ? ao(t, a)
          : "removeEventListener" in t
            ? t.removeEventListener(_i[e] || e, a, !1)
            : t.detachEvent("on" + e, a),
        (t[mt][o] = null);
    }
    function Ft(t) {
      return (
        t.stopPropagation
          ? t.stopPropagation()
          : t.originalEvent
            ? (t.originalEvent._stopped = !0)
            : (t.cancelBubble = !0),
        this
      );
    }
    function gi(t) {
      return mi(t, "wheel", Ft), this;
    }
    function ce(t) {
      return (
        k(t, "mousedown touchstart dblclick contextmenu", Ft),
        (t._leaflet_disable_click = !0),
        this
      );
    }
    function X(t) {
      return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
    }
    function Nt(t) {
      return X(t), Ft(t), this;
    }
    function wn(t) {
      if (t.composedPath) return t.composedPath();
      for (var e = [], i = t.target; i; ) e.push(i), (i = i.parentNode);
      return e;
    }
    function bn(t, e) {
      if (!e) return new C(t.clientX, t.clientY);
      var i = di(e),
        n = i.boundingClientRect;
      return new C(
        (t.clientX - n.left) / i.x - e.clientLeft,
        (t.clientY - n.top) / i.y - e.clientTop,
      );
    }
    var lo =
      T.linux && T.chrome
        ? window.devicePixelRatio
        : T.mac
          ? window.devicePixelRatio * 3
          : window.devicePixelRatio > 0
            ? 2 * window.devicePixelRatio
            : 1;
    function Pn(t) {
      return T.edge
        ? t.wheelDeltaY / 2
        : t.deltaY && t.deltaMode === 0
          ? -t.deltaY / lo
          : t.deltaY && t.deltaMode === 1
            ? -t.deltaY * 20
            : t.deltaY && t.deltaMode === 2
              ? -t.deltaY * 60
              : t.deltaX || t.deltaZ
                ? 0
                : t.wheelDelta
                  ? (t.wheelDeltaY || t.wheelDelta) / 2
                  : t.detail && Math.abs(t.detail) < 32765
                    ? -t.detail * 20
                    : t.detail
                      ? (t.detail / -32765) * 60
                      : 0;
    }
    function vi(t, e) {
      var i = e.relatedTarget;
      if (!i) return !0;
      try {
        for (; i && i !== t; ) i = i.parentNode;
      } catch {
        return !1;
      }
      return i !== t;
    }
    var co = {
        __proto__: null,
        on: k,
        off: R,
        stopPropagation: Ft,
        disableScrollPropagation: gi,
        disableClickPropagation: ce,
        preventDefault: X,
        stop: Nt,
        getPropagationPath: wn,
        getMousePosition: bn,
        getWheelDelta: Pn,
        isExternalTarget: vi,
        addListener: k,
        removeListener: R,
      },
      Ln = ne.extend({
        run: function (t, e, i, n) {
          this.stop(),
            (this._el = t),
            (this._inProgress = !0),
            (this._duration = i || 0.25),
            (this._easeOutPower = 1 / Math.max(n || 0.5, 0.2)),
            (this._startPos = Bt(t)),
            (this._offset = e.subtract(this._startPos)),
            (this._startTime = +new Date()),
            this.fire("start"),
            this._animate();
        },
        stop: function () {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function () {
          (this._animId = Z(this._animate, this)), this._step();
        },
        _step: function (t) {
          var e = +new Date() - this._startTime,
            i = this._duration * 1e3;
          e < i
            ? this._runFrame(this._easeOut(e / i), t)
            : (this._runFrame(1), this._complete());
        },
        _runFrame: function (t, e) {
          var i = this._startPos.add(this._offset.multiplyBy(t));
          e && i._round(), G(this._el, i), this.fire("step");
        },
        _complete: function () {
          U(this._animId), (this._inProgress = !1), this.fire("end");
        },
        _easeOut: function (t) {
          return 1 - Math.pow(1 - t, this._easeOutPower);
        },
      }),
      B = ne.extend({
        options: {
          crs: Je,
          center: void 0,
          zoom: void 0,
          minZoom: void 0,
          maxZoom: void 0,
          layers: [],
          maxBounds: void 0,
          renderer: void 0,
          zoomAnimation: !0,
          zoomAnimationThreshold: 4,
          fadeAnimation: !0,
          markerZoomAnimation: !0,
          transform3DLimit: 8388608,
          zoomSnap: 1,
          zoomDelta: 1,
          trackResize: !0,
        },
        initialize: function (t, e) {
          (e = z(this, e)),
            (this._handlers = []),
            (this._layers = {}),
            (this._zoomBoundLayers = {}),
            (this._sizeChanged = !0),
            this._initContainer(t),
            this._initLayout(),
            (this._onResize = _(this._onResize, this)),
            this._initEvents(),
            e.maxBounds && this.setMaxBounds(e.maxBounds),
            e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)),
            e.center &&
              e.zoom !== void 0 &&
              this.setView(I(e.center), e.zoom, { reset: !0 }),
            this.callInitHooks(),
            (this._zoomAnimated =
              re && T.any3d && !T.mobileOpera && this.options.zoomAnimation),
            this._zoomAnimated &&
              (this._createAnimProxy(),
              k(this._proxy, gn, this._catchTransitionEnd, this)),
            this._addLayers(this.options.layers);
        },
        setView: function (t, e, i) {
          if (
            ((e = e === void 0 ? this._zoom : this._limitZoom(e)),
            (t = this._limitCenter(I(t), e, this.options.maxBounds)),
            (i = i || {}),
            this._stop(),
            this._loaded && !i.reset && i !== !0)
          ) {
            i.animate !== void 0 &&
              ((i.zoom = l({ animate: i.animate }, i.zoom)),
              (i.pan = l({ animate: i.animate, duration: i.duration }, i.pan)));
            var n =
              this._zoom !== e
                ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom)
                : this._tryAnimatedPan(t, i.pan);
            if (n) return clearTimeout(this._sizeTimer), this;
          }
          return this._resetView(t, e, i.pan && i.pan.noMoveStart), this;
        },
        setZoom: function (t, e) {
          return this._loaded
            ? this.setView(this.getCenter(), t, { zoom: e })
            : ((this._zoom = t), this);
        },
        zoomIn: function (t, e) {
          return (
            (t = t || (T.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom + t, e)
          );
        },
        zoomOut: function (t, e) {
          return (
            (t = t || (T.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom - t, e)
          );
        },
        setZoomAround: function (t, e, i) {
          var n = this.getZoomScale(e),
            o = this.getSize().divideBy(2),
            a = t instanceof C ? t : this.latLngToContainerPoint(t),
            c = a.subtract(o).multiplyBy(1 - 1 / n),
            f = this.containerPointToLatLng(o.add(c));
          return this.setView(f, e, { zoom: i });
        },
        _getBoundsCenterZoom: function (t, e) {
          (e = e || {}), (t = t.getBounds ? t.getBounds() : V(t));
          var i = E(e.paddingTopLeft || e.padding || [0, 0]),
            n = E(e.paddingBottomRight || e.padding || [0, 0]),
            o = this.getBoundsZoom(t, !1, i.add(n));
          if (
            ((o = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, o) : o),
            o === 1 / 0)
          )
            return { center: t.getCenter(), zoom: o };
          var a = n.subtract(i).divideBy(2),
            c = this.project(t.getSouthWest(), o),
            f = this.project(t.getNorthEast(), o),
            m = this.unproject(c.add(f).divideBy(2).add(a), o);
          return { center: m, zoom: o };
        },
        fitBounds: function (t, e) {
          if (((t = V(t)), !t.isValid()))
            throw new Error("Bounds are not valid.");
          var i = this._getBoundsCenterZoom(t, e);
          return this.setView(i.center, i.zoom, e);
        },
        fitWorld: function (t) {
          return this.fitBounds(
            [
              [-90, -180],
              [90, 180],
            ],
            t,
          );
        },
        panTo: function (t, e) {
          return this.setView(t, this._zoom, { pan: e });
        },
        panBy: function (t, e) {
          if (((t = E(t).round()), (e = e || {}), !t.x && !t.y))
            return this.fire("moveend");
          if (e.animate !== !0 && !this.getSize().contains(t))
            return (
              this._resetView(
                this.unproject(this.project(this.getCenter()).add(t)),
                this.getZoom(),
              ),
              this
            );
          if (
            (this._panAnim ||
              ((this._panAnim = new Ln()),
              this._panAnim.on(
                {
                  step: this._onPanTransitionStep,
                  end: this._onPanTransitionEnd,
                },
                this,
              )),
            e.noMoveStart || this.fire("movestart"),
            e.animate !== !1)
          ) {
            O(this._mapPane, "leaflet-pan-anim");
            var i = this._getMapPanePos().subtract(t).round();
            this._panAnim.run(
              this._mapPane,
              i,
              e.duration || 0.25,
              e.easeLinearity,
            );
          } else this._rawPanBy(t), this.fire("move").fire("moveend");
          return this;
        },
        flyTo: function (t, e, i) {
          if (((i = i || {}), i.animate === !1 || !T.any3d))
            return this.setView(t, e, i);
          this._stop();
          var n = this.project(this.getCenter()),
            o = this.project(t),
            a = this.getSize(),
            c = this._zoom;
          (t = I(t)), (e = e === void 0 ? c : e);
          var f = Math.max(a.x, a.y),
            m = f * this.getZoomScale(c, e),
            g = o.distanceTo(n) || 1,
            y = 1.42,
            S = y * y;
          function A(q) {
            var Ne = q ? -1 : 1,
              tr = q ? m : f,
              er = m * m - f * f + Ne * S * S * g * g,
              ir = 2 * tr * S * g,
              ki = er / ir,
              ss = Math.sqrt(ki * ki + 1) - ki,
              nr = ss < 1e-9 ? -18 : Math.log(ss);
            return nr;
          }
          function Q(q) {
            return (Math.exp(q) - Math.exp(-q)) / 2;
          }
          function Y(q) {
            return (Math.exp(q) + Math.exp(-q)) / 2;
          }
          function ct(q) {
            return Q(q) / Y(q);
          }
          var nt = A(0);
          function Jt(q) {
            return f * (Y(nt) / Y(nt + y * q));
          }
          function Yo(q) {
            return (f * (Y(nt) * ct(nt + y * q) - Q(nt))) / S;
          }
          function Xo(q) {
            return 1 - Math.pow(1 - q, 1.5);
          }
          var Jo = Date.now(),
            is = (A(1) - nt) / y,
            Qo = i.duration ? 1e3 * i.duration : 1e3 * is * 0.8;
          function ns() {
            var q = (Date.now() - Jo) / Qo,
              Ne = Xo(q) * is;
            q <= 1
              ? ((this._flyToFrame = Z(ns, this)),
                this._move(
                  this.unproject(
                    n.add(o.subtract(n).multiplyBy(Yo(Ne) / g)),
                    c,
                  ),
                  this.getScaleZoom(f / Jt(Ne), c),
                  { flyTo: !0 },
                ))
              : this._move(t, e)._moveEnd(!0);
          }
          return this._moveStart(!0, i.noMoveStart), ns.call(this), this;
        },
        flyToBounds: function (t, e) {
          var i = this._getBoundsCenterZoom(t, e);
          return this.flyTo(i.center, i.zoom, e);
        },
        setMaxBounds: function (t) {
          return (
            (t = V(t)),
            this.listens("moveend", this._panInsideMaxBounds) &&
              this.off("moveend", this._panInsideMaxBounds),
            t.isValid()
              ? ((this.options.maxBounds = t),
                this._loaded && this._panInsideMaxBounds(),
                this.on("moveend", this._panInsideMaxBounds))
              : ((this.options.maxBounds = null), this)
          );
        },
        setMinZoom: function (t) {
          var e = this.options.minZoom;
          return (
            (this.options.minZoom = t),
            this._loaded &&
            e !== t &&
            (this.fire("zoomlevelschange"),
            this.getZoom() < this.options.minZoom)
              ? this.setZoom(t)
              : this
          );
        },
        setMaxZoom: function (t) {
          var e = this.options.maxZoom;
          return (
            (this.options.maxZoom = t),
            this._loaded &&
            e !== t &&
            (this.fire("zoomlevelschange"),
            this.getZoom() > this.options.maxZoom)
              ? this.setZoom(t)
              : this
          );
        },
        panInsideBounds: function (t, e) {
          this._enforcingBounds = !0;
          var i = this.getCenter(),
            n = this._limitCenter(i, this._zoom, V(t));
          return (
            i.equals(n) || this.panTo(n, e), (this._enforcingBounds = !1), this
          );
        },
        panInside: function (t, e) {
          e = e || {};
          var i = E(e.paddingTopLeft || e.padding || [0, 0]),
            n = E(e.paddingBottomRight || e.padding || [0, 0]),
            o = this.project(this.getCenter()),
            a = this.project(t),
            c = this.getPixelBounds(),
            f = et([c.min.add(i), c.max.subtract(n)]),
            m = f.getSize();
          if (!f.contains(a)) {
            this._enforcingBounds = !0;
            var g = a.subtract(f.getCenter()),
              y = f.extend(a).getSize().subtract(m);
            (o.x += g.x < 0 ? -y.x : y.x),
              (o.y += g.y < 0 ? -y.y : y.y),
              this.panTo(this.unproject(o), e),
              (this._enforcingBounds = !1);
          }
          return this;
        },
        invalidateSize: function (t) {
          if (!this._loaded) return this;
          t = l({ animate: !1, pan: !0 }, t === !0 ? { animate: !0 } : t);
          var e = this.getSize();
          (this._sizeChanged = !0), (this._lastCenter = null);
          var i = this.getSize(),
            n = e.divideBy(2).round(),
            o = i.divideBy(2).round(),
            a = n.subtract(o);
          return !a.x && !a.y
            ? this
            : (t.animate && t.pan
                ? this.panBy(a)
                : (t.pan && this._rawPanBy(a),
                  this.fire("move"),
                  t.debounceMoveend
                    ? (clearTimeout(this._sizeTimer),
                      (this._sizeTimer = setTimeout(
                        _(this.fire, this, "moveend"),
                        200,
                      )))
                    : this.fire("moveend")),
              this.fire("resize", { oldSize: e, newSize: i }));
        },
        stop: function () {
          return (
            this.setZoom(this._limitZoom(this._zoom)),
            this.options.zoomSnap || this.fire("viewreset"),
            this._stop()
          );
        },
        locate: function (t) {
          if (
            ((t = this._locateOptions = l({ timeout: 1e4, watch: !1 }, t)),
            !("geolocation" in navigator))
          )
            return (
              this._handleGeolocationError({
                code: 0,
                message: "Geolocation not supported.",
              }),
              this
            );
          var e = _(this._handleGeolocationResponse, this),
            i = _(this._handleGeolocationError, this);
          return (
            t.watch
              ? (this._locationWatchId = navigator.geolocation.watchPosition(
                  e,
                  i,
                  t,
                ))
              : navigator.geolocation.getCurrentPosition(e, i, t),
            this
          );
        },
        stopLocate: function () {
          return (
            navigator.geolocation &&
              navigator.geolocation.clearWatch &&
              navigator.geolocation.clearWatch(this._locationWatchId),
            this._locateOptions && (this._locateOptions.setView = !1),
            this
          );
        },
        _handleGeolocationError: function (t) {
          if (this._container._leaflet_id) {
            var e = t.code,
              i =
                t.message ||
                (e === 1
                  ? "permission denied"
                  : e === 2
                    ? "position unavailable"
                    : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
              this.fire("locationerror", {
                code: e,
                message: "Geolocation error: " + i + ".",
              });
          }
        },
        _handleGeolocationResponse: function (t) {
          if (this._container._leaflet_id) {
            var e = t.coords.latitude,
              i = t.coords.longitude,
              n = new D(e, i),
              o = n.toBounds(t.coords.accuracy * 2),
              a = this._locateOptions;
            if (a.setView) {
              var c = this.getBoundsZoom(o);
              this.setView(n, a.maxZoom ? Math.min(c, a.maxZoom) : c);
            }
            var f = { latlng: n, bounds: o, timestamp: t.timestamp };
            for (var m in t.coords)
              typeof t.coords[m] == "number" && (f[m] = t.coords[m]);
            this.fire("locationfound", f);
          }
        },
        addHandler: function (t, e) {
          if (!e) return this;
          var i = (this[t] = new e(this));
          return this._handlers.push(i), this.options[t] && i.enable(), this;
        },
        remove: function () {
          if (
            (this._initEvents(!0),
            this.options.maxBounds &&
              this.off("moveend", this._panInsideMaxBounds),
            this._containerId !== this._container._leaflet_id)
          )
            throw new Error(
              "Map container is being reused by another instance",
            );
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch {
            (this._container._leaflet_id = void 0),
              (this._containerId = void 0);
          }
          this._locationWatchId !== void 0 && this.stopLocate(),
            this._stop(),
            $(this._mapPane),
            this._clearControlPos && this._clearControlPos(),
            this._resizeRequest &&
              (U(this._resizeRequest), (this._resizeRequest = null)),
            this._clearHandlers(),
            this._loaded && this.fire("unload");
          var t;
          for (t in this._layers) this._layers[t].remove();
          for (t in this._panes) $(this._panes[t]);
          return (
            (this._layers = []),
            (this._panes = []),
            delete this._mapPane,
            delete this._renderer,
            this
          );
        },
        createPane: function (t, e) {
          var i =
              "leaflet-pane" +
              (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
            n = F("div", i, e || this._mapPane);
          return t && (this._panes[t] = n), n;
        },
        getCenter: function () {
          return (
            this._checkIfLoaded(),
            this._lastCenter && !this._moved()
              ? this._lastCenter.clone()
              : this.layerPointToLatLng(this._getCenterLayerPoint())
          );
        },
        getZoom: function () {
          return this._zoom;
        },
        getBounds: function () {
          var t = this.getPixelBounds(),
            e = this.unproject(t.getBottomLeft()),
            i = this.unproject(t.getTopRight());
          return new it(e, i);
        },
        getMinZoom: function () {
          return this.options.minZoom === void 0
            ? this._layersMinZoom || 0
            : this.options.minZoom;
        },
        getMaxZoom: function () {
          return this.options.maxZoom === void 0
            ? this._layersMaxZoom === void 0
              ? 1 / 0
              : this._layersMaxZoom
            : this.options.maxZoom;
        },
        getBoundsZoom: function (t, e, i) {
          (t = V(t)), (i = E(i || [0, 0]));
          var n = this.getZoom() || 0,
            o = this.getMinZoom(),
            a = this.getMaxZoom(),
            c = t.getNorthWest(),
            f = t.getSouthEast(),
            m = this.getSize().subtract(i),
            g = et(this.project(f, n), this.project(c, n)).getSize(),
            y = T.any3d ? this.options.zoomSnap : 1,
            S = m.x / g.x,
            A = m.y / g.y,
            Q = e ? Math.max(S, A) : Math.min(S, A);
          return (
            (n = this.getScaleZoom(Q, n)),
            y &&
              ((n = Math.round(n / (y / 100)) * (y / 100)),
              (n = e ? Math.ceil(n / y) * y : Math.floor(n / y) * y)),
            Math.max(o, Math.min(a, n))
          );
        },
        getSize: function () {
          return (
            (!this._size || this._sizeChanged) &&
              ((this._size = new C(
                this._container.clientWidth || 0,
                this._container.clientHeight || 0,
              )),
              (this._sizeChanged = !1)),
            this._size.clone()
          );
        },
        getPixelBounds: function (t, e) {
          var i = this._getTopLeftPoint(t, e);
          return new j(i, i.add(this.getSize()));
        },
        getPixelOrigin: function () {
          return this._checkIfLoaded(), this._pixelOrigin;
        },
        getPixelWorldBounds: function (t) {
          return this.options.crs.getProjectedBounds(
            t === void 0 ? this.getZoom() : t,
          );
        },
        getPane: function (t) {
          return typeof t == "string" ? this._panes[t] : t;
        },
        getPanes: function () {
          return this._panes;
        },
        getContainer: function () {
          return this._container;
        },
        getZoomScale: function (t, e) {
          var i = this.options.crs;
          return (e = e === void 0 ? this._zoom : e), i.scale(t) / i.scale(e);
        },
        getScaleZoom: function (t, e) {
          var i = this.options.crs;
          e = e === void 0 ? this._zoom : e;
          var n = i.zoom(t * i.scale(e));
          return isNaN(n) ? 1 / 0 : n;
        },
        project: function (t, e) {
          return (
            (e = e === void 0 ? this._zoom : e),
            this.options.crs.latLngToPoint(I(t), e)
          );
        },
        unproject: function (t, e) {
          return (
            (e = e === void 0 ? this._zoom : e),
            this.options.crs.pointToLatLng(E(t), e)
          );
        },
        layerPointToLatLng: function (t) {
          var e = E(t).add(this.getPixelOrigin());
          return this.unproject(e);
        },
        latLngToLayerPoint: function (t) {
          var e = this.project(I(t))._round();
          return e._subtract(this.getPixelOrigin());
        },
        wrapLatLng: function (t) {
          return this.options.crs.wrapLatLng(I(t));
        },
        wrapLatLngBounds: function (t) {
          return this.options.crs.wrapLatLngBounds(V(t));
        },
        distance: function (t, e) {
          return this.options.crs.distance(I(t), I(e));
        },
        containerPointToLayerPoint: function (t) {
          return E(t).subtract(this._getMapPanePos());
        },
        layerPointToContainerPoint: function (t) {
          return E(t).add(this._getMapPanePos());
        },
        containerPointToLatLng: function (t) {
          var e = this.containerPointToLayerPoint(E(t));
          return this.layerPointToLatLng(e);
        },
        latLngToContainerPoint: function (t) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(I(t)));
        },
        mouseEventToContainerPoint: function (t) {
          return bn(t, this._container);
        },
        mouseEventToLayerPoint: function (t) {
          return this.containerPointToLayerPoint(
            this.mouseEventToContainerPoint(t),
          );
        },
        mouseEventToLatLng: function (t) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
        },
        _initContainer: function (t) {
          var e = (this._container = vn(t));
          if (e) {
            if (e._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          k(e, "scroll", this._onScroll, this), (this._containerId = p(e));
        },
        _initLayout: function () {
          var t = this._container;
          (this._fadeAnimated = this.options.fadeAnimation && T.any3d),
            O(
              t,
              "leaflet-container" +
                (T.touch ? " leaflet-touch" : "") +
                (T.retina ? " leaflet-retina" : "") +
                (T.ielt9 ? " leaflet-oldie" : "") +
                (T.safari ? " leaflet-safari" : "") +
                (this._fadeAnimated ? " leaflet-fade-anim" : ""),
            );
          var e = ae(t, "position");
          e !== "absolute" &&
            e !== "relative" &&
            e !== "fixed" &&
            e !== "sticky" &&
            (t.style.position = "relative"),
            this._initPanes(),
            this._initControlPos && this._initControlPos();
        },
        _initPanes: function () {
          var t = (this._panes = {});
          (this._paneRenderers = {}),
            (this._mapPane = this.createPane("mapPane", this._container)),
            G(this._mapPane, new C(0, 0)),
            this.createPane("tilePane"),
            this.createPane("overlayPane"),
            this.createPane("shadowPane"),
            this.createPane("markerPane"),
            this.createPane("tooltipPane"),
            this.createPane("popupPane"),
            this.options.markerZoomAnimation ||
              (O(t.markerPane, "leaflet-zoom-hide"),
              O(t.shadowPane, "leaflet-zoom-hide"));
        },
        _resetView: function (t, e, i) {
          G(this._mapPane, new C(0, 0));
          var n = !this._loaded;
          (this._loaded = !0),
            (e = this._limitZoom(e)),
            this.fire("viewprereset");
          var o = this._zoom !== e;
          this._moveStart(o, i)._move(t, e)._moveEnd(o),
            this.fire("viewreset"),
            n && this.fire("load");
        },
        _moveStart: function (t, e) {
          return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
        },
        _move: function (t, e, i, n) {
          e === void 0 && (e = this._zoom);
          var o = this._zoom !== e;
          return (
            (this._zoom = e),
            (this._lastCenter = t),
            (this._pixelOrigin = this._getNewPixelOrigin(t)),
            n
              ? i && i.pinch && this.fire("zoom", i)
              : ((o || (i && i.pinch)) && this.fire("zoom", i),
                this.fire("move", i)),
            this
          );
        },
        _moveEnd: function (t) {
          return t && this.fire("zoomend"), this.fire("moveend");
        },
        _stop: function () {
          return (
            U(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
          );
        },
        _rawPanBy: function (t) {
          G(this._mapPane, this._getMapPanePos().subtract(t));
        },
        _getZoomSpan: function () {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function () {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function () {
          if (!this._loaded) throw new Error("Set map center and zoom first.");
        },
        _initEvents: function (t) {
          (this._targets = {}), (this._targets[p(this._container)] = this);
          var e = t ? R : k;
          e(
            this._container,
            "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",
            this._handleDOMEvent,
            this,
          ),
            this.options.trackResize &&
              e(window, "resize", this._onResize, this),
            T.any3d &&
              this.options.transform3DLimit &&
              (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function () {
          U(this._resizeRequest),
            (this._resizeRequest = Z(function () {
              this.invalidateSize({ debounceMoveend: !0 });
            }, this));
        },
        _onScroll: function () {
          (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
        },
        _onMoveEnd: function () {
          var t = this._getMapPanePos();
          Math.max(Math.abs(t.x), Math.abs(t.y)) >=
            this.options.transform3DLimit &&
            this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function (t, e) {
          for (
            var i = [],
              n,
              o = e === "mouseout" || e === "mouseover",
              a = t.target || t.srcElement,
              c = !1;
            a;

          ) {
            if (
              ((n = this._targets[p(a)]),
              n &&
                (e === "click" || e === "preclick") &&
                this._draggableMoved(n))
            ) {
              c = !0;
              break;
            }
            if (
              (n && n.listens(e, !0) && ((o && !vi(a, t)) || (i.push(n), o))) ||
              a === this._container
            )
              break;
            a = a.parentNode;
          }
          return (
            !i.length && !c && !o && this.listens(e, !0) && (i = [this]), i
          );
        },
        _isClickDisabled: function (t) {
          for (; t && t !== this._container; ) {
            if (t._leaflet_disable_click) return !0;
            t = t.parentNode;
          }
        },
        _handleDOMEvent: function (t) {
          var e = t.target || t.srcElement;
          if (
            !(
              !this._loaded ||
              e._leaflet_disable_events ||
              (t.type === "click" && this._isClickDisabled(e))
            )
          ) {
            var i = t.type;
            i === "mousedown" && fi(e), this._fireDOMEvent(t, i);
          }
        },
        _mouseEvents: [
          "click",
          "dblclick",
          "mouseover",
          "mouseout",
          "contextmenu",
        ],
        _fireDOMEvent: function (t, e, i) {
          if (t.type === "click") {
            var n = l({}, t);
            (n.type = "preclick"), this._fireDOMEvent(n, n.type, i);
          }
          var o = this._findEventTargets(t, e);
          if (i) {
            for (var a = [], c = 0; c < i.length; c++)
              i[c].listens(e, !0) && a.push(i[c]);
            o = a.concat(o);
          }
          if (o.length) {
            e === "contextmenu" && X(t);
            var f = o[0],
              m = { originalEvent: t };
            if (
              t.type !== "keypress" &&
              t.type !== "keydown" &&
              t.type !== "keyup"
            ) {
              var g = f.getLatLng && (!f._radius || f._radius <= 10);
              (m.containerPoint = g
                ? this.latLngToContainerPoint(f.getLatLng())
                : this.mouseEventToContainerPoint(t)),
                (m.layerPoint = this.containerPointToLayerPoint(
                  m.containerPoint,
                )),
                (m.latlng = g
                  ? f.getLatLng()
                  : this.layerPointToLatLng(m.layerPoint));
            }
            for (c = 0; c < o.length; c++)
              if (
                (o[c].fire(e, m, !0),
                m.originalEvent._stopped ||
                  (o[c].options.bubblingMouseEvents === !1 &&
                    At(this._mouseEvents, e) !== -1))
              )
                return;
          }
        },
        _draggableMoved: function (t) {
          return (
            (t = t.dragging && t.dragging.enabled() ? t : this),
            (t.dragging && t.dragging.moved()) ||
              (this.boxZoom && this.boxZoom.moved())
          );
        },
        _clearHandlers: function () {
          for (var t = 0, e = this._handlers.length; t < e; t++)
            this._handlers[t].disable();
        },
        whenReady: function (t, e) {
          return (
            this._loaded
              ? t.call(e || this, { target: this })
              : this.on("load", t, e),
            this
          );
        },
        _getMapPanePos: function () {
          return Bt(this._mapPane) || new C(0, 0);
        },
        _moved: function () {
          var t = this._getMapPanePos();
          return t && !t.equals([0, 0]);
        },
        _getTopLeftPoint: function (t, e) {
          var i =
            t && e !== void 0
              ? this._getNewPixelOrigin(t, e)
              : this.getPixelOrigin();
          return i.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function (t, e) {
          var i = this.getSize()._divideBy(2);
          return this.project(t, e)
            ._subtract(i)
            ._add(this._getMapPanePos())
            ._round();
        },
        _latLngToNewLayerPoint: function (t, e, i) {
          var n = this._getNewPixelOrigin(i, e);
          return this.project(t, e)._subtract(n);
        },
        _latLngBoundsToNewLayerBounds: function (t, e, i) {
          var n = this._getNewPixelOrigin(i, e);
          return et([
            this.project(t.getSouthWest(), e)._subtract(n),
            this.project(t.getNorthWest(), e)._subtract(n),
            this.project(t.getSouthEast(), e)._subtract(n),
            this.project(t.getNorthEast(), e)._subtract(n),
          ]);
        },
        _getCenterLayerPoint: function () {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        _getCenterOffset: function (t) {
          return this.latLngToLayerPoint(t).subtract(
            this._getCenterLayerPoint(),
          );
        },
        _limitCenter: function (t, e, i) {
          if (!i) return t;
          var n = this.project(t, e),
            o = this.getSize().divideBy(2),
            a = new j(n.subtract(o), n.add(o)),
            c = this._getBoundsOffset(a, i, e);
          return Math.abs(c.x) <= 1 && Math.abs(c.y) <= 1
            ? t
            : this.unproject(n.add(c), e);
        },
        _limitOffset: function (t, e) {
          if (!e) return t;
          var i = this.getPixelBounds(),
            n = new j(i.min.add(t), i.max.add(t));
          return t.add(this._getBoundsOffset(n, e));
        },
        _getBoundsOffset: function (t, e, i) {
          var n = et(
              this.project(e.getNorthEast(), i),
              this.project(e.getSouthWest(), i),
            ),
            o = n.min.subtract(t.min),
            a = n.max.subtract(t.max),
            c = this._rebound(o.x, -a.x),
            f = this._rebound(o.y, -a.y);
          return new C(c, f);
        },
        _rebound: function (t, e) {
          return t + e > 0
            ? Math.round(t - e) / 2
            : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
        },
        _limitZoom: function (t) {
          var e = this.getMinZoom(),
            i = this.getMaxZoom(),
            n = T.any3d ? this.options.zoomSnap : 1;
          return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
        },
        _onPanTransitionStep: function () {
          this.fire("move");
        },
        _onPanTransitionEnd: function () {
          W(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function (t, e) {
          var i = this._getCenterOffset(t)._trunc();
          return (e && e.animate) !== !0 && !this.getSize().contains(i)
            ? !1
            : (this.panBy(i, e), !0);
        },
        _createAnimProxy: function () {
          var t = (this._proxy = F(
            "div",
            "leaflet-proxy leaflet-zoom-animated",
          ));
          this._panes.mapPane.appendChild(t),
            this.on(
              "zoomanim",
              function (e) {
                var i = oi,
                  n = this._proxy.style[i];
                It(
                  this._proxy,
                  this.project(e.center, e.zoom),
                  this.getZoomScale(e.zoom, 1),
                ),
                  n === this._proxy.style[i] &&
                    this._animatingZoom &&
                    this._onZoomTransitionEnd();
              },
              this,
            ),
            this.on("load moveend", this._animMoveEnd, this),
            this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function () {
          $(this._proxy),
            this.off("load moveend", this._animMoveEnd, this),
            delete this._proxy;
        },
        _animMoveEnd: function () {
          var t = this.getCenter(),
            e = this.getZoom();
          It(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
        },
        _catchTransitionEnd: function (t) {
          this._animatingZoom &&
            t.propertyName.indexOf("transform") >= 0 &&
            this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function () {
          return !this._container.getElementsByClassName(
            "leaflet-zoom-animated",
          ).length;
        },
        _tryAnimatedZoom: function (t, e, i) {
          if (this._animatingZoom) return !0;
          if (
            ((i = i || {}),
            !this._zoomAnimated ||
              i.animate === !1 ||
              this._nothingToAnimate() ||
              Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
          )
            return !1;
          var n = this.getZoomScale(e),
            o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
          return i.animate !== !0 && !this.getSize().contains(o)
            ? !1
            : (Z(function () {
                this._moveStart(!0, i.noMoveStart || !1)._animateZoom(t, e, !0);
              }, this),
              !0);
        },
        _animateZoom: function (t, e, i, n) {
          this._mapPane &&
            (i &&
              ((this._animatingZoom = !0),
              (this._animateToCenter = t),
              (this._animateToZoom = e),
              O(this._mapPane, "leaflet-zoom-anim")),
            this.fire("zoomanim", { center: t, zoom: e, noUpdate: n }),
            this._tempFireZoomEvent ||
              (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            setTimeout(_(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function () {
          this._animatingZoom &&
            (this._mapPane && W(this._mapPane, "leaflet-zoom-anim"),
            (this._animatingZoom = !1),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            this._tempFireZoomEvent && this.fire("zoom"),
            delete this._tempFireZoomEvent,
            this.fire("move"),
            this._moveEnd(!0));
        },
      });
    function fo(t, e) {
      return new B(t, e);
    }
    var ft = ht.extend({
        options: { position: "topright" },
        initialize: function (t) {
          z(this, t);
        },
        getPosition: function () {
          return this.options.position;
        },
        setPosition: function (t) {
          var e = this._map;
          return (
            e && e.removeControl(this),
            (this.options.position = t),
            e && e.addControl(this),
            this
          );
        },
        getContainer: function () {
          return this._container;
        },
        addTo: function (t) {
          this.remove(), (this._map = t);
          var e = (this._container = this.onAdd(t)),
            i = this.getPosition(),
            n = t._controlCorners[i];
          return (
            O(e, "leaflet-control"),
            i.indexOf("bottom") !== -1
              ? n.insertBefore(e, n.firstChild)
              : n.appendChild(e),
            this._map.on("unload", this.remove, this),
            this
          );
        },
        remove: function () {
          return this._map
            ? ($(this._container),
              this.onRemove && this.onRemove(this._map),
              this._map.off("unload", this.remove, this),
              (this._map = null),
              this)
            : this;
        },
        _refocusOnMap: function (t) {
          this._map &&
            t &&
            t.screenX > 0 &&
            t.screenY > 0 &&
            this._map.getContainer().focus();
        },
      }),
      fe = function (t) {
        return new ft(t);
      };
    B.include({
      addControl: function (t) {
        return t.addTo(this), this;
      },
      removeControl: function (t) {
        return t.remove(), this;
      },
      _initControlPos: function () {
        var t = (this._controlCorners = {}),
          e = "leaflet-",
          i = (this._controlContainer = F(
            "div",
            e + "control-container",
            this._container,
          ));
        function n(o, a) {
          var c = e + o + " " + e + a;
          t[o + a] = F("div", c, i);
        }
        n("top", "left"),
          n("top", "right"),
          n("bottom", "left"),
          n("bottom", "right");
      },
      _clearControlPos: function () {
        for (var t in this._controlCorners) $(this._controlCorners[t]);
        $(this._controlContainer),
          delete this._controlCorners,
          delete this._controlContainer;
      },
    });
    var Tn = ft.extend({
        options: {
          collapsed: !0,
          position: "topright",
          autoZIndex: !0,
          hideSingleBase: !1,
          sortLayers: !1,
          sortFunction: function (t, e, i, n) {
            return i < n ? -1 : n < i ? 1 : 0;
          },
        },
        initialize: function (t, e, i) {
          z(this, i),
            (this._layerControlInputs = []),
            (this._layers = []),
            (this._lastZIndex = 0),
            (this._handlingClick = !1),
            (this._preventClick = !1);
          for (var n in t) this._addLayer(t[n], n);
          for (n in e) this._addLayer(e[n], n, !0);
        },
        onAdd: function (t) {
          this._initLayout(),
            this._update(),
            (this._map = t),
            t.on("zoomend", this._checkDisabledLayers, this);
          for (var e = 0; e < this._layers.length; e++)
            this._layers[e].layer.on("add remove", this._onLayerChange, this);
          return this._container;
        },
        addTo: function (t) {
          return ft.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
        },
        onRemove: function () {
          this._map.off("zoomend", this._checkDisabledLayers, this);
          for (var t = 0; t < this._layers.length; t++)
            this._layers[t].layer.off("add remove", this._onLayerChange, this);
        },
        addBaseLayer: function (t, e) {
          return this._addLayer(t, e), this._map ? this._update() : this;
        },
        addOverlay: function (t, e) {
          return this._addLayer(t, e, !0), this._map ? this._update() : this;
        },
        removeLayer: function (t) {
          t.off("add remove", this._onLayerChange, this);
          var e = this._getLayer(p(t));
          return (
            e && this._layers.splice(this._layers.indexOf(e), 1),
            this._map ? this._update() : this
          );
        },
        expand: function () {
          O(this._container, "leaflet-control-layers-expanded"),
            (this._section.style.height = null);
          var t = this._map.getSize().y - (this._container.offsetTop + 50);
          return (
            t < this._section.clientHeight
              ? (O(this._section, "leaflet-control-layers-scrollbar"),
                (this._section.style.height = t + "px"))
              : W(this._section, "leaflet-control-layers-scrollbar"),
            this._checkDisabledLayers(),
            this
          );
        },
        collapse: function () {
          return W(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function () {
          var t = "leaflet-control-layers",
            e = (this._container = F("div", t)),
            i = this.options.collapsed;
          e.setAttribute("aria-haspopup", !0), ce(e), gi(e);
          var n = (this._section = F("section", t + "-list"));
          i &&
            (this._map.on("click", this.collapse, this),
            k(
              e,
              { mouseenter: this._expandSafely, mouseleave: this.collapse },
              this,
            ));
          var o = (this._layersLink = F("a", t + "-toggle", e));
          (o.href = "#"),
            (o.title = "Layers"),
            o.setAttribute("role", "button"),
            k(
              o,
              {
                keydown: function (a) {
                  a.keyCode === 13 && this._expandSafely();
                },
                click: function (a) {
                  X(a), this._expandSafely();
                },
              },
              this,
            ),
            i || this.expand(),
            (this._baseLayersList = F("div", t + "-base", n)),
            (this._separator = F("div", t + "-separator", n)),
            (this._overlaysList = F("div", t + "-overlays", n)),
            e.appendChild(n);
        },
        _getLayer: function (t) {
          for (var e = 0; e < this._layers.length; e++)
            if (this._layers[e] && p(this._layers[e].layer) === t)
              return this._layers[e];
        },
        _addLayer: function (t, e, i) {
          this._map && t.on("add remove", this._onLayerChange, this),
            this._layers.push({ layer: t, name: e, overlay: i }),
            this.options.sortLayers &&
              this._layers.sort(
                _(function (n, o) {
                  return this.options.sortFunction(
                    n.layer,
                    o.layer,
                    n.name,
                    o.name,
                  );
                }, this),
              ),
            this.options.autoZIndex &&
              t.setZIndex &&
              (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
            this._expandIfNotCollapsed();
        },
        _update: function () {
          if (!this._container) return this;
          be(this._baseLayersList),
            be(this._overlaysList),
            (this._layerControlInputs = []);
          var t,
            e,
            i,
            n,
            o = 0;
          for (i = 0; i < this._layers.length; i++)
            (n = this._layers[i]),
              this._addItem(n),
              (e = e || n.overlay),
              (t = t || !n.overlay),
              (o += n.overlay ? 0 : 1);
          return (
            this.options.hideSingleBase &&
              ((t = t && o > 1),
              (this._baseLayersList.style.display = t ? "" : "none")),
            (this._separator.style.display = e && t ? "" : "none"),
            this
          );
        },
        _onLayerChange: function (t) {
          this._handlingClick || this._update();
          var e = this._getLayer(p(t.target)),
            i = e.overlay
              ? t.type === "add"
                ? "overlayadd"
                : "overlayremove"
              : t.type === "add"
                ? "baselayerchange"
                : null;
          i && this._map.fire(i, e);
        },
        _createRadioElement: function (t, e) {
          var i =
              '<input type="radio" class="leaflet-control-layers-selector" name="' +
              t +
              '"' +
              (e ? ' checked="checked"' : "") +
              "/>",
            n = document.createElement("div");
          return (n.innerHTML = i), n.firstChild;
        },
        _addItem: function (t) {
          var e = document.createElement("label"),
            i = this._map.hasLayer(t.layer),
            n;
          t.overlay
            ? ((n = document.createElement("input")),
              (n.type = "checkbox"),
              (n.className = "leaflet-control-layers-selector"),
              (n.defaultChecked = i))
            : (n = this._createRadioElement(
                "leaflet-base-layers_" + p(this),
                i,
              )),
            this._layerControlInputs.push(n),
            (n.layerId = p(t.layer)),
            k(n, "click", this._onInputClick, this);
          var o = document.createElement("span");
          o.innerHTML = " " + t.name;
          var a = document.createElement("span");
          e.appendChild(a), a.appendChild(n), a.appendChild(o);
          var c = t.overlay ? this._overlaysList : this._baseLayersList;
          return c.appendChild(e), this._checkDisabledLayers(), e;
        },
        _onInputClick: function () {
          if (!this._preventClick) {
            var t = this._layerControlInputs,
              e,
              i,
              n = [],
              o = [];
            this._handlingClick = !0;
            for (var a = t.length - 1; a >= 0; a--)
              (e = t[a]),
                (i = this._getLayer(e.layerId).layer),
                e.checked ? n.push(i) : e.checked || o.push(i);
            for (a = 0; a < o.length; a++)
              this._map.hasLayer(o[a]) && this._map.removeLayer(o[a]);
            for (a = 0; a < n.length; a++)
              this._map.hasLayer(n[a]) || this._map.addLayer(n[a]);
            (this._handlingClick = !1), this._refocusOnMap();
          }
        },
        _checkDisabledLayers: function () {
          for (
            var t = this._layerControlInputs,
              e,
              i,
              n = this._map.getZoom(),
              o = t.length - 1;
            o >= 0;
            o--
          )
            (e = t[o]),
              (i = this._getLayer(e.layerId).layer),
              (e.disabled =
                (i.options.minZoom !== void 0 && n < i.options.minZoom) ||
                (i.options.maxZoom !== void 0 && n > i.options.maxZoom));
        },
        _expandIfNotCollapsed: function () {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expandSafely: function () {
          var t = this._section;
          (this._preventClick = !0), k(t, "click", X), this.expand();
          var e = this;
          setTimeout(function () {
            R(t, "click", X), (e._preventClick = !1);
          });
        },
      }),
      _o = function (t, e, i) {
        return new Tn(t, e, i);
      },
      yi = ft.extend({
        options: {
          position: "topleft",
          zoomInText: '<span aria-hidden="true">+</span>',
          zoomInTitle: "Zoom in",
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          zoomOutTitle: "Zoom out",
        },
        onAdd: function (t) {
          var e = "leaflet-control-zoom",
            i = F("div", e + " leaflet-bar"),
            n = this.options;
          return (
            (this._zoomInButton = this._createButton(
              n.zoomInText,
              n.zoomInTitle,
              e + "-in",
              i,
              this._zoomIn,
            )),
            (this._zoomOutButton = this._createButton(
              n.zoomOutText,
              n.zoomOutTitle,
              e + "-out",
              i,
              this._zoomOut,
            )),
            this._updateDisabled(),
            t.on("zoomend zoomlevelschange", this._updateDisabled, this),
            i
          );
        },
        onRemove: function (t) {
          t.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function () {
          return (this._disabled = !0), this._updateDisabled(), this;
        },
        enable: function () {
          return (this._disabled = !1), this._updateDisabled(), this;
        },
        _zoomIn: function (t) {
          !this._disabled &&
            this._map._zoom < this._map.getMaxZoom() &&
            this._map.zoomIn(
              this._map.options.zoomDelta * (t.shiftKey ? 3 : 1),
            );
        },
        _zoomOut: function (t) {
          !this._disabled &&
            this._map._zoom > this._map.getMinZoom() &&
            this._map.zoomOut(
              this._map.options.zoomDelta * (t.shiftKey ? 3 : 1),
            );
        },
        _createButton: function (t, e, i, n, o) {
          var a = F("a", i, n);
          return (
            (a.innerHTML = t),
            (a.href = "#"),
            (a.title = e),
            a.setAttribute("role", "button"),
            a.setAttribute("aria-label", e),
            ce(a),
            k(a, "click", Nt),
            k(a, "click", o, this),
            k(a, "click", this._refocusOnMap, this),
            a
          );
        },
        _updateDisabled: function () {
          var t = this._map,
            e = "leaflet-disabled";
          W(this._zoomInButton, e),
            W(this._zoomOutButton, e),
            this._zoomInButton.setAttribute("aria-disabled", "false"),
            this._zoomOutButton.setAttribute("aria-disabled", "false"),
            (this._disabled || t._zoom === t.getMinZoom()) &&
              (O(this._zoomOutButton, e),
              this._zoomOutButton.setAttribute("aria-disabled", "true")),
            (this._disabled || t._zoom === t.getMaxZoom()) &&
              (O(this._zoomInButton, e),
              this._zoomInButton.setAttribute("aria-disabled", "true"));
        },
      });
    B.mergeOptions({ zoomControl: !0 }),
      B.addInitHook(function () {
        this.options.zoomControl &&
          ((this.zoomControl = new yi()), this.addControl(this.zoomControl));
      });
    var mo = function (t) {
        return new yi(t);
      },
      Sn = ft.extend({
        options: {
          position: "bottomleft",
          maxWidth: 100,
          metric: !0,
          imperial: !0,
        },
        onAdd: function (t) {
          var e = "leaflet-control-scale",
            i = F("div", e),
            n = this.options;
          return (
            this._addScales(n, e + "-line", i),
            t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this),
            t.whenReady(this._update, this),
            i
          );
        },
        onRemove: function (t) {
          t.off(
            this.options.updateWhenIdle ? "moveend" : "move",
            this._update,
            this,
          );
        },
        _addScales: function (t, e, i) {
          t.metric && (this._mScale = F("div", e, i)),
            t.imperial && (this._iScale = F("div", e, i));
        },
        _update: function () {
          var t = this._map,
            e = t.getSize().y / 2,
            i = t.distance(
              t.containerPointToLatLng([0, e]),
              t.containerPointToLatLng([this.options.maxWidth, e]),
            );
          this._updateScales(i);
        },
        _updateScales: function (t) {
          this.options.metric && t && this._updateMetric(t),
            this.options.imperial && t && this._updateImperial(t);
        },
        _updateMetric: function (t) {
          var e = this._getRoundNum(t),
            i = e < 1e3 ? e + " m" : e / 1e3 + " km";
          this._updateScale(this._mScale, i, e / t);
        },
        _updateImperial: function (t) {
          var e = t * 3.2808399,
            i,
            n,
            o;
          e > 5280
            ? ((i = e / 5280),
              (n = this._getRoundNum(i)),
              this._updateScale(this._iScale, n + " mi", n / i))
            : ((o = this._getRoundNum(e)),
              this._updateScale(this._iScale, o + " ft", o / e));
        },
        _updateScale: function (t, e, i) {
          (t.style.width = Math.round(this.options.maxWidth * i) + "px"),
            (t.innerHTML = e);
        },
        _getRoundNum: function (t) {
          var e = Math.pow(10, (Math.floor(t) + "").length - 1),
            i = t / e;
          return (
            (i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1), e * i
          );
        },
      }),
      po = function (t) {
        return new Sn(t);
      },
      go =
        '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
      xi = ft.extend({
        options: {
          position: "bottomright",
          prefix:
            '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
            (T.inlineSvg ? go + " " : "") +
            "Leaflet</a>",
        },
        initialize: function (t) {
          z(this, t), (this._attributions = {});
        },
        onAdd: function (t) {
          (t.attributionControl = this),
            (this._container = F("div", "leaflet-control-attribution")),
            ce(this._container);
          for (var e in t._layers)
            t._layers[e].getAttribution &&
              this.addAttribution(t._layers[e].getAttribution());
          return (
            this._update(),
            t.on("layeradd", this._addAttribution, this),
            this._container
          );
        },
        onRemove: function (t) {
          t.off("layeradd", this._addAttribution, this);
        },
        _addAttribution: function (t) {
          t.layer.getAttribution &&
            (this.addAttribution(t.layer.getAttribution()),
            t.layer.once(
              "remove",
              function () {
                this.removeAttribution(t.layer.getAttribution());
              },
              this,
            ));
        },
        setPrefix: function (t) {
          return (this.options.prefix = t), this._update(), this;
        },
        addAttribution: function (t) {
          return t
            ? (this._attributions[t] || (this._attributions[t] = 0),
              this._attributions[t]++,
              this._update(),
              this)
            : this;
        },
        removeAttribution: function (t) {
          return t
            ? (this._attributions[t] &&
                (this._attributions[t]--, this._update()),
              this)
            : this;
        },
        _update: function () {
          if (this._map) {
            var t = [];
            for (var e in this._attributions)
              this._attributions[e] && t.push(e);
            var i = [];
            this.options.prefix && i.push(this.options.prefix),
              t.length && i.push(t.join(", ")),
              (this._container.innerHTML = i.join(
                ' <span aria-hidden="true">|</span> ',
              ));
          }
        },
      });
    B.mergeOptions({ attributionControl: !0 }),
      B.addInitHook(function () {
        this.options.attributionControl && new xi().addTo(this);
      });
    var vo = function (t) {
      return new xi(t);
    };
    (ft.Layers = Tn),
      (ft.Zoom = yi),
      (ft.Scale = Sn),
      (ft.Attribution = xi),
      (fe.layers = _o),
      (fe.zoom = mo),
      (fe.scale = po),
      (fe.attribution = vo);
    var pt = ht.extend({
      initialize: function (t) {
        this._map = t;
      },
      enable: function () {
        return this._enabled
          ? this
          : ((this._enabled = !0), this.addHooks(), this);
      },
      disable: function () {
        return this._enabled
          ? ((this._enabled = !1), this.removeHooks(), this)
          : this;
      },
      enabled: function () {
        return !!this._enabled;
      },
    });
    pt.addTo = function (t, e) {
      return t.addHandler(e, this), this;
    };
    var yo = { Events: at },
      En = T.touch ? "touchstart mousedown" : "mousedown",
      Mt = ne.extend({
        options: { clickTolerance: 3 },
        initialize: function (t, e, i, n) {
          z(this, n),
            (this._element = t),
            (this._dragStartTarget = e || t),
            (this._preventOutline = i);
        },
        enable: function () {
          this._enabled ||
            (k(this._dragStartTarget, En, this._onDown, this),
            (this._enabled = !0));
        },
        disable: function () {
          this._enabled &&
            (Mt._dragging === this && this.finishDrag(!0),
            R(this._dragStartTarget, En, this._onDown, this),
            (this._enabled = !1),
            (this._moved = !1));
        },
        _onDown: function (t) {
          if (
            this._enabled &&
            ((this._moved = !1), !ri(this._element, "leaflet-zoom-anim"))
          ) {
            if (t.touches && t.touches.length !== 1) {
              Mt._dragging === this && this.finishDrag();
              return;
            }
            if (
              !(
                Mt._dragging ||
                t.shiftKey ||
                (t.which !== 1 && t.button !== 1 && !t.touches)
              ) &&
              ((Mt._dragging = this),
              this._preventOutline && fi(this._element),
              ui(),
              he(),
              !this._moving)
            ) {
              this.fire("down");
              var e = t.touches ? t.touches[0] : t,
                i = yn(this._element);
              (this._startPoint = new C(e.clientX, e.clientY)),
                (this._startPos = Bt(this._element)),
                (this._parentScale = di(i));
              var n = t.type === "mousedown";
              k(document, n ? "mousemove" : "touchmove", this._onMove, this),
                k(
                  document,
                  n ? "mouseup" : "touchend touchcancel",
                  this._onUp,
                  this,
                );
            }
          }
        },
        _onMove: function (t) {
          if (this._enabled) {
            if (t.touches && t.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var e = t.touches && t.touches.length === 1 ? t.touches[0] : t,
              i = new C(e.clientX, e.clientY)._subtract(this._startPoint);
            (!i.x && !i.y) ||
              Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance ||
              ((i.x /= this._parentScale.x),
              (i.y /= this._parentScale.y),
              X(t),
              this._moved ||
                (this.fire("dragstart"),
                (this._moved = !0),
                O(document.body, "leaflet-dragging"),
                (this._lastTarget = t.target || t.srcElement),
                window.SVGElementInstance &&
                  this._lastTarget instanceof window.SVGElementInstance &&
                  (this._lastTarget = this._lastTarget.correspondingUseElement),
                O(this._lastTarget, "leaflet-drag-target")),
              (this._newPos = this._startPos.add(i)),
              (this._moving = !0),
              (this._lastEvent = t),
              this._updatePosition());
          }
        },
        _updatePosition: function () {
          var t = { originalEvent: this._lastEvent };
          this.fire("predrag", t),
            G(this._element, this._newPos),
            this.fire("drag", t);
        },
        _onUp: function () {
          this._enabled && this.finishDrag();
        },
        finishDrag: function (t) {
          W(document.body, "leaflet-dragging"),
            this._lastTarget &&
              (W(this._lastTarget, "leaflet-drag-target"),
              (this._lastTarget = null)),
            R(document, "mousemove touchmove", this._onMove, this),
            R(document, "mouseup touchend touchcancel", this._onUp, this),
            li(),
            ue();
          var e = this._moved && this._moving;
          (this._moving = !1),
            (Mt._dragging = !1),
            e &&
              this.fire("dragend", {
                noInertia: t,
                distance: this._newPos.distanceTo(this._startPos),
              });
        },
      });
    function Cn(t, e, i) {
      var n,
        o = [1, 4, 2, 8],
        a,
        c,
        f,
        m,
        g,
        y,
        S,
        A;
      for (a = 0, y = t.length; a < y; a++) t[a]._code = Dt(t[a], e);
      for (f = 0; f < 4; f++) {
        for (S = o[f], n = [], a = 0, y = t.length, c = y - 1; a < y; c = a++)
          (m = t[a]),
            (g = t[c]),
            m._code & S
              ? g._code & S ||
                ((A = Ee(g, m, S, e, i)), (A._code = Dt(A, e)), n.push(A))
              : (g._code & S &&
                  ((A = Ee(g, m, S, e, i)), (A._code = Dt(A, e)), n.push(A)),
                n.push(m));
        t = n;
      }
      return t;
    }
    function kn(t, e) {
      var i, n, o, a, c, f, m, g, y;
      if (!t || t.length === 0) throw new Error("latlngs not passed");
      lt(t) ||
        (console.warn("latlngs are not flat! Only the first ring will be used"),
        (t = t[0]));
      var S = I([0, 0]),
        A = V(t),
        Q =
          A.getNorthWest().distanceTo(A.getSouthWest()) *
          A.getNorthEast().distanceTo(A.getNorthWest());
      Q < 1700 && (S = wi(t));
      var Y = t.length,
        ct = [];
      for (i = 0; i < Y; i++) {
        var nt = I(t[i]);
        ct.push(e.project(I([nt.lat - S.lat, nt.lng - S.lng])));
      }
      for (f = m = g = 0, i = 0, n = Y - 1; i < Y; n = i++)
        (o = ct[i]),
          (a = ct[n]),
          (c = o.y * a.x - a.y * o.x),
          (m += (o.x + a.x) * c),
          (g += (o.y + a.y) * c),
          (f += c * 3);
      f === 0 ? (y = ct[0]) : (y = [m / f, g / f]);
      var Jt = e.unproject(E(y));
      return I([Jt.lat + S.lat, Jt.lng + S.lng]);
    }
    function wi(t) {
      for (var e = 0, i = 0, n = 0, o = 0; o < t.length; o++) {
        var a = I(t[o]);
        (e += a.lat), (i += a.lng), n++;
      }
      return I([e / n, i / n]);
    }
    var xo = {
      __proto__: null,
      clipPolygon: Cn,
      polygonCenter: kn,
      centroid: wi,
    };
    function Mn(t, e) {
      if (!e || !t.length) return t.slice();
      var i = e * e;
      return (t = Po(t, i)), (t = bo(t, i)), t;
    }
    function On(t, e, i) {
      return Math.sqrt(de(t, e, i, !0));
    }
    function wo(t, e, i) {
      return de(t, e, i);
    }
    function bo(t, e) {
      var i = t.length,
        n = typeof Uint8Array < "u" ? Uint8Array : Array,
        o = new n(i);
      (o[0] = o[i - 1] = 1), bi(t, o, e, 0, i - 1);
      var a,
        c = [];
      for (a = 0; a < i; a++) o[a] && c.push(t[a]);
      return c;
    }
    function bi(t, e, i, n, o) {
      var a = 0,
        c,
        f,
        m;
      for (f = n + 1; f <= o - 1; f++)
        (m = de(t[f], t[n], t[o], !0)), m > a && ((c = f), (a = m));
      a > i && ((e[c] = 1), bi(t, e, i, n, c), bi(t, e, i, c, o));
    }
    function Po(t, e) {
      for (var i = [t[0]], n = 1, o = 0, a = t.length; n < a; n++)
        Lo(t[n], t[o]) > e && (i.push(t[n]), (o = n));
      return o < a - 1 && i.push(t[a - 1]), i;
    }
    var zn;
    function An(t, e, i, n, o) {
      var a = n ? zn : Dt(t, i),
        c = Dt(e, i),
        f,
        m,
        g;
      for (zn = c; ; ) {
        if (!(a | c)) return [t, e];
        if (a & c) return !1;
        (f = a || c),
          (m = Ee(t, e, f, i, o)),
          (g = Dt(m, i)),
          f === a ? ((t = m), (a = g)) : ((e = m), (c = g));
      }
    }
    function Ee(t, e, i, n, o) {
      var a = e.x - t.x,
        c = e.y - t.y,
        f = n.min,
        m = n.max,
        g,
        y;
      return (
        i & 8
          ? ((g = t.x + (a * (m.y - t.y)) / c), (y = m.y))
          : i & 4
            ? ((g = t.x + (a * (f.y - t.y)) / c), (y = f.y))
            : i & 2
              ? ((g = m.x), (y = t.y + (c * (m.x - t.x)) / a))
              : i & 1 && ((g = f.x), (y = t.y + (c * (f.x - t.x)) / a)),
        new C(g, y, o)
      );
    }
    function Dt(t, e) {
      var i = 0;
      return (
        t.x < e.min.x ? (i |= 1) : t.x > e.max.x && (i |= 2),
        t.y < e.min.y ? (i |= 4) : t.y > e.max.y && (i |= 8),
        i
      );
    }
    function Lo(t, e) {
      var i = e.x - t.x,
        n = e.y - t.y;
      return i * i + n * n;
    }
    function de(t, e, i, n) {
      var o = e.x,
        a = e.y,
        c = i.x - o,
        f = i.y - a,
        m = c * c + f * f,
        g;
      return (
        m > 0 &&
          ((g = ((t.x - o) * c + (t.y - a) * f) / m),
          g > 1
            ? ((o = i.x), (a = i.y))
            : g > 0 && ((o += c * g), (a += f * g))),
        (c = t.x - o),
        (f = t.y - a),
        n ? c * c + f * f : new C(o, a)
      );
    }
    function lt(t) {
      return !tt(t[0]) || (typeof t[0][0] != "object" && typeof t[0][0] < "u");
    }
    function Zn(t) {
      return (
        console.warn(
          "Deprecated use of _flat, please use L.LineUtil.isFlat instead.",
        ),
        lt(t)
      );
    }
    function In(t, e) {
      var i, n, o, a, c, f, m, g;
      if (!t || t.length === 0) throw new Error("latlngs not passed");
      lt(t) ||
        (console.warn("latlngs are not flat! Only the first ring will be used"),
        (t = t[0]));
      var y = I([0, 0]),
        S = V(t),
        A =
          S.getNorthWest().distanceTo(S.getSouthWest()) *
          S.getNorthEast().distanceTo(S.getNorthWest());
      A < 1700 && (y = wi(t));
      var Q = t.length,
        Y = [];
      for (i = 0; i < Q; i++) {
        var ct = I(t[i]);
        Y.push(e.project(I([ct.lat - y.lat, ct.lng - y.lng])));
      }
      for (i = 0, n = 0; i < Q - 1; i++) n += Y[i].distanceTo(Y[i + 1]) / 2;
      if (n === 0) g = Y[0];
      else
        for (i = 0, a = 0; i < Q - 1; i++)
          if (
            ((c = Y[i]), (f = Y[i + 1]), (o = c.distanceTo(f)), (a += o), a > n)
          ) {
            (m = (a - n) / o),
              (g = [f.x - m * (f.x - c.x), f.y - m * (f.y - c.y)]);
            break;
          }
      var nt = e.unproject(E(g));
      return I([nt.lat + y.lat, nt.lng + y.lng]);
    }
    var To = {
        __proto__: null,
        simplify: Mn,
        pointToSegmentDistance: On,
        closestPointOnSegment: wo,
        clipSegment: An,
        _getEdgeIntersection: Ee,
        _getBitCode: Dt,
        _sqClosestPointOnSegment: de,
        isFlat: lt,
        _flat: Zn,
        polylineCenter: In,
      },
      Pi = {
        project: function (t) {
          return new C(t.lng, t.lat);
        },
        unproject: function (t) {
          return new D(t.y, t.x);
        },
        bounds: new j([-180, -90], [180, 90]),
      },
      Li = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new j(
          [-2003750834279e-5, -1549657073972e-5],
          [2003750834279e-5, 1876465623138e-5],
        ),
        project: function (t) {
          var e = Math.PI / 180,
            i = this.R,
            n = t.lat * e,
            o = this.R_MINOR / i,
            a = Math.sqrt(1 - o * o),
            c = a * Math.sin(n),
            f =
              Math.tan(Math.PI / 4 - n / 2) /
              Math.pow((1 - c) / (1 + c), a / 2);
          return (
            (n = -i * Math.log(Math.max(f, 1e-10))), new C(t.lng * e * i, n)
          );
        },
        unproject: function (t) {
          for (
            var e = 180 / Math.PI,
              i = this.R,
              n = this.R_MINOR / i,
              o = Math.sqrt(1 - n * n),
              a = Math.exp(-t.y / i),
              c = Math.PI / 2 - 2 * Math.atan(a),
              f = 0,
              m = 0.1,
              g;
            f < 15 && Math.abs(m) > 1e-7;
            f++
          )
            (g = o * Math.sin(c)),
              (g = Math.pow((1 - g) / (1 + g), o / 2)),
              (m = Math.PI / 2 - 2 * Math.atan(a * g) - c),
              (c += m);
          return new D(c * e, (t.x * e) / i);
        },
      },
      So = { __proto__: null, LonLat: Pi, Mercator: Li, SphericalMercator: Ye },
      Eo = l({}, kt, {
        code: "EPSG:3395",
        projection: Li,
        transformation: (function () {
          var t = 0.5 / (Math.PI * Li.R);
          return se(t, 0.5, -t, 0.5);
        })(),
      }),
      Bn = l({}, kt, {
        code: "EPSG:4326",
        projection: Pi,
        transformation: se(1 / 180, 1, -1 / 180, 0.5),
      }),
      Co = l({}, wt, {
        projection: Pi,
        transformation: se(1, 0, -1, 0),
        scale: function (t) {
          return Math.pow(2, t);
        },
        zoom: function (t) {
          return Math.log(t) / Math.LN2;
        },
        distance: function (t, e) {
          var i = e.lng - t.lng,
            n = e.lat - t.lat;
          return Math.sqrt(i * i + n * n);
        },
        infinite: !0,
      });
    (wt.Earth = kt),
      (wt.EPSG3395 = Eo),
      (wt.EPSG3857 = Je),
      (wt.EPSG900913 = As),
      (wt.EPSG4326 = Bn),
      (wt.Simple = Co);
    var dt = ne.extend({
      options: {
        pane: "overlayPane",
        attribution: null,
        bubblingMouseEvents: !0,
      },
      addTo: function (t) {
        return t.addLayer(this), this;
      },
      remove: function () {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      removeFrom: function (t) {
        return t && t.removeLayer(this), this;
      },
      getPane: function (t) {
        return this._map.getPane(t ? this.options[t] || t : this.options.pane);
      },
      addInteractiveTarget: function (t) {
        return (this._map._targets[p(t)] = this), this;
      },
      removeInteractiveTarget: function (t) {
        return delete this._map._targets[p(t)], this;
      },
      getAttribution: function () {
        return this.options.attribution;
      },
      _layerAdd: function (t) {
        var e = t.target;
        if (e.hasLayer(this)) {
          if (
            ((this._map = e),
            (this._zoomAnimated = e._zoomAnimated),
            this.getEvents)
          ) {
            var i = this.getEvents();
            e.on(i, this),
              this.once(
                "remove",
                function () {
                  e.off(i, this);
                },
                this,
              );
          }
          this.onAdd(e), this.fire("add"), e.fire("layeradd", { layer: this });
        }
      },
    });
    B.include({
      addLayer: function (t) {
        if (!t._layerAdd)
          throw new Error("The provided object is not a Layer.");
        var e = p(t);
        return this._layers[e]
          ? this
          : ((this._layers[e] = t),
            (t._mapToAdd = this),
            t.beforeAdd && t.beforeAdd(this),
            this.whenReady(t._layerAdd, t),
            this);
      },
      removeLayer: function (t) {
        var e = p(t);
        return this._layers[e]
          ? (this._loaded && t.onRemove(this),
            delete this._layers[e],
            this._loaded &&
              (this.fire("layerremove", { layer: t }), t.fire("remove")),
            (t._map = t._mapToAdd = null),
            this)
          : this;
      },
      hasLayer: function (t) {
        return p(t) in this._layers;
      },
      eachLayer: function (t, e) {
        for (var i in this._layers) t.call(e, this._layers[i]);
        return this;
      },
      _addLayers: function (t) {
        t = t ? (tt(t) ? t : [t]) : [];
        for (var e = 0, i = t.length; e < i; e++) this.addLayer(t[e]);
      },
      _addZoomLimit: function (t) {
        (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) &&
          ((this._zoomBoundLayers[p(t)] = t), this._updateZoomLevels());
      },
      _removeZoomLimit: function (t) {
        var e = p(t);
        this._zoomBoundLayers[e] &&
          (delete this._zoomBoundLayers[e], this._updateZoomLevels());
      },
      _updateZoomLevels: function () {
        var t = 1 / 0,
          e = -1 / 0,
          i = this._getZoomSpan();
        for (var n in this._zoomBoundLayers) {
          var o = this._zoomBoundLayers[n].options;
          (t = o.minZoom === void 0 ? t : Math.min(t, o.minZoom)),
            (e = o.maxZoom === void 0 ? e : Math.max(e, o.maxZoom));
        }
        (this._layersMaxZoom = e === -1 / 0 ? void 0 : e),
          (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
          i !== this._getZoomSpan() && this.fire("zoomlevelschange"),
          this.options.maxZoom === void 0 &&
            this._layersMaxZoom &&
            this.getZoom() > this._layersMaxZoom &&
            this.setZoom(this._layersMaxZoom),
          this.options.minZoom === void 0 &&
            this._layersMinZoom &&
            this.getZoom() < this._layersMinZoom &&
            this.setZoom(this._layersMinZoom);
      },
    });
    var Gt = dt.extend({
        initialize: function (t, e) {
          z(this, e), (this._layers = {});
          var i, n;
          if (t) for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i]);
        },
        addLayer: function (t) {
          var e = this.getLayerId(t);
          return (
            (this._layers[e] = t), this._map && this._map.addLayer(t), this
          );
        },
        removeLayer: function (t) {
          var e = t in this._layers ? t : this.getLayerId(t);
          return (
            this._map &&
              this._layers[e] &&
              this._map.removeLayer(this._layers[e]),
            delete this._layers[e],
            this
          );
        },
        hasLayer: function (t) {
          var e = typeof t == "number" ? t : this.getLayerId(t);
          return e in this._layers;
        },
        clearLayers: function () {
          return this.eachLayer(this.removeLayer, this);
        },
        invoke: function (t) {
          var e = Array.prototype.slice.call(arguments, 1),
            i,
            n;
          for (i in this._layers)
            (n = this._layers[i]), n[t] && n[t].apply(n, e);
          return this;
        },
        onAdd: function (t) {
          this.eachLayer(t.addLayer, t);
        },
        onRemove: function (t) {
          this.eachLayer(t.removeLayer, t);
        },
        eachLayer: function (t, e) {
          for (var i in this._layers) t.call(e, this._layers[i]);
          return this;
        },
        getLayer: function (t) {
          return this._layers[t];
        },
        getLayers: function () {
          var t = [];
          return this.eachLayer(t.push, t), t;
        },
        setZIndex: function (t) {
          return this.invoke("setZIndex", t);
        },
        getLayerId: function (t) {
          return p(t);
        },
      }),
      ko = function (t, e) {
        return new Gt(t, e);
      },
      bt = Gt.extend({
        addLayer: function (t) {
          return this.hasLayer(t)
            ? this
            : (t.addEventParent(this),
              Gt.prototype.addLayer.call(this, t),
              this.fire("layeradd", { layer: t }));
        },
        removeLayer: function (t) {
          return this.hasLayer(t)
            ? (t in this._layers && (t = this._layers[t]),
              t.removeEventParent(this),
              Gt.prototype.removeLayer.call(this, t),
              this.fire("layerremove", { layer: t }))
            : this;
        },
        setStyle: function (t) {
          return this.invoke("setStyle", t);
        },
        bringToFront: function () {
          return this.invoke("bringToFront");
        },
        bringToBack: function () {
          return this.invoke("bringToBack");
        },
        getBounds: function () {
          var t = new it();
          for (var e in this._layers) {
            var i = this._layers[e];
            t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
          }
          return t;
        },
      }),
      Mo = function (t, e) {
        return new bt(t, e);
      },
      qt = ht.extend({
        options: {
          popupAnchor: [0, 0],
          tooltipAnchor: [0, 0],
          crossOrigin: !1,
        },
        initialize: function (t) {
          z(this, t);
        },
        createIcon: function (t) {
          return this._createIcon("icon", t);
        },
        createShadow: function (t) {
          return this._createIcon("shadow", t);
        },
        _createIcon: function (t, e) {
          var i = this._getIconUrl(t);
          if (!i) {
            if (t === "icon")
              throw new Error(
                "iconUrl not set in Icon options (see the docs).",
              );
            return null;
          }
          var n = this._createImg(i, e && e.tagName === "IMG" ? e : null);
          return (
            this._setIconStyles(n, t),
            (this.options.crossOrigin || this.options.crossOrigin === "") &&
              (n.crossOrigin =
                this.options.crossOrigin === !0
                  ? ""
                  : this.options.crossOrigin),
            n
          );
        },
        _setIconStyles: function (t, e) {
          var i = this.options,
            n = i[e + "Size"];
          typeof n == "number" && (n = [n, n]);
          var o = E(n),
            a = E(
              (e === "shadow" && i.shadowAnchor) ||
                i.iconAnchor ||
                (o && o.divideBy(2, !0)),
            );
          (t.className = "leaflet-marker-" + e + " " + (i.className || "")),
            a &&
              ((t.style.marginLeft = -a.x + "px"),
              (t.style.marginTop = -a.y + "px")),
            o && ((t.style.width = o.x + "px"), (t.style.height = o.y + "px"));
        },
        _createImg: function (t, e) {
          return (e = e || document.createElement("img")), (e.src = t), e;
        },
        _getIconUrl: function (t) {
          return (
            (T.retina && this.options[t + "RetinaUrl"]) ||
            this.options[t + "Url"]
          );
        },
      });
    function Oo(t) {
      return new qt(t);
    }
    var _e = qt.extend({
        options: {
          iconUrl: "marker-icon.png",
          iconRetinaUrl: "marker-icon-2x.png",
          shadowUrl: "marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41],
        },
        _getIconUrl: function (t) {
          return (
            typeof _e.imagePath != "string" &&
              (_e.imagePath = this._detectIconPath()),
            (this.options.imagePath || _e.imagePath) +
              qt.prototype._getIconUrl.call(this, t)
          );
        },
        _stripUrl: function (t) {
          var e = function (i, n, o) {
            var a = n.exec(i);
            return a && a[o];
          };
          return (
            (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)),
            t && e(t, /^(.*)marker-icon\.png$/, 1)
          );
        },
        _detectIconPath: function () {
          var t = F("div", "leaflet-default-icon-path", document.body),
            e = ae(t, "background-image") || ae(t, "backgroundImage");
          if ((document.body.removeChild(t), (e = this._stripUrl(e)), e))
            return e;
          var i = document.querySelector('link[href$="leaflet.css"]');
          return i ? i.href.substring(0, i.href.length - 11 - 1) : "";
        },
      }),
      Fn = pt.extend({
        initialize: function (t) {
          this._marker = t;
        },
        addHooks: function () {
          var t = this._marker._icon;
          this._draggable || (this._draggable = new Mt(t, t, !0)),
            this._draggable
              .on(
                {
                  dragstart: this._onDragStart,
                  predrag: this._onPreDrag,
                  drag: this._onDrag,
                  dragend: this._onDragEnd,
                },
                this,
              )
              .enable(),
            O(t, "leaflet-marker-draggable");
        },
        removeHooks: function () {
          this._draggable
            .off(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this,
            )
            .disable(),
            this._marker._icon &&
              W(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function () {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function (t) {
          var e = this._marker,
            i = e._map,
            n = this._marker.options.autoPanSpeed,
            o = this._marker.options.autoPanPadding,
            a = Bt(e._icon),
            c = i.getPixelBounds(),
            f = i.getPixelOrigin(),
            m = et(c.min._subtract(f).add(o), c.max._subtract(f).subtract(o));
          if (!m.contains(a)) {
            var g = E(
              (Math.max(m.max.x, a.x) - m.max.x) / (c.max.x - m.max.x) -
                (Math.min(m.min.x, a.x) - m.min.x) / (c.min.x - m.min.x),
              (Math.max(m.max.y, a.y) - m.max.y) / (c.max.y - m.max.y) -
                (Math.min(m.min.y, a.y) - m.min.y) / (c.min.y - m.min.y),
            ).multiplyBy(n);
            i.panBy(g, { animate: !1 }),
              this._draggable._newPos._add(g),
              this._draggable._startPos._add(g),
              G(e._icon, this._draggable._newPos),
              this._onDrag(t),
              (this._panRequest = Z(this._adjustPan.bind(this, t)));
          }
        },
        _onDragStart: function () {
          (this._oldLatLng = this._marker.getLatLng()),
            this._marker.closePopup && this._marker.closePopup(),
            this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function (t) {
          this._marker.options.autoPan &&
            (U(this._panRequest),
            (this._panRequest = Z(this._adjustPan.bind(this, t))));
        },
        _onDrag: function (t) {
          var e = this._marker,
            i = e._shadow,
            n = Bt(e._icon),
            o = e._map.layerPointToLatLng(n);
          i && G(i, n),
            (e._latlng = o),
            (t.latlng = o),
            (t.oldLatLng = this._oldLatLng),
            e.fire("move", t).fire("drag", t);
        },
        _onDragEnd: function (t) {
          U(this._panRequest),
            delete this._oldLatLng,
            this._marker.fire("moveend").fire("dragend", t);
        },
      }),
      Ce = dt.extend({
        options: {
          icon: new _e(),
          interactive: !0,
          keyboard: !0,
          title: "",
          alt: "Marker",
          zIndexOffset: 0,
          opacity: 1,
          riseOnHover: !1,
          riseOffset: 250,
          pane: "markerPane",
          shadowPane: "shadowPane",
          bubblingMouseEvents: !1,
          autoPanOnFocus: !0,
          draggable: !1,
          autoPan: !1,
          autoPanPadding: [50, 50],
          autoPanSpeed: 10,
        },
        initialize: function (t, e) {
          z(this, e), (this._latlng = I(t));
        },
        onAdd: function (t) {
          (this._zoomAnimated =
            this._zoomAnimated && t.options.markerZoomAnimation),
            this._zoomAnimated && t.on("zoomanim", this._animateZoom, this),
            this._initIcon(),
            this.update();
        },
        onRemove: function (t) {
          this.dragging &&
            this.dragging.enabled() &&
            ((this.options.draggable = !0), this.dragging.removeHooks()),
            delete this.dragging,
            this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
            this._removeIcon(),
            this._removeShadow();
        },
        getEvents: function () {
          return { zoom: this.update, viewreset: this.update };
        },
        getLatLng: function () {
          return this._latlng;
        },
        setLatLng: function (t) {
          var e = this._latlng;
          return (
            (this._latlng = I(t)),
            this.update(),
            this.fire("move", { oldLatLng: e, latlng: this._latlng })
          );
        },
        setZIndexOffset: function (t) {
          return (this.options.zIndexOffset = t), this.update();
        },
        getIcon: function () {
          return this.options.icon;
        },
        setIcon: function (t) {
          return (
            (this.options.icon = t),
            this._map && (this._initIcon(), this.update()),
            this._popup && this.bindPopup(this._popup, this._popup.options),
            this
          );
        },
        getElement: function () {
          return this._icon;
        },
        update: function () {
          if (this._icon && this._map) {
            var t = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(t);
          }
          return this;
        },
        _initIcon: function () {
          var t = this.options,
            e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
            i = t.icon.createIcon(this._icon),
            n = !1;
          i !== this._icon &&
            (this._icon && this._removeIcon(),
            (n = !0),
            t.title && (i.title = t.title),
            i.tagName === "IMG" && (i.alt = t.alt || "")),
            O(i, e),
            t.keyboard &&
              ((i.tabIndex = "0"), i.setAttribute("role", "button")),
            (this._icon = i),
            t.riseOnHover &&
              this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex,
              }),
            this.options.autoPanOnFocus &&
              k(i, "focus", this._panOnFocus, this);
          var o = t.icon.createShadow(this._shadow),
            a = !1;
          o !== this._shadow && (this._removeShadow(), (a = !0)),
            o && (O(o, e), (o.alt = "")),
            (this._shadow = o),
            t.opacity < 1 && this._updateOpacity(),
            n && this.getPane().appendChild(this._icon),
            this._initInteraction(),
            o && a && this.getPane(t.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function () {
          this.options.riseOnHover &&
            this.off({
              mouseover: this._bringToFront,
              mouseout: this._resetZIndex,
            }),
            this.options.autoPanOnFocus &&
              R(this._icon, "focus", this._panOnFocus, this),
            $(this._icon),
            this.removeInteractiveTarget(this._icon),
            (this._icon = null);
        },
        _removeShadow: function () {
          this._shadow && $(this._shadow), (this._shadow = null);
        },
        _setPos: function (t) {
          this._icon && G(this._icon, t),
            this._shadow && G(this._shadow, t),
            (this._zIndex = t.y + this.options.zIndexOffset),
            this._resetZIndex();
        },
        _updateZIndex: function (t) {
          this._icon && (this._icon.style.zIndex = this._zIndex + t);
        },
        _animateZoom: function (t) {
          var e = this._map
            ._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
            .round();
          this._setPos(e);
        },
        _initInteraction: function () {
          if (
            this.options.interactive &&
            (O(this._icon, "leaflet-interactive"),
            this.addInteractiveTarget(this._icon),
            Fn)
          ) {
            var t = this.options.draggable;
            this.dragging &&
              ((t = this.dragging.enabled()), this.dragging.disable()),
              (this.dragging = new Fn(this)),
              t && this.dragging.enable();
          }
        },
        setOpacity: function (t) {
          return (
            (this.options.opacity = t), this._map && this._updateOpacity(), this
          );
        },
        _updateOpacity: function () {
          var t = this.options.opacity;
          this._icon && ut(this._icon, t), this._shadow && ut(this._shadow, t);
        },
        _bringToFront: function () {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function () {
          this._updateZIndex(0);
        },
        _panOnFocus: function () {
          var t = this._map;
          if (t) {
            var e = this.options.icon.options,
              i = e.iconSize ? E(e.iconSize) : E(0, 0),
              n = e.iconAnchor ? E(e.iconAnchor) : E(0, 0);
            t.panInside(this._latlng, {
              paddingTopLeft: n,
              paddingBottomRight: i.subtract(n),
            });
          }
        },
        _getPopupAnchor: function () {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function () {
          return this.options.icon.options.tooltipAnchor;
        },
      });
    function zo(t, e) {
      return new Ce(t, e);
    }
    var Ot = dt.extend({
        options: {
          stroke: !0,
          color: "#3388ff",
          weight: 3,
          opacity: 1,
          lineCap: "round",
          lineJoin: "round",
          dashArray: null,
          dashOffset: null,
          fill: !1,
          fillColor: null,
          fillOpacity: 0.2,
          fillRule: "evenodd",
          interactive: !0,
          bubblingMouseEvents: !0,
        },
        beforeAdd: function (t) {
          this._renderer = t.getRenderer(this);
        },
        onAdd: function () {
          this._renderer._initPath(this),
            this._reset(),
            this._renderer._addPath(this);
        },
        onRemove: function () {
          this._renderer._removePath(this);
        },
        redraw: function () {
          return this._map && this._renderer._updatePath(this), this;
        },
        setStyle: function (t) {
          return (
            z(this, t),
            this._renderer &&
              (this._renderer._updateStyle(this),
              this.options.stroke &&
                t &&
                Object.prototype.hasOwnProperty.call(t, "weight") &&
                this._updateBounds()),
            this
          );
        },
        bringToFront: function () {
          return this._renderer && this._renderer._bringToFront(this), this;
        },
        bringToBack: function () {
          return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function () {
          return this._path;
        },
        _reset: function () {
          this._project(), this._update();
        },
        _clickTolerance: function () {
          return (
            (this.options.stroke ? this.options.weight / 2 : 0) +
            (this._renderer.options.tolerance || 0)
          );
        },
      }),
      ke = Ot.extend({
        options: { fill: !0, radius: 10 },
        initialize: function (t, e) {
          z(this, e),
            (this._latlng = I(t)),
            (this._radius = this.options.radius);
        },
        setLatLng: function (t) {
          var e = this._latlng;
          return (
            (this._latlng = I(t)),
            this.redraw(),
            this.fire("move", { oldLatLng: e, latlng: this._latlng })
          );
        },
        getLatLng: function () {
          return this._latlng;
        },
        setRadius: function (t) {
          return (this.options.radius = this._radius = t), this.redraw();
        },
        getRadius: function () {
          return this._radius;
        },
        setStyle: function (t) {
          var e = (t && t.radius) || this._radius;
          return Ot.prototype.setStyle.call(this, t), this.setRadius(e), this;
        },
        _project: function () {
          (this._point = this._map.latLngToLayerPoint(this._latlng)),
            this._updateBounds();
        },
        _updateBounds: function () {
          var t = this._radius,
            e = this._radiusY || t,
            i = this._clickTolerance(),
            n = [t + i, e + i];
          this._pxBounds = new j(this._point.subtract(n), this._point.add(n));
        },
        _update: function () {
          this._map && this._updatePath();
        },
        _updatePath: function () {
          this._renderer._updateCircle(this);
        },
        _empty: function () {
          return (
            this._radius && !this._renderer._bounds.intersects(this._pxBounds)
          );
        },
        _containsPoint: function (t) {
          return (
            t.distanceTo(this._point) <= this._radius + this._clickTolerance()
          );
        },
      });
    function Ao(t, e) {
      return new ke(t, e);
    }
    var Ti = ke.extend({
      initialize: function (t, e, i) {
        if (
          (typeof e == "number" && (e = l({}, i, { radius: e })),
          z(this, e),
          (this._latlng = I(t)),
          isNaN(this.options.radius))
        )
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      setRadius: function (t) {
        return (this._mRadius = t), this.redraw();
      },
      getRadius: function () {
        return this._mRadius;
      },
      getBounds: function () {
        var t = [this._radius, this._radiusY || this._radius];
        return new it(
          this._map.layerPointToLatLng(this._point.subtract(t)),
          this._map.layerPointToLatLng(this._point.add(t)),
        );
      },
      setStyle: Ot.prototype.setStyle,
      _project: function () {
        var t = this._latlng.lng,
          e = this._latlng.lat,
          i = this._map,
          n = i.options.crs;
        if (n.distance === kt.distance) {
          var o = Math.PI / 180,
            a = this._mRadius / kt.R / o,
            c = i.project([e + a, t]),
            f = i.project([e - a, t]),
            m = c.add(f).divideBy(2),
            g = i.unproject(m).lat,
            y =
              Math.acos(
                (Math.cos(a * o) - Math.sin(e * o) * Math.sin(g * o)) /
                  (Math.cos(e * o) * Math.cos(g * o)),
              ) / o;
          (isNaN(y) || y === 0) && (y = a / Math.cos((Math.PI / 180) * e)),
            (this._point = m.subtract(i.getPixelOrigin())),
            (this._radius = isNaN(y) ? 0 : m.x - i.project([g, t - y]).x),
            (this._radiusY = m.y - c.y);
        } else {
          var S = n.unproject(
            n.project(this._latlng).subtract([this._mRadius, 0]),
          );
          (this._point = i.latLngToLayerPoint(this._latlng)),
            (this._radius = this._point.x - i.latLngToLayerPoint(S).x);
        }
        this._updateBounds();
      },
    });
    function Zo(t, e, i) {
      return new Ti(t, e, i);
    }
    var Pt = Ot.extend({
      options: { smoothFactor: 1, noClip: !1 },
      initialize: function (t, e) {
        z(this, e), this._setLatLngs(t);
      },
      getLatLngs: function () {
        return this._latlngs;
      },
      setLatLngs: function (t) {
        return this._setLatLngs(t), this.redraw();
      },
      isEmpty: function () {
        return !this._latlngs.length;
      },
      closestLayerPoint: function (t) {
        for (
          var e = 1 / 0, i = null, n = de, o, a, c = 0, f = this._parts.length;
          c < f;
          c++
        )
          for (var m = this._parts[c], g = 1, y = m.length; g < y; g++) {
            (o = m[g - 1]), (a = m[g]);
            var S = n(t, o, a, !0);
            S < e && ((e = S), (i = n(t, o, a)));
          }
        return i && (i.distance = Math.sqrt(e)), i;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return In(this._defaultShape(), this._map.options.crs);
      },
      getBounds: function () {
        return this._bounds;
      },
      addLatLng: function (t, e) {
        return (
          (e = e || this._defaultShape()),
          (t = I(t)),
          e.push(t),
          this._bounds.extend(t),
          this.redraw()
        );
      },
      _setLatLngs: function (t) {
        (this._bounds = new it()), (this._latlngs = this._convertLatLngs(t));
      },
      _defaultShape: function () {
        return lt(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      _convertLatLngs: function (t) {
        for (var e = [], i = lt(t), n = 0, o = t.length; n < o; n++)
          i
            ? ((e[n] = I(t[n])), this._bounds.extend(e[n]))
            : (e[n] = this._convertLatLngs(t[n]));
        return e;
      },
      _project: function () {
        var t = new j();
        (this._rings = []),
          this._projectLatlngs(this._latlngs, this._rings, t),
          this._bounds.isValid() &&
            t.isValid() &&
            ((this._rawPxBounds = t), this._updateBounds());
      },
      _updateBounds: function () {
        var t = this._clickTolerance(),
          e = new C(t, t);
        this._rawPxBounds &&
          (this._pxBounds = new j([
            this._rawPxBounds.min.subtract(e),
            this._rawPxBounds.max.add(e),
          ]));
      },
      _projectLatlngs: function (t, e, i) {
        var n = t[0] instanceof D,
          o = t.length,
          a,
          c;
        if (n) {
          for (c = [], a = 0; a < o; a++)
            (c[a] = this._map.latLngToLayerPoint(t[a])), i.extend(c[a]);
          e.push(c);
        } else for (a = 0; a < o; a++) this._projectLatlngs(t[a], e, i);
      },
      _clipPoints: function () {
        var t = this._renderer._bounds;
        if (
          ((this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(t)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var e = this._parts,
            i,
            n,
            o,
            a,
            c,
            f,
            m;
          for (i = 0, o = 0, a = this._rings.length; i < a; i++)
            for (m = this._rings[i], n = 0, c = m.length; n < c - 1; n++)
              (f = An(m[n], m[n + 1], t, n, !0)),
                f &&
                  ((e[o] = e[o] || []),
                  e[o].push(f[0]),
                  (f[1] !== m[n + 1] || n === c - 2) && (e[o].push(f[1]), o++));
        }
      },
      _simplifyPoints: function () {
        for (
          var t = this._parts,
            e = this.options.smoothFactor,
            i = 0,
            n = t.length;
          i < n;
          i++
        )
          t[i] = Mn(t[i], e);
      },
      _update: function () {
        this._map &&
          (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function () {
        this._renderer._updatePoly(this);
      },
      _containsPoint: function (t, e) {
        var i,
          n,
          o,
          a,
          c,
          f,
          m = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
        for (i = 0, a = this._parts.length; i < a; i++)
          for (
            f = this._parts[i], n = 0, c = f.length, o = c - 1;
            n < c;
            o = n++
          )
            if (!(!e && n === 0) && On(t, f[o], f[n]) <= m) return !0;
        return !1;
      },
    });
    function Io(t, e) {
      return new Pt(t, e);
    }
    Pt._flat = Zn;
    var Kt = Pt.extend({
      options: { fill: !0 },
      isEmpty: function () {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return kn(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function (t) {
        var e = Pt.prototype._convertLatLngs.call(this, t),
          i = e.length;
        return (
          i >= 2 && e[0] instanceof D && e[0].equals(e[i - 1]) && e.pop(), e
        );
      },
      _setLatLngs: function (t) {
        Pt.prototype._setLatLngs.call(this, t),
          lt(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function () {
        return lt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function () {
        var t = this._renderer._bounds,
          e = this.options.weight,
          i = new C(e, e);
        if (
          ((t = new j(t.min.subtract(i), t.max.add(i))),
          (this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(t)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var n = 0, o = this._rings.length, a; n < o; n++)
            (a = Cn(this._rings[n], t, !0)), a.length && this._parts.push(a);
        }
      },
      _updatePath: function () {
        this._renderer._updatePoly(this, !0);
      },
      _containsPoint: function (t) {
        var e = !1,
          i,
          n,
          o,
          a,
          c,
          f,
          m,
          g;
        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
        for (a = 0, m = this._parts.length; a < m; a++)
          for (
            i = this._parts[a], c = 0, g = i.length, f = g - 1;
            c < g;
            f = c++
          )
            (n = i[c]),
              (o = i[f]),
              n.y > t.y != o.y > t.y &&
                t.x < ((o.x - n.x) * (t.y - n.y)) / (o.y - n.y) + n.x &&
                (e = !e);
        return e || Pt.prototype._containsPoint.call(this, t, !0);
      },
    });
    function Bo(t, e) {
      return new Kt(t, e);
    }
    var Lt = bt.extend({
      initialize: function (t, e) {
        z(this, e), (this._layers = {}), t && this.addData(t);
      },
      addData: function (t) {
        var e = tt(t) ? t : t.features,
          i,
          n,
          o;
        if (e) {
          for (i = 0, n = e.length; i < n; i++)
            (o = e[i]),
              (o.geometries || o.geometry || o.features || o.coordinates) &&
                this.addData(o);
          return this;
        }
        var a = this.options;
        if (a.filter && !a.filter(t)) return this;
        var c = Me(t, a);
        return c
          ? ((c.feature = Ae(t)),
            (c.defaultOptions = c.options),
            this.resetStyle(c),
            a.onEachFeature && a.onEachFeature(t, c),
            this.addLayer(c))
          : this;
      },
      resetStyle: function (t) {
        return t === void 0
          ? this.eachLayer(this.resetStyle, this)
          : ((t.options = l({}, t.defaultOptions)),
            this._setLayerStyle(t, this.options.style),
            this);
      },
      setStyle: function (t) {
        return this.eachLayer(function (e) {
          this._setLayerStyle(e, t);
        }, this);
      },
      _setLayerStyle: function (t, e) {
        t.setStyle &&
          (typeof e == "function" && (e = e(t.feature)), t.setStyle(e));
      },
    });
    function Me(t, e) {
      var i = t.type === "Feature" ? t.geometry : t,
        n = i ? i.coordinates : null,
        o = [],
        a = e && e.pointToLayer,
        c = (e && e.coordsToLatLng) || Si,
        f,
        m,
        g,
        y;
      if (!n && !i) return null;
      switch (i.type) {
        case "Point":
          return (f = c(n)), Nn(a, t, f, e);
        case "MultiPoint":
          for (g = 0, y = n.length; g < y; g++)
            (f = c(n[g])), o.push(Nn(a, t, f, e));
          return new bt(o);
        case "LineString":
        case "MultiLineString":
          return (m = Oe(n, i.type === "LineString" ? 0 : 1, c)), new Pt(m, e);
        case "Polygon":
        case "MultiPolygon":
          return (m = Oe(n, i.type === "Polygon" ? 1 : 2, c)), new Kt(m, e);
        case "GeometryCollection":
          for (g = 0, y = i.geometries.length; g < y; g++) {
            var S = Me(
              {
                geometry: i.geometries[g],
                type: "Feature",
                properties: t.properties,
              },
              e,
            );
            S && o.push(S);
          }
          return new bt(o);
        case "FeatureCollection":
          for (g = 0, y = i.features.length; g < y; g++) {
            var A = Me(i.features[g], e);
            A && o.push(A);
          }
          return new bt(o);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function Nn(t, e, i, n) {
      return t ? t(e, i) : new Ce(i, n && n.markersInheritOptions && n);
    }
    function Si(t) {
      return new D(t[1], t[0], t[2]);
    }
    function Oe(t, e, i) {
      for (var n = [], o = 0, a = t.length, c; o < a; o++)
        (c = e ? Oe(t[o], e - 1, i) : (i || Si)(t[o])), n.push(c);
      return n;
    }
    function Ei(t, e) {
      return (
        (t = I(t)),
        t.alt !== void 0
          ? [M(t.lng, e), M(t.lat, e), M(t.alt, e)]
          : [M(t.lng, e), M(t.lat, e)]
      );
    }
    function ze(t, e, i, n) {
      for (var o = [], a = 0, c = t.length; a < c; a++)
        o.push(e ? ze(t[a], lt(t[a]) ? 0 : e - 1, i, n) : Ei(t[a], n));
      return !e && i && o.length > 0 && o.push(o[0].slice()), o;
    }
    function Yt(t, e) {
      return t.feature ? l({}, t.feature, { geometry: e }) : Ae(e);
    }
    function Ae(t) {
      return t.type === "Feature" || t.type === "FeatureCollection"
        ? t
        : { type: "Feature", properties: {}, geometry: t };
    }
    var Ci = {
      toGeoJSON: function (t) {
        return Yt(this, {
          type: "Point",
          coordinates: Ei(this.getLatLng(), t),
        });
      },
    };
    Ce.include(Ci),
      Ti.include(Ci),
      ke.include(Ci),
      Pt.include({
        toGeoJSON: function (t) {
          var e = !lt(this._latlngs),
            i = ze(this._latlngs, e ? 1 : 0, !1, t);
          return Yt(this, {
            type: (e ? "Multi" : "") + "LineString",
            coordinates: i,
          });
        },
      }),
      Kt.include({
        toGeoJSON: function (t) {
          var e = !lt(this._latlngs),
            i = e && !lt(this._latlngs[0]),
            n = ze(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
          return (
            e || (n = [n]),
            Yt(this, { type: (i ? "Multi" : "") + "Polygon", coordinates: n })
          );
        },
      }),
      Gt.include({
        toMultiPoint: function (t) {
          var e = [];
          return (
            this.eachLayer(function (i) {
              e.push(i.toGeoJSON(t).geometry.coordinates);
            }),
            Yt(this, { type: "MultiPoint", coordinates: e })
          );
        },
        toGeoJSON: function (t) {
          var e =
            this.feature && this.feature.geometry && this.feature.geometry.type;
          if (e === "MultiPoint") return this.toMultiPoint(t);
          var i = e === "GeometryCollection",
            n = [];
          return (
            this.eachLayer(function (o) {
              if (o.toGeoJSON) {
                var a = o.toGeoJSON(t);
                if (i) n.push(a.geometry);
                else {
                  var c = Ae(a);
                  c.type === "FeatureCollection"
                    ? n.push.apply(n, c.features)
                    : n.push(c);
                }
              }
            }),
            i
              ? Yt(this, { geometries: n, type: "GeometryCollection" })
              : { type: "FeatureCollection", features: n }
          );
        },
      });
    function Dn(t, e) {
      return new Lt(t, e);
    }
    var Fo = Dn,
      Ze = dt.extend({
        options: {
          opacity: 1,
          alt: "",
          interactive: !1,
          crossOrigin: !1,
          errorOverlayUrl: "",
          zIndex: 1,
          className: "",
        },
        initialize: function (t, e, i) {
          (this._url = t), (this._bounds = V(e)), z(this, i);
        },
        onAdd: function () {
          this._image ||
            (this._initImage(),
            this.options.opacity < 1 && this._updateOpacity()),
            this.options.interactive &&
              (O(this._image, "leaflet-interactive"),
              this.addInteractiveTarget(this._image)),
            this.getPane().appendChild(this._image),
            this._reset();
        },
        onRemove: function () {
          $(this._image),
            this.options.interactive &&
              this.removeInteractiveTarget(this._image);
        },
        setOpacity: function (t) {
          return (
            (this.options.opacity = t),
            this._image && this._updateOpacity(),
            this
          );
        },
        setStyle: function (t) {
          return t.opacity && this.setOpacity(t.opacity), this;
        },
        bringToFront: function () {
          return this._map && Ut(this._image), this;
        },
        bringToBack: function () {
          return this._map && Vt(this._image), this;
        },
        setUrl: function (t) {
          return (this._url = t), this._image && (this._image.src = t), this;
        },
        setBounds: function (t) {
          return (this._bounds = V(t)), this._map && this._reset(), this;
        },
        getEvents: function () {
          var t = { zoom: this._reset, viewreset: this._reset };
          return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
        },
        setZIndex: function (t) {
          return (this.options.zIndex = t), this._updateZIndex(), this;
        },
        getBounds: function () {
          return this._bounds;
        },
        getElement: function () {
          return this._image;
        },
        _initImage: function () {
          var t = this._url.tagName === "IMG",
            e = (this._image = t ? this._url : F("img"));
          if (
            (O(e, "leaflet-image-layer"),
            this._zoomAnimated && O(e, "leaflet-zoom-animated"),
            this.options.className && O(e, this.options.className),
            (e.onselectstart = w),
            (e.onmousemove = w),
            (e.onload = _(this.fire, this, "load")),
            (e.onerror = _(this._overlayOnError, this, "error")),
            (this.options.crossOrigin || this.options.crossOrigin === "") &&
              (e.crossOrigin =
                this.options.crossOrigin === !0
                  ? ""
                  : this.options.crossOrigin),
            this.options.zIndex && this._updateZIndex(),
            t)
          ) {
            this._url = e.src;
            return;
          }
          (e.src = this._url), (e.alt = this.options.alt);
        },
        _animateZoom: function (t) {
          var e = this._map.getZoomScale(t.zoom),
            i = this._map._latLngBoundsToNewLayerBounds(
              this._bounds,
              t.zoom,
              t.center,
            ).min;
          It(this._image, i, e);
        },
        _reset: function () {
          var t = this._image,
            e = new j(
              this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
              this._map.latLngToLayerPoint(this._bounds.getSouthEast()),
            ),
            i = e.getSize();
          G(t, e.min),
            (t.style.width = i.x + "px"),
            (t.style.height = i.y + "px");
        },
        _updateOpacity: function () {
          ut(this._image, this.options.opacity);
        },
        _updateZIndex: function () {
          this._image &&
            this.options.zIndex !== void 0 &&
            this.options.zIndex !== null &&
            (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function () {
          this.fire("error");
          var t = this.options.errorOverlayUrl;
          t && this._url !== t && ((this._url = t), (this._image.src = t));
        },
        getCenter: function () {
          return this._bounds.getCenter();
        },
      }),
      No = function (t, e, i) {
        return new Ze(t, e, i);
      },
      Rn = Ze.extend({
        options: {
          autoplay: !0,
          loop: !0,
          keepAspectRatio: !0,
          muted: !1,
          playsInline: !0,
        },
        _initImage: function () {
          var t = this._url.tagName === "VIDEO",
            e = (this._image = t ? this._url : F("video"));
          if (
            (O(e, "leaflet-image-layer"),
            this._zoomAnimated && O(e, "leaflet-zoom-animated"),
            this.options.className && O(e, this.options.className),
            (e.onselectstart = w),
            (e.onmousemove = w),
            (e.onloadeddata = _(this.fire, this, "load")),
            t)
          ) {
            for (
              var i = e.getElementsByTagName("source"), n = [], o = 0;
              o < i.length;
              o++
            )
              n.push(i[o].src);
            this._url = i.length > 0 ? n : [e.src];
            return;
          }
          tt(this._url) || (this._url = [this._url]),
            !this.options.keepAspectRatio &&
              Object.prototype.hasOwnProperty.call(e.style, "objectFit") &&
              (e.style.objectFit = "fill"),
            (e.autoplay = !!this.options.autoplay),
            (e.loop = !!this.options.loop),
            (e.muted = !!this.options.muted),
            (e.playsInline = !!this.options.playsInline);
          for (var a = 0; a < this._url.length; a++) {
            var c = F("source");
            (c.src = this._url[a]), e.appendChild(c);
          }
        },
      });
    function Do(t, e, i) {
      return new Rn(t, e, i);
    }
    var jn = Ze.extend({
      _initImage: function () {
        var t = (this._image = this._url);
        O(t, "leaflet-image-layer"),
          this._zoomAnimated && O(t, "leaflet-zoom-animated"),
          this.options.className && O(t, this.options.className),
          (t.onselectstart = w),
          (t.onmousemove = w);
      },
    });
    function Ro(t, e, i) {
      return new jn(t, e, i);
    }
    var gt = dt.extend({
      options: {
        interactive: !1,
        offset: [0, 0],
        className: "",
        pane: void 0,
        content: "",
      },
      initialize: function (t, e) {
        t && (t instanceof D || tt(t))
          ? ((this._latlng = I(t)), z(this, e))
          : (z(this, t), (this._source = e)),
          this.options.content && (this._content = this.options.content);
      },
      openOn: function (t) {
        return (
          (t = arguments.length ? t : this._source._map),
          t.hasLayer(this) || t.addLayer(this),
          this
        );
      },
      close: function () {
        return this._map && this._map.removeLayer(this), this;
      },
      toggle: function (t) {
        return (
          this._map
            ? this.close()
            : (arguments.length ? (this._source = t) : (t = this._source),
              this._prepareOpen(),
              this.openOn(t._map)),
          this
        );
      },
      onAdd: function (t) {
        (this._zoomAnimated = t._zoomAnimated),
          this._container || this._initLayout(),
          t._fadeAnimated && ut(this._container, 0),
          clearTimeout(this._removeTimeout),
          this.getPane().appendChild(this._container),
          this.update(),
          t._fadeAnimated && ut(this._container, 1),
          this.bringToFront(),
          this.options.interactive &&
            (O(this._container, "leaflet-interactive"),
            this.addInteractiveTarget(this._container));
      },
      onRemove: function (t) {
        t._fadeAnimated
          ? (ut(this._container, 0),
            (this._removeTimeout = setTimeout(
              _($, void 0, this._container),
              200,
            )))
          : $(this._container),
          this.options.interactive &&
            (W(this._container, "leaflet-interactive"),
            this.removeInteractiveTarget(this._container));
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (t) {
        return (
          (this._latlng = I(t)),
          this._map && (this._updatePosition(), this._adjustPan()),
          this
        );
      },
      getContent: function () {
        return this._content;
      },
      setContent: function (t) {
        return (this._content = t), this.update(), this;
      },
      getElement: function () {
        return this._container;
      },
      update: function () {
        this._map &&
          ((this._container.style.visibility = "hidden"),
          this._updateContent(),
          this._updateLayout(),
          this._updatePosition(),
          (this._container.style.visibility = ""),
          this._adjustPan());
      },
      getEvents: function () {
        var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      isOpen: function () {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function () {
        return this._map && Ut(this._container), this;
      },
      bringToBack: function () {
        return this._map && Vt(this._container), this;
      },
      _prepareOpen: function (t) {
        var e = this._source;
        if (!e._map) return !1;
        if (e instanceof bt) {
          e = null;
          var i = this._source._layers;
          for (var n in i)
            if (i[n]._map) {
              e = i[n];
              break;
            }
          if (!e) return !1;
          this._source = e;
        }
        if (!t)
          if (e.getCenter) t = e.getCenter();
          else if (e.getLatLng) t = e.getLatLng();
          else if (e.getBounds) t = e.getBounds().getCenter();
          else throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(t), this._map && this.update(), !0;
      },
      _updateContent: function () {
        if (this._content) {
          var t = this._contentNode,
            e =
              typeof this._content == "function"
                ? this._content(this._source || this)
                : this._content;
          if (typeof e == "string") t.innerHTML = e;
          else {
            for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
            t.appendChild(e);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function () {
        if (this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng),
            e = E(this.options.offset),
            i = this._getAnchor();
          this._zoomAnimated
            ? G(this._container, t.add(i))
            : (e = e.add(t).add(i));
          var n = (this._containerBottom = -e.y),
            o = (this._containerLeft =
              -Math.round(this._containerWidth / 2) + e.x);
          (this._container.style.bottom = n + "px"),
            (this._container.style.left = o + "px");
        }
      },
      _getAnchor: function () {
        return [0, 0];
      },
    });
    B.include({
      _initOverlay: function (t, e, i, n) {
        var o = e;
        return (
          o instanceof t || (o = new t(n).setContent(e)), i && o.setLatLng(i), o
        );
      },
    }),
      dt.include({
        _initOverlay: function (t, e, i, n) {
          var o = i;
          return (
            o instanceof t
              ? (z(o, n), (o._source = this))
              : ((o = e && !n ? e : new t(n, this)), o.setContent(i)),
            o
          );
        },
      });
    var Ie = gt.extend({
        options: {
          pane: "popupPane",
          offset: [0, 7],
          maxWidth: 300,
          minWidth: 50,
          maxHeight: null,
          autoPan: !0,
          autoPanPaddingTopLeft: null,
          autoPanPaddingBottomRight: null,
          autoPanPadding: [5, 5],
          keepInView: !1,
          closeButton: !0,
          autoClose: !0,
          closeOnEscapeKey: !0,
          className: "",
        },
        openOn: function (t) {
          return (
            (t = arguments.length ? t : this._source._map),
            !t.hasLayer(this) &&
              t._popup &&
              t._popup.options.autoClose &&
              t.removeLayer(t._popup),
            (t._popup = this),
            gt.prototype.openOn.call(this, t)
          );
        },
        onAdd: function (t) {
          gt.prototype.onAdd.call(this, t),
            t.fire("popupopen", { popup: this }),
            this._source &&
              (this._source.fire("popupopen", { popup: this }, !0),
              this._source instanceof Ot || this._source.on("preclick", Ft));
        },
        onRemove: function (t) {
          gt.prototype.onRemove.call(this, t),
            t.fire("popupclose", { popup: this }),
            this._source &&
              (this._source.fire("popupclose", { popup: this }, !0),
              this._source instanceof Ot || this._source.off("preclick", Ft));
        },
        getEvents: function () {
          var t = gt.prototype.getEvents.call(this);
          return (
            (this.options.closeOnClick !== void 0
              ? this.options.closeOnClick
              : this._map.options.closePopupOnClick) &&
              (t.preclick = this.close),
            this.options.keepInView && (t.moveend = this._adjustPan),
            t
          );
        },
        _initLayout: function () {
          var t = "leaflet-popup",
            e = (this._container = F(
              "div",
              t +
                " " +
                (this.options.className || "") +
                " leaflet-zoom-animated",
            )),
            i = (this._wrapper = F("div", t + "-content-wrapper", e));
          if (
            ((this._contentNode = F("div", t + "-content", i)),
            ce(e),
            gi(this._contentNode),
            k(e, "contextmenu", Ft),
            (this._tipContainer = F("div", t + "-tip-container", e)),
            (this._tip = F("div", t + "-tip", this._tipContainer)),
            this.options.closeButton)
          ) {
            var n = (this._closeButton = F("a", t + "-close-button", e));
            n.setAttribute("role", "button"),
              n.setAttribute("aria-label", "Close popup"),
              (n.href = "#close"),
              (n.innerHTML = '<span aria-hidden="true">&#215;</span>'),
              k(
                n,
                "click",
                function (o) {
                  X(o), this.close();
                },
                this,
              );
          }
        },
        _updateLayout: function () {
          var t = this._contentNode,
            e = t.style;
          (e.width = ""), (e.whiteSpace = "nowrap");
          var i = t.offsetWidth;
          (i = Math.min(i, this.options.maxWidth)),
            (i = Math.max(i, this.options.minWidth)),
            (e.width = i + 1 + "px"),
            (e.whiteSpace = ""),
            (e.height = "");
          var n = t.offsetHeight,
            o = this.options.maxHeight,
            a = "leaflet-popup-scrolled";
          o && n > o ? ((e.height = o + "px"), O(t, a)) : W(t, a),
            (this._containerWidth = this._container.offsetWidth);
        },
        _animateZoom: function (t) {
          var e = this._map._latLngToNewLayerPoint(
              this._latlng,
              t.zoom,
              t.center,
            ),
            i = this._getAnchor();
          G(this._container, e.add(i));
        },
        _adjustPan: function () {
          if (this.options.autoPan) {
            if (
              (this._map._panAnim && this._map._panAnim.stop(),
              this._autopanning)
            ) {
              this._autopanning = !1;
              return;
            }
            var t = this._map,
              e = parseInt(ae(this._container, "marginBottom"), 10) || 0,
              i = this._container.offsetHeight + e,
              n = this._containerWidth,
              o = new C(this._containerLeft, -i - this._containerBottom);
            o._add(Bt(this._container));
            var a = t.layerPointToContainerPoint(o),
              c = E(this.options.autoPanPadding),
              f = E(this.options.autoPanPaddingTopLeft || c),
              m = E(this.options.autoPanPaddingBottomRight || c),
              g = t.getSize(),
              y = 0,
              S = 0;
            a.x + n + m.x > g.x && (y = a.x + n - g.x + m.x),
              a.x - y - f.x < 0 && (y = a.x - f.x),
              a.y + i + m.y > g.y && (S = a.y + i - g.y + m.y),
              a.y - S - f.y < 0 && (S = a.y - f.y),
              (y || S) &&
                (this.options.keepInView && (this._autopanning = !0),
                t.fire("autopanstart").panBy([y, S]));
          }
        },
        _getAnchor: function () {
          return E(
            this._source && this._source._getPopupAnchor
              ? this._source._getPopupAnchor()
              : [0, 0],
          );
        },
      }),
      jo = function (t, e) {
        return new Ie(t, e);
      };
    B.mergeOptions({ closePopupOnClick: !0 }),
      B.include({
        openPopup: function (t, e, i) {
          return this._initOverlay(Ie, t, e, i).openOn(this), this;
        },
        closePopup: function (t) {
          return (t = arguments.length ? t : this._popup), t && t.close(), this;
        },
      }),
      dt.include({
        bindPopup: function (t, e) {
          return (
            (this._popup = this._initOverlay(Ie, this._popup, t, e)),
            this._popupHandlersAdded ||
              (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !0)),
            this
          );
        },
        unbindPopup: function () {
          return (
            this._popup &&
              (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !1),
              (this._popup = null)),
            this
          );
        },
        openPopup: function (t) {
          return (
            this._popup &&
              (this instanceof bt || (this._popup._source = this),
              this._popup._prepareOpen(t || this._latlng) &&
                this._popup.openOn(this._map)),
            this
          );
        },
        closePopup: function () {
          return this._popup && this._popup.close(), this;
        },
        togglePopup: function () {
          return this._popup && this._popup.toggle(this), this;
        },
        isPopupOpen: function () {
          return this._popup ? this._popup.isOpen() : !1;
        },
        setPopupContent: function (t) {
          return this._popup && this._popup.setContent(t), this;
        },
        getPopup: function () {
          return this._popup;
        },
        _openPopup: function (t) {
          if (!(!this._popup || !this._map)) {
            Nt(t);
            var e = t.layer || t.target;
            if (this._popup._source === e && !(e instanceof Ot)) {
              this._map.hasLayer(this._popup)
                ? this.closePopup()
                : this.openPopup(t.latlng);
              return;
            }
            (this._popup._source = e), this.openPopup(t.latlng);
          }
        },
        _movePopup: function (t) {
          this._popup.setLatLng(t.latlng);
        },
        _onKeyPress: function (t) {
          t.originalEvent.keyCode === 13 && this._openPopup(t);
        },
      });
    var Be = gt.extend({
        options: {
          pane: "tooltipPane",
          offset: [0, 0],
          direction: "auto",
          permanent: !1,
          sticky: !1,
          opacity: 0.9,
        },
        onAdd: function (t) {
          gt.prototype.onAdd.call(this, t),
            this.setOpacity(this.options.opacity),
            t.fire("tooltipopen", { tooltip: this }),
            this._source &&
              (this.addEventParent(this._source),
              this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function (t) {
          gt.prototype.onRemove.call(this, t),
            t.fire("tooltipclose", { tooltip: this }),
            this._source &&
              (this.removeEventParent(this._source),
              this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function () {
          var t = gt.prototype.getEvents.call(this);
          return this.options.permanent || (t.preclick = this.close), t;
        },
        _initLayout: function () {
          var t = "leaflet-tooltip",
            e =
              t +
              " " +
              (this.options.className || "") +
              " leaflet-zoom-" +
              (this._zoomAnimated ? "animated" : "hide");
          (this._contentNode = this._container = F("div", e)),
            this._container.setAttribute("role", "tooltip"),
            this._container.setAttribute("id", "leaflet-tooltip-" + p(this));
        },
        _updateLayout: function () {},
        _adjustPan: function () {},
        _setPosition: function (t) {
          var e,
            i,
            n = this._map,
            o = this._container,
            a = n.latLngToContainerPoint(n.getCenter()),
            c = n.layerPointToContainerPoint(t),
            f = this.options.direction,
            m = o.offsetWidth,
            g = o.offsetHeight,
            y = E(this.options.offset),
            S = this._getAnchor();
          f === "top"
            ? ((e = m / 2), (i = g))
            : f === "bottom"
              ? ((e = m / 2), (i = 0))
              : f === "center"
                ? ((e = m / 2), (i = g / 2))
                : f === "right"
                  ? ((e = 0), (i = g / 2))
                  : f === "left"
                    ? ((e = m), (i = g / 2))
                    : c.x < a.x
                      ? ((f = "right"), (e = 0), (i = g / 2))
                      : ((f = "left"), (e = m + (y.x + S.x) * 2), (i = g / 2)),
            (t = t
              .subtract(E(e, i, !0))
              .add(y)
              .add(S)),
            W(o, "leaflet-tooltip-right"),
            W(o, "leaflet-tooltip-left"),
            W(o, "leaflet-tooltip-top"),
            W(o, "leaflet-tooltip-bottom"),
            O(o, "leaflet-tooltip-" + f),
            G(o, t);
        },
        _updatePosition: function () {
          var t = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(t);
        },
        setOpacity: function (t) {
          (this.options.opacity = t), this._container && ut(this._container, t);
        },
        _animateZoom: function (t) {
          var e = this._map._latLngToNewLayerPoint(
            this._latlng,
            t.zoom,
            t.center,
          );
          this._setPosition(e);
        },
        _getAnchor: function () {
          return E(
            this._source &&
              this._source._getTooltipAnchor &&
              !this.options.sticky
              ? this._source._getTooltipAnchor()
              : [0, 0],
          );
        },
      }),
      $o = function (t, e) {
        return new Be(t, e);
      };
    B.include({
      openTooltip: function (t, e, i) {
        return this._initOverlay(Be, t, e, i).openOn(this), this;
      },
      closeTooltip: function (t) {
        return t.close(), this;
      },
    }),
      dt.include({
        bindTooltip: function (t, e) {
          return (
            this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
            (this._tooltip = this._initOverlay(Be, this._tooltip, t, e)),
            this._initTooltipInteractions(),
            this._tooltip.options.permanent &&
              this._map &&
              this._map.hasLayer(this) &&
              this.openTooltip(),
            this
          );
        },
        unbindTooltip: function () {
          return (
            this._tooltip &&
              (this._initTooltipInteractions(!0),
              this.closeTooltip(),
              (this._tooltip = null)),
            this
          );
        },
        _initTooltipInteractions: function (t) {
          if (!(!t && this._tooltipHandlersAdded)) {
            var e = t ? "off" : "on",
              i = { remove: this.closeTooltip, move: this._moveTooltip };
            this._tooltip.options.permanent
              ? (i.add = this._openTooltip)
              : ((i.mouseover = this._openTooltip),
                (i.mouseout = this.closeTooltip),
                (i.click = this._openTooltip),
                this._map
                  ? this._addFocusListeners()
                  : (i.add = this._addFocusListeners)),
              this._tooltip.options.sticky && (i.mousemove = this._moveTooltip),
              this[e](i),
              (this._tooltipHandlersAdded = !t);
          }
        },
        openTooltip: function (t) {
          return (
            this._tooltip &&
              (this instanceof bt || (this._tooltip._source = this),
              this._tooltip._prepareOpen(t) &&
                (this._tooltip.openOn(this._map),
                this.getElement
                  ? this._setAriaDescribedByOnLayer(this)
                  : this.eachLayer &&
                    this.eachLayer(this._setAriaDescribedByOnLayer, this))),
            this
          );
        },
        closeTooltip: function () {
          if (this._tooltip) return this._tooltip.close();
        },
        toggleTooltip: function () {
          return this._tooltip && this._tooltip.toggle(this), this;
        },
        isTooltipOpen: function () {
          return this._tooltip.isOpen();
        },
        setTooltipContent: function (t) {
          return this._tooltip && this._tooltip.setContent(t), this;
        },
        getTooltip: function () {
          return this._tooltip;
        },
        _addFocusListeners: function () {
          this.getElement
            ? this._addFocusListenersOnLayer(this)
            : this.eachLayer &&
              this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function (t) {
          var e = typeof t.getElement == "function" && t.getElement();
          e &&
            (k(
              e,
              "focus",
              function () {
                (this._tooltip._source = t), this.openTooltip();
              },
              this,
            ),
            k(e, "blur", this.closeTooltip, this));
        },
        _setAriaDescribedByOnLayer: function (t) {
          var e = typeof t.getElement == "function" && t.getElement();
          e && e.setAttribute("aria-describedby", this._tooltip._container.id);
        },
        _openTooltip: function (t) {
          if (!(!this._tooltip || !this._map)) {
            if (
              this._map.dragging &&
              this._map.dragging.moving() &&
              !this._openOnceFlag
            ) {
              this._openOnceFlag = !0;
              var e = this;
              this._map.once("moveend", function () {
                (e._openOnceFlag = !1), e._openTooltip(t);
              });
              return;
            }
            (this._tooltip._source = t.layer || t.target),
              this.openTooltip(
                this._tooltip.options.sticky ? t.latlng : void 0,
              );
          }
        },
        _moveTooltip: function (t) {
          var e = t.latlng,
            i,
            n;
          this._tooltip.options.sticky &&
            t.originalEvent &&
            ((i = this._map.mouseEventToContainerPoint(t.originalEvent)),
            (n = this._map.containerPointToLayerPoint(i)),
            (e = this._map.layerPointToLatLng(n))),
            this._tooltip.setLatLng(e);
        },
      });
    var $n = qt.extend({
      options: {
        iconSize: [12, 12],
        html: !1,
        bgPos: null,
        className: "leaflet-div-icon",
      },
      createIcon: function (t) {
        var e = t && t.tagName === "DIV" ? t : document.createElement("div"),
          i = this.options;
        if (
          (i.html instanceof Element
            ? (be(e), e.appendChild(i.html))
            : (e.innerHTML = i.html !== !1 ? i.html : ""),
          i.bgPos)
        ) {
          var n = E(i.bgPos);
          e.style.backgroundPosition = -n.x + "px " + -n.y + "px";
        }
        return this._setIconStyles(e, "icon"), e;
      },
      createShadow: function () {
        return null;
      },
    });
    function Ho(t) {
      return new $n(t);
    }
    qt.Default = _e;
    var me = dt.extend({
      options: {
        tileSize: 256,
        opacity: 1,
        updateWhenIdle: T.mobile,
        updateWhenZooming: !0,
        updateInterval: 200,
        zIndex: 1,
        bounds: null,
        minZoom: 0,
        maxZoom: void 0,
        maxNativeZoom: void 0,
        minNativeZoom: void 0,
        noWrap: !1,
        pane: "tilePane",
        className: "",
        keepBuffer: 2,
      },
      initialize: function (t) {
        z(this, t);
      },
      onAdd: function () {
        this._initContainer(),
          (this._levels = {}),
          (this._tiles = {}),
          this._resetView();
      },
      beforeAdd: function (t) {
        t._addZoomLimit(this);
      },
      onRemove: function (t) {
        this._removeAllTiles(),
          $(this._container),
          t._removeZoomLimit(this),
          (this._container = null),
          (this._tileZoom = void 0);
      },
      bringToFront: function () {
        return (
          this._map && (Ut(this._container), this._setAutoZIndex(Math.max)),
          this
        );
      },
      bringToBack: function () {
        return (
          this._map && (Vt(this._container), this._setAutoZIndex(Math.min)),
          this
        );
      },
      getContainer: function () {
        return this._container;
      },
      setOpacity: function (t) {
        return (this.options.opacity = t), this._updateOpacity(), this;
      },
      setZIndex: function (t) {
        return (this.options.zIndex = t), this._updateZIndex(), this;
      },
      isLoading: function () {
        return this._loading;
      },
      redraw: function () {
        if (this._map) {
          this._removeAllTiles();
          var t = this._clampZoom(this._map.getZoom());
          t !== this._tileZoom && ((this._tileZoom = t), this._updateLevels()),
            this._update();
        }
        return this;
      },
      getEvents: function () {
        var t = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd,
        };
        return (
          this.options.updateWhenIdle ||
            (this._onMove ||
              (this._onMove = x(
                this._onMoveEnd,
                this.options.updateInterval,
                this,
              )),
            (t.move = this._onMove)),
          this._zoomAnimated && (t.zoomanim = this._animateZoom),
          t
        );
      },
      createTile: function () {
        return document.createElement("div");
      },
      getTileSize: function () {
        var t = this.options.tileSize;
        return t instanceof C ? t : new C(t, t);
      },
      _updateZIndex: function () {
        this._container &&
          this.options.zIndex !== void 0 &&
          this.options.zIndex !== null &&
          (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function (t) {
        for (
          var e = this.getPane().children,
            i = -t(-1 / 0, 1 / 0),
            n = 0,
            o = e.length,
            a;
          n < o;
          n++
        )
          (a = e[n].style.zIndex),
            e[n] !== this._container && a && (i = t(i, +a));
        isFinite(i) &&
          ((this.options.zIndex = i + t(-1, 1)), this._updateZIndex());
      },
      _updateOpacity: function () {
        if (this._map && !T.ielt9) {
          ut(this._container, this.options.opacity);
          var t = +new Date(),
            e = !1,
            i = !1;
          for (var n in this._tiles) {
            var o = this._tiles[n];
            if (!(!o.current || !o.loaded)) {
              var a = Math.min(1, (t - o.loaded) / 200);
              ut(o.el, a),
                a < 1
                  ? (e = !0)
                  : (o.active ? (i = !0) : this._onOpaqueTile(o),
                    (o.active = !0));
            }
          }
          i && !this._noPrune && this._pruneTiles(),
            e &&
              (U(this._fadeFrame),
              (this._fadeFrame = Z(this._updateOpacity, this)));
        }
      },
      _onOpaqueTile: w,
      _initContainer: function () {
        this._container ||
          ((this._container = F(
            "div",
            "leaflet-layer " + (this.options.className || ""),
          )),
          this._updateZIndex(),
          this.options.opacity < 1 && this._updateOpacity(),
          this.getPane().appendChild(this._container));
      },
      _updateLevels: function () {
        var t = this._tileZoom,
          e = this.options.maxZoom;
        if (t !== void 0) {
          for (var i in this._levels)
            (i = Number(i)),
              this._levels[i].el.children.length || i === t
                ? ((this._levels[i].el.style.zIndex = e - Math.abs(t - i)),
                  this._onUpdateLevel(i))
                : ($(this._levels[i].el),
                  this._removeTilesAtZoom(i),
                  this._onRemoveLevel(i),
                  delete this._levels[i]);
          var n = this._levels[t],
            o = this._map;
          return (
            n ||
              ((n = this._levels[t] = {}),
              (n.el = F(
                "div",
                "leaflet-tile-container leaflet-zoom-animated",
                this._container,
              )),
              (n.el.style.zIndex = e),
              (n.origin = o
                .project(o.unproject(o.getPixelOrigin()), t)
                .round()),
              (n.zoom = t),
              this._setZoomTransform(n, o.getCenter(), o.getZoom()),
              w(n.el.offsetWidth),
              this._onCreateLevel(n)),
            (this._level = n),
            n
          );
        }
      },
      _onUpdateLevel: w,
      _onRemoveLevel: w,
      _onCreateLevel: w,
      _pruneTiles: function () {
        if (this._map) {
          var t,
            e,
            i = this._map.getZoom();
          if (i > this.options.maxZoom || i < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (t in this._tiles) (e = this._tiles[t]), (e.retain = e.current);
          for (t in this._tiles)
            if (((e = this._tiles[t]), e.current && !e.active)) {
              var n = e.coords;
              this._retainParent(n.x, n.y, n.z, n.z - 5) ||
                this._retainChildren(n.x, n.y, n.z, n.z + 2);
            }
          for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
        }
      },
      _removeTilesAtZoom: function (t) {
        for (var e in this._tiles)
          this._tiles[e].coords.z === t && this._removeTile(e);
      },
      _removeAllTiles: function () {
        for (var t in this._tiles) this._removeTile(t);
      },
      _invalidateAll: function () {
        for (var t in this._levels)
          $(this._levels[t].el),
            this._onRemoveLevel(Number(t)),
            delete this._levels[t];
        this._removeAllTiles(), (this._tileZoom = void 0);
      },
      _retainParent: function (t, e, i, n) {
        var o = Math.floor(t / 2),
          a = Math.floor(e / 2),
          c = i - 1,
          f = new C(+o, +a);
        f.z = +c;
        var m = this._tileCoordsToKey(f),
          g = this._tiles[m];
        return g && g.active
          ? ((g.retain = !0), !0)
          : (g && g.loaded && (g.retain = !0),
            c > n ? this._retainParent(o, a, c, n) : !1);
      },
      _retainChildren: function (t, e, i, n) {
        for (var o = 2 * t; o < 2 * t + 2; o++)
          for (var a = 2 * e; a < 2 * e + 2; a++) {
            var c = new C(o, a);
            c.z = i + 1;
            var f = this._tileCoordsToKey(c),
              m = this._tiles[f];
            if (m && m.active) {
              m.retain = !0;
              continue;
            } else m && m.loaded && (m.retain = !0);
            i + 1 < n && this._retainChildren(o, a, i + 1, n);
          }
      },
      _resetView: function (t) {
        var e = t && (t.pinch || t.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
      },
      _animateZoom: function (t) {
        this._setView(t.center, t.zoom, !0, t.noUpdate);
      },
      _clampZoom: function (t) {
        var e = this.options;
        return e.minNativeZoom !== void 0 && t < e.minNativeZoom
          ? e.minNativeZoom
          : e.maxNativeZoom !== void 0 && e.maxNativeZoom < t
            ? e.maxNativeZoom
            : t;
      },
      _setView: function (t, e, i, n) {
        var o = Math.round(e);
        (this.options.maxZoom !== void 0 && o > this.options.maxZoom) ||
        (this.options.minZoom !== void 0 && o < this.options.minZoom)
          ? (o = void 0)
          : (o = this._clampZoom(o));
        var a = this.options.updateWhenZooming && o !== this._tileZoom;
        (!n || a) &&
          ((this._tileZoom = o),
          this._abortLoading && this._abortLoading(),
          this._updateLevels(),
          this._resetGrid(),
          o !== void 0 && this._update(t),
          i || this._pruneTiles(),
          (this._noPrune = !!i)),
          this._setZoomTransforms(t, e);
      },
      _setZoomTransforms: function (t, e) {
        for (var i in this._levels)
          this._setZoomTransform(this._levels[i], t, e);
      },
      _setZoomTransform: function (t, e, i) {
        var n = this._map.getZoomScale(i, t.zoom),
          o = t.origin
            .multiplyBy(n)
            .subtract(this._map._getNewPixelOrigin(e, i))
            .round();
        T.any3d ? It(t.el, o, n) : G(t.el, o);
      },
      _resetGrid: function () {
        var t = this._map,
          e = t.options.crs,
          i = (this._tileSize = this.getTileSize()),
          n = this._tileZoom,
          o = this._map.getPixelWorldBounds(this._tileZoom);
        o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
          (this._wrapX = e.wrapLng &&
            !this.options.noWrap && [
              Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x),
              Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y),
            ]),
          (this._wrapY = e.wrapLat &&
            !this.options.noWrap && [
              Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x),
              Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y),
            ]);
      },
      _onMoveEnd: function () {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function (t) {
        var e = this._map,
          i = e._animatingZoom
            ? Math.max(e._animateToZoom, e.getZoom())
            : e.getZoom(),
          n = e.getZoomScale(i, this._tileZoom),
          o = e.project(t, this._tileZoom).floor(),
          a = e.getSize().divideBy(n * 2);
        return new j(o.subtract(a), o.add(a));
      },
      _update: function (t) {
        var e = this._map;
        if (e) {
          var i = this._clampZoom(e.getZoom());
          if (
            (t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0)
          ) {
            var n = this._getTiledPixelBounds(t),
              o = this._pxBoundsToTileRange(n),
              a = o.getCenter(),
              c = [],
              f = this.options.keepBuffer,
              m = new j(
                o.getBottomLeft().subtract([f, -f]),
                o.getTopRight().add([f, -f]),
              );
            if (
              !(
                isFinite(o.min.x) &&
                isFinite(o.min.y) &&
                isFinite(o.max.x) &&
                isFinite(o.max.y)
              )
            )
              throw new Error("Attempted to load an infinite number of tiles");
            for (var g in this._tiles) {
              var y = this._tiles[g].coords;
              (y.z !== this._tileZoom || !m.contains(new C(y.x, y.y))) &&
                (this._tiles[g].current = !1);
            }
            if (Math.abs(i - this._tileZoom) > 1) {
              this._setView(t, i);
              return;
            }
            for (var S = o.min.y; S <= o.max.y; S++)
              for (var A = o.min.x; A <= o.max.x; A++) {
                var Q = new C(A, S);
                if (((Q.z = this._tileZoom), !!this._isValidTile(Q))) {
                  var Y = this._tiles[this._tileCoordsToKey(Q)];
                  Y ? (Y.current = !0) : c.push(Q);
                }
              }
            if (
              (c.sort(function (nt, Jt) {
                return nt.distanceTo(a) - Jt.distanceTo(a);
              }),
              c.length !== 0)
            ) {
              this._loading || ((this._loading = !0), this.fire("loading"));
              var ct = document.createDocumentFragment();
              for (A = 0; A < c.length; A++) this._addTile(c[A], ct);
              this._level.el.appendChild(ct);
            }
          }
        }
      },
      _isValidTile: function (t) {
        var e = this._map.options.crs;
        if (!e.infinite) {
          var i = this._globalTileRange;
          if (
            (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x)) ||
            (!e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
          )
            return !1;
        }
        if (!this.options.bounds) return !0;
        var n = this._tileCoordsToBounds(t);
        return V(this.options.bounds).overlaps(n);
      },
      _keyToBounds: function (t) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t));
      },
      _tileCoordsToNwSe: function (t) {
        var e = this._map,
          i = this.getTileSize(),
          n = t.scaleBy(i),
          o = n.add(i),
          a = e.unproject(n, t.z),
          c = e.unproject(o, t.z);
        return [a, c];
      },
      _tileCoordsToBounds: function (t) {
        var e = this._tileCoordsToNwSe(t),
          i = new it(e[0], e[1]);
        return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
      },
      _tileCoordsToKey: function (t) {
        return t.x + ":" + t.y + ":" + t.z;
      },
      _keyToTileCoords: function (t) {
        var e = t.split(":"),
          i = new C(+e[0], +e[1]);
        return (i.z = +e[2]), i;
      },
      _removeTile: function (t) {
        var e = this._tiles[t];
        e &&
          ($(e.el),
          delete this._tiles[t],
          this.fire("tileunload", {
            tile: e.el,
            coords: this._keyToTileCoords(t),
          }));
      },
      _initTile: function (t) {
        O(t, "leaflet-tile");
        var e = this.getTileSize();
        (t.style.width = e.x + "px"),
          (t.style.height = e.y + "px"),
          (t.onselectstart = w),
          (t.onmousemove = w),
          T.ielt9 && this.options.opacity < 1 && ut(t, this.options.opacity);
      },
      _addTile: function (t, e) {
        var i = this._getTilePos(t),
          n = this._tileCoordsToKey(t),
          o = this.createTile(this._wrapCoords(t), _(this._tileReady, this, t));
        this._initTile(o),
          this.createTile.length < 2 && Z(_(this._tileReady, this, t, null, o)),
          G(o, i),
          (this._tiles[n] = { el: o, coords: t, current: !0 }),
          e.appendChild(o),
          this.fire("tileloadstart", { tile: o, coords: t });
      },
      _tileReady: function (t, e, i) {
        e && this.fire("tileerror", { error: e, tile: i, coords: t });
        var n = this._tileCoordsToKey(t);
        (i = this._tiles[n]),
          i &&
            ((i.loaded = +new Date()),
            this._map._fadeAnimated
              ? (ut(i.el, 0),
                U(this._fadeFrame),
                (this._fadeFrame = Z(this._updateOpacity, this)))
              : ((i.active = !0), this._pruneTiles()),
            e ||
              (O(i.el, "leaflet-tile-loaded"),
              this.fire("tileload", { tile: i.el, coords: t })),
            this._noTilesToLoad() &&
              ((this._loading = !1),
              this.fire("load"),
              T.ielt9 || !this._map._fadeAnimated
                ? Z(this._pruneTiles, this)
                : setTimeout(_(this._pruneTiles, this), 250)));
      },
      _getTilePos: function (t) {
        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function (t) {
        var e = new C(
          this._wrapX ? P(t.x, this._wrapX) : t.x,
          this._wrapY ? P(t.y, this._wrapY) : t.y,
        );
        return (e.z = t.z), e;
      },
      _pxBoundsToTileRange: function (t) {
        var e = this.getTileSize();
        return new j(
          t.min.unscaleBy(e).floor(),
          t.max.unscaleBy(e).ceil().subtract([1, 1]),
        );
      },
      _noTilesToLoad: function () {
        for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
        return !0;
      },
    });
    function Wo(t) {
      return new me(t);
    }
    var Xt = me.extend({
      options: {
        minZoom: 0,
        maxZoom: 18,
        subdomains: "abc",
        errorTileUrl: "",
        zoomOffset: 0,
        tms: !1,
        zoomReverse: !1,
        detectRetina: !1,
        crossOrigin: !1,
        referrerPolicy: !1,
      },
      initialize: function (t, e) {
        (this._url = t),
          (e = z(this, e)),
          e.detectRetina && T.retina && e.maxZoom > 0
            ? ((e.tileSize = Math.floor(e.tileSize / 2)),
              e.zoomReverse
                ? (e.zoomOffset--,
                  (e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)))
                : (e.zoomOffset++,
                  (e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1))),
              (e.minZoom = Math.max(0, e.minZoom)))
            : e.zoomReverse
              ? (e.minZoom = Math.min(e.maxZoom, e.minZoom))
              : (e.maxZoom = Math.max(e.minZoom, e.maxZoom)),
          typeof e.subdomains == "string" &&
            (e.subdomains = e.subdomains.split("")),
          this.on("tileunload", this._onTileRemove);
      },
      setUrl: function (t, e) {
        return (
          this._url === t && e === void 0 && (e = !0),
          (this._url = t),
          e || this.redraw(),
          this
        );
      },
      createTile: function (t, e) {
        var i = document.createElement("img");
        return (
          k(i, "load", _(this._tileOnLoad, this, e, i)),
          k(i, "error", _(this._tileOnError, this, e, i)),
          (this.options.crossOrigin || this.options.crossOrigin === "") &&
            (i.crossOrigin =
              this.options.crossOrigin === !0 ? "" : this.options.crossOrigin),
          typeof this.options.referrerPolicy == "string" &&
            (i.referrerPolicy = this.options.referrerPolicy),
          (i.alt = ""),
          (i.src = this.getTileUrl(t)),
          i
        );
      },
      getTileUrl: function (t) {
        var e = {
          r: T.retina ? "@2x" : "",
          s: this._getSubdomain(t),
          x: t.x,
          y: t.y,
          z: this._getZoomForUrl(),
        };
        if (this._map && !this._map.options.crs.infinite) {
          var i = this._globalTileRange.max.y - t.y;
          this.options.tms && (e.y = i), (e["-y"] = i);
        }
        return J(this._url, l(e, this.options));
      },
      _tileOnLoad: function (t, e) {
        T.ielt9 ? setTimeout(_(t, this, null, e), 0) : t(null, e);
      },
      _tileOnError: function (t, e, i) {
        var n = this.options.errorTileUrl;
        n && e.getAttribute("src") !== n && (e.src = n), t(i, e);
      },
      _onTileRemove: function (t) {
        t.tile.onload = null;
      },
      _getZoomForUrl: function () {
        var t = this._tileZoom,
          e = this.options.maxZoom,
          i = this.options.zoomReverse,
          n = this.options.zoomOffset;
        return i && (t = e - t), t + n;
      },
      _getSubdomain: function (t) {
        var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
        return this.options.subdomains[e];
      },
      _abortLoading: function () {
        var t, e;
        for (t in this._tiles)
          if (
            this._tiles[t].coords.z !== this._tileZoom &&
            ((e = this._tiles[t].el),
            (e.onload = w),
            (e.onerror = w),
            !e.complete)
          ) {
            e.src = Et;
            var i = this._tiles[t].coords;
            $(e),
              delete this._tiles[t],
              this.fire("tileabort", { tile: e, coords: i });
          }
      },
      _removeTile: function (t) {
        var e = this._tiles[t];
        if (e)
          return (
            e.el.setAttribute("src", Et), me.prototype._removeTile.call(this, t)
          );
      },
      _tileReady: function (t, e, i) {
        if (!(!this._map || (i && i.getAttribute("src") === Et)))
          return me.prototype._tileReady.call(this, t, e, i);
      },
    });
    function Hn(t, e) {
      return new Xt(t, e);
    }
    var Wn = Xt.extend({
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        layers: "",
        styles: "",
        format: "image/jpeg",
        transparent: !1,
        version: "1.1.1",
      },
      options: { crs: null, uppercase: !1 },
      initialize: function (t, e) {
        this._url = t;
        var i = l({}, this.defaultWmsParams);
        for (var n in e) n in this.options || (i[n] = e[n]);
        e = z(this, e);
        var o = e.detectRetina && T.retina ? 2 : 1,
          a = this.getTileSize();
        (i.width = a.x * o), (i.height = a.y * o), (this.wmsParams = i);
      },
      onAdd: function (t) {
        (this._crs = this.options.crs || t.options.crs),
          (this._wmsVersion = parseFloat(this.wmsParams.version));
        var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
        (this.wmsParams[e] = this._crs.code), Xt.prototype.onAdd.call(this, t);
      },
      getTileUrl: function (t) {
        var e = this._tileCoordsToNwSe(t),
          i = this._crs,
          n = et(i.project(e[0]), i.project(e[1])),
          o = n.min,
          a = n.max,
          c = (
            this._wmsVersion >= 1.3 && this._crs === Bn
              ? [o.y, o.x, a.y, a.x]
              : [o.x, o.y, a.x, a.y]
          ).join(","),
          f = Xt.prototype.getTileUrl.call(this, t);
        return (
          f +
          rt(this.wmsParams, f, this.options.uppercase) +
          (this.options.uppercase ? "&BBOX=" : "&bbox=") +
          c
        );
      },
      setParams: function (t, e) {
        return l(this.wmsParams, t), e || this.redraw(), this;
      },
    });
    function Uo(t, e) {
      return new Wn(t, e);
    }
    (Xt.WMS = Wn), (Hn.wms = Uo);
    var Tt = dt.extend({
        options: { padding: 0.1 },
        initialize: function (t) {
          z(this, t), p(this), (this._layers = this._layers || {});
        },
        onAdd: function () {
          this._container ||
            (this._initContainer(),
            O(this._container, "leaflet-zoom-animated")),
            this.getPane().appendChild(this._container),
            this._update(),
            this.on("update", this._updatePaths, this);
        },
        onRemove: function () {
          this.off("update", this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function () {
          var t = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd,
          };
          return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
        },
        _onAnimZoom: function (t) {
          this._updateTransform(t.center, t.zoom);
        },
        _onZoom: function () {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function (t, e) {
          var i = this._map.getZoomScale(e, this._zoom),
            n = this._map.getSize().multiplyBy(0.5 + this.options.padding),
            o = this._map.project(this._center, e),
            a = n
              .multiplyBy(-i)
              .add(o)
              .subtract(this._map._getNewPixelOrigin(t, e));
          T.any3d ? It(this._container, a, i) : G(this._container, a);
        },
        _reset: function () {
          this._update(), this._updateTransform(this._center, this._zoom);
          for (var t in this._layers) this._layers[t]._reset();
        },
        _onZoomEnd: function () {
          for (var t in this._layers) this._layers[t]._project();
        },
        _updatePaths: function () {
          for (var t in this._layers) this._layers[t]._update();
        },
        _update: function () {
          var t = this.options.padding,
            e = this._map.getSize(),
            i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
          (this._bounds = new j(i, i.add(e.multiplyBy(1 + t * 2)).round())),
            (this._center = this._map.getCenter()),
            (this._zoom = this._map.getZoom());
        },
      }),
      Un = Tt.extend({
        options: { tolerance: 0 },
        getEvents: function () {
          var t = Tt.prototype.getEvents.call(this);
          return (t.viewprereset = this._onViewPreReset), t;
        },
        _onViewPreReset: function () {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function () {
          Tt.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function () {
          var t = (this._container = document.createElement("canvas"));
          k(t, "mousemove", this._onMouseMove, this),
            k(
              t,
              "click dblclick mousedown mouseup contextmenu",
              this._onClick,
              this,
            ),
            k(t, "mouseout", this._handleMouseOut, this),
            (t._leaflet_disable_events = !0),
            (this._ctx = t.getContext("2d"));
        },
        _destroyContainer: function () {
          U(this._redrawRequest),
            delete this._ctx,
            $(this._container),
            R(this._container),
            delete this._container;
        },
        _updatePaths: function () {
          if (!this._postponeUpdatePaths) {
            var t;
            this._redrawBounds = null;
            for (var e in this._layers) (t = this._layers[e]), t._update();
            this._redraw();
          }
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            Tt.prototype._update.call(this);
            var t = this._bounds,
              e = this._container,
              i = t.getSize(),
              n = T.retina ? 2 : 1;
            G(e, t.min),
              (e.width = n * i.x),
              (e.height = n * i.y),
              (e.style.width = i.x + "px"),
              (e.style.height = i.y + "px"),
              T.retina && this._ctx.scale(2, 2),
              this._ctx.translate(-t.min.x, -t.min.y),
              this.fire("update");
          }
        },
        _reset: function () {
          Tt.prototype._reset.call(this),
            this._postponeUpdatePaths &&
              ((this._postponeUpdatePaths = !1), this._updatePaths());
        },
        _initPath: function (t) {
          this._updateDashArray(t), (this._layers[p(t)] = t);
          var e = (t._order = { layer: t, prev: this._drawLast, next: null });
          this._drawLast && (this._drawLast.next = e),
            (this._drawLast = e),
            (this._drawFirst = this._drawFirst || this._drawLast);
        },
        _addPath: function (t) {
          this._requestRedraw(t);
        },
        _removePath: function (t) {
          var e = t._order,
            i = e.next,
            n = e.prev;
          i ? (i.prev = n) : (this._drawLast = n),
            n ? (n.next = i) : (this._drawFirst = i),
            delete t._order,
            delete this._layers[p(t)],
            this._requestRedraw(t);
        },
        _updatePath: function (t) {
          this._extendRedrawBounds(t),
            t._project(),
            t._update(),
            this._requestRedraw(t);
        },
        _updateStyle: function (t) {
          this._updateDashArray(t), this._requestRedraw(t);
        },
        _updateDashArray: function (t) {
          if (typeof t.options.dashArray == "string") {
            var e = t.options.dashArray.split(/[, ]+/),
              i = [],
              n,
              o;
            for (o = 0; o < e.length; o++) {
              if (((n = Number(e[o])), isNaN(n))) return;
              i.push(n);
            }
            t.options._dashArray = i;
          } else t.options._dashArray = t.options.dashArray;
        },
        _requestRedraw: function (t) {
          this._map &&
            (this._extendRedrawBounds(t),
            (this._redrawRequest =
              this._redrawRequest || Z(this._redraw, this)));
        },
        _extendRedrawBounds: function (t) {
          if (t._pxBounds) {
            var e = (t.options.weight || 0) + 1;
            (this._redrawBounds = this._redrawBounds || new j()),
              this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
              this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
          }
        },
        _redraw: function () {
          (this._redrawRequest = null),
            this._redrawBounds &&
              (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
            this._clear(),
            this._draw(),
            (this._redrawBounds = null);
        },
        _clear: function () {
          var t = this._redrawBounds;
          if (t) {
            var e = t.getSize();
            this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
          } else
            this._ctx.save(),
              this._ctx.setTransform(1, 0, 0, 1, 0, 0),
              this._ctx.clearRect(
                0,
                0,
                this._container.width,
                this._container.height,
              ),
              this._ctx.restore();
        },
        _draw: function () {
          var t,
            e = this._redrawBounds;
          if ((this._ctx.save(), e)) {
            var i = e.getSize();
            this._ctx.beginPath(),
              this._ctx.rect(e.min.x, e.min.y, i.x, i.y),
              this._ctx.clip();
          }
          this._drawing = !0;
          for (var n = this._drawFirst; n; n = n.next)
            (t = n.layer),
              (!e || (t._pxBounds && t._pxBounds.intersects(e))) &&
                t._updatePath();
          (this._drawing = !1), this._ctx.restore();
        },
        _updatePoly: function (t, e) {
          if (this._drawing) {
            var i,
              n,
              o,
              a,
              c = t._parts,
              f = c.length,
              m = this._ctx;
            if (f) {
              for (m.beginPath(), i = 0; i < f; i++) {
                for (n = 0, o = c[i].length; n < o; n++)
                  (a = c[i][n]), m[n ? "lineTo" : "moveTo"](a.x, a.y);
                e && m.closePath();
              }
              this._fillStroke(m, t);
            }
          }
        },
        _updateCircle: function (t) {
          if (!(!this._drawing || t._empty())) {
            var e = t._point,
              i = this._ctx,
              n = Math.max(Math.round(t._radius), 1),
              o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
            o !== 1 && (i.save(), i.scale(1, o)),
              i.beginPath(),
              i.arc(e.x, e.y / o, n, 0, Math.PI * 2, !1),
              o !== 1 && i.restore(),
              this._fillStroke(i, t);
          }
        },
        _fillStroke: function (t, e) {
          var i = e.options;
          i.fill &&
            ((t.globalAlpha = i.fillOpacity),
            (t.fillStyle = i.fillColor || i.color),
            t.fill(i.fillRule || "evenodd")),
            i.stroke &&
              i.weight !== 0 &&
              (t.setLineDash &&
                t.setLineDash((e.options && e.options._dashArray) || []),
              (t.globalAlpha = i.opacity),
              (t.lineWidth = i.weight),
              (t.strokeStyle = i.color),
              (t.lineCap = i.lineCap),
              (t.lineJoin = i.lineJoin),
              t.stroke());
        },
        _onClick: function (t) {
          for (
            var e = this._map.mouseEventToLayerPoint(t),
              i,
              n,
              o = this._drawFirst;
            o;
            o = o.next
          )
            (i = o.layer),
              i.options.interactive &&
                i._containsPoint(e) &&
                (!(t.type === "click" || t.type === "preclick") ||
                  !this._map._draggableMoved(i)) &&
                (n = i);
          this._fireEvent(n ? [n] : !1, t);
        },
        _onMouseMove: function (t) {
          if (
            !(
              !this._map ||
              this._map.dragging.moving() ||
              this._map._animatingZoom
            )
          ) {
            var e = this._map.mouseEventToLayerPoint(t);
            this._handleMouseHover(t, e);
          }
        },
        _handleMouseOut: function (t) {
          var e = this._hoveredLayer;
          e &&
            (W(this._container, "leaflet-interactive"),
            this._fireEvent([e], t, "mouseout"),
            (this._hoveredLayer = null),
            (this._mouseHoverThrottled = !1));
        },
        _handleMouseHover: function (t, e) {
          if (!this._mouseHoverThrottled) {
            for (var i, n, o = this._drawFirst; o; o = o.next)
              (i = o.layer),
                i.options.interactive && i._containsPoint(e) && (n = i);
            n !== this._hoveredLayer &&
              (this._handleMouseOut(t),
              n &&
                (O(this._container, "leaflet-interactive"),
                this._fireEvent([n], t, "mouseover"),
                (this._hoveredLayer = n))),
              this._fireEvent(
                this._hoveredLayer ? [this._hoveredLayer] : !1,
                t,
              ),
              (this._mouseHoverThrottled = !0),
              setTimeout(
                _(function () {
                  this._mouseHoverThrottled = !1;
                }, this),
                32,
              );
          }
        },
        _fireEvent: function (t, e, i) {
          this._map._fireDOMEvent(e, i || e.type, t);
        },
        _bringToFront: function (t) {
          var e = t._order;
          if (e) {
            var i = e.next,
              n = e.prev;
            if (i) i.prev = n;
            else return;
            n ? (n.next = i) : i && (this._drawFirst = i),
              (e.prev = this._drawLast),
              (this._drawLast.next = e),
              (e.next = null),
              (this._drawLast = e),
              this._requestRedraw(t);
          }
        },
        _bringToBack: function (t) {
          var e = t._order;
          if (e) {
            var i = e.next,
              n = e.prev;
            if (n) n.next = i;
            else return;
            i ? (i.prev = n) : n && (this._drawLast = n),
              (e.prev = null),
              (e.next = this._drawFirst),
              (this._drawFirst.prev = e),
              (this._drawFirst = e),
              this._requestRedraw(t);
          }
        },
      });
    function Vn(t) {
      return T.canvas ? new Un(t) : null;
    }
    var pe = (function () {
        try {
          return (
            document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
            function (t) {
              return document.createElement("<lvml:" + t + ' class="lvml">');
            }
          );
        } catch {}
        return function (t) {
          return document.createElement(
            "<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">',
          );
        };
      })(),
      Vo = {
        _initContainer: function () {
          this._container = F("div", "leaflet-vml-container");
        },
        _update: function () {
          this._map._animatingZoom ||
            (Tt.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function (t) {
          var e = (t._container = pe("shape"));
          O(e, "leaflet-vml-shape " + (this.options.className || "")),
            (e.coordsize = "1 1"),
            (t._path = pe("path")),
            e.appendChild(t._path),
            this._updateStyle(t),
            (this._layers[p(t)] = t);
        },
        _addPath: function (t) {
          var e = t._container;
          this._container.appendChild(e),
            t.options.interactive && t.addInteractiveTarget(e);
        },
        _removePath: function (t) {
          var e = t._container;
          $(e), t.removeInteractiveTarget(e), delete this._layers[p(t)];
        },
        _updateStyle: function (t) {
          var e = t._stroke,
            i = t._fill,
            n = t.options,
            o = t._container;
          (o.stroked = !!n.stroke),
            (o.filled = !!n.fill),
            n.stroke
              ? (e || (e = t._stroke = pe("stroke")),
                o.appendChild(e),
                (e.weight = n.weight + "px"),
                (e.color = n.color),
                (e.opacity = n.opacity),
                n.dashArray
                  ? (e.dashStyle = tt(n.dashArray)
                      ? n.dashArray.join(" ")
                      : n.dashArray.replace(/( *, *)/g, " "))
                  : (e.dashStyle = ""),
                (e.endcap = n.lineCap.replace("butt", "flat")),
                (e.joinstyle = n.lineJoin))
              : e && (o.removeChild(e), (t._stroke = null)),
            n.fill
              ? (i || (i = t._fill = pe("fill")),
                o.appendChild(i),
                (i.color = n.fillColor || n.color),
                (i.opacity = n.fillOpacity))
              : i && (o.removeChild(i), (t._fill = null));
        },
        _updateCircle: function (t) {
          var e = t._point.round(),
            i = Math.round(t._radius),
            n = Math.round(t._radiusY || i);
          this._setPath(
            t,
            t._empty()
              ? "M0 0"
              : "AL " +
                  e.x +
                  "," +
                  e.y +
                  " " +
                  i +
                  "," +
                  n +
                  " 0," +
                  65535 * 360,
          );
        },
        _setPath: function (t, e) {
          t._path.v = e;
        },
        _bringToFront: function (t) {
          Ut(t._container);
        },
        _bringToBack: function (t) {
          Vt(t._container);
        },
      },
      Fe = T.vml ? pe : Ki,
      ge = Tt.extend({
        _initContainer: function () {
          (this._container = Fe("svg")),
            this._container.setAttribute("pointer-events", "none"),
            (this._rootGroup = Fe("g")),
            this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function () {
          $(this._container),
            R(this._container),
            delete this._container,
            delete this._rootGroup,
            delete this._svgSize;
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            Tt.prototype._update.call(this);
            var t = this._bounds,
              e = t.getSize(),
              i = this._container;
            (!this._svgSize || !this._svgSize.equals(e)) &&
              ((this._svgSize = e),
              i.setAttribute("width", e.x),
              i.setAttribute("height", e.y)),
              G(i, t.min),
              i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")),
              this.fire("update");
          }
        },
        _initPath: function (t) {
          var e = (t._path = Fe("path"));
          t.options.className && O(e, t.options.className),
            t.options.interactive && O(e, "leaflet-interactive"),
            this._updateStyle(t),
            (this._layers[p(t)] = t);
        },
        _addPath: function (t) {
          this._rootGroup || this._initContainer(),
            this._rootGroup.appendChild(t._path),
            t.addInteractiveTarget(t._path);
        },
        _removePath: function (t) {
          $(t._path),
            t.removeInteractiveTarget(t._path),
            delete this._layers[p(t)];
        },
        _updatePath: function (t) {
          t._project(), t._update();
        },
        _updateStyle: function (t) {
          var e = t._path,
            i = t.options;
          e &&
            (i.stroke
              ? (e.setAttribute("stroke", i.color),
                e.setAttribute("stroke-opacity", i.opacity),
                e.setAttribute("stroke-width", i.weight),
                e.setAttribute("stroke-linecap", i.lineCap),
                e.setAttribute("stroke-linejoin", i.lineJoin),
                i.dashArray
                  ? e.setAttribute("stroke-dasharray", i.dashArray)
                  : e.removeAttribute("stroke-dasharray"),
                i.dashOffset
                  ? e.setAttribute("stroke-dashoffset", i.dashOffset)
                  : e.removeAttribute("stroke-dashoffset"))
              : e.setAttribute("stroke", "none"),
            i.fill
              ? (e.setAttribute("fill", i.fillColor || i.color),
                e.setAttribute("fill-opacity", i.fillOpacity),
                e.setAttribute("fill-rule", i.fillRule || "evenodd"))
              : e.setAttribute("fill", "none"));
        },
        _updatePoly: function (t, e) {
          this._setPath(t, Yi(t._parts, e));
        },
        _updateCircle: function (t) {
          var e = t._point,
            i = Math.max(Math.round(t._radius), 1),
            n = Math.max(Math.round(t._radiusY), 1) || i,
            o = "a" + i + "," + n + " 0 1,0 ",
            a = t._empty()
              ? "M0 0"
              : "M" +
                (e.x - i) +
                "," +
                e.y +
                o +
                i * 2 +
                ",0 " +
                o +
                -i * 2 +
                ",0 ";
          this._setPath(t, a);
        },
        _setPath: function (t, e) {
          t._path.setAttribute("d", e);
        },
        _bringToFront: function (t) {
          Ut(t._path);
        },
        _bringToBack: function (t) {
          Vt(t._path);
        },
      });
    T.vml && ge.include(Vo);
    function Gn(t) {
      return T.svg || T.vml ? new ge(t) : null;
    }
    B.include({
      getRenderer: function (t) {
        var e =
          t.options.renderer ||
          this._getPaneRenderer(t.options.pane) ||
          this.options.renderer ||
          this._renderer;
        return (
          e || (e = this._renderer = this._createRenderer()),
          this.hasLayer(e) || this.addLayer(e),
          e
        );
      },
      _getPaneRenderer: function (t) {
        if (t === "overlayPane" || t === void 0) return !1;
        var e = this._paneRenderers[t];
        return (
          e === void 0 &&
            ((e = this._createRenderer({ pane: t })),
            (this._paneRenderers[t] = e)),
          e
        );
      },
      _createRenderer: function (t) {
        return (this.options.preferCanvas && Vn(t)) || Gn(t);
      },
    });
    var qn = Kt.extend({
      initialize: function (t, e) {
        Kt.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
      },
      setBounds: function (t) {
        return this.setLatLngs(this._boundsToLatLngs(t));
      },
      _boundsToLatLngs: function (t) {
        return (
          (t = V(t)),
          [
            t.getSouthWest(),
            t.getNorthWest(),
            t.getNorthEast(),
            t.getSouthEast(),
          ]
        );
      },
    });
    function Go(t, e) {
      return new qn(t, e);
    }
    (ge.create = Fe),
      (ge.pointsToPath = Yi),
      (Lt.geometryToLayer = Me),
      (Lt.coordsToLatLng = Si),
      (Lt.coordsToLatLngs = Oe),
      (Lt.latLngToCoords = Ei),
      (Lt.latLngsToCoords = ze),
      (Lt.getFeature = Yt),
      (Lt.asFeature = Ae),
      B.mergeOptions({ boxZoom: !0 });
    var Kn = pt.extend({
      initialize: function (t) {
        (this._map = t),
          (this._container = t._container),
          (this._pane = t._panes.overlayPane),
          (this._resetStateTimeout = 0),
          t.on("unload", this._destroy, this);
      },
      addHooks: function () {
        k(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function () {
        R(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function () {
        return this._moved;
      },
      _destroy: function () {
        $(this._pane), delete this._pane;
      },
      _resetState: function () {
        (this._resetStateTimeout = 0), (this._moved = !1);
      },
      _clearDeferredResetState: function () {
        this._resetStateTimeout !== 0 &&
          (clearTimeout(this._resetStateTimeout),
          (this._resetStateTimeout = 0));
      },
      _onMouseDown: function (t) {
        if (!t.shiftKey || (t.which !== 1 && t.button !== 1)) return !1;
        this._clearDeferredResetState(),
          this._resetState(),
          he(),
          ui(),
          (this._startPoint = this._map.mouseEventToContainerPoint(t)),
          k(
            document,
            {
              contextmenu: Nt,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this,
          );
      },
      _onMouseMove: function (t) {
        this._moved ||
          ((this._moved = !0),
          (this._box = F("div", "leaflet-zoom-box", this._container)),
          O(this._container, "leaflet-crosshair"),
          this._map.fire("boxzoomstart")),
          (this._point = this._map.mouseEventToContainerPoint(t));
        var e = new j(this._point, this._startPoint),
          i = e.getSize();
        G(this._box, e.min),
          (this._box.style.width = i.x + "px"),
          (this._box.style.height = i.y + "px");
      },
      _finish: function () {
        this._moved && ($(this._box), W(this._container, "leaflet-crosshair")),
          ue(),
          li(),
          R(
            document,
            {
              contextmenu: Nt,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this,
          );
      },
      _onMouseUp: function (t) {
        if (
          !(t.which !== 1 && t.button !== 1) &&
          (this._finish(), !!this._moved)
        ) {
          this._clearDeferredResetState(),
            (this._resetStateTimeout = setTimeout(
              _(this._resetState, this),
              0,
            ));
          var e = new it(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point),
          );
          this._map.fitBounds(e).fire("boxzoomend", { boxZoomBounds: e });
        }
      },
      _onKeyDown: function (t) {
        t.keyCode === 27 &&
          (this._finish(), this._clearDeferredResetState(), this._resetState());
      },
    });
    B.addInitHook("addHandler", "boxZoom", Kn),
      B.mergeOptions({ doubleClickZoom: !0 });
    var Yn = pt.extend({
      addHooks: function () {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function () {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function (t) {
        var e = this._map,
          i = e.getZoom(),
          n = e.options.zoomDelta,
          o = t.originalEvent.shiftKey ? i - n : i + n;
        e.options.doubleClickZoom === "center"
          ? e.setZoom(o)
          : e.setZoomAround(t.containerPoint, o);
      },
    });
    B.addInitHook("addHandler", "doubleClickZoom", Yn),
      B.mergeOptions({
        dragging: !0,
        inertia: !0,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: 0.2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0,
      });
    var Xn = pt.extend({
      addHooks: function () {
        if (!this._draggable) {
          var t = this._map;
          (this._draggable = new Mt(t._mapPane, t._container)),
            this._draggable.on(
              {
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this,
            ),
            this._draggable.on("predrag", this._onPreDragLimit, this),
            t.options.worldCopyJump &&
              (this._draggable.on("predrag", this._onPreDragWrap, this),
              t.on("zoomend", this._onZoomEnd, this),
              t.whenReady(this._onZoomEnd, this));
        }
        O(this._map._container, "leaflet-grab leaflet-touch-drag"),
          this._draggable.enable(),
          (this._positions = []),
          (this._times = []);
      },
      removeHooks: function () {
        W(this._map._container, "leaflet-grab"),
          W(this._map._container, "leaflet-touch-drag"),
          this._draggable.disable();
      },
      moved: function () {
        return this._draggable && this._draggable._moved;
      },
      moving: function () {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function () {
        var t = this._map;
        if (
          (t._stop(),
          this._map.options.maxBounds && this._map.options.maxBoundsViscosity)
        ) {
          var e = V(this._map.options.maxBounds);
          (this._offsetLimit = et(
            this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
            this._map
              .latLngToContainerPoint(e.getSouthEast())
              .multiplyBy(-1)
              .add(this._map.getSize()),
          )),
            (this._viscosity = Math.min(
              1,
              Math.max(0, this._map.options.maxBoundsViscosity),
            ));
        } else this._offsetLimit = null;
        t.fire("movestart").fire("dragstart"),
          t.options.inertia && ((this._positions = []), (this._times = []));
      },
      _onDrag: function (t) {
        if (this._map.options.inertia) {
          var e = (this._lastTime = +new Date()),
            i = (this._lastPos =
              this._draggable._absPos || this._draggable._newPos);
          this._positions.push(i), this._times.push(e), this._prunePositions(e);
        }
        this._map.fire("move", t).fire("drag", t);
      },
      _prunePositions: function (t) {
        for (; this._positions.length > 1 && t - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function () {
        var t = this._map.getSize().divideBy(2),
          e = this._map.latLngToLayerPoint([0, 0]);
        (this._initialWorldOffset = e.subtract(t).x),
          (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
      },
      _viscousLimit: function (t, e) {
        return t - (t - e) * this._viscosity;
      },
      _onPreDragLimit: function () {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var t = this._draggable._newPos.subtract(this._draggable._startPos),
            e = this._offsetLimit;
          t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
            t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
            t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
            t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
            (this._draggable._newPos = this._draggable._startPos.add(t));
        }
      },
      _onPreDragWrap: function () {
        var t = this._worldWidth,
          e = Math.round(t / 2),
          i = this._initialWorldOffset,
          n = this._draggable._newPos.x,
          o = ((n - e + i) % t) + e - i,
          a = ((n + e + i) % t) - e - i,
          c = Math.abs(o + i) < Math.abs(a + i) ? o : a;
        (this._draggable._absPos = this._draggable._newPos.clone()),
          (this._draggable._newPos.x = c);
      },
      _onDragEnd: function (t) {
        var e = this._map,
          i = e.options,
          n = !i.inertia || t.noInertia || this._times.length < 2;
        if ((e.fire("dragend", t), n)) e.fire("moveend");
        else {
          this._prunePositions(+new Date());
          var o = this._lastPos.subtract(this._positions[0]),
            a = (this._lastTime - this._times[0]) / 1e3,
            c = i.easeLinearity,
            f = o.multiplyBy(c / a),
            m = f.distanceTo([0, 0]),
            g = Math.min(i.inertiaMaxSpeed, m),
            y = f.multiplyBy(g / m),
            S = g / (i.inertiaDeceleration * c),
            A = y.multiplyBy(-S / 2).round();
          !A.x && !A.y
            ? e.fire("moveend")
            : ((A = e._limitOffset(A, e.options.maxBounds)),
              Z(function () {
                e.panBy(A, {
                  duration: S,
                  easeLinearity: c,
                  noMoveStart: !0,
                  animate: !0,
                });
              }));
        }
      },
    });
    B.addInitHook("addHandler", "dragging", Xn),
      B.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
    var Jn = pt.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173],
      },
      initialize: function (t) {
        (this._map = t),
          this._setPanDelta(t.options.keyboardPanDelta),
          this._setZoomDelta(t.options.zoomDelta);
      },
      addHooks: function () {
        var t = this._map._container;
        t.tabIndex <= 0 && (t.tabIndex = "0"),
          k(
            t,
            {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown,
            },
            this,
          ),
          this._map.on(
            { focus: this._addHooks, blur: this._removeHooks },
            this,
          );
      },
      removeHooks: function () {
        this._removeHooks(),
          R(
            this._map._container,
            {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown,
            },
            this,
          ),
          this._map.off(
            { focus: this._addHooks, blur: this._removeHooks },
            this,
          );
      },
      _onMouseDown: function () {
        if (!this._focused) {
          var t = document.body,
            e = document.documentElement,
            i = t.scrollTop || e.scrollTop,
            n = t.scrollLeft || e.scrollLeft;
          this._map._container.focus(), window.scrollTo(n, i);
        }
      },
      _onFocus: function () {
        (this._focused = !0), this._map.fire("focus");
      },
      _onBlur: function () {
        (this._focused = !1), this._map.fire("blur");
      },
      _setPanDelta: function (t) {
        var e = (this._panKeys = {}),
          i = this.keyCodes,
          n,
          o;
        for (n = 0, o = i.left.length; n < o; n++) e[i.left[n]] = [-1 * t, 0];
        for (n = 0, o = i.right.length; n < o; n++) e[i.right[n]] = [t, 0];
        for (n = 0, o = i.down.length; n < o; n++) e[i.down[n]] = [0, t];
        for (n = 0, o = i.up.length; n < o; n++) e[i.up[n]] = [0, -1 * t];
      },
      _setZoomDelta: function (t) {
        var e = (this._zoomKeys = {}),
          i = this.keyCodes,
          n,
          o;
        for (n = 0, o = i.zoomIn.length; n < o; n++) e[i.zoomIn[n]] = t;
        for (n = 0, o = i.zoomOut.length; n < o; n++) e[i.zoomOut[n]] = -t;
      },
      _addHooks: function () {
        k(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function () {
        R(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function (t) {
        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
          var e = t.keyCode,
            i = this._map,
            n;
          if (e in this._panKeys) {
            if (!i._panAnim || !i._panAnim._inProgress)
              if (
                ((n = this._panKeys[e]),
                t.shiftKey && (n = E(n).multiplyBy(3)),
                i.options.maxBounds &&
                  (n = i._limitOffset(E(n), i.options.maxBounds)),
                i.options.worldCopyJump)
              ) {
                var o = i.wrapLatLng(
                  i.unproject(i.project(i.getCenter()).add(n)),
                );
                i.panTo(o);
              } else i.panBy(n);
          } else if (e in this._zoomKeys)
            i.setZoom(i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
          else if (e === 27 && i._popup && i._popup.options.closeOnEscapeKey)
            i.closePopup();
          else return;
          Nt(t);
        }
      },
    });
    B.addInitHook("addHandler", "keyboard", Jn),
      B.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60,
      });
    var Qn = pt.extend({
      addHooks: function () {
        k(this._map._container, "wheel", this._onWheelScroll, this),
          (this._delta = 0);
      },
      removeHooks: function () {
        R(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function (t) {
        var e = Pn(t),
          i = this._map.options.wheelDebounceTime;
        (this._delta += e),
          (this._lastMousePos = this._map.mouseEventToContainerPoint(t)),
          this._startTime || (this._startTime = +new Date());
        var n = Math.max(i - (+new Date() - this._startTime), 0);
        clearTimeout(this._timer),
          (this._timer = setTimeout(_(this._performZoom, this), n)),
          Nt(t);
      },
      _performZoom: function () {
        var t = this._map,
          e = t.getZoom(),
          i = this._map.options.zoomSnap || 0;
        t._stop();
        var n = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
          o = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(n))))) / Math.LN2,
          a = i ? Math.ceil(o / i) * i : o,
          c = t._limitZoom(e + (this._delta > 0 ? a : -a)) - e;
        (this._delta = 0),
          (this._startTime = null),
          c &&
            (t.options.scrollWheelZoom === "center"
              ? t.setZoom(e + c)
              : t.setZoomAround(this._lastMousePos, e + c));
      },
    });
    B.addInitHook("addHandler", "scrollWheelZoom", Qn);
    var qo = 600;
    B.mergeOptions({
      tapHold: T.touchNative && T.safari && T.mobile,
      tapTolerance: 15,
    });
    var ts = pt.extend({
      addHooks: function () {
        k(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function () {
        R(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function (t) {
        if ((clearTimeout(this._holdTimeout), t.touches.length === 1)) {
          var e = t.touches[0];
          (this._startPos = this._newPos = new C(e.clientX, e.clientY)),
            (this._holdTimeout = setTimeout(
              _(function () {
                this._cancel(),
                  this._isTapValid() &&
                    (k(document, "touchend", X),
                    k(
                      document,
                      "touchend touchcancel",
                      this._cancelClickPrevent,
                    ),
                    this._simulateEvent("contextmenu", e));
              }, this),
              qo,
            )),
            k(document, "touchend touchcancel contextmenu", this._cancel, this),
            k(document, "touchmove", this._onMove, this);
        }
      },
      _cancelClickPrevent: function t() {
        R(document, "touchend", X), R(document, "touchend touchcancel", t);
      },
      _cancel: function () {
        clearTimeout(this._holdTimeout),
          R(document, "touchend touchcancel contextmenu", this._cancel, this),
          R(document, "touchmove", this._onMove, this);
      },
      _onMove: function (t) {
        var e = t.touches[0];
        this._newPos = new C(e.clientX, e.clientY);
      },
      _isTapValid: function () {
        return (
          this._newPos.distanceTo(this._startPos) <=
          this._map.options.tapTolerance
        );
      },
      _simulateEvent: function (t, e) {
        var i = new MouseEvent(t, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          screenX: e.screenX,
          screenY: e.screenY,
          clientX: e.clientX,
          clientY: e.clientY,
        });
        (i._simulated = !0), e.target.dispatchEvent(i);
      },
    });
    B.addInitHook("addHandler", "tapHold", ts),
      B.mergeOptions({ touchZoom: T.touch, bounceAtZoomLimits: !0 });
    var es = pt.extend({
      addHooks: function () {
        O(this._map._container, "leaflet-touch-zoom"),
          k(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function () {
        W(this._map._container, "leaflet-touch-zoom"),
          R(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function (t) {
        var e = this._map;
        if (
          !(
            !t.touches ||
            t.touches.length !== 2 ||
            e._animatingZoom ||
            this._zooming
          )
        ) {
          var i = e.mouseEventToContainerPoint(t.touches[0]),
            n = e.mouseEventToContainerPoint(t.touches[1]);
          (this._centerPoint = e.getSize()._divideBy(2)),
            (this._startLatLng = e.containerPointToLatLng(this._centerPoint)),
            e.options.touchZoom !== "center" &&
              (this._pinchStartLatLng = e.containerPointToLatLng(
                i.add(n)._divideBy(2),
              )),
            (this._startDist = i.distanceTo(n)),
            (this._startZoom = e.getZoom()),
            (this._moved = !1),
            (this._zooming = !0),
            e._stop(),
            k(document, "touchmove", this._onTouchMove, this),
            k(document, "touchend touchcancel", this._onTouchEnd, this),
            X(t);
        }
      },
      _onTouchMove: function (t) {
        if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
          var e = this._map,
            i = e.mouseEventToContainerPoint(t.touches[0]),
            n = e.mouseEventToContainerPoint(t.touches[1]),
            o = i.distanceTo(n) / this._startDist;
          if (
            ((this._zoom = e.getScaleZoom(o, this._startZoom)),
            !e.options.bounceAtZoomLimits &&
              ((this._zoom < e.getMinZoom() && o < 1) ||
                (this._zoom > e.getMaxZoom() && o > 1)) &&
              (this._zoom = e._limitZoom(this._zoom)),
            e.options.touchZoom === "center")
          ) {
            if (((this._center = this._startLatLng), o === 1)) return;
          } else {
            var a = i._add(n)._divideBy(2)._subtract(this._centerPoint);
            if (o === 1 && a.x === 0 && a.y === 0) return;
            this._center = e.unproject(
              e.project(this._pinchStartLatLng, this._zoom).subtract(a),
              this._zoom,
            );
          }
          this._moved || (e._moveStart(!0, !1), (this._moved = !0)),
            U(this._animRequest);
          var c = _(
            e._move,
            e,
            this._center,
            this._zoom,
            { pinch: !0, round: !1 },
            void 0,
          );
          (this._animRequest = Z(c, this, !0)), X(t);
        }
      },
      _onTouchEnd: function () {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        (this._zooming = !1),
          U(this._animRequest),
          R(document, "touchmove", this._onTouchMove, this),
          R(document, "touchend touchcancel", this._onTouchEnd, this),
          this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap,
              )
            : this._map._resetView(
                this._center,
                this._map._limitZoom(this._zoom),
              );
      },
    });
    B.addInitHook("addHandler", "touchZoom", es),
      (B.BoxZoom = Kn),
      (B.DoubleClickZoom = Yn),
      (B.Drag = Xn),
      (B.Keyboard = Jn),
      (B.ScrollWheelZoom = Qn),
      (B.TapHold = ts),
      (B.TouchZoom = es),
      (s.Bounds = j),
      (s.Browser = T),
      (s.CRS = wt),
      (s.Canvas = Un),
      (s.Circle = Ti),
      (s.CircleMarker = ke),
      (s.Class = ht),
      (s.Control = ft),
      (s.DivIcon = $n),
      (s.DivOverlay = gt),
      (s.DomEvent = co),
      (s.DomUtil = uo),
      (s.Draggable = Mt),
      (s.Evented = ne),
      (s.FeatureGroup = bt),
      (s.GeoJSON = Lt),
      (s.GridLayer = me),
      (s.Handler = pt),
      (s.Icon = qt),
      (s.ImageOverlay = Ze),
      (s.LatLng = D),
      (s.LatLngBounds = it),
      (s.Layer = dt),
      (s.LayerGroup = Gt),
      (s.LineUtil = To),
      (s.Map = B),
      (s.Marker = Ce),
      (s.Mixin = yo),
      (s.Path = Ot),
      (s.Point = C),
      (s.PolyUtil = xo),
      (s.Polygon = Kt),
      (s.Polyline = Pt),
      (s.Popup = Ie),
      (s.PosAnimation = Ln),
      (s.Projection = So),
      (s.Rectangle = qn),
      (s.Renderer = Tt),
      (s.SVG = ge),
      (s.SVGOverlay = jn),
      (s.TileLayer = Xt),
      (s.Tooltip = Be),
      (s.Transformation = Xe),
      (s.Util = ye),
      (s.VideoOverlay = Rn),
      (s.bind = _),
      (s.bounds = et),
      (s.canvas = Vn),
      (s.circle = Zo),
      (s.circleMarker = Ao),
      (s.control = fe),
      (s.divIcon = Ho),
      (s.extend = l),
      (s.featureGroup = Mo),
      (s.geoJSON = Dn),
      (s.geoJson = Fo),
      (s.gridLayer = Wo),
      (s.icon = Oo),
      (s.imageOverlay = No),
      (s.latLng = I),
      (s.latLngBounds = V),
      (s.layerGroup = ko),
      (s.map = fo),
      (s.marker = zo),
      (s.point = E),
      (s.polygon = Bo),
      (s.polyline = Io),
      (s.popup = jo),
      (s.rectangle = Go),
      (s.setOptions = z),
      (s.stamp = p),
      (s.svg = Gn),
      (s.svgOverlay = Ro),
      (s.tileLayer = Hn),
      (s.tooltip = $o),
      (s.transformation = se),
      (s.version = h),
      (s.videoOverlay = Do);
    var Ko = window.L;
    (s.noConflict = function () {
      return (window.L = Ko), this;
    }),
      (window.L = s);
  });
})(Ri, Ri.exports);
var Os = Ri.exports;
function Aa(u, r, s) {
  return Object.freeze({ instance: u, context: r, container: s });
}
function Za(u, r) {
  return r == null
    ? function (h, l) {
        const d = K.useRef();
        return d.current || (d.current = u(h, l)), d;
      }
    : function (h, l) {
        const d = K.useRef();
        d.current || (d.current = u(h, l));
        const _ = K.useRef(h),
          { instance: v } = d.current;
        return (
          K.useEffect(
            function () {
              _.current !== h && (r(v, h, _.current), (_.current = h));
            },
            [v, h, l],
          ),
          d
        );
      };
}
function Ia(u, r) {
  K.useEffect(
    function () {
      return (
        (r.layerContainer ?? r.map).addLayer(u.instance),
        function () {
          var d;
          (d = r.layerContainer) == null || d.removeLayer(u.instance),
            r.map.removeLayer(u.instance);
        }
      );
    },
    [r, u],
  );
}
function Ba(u) {
  return function (s) {
    const h = Ma(),
      l = u(Ms(s, h), h);
    return (
      Sa(h.map, s.attribution),
      za(l.current, s.eventHandlers),
      Ia(l.current, h),
      l
    );
  };
}
function Fa(u, r) {
  const s = Za(u, r),
    h = Ba(s);
  return Oa(h);
}
function Na(u, r, s) {
  const { opacity: h, zIndex: l } = r;
  h != null && h !== s.opacity && u.setOpacity(h),
    l != null && l !== s.zIndex && u.setZIndex(l);
}
function ji() {
  return (
    (ji =
      Object.assign ||
      function (u) {
        for (var r = 1; r < arguments.length; r++) {
          var s = arguments[r];
          for (var h in s)
            Object.prototype.hasOwnProperty.call(s, h) && (u[h] = s[h]);
        }
        return u;
      }),
    ji.apply(this, arguments)
  );
}
function Da(
  {
    bounds: u,
    boundsOptions: r,
    center: s,
    children: h,
    className: l,
    id: d,
    placeholder: _,
    style: v,
    whenReady: p,
    zoom: x,
    ...P
  },
  w,
) {
  const [M] = K.useState({ className: l, id: d, style: v }),
    [N, H] = K.useState(null);
  K.useImperativeHandle(w, () => (N == null ? void 0 : N.map) ?? null, [N]);
  const z = K.useCallback((xt) => {
    if (xt !== null && N === null) {
      const J = new Os.Map(xt, P);
      s != null && x != null ? J.setView(s, x) : u != null && J.fitBounds(u, r),
        p != null && J.whenReady(p),
        H(Ca(J));
    }
  }, []);
  K.useEffect(
    () => () => {
      N == null || N.map.remove();
    },
    [N],
  );
  const rt = N ? os.createElement(ka, { value: N }, h) : (_ ?? null);
  return os.createElement("div", ji({}, M, { ref: z }), rt);
}
const Ra = K.forwardRef(Da),
  ja = Fa(
    function ({ url: r, ...s }, h) {
      const l = new Os.TileLayer(r, Ms(s, h));
      return Aa(l, h);
    },
    function (r, s, h) {
      Na(r, s, h);
      const { url: l } = s;
      l != null && l !== h.url && r.setUrl(l);
    },
  ),
  $a = "_section3_1k5bp_1",
  Ha = "_section3_container_1k5bp_7",
  ms = { section3: $a, section3_container: Ha },
  Wa = () =>
    b.jsx(b.Fragment, {
      children: b.jsx("section", {
        className: ms.section3,
        children: b.jsx("div", {
          className: ms.section3_container,
          children: b.jsx(Ra, {
            center: [51.505, -0.09],
            zoom: 13,
            children: b.jsx(ja, {
              url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            }),
          }),
        }),
      }),
    }),
  ps = {},
  Ua = () =>
    b.jsx(b.Fragment, {
      children: b.jsx("section", {
        className: ps.section4,
        children: b.jsx("div", { className: ps.section4_container }),
      }),
    }),
  qa = () => (
    console.log("ContactsUs"),
    b.jsx(b.Fragment, {
      children: b.jsxs("main", {
        className: _r.main,
        children: [b.jsx(gr, {}), b.jsx(Ta, {}), b.jsx(Wa, {}), b.jsx(Ua, {})],
      }),
    })
  );
export { qa as default };
