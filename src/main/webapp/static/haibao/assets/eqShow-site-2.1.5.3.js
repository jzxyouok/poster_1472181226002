


var tplCount = 0,
  eqxCommon = function() {
    var a = function(a) {
        var b, c, d = a.type;
        return "typer" === d && (b = "typer"), 0 === d && (b = "fadeIn"), 1 ===
          d && (c = a.direction, 0 === c && (b = "fadeInLeft"), 1 === c && (b =
            "fadeInDown"), 2 === c && (b = "fadeInRight"), 3 === c && (b =
            "fadeInUp")), 6 === d && (b = "wobble"), 5 === d && (b =
            "rubberBand"), 7 === d && (b = "rotateIn"), 8 === d && (b = "flip"),
          9 === d && (b = "swing"), 2 === d && (c = a.direction, 0 === c && (b =
            "bounceInLeft"), 1 === c && (b = "bounceInDown"), 2 === c && (b =
            "bounceInRight"), 3 === c && (b = "bounceInUp")), 3 === d && (b =
            "bounceIn"), 4 === d && (b = "zoomIn"), 10 === d && (b = "fadeOut"),
          11 === d && (b = "flipOutY"), 12 === d && (b = "rollIn"), 13 === d &&
          (b = "lightSpeedIn"), 14 === d && (b = "bounceOut"), 15 === d && (b =
            "rollOut"), 16 === d && (b = "lightSpeedOut"), 17 === d && (c = a.direction,
            0 === c && (b = "fadeOutRight"), 1 === c && (b = "fadeOutDown"), 2 ===
            c && (b = "fadeOutLeft"), 3 === c && (b = "fadeOutUp")), 18 === d &&
          (b = "zoomOut"), 19 === d && (c = a.direction, 0 === c && (b =
            "bounceOutRight"), 1 === c && (b = "bounceOutDown"), 2 === c && (
            b = "bounceOutLeft"), 3 === c && (b = "bounceOutUp")), 20 === d &&
          (b = "flipInY"), 21 === d && (b = "tada"), 22 === d && (b = "jello"),
          23 === d && (b = "flash"), 26 === d && (b = "twisterInDown"), 27 ===
          d && (b = "puffIn"), 28 === d && (b = "puffOut"), 29 === d && (b =
            "slideDown"), 30 === d && (b = "slideUp"), 24 === d && (b =
            "flipInX"), 25 === d && (b = "flipOutX"), 31 === d && (b =
            "twisterInUp"), 32 == d && (b = "vanishOut"), 33 == d && (b =
            "vanishIn"), b
      },
      b = function(a, b, c, d, e) {
        function f(a, d, e, g, h) {
          if (e.length && i < e.length) {
            if ("typer" == d[i]) {
              var j = a.find(".element"),
                k = e[i].interval,
                l = e[i].delay;
              if (g && h.top > 486 && "view" == c) {
                var m = function(c, g) {
                  Math.abs(g) > h.top && (j.data("typed") && (clearInterval(j
                      .data("typed").timeout), j.removeData("typed")), j.empty(),
                    j.typed({
                      strings: [b.content],
                      contentType: "html",
                      showCursor: !1,
                      typeSpeed: 1e3 * k || 0,
                      startDelay: 1e3 * l || 0,
                      callback: function() {
                        clearInterval(j.data("typed").timeout), j.removeData(
                          "typed"), i++, f(a, d, e)
                      }
                    }), $(document).unbind("pageScrollPos", m))
                };
                return void $(document).bind("pageScrollPos", m)
              }
              j.data("typed") && (clearInterval(j.data("typed").timeout), j.removeData(
                "typed")), j.empty(), j.typed({
                strings: [b.content],
                contentType: "html",
                showCursor: !1,
                typeSpeed: 1e3 * k || 0,
                startDelay: 1e3 * e[i].delay || 0,
                callback: function() {
                  clearInterval(j.data("typed").timeout), j.removeData(
                    "typed"), i++, f(a, d, e)
                }
              })
            }
            a.css("animation", "");
            a.get(0);
            if (a.css("animation", d[i] + " " + e[i].duration + "s ease " + e[i]
                .delay + "s " + (e[i].countNum ? e[i].countNum : "")), "view" ==
              c ? (e[i].count && i == e.length - 1 && a.css(
                "animation-iteration-count", "infinite"), a.css(
                "animation-fill-mode", "both")) : (a.css(
                "animation-iteration-count", "1"), a.css(
                "animation-fill-mode", "backwards")), e[i].linear && a.css(
                "animation-timing-function", "linear"), g && h.top > 486 &&
              "view" == c) {
              a.css("display", "none");
              var n = function(b, c) {
                Math.abs(c) > h.top && (a.css("display", "block"), $(document)
                  .unbind("pageScrollPos", n))
              };
              $(document).bind("pageScrollPos", n)
            }
            a.one(
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
              function() {
                i++, f(a, d, e)
              })
          }
        }
        if (b.trigger && b.trigger.receives && b.trigger.receives.length && !e &&
          "view" == c)
          for (var g = b.trigger.receives, h = 0; h < g.length; h++)
            if (1 == g[h].type && g[h].ids.length) return;
        var i = 0;
        if (b.properties && b.properties.anim) {
          var j = [];
          b.properties.anim.length ? j = b.properties.anim : j.push(b.properties
            .anim);
          var k = $(".element-box", a);
          k.attr("element-anim", "");
          for (var l, m = [], n = [], h = 0, o = j.length; o > h; h++) null !=
            j[h].type && -1 != j[h].type && (l = eqxCommon.convertType(j[h]), m
              .push(l), n.push(j[h]));
          if (d && d.scale) return;
          b.properties.anim.trigger ? a.click(function() {
            f(k, l, b.properties.anim)
          }) : d && d.longPage ? f(k, m, n, !0, b.css) : f(k, m, n)
        }
      },
      c = function(a, b) {
        var c, d = $(a);
        if (b.trigger && b.trigger.receives && b.trigger.receives.length) {
          $.each(b.trigger.receives, function(a, e) {
            if (e.ids.length) {
              var f = utilTrigger.getHandleType(e.type).name;
              ("show" == f || "randomEvent" == f) && d.hide(), "hide" == f &&
                d.show(), d.bind(f, function(a, e) {
                  if ("show" == f) $(this).show(), c || (c = !0,
                    eqxCommon.animation(d, b, "view", null, !0));
                  else if ("hide" == f) $(this).hide(), c = !1;
                  else if ("randomEvent" == f) {
                    eqShow.playTriggerSound(), $(this).show();
                    var g = Math.floor(Math.random() * b.properties.pics.length);
                    $(this).find("img").css({
                      display: "none"
                    }), $(this).find("img").eq(g).css({
                      display: "block"
                    })
                  }
                })
            }
          })
        }
      },
      d = function() {
        var a, b, c = window.navigator,
          d = ["language", "browserLanguage", "systemLanguage", "userLanguage"];
        if ($.isArray(c.languages))
          for (a = 0; a < c.languages.length; a++)
            if (b = c.languages[a], b && b.length) return b;
        for (a = 0; a < d.length; a++)
          if (b = c[d[a]], b && b.length) return b;
        return null
      };
    return {
      convertType: a,
      animation: b,
      bindTrigger: c,
      getFirstBrowserLanguage: d
    }
  }();
eqShow.clearTyperText = function(a) {
  if (a && a.elements) {
    var b = a.elements;
    $.each(b, function(a, b) {
      if (b.properties && b.properties.anim) {
        var c = b.properties.anim;
        $.each(c, function(a, c) {
          0 == a && "typer" == c.type && $("#inside_" + b.id).find(
            ".element").empty()
        })
      }
    })
  }
}, eqShow.isMobileApp = function() {
  return !!window.viewData
}, eqShow.setPageHis = function(a) {
  if (mobilecheck()) {
    var b = eqShow.getQueryString("toPage"),
      c = location.href;
    b ? b !== "" + a && (c = c.replace(b, a)) : c += (/\?/.test(c) ? "&" :
      "?") + "toPage=" + a, window.history.pushState({
      title: $("title").html(),
      url: c
    }, $("title").html(), c)
  }
}, eqShow.getShowCount = function(a) {
  return this.showCount = $.ajax({
    type: "GET",
    url: API_URL + "scene/view?id=" + a,
    xhrFields: {
      withCredentials: !0
    },
    error: function() {
      alert("Connection error")
    },
    crossDomain: !0
  }), this.showCount
}, eqShow.getQueryString = function(a) {
  var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)", "i"),
    c = window.location.search.substr(1).match(b);
  return c ? unescape(c[2]) : null
}, eqShow.delQueStr = function(a, b) {
  var c = "";
  if (-1 === a.indexOf("?")) return a;
  c = a.substr(a.indexOf("?") + 1);
  var d = [],
    e = "";
  if (-1 !== c.indexOf("&")) {
    d = c.split("&");
    for (i in d) d[i].split("=")[0] != b && (e = e + d[i].split("=")[0] + "=" +
      d[i].split("=")[1] + "&");
    return a.substr(0, a.indexOf("?")) + "?" + e.substr(0, e.length - 1)
  }
  return d = c.split("="), d[0] == b ? a.substr(0, a.indexOf("?")) : a
}, eqShow.getDomain = function(a) {
  var b = "null";
  ("undefined" == typeof a || null == a) && (a = window.location.href);
  var c = /.*\:\/\/([^\/]*).*/,
    d = a.match(c);
  return "undefined" != typeof d && null != d && (b = d[1]), b
}, eqShow.DateFormit = function(a, b) {
  var c, d = new Date(a);
  switch (b) {
    case "MM月DD日":
      c = d.getMonth() + 1 + "月" + d.getDate() + "日 " + d.getHours() + ":" +
        d.getMinutes();
      break;
    case "T":
      c = "刚刚"
  }
  return c
}, eqShow.fixedNum = function(a) {
  var b;
  return 1e4 > a ? b = a : a >= 1e4 && 1e8 > a ? b = (a / 1e4).toFixed(2) +
    "万" : a >= 1e8 && (b = (a / 1e8).toFixed(2) + "亿"), b
}, eqShow.showProgressBar = function(a, b, c) {
  if (a.obj.property.slideNumber) {
    var d = $('<div class="progress"></div>'),
      e = $("<span></span>"),
      f = $('<em class="page-tip"></em>');
    d.append(e).append(f), c && a.obj.property.slideDisplay ? c.append(d.css(
      "display", a.obj.property.slideDisplay)) : $("#nr").append(d.css(
      "display", "block"))
  }
  var g = function() {
    a.obj.property.slideNumber && e && setTimeout(function() {
      var a = $(".z-active").get(0) ? $(".z-active").get(0) : $(
        ".z-current").get(0);
      if (a) {
        var c = $(a).find(".m-img").attr("id").substring(4),
          g = b.length,
          h = c / g,
          i = 100;
        f.text(c + "/" + g), e.css("width", parseFloat(d.width()) * h),
          $(a).find(".lock").length && (i = 0), d.css("z-index", i)
      }
    }, 100)
  };
  g(), b.eq(0).find(".u-arrow-bottom").css("bottom", "30px"), eqShow.progressInterval =
    setInterval(function() {
      g()
    }, 300)
}, eqShow.selectElement = function(a) {
  var b;
  return b = $("#inside_" + a, ".phone-view").length ? $("#inside_" + a,
    ".phone-view") : $("#inside_" + a)
}, eqShow.substtrCharacters = function(a, b) {
  if (a && (a = a.replace(/\n|\r/g, " ")), a && a.length > b / 2) {
    var c = a.replace(/[^\x00-\xff]/g, "xx");
    if (c.length > b) {
      var d = c.substring(0, b).replace(/xx/g, "中").length;
      a = a.substring(0, d)
    }
  }
  return a
}, eqShow.getCharactersLen = function(a) {
  var b = a.replace(/[^\x00-\xff]/g, "xx");
  return b.length
}, eqShow.getRGB = function(a) {
  if (a = a.toLowerCase(), a.indexOf("rgba") >= 0) {
    var b = a.split(",");
    b[0] = b[0].replace("rgba", "rgb"), b.pop(), b[b.length - 1] += ")", a =
      b.join(",")
  }
  return a
}, eqShow.convertToHexColor = function(a) {
  if (a = a.toLowerCase(), a.indexOf("rgb") >= 0) {
    var b = a.split(","),
      c = b[0].substring(b[0].indexOf("(") + 1);
    c = parseInt(c, 10).toString(16), c = c.length < 2 ? "0" + c : c;
    var d = parseInt(b[1], 10).toString(16);
    d = d.length < 2 ? "0" + d : d;
    var e = b[2].substring(0, b[2].indexOf(")"));
    e = parseInt(e, 10).toString(16), e = e.length < 2 ? "0" + e : e, a = "#" +
      c + d + e
  }
  return a
}, eqShow.responsiveImage = function(a, b, c, d, e) {
  var f = new Image;
  f.src = a, f.onload = function(f) {
    var g, h, i = this;
    $.each(b, function(a, b) {
      b.elements && b.elements.length && $.each(b.elements, function(a,
        b) {
        if (b.id == c) {
          var d = parseInt(b.css.width),
            e = parseInt(b.css.height);
          i.width / i.height >= d / e ? (g = d, h = i.height * (d /
            i.width)) : (h = e, g = i.width * (e / i.height))
        }
      })
    }), e.css({
      display: "block",
      width: g + "px",
      height: h + "px",
      "margin-top": (parseInt(d.height()) - h) / 2 + "px",
      "margin-left": (parseInt(d.width()) - g) / 2 + "px"
    }).attr("src", a)
  }
}, eqShow.getCookieId = function() {
  var a = "",
    b = "C_ID=",
    c = document.cookie,
    d = c.indexOf(b);
  if (-1 != d) {
    d += b.length;
    var e = c.indexOf(";", d); - 1 == e && (e = c.length), a = c.substring(d,
      e)
  }
  return a
}, eqShow.delayLoadJSAndCSS = function(a, b, c) {
  var d, e;
  if (b || (b = a.substr(a.lastIndexOf(".") + 1)), "js" == b) {
    var f = document.getElementsByTagName("script");
    for (e = 0; e < f.length; e++)
      if (f[e].src && -1 != f[e].src.indexOf(a) || f[e].title == c) return f[
        e];
    d = document.createElement("script"), d.type = "text/javascript", d.src =
      a, c && (d.title = c)
  } else {
    if ("css" != b) return;
    var g = document.getElementsByTagName("link");
    for (e = 0; e < g.length; e++)
      if (g[e].href && -1 != g[e].href.indexOf(a) || g[e].title == c) return g[
        e];
    d = document.createElement("link"), d.rel = "stylesheet", d.type =
      "text/css", d.href = a, c && (d.title = c), d.disabled = !1
  }
  var h = document.getElementsByTagName("head")[0];
  return h.appendChild(d), d
}, eqShow.copyToClipboard = function(a) {
  var b, c, d = "_hiddenCopyText_",
    e = "INPUT" === a.tagName || "TEXTAREA" === a.tagName;
  if (e) f = a, b = a.selectionStart, c = a.selectionEnd;
  else {
    if (f = document.getElementById(d), !f) {
      var f = document.createElement("textarea");
      f.style.position = "absolute", f.style.left = "-9999px", f.style.top =
        "0", f.id = d, document.body.appendChild(f)
    }
    f.textContent = a.textContent
  }
  var g = document.activeElement;
  f.focus(), f.setSelectionRange(0, f.value.length);
  var h;
  try {
    h = document.execCommand("copy")
  } catch (i) {
    h = !1
  }
  return g && "function" == typeof g.focus && g.focus(), e ? a.setSelectionRange(
    b, c) : f.textContent = "", h
}, eqShow.getUrlParameter = function(a) {
  var b, c, d = decodeURIComponent(window.location.search.substring(1)),
    e = d.split("&");
  for (c = 0; c < e.length; c++)
    if (b = e[c].split("="), b[0] === a) return b[1] === undefined ? !0 : b[1]
};
var listPages = [];

