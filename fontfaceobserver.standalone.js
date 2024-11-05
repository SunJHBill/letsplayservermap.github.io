/* Font Face Observer v2.3.0 - © Bram Stein. License: BSD-3-Clause */ (function() {
  function p(a, c) {
    document.addEventListener
      ? a.addEventListener("scroll", c, !1)
      : a.attachEvent("scroll", c);
  }
  function u(a) {
    document.body
      ? a()
      : document.addEventListener
        ? document.addEventListener("DOMContentLoaded", function b() {
            document.removeEventListener("DOMContentLoaded", b);
            a();
          })
        : document.attachEvent("onreadystatechange", function g() {
            if (
              "interactive" == document.readyState ||
              "complete" == document.readyState
            )
              document.detachEvent("onreadystatechange", g), a();
          });
  }
  function w(a) {
    this.g = document.createElement("div");
    this.g.setAttribute("aria-hidden", "true");
    this.g.appendChild(document.createTextNode(a));
    this.h = document.createElement("span");
    this.i = document.createElement("span");
    this.m = document.createElement("span");
    this.j = document.createElement("span");
    this.l = -1;
    this.h.style.cssText =
      "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
    this.i.style.cssText =
      "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
    this.j.style.cssText =
      "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
    this.m.style.cssText =
      "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
    this.h.appendChild(this.m);
    this.i.appendChild(this.j);
    this.g.appendChild(this.h);
    this.g.appendChild(this.i);
  }
  function x(a, c) {
    a.g.style.cssText =
      "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
      c +
      ";";
  }
  function B(a) {
    var c = a.g.offsetWidth,
      b = c + 100;
    a.j.style.width = b + "px";
    a.i.scrollLeft = b;
    a.h.scrollLeft = a.h.scrollWidth + 100;
    return a.l !== c ? ((a.l = c), !0) : !1;
  }
  function C(a, c) {
    function b() {
      var e = g;
      B(e) && null !== e.g.parentNode && c(e.l);
    }
    var g = a;
    p(a.h, b);
    p(a.i, b);
    B(a);
  }
  function D(a, c, b) {
    c = c || {};
    b = b || window;
    this.family = a;
    this.style = c.style || "normal";
    this.weight = c.weight || "normal";
    this.stretch = c.stretch || "normal";
    this.context = b;
  }
  var E = null,
    F = null,
    G = null,
    H = null;
  function I(a) {
    null === F &&
      (M(a) && /Apple/.test(window.navigator.vendor)
        ? (
            (a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
              window.navigator.userAgent
            )),
            (F = !!a && 603 > parseInt(a[1], 10))
          )
        : (F = !1));
    return F;
  }
  function M(a) {
    null === H && (H = !!a.document.fonts);
    return H;
  }
  function N(a, c) {
    var b = a.style,
      g = a.weight;
    if (null === G) {
      var e = document.createElement("div");
      try {
        e.style.font = "condensed 100px sans-serif";
      } catch (q) {}
      G = "" !== e.style.font;
    }
    return [b, g, G ? a.stretch : "", "100px", c].join(" ");
  }
  D.prototype.load = function(a, c) {
    var b = this,
      g = a || "BESbswy",
      e = 0,
      q = c || 3e3,
      J = new Date().getTime();
    return new Promise(function(K, L) {
      if (M(b.context) && !I(b.context)) {
        var O = new Promise(function(r, t) {
            function h() {
              new Date().getTime() - J >= q
                ? t(Error("" + q + "ms timeout exceeded"))
                : b.context.document.fonts
                    .load(N(b, '"' + b.family + '"'), g)
                    .then(function(n) {
                      1 <= n.length ? r() : setTimeout(h, 25);
                    }, t);
            }
            h();
          }),
          P = new Promise(function(r, t) {
            e = setTimeout(function() {
              t(Error("" + q + "ms timeout exceeded"));
            }, q);
          });
        Promise.race([P, O]).then(function() {
          clearTimeout(e);
          K(b);
        }, L);
      } else
        u(function() {
          function r() {
            var d;
            if (
              (d =
                (-1 != k && -1 != l) ||
                (-1 != k && -1 != m) ||
                (-1 != l && -1 != m))
            )
              (d = k != l && k != m && l != m) ||
                (
                  null === E &&
                    (
                      (d = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                        window.navigator.userAgent
                      )),
                      (E =
                        !!d &&
                        (536 > parseInt(d[1], 10) ||
                          (536 === parseInt(d[1], 10) &&
                            11 >= parseInt(d[2], 10))))
                    ),
                  (d =
                    E &&
                    ((k == y && l == y && m == y) ||
                      (k == z && l == z && m == z) ||
                      (k == A && l == A && m == A)))
                ), (d = !d);
            d &&
              (
                null !== f.parentNode && f.parentNode.removeChild(f),
                clearTimeout(e),
                K(b)
              );
          }
          function t() {
            if (new Date().getTime() - J >= q)
              null !== f.parentNode && f.parentNode.removeChild(f), L(
                Error("" + q + "ms timeout exceeded")
              );
            else {
              var d = b.context.document.hidden;
              if (!0 === d || void 0 === d)
                (k = h.g.offsetWidth), (l = n.g.offsetWidth), (m =
                  v.g.offsetWidth), r();
              e = setTimeout(t, 50);
            }
          }
          var h = new w(g),
            n = new w(g),
            v = new w(g),
            k = -1,
            l = -1,
            m = -1,
            y = -1,
            z = -1,
            A = -1,
            f = document.createElement("div");
          f.dir = "ltr";
          x(h, N(b, "sans-serif"));
          x(n, N(b, "serif"));
          x(v, N(b, "monospace"));
          f.appendChild(h.g);
          f.appendChild(n.g);
          f.appendChild(v.g);
          b.context.document.body.appendChild(f);
          y = h.g.offsetWidth;
          z = n.g.offsetWidth;
          A = v.g.offsetWidth;
          t();
          C(h, function(d) {
            k = d;
            r();
          });
          x(h, N(b, '"' + b.family + '",sans-serif'));
          C(n, function(d) {
            l = d;
            r();
          });
          x(n, N(b, '"' + b.family + '",serif'));
          C(v, function(d) {
            m = d;
            r();
          });
          x(v, N(b, '"' + b.family + '",monospace'));
        });
    });
  };
  "object" === typeof module
    ? (module.exports = D)
    : (
        (window.FontFaceObserver = D),
        (window.FontFaceObserver.prototype.load = D.prototype.load)
      );
})();
