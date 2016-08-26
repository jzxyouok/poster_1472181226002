

var eqxiu = function() {
  function a(a, d) {
    for (var e, f = 0, g = n._pageData.length; g > f; f++) a == n._pageData[f]
      .id && (e = n._pageData[f].num);
    if (e || (e = a), d) {
      if (1 == e) return;
      $(n.$currentPage).removeClass("z-current"), n.$currentPage = $(n.$currentPage)
        .siblings(".main-page").find("#page" + e).parent().addClass(
          "z-current")
    } else if ("10" != n._scrollMode) {
      C = !0;
      var h = $(n.$currentPage).find(".m-img").attr("id").substring(4),
        i = $(n.$currentPage).siblings(".main-page").find("#page" + e);
      if (!i) return;
      n.$activePage = $(i).parent(".main-page").get(0), h > e ? b() : e > h &&
        c()
    } else flipBookScroll(a)
  }

  function b(a) {
    if (!(w && 2 == a || x && 1 == a))
      if ("10" != n._scrollMode) {
        var b = 0;
        o();
        var c = setInterval(function() {
          b += 2, "0" == n._scrollMode || "1" == n._scrollMode || "2" ==
            n._scrollMode || "6" == n._scrollMode || "7" == n._scrollMode ||
            "8" == n._scrollMode || "11" == n._scrollMode || "12" == n._scrollMode ||
            "13" == n._scrollMode || "14" == n._scrollMode || "15" == n._scrollMode ?
            I = b : ("3" == n._scrollMode || "4" == n._scrollMode || "5" ==
              n._scrollMode || "9" == n._scrollMode) && (H = b), p(), b >=
            21 && (clearInterval(c), q())
        }, 1)
      } else $(document).trigger("bookFlipPre")
  }

  function c(a) {
    if (!(w && 2 == a || x && 1 == a))
      if ("10" != n._scrollMode) {
        u = !1;
        var b = 0;
        "block" == $("body .boards-panel").css("display") && ($(
          "body .boards-panel").hide(), $("body .z-current").show()), o();
        var c = setInterval(function() {
          b -= 2, "0" == n._scrollMode || "1" == n._scrollMode || "2" ==
            n._scrollMode || "6" == n._scrollMode || "7" == n._scrollMode ||
            "8" == n._scrollMode || "11" == n._scrollMode || "12" == n._scrollMode ||
            "13" == n._scrollMode || "14" == n._scrollMode || "15" == n._scrollMode ?
            I = b : ("3" == n._scrollMode || "4" == n._scrollMode || "5" ==
              n._scrollMode || "9" == n._scrollMode) && (H = b), p(), -21 >=
            b && (clearInterval(c), q(), B || n.$activePage ||
              clearInterval(z))
        }, 1)
      } else $(document).trigger("bookFlipNext")
  }

  function d() {
    z = setInterval(function() {
      10 === n._scrollMode || J || c()
    }, v)
  }

  function e() {
    clearInterval(z)
  }

  function f() {
    n.$activePage = n._$pages.last().get(0), n._$pages.parent().find(
      ".z-current").removeClass("z-current"), n._$pages.last().addClass(
      "z-current")
  }

  function g(a) {
    a ? n._$pages.last().prev().remove() : n._$pages.last().remove()
  }

  function h(a) {
    n._scrollMode = a, r = a, _scrollMode = a
  }

  function i(a) {
    n._isforbidHandFlip = a
  }

  function j(a) {
    v = 1e3 * a, e(), d()
  }

  function k() {
    n._$pages = n._$app.find(".main-page")
  }

  function f(a) {
    n._$pages.parent().find(".z-current").removeClass("z-current"), a ? (n.$activePage =
      n._$pages.last().prev().get(0), n._$pages.last().prev().addClass(
        "z-current")) : (n.$activePage = n._$pages.last().get(0), n._$pages
      .last().addClass("z-current"));
  }

  function l(a) {
    n._pageData = a
  }

  function m(a) {
    B = a
  }
  var n, o, p, q, r, s, t, u, v, w, x, y, z, A = $(window),
    B = !1,
    C = !1,
    D = mobilecheck(),
    E = tabletCheck(),
    F = 0,
    G = 0,
    H = 0,
    I = 0,
    J = !1,
    K = !1,
    L = !0,
    M = 500,
    N = .4,
    O = function(a, b, c, e) {
      function f(a, b, c) {
        for (var d = ["", "webkit", "moz"], e = 0, f = d.length; f > e; e++) {
          0 != e || mobilecheck() || (b = b.substring(0, 1).toLowerCase() + b
            .substring(1, b.length));
          var g = c instanceof Array ? c[e] : c,
            h = d[e] + b;
          a[h] = g
        }
      }

      function g(a, b, c) {
        for (var d = ["", "-webkit-", "-moz-"], e = 0; e < d.length; e++) a.css(
          d[e] + b, c)
      }

      function h(a) {
        var b;
        return b = $("#inside_" + a, ".phone-view").length ? $("#inside_" + a,
          ".phone-view") : $("#inside_" + a)
      }

      function i() {
        n._isDisableFlipPage = !0;
        var a;
        "0" == b || "1" == b || "2" == b || "6" == b || "9" == b || "11" == b ||
          "12" == b ? (a = I > 0 ? -t : t, g($(n.$activePage), "transform",
            "translateY(" + a + "px)"), g($(n.$currentPage), "transform",
            "translateY(0) scale(1)")) : ("3" == b || "5" == b) && (a = H > 0 ?
            -s : s, g($(n.$activePage), "transform", "translateX(" + a +
              "px)"), g($(n.$currentPage), "transform",
              "translateX(0) scale(1)")), setTimeout(function() {
            $(n.$currentPage).attr("style", ""), $(n.$activePage).attr(
              "style", ""), $(n.$activePage).removeClass(
              "z-active z-move"), n._isDisableFlipPage = !1
          }, 500)
      }

      function j() {
        if (Math.abs(I) > Math.abs(H) && completeEffect($(n.$currentPage)))
          if (I > 0) {
            if (n._isDisableFlipPrevPage) return;
            K || L ? (K = !1, L = !1, aa(!0), ba(!0, "bottom center",
              "translateY", t)) : ca(!0, "translateY", t, I, n._scrollMode)
          } else if (0 > I) {
          if (n._isDisableFlipNextPage) return;
          !K || L ? (K = !0, L = !1, aa(!1), ba(!1, "top center",
            "translateY", t)) : ca(!1, "translateY", t, I, n._scrollMode)
        }
      }

      function k() {
        Math.abs(I) > Math.abs(H) && Math.abs(I) > 20 ? (da("translateY", I,
          t, n._scrollMode), $(document).trigger("flipend")) : (n._isDisableFlipPage = !
          1, i())
      }

      function l() {
        if (Math.abs(H) > Math.abs(I) && completeEffect($(n.$currentPage)))
          if (H > 0) {
            if (n._isDisableFlipPrevPage) return;
            K || L ? (K = !1, L = !1, aa(!0), ba(!0, "center right",
              "translateX", s)) : ca(!0, "translateX", s, H, n._scrollMode)
          } else if (0 > H) {
          if (n._isDisableFlipNextPage) return;
          !K || L ? (K = !0, L = !1, aa(!1), ba(!1, "center left",
            "translateX", s)) : ca(!1, "translateX", s, H, n._scrollMode)
        }
      }

      function m() {
        Math.abs(H) > Math.abs(I) && Math.abs(H) > 20 ? (da("translateX", H,
          s, n._scrollMode), $(document).trigger("flipend")) : (n._isDisableFlipPage = !
          1, i())
      }

      function r() {
        if (Math.abs(H) > Math.abs(I) && completeEffect($(n.$currentPage)))
          if (H > 0) {
            if (n._isDisableFlipPrevPage) return;
            K || L ? (K = !1, L = !1, aa(!0), s = D ? window.innerWidth : $(
              ".nr").width(), ba(!0, "", "translateX", s)) : ca(!0,
              "translateX", s, H, n._scrollMode)
          } else if (0 > H) {
          if (n._isDisableFlipNextPage) return;
          !K || L ? (K = !0, L = !1, aa(!1), s = D ? window.innerWidth : $(
            ".nr").width(), ba(!1, "", "translateX", s)) : ca(!1,
            "translateX", s, H, n._scrollMode)
        }
      }

      function u() {
        Math.abs(H) > Math.abs(I) && Math.abs(H) > 20 ? (da("translateX", H,
          s, n._scrollMode), $(document).trigger("flipend")) : (n._isDisableFlipPage = !
          1, i())
      }

      function z() {
        if (Math.abs(I) > Math.abs(H) && completeEffect($(n.$currentPage)))
          if (I > 0) {
            if (n._isDisableFlipPrevPage) return;
            K || L ? (K = !1, L = !1, aa(!0), t = D ? window.innerHeight : $(
              ".nr").height(), ba(!0, "", "translateY", t)) : ca(!0,
              "translateY", t, I, n._scrollMode)
          } else if (0 > I) {
          if (n._isDisableFlipNextPage) return;
          !K || L ? (K = !0, L = !1, aa(!1), t = D ? window.innerHeight : $(
            ".nr").height(), ba(!1, "", "translateY", t)) : ca(!1,
            "translateY", t, I, n._scrollMode)
        }
      }

      function O() {
        Math.abs(I) > Math.abs(H) && Math.abs(I) > 20 ? (da("translateY", I,
          t, n._scrollMode), $(document).trigger("flipend")) : (n._isDisableFlipPage = !
          1, i())
      }

      function P() {
        if (Math.abs(I) > Math.abs(H) && completeEffect($(n.$currentPage)))
          if (I > 0) {
            if (n._isDisableFlipNextPage) return;
            (!K || L) && (K = !0, L = !1, n.$activePage && $(n.$activePage).removeClass(
              "z-move z-active"), aa(!0), f(n.$activePage.style,
              "Transform", "rotateX(90deg) translateY(-" + t / 2 +
              "px) translateZ(" + t / 2 + "px)"), f(ea.get(0).style,
              "Perspective", "700px"), f(ea.get(0).style, "TransformStyle",
              "preserve-3d")), n.$activePage && n.$activePage.classList.contains(
              "main-page") && ($(n.$activePage).addClass("z-active z-move")
              .trigger("active").css("zIndex", 1), f(n.$currentPage.style,
                "Transform", "rotateX(-" + I / t * 90 + "deg) translateY(" +
                I / 2 + "px) translateZ(" + I / 2 + "px)"), f(n.$activePage
                .style, "Transform", "rotateX(" + (90 - I / t * 90) +
                "deg) translateY(" + (-(t / 2) + I / 2) + "px) translateZ(" +
                (t / 2 - I / 2) + "px)"))
          } else if (0 > I) {
          if (n._isDisableFlipNextPage) return;
          (!K || L) && (K = !0, L = !1, n.$activePage && $(n.$activePage).removeClass(
            "z-move z-active"), aa(!1), f(n.$activePage.style, "Transform",
            "rotateX(-90deg) translateY(-" + t / 2 + "px) translateZ(-" + t /
            2 + "px)"), f(ea.get(0).style, "Perspective", "700px"), f(ea.get(
            0).style, "TransformStyle", "preserve-3d")), n.$activePage && n.$activePage
            .classList.contains("main-page") ? ($(n.$activePage).addClass(
              "z-active z-move").trigger("active").css("zIndex", 0), f(n.$currentPage
              .style, "Transform", "rotateX(" + -I / t * 90 +
              "deg) translateY(" + I / 2 + "px) translateZ(" + -I / 2 +
              "px)"), f(n.$activePage.style, "Transform", "rotateX(" + (-90 -
                I / t * 90) + "deg) translateY(" + (t / 2 + I / 2) +
              "px) translateZ(" + (t / 2 + I / 2) + "px)")) : (f(n.$currentPage
                .style, "Transform", "translateX(0px) scale(1)"), n.$activePage =
              null)
        }
      }

      function Q() {
        Math.abs(I) > Math.abs(H) && Math.abs(I) > 20 ? (I > 0 ? f(n.$currentPage
          .style, "Transform", "rotateX(-90deg) translateY(" + t / 2 +
          "px) translateZ(" + t / 2 + "px)") : f(n.$currentPage.style,
          "Transform", "rotateX(90deg) translateY(-" + t / 2 +
          "px) translateZ(" + t / 2 + "px)"), f(n.$currentPage.style,
          "zIndex", "0"), f(n.$activePage.style, "Transform",
          "rotateX(0deg) translateY(0px) translateZ(0px)"), f(n.$activePage
          .style, "zIndex", "2"), $(document).trigger("flipend")) : (f(n.$currentPage
          .style, "Transition", "none"), f(n.$activePage.style,
          "Transition", "none"), n._isDisableFlipPage = !1, i())
      }

      function R() {
        if (Math.abs(I) > Math.abs(H) && completeEffect($(n.$currentPage)))
          if (I > 0) {
            if (n._isDisableFlipNextPage) return;
            (!K || L) && (K = !0, L = !1, n.$activePage && $(n.$activePage).removeClass(
              "z-move z-active"), aa(!0), g(ea, "perspective", "700px"), g(
              ea, "transform-style", "preserve-3d"), f(n.$activePage.style,
              "TransformOrigin", "top"), f(n.$activePage.style, "Transform",
              "rotateX(90deg)")), n.$activePage && n.$activePage.classList.contains(
              "main-page") && ($(n.$activePage).addClass("z-active z-move")
              .trigger("active"), f(n.$activePage.style, "Transform",
                "rotateX(" + (90 - I / t * 90) + "deg) "))
          } else if (0 > I) {
          if (n._isDisableFlipNextPage) return;
          (!K || L) && (K = !0, L = !1, n.$activePage && $(n.$activePage).removeClass(
              "z-move z-active"), aa(!1), f(n.$activePage.style,
              "TransformOrigin", "bottom"), f(n.$activePage.style,
              "Transform", "rotateX(-90deg)"), g(ea, "perspective", "700px"),
            g(ea, "transform-style", "preserve-3d")), n.$activePage && n.$activePage
            .classList.contains("main-page") ? ($(n.$activePage).addClass(
              "z-active z-move").trigger("active"), f(n.$activePage.style,
              "Transform", "rotateX(" + (-90 - I / t * 90) + "deg) ")) : (f(n
                .$currentPage.style, "Transform", "translateX(0px) scale(1)"),
              n.$activePage = null)
        }
      }

      function S() {
        Math.abs(I) > Math.abs(H) && Math.abs(I) > 20 ? (I > 0 ? f(n.$activePage
            .style, "Transform", "rotateX(0deg)") : f(n.$activePage.style,
            "Transform", "rotateX(0deg)"), $(document).trigger("flipend")) :
          (f(n.$currentPage.style, "Transition", "none"), f(n.$activePage.style,
            "Transition", "none"), n._isDisableFlipPage = !1, i())
      }

      function T() {
        if (Math.abs(I) > Math.abs(H) && completeEffect($(n.$currentPage))) {
          if (I > 0) {
            if (n._isDisableFlipPrevPage) return;
            (K || L) && (K = !1, L = !1, n.$activePage && (n.$activePage.classList
                .remove("z-active"), n.$activePage.classList.remove("z-move")
              ), aa(!0), n.$activePage.style.zIndex = 2, n.$activePage && n.$activePage
              .classList.contains("main-page") && (n.$activePage.classList.add(
                "z-active"), n.$activePage.classList.add("z-move")), n.$activePage
              .style.opacity = 0)
          } else if (0 > I) {
            if (n._isDisableFlipNextPage) return;
            (!K || L) && (K = !0, L = !1, n.$activePage && (n.$activePage.classList
                .remove("z-active"), n.$activePage.classList.remove("z-move")
              ), aa(!1), n.$activePage.style.zIndex = 2, n.$activePage && n.$activePage
              .classList.contains("main-page") && (n.$activePage.classList.add(
                "z-active"), n.$activePage.classList.add("z-move")), n.$activePage
              .style.opacity = 0)
          }
          var a = Math.abs(I) / t * 1.3;
          n.$activePage.style.opacity = a.toFixed(1), a.toFixed(3) <= 1 && g(
            $(n.$activePage), "transform", "scale(" + a.toFixed(3) + ")")
        }
      }

      function U() {
        Math.abs(I) > Math.abs(H) && Math.abs(I) > 20 ? (g($(n.$activePage),
          "transform", "scale(1)"), n.$activePage.style.opacity = 1, $(
          document).trigger("flipend")) : (f(n.$currentPage.style,
          "Transition", "none"), f(n.$activePage.style, "Transition",
          "none"), n._isDisableFlipPage = !1, i())
      }

      function V() {
        if (Math.abs(I) > Math.abs(H) && completeEffect($(n.$currentPage)))
          if (I > 0) {
            if (n._isDisableFlipPrevPage) return;
            (K || L) && (K = !1, L = !1, n.$activePage && (n.$activePage.classList
                .remove("z-active"), n.$activePage.classList.remove(
                  "z-fade-in"), n.$activePage.classList.remove("z-move")), aa(!
                0), n.$currentPage.style.zIndex = 1, n.$activePage.style.zIndex =
              2, n.$activePage && n.$activePage.classList.contains(
                "main-page") && (n.$activePage.classList.add("z-active"), n.$activePage
                .classList.add("z-fade-in"), n.$activePage.classList.add(
                  "z-move")))
          } else if (0 > I) {
          if (n._isDisableFlipNextPage) return;
          (!K || L) && (K = !0, L = !1, n.$activePage && (n.$activePage.classList
              .remove("z-active"), n.$activePage.classList.remove("z-fade-in"),
              n.$activePage.classList.remove("z-move")), aa(!1), n.$currentPage
            .style.zIndex = 1, n.$activePage && n.$activePage.classList.contains(
              "main-page") && (n.$activePage.style.zIndex = 2, n.$activePage.classList
              .add("z-active"), n.$activePage.classList.add("z-fade-in"), n.$activePage
              .classList.add("z-move")))
        }
      }

      function W() {
        Math.abs(I) > Math.abs(H) && Math.abs(I) > 20 ? setTimeout(function() {
          $(document).trigger("flipend")
        }, 1600) : (n._isDisableFlipPage = !1, i())
      }

      function X() {
        if (Math.abs(H) > Math.abs(I) && completeEffect($(n.$currentPage)))
          if (H > 0) {
            if (n._isDisableFlipPrevPage) return;
            K || L ? (K = !1, L = !1, n.$activePage && (n.$activePage.classList
                .remove("z-active"), n.$activePage.classList.remove(
                  "z-move")), aa(!0), n.$activePage && n.$activePage.classList
              .contains("main-page") && (n.$activePage.classList.add(
                "z-active"), n.$activePage.classList.add("z-move"), g($(n
                  .$activePage), "Transform",
                "scale(0.3) translateX(0) translateZ(-" + t +
                "px) rotateY(45deg)"), n.$activePage.style.zIndex = "0"), g(
                ea, "perspective", "1000px"), n.$currentPage.style.zIndex =
              "100") : n.$activePage && (s / 4 >= H ? g($(n.$currentPage),
              "Transform", "translateX(" + H + "px)") : g($(n.$currentPage),
              "Transform", "translateX(" + 1.5 * H + "px) scale(" + ((5 *
                s / 4 - H) / s).toFixed(3) + ") rotateY(" + H / s * 45 +
              "deg) translateZ(-" + (H - s / 4) + "px)"))
          } else if (0 > H) {
          if (n._isDisableFlipNextPage) return;
          !K || L ? (K = !0, L = !1, n.$activePage && (n.$activePage.classList
              .remove("z-active"), n.$activePage.classList.remove("z-move")
            ), aa(!1), n.$activePage && n.$activePage.classList.contains(
              "main-page") && (n.$activePage.classList.add("z-active"), n.$activePage
              .classList.add("z-move"), g($(n.$activePage), "Transform",
                "scale(0.3) translateX(" + (s + 300) + "px) translateZ(-" +
                t + "px) rotateY(-45deg)"), n.$activePage.style.zIndex =
              "0"), g(ea, "perspective", "1000px"), n.$currentPage.style.zIndex =
            "100") : n.$activePage && (H >= -s / 4 ? g($(n.$currentPage),
            "Transform", "translateX(" + H + "px)") : g($(n.$currentPage),
            "Transform", "translateX(" + 1.5 * H + "px) scale(" + ((5 * s /
              4 + H) / s).toFixed(3) + ") rotateY(" + H / s * 45 +
            "deg) translateZ(" + (H + s / 4) + "px)"), g($(n.$activePage),
            "Transform", "scale(" + (.3 - (H + s / 4) / s).toFixed(3) +
            ") translateX(" + (-H - s / 4 + 200) + "px) translateZ(" + (-
              H - 3 * s / 4) + "px) rotateY(-" + (45 + (H + s / 4) / s *
              45) + "deg)"))
        }
      }

      function Y() {
        Math.abs(H) > Math.abs(I) && Math.abs(H) > 20 ? (H > 0 ? (n.$currentPage
          .style.webkitTransformOrigin = "left", n.$currentPage.style.webkitTransform =
          "translateX(0) translateZ(-" + t + "px) rotateY(0) scale(0.2)",
          n.$activePage.style.webkitTransform =
          "translateX(0) translateZ(0) rotateY(0) scale(1)", n.$currentPage
          .style.zIndex = "0", n.$activePage.style.zIndex = "1") : (n.$currentPage
          .style.webkitTransformOrigin = "right", n.$currentPage.style.webkitTransform =
          "translateX(" + s + "px) translateZ(-" + t +
          "px) rotateY(0) scale(0.2)", n.$activePage.style.webkitTransform =
          "translateX(0) translateZ(0) rotateY(0) scale(1)", n.$activePage
          .style.zIndex = "1", n.$currentPage.style.zIndex = "0"), $(
          document).trigger("flipend")) : (f(n.$currentPage.style,
          "Transition", "none"), f(n.$activePage.style, "Transition",
          "none"), n._isDisableFlipPage = !1, i())
      }

      function Z() {
        if (Math.abs(I) > Math.abs(H) && completeEffect($(n.$currentPage))) {
          if (I > 0) {
            if (n._isDisableFlipPrevPage) return;
            (K || L) && (K = !1, L = !1, n.$activePage && (n.$activePage.classList
              .remove("z-active"), n.$activePage.classList.remove("z-move")
            ), aa(!0), n.$activePage && n.$activePage.classList.contains(
              "main-page") && ($(n.$activePage).addClass("z-active z-move"),
              $(n.$activePage).css({
                zIndex: 0,
                opacity: 1
              })), $(n.$currentPage).css({
              opacity: 1
            }), $(n.$activePage).css({
              zIndex: 0,
              opacity: 1
            }), g($(n.$activePage), "transform", "translateY(0)"), g($(n.$currentPage),
              "transform-origin", "0% 0% 0px"))
          } else if (0 > I) {
            if (n._isDisableFlipNextPage) return;
            (!K || L) && (K = !0, L = !1, n.$activePage && (n.$activePage.classList
              .remove("z-active"), n.$activePage.classList.remove("z-move")
            ), aa(!1), n.$activePage && n.$activePage.classList.contains(
              "main-page") && (n.$activePage.classList.add("z-active"), n.$activePage
              .classList.add("z-move"), $(n.$activePage).css({
                zIndex: 0,
                opacity: 1
              })), $(n.$currentPage).css({
              opacity: 1
            }), $(n.$activePage).css({
              zIndex: 0,
              opacity: 1
            }), g($(n.$activePage), "transform", "translateY(0)"), g($(n.$currentPage),
              "transform-origin", "0% 0% 0px"))
          }
          n.$activePage && (g($(n.$currentPage), "transform-origin",
              "0% 0% 0px"), g($(n.$currentPage), "transform", "rotate(" +
              Math.abs(I) / t * 90 + "deg)"), n.$currentPage.style.opacity =
            ((t - Math.abs(I)) / t).toFixed(1))
        }
      }

      function _() {
        Math.abs(I) > Math.abs(H) && Math.abs(I) > 20 ? (g($(n.$currentPage),
          "transform", "translateY(" + t + "px) rotate(" + Math.abs(I) /
          t * 90 + "deg)"), $(n.$currentPage).css({
          opacity: .5
        }), $(document).trigger("flipend")) : (f(n.$currentPage.style,
          "Transition", "none"), f(n.$activePage.style, "Transition",
          "none"), n._isDisableFlipPage = !1, i())
      }

      function aa(a) {
        C || (a ? n.$currentPage.previousElementSibling && n.$currentPage.previousElementSibling
          .classList.contains("main-page") ? n.$activePage = n.$currentPage
          .previousElementSibling : B ? n.$activePage = n._$pages.last().get(
            0) : n.$activePage = !1 : n.$currentPage.nextElementSibling &&
          n.$currentPage.nextElementSibling.classList.contains("main-page") ?
          n.$activePage = n.$currentPage.nextElementSibling : B ? n.$activePage =
          n._$pages.first().get(0) : n.$activePage = !1)
      }

      function ba(a, b, c, d) {
        if (n.$activePage && (n.$activePage.classList.remove("z-active"), n.$activePage
            .classList.remove("z-move")), n.$activePage && n.$activePage.classList
          .contains("main-page")) {
          n.$activePage.classList.add("z-active"), n.$activePage.classList.add(
            "z-move");
          var e = a ? "-" : "";
          n.$activePage.style.webkitTransition = "none", n.$activePage.style.webkitTransform =
            c + "(" + e + d + "px)", n.$activePage.style.mozTransition =
            "none", n.$activePage.style.mozTransform = c + "(" + e + d +
            "px)", n.$activePage.style.transition = "none", n.$activePage.style
            .transform = c + "(" + e + d + "px)", $(n.$activePage).trigger(
              "active"), b && g($(n.$currentPage), "transform-origin", b)
        } else f(n.$currentPage.style, "Transform", c + "(0px) scale(1)")
      }

      function ca(a, b, c, d, e) {
        if (n.$activePage) {
          var f = a ? "-" : "";
          g($(n.$activePage), "transform", b + "(" + f + (c - Math.abs(d)) +
            "px)"), "1" == e || "3" == e ? g($(n.$currentPage), "transform",
            "scale(" + ((c - Math.abs(d)) / t).toFixed(3) + ")") : ("5" ==
            e || "11" == e) && g($(n.$currentPage), "transform", b + "(" +
            d + "px)")
        }
      }

      function da(a, b, c, d) {
        if ("1" == d || "3" == d) g($(n.$currentPage), "transform",
          "scale(0.2)");
        else if ("5" == d || "11" == d) {
          var e = b > 0 ? "" : "-";
          g($(n.$currentPage), "transform", a + "(" + e + c + "px)")
        } else g($(n.$currentPage), "transform", "scale(1)");
        g($(n.$activePage), "transform", a + "(0px)")
      }
      this._$app = a, this._$pages = this._$app.find(".main-page"), this.$currentPage =
        this._$pages.eq(0), this.$activePage = null, this._isInitComplete = !
        1, this._isDisableFlipPage = !1, this._isDisableFlipPrevPage = !1,
        this._isDisableFlipNextPage = !1, this._scrollMode = b, this._pageData =
        c, this.pageData = e, b = b, this._isforbidHandFlip = e.obj.property.forbidHandFlip,
        n = this, s = D || E ? window.innerWidth : a.width(), t = D || E ?
        window.innerHeight : a.height();
      var ea = $("#con"),
        fa = !1;
      ("8" == b || "9" == b) && (N = .7, M = 800), 0 == b || 1 == b || 2 == b ||
        6 == b || 7 == b || 8 == b || 11 == b || 12 == b ? x = !0 : (3 == b ||
          4 == b || 5 == b || 10 == b) && (w = !0), x ? (y = $(
          ".ctrl_panel_dir .ctrl-down"), $nextCtrl = $(
          ".ctrl_panel_dir .ctrl-up")) : w && (y = $(
          ".ctrl_panel_dir .ctrl-right"), $nextCtrl = $(
          ".ctrl_panel_dir .ctrl-left")), e.obj.property.hasOwnProperty(
          "triggerLoop") || (e.obj.property.triggerLoop = !0), B = e.obj.property
        .triggerLoop, e.obj.property.autoFlip && (v = 1e3 * e.obj.property.autoFlipTime,
          d());
      var ga;
      if (c[0].elements && c[0].elements.length)
        for (var ha = 0; ha < c[0].elements.length; ha++) {
          ga || (eqShow.shakeTrigger(c, n.$currentPage), ga = !0);
          var ia = h(c[0].elements[ha].id);
          eqxCommon.bindTrigger(ia, c[0].elements[ha])
        }
      if (function() {
          A.on("scroll.elasticity", function(a) {
            a.preventDefault()
          }).on("touchmove.elasticity", function(a) {
            a.preventDefault()
          }), A.delegate("img", "mousemove", function(a) {
            a.preventDefault()
          })
        }(), "10" != b) {
        var ja = !1;
        n._$app.on("mousedown touchstart", function(a) {
          n._isforbidHandFlip || (o(a), ja = !0)
        }).on("mousemove touchmove", function(a) {
          n._isforbidHandFlip || ja && p(a)
        }).on("mouseup touchend mouseleave", function(a) {
          n._isforbidHandFlip || (q(a), ja = !1)
        })
      } else turnBook(e);
      o = function(a) {
        fa = !1, D && a && (a = event), n._isDisableFlipPage || (n.$currentPage =
          n._$pages.filter(".z-current").get(0), C || (n.$activePage =
            null), n.$currentPage && completeEffect($(n.$currentPage)) &&
          (J = !0, K = !1, L = !0, H = 0, I = 0, a && "mousedown" == a.type ?
            (F = a.pageX, G = a.pageY) : a && "touchstart" == a.type && (
              F = a.touches ? a.touches[0].pageX : a.originalEvent.touches[
                0].pageX, G = a.touches ? a.touches[0].pageY : a.originalEvent
              .touches[0].pageY), n.$currentPage.classList.add("z-move"),
            f(n.$currentPage.style, "Transition", "none"), "12" == n._scrollMode &&
            (n.$currentPage.style.zIndex = 3)))
      }, p = function(a) {
        D && a && (a = event), J && n._$pages.length > 1 && (a &&
          "mousemove" == a.type ? (H = a.pageX - F, I = a.pageY - G) : a &&
          "touchmove" == a.type && (H = (a.touches ? a.touches[0].pageX :
            a.originalEvent.touches[0].pageX) - F, I = (a.touches ? a.touches[
            0].pageY : a.originalEvent.touches[0].pageY) - G), !fa && (
            Math.abs(H) > 20 || Math.abs(I) > 20) && (fa = !0), "0" == n._scrollMode ||
          "2" == n._scrollMode || "1" == n._scrollMode || "15" == n._scrollMode ?
          j() : "4" == n._scrollMode || "3" == n._scrollMode ? l() : "5" ==
          n._scrollMode ? r() : "6" == n._scrollMode ? P() : "7" == n._scrollMode ?
          R() : "8" == n._scrollMode ? T() : "9" == n._scrollMode ? X() :
          "11" == n._scrollMode ? z() : "12" == n._scrollMode ? Z() :
          "13" == n._scrollMode ? V() : "14" == n._scrollMode && V())
      }, q = function(a) {
        if (J && completeEffect($(n.$currentPage)))
          if (J = !1, n.$activePage) {
            n._isDisableFlipPage = !0;
            var b;
            b = "6" == n._scrollMode || "7" == n._scrollMode ?
              "cubic-bezier(0,0,0.99,1)" : "12" == n._scrollMode ?
              "cubic-bezier(.17,.67,.87,.13)" : "linear", n.$currentPage.style
              .webkitTransition = "-webkit-transform " + N + "s " + b, n.$activePage
              .style.webkitTransition = "-webkit-transform " + N + "s " + b,
              n.$currentPage.style.mozTransition = "-moz-transform " + N +
              "s " + b, n.$activePage.style.mozTransition =
              "-moz-transform " + N + "s " + b, n.$currentPage.style.transition =
              "transform " + N + "s " + b, n.$activePage.style.transition =
              "transform " + N + "s " + b, "0" == n._scrollMode || "2" == n
              ._scrollMode || "1" == n._scrollMode || "15" == n._scrollMode ?
              k() : "4" == n._scrollMode || "3" == n._scrollMode ? m() :
              "5" == n._scrollMode ? u() : "6" == n._scrollMode ? Q() : "7" ==
              n._scrollMode ? S() : "8" == n._scrollMode ? U() : "9" == n._scrollMode ?
              Y() : "11" == n._scrollMode ? O() : "12" == n._scrollMode ? _() :
              "13" == n._scrollMode ? W() : "14" == n._scrollMode && W();
            var c = $(n.$activePage).find(".m-img").attr("id").replace(
              "page", "") - 1;
            n._pageData[c].properties && n._pageData[c].properties.longPage &&
              $(document).trigger("clearTouchPos"), $(n.$activePage).find(
                "li.comp-resize").each(function(a) {
                for (var b = 0; b < n._pageData[c].elements.length; b++)
                  if (n._pageData[c].elements[b].id == parseInt($(this).attr(
                      "id").substring(7), 10)) {
                    eqxCommon.animation($(this), n._pageData[c].elements[
                      b], "view", n._pageData[c].properties);
                    var d = h(n._pageData[c].elements[b].id);
                    eqxCommon.bindTrigger(d, n._pageData[c].elements[b])
                  }
              });
            for (var d = 0; d < n._pageData.length; d++) n._pageData[d].effObj &&
              (n._pageData[d].effObj.pause = !0);
            n._pageData[c].effObj && n._pageData[c].effObj.startPlay(),
              eqShow.setPageHis(n._pageData[c].id)
          } else n.$currentPage.classList.remove("z-move");
        C = !1
      }, $(document).on("flipend", function(a) {
        completeEffect($(n.$activePage)) || $("#audio_btn").css("opacity",
          0);
        var d = $("#report0"),
          g = $(n.$activePage).find(".m-img").attr("id").substring(4),
          h = [];
        c = n._pageData, c[g - 1].elements && c[g - 1].elements.length &&
          (h = c[g - 1].elements, $.each(h, function(a, b) {
            "d" == b.type && eqShow.getShowCount(e.obj.id).then(
              function(a) {
                var c = eqShow.fixedNum(a);
                $("#" + b.id).find(".counter-number").text(c)
              })
          })), eqShow.clearTyperText(c[g - 1]), setTimeout(function() {
            f(n.$currentPage.style, "Transition", "none"), $(n.$activePage)
              .removeClass("z-active z-move").addClass("z-current"), $(
                n.$currentPage).removeClass("z-current z-move"), n._isDisableFlipPage = !
              1, n.$currentPage = $(n.$activePage).trigger("current"),
              $(n.$currentPage).trigger("hide"), utilSound.pause(), d.length &&
              d.remove(), ("8" == b || "9" == b || "12" == b) && ($(n.$currentPage)
                .css("z-index", "1"), $(".main-page").attr("style", "")
              ), eqShow.shakeTrigger(c, n.$currentPage), B || (1 == g ?
                y.removeClass("enabled") : g == n._pageData.length ?
                $nextCtrl.removeClass("enabled") : (y.addClass(
                  "enabled"), $nextCtrl.addClass("enabled"))), window.wechatUtils &&
              wechatUtils.stopWechatSound()
          }, M)
      }), $(document).on("startAutoFlip", function(a) {
        e.obj.property.autoFlip && d()
      }), eqShow.showProgressBar(e, n._$pages, a)
    };
  return {
    pageScroll: a,
    nextPage: c,
    prePage: b,
    lastPage: f,
    app: O,
    pauseAutoFlip: e,
    removeLastPage: g,
    changeScrollMode: h,
    startAutoFlip: j,
    changeAppPage: k,
    setTriggerLoop: m,
    forbidHandFlip: i,
    setPageData: l
  }
}();
!
function(a, b) {
  function c(a, c) {
    completeEffect(b(".z-current")) && (E = "started", D.length || (D = n.find(
      ".main-page")), c || (B ? (a = event, q = {
      x: a.touches[0].pageX - n.offset().left,
      y: a.touches[0].pageY - n.offset().top
    }) : q = {
      x: a.pageX - n.offset().left,
      y: a.pageY - n.offset().top
    }))
  }

  function d(a, c) {
    if (E = "turning", W && W.obj.property.autoFlip && W.obj.property.autoFlipTime &&
      m(), c || (B ? (a = event, r = {
        x: a.touches[0].pageX - n.offset().left,
        y: a.touches[0].pageY - n.offset().top
      }) : r = {
        x: a.pageX - n.offset().left,
        y: a.pageY - n.offset().top
      }), s = r.x - q.x, 0 > s) {
      if (x) {
        x = !1, B && p ? v = !0 : q.y >= n.height() / 2 ? t = !0 : q.y < n.height() /
          2 && (u = !0), y = b(".z-current").get(0);
        var d = b(y).find(".m-img").attr("id").substring(4);
        if (o = b("#flip" + d), Z || (z = b(y).parent(".flip-mask").get(0).nextElementSibling &&
            b(b(y).parent(".flip-mask").get(0).nextElementSibling).find(
              ".main-page").get(0) ? b(b(y).parent(".flip-mask").get(0).nextElementSibling)
            .find(".main-page").get(0) : A ? D.first().get(0) : !1), z) {
          b(z).find(".m-img").attr("id").substring(4);
          b(y).parent(".flip-mask").css({
              zIndex: 100,
              display: "block"
            }), b(z).addClass("z-active").parent(".flip-mask").css({
              zIndex: 99,
              display: "block"
            }), i(z), completeEffect(b(z)) || b("#audio_btn").css("opacity", 0),
            t ? (b(".z-current").css({
              top: o.height() - n.height() + "px",
              left: "0"
            }), o.css({
              top: "-" + (o.height() - n.height()) + "px"
            }), b(".turning").css({
              transformOrigin: "0% 100% 0px",
              left: n.width() + "px",
              top: n.height() + "px"
            })) : u ? b(".turning").css({
              top: "0",
              left: n.width() + "px",
              transformOrigin: "0% 0% 0px"
            }) : v && (b(".z-current").css({
              top: 0,
              left: b(this).width() - n.width() + "px"
            }), o.css({
              top: 0,
              left: -(o.width() - n.width()) + "px"
            }), b(".turning").css({
              transformOrigin: "0% 100% 0px",
              left: n.width() + "px",
              top: 0
            }))
        }
      }
    } else if (s > 0 && x) {
      x = !1, w = !0, y = b(".z-current").get(0);
      var d = b(y).find(".m-img").attr("id").substr(4);
      o = b("#flip" + d), Z || (z = b(y).parent(".flip-mask").get(0).previousElementSibling &&
        b(b(y).parent(".flip-mask").get(0).previousElementSibling).find(
          ".main-page").get(0) ? b(b(y).parent(".flip-mask").get(0).previousElementSibling)
        .find(".main-page").get(0) : A ? D.last().get(0) : !1), z && (i(z),
        completeEffect(b(z)) || b("#audio_btn").css("opacity", 0), b(y).parent(
          ".flip-mask").css({
          display: "block"
        }), b(z).addClass("z-active").parent(".flip-mask").css({
          zIndex: 99,
          display: "block"
        }), b(".turning").css({
          top: "0",
          left: "0",
          transformOrigin: "0% 0% 0px"
        }))
    }
    z && f(r)
  }

  function e(a, b) {
    if (!z) return E = "feeling", t = !1, u = !1, v = !1, w = !1, void(x = !0);
    E = "leaving";
    var c, d, e, g;
    b ? (c = a.x, d = a.y) : B ? (c = r.x - n.offset().left, d = r.y - n.offset()
        .top) : (c = a.pageX - n.offset().left, d = a.pageY - n.offset().top),
      t ? (F = 16, e = -n.width(), g = n.height(), C = setInterval(function() {
        c = F >= c - e ? c : c - F, d = F >= g - d ? d : d + F, f({
          x: c,
          y: d
        }), F >= c - e && F >= g - d && (clearInterval(C), h())
      }, 10)) : u ? (F = 16, e = -n.width(), g = 0, C = setInterval(function() {
        c = F >= c - e ? c : c - F, d = F >= d - g ? d : d - F, f({
          x: c,
          y: d
        }), F >= c - e && F >= d - g && (clearInterval(C), h())
      }, 1)) : v ? (F = 5, e = -n.width(), C = setInterval(function() {
        c = F >= c - e ? c : c - F, f({
          x: c,
          y: d
        }), F >= c - e && (clearInterval(C), h())
      }, 1)) : w && (F = 3, e = n.width(), g = 0, C = setInterval(function() {
        c = F >= e - c ? c : c + F, f({
          x: c,
          y: d
        }), F >= e - c && (clearInterval(C), h())
      }, 1))
  }

  function f(a) {
    t || u ? (H = n.width() - a.x, t ? I = Math.abs(n.height() - a.y) : u && (I =
        a.y), J = I / H, K = I / Math.sqrt(H * H + I * I), L = Math.sqrt(1 -
        K * K), M = Math.sqrt(H * H + I * I) / 2, N = M * J, O = Math.sqrt(N *
        N + M * M), P = O / J, G = 180 * Math.atan(J) / Math.PI > 0 ? 180 *
      Math.atan(J) / Math.PI : 0, Q = (n.width() - O) * L, R = (n.width() - O) *
      K * L, S = (n.width() - O) * (1 - K * K), Q >= 1 && (t ? (G > 1 ? b(
          ".turning").css({
          width: O + "px",
          height: P + "px",
          backgroundColor: "#ff0000",
          background: "-webkit-linear-gradient(" + (180 - G) +
            "deg, #fff 10%, #d1cfc7 40%, #f2eee2 50%, transparent 50%, transparent 100%)",
          transform: "translateX(-" + (O - 3) + "px) translateY(-" + (P -
            3) + "px) rotate(" + 2 * G + "deg) scaleX(-1)"
        }) : g(a), T = "0% 100% 0px", U = "rotate(-" + (90 - G) +
        "deg) translateY(" + Q + "px)", V = "rotate(" + (90 - G) +
        "deg) translateY(-" + R + "px) translateX(-" + S + "px)") : u && (G >
        1 ? b(".turning").css({
          width: O + "px",
          height: P + "px",
          backgroundColor: "#000",
          background: "-webkit-linear-gradient(-" + (180 - G) +
            "deg, #fff 10%, #d1cfc7 40%, #f2eee2 50%, transparent 50%, transparent 100%)",
          transform: "translateX(-" + (O - 2) + "px) rotate(-" + 2 * G +
            "deg) scaleX(-1)"
        }) : g(a), T = "0% 0% 0px", U = "rotate(" + (90 - G) +
        "deg) translateY(-" + Q + "px)", V = "rotate(-" + (90 - G) +
        "deg) translateY(" + R + "px) translateX(-" + S + "px)"), o.css({
        zIndex: 100,
        transformOrigin: T,
        transform: U
      }), b(z).parent(".flip-mask").css({
        zIndex: 99,
        display: "block"
      }), b(z).css({
        zIndex: 1e3
      }), b(y).css({
        transformOrigin: T,
        transform: V
      }))) : v ? (b(".turning").css({
      width: (n.width() - a.x) / 2 + "px",
      height: n.height() + "px",
      left: a.x + "px",
      background: "-webkit-linear-gradient(left, #fff 0% , #d1cfc7 15%, #f2eee2 85%, #fff 100%)"
    }), o.css({
      transformOrigin: "0% 50% 0px",
      left: 0,
      transform: "translateX(-" + (o.width() - a.x) + "px)"
    }), b(y).css({
      transformOrigin: "0% 50% 0px",
      transform: "translateX(" + (o.width() - a.x) + "px)"
    })) : w && (o.css({
      zIndex: 100,
      transformOrigin: "0% 50% 0px",
      transform: "translateX(" + a.x + "px)"
    }), b(y).css({
      transformOrigin: "0% 50% 0px",
      transform: "translateX(-" + a.x + "px)"
    }), b(".turning").css({
      width: n.width() - a.x + "px",
      height: n.height() + "px",
      left: -(n.width() - 2 * a.x) + "px",
      background: "-webkit-linear-gradient(left, #fff 0% , #d1cfc7 15%, #f2eee2 85%, #fff 100%)"
    }))
  }

  function g(a) {
    b(".turning").css({
      width: (n.width() - a.x + 6) / 2 + "px",
      height: n.height() + "px",
      top: 0,
      left: a.x + 2 + "px",
      background: "-webkit-linear-gradient(left, #fff 0% , #d1cfc7 10%, #f2eee2 90%, #fff 100%)",
      transform: "",
      border: 0
    })
  }

  function h() {
    var a = W.list;
    W.obj.property.autoFlip && W.obj.property.autoFlipTime && l(), utilSound.pause();
    var c = b("#report0");
    c.length && c.remove(), E = "feeling", t = !1, u = !1, v = !1, w = !1, x = !
      0, s = 0, b(".flip-mask").css({
        transform: "",
        top: 0,
        left: 0,
        zIndex: 0
      }), b(y).removeClass("z-current").css({
        transform: "",
        top: 0,
        left: 0
      }), b(z).removeClass("z-active").addClass("z-current").css({
        transform: ""
      }), b(".turning").css({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        transform: "",
        background: "none"
      }), y = z;
    var d = b(z).find(".m-img").attr("id").substring(4);
    b("#flip" + d).css({
      zIndex: 100
    }), b("#audio_btn").css("opacity", 1), z = null;
    var e = b(y).find(".m-img").attr("id").substring(4);
    a[e - 1].elements && a[e - 1].elements.length && b.each(a[e - 1].elements,
      function(a, c) {
        "d" == c.type && eqShow.getShowCount(W.obj.id).then(function(a) {
          var d = eqShow.fixedNum(a);
          b("#" + c.id).find(".counter-number").text(d)
        })
      }), $ || eqShow.showProgressBar(W, b("#nr").find(".main-page")), $ = !0
  }

  function i(a) {
    if (a) {
      var c = b(a).find(".m-img").attr("id").substring(4);
      b(a).find("li").each(function(a) {
        for (var d = 0; d < W.list[c - 1].elements.length; d++) W.list[c -
          1].elements[d].id == parseInt(b(this).attr("id").substring(7),
          10) && eqxCommon.animation(b(this), W.list[c - 1].elements[d],
          "view")
      })
    }
  }

  function j() {
    "turning" != E && "leaving" != E && (q = {
      x: 0,
      y: n.height()
    }, c(q, "mock"), E = "turning", b(".main-page").css({
      width: n.width() + "px",
      height: n.height() + "px"
    }), r = {
      x: 0,
      y: n.height()
    }, w = !0, C = setInterval(function() {
      r.x++, d(r, "mock"), r.x <= 250 && (clearInterval(C), e(r, "mock"))
    }, 1))
  }

  function k() {
    "turning" != E && "leaving" != E && (q = {
      x: n.width(),
      y: n.height()
    }, c(q, "mock"), E = "turning", b(".main-page").css({
      width: n.width() + "px",
      height: n.height() + "px"
    }), r = {
      x: n.width(),
      y: n.height()
    }, B && p ? v = !0 : t = !0, Y = setInterval(function() {
      r.x -= 5, r.y -= 5, d(r, "mock"), r.x <= 200 && (clearInterval(Y),
        e(r, "mock"), A || z || m())
    }, 1))
  }

  function l() {
    _ = setInterval(function() {
      return completeEffect(b(".z-current")) ? void k() : void m()
    }, 1e3 * X)
  }

  function m() {
    clearInterval(_)
  }
  var n = b(".nr"),
    o = null,
    p = isAndroid(),
    q = {},
    r = {},
    s = 0,
    t = !1,
    u = !1,
    v = !1,
    w = !1,
    x = !0,
    y = null,
    z = null,
    A = !1,
    B = mobilecheck(),
    C = null,
    D = [],
    E = "feeling",
    F = 0,
    G = 0,
    H = 0,
    I = 0,
    J = 0,
    K = 0,
    L = 0,
    M = 0,
    N = 0,
    O = 0,
    P = 0,
    Q = 0,
    R = 0,
    S = 0,
    T = 0,
    U = 0,
    V = 0,
    W = null,
    X = 0,
    Y = "",
    Z = !1;
  a.turnBook = function(a) {
    W = a, W.obj.property.autoFlip && W.obj.property.autoFlipTime && (X = W.obj
      .property.autoFlipTime, l()), A = W.obj.property.triggerLoop, b(
      '<div class="turning"></div>').appendTo(".nr"), b(".main-page").css({
      width: b(".nr").width() + "px",
      height: b(".nr").height() + "px"
    }), n.on(B ? "touchstart" : "mousedown", function(a) {
      W.obj.property.forbidHandFlip || "feeling" == E && (c(a), b(
        ".main-page").css({
        width: n.width() + "px",
        height: n.height() + "px"
      }))
    }).on(B ? "touchmove" : "mousemove", function(a) {
      W.obj.property.forbidHandFlip || ("started" == E || "turning" == E) &&
        d(a)
    }).on(B ? "touchend" : "mouseup mouseleave", function(a) {
      return !W.obj.property.forbidHandFlip && (Z = !1, b(".z-current").get(
        0)) ? 0 == s ? (x = !0, void(E = "feeling")) : void("turning" ==
        E && e(a)) : void 0
    })
  };
  var $ = !1;
  a.flipBookScroll = function(a) {
    Z = !0;
    for (var c, d = 0, e = W.list.length; e > d; d++) a == W.list[d].id && (c =
      W.list[d].num);
    c || (c = a), y = b(".z-current").get(0);
    var f = b(y).find(".m-img").attr("id").substring(4),
      g = b(y).parent(".flip-mask").siblings(".flip-mask").find(".main-page")
      .find("#page" + c);
    g && (z = b(g).parent(".main-page").get(0), f > c ? j() : c > f && k())
  }, b(document).on("bookFlipPre", function(a) {
    j()
  }), b(document).on("bookFlipNext", function(a) {
    k()
  });
  var _
}(window, jQuery), QR8bitByte.prototype = {
  getLength: function(a) {
    return this.data.length
  },
  write: function(a) {
    for (var b = 0; b < this.data.length; b++) a.put(this.data.charCodeAt(b),
      8)
  }
}, QRCode.prototype = {
  addData: function(a) {
    var b = new QR8bitByte(a);
    this.dataList.push(b), this.dataCache = null
  },
  isDark: function(a, b) {
    if (0 > a || this.moduleCount <= a || 0 > b || this.moduleCount <= b)
      throw new Error(a + "," + b);
    return this.modules[a][b]
  },
  getModuleCount: function() {
    return this.moduleCount
  },
  make: function() {
    if (this.typeNumber < 1) {
      var a = 1;
      for (a = 1; 40 > a; a++) {
        for (var b = QRRSBlock.getRSBlocks(a, this.errorCorrectLevel), c =
            new QRBitBuffer, d = 0, e = 0; e < b.length; e++) d += b[e].dataCount;
        for (var e = 0; e < this.dataList.length; e++) {
          var f = this.dataList[e];
          c.put(f.mode, 4), c.put(f.getLength(), QRUtil.getLengthInBits(f.mode,
            a)), f.write(c)
        }
        if (c.getLengthInBits() <= 8 * d) break
      }
      this.typeNumber = a
    }
    this.makeImpl(!1, this.getBestMaskPattern())
  },
  makeImpl: function(a, b) {
    this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(
      this.moduleCount);
    for (var c = 0; c < this.moduleCount; c++) {
      this.modules[c] = new Array(this.moduleCount);
      for (var d = 0; d < this.moduleCount; d++) this.modules[c][d] = null
    }
    this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(
        this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount -
        7), this.setupPositionAdjustPattern(), this.setupTimingPattern(),
      this.setupTypeInfo(a, b), this.typeNumber >= 7 && this.setupTypeNumber(
        a), null == this.dataCache && (this.dataCache = QRCode.createData(
        this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(
        this.dataCache, b)
  },
  setupPositionProbePattern: function(a, b) {
    for (var c = -1; 7 >= c; c++)
      if (!(-1 >= a + c || this.moduleCount <= a + c))
        for (var d = -1; 7 >= d; d++) - 1 >= b + d || this.moduleCount <= b +
          d || (c >= 0 && 6 >= c && (0 == d || 6 == d) || d >= 0 && 6 >= d &&
            (0 == c || 6 == c) || c >= 2 && 4 >= c && d >= 2 && 4 >= d ?
            this.modules[a + c][b + d] = !0 : this.modules[a + c][b + d] = !
            1)
  },
  getBestMaskPattern: function() {
    for (var a = 0, b = 0, c = 0; 8 > c; c++) {
      this.makeImpl(!0, c);
      var d = QRUtil.getLostPoint(this);
      (0 == c || a > d) && (a = d, b = c)
    }
    return b
  },
  createMovieClip: function(a, b, c) {
    var d = a.createEmptyMovieClip(b, c),
      e = 1;
    this.make();
    for (var f = 0; f < this.modules.length; f++)
      for (var g = f * e, h = 0; h < this.modules[f].length; h++) {
        var i = h * e,
          j = this.modules[f][h];
        j && (d.beginFill(0, 100), d.moveTo(i, g), d.lineTo(i + e, g), d.lineTo(
          i + e, g + e), d.lineTo(i, g + e), d.endFill())
      }
    return d
  },
  setupTimingPattern: function() {
    for (var a = 8; a < this.moduleCount - 8; a++) null == this.modules[a][
      6
    ] && (this.modules[a][6] = a % 2 == 0);
    for (var b = 8; b < this.moduleCount - 8; b++) null == this.modules[6][
      b
    ] && (this.modules[6][b] = b % 2 == 0);
  },
  setupPositionAdjustPattern: function() {
    for (var a = QRUtil.getPatternPosition(this.typeNumber), b = 0; b < a.length; b++)
      for (var c = 0; c < a.length; c++) {
        var d = a[b],
          e = a[c];
        if (null == this.modules[d][e])
          for (var f = -2; 2 >= f; f++)
            for (var g = -2; 2 >= g; g++) - 2 == f || 2 == f || -2 == g ||
              2 == g || 0 == f && 0 == g ? this.modules[d + f][e + g] = !0 :
              this.modules[d + f][e + g] = !1
      }
  },
  setupTypeNumber: function(a) {
    for (var b = QRUtil.getBCHTypeNumber(this.typeNumber), c = 0; 18 > c; c++) {
      var d = !a && 1 == (b >> c & 1);
      this.modules[Math.floor(c / 3)][c % 3 + this.moduleCount - 8 - 3] = d
    }
    for (var c = 0; 18 > c; c++) {
      var d = !a && 1 == (b >> c & 1);
      this.modules[c % 3 + this.moduleCount - 8 - 3][Math.floor(c / 3)] = d
    }
  },
  setupTypeInfo: function(a, b) {
    for (var c = this.errorCorrectLevel << 3 | b, d = QRUtil.getBCHTypeInfo(
        c), e = 0; 15 > e; e++) {
      var f = !a && 1 == (d >> e & 1);
      6 > e ? this.modules[e][8] = f : 8 > e ? this.modules[e + 1][8] = f :
        this.modules[this.moduleCount - 15 + e][8] = f
    }
    for (var e = 0; 15 > e; e++) {
      var f = !a && 1 == (d >> e & 1);
      8 > e ? this.modules[8][this.moduleCount - e - 1] = f : 9 > e ? this.modules[
        8][15 - e - 1 + 1] = f : this.modules[8][15 - e - 1] = f
    }
    this.modules[this.moduleCount - 8][8] = !a
  },
  mapData: function(a, b) {
    for (var c = -1, d = this.moduleCount - 1, e = 7, f = 0, g = this.moduleCount -
        1; g > 0; g -= 2)
      for (6 == g && g--;;) {
        for (var h = 0; 2 > h; h++)
          if (null == this.modules[d][g - h]) {
            var i = !1;
            f < a.length && (i = 1 == (a[f] >>> e & 1));
            var j = QRUtil.getMask(b, d, g - h);
            j && (i = !i), this.modules[d][g - h] = i, e--, -1 == e && (f++,
              e = 7)
          }
        if (d += c, 0 > d || this.moduleCount <= d) {
          d -= c, c = -c;
          break
        }
      }
  }
}, QRCode.PAD0 = 236, QRCode.PAD1 = 17, QRCode.createData = function(a, b, c) {
  for (var d = QRRSBlock.getRSBlocks(a, b), e = new QRBitBuffer, f = 0; f < c
    .length; f++) {
    var g = c[f];
    e.put(g.mode, 4), e.put(g.getLength(), QRUtil.getLengthInBits(g.mode, a)),
      g.write(e)
  }
  for (var h = 0, f = 0; f < d.length; f++) h += d[f].dataCount;
  if (e.getLengthInBits() > 8 * h) throw new Error("code length overflow. (" +
    e.getLengthInBits() + ">" + 8 * h + ")");
  for (e.getLengthInBits() + 4 <= 8 * h && e.put(0, 4); e.getLengthInBits() %
    8 != 0;) e.putBit(!1);
  for (;;) {
    if (e.getLengthInBits() >= 8 * h) break;
    if (e.put(QRCode.PAD0, 8), e.getLengthInBits() >= 8 * h) break;
    e.put(QRCode.PAD1, 8)
  }
  return QRCode.createBytes(e, d)
}, QRCode.createBytes = function(a, b) {
  for (var c = 0, d = 0, e = 0, f = new Array(b.length), g = new Array(b.length),
      h = 0; h < b.length; h++) {
    var i = b[h].dataCount,
      j = b[h].totalCount - i;
    d = Math.max(d, i), e = Math.max(e, j), f[h] = new Array(i);
    for (var k = 0; k < f[h].length; k++) f[h][k] = 255 & a.buffer[k + c];
    c += i;
    var l = QRUtil.getErrorCorrectPolynomial(j),
      m = new QRPolynomial(f[h], l.getLength() - 1),
      n = m.mod(l);
    g[h] = new Array(l.getLength() - 1);
    for (var k = 0; k < g[h].length; k++) {
      var o = k + n.getLength() - g[h].length;
      g[h][k] = o >= 0 ? n.get(o) : 0
    }
  }
  for (var p = 0, k = 0; k < b.length; k++) p += b[k].totalCount;
  for (var q = new Array(p), r = 0, k = 0; d > k; k++)
    for (var h = 0; h < b.length; h++) k < f[h].length && (q[r++] = f[h][k]);
  for (var k = 0; e > k; k++)
    for (var h = 0; h < b.length; h++) k < g[h].length && (q[r++] = g[h][k]);
  return q
};
for (var QRMode = {
    MODE_NUMBER: 1,
    MODE_ALPHA_NUM: 2,
    MODE_8BIT_BYTE: 4,
    MODE_KANJI: 8
  }, QRErrorCorrectLevel = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
  }, QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  }, QRUtil = {
    PATTERN_POSITION_TABLE: [
      [],
      [6, 18],
      [6, 22],
      [6, 26],
      [6, 30],
      [6, 34],
      [6, 22, 38],
      [6, 24, 42],
      [6, 26, 46],
      [6, 28, 50],
      [6, 30, 54],
      [6, 32, 58],
      [6, 34, 62],
      [6, 26, 46, 66],
      [6, 26, 48, 70],
      [6, 26, 50, 74],
      [6, 30, 54, 78],
      [6, 30, 56, 82],
      [6, 30, 58, 86],
      [6, 34, 62, 90],
      [6, 28, 50, 72, 94],
      [6, 26, 50, 74, 98],
      [6, 30, 54, 78, 102],
      [6, 28, 54, 80, 106],
      [6, 32, 58, 84, 110],
      [6, 30, 58, 86, 114],
      [6, 34, 62, 90, 118],
      [6, 26, 50, 74, 98, 122],
      [6, 30, 54, 78, 102, 126],
      [6, 26, 52, 78, 104, 130],
      [6, 30, 56, 82, 108, 134],
      [6, 34, 60, 86, 112, 138],
      [6, 30, 58, 86, 114, 142],
      [6, 34, 62, 90, 118, 146],
      [6, 30, 54, 78, 102, 126, 150],
      [6, 24, 50, 76, 102, 128, 154],
      [6, 28, 54, 80, 106, 132, 158],
      [6, 32, 58, 84, 110, 136, 162],
      [6, 26, 54, 82, 110, 138, 166],
      [6, 30, 58, 86, 114, 142, 170]
    ],
    G15: 1335,
    G18: 7973,
    G15_MASK: 21522,
    getBCHTypeInfo: function(a) {
      for (var b = a << 10; QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(
          QRUtil.G15) >= 0;) b ^= QRUtil.G15 << QRUtil.getBCHDigit(b) -
        QRUtil.getBCHDigit(QRUtil.G15);
      return (a << 10 | b) ^ QRUtil.G15_MASK
    },
    getBCHTypeNumber: function(a) {
      for (var b = a << 12; QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(
          QRUtil.G18) >= 0;) b ^= QRUtil.G18 << QRUtil.getBCHDigit(b) -
        QRUtil.getBCHDigit(QRUtil.G18);
      return a << 12 | b
    },
    getBCHDigit: function(a) {
      for (var b = 0; 0 != a;) b++, a >>>= 1;
      return b
    },
    getPatternPosition: function(a) {
      return QRUtil.PATTERN_POSITION_TABLE[a - 1]
    },
    getMask: function(a, b, c) {
      switch (a) {
        case QRMaskPattern.PATTERN000:
          return (b + c) % 2 == 0;
        case QRMaskPattern.PATTERN001:
          return b % 2 == 0;
        case QRMaskPattern.PATTERN010:
          return c % 3 == 0;
        case QRMaskPattern.PATTERN011:
          return (b + c) % 3 == 0;
        case QRMaskPattern.PATTERN100:
          return (Math.floor(b / 2) + Math.floor(c / 3)) % 2 == 0;
        case QRMaskPattern.PATTERN101:
          return b * c % 2 + b * c % 3 == 0;
        case QRMaskPattern.PATTERN110:
          return (b * c % 2 + b * c % 3) % 2 == 0;
        case QRMaskPattern.PATTERN111:
          return (b * c % 3 + (b + c) % 2) % 2 == 0;
        default:
          throw new Error("bad maskPattern:" + a)
      }
    },
    getErrorCorrectPolynomial: function(a) {
      for (var b = new QRPolynomial([1], 0), c = 0; a > c; c++) b = b.multiply(
        new QRPolynomial([1, QRMath.gexp(c)], 0));
      return b
    },
    getLengthInBits: function(a, b) {
      if (b >= 1 && 10 > b) switch (a) {
        case QRMode.MODE_NUMBER:
          return 10;
        case QRMode.MODE_ALPHA_NUM:
          return 9;
        case QRMode.MODE_8BIT_BYTE:
          return 8;
        case QRMode.MODE_KANJI:
          return 8;
        default:
          throw new Error("mode:" + a)
      } else if (27 > b) switch (a) {
        case QRMode.MODE_NUMBER:
          return 12;
        case QRMode.MODE_ALPHA_NUM:
          return 11;
        case QRMode.MODE_8BIT_BYTE:
          return 16;
        case QRMode.MODE_KANJI:
          return 10;
        default:
          throw new Error("mode:" + a)
      } else {
        if (!(41 > b)) throw new Error("type:" + b);
        switch (a) {
          case QRMode.MODE_NUMBER:
            return 14;
          case QRMode.MODE_ALPHA_NUM:
            return 13;
          case QRMode.MODE_8BIT_BYTE:
            return 16;
          case QRMode.MODE_KANJI:
            return 12;
          default:
            throw new Error("mode:" + a)
        }
      }
    },
    getLostPoint: function(a) {
      for (var b = a.getModuleCount(), c = 0, d = 0; b > d; d++)
        for (var e = 0; b > e; e++) {
          for (var f = 0, g = a.isDark(d, e), h = -1; 1 >= h; h++)
            if (!(0 > d + h || d + h >= b))
              for (var i = -1; 1 >= i; i++) 0 > e + i || e + i >= b || (0 !=
                h || 0 != i) && g == a.isDark(d + h, e + i) && f++;
          f > 5 && (c += 3 + f - 5)
        }
      for (var d = 0; b - 1 > d; d++)
        for (var e = 0; b - 1 > e; e++) {
          var j = 0;
          a.isDark(d, e) && j++, a.isDark(d + 1, e) && j++, a.isDark(d, e +
              1) && j++, a.isDark(d + 1, e + 1) && j++, (0 == j || 4 == j) &&
            (c += 3)
        }
      for (var d = 0; b > d; d++)
        for (var e = 0; b - 6 > e; e++) a.isDark(d, e) && !a.isDark(d, e +
          1) && a.isDark(d, e + 2) && a.isDark(d, e + 3) && a.isDark(d, e +
          4) && !a.isDark(d, e + 5) && a.isDark(d, e + 6) && (c += 40);
      for (var e = 0; b > e; e++)
        for (var d = 0; b - 6 > d; d++) a.isDark(d, e) && !a.isDark(d + 1,
          e) && a.isDark(d + 2, e) && a.isDark(d + 3, e) && a.isDark(d +
          4, e) && !a.isDark(d + 5, e) && a.isDark(d + 6, e) && (c += 40);
      for (var k = 0, e = 0; b > e; e++)
        for (var d = 0; b > d; d++) a.isDark(d, e) && k++;
      var l = Math.abs(100 * k / b / b - 50) / 5;
      return c += 10 * l
    }
  }, QRMath = {
    glog: function(a) {
      if (1 > a) throw new Error("glog(" + a + ")");
      return QRMath.LOG_TABLE[a]
    },
    gexp: function(a) {
      for (; 0 > a;) a += 255;
      for (; a >= 256;) a -= 255;
      return QRMath.EXP_TABLE[a]
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256)
  }, i = 0; 8 > i; i++) QRMath.EXP_TABLE[i] = 1 << i;
for (var i = 8; 256 > i; i++) QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^
  QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
for (var i = 0; 255 > i; i++) QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
QRPolynomial.prototype = {
    get: function(a) {
      return this.num[a]
    },
    getLength: function() {
      return this.num.length
    },
    multiply: function(a) {
      for (var b = new Array(this.getLength() + a.getLength() - 1), c = 0; c <
        this.getLength(); c++)
        for (var d = 0; d < a.getLength(); d++) b[c + d] ^= QRMath.gexp(
          QRMath.glog(this.get(c)) + QRMath.glog(a.get(d)));
      return new QRPolynomial(b, 0)
    },
    mod: function(a) {
      if (this.getLength() - a.getLength() < 0) return this;
      for (var b = QRMath.glog(this.get(0)) - QRMath.glog(a.get(0)), c = new Array(
          this.getLength()), d = 0; d < this.getLength(); d++) c[d] = this.get(
        d);
      for (var d = 0; d < a.getLength(); d++) c[d] ^= QRMath.gexp(QRMath.glog(
        a.get(d)) + b);
      return new QRPolynomial(c, 0).mod(a)
    }
  }, QRRSBlock.RS_BLOCK_TABLE = [
    [1, 26, 19],
    [1, 26, 16],
    [1, 26, 13],
    [1, 26, 9],
    [1, 44, 34],
    [1, 44, 28],
    [1, 44, 22],
    [1, 44, 16],
    [1, 70, 55],
    [1, 70, 44],
    [2, 35, 17],
    [2, 35, 13],
    [1, 100, 80],
    [2, 50, 32],
    [2, 50, 24],
    [4, 25, 9],
    [1, 134, 108],
    [2, 67, 43],
    [2, 33, 15, 2, 34, 16],
    [2, 33, 11, 2, 34, 12],
    [2, 86, 68],
    [4, 43, 27],
    [4, 43, 19],
    [4, 43, 15],
    [2, 98, 78],
    [4, 49, 31],
    [2, 32, 14, 4, 33, 15],
    [4, 39, 13, 1, 40, 14],
    [2, 121, 97],
    [2, 60, 38, 2, 61, 39],
    [4, 40, 18, 2, 41, 19],
    [4, 40, 14, 2, 41, 15],
    [2, 146, 116],
    [3, 58, 36, 2, 59, 37],
    [4, 36, 16, 4, 37, 17],
    [4, 36, 12, 4, 37, 13],
    [2, 86, 68, 2, 87, 69],
    [4, 69, 43, 1, 70, 44],
    [6, 43, 19, 2, 44, 20],
    [6, 43, 15, 2, 44, 16],
    [4, 101, 81],
    [1, 80, 50, 4, 81, 51],
    [4, 50, 22, 4, 51, 23],
    [3, 36, 12, 8, 37, 13],
    [2, 116, 92, 2, 117, 93],
    [6, 58, 36, 2, 59, 37],
    [4, 46, 20, 6, 47, 21],
    [7, 42, 14, 4, 43, 15],
    [4, 133, 107],
    [8, 59, 37, 1, 60, 38],
    [8, 44, 20, 4, 45, 21],
    [12, 33, 11, 4, 34, 12],
    [3, 145, 115, 1, 146, 116],
    [4, 64, 40, 5, 65, 41],
    [11, 36, 16, 5, 37, 17],
    [11, 36, 12, 5, 37, 13],
    [5, 109, 87, 1, 110, 88],
    [5, 65, 41, 5, 66, 42],
    [5, 54, 24, 7, 55, 25],
    [11, 36, 12],
    [5, 122, 98, 1, 123, 99],
    [7, 73, 45, 3, 74, 46],
    [15, 43, 19, 2, 44, 20],
    [3, 45, 15, 13, 46, 16],
    [1, 135, 107, 5, 136, 108],
    [10, 74, 46, 1, 75, 47],
    [1, 50, 22, 15, 51, 23],
    [2, 42, 14, 17, 43, 15],
    [5, 150, 120, 1, 151, 121],
    [9, 69, 43, 4, 70, 44],
    [17, 50, 22, 1, 51, 23],
    [2, 42, 14, 19, 43, 15],
    [3, 141, 113, 4, 142, 114],
    [3, 70, 44, 11, 71, 45],
    [17, 47, 21, 4, 48, 22],
    [9, 39, 13, 16, 40, 14],
    [3, 135, 107, 5, 136, 108],
    [3, 67, 41, 13, 68, 42],
    [15, 54, 24, 5, 55, 25],
    [15, 43, 15, 10, 44, 16],
    [4, 144, 116, 4, 145, 117],
    [17, 68, 42],
    [17, 50, 22, 6, 51, 23],
    [19, 46, 16, 6, 47, 17],
    [2, 139, 111, 7, 140, 112],
    [17, 74, 46],
    [7, 54, 24, 16, 55, 25],
    [34, 37, 13],
    [4, 151, 121, 5, 152, 122],
    [4, 75, 47, 14, 76, 48],
    [11, 54, 24, 14, 55, 25],
    [16, 45, 15, 14, 46, 16],
    [6, 147, 117, 4, 148, 118],
    [6, 73, 45, 14, 74, 46],
    [11, 54, 24, 16, 55, 25],
    [30, 46, 16, 2, 47, 17],
    [8, 132, 106, 4, 133, 107],
    [8, 75, 47, 13, 76, 48],
    [7, 54, 24, 22, 55, 25],
    [22, 45, 15, 13, 46, 16],
    [10, 142, 114, 2, 143, 115],
    [19, 74, 46, 4, 75, 47],
    [28, 50, 22, 6, 51, 23],
    [33, 46, 16, 4, 47, 17],
    [8, 152, 122, 4, 153, 123],
    [22, 73, 45, 3, 74, 46],
    [8, 53, 23, 26, 54, 24],
    [12, 45, 15, 28, 46, 16],
    [3, 147, 117, 10, 148, 118],
    [3, 73, 45, 23, 74, 46],
    [4, 54, 24, 31, 55, 25],
    [11, 45, 15, 31, 46, 16],
    [7, 146, 116, 7, 147, 117],
    [21, 73, 45, 7, 74, 46],
    [1, 53, 23, 37, 54, 24],
    [19, 45, 15, 26, 46, 16],
    [5, 145, 115, 10, 146, 116],
    [19, 75, 47, 10, 76, 48],
    [15, 54, 24, 25, 55, 25],
    [23, 45, 15, 25, 46, 16],
    [13, 145, 115, 3, 146, 116],
    [2, 74, 46, 29, 75, 47],
    [42, 54, 24, 1, 55, 25],
    [23, 45, 15, 28, 46, 16],
    [17, 145, 115],
    [10, 74, 46, 23, 75, 47],
    [10, 54, 24, 35, 55, 25],
    [19, 45, 15, 35, 46, 16],
    [17, 145, 115, 1, 146, 116],
    [14, 74, 46, 21, 75, 47],
    [29, 54, 24, 19, 55, 25],
    [11, 45, 15, 46, 46, 16],
    [13, 145, 115, 6, 146, 116],
    [14, 74, 46, 23, 75, 47],
    [44, 54, 24, 7, 55, 25],
    [59, 46, 16, 1, 47, 17],
    [12, 151, 121, 7, 152, 122],
    [12, 75, 47, 26, 76, 48],
    [39, 54, 24, 14, 55, 25],
    [22, 45, 15, 41, 46, 16],
    [6, 151, 121, 14, 152, 122],
    [6, 75, 47, 34, 76, 48],
    [46, 54, 24, 10, 55, 25],
    [2, 45, 15, 64, 46, 16],
    [17, 152, 122, 4, 153, 123],
    [29, 74, 46, 14, 75, 47],
    [49, 54, 24, 10, 55, 25],
    [24, 45, 15, 46, 46, 16],
    [4, 152, 122, 18, 153, 123],
    [13, 74, 46, 32, 75, 47],
    [48, 54, 24, 14, 55, 25],
    [42, 45, 15, 32, 46, 16],
    [20, 147, 117, 4, 148, 118],
    [40, 75, 47, 7, 76, 48],
    [43, 54, 24, 22, 55, 25],
    [10, 45, 15, 67, 46, 16],
    [19, 148, 118, 6, 149, 119],
    [18, 75, 47, 31, 76, 48],
    [34, 54, 24, 34, 55, 25],
    [20, 45, 15, 61, 46, 16]
  ], QRRSBlock.getRSBlocks = function(a, b) {
    var c = QRRSBlock.getRsBlockTable(a, b);
    if (c == undefined) throw new Error("bad rs block @ typeNumber:" + a +
      "/errorCorrectLevel:" + b);
    for (var d = c.length / 3, e = new Array, f = 0; d > f; f++)
      for (var g = c[3 * f + 0], h = c[3 * f + 1], i = c[3 * f + 2], j = 0; g >
        j; j++) e.push(new QRRSBlock(h, i));
    return e
  }, QRRSBlock.getRsBlockTable = function(a, b) {
    switch (b) {
      case QRErrorCorrectLevel.L:
        return QRRSBlock.RS_BLOCK_TABLE[4 * (a - 1) + 0];
      case QRErrorCorrectLevel.M:
        return QRRSBlock.RS_BLOCK_TABLE[4 * (a - 1) + 1];
      case QRErrorCorrectLevel.Q:
        return QRRSBlock.RS_BLOCK_TABLE[4 * (a - 1) + 2];
      case QRErrorCorrectLevel.H:
        return QRRSBlock.RS_BLOCK_TABLE[4 * (a - 1) + 3];
      default:
        return undefined
    }
  }, QRBitBuffer.prototype = {
    get: function(a) {
      var b = Math.floor(a / 8);
      return 1 == (this.buffer[b] >>> 7 - a % 8 & 1)
    },
    put: function(a, b) {
      for (var c = 0; b > c; c++) this.putBit(1 == (a >>> b - c - 1 & 1))
    },
    getLengthInBits: function() {
      return this.length
    },
    putBit: function(a) {
      var b = Math.floor(this.length / 8);
      this.buffer.length <= b && this.buffer.push(0), a && (this.buffer[b] |=
        128 >>> this.length % 8), this.length++
    }
  },
  function() {
    function b(b, c, f, g, h) {
      function i() {
        timeout = setTimeout(function() {
          nums >= 300 * f && ($(c).fadeOut(500, function() {
            setTimeout(function() {
                $(c).removeClass("lock").addClass("unlock")
              }, 500), $("#audio_btn").css("opacity", 1), 1 === g &&
              eqShow.playVideo(d)
          }), nums = 0)
        }, e)
      }
      var j = "ontouchstart" in window ? !0 : !1,
        k = j ? "touchstart" : "mousedown",
        l = j ? "touchmove" : "mousemove",
        m = j ? "touchend" : "mouseup";
      b.lineCap = "round", b.lineJoin = "round", b.lineWidth = 2 * a, b.globalCompositeOperation =
        "destination-out";
      new RegExp("assets");
      c.addEventListener(k, function(a) {
        function d(a) {
          a.stopPropagation(), i(), nums++, a.preventDefault(), x2 = j ? a.targetTouches[
            0].pageX : a.pageX - $("#can" + g).offset().left, y2 = j ? a.targetTouches[
            0].pageY : a.pageY - $("#can" + g).offset().top, b.moveTo(x1,
            y1), b.lineTo(x2, y2), b.stroke(), x1 = x2, y1 = y2
        }
        a.stopPropagation(), $("#tip" + g).remove(), a.preventDefault(), x1 =
          j ? a.targetTouches[0].pageX : a.pageX - $("#can" + g).offset().left,
          y1 = j ? a.targetTouches[0].pageY : a.pageY - $("#can" + g).offset()
          .top, startX = x1, startY = y1, c.addEventListener(l, d), c.addEventListener(
            m,
            function(a) {
              a.stopPropagation(), c.removeEventListener(l, d)
            })
      })
    }
    var c, d, e = 200;
    window.addScratchEffect = function(e, f, g) {
      c = f, d = e, a = 20, nums = 0;
      var h, i = $(".m-img").width(),
        j = $(".m-img").height(),
        k = document.createElement("canvas");
      $(k).prependTo("#page" + g).attr("class",
        "cas scratch-cas page_effect lock").attr("id", "can" + g).attr(
        "style", "z-index: 1000");
      var l = k.getContext("2d");
      k.width = i, k.height = j;
      var m = new Image;
      if (f[g - 1].properties.image) {
        if (num = g, f[g - 1].properties.tip) {
          var n = document.createElement("div");
          $(n).attr("id", "tip" + g).attr("class", "tip").prependTo("#page" +
            g), $(n).html(f[g - 1].properties.tip)
        }
        m.src = f[g - 1].properties.image.path, h = f[g - 1].properties.percentage
          .value
      } else if (f[g - 1].properties.scratch) {
        if (num = g, f[g - 1].properties.scratch.tip) {
          var n = document.createElement("div");
          $(n).attr("id", "tip" + g).attr("class", "tip").prependTo("#page" +
            g), $(n).html(f[g - 1].properties.scratch.tip)
        }
        m.src = f[g - 1].properties.scratch.image.path, h = f[g - 1].properties
          .scratch.percentage.value || f[g - 1].properties.scratch.percentage
      }!
      function(a, d, e, g, h) {
        a.onload = function() {
          f[g - 1].properties.image || !f[g - 1].properties.scratch.hasOwnProperty(
              "opacity") ? d.globalAlpha = .8 : d.globalAlpha = 1 -
            parseFloat(f[g - 1].properties.scratch.opacity).toFixed(2), d.drawImage(
              this, 0, 0, e.width, e.height), renderPage(eqShow, g, c);
          for (var i = 0; i < c[g - 1].elements.length; i++) {
            var j = eqShow.selectElement(c[g - 1].elements[i].id);
            eqxCommon.bindTrigger(j, c[g - 1].elements[i])
          }
          b(d, e, h, g, a)
        }
      }(m, l, k, g, h)
    }
  }(),
  function(a) {
    a.fn.slides = function(b) {
      return b = a.extend({}, a.fn.slides.option, b), this.each(function() {
        function c() {
          clearInterval(j.data("interval"))
        }

        function d() {
          b.pause ? (clearTimeout(j.data("pause")), clearInterval(j.data(
            "interval")), pauseTimeout = setTimeout(function() {
            clearTimeout(j.data("pause")), playInterval =
              setInterval(function() {
                e("next", p)
              }, b.play), j.data("interval", playInterval)
          }, b.pause), j.data("pause", pauseTimeout)) : c()
        }

        function e(c, d, e) {
          if (!g && f) {
            switch (g = !0, c) {
              case "next":
                s = u, r = u + 1, r = l === r ? 0 : r, i = 2 * m, c = 2 *
                  -m, u = r;
                break;
              case "prev":
                s = u, r = u - 1, r = -1 === r ? l - 1 : r, i = 0, c = 0,
                  u = r;
                break;
              case "pagination":
                r = parseInt(e, 10), s = a("." + b.paginationClass +
                  " li.current a", j).attr("rel"), r > s ? (i = 2 * m,
                  c = 2 * -m) : (i = 0, c = 0), u = r
            }
            "fade" === d ? (b.animationStart(), b.crossfade ? k.children(
              ":eq(" + r + ")", j).css({
              zIndex: 10
            }).fadeIn(b.fadeSpeed, function() {
              k.children(":eq(" + s + ")", j).css({
                display: "none",
                zIndex: 0
              }), a(this).css({
                zIndex: 0
              }), b.animationComplete(r + 1), g = !1
            }) : (b.animationStart(), k.children(":eq(" + s + ")", j)
              .fadeOut(b.fadeSpeed, function() {
                b.autoHeight ? k.animate({
                  height: k.children(":eq(" + r + ")", j).outerHeight()
                }, b.autoHeightSpeed, function() {
                  k.children(":eq(" + r + ")", j).fadeIn(b.fadeSpeed)
                }) : k.children(":eq(" + r + ")", j).fadeIn(b.fadeSpeed,
                  function() {
                    a.browser.msie && a(this).get(0).style.removeAttribute(
                      "filter")
                  }), b.animationComplete(r + 1), g = !1
              }))) : (k.children(":eq(" + r + ")").css({
              left: i,
              display: "block"
            }), b.autoHeight ? (b.animationStart(), k.animate({
              left: c,
              height: k.children(":eq(" + r + ")").outerHeight()
            }, b.slideSpeed, function() {
              k.css({
                left: -m
              }), k.children(":eq(" + r + ")").css({
                left: m,
                zIndex: 5
              }), k.children(":eq(" + s + ")").css({
                left: m,
                display: "none",
                zIndex: 0
              }), b.animationComplete(r + 1), g = !1
            })) : (b.animationStart(), k.animate({
              left: c
            }, b.slideSpeed, function() {
              k.css({
                left: -m
              }), k.children(":eq(" + r + ")").css({
                left: m,
                zIndex: 5
              }), k.children(":eq(" + s + ")").css({
                left: m,
                display: "none",
                zIndex: 0
              }), b.animationComplete(r + 1), g = !1
            }))), b.pagination && (a("." + b.paginationClass +
              " li.current", j).removeClass("current"), a("." + b.paginationClass +
              " li a:eq(" + r + ")", j).parent().addClass("current"))
          }
        }
        a("." + b.container, a(this)).children().wrapAll(
          '<div class="slides_control"/>');
        var f, g, h, i, j = a(this),
          k = a(".slides_control", j),
          l = k.children().size(),
          m = k.children().outerWidth(),
          n = k.children().outerHeight(),
          o = b.start - 1,
          p = b.effect.indexOf(",") < 0 ? b.effect : b.effect.replace(" ",
            "").split(",")[0],
          q = b.effect.indexOf(",") < 0 ? p : b.effect.replace(" ", "").split(
            ",")[1],
          r = 0,
          s = 0,
          t = 0,
          u = 0;
        if (!(2 > l)) {
          if (0 > o && (o = 0), o > l && (o = l - 1), b.start && (u = o),
            b.randomize && k.randomize(), a("." + b.container, j).css({
              overflow: "hidden",
              position: "relative"
            }), k.css({
              position: "relative",
              width: 3 * m,
              height: n,
              left: -m
            }), k.children().css({
              position: "absolute",
              top: 0,
              left: m,
              zIndex: 0,
              display: "none"
            }), b.autoHeight && k.animate({
              height: k.children(":eq(" + o + ")").outerHeight()
            }, b.autoHeightSpeed), b.preload && "IMG" == k.children()[0].tagName
          ) {
            j.css({
              background: "url(" + b.preloadImage +
                ") no-repeat 50% 50%"
            });
            var v = a("img:eq(" + o + ")", j).attr("src") + "?" + (new Date)
              .getTime();
            a("img:eq(" + o + ")", j).attr("src", v).load(function() {
              a(this).fadeIn(b.fadeSpeed, function() {
                a(this).css({
                  zIndex: 5
                }), j.css({
                  background: ""
                }), f = !0
              })
            })
          } else k.children(":eq(" + o + ")").fadeIn(b.fadeSpeed,
            function() {
              f = !0
            });
          b.bigTarget && (k.children().css({
              cursor: "pointer"
            }), k.children().click(function() {
              return e("next", p), !1
            })), b.hoverPause && b.play && (k.children().bind("mouseover",
              function() {
                c()
              }), k.children().bind("mouseleave", function() {
              d()
            })), b.generateNextPrev && (a("." + b.container, j).after(
              '<a href="#" class="' + b.prev + '">Prev</a>'), a("." + b
              .prev, j).after('<a href="#" class="' + b.next +
              '">Next</a>')), a("." + b.next, j).click(function(a) {
              a.preventDefault(), b.play && d(), e("next", p)
            }), a("." + b.prev, j).click(function(a) {
              a.preventDefault(), b.play && d(), e("prev", p)
            }), b.generatePagination ? (j.append("<ul class=" + b.paginationClass +
              "></ul>"), k.children().each(function() {
              a("." + b.paginationClass, j).append("<li><a rel=" + t +
                ' href="#">' + (t + 1) + "</a></li>"), t++
            })) : a("." + b.paginationClass + " li a", j).each(function() {
              a(this).attr("rel", t), t++
            }), a("." + b.paginationClass + " li a:eq(" + o + ")", j).parent()
            .addClass("current"), a("." + b.paginationClass + " li a", j)
            .click(function() {
              return b.play && d(), h = a(this).attr("rel"), u != h &&
                e("pagination", q, h), !1
            }), b.play && (playInterval = setInterval(function() {
              e("next", p)
            }, b.play), j.data("interval", playInterval))
        }
      })
    }, a.fn.slides.option = {
      preload: !1,
      preloadImage: "/img/loading.gif",
      container: "slides_container",
      generateNextPrev: !1,
      next: "next",
      prev: "prev",
      pagination: !0,
      generatePagination: !0,
      paginationClass: "pagination",
      fadeSpeed: 350,
      slideSpeed: 350,
      start: 1,
      effect: "slide",
      crossfade: !1,
      randomize: !1,
      play: 0,
      pause: 0,
      hoverPause: !1,
      autoHeight: !1,
      autoHeightSpeed: 350,
      bigTarget: !1,
      animationStart: function() {},
      animationComplete: function() {}
    }, a.fn.randomize = function(b) {
      function c() {
        return Math.round(Math.random()) - .5
      }
      return a(this).each(function() {
        var d = a(this),
          e = d.children(),
          f = e.length;
        if (f > 1) {
          e.hide();
          var g = [];
          for (i = 0; f > i; i++) g[g.length] = i;
          g = g.sort(c), a.each(g, function(a, c) {
            var f = e.eq(c),
              g = f.clone(!0);
            g.show().appendTo(d), b !== undefined && b(f, g), f.remove()
          })
        }
      })
    }
  }(jQuery),
  function($) {
    window.snowFly = {
      doEffect: function(audioObj, pageNum, pages, callback) {
        function startInterVal() {
          if (effObj.pause) return void clearInterval(effObj.interVal);
          for (var i = 0; i < particles.length; i++) {
            var particle = particles[i];
            with(particle.updatePhysics(), particle.position) y < -1e3 && (
                y += 2e3), x > 1e3 ? x -= 2e3 : x < -1e3 && (x += 2e3), z >
              1e3 ? z -= 2e3 : z < -1e3 && (z += 2e3)
          }
          camera.position.x += .05 * (mouseX - camera.position.x), camera.position
            .y += .05 * (-mouseY - camera.position.y), camera.lookAt(scene.position),
            renderer.render(scene, camera)
        }
        callback(eqShow, pageNum, pages);
        for (var i = 0; i < pages[pageNum - 1].elements.length; i++) {
          var $elem = eqShow.selectElement(pages[pageNum - 1].elements[i].id);
          eqxCommon.bindTrigger($elem, pages[pageNum - 1].elements[i])
        }
        1 == pageNum && eqShow.playVideo(audioObj);
        var container, particle, camera, scene, renderer, SCREEN_WIDTH =
          window.innerWidth,
          SCREEN_HEIGHT = window.innerHeight,
          mouseX = 0,
          mouseY = 0,
          effObj = (window.innerWidth / 2, window.innerHeight / 2, {
            pause: !1,
            startPlay: function() {
              this.pause = !1, effObj.interVal = setInterval(
                startInterVal, 20)
            }
          }),
          particles = [],
          particleImage = new Image;
        particleImage.src = HB_STATIC + "view/images/ParticleSmoke.png";
        var $parent = $("#page" + pageNum).parent(".main-page");
        container = $parent.get(0), camera = new THREE.PerspectiveCamera(75,
            SCREEN_WIDTH / SCREEN_HEIGHT, 1, 1e4), camera.position.z = 1e3,
          scene = new THREE.Scene, scene.add(camera), renderer = new THREE.CanvasRenderer,
          renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT), renderer.num =
          pageNum;
        for (var material = new THREE.ParticleBasicMaterial({
            map: new THREE.Texture(particleImage)
          }), i = 0; 500 > i; i++) particle = new Particle3D(material),
          particle.position.x = 2e3 * Math.random() - 1e3, particle.position
          .y = 2e3 * Math.random() - 1e3, particle.position.z = 2e3 * Math.random() -
          1e3, particle.scale.x = particle.scale.y = 1, scene.add(particle),
          particles.push(particle);
        var canvas = renderer.domElement;
        return $(canvas).attr("id", "snowcas" + pageNum).appendTo($parent),
          $("#snowcas" + pageNum).css({
            position: "absolute",
            pointerEvents: "none",
            top: 0,
            width: "100%",
            height: "100%"
          }), 1 == pageNum && (effObj.interVal = setInterval(startInterVal,
            1e3 / 60)), effObj
      }
    }
  }(jQuery),
  function() {
    window.eqxiuSvg = {
      NAMESPACE: "http://www.w3.org/2000/svg",
      SYMBOLS: {},
      boundingBox: function(a) {
        var b, c = a.parentNode,
          d = document.createElementNS(eqxiuSvg.NAMESPACE, "svg");
        return d.setAttribute("width", "0"), d.setAttribute("height", "0"),
          d.setAttribute("style",
            "visibility: hidden; position: absolute; left: 0; top: 0;"), d.appendChild(
            a), document.body.appendChild(d), b = a.getBBox(), c ? c.appendChild(
            a) : d.removeChild(a), document.body.removeChild(d), b
      },
      pointsToPolygon: function(a) {
        for (var b = []; a.length >= 2;) b.push(a.shift() + "," + a.shift());
        return b.join(" ")
      },
      symbol: function(a, b, c) {
        var d = c ? c : "#555",
          e = eqxiuSvg.SYMBOLS[a],
          f = '<g fill="' + d + '" id="path_' + b + '">' + e + "</g>";
        return f
      },
      ShapeFromType: function(a, b, c, d, e) {
        return b || (b = 64), c || (c = 64), /symbols\-/.test(a) ? eqxiuSvg
          .symbol(a.replace(/^symbols\-/, ""), d, e) : "rect" == a ?
          eqxiuSvg.rect(b, c) : "circle" == a ? eqxiuSvg.ellipse(b, c) :
          "diamond" == a ? eqxiuSvg.polygon(b, c, 4) : "octagon" == a ?
          eqxiuSvg.polygon(b, c, 8) : "triangle-up" == a ? eqxiuSvg.triangleUp(
            b, c) : "triangle-down" == a ? eqxiuSvg.triangleDown(b, c) :
          "triangle-left" == a ? eqxiuSvg.triangleLeft(b, c) :
          "triangle-right" == a ? eqxiuSvg.triangleRight(b, c) : "arrow-up" ==
          a ? eqxiuSvg.arrowUp(b, c) : "arrow-down" == a ? eqxiuSvg.arrowDown(
            b, c) : "arrow-left" == a ? eqxiuSvg.arrowLeft(b, c) :
          "arrow-right" == a ? eqxiuSvg.arrowRight(b, c) : void 0
      },
      rect: function(a, b) {
        var c = document.createElementNS(eqxiuSvg.NAMESPACE, "rect");
        return c.setAttribute("width", a), c.setAttribute("height", b), c
      },
      ellipse: function(a, b) {
        var c = document.createElementNS(eqxiuSvg.NAMESPACE, "ellipse");
        return c.setAttribute("rx", a / 2), c.setAttribute("ry", b / 2), c.setAttribute(
          "cx", a / 2), c.setAttribute("cy", b / 2), c
      },
      triangleUp: function(a, b) {
        var c = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
        return c.setAttribute("points", eqxiuSvg.pointsToPolygon([a / 2, 0,
          a, b, 0, b
        ])), c
      },
      triangleDown: function(a, b) {
        var c = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
        return c.setAttribute("points", eqxiuSvg.pointsToPolygon([0, 0, a,
          0, a / 2, b
        ])), c
      },
      triangleLeft: function(a, b) {
        var c = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
        return c.setAttribute("points", eqxiuSvg.pointsToPolygon([0, b / 2,
          a, 0, a, b
        ])), c
      },
      triangleRight: function(a, b) {
        var c = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
        return c.setAttribute("points", eqxiuSvg.pointsToPolygon([a, b / 2,
          0, b, 0, 0
        ])), c
      },
      arrowUp: function(a, b) {
        var c = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
        return c.setAttribute("points", eqxiuSvg.pointsToPolygon([.5 * a, 0,
          a, .5 * b, .7 * a, .5 * b, .7 * a, b, .3 * a, b, .3 * a, .5 *
          b, 0, .5 * b, .5 * a, 0
        ])), c
      },
      arrowDown: function(a, b) {
        var c = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
        return c.setAttribute("points", eqxiuSvg.pointsToPolygon([.5 * a, b,
          a, .5 * b, .7 * a, .5 * b, .7 * a, 0, .3 * a, 0, .3 * a, .5 *
          b, 0, .5 * b, .5 * a, b
        ])), c
      },
      arrowLeft: function(a, b) {
        var c = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
        return c.setAttribute("points", eqxiuSvg.pointsToPolygon([a, .3 * b,
          .5 * a, .3 * b, .5 * a, 0, 0, .5 * b, .5 * a, b, .5 * a, .7 *
          b, a, .7 * b, a, .3 * b
        ])), c
      },
      arrowRight: function(a, b) {
        var c = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
        return c.setAttribute("points", eqxiuSvg.pointsToPolygon([0, .3 * b,
          .5 * a, .3 * b, .5 * a, 0, a, .5 * b, .5 * a, b, .5 * a, .7 *
          b, 0, .7 * b
        ])), c
      },
      polygon: function(a, b, c) {
        var d = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon"),
          e = [];
        if (3 === c) e = [a / 2, 0, a, b, 0, b];
        else if (c > 3)
          for (var f = a / 2, g = b / 2, h = 0; c > h; h++) {
            var i = f + f * Math.cos(2 * Math.PI * h / c),
              j = g + g * Math.sin(2 * Math.PI * h / c);
            i = Math.round(10 * i) / 10, j = Math.round(10 * j) / 10, e.push(
              i), e.push(j)
          }
        return d.setAttribute("points", eqxiuSvg.pointsToPolygon(e)), d
      }
    }
  }(),
  function() {
    window.eqxiuSvg.SYMBOLS = {
      bolt: '<path d="M32 0l-24 16 6 4-14 12 24-12-6-4z"></path>',
      camera: '<path d="M16 20c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4-2.209 0-4-1.791-4-4zM28 8l-3.289-6.643c-0.27-0.789-1.016-1.357-1.899-1.357h-5.492c-0.893 0-1.646 0.582-1.904 1.385l-3.412 6.615h-8.004c-2.209 0-4 1.791-4 4v20h32v-20c0-2.209-1.789-4-4-4zM6 16c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM20 28c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>',
      "checkmark-circle": '<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM13.52 23.383l-7.362-7.363 2.828-2.828 4.533 4.535 9.617-9.617 2.828 2.828-12.444 12.445z"></path>',
      clock: '<path d="M16 4c6.617 0 12 5.383 12 12s-5.383 12-12 12-12-5.383-12-12 5.383-12 12-12zM16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16v0zM21.422 18.578l-3.422-3.426v-7.152h-4.023v7.992c0 0.602 0.277 1.121 0.695 1.492l3.922 3.922 2.828-2.828z"></path>',
      cloud: '<path d="M24 10c-0.379 0-0.738 0.061-1.102 0.111-1.394-2.465-3.972-4.111-6.898-4.111-2.988 0-5.566 1.666-6.941 4.1-0.352-0.047-0.704-0.1-1.059-0.1-4.41 0-8 3.588-8 8 0 4.414 3.59 8 8 8h16c4.41 0 8-3.586 8-8 0-4.412-3.59-8-8-8zM24 22h-16c-2.207 0-4-1.797-4-4 0-2.193 1.941-3.885 4.004-3.945 0.008 0.943 0.172 1.869 0.5 2.744l3.746-1.402c-0.168-0.444-0.25-0.915-0.25-1.397 0-2.205 1.793-4 4-4 1.293 0 2.465 0.641 3.199 1.639-1.929 1.461-3.199 3.756-3.199 6.361h4c0-2.205 1.793-4 4-4s4 1.795 4 4c0 2.203-1.793 4-4 4z"></path>',
      cog: '<path d="M32 17.969v-4l-4.781-1.992c-0.133-0.375-0.273-0.738-0.445-1.094l1.93-4.805-2.829-2.828-4.762 1.961c-0.363-0.176-0.734-0.324-1.117-0.461l-2.027-4.75h-4l-1.977 4.734c-0.398 0.141-0.781 0.289-1.16 0.469l-4.754-1.91-2.828 2.828 1.938 4.711c-0.188 0.387-0.34 0.781-0.485 1.188l-4.703 2.011v4l4.707 1.961c0.145 0.406 0.301 0.801 0.488 1.188l-1.902 4.742 2.828 2.828 4.723-1.945c0.379 0.18 0.766 0.324 1.164 0.461l2.023 4.734h4l1.98-4.758c0.379-0.141 0.754-0.289 1.113-0.461l4.797 1.922 2.828-2.828-1.969-4.773c0.168-0.359 0.305-0.723 0.438-1.094l4.782-2.039zM15.969 22c-3.312 0-6-2.688-6-6s2.688-6 6-6 6 2.688 6 6-2.688 6-6 6z"></path>',
      denied: '<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM16 4c2.59 0 4.973 0.844 6.934 2.242l-16.696 16.688c-1.398-1.961-2.238-4.344-2.238-6.93 0-6.617 5.383-12 12-12zM16 28c-2.59 0-4.973-0.844-6.934-2.242l16.696-16.688c1.398 1.961 2.238 4.344 2.238 6.93 0 6.617-5.383 12-12 12z"></path>',
      earth: '<path d="M27.314 4.686c3.022 3.022 4.686 7.040 4.686 11.314s-1.664 8.292-4.686 11.314c-3.022 3.022-7.040 4.686-11.314 4.686s-8.292-1.664-11.314-4.686c-3.022-3.022-4.686-7.040-4.686-11.314s1.664-8.292 4.686-11.314c3.022-3.022 7.040-4.686 11.314-4.686s8.292 1.664 11.314 4.686zM25.899 25.9c1.971-1.971 3.281-4.425 3.821-7.096-0.421 0.62-0.824 0.85-1.073-0.538-0.257-2.262-2.335-0.817-3.641-1.621-1.375 0.927-4.466-1.802-3.941 1.276 0.81 1.388 4.375-1.858 2.598 1.079-1.134 2.050-4.145 6.592-3.753 8.946 0.049 3.43-3.504 0.715-4.729-0.422-0.824-2.279-0.281-6.262-2.434-7.378-2.338-0.102-4.344-0.314-5.25-2.927-0.545-1.87 0.58-4.653 2.584-5.083 2.933-1.843 3.98 2.158 6.731 2.232 0.854-0.894 3.182-1.178 3.375-2.18-1.805-0.318 2.29-1.517-0.173-2.199-1.358 0.16-2.234 1.409-1.512 2.467-2.632 0.614-2.717-3.809-5.247-2.414-0.064 2.206-4.132 0.715-1.407 0.268 0.936-0.409-1.527-1.594-0.196-1.379 0.654-0.036 2.854-0.807 2.259-1.325 1.225-0.761 2.255 1.822 3.454-0.059 0.866-1.446-0.363-1.713-1.448-0.98-0.612-0.685 1.080-2.165 2.573-2.804 0.497-0.213 0.973-0.329 1.336-0.296 0.752 0.868 2.142 1.019 2.215-0.104-1.862-0.892-3.915-1.363-6.040-1.363-3.051 0-5.952 0.969-8.353 2.762 0.645 0.296 1.012 0.664 0.39 1.134-0.483 1.439-2.443 3.371-4.163 3.098-0.893 1.54-1.482 3.238-1.733 5.017 1.441 0.477 1.773 1.42 1.464 1.736-0.734 0.64-1.185 1.548-1.418 2.541 0.469 2.87 1.818 5.515 3.915 7.612 2.644 2.644 6.16 4.1 9.899 4.1s7.255-1.456 9.899-4.1z"></path>',
      eye: '<path d="M16 4c-8.836 0-16 11.844-16 11.844s7.164 12.156 16 12.156 16-12.156 16-12.156-7.164-11.844-16-11.844zM16 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM12 16c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4-2.209 0-4-1.791-4-4z"></path>',
      facebook: '<path d="M17.996 32h-5.996v-16h-4v-5.514l4-0.002-0.007-3.248c0-4.498 1.22-7.236 6.519-7.236h4.412v5.515h-2.757c-2.064 0-2.163 0.771-2.163 2.209l-0.008 2.76h4.959l-0.584 5.514-4.37 0.002-0.004 16z"></path>',
      fork: '<path d="M20 0v3.875c0 1.602-0.625 3.109-1.754 4.238l-11.316 11.254c-1.789 1.785-2.774 4.129-2.883 6.633h-4.047l6 6 6-6h-3.957c0.105-1.438 0.684-2.773 1.711-3.805l11.316-11.25c1.891-1.89 2.93-4.398 2.93-7.070v-3.875h-4zM23.953 26c-0.109-2.504-1.098-4.848-2.887-6.641l-2.23-2.215-2.836 2.821 2.242 2.23c1.031 1.027 1.609 2.367 1.715 3.805h-3.957l6 6 6-6h-4.047z"></path>',
      globe: '<path d="M15 2c-8.284 0-15 6.716-15 15s6.716 15 15 15c8.284 0 15-6.716 15-15s-6.716-15-15-15zM23.487 22c0.268-1.264 0.437-2.606 0.492-4h3.983c-0.104 1.381-0.426 2.722-0.959 4h-3.516zM6.513 12c-0.268 1.264-0.437 2.606-0.492 4h-3.983c0.104-1.381 0.426-2.722 0.959-4h3.516zM21.439 12c0.3 1.28 0.481 2.62 0.54 4h-5.979v-4h5.439zM16 10v-5.854c0.456 0.133 0.908 0.355 1.351 0.668 0.831 0.586 1.625 1.488 2.298 2.609 0.465 0.775 0.867 1.638 1.203 2.578h-4.852zM10.351 7.422c0.673-1.121 1.467-2.023 2.298-2.609 0.443-0.313 0.895-0.535 1.351-0.668v5.854h-4.852c0.336-0.94 0.738-1.803 1.203-2.578zM14 12v4h-5.979c0.059-1.38 0.24-2.72 0.54-4h5.439zM2.997 22c-0.533-1.278-0.854-2.619-0.959-4h3.983c0.055 1.394 0.224 2.736 0.492 4h-3.516zM8.021 18h5.979v4h-5.439c-0.3-1.28-0.481-2.62-0.54-4zM14 24v5.854c-0.456-0.133-0.908-0.355-1.351-0.668-0.831-0.586-1.625-1.488-2.298-2.609-0.465-0.775-0.867-1.638-1.203-2.578h4.852zM19.649 26.578c-0.673 1.121-1.467 2.023-2.298 2.609-0.443 0.312-0.895 0.535-1.351 0.668v-5.854h4.852c-0.336 0.94-0.738 1.802-1.203 2.578zM16 22v-4h5.979c-0.059 1.38-0.24 2.72-0.54 4h-5.439zM23.98 16c-0.055-1.394-0.224-2.736-0.492-4h3.516c0.533 1.278 0.855 2.619 0.959 4h-3.983zM25.958 10h-2.997c-0.582-1.836-1.387-3.447-2.354-4.732 1.329 0.636 2.533 1.488 3.585 2.54 0.671 0.671 1.261 1.404 1.766 2.192zM5.808 7.808c1.052-1.052 2.256-1.904 3.585-2.54-0.967 1.285-1.771 2.896-2.354 4.732h-2.997c0.504-0.788 1.094-1.521 1.766-2.192zM4.042 24h2.997c0.583 1.836 1.387 3.447 2.354 4.732-1.329-0.636-2.533-1.488-3.585-2.54-0.671-0.671-1.261-1.404-1.766-2.192zM24.192 26.192c-1.052 1.052-2.256 1.904-3.585 2.54 0.967-1.285 1.771-2.896 2.354-4.732h2.997c-0.504 0.788-1.094 1.521-1.766 2.192z"></path>',
      happy: '<path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM16 18.711c3.623 0 7.070-0.963 10-2.654-0.455 5.576-4.785 9.942-10 9.942-5.215 0-9.544-4.371-10-9.947 2.93 1.691 6.377 2.658 10 2.658zM8 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3-1.105 0-2-1.343-2-3zM20 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3-1.105 0-2-1.343-2-3z"></path>',
      "heart-fill": '<path d="M16 5.844c-1.613-2.266-4.129-3.844-7.113-3.844-4.903 0-8.887 3.992-8.887 8.891v0.734l16.008 18.375 15.992-18.375v-0.734c0-4.899-3.984-8.891-8.887-8.891-2.984 0-5.5 1.578-7.113 3.844z"></path>',
      "heart-stroke": '<path d="M23.113 6c2.457 0 4.492 1.82 4.836 4.188l-11.945 13.718-11.953-13.718c0.344-2.368 2.379-4.188 4.836-4.188 2.016 0 3.855 2.164 3.855 2.164l3.258 3.461 3.258-3.461c0 0 1.84-2.164 3.855-2.164zM23.113 2c-2.984 0-5.5 1.578-7.113 3.844-1.613-2.266-4.129-3.844-7.113-3.844-4.903 0-8.887 3.992-8.887 8.891v0.734l16.008 18.375 15.992-18.375v-0.734c0-4.899-3.984-8.891-8.887-8.891v0z"></path>',
      home: '<path d="M16 0l-16 16h4v16h24v-16h4l-16-16zM24 28h-6v-6h-4v6h-6v-14.344l8-5.656 8 5.656v14.344z"></path>',
      iphone: '<path d="M16 0h-8c-4.418 0-8 3.582-8 8v16c0 4.418 3.582 8 8 8h8c4.418 0 8-3.582 8-8v-16c0-4.418-3.582-8-8-8zM12 30.062c-1.139 0-2.062-0.922-2.062-2.062s0.924-2.062 2.062-2.062 2.062 0.922 2.062 2.062-0.923 2.062-2.062 2.062zM20 24h-16v-16c0-2.203 1.795-4 4-4h8c2.203 0 4 1.797 4 4v16z"></path>',
      lock: '<path d="M14 0c-5.508 0-9.996 4.484-9.996 10v2h-4.004v14c0 3.309 2.691 6 6 6h12c3.309 0 6-2.691 6-6v-16c0-5.516-4.488-10-10-10zM11.996 24c-1.101 0-1.996-0.895-1.996-2s0.895-2 1.996-2c1.105 0 2 0.895 2 2s-0.894 2-2 2zM20 12h-11.996v-2c0-3.309 2.691-6 5.996-6 3.309 0 6 2.691 6 6v2z"></path>',
      mail: '<path d="M15.996 15.457l16.004-7.539v-3.918h-32v3.906zM16.004 19.879l-16.004-7.559v15.68h32v-15.656z"></path>',
      "minus-circle": '<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM24 18h-16v-4h16v4z"></path>',
      moon: '<path d="M24.633 22.184c-8.188 0-14.82-6.637-14.82-14.82 0-2.695 0.773-5.188 2.031-7.363-6.824 1.968-11.844 8.187-11.844 15.644 0 9.031 7.32 16.355 16.352 16.355 7.457 0 13.68-5.023 15.648-11.844-2.18 1.254-4.672 2.028-7.367 2.028z"></path>',
      paperclip: '<path d="M17.293 15.292l-2.829-2.829-4 4c-1.953 1.953-1.953 5.119 0 7.071 1.953 1.953 5.118 1.953 7.071 0l10.122-9.879c3.123-3.124 3.123-8.188 0-11.313-3.125-3.124-8.19-3.124-11.313 0l-11.121 10.88c-4.296 4.295-4.296 11.26 0 15.557 4.296 4.296 11.261 4.296 15.556 0l6-6-2.829-2.829-5.999 6c-2.733 2.732-7.166 2.732-9.9 0-2.733-2.732-2.733-7.166 0-9.899l11.121-10.881c1.562-1.562 4.095-1.562 5.656 0 1.563 1.563 1.563 4.097 0 5.657l-10.121 9.879c-0.391 0.391-1.023 0.391-1.414 0s-0.391-1.023 0-1.414l4-4z"></path>',
      pin: '<path d="M17.070 2.93c-3.906-3.906-10.234-3.906-14.141 0-3.906 3.904-3.906 10.238 0 14.14 0.001 0 7.071 6.93 7.071 14.93 0-8 7.070-14.93 7.070-14.93 3.907-3.902 3.907-10.236 0-14.14zM10 14c-2.211 0-4-1.789-4-4s1.789-4 4-4 4 1.789 4 4-1.789 4-4 4z"></path>',
      "plus-circle": '<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM24 18h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z"></path>',
      rain: '<path d="M23.998 6c-0.375 0-0.733 0.061-1.103 0.111-1.389-2.465-3.969-4.111-6.895-4.111-2.987 0-5.565 1.666-6.94 4.1-0.353-0.047-0.705-0.1-1.060-0.1-4.41 0-8 3.588-8 8s3.59 8 8 8h15.998c4.414 0 8-3.588 8-8s-3.586-8-8-8zM23.998 18h-15.998c-2.207 0-4-1.795-4-4 0-2.193 1.941-3.885 4.004-3.945 0.009 0.943 0.172 1.869 0.5 2.744l3.746-1.402c-0.168-0.444-0.25-0.915-0.25-1.397 0-2.205 1.793-4 4-4 1.293 0 2.465 0.641 3.199 1.639-1.928 1.461-3.199 3.756-3.199 6.361h4c0-2.205 1.795-4 3.998-4 2.211 0 4 1.795 4 4s-1.789 4-4 4zM3.281 29.438c-0.75 0.75-1.969 0.75-2.719 0s-0.75-1.969 0-2.719 5.438-2.719 5.438-2.719-1.969 4.688-2.719 5.438zM11.285 29.438c-0.75 0.75-1.965 0.75-2.719 0-0.75-0.75-0.75-1.969 0-2.719 0.754-0.75 5.438-2.719 5.438-2.719s-1.965 4.688-2.719 5.438zM19.28 29.438c-0.75 0.75-1.969 0.75-2.719 0s-0.75-1.969 0-2.719 5.437-2.719 5.437-2.719-1.968 4.688-2.718 5.438z"></path>',
      ribbon: '<path d="M8 20c-1.41 0-2.742-0.289-4-0.736v12.736l4-4 4 4v-12.736c-1.258 0.447-2.59 0.736-4 0.736zM0 8c0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8-4.418 0-8-3.582-8-8z"></path>',
      sad: '<path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM9.997 24.398l-2.573-1.544c1.749-2.908 4.935-4.855 8.576-4.855 3.641 0 6.827 1.946 8.576 4.855l-2.573 1.544c-1.224-2.036-3.454-3.398-6.003-3.398-2.549 0-4.779 1.362-6.003 3.398z"></path>',
      smiley: '<path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM22.003 19.602l2.573 1.544c-1.749 2.908-4.935 4.855-8.576 4.855s-6.827-1.946-8.576-4.855l2.573-1.544c1.224 2.036 3.454 3.398 6.003 3.398s4.779-1.362 6.003-3.398z"></path>',
      star: '<path d="M22.137 19.625l9.863-7.625h-12l-4-12-4 12h-12l9.875 7.594-3.875 12.406 10.016-7.68 9.992 7.68z"></path>',
      sun: '<path d="M16.001 8c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 7.999-3.582 7.999-8s-3.581-8-7.999-8v0zM14 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM4 6c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM2 14c1.105 0 2 0.895 2 2 0 1.107-0.895 2-2 2s-2-0.893-2-2c0-1.105 0.895-2 2-2zM4 26c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM14 30c0-1.109 0.895-2 2-2 1.108 0 2 0.891 2 2 0 1.102-0.892 2-2 2-1.105 0-2-0.898-2-2zM24 26c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM30 18c-1.104 0-2-0.896-2-2 0-1.107 0.896-2 2-2s2 0.893 2 2c0 1.104-0.896 2-2 2zM24 6c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2z"></path>',
      "thin-arrow-down": '<path d="M4.586 19.414l10 10c0.781 0.781 2.047 0.781 2.828 0l10-10c0.781-0.781 0.781-2.047 0-2.828s-2.047-0.781-2.828 0l-6.586 6.586v-19.172c0-1.105-0.895-2-2-2s-2 0.895-2 2v19.172l-6.586-6.586c-0.391-0.39-0.902-0.586-1.414-0.586s-1.024 0.195-1.414 0.586c-0.781 0.781-0.781 2.047 0 2.828z"></path>',
      "thin-arrow-down-left": '<path d="M18 28c1.105 0 2-0.895 2-2s-0.895-2-2-2h-7.172l16.586-16.586c0.781-0.781 0.781-2.047 0-2.828-0.391-0.391-0.902-0.586-1.414-0.586s-1.024 0.195-1.414 0.586l-16.586 16.586v-7.172c0-1.105-0.895-2-2-2s-2 0.895-2 2v14h14z"></path>',
      "thin-arrow-down-right": '<path d="M28 14c0-1.105-0.895-2-2-2s-2 0.895-2 2v7.172l-16.586-16.586c-0.781-0.781-2.047-0.781-2.828 0-0.391 0.391-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414l16.586 16.586h-7.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h14v-14z"></path>',
      "thin-arrow-left": '<path d="M12.586 4.586l-10 10c-0.781 0.781-0.781 2.047 0 2.828l10 10c0.781 0.781 2.047 0.781 2.828 0s0.781-2.047 0-2.828l-6.586-6.586h19.172c1.105 0 2-0.895 2-2s-0.895-2-2-2h-19.172l6.586-6.586c0.39-0.391 0.586-0.902 0.586-1.414s-0.195-1.024-0.586-1.414c-0.781-0.781-2.047-0.781-2.828 0z"></path>',
      "thin-arrow-right": '<path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>',
      "thin-arrow-up": '<path d="M27.414 12.586l-10-10c-0.781-0.781-2.047-0.781-2.828 0l-10 10c-0.781 0.781-0.781 2.047 0 2.828s2.047 0.781 2.828 0l6.586-6.586v19.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-19.172l6.586 6.586c0.39 0.39 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586c0.781-0.781 0.781-2.047 0-2.828z"></path>',
      "thin-arrow-up-left": '<path d="M4 18c0 1.105 0.895 2 2 2s2-0.895 2-2v-7.172l16.586 16.586c0.781 0.781 2.047 0.781 2.828 0 0.391-0.391 0.586-0.902 0.586-1.414s-0.195-1.024-0.586-1.414l-16.586-16.586h7.172c1.105 0 2-0.895 2-2s-0.895-2-2-2h-14v14z"></path>',
      "thin-arrow-up-right": '<path d="M26.001 4c-0 0-0.001 0-0.001 0h-11.999c-1.105 0-2 0.895-2 2s0.895 2 2 2h7.172l-16.586 16.586c-0.781 0.781-0.781 2.047 0 2.828 0.391 0.391 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586l16.586-16.586v7.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-14h-1.999z"></path>',
      twitter: '<path d="M32 6.076c-1.177 0.522-2.443 0.875-3.771 1.034 1.355-0.813 2.396-2.099 2.887-3.632-1.269 0.752-2.674 1.299-4.169 1.593-1.198-1.276-2.904-2.073-4.792-2.073-3.626 0-6.565 2.939-6.565 6.565 0 0.515 0.058 1.016 0.17 1.496-5.456-0.274-10.294-2.888-13.532-6.86-0.565 0.97-0.889 2.097-0.889 3.301 0 2.278 1.159 4.287 2.921 5.465-1.076-0.034-2.088-0.329-2.974-0.821-0.001 0.027-0.001 0.055-0.001 0.083 0 3.181 2.263 5.834 5.266 6.437-0.551 0.15-1.131 0.23-1.73 0.23-0.423 0-0.834-0.041-1.235-0.118 0.835 2.608 3.26 4.506 6.133 4.559-2.247 1.761-5.078 2.81-8.154 2.81-0.53 0-1.052-0.031-1.566-0.092 2.905 1.863 6.356 2.95 10.064 2.95 12.076 0 18.679-10.004 18.679-18.68 0-0.285-0.006-0.568-0.019-0.849 1.283-0.926 2.396-2.082 3.276-3.398z"></path>',
      umbrella: '<path d="M16 0c-8.82 0-16 7.178-16 16h4c0-0.826 0.676-1.5 1.5-1.5 0.828 0 1.5 0.674 1.5 1.5h4c0-0.826 0.676-1.5 1.5-1.5 0.828 0 1.5 0.674 1.5 1.5v10c0 1.102-0.895 2-2 2-1.102 0-2-0.898-2-2h-4c0 3.309 2.695 6 6 6 3.312 0 6-2.691 6-6v-10c0-0.826 0.676-1.5 1.5-1.5 0.828 0 1.498 0.674 1.498 1.5h4c0-0.826 0.68-1.5 1.5-1.5 0.828 0 1.5 0.674 1.5 1.5h4c0-8.822-7.172-16-15.998-16z"></path>',
      unlock: '<path d="M14.004 0c-5.516 0-9.996 4.484-9.996 10h3.996c0-3.309 2.688-6 6-6 3.305 0 5.996 2.691 5.996 6v2h-20v14c0 3.309 2.695 6 6 6h12c3.305 0 6-2.691 6-6v-16c0-5.516-4.488-10-9.996-10zM12 24c-1.102 0-2-0.895-2-2s0.898-2 2-2c1.109 0 2 0.895 2 2s-0.891 2-2 2z"></path>',
      user: '<path d="M12 16c-6.625 0-12 5.375-12 12 0 2.211 1.789 4 4 4h16c2.211 0 4-1.789 4-4 0-6.625-5.375-12-12-12zM6 6c0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6-3.314 0-6-2.686-6-6z"></path>',
      wondering: '<path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM23.304 18.801l0.703 2.399-13.656 4-0.703-2.399zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2-1.105 0-2-0.895-2-2z"></path>',
      "x-circle": '<path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM23.914 21.086l-2.828 2.828-5.086-5.086-5.086 5.086-2.828-2.828 5.086-5.086-5.086-5.086 2.828-2.828 5.086 5.086 5.086-5.086 2.828 2.828-5.086 5.086 5.086 5.086z"></path>',
      android: '<path d="M50.143,45.057h-0.241c-2.13,0-3.857-1.735-3.857-3.875V24.713 c0-2.14,1.727-3.875,3.857-3.875h0.241c2.13,0,3.857,1.735,3.857,3.875v16.469C54,43.323,52.273,45.057,50.143,45.057z M39.777,51.112h-2.169v8.961c0,2.14-1.727,3.875-3.857,3.875h-0.241c-2.13,0-3.857-1.735-3.857-3.875v-8.961h-5.304v8.961 c0,2.14-1.727,3.875-3.857,3.875H20.25c-2.13,0-3.857-1.735-3.857-3.875v-8.961h-2.17c-2.663,0-4.821-2.169-4.821-4.844V21.565 h35.196v24.704C44.598,48.944,42.44,51.112,39.777,51.112z M18.451,5.498l-2.777-4.832c-0.1-0.174-0.041-0.396,0.132-0.496 l0.209-0.121c0.173-0.1,0.394-0.041,0.494,0.133l2.802,4.877c2.297-1.091,4.863-1.705,7.573-1.705c2.856,0,5.552,0.681,7.941,1.885 l2.906-5.056c0.1-0.174,0.321-0.233,0.494-0.133l0.209,0.121c0.173,0.1,0.232,0.322,0.132,0.496l-2.889,5.028 c4.989,2.866,8.459,8.094,8.901,14.169H9.191C9.643,13.645,13.271,8.316,18.451,5.498z M35.076,13.572 c0.865,0,1.567-0.705,1.567-1.574c0-0.87-0.702-1.574-1.567-1.574c-0.865,0-1.567,0.705-1.567,1.574 C33.509,12.867,34.21,13.572,35.076,13.572z M18.924,13.572c0.865,0,1.567-0.705,1.567-1.574c0-0.87-0.702-1.574-1.567-1.574 c-0.865,0-1.567,0.705-1.567,1.574C17.357,12.867,18.059,13.572,18.924,13.572z M4.098,45.057H3.857C1.727,45.057,0,43.323,0,41.182 V24.713c0-2.14,1.727-3.875,3.857-3.875h0.241c2.13,0,3.857,1.735,3.857,3.875v16.469C7.955,43.323,6.228,45.057,4.098,45.057z"/>',
      apple: '<path d="M43.061,34.522c0,8.67,8.393,12.374,8.393,12.374 c-2.057,8.63-9.252,15.172-9.252,15.172c-1.613,1.607-4.567,1.852-4.567,1.852c-2.377,0-5.309-1.34-5.309-1.34 c-2.259-1.299-5.426-1.301-5.426-1.301c-2.792,0-5.309,1.261-5.309,1.261C19.334,63.835,16.399,64,16.399,64 c-2.568,0-3.982-1.498-3.982-1.498C-0.546,50.658,0.003,35.271,0.003,35.271c0-19.645,15.576-19.586,15.576-19.586 c3.626,0,4.919,0.827,4.919,0.827c3.866,1.882,5.777,1.892,5.777,1.892c1.5,0,5.816-1.931,5.816-1.931 c2.223-1.052,5.778-1.064,5.778-1.064c8.325,0,11.984,6.424,11.984,6.424C42.702,26.182,43.061,34.522,43.061,34.522z M25.729,14.818C25.729,1.075,38.377,0,38.377,0C38.377,14.797,25.729,14.818,25.729,14.818z"/>',
      baidu: '<path d="M57.549,28.923c-0.219,7.717-6.714,8.677-6.714,8.677 c-8.176-0.648-7.673-8.677-7.673-8.677c-0.795-8.379,5.755-9.641,5.755-9.641C58,19.412,57.549,28.923,57.549,28.923z M37.407,20.246c-5.931,0-5.755-8.677-5.755-8.677c1.708-7.93,7.673-9.641,7.673-9.641c5.472,0.78,6.714,8.677,6.714,8.677 C44.174,21.255,37.407,20.246,37.407,20.246z M37.407,32.779c2.75,3.707,7.673,8.677,7.673,8.677 c7.267,4.21,7.673,10.605,7.673,10.605c0,13.939-14.387,10.605-14.387,10.605c-1.873-0.813-7.673-1.928-7.673-1.928h-4.796 c-2.325,0.456-10.551,1.928-10.551,1.928c-10.734,0-11.51-10.605-11.51-10.605c0-6.349,4.796-9.641,4.796-9.641 c6.151-4.696,9.592-9.641,9.592-9.641c5.137-7.284,9.591-6.749,9.591-6.749C33.569,25.744,37.407,32.779,37.407,32.779z M25.897,35.672H23.02v5.785h-6.714c-5.859,0.902-5.755,8.677-5.755,8.677c-0.551,5.375,5.755,7.713,5.755,7.713h9.591V35.672z M32.611,53.025V41.456h-4.796v12.533c-0.017,2.653,3.837,3.856,3.837,3.856h10.551v-16.39h-4.796v12.533h-2.877 C33.473,53.886,32.611,53.025,32.611,53.025z M17.265,46.277h5.755v7.713h-4.796c0,0-2.647-0.459-2.877-3.856 C15.346,50.133,15.452,46.899,17.265,46.277z M21.101,20.246c-6.799,0-6.714-10.605-6.714-10.605c0-9.31,6.714-9.641,6.714-9.641 c5.997,0,6.714,9.641,6.714,9.641C27.815,19.489,21.101,20.246,21.101,20.246z M6.714,33.743C0.544,33.743,0,24.102,0,24.102 c0-8.281,6.714-9.641,6.714-9.641c6.751,0,7.673,9.641,7.673,9.641C14.387,32.77,6.714,33.743,6.714,33.743z"/>',
      douban: '<path d="M0,64v-5.818h20.945c0,0-4.899-9.901-8.145-11.636l8.145-3.491 c0,0,5.56,12.555,5.818,15.127h13.964c0,0,5.825-11.048,5.818-15.127l6.982,3.491c0,0-3.36,10.254-5.295,11.512 c-0.447,0.029-0.656,0.069-0.523,0.124c0.157,0.065,0.336-0.002,0.523-0.124C51.09,57.875,64,58.182,64,58.182V64H0z M5.818,40.727 v-25.6h52.364v25.6H5.818z M48.873,20.945H15.127v13.964h33.745V20.945z M3.491,0H64v5.818H3.491V0z"/>',
      googleplay: '<path d="M55.532,34.556c-0.828,0.473-5.547,3.122-11.786,6.618 l-8.591-8.715l9.908-9.829c5.385,3.012,9.44,5.281,10.469,5.858C58,29.871,57.958,33.17,55.532,34.556z M3.177,0.02 c0.741-0.078,1.548,0.064,2.355,0.511c1.54,0.853,23.514,13.139,37.89,21.18l-9.536,9.46L3.177,0.02z M1.36,0.75l31.244,31.694 L2.074,62.731C0.89,62.224,0,61.115,0,59.574C0,56.662,0,5.559,0,3.55C0,2.412,0.532,1.401,1.36,0.75z M42.112,42.089 C27.972,50.01,7.556,61.427,5.419,62.575c-0.32,0.172-0.655,0.291-0.993,0.367l29.446-29.212L42.112,42.089z"/>',
      kaixinwang: '<path d="M60.549,30.164c0,0-3.494,8.614-16.984,12.25c0,0-0.502,11.237,0,15.076c0,0,1.59,4.938-4.718,3.769c0,0-6.539-0.588-13.21-9.423c0,0-2.071-1.431-2.831,0c0,0-5.588,5.249-9.436,7.538c0,0-7.049,0.734-7.549-3.769c0,0-2.985-13.205,0.944-21.672c0,0-0.269-2.116-0.944-2.827c0,0-8.864-10.313-4.718-22.615c0,0,1.108-1.884,5.661-0.942c0,0,7.295,4.273,8.492,4.711c0,0,3.262,0.609,3.774-0.942c0,0,7.578-9.802,14.153-11.307c0,0,7.228-0.583,7.549,6.596c0,0,2.168,10.163,1.887,13.192c0,0,1.659,4.159,4.718,3.769c0,0,9.924-0.088,12.266,1.885C59.605,25.453,61.958,26.999,60.549,30.164z M13.371,27.337c0.013-2.519-1.887-2.827-1.887-2.827c-3.341,0-2.831,1.884-2.831,1.884c-0.146,2.405,2.831,2.827,2.831,2.827C13.764,28.831,13.371,27.337,13.371,27.337zM14.314,32.991c-1.477,8.602,6.605,11.307,6.605,11.307c6.04,0.515,11.323-4.711,11.323-4.711c-7.647,2.452-11.323,0.942-11.323,0.942C14.869,38.902,14.314,32.991,14.314,32.991z M36.016,18.857c0,0-3.136-1.152-5.661,0.942c0,0-0.944,0.585-0.944-0.942c0,0-3.121-5.667-7.549-1.885c0,0-6.72,5.505-2.831,13.192c0,0,1.414,3.005,6.605,0.942c0,0,0.403,2.079,1.887,3.769c0,0,4.505,3.149,7.549-3.769C35.073,31.107,38.588,24.505,36.016,18.857z M41.678,33.933c0,0-3.622-0.382-3.774,2.827c0,0-0.038,2.695,2.831,2.827c0,0,2.968-0.587,2.831-2.827C43.565,36.76,43.968,33.933,41.678,33.933zM33.186,28.28c-2.024-0.756-1.887-3.769-1.887-3.769c0.251-1.965,2.831-2.827,2.831-2.827c2.763,0.114,0.944,3.769,0.944,3.769C34.54,29.362,33.186,28.28,33.186,28.28z M23.75,25.453c-2.17-0.976,0-4.711,0-4.711c1.118-2.725,2.831-1.885,2.831-1.885c2.222,0.41,0.944,3.769,0.944,3.769C27.212,24.78,23.75,25.453,23.75,25.453z"/>',
      laiwang: '<path d="M58.659,31.066V36.4h-5.618v-3.138h2.809v-4.707c3.787-6.594,2.185-13.179,2.185-13.179c-4.56-14.795-19.35-10.669-19.35-10.669c-0.413-0.661-4.057-2.51-4.057-2.51C38.404,0.023,43.679,0,43.679,0C59.986,1.348,61.78,14.748,61.78,14.748C64,25.266,58.659,31.066,58.659,31.066z M52.56,29.556c0,6.135-2.082,11.777-5.565,16.263v6.759h-7.79C35.388,54.753,30.98,56,26.28,56C11.766,56,0,44.16,0,29.556C0,14.951,11.766,3.111,26.28,3.111C40.794,3.111,52.56,14.951,52.56,29.556z M26.28,8.4c-11.611,0-21.024,9.472-21.024,21.156c0,11.684,9.413,21.156,21.024,21.156c3.336,0,6.489-0.786,9.291-2.178h7.405v-6.135c2.711-3.562,4.328-8.01,4.328-12.843C47.304,17.872,37.891,8.4,26.28,8.4z M37.411,32.667c-1.708,0-3.092-1.393-3.092-3.111c0-1.718,1.384-3.111,3.092-3.111c1.708,0,3.092,1.393,3.092,3.111C40.502,31.274,39.118,32.667,37.411,32.667z M26.28,32.667c-1.708,0-3.092-1.393-3.092-3.111c0-1.718,1.384-3.111,3.092-3.111c1.708,0,3.092,1.393,3.092,3.111C29.372,31.274,27.988,32.667,26.28,32.667z M15.15,32.667c-1.708,0-3.092-1.393-3.092-3.111c0-1.718,1.384-3.111,3.092-3.111c1.707,0,3.092,1.393,3.092,3.111C18.242,31.274,16.857,32.667,15.15,32.667z"/>',
      logo: '<path d="M148.981,8.452H153v2.684h-5.639c0,0-1.096-0.041-1.558-1.203l-1.246-2.468h-0.592V12h8.754l-1.277,3.455h1.464v5.059c0,0-0.127,1.542-2.305,1.542h-10.686v-2.468h9.191c0,0,0.222-0.072,0.218-0.216v-1.326h-2.617l0.779-3.085h-9.346l-1.215,5.152c0,0-0.526,2.224-2.742,1.944h-2.929v-2.684h1.589c0,0,0.487-0.065,0.592-0.494l0.935-3.918h-3.116V12h8.848V7.465h-0.498l-1.246,2.468c0,0-0.75,1.304-2.835,1.265h-4.175V8.452h3.801c0,0,0.486-0.029,0.685-0.432l0.187-0.555h-4.767v-2.56h8.848V3.918h-8.941V1.141h17.945c0,0,0.244-0.049,0.311-0.37V0.278h3.489v1.635c0,0-0.22,2.005-2.96,2.005h-5.982v0.956H153v2.591h-4.86l0.28,0.679C148.42,8.144,148.619,8.452,148.981,8.452zM132.313,29.738h-2.492c-0.235-1.372-1.34-1.234-1.34-1.234c-1.608,0-1.589,2.19-1.589,2.19c0,2.719,1.62,2.468,1.62,2.468c1.174,0,1.309-1.388,1.309-1.388h2.555c-0.293,3.657-3.832,3.517-3.832,3.517c-4.466,0-4.206-4.566-4.206-4.566c0-4.45,4.112-4.35,4.112-4.35C132.348,26.375,132.313,29.738,132.313,29.738z M124.525,4.997l-1.776-2.221h-10.811l-1.807,2.53c0,0-0.314,0.339-0.748,0.339h-3.147V2.869h1.34c0,0,0.099-0.001,0.187-0.154L109.633,0h15.266l1.9,2.622c0,0,0.13,0.167,0.374,0.154h1.09v2.776h-2.96C125.304,5.553,124.86,5.553,124.525,4.997z M103.807,30.54l3.084,4.535h-3.178l-1.495-2.529l-1.495,2.529H97.67l3.115-4.473l-2.804-4.01h3.084l1.277,2.344l1.277-2.344h2.96L103.807,30.54z M101.47,22.057h-4.735v-2.56h2.679c0.391,0,0.405-0.37,0.405-0.37v-4.35H86.111l-0.81,1.018c-0.476,0.574-1.277,0.494-1.277,0.494h-2.555v-2.931h0.716c0.4,0,0.53-0.247,0.53-0.247l1.277-2.098h-1.651V0.185h20.873v8.823c-0.05,2.132-2.118,2.098-2.118,2.098H88.074l-0.592,0.987h15.92v8.113C103.264,22.144,101.47,22.057,101.47,22.057z M99.258,2.961H85.924v1.45h13.334V2.961z M99.134,8.545c0,0,0.214-0.097,0.218-0.278V7.003H85.924v1.542H99.134z M84.18,18.91l2.337-3.177h4.268l-4.33,5.614c0,0-0.724,0.62-1.62,0.524h-3.458v-2.56h2.305C83.681,19.311,83.961,19.247,84.18,18.91z M87.388,28.751h-4.33v1.049h3.925v2.036h-3.925v1.08h4.455v2.159h-7.01v-8.483h6.885V28.751z M70.627,35.815l-1.776-3.085l1.807-3.054h3.552l1.807,3.085l-1.776,3.054H70.627z M17.197,17.954l1.807-3.054h3.552l1.807,3.085l-1.807,3.054h-3.583L17.197,17.954z M44.8,35.815l-5.016-8.637l3.614-6.108l5.016,8.576h13.677l6.761-11.661L62.06,6.324H48.414l-17.229,29.46l-20.78,0.062L0,17.923L10.375,0.154l20.811-0.031l5.016,8.637L32.619,14.9l-5.047-8.607H13.957L7.103,17.985l6.854,11.661h13.646l17.26-29.491h20.78l10.374,17.83l-10.406,17.83H44.8z M92.28,21.964h-3.521v-2.56h1.433c0.436,0.002,0.654-0.339,0.654-0.339l2.555-3.116h4.362l-4.299,5.553C93.035,21.922,92.28,21.964,92.28,21.964zM92.872,26.375c4.353,0,4.268,4.411,4.268,4.411c0,1.971-0.966,3.023-0.966,3.023l0.997,1.018L95.987,36l-1.122-1.172c-0.421,0.386-1.776,0.463-1.776,0.463c-4.572,0.019-4.393-4.473-4.393-4.473C88.83,26.208,92.872,26.375,92.872,26.375zM92.934,33.162c0,0,0.237-0.016,0.312-0.062l-0.717-0.71l1.184-1.141l0.685,0.709c0,0,0.187-0.29,0.187-1.08c0,0,0.181-2.375-1.682-2.375c0,0-1.651-0.176-1.651,2.406C91.252,30.91,91.207,33.162,92.934,33.162z M110.007,35.074h-2.555v-8.483h2.555V35.074z M111.222,26.591h2.555v5.306c0,1.379,1.34,1.265,1.34,1.265c1.259,0,1.309-1.296,1.309-1.296v-5.275h2.555v5.491c0,3.456-3.77,3.208-3.77,3.208c-4.308,0-3.988-3.27-3.988-3.27V26.591z M128.17,19.28v2.776h-21.746v-2.746h2.15V7.095h3.209V19.28h3.676V4.689h3.583V8.73h8.941v2.961h-8.941v7.589H128.17z M123.06,35.074h-2.43V32.73h2.43V35.074z M137.672,26.375c4.254,0,4.237,4.38,4.237,4.38c0,4.688-4.175,4.535-4.175,4.535c-4.524,0-4.268-4.658-4.268-4.658C133.699,26.191,137.672,26.375,137.672,26.375z M136.021,30.848c0,2.339,1.651,2.314,1.651,2.314c1.762,0,1.682-2.345,1.682-2.345c0.002-2.392-1.651-2.344-1.651-2.344C135.947,28.473,136.021,30.848,136.021,30.848z M148.109,31.589l1.215-4.997h3.645v8.483h-2.43v-5.553l-1.464,5.553h-1.932l-1.464-5.46v5.46h-2.43v-8.483h3.645L148.109,31.589z"/>',
      logo2: '<path d="M23.103,24l2.397-4.216h4.795l2.397,4.108l-2.397,4.216H25.5L23.103,24z M60.154,48l-6.756-11.568l4.795-8.216l6.756,11.46h18.308L92.41,24L83.256,8.324H64.949L41.846,48H13.949L0,24L13.949,0h27.897l6.756,11.568l-4.795,8.216l-6.756-11.46H18.744L9.59,24l9.154,15.676h18.308L60.154,0h27.897L102,24L88.051,48H60.154zM99.494,39.676L102,43.784L99.603,48h-4.904l-2.397-4.216l2.397-4.108H99.494z"/>',
      code: '<path d="M64,64h-7V50h7V64z M50,50v-7h7v7H50z M43,50h-7V36h14v7h-7V50zM64,36v7h-7v-7H64z M36,0h28v28H36V0z M40,24h20V4H40V24z M43,7h14v14H43V7z M0,36h28v28H0V36z M4,40v20h20V40H4z M7,43h14v14H7V43z M0,0h28v28H0V0z M4,24h20V4H4V24z M7,7h14v14H7V7z M50,57v7H36v-7H50z"/>',
      computer: '<path d="M61,44H38.676l6.199,8.769c0,0,1.125,1.64,0,3.231h-9.289h-6.697h-9.733c-1.156-1.591,0-3.231,0-3.231L25.527,44H3c-1.657,0-3-1.343-3-3V3c0-1.657,1.343-3,3-3h58c1.657,0,3,1.343,3,3v38C64,42.657,62.657,44,61,44z M32,42c1.105,0,2-0.895,2-2s-0.895-2-2-2c-1.105,0-2,0.895-2,2S30.895,42,32,42z M60,5H4v31h56V5z"/>',
      dengpao: '<path d="M40,44.969V52c0,3.314-2.686,6-6,6h-1v3.5c0,1.381-1.119,2.5-2.5,2.5h-11c-1.381,0-2.5-1.119-2.5-2.5V58h-1c-3.314,0-6-2.686-6-6v-7.041C3.936,40.403,0,33.171,0,25C0,11.193,11.193,0,25,0s25,11.193,25,25C50,33.173,46.068,40.413,40,44.969z M25,7C15.059,7,7,15.059,7,25c0,0.585,0.033,1.162,0.088,1.733c0.02,0.206,0.056,0.407,0.082,0.611c0.047,0.357,0.095,0.714,0.162,1.064c0.048,0.251,0.11,0.496,0.168,0.743c0.069,0.29,0.139,0.58,0.222,0.864c0.079,0.273,0.168,0.542,0.26,0.809c0.083,0.242,0.17,0.482,0.263,0.719c0.113,0.29,0.232,0.575,0.359,0.858c0.089,0.195,0.183,0.386,0.278,0.577c0.152,0.307,0.307,0.611,0.475,0.907c0.078,0.137,0.163,0.268,0.244,0.402c0.202,0.334,0.406,0.667,0.629,0.987c0.006,0.009,0.014,0.018,0.02,0.027c1.674,2.393,3.914,4.354,6.527,5.699C16.3,41.532,16,42.228,16,43v6c0,1.657,1.343,3,3,3h12c1.657,0,3-1.343,3-3v-6c0-0.772-0.3-1.468-0.778-2c2.998-1.544,5.497-3.904,7.222-6.788c0.062-0.103,0.127-0.203,0.186-0.306c0.177-0.31,0.34-0.629,0.499-0.951c0.09-0.181,0.179-0.361,0.262-0.545c0.13-0.286,0.251-0.577,0.366-0.871c0.093-0.236,0.179-0.474,0.261-0.715c0.091-0.267,0.18-0.535,0.259-0.808c0.084-0.287,0.154-0.578,0.224-0.871c0.058-0.245,0.119-0.487,0.167-0.736c0.068-0.353,0.117-0.712,0.164-1.072c0.026-0.202,0.062-0.401,0.081-0.605C42.967,26.163,43,25.586,43,25C43,15.059,34.941,7,25,7z M28.5,48h-7c-1.381,0-2.5-1.119-2.5-2.5v-1c0-1.381,1.119-2.5,2.5-2.5h7c1.381,0,2.5,1.119,2.5,2.5v1C31,46.881,29.881,48,28.5,48z"/>',
      normaluser: '<path d="M31.5,64C59.433,56.326,63,32.541,63,24.694C63,16.846,60.61,8.58,54.309,0C49.566,1.885,39.207,2.721,31.5,0C23.794,2.721,13.434,1.885,8.692,0C2.39,8.58,0,16.846,0,24.694C0,32.541,3.568,56.326,31.5,64z"/>',
      pad: '<path d="M49,64H3c-1.657,0-3-1.343-3-3V3c0-1.657,1.343-3,3-3h46c1.657,0,3,1.343,3,3v58C52,62.657,50.657,64,49,64z M26,62c1.657,0,3-1.343,3-3s-1.343-3-3-3s-3,1.343-3,3S24.343,62,26,62z M45,6H7v48h38V6z"/>',
      pengyou: '<path d="M52.671,41.29c0,0,3.271,9.101-5.532,11.011c0,0-7.661,1.98-11.065-11.011c0,0-3.688-10.606-3.688-12.846c0,0,11.041-2.228,18.442-1.835c0,0,11.116,0.842,11.065,9.175C61.892,35.785,62.397,43.503,52.671,41.29z M52.671,22.939c-5.253,0.729-21.208,3.67-21.208,3.67V7.34C31.264,1.286,39.762,0,39.762,0c7.386,0.19,6.455,7.34,6.455,7.34c10.325-4.012,11.065,7.34,11.065,7.34C57.501,18.724,52.671,22.939,52.671,22.939z M7.488,28.444c0,0-8.17-0.479-7.377-8.258c0,0-1.714-6.644,8.299-6.423c0,0-3.114-11.531,11.065-11.011c0,0,6.523-0.627,8.299,7.34c0,0,3.449,12.205,2.766,16.516C30.541,26.609,18.663,27.596,7.488,28.444z M31.463,28.444c-0.872,4.484,1.844,12.846,1.844,12.846c3.235,6.336,0.922,11.011,0.922,11.011c-2.931,8.699-11.987,7.34-11.987,7.34c-6.323-1.717-6.455-8.258-6.455-8.258c-5.134-0.13-7.377-1.835-7.377-1.835c-5.279-1.891-2.766-11.011-2.766-11.011C14.528,26.962,31.463,28.444,31.463,28.444z"/>',
      qq: '<path d="M173.94,152.517c0,0-7.239,0.531-15.89-15.949c0,0-7.897,20.246-13.904,24.921c0,0,15.89,5.883,15.89,17.943c0,0-2.979,19.937-36.746,19.937c0,0-22.406,0.632-30.787-13.956h-2.979v-0.309l-2.979,0.309C78.162,200,55.756,199.368,55.756,199.368c-33.767,0-36.746-19.937-36.746-19.937c0-12.06,15.89-17.943,15.89-17.943c-6.007-4.675-13.904-24.921-13.904-24.921c-8.651,16.48-15.89,15.949-15.89,15.949c-17.583-29.635,15.89-60.807,15.89-60.807c-5.712-18.322,5.959-26.915,5.959-26.915C29.54,0.66,89.523,0,89.523,0s59.983,0.66,62.568,64.795c0,0,11.671,8.593,5.959,26.915C158.05,91.709,191.523,122.882,173.94,152.517z"/>',
      qqliulanqi: '<path d="M64,55.332c0,4.57-3.122,8.311-7.081,8.642V64H31.793c-0.02,0-0.039-0.007-0.059-0.007C14.184,63.849,0,49.584,0,32C0,14.327,14.327,0,32,0s32,14.327,32,32c0,5.69-1.492,11.029-4.096,15.66C62.338,49.11,64,51.999,64,55.332z M32,14.222c-9.818,0-17.778,7.959-17.778,17.778c0,7.131,4.208,13.262,10.268,16.092c1.219-2.013,3.562-3.394,6.287-3.394c0.893,0,1.743,0.156,2.533,0.424c1.731-5.002,6.017-8.551,11.047-8.551c1.599,0,3.12,0.368,4.512,1.017c0.583-1.759,0.91-3.634,0.91-5.588C49.778,22.182,41.818,14.222,32,14.222z"/>',
      qqweibo: '<path d="M60.847,26.088c-8.08-2.418-13.422-13.494-13.422-13.494c-2.424,0-2.684-2.699-2.684-2.699c0-3.708,2.684-3.598,2.684-3.598c3.337,0,3.579,3.598,3.579,3.598c0.013,1.683-1.79,2.699-1.79,2.699c2.627,8.909,12.527,11.695,12.527,11.695C64,25.295,60.847,26.088,60.847,26.088z M54.583,16.192c0,0-1.339,0.621-0.895-0.9c0,0,1.906-1.828,1.79-5.398c0,0-0.266-8.096-8.053-8.096c0,0-7.158,0.059-7.158,8.096c0,0,0.001,8.096,7.158,8.096c0,0,1.785,1.974,0,1.799c0,0-8.948-0.952-8.948-9.895c0,0,0.135-9.895,9.843-9.895c0,0,8.948,1.557,8.948,9.895C57.267,9.895,56.836,14.713,54.583,16.192z M17.001,38.682h-3.579c0,0-2.586-0.992-0.895-2.699c0,0,17.896,2.971,17.896-14.393c0,0-0.252-13.494-13.422-13.494c0,0-14.317,1.116-14.317,14.393c0,0,0.037,4.655,1.79,6.297c0,0,0.568,3.071-1.79,0.9c0,0-2.521-3.105-2.684-7.197c0,0,1.061-17.092,17.001-17.092c0,0,16.107,0.699,16.107,16.193C33.108,21.59,32.527,38.682,17.001,38.682z M12.527,24.289c0,0-1.74-4.156,1.79-7.197c0,0,5.442-2.025,8.053,2.699c0,0,1.083,4.133-1.79,6.297c0,0-3.242,1.586-6.264,0c0,0-9.393,9.066-8.948,17.992c0.029,0.574,0,10.795,0,10.795S4.337,58,1.79,55.774V44.08C1.79,44.08,4.022,30.876,12.527,24.289z"/>',
      qqzone: '<path d="M49.096,31.429L51.726,55L32.438,43.651L13.151,55l1.753-22.698L0,19.206h21.918L32.438,0l11.397,19.206H64L49.096,31.429z M47.342,21.825H21.041l15.781,2.619L17.534,41.032h29.808L29.808,37.54L47.342,21.825z"/>',
      renren: '<path d="M26.667,0h12c0,0-5.9,40.406,25.333,51.726L58,63c0,0-20.229-14.581-24-29.179c0,0-12.018,22.795-27.333,28.516L0,54.379C0,54.379,31.489,46.61,26.667,0z"/>',
      sendcompany: '<path d="M56,37L32,13L8,37H0v-6L31,0h2l31,31v6H56z M53,38v26H39V43H25v21H11V38l21-21L53,38z"/>',
      scenegift: '<path d="M34.133,63.954V25.581H64v38.372H34.133z M0,12.791h14.821C8.033,11.603,8,4.996,8,4.996C8.056,0.071,13,0,13,0c9.28-0.03,15.986,11.202,16.888,12.791h4.237C35.125,11.201,42.504-0.046,51,0c0,0,5.046,0.083,5,4.996c0,0,0.061,6.606-6.823,7.794H64v8.527H0V12.791z M53,5.996c0.062-1.888-2-1.999-2-1.999c-8.038-0.049-13,8.993-13,8.993C50.389,13.03,53,5.996,53,5.996z M13,3.997c0,0-1.983,0.024-2,1.999s2.81,6.995,15,6.995C26,12.991,20.979,3.981,13,3.997z M29.867,63.954H0V25.581h29.867V63.954z"/>',
      scenesend: '<path d="M0,24.889L64,0L46.222,64L24.889,46.222l24.889-32l-32,24.889L0,24.889z M10.667,39.111l14.222,10.667L14.222,60.444L10.667,39.111z"/>',
      taobao: '<path d="M48.988,48.946c-4.903,0-7.901-1.579-7.901-1.579l0.79-3.947l7.111,0.789c6.122,0,6.321-5.526,6.321-5.526V14.21c0-7.378-7.901-7.895-7.901-7.895c-6.463,0-15.012,3.158-15.012,3.158l3.16,1.579c0.142,1.015-3.16,4.737-3.16,4.737h20.543v3.947H41.086v3.947h11.852v3.947H41.086v9.473l4.741-2.368l-0.79-3.947l4.741-1.579l3.951,10.263l-5.531,2.368l-1.58-3.947c-5.47,3.996-14.222,4.737-14.222,4.737h-7.111c-4.661,0-5.531-5.526-5.531-5.526v-7.105h7.111v3.158c-0.14,5.157,7.111,4.737,7.111,4.737V27.631H21.333v-3.947h12.642v-3.947h-5.531c-0.316,2.196-3.951,3.158-3.951,3.158s-2.819-0.519-3.16-1.579c2.749-1.888,6.321-9.473,6.321-9.473c-4.473,0.22-8.691,6.316-8.691,6.316l-4.741-3.947C19.296,12.449,22.914,0,22.914,0l7.111,1.579c0.106,1.229-1.58,4.737-1.58,4.737c11.708-3.875,23.704-3.158,23.704-3.158C63.475,4.407,64,15,64,15v21.315C64,49,48.988,48.946,48.988,48.946z M11.062,10.263c-5.479,0-5.531-4.737-5.531-4.737c0-5.404,5.531-4.737,5.531-4.737c5.138,0,5.531,4.737,5.531,4.737C16.593,10.074,11.062,10.263,11.062,10.263z M2.37,18.157l3.951-5.526c11.83,10.053,11.062,12.631,11.062,12.631c-0.264,5.059-9.482,22.105-9.482,22.105L0,41.841L11.852,29.21c1.392-1.303,0-3.947,0-3.947C11.562,22.982,2.37,18.157,2.37,18.157z"/>',
      tieba: '<path d="M64,28.804v33.072H36.267c0,0-0.933,0.052-1.067-2.134V32.005c0,0-1.165-3.201,5.333-3.201V1.067h6.4v4.267H64v6.401H46.933v17.069H64z M42.667,36.272v19.203h13.867V36.272H42.667z M14.933,55.475c0,0-4.911,5.24-12.8,6.401l-1.067-4.267c0,0,8.079-3.243,9.6-7.468V13.869c0,0,0.682-2.067,4.267-2.134c0,0,3.289,0.126,3.2,2.134V46.94c0,0,0.469,6.066,11.733,10.668L28.8,62.943C28.8,62.943,22.857,64,14.933,55.475z M23.467,9.601c0,0,0.113-3.437-8.533-3.201c0,0-8.533,0.099-8.533,3.201V46.94H0V0h29.867v46.94h-6.4V9.601z"/>',
      time: '<path d="M57.094,17.342L39.191,4.248c3.421-4.74,10.201-5.651,15.145-2.035C59.28,5.829,60.514,12.602,57.094,17.342z M56.896,34.986c0.016,15.224-12.23,27.578-27.352,27.594C14.421,62.597,2.149,50.268,2.133,35.044C2.117,19.821,14.363,7.466,29.485,7.45C44.608,7.434,56.88,19.762,56.896,34.986z M29.492,14.27c-10.206,0.011-18.663,7.491-20.294,17.297H8.966v6.895h0.231c1.633,9.824,10.118,17.308,20.339,17.297C39.742,55.75,48.2,48.269,49.83,38.463h0.232v-6.895h-0.23C48.199,21.743,39.713,14.26,29.492,14.27z M14.103,38.463v-6.895H26.09V16.915h6.849v14.653v6.895H26.09H14.103z M4.692,2.213c4.944-3.616,11.724-2.705,15.145,2.035L1.935,17.342C-1.486,12.602-0.251,5.829,4.692,2.213z"/>',
      uc: '<path d="M53.093,32.265c-7.527-5.77-19.034-7.054-19.034-7.054c5.833-1.908,12.021-7.054,12.021-7.054c-0.333-6.053,2.003-8.061,2.003-8.061c1.492,1.376,3.005,6.046,3.005,6.046C64,21.39,61.107,32.265,61.107,32.265H53.093z M26.046,26.219c0,0-16.028,6.346-16.028,20.153c0,0,0.893,11.278,8.172,13.661C12.446,58.893,0,55.07,0,43.35c0-15.233,13.134-18.434,14.025-27.207c0,0-1.021-8.061-7.012-8.061c0,0-4.643,0.683-6.01,2.015c0,0,5.962-10.617,18.032-10.077c0,0,12.937,0.063,14.025,11.084C33.058,11.104,34.791,19.555,26.046,26.219z M18.189,60.034c1.721,0.342,2.848,0.446,2.848,0.446C19.991,60.48,19.048,60.315,18.189,60.034z M16.028,48.388c0,0,0.948-8.061,8.014-8.061c0,0,9.016,0.132,9.016,8.061c0,0-0.119,9.069-8.014,9.069C25.044,57.457,16.028,58.129,16.028,48.388z M20.035,48.388c0,4.649,4.007,5.038,4.007,5.038c4.47,0,5.009-4.031,5.009-4.031c0-4.625-5.009-5.038-5.009-5.038C19.821,44.233,20.035,48.388,20.035,48.388z M37.065,48.388c0,0-0.189-12.092-11.019-12.092c0,0-4.6-1.381-11.019,3.023c0,0,3.518-7.19,12.021-7.054c0,0,15.761,0.647,16.028,17.13c0,0-0.817,6.053-3.005,7.054c0,0,7.737-1.618,10.018,4.031H28.049C28.049,60.48,36.582,59.201,37.065,48.388z M46.081,41.334c0,0-4.805-11.215-21.037-12.092c0,0,8.813-2.856,17.03,1.008l8.014,5.038c0,0,1.677,0.997,5.009,1.008c0,0,6.234,0.472,7.012,4.031c0,0-5.923-1.36-8.014,0C54.095,40.327,50.536,44.644,46.081,41.334z"/>',
      voice: '<path d="M38.246,32.653c0,9.68-7.396,17.645-16.902,18.686v8.482h8.451V64H8.667v-4.18h8.451v-8.482C7.612,50.298,0.216,42.333,0.216,32.653c0-1.815-0.485-2.548,0-4.209h4.111c-0.629,1.624,0.114,2.365,0.114,4.209c0,8.079,6.621,14.629,14.79,14.629S34.02,40.732,34.02,32.653c0-1.843,0.743-2.584,0.114-4.209h4.111C38.731,30.105,38.246,30.838,38.246,32.653z M19.231,42.667h-1.028c-5.393,0-9.764-4.321-9.764-9.651V9.651C8.438,4.321,12.81,0,18.203,0h1.028c5.393,0,9.764,4.321,9.764,9.651v23.365C28.995,38.346,24.623,42.667,19.231,42.667z"/>',
      wechat: '<path d="M171.484,138.214l6.938,21.872l-26.761-14.913c-72.415-0.249-66.407-49.709-66.407-49.709c0-28.146,34.69-40.761,34.69-40.761c75.009-16.33,78.301,42.749,78.301,42.749C198.245,125.746,171.484,138.214,171.484,138.214z M122.245,78.086c-4.418,0-8,3.582-8,8c0,4.418,3.582,8,8,8c4.418,0,8-3.582,8-8C130.245,81.667,126.663,78.086,122.245,78.086z M165.245,78.086c-4.418,0-8,3.582-8,8c0,4.418,3.582,8,8,8c4.418,0,8-3.582,8-8C173.245,81.667,169.663,78.086,165.245,78.086z M90.209,69.616c-17.464,24.322-4.956,47.72-4.956,47.72c-2.767,2.24-7.929,1.988-7.929,1.988H61.466l-36.673,16.901l8.92-25.849C-1.755,92.678,0.015,60.668,0.015,60.668v-2.982C6.983-1.914,70.386,0.024,70.386,0.024c30.227-0.665,46.584,12.924,46.584,12.924c19.951,11.217,24.779,32.808,24.779,32.808C107.066,46.955,90.209,69.616,90.209,69.616z M41.245,30.086c-6.075,0-11,4.925-11,11s4.925,11,11,11s11-4.925,11-11S47.32,30.086,41.245,30.086z M108.245,41.086c0-6.075-4.925-11-11-11c-6.075,0-11,4.925-11,11s4.925,11,11,11C103.32,52.086,108.245,47.161,108.245,41.086z"/>',
      weibo: '<path d="M199.389,65.394c0,0-0.493,9.988-10.011,9.988c0,0-10.252-1.807-7.007-11.985c0,0,11.965-41.924-36.038-47.942c0,0-17.018,5.194-17.018-6.991c0,0,1.506-7.99,8.008-7.99C137.322,0.473,204.096-9.8,199.389,65.394z M143.329,40.425c0,0-8.008,1.063-8.008-6.992c0,0,2.411-5.993,7.007-5.993c0,0,34.003-5.033,30.032,32.96c0,0-1.923,5.993-6.006,5.993c0,0-8.008,0.682-8.008-7.99C158.345,58.403,162.869,40.425,143.329,40.425z M133.318,45.419c0,0,17.018,0.911,17.018,16.979c0,0,0.245,9.102-4.004,12.984c0,0,29.031,6.811,29.031,28.965c0,0-0.251,56.931-91.097,56.931c0,0-84.09,0.922-84.09-52.936c0,0-4.081-25.111,27.029-54.933c31.109-29.822,48.801-30.962,57.061-30.962c0,0,16.017-0.976,16.017,15.98c0,0-0.412,11.219-3.003,14.982C97.28,53.409,116.344,45.419,133.318,45.419z M78.259,71.387c0,0-49.884,3.469-58.062,42.948c0,0-0.603,30.22,52.055,34.958c0,0,54.006,2.183,66.07-36.955C138.324,112.337,151.405,74.021,78.259,71.387z M73.12,142.2c-26.866-0.565-28.931-22.871-28.931-22.871c-1.094-30.22,32.921-32.815,32.921-32.815c31.985-0.314,30.926,25.854,30.926,25.854C106.16,142.199,73.12,142.2,73.12,142.2z M67.135,110.379c0,0-11.971,1.423-11.971,9.944c0,0-1.051,8.95,9.976,8.95c0,0,10.974-1.898,10.974-9.944C76.113,119.328,77.207,110.379,67.135,110.379z M83.097,106.401c0,0-3.99-0.664-3.99,2.983c0,0-0.929,2.983,2.993,2.983c0,0,3.99-0.785,3.99-3.978C86.089,108.39,85.751,106.401,83.097,106.401z"/>',
      windows: '<path d="M28.984,59.594V33.416H63V64L28.984,59.594z M28.984,4.406L63,0v30.584H28.984V4.406z M0,33.416h26.149v25.487L0,55.231V33.416z M0,8.769l26.149-3.672v25.487H0V8.769z"/>',
      yixin: '<path d="M45.364,58.38c4.124,2.52,10.259,2.797,10.259,2.797C44.551,65,36.341,63.943,30.867,61.901C13.807,61.829,0,48.002,0,30.952C0,13.858,13.879,0,31,0s31,13.858,31,30.952C62,42.869,55.251,53.207,45.364,58.38z M31,14.977c-8.837,0-16,7.153-16,15.975c0,5.364,2.656,10.098,6.718,12.996c-3.185,4.404-11.86,5.579-11.86,5.579c19.676,4.767,29.433-4.088,31.788-6.672C44.924,39.93,47,35.688,47,30.952C47,22.129,39.837,14.977,31,14.977z"/>',
      zhifubao: '<path d="M63.021,50L36.949,36.957c-10.737,11.987-22.813,10.87-22.813,10.87c-15.115,0-14.122-11.957-14.122-11.957C-0.088,22.841,15.222,25,15.222,25c8.559,0.109,18.468,3.261,18.468,3.261c3.55-4.164,4.345-9.783,4.345-9.783H10.877v-2.174h13.036V10.87H7.618V8.696h16.295V0h8.691v8.696h16.295v2.174H32.604v5.435h14.122c0.153,3.882-5.432,15.217-5.432,15.217l21.727,6.522V50z M14.136,28.261c0,0-11.95-2.295-11.95,7.609c0,0-1.54,7.609,10.863,7.609c0,0,11.464,0.271,17.381-9.783C30.431,33.696,23.002,28.261,14.136,28.261z"/>'
    }
  }(),
  function(a) {
    "use strict";
    a.fn.swipeSlide = function(b, c) {
      function d(a, b) {
        a.css({
          "-webkit-transition": "all " + b + "s " + C.transitionType,
          transition: "all " + b + "s " + C.transitionType
        })
      }

      function e(a, b) {
        C.axisX ? a.css({
          "-webkit-transform": "translate3d(" + b + "px,0,0)",
          transform: "translate3d(" + b + "px,0,0)"
        }) : a.css({
          "-webkit-transform": "translate3d(0," + b + "px,0)",
          transform: "translate3d(0," + b + "px,0)"
        })
      }

      function f(a) {
        if (C.lazyLoad) {
          var b = C.ul.find("[data-src]");
          if (b.length > 0) {
            var c = b.eq(a);
            c.data("src") && (c.is("img") ? c.attr("src", c.data("src")).data(
              "src", "") : c.css({
              "background-image": "url(" + c.data("src") + ")"
            }).data("src", ""))
          }
        }
      }

      function g(a) {
        a.touches || (a.touches = a.originalEvent.touches)
      }

      function h(a) {
        r = a.touches[0].pageX, s = a.touches[0].pageY
      }

      function i(a) {
        if (a.preventDefault(), C.autoSwipe && p && clearInterval(p), w = a.touches[
            0].pageX, x = a.touches[0].pageY, t = w - r, u = x - s, d(C.ul, 0),
          C.axisX) {
          if (!C.continuousScroll) {
            if (0 == q && t > 0) return t = 0, o();
            if (q + 1 >= F && 0 > t) return t = 0, o()
          }
          e(C.ul, -(D * parseInt(q) - t))
        } else {
          if (!C.continuousScroll) {
            if (0 == q && u > 0) return u = 0, o();
            if (q + 1 >= F && 0 > u) return u = 0, o()
          }
          e(C.ul, -(E * parseInt(q) - u))
        }
      }

      function j() {
        v = C.axisX ? t : u, Math.abs(v) <= y ? k(.3) : v > y ? n() : -y > v &&
          m(), o(), t = 0, u = 0
      }

      function k(a) {
        d(C.ul, a), C.axisX ? e(C.ul, -q * D) : e(C.ul, -q * E)
      }

      function l() {
        C.continuousScroll ? q >= F ? (k(.3), q = 0, setTimeout(function() {
            k(0)
          }, 300)) : 0 > q ? (k(.3), q = F - 1, setTimeout(function() {
            k(0)
          }, 300)) : k(.3) : (q >= F ? q = 0 : 0 > q && (q = F - 1), k(.3)),
          c(q)
      }

      function m() {
        q++, l(), C.lazyLoad && f(C.continuousScroll ? q + 2 : q + 1)
      }

      function n() {
        if (q--, l(), A && C.lazyLoad) {
          var a = F - 1;
          for (a; F + 1 >= a; a++) f(a);
          return void(A = !1)
        }!A && C.lazyLoad && f(q)
      }

      function o() {
        C.autoSwipe && (p = setInterval(function() {
          m()
        }, C.speed))
      }
      var p, q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = 0,
        w = 0,
        x = 0,
        y = 50,
        z = 0,
        A = !0,
        B = a(this),
        C = a.extend({}, {
          ul: B.children("ul"),
          li: B.children().children("li"),
          continuousScroll: !1,
          autoSwipe: !0,
          speed: 4e3,
          axisX: !0,
          transitionType: "ease",
          lazyLoad: !1,
          clone: !0,
          width: 0,
          length: 0
        }, b || {}),
        D = C.width || C.li.width(),
        E = C.li.height(),
        F = C.length || C.li.length;
      c = c ||
        function() {},
        function() {
          if (C.continuousScroll && (C.clone && C.ul.prepend(C.li.last().clone())
              .append(C.li.first().clone()), C.axisX ? (e(C.ul.children().first(), -
                1 * D), e(C.ul.children().last(), D * F)) : (e(C.ul.children()
                .first(), -1 * E), e(C.ul.children().last(), E * F))), C.lazyLoad) {
            var b = 0;
            for (z = C.continuousScroll ? 3 : 2, b; z > b; b++) f(b)
          }
          C.axisX ? C.li.each(function(b) {
            e(a(this), D * b)
          }) : C.li.each(function(b) {
            e(a(this), E * b)
          }), o(), c(q, p), B.on("touchstart", function(a) {
            a.stopPropagation(), g(a), h(a)
          }), B.on("touchmove", function(a) {
            a.stopPropagation(), g(a), i(a)
          }), B.on("touchend", function(a) {
            a.stopPropagation(), j()
          })
        }()
    }
  }(window.Zepto || window.jQuery),
  function() {
    eqShow.getImagesResourceHost = function(a, b) {
      return -1 !== location.host.indexOf(window.DOMAIN) && (-1 !== ["2",
          "21"
        ].indexOf(a) && -1 !== ["1", "2", "3", "4", "6", "7", "8", "9"].indexOf(
          b) ? PREFIX_FILE_HOST = VIP_FILE_HOST : PREFIX_FILE_HOST =
        COMMON_FILE_HOST), PREFIX_FILE_HOST
    }
  }();
var THREE = THREE || {};
self.Int32Array || (self.Int32Array = Array, self.Float32Array = Array), THREE.Color =
  function(a) {
    return void 0 !== a && this.setHex(a), this
  }, THREE.Color.prototype = {
    constructor: THREE.Color,
    r: 1,
    g: 1,
    b: 1,
    copy: function(a) {
      return this.r = a.r, this.g = a.g, this.b = a.b, this
    },
    copyGammaToLinear: function(a) {
      return this.r = a.r * a.r, this.g = a.g * a.g, this.b = a.b * a.b, this
    },
    copyLinearToGamma: function(a) {
      return this.r = Math.sqrt(a.r), this.g = Math.sqrt(a.g), this.b = Math.sqrt(
        a.b), this
    },
    setRGB: function(a, b, c) {
      return this.r = a, this.g = b, this.b = c, this
    },
    setHSV: function(a, b, c) {
      var d, e, f;
      if (0 === c) this.r = this.g = this.b = 0;
      else switch (d = Math.floor(6 * a), e = 6 * a - d, a = c * (1 - b), f =
        c * (1 - b * e), b = c * (1 - b * (1 - e)), d) {
        case 1:
          this.r = f, this.g = c, this.b = a;
          break;
        case 2:
          this.r = a, this.g = c, this.b = b;
          break;
        case 3:
          this.r = a, this.g = f, this.b = c;
          break;
        case 4:
          this.r = b, this.g = a, this.b = c;
          break;
        case 5:
          this.r = c, this.g = a, this.b = f;
          break;
        case 6:
        case 0:
          this.r = c, this.g = b, this.b = a
      }
      return this
    },
    setHex: function(a) {
      return a = Math.floor(a), this.r = (a >> 16 & 255) / 255, this.g = (a >>
        8 & 255) / 255, this.b = (255 & a) / 255, this
    },
    getHex: function() {
      return ~~(255 * this.r) << 16 ^ ~~(255 * this.g) << 8 ^ ~~(255 * this.b)
    },
    getContextStyle: function() {
      return "rgb(" + Math.floor(255 * this.r) + "," + Math.floor(255 * this.g) +
        "," + Math.floor(255 * this.b) + ")"
    },
    clone: function() {
      return (new THREE.Color).setRGB(this.r, this.g, this.b)
    }
  }, THREE.Vector2 = function(a, b) {
    this.x = a || 0, this.y = b || 0
  }, THREE.Vector2.prototype = {
    constructor: THREE.Vector2,
    set: function(a, b) {
      return this.x = a, this.y = b, this
    },
    copy: function(a) {
      return this.x = a.x, this.y = a.y, this
    },
    clone: function() {
      return new THREE.Vector2(this.x, this.y)
    },
    add: function(a, b) {
      return this.x = a.x + b.x, this.y = a.y + b.y, this
    },
    addSelf: function(a) {
      return this.x += a.x, this.y += a.y, this
    },
    sub: function(a, b) {
      return this.x = a.x - b.x, this.y = a.y - b.y, this
    },
    subSelf: function(a) {
      return this.x -= a.x, this.y -= a.y, this
    },
    multiplyScalar: function(a) {
      return this.x *= a, this.y *= a, this
    },
    divideScalar: function(a) {
      return a ? (this.x /= a, this.y /= a) : this.set(0, 0), this
    },
    negate: function() {
      return this.multiplyScalar(-1)
    },
    dot: function(a) {
      return this.x * a.x + this.y * a.y
    },
    lengthSq: function() {
      return this.x * this.x + this.y * this.y
    },
    length: function() {
      return Math.sqrt(this.lengthSq())
    },
    normalize: function() {
      return this.divideScalar(this.length())
    },
    distanceTo: function(a) {
      return Math.sqrt(this.distanceToSquared(a))
    },
    distanceToSquared: function(a) {
      var b = this.x - a.x,
        a = this.y - a.y;
      return b * b + a * a
    },
    setLength: function(a) {
      return this.normalize().multiplyScalar(a)
    },
    equals: function(a) {
      return a.x === this.x && a.y === this.y
    }
  }, THREE.Vector3 = function(a, b, c) {
    this.x = a || 0, this.y = b || 0, this.z = c || 0
  }, THREE.Vector3.prototype = {
    constructor: THREE.Vector3,
    set: function(a, b, c) {
      return this.x = a, this.y = b, this.z = c, this
    },
    setX: function(a) {
      return this.x = a, this
    },
    setY: function(a) {
      return this.y = a, this
    },
    setZ: function(a) {
      return this.z = a, this
    },
    copy: function(a) {
      return this.x = a.x, this.y = a.y, this.z = a.z, this
    },
    clone: function() {
      return new THREE.Vector3(this.x, this.y, this.z)
    },
    add: function(a, b) {
      return this.x = a.x + b.x, this.y = a.y + b.y, this.z = a.z + b.z, this
    },
    addSelf: function(a) {
      return this.x += a.x, this.y += a.y, this.z += a.z, this
    },
    addScalar: function(a) {
      return this.x += a, this.y += a, this.z += a, this
    },
    sub: function(a, b) {
      return this.x = a.x - b.x, this.y = a.y - b.y, this.z = a.z - b.z, this
    },
    subSelf: function(a) {
      return this.x -= a.x, this.y -= a.y, this.z -= a.z, this
    },
    multiply: function(a, b) {
      return this.x = a.x * b.x, this.y = a.y * b.y, this.z = a.z * b.z, this
    },
    multiplySelf: function(a) {
      return this.x *= a.x, this.y *= a.y, this.z *= a.z, this
    },
    multiplyScalar: function(a) {
      return this.x *= a, this.y *= a, this.z *= a, this
    },
    divideSelf: function(a) {
      return this.x /= a.x, this.y /= a.y, this.z /= a.z, this
    },
    divideScalar: function(a) {
      return a ? (this.x /= a, this.y /= a, this.z /= a) : this.z = this.y =
        this.x = 0, this
    },
    negate: function() {
      return this.multiplyScalar(-1)
    },
    dot: function(a) {
      return this.x * a.x + this.y * a.y + this.z * a.z
    },
    lengthSq: function() {
      return this.x * this.x + this.y * this.y + this.z * this.z
    },
    length: function() {
      return Math.sqrt(this.lengthSq())
    },
    lengthManhattan: function() {
      return this.x + this.y + this.z
    },
    normalize: function() {
      return this.divideScalar(this.length())
    },
    setLength: function(a) {
      return this.normalize().multiplyScalar(a)
    },
    cross: function(a, b) {
      return this.x = a.y * b.z - a.z * b.y, this.y = a.z * b.x - a.x * b.z,
        this.z = a.x * b.y - a.y * b.x, this
    },
    crossSelf: function(a) {
      var b = this.x,
        c = this.y,
        d = this.z;
      return this.x = c * a.z - d * a.y, this.y = d * a.x - b * a.z, this.z =
        b * a.y - c * a.x, this
    },
    distanceTo: function(a) {
      return Math.sqrt(this.distanceToSquared(a))
    },
    distanceToSquared: function(a) {
      return (new THREE.Vector3).sub(this, a).lengthSq()
    },
    setPositionFromMatrix: function(a) {
      this.x = a.n14, this.y = a.n24, this.z = a.n34
    },
    setRotationFromMatrix: function(a) {
      var b = Math.cos(this.y);
      this.y = Math.asin(a.n13), Math.abs(b) > 1e-5 ? (this.x = Math.atan2(-a
          .n23 / b, a.n33 / b), this.z = Math.atan2(-a.n12 / b, a.n11 / b)) :
        (this.x = 0, this.z = Math.atan2(a.n21, a.n22))
    },
    isZero: function() {
      return this.lengthSq() < 1e-4
    }
  }, THREE.Vector4 = function(a, b, c, d) {
    this.x = a || 0, this.y = b || 0, this.z = c || 0, this.w = void 0 !== d ?
      d : 1
  }, THREE.Vector4.prototype = {
    constructor: THREE.Vector4,
    set: function(a, b, c, d) {
      return this.x = a, this.y = b, this.z = c, this.w = d, this
    },
    copy: function(a) {
      this.x = a.x, this.y = a.y, this.z = a.z, this.w = void 0 !== a.w ? a.w :
        1
    },
    clone: function() {
      return new THREE.Vector4(this.x, this.y, this.z, this.w)
    },
    add: function(a, b) {
      return this.x = a.x + b.x, this.y = a.y + b.y, this.z = a.z + b.z, this
        .w = a.w + b.w, this
    },
    addSelf: function(a) {
      return this.x += a.x, this.y += a.y, this.z += a.z, this.w += a.w, this
    },
    sub: function(a, b) {
      return this.x = a.x - b.x, this.y = a.y - b.y, this.z = a.z - b.z, this
        .w = a.w - b.w, this
    },
    subSelf: function(a) {
      return this.x -= a.x, this.y -= a.y, this.z -= a.z, this.w -= a.w, this
    },
    multiplyScalar: function(a) {
      return this.x *= a, this.y *= a, this.z *= a, this.w *= a, this
    },
    divideScalar: function(a) {
      return a ? (this.x /= a, this.y /= a, this.z /= a, this.w /= a) : (this
        .z = this.y = this.x = 0, this.w = 1), this
    },
    negate: function() {
      return this.multiplyScalar(-1)
    },
    dot: function(a) {
      return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w
    },
    lengthSq: function() {
      return this.dot(this)
    },
    length: function() {
      return Math.sqrt(this.lengthSq())
    },
    normalize: function() {
      return this.divideScalar(this.length())
    },
    setLength: function(a) {
      return this.normalize().multiplyScalar(a)
    },
    lerpSelf: function(a, b) {
      return this.x += (a.x - this.x) * b, this.y += (a.y - this.y) * b, this
        .z += (a.z - this.z) * b, this.w += (a.w - this.w) * b, this
    }
  }, THREE.Ray = function(a, b) {
    function c(a, b, c) {
      return w.sub(c, a), l = w.dot(b), 0 >= l ? null : (m = x.add(a, y.copy(b)
        .multiplyScalar(l)), n = c.distanceTo(m))
    }

    function d(a, b, c, d) {
      return w.sub(d, b), x.sub(c, b), y.sub(a, b), o = w.dot(w), p = w.dot(x),
        q = w.dot(y), r = x.dot(x), s = x.dot(y), t = 1 / (o * r - p * p), u =
        (r * q - p * s) * t, v = (o * s - p * q) * t, u >= 0 && v >= 0 && 1 > u +
        v
    }
    this.origin = a || new THREE.Vector3, this.direction = b || new THREE.Vector3,
      this.intersectScene = function(a) {
        return this.intersectObjects(a.children)
      }, this.intersectObjects = function(a) {
        var b, c, d = [];
        for (b = 0, c = a.length; c > b; b++) Array.prototype.push.apply(d,
          this.intersectObject(a[b]));
        return d.sort(function(a, b) {
          return a.distance - b.distance
        }), d
      };
    var e = new THREE.Vector3,
      f = new THREE.Vector3,
      g = new THREE.Vector3,
      h = new THREE.Vector3,
      a = new THREE.Vector3,
      b = new THREE.Vector3,
      i = new THREE.Vector3,
      j = new THREE.Vector3,
      k = new THREE.Vector3;
    this.intersectObject = function(l) {
      for (var m, n = [], o = 0, p = l.children.length; p > o; o++) Array.prototype
        .push.apply(n, this.intersectObject(l.children[o]));
      if (l instanceof THREE.Particle) {
        if (o = c(this.origin, this.direction, l.matrixWorld.getPosition()),
          null === o || o > l.scale.x) return [];
        m = {
          distance: o,
          point: l.position,
          face: null,
          object: l
        }, n.push(m)
      } else if (l instanceof THREE.Mesh) {
        if (o = c(this.origin, this.direction, l.matrixWorld.getPosition()),
          null === o || o > l.geometry.boundingSphere.radius * Math.max(l.scale
            .x, Math.max(l.scale.y, l.scale.z))) return n;
        var q, r, s = l.geometry,
          t = s.vertices;
        for (l.matrixRotationWorld.extractRotation(l.matrixWorld), o = 0, p =
          s.faces.length; p > o; o++) m = s.faces[o], a.copy(this.origin), b.copy(
          this.direction), r = l.matrixWorld, i = r.multiplyVector3(i.copy(
          m.centroid)).subSelf(a), q = i.dot(b), 0 >= q || (e = r.multiplyVector3(
            e.copy(t[m.a].position)), f = r.multiplyVector3(f.copy(t[m.b].position)),
          g = r.multiplyVector3(g.copy(t[m.c].position)), m instanceof THREE
          .Face4 && (h = r.multiplyVector3(h.copy(t[m.d].position))), j = l
          .matrixRotationWorld.multiplyVector3(j.copy(m.normal)), q = b.dot(
            j), !l.doubleSided && !(l.flipSided ? q > 0 : 0 > q)) || (q = j
          .dot(i.sub(e, a)) / q, k.add(a, b.multiplyScalar(q)), m instanceof THREE
          .Face3 ? d(k, e, f, g) && (m = {
            distance: a.distanceTo(k),
            point: k.clone(),
            face: m,
            object: l
          }, n.push(m)) : m instanceof THREE.Face4 && (d(k, e, f, h) || d(k,
            f, g, h)) && (m = {
            distance: a.distanceTo(k),
            point: k.clone(),
            face: m,
            object: l
          }, n.push(m)))
      }
      return n
    };
    var l, m, n, o, p, q, r, s, t, u, v, w = new THREE.Vector3,
      x = new THREE.Vector3,
      y = new THREE.Vector3
  }, THREE.Rectangle = function() {
    function a() {
      f = d - b, g = e - c
    }
    var b, c, d, e, f, g, h = !0;
    this.getX = function() {
      return b
    }, this.getY = function() {
      return c
    }, this.getWidth = function() {
      return f
    }, this.getHeight = function() {
      return g
    }, this.getLeft = function() {
      return b
    }, this.getTop = function() {
      return c
    }, this.getRight = function() {
      return d
    }, this.getBottom = function() {
      return e
    }, this.set = function(f, g, i, j) {
      h = !1, b = f, c = g, d = i, e = j, a()
    }, this.addPoint = function(f, g) {
      h ? (h = !1, b = f, c = g, d = f, e = g) : (b = f > b ? b : f, c = g >
        c ? c : g, d = d > f ? d : f, e = e > g ? e : g), a()
    }, this.add3Points = function(f, g, i, j, k, l) {
      h ? (h = !1, b = i > f ? k > f ? f : k : k > i ? i : k, c = j > g ? l >
        g ? g : l : l > j ? j : l, d = f > i ? f > k ? f : k : i > k ? i :
        k, e = g > j ? g > l ? g : l : j > l ? j : l) : (b = i > f ? k > f ?
        b > f ? f : b : b > k ? k : b : k > i ? b > i ? i : b : b > k ? k :
        b, c = j > g ? l > g ? c > g ? g : c : c > l ? l : c : l > j ? c >
        j ? j : c : c > l ? l : c, d = f > i ? f > k ? f > d ? f : d : k >
        d ? k : d : i > k ? i > d ? i : d : k > d ? k : d, e = g > j ? g >
        l ? g > e ? g : e : l > e ? l : e : j > l ? j > e ? j : e : l > e ?
        l : e), a()
    }, this.addRectangle = function(f) {
      h ? (h = !1, b = f.getLeft(), c = f.getTop(), d = f.getRight(), e = f.getBottom()) :
        (b = b < f.getLeft() ? b : f.getLeft(), c = c < f.getTop() ? c : f.getTop(),
          d = d > f.getRight() ? d : f.getRight(), e = e > f.getBottom() ? e :
          f.getBottom()), a()
    }, this.inflate = function(f) {
      b -= f, c -= f, d += f, e += f, a()
    }, this.minSelf = function(f) {
      b = b > f.getLeft() ? b : f.getLeft(), c = c > f.getTop() ? c : f.getTop(),
        d = d < f.getRight() ? d : f.getRight(), e = e < f.getBottom() ? e :
        f.getBottom(), a()
    }, this.intersects = function(a) {
      return Math.min(d, a.getRight()) - Math.max(b, a.getLeft()) >= 0 &&
        Math.min(e, a.getBottom()) - Math.max(c, a.getTop()) >= 0
    }, this.empty = function() {
      h = !0, e = d = c = b = 0, a()
    }, this.isEmpty = function() {
      return h
    }
  }, THREE.Math = {
    clamp: function(a, b, c) {
      return b > a ? b : a > c ? c : a
    },
    clampBottom: function(a, b) {
      return b > a ? b : a
    },
    mapLinear: function(a, b, c, d, e) {
      return d + (a - b) * (e - d) / (c - b)
    },
    random16: function() {
      return (65280 * Math.random() + 255 * Math.random()) / 65535
    }
  }, THREE.Matrix3 = function() {
    this.m = []
  }, THREE.Matrix3.prototype = {
    constructor: THREE.Matrix3,
    transpose: function() {
      var a, b = this.m;
      return a = b[1], b[1] = b[3], b[3] = a, a = b[2], b[2] = b[6], b[6] = a,
        a = b[5], b[5] = b[7], b[7] = a, this
    },
    transposeIntoArray: function(a) {
      var b = this.m;
      return a[0] = b[0], a[1] = b[3], a[2] = b[6], a[3] = b[1], a[4] = b[4],
        a[5] = b[7], a[6] = b[2], a[7] = b[5], a[8] = b[8], this
    }
  }, THREE.Matrix4 = function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    this.set(void 0 !== a ? a : 1, b || 0, c || 0, d || 0, e || 0, void 0 !== f ?
        f : 1, g || 0, h || 0, i || 0, j || 0, void 0 !== k ? k : 1, l || 0, m ||
        0, n || 0, o || 0, void 0 !== p ? p : 1), this.flat = Array(16), this.m33 =
      new THREE.Matrix3
  }, THREE.Matrix4.prototype = {
    constructor: THREE.Matrix4,
    set: function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
      return this.n11 = a, this.n12 = b, this.n13 = c, this.n14 = d, this.n21 =
        e, this.n22 = f, this.n23 = g, this.n24 = h, this.n31 = i, this.n32 =
        j, this.n33 = k, this.n34 = l, this.n41 = m, this.n42 = n, this.n43 =
        o, this.n44 = p, this
    },
    identity: function() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    copy: function(a) {
      return this.set(a.n11, a.n12, a.n13, a.n14, a.n21, a.n22, a.n23, a.n24,
        a.n31, a.n32, a.n33, a.n34, a.n41, a.n42, a.n43, a.n44), this
    },
    lookAt: function(a, b, c) {
      var d = THREE.Matrix4.__v1,
        e = THREE.Matrix4.__v2,
        f = THREE.Matrix4.__v3;
      return f.sub(a, b).normalize(), 0 === f.length() && (f.z = 1), d.cross(
          c, f).normalize(), 0 === d.length() && (f.x += 1e-4, d.cross(c, f).normalize()),
        e.cross(f, d).normalize(), this.n11 = d.x, this.n12 = e.x, this.n13 =
        f.x, this.n21 = d.y, this.n22 = e.y, this.n23 = f.y, this.n31 = d.z,
        this.n32 = e.z, this.n33 = f.z, this
    },
    multiply: function(a, b) {
      var c = a.n11,
        d = a.n12,
        e = a.n13,
        f = a.n14,
        g = a.n21,
        h = a.n22,
        i = a.n23,
        j = a.n24,
        k = a.n31,
        l = a.n32,
        m = a.n33,
        n = a.n34,
        o = a.n41,
        p = a.n42,
        q = a.n43,
        r = a.n44,
        s = b.n11,
        t = b.n12,
        u = b.n13,
        v = b.n14,
        w = b.n21,
        x = b.n22,
        y = b.n23,
        z = b.n24,
        A = b.n31,
        B = b.n32,
        C = b.n33,
        D = b.n34,
        E = b.n41,
        F = b.n42,
        G = b.n43,
        H = b.n44;
      return this.n11 = c * s + d * w + e * A + f * E, this.n12 = c * t + d *
        x + e * B + f * F, this.n13 = c * u + d * y + e * C + f * G, this.n14 =
        c * v + d * z + e * D + f * H, this.n21 = g * s + h * w + i * A + j *
        E, this.n22 = g * t + h * x + i * B + j * F, this.n23 = g * u + h * y +
        i * C + j * G, this.n24 = g * v + h * z + i * D + j * H, this.n31 = k *
        s + l * w + m * A + n * E, this.n32 = k * t + l * x + m * B + n * F,
        this.n33 = k * u + l * y + m * C + n * G, this.n34 = k * v + l * z +
        m * D + n * H, this.n41 = o * s + p * w + q * A + r * E, this.n42 = o *
        t + p * x + q * B + r * F, this.n43 = o * u + p * y + q * C + r * G,
        this.n44 = o * v + p * z + q * D + r * H, this
    },
    multiplySelf: function(a) {
      return this.multiply(this, a)
    },
    multiplyToArray: function(a, b, c) {
      return this.multiply(a, b), c[0] = this.n11, c[1] = this.n21, c[2] =
        this.n31, c[3] = this.n41, c[4] = this.n12, c[5] = this.n22, c[6] =
        this.n32, c[7] = this.n42, c[8] = this.n13, c[9] = this.n23, c[10] =
        this.n33, c[11] = this.n43, c[12] = this.n14, c[13] = this.n24, c[14] =
        this.n34, c[15] = this.n44, this
    },
    multiplyScalar: function(a) {
      return this.n11 *= a, this.n12 *= a, this.n13 *= a, this.n14 *= a, this
        .n21 *= a, this.n22 *= a, this.n23 *= a, this.n24 *= a, this.n31 *= a,
        this.n32 *= a, this.n33 *= a, this.n34 *= a, this.n41 *= a, this.n42 *=
        a, this.n43 *= a, this.n44 *= a, this
    },
    multiplyVector3: function(a) {
      var b = a.x,
        c = a.y,
        d = a.z,
        e = 1 / (this.n41 * b + this.n42 * c + this.n43 * d + this.n44);
      return a.x = (this.n11 * b + this.n12 * c + this.n13 * d + this.n14) *
        e, a.y = (this.n21 * b + this.n22 * c + this.n23 * d + this.n24) * e,
        a.z = (this.n31 * b + this.n32 * c + this.n33 * d + this.n34) * e, a
    },
    multiplyVector4: function(a) {
      var b = a.x,
        c = a.y,
        d = a.z,
        e = a.w;
      return a.x = this.n11 * b + this.n12 * c + this.n13 * d + this.n14 * e,
        a.y = this.n21 * b + this.n22 * c + this.n23 * d + this.n24 * e, a.z =
        this.n31 * b + this.n32 * c + this.n33 * d + this.n34 * e, a.w = this
        .n41 * b + this.n42 * c + this.n43 * d + this.n44 * e, a
    },
    rotateAxis: function(a) {
      var b = a.x,
        c = a.y,
        d = a.z;
      return a.x = b * this.n11 + c * this.n12 + d * this.n13, a.y = b * this
        .n21 + c * this.n22 + d * this.n23, a.z = b * this.n31 + c * this.n32 +
        d * this.n33, a.normalize(), a
    },
    crossVector: function(a) {
      var b = new THREE.Vector4;
      return b.x = this.n11 * a.x + this.n12 * a.y + this.n13 * a.z + this.n14 *
        a.w, b.y = this.n21 * a.x + this.n22 * a.y + this.n23 * a.z + this.n24 *
        a.w, b.z = this.n31 * a.x + this.n32 * a.y + this.n33 * a.z + this.n34 *
        a.w, b.w = a.w ? this.n41 * a.x + this.n42 * a.y + this.n43 * a.z +
        this.n44 * a.w : 1, b
    },
    determinant: function() {
      var a = this.n11,
        b = this.n12,
        c = this.n13,
        d = this.n14,
        e = this.n21,
        f = this.n22,
        g = this.n23,
        h = this.n24,
        i = this.n31,
        j = this.n32,
        k = this.n33,
        l = this.n34,
        m = this.n41,
        n = this.n42,
        o = this.n43,
        p = this.n44;
      return d * g * j * m - c * h * j * m - d * f * k * m + b * h * k * m +
        c * f * l * m - b * g * l * m - d * g * i * n + c * h * i * n + d * e *
        k * n - a * h * k * n - c * e * l * n + a * g * l * n + d * f * i * o -
        b * h * i * o - d * e * j * o + a * h * j * o + b * e * l * o - a * f *
        l * o - c * f * i * p + b * g * i * p + c * e * j * p - a * g * j * p -
        b * e * k * p + a * f * k * p
    },
    transpose: function() {
      var a;
      return a = this.n21, this.n21 = this.n12, this.n12 = a, a = this.n31,
        this.n31 = this.n13, this.n13 = a, a = this.n32, this.n32 = this.n23,
        this.n23 = a, a = this.n41, this.n41 = this.n14, this.n14 = a, a =
        this.n42, this.n42 = this.n24, this.n24 = a, a = this.n43, this.n43 =
        this.n34, this.n43 = a, this
    },
    clone: function() {
      var a = new THREE.Matrix4;
      return a.n11 = this.n11, a.n12 = this.n12, a.n13 = this.n13, a.n14 =
        this.n14, a.n21 = this.n21, a.n22 = this.n22, a.n23 = this.n23, a.n24 =
        this.n24, a.n31 = this.n31, a.n32 = this.n32, a.n33 = this.n33, a.n34 =
        this.n34, a.n41 = this.n41, a.n42 = this.n42, a.n43 = this.n43, a.n44 =
        this.n44, a
    },
    flatten: function() {
      return this.flat[0] = this.n11, this.flat[1] = this.n21, this.flat[2] =
        this.n31, this.flat[3] = this.n41, this.flat[4] = this.n12, this.flat[
          5] = this.n22, this.flat[6] = this.n32, this.flat[7] = this.n42,
        this.flat[8] = this.n13, this.flat[9] = this.n23, this.flat[10] =
        this.n33, this.flat[11] = this.n43, this.flat[12] = this.n14, this.flat[
          13] = this.n24, this.flat[14] = this.n34, this.flat[15] = this.n44,
        this.flat
    },
    flattenToArray: function(a) {
      return a[0] = this.n11, a[1] = this.n21, a[2] = this.n31, a[3] = this.n41,
        a[4] = this.n12, a[5] = this.n22, a[6] = this.n32, a[7] = this.n42, a[
          8] = this.n13, a[9] = this.n23, a[10] = this.n33, a[11] = this.n43,
        a[12] = this.n14, a[13] = this.n24, a[14] = this.n34, a[15] = this.n44,
        a
    },
    flattenToArrayOffset: function(a, b) {
      return a[b] = this.n11, a[b + 1] = this.n21, a[b + 2] = this.n31, a[b +
          3] = this.n41, a[b + 4] = this.n12, a[b + 5] = this.n22, a[b + 6] =
        this.n32, a[b + 7] = this.n42, a[b + 8] = this.n13, a[b + 9] = this.n23,
        a[b + 10] = this.n33, a[b + 11] = this.n43, a[b + 12] = this.n14, a[b +
          13] = this.n24, a[b + 14] = this.n34, a[b + 15] = this.n44, a
    },
    setTranslation: function(a, b, c) {
      return this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1), this
    },
    setScale: function(a, b, c) {
      return this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1), this
    },
    setRotationX: function(a) {
      var b = Math.cos(a),
        a = Math.sin(a);
      return this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1), this
    },
    setRotationY: function(a) {
      var b = Math.cos(a),
        a = Math.sin(a);
      return this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1), this
    },
    setRotationZ: function(a) {
      var b = Math.cos(a),
        a = Math.sin(a);
      return this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    setRotationAxis: function(a, b) {
      var c = Math.cos(b),
        d = Math.sin(b),
        e = 1 - c,
        f = a.x,
        g = a.y,
        h = a.z,
        i = e * f,
        j = e * g;
      return this.set(i * f + c, i * g - d * h, i * h + d * g, 0, i * g + d *
        h, j * g + c, j * h - d * f, 0, i * h - d * g, j * h + d * f, e * h *
        h + c, 0, 0, 0, 0, 1), this
    },
    setPosition: function(a) {
      return this.n14 = a.x, this.n24 = a.y, this.n34 = a.z, this
    },
    getPosition: function() {
      return THREE.Matrix4.__v1.set(this.n14, this.n24, this.n34)
    },
    getColumnX: function() {
      return THREE.Matrix4.__v1.set(this.n11, this.n21, this.n31)
    },
    getColumnY: function() {
      return THREE.Matrix4.__v1.set(this.n12, this.n22, this.n32)
    },
    getColumnZ: function() {
      return THREE.Matrix4.__v1.set(this.n13, this.n23, this.n33)
    },
    getInverse: function(a) {
      var b = a.n11,
        c = a.n12,
        d = a.n13,
        e = a.n14,
        f = a.n21,
        g = a.n22,
        h = a.n23,
        i = a.n24,
        j = a.n31,
        k = a.n32,
        l = a.n33,
        m = a.n34,
        n = a.n41,
        o = a.n42,
        p = a.n43,
        q = a.n44;
      return this.n11 = h * m * o - i * l * o + i * k * p - g * m * p - h * k *
        q + g * l * q, this.n12 = e * l * o - d * m * o - e * k * p + c * m *
        p + d * k * q - c * l * q, this.n13 = d * i * o - e * h * o + e * g *
        p - c * i * p - d * g * q + c * h * q, this.n14 = e * h * k - d * i *
        k - e * g * l + c * i * l + d * g * m - c * h * m, this.n21 = i * l *
        n - h * m * n - i * j * p + f * m * p + h * j * q - f * l * q, this.n22 =
        d * m * n - e * l * n + e * j * p - b * m * p - d * j * q + b * l * q,
        this.n23 = e * h * n - d * i * n - e * f * p + b * i * p + d * f * q -
        b * h * q, this.n24 = d * i * j - e * h * j + e * f * l - b * i * l -
        d * f * m + b * h * m, this.n31 = g * m * n - i * k * n + i * j * o -
        f * m * o - g * j * q + f * k * q, this.n32 = e * k * n - c * m * n -
        e * j * o + b * m * o + c * j * q - b * k * q, this.n33 = d * i * n -
        e * g * n + e * f * o - b * i * o - c * f * q + b * g * q, this.n34 =
        e * g * j - c * i * j - e * f * k + b * i * k + c * f * m - b * g * m,
        this.n41 = h * k * n - g * l * n - h * j * o + f * l * o + g * j * p -
        f * k * p, this.n42 = c * l * n - d * k * n + d * j * o - b * l * o -
        c * j * p + b * k * p, this.n43 = d * g * n - c * h * n - d * f * o +
        b * h * o + c * f * p - b * g * p, this.n44 = c * h * j - d * g * j +
        d * f * k - b * h * k - c * f * l + b * g * l, this.multiplyScalar(1 /
          a.determinant()), this
    },
    setRotationFromEuler: function(a, b) {
      var c = a.x,
        d = a.y,
        e = a.z,
        f = Math.cos(c),
        c = Math.sin(c),
        g = Math.cos(d),
        d = Math.sin(d),
        h = Math.cos(e),
        e = Math.sin(e);
      switch (b) {
        case "YXZ":
          var i = g * h,
            j = g * e,
            k = d * h,
            l = d * e;
          this.n11 = i + l * c, this.n12 = k * c - j, this.n13 = f * d, this.n21 =
            f * e, this.n22 = f * h, this.n23 = -c, this.n31 = j * c - k,
            this.n32 = l + i * c, this.n33 = f * g;
          break;
        case "ZXY":
          i = g * h, j = g * e, k = d * h, l = d * e, this.n11 = i - l * c,
            this.n12 = -f * e, this.n13 = k + j * c, this.n21 = j + k * c,
            this.n22 = f * h, this.n23 = l - i * c, this.n31 = -f * d, this.n32 =
            c, this.n33 = f * g;
          break;
        case "ZYX":
          i = f * h, j = f * e, k = c * h, l = c * e, this.n11 = g * h, this.n12 =
            k * d - j, this.n13 = i * d + l, this.n21 = g * e, this.n22 = l *
            d + i, this.n23 = j * d - k, this.n31 = -d, this.n32 = c * g,
            this.n33 = f * g;
          break;
        case "YZX":
          i = f * g, j = f * d, k = c * g, l = c * d, this.n11 = g * h, this.n12 =
            l - i * e, this.n13 = k * e + j, this.n21 = e, this.n22 = f * h,
            this.n23 = -c * h, this.n31 = -d * h, this.n32 = j * e + k, this.n33 =
            i - l * e;
          break;
        case "XZY":
          i = f * g, j = f * d, k = c * g, l = c * d, this.n11 = g * h, this.n12 = -
            e, this.n13 = d * h, this.n21 = i * e + l, this.n22 = f * h, this
            .n23 = j * e - k, this.n31 = k * e - j, this.n32 = c * h, this.n33 =
            l * e + i;
          break;
        default:
          i = f * h, j = f * e, k = c * h, l = c * e, this.n11 = g * h, this.n12 = -
            g * e, this.n13 = d, this.n21 = j + k * d, this.n22 = i - l * d,
            this.n23 = -c * g, this.n31 = l - i * d, this.n32 = k + j * d,
            this.n33 = f * g
      }
      return this
    },
    setRotationFromQuaternion: function(a) {
      var b = a.x,
        c = a.y,
        d = a.z,
        e = a.w,
        f = b + b,
        g = c + c,
        h = d + d,
        a = b * f,
        i = b * g;
      b *= h;
      var j = c * g;
      return c *= h, d *= h, f *= e, g *= e, e *= h, this.n11 = 1 - (j + d),
        this.n12 = i - e, this.n13 = b + g, this.n21 = i + e, this.n22 = 1 -
        (a + d), this.n23 = c - f, this.n31 = b - g, this.n32 = c + f, this.n33 =
        1 - (a + j), this
    },
    scale: function(a) {
      var b = a.x,
        c = a.y,
        a = a.z;
      return this.n11 *= b, this.n12 *= c, this.n13 *= a, this.n21 *= b, this
        .n22 *= c, this.n23 *= a, this.n31 *= b, this.n32 *= c, this.n33 *= a,
        this.n41 *= b, this.n42 *= c, this.n43 *= a, this
    },
    compose: function(a, b, c) {
      var d = THREE.Matrix4.__m1,
        e = THREE.Matrix4.__m2;
      return d.identity(), d.setRotationFromQuaternion(b), e.setScale(c.x, c.y,
          c.z), this.multiply(d, e), this.n14 = a.x, this.n24 = a.y, this.n34 =
        a.z, this
    },
    decompose: function(a, b, c) {
      var d = THREE.Matrix4.__v1,
        e = THREE.Matrix4.__v2,
        f = THREE.Matrix4.__v3;
      return d.set(this.n11, this.n21, this.n31), e.set(this.n12, this.n22,
          this.n32), f.set(this.n13, this.n23, this.n33), a = a instanceof THREE
        .Vector3 ? a : new THREE.Vector3, b = b instanceof THREE.Quaternion ?
        b : new THREE.Quaternion, c = c instanceof THREE.Vector3 ? c : new THREE
        .Vector3, c.x = d.length(), c.y = e.length(), c.z = f.length(), a.x =
        this.n14, a.y = this.n24, a.z = this.n34, d = THREE.Matrix4.__m1, d.copy(
          this), d.n11 /= c.x, d.n21 /= c.x, d.n31 /= c.x, d.n12 /= c.y, d.n22 /=
        c.y, d.n32 /= c.y, d.n13 /= c.z, d.n23 /= c.z, d.n33 /= c.z, b.setFromRotationMatrix(
          d), [a, b, c]
    },
    extractPosition: function(a) {
      return this.n14 = a.n14, this.n24 = a.n24, this.n34 = a.n34, this
    },
    extractRotation: function(a) {
      var b = THREE.Matrix4.__v1,
        c = 1 / b.set(a.n11, a.n21, a.n31).length(),
        d = 1 / b.set(a.n12, a.n22, a.n32).length(),
        b = 1 / b.set(a.n13, a.n23, a.n33).length();
      return this.n11 = a.n11 * c, this.n21 = a.n21 * c, this.n31 = a.n31 * c,
        this.n12 = a.n12 * d, this.n22 = a.n22 * d, this.n32 = a.n32 * d,
        this.n13 = a.n13 * b, this.n23 = a.n23 * b, this.n33 = a.n33 * b,
        this
    }
  }, THREE.Matrix4.makeInvert3x3 = function(a) {
    var b = a.m33,
      c = b.m,
      d = a.n33 * a.n22 - a.n32 * a.n23,
      e = -a.n33 * a.n21 + a.n31 * a.n23,
      f = a.n32 * a.n21 - a.n31 * a.n22,
      g = -a.n33 * a.n12 + a.n32 * a.n13,
      h = a.n33 * a.n11 - a.n31 * a.n13,
      i = -a.n32 * a.n11 + a.n31 * a.n12,
      j = a.n23 * a.n12 - a.n22 * a.n13,
      k = -a.n23 * a.n11 + a.n21 * a.n13,
      l = a.n22 * a.n11 - a.n21 * a.n12,
      a = a.n11 * d + a.n21 * g + a.n31 * j;
    return 0 === a && console.error(
        "THREE.Matrix4.makeInvert3x3: Matrix not invertible."), a = 1 / a, c[0] =
      a * d, c[1] = a * e, c[2] = a * f, c[3] = a * g, c[4] = a * h, c[5] = a *
      i, c[6] = a * j, c[7] = a * k, c[8] = a * l, b
  }, THREE.Matrix4.makeFrustum = function(a, b, c, d, e, f) {
    var g;
    return g = new THREE.Matrix4, g.n11 = 2 * e / (b - a), g.n12 = 0, g.n13 = (
        b + a) / (b - a), g.n14 = 0, g.n21 = 0, g.n22 = 2 * e / (d - c), g.n23 =
      (d + c) / (d - c), g.n24 = 0, g.n31 = 0, g.n32 = 0, g.n33 = -(f + e) / (f -
        e), g.n34 = -2 * f * e / (f - e), g.n41 = 0, g.n42 = 0, g.n43 = -1, g.n44 =
      0, g
  }, THREE.Matrix4.makePerspective = function(a, b, c, d) {
    var e, a = c * Math.tan(a * Math.PI / 360);
    return e = -a, THREE.Matrix4.makeFrustum(e * b, a * b, e, a, c, d)
  }, THREE.Matrix4.makeOrtho = function(a, b, c, d, e, f) {
    var g, h, i, j;
    return g = new THREE.Matrix4, h = b - a, i = c - d, j = f - e, g.n11 = 2 /
      h, g.n12 = 0, g.n13 = 0, g.n14 = -((b + a) / h), g.n21 = 0, g.n22 = 2 / i,
      g.n23 = 0, g.n24 = -((c + d) / i), g.n31 = 0, g.n32 = 0, g.n33 = -2 / j,
      g.n34 = -((f + e) / j), g.n41 = 0, g.n42 = 0, g.n43 = 0, g.n44 = 1, g
  }, THREE.Matrix4.__v1 = new THREE.Vector3, THREE.Matrix4.__v2 = new THREE.Vector3,
  THREE.Matrix4.__v3 = new THREE.Vector3, THREE.Matrix4.__m1 = new THREE.Matrix4,
  THREE.Matrix4.__m2 = new THREE.Matrix4, THREE.Object3D = function() {
    this.name = "", this.id = THREE.Object3DCount++, this.parent = void 0, this
      .children = [], this.up = new THREE.Vector3(0, 1, 0), this.position = new THREE
      .Vector3, this.rotation = new THREE.Vector3, this.eulerOrder = "XYZ",
      this.scale = new THREE.Vector3(1, 1, 1), this.flipSided = this.doubleSided =
      this.dynamic = !1, this.renderDepth = null, this.rotationAutoUpdate = !0,
      this.matrix = new THREE.Matrix4, this.matrixWorld = new THREE.Matrix4,
      this.matrixRotationWorld = new THREE.Matrix4, this.matrixWorldNeedsUpdate =
      this.matrixAutoUpdate = !0, this.quaternion = new THREE.Quaternion, this.useQuaternion = !
      1, this.boundRadius = 0, this.boundRadiusScale = 1, this.visible = !0,
      this.receiveShadow = this.castShadow = !1, this.frustumCulled = !0, this._vector =
      new THREE.Vector3
  }, THREE.Object3D.prototype = {
    constructor: THREE.Object3D,
    translate: function(a, b) {
      this.matrix.rotateAxis(b), this.position.addSelf(b.multiplyScalar(a))
    },
    translateX: function(a) {
      this.translate(a, this._vector.set(1, 0, 0))
    },
    translateY: function(a) {
      this.translate(a, this._vector.set(0, 1, 0))
    },
    translateZ: function(a) {
      this.translate(a, this._vector.set(0, 0, 1))
    },
    lookAt: function(a) {
      this.matrix.lookAt(a, this.position, this.up), this.rotationAutoUpdate &&
        this.rotation.setRotationFromMatrix(this.matrix)
    },
    add: function(a) {
      if (-1 === this.children.indexOf(a)) {
        void 0 !== a.parent && a.parent.remove(a), a.parent = this, this.children
          .push(a);
        for (var b = this; void 0 !== b.parent;) b = b.parent;
        void 0 !== b && b instanceof THREE.Scene && b.addObject(a)
      }
    },
    remove: function(a) {
      var b = this.children.indexOf(a);
      if (-1 !== b) {
        for (a.parent = void 0, this.children.splice(b, 1), b = this; void 0 !==
          b.parent;) b = b.parent;
        void 0 !== b && b instanceof THREE.Scene && b.removeObject(a)
      }
    },
    getChildByName: function(a, b) {
      var c, d, e;
      for (c = 0, d = this.children.length; d > c; c++) {
        if (e = this.children[c], e.name === a) return e;
        if (b && (e = e.getChildByName(a, b), void 0 !== e)) return e
      }
    },
    updateMatrix: function() {
      this.matrix.setPosition(this.position), this.useQuaternion ? this.matrix
        .setRotationFromQuaternion(this.quaternion) : this.matrix.setRotationFromEuler(
          this.rotation, this.eulerOrder), (1 !== this.scale.x || 1 !== this.scale
          .y || 1 !== this.scale.z) && (this.matrix.scale(this.scale), this.boundRadiusScale =
          Math.max(this.scale.x, Math.max(this.scale.y, this.scale.z))), this
        .matrixWorldNeedsUpdate = !0
    },
    updateMatrixWorld: function(a) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate ||
        a) && (this.parent ? this.matrixWorld.multiply(this.parent.matrixWorld,
          this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !
        1, a = !0);
      for (var b = 0, c = this.children.length; c > b; b++) this.children[b].updateMatrixWorld(
        a)
    }
  }, THREE.Object3DCount = 0, THREE.Projector = function() {
    function a() {
      var a = p[f] = p[f] || new THREE.RenderableObject;
      return f++, a
    }

    function b() {
      var a = q[h] = q[h] || new THREE.RenderableVertex;
      return h++, a
    }

    function c(a, b) {
      return b.z - a.z
    }

    function d(a, b) {
      var c = 0,
        d = 1,
        e = a.z + a.w,
        f = b.z + b.w,
        g = -a.z + a.w,
        h = -b.z + b.w;
      return e >= 0 && f >= 0 && g >= 0 && h >= 0 ? !0 : 0 > e && 0 > f || 0 >
        g && 0 > h ? !1 : (0 > e ? c = Math.max(c, e / (e - f)) : 0 > f && (d =
            Math.min(d, e / (e - f))), 0 > g ? c = Math.max(c, g / (g - h)) : 0 >
          h && (d = Math.min(d, g / (g - h))), c > d ? !1 : (a.lerpSelf(b, c),
            b.lerpSelf(a, 1 - d), !0))
    }
    var e, f, g, h, i, j, k, l, m, n, o, p = [],
      q = [],
      r = [],
      s = [],
      t = [],
      u = [],
      v = {
        objects: [],
        sprites: [],
        lights: [],
        elements: []
      },
      w = new THREE.Vector3,
      x = new THREE.Vector4,
      y = new THREE.Matrix4,
      z = new THREE.Matrix4,
      A = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4,
        new THREE.Vector4, new THREE.Vector4
      ],
      B = new THREE.Vector4,
      C = new THREE.Vector4;
    this.computeFrustum = function(a) {
      for (A[0].set(a.n41 - a.n11, a.n42 - a.n12, a.n43 - a.n13, a.n44 - a.n14),
        A[1].set(a.n41 + a.n11, a.n42 + a.n12, a.n43 + a.n13, a.n44 + a.n14),
        A[2].set(a.n41 + a.n21, a.n42 + a.n22, a.n43 + a.n23, a.n44 + a.n24),
        A[3].set(a.n41 - a.n21, a.n42 - a.n22, a.n43 - a.n23, a.n44 - a.n24),
        A[4].set(a.n41 - a.n31, a.n42 - a.n32, a.n43 - a.n33, a.n44 - a.n34),
        A[5].set(a.n41 + a.n31, a.n42 + a.n32, a.n43 + a.n33, a.n44 + a.n34),
        a = 0; 6 > a; a++) {
        var b = A[a];
        b.divideScalar(Math.sqrt(b.x * b.x + b.y * b.y + b.z * b.z))
      }
    }, this.projectVector = function(a, b) {
      return b.matrixWorldInverse.getInverse(b.matrixWorld), y.multiply(b.projectionMatrix,
        b.matrixWorldInverse), y.multiplyVector3(a), a
    }, this.unprojectVector = function(a, b) {
      return b.projectionMatrixInverse.getInverse(b.projectionMatrix), y.multiply(
        b.matrixWorld, b.projectionMatrixInverse), y.multiplyVector3(a), a
    }, this.pickingRay = function(a, b) {
      var c;
      return a.z = -1, c = new THREE.Vector3(a.x, a.y, 1), this.unprojectVector(
          a, b), this.unprojectVector(c, b), c.subSelf(a).normalize(), new THREE
        .Ray(a, c)
    }, this.projectGraph = function(b, d) {
      f = 0, v.objects.length = 0, v.sprites.length = 0, v.lights.length = 0;
      var g = function(b) {
        if (b.visible !== !1) {
          var c;
          if ((c = b instanceof THREE.Mesh || b instanceof THREE.Line) && !
            (c = b.frustumCulled === !1)) a: {
            for (var d = b.matrixWorld, f = -b.geometry.boundingSphere.radius *
                Math.max(b.scale.x, Math.max(b.scale.y, b.scale.z)), h =
                0; 6 > h; h++)
              if (c = A[h].x * d.n14 + A[h].y * d.n24 + A[h].z * d.n34 +
                A[h].w, f >= c) {
                c = !1;
                break a
              }
            c = !0
          }
          for (c ? (y.multiplyVector3(w.copy(b.position)), e = a(), e.object =
              b, e.z = w.z, v.objects.push(e)) : b instanceof THREE.Sprite ||
            b instanceof THREE.Particle ? (y.multiplyVector3(w.copy(b.position)),
              e = a(), e.object = b, e.z = w.z, v.sprites.push(e)) : b instanceof THREE
            .Light && v.lights.push(b), c = 0, d = b.children.length; d > c; c++
          ) g(b.children[c])
        }
      };
      return g(b), d && v.objects.sort(c), v
    }, this.projectScene = function(a, e, f) {
      var p, w, A, D, E, F, G, H, I, J, K, L, M, N, O, P, Q = e.near,
        R = e.far;
      for (o = m = k = j = 0, v.elements.length = 0, void 0 === e.parent && (
          console.warn(
            "DEPRECATED: Camera hasn't been added to a Scene. Adding it..."),
          a.add(e)), a.updateMatrixWorld(), e.matrixWorldInverse.getInverse(e
          .matrixWorld), y.multiply(e.projectionMatrix, e.matrixWorldInverse),
        this.computeFrustum(y), v = this.projectGraph(a, !1), a = 0, p = v.objects
        .length; p > a; a++)
        if (I = v.objects[a].object, J = I.matrixWorld, L = I.material, h = 0,
          I instanceof THREE.Mesh) {
          for (K = I.geometry, M = I.geometry.materials, D = K.vertices, N =
            K.faces, O = K.faceVertexUvs, K = I.matrixRotationWorld.extractRotation(
              J), w = 0, A = D.length; A > w; w++) g = b(), g.positionWorld.copy(
              D[w].position), J.multiplyVector3(g.positionWorld), g.positionScreen
            .copy(g.positionWorld), y.multiplyVector4(g.positionScreen), g.positionScreen
            .x /= g.positionScreen.w, g.positionScreen.y /= g.positionScreen.w,
            g.visible = g.positionScreen.z > Q && g.positionScreen.z < R;
          for (D = 0, w = N.length; w > D; D++) {
            if (A = N[D], A instanceof THREE.Face3) {
              if (E = q[A.a], F = q[A.b], G = q[A.c], !(E.visible && F.visible &&
                  G.visible) || !I.doubleSided && I.flipSided == (G.positionScreen
                  .x - E.positionScreen.x) * (F.positionScreen.y - E.positionScreen
                  .y) - (G.positionScreen.y - E.positionScreen.y) * (F.positionScreen
                  .x - E.positionScreen.x) < 0) continue;
              H = r[j] = r[j] || new THREE.RenderableFace3, j++, i = H, i.v1.copy(
                E), i.v2.copy(F), i.v3.copy(G)
            } else if (A instanceof THREE.Face4) {
              if (E = q[A.a], F = q[A.b], G = q[A.c], H = q[A.d], !(E.visible &&
                  F.visible && G.visible && H.visible) || !I.doubleSided && I
                .flipSided == ((H.positionScreen.x - E.positionScreen.x) * (F
                  .positionScreen.y - E.positionScreen.y) - (H.positionScreen
                  .y - E.positionScreen.y) * (F.positionScreen.x - E.positionScreen
                  .x) < 0 || (F.positionScreen.x - G.positionScreen.x) * (H
                  .positionScreen.y - G.positionScreen.y) - (F.positionScreen
                  .y - G.positionScreen.y) * (H.positionScreen.x - G.positionScreen
                  .x) < 0)) continue;
              P = s[k] = s[k] || new THREE.RenderableFace4, k++, i = P, i.v1.copy(
                E), i.v2.copy(F), i.v3.copy(G), i.v4.copy(H)
            }
            for (i.normalWorld.copy(A.normal), K.multiplyVector3(i.normalWorld),
              i.centroidWorld.copy(A.centroid), J.multiplyVector3(i.centroidWorld),
              i.centroidScreen.copy(i.centroidWorld), y.multiplyVector3(i.centroidScreen),
              G = A.vertexNormals, E = 0, F = G.length; F > E; E++) H = i.vertexNormalsWorld[
              E], H.copy(G[E]), K.multiplyVector3(H);
            for (E = 0, F = O.length; F > E; E++)
              if (P = O[E][D])
                for (G = 0, H = P.length; H > G; G++) i.uvs[E][G] = P[G];
            i.material = L, i.faceMaterial = null !== A.materialIndex ? M[A.materialIndex] :
              null, i.z = i.centroidScreen.z, v.elements.push(i)
          }
        } else if (I instanceof THREE.Line)
        for (z.multiply(y, J), D = I.geometry.vertices, E = b(), E.positionScreen
          .copy(D[0].position), z.multiplyVector4(E.positionScreen), w = 1, A =
          D.length; A > w; w++) E = b(), E.positionScreen.copy(D[w].position),
          z.multiplyVector4(E.positionScreen), F = q[h - 2], B.copy(E.positionScreen),
          C.copy(F.positionScreen), d(B, C) && (B.multiplyScalar(1 / B.w), C.multiplyScalar(
              1 / C.w), I = t[m] = t[m] || new THREE.RenderableLine, m++, l =
            I, l.v1.positionScreen.copy(B), l.v2.positionScreen.copy(C), l.z =
            Math.max(B.z, C.z), l.material = L, v.elements.push(l));
      for (a = 0, p = v.sprites.length; p > a; a++) I = v.sprites[a].object,
        J = I.matrixWorld, I instanceof THREE.Particle && (x.set(J.n14, J.n24,
          J.n34, 1), y.multiplyVector4(x), x.z /= x.w, x.z > 0 && x.z < 1) &&
        (Q = u[o] = u[o] || new THREE.RenderableParticle, o++, n = Q, n.x = x
          .x / x.w, n.y = x.y / x.w, n.z = x.z, n.rotation = I.rotation.z, n.scale
          .x = I.scale.x * Math.abs(n.x - (x.x + e.projectionMatrix.n11) / (x
            .w + e.projectionMatrix.n14)), n.scale.y = I.scale.y * Math.abs(n
            .y - (x.y + e.projectionMatrix.n22) / (x.w + e.projectionMatrix.n24)
          ), n.material = I.material, v.elements.push(n));
      return f && v.elements.sort(c), v
    }
  }, THREE.Quaternion = function(a, b, c, d) {
    this.set(a || 0, b || 0, c || 0, void 0 !== d ? d : 1)
  }, THREE.Quaternion.prototype = {
    constructor: THREE.Quaternion,
    set: function(a, b, c, d) {
      return this.x = a, this.y = b, this.z = c, this.w = d, this
    },
    copy: function(a) {
      return this.x = a.x, this.y = a.y, this.z = a.z, this.w = a.w, this
    },
    setFromEuler: function(a) {
      var b = Math.PI / 360,
        c = a.x * b,
        d = a.y * b,
        e = a.z * b,
        a = Math.cos(d),
        d = Math.sin(d),
        b = Math.cos(-e),
        e = Math.sin(-e),
        f = Math.cos(c),
        c = Math.sin(c),
        g = a * b,
        h = d * e;
      return this.w = g * f - h * c, this.x = g * c + h * f, this.y = d * b *
        f + a * e * c, this.z = a * e * f - d * b * c, this
    },
    setFromAxisAngle: function(a, b) {
      var c = b / 2,
        d = Math.sin(c);
      return this.x = a.x * d, this.y = a.y * d, this.z = a.z * d, this.w =
        Math.cos(c), this
    },
    setFromRotationMatrix: function(a) {
      var b = Math.pow(a.determinant(), 1 / 3);
      return this.w = Math.sqrt(Math.max(0, b + a.n11 + a.n22 + a.n33)) / 2,
        this.x = Math.sqrt(Math.max(0, b + a.n11 - a.n22 - a.n33)) / 2, this.y =
        Math.sqrt(Math.max(0, b - a.n11 + a.n22 - a.n33)) / 2, this.z = Math.sqrt(
          Math.max(0, b - a.n11 - a.n22 + a.n33)) / 2, this.x = a.n32 - a.n23 <
        0 ? -Math.abs(this.x) : Math.abs(this.x), this.y = a.n13 - a.n31 < 0 ?
        -Math.abs(this.y) : Math.abs(this.y), this.z = a.n21 - a.n12 < 0 ? -
        Math.abs(this.z) : Math.abs(this.z), this.normalize(), this
    },
    calculateW: function() {
      return this.w = -Math.sqrt(Math.abs(1 - this.x * this.x - this.y * this
        .y - this.z * this.z)), this
    },
    inverse: function() {
      return this.x *= -1, this.y *= -1, this.z *= -1, this
    },
    length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z +
        this.w * this.w)
    },
    normalize: function() {
      var a = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z +
        this.w * this.w);
      return 0 === a ? this.w = this.z = this.y = this.x = 0 : (a = 1 / a,
        this.x *= a, this.y *= a, this.z *= a, this.w *= a), this
    },
    multiplySelf: function(a) {
      var b = this.x,
        c = this.y,
        d = this.z,
        e = this.w,
        f = a.x,
        g = a.y,
        h = a.z,
        a = a.w;
      return this.x = b * a + e * f + c * h - d * g, this.y = c * a + e * g +
        d * f - b * h, this.z = d * a + e * h + b * g - c * f, this.w = e * a -
        b * f - c * g - d * h, this
    },
    multiply: function(a, b) {
      return this.x = a.x * b.w + a.y * b.z - a.z * b.y + a.w * b.x, this.y = -
        a.x * b.z + a.y * b.w + a.z * b.x + a.w * b.y, this.z = a.x * b.y - a
        .y * b.x + a.z * b.w + a.w * b.z, this.w = -a.x * b.x - a.y * b.y - a
        .z * b.z + a.w * b.w, this
    },
    multiplyVector3: function(a, b) {
      b || (b = a);
      var c = a.x,
        d = a.y,
        e = a.z,
        f = this.x,
        g = this.y,
        h = this.z,
        i = this.w,
        j = i * c + g * e - h * d,
        k = i * d + h * c - f * e,
        l = i * e + f * d - g * c,
        c = -f * c - g * d - h * e;
      return b.x = j * i + c * -f + k * -h - l * -g, b.y = k * i + c * -g + l *
        -f - j * -h, b.z = l * i + c * -h + j * -g - k * -f, b
    }
  }, THREE.Quaternion.slerp = function(a, b, c, d) {
    var e = a.w * b.w + a.x * b.x + a.y * b.y + a.z * b.z;
    if (0 > e ? (c.w = -b.w, c.x = -b.x, c.y = -b.y, c.z = -b.z, e = -e) : c.copy(
        b), Math.abs(e) >= 1) return c.w = a.w, c.x = a.x, c.y = a.y, c.z = a.z,
      c;
    var f = Math.acos(e),
      e = Math.sqrt(1 - e * e);
    return Math.abs(e) < .001 ? (c.w = .5 * (a.w + b.w), c.x = .5 * (a.x + b.x),
      c.y = .5 * (a.y + b.y), c.z = .5 * (a.z + b.z), c) : (b = Math.sin((1 -
        d) * f) / e, d = Math.sin(d * f) / e, c.w = a.w * b + c.w * d, c.x =
      a.x * b + c.x * d, c.y = a.y * b + c.y * d, c.z = a.z * b + c.z * d, c)
  }, THREE.Vertex = function(a) {
    this.position = a || new THREE.Vector3
  }, THREE.Face3 = function(a, b, c, d, e, f) {
    this.a = a, this.b = b, this.c = c, this.normal = d instanceof THREE.Vector3 ?
      d : new THREE.Vector3, this.vertexNormals = d instanceof Array ? d : [],
      this.color = e instanceof THREE.Color ? e : new THREE.Color, this.vertexColors =
      e instanceof Array ? e : [], this.vertexTangents = [], this.materialIndex =
      f, this.centroid = new THREE.Vector3
  }, THREE.Face4 = function(a, b, c, d, e, f, g) {
    this.a = a, this.b = b, this.c = c, this.d = d, this.normal = e instanceof THREE
      .Vector3 ? e : new THREE.Vector3, this.vertexNormals = e instanceof Array ?
      e : [], this.color = f instanceof THREE.Color ? f : new THREE.Color, this
      .vertexColors = f instanceof Array ? f : [], this.vertexTangents = [],
      this.materialIndex = g, this.centroid = new THREE.Vector3
  }, THREE.UV = function(a, b) {
    this.u = a || 0, this.v = b || 0
  }, THREE.UV.prototype = {
    constructor: THREE.UV,
    set: function(a, b) {
      return this.u = a, this.v = b, this
    },
    copy: function(a) {
      return this.u = a.u, this.v = a.v, this
    },
    clone: function() {
      return new THREE.UV(this.u, this.v)
    }
  }, THREE.Geometry = function() {
    this.id = THREE.GeometryCount++, this.vertices = [], this.colors = [], this
      .materials = [], this.faces = [], this.faceUvs = [
        []
      ], this.faceVertexUvs = [
        []
      ], this.morphTargets = [], this.morphColors = [], this.skinWeights = [],
      this.skinIndices = [], this.boundingSphere = this.boundingBox = null,
      this.dynamic = this.hasTangents = !1
  }, THREE.Geometry.prototype = {
    constructor: THREE.Geometry,
    applyMatrix: function(a) {
      var b = new THREE.Matrix4;
      b.extractRotation(a, new THREE.Vector3(1, 1, 1));
      for (var c = 0, d = this.vertices.length; d > c; c++) a.multiplyVector3(
        this.vertices[c].position);
      for (c = 0, d = this.faces.length; d > c; c++) {
        var e = this.faces[c];
        b.multiplyVector3(e.normal);
        for (var f = 0, g = e.vertexNormals.length; g > f; f++) b.multiplyVector3(
          e.vertexNormals[f]);
        a.multiplyVector3(e.centroid)
      }
    },
    computeCentroids: function() {
      var a, b, c;
      for (a = 0, b = this.faces.length; b > a; a++) c = this.faces[a], c.centroid
        .set(0, 0, 0), c instanceof THREE.Face3 ? (c.centroid.addSelf(this.vertices[
            c.a].position), c.centroid.addSelf(this.vertices[c.b].position),
          c.centroid.addSelf(this.vertices[c.c].position), c.centroid.divideScalar(
            3)) : c instanceof THREE.Face4 && (c.centroid.addSelf(this.vertices[
            c.a].position), c.centroid.addSelf(this.vertices[c.b].position),
          c.centroid.addSelf(this.vertices[c.c].position), c.centroid.addSelf(
            this.vertices[c.d].position), c.centroid.divideScalar(4))
    },
    computeFaceNormals: function() {
      var a, b, c, d, e, f, g = new THREE.Vector3,
        h = new THREE.Vector3;
      for (a = 0, b = this.faces.length; b > a; a++) c = this.faces[a], d =
        this.vertices[c.a], e = this.vertices[c.b], f = this.vertices[c.c], g
        .sub(f.position, e.position), h.sub(d.position, e.position), g.crossSelf(
          h), g.isZero() || g.normalize(), c.normal.copy(g)
    },
    computeVertexNormals: function() {
      var a, b, c, d;
      if (void 0 === this.__tmpVertices) {
        for (d = this.__tmpVertices = Array(this.vertices.length), a = 0, b =
          this.vertices.length; b > a; a++) d[a] = new THREE.Vector3;
        for (a = 0, b = this.faces.length; b > a; a++) c = this.faces[a], c instanceof THREE
          .Face3 ? c.vertexNormals = [new THREE.Vector3, new THREE.Vector3,
            new THREE.Vector3
          ] : c instanceof THREE.Face4 && (c.vertexNormals = [new THREE.Vector3,
            new THREE.Vector3, new THREE.Vector3, new THREE.Vector3
          ])
      } else
        for (d = this.__tmpVertices, a = 0, b = this.vertices.length; b > a; a++)
          d[a].set(0, 0, 0);
      for (a = 0, b = this.faces.length; b > a; a++) c = this.faces[a], c instanceof THREE
        .Face3 ? (d[c.a].addSelf(c.normal), d[c.b].addSelf(c.normal), d[c.c].addSelf(
          c.normal)) : c instanceof THREE.Face4 && (d[c.a].addSelf(c.normal),
          d[c.b].addSelf(c.normal), d[c.c].addSelf(c.normal), d[c.d].addSelf(
            c.normal));
      for (a = 0, b = this.vertices.length; b > a; a++) d[a].normalize();
      for (a = 0, b = this.faces.length; b > a; a++) c = this.faces[a], c instanceof THREE
        .Face3 ? (c.vertexNormals[0].copy(d[c.a]), c.vertexNormals[1].copy(d[
          c.b]), c.vertexNormals[2].copy(d[c.c])) : c instanceof THREE.Face4 &&
        (c.vertexNormals[0].copy(d[c.a]), c.vertexNormals[1].copy(d[c.b]), c.vertexNormals[
          2].copy(d[c.c]), c.vertexNormals[3].copy(d[c.d]))
    },
    computeTangents: function() {
      function a(a, b, c, d, e, f, y) {
        h = a.vertices[b].position, i = a.vertices[c].position, j = a.vertices[
            d].position, k = g[e], l = g[f], m = g[y], n = i.x - h.x, o = j.x -
          h.x, p = i.y - h.y, q = j.y - h.y, r = i.z - h.z, s = j.z - h.z, t =
          l.u - k.u, u = m.u - k.u, v = l.v - k.v, w = m.v - k.v, x = 1 / (t *
            w - u * v), B.set((w * n - v * o) * x, (w * p - v * q) * x, (w *
            r - v * s) * x), C.set((t * o - u * n) * x, (t * q - u * p) * x, (
            t * s - u * r) * x), z[b].addSelf(B), z[c].addSelf(B), z[d].addSelf(
            B), A[b].addSelf(C), A[c].addSelf(C), A[d].addSelf(C)
      }
      var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x,
        y, z = [],
        A = [],
        B = new THREE.Vector3,
        C = new THREE.Vector3,
        D = new THREE.Vector3,
        E = new THREE.Vector3,
        F = new THREE.Vector3;
      for (b = 0, c = this.vertices.length; c > b; b++) z[b] = new THREE.Vector3,
        A[b] = new THREE.Vector3;
      for (b = 0, c = this.faces.length; c > b; b++) f = this.faces[b], g =
        this.faceVertexUvs[0][b], f instanceof THREE.Face3 ? a(this, f.a, f.b,
          f.c, 0, 1, 2) : f instanceof THREE.Face4 && (a(this, f.a, f.b, f.c,
          0, 1, 2), a(this, f.a, f.b, f.d, 0, 1, 3));
      var G = ["a", "b", "c", "d"];
      for (b = 0, c = this.faces.length; c > b; b++)
        for (f = this.faces[b], d = 0; d < f.vertexNormals.length; d++) F.copy(
            f.vertexNormals[d]), e = f[G[d]], y = z[e], D.copy(y), D.subSelf(
            F.multiplyScalar(F.dot(y))).normalize(), E.cross(f.vertexNormals[
            d], y), e = E.dot(A[e]), e = 0 > e ? -1 : 1, f.vertexTangents[d] =
          new THREE.Vector4(D.x, D.y, D.z, e);
      this.hasTangents = !0
    },
    computeBoundingBox: function() {
      var a;
      if (this.vertices.length > 0) {
        this.boundingBox = {
          x: [this.vertices[0].position.x, this.vertices[0].position.x],
          y: [this.vertices[0].position.y, this.vertices[0].position.y],
          z: [this.vertices[0].position.z, this.vertices[0].position.z]
        };
        for (var b = 1, c = this.vertices.length; c > b; b++) a = this.vertices[
            b], a.position.x < this.boundingBox.x[0] ? this.boundingBox.x[0] =
          a.position.x : a.position.x > this.boundingBox.x[1] && (this.boundingBox
            .x[1] = a.position.x), a.position.y < this.boundingBox.y[0] ?
          this.boundingBox.y[0] = a.position.y : a.position.y > this.boundingBox
          .y[1] && (this.boundingBox.y[1] = a.position.y), a.position.z <
          this.boundingBox.z[0] ? this.boundingBox.z[0] = a.position.z : a.position
          .z > this.boundingBox.z[1] && (this.boundingBox.z[1] = a.position.z)
      }
    },
    computeBoundingSphere: function() {
      for (var a = 0, b = 0, c = this.vertices.length; c > b; b++) a = Math.max(
        a, this.vertices[b].position.length());
      this.boundingSphere = {
        radius: a
      }
    },
    mergeVertices: function() {
      var a, b, c, d = {},
        e = [],
        f = [],
        g = Math.pow(10, 4);
      for (b = 0, c = this.vertices.length; c > b; b++) a = this.vertices[b].position,
        a = [Math.round(a.x * g), Math.round(a.y * g), Math.round(a.z * g)].join(
          "_"), void 0 === d[a] ? (d[a] = b, e.push(this.vertices[b]), f[b] =
          e.length - 1) : f[b] = f[d[a]];
      for (b = 0, c = this.faces.length; c > b; b++) d = this.faces[b], d instanceof THREE
        .Face3 ? (d.a = f[d.a], d.b = f[d.b], d.c = f[d.c]) : d instanceof THREE
        .Face4 && (d.a = f[d.a], d.b = f[d.b], d.c = f[d.c], d.d = f[d.d]);
      this.vertices = e
    }
  }, THREE.GeometryCount = 0, THREE.Camera = function() {
    return arguments.length ? (console.warn(
      "DEPRECATED: Camera() is now PerspectiveCamera() or OrthographicCamera()."
    ), new THREE.PerspectiveCamera(arguments[0], arguments[1], arguments[2],
      arguments[3])) : (THREE.Object3D.call(this), this.matrixWorldInverse =
      new THREE.Matrix4, this.projectionMatrix = new THREE.Matrix4, void(this
        .projectionMatrixInverse = new THREE.Matrix4))
  }, THREE.Camera.prototype = new THREE.Object3D, THREE.Camera.prototype.constructor =
  THREE.Camera, THREE.Camera.prototype.lookAt = function(a) {
    this.matrix.lookAt(this.position, a, this.up), this.rotationAutoUpdate &&
      this.rotation.setRotationFromMatrix(this.matrix)
  }, THREE.OrthographicCamera = function(a, b, c, d, e, f) {
    THREE.Camera.call(this), this.left = a, this.right = b, this.top = c, this.bottom =
      d, this.near = void 0 !== e ? e : .1, this.far = void 0 !== f ? f : 2e3,
      this.updateProjectionMatrix()
  }, THREE.OrthographicCamera.prototype = new THREE.Camera, THREE.OrthographicCamera
  .prototype.constructor = THREE.OrthographicCamera, THREE.OrthographicCamera.prototype
  .updateProjectionMatrix = function() {
    this.projectionMatrix = THREE.Matrix4.makeOrtho(this.left, this.right, this
      .top, this.bottom, this.near, this.far)
  }, THREE.PerspectiveCamera = function(a, b, c, d) {
    THREE.Camera.call(this), this.fov = void 0 !== a ? a : 50, this.aspect =
      void 0 !== b ? b : 1, this.near = void 0 !== c ? c : .1, this.far = void 0 !==
      d ? d : 2e3, this.updateProjectionMatrix()
  }, THREE.PerspectiveCamera.prototype = new THREE.Camera, THREE.PerspectiveCamera
  .prototype.constructor = THREE.PerspectiveCamera, THREE.PerspectiveCamera.prototype
  .setLens = function(a, b) {
    this.fov = 2 * Math.atan((void 0 !== b ? b : 43.25) / (2 * a)), this.fov *=
      180 / Math.PI, this.updateProjectionMatrix()
  }, THREE.PerspectiveCamera.prototype.setViewOffset = function(a, b, c, d, e,
    f) {
    this.fullWidth = a, this.fullHeight = b, this.x = c, this.y = d, this.width =
      e, this.height = f, this.updateProjectionMatrix()
  }, THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
    if (this.fullWidth) {
      var a = this.fullWidth / this.fullHeight,
        b = Math.tan(this.fov * Math.PI / 360) * this.near,
        c = -b,
        d = a * c,
        a = Math.abs(a * b - d),
        c = Math.abs(b - c);
      this.projectionMatrix = THREE.Matrix4.makeFrustum(d + this.x * a / this.fullWidth,
        d + (this.x + this.width) * a / this.fullWidth, b - (this.y + this.height) *
        c / this.fullHeight, b - this.y * c / this.fullHeight, this.near,
        this.far)
    } else this.projectionMatrix = THREE.Matrix4.makePerspective(this.fov, this
      .aspect, this.near, this.far)
  }, THREE.Light = function(a) {
    THREE.Object3D.call(this), this.color = new THREE.Color(a)
  }, THREE.Light.prototype = new THREE.Object3D, THREE.Light.prototype.constructor =
  THREE.Light, THREE.Light.prototype.supr = THREE.Object3D.prototype, THREE.AmbientLight =
  function(a) {
    THREE.Light.call(this, a)
  }, THREE.AmbientLight.prototype = new THREE.Light, THREE.AmbientLight.prototype
  .constructor = THREE.AmbientLight, THREE.DirectionalLight = function(a, b, c) {
    THREE.Light.call(this, a), this.position = new THREE.Vector3(0, 1, 0), this
      .intensity = void 0 !== b ? b : 1, this.distance = void 0 !== c ? c : 0
  }, THREE.DirectionalLight.prototype = new THREE.Light, THREE.DirectionalLight
  .prototype.constructor = THREE.DirectionalLight, THREE.PointLight = function(
    a, b, c) {
    THREE.Light.call(this, a), this.position = new THREE.Vector3(0, 0, 0), this
      .intensity = void 0 !== b ? b : 1, this.distance = void 0 !== c ? c : 0
  }, THREE.PointLight.prototype = new THREE.Light, THREE.PointLight.prototype.constructor =
  THREE.PointLight, THREE.Material = function(a) {
    this.name = "", this.id = THREE.MaterialCount++, a = a || {}, this.opacity =
      void 0 !== a.opacity ? a.opacity : 1, this.transparent = void 0 !== a.transparent ?
      a.transparent : !1, this.blending = void 0 !== a.blending ? a.blending :
      THREE.NormalBlending, this.depthTest = void 0 !== a.depthTest ? a.depthTest :
      !0, this.depthWrite = void 0 !== a.depthWrite ? a.depthWrite : !0, this.polygonOffset =
      void 0 !== a.polygonOffset ? a.polygonOffset : !1, this.polygonOffsetFactor =
      void 0 !== a.polygonOffsetFactor ? a.polygonOffsetFactor : 0, this.polygonOffsetUnits =
      void 0 !== a.polygonOffsetUnits ? a.polygonOffsetUnits : 0, this.alphaTest =
      void 0 !== a.alphaTest ? a.alphaTest : 0, this.overdraw = void 0 !== a.overdraw ?
      a.overdraw : !1
  }, THREE.MaterialCount = 0, THREE.NoShading = 0, THREE.FlatShading = 1, THREE
  .SmoothShading = 2, THREE.NoColors = 0, THREE.FaceColors = 1, THREE.VertexColors =
  2, THREE.NormalBlending = 0, THREE.AdditiveBlending = 1, THREE.SubtractiveBlending =
  2, THREE.MultiplyBlending = 3, THREE.AdditiveAlphaBlending = 4, THREE.LineBasicMaterial =
  function(a) {
    THREE.Material.call(this, a), a = a || {}, this.color = void 0 !== a.color ?
      new THREE.Color(a.color) : new THREE.Color(16777215), this.linewidth =
      void 0 !== a.linewidth ? a.linewidth : 1, this.linecap = void 0 !== a.linecap ?
      a.linecap : "round", this.linejoin = void 0 !== a.linejoin ? a.linejoin :
      "round", this.vertexColors = a.vertexColors ? a.vertexColors : !1, this.fog =
      void 0 !== a.fog ? a.fog : !0
  }, THREE.LineBasicMaterial.prototype = new THREE.Material, THREE.LineBasicMaterial
  .prototype.constructor = THREE.LineBasicMaterial, THREE.MeshBasicMaterial =
  function(a) {
    THREE.Material.call(this, a), a = a || {}, this.color = void 0 !== a.color ?
      new THREE.Color(a.color) : new THREE.Color(16777215), this.map = void 0 !==
      a.map ? a.map : null, this.lightMap = void 0 !== a.lightMap ? a.lightMap :
      null, this.envMap = void 0 !== a.envMap ? a.envMap : null, this.combine =
      void 0 !== a.combine ? a.combine : THREE.MultiplyOperation, this.reflectivity =
      void 0 !== a.reflectivity ? a.reflectivity : 1, this.refractionRatio =
      void 0 !== a.refractionRatio ? a.refractionRatio : .98, this.fog = void 0 !==
      a.fog ? a.fog : !0, this.shading = void 0 !== a.shading ? a.shading :
      THREE.SmoothShading, this.wireframe = void 0 !== a.wireframe ? a.wireframe :
      !1, this.wireframeLinewidth = void 0 !== a.wireframeLinewidth ? a.wireframeLinewidth :
      1, this.wireframeLinecap = void 0 !== a.wireframeLinecap ? a.wireframeLinecap :
      "round", this.wireframeLinejoin = void 0 !== a.wireframeLinejoin ? a.wireframeLinejoin :
      "round", this.vertexColors = void 0 !== a.vertexColors ? a.vertexColors :
      !1, this.skinning = void 0 !== a.skinning ? a.skinning : !1, this.morphTargets =
      void 0 !== a.morphTargets ? a.morphTargets : !1
  }, THREE.MeshBasicMaterial.prototype = new THREE.Material, THREE.MeshBasicMaterial
  .prototype.constructor = THREE.MeshBasicMaterial, THREE.MeshLambertMaterial =
  function(a) {
    THREE.Material.call(this, a), a = a || {}, this.color = void 0 !== a.color ?
      new THREE.Color(a.color) : new THREE.Color(16777215), this.ambient = void 0 !==
      a.ambient ? new THREE.Color(a.ambient) : new THREE.Color(328965), this.map =
      void 0 !== a.map ? a.map : null, this.lightMap = void 0 !== a.lightMap ?
      a.lightMap : null, this.envMap = void 0 !== a.envMap ? a.envMap : null,
      this.combine = void 0 !== a.combine ? a.combine : THREE.MultiplyOperation,
      this.reflectivity = void 0 !== a.reflectivity ? a.reflectivity : 1, this.refractionRatio =
      void 0 !== a.refractionRatio ? a.refractionRatio : .98, this.fog = void 0 !==
      a.fog ? a.fog : !0, this.shading = void 0 !== a.shading ? a.shading :
      THREE.SmoothShading, this.wireframe = void 0 !== a.wireframe ? a.wireframe :
      !1, this.wireframeLinewidth = void 0 !== a.wireframeLinewidth ? a.wireframeLinewidth :
      1, this.wireframeLinecap = void 0 !== a.wireframeLinecap ? a.wireframeLinecap :
      "round", this.wireframeLinejoin = void 0 !== a.wireframeLinejoin ? a.wireframeLinejoin :
      "round", this.vertexColors = void 0 !== a.vertexColors ? a.vertexColors :
      !1, this.skinning = void 0 !== a.skinning ? a.skinning : !1, this.morphTargets =
      void 0 !== a.morphTargets ? a.morphTargets : !1
  }, THREE.MeshLambertMaterial.prototype = new THREE.Material, THREE.MeshLambertMaterial
  .prototype.constructor = THREE.MeshLambertMaterial, THREE.MeshPhongMaterial =
  function(a) {
    THREE.Material.call(this, a), a = a || {}, this.color = void 0 !== a.color ?
      new THREE.Color(a.color) : new THREE.Color(16777215), this.ambient = void 0 !==
      a.ambient ? new THREE.Color(a.ambient) : new THREE.Color(328965), this.specular =
      void 0 !== a.specular ? new THREE.Color(a.specular) : new THREE.Color(
        1118481), this.shininess = void 0 !== a.shininess ? a.shininess : 30,
      this.metal = void 0 !== a.metal ? a.metal : !1, this.perPixel = void 0 !==
      a.perPixel ? a.perPixel : !1, this.map = void 0 !== a.map ? a.map : null,
      this.lightMap = void 0 !== a.lightMap ? a.lightMap : null, this.envMap =
      void 0 !== a.envMap ? a.envMap : null, this.combine = void 0 !== a.combine ?
      a.combine : THREE.MultiplyOperation, this.reflectivity = void 0 !== a.reflectivity ?
      a.reflectivity : 1, this.refractionRatio = void 0 !== a.refractionRatio ?
      a.refractionRatio : .98, this.fog = void 0 !== a.fog ? a.fog : !0, this.shading =
      void 0 !== a.shading ? a.shading : THREE.SmoothShading, this.wireframe =
      void 0 !== a.wireframe ? a.wireframe : !1, this.wireframeLinewidth = void 0 !==
      a.wireframeLinewidth ? a.wireframeLinewidth : 1, this.wireframeLinecap =
      void 0 !== a.wireframeLinecap ? a.wireframeLinecap : "round", this.wireframeLinejoin =
      void 0 !== a.wireframeLinejoin ? a.wireframeLinejoin : "round", this.vertexColors =
      void 0 !== a.vertexColors ? a.vertexColors : !1, this.skinning = void 0 !==
      a.skinning ? a.skinning : !1, this.morphTargets = void 0 !== a.morphTargets ?
      a.morphTargets : !1
  }, THREE.MeshPhongMaterial.prototype = new THREE.Material, THREE.MeshPhongMaterial
  .prototype.constructor = THREE.MeshPhongMaterial, THREE.MeshDepthMaterial =
  function(a) {
    THREE.Material.call(this, a), a = a || {}, this.shading = void 0 !== a.shading ?
      a.shading : THREE.SmoothShading, this.wireframe = void 0 !== a.wireframe ?
      a.wireframe : !1, this.wireframeLinewidth = void 0 !== a.wireframeLinewidth ?
      a.wireframeLinewidth : 1
  }, THREE.MeshDepthMaterial.prototype = new THREE.Material, THREE.MeshDepthMaterial
  .prototype.constructor = THREE.MeshDepthMaterial, THREE.MeshNormalMaterial =
  function(a) {
    THREE.Material.call(this, a), a = a || {}, this.shading = a.shading ? a.shading :
      THREE.FlatShading, this.wireframe = a.wireframe ? a.wireframe : !1, this.wireframeLinewidth =
      a.wireframeLinewidth ? a.wireframeLinewidth : 1
  }, THREE.MeshNormalMaterial.prototype = new THREE.Material, THREE.MeshNormalMaterial
  .prototype.constructor = THREE.MeshNormalMaterial, THREE.MeshFaceMaterial =
  function() {}, THREE.ParticleBasicMaterial = function(a) {
    THREE.Material.call(this, a), a = a || {}, this.color = void 0 !== a.color ?
      new THREE.Color(a.color) : new THREE.Color(16777215), this.map = void 0 !==
      a.map ? a.map : null, this.size = void 0 !== a.size ? a.size : 1, this.sizeAttenuation =
      void 0 !== a.sizeAttenuation ? a.sizeAttenuation : !0, this.vertexColors =
      void 0 !== a.vertexColors ? a.vertexColors : !1, this.fog = void 0 !== a.fog ?
      a.fog : !0
  }, THREE.ParticleBasicMaterial.prototype = new THREE.Material, THREE.ParticleBasicMaterial
  .prototype.constructor = THREE.ParticleBasicMaterial, THREE.ParticleCanvasMaterial =
  function(a) {
    THREE.Material.call(this, a), a = a || {}, this.color = void 0 !== a.color ?
      new THREE.Color(a.color) : new THREE.Color(16777215), this.program = void 0 !==
      a.program ? a.program : function() {}
  }, THREE.ParticleCanvasMaterial.prototype = new THREE.Material, THREE.ParticleCanvasMaterial
  .prototype.constructor = THREE.ParticleCanvasMaterial, THREE.Texture =
  function(a, b, c, d, e, f) {
    this.id = THREE.TextureCount++, this.image = a, this.mapping = void 0 !== b ?
      b : new THREE.UVMapping, this.wrapS = void 0 !== c ? c : THREE.ClampToEdgeWrapping,
      this.wrapT = void 0 !== d ? d : THREE.ClampToEdgeWrapping, this.magFilter =
      void 0 !== e ? e : THREE.LinearFilter, this.minFilter = void 0 !== f ? f :
      THREE.LinearMipMapLinearFilter, this.offset = new THREE.Vector2(0, 0),
      this.repeat = new THREE.Vector2(1, 1), this.needsUpdate = !1, this.onUpdate =
      null
  }, THREE.Texture.prototype = {
    constructor: THREE.Texture,
    clone: function() {
      var a = new THREE.Texture(this.image, this.mapping, this.wrapS, this.wrapT,
        this.magFilter, this.minFilter);
      return a.offset.copy(this.offset), a.repeat.copy(this.repeat), a
    }
  }, THREE.TextureCount = 0, THREE.MultiplyOperation = 0, THREE.MixOperation =
  1, THREE.CubeReflectionMapping = function() {}, THREE.CubeRefractionMapping =
  function() {}, THREE.LatitudeReflectionMapping = function() {}, THREE.LatitudeRefractionMapping =
  function() {}, THREE.SphericalReflectionMapping = function() {}, THREE.SphericalRefractionMapping =
  function() {}, THREE.UVMapping = function() {}, THREE.RepeatWrapping = 0,
  THREE.ClampToEdgeWrapping = 1, THREE.MirroredRepeatWrapping = 2, THREE.NearestFilter =
  3, THREE.NearestMipMapNearestFilter = 4, THREE.NearestMipMapLinearFilter = 5,
  THREE.LinearFilter = 6, THREE.LinearMipMapNearestFilter = 7, THREE.LinearMipMapLinearFilter =
  8, THREE.ByteType = 9, THREE.UnsignedByteType = 10, THREE.ShortType = 11,
  THREE.UnsignedShortType = 12, THREE.IntType = 13, THREE.UnsignedIntType = 14,
  THREE.FloatType = 15, THREE.AlphaFormat = 16, THREE.RGBFormat = 17, THREE.RGBAFormat =
  18, THREE.LuminanceFormat = 19, THREE.LuminanceAlphaFormat = 20, THREE.Particle =
  function(a) {
    THREE.Object3D.call(this), this.material = a
  }, THREE.Particle.prototype = new THREE.Object3D, THREE.Particle.prototype.constructor =
  THREE.Particle, THREE.Line = function(a, b, c) {
    THREE.Object3D.call(this), this.geometry = a, this.material = b, this.type =
      void 0 !== c ? c : THREE.LineStrip, this.geometry && (this.geometry.boundingSphere ||
        this.geometry.computeBoundingSphere())
  }, THREE.LineStrip = 0, THREE.LinePieces = 1, THREE.Line.prototype = new THREE
  .Object3D, THREE.Line.prototype.constructor = THREE.Line, THREE.Mesh =
  function(a, b) {
    if (THREE.Object3D.call(this), this.geometry = a, this.material = b, b instanceof Array &&
      (console.warn(
        "DEPRECATED: Mesh material can no longer be an Array. Using material at index 0..."
      ), this.material = b[0]), this.geometry && (this.geometry.boundingSphere ||
        this.geometry.computeBoundingSphere(), this.boundRadius = a.boundingSphere
        .radius, this.geometry.morphTargets.length)) {
      this.morphTargetBase = -1, this.morphTargetForcedOrder = [], this.morphTargetInfluences = [],
        this.morphTargetDictionary = {};
      for (var c = 0; c < this.geometry.morphTargets.length; c++) this.morphTargetInfluences
        .push(0), this.morphTargetDictionary[this.geometry.morphTargets[c].name] =
        c
    }
  }, THREE.Mesh.prototype = new THREE.Object3D, THREE.Mesh.prototype.constructor =
  THREE.Mesh, THREE.Mesh.prototype.supr = THREE.Object3D.prototype, THREE.Mesh.prototype
  .getMorphTargetIndexByName = function(a) {
    return void 0 !== this.morphTargetDictionary[a] ? this.morphTargetDictionary[
      a] : (console.log("THREE.Mesh.getMorphTargetIndexByName: morph target " +
      a + " does not exist. Returning 0."), 0)
  }, THREE.Bone = function(a) {
    THREE.Object3D.call(this), this.skin = a, this.skinMatrix = new THREE.Matrix4
  }, THREE.Bone.prototype = new THREE.Object3D, THREE.Bone.prototype.constructor =
  THREE.Bone, THREE.Bone.prototype.supr = THREE.Object3D.prototype, THREE.Bone.prototype
  .update = function(a, b) {
    this.matrixAutoUpdate && (b |= this.updateMatrix()), (b || this.matrixWorldNeedsUpdate) &&
      (a ? this.skinMatrix.multiply(a, this.matrix) : this.skinMatrix.copy(this
        .matrix), this.matrixWorldNeedsUpdate = !1, b = !0);
    var c, d = this.children.length;
    for (c = 0; d > c; c++) this.children[c].update(this.skinMatrix, b)
  }, THREE.Sprite = function(a) {
    THREE.Object3D.call(this), this.color = void 0 !== a.color ? new THREE.Color(
        a.color) : new THREE.Color(16777215), this.map = a.map instanceof THREE
      .Texture ? a.map : THREE.ImageUtils.loadTexture(a.map), this.blending =
      void 0 !== a.blending ? a.blending : THREE.NormalBlending, this.useScreenCoordinates =
      void 0 !== a.useScreenCoordinates ? a.useScreenCoordinates : !0, this.mergeWith3D =
      void 0 !== a.mergeWith3D ? a.mergeWith3D : !this.useScreenCoordinates,
      this.affectedByDistance = void 0 !== a.affectedByDistance ? a.affectedByDistance :
      !this.useScreenCoordinates, this.scaleByViewport = void 0 !== a.scaleByViewport ?
      a.scaleByViewport : !this.affectedByDistance, this.alignment = a.alignment instanceof THREE
      .Vector2 ? a.alignment : THREE.SpriteAlignment.center, this.rotation3d =
      this.rotation, this.rotation = 0, this.opacity = 1, this.uvOffset = new THREE
      .Vector2(0, 0), this.uvScale = new THREE.Vector2(1, 1)
  }, THREE.Sprite.prototype = new THREE.Object3D, THREE.Sprite.prototype.constructor =
  THREE.Sprite, THREE.Sprite.prototype.updateMatrix = function() {
    this.matrix.setPosition(this.position), this.rotation3d.set(0, 0, this.rotation),
      this.matrix.setRotationFromEuler(this.rotation3d), (1 !== this.scale.x ||
        1 !== this.scale.y) && (this.matrix.scale(this.scale), this.boundRadiusScale =
        Math.max(this.scale.x, this.scale.y)), this.matrixWorldNeedsUpdate = !0
  }, THREE.SpriteAlignment = {}, THREE.SpriteAlignment.topLeft = new THREE.Vector2(
    1, -1), THREE.SpriteAlignment.topCenter = new THREE.Vector2(0, -1), THREE.SpriteAlignment
  .topRight = new THREE.Vector2(-1, -1), THREE.SpriteAlignment.centerLeft = new THREE
  .Vector2(1, 0), THREE.SpriteAlignment.center = new THREE.Vector2(0, 0), THREE
  .SpriteAlignment.centerRight = new THREE.Vector2(-1, 0), THREE.SpriteAlignment
  .bottomLeft = new THREE.Vector2(1, 1), THREE.SpriteAlignment.bottomCenter =
  new THREE.Vector2(0, 1), THREE.SpriteAlignment.bottomRight = new THREE.Vector2(-
    1, 1), THREE.Scene = function() {
    THREE.Object3D.call(this), this.overrideMaterial = this.fog = null, this.matrixAutoUpdate = !
      1, this.objects = [], this.lights = [], this.__objectsAdded = [], this.__objectsRemoved = []
  }, THREE.Scene.prototype = new THREE.Object3D, THREE.Scene.prototype.constructor =
  THREE.Scene, THREE.Scene.prototype.addObject = function(a) {
    if (a instanceof THREE.Light) - 1 === this.lights.indexOf(a) && this.lights
      .push(a);
    else if (!(a instanceof THREE.Camera || a instanceof THREE.Bone) && -1 ===
      this.objects.indexOf(a)) {
      this.objects.push(a), this.__objectsAdded.push(a);
      var b = this.__objectsRemoved.indexOf(a); - 1 !== b && this.__objectsRemoved
        .splice(b, 1)
    }
    for (b = 0; b < a.children.length; b++) this.addObject(a.children[b])
  }, THREE.Scene.prototype.removeObject = function(a) {
    if (a instanceof THREE.Light) {
      var b = this.lights.indexOf(a); - 1 !== b && this.lights.splice(b, 1)
    } else a instanceof THREE.Camera || (b = this.objects.indexOf(a), -1 !== b &&
      (this.objects.splice(b, 1), this.__objectsRemoved.push(a), b = this.__objectsAdded
        .indexOf(a), -1 !== b && this.__objectsAdded.splice(b, 1)));
    for (b = 0; b < a.children.length; b++) this.removeObject(a.children[b])
  }, THREE.CanvasRenderer = function(a) {
    function b(a) {
      Y != a && (V.globalAlpha = Y = a)
    }

    function c(a) {
      if (Z != a) {
        switch (a) {
          case THREE.NormalBlending:
            V.globalCompositeOperation = "source-over";
            break;
          case THREE.AdditiveBlending:
            V.globalCompositeOperation = "lighter";
            break;
          case THREE.SubtractiveBlending:
            V.globalCompositeOperation = "darker"
        }
        Z = a
      }
    }

    function d(a) {
      $ != a && (V.strokeStyle = $ = a)
    }

    function e(a) {
      _ != a && (V.fillStyle = _ = a)
    }
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C,
      D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S = this,
      T = new THREE.Projector,
      a = a || {},
      U = void 0 !== a.canvas ? a.canvas : document.createElement("canvas"),
      V = U.getContext("2d"),
      W = new THREE.Color(0),
      X = 0,
      Y = 1,
      Z = 0,
      $ = null,
      _ = null,
      aa = null,
      ba = null,
      ca = null,
      da = new THREE.RenderableVertex,
      ea = new THREE.RenderableVertex,
      fa = new THREE.Color,
      ga = new THREE.Color,
      ha = new THREE.Color,
      ia = new THREE.Color,
      ja = new THREE.Color,
      ka = [],
      la = [],
      ma = new THREE.Rectangle,
      na = new THREE.Rectangle,
      oa = new THREE.Rectangle,
      pa = !1,
      qa = new THREE.Color,
      ra = new THREE.Color,
      sa = new THREE.Color,
      ta = new THREE.Vector3,
      a = 16;
    M = document.createElement("canvas"), M.width = M.height = 2, N = M.getContext(
        "2d"), N.fillStyle = "rgba(0,0,0,1)", N.fillRect(0, 0, 2, 2), O = N.getImageData(
        0, 0, 2, 2), P = O.data, Q = document.createElement("canvas"), Q.width =
      Q.height = a, R = Q.getContext("2d"), R.translate(-a / 2, -a / 2), R.scale(
        a, a), a--, this.domElement = U, this.sortElements = this.sortObjects =
      this.autoClear = !0, this.info = {
        render: {
          vertices: 0,
          faces: 0
        }
      }, this.setSize = function(a, b) {
        i = a, j = b, k = Math.floor(i / 2), l = Math.floor(j / 2), U.width = i,
          U.height = j, ma.set(-k, -l, k, l), na.set(-k, -l, k, l), Y = 1, Z =
          0, ca = ba = aa = _ = $ = null
      }, this.setClearColor = function(a, b) {
        W.copy(a), X = b, na.set(-k, -l, k, l)
      }, this.setClearColorHex = function(a, b) {
        W.setHex(a), X = b, na.set(-k, -l, k, l)
      }, this.clear = function() {
        V.setTransform(1, 0, 0, -1, k, l), na.isEmpty() || (na.minSelf(ma), na.inflate(
            2), 1 > X && V.clearRect(Math.floor(na.getX()), Math.floor(na.getY()),
            Math.floor(na.getWidth()), Math.floor(na.getHeight())), X > 0 &&
          (c(THREE.NormalBlending), b(1), e("rgba(" + Math.floor(255 * W.r) +
            "," + Math.floor(255 * W.g) + "," + Math.floor(255 * W.b) + "," +
            X + ")"), V.fillRect(Math.floor(na.getX()), Math.floor(na.getY()),
            Math.floor(na.getWidth()), Math.floor(na.getHeight()))), na.empty()
        )
      }, this.render = function(a, i) {
        function j(a) {
          var b, c, d, e;
          for (qa.setRGB(0, 0, 0), ra.setRGB(0, 0, 0), sa.setRGB(0, 0, 0), b =
            0, c = a.length; c > b; b++) d = a[b], e = d.color, d instanceof THREE
            .AmbientLight ? (qa.r += e.r, qa.g += e.g, qa.b += e.b) : d instanceof THREE
            .DirectionalLight ? (ra.r += e.r, ra.g += e.g, ra.b += e.b) : d instanceof THREE
            .PointLight && (sa.r += e.r, sa.g += e.g, sa.b += e.b)
        }

        function U(a, b, c, d) {
          var e, f, g, h, i, j;
          for (e = 0, f = a.length; f > e; e++) g = a[e], h = g.color, g instanceof THREE
            .DirectionalLight ? (i = g.matrixWorld.getPosition(), j = c.dot(i),
              0 >= j || (j *= g.intensity, d.r += h.r * j, d.g += h.g * j, d.b +=
                h.b * j)) : g instanceof THREE.PointLight && (i = g.matrixWorld
              .getPosition(), j = c.dot(ta.sub(i, b).normalize()), 0 >= j || (j *=
                0 == g.distance ? 1 : 1 - Math.min(b.distanceTo(i) / g.distance,
                  1), 0 != j && (j *= g.intensity, d.r += h.r * j, d.g += h.g *
                  j, d.b += h.b * j)))
        }

        function W(a, f, g) {
          b(g.opacity), c(g.blending);
          var h, i, j, m, n, o;
          g instanceof THREE.ParticleBasicMaterial ? g.map && (m = g.map.image,
              n = m.width >> 1, o = m.height >> 1, g = f.scale.x * k, j = f.scale
              .y * l, h = g * n, i = j * o, oa.set(a.x - h, a.y - i, a.x + h, a
                .y + i), ma.intersects(oa) && (V.save(), V.translate(a.x, a.y),
                V.rotate(-f.rotation), V.scale(g, -j), V.translate(-n, -o), V.drawImage(
                  m, 0, 0), V.restore())) : g instanceof THREE.ParticleCanvasMaterial &&
            (h = f.scale.x * k, i = f.scale.y * l, oa.set(a.x - h, a.y - i, a.x +
              h, a.y + i), ma.intersects(oa) && (d(g.color.getContextStyle()),
              e(g.color.getContextStyle()), V.save(), V.translate(a.x, a.y),
              V.rotate(-f.rotation), V.scale(h, i), g.program(V), V.restore()
            ))
        }

        function X(a, e, f, g) {
          b(g.opacity), c(g.blending), V.beginPath(), V.moveTo(a.positionScreen
            .x, a.positionScreen.y), V.lineTo(e.positionScreen.x, e.positionScreen
            .y), V.closePath(), g instanceof THREE.LineBasicMaterial && (a =
            g.linewidth, aa != a && (V.lineWidth = aa = a), a = g.linecap, ba !=
            a && (V.lineCap = ba = a), a = g.linejoin, ca != a && (V.lineJoin =
              ca = a), d(g.color.getContextStyle()), V.stroke(), oa.inflate(2 *
              g.linewidth))
        }

        function Y(a, d, e, f, g, j, k, l) {
          S.info.render.vertices += 3, S.info.render.faces++, b(l.opacity), c(l
              .blending), q = a.positionScreen.x, r = a.positionScreen.y, s = d
            .positionScreen.x, t = d.positionScreen.y, u = e.positionScreen.x,
            v = e.positionScreen.y, $(q, r, s, t, u, v), l instanceof THREE.MeshBasicMaterial ?
            l.map ? l.map.mapping instanceof THREE.UVMapping && (F = k.uvs[0],
              wa(q, r, s, t, u, v, F[f].u, F[f].v, F[g].u, F[g].v, F[j].u, F[j]
                .v, l.map)) : l.envMap ? l.envMap.mapping instanceof THREE.SphericalReflectionMapping &&
            (a = i.matrixWorldInverse, ta.copy(k.vertexNormalsWorld[f]), G = .5 *
              (ta.x * a.n11 + ta.y * a.n12 + ta.z * a.n13) + .5, H = .5 * -(ta.x *
                a.n21 + ta.y * a.n22 + ta.z * a.n23) + .5, ta.copy(k.vertexNormalsWorld[
                g]), I = .5 * (ta.x * a.n11 + ta.y * a.n12 + ta.z * a.n13) + .5,
              J = .5 * -(ta.x * a.n21 + ta.y * a.n22 + ta.z * a.n23) + .5, ta.copy(
                k.vertexNormalsWorld[j]), K = .5 * (ta.x * a.n11 + ta.y * a.n12 +
                ta.z * a.n13) + .5, L = .5 * -(ta.x * a.n21 + ta.y * a.n22 + ta
                .z * a.n23) + .5, wa(q, r, s, t, u, v, G, H, I, J, K, L, l.envMap)
            ) : l.wireframe ? ua(l.color, l.wireframeLinewidth, l.wireframeLinecap,
              l.wireframeLinejoin) : va(l.color) : l instanceof THREE.MeshLambertMaterial ?
            (l.map && !l.wireframe && (l.map.mapping instanceof THREE.UVMapping &&
                (F = k.uvs[0], wa(q, r, s, t, u, v, F[f].u, F[f].v, F[g].u, F[g]
                  .v, F[j].u, F[j].v, l.map)), c(THREE.SubtractiveBlending)),
              pa ? l.wireframe || l.shading != THREE.SmoothShading || 3 != k.vertexNormalsWorld
              .length ? (fa.r = qa.r, fa.g = qa.g, fa.b = qa.b, U(h, k.centroidWorld,
                  k.normalWorld, fa), fa.r = Math.max(0, Math.min(l.color.r *
                  fa.r, 1)), fa.g = Math.max(0, Math.min(l.color.g * fa.g, 1)),
                fa.b = Math.max(0, Math.min(l.color.b * fa.b, 1)), l.wireframe ?
                ua(fa, l.wireframeLinewidth, l.wireframeLinecap, l.wireframeLinejoin) :
                va(fa)) : (ga.r = ha.r = ia.r = qa.r, ga.g = ha.g = ia.g = qa.g,
                ga.b = ha.b = ia.b = qa.b, U(h, k.v1.positionWorld, k.vertexNormalsWorld[
                  0], ga), U(h, k.v2.positionWorld, k.vertexNormalsWorld[1], ha),
                U(h, k.v3.positionWorld, k.vertexNormalsWorld[2], ia), ga.r =
                Math.max(0, Math.min(l.color.r * ga.r, 1)), ga.g = Math.max(0,
                  Math.min(l.color.g * ga.g, 1)), ga.b = Math.max(0, Math.min(l
                  .color.b * ga.b, 1)), ha.r = Math.max(0, Math.min(l.color.r *
                  ha.r, 1)), ha.g = Math.max(0, Math.min(l.color.g * ha.g, 1)),
                ha.b = Math.max(0, Math.min(l.color.b * ha.b, 1)), ia.r = Math.max(
                  0, Math.min(l.color.r * ia.r, 1)), ia.g = Math.max(0, Math.min(
                  l.color.g * ia.g, 1)), ia.b = Math.max(0, Math.min(l.color.b *
                  ia.b, 1)), ja.r = .5 * (ha.r + ia.r), ja.g = .5 * (ha.g + ia.g),
                ja.b = .5 * (ha.b + ia.b), E = ya(ga, ha, ia, ja), xa(q, r, s,
                  t, u, v, 0, 0, 1, 0, 0, 1, E)) : l.wireframe ? ua(l.color, l.wireframeLinewidth,
                l.wireframeLinecap, l.wireframeLinejoin) : va(l.color)) : l instanceof THREE
            .MeshDepthMaterial ? (C = i.near, D = i.far, ga.r = ga.g = ga.b = 1 -
              za(a.positionScreen.z, C, D), ha.r = ha.g = ha.b = 1 - za(d.positionScreen
                .z, C, D), ia.r = ia.g = ia.b = 1 - za(e.positionScreen.z, C, D),
              ja.r = .5 * (ha.r + ia.r), ja.g = .5 * (ha.g + ia.g), ja.b = .5 *
              (ha.b + ia.b), E = ya(ga, ha, ia, ja), xa(q, r, s, t, u, v, 0, 0,
                1, 0, 0, 1, E)) : l instanceof THREE.MeshNormalMaterial && (fa.r =
              Aa(k.normalWorld.x), fa.g = Aa(k.normalWorld.y), fa.b = Aa(k.normalWorld
                .z), l.wireframe ? ua(fa, l.wireframeLinewidth, l.wireframeLinecap,
                l.wireframeLinejoin) : va(fa))
        }

        function Z(a, d, e, f, g, j, k, l, m) {
          S.info.render.vertices += 4, S.info.render.faces++, b(l.opacity), c(l
            .blending), l.map || l.envMap ? (Y(a, d, f, 0, 1, 3, k, l, m), Y(
            g, e, j, 1, 2, 3, k, l, m)) : (q = a.positionScreen.x, r = a.positionScreen
            .y, s = d.positionScreen.x, t = d.positionScreen.y, u = e.positionScreen
            .x, v = e.positionScreen.y, w = f.positionScreen.x, x = f.positionScreen
            .y, y = g.positionScreen.x, z = g.positionScreen.y, A = j.positionScreen
            .x, B = j.positionScreen.y, l instanceof THREE.MeshBasicMaterial ?
            (_(q, r, s, t, u, v, w, x), l.wireframe ? ua(l.color, l.wireframeLinewidth,
              l.wireframeLinecap, l.wireframeLinejoin) : va(l.color)) : l instanceof THREE
            .MeshLambertMaterial ? pa ? l.wireframe || l.shading != THREE.SmoothShading ||
            4 != k.vertexNormalsWorld.length ? (fa.r = qa.r, fa.g = qa.g, fa.b =
              qa.b, U(h, k.centroidWorld, k.normalWorld, fa), fa.r = Math.max(
                0, Math.min(l.color.r * fa.r, 1)), fa.g = Math.max(0, Math.min(
                l.color.g * fa.g, 1)), fa.b = Math.max(0, Math.min(l.color.b *
                fa.b, 1)), _(q, r, s, t, u, v, w, x), l.wireframe ? ua(fa, l.wireframeLinewidth,
                l.wireframeLinecap, l.wireframeLinejoin) : va(fa)) : (ga.r =
              ha.r = ia.r = ja.r = qa.r, ga.g = ha.g = ia.g = ja.g = qa.g, ga
              .b = ha.b = ia.b = ja.b = qa.b, U(h, k.v1.positionWorld, k.vertexNormalsWorld[
                0], ga), U(h, k.v2.positionWorld, k.vertexNormalsWorld[1], ha),
              U(h, k.v4.positionWorld, k.vertexNormalsWorld[3], ia), U(h, k.v3
                .positionWorld, k.vertexNormalsWorld[2], ja), ga.r = Math.max(
                0, Math.min(l.color.r * ga.r, 1)), ga.g = Math.max(0, Math.min(
                l.color.g * ga.g, 1)), ga.b = Math.max(0, Math.min(l.color.b *
                ga.b, 1)), ha.r = Math.max(0, Math.min(l.color.r * ha.r, 1)),
              ha.g = Math.max(0, Math.min(l.color.g * ha.g, 1)), ha.b = Math.max(
                0, Math.min(l.color.b * ha.b, 1)), ia.r = Math.max(0, Math.min(
                l.color.r * ia.r, 1)), ia.g = Math.max(0, Math.min(l.color.g *
                ia.g, 1)), ia.b = Math.max(0, Math.min(l.color.b * ia.b, 1)),
              ja.r = Math.max(0, Math.min(l.color.r * ja.r, 1)), ja.g = Math.max(
                0, Math.min(l.color.g * ja.g, 1)), ja.b = Math.max(0, Math.min(
                l.color.b * ja.b, 1)), E = ya(ga, ha, ia, ja), $(q, r, s, t,
                w, x), xa(q, r, s, t, w, x, 0, 0, 1, 0, 0, 1, E), $(y, z, u,
                v, A, B), xa(y, z, u, v, A, B, 1, 0, 1, 1, 0, 1, E)) : (_(q,
              r, s, t, u, v, w, x), l.wireframe ? ua(l.color, l.wireframeLinewidth,
              l.wireframeLinecap, l.wireframeLinejoin) : va(l.color)) : l instanceof THREE
            .MeshNormalMaterial ? (fa.r = Aa(k.normalWorld.x), fa.g = Aa(k.normalWorld
                .y), fa.b = Aa(k.normalWorld.z), _(q, r, s, t, u, v, w, x), l
              .wireframe ? ua(fa, l.wireframeLinewidth, l.wireframeLinecap, l
                .wireframeLinejoin) : va(fa)) : l instanceof THREE.MeshDepthMaterial &&
            (C = i.near, D = i.far, ga.r = ga.g = ga.b = 1 - za(a.positionScreen
                .z, C, D), ha.r = ha.g = ha.b = 1 - za(d.positionScreen.z, C,
                D), ia.r = ia.g = ia.b = 1 - za(f.positionScreen.z, C, D), ja
              .r = ja.g = ja.b = 1 - za(e.positionScreen.z, C, D), E = ya(ga,
                ha, ia, ja), $(q, r, s, t, w, x), xa(q, r, s, t, w, x, 0, 0,
                1, 0, 0, 1, E), $(y, z, u, v, A, B), xa(y, z, u, v, A, B, 1,
                0, 1, 1, 0, 1, E)))
        }

        function $(a, b, c, d, e, f) {
          V.beginPath(), V.moveTo(a, b), V.lineTo(c, d), V.lineTo(e, f), V.lineTo(
            a, b), V.closePath()
        }

        function _(a, b, c, d, e, f, g, h) {
          V.beginPath(), V.moveTo(a, b), V.lineTo(c, d), V.lineTo(e, f), V.lineTo(
            g, h), V.lineTo(a, b), V.closePath()
        }

        function ua(a, b, c, e) {
          aa != b && (V.lineWidth = aa = b), ba != c && (V.lineCap = ba = c),
            ca != e && (V.lineJoin = ca = e), d(a.getContextStyle()), V.stroke(),
            oa.inflate(2 * b)
        }

        function va(a) {
          e(a.getContextStyle()), V.fill()
        }

        function wa(a, b, c, d, f, g, h, i, j, k, l, m, n) {
          if (0 != n.image.width) {
            if (1 == n.needsUpdate || void 0 == ka[n.id]) {
              var o = n.wrapS == THREE.RepeatWrapping,
                p = n.wrapT == THREE.RepeatWrapping;
              ka[n.id] = V.createPattern(n.image, o && p ? "repeat" : o && !p ?
                  "repeat-x" : !o && p ? "repeat-y" : "no-repeat"), n.needsUpdate = !
                1
            }
            e(ka[n.id]);
            var o = n.offset.x / n.repeat.x,
              p = n.offset.y / n.repeat.y,
              q = n.image.width * n.repeat.x,
              r = n.image.height * n.repeat.y,
              h = (h + o) * q,
              i = (i + p) * r,
              j = (j + o) * q,
              k = (k + p) * r,
              l = (l + o) * q,
              m = (m + p) * r;
            c -= a, d -= b, f -= a, g -= b, j -= h, k -= i, l -= h, m -= i, o =
              j * m - l * k, 0 == o ? (void 0 == la[n.id] && (b = document.createElement(
                  "canvas"), b.width = n.image.width, b.height = n.image.height,
                a = b.getContext("2d"), a.drawImage(n.image, 0, 0), la[n.id] =
                a.getImageData(0, 0, n.image.width, n.image.height).data,
                delete b), b = la[n.id], h = 4 * (Math.floor(h) + Math.floor(
                i) * n.image.width), fa.setRGB(b[h] / 255, b[h + 1] / 255, b[
                h + 2] / 255), va(fa)) : (o = 1 / o, n = (m * c - k * f) * o, k =
                (m * d - k * g) * o, c = (j * f - l * c) * o, d = (j * g - l *
                  d) * o, a = a - n * h - c * i, h = b - k * h - d * i, V.save(),
                V.transform(n, k, c, d, a, h), V.fill(), V.restore())
          }
        }

        function xa(a, b, c, d, e, f, g, h, i, j, k, l, m) {
          var n, o;
          n = m.width - 1, o = m.height - 1, g *= n, h *= o, i *= n, j *= o, k *=
            n, l *= o, c -= a, d -= b, e -= a, f -= b, i -= g, j -= h, k -= g,
            l -= h, o = 1 / (i * l - k * j), n = (l * c - j * e) * o, j = (l *
              d - j * f) * o, c = (i * e - k * c) * o, d = (i * f - k * d) * o,
            a = a - n * g - c * h, b = b - j * g - d * h, V.save(), V.transform(
              n, j, c, d, a, b), V.clip(), V.drawImage(m, 0, 0), V.restore()
        }

        function ya(a, b, c, d) {
          var e = ~~(255 * a.r),
            f = ~~(255 * a.g),
            a = ~~(255 * a.b),
            g = ~~(255 * b.r),
            h = ~~(255 * b.g),
            b = ~~(255 * b.b),
            i = ~~(255 * c.r),
            j = ~~(255 * c.g),
            c = ~~(255 * c.b),
            k = ~~(255 * d.r),
            l = ~~(255 * d.g),
            d = ~~(255 * d.b);
          return P[0] = 0 > e ? 0 : e > 255 ? 255 : e, P[1] = 0 > f ? 0 : f >
            255 ? 255 : f, P[2] = 0 > a ? 0 : a > 255 ? 255 : a, P[4] = 0 > g ?
            0 : g > 255 ? 255 : g, P[5] = 0 > h ? 0 : h > 255 ? 255 : h, P[6] =
            0 > b ? 0 : b > 255 ? 255 : b, P[8] = 0 > i ? 0 : i > 255 ? 255 : i,
            P[9] = 0 > j ? 0 : j > 255 ? 255 : j, P[10] = 0 > c ? 0 : c > 255 ?
            255 : c, P[12] = 0 > k ? 0 : k > 255 ? 255 : k, P[13] = 0 > l ? 0 :
            l > 255 ? 255 : l, P[14] = 0 > d ? 0 : d > 255 ? 255 : d, N.putImageData(
              O, 0, 0), R.drawImage(M, 0, 0), Q
        }

        function za(a, b, c) {
          return a = (a - b) / (c - b), a * a * (3 - 2 * a)
        }

        function Aa(a) {
          return a = .5 * (a + 1), 0 > a ? 0 : a > 1 ? 1 : a
        }

        function Ba(a, b) {
          var c = b.x - a.x,
            d = b.y - a.y,
            e = c * c + d * d;
          0 != e && (e = 1 / Math.sqrt(e), c *= e, d *= e, b.x += c, b.y += d,
            a.x -= c, a.y -= d)
        }
        var Ca, Da, Ea, Fa;
        for (this.autoClear ? this.clear() : V.setTransform(1, 0, 0, -1, k, l),
          S.info.render.vertices = 0, S.info.render.faces = 0, f = T.projectScene(
            a, i, this.sortElements), g = f.elements, h = f.lights, (pa = h.length >
            0) && j(h), Ca = 0, Da = g.length; Da > Ca; Ca++) Ea = g[Ca], Fa =
          Ea.material, Fa = Fa instanceof THREE.MeshFaceMaterial ? Ea.faceMaterial :
          Fa, null == Fa || 0 == Fa.opacity || (oa.empty(), Ea instanceof THREE
            .RenderableParticle ? (m = Ea, m.x *= k, m.y *= l, W(m, Ea, Fa, a)) :
            Ea instanceof THREE.RenderableLine ? (m = Ea.v1, n = Ea.v2, m.positionScreen
              .x *= k, m.positionScreen.y *= l, n.positionScreen.x *= k, n.positionScreen
              .y *= l, oa.addPoint(m.positionScreen.x, m.positionScreen.y), oa.addPoint(
                n.positionScreen.x, n.positionScreen.y), ma.intersects(oa) && X(
                m, n, Ea, Fa, a)) : Ea instanceof THREE.RenderableFace3 ? (m =
              Ea.v1, n = Ea.v2, o = Ea.v3, m.positionScreen.x *= k, m.positionScreen
              .y *= l, n.positionScreen.x *= k, n.positionScreen.y *= l, o.positionScreen
              .x *= k, o.positionScreen.y *= l, Fa.overdraw && (Ba(m.positionScreen,
                n.positionScreen), Ba(n.positionScreen, o.positionScreen), Ba(
                o.positionScreen, m.positionScreen)), oa.add3Points(m.positionScreen
                .x, m.positionScreen.y, n.positionScreen.x, n.positionScreen.y,
                o.positionScreen.x, o.positionScreen.y), ma.intersects(oa) && Y(
                m, n, o, 0, 1, 2, Ea, Fa, a)) : Ea instanceof THREE.RenderableFace4 &&
            (m = Ea.v1, n = Ea.v2, o = Ea.v3, p = Ea.v4, m.positionScreen.x *=
              k, m.positionScreen.y *= l, n.positionScreen.x *= k, n.positionScreen
              .y *= l, o.positionScreen.x *= k, o.positionScreen.y *= l, p.positionScreen
              .x *= k, p.positionScreen.y *= l, da.positionScreen.copy(n.positionScreen),
              ea.positionScreen.copy(p.positionScreen), Fa.overdraw && (Ba(m.positionScreen,
                  n.positionScreen), Ba(n.positionScreen, p.positionScreen), Ba(
                  p.positionScreen, m.positionScreen), Ba(o.positionScreen, da.positionScreen),
                Ba(o.positionScreen, ea.positionScreen)), oa.addPoint(m.positionScreen
                .x, m.positionScreen.y), oa.addPoint(n.positionScreen.x, n.positionScreen
                .y), oa.addPoint(o.positionScreen.x, o.positionScreen.y), oa.addPoint(
                p.positionScreen.x, p.positionScreen.y), ma.intersects(oa) && Z(
                m, n, o, p, da, ea, Ea, Fa, a)), na.addRectangle(oa));
        V.setTransform(1, 0, 0, 1, 0, 0)
      }
  }, THREE.RenderableVertex = function() {
    this.positionWorld = new THREE.Vector3, this.positionScreen = new THREE.Vector4,
      this.visible = !0
  }, THREE.RenderableVertex.prototype.copy = function(a) {
    this.positionWorld.copy(a.positionWorld), this.positionScreen.copy(a.positionScreen)
  }, THREE.RenderableFace3 = function() {
    this.v1 = new THREE.RenderableVertex, this.v2 = new THREE.RenderableVertex,
      this.v3 = new THREE.RenderableVertex, this.centroidWorld = new THREE.Vector3,
      this.centroidScreen = new THREE.Vector3, this.normalWorld = new THREE.Vector3,
      this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE
        .Vector3
      ], this.faceMaterial = this.material = null, this.uvs = [
        []
      ], this.z = null
  }, THREE.RenderableFace4 = function() {
    this.v1 = new THREE.RenderableVertex, this.v2 = new THREE.RenderableVertex,
      this.v3 = new THREE.RenderableVertex, this.v4 = new THREE.RenderableVertex,
      this.centroidWorld = new THREE.Vector3, this.centroidScreen = new THREE.Vector3,
      this.normalWorld = new THREE.Vector3, this.vertexNormalsWorld = [new THREE
        .Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3
      ], this.faceMaterial = this.material = null, this.uvs = [
        []
      ], this.z = null
  }, THREE.RenderableObject = function() {
    this.z = this.object = null
  }, THREE.RenderableParticle = function() {
    this.rotation = this.z = this.y = this.x = null, this.scale = new THREE.Vector2,
      this.material = null
  }, THREE.RenderableLine = function() {
    this.z = null, this.v1 = new THREE.RenderableVertex, this.v2 = new THREE.RenderableVertex,
      this.material = null
  }, Particle3D = function(a) {
    THREE.Particle.call(this, a), this.velocity = new THREE.Vector3(0, -8, 0),
      this.velocity.rotateX(randomRange(-45, 45)), this.velocity.rotateY(
        randomRange(0, 360)), this.gravity = new THREE.Vector3(0, 0, 0), this.drag =
      1
  }, Particle3D.prototype = new THREE.Particle, Particle3D.prototype.constructor =
  Particle3D, Particle3D.prototype.updatePhysics = function() {
    this.velocity.multiplyScalar(this.drag), this.velocity.addSelf(this.gravity),
      this.position.addSelf(this.velocity)
  };
var TO_RADIANS = Math.PI / 180;
THREE.Vector3.prototype.rotateY = function(a) {
    cosRY = Math.cos(a * TO_RADIANS), sinRY = Math.sin(a * TO_RADIANS);
    var b = this.z,
      c = this.x;
    this.x = c * cosRY + b * sinRY, this.z = c * -sinRY + b * cosRY
  }, THREE.Vector3.prototype.rotateX = function(a) {
    cosRY = Math.cos(a * TO_RADIANS), sinRY = Math.sin(a * TO_RADIANS);
    var b = this.z,
      c = this.y;
    this.y = c * cosRY + b * sinRY, this.z = c * -sinRY + b * cosRY
  }, THREE.Vector3.prototype.rotateZ = function(a) {
    cosRY = Math.cos(a * TO_RADIANS), sinRY = Math.sin(a * TO_RADIANS);
    var b = this.x,
      c = this.y;
    this.y = c * cosRY + b * sinRY, this.x = c * -sinRY + b * cosRY
  },
  function(a) {
    function b(a) {
      var b = document.getElementsByTagName("style")[0];
      b || (b = document.createElement("style"), head = document.head ||
        document.getElementsByTagName("head")[0], b.type = "text/css", head.appendChild(
          b));
      var c = document.createTextNode(a);
      b.appendChild(c)
    }

    function c() {
      var a = [{
        value: 1,
        path: "1.7 0.1 0.1 0 -0.287 0 1.7 0.1 0 -0.287 0 0.1 1.6 0 -0.287 0 0 0 1.0 0"
      }, {
        value: 2,
        path: "2.1 -1.4 0.6 0.0 -0.12 -0.3 2.0 -0.3 0.0 -0.12 -1.1 -0.2 2.6 0.0 -0.12 0.0 0.0 0.0 1.0 0.0"
      }, {
        value: 3,
        path: "1.9 -0.3 -0.2 0 -0.341 -0.2  1.7 -0.1  0 -0.341 -0.1 -0.6 2.0 0 -0.341 0 0 0 1.0 0"
      }, {
        value: 4,
        path: "1.0 0.0 0.0 0.0 -0.26 0.0 1.1 0.0 0.0 -0.26 0.0 0.0 1.0 0.0 -0.26 0.0 0.0 0.0 1.0 0.0"
      }, {
        value: 5,
        path: "1.2 0.0 0.0 0.0 0.0 0.0 0.9 0.0 0.0 0.0 0.0 0.0 0.8 0.0 0.0 0 0 0 1.0 0"
      }, {
        value: 6,
        path: "0.8 0.3 0.1 0.0 0.182 0.1 0.9 0.0 0.0 0.182 0.1 0.3 0.7 0.0 0.182 0.0 0.0 0.0 1.0 0.0"
      }, {
        value: 7,
        path: "0.9 0 0 0 0.255 0 0.9 0 0 0.255 0 0 0.9 0 0.255 0 0 0 1.0 0"
      }, {
        value: 8,
        path: "0.6 0.3 0.1 0 0.28745 0.2 0.7 0.1 0 0.28745 0.2 0.3 0.4 0 0.28745 0 0 0 1.0 0"
      }, {
        value: 9,
        path: "0.8 1.6 0.2 0 -0.639 0.8 1.6 0.2 0 -0.639 0.8 1.6 0.2 0 -0.639 0 0 0 1.0 0"
      }, {
        value: 10,
        path: "0.2 0.5 0.1 0 0.16 0.2 0.5 0.1 0 0.16 0.2 0.5 0.1 0 0.16 0 0 0 1 0"
      }, {
        value: 11,
        path: "4.8 -1.0 -0.1 0 -1.523 -0.5 4.4 -0.1 0 -1.523 -0.5 -1.0 5.2 0 -1.523 0 0 0 1.0 0"
      }];
      return a
    }

    function d(a, b) {
      for (var c = 0; c < a.length; c++) {
        var d = [];
        $.each(b, function(b, e) {
          var f, g = $(e).attr("style");
          if (g) {
            for (var h = g.split(";"), i = 0, j = h.length; j > i; i++)
              if (h[i].indexOf("fill:") >= 0) {
                f = h[i].split(":")[1];
                break
              }
          } else f = $(e).attr("fill");
          f === a[c].svgFill && d.push(b)
        }), a[c].elements = d
      }
      return a
    }

    function e(a, b, c, d) {
      var e = {},
        f = a / b,
        g = c / d;
      return f > g ? (e.width = c, e.height = c / f) : (e.height = d, e.width =
        d * f), e
    }

    function f(a, b, c) {
      var d, e = a.properties.lineChart,
        f = [],
        g = "",
        h = "",
        i = "",
        j = [],
        k = [],
        l = [],
        m = [],
        n = [];
      c.datasets.forEach(function(a) {
        m.push(a.strokeColor), n.push(a.fillColor)
      });
      for (var o = 0; o < m.length; o++) "line" === e.chartType ? m[o] = e.fillColors[
        o] : n[o] = e.fillColors[o];
      for (var p = e.segments, q = 0; q < p.length; q++) d = p[q], g = isNaN(d.value1) ||
        d.value1 < 0 ? 0 : d.value1, h = isNaN(d.value2) || d.value2 < 0 ? 0 :
        d.value2, i = isNaN(d.value3) || d.value3 < 0 ? 0 : d.value3, (d.label ||
          g || h || i) && (f.push(d.label), j.push(g), k.push(h), l.push(i));
      var r = {
          labels: f,
          datasets: [{
            label: e.lengends[0],
            fillColor: n[0],
            strokeColor: m[0],
            pointColor: m[0],
            pointStrokeColor: "#fff",
            data: j
          }, {
            label: e.lengends[1],
            fillColor: n[1],
            strokeColor: m[1],
            pointColor: m[1],
            pointStrokeColor: "#fff",
            data: k
          }, {
            label: e.lengends[2],
            fillColor: n[2],
            strokeColor: m[2],
            pointColor: m[2],
            pointStrokeColor: "#fff",
            data: l
          }]
        },
        s = c.options;
      return e.options && e.options.scaleFontColor && (s.scaleFontColor = e.options
          .scaleFontColor), c.destroy(), c = new Chart(b).Line(r, s), c.datasets
        .forEach(function(a) {
          var b = !0;
          a.points.forEach(function(a) {
            a.value && (b = !1)
          }), b ? a.points.length = 0 : a.points.forEach(function(a) {
            a.value || (a.value = 0)
          })
        }), c.update(), c
    }

    function g(a, b, c) {
      for (var d, e = c.options, f = a.properties.barChart, g = [], h = "", i =
          "", j = "", k = [], l = [], m = [], n = f.segments, o = 0; o < n.length; o++) {
        var d = n[o];
        h = isNaN(d.value1) || d.value1 < 0 ? "" : d.value1, i = isNaN(d.value2) ||
          d.value2 < 0 ? "" : d.value2, j = isNaN(d.value3) || d.value3 < 0 ?
          "" : d.value3, (d.label || h || i || j) && (g.push(d.label), k.push(h),
            l.push(i), m.push(j))
      }
      var p = {
        labels: g,
        datasets: [{
          fillColor: f.fillColors[0],
          strokeColor: "rgba(0,0,0,0)",
          data: k,
          label: f.lengends[0]
        }, {
          fillColor: f.fillColors[1],
          strokeColor: "rgba(0,0,0,0)",
          data: l,
          label: f.lengends[1]
        }, {
          fillColor: f.fillColors[2],
          strokeColor: "rgba(0,0,0,0)",
          data: m,
          label: f.lengends[2]
        }]
      };
      return f.options && f.options.scaleFontColor && (e.scaleFontColor = f.options
        .scaleFontColor), c.destroy(), new Chart(b).Bar(p, e)
    }

    function h(a, b, c) {
      var d = c.options,
        e = "#000",
        f = a.properties.pieChart;
      f.options && f.options.scaleFontColor && (e = f.options.scaleFontColor),
        d.scaleFontColor = e, d.onAnimationComplete = function() {
          var a = this.chart.ctx,
            b = this.segments;
          a.textAlign = "start", a.textBaseline = "middle";
          for (var c = 0, d = 0; d < b.length; d++) c += parseFloat(b[d].value);
          a.fillText(c, a.width / 2 - 20, a.height / 2, 100);
          for (var d = 0; d < b.length; d++) {
            var f = b[d].startAngle + (b[d].endAngle - b[d].startAngle) / 2,
              g = (b[d].outerRadius - b[d].innerRadius) / 1.5 + b[d].innerRadius,
              h = b[d].x + Math.cos(f) * g,
              i = b[d].y + Math.sin(f) * g;
            a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = e,
              a.font = "normal 12px Helvetica", a.fillText(b[d].value, h, i)
          }
        };
      var g = f;
      f.segments && (g = f.segments);
      for (var h = 0; h < g.length; h++)(isNaN(g[h].value) || g[h].value < 0) &&
        (g[h].value = "");
      return c.destroy(), new Chart(b).Pie(g, d)
    }

    function i(a) {
      var b = [{
          value: 300,
          color: "#57c7d4",
          label: "1月"
        }, {
          value: 150,
          color: "#3aa99e",
          label: "2月"
        }, {
          value: 100,
          color: "#f2a654",
          label: "3月"
        }, {
          value: 140,
          color: "#f96868",
          label: "4月"
        }, {
          value: 120,
          color: "#926dde",
          label: "5月"
        }],
        c = {
          segmentShowStroke: !1,
          showTooltips: !1,
          scaleFontColor: "#000",
          legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><%if(segments[i].label){%><span style="background-color:<%=segments[i].fillColor%>"></span><%=segments[i].label%><%}%></li><%}%></ul>',
          animation: !1,
          onAnimationComplete: function() {
            var a = this.chart.ctx,
              b = this.segments;
            a.textAlign = "start", a.textBaseline = "middle";
            for (var c = 0, d = 0; d < b.length; d++) c += parseFloat(b[d].value);
            a.fillText(c, a.width / 2 - 20, a.height / 2, 100);
            for (var d = 0; d < b.length; d++) {
              var e = b[d].startAngle + (b[d].endAngle - b[d].startAngle) / 2,
                f = (b[d].outerRadius - b[d].innerRadius) / 1.5 + b[d].innerRadius,
                g = b[d].x + Math.cos(e) * f,
                h = b[d].y + Math.sin(e) * f;
              a.textAlign = "center", a.textBaseline = "middle", a.fillStyle =
                "#000", a.font = "normal 12px Helvetica", a.fillText(b[d].value,
                  g, h)
            }
          }
        },
        d = new Chart(a).Pie(b, c);
      return d
    }

    function j(a) {
      var b = {
          labels: ["1月", "2月", "3月", "4月", "5月"],
          datasets: [{
            fillColor: "#62a8ea",
            strokeColor: "rgba(0,0,0,0)",
            data: [60, 70, 80, 56, 40],
            label: "图例1"
          }, {
            fillColor: "#926dde",
            strokeColor: "rgba(0,0,0,0)",
            data: [80, 56, 40, 93, 112],
            label: "图例2"
          }, {
            fillColor: "#f2a654",
            strokeColor: "rgba(0,0,0,0)",
            data: [160, 86, 140, 123, 23],
            label: "图例3"
          }]
        },
        c = {
          showTooltips: !1,
          scaleShowLabels: !0,
          scaleShowGridLines: !1,
          scaleBeginAtZero: !0,
          legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><%if(datasets[i].label){%><span style="background-color:<%=datasets[i].fillColor%>"></span><%=datasets[i].label%><%}%></li><%}%></ul>',
          animation: !1,
          onAnimationComplete: function() {
            var a = this.chart.ctx;
            a.fillStyle = this.scale.textColor, a.font =
              "normal 12px Helvetica", a.textAlign = "center", a.textBaseline =
              "bottom", this.datasets.forEach(function(b) {
                b.bars.forEach(function(b) {
                  a.fillText(b.value, b.x, b.y)
                })
              })
          }
        },
        d = new Chart(a).Bar(b, c);
      return d
    }

    function k(a, b) {
      var c = ["rgba(255,255,255,0)", "rgba(255,255,255,0)",
          "rgba(255,255,255,0)"
        ],
        d = ["rgba(146,109,222,1)", "rgba(87,199,212,1)", "rgba(242,166,84,1)"],
        e = !1,
        f =
        '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><%if(datasets[i].label){%><span style="background-color:<%=datasets[i].pointColor%>"></span><%=datasets[i].label%><%}%></li><%}%></ul>';
      "curve" === b && (c = ["rgba(146, 109, 222,0.2)", "rgba(87,199,212,0.2)",
          "rgba(242,166,84,0.2)"
        ], e = !0, f =
        '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><%if(datasets[i].label){%><span style="background-color:<%=datasets[i].fillColor%>"></span><%=datasets[i].label%><%}%></li><%}%></ul>'
      );
      var g = {
          labels: ["1月", "2月", "3月", "4月", "5月"],
          datasets: [{
            label: "图例1",
            fillColor: c[0],
            strokeColor: d[0],
            pointColor: d[0],
            pointStrokeColor: "#fff",
            data: [28, 24, 40, 19, 27]
          }, {
            label: "图例2",
            fillColor: c[1],
            strokeColor: d[1],
            pointColor: d[1],
            pointStrokeColor: "#fff",
            data: [123, 132, 146, 118, 189]
          }, {
            label: "图例3",
            fillColor: c[2],
            strokeColor: d[2],
            pointColor: d[2],
            pointStrokeColor: "#fff",
            data: [201, 232, 256, 215, 278]
          }]
        },
        h = {
          showTooltips: !1,
          scaleShowLabels: !0,
          scaleShowGridLines: !1,
          scaleBeginAtZero: !0,
          bezierCurve: e,
          legendTemplate: f,
          animation: !1,
          onAnimationComplete: function() {
            var a = this.chart.ctx,
              b = this.scale.max;
            a.font = this.scale.font, a.fillStyle = this.scale.textColor, a.textAlign =
              "center", a.textBaseline = "bottom", this.datasets.forEach(
                function(c) {
                  c.points.forEach(function(d, e) {
                    var f = 5;
                    b - d.value < 10 && (f = 0), 0 === e ? a.fillText(d.value,
                        d.x + 10, d.y - f) : e === c.points.length - 1 ?
                      a.fillText(d.value, d.x - 10, d.y - f) : a.fillText(
                        d.value, d.x, d.y - f)
                  })
                })
          }
        },
        i = new Chart(a).Line(g, h);
      return i
    }

    function l(a, b) {
      "view" === t.mode && b.properties.url && $(a).click(function() {
        var a = b.properties.url;
        isNaN(a) ? window.open(a) : eqxiu.pageScroll(a)
      })
    }

    function m(a) {
      $(a).bind("touchstart mousedown", function(a) {
        a.stopPropagation()
      })
    }

    function n(a) {
      a.focus(function() {
        eqxiu.pauseAutoFlip()
      }).blur(function() {
        $(document).trigger("startAutoFlip")
      })
    }

    function o(a) {
      for (var b = $(a).find("a[data]"), c = 0; c < b.length; c++)
        if (b[c] && "view" === t.mode) {
          $(b[c]).css("cursor", "pointer");
          var d = $(b[c]).attr("data");
          !
          function(a) {
            b[c].removeAttribute("href"), $(b[c]).click(function() {
              eqxiu.pageScroll(a)
            })
          }(d)
        }
    }

    function p(b, c, d) {
      var e = PREFIX_S1_URL + "scene/msg/list?sceneId=" + b;
      d && (e += "&lastTime=" + d), e += "&date=" + (new Date).getTime(), $.ajax({
        type: "GET",
        url: e,
        success: function(b) {
          if (b.success) {
            for (var d, e, f, g = document.createDocumentFragment(), h =
                b.list, i = 0; i < h.length; i++) e = h[i].url ?
              '<div class="headimg" style="background-image:url(' + h[i].url +
              ')"></div>' :
              '<div class="headimg headimg-bg"><div class="logo-scale"><em class="eqf-eqxiu"></em></div></div>',
              d = $('<div class="record">' + e + '<div class="name">' + h[
                  i].name + '</div><div class="mes">' + h[i].content +
                '</div><div class="time">' + a.DateFormit(h[i].createTime,
                  "MM月DD日") + "</div></div>").get(0), g.appendChild(d);
            10 === h.length ? f = h[h.length - 1].createTime : 0 === h.length &&
              (f = 0), d && g.appendChild(d), c(g, f)
          }
        }
      })
    }

    function q(a, b) {
      if (b.trigger) {
        var c = $(a);
        c.attr("data-event", "1120603"), w && clearTimeout(w), b.trigger.sends &&
          b.trigger.sends.length && $.each(b.trigger.sends, function(a, b) {
            c.bind(utilTrigger.getSendType(b.type).name, function() {
              w = setTimeout(function() {
                $.each(b.handles, function(a, b) {
                  var c = utilTrigger.getHandleType(b.type).name;
                  $.each(b.ids, function(a, b) {
                    var d;
                    d = $("#inside_" + b, ".phone-view").length ?
                      $("#inside_" + b, ".phone-view") : $(
                        "#inside_" + b), d.trigger(c)
                  })
                })
              }, 1e3 * b.delay)
            })
          })
      }
    }

    function r(b, c) {
      if (c.sound) {
        var d = $(b),
          e = $("#media").get(0);
        0 === c.sound.src.indexOf("http://") ? c.sound.src = c.sound.src : c.sound
          .src = PREFIX_FILE_HOST + c.sound.src, utilSound.addAudio(b, c.sound.src),
          d.click(function() {
            utilSound.play(b, function() {
              e && a.executePlay()
            }, function() {
              e && a.executePause()
            })
          })
      }
    }
    var t = a.templateParser("jsonParser", function() {
      function a(a) {
        return function(b, c) {
          a[b] = c
        }
      }

      function c(a, c) {
        try {
          var d = j[("" + a.type).charAt(0)](a, c)
        } catch (e) {
          return
        }
        if (d) {
          var f = $(
              '<li comp-drag comp-rotate class="comp-resize comp-rotate inside" id="inside_' +
              a.id + '" num="' + a.num + '" ctype="' + a.type + '"></li>'),
            g = ("" + a.type).charAt(0);
          if ("3" !== g && "1" !== g && f.attr("comp-resize", ""), "p" ===
            g ? f.removeAttr("comp-rotate") : "1" === g ? f.removeAttr(
              "comp-drag") : "2" === g ? f.addClass("wsite-text") : "x" ===
            g ? f.addClass("show-text") : "4" === g ? (a.properties.imgStyle &&
              $(d).css(a.properties.imgStyle), f.addClass("wsite-image")) :
            "n" === g ? f.addClass("wsite-image") : "h" === g ? f.addClass(
              "wsite-shape") : "5" === g ? f.addClass("wsite-input") : "6" ===
            g ? f.addClass("wsite-button") : "8" === g ? f.addClass(
              "wsite-button") : "v" === g ? f.addClass("wsite-video") : "b" ===
            g && (f.addClass("wsite-boards"), f.attr("min-h", 60), f.attr(
              "min-w", 230)), "v" === ("" + a.type).charAt(0) && f.addClass(
              "wsite-video"), a.properties && a.properties.lock && f.addClass(
              "alock"), f.mouseenter(function() {
              $(this).addClass("inside-hover")
            }), f.mouseleave(function() {
              $(this).removeClass("inside-hover")
            }), "edit" === t.mode || "x" !== ("" + a.type).charAt(0)) {
            var h = $('<div class="element-box-contents">'),
              i = $('<div class="element-box">').append(h.append(d));
            f.append(i), "5" !== ("" + a.type).charAt(0) && "6" !== ("" + a
                .type).charAt(0) && "r" !== a.type && "c" !== a.type && "a" !==
              a.type && "8" !== a.type && "l" !== a.type && "s" !== a.type &&
              "i" !== a.type && "h" !== a.type && "z" !== a.type || "edit" !==
              c || $(d).before($(
                '<div class="element" style="position: absolute; height: 100%; width: 100%;z-index: 1;">'
              ))
          }
          var k, l = a.fonts || a.css.fontFamily || a.fontFamily;
          if ("2" === g || "x" === g) {
            for (var m = a.content, n = /font-family:(.*?);/g, o = [], p = []; null !==
              (o = n.exec(m));) p.push(o[1].trim());
            if (1 !== p.length || "defaultFont" !== p[0] && "moren" !== p[0] ||
              (l = null), l) {
              if ("view" === t.mode && a.css.fontFamily && window.scene &&
                (window.scene.publishTime || !mobilecheck() && !tabletCheck() ||
                  (k = "@font-face{font-family:" + a.css.fontFamily +
                    ';src: url("' + a.properties.localFontPath +
                    '") format("truetype");}', b(k))), "object" == typeof l &&
                l.constructor === Object) {
                if (!jQuery.isEmptyObject(l))
                  for (var q in l) u[q] || ("edit" === t.mode ? k =
                    "@font-face{font-family:" + q + ";src: url(" +
                    PREFIX_FILE_HOST + l[q] + ") format(woff);}" : window
                    .scene && window.scene.publishTime && (k =
                      "@font-face{font-family:" + q + ';src: url("' +
                      PREFIX_S2_URL + "fc/" + q + "_" + a.sceneId + "_" +
                      scene.publishTime + '.woff") format("woff");}'), b(
                      k), u[q] = !0)
              } else u[l] || ("edit" === t.mode ? k =
                "@font-face{font-family:" + l + ";src: url(" +
                PREFIX_FILE_HOST + a.preWoffPath + ") format(woff);}" :
                window.scene && window.scene.publishTime && (k =
                  "@font-face{font-family:" + l + ';src: url("' +
                  PREFIX_S2_URL + "fc/" + l + "_" + a.sceneId + "_" +
                  scene.publishTime + '.woff") format("woff");}'), b(k),
                u[l] = !0);
              "edit" === t.mode && localStorage.setItem(
                "shoppingFontFamily", JSON.stringify(u))
            }
          }
          if (a.css) {
            var r = 320 - parseInt(a.css.left, 10);
            if (f.css({
                width: r
              }), f.css({
                width: a.css.width,
                height: a.css.height,
                left: a.css.left,
                top: a.css.top,
                zIndex: a.css.zIndex,
                bottom: a.css.bottom,
                transform: a.css.transform
              }), (0 === a.css.boxShadowSize || "" + a.css.boxShadowSize ==
                "0") && (a.css.boxShadow = "0px 0px 0px rgba(0,0,0,0.5)"),
              "edit" !== t.mode && "x" === ("" + a.type).charAt(0)) return f
              .append(d), f.find(".element-box").css({
                borderStyle: a.css.borderStyle,
                borderWidth: a.css.borderWidth,
                borderColor: a.css.borderColor,
                borderTopLeftRadius: a.css.borderTopLeftRadius,
                borderTopRightRadius: a.css.borderTopRightRadius,
                borderBottomRightRadius: a.css.borderBottomRightRadius,
                borderBottomLeftRadius: a.css.borderBottomLeftRadius,
                boxShadow: a.css.boxShadow,
                backgroundColor: a.css.backgroundColor,
                opacity: a.css.opacity,
                width: "100%",
                height: "100%",
                overflow: "hidden"
              }), f.find("img").css({
                width: "100%"
              }), f;
            isAndroid() && isWeixin() && "" + a.type == "4" && "0px" !== a.css
              .borderRadius && 0 === a.css.borderWidth && a.properties.anim &&
              (a.css.borderWidth = 1, a.css.borderColor = "rgba(0,0,0,0)");
            var s = $.extend(!0, {}, a.css);
            delete s.fontFamily, i.css(s).css({
                width: "100%",
                height: "100%",
                transform: "none"
              }), i.children(".element-box-contents").css({
                width: "100%",
                height: "100%"
              }), "4" !== ("" + a.type).charAt(0) && "n" !== ("" + a.type).charAt(
                0) && "p" !== ("" + a.type).charAt(0) && "h" !== ("" + a.type)
              .charAt(0) && "t" !== ("" + a.type).charAt(0) && "z" !== ("" +
                a.type).charAt(0) && $(d).css({
                width: a.css.width,
                height: a.css.height
              }), ("w01" === a.type || "w02" === a.type) && $(d).css({
                lineHeight: a.css.height + "px"
              }), "h" === ("" + a.type).charAt(0) && ($(d).find("g").length ?
                $(d).find("g").attr("fill", a.css.color) : $(d).children().attr(
                  "fill", a.css.color), i.children(".element-box-contents")
                .css("position", "relative"))
          }
          return f
        }
      }

      function d(a) {
        for (var b = 0; b < a.length - 1; b++)
          for (var c = b + 1; c < a.length; c++)
            if (parseInt(a[b].css.zIndex, 10) > parseInt(a[c].css.zIndex,
                10)) {
              var d = a[b];
              a[b] = a[c], a[c] = d
            }
        for (var e = 0; e < a.length; e++) a[e].css.zIndex = e + 1 + "";
        return a
      }

      function e(a, b, e) {
        b = b.find(".edit_area");
        var f, g = a.elements;
        if (g)
          for (g = d(g), f = 0; f < g.length; f++)
            if (g[f].sceneId = a.sceneId, "" + g[f].type == "3") {
              var h = j[("" + g[f].type).charAt(0)](g[f], b);
              "edit" === e && k[("" + g[f].type).charAt(0)] && k[("" + g[f]
                .type).charAt(0)](h, g[f])
            } else {
              var i = c(g[f], e);
              if (!i) continue;
              b.append(i);
              for (var n = 0; n < m.length; n++) m[n](i, g[f], e);
              l[("" + g[f].type).charAt(0)] && (l[("" + g[f].type).charAt(0)]
                  (i, g[f]), "edit" !== e && (q(i, g[f]), r(i, g[f]))),
                "edit" === e && k[("" + g[f].type).charAt(0)] && k[("" + g[
                  f].type).charAt(0)](i, g[f])
            }
      }

      function f() {
        return k
      }

      function g() {
        return j
      }

      function h(a) {
        m.push(a)
      }

      function i() {
        return m
      }
      var j = {},
        k = {},
        l = {},
        m = [],
        n = containerWidth = 320,
        o = containerHeight = 486,
        p = 1,
        s = 1,
        v = {
          getComponents: g,
          getEventHandlers: f,
          addComponent: a(j),
          bindEditEvent: a(k),
          bindAfterRenderEvent: a(l),
          addInterceptor: h,
          getInterceptors: i,
          wrapComp: c,
          disEvent: !1,
          mode: "view",
          parse: function(a) {
            var b = $('<div class="edit_wrapper" data-scene-id="' + a.def
                .sceneId + '"><ul eqx-edit-destroy id="edit_area' + a.def
                .id +
                '" paste-element class="edit_area weebly-content-area weebly-area-active"></div>'
              ),
              c = this.mode = a.mode;
            this.def = a.def, a.disEvent && (this.disEvent = !0), "view" ===
              c && tplCount++;
            var d = $(a.appendTo);
            return containerWidth = d.width(), containerHeight = d.height(),
              p = n / containerWidth, s = o / containerHeight, e(a.def, b
                .appendTo($(a.appendTo)), c)
          }
        };
      return v
    });
    t.addInterceptor(function(a, b, c) {
      eqxCommon.animation(a, b, c, t.def.properties)
    }), t.addComponent("1", function(a) {
      var b = document.createElement("div");
      if (b.id = a.id, b.setAttribute("class", "element comp_title"), a.content &&
        (b.textContent = a.content), a.css) {
        var c, d = a.css;
        for (c in d) b.style[c] = d[c]
      }
      if (a.properties.labels)
        for (var e = a.properties.labels, f = 0; f < e.length; f++) $(
            '<a class = "label_content" style = "display: inline-block;">')
          .appendTo($(b)).html(e[f].title).css(e[f].color).css("width", 100 /
            e.length + "%");
      return b
    });
    var u = {};
    t.addComponent("2", function(a) {
      var b = document.createElement("div");
      return b.id = a.id, b.setAttribute("ctype", a.type), b.setAttribute(
        "class", "element comp_paragraph editable-text"), a.content && (a
        .properties.anim && a.properties.anim.length && "typer" === a.properties
        .anim[0].type && "view" === t.mode ? b.innerHTML = "" : b.innerHTML =
        a.content), b.style.cursor = "default", a.css.fontSize && (b.style
        .fontSize = a.css.fontSize + "px"), b
    }), t.addComponent("x", function(a) {
      function b() {
        c = document.createElement("div"), c.id = a.id, c.setAttribute(
          "ctype", a.type), c.setAttribute("class",
          "element comp_paragraph editable-text"), a.content && (c.innerHTML =
          a.content), c.style.cursor = "default"
      }
      var c;
      return !mobilecheck() && window.top === window.self && $(
        ".create_left").get(0) && (t.mode = "edit"), b(), c
    }), t.addComponent("3", function(b, c) {
      var d, e = document.createElement("div");
      if ("edit" === t.mode ? (d = c ? c.parent(".edit_wrapper") : $(
          "#nr .edit_wrapper"), e.setAttribute("class",
          "wrapper-background"), e.setAttribute("id", b.id)) : "view" === t
        .mode && (d = c ? c.parent(".edit_wrapper") : $("#edit_area" + t.def
          .id).parent(".edit_wrapper"), e.setAttribute("id",
          "wrapper-background" + t.def.id)), 2 !== b.properties.croptype ||
        "edit" === t.mode || t.def.istpl) {
        var f = "100%";
        $(e).prependTo(d), 2 !== b.properties.croptype || t.def.istpl || (f =
          486 * b.properties.pageLength + "px", $(e).parent().css(
            "overflow", "visible")), $(e).css({
          width: "100%",
          height: f
        })
      }
      var g, h = new Image;
      if (b.properties.imgSrc) {
        g = b.properties.imgSrc;
        var i = /\?imageMogr2/,
          j = /.svg/;
        if (a.isMobileApp() || j.test(g) || (g += i.test(g) ? "" : ""), 2 ===
          b.properties.croptype && "view" === t.mode && !t.def.istpl) {
          var k = "";
          return k = /^http.*!/.test(g) ? "url(" + g + ")" : "url(" +
            PREFIX_FILE_HOST + g + ")", c.parent().css({
              backgroundImage: k,
              height: 486 * (b.properties.pageLength - 1) + (mobilecheck() ?
                $(document).height() : 486) + "px"
            }), e
        }
        /^http.*!/.test(g) ? (h.src = g, e.style.backgroundImage = "url(" +
            g + ")") : (h.src = PREFIX_FILE_HOST + g, e.style.backgroundImage =
            "url(" + PREFIX_FILE_HOST + g + ")"), e.style.backgroundOrigin =
          "element content-box", e.style.backgroundSize = "cover", e.style.backgroundPosition =
          "50% 50%", b.effect && ("scaleUp" === b.effect.type ? $(e).css({
            animation: "scaleUp 7s ease 1s",
            "animation-fill-mode": "both"
          }) : "scaleDown" === b.effect.type && $(e).css({
            animation: "scaleDown 7s ease 1s",
            "animation-fill-mode": "both"
          }))
      } else b.properties.bgColor && (e.style.backgroundColor = b.properties
        .bgColor, b.properties.pageLength && "edit" === t.mode && $(e).css({
          height: 486 * b.properties.pageLength + "px"
        }).parent().css("overflow", "visible"));
      return e
    }), t.addComponent("4", function(b) {
      var d, e = new RegExp(a.getDomain(PREFIX_FILE_HOST)),
        f = /^http.*/.test(b.properties.src) ? b.properties.src :
        PREFIX_FILE_HOST + b.properties.src;
      a.isMobileApp() || (f = f.replace(OLD_FILE_HOST, PREFIX_FILE_HOST));
      var g = /\?imageMogr2/,
        h = /.svg/;
      if (e.test(f) && !h.test(f))
        if (g.test(f)) f += "/strip";
        else {
          var i = b.css;
          if (i) {
            var j = parseInt(b.css.height, 10),
              k = parseInt(b.css.width, 10);
            f += 600 >= j && 600 >= k ? "" : ""
          } else f += "?imageMogr2/strip"
        }
      if (b.properties.filter) {
        if (b.properties.filter.type) {
          var l = c(),
            m = l[b.properties.filter.type - 1];
          d = document.createElement("div");
          var n;
          n = mobilecheck() ?
            '<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><image width="100%" height="100%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' +
            f + '" filter="url(#' + b.id + ')"></image><defs><filter id="' +
            b.id +
            '"><feColorMatrix class="saturation" color-interpolation-filters="sRGB" type="matrix" values="' +
            m.path + '"></feColorMatrix></filter></defs></g></svg>' :
            '<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><image width="100%" height="100%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' +
            f + '" filter="url(' + window.location.href + "#" + b.id +
            ')"></image><defs><filter id="' + b.id +
            '"><feColorMatrix class="saturation" color-interpolation-filters="sRGB" type="matrix" values="' +
            m.path + '"></feColorMatrix></filter></defs></g></svg>', d.innerHTML =
            n
        }
      } else d = document.createElement("img"), d.id = b.id, d.setAttribute(
        "ctype", b.type), d.setAttribute("class",
        "element comp_image editable-image"), d.src = f;
      return "" + b.type == "403" && d.setAttribute("data-event", "1120611"),
        "" + b.type == "403" && b.properties.wxSrc && isWeixin() && (d.style
          .display = "none"), d
    }), t.addComponent("h", function(a) {
      var b, c;
      if (a.properties.src) return b = document.createElementNS(eqxiuSvg.NAMESPACE,
        "svg"), b.setAttribute("class", "element svg-element"), $.ajax({
        type: "GET",
        url: PREFIX_FILE_HOST + a.properties.src,
        dataType: "xml",
        success: function(c) {
          var e = c.getElementsByTagName("svg"),
            f = parseFloat($(e).attr("width")),
            g = parseFloat($(e).attr("height")),
            h = $(e).find('[fill], [style*="fill"]'),
            i = a.properties.items ? a.properties.items : [];
          if (a.properties.items)
            if (i[0].elements || (a.properties.items = d(i, h)), h.length ===
              i.length)
              for (var j = 0; j < i.length; j++) h.eq(j).css({
                fill: i[j].fill
              });
            else $.each(h, function(a, b) {
              for (var c = 0; c < i.length; c++)
                for (var d = i[c].elements, e = 0; e < d.length; e++)
                  a === d[e] && ("" !== i[c].fill ? h.eq(a).css({
                    fill: i[c].fill
                  }) : h.eq(a).css({
                    fill: "none"
                  }))
            });
          else {
            var k = [],
              l = {};
            $.each(h, function(a, b) {
              var c = $(b).attr("style");
              if (c) {
                for (var d = c.split(";"), e = 0, f = d.length; f >
                  e; e++)
                  if (d[e].indexOf("fill:") >= 0) {
                    k.push(d[e].split(":")[1]);
                    break
                  }
              } else k.push($(b).attr("fill"))
            });
            for (var m = 0; m < k.length; m++) l[k[m]] || (l[k[m]] =
              1, "none" !== k[m] ? i.push({
                fill: k[m],
                svgFill: k[m]
              }) : i.push({
                fill: "",
                svgFill: "none"
              }));
            a.properties.items = d(i, h)
          }
          viewBoxVal = "0 0 " + f + " " + g;
          var n = b.parentNode;
          n.removeChild(b), b = e[0], n.appendChild(b), b.setAttribute(
              "viewBox", viewBoxVal), b.setAttribute(
              "preserveAspectRatio", "none"), b.setAttribute(
              "width", "100%"), b.setAttribute("height", "100%"), b
            .id = a.id, b.setAttribute("class",
              "element svg-element")
        }
      }), b;
      if (a.properties.type.indexOf("symbol") < 0) {
        var b = document.createElementNS(eqxiuSvg.NAMESPACE, "svg");
        return b.id = a.id, b.setAttribute("class", "element svg-element"),
          b.setAttribute("xmlns", eqxiuSvg.NAMESPACE), b.setAttribute(
            "version", "1.1"), b.setAttribute("width", "100%"), b.setAttribute(
            "height", "100%"), b.setAttribute("preserveAspectRatio", "none"),
          c = eqxiuSvg.ShapeFromType(a.properties.type), c.setAttribute(
            "fill", "#555"), b.appendChild(c), s = eqxiuSvg.boundingBox(c),
          viewBox = [Math.round(s.x) || 0, Math.round(s.y) || 0, Math.round(
            s.width) || 32, Math.round(s.height) || 32].join(" "), b.setAttribute(
            "viewBox", viewBox), b
      }
      return b = document.createElement("div"), c = eqxiuSvg.ShapeFromType(
          a.properties.type, 100, 100, a.id, a.css.color), b = '<svg id="' +
        a.id + '" class="element svg-element" ctype="' + a.type +
        '" xmlns="' + eqxiuSvg.NAMESPACE +
        '" version="1.1" width="100%" height="100%" preserveAspectRatio="xMidYMid" viewBox="' +
        a.properties.viewBox + '">' + c + "</svg>"
    }), t.addComponent("v", function(a) {
      var b = document.createElement("a");
      return b.setAttribute("class", "element video_area"), b.id = a.id, b.setAttribute(
        "ctype", a.type), a.properties.src && b.setAttribute("videourl",
        a.properties.src), b
    }), t.addComponent("5", function(a) {
      var b = document.createElement("textarea");
      return b.id = a.id, b.setAttribute("ctype", a.type), b.setAttribute(
          "class", "element comp_input editable-text"), b.setAttribute(
          "maxlength", "300"), a.properties.required && b.setAttribute(
          "required", a.properties.required), a.properties.placeholder && b
        .setAttribute("placeholder", a.properties.placeholder), b.setAttribute(
          "name", "eq[f_" + a.id + "]"), b.style.width = "100%", b
    }), t.addComponent("r", function(a) {
      var b = $('<div class="element comp_radio editable-text" id="' + a.id +
        '"></div>');
      b.attr("ctype", a.type), b.attr("required", a.properties.required), b
        .attr("title", a.title), b.attr("name", "eq[f_" + a.id + "]");
      var c = $('<div class="radio-title">' + a.title + "</div>");
      a.properties.titleStyle && c.css(a.properties.titleStyle), b.append(c);
      var d = $('<div class="options"></div>'),
        e = JSON.parse(a.choices);
      return $.each(e.options, function(b, c) {
        var f = $(
          '<div class="option-group"><label class="option-label" for="' +
          (a.id + "" + (b + 1)) +
          '" data-event="11208"><input class="option" id="' + (a.id +
            "" + (b + 1)) + '" type="radio" name="eq[f_' + a.id +
          ']" value="' + c.id + '" data-event="11208">' + c.label +
          "</label></div>");
        a.properties.optionStyle && b < e.options.length - 1 && f.css(a
          .properties.optionStyle), d.append(f)
      }), b.append(d), b.width("100%"), b.get(0)
    }), t.addComponent("c", function(a) {
      var b = $('<div class="element comp_radio editable-text" id="' + a.id +
        '"></div>');
      b.attr("ctype", a.type), b.attr("required", a.properties.required), b
        .attr("title", a.title), b.attr("name", "eq[f_" + a.id + "]");
      var c = $('<div class="radio-title">' + a.title + "(可多选)</div>");
      a.properties.titleStyle && c.css(a.properties.titleStyle), b.append(c);
      var d = $('<div class="options"></div>'),
        e = JSON.parse(a.choices);
      return $.each(e.options, function(b, c) {
        var f = $(
          '<div class="option-group"><label class="option-label" for="' +
          (a.id + "" + (b + 1)) +
          '" data-event="11209"><input class="option" id="' + (a.id +
            "" + (b + 1)) + '" type="checkbox" name="eq[f_' + a.id +
          ']" value="' + c.id + '" data-event="11209">' + c.label +
          "</label></div>");
        a.properties.optionStyle && b < e.options.length - 1 && f.css(a
          .properties.optionStyle), d.append(f)
      }), b.append(d), b.width("100%"), b.get(0)
    }), t.addComponent("a", function(a) {
      var b = $('<div class="element comp_rating editable-text" id="' + a.id +
        '"></div>');
      b.attr("ctype", a.type), b.attr("required", a.properties.required), b
        .attr("title", a.title), b.attr("name", "eq[f_" + a.id + "]"), b.append(
          $('<div class="rating-title">' + a.title + "</div>"));
      for (var c = $('<div class="rating-icons"></div>'), d = 0; 5 > d; d++)
        c.append($('<i class="' + a.properties.icon + "-line " + a.properties
          .size + '">').css("color", a.properties.color));
      return b.append(c), b.append($('<input type="hidden" name="eq[f_' + a
        .id + ']" value="">')), b.width("100%"), b.get(0)
    }), t.addComponent("p", function(b) {
      if (b.properties && b.properties.children) {
        var c = b.css.width,
          d = b.css.height,
          f = $('<div id="' + b.id + '" class="slider element" ctype="' + b
            .type + '"></div>');
        b.properties.bgColor && f.css("backgroundColor", b.properties.bgColor);
        var g = /\?imageMogr2/,
          h = /.svg/;
        return $.each(b.properties.children, function(b, i) {
          var j = e(i.width, i.height, c, d),
            k = i.src;
          a.isMobileApp() || h.test(k) || (k += g.test(k) ? "" : "");
          var l = $('<img src="' + PREFIX_FILE_HOST + k + '">');
          l.css({
            margin: (d - j.height) / 2 + "px " + (c - j.width) / 2 +
              "px",
            width: j.width,
            height: j.height
          }), f.append(l)
        }), utilPictures.deleteInterval(b.id), f.get(0)
      }
    }), t.addComponent("n", function(a) {
      if (a.properties && a.properties.pics.length) {
        var b = $('<div id="' + a.id +
          '" class="random-event element comp_image editable-image" ctype="' +
          a.type + '"></div>');
        a.css.width || (a.css.width = "180px");
        var c = 180 * parseInt(a.properties.pics[0].height, 10) / parseInt(
          a.properties.pics[0].width, 10);
        return a.css.height || (a.css.height = c + "px"), $.each(a.properties
          .pics,
          function(a, c) {
            var d = $('<img src="' + PREFIX_FILE_HOST + c.src + '">');
            d.css({
              width: "100%",
              height: "100%",
              display: "none"
            }), 0 === a && (d.css({
              display: "block"
            }), b.css({
              width: "100%",
              height: "100%"
            })), b.append(d)
          }), b.get(0)
      }
    }), t.addComponent("6", function(a) {
      var b = document.createElement("button");
      if (b.id = a.id, b.setAttribute("ctype", a.type), b.setAttribute(
          "class", "element comp_button editable-text"), b.setAttribute(
          "data-event", "11201"), a.properties.title) {
        var c = a.properties.title.replace(/ /g, "&nbsp;");
        b.innerHTML = c
      }
      return b.style.width = "100%", b
    }), t.addComponent("8", function(a) {
      var b = document.createElement("a");
      b.id = a.id, b.setAttribute("ctype", a.type), b.setAttribute("class",
        "element comp_anchor editable-text"), b.setAttribute("data-event",
        "1120602");
      var c = null;
      return a.properties.imgSrc ? (c = $(
            '<img style="width: 100%; height: 100%;" src="' + (
              PREFIX_FILE_HOST + a.properties.imgSrc) + '"/>'), $(b).html(c),
          "view" === t.mode && $(b).attr("href", "tel:" + a.properties.number)
        ) : a.properties.title && (c = a.properties.title.replace(/ /g,
          "&nbsp;"), $(b).html(c), "view" === t.mode && $(b).attr("href",
          "tel:" + a.properties.number)), b.style.cursor = "default", b.style
        .width = "100%", b
    }), t.addComponent("l", function(a) {
      var b = document.createElement("a");
      b.id = a.id, b.setAttribute("ctype", a.type), b.setAttribute("class",
        "element comp_anchor editable-text"), b.setAttribute("data-event",
        "1120601");
      var c = null;
      return a.properties.imgSrc ? (c = $(
          '<img style="width: 100%; height: 100%;" src="' + (
            PREFIX_FILE_HOST + a.properties.imgSrc) + '"/>'), $(b).html(c)) :
        a.properties.title && (c = a.properties.title.replace(/ /g,
          "&nbsp;"), $(b).html(c)), b.style.cursor = "default", b.style.width =
        "100%", b
    }), t.addComponent("s", function(a) {
      var b = document.createElement("a");
      b.id = a.id, b.setAttribute("ctype", a.type), b.setAttribute("class",
        "element comp_anchor editable-text"), b.setAttribute("data-event",
        "1120604");
      var c = null;
      return a.properties.imgSrc ? (c = $(
          '<img style="width: 100%; height: 100%;" src="' + (
            PREFIX_FILE_HOST + a.properties.imgSrc) + '"/>'), $(b).html(c)) :
        a.properties.title && (c = a.properties.title.replace(/ /g,
          "&nbsp;"), $(b).html(c)), b.style.cursor = "default", b.style.width =
        "100%", b
    }), t.addComponent("i", function(b) {
      var c = $(
        '<div class="element comp_counter not-voted editable-text" id="' +
        b.id + '"></div>');
      c.attr("ctype", b.type), c.attr("name", "eq[f_" + b.id + "]"), c.addClass(
        b.properties.layout).addClass(b.properties.size);
      var d = $('<div class="counter-container"></div>');
      b.properties.imgSrc ? (d.append($(
        '<img class="counter-elem counter-icon" style="width: 115px; height: 115px; margin: 0 auto;" src="' +
        (PREFIX_FILE_HOST + b.properties.imgSrc) + '"/>')), d.attr(
        "data-event", "1120609")) : (d.append($(
          '<i class="counter-elem counter-icon ' + b.properties.icon +
          '">').css("color", b.properties.color)), "eqf-love" === b.properties
        .icon ? d.attr("data-event", "1120605") : "eqf-good" === b.properties
        .icon ? d.attr("data-event", "1120606") : "eqf-flower2" === b.properties
        .icon ? d.attr("data-event", "1120607") : "eqf-vote" === b.properties
        .icon && d.attr("data-event", "1120608"));
      var e = $('<span class="counter-elem counter-number">0</span>').css(
        "color", b.properties.color);
      if (d.append(e), "view" === t.mode ? a.counterValues && a.counterValues
        .then(function(c) {
          var d = c.map[b.id] || 0;
          e.attr("data-counter-number", d);
          var f = a.fixedNum(d);
          e.text(f)
        }) : c.removeClass("not-voted"), c.width("100%"), "counter-tb" ===
        b.properties.layout) {
        var f = 0;
        f = b.properties.imgSrc ? "counter-l" === b.properties.size ? 77 :
          "counter-m" === b.properties.size ? 71 : 66 : "counter-l" === b.properties
          .size ? 40 : "counter-m" === b.properties.size ? 30 : 20, d.css(
            "margin-top", -f)
      }
      return "edit" !== t.mode && setTimeout(function() {
        var a = {
          width: "auto",
          "min-width": b.css.width
        };
        c.css(a), c.parents("li.comp-resize").css(a)
      }, 100), c.append(d), b.css.lineHeight && c.css("line-height", b.css
        .lineHeight), c.get(0)
    }), t.addComponent("d", function(b) {
      var c = $('<div class="element comp_counter editable-text" id="' + b.id +
        '"></div>');
      c.attr("ctype", b.type), c.addClass(b.properties.layout).addClass(b.properties
        .size);
      var d = $('<div class="counter-container"></div>');
      d.append($('<i class="counter-elem counter-icon ' + b.properties.icon +
        '">').css("color", b.properties.color));
      var e = $('<span class="counter-elem counter-number">0</span>').css(
        "color", b.properties.color);
      if (d.append(e), "view" === t.mode && a.showCount && a.showCount.then(
          function(b) {
            var c = a.fixedNum(b),
              d = c || 0;
            e.text(d)
          }), c.width("100%"), "counter-tb" === b.properties.layout) {
        var f = 0;
        f = "counter-l" === b.properties.size ? 40 : "counter-m" === b.properties
          .size ? 30 : 20, d.css("margin-top", -f)
      }
      return c.append(d), b.css.lineHeight && c.css("line-height", b.css.lineHeight),
        c.get(0)
    }), t.addComponent("7", function(a) {
      var b = document.createElement("div");
      if (b.id = "map_" + a.id, b.setAttribute("class",
          "element comp_map_wrapper"), a.content && (b.textContent = a.content),
        a.css) {
        var c, d = a.css;
        for (c in d) b.style[c] = d[c]
      }
      return b.style.height = "250px", b
    }), t.addComponent("m", function(a) {
      var b, c, d = new qq.maps.LatLng(a.properties.lat ? a.properties.lat :
        39.916527, a.properties.lng ? a.properties.lng : 116.397128);
      b = document.createElement("div"), b.id = a.id, b.setAttribute(
          "ctype", a.type), b.setAttribute("class", "element"), "edit" ===
        t.mode ? c = {
          draggable: !1,
          scrollwheel: !1,
          disableDoubleClickZoom: !0,
          disableDefaultUI: !0,
          center: d,
          zoom: a.properties.zoom ? a.properties.zoom : 11
        } : (c = {
          disableDefaultUI: !0,
          center: d,
          zoom: a.properties.zoom ? a.properties.zoom : 11
        }, $(b).on(
          "mousedown mousemove mouseup mouseleave touchstart touchmove touchend",
          function(a) {
            a.stopPropagation()
          }));
      var e = new qq.maps.Map(b, c);
      if ("edit" === t.mode && $(b).data("map", e), a.content && "" !== a.content) {
        var f = new qq.maps.Label({
          position: d,
          map: e,
          content: a.content
        });
        "edit" === t.mode && $(b).data("label", f)
      }
      var g = new qq.maps.Point(25, 5),
        h = new qq.maps.Size(34, 34),
        i = new qq.maps.Point(0, 0),
        j = new qq.maps.MarkerImage(PREFIX_HOST +
          "/assets/images/marker.png", h, i, g),
        k = new qq.maps.Marker({
          map: e,
          position: e.getCenter()
        });
      return k.setIcon(j), $(b).data("marker", k), b
    }), t.addComponent("w", function(a) {
      var b, c = document.createElement("a");
      return "" + a.type == "w01" ? (b = "element comp_wechat_play", c.innerHTML =
          '<span style="font-size:16px;" class="eqf-nosy"></span>') : "" +
        a.type == "w02" && (b = "element comp_wechat_hear", c.innerHTML = a
          .properties.title, c.setAttribute("data-event", "1120612")), c.id =
        a.id, c.setAttribute("class", b), c.setAttribute("ctype", a.type),
        c
    }), t.addComponent("t", function(a) {
      var b = $('<div class="create-chart" id="chart-' + a.id + '"></div>'),
        c = document.createElement("h5");
      c.setAttribute("class", "chart-title"), b.append(c);
      var d = document.createElement("canvas");
      d.id = a.id, d.setAttribute("ctype", a.type), b.append(d);
      var e = document.createElement("div");
      e.id = "legend-" + a.id, b.append(e);
      var l, m = a.properties.chartType,
        n = d.getContext("2d"),
        o = v(n);
      if (mobilecheck() && o > 1) {
        var p = parseFloat(a.css.width),
          q = parseFloat(a.css.height) / 2;
        d.width = p, d.height = q, d.style.width = p / o + "px", d.style.height =
          q / o + "px", n.scale(o, o)
      }
      "pie" === m ? (l = i(n), "edit" === t.mode && $(d).data("pieChart", l)) :
        "bar" === m ? (l = j(n), "edit" === t.mode && $(d).data("barChart",
          l)) : ("line" === m || "curve" === m) && (l = k(n, m), "edit" ===
          t.mode && $(d).data("lineChart", l)), a.properties.chartTitle &&
        (c.innerHTML = a.properties.chartTitle), "pie" === m && a.properties
        .pieChart && (l = h(a, n, l), $(d).data("pieChart", l)), "bar" ===
        m && a.properties.barChart && (l = g(a, n, l), $(d).data("barChart",
          l)), "line" !== m && "curve" !== m || !a.properties.lineChart ||
        (l = f(a, n, l), $(d).data("lineChart", l)), e.innerHTML = l.generateLegend();
      var r = a.properties.legPosition;
      return "position-align" === r ? $(e).addClass("position-align") :
        "position-right" === r ? $(e).addClass("position-right") :
        "position-none" === r && $(e).addClass("position-none"),
        mobilecheck() || ($(d).attr("width") && ($(d).removeAttr("width"),
          $(d).css("width", "100%")), $(d).attr("height") && ($(d).removeAttr(
          "height"), $(d).css("height", "50%")), l.update()), b.get(0)
    });
    var v = function(a) {
      var b = a.webkitBackingStorePixelRatio || a.mozBackingStorePixelRatio ||
        a.msBackingStorePixelRatio || a.oBackingStorePixelRatio || a.backingStorePixelRatio ||
        1,
        c = (window.devicePixelRatio || 1) / b;
      return c
    };
    t.addComponent("z", function(a) {
      var b = $('<div style="width:100%;height:100%" id="' + a.id +
        '"></div>');
      b.attr("ctype", a.type), b.attr("required", a.required);
      var c = $(
        '<button type="button" class="btn dropdown-toggle btn-default" style="width:100%;height:100%;background-color:#ffffff;color:#666;padding-top: 0px;border: 1px solid rgb(8,161,239);font-family: Open Sans, sans-serif;font-weight: 400;font-size: 16px;border-top-left-radius: 0px;border-bottom-left-radius: 0px;border-top-right-radius: 0px;border-bottom-right-radius: 0px;position:absolute;top:0px;left:0px;pointer-events:none;padding-bottom: 0px;padding-right:0px;padding-left:0px;overflow: hidden" data-toggle="dropdown" title="Nothing selected" aria-expanded="false"><span class="filter-option pull-left" style="margin-left: 8px;float:left;width:calc(100% - 42px);width:-moz-calc(100% - 42px);width:-webkit-calc(100% - 42px);overflow:hidden;text-align: left;" id="selectButton' +
        a.id + '">' + a.showText +
        '</span>&nbsp;<span class="bs-caret" style="float:right;margin-right:10px;"><span class="caret" style="display: inline-block;width: 0px;height: 0px;vertical-align: middle;border-top:4px dashed;border-right: 4px solid transparent;border-left: 4px solid transparent;margin-left: 0px;"></span></span></button>'
      );
      b.append(c);
      var d = JSON.parse(a.choices).options,
        e = $('<select style="width:100%;height:100%; " name="eq[f_' + a.id +
          ']"></select>');
      e.attr("ctype", a.type), e.attr("data-event", "11210");
      var f = null,
        g = 0;
      return f = a.placeholderText === a.showText ? $('<option value="' + a
        .placeholderText + '" selected>' + a.placeholderText +
        "</option>") : $('<option value="' + a.placeholderText + '">' + a
        .placeholderText + "</option>"), e.append(f), $.each(d, function(
        b, c) {
        c.label === a.showText ? (g++, f = $('<option value="' + c.label +
            '" selected>' + c.label + "</option>")) : f = $(
            '<option value="' + c.label + '">' + c.label + "</option>"),
          e.append(f)
      }), $(e).change(function() {
        $("#selectButton" + a.id).text($(e).val())
      }), b.append(e), b
    }), t.addComponent("b", function(a) {
      var b, c, d = document.createElement("div"),
        e = document.createDocumentFragment(),
        f = $('<div class="tool"><a class="replay">' + a.properties.meslabel +
          '</a><a class="more">' + a.properties.morelabel + "</a></div>").get(
          0);
      if (e.appendChild(f), "view" !== t.mode || t.disEvent) {
        b = [{
          mes: "赞一个！好多新功能哦~",
          name: "匿名用户",
          time: "2月1日 13:00"
        }, {
          mes: "赞一个！好多新功能哦~",
          name: "匿名用户",
          time: "2月1日 12:58"
        }, {
          mes: "赞一个！好多新功能哦~",
          name: "匿名用户",
          time: "2月1日 12:55"
        }];
        for (var g = 0; g < b.length; g++) c = $(
            '<div class="record"><div class="headimg headimg-bg"><div class="logo"><em class="eqf-logo"></em></div></div><div class="name">' +
            b[g].name + '</div><div class="mes">' + b[g].mes +
            '</div><div class="time">' + b[g].time + "</div></div>").get(0),
          e.appendChild(c)
      } else p(a.sceneId, function(b, c) {
        if (0 === c) {
          var e = $(
            '<div class="empty-boards"><image style="margin-top:-20px;" src="' +
            HB_STATIC + "view/images/" + a.properties.style +
            '_boards.png" /></div>').get(0);
          d.appendChild(e)
        } else d.appendChild(b)
      });
      return d.appendChild(e), d.id = a.id, d.setAttribute("class",
        "element boards-" + a.properties.style), d.setAttribute("ctype",
        a.type), d
    }), t.addComponent("g", function(a, b) {
      var c = document.createElement("div");
      return "edit" === b && $(
          '<div class="over-ele"></div><div class="ad-contain"></div>').appendTo(
          c), a.content && ("edit" === b ? $(c).find(".ad-contain").append(
          $(a.content)) : ($(a.content).appendTo(c), a.css.zIndex = 1e5)),
        c.id = a.id, c.setAttribute("class", "element"), c.setAttribute(
          "ctype", a.type), c
    }), t.bindAfterRenderEvent("8", function(a, b) {
      a = $("a", a)[0];
      var c = {
        id: b.sceneId,
        num: b.properties.number
      };
      if ("view" === t.mode) {
        var d = function() {
          $.ajax({
            cache: !0,
            type: "POST",
            url: PREFIX_S1_URL + "eqs/dial",
            data: $.param(c),
            async: !1,
            error: function() {
              //alert("Connection error")
            }
          })
        };
        a.addEventListener("click", d)
      }
    }), t.bindAfterRenderEvent("l", function(a, b) {
      if (a = $("a", a)[0], "view" === t.mode) {
        var c = b.properties.url;
        $(a).click(function() {
          isNaN(c) ? window.open(c) : eqxiu.pageScroll(c)
        })
      }
    }), t.bindAfterRenderEvent("i", function(b, c) {
      if ("view" === t.mode && !t.disEvent) {
        var d = $(b).find(".comp_counter");
        d.click(function() {
          var e = {
              sceneId: c.sceneId,
              fieldId: c.id
            },
            f = $(b);
          $.ajax({
            cache: !0,
            type: "POST",
            url: PREFIX_S1_URL + "index.php?c=scene&a=counterset",
            data: $.param(e),
            async: !1,
            error: function() {
              alert("Connection error")
            },
            success: function() {
              d.unbind("click"), f.find(".comp_counter").removeClass(
                "not-voted");
              var b = $(".counter-number", f),
                c = (parseInt(b.attr("data-counter-number"), 10) ||
                  0) + 1;
              b.attr("data-counter-number", c);
              var e = a.fixedNum(c);
              $(".counter-number", f).text(e)
            }
          })
        })
      }
    }), t.bindAfterRenderEvent("4", function(a, b) {
      "view" === t.mode && ("" + b.type == "4" ? ($(a).attr("data-event",
        "1120601"), l(a, b)) : "" + b.type == "403" && a.on("click",
        function() {
          return isWeixin() ? void $(document).trigger("wx.img.upload",
            b.id) : void alert("请在微信中点击我！")
        }))
    }), t.bindAfterRenderEvent("x", function(a, b) {
      l(a, b)
    }), t.bindAfterRenderEvent("h", function(a, b) {
      $(a).attr("data-event", "1120601"), l(a, b)
    }), t.bindAfterRenderEvent("5", function(a, b) {
      var c = mobilecheck();
      m($(a).find("textarea")), n($(a).find("textarea")), "view" === t.mode &&
        c && parseFloat(b.css.top) >= 200 && ($(a).find("textarea").focus(
          function() {
            $(a).closest(".edit_area").css({
              top: "-150px"
            })
          }), $(a).find("textarea").blur(function() {
          $(a).closest(".edit_area").css({
            top: 0
          })
        }))
    }), t.bindAfterRenderEvent("r", function(a) {
      "view" === t.mode && m($(a).find("label"))
    }), t.bindAfterRenderEvent("c", function(a) {
      "view" === t.mode && m($(a).find("label"))
    }), t.bindAfterRenderEvent("v", function(a, b) {
      "view" === t.mode && $(a).click(function() {
        $(a).hide(), $("#audio_btn").hasClass("video_exist") && ($(
            "#audio_btn").hide(), $("#media")[0].pause()), utilSound.pause(),
          $('<div class="video_mask page_effect lock" id="mask_' + b.id +
            '"></div>').appendTo($(a).closest(".m-img")), $(
            '<a class = "close_mask eqf-wrong" id="close_' + b.id +
            '"></a>').appendTo($(a).closest(".m-img")), $(b.properties.src)
          .appendTo($("#mask_" + b.id)).attr("style",
            "position: absolute;top:0; min-height: 45%; max-height: 100%; top: 20%;"
          ).attr("width", "100%").removeAttr("height"), $("#close_" + b
            .id).bind("click", function() {
            $(a).show(), $("#mask_" + b.id).remove(), $("#close_" + b
                .id).remove(), $("#audio_btn").hasClass("video_exist") &&
              $("#audio_btn").show(function() {
                $("#media")[0].play()
              })
          })
      })
    }), t.bindAfterRenderEvent("2", function(a, b) {
      o(a), l(a, b)
    }), t.bindAfterRenderEvent("6", function(b, c) {
      if (b = $("button", b)[0], "view" === t.mode) {
        var d = {
            REQUIRED: "为必填项！",
            WRONG_PHONE_NUMBER_FORMAT: "电话号码格式错误！",
            WRONG_EMAIL_FORMAT: "邮箱格式错误！",
            FILL_OUT_THE_FORM: "请填写表单！",
            DUPLICATED_SUBMISSION: "请不要重复提交！",
            THANKS_FOR_PARTICIPATION: "谢谢您的参与！"
          },
          e = function(a, b, e) {
            var f = !0,
              g = {};
            if ($("textarea", e).each(function() {
                if (f) {
                  if ("required" === $(this).attr("required") && "" === $(
                      this).val().trim()) return alert($(this).attr(
                    "placeholder") + d.REQUIRED), void(f = !1);
                  if ("502" === $(this).attr("ctype") && "" !== $(this).val()
                    .trim()) {
                    var a = new RegExp(/^\d{3,15}$/);
                    if (!a.test($(this).val())) return alert(
                      "电话输入有误，请输入3-15位数字"), void(f = !1)
                  }
                  if ("503" === $(this).attr("ctype") && "" !== $(this).val()
                    .trim()) {
                    var b = new RegExp(
                      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g
                    );
                    if (!b.test($(this).val())) return alert("邮箱格式错误！"),
                      void(f = !1)
                  }
                  g[$(this).attr("name")] = $(this).val()
                }
              }), $("input:checked", e).each(function() {
                var a = $(this);
                g[a.attr("name")] ? g[a.attr("name")] += "," + a.val() :
                  g[a.attr("name")] = a.val()
              }), $('.comp_radio[required="required"]', e).each(function() {
                var a = $(this);
                g[a.attr("name")] || (alert(a.attr("title") + d.REQUIRED),
                  f = !1)
              }), $('input[type="hidden"]', e).each(function() {
                g[$(this).attr("name")] = $(this).val()
              }), $('.comp_rating[required="required"]', e).each(function() {
                var a = $(this);
                g[a.attr("name")] && "" + g[a.attr("name")] != "0" || (
                  alert(a.attr("title") + "为必填项！"), f = !1)
              }), f) {
              var h = !1;
              if ($.isEmptyObject(g)) return void(h = !0);
              for (var i in g)
                if ("" !== g[i]) {
                  h = !0;
                  break
                }
              if (!h) return void alert("请填写表单！");
              $("select", e).each(function() {
                var a = $(this).attr("name").substring(5, $(this).attr(
                    "name").length - 1),
                  b = $(this).find("option:first").val(),
                  c = $(this).val();
                if ("required" === $("#" + a).attr("required")) {
                  if (b === c) return alert("你还没有选择下拉列表！"), void(f = !1)
                } else b === c && $(this).val(null);
                g[$(this).attr("name")] = $(this).val()
              }), f && $.ajax({
                cache: !0,
                type: "POST",
                url: PREFIX_S1_URL + "index.php?c=scenedata&a=add&id=" +
                  b,
                data: $.param(g),
                async: !1,
                error: function() {
                  alert("Connection error")
                },
                success: function() {
                  $(a).unbind("click").click(function() {
                    alert("请不要重复提交！")
                  });
                  var b;
                  c.properties.layout || (c.properties.layout =
                      "rating-l", c.properties.text = ""), c.properties
                    .text.trim() || "rating-l" !== c.properties.layout ?
                    ("rating-m" === c.properties.layout && (b = c.properties
                      .checkedLink ?
                      '<div class="feedback-box"><div class="feedback-form"><img src = "' +
                      (PREFIX_FILE_HOST + c.properties.imgSrc) +
                      '"/><a href="' + c.properties.link +
                      '" style="margin-top:20px;"><span>' + c.properties
                      .text +
                      '</span></a><button class="feedback-button">我知道了</button></div></div>' :
                      '<div class="feedback-box"><div class="feedback-form"><img src = "' +
                      (PREFIX_FILE_HOST + c.properties.imgSrc) +
                      '"/><span style="margin-top:20px;">' + c.properties
                      .text +
                      '</span><button class="feedback-button">我知道了</button></div></div>'
                    ), "rating-s" === c.properties.layout && (b = c
                      .properties.checkedLink ?
                      '<div class="feedback-box"><div class="feedback-form"><a href="' +
                      c.properties.link + '"><span>' + c.properties
                      .text + '</span></a><img src = "' + (
                        PREFIX_FILE_HOST + c.properties.imgSrc) +
                      '" style="margin-top:20px;"/><button class="feedback-button">我知道了</button></div></div>' :
                      '<div class="feedback-box"><div class="feedback-form"><span>' +
                      c.properties.text + '</span><img src = "' + (
                        PREFIX_FILE_HOST + c.properties.imgSrc) +
                      '" style="margin-top:20px;"/><button class="feedback-button">我知道了</button></div></div>'
                    ), "rating-l" === c.properties.layout && (b = c
                      .properties.checkedLink ?
                      '<div class="feedback-box"><div class="feedback-form"><a href="' +
                      c.properties.link + '"><span>' + c.properties
                      .text +
                      '</span></a><button class="feedback-button">我知道了</button></div></div>' :
                      '<div class="feedback-box"><div class="feedback-form"><span>' +
                      c.properties.text +
                      '</span><button class="feedback-button">我知道了</button></div></div>'
                    )) : b =
                    '<div class="feedback-box"><div class="feedback-form"><span>谢谢您的参与!</span><button class="feedback-button">我知道了</button></div></div>',
                    $(b).prependTo(".z-current");
                  var d = (0 - parseInt($(".feedback-form").css(
                    "height"), 10)) / 2;
                  $(".feedback-form").css({
                    marginTop: d + "px"
                  }), $(".z-current").on("click",
                    ".feedback-button",
                    function() {
                      $(".feedback-box").animate({
                        opacity: 0
                      }, {
                        duration: 1e3,
                        complete: function() {
                          $(".feedback-box").remove()
                        }
                      })
                    })
                }
              })
            }
          };
        $(b).bind("click", function() {
          if (a.isMobileApp()) return void alert("场景还没有发布呢，请发布后提交内容！");
          var c, d = $(b).parents(".edit_wrapper").attr("data-scene-id");
          c = d ? $(b).parents(".nr").find(
            '.edit_wrapper[data-scene-id="' + d + '"]') : $(b).parents(
            ".nr"), e(this, d, c)
        })
      }
    }), t.bindAfterRenderEvent("7", function(a, b) {
      var c = new BMap.Map("map_" + b.id, {
          enableMapClick: !1
        }),
        d = new BMap.Point(b.properties.x, b.properties.y),
        e = new BMap.Marker(d);
      c.addOverlay(e);
      var f = new BMap.Label(b.properties.markTitle, {
        offset: new BMap.Size(20, -10)
      });
      e.setLabel(f), c.disableDoubleClickZoom(), c.centerAndZoom(d, 15)
    }), t.bindAfterRenderEvent("p", function(a, b) {
      if (!$(a).closest(".page_tpl_container ").length) {
        $(a).children(".element-box").css("overflow", "visible"),
          utilPictures.deleteInterval(b.id);
        var c = $(a).find("#" + b.id);
        new flux.slider(c, {
          autoplay: b.properties.autoPlay,
          delay: b.properties.interval,
          pagination: !1,
          transitions: [utilPictures.getPicStyle(b.properties.picStyle)
            .name
          ],
          width: b.css.width,
          height: b.css.height,
          bgColor: b.properties.bgColor,
          onStartEnd: function(a) {
            utilPictures.addInterval(b.id, a)
          }
        })
      }
    }), t.bindAfterRenderEvent("a", function(a, b) {
      function c(a) {
        e.each(function(b, c) {
          $(c).removeClass(g).addClass(g + "-line"), a >= b && $(c).removeClass(
            g + "-line").addClass(g)
        })
      }
      var d = $(a);
      if ("view" === t.mode) {
        var e = d.find("i"),
          f = d.find("input"),
          g = b.properties.icon;
        e.each(function(a, b) {
          $(b).attr("data-event", "11211"), $(b).bind("click", function() {
            c(a), f.val(a + 1)
          }), $(b).bind("mouseenter", function() {
            c(a)
          })
        }), d.find(".rating-icons").bind("mouseleave", function() {
          c(parseInt(f.val(), 10) - 1)
        }), m(d.find(".rating-icons"))
      }
    }), t.bindAfterRenderEvent("w", function(a, b) {
      "view" === t.mode && (m($(a)), $(a).on("mousedown touchstart",
        function(a) {
          if (a.preventDefault(), isWeixin()) "w01" === b.type ? $(
              document).trigger("wx.audio.play", b.id) : "w02" === b.type &&
            $(document).trigger("wx.audio.record", b.id);
          else if ("w01" === b.type) {
            var c = document.createElement("audio");
            c.src = b.properties.src, c.play();
            var d = $("#media").get(0);
            d.pause()
          } else "w02" === b.type && alert("请在微信中点我！")
        }).on("mouseup touchend", function() {
        isWeixin() && "w02" === b.type && $(document).trigger(
          "wx.audio.recordend", b.id)
      }))
    }), t.bindAfterRenderEvent("g", function(a) {
      a.attr("data-event", "11212")
    }), t.bindAfterRenderEvent("b", function(b, c) {
      function d() {
        if (h.find(".boards-panel").length) h.find(".boards-panel").show();
        else {
          h.append($('<div class="boards-panel boards-' + c.properties.style +
              '"><div class="boards-top"><div class="head">留言板<em class="eqf-wrong"></em></div><div class="boards-form"><textarea maxlength="140" class="content-text"></textarea><span class="content-tip">0/140</span><a class="record-btn" data-event="11207">提交留言</a></div><div class="spline-con"><span>更多留言</span><span class="spline"></span></div></div><div class="boards-con"><div class="list"></div></div>' +
              i + "</div>")), f = h.find(".record-btn"), iphoneCheck() && h
            .find(".boards-con").addClass("ios-boards-con");
          var b = 0;
          f.on("click", function() {
            if (a.isMobileApp()) return void alert("场景还没有发布呢，请发布后提交内容！");
            if (!b) {
              var c = h.find(".boards-panel .content-text").val();
              if (!$.trim(c)) return void alert("留言不能为空!");
              b = 10, f.text("提交留言(" + b + "秒)"), f.css(
                "backgroundColor", "#b4b4b4");
              var d = setInterval(function() {
                  b--, f.text("提交留言(" + b + "秒)"), b || (f.css(
                      "backgroundColor", "").text("提交留言"),
                    clearInterval(d))
                }, 1e3),
                e = {
                  sceneId: j,
                  content: c,
                  url: "",
                  name: "匿名用户"
                };
              weChatUser && weChatUser.headimgurl && (e.name =
                  weChatUser.nickname, e.url = weChatUser.headimgurl),
                $.ajax({
                  type: "POST",
                  url: PREFIX_URL + "scene/form/send/msg",
                  data: $.param(e),
                  error: function() {
                    alert("Connection error")
                  },
                  success: function(a) {
                    if (a.success) {
                      alert("留言成功，谢谢参与！");
                      var b =
                        '<div class="headimg headimg-bg"><div class="logo-scale"><em class="eqf-eqxiu"></em></div></div>';
                      weChatUser.headimgurl && (b =
                          '<div class="headimg" style="background-image:url(' +
                          weChatUser.headimgurl + ')"></div>'), $(
                          ".z-current #" + k).find(".empty-boards")
                        .length && $(".z-current #" + k).find(
                          ".empty-boards").remove(), $(
                          ".z-current #" + k).find(".tool").after($(
                          '<div class="record">' + b +
                          '<div class="name">' + a.obj.name +
                          '</div><div class="mes">' + a.obj.content +
                          '</div><div class="time">刚刚</div></div>'
                        )), h.find(".list").prepend($(
                          '<div class="record clearfix">' + b +
                          '<div class="name">' + a.obj.name +
                          '</div><div class="mes">' + a.obj.content +
                          '</div><div class="time">刚刚</div></div>'
                        ))
                    }
                  }
                })
            }
          }), h.find(".boards-panel .content-text").on("input", function(
            a) {
            var b = a.target.value.length + a.target.value.split("\n").length -
              1;
            h.find(".boards-panel .content-tip").html(b + "/140")
          })
        }
        h.find(".boards-panel").on(
          "touchstart touchmove touchend mousedown mouseup mousemove",
          function(a) {
            a.stopPropagation()
          }), h.find(".z-current").hide();
        var d = $('<div class="more-mes">查看更多</div>'),
          g = h.find(".list");
        g.empty();
        var l = g.get(0);
        g.append(d), p(j, function(a, b) {
          e = b, l.insertBefore(a, d.get(0)), b || (d.html("没有更多"), d.unbind(
            "click"))
        }), d.on("click", function() {
          p(j, function(a, b) {
            e = b, g.get(0).insertBefore(a, d.get(0)), b || (d.html(
              "没有更多"), d.unbind("click"))
          }, e)
        })
      }
      if ("view" === t.mode && !t.disEvent) {
        var e, f, g = $(b),
          h = mobilecheck() ? $(document.body) : $(".nr"),
          i = mobilecheck() ? '<div class="boards-bottom"></div>' : "",
          j = c.sceneId,
          k = c.id;
        g.find(".tool a").on("click", function(a, b) {
          (!a.isTrigger || b) && (!a.isTrigger || "longPage" !== b ||
            mobilecheck()) && ($.isEmptyObject(weChatUser) && isWeixin() ?
            wechatUtils.weChatAuth(function() {
              d()
            }, c.pageId) : d())
        }), h.on("click", ".boards-panel .eqf-wrong", function() {
          h.find(".boards-panel .list").empty(), h.find(".boards-panel")
            .hide(), h.find(".z-current").show()
        })
      }
    });
    var w
  }(window.eqShow),
  function() {
    var a, b = 0;
    eqShow.shakeTrigger = function(c, d) {
      function e(a) {
        var c = a.accelerationIncludingGravity,
          d = (new Date).getTime();
        if (d - m > 100) {
          var g = parseInt(d - m);
          m = d, j = c.x, k = c.y, l = c.z;
          var i = Math.abs(j + k + l - n - o - p) / g * 1e4;
          window.removeEventListener("devicemotion", e, !0), i > h && (q || (
            eqShow.playTriggerSound(), q = !0), window.removeEventListener(
            "devicemotion", e, !0), f.sends && f.sends.length && $.each(f
            .sends,
            function(a, c) {
              time = setTimeout(function() {
                $.each(c.handles, function(a, c) {
                  var d = utilTrigger.getHandleType(c.type).name;
                  $.each(c.ids, function(a, c) {
                    var e = $("#inside_" + c);
                    e.trigger(d, b)
                  })
                })
              }, 1e3 * c.delay)
            })), n = j, o = k, p = l
        }
      }
      var f, g = $(d).find(".m-img").attr("id").substring(4);
      if (c[g - 1].properties && (f = c[g - 1].properties.trigger), f && f.sends) {
        var h = 4e3,
          i = PREFIX_HOST + "/assets/audio/wxShake.mp3";
        a = document.createElement("audio"), a.src = i;
        var j, k, l, m = 0,
          n = 0,
          o = 0,
          p = 0,
          q = !1;
        window.DeviceMotionEvent && d && window.addEventListener(
          "devicemotion", e, !1)
      }
    }, eqShow.playTriggerSound = function() {
      a && a.play()
    }
  }(), !
  function(a) {
    "use strict";
    var b = function(b, c) {
      this.el = a(b), this.options = a.extend({}, a.fn.typed.defaults, c),
        this.isInput = this.el.is("input"), this.attr = this.options.attr,
        this.showCursor = this.isInput ? !1 : this.options.showCursor, this.elContent =
        this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType =
        this.options.contentType, this.typeSpeed = this.options.typeSpeed,
        this.startDelay = this.options.startDelay, this.backSpeed = this.options
        .backSpeed, this.backDelay = this.options.backDelay, this.stringsElement =
        this.options.stringsElement, this.strings = this.options.strings,
        this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop =
        this.options.loop, this.loopCount = this.options.loopCount, this.curLoop =
        0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle =
        this.options.shuffle, this.sequence = [], this.build()
    };
    b.prototype = {
      constructor: b,
      init: function() {
        var a = this;
        a.timeout = setTimeout(function() {
          for (var b = 0; b < a.strings.length; ++b) a.sequence[b] = b;
          a.shuffle && (a.sequence = a.shuffleArray(a.sequence)), a.typewrite(
            a.strings[a.sequence[a.arrayPos]], a.strPos)
        }, a.startDelay)
      },
      build: function() {
        var b = this;
        if (this.showCursor === !0 && (this.cursor = a(
              '<span class="typed-cursor">' + this.cursorChar + "</span>"),
            this.el.after(this.cursor)), this.stringsElement) {
          b.strings = [], this.stringsElement.hide();
          var c = this.stringsElement.find("p");
          a.each(c, function(c, d) {
            b.strings.push(a(d).html())
          })
        }
        this.init()
      },
      typewrite: function(a, b) {
        if (this.stop !== !0) {
          var c = Math.round(70 * Math.random()) + this.typeSpeed,
            d = this;
          d.timeout = setTimeout(function() {
            var c = 0,
              e = a.substr(b);
            if ("^" === e.charAt(0)) {
              var f = 1;
              /^\^\d+/.test(e) && (e = /\d+/.exec(e)[0], f += e.length,
                c = parseInt(e)), a = a.substring(0, b) + a.substring(
                b + f)
            }
            if ("html" === d.contentType) {
              var g = a.substr(b).charAt(0);
              if ("<" === g || "&" === g) {
                var h = "",
                  i = "";
                for (i = "<" === g ? ">" : ";"; a.substr(b).charAt(0) !==
                  i;) h += a.substr(b).charAt(0), b++;
                h += i
              }
            }
            d.timeout = setTimeout(function() {
              if (b === a.length) {
                if (d.options.onStringTyped(d.arrayPos), d.arrayPos ===
                  d.strings.length - 1 && (d.options.callback(), d.curLoop++,
                    d.loop === !1 || d.curLoop === d.loopCount))
                  return;
                d.timeout = setTimeout(function() {
                  d.backspace(a, b)
                }, d.backDelay)
              } else {
                0 === b && d.options.preStringTyped(d.arrayPos);
                var c = a.substr(0, b + 1);
                d.attr ? d.el.attr(d.attr, c) : d.isInput ? d.el.val(
                    c) : "html" === d.contentType ? d.el.html(c) :
                  d.el.text(c), b++, d.typewrite(a, b)
              }
            }, c)
          }, c)
        }
      },
      backspace: function(a, b) {
        if (this.stop !== !0) {
          var c = Math.round(70 * Math.random()) + this.backSpeed,
            d = this;
          d.timeout = setTimeout(function() {
            if ("html" === d.contentType && ">" === a.substr(b).charAt(
                0)) {
              for (var c = "";
                "<" !== a.substr(b).charAt(0);) c -= a.substr(b).charAt(
                0), b--;
              b--, c += "<"
            }
            var e = a.substr(0, b);
            d.attr ? d.el.attr(d.attr, e) : d.isInput ? d.el.val(e) :
              "html" === d.contentType ? d.el.html(e) : d.el.text(e), b >
              d.stopNum ? (b--, d.backspace(a, b)) : b <= d.stopNum &&
              (d.arrayPos++, d.arrayPos === d.strings.length ? (d.arrayPos =
                0, d.shuffle && (d.sequence = d.shuffleArray(d.sequence)),
                d.init()) : d.typewrite(d.strings[d.sequence[d.arrayPos]],
                b))
          }, c)
        }
      },
      shuffleArray: function(a) {
        var b, c, d = a.length;
        if (d)
          for (; --d;) c = Math.floor(Math.random() * (d + 1)), b = a[c], a[
            c] = a[d], a[d] = b;
        return a
      },
      reset: function() {
        var a = this;
        clearInterval(a.timeout);
        var b = this.el.attr("id");
        this.el.after('<span id="' + b + '"/>'), this.el.remove(),
          "undefined" != typeof this.cursor && this.cursor.remove(), a.options
          .resetCallback()
      }
    }, a.fn.typed = function(c) {
      return this.each(function() {
        var d = a(this),
          e = d.data("typed"),
          f = "object" == typeof c && c;
        e || d.data("typed", e = new b(this, f)), "string" == typeof c &&
          e[c]()
      })
    }, a.fn.typed.defaults = {
      strings: ["These are the default values...",
        "You know what you should do?", "Use your own!",
        "Have a great day!"
      ],
      stringsElement: null,
      typeSpeed: 0,
      startDelay: 0,
      backSpeed: 0,
      shuffle: !1,
      backDelay: 500,
      loop: !1,
      loopCount: !1,
      showCursor: !0,
      cursorChar: "|",
      attr: null,
      contentType: "html",
      callback: function() {},
      preStringTyped: function() {},
      onStringTyped: function() {},
      resetCallback: function() {}
    }
  }(window.jQuery),
  function() {
    var a = !0,
      b = !0;
    eqShow.playVideo = function(c) {
      if (c && c.bgAudio) {
        var d = $("#media"),
          e = $("#audio_btn"),
          f = "";
        c.bgAudio.url ? f = 0 === c.bgAudio.url.indexOf("http://") ? c.bgAudio
          .url : PREFIX_FILE_HOST + c.bgAudio.url : !c.bgAudio.url && c.bgAudio
          .src && (f = 0 === c.bgAudio.src.indexOf("http://") ? c.bgAudio.src :
            PREFIX_FILE_HOST + c.bgAudio.src), d.attr("src", f), e.addClass(
            "video_exist"), d.bind("canplay", function() {
            d.get(0).play()
          }).bind("play", function() {
            e.addClass("rotate")
          }).bind("pause", function(a) {
            e.removeClass("rotate")
          });
        var g = mobilecheck() ? "touchend" : "click";
        $("#audio_btn").show().on(g, function(b) {
          b.cancelBubble = !0, b.stopPropagation(), $(this).hasClass(
            "rotate") ? (a = !1, d.get(0).pause()) : (d.get(0).play(),
            a = !0, utilSound.pause())
        })
      }
      $("#nr #page1").on("mousedown touchstart", function() {
        if (mobilecheck() && !isWeixin() && b) {
          var a = $("#nr .z-current .m-img"),
            c = parseInt(a.attr("id").substring(4), 10);
          b && 1 === c && window.completeEffect(a) && (b = !1, window.scene
            .bgAudio && $("#media").get(0).play())
        }
      })
    }, eqShow.executePlay = function() {
      a && $("#media").get(0).play()
    }, eqShow.executePause = function() {
      a && $("#media").get(0).pause()
    }
  }(),
  function(a) {
    function b() {
      var a = {
        "Allura-Regular": {
          value: 1,
          familyName: "Allura-Regular",
          fontFamilyName: "Allura-Regular",
          src: "assets/images/fonts/Allura-Regular.png",
          blueSrc: "assets/images/fonts/Allura-Regular_blue.png"
        },
        "Amaranth-Regular": {
          value: 2,
          familyName: "Amaranth-Regular",
          fontFamilyName: "Amaranth-Regular",
          src: "assets/images/fonts/Amaranth-Regular.png",
          blueSrc: "assets/images/fonts/Amaranth-Regular_blue.png"
        },
        "Anton-Regular": {
          value: 3,
          familyName: "Anton-Regular",
          fontFamilyName: "Anton-Regular",
          src: "assets/images/fonts/Anton-Regular.png",
          blueSrc: "assets/images/fonts/Anton-Regular_blue.png"
        },
        "Arial-Regular": {
          value: 4,
          familyName: "Arial-Regular",
          fontFamilyName: "Arial-Regular",
          src: "assets/images/fonts/Arial-Regular.png",
          blueSrc: "assets/images/fonts/Arial-Regular_blue.png"
        },
        "Arialnarrow-Regular": {
          value: 5,
          familyName: "Arialnarrow-Regular",
          fontFamilyName: "Arialnarrow-Regular",
          src: "assets/images/fonts/Arialnarrow-Regular.png",
          blueSrc: "assets/images/fonts/Arialnarrow-Regular_blue.png"
        },
        "Arialroundedmtbold-Regular": {
          value: 6,
          familyName: "Arialroundedmtbold-Regular",
          fontFamilyName: "Arialroundedmtbold-Regular",
          src: "assets/images/fonts/Arialroundedmtbold-Regular.png",
          blueSrc: "assets/images/fonts/Arialroundedmtbold-Regular_blue.png"
        },
        "Banglasangammn-Regular": {
          value: 7,
          familyName: "Banglasangammn-Regular",
          fontFamilyName: "Banglasangammn-Regular",
          src: "assets/images/fonts/Banglasangammn-Regular.png",
          blueSrc: "assets/images/fonts/Banglasangammn-Regular_blue.png"
        },
        "Blackopsone-Regular": {
          value: 8,
          familyName: "Blackopsone-Regular",
          fontFamilyName: "Blackopsone-Regular",
          src: "assets/images/fonts/Blackopsone-Regular.png",
          blueSrc: "assets/images/fonts/Blackopsone-Regular_blue.png"
        },
        "Bradleyhand-Bold": {
          value: 9,
          familyName: "Bradleyhand-Bold",
          fontFamilyName: "Bradleyhand-Bold",
          src: "assets/images/fonts/Bradleyhand-Bold.png",
          blueSrc: "assets/images/fonts/Bradleyhand-Bold_blue.png"
        },
        "Cabinsketch-Bold": {
          value: 10,
          familyName: "Cabinsketch-Bold",
          fontFamilyName: "Cabinsketch-Bold",
          src: "assets/images/fonts/Cabinsketch-Bold.png",
          blueSrc: "assets/images/fonts/Cabinsketch-Bold_blue.png"
        },
        simsun: {
          value: 11,
          familyName: "宋体",
          fontFamilyName: "simsun",
          src: "assets/images/fonts/songti.png",
          blueSrc: "assets/images/fonts/songti_blue.png"
        },
        simsun: {
          value: 12,
          familyName: "宋体",
          fontFamilyName: "simsun",
          src: "assets/images/fonts/songti.png",
          blueSrc: "assets/images/fonts/songti_blue.png"
        },
        weiruanyahei: {
          value: 12,
          familyName: "微软雅黑",
          fontFamilyName: "weiruanyahei",
          src: "assets/images/fonts/weiruanyahei.png",
          blueSrc: "assets/images/fonts/weiruanyahei_blue.png"
        },
        mnjbwks: {
          value: 13,
          familyName: "迷你简笔魏楷书",
          fontFamilyName: "mnjbwks",
          src: "assets/images/fonts/mnjbwks.png",
          blueSrc: "assets/images/fonts/mnjbwks_blue.png"
        },
        hzgb: {
          value: 17,
          familyName: "汉真广标",
          fontFamilyName: "hzgb",
          src: "assets/images/fonts/hzgb.png",
          blueSrc: "assets/images/fonts/hzgb_blue.png"
        },
        changyi: {
          value: 18,
          familyName: "迷你简长艺",
          fontFamilyName: "changyi",
          src: "assets/images/fonts/changyi.png",
          blueSrc: "assets/images/fonts/changyi_blue.png"
        }
      };
      this.getFontName = function(b) {
        if (b === undefined) return a;
        for (var c in a)
          if (b === c) return a[c];
        return null
      };
      var b;
      this.setUserType = function(a) {
        b = a
      }, this.getUserType = function() {
        return b
      }
    }
    a.utilFont = new b
  }(window),
  function(a) {
    function b() {
      var a = {};
      this.addInterval = function(b, c) {
        a[b] = c
      }, this.deleteInterval = function(b) {
        a[b] && (clearInterval(a[b]), delete a[b])
      }, this.clearInterval = function() {
        for (var b in a) this.deleteInterval(b)
      };
      var b = [{
        value: 1,
        desc: "轮播",
        name: "slide"
      }, {
        value: 2,
        desc: "下落",
        name: "bars"
      }, {
        value: 3,
        desc: "百页窗",
        name: "blinds"
      }, {
        value: 4,
        desc: "消隐",
        name: "blocks"
      }, {
        value: 5,
        desc: "渐变",
        name: "blocks2"
      }, {
        value: 9,
        desc: "梳理",
        name: "zip"
      }, {
        value: 11,
        desc: "翻转",
        name: "bars3d"
      }, {
        value: 13,
        desc: "立方体",
        name: "cube"
      }, {
        value: 14,
        desc: "棋盘",
        name: "tiles3d"
      }, {
        value: 16,
        desc: "飞出",
        name: "explode"
      }];
      this.getPicStyle = function(a) {
        if (a === undefined) return b;
        for (var c = 0; c < b.length; c++)
          if (a === b[c].value) return b[c]
      }
    }
    a.utilPictures = new b
  }(window),
  function(a, b) {
    function c() {
      var a, c, d, e = [];
      b("#media");
      this.addAudio = function(a, f) {
        var g = new Audio;
        g.src = f, e.push({
          elem: a,
          audio: g
        }), b(g).bind("ended", function() {
          c = !1, d()
        })
      }, this.play = function(b, f, g) {
        var h;
        d = f;
        for (var i = 0; i < e.length; i++) e[i].elem == b && (h = e[i].audio);
        a == h && c ? (h.pause(), c = !1, f()) : a != h || c ? (a && a.pause(),
          h.currentTime = 0, h.play(), g(), c = !0, a = h) : (h.play(), c = !
          0, g())
      }, this.pause = function() {
        a && (a.pause(), c = !1)
      }
    }
    a.utilSound = new c
  }(window, $),
  function(a) {
    function b() {
      var a = {
          CLICK: {
            name: "click",
            value: 1,
            title: "点击"
          },
          SHAKE: {
            name: "shake",
            value: 2,
            title: "摇一摇"
          }
        },
        b = {
          SHOW: {
            name: "show",
            value: 1
          },
          HIDE: {
            name: "hide",
            value: 2
          },
          RANDOMEVENT: {
            name: "randomEvent",
            value: 3
          }
        };
      this.getSendType = function(b) {
        if (b === undefined) return a;
        for (var c in a)
          if (b === a[c].value) return a[c];
        return null
      }, this.getHandleType = function(a) {
        if (a === undefined) return b;
        for (var c in b)
          if (a === b[c].value) return b[c];
        return null
      }
    }
    a.utilTrigger = new b
  }(window);
