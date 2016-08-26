/**
 * eqShow - v2.1.5.3 - 2016-06-07
 *
 *
 * Copyright (c) 2016
 * Licensed MIT <>
 */

function QR8bitByte(a) {
  this.mode = QRMode.MODE_8BIT_BYTE, this.data = a
}

function QRCode(a, b) {
  this.typeNumber = a, this.errorCorrectLevel = b, this.modules = null, this.moduleCount =
    0, this.dataCache = null, this.dataList = new Array
}

function QRPolynomial(a, b) {
  if (a.length == undefined) throw new Error(a.length + "/" + b);
  for (var c = 0; c < a.length && 0 == a[c];) c++;
  this.num = new Array(a.length - c + b);
  for (var d = 0; d < a.length - c; d++) this.num[d] = a[d + c]
}

function QRRSBlock(a, b) {
  this.totalCount = a, this.dataCount = b
}

function QRBitBuffer() {
  this.buffer = new Array, this.length = 0
}

function randomRange(a, b) {
  return Math.random() * (b - a) + a
}

function checkBrower() {
  var a = !0;
  return navigator.userAgent.indexOf("Safari") > 0 && navigator.userAgent.indexOf(
    "Chrome") <= 0 ? a : void 0
}

function mobilecheck() {
  var a = !1;
  return function(b) {
      (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i
        .test(b) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
        .test(b.substr(0, 4))) && (a = !0)
    }(navigator.userAgent || navigator.vendor || window.opera), document.body &&
    document.body.clientWidth && document.body.clientHeight && document.body.clientWidth <
    350 && document.body.clientHeight < 500 && (a = !0), a
}

function iphoneCheck() {
  var a = !1;
  return /iPhone/i.test(navigator.userAgent) && (a = !0), !0
}

function isWeixin() {
  var a = navigator.userAgent.toLowerCase();
  return "micromessenger" == a.match(/MicroMessenger/i) ? !0 : !1
}

function isAndroid() {
  var a = navigator.userAgent,
    b = (navigator.appVersion, a.indexOf("Android") > -1 || a.indexOf("Linux") >
      -1);
  return b
}

function tabletCheck() {
  var a = /ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(
    navigator.userAgent.toLowerCase());
  return a
}

function countCharacters(a) {
  var b = 0;
  if (!a) return 0;
  for (var c = 0; c < a.length; c++) {
    var d = a.charCodeAt(c);
    d >= 1 && 126 >= d || d >= 65376 && 65439 >= d ? b++ : b += 2
  }
  return b
}

function renderPage(a, b, c, d) {
  function e(a, b) {
    var c = b.properties.longPage,
      d = 1;
    if (b.elements)
      for (var e = 0; e < b.elements.length; e++)
        if (3 == b.elements[e].type) {
          2 == b.elements[e].properties.croptype && (d = 2);
          break
        }
    var f, g, h, i, j, m = window.scene ? scene.pageMode : 0,
      n = 0,
      o = {
        touchPos: 0,
        pLen: -486 * (c - 1),
        contain: $("#page" + a),
        cH: mobilecheck() ? $(document).height() : 486,
        stopInertiaMove: !1
      },
      p = 1 == d ? ".edit_area" : ".edit_wrapper";
    0 == m || 1 == m || 2 == m || 6 == m || 7 == m || 8 == m || 11 == m || 12 ==
      m || 13 == m ? m = "NS" : (m = "WE", $(
        '<section class="u-arrow-bottom"><div class="pre-wrap"><div class="pre-box1"><div class="pre1"></div></div><div class="pre-box2"><div class="pre2"></div></div></div></section>'
      ).appendTo("#page" + a));
    var q = 0,
      r = 0;
    o.contain.on("mousedown touchstart", function(a) {
      return "button" == a.target.tagName.toLowerCase() || a.target.getAttribute(
          "data") || a.target.getAttribute("href") || "8" == a.target.getAttribute(
          "ctype") || "z" == a.target.getAttribute("ctype") ? void a.stopPropagation() :
        (a.stopPropagation(), a.preventDefault(), void(o.touchPos < o.pLen ||
          o.touchPos > 0 || (f = !0, h = 0, o.stopInertiaMove = !0, g = a
            .originalEvent.touches ? a.originalEvent.changedTouches[0].clientY :
            a.clientY, "WE" == m && (i = a.originalEvent.touches ? a.originalEvent
              .changedTouches[0].clientX : a.clientX), r = o.touchPos, q =
            Date.now())))
    }), o.contain.on("mousemove touchmove", function(a) {
      if (a.stopPropagation(), f) {
        if (h = o.touchPos + (a.originalEvent.touches ? a.originalEvent.changedTouches[
            0].clientY : a.clientY) - g, "WE" == m && (j = (a.originalEvent
              .touches ? a.originalEvent.touches[0].clientX : a.clientX) -
            i, Math.abs(j) > Math.abs(h - o.touchPos) && !scene.property.forbidHandFlip
          )) {
          if (j > 0) {
            if (5 > j) return;
            eqxiu.prePage()
          } else eqxiu.nextPage();
          return void(f = !1)
        }
        if (h < o.pLen || h > 5) return f = !1, h > 0 && "NS" == m && (
          scene.property.forbidHandFlip ? o.touchPos = 0 : eqxiu.prePage()
        ), void(0 > h && "NS" == m && (scene.property.forbidHandFlip ?
          o.touchPos = o.pLen : eqxiu.nextPage()));
        if (h > 0) return;
        o.stopInertiaMove = !0, $(this).find(p).css("transform",
          "translate3d(0," + (h - n) + "px,0)"), $(this).find(p).css(
          "-webkit-transform", "translate3d(0," + (h - n) + "px,0)");
        var b = $(this).find(".alock");
        if (b.length > 0)
          for (var c = 0; c < b.length; c++) l(b[c], b[c].style.transform,
            n - h);
        var d = Date.now();
        $(document).trigger("pageScrollPos", [h - o.cH]), d - q > 300 && (q =
          d, r = h), o.stopInertiaMove = !1
      }
    }), o.contain.on("mouseup touchend mouseleave", function(a) {
      if (a.stopPropagation(), f) {
        if (f = !1, 0 === h || h - r == 0) return void $(a.target).trigger(
          "click", "longPage");
        if (!(0 > h && h > o.pLen)) return h >= 0 ? void(o.touchPos = 0) :
          void(o.touchPos = o.pLen);
        o.touchPos = h, "WE" == m && o.contain.find(".u-arrow-bottom").hide();
        var b = Date.now(),
          c = (h - r) / (b - q);
        !
        function(a, b, c, d) {
          function e() {
            if (!d.stopInertiaMove) {
              var h = Date.now(),
                i = h - b,
                j = a + i * g;
              if (!(0 > f * j)) {
                var k = (a + j) / 2 * i,
                  m = c + k;
                if (!(m > 0 || m < d.pLen)) {
                  d.timmer = null, d.contain.find(p).css("transform",
                    "translate3d(0," + (m - n) + "px,0)"), d.contain.find(
                    p).css("-webkit-transform", "translate3d(0," + (m - n) +
                    "px,0)");
                  var o = d.contain.find(".alock");
                  if (o.length > 0)
                    for (var q = 0; q < o.length; q++) l(o[q], o[q].style.transform,
                      n - m);
                  d.touchPos = m, $(document).trigger("pageScrollPos", [m -
                    d.cH
                  ]), setTimeout(e, 10)
                }
              }
            }
          }
          var f = 0 > a ? -1 : 1,
            g = f * -6e-4;
          e()
        }(c, b, h, o)
      }
    }), $(document).on("clearTouchPos", function() {
      o.touchPos = 0, o.contain.find(p).css("transform", "translateY(0px)"),
        o.contain.find(p).css("-webkit-transform", "translateY(0px)");
      var a, b = o.contain.find(".alock");
      if (b.length > 0)
        for (var c = 0; c < b.length; c++) a = b[c].style.transform.replace(
          k, ""), b[c].style.transform = "translate3d(0,0,0) " + a
    })
  }
  a.templateParser("jsonParser").parse({
    def: c[b - 1],
    appendTo: "#page" + b,
    mode: "view",
    disEvent: d
  }), listPages = c;
  var f, g, h = 1,
    i = $(".z-current").width(),
    j = $(".z-current").height();
  imageWidth = $(".m-img").width(), imageHeight = $(".m-img").height(), i / j >=
    320 / 486 ? (h = j / 486, f = (i / h - 320) / 2) : (h = i / 320, g = (j / h -
      486) / 2), window != window.top && $(".phoneBox .nr").css({
      width: "100%",
      height: "100%",
      overflow: "hidden",
      "transform-origin": "top left",
      transform: "scale(" + h + ")"
    }), window !== window.top && mobilecheck() || $(".edit_area").css({
      marginTop: g || 0
    }), f && $(".edit_area").css({
      marginLeft: f
    }), tplCount == c.length && $("#eqMobileViewport").attr("content",
      "width=320, initial-scale=" + h + ", maximum-scale=" + h +
      ", user-scalable=no"), c[b - 1].properties && c[b - 1].properties.longPage &&
    e(b, c[b - 1]);
  var k = /translate3d\(.*?\)/g,
    l = function(a, b, c) {
      b = b.replace(k, ""), b && (a.style.transform = "translate3d(0," + c +
        "px,0) " + b)
    }
}

function preview(a, b) {
  function c(c, d, e) {
    d.on("$destroy", function() {
      d.unbind("click")
    }), d.click(function() {
      a.getPrintBase(e.viewId).then(function(a) {
        if (a) {
          var c = a.properties;
          if (c && c.shareType) {
            var d = $("#preview_wrap"),
              f = $("#pc_preview");
            f.attr("src", PREFIX_HOST + "/print/share.html?code=" + e.viewCode),
              d.show(), d.find("span").click(function() {
                d.hide(), f.attr("src", ""), $(this).unbind("click")
              })
          } else b.openConfirmDialog({
            msg: "您还没有分享此作品，请分享后再预览",
            confirmName: "分享"
          }, function() {
            window.open("print/shareSet/" + e.viewId, "_blank")
          })
        }
      })
    })
  }
  return {
    restrict: "A",
    scope: {},
    link: c
  }
}
