import {
  _ as ge,
  a as z,
  n as ve,
  i as K,
  b as H,
  t as be,
  f as ye,
  r as Y,
  g as G,
  s as xe,
  c as Re,
  d as S,
  S as je,
  R as f,
  u as ne,
  p as _e,
  e as p,
  j as r,
  H as O,
  P as _,
  h as Ce,
  L as we,
  T as $,
} from "./index-C3Qoe1NT.js";
import { u as Se } from "./index.esm-ypLV58Nb.js";
var Oe = (function (e) {
  ge(i, e);
  function i(n, a) {
    var s;
    return (
      (s = e.call(this) || this),
      (s.client = n),
      (s.options = a),
      (s.trackedProps = []),
      (s.selectError = null),
      s.bindMethods(),
      s.setOptions(a),
      s
    );
  }
  var t = i.prototype;
  return (
    (t.bindMethods = function () {
      (this.remove = this.remove.bind(this)),
        (this.refetch = this.refetch.bind(this));
    }),
    (t.onSubscribe = function () {
      this.listeners.length === 1 &&
        (this.currentQuery.addObserver(this),
        ee(this.currentQuery, this.options) && this.executeFetch(),
        this.updateTimers());
    }),
    (t.onUnsubscribe = function () {
      this.listeners.length || this.destroy();
    }),
    (t.shouldFetchOnReconnect = function () {
      return U(
        this.currentQuery,
        this.options,
        this.options.refetchOnReconnect,
      );
    }),
    (t.shouldFetchOnWindowFocus = function () {
      return U(
        this.currentQuery,
        this.options,
        this.options.refetchOnWindowFocus,
      );
    }),
    (t.destroy = function () {
      (this.listeners = []),
        this.clearTimers(),
        this.currentQuery.removeObserver(this);
    }),
    (t.setOptions = function (a, s) {
      var c = this.options,
        o = this.currentQuery;
      if (
        ((this.options = this.client.defaultQueryObserverOptions(a)),
        typeof this.options.enabled < "u" &&
          typeof this.options.enabled != "boolean")
      )
        throw new Error("Expected enabled to be a boolean");
      this.options.queryKey || (this.options.queryKey = c.queryKey),
        this.updateQuery();
      var l = this.hasListeners();
      l && te(this.currentQuery, o, this.options, c) && this.executeFetch(),
        this.updateResult(s),
        l &&
          (this.currentQuery !== o ||
            this.options.enabled !== c.enabled ||
            this.options.staleTime !== c.staleTime) &&
          this.updateStaleTimeout();
      var u = this.computeRefetchInterval();
      l &&
        (this.currentQuery !== o ||
          this.options.enabled !== c.enabled ||
          u !== this.currentRefetchInterval) &&
        this.updateRefetchInterval(u);
    }),
    (t.getOptimisticResult = function (a) {
      var s = this.client.defaultQueryObserverOptions(a),
        c = this.client.getQueryCache().build(this.client, s);
      return this.createResult(c, s);
    }),
    (t.getCurrentResult = function () {
      return this.currentResult;
    }),
    (t.trackResult = function (a, s) {
      var c = this,
        o = {},
        l = function (h) {
          c.trackedProps.includes(h) || c.trackedProps.push(h);
        };
      return (
        Object.keys(a).forEach(function (u) {
          Object.defineProperty(o, u, {
            configurable: !1,
            enumerable: !0,
            get: function () {
              return l(u), a[u];
            },
          });
        }),
        (s.useErrorBoundary || s.suspense) && l("error"),
        o
      );
    }),
    (t.getNextResult = function (a) {
      var s = this;
      return new Promise(function (c, o) {
        var l = s.subscribe(function (u) {
          u.isFetching ||
            (l(), u.isError && a != null && a.throwOnError ? o(u.error) : c(u));
        });
      });
    }),
    (t.getCurrentQuery = function () {
      return this.currentQuery;
    }),
    (t.remove = function () {
      this.client.getQueryCache().remove(this.currentQuery);
    }),
    (t.refetch = function (a) {
      return this.fetch(
        z({}, a, { meta: { refetchPage: a == null ? void 0 : a.refetchPage } }),
      );
    }),
    (t.fetchOptimistic = function (a) {
      var s = this,
        c = this.client.defaultQueryObserverOptions(a),
        o = this.client.getQueryCache().build(this.client, c);
      return o.fetch().then(function () {
        return s.createResult(o, c);
      });
    }),
    (t.fetch = function (a) {
      var s = this;
      return this.executeFetch(a).then(function () {
        return s.updateResult(), s.currentResult;
      });
    }),
    (t.executeFetch = function (a) {
      this.updateQuery();
      var s = this.currentQuery.fetch(this.options, a);
      return (a != null && a.throwOnError) || (s = s.catch(ve)), s;
    }),
    (t.updateStaleTimeout = function () {
      var a = this;
      if (
        (this.clearStaleTimeout(),
        !(K || this.currentResult.isStale || !H(this.options.staleTime)))
      ) {
        var s = be(this.currentResult.dataUpdatedAt, this.options.staleTime),
          c = s + 1;
        this.staleTimeoutId = setTimeout(function () {
          a.currentResult.isStale || a.updateResult();
        }, c);
      }
    }),
    (t.computeRefetchInterval = function () {
      var a;
      return typeof this.options.refetchInterval == "function"
        ? this.options.refetchInterval(
            this.currentResult.data,
            this.currentQuery,
          )
        : (a = this.options.refetchInterval) != null
          ? a
          : !1;
    }),
    (t.updateRefetchInterval = function (a) {
      var s = this;
      this.clearRefetchInterval(),
        (this.currentRefetchInterval = a),
        !(
          K ||
          this.options.enabled === !1 ||
          !H(this.currentRefetchInterval) ||
          this.currentRefetchInterval === 0
        ) &&
          (this.refetchIntervalId = setInterval(function () {
            (s.options.refetchIntervalInBackground || ye.isFocused()) &&
              s.executeFetch();
          }, this.currentRefetchInterval));
    }),
    (t.updateTimers = function () {
      this.updateStaleTimeout(),
        this.updateRefetchInterval(this.computeRefetchInterval());
    }),
    (t.clearTimers = function () {
      this.clearStaleTimeout(), this.clearRefetchInterval();
    }),
    (t.clearStaleTimeout = function () {
      this.staleTimeoutId &&
        (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
    }),
    (t.clearRefetchInterval = function () {
      this.refetchIntervalId &&
        (clearInterval(this.refetchIntervalId),
        (this.refetchIntervalId = void 0));
    }),
    (t.createResult = function (a, s) {
      var c = this.currentQuery,
        o = this.options,
        l = this.currentResult,
        u = this.currentResultState,
        h = this.currentResultOptions,
        g = a !== c,
        b = g ? a.state : this.currentQueryInitialState,
        R = g ? this.currentResult : this.previousQueryResult,
        d = a.state,
        j = d.dataUpdatedAt,
        V = d.error,
        J = d.errorUpdatedAt,
        F = d.isFetching,
        m = d.status,
        W = !1,
        Z = !1,
        v;
      if (s.optimisticResults) {
        var X = this.hasListeners(),
          me = !X && ee(a, s),
          fe = X && te(a, c, s, o);
        (me || fe) && ((F = !0), j || (m = "loading"));
      }
      if (
        s.keepPreviousData &&
        !d.dataUpdateCount &&
        R != null &&
        R.isSuccess &&
        m !== "error"
      )
        (v = R.data), (j = R.dataUpdatedAt), (m = R.status), (W = !0);
      else if (s.select && typeof d.data < "u")
        if (
          l &&
          d.data === (u == null ? void 0 : u.data) &&
          s.select === this.selectFn
        )
          v = this.selectResult;
        else
          try {
            (this.selectFn = s.select),
              (v = s.select(d.data)),
              s.structuralSharing !== !1 &&
                (v = Y(l == null ? void 0 : l.data, v)),
              (this.selectResult = v),
              (this.selectError = null);
          } catch (C) {
            G().error(C), (this.selectError = C);
          }
      else v = d.data;
      if (
        typeof s.placeholderData < "u" &&
        typeof v > "u" &&
        (m === "loading" || m === "idle")
      ) {
        var y;
        if (
          l != null &&
          l.isPlaceholderData &&
          s.placeholderData === (h == null ? void 0 : h.placeholderData)
        )
          y = l.data;
        else if (
          ((y =
            typeof s.placeholderData == "function"
              ? s.placeholderData()
              : s.placeholderData),
          s.select && typeof y < "u")
        )
          try {
            (y = s.select(y)),
              s.structuralSharing !== !1 &&
                (y = Y(l == null ? void 0 : l.data, y)),
              (this.selectError = null);
          } catch (C) {
            G().error(C), (this.selectError = C);
          }
        typeof y < "u" && ((m = "success"), (v = y), (Z = !0));
      }
      this.selectError &&
        ((V = this.selectError),
        (v = this.selectResult),
        (J = Date.now()),
        (m = "error"));
      var pe = {
        status: m,
        isLoading: m === "loading",
        isSuccess: m === "success",
        isError: m === "error",
        isIdle: m === "idle",
        data: v,
        dataUpdatedAt: j,
        error: V,
        errorUpdatedAt: J,
        failureCount: d.fetchFailureCount,
        errorUpdateCount: d.errorUpdateCount,
        isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
        isFetchedAfterMount:
          d.dataUpdateCount > b.dataUpdateCount ||
          d.errorUpdateCount > b.errorUpdateCount,
        isFetching: F,
        isRefetching: F && m !== "loading",
        isLoadingError: m === "error" && d.dataUpdatedAt === 0,
        isPlaceholderData: Z,
        isPreviousData: W,
        isRefetchError: m === "error" && d.dataUpdatedAt !== 0,
        isStale: B(a, s),
        refetch: this.refetch,
        remove: this.remove,
      };
      return pe;
    }),
    (t.shouldNotifyListeners = function (a, s) {
      if (!s) return !0;
      var c = this.options,
        o = c.notifyOnChangeProps,
        l = c.notifyOnChangePropsExclusions;
      if ((!o && !l) || (o === "tracked" && !this.trackedProps.length))
        return !0;
      var u = o === "tracked" ? this.trackedProps : o;
      return Object.keys(a).some(function (h) {
        var g = h,
          b = a[g] !== s[g],
          R =
            u == null
              ? void 0
              : u.some(function (j) {
                  return j === h;
                }),
          d =
            l == null
              ? void 0
              : l.some(function (j) {
                  return j === h;
                });
        return b && !d && (!u || R);
      });
    }),
    (t.updateResult = function (a) {
      var s = this.currentResult;
      if (
        ((this.currentResult = this.createResult(
          this.currentQuery,
          this.options,
        )),
        (this.currentResultState = this.currentQuery.state),
        (this.currentResultOptions = this.options),
        !xe(this.currentResult, s))
      ) {
        var c = { cache: !0 };
        (a == null ? void 0 : a.listeners) !== !1 &&
          this.shouldNotifyListeners(this.currentResult, s) &&
          (c.listeners = !0),
          this.notify(z({}, c, a));
      }
    }),
    (t.updateQuery = function () {
      var a = this.client.getQueryCache().build(this.client, this.options);
      if (a !== this.currentQuery) {
        var s = this.currentQuery;
        (this.currentQuery = a),
          (this.currentQueryInitialState = a.state),
          (this.previousQueryResult = this.currentResult),
          this.hasListeners() &&
            (s == null || s.removeObserver(this), a.addObserver(this));
      }
    }),
    (t.onQueryUpdate = function (a) {
      var s = {};
      a.type === "success"
        ? (s.onSuccess = !0)
        : a.type === "error" && !Re(a.error) && (s.onError = !0),
        this.updateResult(s),
        this.hasListeners() && this.updateTimers();
    }),
    (t.notify = function (a) {
      var s = this;
      S.batch(function () {
        a.onSuccess
          ? (s.options.onSuccess == null ||
              s.options.onSuccess(s.currentResult.data),
            s.options.onSettled == null ||
              s.options.onSettled(s.currentResult.data, null))
          : a.onError &&
            (s.options.onError == null ||
              s.options.onError(s.currentResult.error),
            s.options.onSettled == null ||
              s.options.onSettled(void 0, s.currentResult.error)),
          a.listeners &&
            s.listeners.forEach(function (c) {
              c(s.currentResult);
            }),
          a.cache &&
            s.client
              .getQueryCache()
              .notify({
                query: s.currentQuery,
                type: "observerResultsUpdated",
              });
      });
    }),
    i
  );
})(je);
function qe(e, i) {
  return (
    i.enabled !== !1 &&
    !e.state.dataUpdatedAt &&
    !(e.state.status === "error" && i.retryOnMount === !1)
  );
}
function ee(e, i) {
  return qe(e, i) || (e.state.dataUpdatedAt > 0 && U(e, i, i.refetchOnMount));
}
function U(e, i, t) {
  if (i.enabled !== !1) {
    var n = typeof t == "function" ? t(e) : t;
    return n === "always" || (n !== !1 && B(e, i));
  }
  return !1;
}
function te(e, i, t, n) {
  return (
    t.enabled !== !1 &&
    (e !== i || n.enabled === !1) &&
    (!t.suspense || e.state.status !== "error") &&
    B(e, t)
  );
}
function B(e, i) {
  return e.isStaleByTime(i.staleTime);
}
function Le() {
  var e = !1;
  return {
    clearReset: function () {
      e = !1;
    },
    reset: function () {
      e = !0;
    },
    isReset: function () {
      return e;
    },
  };
}
var Pe = f.createContext(Le()),
  Ee = function () {
    return f.useContext(Pe);
  };
function Qe(e, i, t) {
  return typeof i == "function"
    ? i.apply(void 0, t)
    : typeof i == "boolean"
      ? i
      : !!e;
}
function Ne(e, i) {
  var t = f.useRef(!1),
    n = f.useState(0),
    a = n[1],
    s = ne(),
    c = Ee(),
    o = s.defaultQueryObserverOptions(e);
  (o.optimisticResults = !0),
    o.onError && (o.onError = S.batchCalls(o.onError)),
    o.onSuccess && (o.onSuccess = S.batchCalls(o.onSuccess)),
    o.onSettled && (o.onSettled = S.batchCalls(o.onSettled)),
    o.suspense &&
      (typeof o.staleTime != "number" && (o.staleTime = 1e3),
      o.cacheTime === 0 && (o.cacheTime = 1)),
    (o.suspense || o.useErrorBoundary) &&
      (c.isReset() || (o.retryOnMount = !1));
  var l = f.useState(function () {
      return new i(s, o);
    }),
    u = l[0],
    h = u.getOptimisticResult(o);
  if (
    (f.useEffect(
      function () {
        (t.current = !0), c.clearReset();
        var g = u.subscribe(
          S.batchCalls(function () {
            t.current &&
              a(function (b) {
                return b + 1;
              });
          }),
        );
        return (
          u.updateResult(),
          function () {
            (t.current = !1), g();
          }
        );
      },
      [c, u],
    ),
    f.useEffect(
      function () {
        u.setOptions(o, { listeners: !1 });
      },
      [o, u],
    ),
    o.suspense && h.isLoading)
  )
    throw u
      .fetchOptimistic(o)
      .then(function (g) {
        var b = g.data;
        o.onSuccess == null || o.onSuccess(b),
          o.onSettled == null || o.onSettled(b, null);
      })
      .catch(function (g) {
        c.clearReset(),
          o.onError == null || o.onError(g),
          o.onSettled == null || o.onSettled(void 0, g);
      });
  if (
    h.isError &&
    !c.isReset() &&
    !h.isFetching &&
    Qe(o.suspense, o.useErrorBoundary, [h.error, u.getCurrentQuery()])
  )
    throw h.error;
  return o.notifyOnChangeProps === "tracked" && (h = u.trackResult(h, o)), h;
}
function Fe(e, i, t) {
  var n = _e(e, i, t);
  return Ne(n, Oe);
}
const ae = p.createContext(null),
  Ae = "_main_1h0ls_7",
  Te = "_section1_1h0ls_15",
  Ie = "_section2_1h0ls_19",
  De = "_section3_1h0ls_23",
  Me = "_section4_1h0ls_27",
  Ue = { main: Ae, section1: Te, section2: Ie, section3: De, section4: Me },
  Be = "_section1_16vbf_1",
  ke = "_section1_container_16vbf_1",
  Ve = "_heading_16vbf_9",
  A = { section1: Be, section1_container: ke, heading: Ve },
  Je = p.memo(() =>
    r.jsx(r.Fragment, {
      children: r.jsx("section", {
        className: A.section1,
        children: r.jsx("div", {
          className: A.section1_container,
          children: r.jsxs("div", {
            className: A.heading,
            children: [
              r.jsx(O, {
                positionX: "center",
                lvl: 1,
                color: 1,
                size: "2.5rem",
                children: "Blog Afrianska",
              }),
              r.jsx(_, {
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
  ),
  We = "_section_42xw5_1",
  Ze = { section: We },
  Xe = "_main_1ol2e_1",
  ze = "_left_1ol2e_8",
  Ke = "_right_1ol2e_17",
  T = { main: Xe, left: ze, right: Ke },
  He =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_0_1282)'%3e%3cpath%20d='M19%2018L21%2019V3C21%201.9%2020.1%201%2019%201H8.99C7.89%201%207%201.9%207%203H17C18.1%203%2019%203.9%2019%205V18ZM15%205H5C3.9%205%203%205.9%203%207V23L10%2020L17%2023V7C17%205.9%2016.1%205%2015%205Z'%20fill='%23356EAD'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_1282'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  Ye =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_0_1279)'%3e%3cpath%20d='M18%2016.08C17.24%2016.08%2016.56%2016.38%2016.04%2016.85L8.91%2012.7C8.96%2012.47%209%2012.24%209%2012C9%2011.76%208.96%2011.53%208.91%2011.3L15.96%207.19C16.5%207.69%2017.21%208%2018%208C19.66%208%2021%206.66%2021%205C21%203.34%2019.66%202%2018%202C16.34%202%2015%203.34%2015%205C15%205.24%2015.04%205.47%2015.09%205.7L8.04%209.81C7.5%209.31%206.79%209%206%209C4.34%209%203%2010.34%203%2012C3%2013.66%204.34%2015%206%2015C6.79%2015%207.5%2014.69%208.04%2014.19L15.16%2018.35C15.11%2018.56%2015.08%2018.78%2015.08%2019C15.08%2020.61%2016.39%2021.92%2018%2021.92C19.61%2021.92%2020.92%2020.61%2020.92%2019C20.92%2017.39%2019.61%2016.08%2018%2016.08Z'%20fill='%23356EAD'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_1279'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  k = p.memo(() =>
    r.jsx(r.Fragment, {
      children: r.jsxs("div", {
        className: T.main,
        children: [
          r.jsxs("div", {
            className: T.left,
            children: [
              r.jsx(_, { color: 2, children: "Samatha Leuthex" }),
              r.jsx(_, { color: 2, children: "May 5, 3 min read" }),
            ],
          }),
          r.jsxs("div", {
            className: T.right,
            children: [
              r.jsx("img", { src: He, alt: "" }),
              r.jsx("img", { src: Ye, alt: "" }),
            ],
          }),
        ],
      }),
    }),
  ),
  Ge = ({ title: e, desc: i, img_test: t }) =>
    r.jsx(r.Fragment, {
      children: r.jsxs("section", {
        className: Ze.section,
        children: [
          r.jsx("div", { children: r.jsx("img", { src: t, alt: "" }) }),
          r.jsxs(O, { lvl: 3, color: 2, size: "1.5rem", children: [e, " "] }),
          r.jsx(_, { color: 2, children: i }),
          r.jsx(k, {}),
        ],
      }),
    }),
  $e = "_section2_1oivv_1",
  et = "_section2_container_1oivv_7",
  tt = "_section2_container_top_1oivv_10",
  it = "_section_1_1oivv_16",
  st = "_section_2_1oivv_19",
  rt = "_section_3_1oivv_22",
  nt = "_section_4_1oivv_29",
  x = {
    section2: $e,
    section2_container: et,
    section2_container_top: tt,
    section_1: it,
    section_2: st,
    section_3: rt,
    section_4: nt,
  },
  at =
    "data:image/webp;base64,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",
  ot = "/assets/Rectangle%205%20(2)-CLk01k8U.webp",
  ct = "/assets/Rectangle%205%20(3)-BPv_huxw.webp",
  ut = [
    {
      img: at,
      title: "Porta proin tellus sed pulvinar odio eu pulvinar.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: ot,
      title: "Non quam tortor, proin eu egestas scelerisque purus.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: ct,
      title: "Amet amet sed pharetra risus sit eget interdum.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
var oe = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  ie = f.createContext && f.createContext(oe),
  lt = ["attr", "size", "title"];
function dt(e, i) {
  if (e == null) return {};
  var t = ht(e, i),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (a = 0; a < s.length; a++)
      (n = s[a]),
        !(i.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (t[n] = e[n]);
  }
  return t;
}
function ht(e, i) {
  if (e == null) return {};
  var t = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (i.indexOf(n) >= 0) continue;
      t[n] = e[n];
    }
  return t;
}
function Q() {
  return (
    (Q = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var i = 1; i < arguments.length; i++) {
            var t = arguments[i];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
          return e;
        }),
    Q.apply(this, arguments)
  );
}
function se(e, i) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    i &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function N(e) {
  for (var i = 1; i < arguments.length; i++) {
    var t = arguments[i] != null ? arguments[i] : {};
    i % 2
      ? se(Object(t), !0).forEach(function (n) {
          mt(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : se(Object(t)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
  }
  return e;
}
function mt(e, i, t) {
  return (
    (i = ft(i)),
    i in e
      ? Object.defineProperty(e, i, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[i] = t),
    e
  );
}
function ft(e) {
  var i = pt(e, "string");
  return typeof i == "symbol" ? i : i + "";
}
function pt(e, i) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, i || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(e);
}
function ce(e) {
  return (
    e &&
    e.map((i, t) => f.createElement(i.tag, N({ key: t }, i.attr), ce(i.child)))
  );
}
function gt(e) {
  return (i) => f.createElement(vt, Q({ attr: N({}, e.attr) }, i), ce(e.child));
}
function vt(e) {
  var i = (t) => {
    var { attr: n, size: a, title: s } = e,
      c = dt(e, lt),
      o = a || t.size || "1em",
      l;
    return (
      t.className && (l = t.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      f.createElement(
        "svg",
        Q(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          t.attr,
          n,
          c,
          {
            className: l,
            style: N(N({ color: e.color || t.color }, t.style), e.style),
            height: o,
            width: o,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        s && f.createElement("title", null, s),
        e.children,
      )
    );
  };
  return ie !== void 0
    ? f.createElement(ie.Consumer, null, (t) => i(t))
    : i(oe);
}
function bt(e) {
  return gt({
    tag: "svg",
    attr: {
      version: "1.1",
      id: "search",
      x: "0px",
      y: "0px",
      viewBox: "0 0 24 24",
      style: "enable-background:new 0 0 24 24;",
    },
    child: [
      {
        tag: "g",
        attr: {},
        child: [
          {
            tag: "path",
            attr: {
              d: `M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z`,
            },
            child: [],
          },
        ],
      },
    ],
  })(e);
}
const yt = "_form_1309f_1",
  xt = "_input_1309f_20",
  Rt = "_loading_1309f_27",
  I = { form: yt, input: xt, loading: Rt },
  ue = () => {
    const e = p.useContext(Ce);
    if (!e) throw new Error("PixabayResponse");
    return e;
  },
  jt = async (e) => {
    const i = await fetch(
      `https://pixabay.com/api/?key=43093131-6aaad8110d954fdeab2747c5d&category=${e}`,
    );
    if (!i.ok) return null;
    const t = await i.json();
    return t == null ? void 0 : t.hits;
  },
  _t = () => {
    const { set_array_img: e } = ue(),
      [i, t] = p.useState("education"),
      n = ne(),
      { isLoading: a, isFetched: s } = Fe(["array_img", i], () => jt(i), {
        onSuccess: (u) => {
          if (u) {
            e(u);
            return;
          }
          e(null);
        },
        cacheTime: 6e4,
      });
    console.log("isFL", s, a),
      p.useEffect(() => {
        n.invalidateQueries(["array_img", i]);
      }, [i, n]);
    const { register: c, handleSubmit: o } = Se(),
      l = (u) => {
        t(u.search);
      };
    return s
      ? r.jsxs("form", {
          className: I.form,
          onSubmit: o(l),
          children: [
            r.jsx("input", {
              className: I.input,
              type: "text",
              ...c("search"),
            }),
            r.jsx("button", { type: "submit", children: r.jsx(bt, {}) }),
          ],
        })
      : r.jsx("div", { className: I.loading, children: r.jsx(we, {}) });
  },
  Ct = p.memo(() => {
    const { array_img: e } = ue(),
      i = e == null ? void 0 : e.slice(0, 4);
    return r.jsx(r.Fragment, {
      children: r.jsx("section", {
        className: x.section2,
        children: r.jsxs("div", {
          className: x.section2_container,
          children: [
            r.jsxs("div", {
              className: x.section2_container_top,
              children: [
                r.jsx("section", {
                  className: x.section_1,
                  children: r.jsx(_t, {}),
                }),
                r.jsx("section", {
                  className: x.section_2,
                  children: r.jsx(O, {
                    lvl: 2,
                    size: "1.25rem",
                    color: 4,
                    children: "POPULAR",
                  }),
                }),
                r.jsxs("section", {
                  className: x.section_3,
                  children: [
                    r.jsx(O, {
                      lvl: 2,
                      size: "3rem",
                      color: 2,
                      children: "Feugiat sodales at nullam tellus.",
                    }),
                    r.jsx(_, {
                      color: 2,
                      children:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi posuere nibh tempor fringilla porta pellentesque ipsum.",
                    }),
                    r.jsx(k, {}),
                  ],
                }),
                r.jsx("section", {
                  className: x.section_4,
                  children: r.jsx("img", {
                    src: i && i[0].largeImageURL,
                    alt: "",
                  }),
                }),
              ],
            }),
            r.jsx("div", { className: x.section2_container_bottom }),
            r.jsx("ul", {
              children: ut.map((t, n) =>
                r.jsx(Ge, { ...t, img_test: i && i[n + 1].largeImageURL }, n),
              ),
            }),
          ],
        }),
      }),
    });
  }),
  wt = "_li_k73vl_1",
  St = "_img_k73vl_11",
  Ot = "_head_k73vl_15",
  qt = "_desc_k73vl_22",
  Lt = "_wait_k73vl_26",
  w = { li: wt, img: St, head: Ot, desc: qt, wait: Lt },
  Pt = p.memo(({ img: e, header: i, desc: t }) =>
    r.jsxs("li", {
      className: w.li,
      children: [
        r.jsx("div", {
          className: w.img,
          children: r.jsx("img", { src: e, alt: "" }),
        }),
        r.jsx("div", {
          className: w.head,
          children: r.jsx("h3", { children: i }),
        }),
        r.jsx("div", {
          className: w.desc,
          children: r.jsx(_, { color: 2, children: t }),
        }),
        r.jsx("div", { className: w.wait, children: r.jsx(k, {}) }),
      ],
    }),
  ),
  D = "/assets/Rectangle-5-_4_-CsbTB-et.webp",
  M = "/assets/Rectangle-5-_5_-CBllSpMM.webp",
  q = "/assets/Rectangle-5-_6_-CuXAAXsJ.webp",
  L = "/assets/Rectangle%205%20(7)-DdIdB8YS.webp",
  P = "/assets/Rectangle%205%20(8)-BctW4-0E.webp",
  Et = [
    {
      img: D,
      header: "Massa eu in laoreet enim augue vulputate nunc.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    },
    {
      img: M,
      header: "Feugiat a euismod arcu feugiat posuere morbi.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    },
    {
      img: q,
      header: "Sociis purus pellentesque faucibus vitae et felis.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    },
    {
      img: L,
      header: "Cursus feugiat mi pellentesque mauris sed eu.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    },
    {
      img: P,
      header: "A morbi arcu curabitur etiam fringilla augue.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    },
    {
      img: D,
      header: "Massa eu in laoreet enim augue vulputate nunc.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    },
    {
      img: M,
      header: "Feugiat a euismod arcu feugiat posuere morbi.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    },
    {
      img: q,
      header: "Sociis purus pellentesque faucibus vitae et felis.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    },
    {
      img: L,
      header: "Cursus feugiat mi pellentesque mauris sed eu.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    },
    {
      img: P,
      header: "A morbi arcu curabitur etiam fringilla augue.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    },
    {
      img: D,
      header: "Massa eu in laoreet enim augue vulputate nunc.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    },
    {
      img: M,
      header: "Feugiat a euismod arcu feugiat posuere morbi.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    },
    {
      img: q,
      header: "Sociis purus pellentesque faucibus vitae et felis.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    },
    {
      img: L,
      header: "Cursus feugiat mi pellentesque mauris sed eu.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    },
    {
      img: P,
      header: "A morbi arcu curabitur etiam fringilla augue.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    },
    {
      img: q,
      header: "Sociis purus pellentesque faucibus vitae et felis.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    },
    {
      img: L,
      header: "Cursus feugiat mi pellentesque mauris sed eu.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    },
    {
      img: P,
      header: "A morbi arcu curabitur etiam fringilla augue.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quisque magna in nisl nibh bibendum ipsum, elit duis. Donec.",
    },
  ],
  le = (e) => {
    if (e.length < 6) return [e];
    const i = e.slice(0, 5),
      t = e.slice(5);
    return t.length > 5 ? [i, ...le(t)] : [i, t];
  },
  de = le(Et),
  Qt = "_section3_j2z6r_1",
  Nt = "_section3_container_j2z6r_7",
  Ft = "_paginator_j2z6r_11",
  At = "_ul_j2z6r_18",
  E = { section3: Qt, section3_container: Nt, paginator: Ft, ul: At },
  Tt = {},
  he = () => {
    const e = p.useContext(ae);
    if (!e) throw new Error("Paginators");
    return e;
  },
  It = f.memo(() => {
    const { setNum: e } = he(),
      i = p.useCallback(
        (t) => {
          e((n) =>
            (t == -1 && n == 0) || (t == 1 && n == de.length - 1) ? n : n + t,
          );
        },
        [e],
      );
    return r.jsx(r.Fragment, {
      children: r.jsxs("div", {
        className: Tt.paginator,
        children: [
          r.jsx($, {
            IMG: "arrowLeft",
            place: "left",
            children: r.jsx("span", {
              onClick: () => i(-1),
              children: "New Post",
            }),
          }),
          r.jsx($, {
            IMG: "arrowRight",
            place: "right",
            children: r.jsx("span", {
              onClick: () => i(1),
              children: "Old Post",
            }),
          }),
        ],
      }),
    });
  }),
  Dt = p.memo(() => {
    const { num: e } = he();
    return r.jsx(r.Fragment, {
      children: r.jsx("section", {
        className: E.section3,
        children: r.jsxs("div", {
          className: E.section3_container,
          children: [
            r.jsx("div", {
              className: E.section3_title,
              children: r.jsx(O, {
                lvl: 2,
                size: "1.25rem",
                color: 4,
                children: "ALL ARTICLE",
              }),
            }),
            r.jsx("ul", {
              className: E.ul,
              children: de[e].map((i, t) => r.jsx(Pt, { ...i }, t)),
            }),
            r.jsx(It, {}),
          ],
        }),
      }),
    });
  }),
  re = {},
  Mt = p.memo(() =>
    r.jsx(r.Fragment, {
      children: r.jsx("section", {
        className: re.section4,
        children: r.jsx("div", { className: re.section4_container }),
      }),
    }),
  ),
  kt = p.memo(() => {
    const [e, i] = p.useState(0);
    return r.jsx(r.Fragment, {
      children: r.jsx(ae.Provider, {
        value: { num: e, setNum: i },
        children: r.jsxs("main", {
          className: Ue.main,
          children: [
            r.jsx(Je, {}),
            r.jsx(Ct, {}),
            r.jsx(Dt, {}),
            r.jsx(Mt, {}),
          ],
        }),
      }),
    });
  });
export { kt as default };
