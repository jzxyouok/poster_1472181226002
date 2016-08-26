/**
 * eqShow - v2.1.5.3 - 2016-06-07
 *
 *
 * Copyright (c) 2016
 * Licensed MIT <>
 */

function checkBrower() {
    var a = !0;
    return navigator.userAgent.indexOf("Safari") > 0 && navigator.userAgent.indexOf("Chrome") <= 0 ? a : void 0
}
function mobilecheck() {
    var a = !1;
    return function (b) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) && (a = !0)
    }(navigator.userAgent || navigator.vendor || window.opera), document.body && document.body.clientWidth && document.body.clientHeight && document.body.clientWidth < 350 && document.body.clientHeight < 500 && (a = !0), a
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
        b = (navigator.appVersion, a.indexOf("Android") > -1 || a.indexOf("Linux") > -1);
    return b
}
function tabletCheck() {
    var a = /ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent.toLowerCase());
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
        if (b.elements) for (var e = 0; e < b.elements.length; e++) if (3 == b.elements[e].type) {
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
        0 == m || 1 == m || 2 == m || 6 == m || 7 == m || 8 == m || 11 == m || 12 == m || 13 == m ? m = "NS" : (m = "WE", $('<section class="u-arrow-bottom"><div class="pre-wrap"><div class="pre-box1"><div class="pre1"></div></div><div class="pre-box2"><div class="pre2"></div></div></div></section>').appendTo("#page" + a));
        var q = 0,
            r = 0;
        o.contain.on("mousedown touchstart", function (a) {
            return "button" == a.target.tagName.toLowerCase() || a.target.getAttribute("data") || a.target.getAttribute("href") || "8" == a.target.getAttribute("ctype") || "z" == a.target.getAttribute("ctype") ? void a.stopPropagation() : (a.stopPropagation(), a.preventDefault(), void(o.touchPos < o.pLen || o.touchPos > 0 || (f = !0, h = 0, o.stopInertiaMove = !0, g = a.originalEvent.touches ? a.originalEvent.changedTouches[0].clientY : a.clientY, "WE" == m && (i = a.originalEvent.touches ? a.originalEvent.changedTouches[0].clientX : a.clientX), r = o.touchPos, q = Date.now())))
        }), o.contain.on("mousemove touchmove", function (a) {
            if (a.stopPropagation(), f) {
                if (h = o.touchPos + (a.originalEvent.touches ? a.originalEvent.changedTouches[0].clientY : a.clientY) - g, "WE" == m && (j = (a.originalEvent.touches ? a.originalEvent.touches[0].clientX : a.clientX) - i, Math.abs(j) > Math.abs(h - o.touchPos) && !scene.property.forbidHandFlip)) {
                    if (j > 0) {
                        if (5 > j) return;
                        eqxiu.prePage()
                    } else eqxiu.nextPage();
                    return void(f = !1)
                }
                if (h < o.pLen || h > 5) return f = !1, h > 0 && "NS" == m && (scene.property.forbidHandFlip ? o.touchPos = 0 : eqxiu.prePage()), void(0 > h && "NS" == m && (scene.property.forbidHandFlip ? o.touchPos = o.pLen : eqxiu.nextPage()));
                if (h > 0) return;
                o.stopInertiaMove = !0, $(this).find(p).css("transform", "translate3d(0," + (h - n) + "px,0)"), $(this).find(p).css("-webkit-transform", "translate3d(0," + (h - n) + "px,0)");
                var b = $(this).find(".alock");
                if (b.length > 0) for (var c = 0; c < b.length; c++) l(b[c], b[c].style.transform, n - h);
                var d = Date.now();
                $(document).trigger("pageScrollPos", [h - o.cH]), d - q > 300 && (q = d, r = h), o.stopInertiaMove = !1
            }
        }), o.contain.on("mouseup touchend mouseleave", function (a) {
            if (a.stopPropagation(), f) {
                if (f = !1, 0 === h || h - r == 0) return void $(a.target).trigger("click", "longPage");
                if (!(0 > h && h > o.pLen)) return h >= 0 ? void(o.touchPos = 0) : void(o.touchPos = o.pLen);
                o.touchPos = h, "WE" == m && o.contain.find(".u-arrow-bottom").hide();
                var b = Date.now(),
                    c = (h - r) / (b - q);
                !
                    function (a, b, c, d) {
                        function e() {
                            if (!d.stopInertiaMove) {
                                var h = Date.now(),
                                    i = h - b,
                                    j = a + i * g;
                                if (!(0 > f * j)) {
                                    var k = (a + j) / 2 * i,
                                        m = c + k;
                                    if (!(m > 0 || m < d.pLen)) {
                                        d.timmer = null, d.contain.find(p).css("transform", "translate3d(0," + (m - n) + "px,0)"), d.contain.find(p).css("-webkit-transform", "translate3d(0," + (m - n) + "px,0)");
                                        var o = d.contain.find(".alock");
                                        if (o.length > 0) for (var q = 0; q < o.length; q++) l(o[q], o[q].style.transform, n - m);
                                        d.touchPos = m, $(document).trigger("pageScrollPos", [m - d.cH]), setTimeout(e, 10)
                                    }
                                }
                            }
                        }

                        var f = 0 > a ? -1 : 1,
                            g = f * -6e-4;
                        e()
                    }(c, b, h, o)
            }
        }), $(document).on("clearTouchPos", function () {
            o.touchPos = 0, o.contain.find(p).css("transform", "translateY(0px)"), o.contain.find(p).css("-webkit-transform", "translateY(0px)");
            var a, b = o.contain.find(".alock");
            if (b.length > 0) for (var c = 0; c < b.length; c++) a = b[c].style.transform.replace(k, ""), b[c].style.transform = "translate3d(0,0,0) " + a
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
    imageWidth = $(".m-img").width(), imageHeight = $(".m-img").height(), i / j >= 320 / 486 ? (h = j / 486, f = (i / h - 320) / 2) : (h = i / 320, g = (j / h - 486) / 2), window != window.top && $(".phoneBox .nr").css({
        width: "100%",
        height: "100%",
        overflow: "hidden",
        "transform-origin": "top left",
        transform: "scale(" + h + ")"
    }), window !== window.top && mobilecheck() || $(".edit_area").css({
        marginTop: g || 0
    }), f && $(".edit_area").css({
        marginLeft: f
    }), tplCount == c.length && $("#eqMobileViewport").attr("content", "width=320, initial-scale=" + h + ", maximum-scale=" + h + ", user-scalable=no"), c[b - 1].properties && c[b - 1].properties.longPage && e(b, c[b - 1]);
    var k = /translate3d\(.*?\)/g,
        l = function (a, b, c) {
            b = b.replace(k, ""), b && (a.style.transform = "translate3d(0," + c + "px,0) " + b)
        }
}
(function () {
    "use strict";
    var a = this,
        b = a.Chart,
        c = function (a) {
            this.canvas = a.canvas, this.ctx = a;
            var b = function (a, b) {
                    return a["offset" + b] ? a["offset" + b] : document.defaultView.getComputedStyle(a).getPropertyValue(b)
                },
                c = this.width = b(a.canvas, "Width") || a.canvas.width,
                e = this.height = b(a.canvas, "Height") || a.canvas.height;
            return c = this.width = a.canvas.width, e = this.height = a.canvas.height, this.aspectRatio = this.width / this.height, d.retinaScale(this), this
        };
    c.defaults = {
        global: {
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            showScale: !0,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleIntegersOnly: !0,
            scaleBeginAtZero: !1,
            scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            responsive: !1,
            maintainAspectRatio: !0,
            showTooltips: !0,
            customTooltips: !1,
            tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
            tooltipFillColor: "rgba(0,0,0,0.8)",
            tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipFontSize: 14,
            tooltipFontStyle: "normal",
            tooltipFontColor: "#fff",
            tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipTitleFontSize: 14,
            tooltipTitleFontStyle: "bold",
            tooltipTitleFontColor: "#fff",
            tooltipTitleTemplate: "<%= label%>",
            tooltipYPadding: 6,
            tooltipXPadding: 6,
            tooltipCaretSize: 8,
            tooltipCornerRadius: 6,
            tooltipXOffset: 10,
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
            multiTooltipTemplate: "<%= value %>",
            multiTooltipKeyBackground: "#fff",
            segmentColorDefault: ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#CAB2D6", "#6A3D9A", "#B4B482", "#B15928"],
            segmentHighlightColorDefaults: ["#CEF6FF", "#47A0DC", "#DAFFB2", "#5BC854", "#FFC2C1", "#FF4244", "#FFE797", "#FFA728", "#F2DAFE", "#9265C2", "#DCDCAA", "#D98150"],
            onAnimationProgress: function () {
            },
            onAnimationComplete: function () {
            }
        }
    }, c.types = {};
    var d = c.helpers = {},
        e = d.each = function (a, b, c) {
            var d = Array.prototype.slice.call(arguments, 3);
            if (a) if (a.length === +a.length) {
                var e;
                for (e = 0; e < a.length; e++) b.apply(c, [a[e], e].concat(d))
            } else for (var f in a) b.apply(c, [a[f], f].concat(d))
        },
        f = d.clone = function (a) {
            var b = {};
            return e(a, function (c, d) {
                a.hasOwnProperty(d) && (b[d] = c)
            }), b
        },
        g = d.extend = function (a) {
            return e(Array.prototype.slice.call(arguments, 1), function (b) {
                e(b, function (c, d) {
                    b.hasOwnProperty(d) && (a[d] = c)
                })
            }), a
        },
        h = d.merge = function (a, b) {
            var c = Array.prototype.slice.call(arguments, 0);
            return c.unshift({}), g.apply(null, c)
        },
        i = d.indexOf = function (a, b) {
            if (Array.prototype.indexOf) return a.indexOf(b);
            for (var c = 0; c < a.length; c++) if (a[c] === b) return c;
            return -1
        },
        j = (d.where = function (a, b) {
            var c = [];
            return d.each(a, function (a) {
                b(a) && c.push(a)
            }), c
        }, d.findNextWhere = function (a, b, c) {
            c || (c = -1);
            for (var d = c + 1; d < a.length; d++) {
                var e = a[d];
                if (b(e)) return e
            }
        }, d.findPreviousWhere = function (a, b, c) {
            c || (c = a.length);
            for (var d = c - 1; d >= 0; d--) {
                var e = a[d];
                if (b(e)) return e
            }
        }, d.inherits = function (a) {
            var b = this,
                c = a && a.hasOwnProperty("constructor") ? a.constructor : function () {
                    return b.apply(this, arguments)
                },
                d = function () {
                    this.constructor = c
                };
            return d.prototype = b.prototype, c.prototype = new d, c.extend = j, a && g(c.prototype, a), c.__super__ = b.prototype, c
        }),
        k = d.noop = function () {
        },
        l = d.uid = function () {
            var a = 0;
            return function () {
                return "chart-" + a++
            }
        }(),
        m = d.warn = function (a) {
            window.console && "function" == typeof window.console.warn && console.warn(a)
        },
        n = d.amd = "function" == typeof define && define.amd,
        o = d.isNumber = function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        p = d.max = function (a) {
            return Math.max.apply(Math, a)
        },
        q = d.min = function (a) {
            return Math.min.apply(Math, a)
        },
        r = (d.cap = function (a, b, c) {
            if (o(b)) {
                if (a > b) return b
            } else if (o(c) && c > a) return c;
            return a
        }, d.getDecimalPlaces = function (a) {
            if (a % 1 !== 0 && o(a)) {
                var b = a.toString();
                if (b.indexOf("e-") < 0) return b.split(".")[1].length;
                if (b.indexOf(".") < 0) return parseInt(b.split("e-")[1]);
                var c = b.split(".")[1].split("e-");
                return c[0].length + parseInt(c[1])
            }
            return 0
        }),
        s = d.radians = function (a) {
            return a * (Math.PI / 180)
        },
        t = (d.getAngleFromPoint = function (a, b) {
            var c = b.x - a.x,
                d = b.y - a.y,
                e = Math.sqrt(c * c + d * d),
                f = 2 * Math.PI + Math.atan2(d, c);
            return 0 > c && 0 > d && (f += 2 * Math.PI), {
                angle: f,
                distance: e
            }
        }, d.aliasPixel = function (a) {
            return a % 2 === 0 ? 0 : .5
        }),
        u = (d.splineCurve = function (a, b, c, d) {
            var e = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)),
                f = Math.sqrt(Math.pow(c.x - b.x, 2) + Math.pow(c.y - b.y, 2)),
                g = d * e / (e + f),
                h = d * f / (e + f);
            return {
                inner: {
                    x: b.x - g * (c.x - a.x),
                    y: b.y - g * (c.y - a.y)
                },
                outer: {
                    x: b.x + h * (c.x - a.x),
                    y: b.y + h * (c.y - a.y)
                }
            }
        }, d.calculateOrderOfMagnitude = function (a) {
            return Math.floor(Math.log(a) / Math.LN10)
        }),
        v = (d.calculateScaleRange = function (a, b, c, d, f) {
            var g = 2,
                h = Math.floor(b / (1.5 * c)),
                i = g >= h,
                j = [];
            e(a, function (a) {
                null == a || j.push(a)
            });
            var k = q(j),
                l = p(j);
            l === k && (l += .5, k >= .5 && !d ? k -= .5 : l += .5);
            for (var m = Math.abs(l - k), n = u(m), o = Math.ceil(l / (1 * Math.pow(10, n))) * Math.pow(10, n), r = d ? 0 : Math.floor(k / (1 * Math.pow(10, n))) * Math.pow(10, n), s = o - r, t = Math.pow(10, n), v = Math.round(s / t);
                 (v > h || h > 2 * v) && !i;) if (v > h) t *= 2, v = Math.round(s / t), v % 1 !== 0 && (i = !0);
            else if (f && n >= 0) {
                if (t / 2 % 1 !== 0) break;
                t /= 2, v = Math.round(s / t)
            } else t /= 2, v = Math.round(s / t);
            return i && (v = g, t = s / v), {
                steps: v,
                stepValue: t,
                min: r,
                max: r + v * t
            }
        }, d.template = function (a, b) {
            function c(a, b) {
                var c = /\W/.test(a) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + a.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : d[a] = d[a];
                return b ? c(b) : c
            }

            if (a instanceof Function) return a(b);
            var d = {};
            return c(a, b)
        }),
        w = (d.generateLabels = function (a, b, c, d) {
            var f = new Array(b);
            return a && e(f, function (b, e) {
                f[e] = v(a, {
                    value: c + d * (e + 1)
                })
            }), f
        }, d.easingEffects = {
            linear: function (a) {
                return a
            },
            easeInQuad: function (a) {
                return a * a
            },
            easeOutQuad: function (a) {
                return -1 * a * (a - 2)
            },
            easeInOutQuad: function (a) {
                return (a /= .5) < 1 ? .5 * a * a : -.5 * (--a * (a - 2) - 1)
            },
            easeInCubic: function (a) {
                return a * a * a
            },
            easeOutCubic: function (a) {
                return 1 * ((a = a / 1 - 1) * a * a + 1)
            },
            easeInOutCubic: function (a) {
                return (a /= .5) < 1 ? .5 * a * a * a : .5 * ((a -= 2) * a * a + 2)
            },
            easeInQuart: function (a) {
                return a * a * a * a
            },
            easeOutQuart: function (a) {
                return -1 * ((a = a / 1 - 1) * a * a * a - 1)
            },
            easeInOutQuart: function (a) {
                return (a /= .5) < 1 ? .5 * a * a * a * a : -.5 * ((a -= 2) * a * a * a - 2)
            },
            easeInQuint: function (a) {
                return 1 * (a /= 1) * a * a * a * a
            },
            easeOutQuint: function (a) {
                return 1 * ((a = a / 1 - 1) * a * a * a * a + 1)
            },
            easeInOutQuint: function (a) {
                return (a /= .5) < 1 ? .5 * a * a * a * a * a : .5 * ((a -= 2) * a * a * a * a + 2)
            },
            easeInSine: function (a) {
                return -1 * Math.cos(a / 1 * (Math.PI / 2)) + 1
            },
            easeOutSine: function (a) {
                return 1 * Math.sin(a / 1 * (Math.PI / 2))
            },
            easeInOutSine: function (a) {
                return -.5 * (Math.cos(Math.PI * a / 1) - 1)
            },
            easeInExpo: function (a) {
                return 0 === a ? 1 : 1 * Math.pow(2, 10 * (a / 1 - 1))
            },
            easeOutExpo: function (a) {
                return 1 === a ? 1 : 1 * (-Math.pow(2, -10 * a / 1) + 1)
            },
            easeInOutExpo: function (a) {
                return 0 === a ? 0 : 1 === a ? 1 : (a /= .5) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (-Math.pow(2, -10 * --a) + 2)
            },
            easeInCirc: function (a) {
                return a >= 1 ? a : -1 * (Math.sqrt(1 - (a /= 1) * a) - 1)
            },
            easeOutCirc: function (a) {
                return 1 * Math.sqrt(1 - (a = a / 1 - 1) * a)
            },
            easeInOutCirc: function (a) {
                return (a /= .5) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
            },
            easeInElastic: function (a) {
                var b = 1.70158,
                    c = 0,
                    d = 1;
                return 0 === a ? 0 : 1 == (a /= 1) ? 1 : (c || (c = .3), d < Math.abs(1) ? (d = 1, b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d), -(d * Math.pow(2, 10 * (a -= 1)) * Math.sin((1 * a - b) * (2 * Math.PI) / c)))
            },
            easeOutElastic: function (a) {
                var b = 1.70158,
                    c = 0,
                    d = 1;
                return 0 === a ? 0 : 1 == (a /= 1) ? 1 : (c || (c = .3), d < Math.abs(1) ? (d = 1, b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d), d * Math.pow(2, -10 * a) * Math.sin((1 * a - b) * (2 * Math.PI) / c) + 1)
            },
            easeInOutElastic: function (a) {
                var b = 1.70158,
                    c = 0,
                    d = 1;
                return 0 === a ? 0 : 2 == (a /= .5) ? 1 : (c || (c = 1 * (.3 * 1.5)), d < Math.abs(1) ? (d = 1, b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d), 1 > a ? -.5 * (d * Math.pow(2, 10 * (a -= 1)) * Math.sin((1 * a - b) * (2 * Math.PI) / c)) : d * Math.pow(2, -10 * (a -= 1)) * Math.sin((1 * a - b) * (2 * Math.PI) / c) * .5 + 1)
            },
            easeInBack: function (a) {
                var b = 1.70158;
                return 1 * (a /= 1) * a * ((b + 1) * a - b)
            },
            easeOutBack: function (a) {
                var b = 1.70158;
                return 1 * ((a = a / 1 - 1) * a * ((b + 1) * a + b) + 1)
            },
            easeInOutBack: function (a) {
                var b = 1.70158;
                return (a /= .5) < 1 ? .5 * (a * a * (((b *= 1.525) + 1) * a - b)) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
            },
            easeInBounce: function (a) {
                return 1 - w.easeOutBounce(1 - a)
            },
            easeOutBounce: function (a) {
                return (a /= 1) < 1 / 2.75 ? 1 * (7.5625 * a * a) : 2 / 2.75 > a ? 1 * (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 * (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
            },
            easeInOutBounce: function (a) {
                return .5 > a ? .5 * w.easeInBounce(2 * a) : .5 * w.easeOutBounce(2 * a - 1) + .5
            }
        }),
        x = d.requestAnimFrame = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
                function (a) {
                    return window.setTimeout(a, 1e3 / 60)
                }
        }(),
        y = (d.cancelAnimFrame = function () {
            return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame ||
                function (a) {
                    return window.clearTimeout(a, 1e3 / 60)
                }
        }(), d.animationLoop = function (a, b, c, d, e, f) {
            var g = 0,
                h = w[c] || w.linear,
                i = function () {
                    g++;
                    var c = g / b,
                        j = h(c);
                    a.call(f, j, c, g), d.call(f, j, c), b > g ? f.animationFrame = x(i) : e.apply(f)
                };
            x(i)
        }, d.getRelativePosition = function (a) {
            var b, c, d = a.originalEvent || a,
                e = a.currentTarget || a.srcElement,
                f = e.getBoundingClientRect();
            return d.touches ? (b = d.touches[0].clientX - f.left, c = d.touches[0].clientY - f.top) : (b = d.clientX - f.left, c = d.clientY - f.top), {
                x: b,
                y: c
            }
        }, d.addEvent = function (a, b, c) {
            a.addEventListener ? a.addEventListener(b, c) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
        }),
        z = d.removeEvent = function (a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent ? a.detachEvent("on" + b, c) : a["on" + b] = k
        },
        A = (d.bindEvents = function (a, b, c) {
            a.events || (a.events = {}), e(b, function (b) {
                a.events[b] = function () {
                    c.apply(a, arguments)
                }, y(a.chart.canvas, b, a.events[b])
            })
        }, d.unbindEvents = function (a, b) {
            e(b, function (b, c) {
                z(a.chart.canvas, c, b)
            })
        }),
        B = d.getMaximumWidth = function (a) {
            var b = a.parentNode,
                c = parseInt(D(b, "padding-left")) + parseInt(D(b, "padding-right"));
            return b.clientWidth - c
        },
        C = d.getMaximumHeight = function (a) {
            var b = a.parentNode,
                c = parseInt(D(b, "padding-bottom")) + parseInt(D(b, "padding-top"));
            return b.clientHeight - c
        },
        D = d.getStyle = function (a, b) {
            return a.currentStyle ? a.currentStyle[b] : document.defaultView.getComputedStyle(a, null).getPropertyValue(b)
        },
        E = (d.getMaximumSize = d.getMaximumWidth, d.retinaScale = function (a) {
            var b = a.ctx,
                c = a.canvas.width,
                d = a.canvas.height;
            window.devicePixelRatio && (b.canvas.style.width = c + "px", b.canvas.style.height = d + "px", b.canvas.height = d * window.devicePixelRatio, b.canvas.width = c * window.devicePixelRatio, b.scale(window.devicePixelRatio, window.devicePixelRatio))
        }),
        F = d.clear = function (a) {
            a.ctx.clearRect(0, 0, a.width, a.height)
        },
        G = d.fontString = function (a, b, c) {
            return b + " " + a + "px " + c
        },
        H = d.longestText = function (a, b, c) {
            a.font = b;
            var d = 0;
            return e(c, function (b) {
                var c = a.measureText(b).width;
                d = c > d ? c : d
            }), d
        },
        I = d.drawRoundedRectangle = function (a, b, c, d, e, f) {
            a.beginPath(), a.moveTo(b + f, c), a.lineTo(b + d - f, c), a.quadraticCurveTo(b + d, c, b + d, c + f), a.lineTo(b + d, c + e - f), a.quadraticCurveTo(b + d, c + e, b + d - f, c + e), a.lineTo(b + f, c + e), a.quadraticCurveTo(b, c + e, b, c + e - f), a.lineTo(b, c + f), a.quadraticCurveTo(b, c, b + f, c), a.closePath()
        };
    c.instances = {}, c.Type = function (a, b, d) {
        this.options = b, this.chart = d, this.id = l(), c.instances[this.id] = this, b.responsive && this.resize(), this.initialize.call(this, a)
    }, g(c.Type.prototype, {
        initialize: function () {
            return this
        },
        clear: function () {
            return F(this.chart), this
        },
        stop: function () {
            return c.animationService.cancelAnimation(this), this
        },
        resize: function (a) {
            this.stop();
            var b = this.chart.canvas,
                c = B(this.chart.canvas),
                d = this.options.maintainAspectRatio ? c / this.chart.aspectRatio : C(this.chart.canvas);
            return b.width = this.chart.width = c, b.height = this.chart.height = d, E(this.chart), "function" == typeof a && a.apply(this, Array.prototype.slice.call(arguments, 1)), this
        },
        reflow: k,
        render: function (a) {
            if (a && this.reflow(), this.options.animation && !a) {
                var b = new c.Animation;
                b.numSteps = this.options.animationSteps, b.easing = this.options.animationEasing, b.render = function (a, b) {
                    var c = d.easingEffects[b.easing],
                        e = b.currentStep / b.numSteps,
                        f = c(e);
                    a.draw(f, e, b.currentStep)
                }, b.onAnimationProgress = this.options.onAnimationProgress, b.onAnimationComplete = this.options.onAnimationComplete, c.animationService.addAnimation(this, b)
            } else this.draw(), this.options.onAnimationComplete.call(this);
            return this
        },
        generateLegend: function () {
            return v(this.options.legendTemplate, this)
        },
        destroy: function () {
            this.clear(), A(this, this.events);
            var a = this.chart.canvas;
            a.width = this.chart.width, a.height = this.chart.height, a.style.removeProperty ? (a.style.removeProperty("width"), a.style.removeProperty("height")) : (a.style.removeAttribute("width"), a.style.removeAttribute("height")), delete c.instances[this.id]
        },
        showTooltip: function (a, b) {
            "undefined" == typeof this.activeElements && (this.activeElements = []);
            var f = function (a) {
                var b = !1;
                return a.length !== this.activeElements.length ? b = !0 : (e(a, function (a, c) {
                    a !== this.activeElements[c] && (b = !0)
                }, this), b)
            }.call(this, a);
            if (f || b) {
                if (this.activeElements = a, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), a.length > 0) if (this.datasets && this.datasets.length > 1) {
                    for (var g, h, j = this.datasets.length - 1; j >= 0 && (g = this.datasets[j].points || this.datasets[j].bars || this.datasets[j].segments, h = i(g, a[0]), -1 === h); j--);
                    var k = [],
                        l = [],
                        m = function (a) {
                            var b, c, e, f, g, i = [],
                                j = [],
                                m = [];
                            return d.each(this.datasets, function (a) {
                                b = a.points || a.bars || a.segments, b[h] && b[h].hasValue() && i.push(b[h])
                            }), d.each(i, function (a) {
                                j.push(a.x), m.push(a.y), k.push(d.template(this.options.multiTooltipTemplate, a)), l.push({
                                    fill: a._saved.fillColor || a.fillColor,
                                    stroke: a._saved.strokeColor || a.strokeColor
                                })
                            }, this), g = q(m), e = p(m), f = q(j), c = p(j), {
                                x: f > this.chart.width / 2 ? f : c,
                                y: (g + e) / 2
                            }
                        }.call(this, h);
                    new c.MultiTooltip({
                        x: m.x,
                        y: m.y,
                        xPadding: this.options.tooltipXPadding,
                        yPadding: this.options.tooltipYPadding,
                        xOffset: this.options.tooltipXOffset,
                        fillColor: this.options.tooltipFillColor,
                        textColor: this.options.tooltipFontColor,
                        fontFamily: this.options.tooltipFontFamily,
                        fontStyle: this.options.tooltipFontStyle,
                        fontSize: this.options.tooltipFontSize,
                        titleTextColor: this.options.tooltipTitleFontColor,
                        titleFontFamily: this.options.tooltipTitleFontFamily,
                        titleFontStyle: this.options.tooltipTitleFontStyle,
                        titleFontSize: this.options.tooltipTitleFontSize,
                        cornerRadius: this.options.tooltipCornerRadius,
                        labels: k,
                        legendColors: l,
                        legendColorBackground: this.options.multiTooltipKeyBackground,
                        title: v(this.options.tooltipTitleTemplate, a[0]),
                        chart: this.chart,
                        ctx: this.chart.ctx,
                        custom: this.options.customTooltips
                    }).draw()
                } else e(a, function (a) {
                    var b = a.tooltipPosition();
                    new c.Tooltip({
                        x: Math.round(b.x),
                        y: Math.round(b.y),
                        xPadding: this.options.tooltipXPadding,
                        yPadding: this.options.tooltipYPadding,
                        fillColor: this.options.tooltipFillColor,
                        textColor: this.options.tooltipFontColor,
                        fontFamily: this.options.tooltipFontFamily,
                        fontStyle: this.options.tooltipFontStyle,
                        fontSize: this.options.tooltipFontSize,
                        caretHeight: this.options.tooltipCaretSize,
                        cornerRadius: this.options.tooltipCornerRadius,
                        text: v(this.options.tooltipTemplate, a),
                        chart: this.chart,
                        custom: this.options.customTooltips
                    }).draw()
                }, this);
                return this
            }
        },
        toBase64Image: function () {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
        }
    }), c.Type.extend = function (a) {
        var b = this,
            d = function () {
                return b.apply(this, arguments)
            };
        if (d.prototype = f(b.prototype), g(d.prototype, a), d.extend = c.Type.extend, a.name || b.prototype.name) {
            var e = a.name || b.prototype.name,
                i = c.defaults[b.prototype.name] ? f(c.defaults[b.prototype.name]) : {};
            c.defaults[e] = g(i, a.defaults), c.types[e] = d, c.prototype[e] = function (a, b) {
                var f = h(c.defaults.global, c.defaults[e], b || {});
                return new d(a, f, this)
            }
        } else m("Name not provided for this chart, so it hasn't been registered");
        return b
    }, c.Element = function (a) {
        g(this, a), this.initialize.apply(this, arguments), this.save()
    }, g(c.Element.prototype, {
        initialize: function () {
        },
        restore: function (a) {
            return a ? e(a, function (a) {
                this[a] = this._saved[a]
            }, this) : g(this, this._saved), this
        },
        save: function () {
            return this._saved = f(this), delete this._saved._saved, this
        },
        update: function (a) {
            return e(a, function (a, b) {
                this._saved[b] = this[b], this[b] = a
            }, this), this
        },
        transition: function (a, b) {
            return e(a, function (a, c) {
                this[c] = (a - this._saved[c]) * b + this._saved[c]
            }, this), this
        },
        tooltipPosition: function () {
            return {
                x: this.x,
                y: this.y
            }
        },
        hasValue: function () {
            return o(this.value)
        }
    }), c.Element.extend = j, c.Point = c.Element.extend({
        display: !0,
        inRange: function (a, b) {
            var c = this.hitDetectionRadius + this.radius;
            return Math.pow(a - this.x, 2) + Math.pow(b - this.y, 2) < Math.pow(c, 2)
        },
        draw: function () {
            if (this.display) {
                var a = this.ctx;
                a.beginPath(), a.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), a.closePath(), a.strokeStyle = this.strokeColor, a.lineWidth = this.strokeWidth, a.fillStyle = this.fillColor, a.fill(), a.stroke()
            }
        }
    }), c.Arc = c.Element.extend({
        inRange: function (a, b) {
            var c = d.getAngleFromPoint(this, {
                    x: a,
                    y: b
                }),
                e = c.angle % (2 * Math.PI),
                f = (2 * Math.PI + this.startAngle) % (2 * Math.PI),
                g = (2 * Math.PI + this.endAngle) % (2 * Math.PI) || 360,
                h = f > g ? g >= e || e >= f : e >= f && g >= e,
                i = c.distance >= this.innerRadius && c.distance <= this.outerRadius;
            return h && i
        },
        tooltipPosition: function () {
            var a = this.startAngle + (this.endAngle - this.startAngle) / 2,
                b = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
            return {
                x: this.x + Math.cos(a) * b,
                y: this.y + Math.sin(a) * b
            }
        },
        draw: function (a) {
            var b = this.ctx;
            b.beginPath(), b.arc(this.x, this.y, this.outerRadius < 0 ? 0 : this.outerRadius, this.startAngle, this.endAngle), b.arc(this.x, this.y, this.innerRadius < 0 ? 0 : this.innerRadius, this.endAngle, this.startAngle, !0), b.closePath(), b.strokeStyle = this.strokeColor, b.lineWidth = this.strokeWidth, b.fillStyle = this.fillColor, b.fill(), b.lineJoin = "bevel", this.showStroke && b.stroke()
        }
    }), c.Rectangle = c.Element.extend({
        draw: function () {
            var a = this.ctx,
                b = this.width / 2,
                c = this.x - b,
                d = this.x + b,
                e = this.base - (this.base - this.y),
                f = this.strokeWidth / 2;
            this.showStroke && (c += f, d -= f, e += f), a.beginPath(), a.fillStyle = this.fillColor, a.strokeStyle = this.strokeColor, a.lineWidth = this.strokeWidth, a.moveTo(c, this.base), a.lineTo(c, e), a.lineTo(d, e), a.lineTo(d, this.base), a.fill(), this.showStroke && a.stroke()
        },
        height: function () {
            return this.base - this.y
        },
        inRange: function (a, b) {
            return a >= this.x - this.width / 2 && a <= this.x + this.width / 2 && b >= this.y && b <= this.base
        }
    }), c.Animation = c.Element.extend({
        currentStep: null,
        numSteps: 60,
        easing: "",
        render: null,
        onAnimationProgress: null,
        onAnimationComplete: null
    }), c.Tooltip = c.Element.extend({
        draw: function () {
            var a = this.chart.ctx;
            a.font = G(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
            var b = this.caretPadding = 2,
                c = a.measureText(this.text).width + 2 * this.xPadding,
                d = this.fontSize + 2 * this.yPadding,
                e = d + this.caretHeight + b;
            this.x + c / 2 > this.chart.width ? this.xAlign = "left" : this.x - c / 2 < 0 && (this.xAlign = "right"), this.y - e < 0 && (this.yAlign = "below");
            var f = this.x - c / 2,
                g = this.y - e;
            if (a.fillStyle = this.fillColor, this.custom) this.custom(this);
            else {
                switch (this.yAlign) {
                    case "above":
                        a.beginPath(), a.moveTo(this.x, this.y - b), a.lineTo(this.x + this.caretHeight, this.y - (b + this.caretHeight)), a.lineTo(this.x - this.caretHeight, this.y - (b + this.caretHeight)), a.closePath(), a.fill();
                        break;
                    case "below":
                        g = this.y + b + this.caretHeight, a.beginPath(), a.moveTo(this.x, this.y + b), a.lineTo(this.x + this.caretHeight, this.y + b + this.caretHeight), a.lineTo(this.x - this.caretHeight, this.y + b + this.caretHeight), a.closePath(), a.fill()
                }
                switch (this.xAlign) {
                    case "left":
                        f = this.x - c + (this.cornerRadius + this.caretHeight);
                        break;
                    case "right":
                        f = this.x - (this.cornerRadius + this.caretHeight)
                }
                I(a, f, g, c, d, this.cornerRadius), a.fill(), a.fillStyle = this.textColor, a.textAlign = "center", a.textBaseline = "middle", a.fillText(this.text, f + c / 2, g + d / 2)
            }
        }
    }), c.MultiTooltip = c.Element.extend({
        initialize: function () {
            this.font = G(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = G(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.titleHeight = this.title ? 1.5 * this.titleFontSize : 0, this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + this.titleHeight, this.ctx.font = this.titleFont;
            var a = this.ctx.measureText(this.title).width,
                b = H(this.ctx, this.font, this.labels) + this.fontSize + 3,
                c = p([b, a]);
            this.width = c + 2 * this.xPadding;
            var d = this.height / 2;
            this.y - d < 0 ? this.y = d : this.y + d > this.chart.height && (this.y = this.chart.height - d), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
        },
        getLineHeight: function (a) {
            var b = this.y - this.height / 2 + this.yPadding,
                c = a - 1;
            return 0 === a ? b + this.titleHeight / 3 : b + (1.5 * this.fontSize * c + this.fontSize / 2) + this.titleHeight
        },
        draw: function () {
            if (this.custom) this.custom(this);
            else {
                I(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                var a = this.ctx;
                a.fillStyle = this.fillColor, a.fill(), a.closePath(), a.textAlign = "left", a.textBaseline = "middle", a.fillStyle = this.titleTextColor, a.font = this.titleFont, a.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), a.font = this.font, d.each(this.labels, function (b, c) {
                    a.fillStyle = this.textColor, a.fillText(b, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(c + 1)), a.fillStyle = this.legendColorBackground, a.fillRect(this.x + this.xPadding, this.getLineHeight(c + 1) - this.fontSize / 2, this.fontSize, this.fontSize), a.fillStyle = this.legendColors[c].fill, a.fillRect(this.x + this.xPadding, this.getLineHeight(c + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                }, this)
            }
        }
    }), c.Scale = c.Element.extend({
        initialize: function () {
            this.fit()
        },
        buildYLabels: function () {
            this.yLabels = [];
            for (var a = r(this.stepValue), b = 0; b <= this.steps; b++) this.yLabels.push(v(this.templateString, {
                value: (this.min + b * this.stepValue).toFixed(a)
            }));
            this.yLabelWidth = this.display && this.showLabels ? H(this.ctx, this.font, this.yLabels) + 10 : 0
        },
        addXLabel: function (a) {
            this.xLabels.push(a), this.valuesCount++, this.fit()
        },
        removeXLabel: function () {
            this.xLabels.shift(), this.valuesCount--, this.fit()
        },
        fit: function () {
            this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
            var a, b = this.endPoint,
                c = this.endPoint - this.startPoint;
            for (this.calculateYRange(c), this.buildYLabels(), this.calculateXLabelRotation(); c > this.endPoint - this.startPoint;) c = this.endPoint - this.startPoint, a = this.yLabelWidth, this.calculateYRange(c), this.buildYLabels(), a < this.yLabelWidth && (this.endPoint = b, this.calculateXLabelRotation())
        },
        calculateXLabelRotation: function () {
            this.ctx.font = this.font;
            var a, b, c = this.ctx.measureText(this.xLabels[0]).width,
                d = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
            if (this.xScalePaddingRight = d / 2 + 3, this.xScalePaddingLeft = c / 2 > this.yLabelWidth ? c / 2 : this.yLabelWidth, this.xLabelRotation = 0, this.display) {
                var e, f = H(this.ctx, this.font, this.xLabels);
                this.xLabelWidth = f;
                for (var g = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > g && 0 === this.xLabelRotation || this.xLabelWidth > g && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) e = Math.cos(s(this.xLabelRotation)), a = e * c, b = e * d, a + this.fontSize / 2 > this.yLabelWidth && (this.xScalePaddingLeft = a + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = e * f;
                this.xLabelRotation > 0 && (this.endPoint -= Math.sin(s(this.xLabelRotation)) * f + 3)
            } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
        },
        calculateYRange: k,
        drawingArea: function () {
            return this.startPoint - this.endPoint
        },
        calculateY: function (a) {
            var b = this.drawingArea() / (this.min - this.max);
            return this.endPoint - b * (a - this.min)
        },
        calculateX: function (a) {
            var b = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
                c = b / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
                d = c * a + this.xScalePaddingLeft;
            return this.offsetGridLines && (d += c / 2), Math.round(d)
        },
        update: function (a) {
            d.extend(this, a), this.fit()
        },
        draw: function () {
            var a = this.ctx,
                b = (this.endPoint - this.startPoint) / this.steps,
                c = Math.round(this.xScalePaddingLeft);
            this.display && (a.fillStyle = this.textColor, a.font = this.font, e(this.yLabels, function (e, f) {
                var g = this.endPoint - b * f,
                    h = Math.round(g),
                    i = this.showHorizontalLines;
                a.textAlign = "right", a.textBaseline = "middle", this.showLabels && a.fillText(e, c - 10, g), 0 !== f || i || (i = !0), i && a.beginPath(), f > 0 ? (a.lineWidth = this.gridLineWidth, a.strokeStyle = this.gridLineColor) : (a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor), h += d.aliasPixel(a.lineWidth), i && (a.moveTo(c, h), a.lineTo(this.width, h), a.stroke(), a.closePath()), a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor, a.beginPath(), a.moveTo(c - 5, h), a.lineTo(c, h), a.stroke(), a.closePath()
            }, this), e(this.xLabels, function (b, c) {
                var d = this.calculateX(c) + t(this.lineWidth),
                    e = this.calculateX(c - (this.offsetGridLines ? .5 : 0)) + t(this.lineWidth),
                    f = this.xLabelRotation > 0,
                    g = this.showVerticalLines;
                0 !== c || g || (g = !0), g && a.beginPath(), c > 0 ? (a.lineWidth = this.gridLineWidth, a.strokeStyle = this.gridLineColor) : (a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor), g && (a.moveTo(e, this.endPoint), a.lineTo(e, this.startPoint - 3), a.stroke(), a.closePath()), a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor, a.beginPath(), a.moveTo(e, this.endPoint), a.lineTo(e, this.endPoint + 5), a.stroke(), a.closePath(), a.save(), a.translate(d, f ? this.endPoint + 12 : this.endPoint + 8), a.rotate(-1 * s(this.xLabelRotation)), a.font = this.font, a.textAlign = f ? "right" : "center", a.textBaseline = f ? "middle" : "top", a.fillText(b, 0, 0), a.restore()
            }, this))
        }
    }), c.RadialScale = c.Element.extend({
        initialize: function () {
            this.size = q([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
        },
        calculateCenterOffset: function (a) {
            var b = this.drawingArea / (this.max - this.min);
            return (a - this.min) * b
        },
        update: function () {
            this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
        },
        buildYLabels: function () {
            this.yLabels = [];
            for (var a = r(this.stepValue), b = 0; b <= this.steps; b++) this.yLabels.push(v(this.templateString, {
                value: (this.min + b * this.stepValue).toFixed(a)
            }))
        },
        getCircumference: function () {
            return 2 * Math.PI / this.valuesCount
        },
        setScaleSize: function () {
            var a, b, c, d, e, f, g, h, i, j, k, l, m = q([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                n = this.width,
                p = 0;
            for (this.ctx.font = G(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), b = 0; b < this.valuesCount; b++) a = this.getPointPosition(b, m), c = this.ctx.measureText(v(this.templateString, {
                    value: this.labels[b]
                })).width + 5, 0 === b || b === this.valuesCount / 2 ? (d = c / 2, a.x + d > n && (n = a.x + d, e = b), a.x - d < p && (p = a.x - d, g = b)) : b < this.valuesCount / 2 ? a.x + c > n && (n = a.x + c, e = b) : b > this.valuesCount / 2 && a.x - c < p && (p = a.x - c, g = b);
            i = p, j = Math.ceil(n - this.width), f = this.getIndexAngle(e), h = this.getIndexAngle(g), k = j / Math.sin(f + Math.PI / 2), l = i / Math.sin(h + Math.PI / 2), k = o(k) ? k : 0, l = o(l) ? l : 0, this.drawingArea = m - (l + k) / 2, this.setCenterPoint(l, k)
        },
        setCenterPoint: function (a, b) {
            var c = this.width - b - this.drawingArea,
                d = a + this.drawingArea;
            this.xCenter = (d + c) / 2, this.yCenter = this.height / 2
        },
        getIndexAngle: function (a) {
            var b = 2 * Math.PI / this.valuesCount;
            return a * b - Math.PI / 2
        },
        getPointPosition: function (a, b) {
            var c = this.getIndexAngle(a);
            return {
                x: Math.cos(c) * b + this.xCenter,
                y: Math.sin(c) * b + this.yCenter
            }
        },
        draw: function () {
            if (this.display) {
                var a = this.ctx;
                if (e(this.yLabels, function (b, c) {
                        if (c > 0) {
                            var d, e = c * (this.drawingArea / this.steps),
                                f = this.yCenter - e;
                            if (this.lineWidth > 0) if (a.strokeStyle = this.lineColor, a.lineWidth = this.lineWidth, this.lineArc) a.beginPath(), a.arc(this.xCenter, this.yCenter, e, 0, 2 * Math.PI), a.closePath(), a.stroke();
                            else {
                                a.beginPath();
                                for (var g = 0; g < this.valuesCount; g++) d = this.getPointPosition(g, this.calculateCenterOffset(this.min + c * this.stepValue)), 0 === g ? a.moveTo(d.x, d.y) : a.lineTo(d.x, d.y);
                                a.closePath(), a.stroke()
                            }
                            if (this.showLabels) {
                                if (a.font = G(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                    var h = a.measureText(b).width;
                                    a.fillStyle = this.backdropColor, a.fillRect(this.xCenter - h / 2 - this.backdropPaddingX, f - this.fontSize / 2 - this.backdropPaddingY, h + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                }
                                a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = this.fontColor, a.fillText(b, this.xCenter, f)
                            }
                        }
                    }, this), !this.lineArc) {
                    a.lineWidth = this.angleLineWidth, a.strokeStyle = this.angleLineColor;
                    for (var b = this.valuesCount - 1; b >= 0; b--) {
                        var c = null,
                            d = null;
                        if (this.angleLineWidth > 0 && (c = this.calculateCenterOffset(this.max), d = this.getPointPosition(b, c), a.beginPath(), a.moveTo(this.xCenter, this.yCenter), a.lineTo(d.x, d.y), a.stroke(), a.closePath()), this.backgroundColors && this.backgroundColors.length == this.valuesCount) {
                            null == c && (c = this.calculateCenterOffset(this.max)), null == d && (d = this.getPointPosition(b, c));
                            var f = this.getPointPosition(0 === b ? this.valuesCount - 1 : b - 1, c),
                                g = this.getPointPosition(b === this.valuesCount - 1 ? 0 : b + 1, c),
                                h = {
                                    x: (f.x + d.x) / 2,
                                    y: (f.y + d.y) / 2
                                },
                                i = {
                                    x: (d.x + g.x) / 2,
                                    y: (d.y + g.y) / 2
                                };
                            a.beginPath(), a.moveTo(this.xCenter, this.yCenter), a.lineTo(h.x, h.y), a.lineTo(d.x, d.y), a.lineTo(i.x, i.y), a.fillStyle = this.backgroundColors[b], a.fill(), a.closePath()
                        }
                        var j = this.getPointPosition(b, this.calculateCenterOffset(this.max) + 5);
                        a.font = G(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), a.fillStyle = this.pointLabelFontColor;
                        var k = this.labels.length,
                            l = this.labels.length / 2,
                            m = l / 2,
                            n = m > b || b > k - m,
                            o = b === m || b === k - m;
                        0 === b ? a.textAlign = "center" : b === l ? a.textAlign = "center" : l > b ? a.textAlign = "left" : a.textAlign = "right", o ? a.textBaseline = "middle" : n ? a.textBaseline = "bottom" : a.textBaseline = "top", a.fillText(this.labels[b], j.x, j.y)
                    }
                }
            }
        }
    }), c.animationService = {
        frameDuration: 17,
        animations: [],
        dropFrames: 0,
        addAnimation: function (a, b) {
            for (var c = 0; c < this.animations.length; ++c) if (this.animations[c].chartInstance === a) return void(this.animations[c].animationObject = b);
            this.animations.push({
                chartInstance: a,
                animationObject: b
            }), 1 == this.animations.length && d.requestAnimFrame.call(window, this.digestWrapper)
        },
        cancelAnimation: function (a) {
            var b = d.findNextWhere(this.animations, function (b) {
                return b.chartInstance === a
            });
            b && this.animations.splice(b, 1)
        },
        digestWrapper: function () {
            c.animationService.startDigest.call(c.animationService)
        },
        startDigest: function () {
            var a = Date.now(),
                b = 0;
            this.dropFrames > 1 && (b = Math.floor(this.dropFrames), this.dropFrames -= b);
            for (var c = 0; c < this.animations.length; c++) null === this.animations[c].animationObject.currentStep && (this.animations[c].animationObject.currentStep = 0), this.animations[c].animationObject.currentStep += 1 + b, this.animations[c].animationObject.currentStep > this.animations[c].animationObject.numSteps && (this.animations[c].animationObject.currentStep = this.animations[c].animationObject.numSteps), this.animations[c].animationObject.render(this.animations[c].chartInstance, this.animations[c].animationObject), this.animations[c].animationObject.currentStep == this.animations[c].animationObject.numSteps && (this.animations[c].animationObject.onAnimationComplete.call(this.animations[c].chartInstance), this.animations.splice(c, 1), c--);
            var e = Date.now(),
                f = e - a - this.frameDuration,
                g = f / this.frameDuration;
            g > 1 && (this.dropFrames += g), this.animations.length > 0 && d.requestAnimFrame.call(window, this.digestWrapper)
        }
    }, d.addEvent(window, "resize", function () {
        var a;
        return function () {
            clearTimeout(a), a = setTimeout(function () {
                e(c.instances, function (a) {
                    a.options.responsive && a.resize(a.render, !0)
                })
            }, 50)
        }
    }()), n ? define(function () {
        return c
    }) : "object" == typeof module && module.exports && (module.exports = c), a.Chart = c, c.noConflict = function () {
        return a.Chart = b, c
    }
}).call(this), function () {
    "use strict";
    var a = this,
        b = a.Chart,
        c = b.helpers,
        d = {
            scaleBeginAtZero: !0,
            scaleShowGridLines: !0,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            scaleShowHorizontalLines: !0,
            scaleShowVerticalLines: !0,
            barShowStroke: !0,
            barStrokeWidth: 2,
            barValueSpacing: 5,
            barDatasetSpacing: 1,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'
        };
    b.Type.extend({
        name: "Bar",
        defaults: d,
        initialize: function (a) {
            var d = this.options;
            this.ScaleClass = b.Scale.extend({
                offsetGridLines: !0,
                calculateBarX: function (a, b, c) {
                    var e = this.calculateBaseWidth(),
                        f = this.calculateX(c) - e / 2,
                        g = this.calculateBarWidth(a);
                    return f + g * b + b * d.barDatasetSpacing + g / 2
                },
                calculateBaseWidth: function () {
                    return this.calculateX(1) - this.calculateX(0) - 2 * d.barValueSpacing
                },
                calculateBarWidth: function (a) {
                    var b = this.calculateBaseWidth() - (a - 1) * d.barDatasetSpacing;
                    return b / a
                }
            }), this.datasets = [], this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function (a) {
                var b = "mouseout" !== a.type ? this.getBarsAtEvent(a) : [];
                this.eachBars(function (a) {
                    a.restore(["fillColor", "strokeColor"])
                }), c.each(b, function (a) {
                    a.fillColor = a.highlightFill, a.strokeColor = a.highlightStroke
                }), this.showTooltip(b)
            }), this.BarClass = b.Rectangle.extend({
                strokeWidth: this.options.barStrokeWidth,
                showStroke: this.options.barShowStroke,
                ctx: this.chart.ctx
            }), c.each(a.datasets, function (b, d) {
                var e = {
                    label: b.label || null,
                    fillColor: b.fillColor,
                    strokeColor: b.strokeColor,
                    bars: []
                };
                this.datasets.push(e), c.each(b.data, function (c, d) {
                    e.bars.push(new this.BarClass({
                        value: c,
                        label: a.labels[d],
                        datasetLabel: b.label,
                        strokeColor: b.strokeColor,
                        fillColor: b.fillColor,
                        highlightFill: b.highlightFill || b.fillColor,
                        highlightStroke: b.highlightStroke || b.strokeColor
                    }))
                }, this)
            }, this), this.buildScale(a.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function (a, b, d) {
                c.extend(a, {
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    x: this.scale.calculateBarX(this.datasets.length, d, b),
                    y: this.scale.endPoint
                }), a.save()
            }, this), this.render()
        },
        update: function () {
            this.scale.update(), c.each(this.activeElements, function (a) {
                a.restore(["fillColor", "strokeColor"])
            }), this.eachBars(function (a) {
                a.save()
            }), this.render()
        },
        eachBars: function (a) {
            c.each(this.datasets, function (b, d) {
                c.each(b.bars, a, this, d)
            }, this)
        },
        getBarsAtEvent: function (a) {
            for (var b, d = [], e = c.getRelativePosition(a), f = function (a) {
                d.push(a.bars[b])
            }, g = 0; g < this.datasets.length; g++) for (b = 0; b < this.datasets[g].bars.length; b++) if (this.datasets[g].bars[b].inRange(e.x, e.y)) return c.each(this.datasets, f), d;
            return d
        },
        buildScale: function (a) {
            var b = this,
                d = function () {
                    var a = [];
                    return b.eachBars(function (b) {
                        a.push(b.value)
                    }), a
                },
                e = {
                    templateString: this.options.scaleLabel,
                    height: this.chart.height,
                    width: this.chart.width,
                    ctx: this.chart.ctx,
                    textColor: this.options.scaleFontColor,
                    fontSize: this.options.scaleFontSize,
                    fontStyle: this.options.scaleFontStyle,
                    fontFamily: this.options.scaleFontFamily,
                    valuesCount: a.length,
                    beginAtZero: this.options.scaleBeginAtZero,
                    integersOnly: this.options.scaleIntegersOnly,
                    calculateYRange: function (a) {
                        var b = c.calculateScaleRange(d(), a, this.fontSize, this.beginAtZero, this.integersOnly);
                        c.extend(this, b)
                    },
                    xLabels: a,
                    font: c.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                    lineWidth: this.options.scaleLineWidth,
                    lineColor: this.options.scaleLineColor,
                    showHorizontalLines: this.options.scaleShowHorizontalLines,
                    showVerticalLines: this.options.scaleShowVerticalLines,
                    gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                    gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                    padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                    showLabels: this.options.scaleShowLabels,
                    display: this.options.showScale
                };
            this.options.scaleOverride && c.extend(e, {
                calculateYRange: c.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }), this.scale = new this.ScaleClass(e)
        },
        addData: function (a, b) {
            c.each(a, function (a, c) {
                this.datasets[c].bars.push(new this.BarClass({
                    value: a,
                    label: b,
                    datasetLabel: this.datasets[c].label,
                    x: this.scale.calculateBarX(this.datasets.length, c, this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    base: this.scale.endPoint,
                    strokeColor: this.datasets[c].strokeColor,
                    fillColor: this.datasets[c].fillColor
                }))
            }, this), this.scale.addXLabel(b), this.update()
        },
        removeData: function () {
            this.scale.removeXLabel(), c.each(this.datasets, function (a) {
                a.bars.shift()
            }, this), this.update()
        },
        reflow: function () {
            c.extend(this.BarClass.prototype, {
                y: this.scale.endPoint,
                base: this.scale.endPoint
            });
            var a = c.extend({
                height: this.chart.height,
                width: this.chart.width
            });
            this.scale.update(a)
        },
        draw: function (a) {
            var b = a || 1;
            this.clear(), this.chart.ctx, this.scale.draw(b), c.each(this.datasets, function (a, d) {
                c.each(a.bars, function (a, c) {
                    a.hasValue() && (a.base = this.scale.endPoint, a.transition({
                        x: this.scale.calculateBarX(this.datasets.length, d, c),
                        y: this.scale.calculateY(a.value),
                        width: this.scale.calculateBarWidth(this.datasets.length)
                    }, b).draw())
                }, this)
            }, this)
        }
    })
}.call(this), function () {
    "use strict";
    var a = this,
        b = a.Chart,
        c = b.helpers,
        d = {
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            percentageInnerCutout: 50,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'
        };
    b.Type.extend({
        name: "Doughnut",
        defaults: d,
        initialize: function (a) {
            this.segments = [], this.outerRadius = (c.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = b.Arc.extend({
                ctx: this.chart.ctx,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function (a) {
                var b = "mouseout" !== a.type ? this.getSegmentsAtEvent(a) : [];
                c.each(this.segments, function (a) {
                    a.restore(["fillColor"])
                }), c.each(b, function (a) {
                    a.fillColor = a.highlightColor
                }), this.showTooltip(b)
            }), this.calculateTotal(a), c.each(a, function (b, c) {
                b.color || (b.color = "hsl(" + 360 * c / a.length + ", 100%, 50%)"), this.addData(b, c, !0)
            }, this), this.render()
        },
        getSegmentsAtEvent: function (a) {
            var b = [],
                d = c.getRelativePosition(a);
            return c.each(this.segments, function (a) {
                a.inRange(d.x, d.y) && b.push(a)
            }, this), b
        },
        addData: function (a, c, d) {
            var e = void 0 !== c ? c : this.segments.length;
            "undefined" == typeof a.color && (a.color = b.defaults.global.segmentColorDefault[e % b.defaults.global.segmentColorDefault.length], a.highlight = b.defaults.global.segmentHighlightColorDefaults[e % b.defaults.global.segmentHighlightColorDefaults.length]), this.segments.splice(e, 0, new this.SegmentArc({
                value: a.value,
                outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                fillColor: a.color,
                highlightColor: a.highlight || a.color,
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                startAngle: 1.5 * Math.PI,
                circumference: this.options.animateRotate ? 0 : this.calculateCircumference(a.value),
                label: a.label
            })), d || (this.reflow(), this.update())
        },
        calculateCircumference: function (a) {
            return this.total > 0 ? 2 * Math.PI * (a / this.total) : 0
        },
        calculateTotal: function (a) {
            this.total = 0, c.each(a, function (a) {
                this.total += Math.abs(a.value)
            }, this)
        },
        update: function () {
            this.calculateTotal(this.segments), c.each(this.activeElements, function (a) {
                a.restore(["fillColor"])
            }), c.each(this.segments, function (a) {
                a.save()
            }), this.render()
        },
        removeData: function (a) {
            var b = c.isNumber(a) ? a : this.segments.length - 1;
            this.segments.splice(b, 1), this.reflow(), this.update()
        },
        reflow: function () {
            c.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.outerRadius = (c.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, c.each(this.segments, function (a) {
                a.update({
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                })
            }, this)
        },
        draw: function (a) {
            var b = a ? a : 1;
            this.clear(), c.each(this.segments, function (a, c) {
                a.transition({
                    circumference: this.calculateCircumference(a.value),
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                }, b), a.endAngle = a.startAngle + a.circumference, a.draw(), 0 === c && (a.startAngle = 1.5 * Math.PI), c < this.segments.length - 1 && (this.segments[c + 1].startAngle = a.endAngle)
            }, this)
        }
    }), b.types.Doughnut.extend({
        name: "Pie",
        defaults: c.merge(d, {
            percentageInnerCutout: 0
        })
    })
}.call(this), function () {
    "use strict";
    var a = this,
        b = a.Chart,
        c = b.helpers,
        d = {
            scaleShowGridLines: !0,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            scaleShowHorizontalLines: !0,
            scaleShowVerticalLines: !0,
            bezierCurve: !0,
            bezierCurveTension: .4,
            pointDot: !0,
            pointDotRadius: 4,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>',
            offsetGridLines: !1
        };
    b.Type.extend({
        name: "Line",
        defaults: d,
        initialize: function (a) {
            this.PointClass = b.Point.extend({
                offsetGridLines: this.options.offsetGridLines,
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx,
                inRange: function (a) {
                    return Math.pow(a - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                }
            }), this.datasets = [], this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function (a) {
                var b = "mouseout" !== a.type ? this.getPointsAtEvent(a) : [];
                this.eachPoints(function (a) {
                    a.restore(["fillColor", "strokeColor"])
                }), c.each(b, function (a) {
                    a.fillColor = a.highlightFill, a.strokeColor = a.highlightStroke
                }), this.showTooltip(b)
            }), c.each(a.datasets, function (b) {
                var d = {
                    label: b.label || null,
                    fillColor: b.fillColor,
                    strokeColor: b.strokeColor,
                    pointColor: b.pointColor,
                    pointStrokeColor: b.pointStrokeColor,
                    points: []
                };
                this.datasets.push(d), c.each(b.data, function (c, e) {
                    d.points.push(new this.PointClass({
                        value: c,
                        label: a.labels[e],
                        datasetLabel: b.label,
                        strokeColor: b.pointStrokeColor,
                        fillColor: b.pointColor,
                        highlightFill: b.pointHighlightFill || b.pointColor,
                        highlightStroke: b.pointHighlightStroke || b.pointStrokeColor
                    }))
                }, this), this.buildScale(a.labels), this.eachPoints(function (a, b) {
                    c.extend(a, {
                        x: this.scale.calculateX(b),
                        y: this.scale.endPoint
                    }), a.save()
                }, this)
            }, this), this.render()
        },
        update: function () {
            this.scale.update(), c.each(this.activeElements, function (a) {
                a.restore(["fillColor", "strokeColor"])
            }), this.eachPoints(function (a) {
                a.save()
            }), this.render()
        },
        eachPoints: function (a) {
            c.each(this.datasets, function (b) {
                c.each(b.points, a, this)
            }, this)
        },
        getPointsAtEvent: function (a) {
            var b = [],
                d = c.getRelativePosition(a);
            return c.each(this.datasets, function (a) {
                c.each(a.points, function (a) {
                    a.inRange(d.x, d.y) && b.push(a)
                })
            }, this), b
        },
        buildScale: function (a) {
            var d = this,
                e = function () {
                    var a = [];
                    return d.eachPoints(function (b) {
                        a.push(b.value)
                    }), a
                },
                f = {
                    templateString: this.options.scaleLabel,
                    height: this.chart.height,
                    width: this.chart.width,
                    ctx: this.chart.ctx,
                    textColor: this.options.scaleFontColor,
                    offsetGridLines: this.options.offsetGridLines,
                    fontSize: this.options.scaleFontSize,
                    fontStyle: this.options.scaleFontStyle,
                    fontFamily: this.options.scaleFontFamily,
                    valuesCount: a.length,
                    beginAtZero: this.options.scaleBeginAtZero,
                    integersOnly: this.options.scaleIntegersOnly,
                    calculateYRange: function (a) {
                        var b = c.calculateScaleRange(e(), a, this.fontSize, this.beginAtZero, this.integersOnly);
                        c.extend(this, b)
                    },
                    xLabels: a,
                    font: c.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                    lineWidth: this.options.scaleLineWidth,
                    lineColor: this.options.scaleLineColor,
                    showHorizontalLines: this.options.scaleShowHorizontalLines,
                    showVerticalLines: this.options.scaleShowVerticalLines,
                    gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                    gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                    padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                    showLabels: this.options.scaleShowLabels,
                    display: this.options.showScale
                };
            this.options.scaleOverride && c.extend(f, {
                calculateYRange: c.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }), this.scale = new b.Scale(f)
        },
        addData: function (a, b) {
            c.each(a, function (a, c) {
                this.datasets[c].points.push(new this.PointClass({
                    value: a,
                    label: b,
                    datasetLabel: this.datasets[c].label,
                    x: this.scale.calculateX(this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    strokeColor: this.datasets[c].pointStrokeColor,
                    fillColor: this.datasets[c].pointColor
                }))
            }, this), this.scale.addXLabel(b), this.update()
        },
        removeData: function () {
            this.scale.removeXLabel(), c.each(this.datasets, function (a) {
                a.points.shift()
            }, this), this.update()
        },
        reflow: function () {
            var a = c.extend({
                height: this.chart.height,
                width: this.chart.width
            });
            this.scale.update(a)
        },
        draw: function (a) {
            var b = a || 1;
            this.clear();
            var d = this.chart.ctx,
                e = function (a) {
                    return null !== a.value
                },
                f = function (a, b, d) {
                    return c.findNextWhere(b, e, d) || a
                },
                g = function (a, b, d) {
                    return c.findPreviousWhere(b, e, d) || a
                };
            this.scale && (this.scale.draw(b), c.each(this.datasets, function (a) {
                var h = c.where(a.points, e);
                c.each(a.points, function (a, c) {
                    a.hasValue() && a.transition({
                        y: this.scale.calculateY(a.value),
                        x: this.scale.calculateX(c)
                    }, b)
                }, this), this.options.bezierCurve && c.each(h, function (a, b) {
                    var d = b > 0 && b < h.length - 1 ? this.options.bezierCurveTension : 0;
                    a.controlPoints = c.splineCurve(g(a, h, b), a, f(a, h, b), d), a.controlPoints.outer.y > this.scale.endPoint ? a.controlPoints.outer.y = this.scale.endPoint : a.controlPoints.outer.y < this.scale.startPoint && (a.controlPoints.outer.y = this.scale.startPoint), a.controlPoints.inner.y > this.scale.endPoint ? a.controlPoints.inner.y = this.scale.endPoint : a.controlPoints.inner.y < this.scale.startPoint && (a.controlPoints.inner.y = this.scale.startPoint)
                }, this), d.lineWidth = this.options.datasetStrokeWidth, d.strokeStyle = a.strokeColor, d.beginPath(), c.each(h, function (a, b) {
                    if (0 === b) d.moveTo(a.x, a.y);
                    else if (this.options.bezierCurve) {
                        var c = g(a, h, b);
                        d.bezierCurveTo(c.controlPoints.outer.x, c.controlPoints.outer.y, a.controlPoints.inner.x, a.controlPoints.inner.y, a.x, a.y)
                    } else d.lineTo(a.x, a.y)
                }, this), this.options.datasetStroke && d.stroke(), this.options.datasetFill && h.length > 0 && (d.lineTo(h[h.length - 1].x, this.scale.endPoint), d.lineTo(h[0].x, this.scale.endPoint), d.fillStyle = a.fillColor, d.closePath(), d.fill()), c.each(h, function (a) {
                    a.draw()
                })
            }, this))
        }
    })
}.call(this), function () {
    "use strict";
    var a = this,
        b = a.Chart,
        c = b.helpers,
        d = {
            scaleShowLabelBackdrop: !0,
            scaleBackdropColor: "rgba(255,255,255,0.75)",
            scaleBeginAtZero: !0,
            scaleBackdropPaddingY: 2,
            scaleBackdropPaddingX: 2,
            scaleShowLine: !0,
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'
        };
    b.Type.extend({
        name: "PolarArea",
        defaults: d,
        initialize: function (a) {
            this.segments = [], this.SegmentArc = b.Arc.extend({
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                ctx: this.chart.ctx,
                innerRadius: 0,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.scale = new b.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                lineArc: !0,
                width: this.chart.width,
                height: this.chart.height,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                valuesCount: a.length
            }), this.updateScaleRange(a), this.scale.update(), c.each(a, function (a, b) {
                this.addData(a, b, !0)
            }, this), this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function (a) {
                var b = "mouseout" !== a.type ? this.getSegmentsAtEvent(a) : [];
                c.each(this.segments, function (a) {
                    a.restore(["fillColor"])
                }), c.each(b, function (a) {
                    a.fillColor = a.highlightColor
                }), this.showTooltip(b)
            }), this.render()
        },
        getSegmentsAtEvent: function (a) {
            var b = [],
                d = c.getRelativePosition(a);
            return c.each(this.segments, function (a) {
                a.inRange(d.x, d.y) && b.push(a)
            }, this), b
        },
        addData: function (a, b, c) {
            var d = b || this.segments.length;
            this.segments.splice(d, 0, new this.SegmentArc({
                fillColor: a.color,
                highlightColor: a.highlight || a.color,
                label: a.label,
                value: a.value,
                outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(a.value),
                circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                startAngle: 1.5 * Math.PI
            })), c || (this.reflow(), this.update())
        },
        removeData: function (a) {
            var b = c.isNumber(a) ? a : this.segments.length - 1;
            this.segments.splice(b, 1), this.reflow(), this.update()
        },
        calculateTotal: function (a) {
            this.total = 0, c.each(a, function (a) {
                this.total += a.value
            }, this), this.scale.valuesCount = this.segments.length
        },
        updateScaleRange: function (a) {
            var b = [];
            c.each(a, function (a) {
                b.push(a.value)
            });
            var d = this.options.scaleOverride ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            } : c.calculateScaleRange(b, c.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            c.extend(this.scale, d, {
                size: c.min([this.chart.width, this.chart.height]),
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            })
        },
        update: function () {
            this.calculateTotal(this.segments), c.each(this.segments, function (a) {
                a.save()
            }), this.reflow(), this.render()
        },
        reflow: function () {
            c.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.updateScaleRange(this.segments), this.scale.update(), c.extend(this.scale, {
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            }), c.each(this.segments, function (a) {
                a.update({
                    outerRadius: this.scale.calculateCenterOffset(a.value)
                })
            }, this)
        },
        draw: function (a) {
            var b = a || 1;
            this.clear(), c.each(this.segments, function (a, c) {
                a.transition({
                    circumference: this.scale.getCircumference(),
                    outerRadius: this.scale.calculateCenterOffset(a.value)
                }, b), a.endAngle = a.startAngle + a.circumference, 0 === c && (a.startAngle = 1.5 * Math.PI), c < this.segments.length - 1 && (this.segments[c + 1].startAngle = a.endAngle), a.draw()
            }, this), this.scale.draw()
        }
    })
}.call(this), function () {
    "use strict";
    var a = this,
        b = a.Chart,
        c = b.helpers;
    b.Type.extend({
        name: "Radar",
        defaults: {
            scaleShowLine: !0,
            angleShowLineOut: !0,
            scaleShowLabels: !1,
            scaleBeginAtZero: !0,
            angleLineColor: "rgba(0,0,0,.1)",
            angleLineWidth: 1,
            pointLabelFontFamily: "'Arial'",
            pointLabelFontStyle: "normal",
            pointLabelFontSize: 10,
            pointLabelFontColor: "#666",
            pointDot: !0,
            pointDotRadius: 3,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'
        },
        initialize: function (a) {
            this.PointClass = b.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx
            }), this.datasets = [], this.buildScale(a), this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function (a) {
                var b = "mouseout" !== a.type ? this.getPointsAtEvent(a) : [];
                this.eachPoints(function (a) {
                    a.restore(["fillColor", "strokeColor"])
                }), c.each(b, function (a) {
                    a.fillColor = a.highlightFill, a.strokeColor = a.highlightStroke
                }), this.showTooltip(b)
            }), c.each(a.datasets, function (b) {
                var d = {
                    label: b.label || null,
                    fillColor: b.fillColor,
                    strokeColor: b.strokeColor,
                    pointColor: b.pointColor,
                    pointStrokeColor: b.pointStrokeColor,
                    points: []
                };
                this.datasets.push(d), c.each(b.data, function (c, e) {
                    var f;
                    this.scale.animation || (f = this.scale.getPointPosition(e, this.scale.calculateCenterOffset(c))), d.points.push(new this.PointClass({
                        value: c,
                        label: a.labels[e],
                        datasetLabel: b.label,
                        x: this.options.animation ? this.scale.xCenter : f.x,
                        y: this.options.animation ? this.scale.yCenter : f.y,
                        strokeColor: b.pointStrokeColor,
                        fillColor: b.pointColor,
                        highlightFill: b.pointHighlightFill || b.pointColor,
                        highlightStroke: b.pointHighlightStroke || b.pointStrokeColor
                    }))
                }, this)
            }, this), this.render()
        },
        eachPoints: function (a) {
            c.each(this.datasets, function (b) {
                c.each(b.points, a, this)
            }, this)
        },
        getPointsAtEvent: function (a) {
            var b = c.getRelativePosition(a),
                d = c.getAngleFromPoint({
                    x: this.scale.xCenter,
                    y: this.scale.yCenter
                }, b),
                e = 2 * Math.PI / this.scale.valuesCount,
                f = Math.round((d.angle - 1.5 * Math.PI) / e),
                g = [];
            return (f >= this.scale.valuesCount || 0 > f) && (f = 0), d.distance <= this.scale.drawingArea && c.each(this.datasets, function (a) {
                g.push(a.points[f])
            }), g
        },
        buildScale: function (a) {
            this.scale = new b.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backgroundColors: this.options.scaleBackgroundColors,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                angleLineColor: this.options.angleLineColor,
                angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                pointLabelFontColor: this.options.pointLabelFontColor,
                pointLabelFontSize: this.options.pointLabelFontSize,
                pointLabelFontFamily: this.options.pointLabelFontFamily,
                pointLabelFontStyle: this.options.pointLabelFontStyle,
                height: this.chart.height,
                width: this.chart.width,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                labels: a.labels,
                valuesCount: a.datasets[0].data.length
            }), this.scale.setScaleSize(), this.updateScaleRange(a.datasets), this.scale.buildYLabels()
        },
        updateScaleRange: function (a) {
            var b = function () {
                    var b = [];
                    return c.each(a, function (a) {
                        a.data ? b = b.concat(a.data) : c.each(a.points, function (a) {
                            b.push(a.value)
                        })
                    }), b
                }(),
                d = this.options.scaleOverride ? {
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                } : c.calculateScaleRange(b, c.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            c.extend(this.scale, d)
        },
        addData: function (a, b) {
            this.scale.valuesCount++, c.each(a, function (a, c) {
                var d = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(a));
                this.datasets[c].points.push(new this.PointClass({
                    value: a,
                    label: b,
                    datasetLabel: this.datasets[c].label,
                    x: d.x,
                    y: d.y,
                    strokeColor: this.datasets[c].pointStrokeColor,
                    fillColor: this.datasets[c].pointColor
                }))
            }, this), this.scale.labels.push(b), this.reflow(), this.update()
        },
        removeData: function () {
            this.scale.valuesCount--, this.scale.labels.shift(), c.each(this.datasets, function (a) {
                a.points.shift()
            }, this), this.reflow(), this.update()
        },
        update: function () {
            this.eachPoints(function (a) {
                a.save()
            }), this.reflow(), this.render()
        },
        reflow: function () {
            c.extend(this.scale, {
                width: this.chart.width,
                height: this.chart.height,
                size: c.min([this.chart.width, this.chart.height]),
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
        },
        draw: function (a) {
            var b = a || 1,
                d = this.chart.ctx;
            this.clear(), this.scale.draw(), c.each(this.datasets, function (a) {
                c.each(a.points, function (a, c) {
                    a.hasValue() && a.transition(this.scale.getPointPosition(c, this.scale.calculateCenterOffset(a.value)), b)
                }, this), d.lineWidth = this.options.datasetStrokeWidth, d.strokeStyle = a.strokeColor, d.beginPath(), c.each(a.points, function (a, b) {
                    0 === b ? d.moveTo(a.x, a.y) : d.lineTo(a.x, a.y)
                }, this), d.closePath(), d.stroke(), d.fillStyle = a.fillColor, this.options.datasetFill && d.fill(), c.each(a.points, function (a) {
                    a.hasValue() && a.draw()
                })
            }, this)
        }
    })
}.call(this), !
    function (a) {
        "use strict";
        var b = function (b, c) {
            this.el = a(b), this.options = a.extend({}, a.fn.typed.defaults, c), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = this.isInput ? !1 : this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
        };
        b.prototype = {
            constructor: b,
            init: function () {
                var a = this;
                a.timeout = setTimeout(function () {
                    for (var b = 0; b < a.strings.length; ++b) a.sequence[b] = b;
                    a.shuffle && (a.sequence = a.shuffleArray(a.sequence)), a.typewrite(a.strings[a.sequence[a.arrayPos]], a.strPos)
                }, a.startDelay)
            },
            build: function () {
                var b = this;
                if (this.showCursor === !0 && (this.cursor = a('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
                    b.strings = [], this.stringsElement.hide();
                    var c = this.stringsElement.find("p");
                    a.each(c, function (c, d) {
                        b.strings.push(a(d).html())
                    })
                }
                this.init()
            },
            typewrite: function (a, b) {
                if (this.stop !== !0) {
                    var c = Math.round(70 * Math.random()) + this.typeSpeed,
                        d = this;
                    d.timeout = setTimeout(function () {
                        var c = 0,
                            e = a.substr(b);
                        if ("^" === e.charAt(0)) {
                            var f = 1;
                            /^\^\d+/.test(e) && (e = /\d+/.exec(e)[0], f += e.length, c = parseInt(e)), a = a.substring(0, b) + a.substring(b + f)
                        }
                        if ("html" === d.contentType) {
                            var g = a.substr(b).charAt(0);
                            if ("<" === g || "&" === g) {
                                var h = "",
                                    i = "";
                                for (i = "<" === g ? ">" : ";"; a.substr(b).charAt(0) !== i;) h += a.substr(b).charAt(0), b++;
                                h += i
                            }
                        }
                        d.timeout = setTimeout(function () {
                            if (b === a.length) {
                                if (d.options.onStringTyped(d.arrayPos), d.arrayPos === d.strings.length - 1 && (d.options.callback(), d.curLoop++, d.loop === !1 || d.curLoop === d.loopCount)) return;
                                d.timeout = setTimeout(function () {
                                    d.backspace(a, b)
                                }, d.backDelay)
                            } else {
                                0 === b && d.options.preStringTyped(d.arrayPos);
                                var c = a.substr(0, b + 1);
                                d.attr ? d.el.attr(d.attr, c) : d.isInput ? d.el.val(c) : "html" === d.contentType ? d.el.html(c) : d.el.text(c), b++, d.typewrite(a, b)
                            }
                        }, c)
                    }, c)
                }
            },
            backspace: function (a, b) {
                if (this.stop !== !0) {
                    var c = Math.round(70 * Math.random()) + this.backSpeed,
                        d = this;
                    d.timeout = setTimeout(function () {
                        if ("html" === d.contentType && ">" === a.substr(b).charAt(0)) {
                            for (var c = "";
                                 "<" !== a.substr(b).charAt(0);) c -= a.substr(b).charAt(0), b--;
                            b--, c += "<"
                        }
                        var e = a.substr(0, b);
                        d.attr ? d.el.attr(d.attr, e) : d.isInput ? d.el.val(e) : "html" === d.contentType ? d.el.html(e) : d.el.text(e), b > d.stopNum ? (b--, d.backspace(a, b)) : b <= d.stopNum && (d.arrayPos++, d.arrayPos === d.strings.length ? (d.arrayPos = 0, d.shuffle && (d.sequence = d.shuffleArray(d.sequence)), d.init()) : d.typewrite(d.strings[d.sequence[d.arrayPos]], b))
                    }, c)
                }
            },
            shuffleArray: function (a) {
                var b, c, d = a.length;
                if (d) for (; --d;) c = Math.floor(Math.random() * (d + 1)), b = a[c], a[c] = a[d], a[d] = b;
                return a
            },
            reset: function () {
                var a = this;
                clearInterval(a.timeout);
                var b = this.el.attr("id");
                this.el.after('<span id="' + b + '"/>'), this.el.remove(), "undefined" != typeof this.cursor && this.cursor.remove(), a.options.resetCallback()
            }
        }, a.fn.typed = function (c) {
            return this.each(function () {
                var d = a(this),
                    e = d.data("typed"),
                    f = "object" == typeof c && c;
                e || d.data("typed", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.typed.defaults = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
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
            callback: function () {
            },
            preStringTyped: function () {
            },
            onStringTyped: function () {
            },
            resetCallback: function () {
            }
        }
    }(window.jQuery), function (a) {
    function b() {
        var a = {};
        this.addInterval = function (b, c) {
            a[b] = c
        }, this.deleteInterval = function (b) {
            a[b] && (clearInterval(a[b]), delete a[b])
        }, this.clearInterval = function () {
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
        this.getPicStyle = function (a) {
            if (void 0 === a) return b;
            for (var c = 0; c < b.length; c++) if (a === b[c].value) return b[c]
        }
    }

    a.utilPictures = new b
}(window), function (a) {
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
        this.getSendType = function (b) {
            if (void 0 === b) return a;
            for (var c in a) if (b === a[c].value) return a[c];
            return null
        }, this.getHandleType = function (a) {
            if (void 0 === a) return b;
            for (var c in b) if (a === b[c].value) return b[c];
            return null
        }
    }

    a.utilTrigger = new b
}(window), function (a, b) {
    function c() {
        var a, c, d, e = [];
        b("#media");
        this.addAudio = function (a, f) {
            var g = new Audio;
            g.src = f, e.push({
                elem: a,
                audio: g
            }), b(g).bind("ended", function () {
                c = !1, d()
            })
        }, this.play = function (b, f, g) {
            var h;
            d = f;
            for (var i = 0; i < e.length; i++) e[i].elem == b && (h = e[i].audio);
            a == h && c ? (h.pause(), c = !1, f()) : a != h || c ? (a && a.pause(), h.currentTime = 0, h.play(), g(), c = !0, a = h) : (h.play(), c = !0, g())
        }, this.pause = function () {
            a && (a.pause(), c = !1)
        }
    }

    a.utilSound = new c
}(window, $), window.flux = {
    version: "1.4.4"
}, function (a) {
    flux.slider = function (b, c) {
        flux.browser.init(), flux.browser.supportsTransitions || window.console && window.console.error && console.error("Flux Slider requires a browser that supports CSS3 transitions");
        var d = this;
        this.element = a(b), this.transitions = [];
        for (var e in flux.transitions) this.transitions.push(e);
        this.options = a.extend({
            autoplay: !0,
            transitions: this.transitions,
            delay: 4e3,
            pagination: !0,
            controls: !1,
            captions: !1,
            width: null,
            height: null,
            onTransitionEnd: null,
            onStartEnd: null,
            bgColor: ""
        }, c), this.height = this.options.height ? this.options.height : null, this.width = this.options.width ? this.options.width : null;
        var f = [];
        a(this.options.transitions).each(function (a, b) {
            var c = new flux.transitions[b](this),
                d = !0;
            c.options.requires3d && !flux.browser.supports3d && (d = !1), c.options.compatibilityCheck && (d = c.options.compatibilityCheck()), d && f.push(b)
        }), this.options.transitions = f, this.images = new Array, this.imageLoadedCount = 0, this.currentImageIndex = 0, this.nextImageIndex = 1, this.playing = !1, this.container = a('<div class="fluxslider"></div>').appendTo(this.element), this.surface = a('<div class="surface" style="position: relative"></div>').appendTo(this.container), this.container.bind("click", function (b) {
            a(b.target).hasClass("hasLink") && (window.location = a(b.target).data("href"))
        }), this.imageContainer = a('<div class="images loading1"></div>').css({
            position: "relative",
            overflow: "hidden"
        }).appendTo(this.surface), this.width && this.height && this.imageContainer.css({
            width: this.width + "px",
            height: this.height + "px"
        }), this.image1 = a('<div class="image1" style="height: 100%; width: 100%"></div>').appendTo(this.imageContainer), this.image2 = a('<div class="image2" style="height: 100%; width: 100%"></div>').appendTo(this.imageContainer), a(this.image1).add(this.image2).css({
            position: "absolute",
            top: "0px",
            left: "0px"
        }), this.element.find("img, a img").each(function (b, c) {
            var e = c.cloneNode(!1),
                f = a(c).parent();
            f.is("a") && a(e).data("href", f.attr("href")), d.images.push(e), a(c).remove()
        });
        for (var g = 0; g < this.images.length; g++) {
            var h = new Image;
            h.onload = function () {
                d.imageLoadedCount++, d.width = d.width ? d.width : this.width, d.height = d.height ? d.height : this.height, d.imageLoadedCount >= d.images.length && (d.finishedLoading(), d.setupImages())
            }, h.src = this.images[g].src
        }
        this.element.bind("fluxTransitionEnd", function (a, b) {
            d.options.onTransitionEnd && (a.preventDefault(), d.options.onTransitionEnd(b))
        }), this.options.autoplay && this.start();
        var i = {},
            j = {},
            k = 20;
        this.element.bind("mousedown touchstart", function (a) {
            "touchstart" == a.type ? i.left = a.originalEvent.touches[0].pageX : "mousedown" == a.type && (i.left = a.pageX)
        }).bind("mouseup touchend", function (a) {
            "touchend" == a.type ? j.left = a.originalEvent.changedTouches[0].pageX : "mouseup" == a.type && (j.left = a.pageX), j.left - i.left > k ? d.prev(null, {
                direction: "right"
            }) : i.left - j.left > k && d.next(null, {
                direction: "left"
            }), d.options.autoplay && (d.stop(), d.start())
        }), setTimeout(function () {
            a(window).focus(function () {
                d.isPlaying() && d.next()
            })
        }, 100)
    }, flux.slider.prototype = {
        constructor: flux.slider,
        playing: !1,
        start: function () {
            var a = this;
            this.playing = !0, this.interval = setInterval(function () {
                a.transition()
            }, this.options.delay), "function" == typeof this.options.onStartEnd && this.options.onStartEnd(this.interval)
        },
        stop: function () {
            this.playing = !1, clearInterval(this.interval), this.interval = null
        },
        isPlaying: function () {
            return this.playing
        },
        next: function (a, b) {
            b = b || {}, b.direction = "left", this.showImage(this.currentImageIndex + 1, a, b)
        },
        prev: function (a, b) {
            b = b || {}, b.direction = "right", this.showImage(this.currentImageIndex - 1, a, b)
        },
        showImage: function (a, b, c) {
            this.setNextIndex(a), this.setupImages(), this.transition(b, c)
        },
        finishedLoading: function () {
            var b = this;
            if (this.container.css({
                    width: this.width + "px",
                    height: this.height + "px"
                }), this.imageContainer.removeClass("loading1"), this.options.pagination && (this.pagination = a('<ul class="pagination"></ul>').css({
                    margin: "0px",
                    padding: "0px",
                    "text-align": "center"
                }), this.pagination.bind("click", function (c) {
                    c.preventDefault(), b.showImage(a(c.target).data("index"))
                }), a(this.images).each(function (c, d) {
                    var e = a('<li data-index="' + c + '">' + (c + 1) + "</li>").css({
                        display: "inline-block",
                        "margin-left": "0.5em",
                        cursor: "pointer"
                    }).appendTo(b.pagination);
                    0 == c && e.css("margin-left", 0).addClass("current")
                }), this.container.append(this.pagination)), a(this.imageContainer).css({
                    width: this.width + "px",
                    height: this.height + "px"
                }), a(this.image1).css({
                    width: this.width + "px",
                    height: this.height + "px"
                }), a(this.image2).css({
                    width: this.width + "px",
                    height: this.height + "px"
                }), this.container.css({
                    width: this.width + "px",
                    height: this.height + (this.options.pagination ? this.pagination.height() : 0) + "px"
                }), this.options.controls) {
                var c = {
                    padding: "4px 10px 10px",
                    "font-size": "60px",
                    "font-family": "arial, sans-serif",
                    "line-height": "1em",
                    "font-weight": "bold",
                    color: "#FFF",
                    "text-decoration": "none",
                    background: "rgba(0,0,0,0.5)",
                    position: "absolute",
                    "z-index": 2e3
                };
                this.nextButton = a('<a href="#">»</a>').css(c).css3({
                    "border-radius": "4px"
                }).appendTo(this.surface).bind("click", function (a) {
                    a.preventDefault(), b.next()
                }), this.prevButton = a('<a href="#">«</a>').css(c).css3({
                    "border-radius": "4px"
                }).appendTo(this.surface).bind("click", function (a) {
                    a.preventDefault(), b.prev()
                });
                var d = (this.height - this.nextButton.height()) / 2;
                this.nextButton.css({
                    top: d + "px",
                    right: "10px"
                }), this.prevButton.css({
                    top: d + "px",
                    left: "10px"
                })
            }
            this.options.captions && (this.captionBar = a('<div class="caption"></div>').css({
                background: "rgba(0,0,0,0.6)",
                color: "#FFF",
                "font-size": "16px",
                "font-family": "helvetica, arial, sans-serif",
                "text-decoration": "none",
                "font-weight": "bold",
                padding: "1.5em 1em",
                opacity: 0,
                position: "absolute",
                "z-index": 110,
                width: "100%",
                bottom: 0
            }).css3({
                "transition-property": "opacity",
                "transition-duration": "800ms",
                "box-sizing": "border-box"
            }).prependTo(this.surface)), this.updateCaption()
        },
        setupImages: function () {
            var b = this.getImage(this.currentImageIndex),
                c = {
                    background: 'url("' + b.src + '") 50% 50% / contain no-repeat ' + this.options.bgColor,
                    zIndex: 101,
                    cursor: "auto"
                };
            a(b).data("href") ? (c.cursor = "pointer", this.image1.addClass("hasLink"), this.image1.data("href", a(b).data("href"))) : (this.image1.removeClass("hasLink"), this.image1.data("href", null)), this.image1.css(c).children().remove(), this.image2.css({
                background: 'url("' + this.getImage(this.nextImageIndex).src + '") 50% 50% / contain no-repeat ' + this.options.bgColor,
                zIndex: 100,
                display: "none"
            }), this.options.pagination && this.pagination && (this.pagination.find("li.current").removeClass("current"), a(this.pagination.find("li")[this.currentImageIndex]).addClass("current"))
        },
        transition: function (b, c) {
            if (void 0 == b || !flux.transitions[b]) {
                var d = Math.floor(Math.random() * this.options.transitions.length);
                b = this.options.transitions[d]
            }
            var e = null;
            try {
                e = new flux.transitions[b](this, a.extend(this.options[b] ? this.options[b] : {}, c))
            } catch (f) {
                e = new flux.transition(this, {
                    fallback: !0
                })
            }
            e.run(), this.currentImageIndex = this.nextImageIndex, this.setNextIndex(this.currentImageIndex + 1), this.updateCaption()
        },
        updateCaption: function () {
            var b = a(this.getImage(this.currentImageIndex)).attr("title");
            this.options.captions && this.captionBar && ("" !== b && this.captionBar.html(b), this.captionBar.css("opacity", "" === b ? 0 : 1))
        },
        getImage: function (a) {
            return a %= this.images.length, this.images[a]
        },
        setNextIndex: function (a) {
            void 0 == a && (a = this.currentImageIndex + 1), this.nextImageIndex = a, this.nextImageIndex > this.images.length - 1 && (this.nextImageIndex = 0), this.nextImageIndex < 0 && (this.nextImageIndex = this.images.length - 1)
        },
        increment: function () {
            this.currentImageIndex++, this.currentImageIndex > this.images.length - 1 && (this.currentImageIndex = 0)
        }
    }
}(window.jQuery || window.Zepto), function (a) {
    flux.browser = {
        init: function () {
            if (void 0 === flux.browser.supportsTransitions) {
                var b = (document.createElement("div"), ["-webkit", "-moz", "-o", "-ms"]);
                if (window.Modernizr && void 0 !== Modernizr.csstransitions ? flux.browser.supportsTransitions = Modernizr.csstransitions : flux.browser.supportsTransitions = this.supportsCSSProperty("Transition"), window.Modernizr && void 0 !== Modernizr.csstransforms3d) flux.browser.supports3d = Modernizr.csstransforms3d;
                else if (flux.browser.supports3d = this.supportsCSSProperty("Perspective"), flux.browser.supports3d && "webkitPerspective" in a("body").get(0).style) {
                    var c = a('<div id="csstransform3d"></div>'),
                        d = a('<style media="(transform-3d), (' + b.join("-transform-3d),(") + '-transform-3d)">div#csstransform3d { position: absolute; left: 9px }</style>');
                    a("body").append(c), a("head").append(d), flux.browser.supports3d = 9 == c.get(0).offsetLeft, c.remove(), d.remove()
                }
            }
        },
        supportsCSSProperty: function (a) {
            for (var b = document.createElement("div"), c = ["Webkit", "Moz", "O", "Ms"], d = !1, e = 0; e < c.length; e++) c[e] + a in b.style && (d = d || !0);
            return d
        },
        translate: function (a, b, c) {
            return a = void 0 != a ? a : 0, b = void 0 != b ? b : 0, c = void 0 != c ? c : 0, "translate" + (flux.browser.supports3d ? "3d(" : "(") + a + "px," + b + (flux.browser.supports3d ? "px," + c + "px)" : "px)")
        },
        rotateX: function (a) {
            return flux.browser.rotate("x", a)
        },
        rotateY: function (a) {
            return flux.browser.rotate("y", a)
        },
        rotateZ: function (a) {
            return flux.browser.rotate("z", a)
        },
        rotate: function (a, b) {
            return !a in {
                x: "",
                y: "",
                z: ""
            } && (a = "z"), b = void 0 != b ? b : 0, flux.browser.supports3d ? "rotate3d(" + ("x" == a ? "1" : "0") + ", " + ("y" == a ? "1" : "0") + ", " + ("z" == a ? "1" : "0") + ", " + b + "deg)" : "z" == a ? "rotate(" + b + "deg)" : ""
        }
    }, a(function () {
        flux.browser.init()
    })
}(window.jQuery || window.Zepto), function (a) {
    a.fn.css3 = function (a) {
        var b = {},
            c = ["webkit", "moz", "ms", "o"];
        for (var d in a) {
            for (var e = 0; e < c.length; e++) b["-" + c[e] + "-" + d] = a[d];
            b[d] = a[d]
        }
        return this.css(b), this
    }, a.fn.transitionEnd = function (b) {
        for (var c = ["webkitTransitionEnd", "transitionend", "oTransitionEnd"], d = 0; d < c.length; d++) this.bind(c[d], function (d) {
            for (var e = 0; e < c.length; e++) a(this).unbind(c[e]);
            b && b.call(this, d)
        });
        return this
    }, flux.transition = function (b, c) {
        if (this.options = a.extend({
                requires3d: !1,
                after: function () {
                }
            }, c), this.slider = b, this.options.requires3d && !flux.browser.supports3d || !flux.browser.supportsTransitions || this.options.fallback === !0) {
            var d = this;
            this.options.after = void 0, this.options.setup = function () {
                d.fallbackSetup()
            }, this.options.execute = function () {
                d.fallbackExecute()
            }
        }
    }, flux.transition.prototype = {
        constructor: flux.transition,
        hasFinished: !1,
        run: function () {
            var a = this;
            void 0 !== this.options.setup && this.options.setup.call(this), this.slider.image1.css({
                "background-image": "none"
            }), this.slider.imageContainer.css("overflow", this.options.requires3d ? "visible" : "hidden"), setTimeout(function () {
                void 0 !== a.options.execute && a.slider.image1.css("background-color", ""), a.options.execute.call(a)
            }, 5)
        },
        finished: function () {
            this.hasFinished || (this.hasFinished = !0, this.options.after && this.options.after.call(this), this.slider.imageContainer.css("overflow", "hidden"), this.slider.setupImages(), this.slider.element.trigger("fluxTransitionEnd", {
                currentImage: this.slider.getImage(this.slider.currentImageIndex)
            }))
        },
        fallbackSetup: function () {
        },
        fallbackExecute: function () {
            this.finished()
        }
    }, flux.transitions = {}, flux.transition_grid = function (b, c) {
        return new flux.transition(b, a.extend({
            columns: 6,
            rows: 6,
            forceSquare: !1,
            setup: function () {
                var b = this.slider.image1.width(),
                    c = this.slider.image1.height(),
                    d = Math.floor(b / this.options.columns),
                    e = Math.floor(c / this.options.rows);
                this.options.forceSquare && (e = d, this.options.rows = Math.floor(c / e));
                for (var f = b - this.options.columns * d, g = Math.ceil(f / this.options.columns), h = c - this.options.rows * e, i = Math.ceil(h / this.options.rows), j = (this.slider.image1.height(), 0), k = 0, l = document.createDocumentFragment(), m = 0; m < this.options.columns; m++) {
                    var n = d,
                        k = 0;
                    if (f > 0) {
                        var o = f >= g ? g : f;
                        n += o, f -= o
                    }
                    for (var p = 0; p < this.options.rows; p++) {
                        var q = e,
                            r = h;
                        if (r > 0) {
                            var o = r >= i ? i : r;
                            q += o, r -= o
                        }
                        var s = a('<div class="tile tile-' + m + "-" + p + '"></div>').css({
                            width: n + "px",
                            height: q + "px",
                            position: "absolute",
                            top: k + "px",
                            left: j + "px"
                        });
                        this.options.renderTile.call(this, s, m, p, n, q, j, k), l.appendChild(s.get(0)), k += q
                    }
                    j += n
                }
                this.slider.image1.get(0).appendChild(l)
            },
            execute: function () {
                var a = this,
                    b = this.slider.image1.height(),
                    c = this.slider.image1.find("div.barcontainer");
                this.slider.image2.hide(), c.last().transitionEnd(function (b) {
                    a.slider.image2.show(), a.finished()
                }), c.css3({
                    transform: flux.browser.rotateX(-90) + " " + flux.browser.translate(0, b / 2, b / 2)
                })
            },
            renderTile: function (a, b, c, d, e, f, g) {
            }
        }, c))
    }
}(window.jQuery || window.Zepto), function (a) {
    flux.transitions.bars = function (b, c) {
        return new flux.transition_grid(b, a.extend({
            columns: 10,
            rows: 1,
            delayBetweenBars: 40,
            renderTile: function (b, c, d, e, f, g, h) {
                a(b).css({
                    background: this.slider.image1.css("background"),
                    "background-size": this.slider.width + "px " + this.slider.height + "px",
                    "background-position": "-" + g + "px 0px"
                }).css3({
                    "transition-duration": "400ms",
                    "transition-timing-function": "ease-in",
                    "transition-property": "all",
                    "transition-delay": c * this.options.delayBetweenBars + "ms"
                })
            },
            execute: function () {
                var b = this,
                    c = this.slider.image1.height(),
                    d = this.slider.image1.find("div.tile");
                a(d[d.length - 1]).transitionEnd(function () {
                    b.finished()
                }), setTimeout(function () {
                    d.css({
                        opacity: "0.5"
                    }).css3({
                        transform: flux.browser.translate(0, c)
                    })
                }, 50)
            }
        }, c))
    }
}(window.jQuery || window.Zepto), function (a) {
    flux.transitions.bars3d = function (b, c) {
        return new flux.transition_grid(b, a.extend({
            requires3d: !0,
            columns: 7,
            rows: 1,
            delayBetweenBars: 150,
            perspective: 1e3,
            renderTile: function (b, c, d, e, f, g, h) {
                var i = a('<div class="bar-' + c + '"></div>').css({
                        width: e + "px",
                        height: "100%",
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        "z-index": 200,
                        background: this.slider.image1.css("background"),
                        "background-size": this.slider.width + "px " + this.slider.height + "px",
                        "background-position": "-" + g + "px 0px",
                        "background-repeat": "no-repeat"
                    }).css3({
                        "backface-visibility": "hidden"
                    }),
                    j = a(i.get(0).cloneNode(!1)).css({
                        "background-image": this.slider.image2.css("background-image")
                    }).css3({
                        transform: flux.browser.rotateX(90) + " " + flux.browser.translate(0, -f / 2, f / 2)
                    }),
                    k = a('<div class="side bar-' + c + '"></div>').css({
                        width: f + "px",
                        height: f + "px",
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        background: "#222",
                        "z-index": 190
                    }).css3({
                        transform: flux.browser.rotateY(90) + " " + flux.browser.translate(f / 2, 0, -f / 2) + " " + flux.browser.rotateY(180),
                        "backface-visibility": "hidden"
                    }),
                    l = a(k.get(0).cloneNode(!1)).css3({
                        transform: flux.browser.rotateY(90) + " " + flux.browser.translate(f / 2, 0, e - f / 2)
                    });
                a(b).css({
                    width: e + "px",
                    height: "100%",
                    position: "absolute",
                    top: "0px",
                    left: g + "px",
                    "z-index": c > this.options.columns / 2 ? 1e3 - c : 1e3
                }).css3({
                    "transition-duration": "800ms",
                    "transition-timing-function": "linear",
                    "transition-property": "all",
                    "transition-delay": c * this.options.delayBetweenBars + "ms",
                    "transform-style": "preserve-3d"
                }).append(i).append(j).append(k).append(l)
            },
            execute: function () {
                this.slider.image1.css3({
                    perspective: this.options.perspective,
                    "perspective-origin": "50% 50%"
                }).css({
                    "-moz-transform": "perspective(" + this.options.perspective + "px)",
                    "-moz-perspective": "none",
                    "-moz-transform-style": "preserve-3d"
                });
                var a = this,
                    b = this.slider.image1.height(),
                    c = this.slider.image1.find("div.tile");
                this.slider.image2.hide(), c.last().transitionEnd(function (b) {
                    a.slider.image1.css3({
                        "transform-style": "flat"
                    }), a.slider.image2.show(), a.finished()
                }), setTimeout(function () {
                    c.css3({
                        transform: flux.browser.rotateX(-90) + " " + flux.browser.translate(0, b / 2, b / 2)
                    })
                }, 50)
            }
        }, c))
    }
}(window.jQuery || window.Zepto), function (a) {
    flux.transitions.blinds = function (b, c) {
        return new flux.transitions.bars(b, a.extend({
            execute: function () {
                var b = this,
                    c = (this.slider.image1.height(), this.slider.image1.find("div.tile"));
                a(c[c.length - 1]).transitionEnd(function () {
                    b.finished()
                }), setTimeout(function () {
                    c.css({
                        opacity: "0.5"
                    }).css3({
                        transform: "scalex(0.0001)"
                    })
                }, 50)
            }
        }, c))
    }
}(window.jQuery || window.Zepto), function (a) {
    flux.transitions.zip = function (b, c) {
        return new flux.transitions.bars(b, a.extend({
            execute: function () {
                var b = this,
                    c = this.slider.image1.height(),
                    d = this.slider.image1.find("div.tile");
                a(d[d.length - 1]).transitionEnd(function () {
                    b.finished()
                }), setTimeout(function () {
                    d.each(function (b, d) {
                        a(d).css({
                            opacity: "0.3"
                        }).css3({
                            transform: flux.browser.translate(0, b % 2 ? "-" + 2 * c : c)
                        })
                    })
                }, 20)
            }
        }, c))
    }
}(window.jQuery || window.Zepto), function (a) {
    flux.transitions.blocks = function (b, c) {
        return new flux.transition_grid(b, a.extend({
            forceSquare: !0,
            delayBetweenBars: 100,
            renderTile: function (b, c, d, e, f, g, h) {
                var i = Math.floor(10 * Math.random() * this.options.delayBetweenBars);
                a(b).css({
                    background: this.slider.image1.css("background"),
                    "background-size": this.slider.width + "px " + this.slider.height + "px",
                    "background-position": "-" + g + "px -" + h + "px"
                }).css3({
                    "transition-duration": "350ms",
                    "transition-timing-function": "ease-in",
                    "transition-property": "all",
                    "transition-delay": i + "ms"
                }), void 0 === this.maxDelay && (this.maxDelay = 0), i > this.maxDelay && (this.maxDelay = i, this.maxDelayTile = b)
            },
            execute: function () {
                var b = this,
                    c = this.slider.image1.find("div.tile");
                this.maxDelayTile.transitionEnd(function () {
                    b.finished()
                }), setTimeout(function () {
                    c.each(function (b, c) {
                        a(c).css({
                            opacity: "0"
                        }).css3({
                            transform: "scale(0.8)"
                        })
                    })
                }, 50)
            }
        }, c))
    }
}(window.jQuery || window.Zepto), function (a) {
    flux.transitions.blocks2 = function (b, c) {
        return new flux.transition_grid(b, a.extend({
            cols: 12,
            forceSquare: !0,
            delayBetweenDiagnols: 150,
            renderTile: function (b, c, d, e, f, g, h) {
                Math.floor(10 * Math.random() * this.options.delayBetweenBars);
                a(b).css({
                    background: this.slider.image1.css("background"),
                    "background-size": this.slider.width + "px " + this.slider.height + "px",
                    "background-position": "-" + g + "px -" + h + "px"
                }).css3({
                    "transition-duration": "350ms",
                    "transition-timing-function": "ease-in",
                    "transition-property": "all",
                    "transition-delay": (c + d) * this.options.delayBetweenDiagnols + "ms",
                    "backface-visibility": "hidden"
                })
            },
            execute: function () {
                var b = this,
                    c = this.slider.image1.find("div.tile");
                c.last().transitionEnd(function () {
                    b.finished()
                }), setTimeout(function () {
                    c.each(function (b, c) {
                        a(c).css({
                            opacity: "0"
                        }).css3({
                            transform: "scale(0.8)"
                        })
                    })
                }, 50)
            }
        }, c))
    }
}(window.jQuery || window.Zepto), function (a) {
    flux.transitions.cube = function (b, c) {
        return new flux.transition(b, a.extend({
            requires3d: !0,
            barWidth: 100,
            direction: "left",
            perspective: 1e3,
            setup: function () {
                var b = this.slider.image1.width(),
                    c = this.slider.image1.height();
                this.slider.image1.css3({
                    perspective: this.options.perspective,
                    "perspective-origin": "50% 50%"
                }), this.cubeContainer = a('<div class="cube"></div>').css({
                    width: b + "px",
                    height: c + "px",
                    position: "relative"
                }).css3({
                    "transition-duration": "800ms",
                    "transition-timing-function": "linear",
                    "transition-property": "all",
                    "transform-style": "preserve-3d"
                });
                var d = {
                        height: "100%",
                        width: "100%",
                        position: "absolute",
                        top: "0px",
                        left: "0px"
                    },
                    e = a('<div class="face current"></div>').css(a.extend(d, {
                        background: this.slider.image1.css("background"),
                        "background-size": this.slider.width + "px " + this.slider.height + "px"
                    })).css3({
                        "backface-visibility": "hidden"
                    });
                this.cubeContainer.append(e);
                var f = a('<div class="face next"></div>').css(a.extend(d, {
                    background: this.slider.image2.css("background-image")
                })).css3({
                    transform: this.options.transitionStrings.call(this, this.options.direction, "nextFace"),
                    "backface-visibility": "hidden"
                });
                this.cubeContainer.append(f), this.slider.image1.append(this.cubeContainer)
            },
            execute: function () {
                var a = this;
                this.slider.image1.width(), this.slider.image1.height();
                this.slider.image2.hide(), this.cubeContainer.transitionEnd(function () {
                    a.slider.image2.show(), a.finished()
                }), setTimeout(function () {
                    a.cubeContainer.css3({
                        transform: a.options.transitionStrings.call(a, a.options.direction, "container")
                    })
                }, 50)
            },
            transitionStrings: function (a, b) {
                var c = this.slider.image1.width(),
                    d = this.slider.image1.height(),
                    e = {
                        up: {
                            nextFace: flux.browser.rotateX(-90) + " " + flux.browser.translate(0, d / 2, d / 2),
                            container: flux.browser.rotateX(90) + " " + flux.browser.translate(0, -d / 2, d / 2)
                        },
                        down: {
                            nextFace: flux.browser.rotateX(90) + " " + flux.browser.translate(0, -d / 2, d / 2),
                            container: flux.browser.rotateX(-90) + " " + flux.browser.translate(0, d / 2, d / 2)
                        },
                        left: {
                            nextFace: flux.browser.rotateY(90) + " " + flux.browser.translate(c / 2, 0, c / 2),
                            container: flux.browser.rotateY(-90) + " " + flux.browser.translate(-c / 2, 0, c / 2)
                        },
                        right: {
                            nextFace: flux.browser.rotateY(-90) + " " + flux.browser.translate(-c / 2, 0, c / 2),
                            container: flux.browser.rotateY(90) + " " + flux.browser.translate(c / 2, 0, c / 2)
                        }
                    };
                return e[a] && e[a][b] ? e[a][b] : !1
            }
        }, c))
    }
}(window.jQuery || window.Zepto), function (a) {
    flux.transitions.tiles3d = function (b, c) {
        return new flux.transition_grid(b, a.extend({
            requires3d: !0,
            forceSquare: !0,
            columns: 5,
            perspective: 600,
            delayBetweenBarsX: 200,
            delayBetweenBarsY: 150,
            renderTile: function (b, c, d, e, f, g, h) {
                var i = a("<div></div>").css({
                        width: e + "px",
                        height: f + "px",
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        background: this.slider.image1.css("background"),
                        "background-size": this.slider.width + "px " + this.slider.height + "px",
                        "background-position": "-" + g + "px -" + h + "px",
                        "background-repeat": "no-repeat",
                        "-moz-transform": "translateZ(1px)"
                    }).css3({
                        "backface-visibility": "hidden"
                    }),
                    j = a(i.get(0).cloneNode(!1)).css({
                        "background-image": this.slider.image2.css("background-image")
                    }).css3({
                        transform: flux.browser.rotateY(180),
                        "backface-visibility": "hidden"
                    });
                a(b).css({
                    "z-index": (c > this.options.columns / 2 ? 500 - c : 500) + (d > this.options.rows / 2 ? 500 - d : 500)
                }).css3({
                    "transition-duration": "800ms",
                    "transition-timing-function": "ease-out",
                    "transition-property": "all",
                    "transition-delay": c * this.options.delayBetweenBarsX + d * this.options.delayBetweenBarsY + "ms",
                    "transform-style": "preserve-3d"
                }).append(i).append(j)
            },
            execute: function () {
                this.slider.image1.css3({
                    perspective: this.options.perspective,
                    "perspective-origin": "50% 50%"
                });
                var a = this,
                    b = this.slider.image1.find("div.tile");
                this.slider.image2.hide(), b.last().transitionEnd(function (b) {
                    a.slider.image2.show(), a.finished()
                }), setTimeout(function () {
                    b.css3({
                        transform: flux.browser.rotateY(180)
                    })
                }, 50)
            }
        }, c))
    }
}(window.jQuery || window.Zepto), function (a) {
    flux.transitions.turn = function (b, c) {
        return new flux.transition(b, a.extend({
            requires3d: !0,
            perspective: 1300,
            direction: "left",
            setup: function () {
                var b = a('<div class="tab"></div>').css({
                        width: "50%",
                        height: "100%",
                        position: "absolute",
                        top: "0px",
                        left: "left" == this.options.direction ? "50%" : "0%",
                        "z-index": 101
                    }).css3({
                        "transform-style": "preserve-3d",
                        "transition-duration": "1000ms",
                        "transition-timing-function": "ease-out",
                        "transition-property": "all",
                        "transform-origin": "left" == this.options.direction ? "left center" : "right center"
                    }),
                    c = (a("<div></div>").appendTo(b).css({
                        background: this.slider.image1.css("background"),
                        "background-size": this.slider.width + "px " + this.slider.height + "px",
                        "background-position": ("left" == this.options.direction ? "-" + this.slider.image1.width() / 2 : 0) + "px 0",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        "-moz-transform": "translateZ(1px)"
                    }).css3({
                        "backface-visibility": "hidden"
                    }), a("<div></div>").appendTo(b).css({
                        background: this.slider.image2.css("background"),
                        "background-size": this.slider.width + "px " + this.slider.height + "px",
                        "background-position": ("left" == this.options.direction ? 0 : "-" + this.slider.image1.width() / 2) + "px 0",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0"
                    }).css3({
                        transform: flux.browser.rotateY(180),
                        "backface-visibility": "hidden"
                    }), a("<div></div>").css({
                        position: "absolute",
                        top: "0",
                        left: "left" == this.options.direction ? "0" : "50%",
                        width: "50%",
                        height: "100%",
                        background: this.slider.image1.css("background"),
                        "background-size": this.slider.width + "px " + this.slider.height + "px",
                        "background-position": ("left" == this.options.direction ? 0 : "-" + this.slider.image1.width() / 2) + "px 0",
                        "z-index": 100
                    })),
                    d = a('<div class="overlay"></div>').css({
                        position: "absolute",
                        top: "0",
                        left: "left" == this.options.direction ? "50%" : "0",
                        width: "50%",
                        height: "100%",
                        background: "#000",
                        opacity: 1
                    }).css3({
                        "transition-duration": "800ms",
                        "transition-timing-function": "linear",
                        "transition-property": "opacity"
                    }),
                    e = a("<div></div>").css3({
                        width: "100%",
                        height: "100%"
                    }).css3({
                        perspective: this.options.perspective,
                        "perspective-origin": "50% 50%"
                    }).append(b).append(c).append(d);
                this.slider.image1.append(e)
            },
            execute: function () {
                var a = this;
                this.slider.image1.find("div.tab").first().transitionEnd(function () {
                    a.finished()
                }), setTimeout(function () {
                    a.slider.image1.find("div.tab").css3({
                        transform: flux.browser.rotateY("left" == a.options.direction ? -179 : 179)
                    }), a.slider.image1.find("div.overlay").css({
                        opacity: 0
                    })
                }, 50)
            }
        }, c))
    }
}(window.jQuery || window.Zepto), function (a) {
    flux.transitions.slide = function (b, c) {
        return new flux.transition(b, a.extend({
            direction: "left",
            setup: function () {
                var b = this.slider.image1.width(),
                    c = this.slider.image1.height(),
                    d = a('<div class="current"></div>').css({
                        height: c + "px",
                        width: b + "px",
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        background: this.slider["left" == this.options.direction ? "image1" : "image2"].css("background")
                    }).css3({
                        "backface-visibility": "hidden"
                    }),
                    e = a('<div class="next"></div>').css({
                        height: c + "px",
                        width: b + "px",
                        position: "absolute",
                        top: "0px",
                        left: b + "px",
                        background: this.slider["left" == this.options.direction ? "image2" : "image1"].css("background")
                    }).css3({
                        "backface-visibility": "hidden"
                    });
                this.slideContainer = a('<div class="slide"></div>').css({
                    width: 2 * b + "px",
                    height: c + "px",
                    position: "relative",
                    left: "left" == this.options.direction ? "0px" : -b + "px",
                    "z-index": 101
                }).css3({
                    "transition-duration": "600ms",
                    "transition-timing-function": "ease-in",
                    "transition-property": "all"
                }), this.slideContainer.append(d).append(e), this.slider.image1.append(this.slideContainer)
            },
            execute: function () {
                var a = this,
                    b = this.slider.image1.width();
                "left" == this.options.direction && (b = -b), this.slideContainer.transitionEnd(function () {
                    a.finished()
                }), setTimeout(function () {
                    a.slideContainer.css3({
                        transform: flux.browser.translate(b)
                    })
                }, 50)
            }
        }, c))
    }
}(window.jQuery || window.Zepto), function (a) {
    flux.transitions.explode = function (b, c) {
        return new flux.transition_grid(b, a.extend({
            columns: 6,
            forceSquare: !0,
            delayBetweenBars: 30,
            perspective: 800,
            requires3d: !0,
            renderTile: function (b, c, d, e, f, g, h) {
                var i = Math.floor(10 * Math.random() * this.options.delayBetweenBars);
                a(b).css({
                    background: this.slider.image1.css("background"),
                    "background-size": this.slider.width + "px " + this.slider.height + "px",
                    "background-position": "-" + g + "px -" + h + "px"
                }).css3({
                    "transition-duration": "500ms",
                    "transition-timing-function": "ease-in",
                    "transition-property": "all",
                    "transition-delay": i + "ms"
                }), void 0 === this.maxDelay && (this.maxDelay = 0), i > this.maxDelay && (this.maxDelay = i, this.maxDelayTile = b)
            },
            execute: function () {
                this.slider.image1.css3({
                    perspective: this.options.perspective,
                    "perspective-origin": "50% 50%"
                }).css({
                    "-moz-transform": "perspective(" + this.options.perspective + "px)",
                    "-moz-perspective": "none",
                    "-moz-transform-style": "preserve-3d"
                });
                var b = this,
                    c = this.slider.image1.find("div.tile");
                this.maxDelayTile.transitionEnd(function () {
                    b.slider.image1.css3({
                        "transform-style": "flat"
                    }), b.finished()
                }), setTimeout(function () {
                    c.each(function (b, c) {
                        a(c).css({
                            opacity: "0"
                        }).css3({
                            transform: flux.browser.translate(0, 0, 700) + " rotate3d(" + (Math.round(2 * Math.random()) - 1) + ", " + (Math.round(2 * Math.random()) - 1) + ", " + (Math.round(2 * Math.random()) - 1) + ", 90deg) "
                        })
                    })
                }, 50)
            }
        }, c))
    }
}(window.jQuery || window.Zepto), function () {
    window.eqxiuSvg = {
        NAMESPACE: "http://www.w3.org/2000/svg",
        SYMBOLS: {},
        boundingBox: function (a) {
            var b, c = a.parentNode,
                d = document.createElementNS(eqxiuSvg.NAMESPACE, "svg");
            return d.setAttribute("width", "0"), d.setAttribute("height", "0"), d.setAttribute("style", "visibility: hidden; position: absolute; left: 0; top: 0;"), d.appendChild(a), document.body.appendChild(d), b = a.getBBox(), c ? c.appendChild(a) : d.removeChild(a), document.body.removeChild(d), b
        },
        pointsToPolygon: function (a) {
            for (var b = []; a.length >= 2;) b.push(a.shift() + "," + a.shift());
            return b.join(" ")
        },
        symbol: function (a, b, c) {
            var d = c ? c : "#555",
                e = eqxiuSvg.SYMBOLS[a],
                f = '<g fill="' + d + '" id="path_' + b + '">' + e + "</g>";
            return f
        },
        ShapeFromType: function (a, b, c, d, e) {
            return b || (b = 64), c || (c = 64), /symbols\-/.test(a) ? eqxiuSvg.symbol(a.replace(/^symbols\-/, ""), d, e) : "rect" == a ? eqxiuSvg.rect(b, c) : "circle" == a ? eqxiuSvg.ellipse(b, c) : "diamond" == a ? eqxiuSvg.polygon(b, c, 4) : "octagon" == a ? eqxiuSvg.polygon(b, c, 8) : "triangle-up" == a ? eqxiuSvg.triangleUp(b, c) : "triangle-down" == a ? eqxiuSvg.triangleDown(b, c) : "triangle-left" == a ? eqxiuSvg.triangleLeft(b, c) : "triangle-right" == a ? eqxiuSvg.triangleRight(b, c) : "arrow-up" == a ? eqxiuSvg.arrowUp(b, c) : "arrow-down" == a ? eqxiuSvg.arrowDown(b, c) : "arrow-left" == a ? eqxiuSvg.arrowLeft(b, c) : "arrow-right" == a ? eqxiuSvg.arrowRight(b, c) : void 0;
        },
        rect: function (a, b) {
            var c = document.createElementNS(eqxiuSvg.NAMESPACE, "rect");
            return c.setAttribute("width", a), c.setAttribute("height", b), c
        },
        ellipse: function (a, b) {
            var c = document.createElementNS(eqxiuSvg.NAMESPACE, "ellipse");
            return c.setAttribute("rx", a / 2), c.setAttribute("ry", b / 2), c.setAttribute("cx", a / 2), c.setAttribute("cy", b / 2), c
        },
        triangleUp: function (a, b) {
            var c = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
            return c.setAttribute("points", eqxiuSvg.pointsToPolygon([a / 2, 0, a, b, 0, b])), c
        },
        triangleDown: function (a, b) {
            var c = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
            return c.setAttribute("points", eqxiuSvg.pointsToPolygon([0, 0, a, 0, a / 2, b])), c
        },
        triangleLeft: function (a, b) {
            var c = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
            return c.setAttribute("points", eqxiuSvg.pointsToPolygon([0, b / 2, a, 0, a, b])), c
        },
        triangleRight: function (a, b) {
            var c = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
            return c.setAttribute("points", eqxiuSvg.pointsToPolygon([a, b / 2, 0, b, 0, 0])), c
        },
        arrowUp: function (a, b) {
            var c = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
            return c.setAttribute("points", eqxiuSvg.pointsToPolygon([.5 * a, 0, a, .5 * b, .7 * a, .5 * b, .7 * a, b, .3 * a, b, .3 * a, .5 * b, 0, .5 * b, .5 * a, 0])), c
        },
        arrowDown: function (a, b) {
            var c = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
            return c.setAttribute("points", eqxiuSvg.pointsToPolygon([.5 * a, b, a, .5 * b, .7 * a, .5 * b, .7 * a, 0, .3 * a, 0, .3 * a, .5 * b, 0, .5 * b, .5 * a, b])), c
        },
        arrowLeft: function (a, b) {
            var c = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
            return c.setAttribute("points", eqxiuSvg.pointsToPolygon([a, .3 * b, .5 * a, .3 * b, .5 * a, 0, 0, .5 * b, .5 * a, b, .5 * a, .7 * b, a, .7 * b, a, .3 * b])), c
        },
        arrowRight: function (a, b) {
            var c = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon");
            return c.setAttribute("points", eqxiuSvg.pointsToPolygon([0, .3 * b, .5 * a, .3 * b, .5 * a, 0, a, .5 * b, .5 * a, b, .5 * a, .7 * b, 0, .7 * b])), c
        },
        polygon: function (a, b, c) {
            var d = document.createElementNS(eqxiuSvg.NAMESPACE, "polygon"),
                e = [];
            if (3 === c) e = [a / 2, 0, a, b, 0, b];
            else if (c > 3) for (var f = a / 2, g = b / 2, h = 0; c > h; h++) {
                var i = f + f * Math.cos(2 * Math.PI * h / c),
                    j = g + g * Math.sin(2 * Math.PI * h / c);
                i = Math.round(10 * i) / 10, j = Math.round(10 * j) / 10, e.push(i), e.push(j)
            }
            return d.setAttribute("points", eqxiuSvg.pointsToPolygon(e)), d
        }
    }
}(), function (a, b) {
    function c(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }

        var c = b(a, "eqShow", Object);
        return b(c, "templateParser", function () {
            var a = {};
            return function (c, d) {
                if ("hasOwnProperty" === c) throw new Error("hasOwnProperty is not a valid name");
                return d && a.hasOwnProperty(c) && (a[c] = null), b(a, c, d)
            }
        })
    }

    function d(b) {
        templateParser = c(a)
    }

    var e = a.eqShow || (a.eqShow = {});
    d(e)
}(window, document), function () {
    var a = !0,
        b = !0;
    eqShow.playVideo = function (c) {
        if (c && c.bgAudio) {
            var d = $("#media"),
                e = $("#audio_btn"),
                f = "";
            c.bgAudio.url ? f = 0 === c.bgAudio.url.indexOf("http://") ? c.bgAudio.url : PREFIX_FILE_HOST + c.bgAudio.url : !c.bgAudio.url && c.bgAudio.src && (f = 0 === c.bgAudio.src.indexOf("http://") ? c.bgAudio.src : PREFIX_FILE_HOST + c.bgAudio.src), d.attr("src", f), e.addClass("video_exist"), d.bind("canplay", function () {
                d.get(0).play()
            }).bind("play", function () {
                e.addClass("rotate")
            }).bind("pause", function (a) {
                e.removeClass("rotate")
            });
            var g = mobilecheck() ? "touchend" : "click";
            $("#audio_btn").show().on(g, function (b) {
                b.cancelBubble = !0, b.stopPropagation(), $(this).hasClass("rotate") ? (a = !1, d.get(0).pause()) : (d.get(0).play(), a = !0, utilSound.pause())
            })
        }
        $("#nr #page1").on("mousedown touchstart", function () {
            if (mobilecheck() && !isWeixin() && b) {
                var a = $("#nr .z-current .m-img"),
                    c = parseInt(a.attr("id").substring(4), 10);
                b && 1 === c && window.completeEffect(a) && (b = !1, window.scene.bgAudio && $("#media").get(0).play())
            }
        })
    }, eqShow.executePlay = function () {
        a && $("#media").get(0).play()
    }, eqShow.executePause = function () {
        a && $("#media").get(0).pause()
    }
}(), function (a) {
    function b(a) {
        var b = document.getElementsByTagName("style")[0];
        b || (b = document.createElement("style"), head = document.head || document.getElementsByTagName("head")[0], b.type = "text/css", head.appendChild(b));
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
            $.each(b, function (b, e) {
                var f, g = $(e).attr("style");
                if (g) {
                    for (var h = g.split(";"), i = 0, j = h.length; j > i; i++) if (h[i].indexOf("fill:") >= 0) {
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
        return f > g ? (e.width = c, e.height = c / f) : (e.height = d, e.width = d * f), e
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
        c.datasets.forEach(function (a) {
            m.push(a.strokeColor), n.push(a.fillColor)
        });
        for (var o = 0; o < m.length; o++)"line" === e.chartType ? m[o] = e.fillColors[o] : n[o] = e.fillColors[o];
        for (var p = e.segments, q = 0; q < p.length; q++) d = p[q], g = isNaN(d.value1) || d.value1 < 0 ? 0 : d.value1, h = isNaN(d.value2) || d.value2 < 0 ? 0 : d.value2, i = isNaN(d.value3) || d.value3 < 0 ? 0 : d.value3, (d.label || g || h || i) && (f.push(d.label), j.push(g), k.push(h), l.push(i));
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
        return e.options && e.options.scaleFontColor && (s.scaleFontColor = e.options.scaleFontColor), c.destroy(), c = new Chart(b).Line(r, s), c.datasets.forEach(function (a) {
            var b = !0;
            a.points.forEach(function (a) {
                a.value && (b = !1)
            }), b ? a.points.length = 0 : a.points.forEach(function (a) {
                a.value || (a.value = 0)
            })
        }), c.update(), c
    }

    function g(a, b, c) {
        for (var d, e = c.options, f = a.properties.barChart, g = [], h = "", i = "", j = "", k = [], l = [], m = [], n = f.segments, o = 0; o < n.length; o++) {
            var d = n[o];
            h = isNaN(d.value1) || d.value1 < 0 ? "" : d.value1, i = isNaN(d.value2) || d.value2 < 0 ? "" : d.value2, j = isNaN(d.value3) || d.value3 < 0 ? "" : d.value3, (d.label || h || i || j) && (g.push(d.label), k.push(h), l.push(i), m.push(j))
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
        return f.options && f.options.scaleFontColor && (e.scaleFontColor = f.options.scaleFontColor), c.destroy(), new Chart(b).Bar(p, e)
    }

    function h(a, b, c) {
        var d = c.options,
            e = "#000",
            f = a.properties.pieChart;
        f.options && f.options.scaleFontColor && (e = f.options.scaleFontColor), d.scaleFontColor = e, d.onAnimationComplete = function () {
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
                a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = e, a.font = "normal 12px Helvetica", a.fillText(b[d].value, h, i)
            }
        };
        var g = f;
        f.segments && (g = f.segments);
        for (var h = 0; h < g.length; h++)(isNaN(g[h].value) || g[h].value < 0) && (g[h].value = "");
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
                onAnimationComplete: function () {
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
                        a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = "#000", a.font = "normal 12px Helvetica", a.fillText(b[d].value, g, h)
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
                onAnimationComplete: function () {
                    var a = this.chart.ctx;
                    a.fillStyle = this.scale.textColor, a.font = "normal 12px Helvetica", a.textAlign = "center", a.textBaseline = "bottom", this.datasets.forEach(function (b) {
                        b.bars.forEach(function (b) {
                            a.fillText(b.value, b.x, b.y)
                        })
                    })
                }
            },
            d = new Chart(a).Bar(b, c);
        return d
    }

    function k(a, b) {
        var c = ["rgba(255,255,255,0)", "rgba(255,255,255,0)", "rgba(255,255,255,0)"],
            d = ["rgba(146,109,222,1)", "rgba(87,199,212,1)", "rgba(242,166,84,1)"],
            e = !1,
            f = '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><%if(datasets[i].label){%><span style="background-color:<%=datasets[i].pointColor%>"></span><%=datasets[i].label%><%}%></li><%}%></ul>';
        "curve" === b && (c = ["rgba(146, 109, 222,0.2)", "rgba(87,199,212,0.2)", "rgba(242,166,84,0.2)"], e = !0, f = '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><%if(datasets[i].label){%><span style="background-color:<%=datasets[i].fillColor%>"></span><%=datasets[i].label%><%}%></li><%}%></ul>');
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
                onAnimationComplete: function () {
                    var a = this.chart.ctx,
                        b = this.scale.max;
                    a.font = this.scale.font, a.fillStyle = this.scale.textColor, a.textAlign = "center", a.textBaseline = "bottom", this.datasets.forEach(function (c) {
                        c.points.forEach(function (d, e) {
                            var f = 5;
                            b - d.value < 10 && (f = 0), 0 === e ? a.fillText(d.value, d.x + 10, d.y - f) : e === c.points.length - 1 ? a.fillText(d.value, d.x - 10, d.y - f) : a.fillText(d.value, d.x, d.y - f)
                        })
                    })
                }
            },
            i = new Chart(a).Line(g, h);
        return i
    }

    function l(a, b) {
        "view" === t.mode && b.properties.url && $(a).click(function () {
            var a = b.properties.url;
            isNaN(a) ? window.open(a) : eqxiu.pageScroll(a)
        })
    }

    function m(a) {
        $(a).bind("touchstart mousedown", function (a) {
            a.stopPropagation()
        })
    }

    function n(a) {
        a.focus(function () {
            eqxiu.pauseAutoFlip()
        }).blur(function () {
            $(document).trigger("startAutoFlip")
        })
    }

    function o(a) {
        for (var b = $(a).find("a[data]"), c = 0; c < b.length; c++) if (b[c] && "view" === t.mode) {
            $(b[c]).css("cursor", "pointer");
            var d = $(b[c]).attr("data");
            !
                function (a) {
                    b[c].removeAttribute("href"), $(b[c]).click(function () {
                        eqxiu.pageScroll(a)
                    })
                }(d)
        }
    }

    function p(b, c, d) {
        var e = PREFIX_S1_URL + "index.php?c=scenedata&a=getmsg&sceneId=" + b;
        d && (e += "&lastTime=" + d), e += "&date=" + (new Date).getTime(), $.ajax({
            type: "GET",
            url: e,
            success: function (b) {
                if (b.success) {
                    for (var d, e, f, g = document.createDocumentFragment(), h = b.list, i = 0; i < h.length; i++) e = h[i].url ? '<div class="headimg" style="background-image:url(' + h[i].url + ')"></div>' : '<div class="headimg headimg-bg"><div class="logo-scale"><em class="eqf-eqxiu"></em></div></div>', d = $('<div class="record">' + e + '<div class="name">' + h[i].name + '</div><div class="mes">' + h[i].content + '</div><div class="time">' + a.DateFormit(h[i].createTime, "MM月DD日") + "</div></div>").get(0), g.appendChild(d);
                    10 === h.length ? f = h[h.length - 1].createTime : 0 === h.length && (f = 0), d && g.appendChild(d), c(g, f)
                }
            }
        })
    }

    function q(a, b) {
        if (b.trigger) {
            var c = $(a);
            c.attr("data-event", "1120603"), w && clearTimeout(w), b.trigger.sends && b.trigger.sends.length && $.each(b.trigger.sends, function (a, b) {
                c.bind(utilTrigger.getSendType(b.type).name, function () {
                    w = setTimeout(function () {
                        $.each(b.handles, function (a, b) {
                            var c = utilTrigger.getHandleType(b.type).name;
                            $.each(b.ids, function (a, b) {
                                var d;
                                d = $("#inside_" + b, ".phone-view").length ? $("#inside_" + b, ".phone-view") : $("#inside_" + b), d.trigger(c)
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
            0 === c.sound.src.indexOf("http://") ? c.sound.src = c.sound.src : c.sound.src = PREFIX_FILE_HOST + c.sound.src, utilSound.addAudio(b, c.sound.src), d.click(function () {
                utilSound.play(b, function () {
                    e && a.executePlay()
                }, function () {
                    e && a.executePause()
                })
            })
        }
    }

    var t = a.templateParser("jsonParser", function () {
        function a(a) {
            return function (b, c) {
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
                var f = $('<li comp-drag comp-rotate class="comp-resize comp-rotate inside" id="inside_' + a.id + '" num="' + a.num + '" ctype="' + a.type + '"></li>'),
                    g = ("" + a.type).charAt(0);
                if ("3" !== g && "1" !== g && f.attr("comp-resize", ""), "p" === g ? f.removeAttr("comp-rotate") : "1" === g ? f.removeAttr("comp-drag") : "2" === g ? f.addClass("wsite-text") : "x" === g ? f.addClass("show-text") : "4" === g ? (a.properties.imgStyle && $(d).css(a.properties.imgStyle), f.addClass("wsite-image")) : "n" === g ? f.addClass("wsite-image") : "h" === g ? f.addClass("wsite-shape") : "5" === g ? f.addClass("wsite-input") : "6" === g ? f.addClass("wsite-button") : "8" === g ? f.addClass("wsite-button") : "v" === g ? f.addClass("wsite-video") : "b" === g && (f.addClass("wsite-boards"), f.attr("min-h", 60), f.attr("min-w", 230)), "v" === ("" + a.type).charAt(0) && f.addClass("wsite-video"), a.properties && a.properties.lock && f.addClass("alock"), f.mouseenter(function () {
                        $(this).addClass("inside-hover")
                    }), f.mouseleave(function () {
                        $(this).removeClass("inside-hover")
                    }), "edit" === t.mode || "x" !== ("" + a.type).charAt(0)) {
                    var h = $('<div class="element-box-contents">'),
                        i = $('<div class="element-box">').append(h.append(d));
                    f.append(i), "5" !== ("" + a.type).charAt(0) && "6" !== ("" + a.type).charAt(0) && "r" !== a.type && "c" !== a.type && "a" !== a.type && "8" !== a.type && "l" !== a.type && "s" !== a.type && "i" !== a.type && "h" !== a.type && "z" !== a.type || "edit" !== c || $(d).before($('<div class="element" style="position: absolute; height: 100%; width: 100%;z-index: 1;">'))
                }
                var k, l = a.fonts || a.css.fontFamily || a.fontFamily;
                if ("2" === g || "x" === g) {
                    for (var m = a.content, n = /font-family:(.*?);/g, o = [], p = []; null !== (o = n.exec(m));) p.push(o[1].trim());
                    if (1 !== p.length || "defaultFont" !== p[0] && "moren" !== p[0] || (l = null), l) {
                        if ("view" === t.mode && a.css.fontFamily && window.scene && (window.scene.publishTime || !mobilecheck() && !tabletCheck() || (k = "@font-face{font-family:" + a.css.fontFamily + ';src: url("' + a.properties.localFontPath + '") format("truetype");}', b(k))), "object" == typeof l && l.constructor === Object) {
                            if (!jQuery.isEmptyObject(l)) for (var q in l) u[q] || ("edit" === t.mode ? k = "@font-face{font-family:" + q + ";src: url(" + PREFIX_FILE_HOST + l[q] + ") format(woff);}" : window.scene && window.scene.publishTime && (k = "@font-face{font-family:" + q + ';src: url("' + PREFIX_S2_URL + "fc/" + q + "_" + a.sceneId + "_" + scene.publishTime + '.woff") format("woff");}'), b(k), u[q] = !0)
                        } else u[l] || ("edit" === t.mode ? k = "@font-face{font-family:" + l + ";src: url(" + PREFIX_FILE_HOST + a.preWoffPath + ") format(woff);}" : window.scene && window.scene.publishTime && (k = "@font-face{font-family:" + l + ';src: url("' + PREFIX_S2_URL + "fc/" + l + "_" + a.sceneId + "_" + scene.publishTime + '.woff") format("woff");}'), b(k), u[l] = !0);
                        "edit" === t.mode && localStorage.setItem("shoppingFontFamily", JSON.stringify(u))
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
                        }), (0 === a.css.boxShadowSize || "" + a.css.boxShadowSize == "0") && (a.css.boxShadow = "0px 0px 0px rgba(0,0,0,0.5)"), "edit" !== t.mode && "x" === ("" + a.type).charAt(0)) return f.append(d), f.find(".element-box").css({
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
                    isAndroid() && isWeixin() && "" + a.type == "4" && "0px" !== a.css.borderRadius && 0 === a.css.borderWidth && a.properties.anim && (a.css.borderWidth = 1, a.css.borderColor = "rgba(0,0,0,0)");
                    var s = $.extend(!0, {}, a.css);
                    delete s.fontFamily, i.css(s).css({
                        width: "100%",
                        height: "100%",
                        transform: "none"
                    }), i.children(".element-box-contents").css({
                        width: "100%",
                        height: "100%"
                    }), "4" !== ("" + a.type).charAt(0) && "n" !== ("" + a.type).charAt(0) && "p" !== ("" + a.type).charAt(0) && "h" !== ("" + a.type).charAt(0) && "t" !== ("" + a.type).charAt(0) && "z" !== ("" + a.type).charAt(0) && $(d).css({
                        width: a.css.width,
                        height: a.css.height
                    }), ("w01" === a.type || "w02" === a.type) && $(d).css({
                        lineHeight: a.css.height + "px"
                    }), "h" === ("" + a.type).charAt(0) && ($(d).find("g").length ? $(d).find("g").attr("fill", a.css.color) : $(d).children().attr("fill", a.css.color), i.children(".element-box-contents").css("position", "relative"))
                }
                return f
            }
        }

        function d(a) {
            for (var b = 0; b < a.length - 1; b++) for (var c = b + 1; c < a.length; c++) if (parseInt(a[b].css.zIndex, 10) > parseInt(a[c].css.zIndex, 10)) {
                var d = a[b];
                a[b] = a[c], a[c] = d
            }
            for (var e = 0; e < a.length; e++) a[e].css.zIndex = e + 1 + "";
            return a
        }

        function e(a, b, e) {
            b = b.find(".edit_area");
            var f, g = a.elements;
            if (g) for (g = d(g), f = 0; f < g.length; f++) if (g[f].sceneId = a.sceneId, "" + g[f].type == "3") {
                var h = j[("" + g[f].type).charAt(0)](g[f], b);
                "edit" === e && k[("" + g[f].type).charAt(0)] && k[("" + g[f].type).charAt(0)](h, g[f])
            } else {
                var i = c(g[f], e);
                if (!i) continue;
                b.append(i);
                for (var n = 0; n < m.length; n++) m[n](i, g[f], e);
                l[("" + g[f].type).charAt(0)] && (l[("" + g[f].type).charAt(0)](i, g[f]), "edit" !== e && (q(i, g[f]), r(i, g[f]))), "edit" === e && k[("" + g[f].type).charAt(0)] && k[("" + g[f].type).charAt(0)](i, g[f])
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
                parse: function (a) {
                    var b = $('<div class="edit_wrapper" data-scene-id="' + a.def.sceneId + '"><ul eqx-edit-destroy id="edit_area' + a.def.id + '" paste-element class="edit_area weebly-content-area weebly-area-active"></div>'),
                        c = this.mode = a.mode;
                    this.def = a.def, a.disEvent && (this.disEvent = !0), "view" === c && tplCount++;
                    var d = $(a.appendTo);
                    return containerWidth = d.width(), containerHeight = d.height(), p = n / containerWidth, s = o / containerHeight, e(a.def, b.appendTo($(a.appendTo)), c)
                }
            };
        return v
    });
    t.addInterceptor(function (a, b, c) {
        eqxCommon.animation(a, b, c, t.def.properties)
    }), t.addComponent("1", function (a) {
        var b = document.createElement("div");
        if (b.id = a.id, b.setAttribute("class", "element comp_title"), a.content && (b.textContent = a.content), a.css) {
            var c, d = a.css;
            for (c in d) b.style[c] = d[c]
        }
        if (a.properties.labels) for (var e = a.properties.labels, f = 0; f < e.length; f++) $('<a class = "label_content" style = "display: inline-block;">').appendTo($(b)).html(e[f].title).css(e[f].color).css("width", 100 / e.length + "%");
        return b
    });
    var u = {};
    t.addComponent("2", function (a) {
        var b = document.createElement("div");
        return b.id = a.id, b.setAttribute("ctype", a.type), b.setAttribute("class", "element comp_paragraph editable-text"), a.content && (a.properties.anim && a.properties.anim.length && "typer" === a.properties.anim[0].type && "view" === t.mode ? b.innerHTML = "" : b.innerHTML = a.content), b.style.cursor = "default", a.css.fontSize && (b.style.fontSize = a.css.fontSize + "px"), b
    }), t.addComponent("x", function (a) {
        function b() {
            c = document.createElement("div"), c.id = a.id, c.setAttribute("ctype", a.type), c.setAttribute("class", "element comp_paragraph editable-text"), a.content && (c.innerHTML = a.content), c.style.cursor = "default"
        }

        var c;
        return !mobilecheck() && window.top === window.self && $(".create_left").get(0) && (t.mode = "edit"), b(), c
    }), t.addComponent("3", function (b, c) {
        var d, e = document.createElement("div");
        if ("edit" === t.mode ? (d = c ? c.parent(".edit_wrapper") : $("#nr .edit_wrapper"), e.setAttribute("class", "wrapper-background"), e.setAttribute("id", b.id)) : "view" === t.mode && (d = c ? c.parent(".edit_wrapper") : $("#edit_area" + t.def.id).parent(".edit_wrapper"), e.setAttribute("id", "wrapper-background" + t.def.id)), 2 !== b.properties.croptype || "edit" === t.mode || t.def.istpl) {
            var f = "100%";
            $(e).prependTo(d), 2 !== b.properties.croptype || t.def.istpl || (f = 486 * b.properties.pageLength + "px", $(e).parent().css("overflow", "visible")), $(e).css({
                width: "100%",
                height: f
            })
        }
        var g, h = new Image;
        if (b.properties.imgSrc) {
            g = b.properties.imgSrc;
            var i = /\?imageMogr2/,
                j = /.svg/;
            if (a.isMobileApp() || j.test(g) || (g += i.test(g) ? "" : ""), 2 === b.properties.croptype && "view" === t.mode && !t.def.istpl) {
                var k = "";
                return k = /^http.*!/.test(g) ? "url(" + g + ")" : "url(" + PREFIX_FILE_HOST + g + ")", c.parent().css({
                    backgroundImage: k,
                    height: 486 * (b.properties.pageLength - 1) + (mobilecheck() ? $(document).height() : 486) + "px"
                }), e
            }
        /^http.*!/.test(g) ? (h.src = g, e.style.backgroundImage = "url(" + g + ")") : (h.src = PREFIX_FILE_HOST + g, e.style.backgroundImage = "url(" + PREFIX_FILE_HOST + g + ")"), e.style.backgroundOrigin = "element content-box", e.style.backgroundSize = "cover", e.style.backgroundPosition = "50% 50%", b.effect && ("scaleUp" === b.effect.type ? $(e).css({
                animation: "scaleUp 7s ease 1s",
                "animation-fill-mode": "both"
            }) : "scaleDown" === b.effect.type && $(e).css({
                animation: "scaleDown 7s ease 1s",
                "animation-fill-mode": "both"
            }))
        } else b.properties.bgColor && (e.style.backgroundColor = b.properties.bgColor, b.properties.pageLength && "edit" === t.mode && $(e).css({
            height: 486 * b.properties.pageLength + "px"
        }).parent().css("overflow", "visible"));
        return e
    }), t.addComponent("4", function (b) {
        var d, e = new RegExp(a.getDomain(PREFIX_FILE_HOST)),
            f = /^http.*/.test(b.properties.src) ? b.properties.src : PREFIX_FILE_HOST + b.properties.src;
        a.isMobileApp() || (f = f.replace(OLD_FILE_HOST, PREFIX_FILE_HOST));
        var g = /\?imageMogr2/,
            h = /.svg/;

        if (e.test(f) && !h.test(f)) if (g.test(f)) f += "/strip";
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
                n = mobilecheck() ? '<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><image width="100%" height="100%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + f + '" filter="url(#' + b.id + ')"></image><defs><filter id="' + b.id + '"><feColorMatrix class="saturation" color-interpolation-filters="sRGB" type="matrix" values="' + m.path + '"></feColorMatrix></filter></defs></g></svg>' : '<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><g><image width="100%" height="100%" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + f + '" filter="url(' + window.location.href + "#" + b.id + ')"></image><defs><filter id="' + b.id + '"><feColorMatrix class="saturation" color-interpolation-filters="sRGB" type="matrix" values="' + m.path + '"></feColorMatrix></filter></defs></g></svg>', d.innerHTML = n
            }
        } else d = document.createElement("img"), d.id = b.id, d.setAttribute("ctype", b.type), d.setAttribute("class", "element comp_image editable-image"), d.src = f;
        return "" + b.type == "403" && d.setAttribute("data-event", "1120611"), "" + b.type == "403" && b.properties.wxSrc && isWeixin() && (d.style.display = "none"), d
    }), t.addComponent("h", function (a) {
        var b, c;
        if (a.properties.src) return b = document.createElementNS(eqxiuSvg.NAMESPACE, "svg"), b.setAttribute("class", "element svg-element"), $.ajax({
            type: "GET",
            url: PREFIX_FILE_HOST + a.properties.src,
            dataType: "xml",
            success: function (c) {
                var e = c.getElementsByTagName("svg"),
                    f = parseFloat($(e).attr("width")),
                    g = parseFloat($(e).attr("height")),
                    h = $(e).find('[fill], [style*="fill"]'),
                    i = a.properties.items ? a.properties.items : [];
                if (a.properties.items) if (i[0].elements || (a.properties.items = d(i, h)), h.length === i.length) for (var j = 0; j < i.length; j++) h.eq(j).css({
                    fill: i[j].fill
                });
                else $.each(h, function (a, b) {
                        for (var c = 0; c < i.length; c++) for (var d = i[c].elements, e = 0; e < d.length; e++) a === d[e] && ("" !== i[c].fill ? h.eq(a).css({
                            fill: i[c].fill
                        }) : h.eq(a).css({
                            fill: "none"
                        }))
                    });
                else {
                    var k = [],
                        l = {};
                    $.each(h, function (a, b) {
                        var c = $(b).attr("style");
                        if (c) {
                            for (var d = c.split(";"), e = 0, f = d.length; f > e; e++) if (d[e].indexOf("fill:") >= 0) {
                                k.push(d[e].split(":")[1]);
                                break
                            }
                        } else k.push($(b).attr("fill"))
                    });
                    for (var m = 0; m < k.length; m++) l[k[m]] || (l[k[m]] = 1, "none" !== k[m] ? i.push({
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
                n.removeChild(b), b = e[0], n.appendChild(b), b.setAttribute("viewBox", viewBoxVal), b.setAttribute("preserveAspectRatio", "none"), b.setAttribute("width", "100%"), b.setAttribute("height", "100%"), b.id = a.id, b.setAttribute("class", "element svg-element")
            }
        }), b;
        if (a.properties.type.indexOf("symbol") < 0) {
            var b = document.createElementNS(eqxiuSvg.NAMESPACE, "svg");
            return b.id = a.id, b.setAttribute("class", "element svg-element"), b.setAttribute("xmlns", eqxiuSvg.NAMESPACE), b.setAttribute("version", "1.1"), b.setAttribute("width", "100%"), b.setAttribute("height", "100%"), b.setAttribute("preserveAspectRatio", "none"), c = eqxiuSvg.ShapeFromType(a.properties.type), c.setAttribute("fill", "#555"), b.appendChild(c), s = eqxiuSvg.boundingBox(c), viewBox = [Math.round(s.x) || 0, Math.round(s.y) || 0, Math.round(s.width) || 32, Math.round(s.height) || 32].join(" "), b.setAttribute("viewBox", viewBox), b
        }
        return b = document.createElement("div"), c = eqxiuSvg.ShapeFromType(a.properties.type, 100, 100, a.id, a.css.color), b = '<svg id="' + a.id + '" class="element svg-element" ctype="' + a.type + '" xmlns="' + eqxiuSvg.NAMESPACE + '" version="1.1" width="100%" height="100%" preserveAspectRatio="xMidYMid" viewBox="' + a.properties.viewBox + '">' + c + "</svg>"
    }), t.addComponent("v", function (a) {
        var b = document.createElement("a");
        return b.setAttribute("class", "element video_area"), b.id = a.id, b.setAttribute("ctype", a.type), a.properties.src && b.setAttribute("videourl", a.properties.src), b
    }), t.addComponent("5", function (a) {
        var b = document.createElement("textarea");
        return b.id = a.id, b.setAttribute("ctype", a.type), b.setAttribute("class", "element comp_input editable-text"), b.setAttribute("maxlength", "300"), a.properties.required && b.setAttribute("required", a.properties.required), a.properties.placeholder && b.setAttribute("placeholder", a.properties.placeholder), b.setAttribute("name", "eq[f_" + a.id + "]"), b.style.width = "100%", b
    }), t.addComponent("r", function (a) {
        var b = $('<div class="element comp_radio editable-text" id="' + a.id + '"></div>');
        b.attr("ctype", a.type), b.attr("required", a.properties.required), b.attr("title", a.title), b.attr("name", "eq[f_" + a.id + "]");
        var c = $('<div class="radio-title">' + a.title + "</div>");
        a.properties.titleStyle && c.css(a.properties.titleStyle), b.append(c);
        var d = $('<div class="options"></div>'),
            e = JSON.parse(a.choices);
        return $.each(e.options, function (b, c) {
            var f = $('<div class="option-group"><label class="option-label" for="' + (a.id + "" + (b + 1)) + '" data-event="11208"><input class="option" id="' + (a.id + "" + (b + 1)) + '" type="radio" name="eq[f_' + a.id + ']" value="' + c.id + '" data-event="11208">' + c.label + "</label></div>");
            a.properties.optionStyle && b < e.options.length - 1 && f.css(a.properties.optionStyle), d.append(f)
        }), b.append(d), b.width("100%"), b.get(0)
    }), t.addComponent("c", function (a) {
        var b = $('<div class="element comp_radio editable-text" id="' + a.id + '"></div>');
        b.attr("ctype", a.type), b.attr("required", a.properties.required), b.attr("title", a.title), b.attr("name", "eq[f_" + a.id + "]");
        var c = $('<div class="radio-title">' + a.title + "(可多选)</div>");
        a.properties.titleStyle && c.css(a.properties.titleStyle), b.append(c);
        var d = $('<div class="options"></div>'),
            e = JSON.parse(a.choices);
        return $.each(e.options, function (b, c) {
            var f = $('<div class="option-group"><label class="option-label" for="' + (a.id + "" + (b + 1)) + '" data-event="11209"><input class="option" id="' + (a.id + "" + (b + 1)) + '" type="checkbox" name="eq[f_' + a.id + ']" value="' + c.id + '" data-event="11209">' + c.label + "</label></div>");
            a.properties.optionStyle && b < e.options.length - 1 && f.css(a.properties.optionStyle), d.append(f)
        }), b.append(d), b.width("100%"), b.get(0)
    }), t.addComponent("a", function (a) {
        var b = $('<div class="element comp_rating editable-text" id="' + a.id + '"></div>');
        b.attr("ctype", a.type), b.attr("required", a.properties.required), b.attr("title", a.title), b.attr("name", "eq[f_" + a.id + "]"), b.append($('<div class="rating-title">' + a.title + "</div>"));
        for (var c = $('<div class="rating-icons"></div>'), d = 0; 5 > d; d++) c.append($('<i class="' + a.properties.icon + "-line " + a.properties.size + '">').css("color", a.properties.color));
        return b.append(c), b.append($('<input type="hidden" name="eq[f_' + a.id + ']" value="">')), b.width("100%"), b.get(0)
    }), t.addComponent("p", function (b) {
        if (b.properties && b.properties.children) {
            var c = b.css.width,
                d = b.css.height,
                f = $('<div id="' + b.id + '" class="slider element" ctype="' + b.type + '"></div>');
            b.properties.bgColor && f.css("backgroundColor", b.properties.bgColor);
            var g = /\?imageMogr2/,
                h = /.svg/;
            return $.each(b.properties.children, function (b, i) {
                var j = e(i.width, i.height, c, d),
                    k = i.src;
                a.isMobileApp() || h.test(k) || (k += g.test(k) ? "" : "");
                var l = $('<img src="' + PREFIX_FILE_HOST + k + '">');
                l.css({
                    margin: (d - j.height) / 2 + "px " + (c - j.width) / 2 + "px",
                    width: j.width,
                    height: j.height
                }), f.append(l)
            }), utilPictures.deleteInterval(b.id), f.get(0)
        }
    }), t.addComponent("n", function (a) {
        if (a.properties && a.properties.pics.length) {
            var b = $('<div id="' + a.id + '" class="random-event element comp_image editable-image" ctype="' + a.type + '"></div>');
            a.css.width || (a.css.width = "180px");
            var c = 180 * parseInt(a.properties.pics[0].height, 10) / parseInt(a.properties.pics[0].width, 10);
            return a.css.height || (a.css.height = c + "px"), $.each(a.properties.pics, function (a, c) {
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
    }), t.addComponent("6", function (a) {
        var b = document.createElement("button");
        if (b.id = a.id, b.setAttribute("ctype", a.type), b.setAttribute("class", "element comp_button editable-text"), b.setAttribute("data-event", "11201"), a.properties.title) {
            var c = a.properties.title.replace(/ /g, "&nbsp;");
            b.innerHTML = c
        }
        return b.style.width = "100%", b
    }), t.addComponent("8", function (a) {
        var b = document.createElement("a");
        b.id = a.id, b.setAttribute("ctype", a.type), b.setAttribute("class", "element comp_anchor editable-text"), b.setAttribute("data-event", "1120602");
        var c = null;
        return a.properties.imgSrc ? (c = $('<img style="width: 100%; height: 100%;" src="' + (PREFIX_FILE_HOST + a.properties.imgSrc) + '"/>'), $(b).html(c), "view" === t.mode && $(b).attr("href", "tel:" + a.properties.number)) : a.properties.title && (c = a.properties.title.replace(/ /g, "&nbsp;"), $(b).html(c), "view" === t.mode && $(b).attr("href", "tel:" + a.properties.number)), b.style.cursor = "default", b.style.width = "100%", b
    }), t.addComponent("l", function (a) {
        var b = document.createElement("a");
        b.id = a.id, b.setAttribute("ctype", a.type), b.setAttribute("class", "element comp_anchor editable-text"), b.setAttribute("data-event", "1120601");
        var c = null;
        return a.properties.imgSrc ? (c = $('<img style="width: 100%; height: 100%;" src="' + (PREFIX_FILE_HOST + a.properties.imgSrc) + '"/>'), $(b).html(c)) : a.properties.title && (c = a.properties.title.replace(/ /g, "&nbsp;"), $(b).html(c)), b.style.cursor = "default", b.style.width = "100%", b
    }), t.addComponent("s", function (a) {
        var b = document.createElement("a");
        b.id = a.id, b.setAttribute("ctype", a.type), b.setAttribute("class", "element comp_anchor editable-text"), b.setAttribute("data-event", "1120604");
        var c = null;
        return a.properties.imgSrc ? (c = $('<img style="width: 100%; height: 100%;" src="' + (PREFIX_FILE_HOST + a.properties.imgSrc) + '"/>'), $(b).html(c)) : a.properties.title && (c = a.properties.title.replace(/ /g, "&nbsp;"), $(b).html(c)), b.style.cursor = "default", b.style.width = "100%", b
    }), t.addComponent("i", function (b) {
        var c = $('<div class="element comp_counter not-voted editable-text" id="' + b.id + '"></div>');
        c.attr("ctype", b.type), c.attr("name", "eq[f_" + b.id + "]"), c.addClass(b.properties.layout).addClass(b.properties.size);
        var d = $('<div class="counter-container"></div>');
        b.properties.imgSrc ? (d.append($('<img class="counter-elem counter-icon" style="width: 115px; height: 115px; margin: 0 auto;" src="' + (PREFIX_FILE_HOST + b.properties.imgSrc) + '"/>')), d.attr("data-event", "1120609")) : (d.append($('<i class="counter-elem counter-icon ' + b.properties.icon + '">').css("color", b.properties.color)), "eqf-love" === b.properties.icon ? d.attr("data-event", "1120605") : "eqf-good" === b.properties.icon ? d.attr("data-event", "1120606") : "eqf-flower2" === b.properties.icon ? d.attr("data-event", "1120607") : "eqf-vote" === b.properties.icon && d.attr("data-event", "1120608"));
        var e = $('<span class="counter-elem counter-number">0</span>').css("color", b.properties.color);
        if (d.append(e), "view" === t.mode ? a.counterValues && a.counterValues.then(function (c) {
                var d = c.map[b.id] || 0;
                e.attr("data-counter-number", d);
                var f = a.fixedNum(d);
                e.text(f)
            }) : c.removeClass("not-voted"), c.width("100%"), "counter-tb" === b.properties.layout) {
            var f = 0;
            f = b.properties.imgSrc ? "counter-l" === b.properties.size ? 77 : "counter-m" === b.properties.size ? 71 : 66 : "counter-l" === b.properties.size ? 40 : "counter-m" === b.properties.size ? 30 : 20, d.css("margin-top", -f)
        }
        return "edit" !== t.mode && setTimeout(function () {
            var a = {
                width: "auto",
                "min-width": b.css.width
            };
            c.css(a), c.parents("li.comp-resize").css(a)
        }, 100), c.append(d), b.css.lineHeight && c.css("line-height", b.css.lineHeight), c.get(0)
    }), t.addComponent("d", function (b) {
        var c = $('<div class="element comp_counter editable-text" id="' + b.id + '"></div>');
        c.attr("ctype", b.type), c.addClass(b.properties.layout).addClass(b.properties.size);
        var d = $('<div class="counter-container"></div>');
        d.append($('<i class="counter-elem counter-icon ' + b.properties.icon + '">').css("color", b.properties.color));
        var e = $('<span class="counter-elem counter-number">0</span>').css("color", b.properties.color);
        if (d.append(e), "view" === t.mode && a.showCount && a.showCount.then(function (b) {
                var c = a.fixedNum(b),
                    d = c || 0;
                e.text(d)
            }), c.width("100%"), "counter-tb" === b.properties.layout) {
            var f = 0;
            f = "counter-l" === b.properties.size ? 40 : "counter-m" === b.properties.size ? 30 : 20, d.css("margin-top", -f)
        }
        return c.append(d), b.css.lineHeight && c.css("line-height", b.css.lineHeight), c.get(0)
    }), t.addComponent("7", function (a) {
        var b = document.createElement("div");
        if (b.id = "map_" + a.id, b.setAttribute("class", "element comp_map_wrapper"), a.content && (b.textContent = a.content), a.css) {
            var c, d = a.css;
            for (c in d) b.style[c] = d[c]
        }
        return b.style.height = "250px", b
    }), t.addComponent("m", function (a) {
        var b, c, d = new qq.maps.LatLng(a.properties.lat ? a.properties.lat : 39.916527, a.properties.lng ? a.properties.lng : 116.397128);
        b = document.createElement("div"), b.id = a.id, b.setAttribute("ctype", a.type), b.setAttribute("class", "element"), "edit" === t.mode ? c = {
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
        }, $(b).on("mousedown mousemove mouseup mouseleave touchstart touchmove touchend", function (a) {
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
            j = new qq.maps.MarkerImage(PREFIX_HOST + "/assets/images/marker.png", h, i, g),
            k = new qq.maps.Marker({
                map: e,
                position: e.getCenter()
            });
        return k.setIcon(j), $(b).data("marker", k), b
    }), t.addComponent("w", function (a) {
        var b, c = document.createElement("a");
        return "" + a.type == "w01" ? (b = "element comp_wechat_play", c.innerHTML = '<span style="font-size:16px;" class="eqf-nosy"></span>') : "" + a.type == "w02" && (b = "element comp_wechat_hear", c.innerHTML = a.properties.title, c.setAttribute("data-event", "1120612")), c.id = a.id, c.setAttribute("class", b), c.setAttribute("ctype", a.type), c
    }), t.addComponent("t", function (a) {
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
            d.width = p, d.height = q, d.style.width = p / o + "px", d.style.height = q / o + "px", n.scale(o, o)
        }
        "pie" === m ? (l = i(n), "edit" === t.mode && $(d).data("pieChart", l)) : "bar" === m ? (l = j(n), "edit" === t.mode && $(d).data("barChart", l)) : ("line" === m || "curve" === m) && (l = k(n, m), "edit" === t.mode && $(d).data("lineChart", l)), a.properties.chartTitle && (c.innerHTML = a.properties.chartTitle), "pie" === m && a.properties.pieChart && (l = h(a, n, l), $(d).data("pieChart", l)), "bar" === m && a.properties.barChart && (l = g(a, n, l), $(d).data("barChart", l)), "line" !== m && "curve" !== m || !a.properties.lineChart || (l = f(a, n, l), $(d).data("lineChart", l)), e.innerHTML = l.generateLegend();
        var r = a.properties.legPosition;
        return "position-align" === r ? $(e).addClass("position-align") : "position-right" === r ? $(e).addClass("position-right") : "position-none" === r && $(e).addClass("position-none"), mobilecheck() || ($(d).attr("width") && ($(d).removeAttr("width"), $(d).css("width", "100%")), $(d).attr("height") && ($(d).removeAttr("height"), $(d).css("height", "50%")), l.update()), b.get(0)
    });
    var v = function (a) {
        var b = a.webkitBackingStorePixelRatio || a.mozBackingStorePixelRatio || a.msBackingStorePixelRatio || a.oBackingStorePixelRatio || a.backingStorePixelRatio || 1,
            c = (window.devicePixelRatio || 1) / b;
        return c
    };
    t.addComponent("z", function (a) {
        var b = $('<div style="width:100%;height:100%" id="' + a.id + '"></div>');
        b.attr("ctype", a.type), b.attr("required", a.required);
        var c = $('<button type="button" class="btn dropdown-toggle btn-default" style="width:100%;height:100%;background-color:#ffffff;color:#666;padding-top: 0px;border: 1px solid rgb(8,161,239);font-family: Open Sans, sans-serif;font-weight: 400;font-size: 16px;border-top-left-radius: 0px;border-bottom-left-radius: 0px;border-top-right-radius: 0px;border-bottom-right-radius: 0px;position:absolute;top:0px;left:0px;pointer-events:none;padding-bottom: 0px;padding-right:0px;padding-left:0px;overflow: hidden" data-toggle="dropdown" title="Nothing selected" aria-expanded="false"><span class="filter-option pull-left" style="margin-left: 8px;float:left;width:calc(100% - 42px);width:-moz-calc(100% - 42px);width:-webkit-calc(100% - 42px);overflow:hidden;text-align: left;" id="selectButton' + a.id + '">' + a.showText + '</span>&nbsp;<span class="bs-caret" style="float:right;margin-right:10px;"><span class="caret" style="display: inline-block;width: 0px;height: 0px;vertical-align: middle;border-top:4px dashed;border-right: 4px solid transparent;border-left: 4px solid transparent;margin-left: 0px;"></span></span></button>');
        b.append(c);
        var d = JSON.parse(a.choices).options,
            e = $('<select style="width:100%;height:100%; " name="eq[f_' + a.id + ']"></select>');
        e.attr("ctype", a.type), e.attr("data-event", "11210");
        var f = null,
            g = 0;
        return f = a.placeholderText === a.showText ? $('<option value="' + a.placeholderText + '" selected>' + a.placeholderText + "</option>") : $('<option value="' + a.placeholderText + '">' + a.placeholderText + "</option>"), e.append(f), $.each(d, function (b, c) {
            c.label === a.showText ? (g++, f = $('<option value="' + c.label + '" selected>' + c.label + "</option>")) : f = $('<option value="' + c.label + '">' + c.label + "</option>"), e.append(f)
        }), $(e).change(function () {
            $("#selectButton" + a.id).text($(e).val())
        }), b.append(e), b
    }), t.addComponent("b", function (a) {
        var b, c, d = document.createElement("div"),
            e = document.createDocumentFragment(),
            f = $('<div class="tool"><a class="replay">' + a.properties.meslabel + '</a><a class="more">' + a.properties.morelabel + "</a></div>").get(0);
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
            for (var g = 0; g < b.length; g++) c = $('<div class="record"><div class="headimg headimg-bg"><div class="logo"><em class="eqf-logo"></em></div></div><div class="name">' + b[g].name + '</div><div class="mes">' + b[g].mes + '</div><div class="time">' + b[g].time + "</div></div>").get(0), e.appendChild(c)
        } else p(a.sceneId, function (b, c) {
            if (0 === c) {
                var e = $('<div class="empty-boards"><image style="margin-top:-20px;" src="' + HB_STATIC + "view/images/" + a.properties.style + '_boards.png" /></div>').get(0);
                d.appendChild(e)
            } else d.appendChild(b)
        });
        return d.appendChild(e), d.id = a.id, d.setAttribute("class", "element boards-" + a.properties.style), d.setAttribute("ctype", a.type), d
    }), t.addComponent("g", function (a, b) {
        var c = document.createElement("div");
        return "edit" === b && $('<div class="over-ele"></div><div class="ad-contain"></div>').appendTo(c), a.content && ("edit" === b ? $(c).find(".ad-contain").append($(a.content)) : ($(a.content).appendTo(c), a.css.zIndex = 1e5)), c.id = a.id, c.setAttribute("class", "element"), c.setAttribute("ctype", a.type), c
    }), t.bindAfterRenderEvent("8", function (a, b) {
        a = $("a", a)[0];
        var c = {
            id: b.sceneId,
            num: b.properties.number
        };
        if ("view" === t.mode) {
            var d = function () {
                $.ajax({
                    cache: !0,
                    type: "POST",
                    url: PREFIX_S1_URL + "eqs/dial",
                    data: $.param(c),
                    async: !1,
                    error: function () {
                        //alert("Connection error")
                    }
                })
            };
            a.addEventListener("click", d)
        }
    }), t.bindAfterRenderEvent("l", function (a, b) {
        if (a = $("a", a)[0], "view" === t.mode) {
            var c = b.properties.url;
            $(a).click(function () {
                isNaN(c) ? window.open(c) : eqxiu.pageScroll(c)
            })
        }
    }), t.bindAfterRenderEvent("i", function (b, c) {
        if ("view" === t.mode && !t.disEvent) {
            var d = $(b).find(".comp_counter");
            d.click(function () {
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
                    error: function () {
                        alert("Connection error")
                    },
                    success: function () {
                        d.unbind("click"), f.find(".comp_counter").removeClass("not-voted");
                        var b = $(".counter-number", f),
                            c = (parseInt(b.attr("data-counter-number"), 10) || 0) + 1;
                        b.attr("data-counter-number", c);
                        var e = a.fixedNum(c);
                        $(".counter-number", f).text(e)
                    }
                })
            })
        }
    }), t.bindAfterRenderEvent("4", function (a, b) {
        "view" === t.mode && ("" + b.type == "4" ? ($(a).attr("data-event", "1120601"), l(a, b)) : "" + b.type == "403" && a.on("click", function () {
            return isWeixin() ? void $(document).trigger("wx.img.upload", b.id) : void alert("请在微信中点击我！")
        }))
    }), t.bindAfterRenderEvent("x", function (a, b) {
        l(a, b)
    }), t.bindAfterRenderEvent("h", function (a, b) {
        $(a).attr("data-event", "1120601"), l(a, b)
    }), t.bindAfterRenderEvent("5", function (a, b) {
        var c = mobilecheck();
        m($(a).find("textarea")), n($(a).find("textarea")), "view" === t.mode && c && parseFloat(b.css.top) >= 200 && ($(a).find("textarea").focus(function () {
            $(a).closest(".edit_area").css({
                top: "-150px"
            })
        }), $(a).find("textarea").blur(function () {
            $(a).closest(".edit_area").css({
                top: 0
            })
        }))
    }), t.bindAfterRenderEvent("r", function (a) {
        "view" === t.mode && m($(a).find("label"))
    }), t.bindAfterRenderEvent("c", function (a) {
        "view" === t.mode && m($(a).find("label"))
    }), t.bindAfterRenderEvent("v", function (a, b) {
        "view" === t.mode && $(a).click(function () {
            $(a).hide(), $("#audio_btn").hasClass("video_exist") && ($("#audio_btn").hide(), $("#media")[0].pause()), utilSound.pause(), $('<div class="video_mask page_effect lock" id="mask_' + b.id + '"></div>').appendTo($(a).closest(".m-img")), $('<a class = "close_mask eqf-wrong" id="close_' + b.id + '"></a>').appendTo($(a).closest(".m-img")), $(b.properties.src).appendTo($("#mask_" + b.id)).attr("style", "position: absolute;top:0; min-height: 45%; max-height: 100%; top: 20%;").attr("width", "100%").removeAttr("height"), $("#close_" + b.id).bind("click", function () {
                $(a).show(), $("#mask_" + b.id).remove(), $("#close_" + b.id).remove(), $("#audio_btn").hasClass("video_exist") && $("#audio_btn").show(function () {
                    $("#media")[0].play()
                })
            })
        })
    }), t.bindAfterRenderEvent("2", function (a, b) {
        o(a), l(a, b)
    }), t.bindAfterRenderEvent("6", function (b, c) {
        if (b = $("button", b)[0], "view" === t.mode) {
            var d = {
                    REQUIRED: "为必填项！",
                    WRONG_PHONE_NUMBER_FORMAT: "电话号码格式错误！",
                    WRONG_EMAIL_FORMAT: "邮箱格式错误！",
                    FILL_OUT_THE_FORM: "请填写表单！",
                    DUPLICATED_SUBMISSION: "请不要重复提交！",
                    THANKS_FOR_PARTICIPATION: "谢谢您的参与！"
                },
                e = function (a, b, e) {
                    var f = !0,
                        g = {};
                    if ($("textarea", e).each(function () {
                            if (f) {
                                if ("required" === $(this).attr("required") && "" === $(this).val().trim()) return alert($(this).attr("placeholder") + d.REQUIRED), void(f = !1);
                                if ("502" === $(this).attr("ctype") && "" !== $(this).val().trim()) {
                                    var a = new RegExp(/^\d{3,15}$/);
                                    if (!a.test($(this).val())) return alert("电话输入有误，请输入3-15位数字"), void(f = !1)
                                }
                                if ("503" === $(this).attr("ctype") && "" !== $(this).val().trim()) {
                                    var b = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g);
                                    if (!b.test($(this).val())) return alert("邮箱格式错误！"), void(f = !1)
                                }
                                g[$(this).attr("name")] = $(this).val()
                            }
                        }), $("input:checked", e).each(function () {
                            var a = $(this);
                            g[a.attr("name")] ? g[a.attr("name")] += "," + a.val() : g[a.attr("name")] = a.val()
                        }), $('.comp_radio[required="required"]', e).each(function () {
                            var a = $(this);
                            g[a.attr("name")] || (alert(a.attr("title") + d.REQUIRED), f = !1)
                        }), $('input[type="hidden"]', e).each(function () {
                            g[$(this).attr("name")] = $(this).val()
                        }), $('.comp_rating[required="required"]', e).each(function () {
                            var a = $(this);
                            g[a.attr("name")] && "" + g[a.attr("name")] != "0" || (alert(a.attr("title") + "为必填项！"), f = !1)
                        }), f) {
                        var h = !1;
                        if ($.isEmptyObject(g)) return void(h = !0);
                        for (var i in g) if ("" !== g[i]) {
                            h = !0;
                            break
                        }
                        if (!h) return void alert("请填写表单！");
                        $("select", e).each(function () {
                            var a = $(this).attr("name").substring(5, $(this).attr("name").length - 1),
                                b = $(this).find("option:first").val(),
                                c = $(this).val();
                            if ("required" === $("#" + a).attr("required")) {
                                if (b === c) return alert("你还没有选择下拉列表！"), void(f = !1)
                            } else b === c && $(this).val(null);
                            g[$(this).attr("name")] = $(this).val()
                        }), f && $.ajax({
                            cache: !0,
                            type: "POST",
                            url: PREFIX_S1_URL + "index.php?c=scenedata&a=add&id=" + b,
                            data: $.param(g),
                            async: !1,
                            error: function () {
                                alert("Connection error")
                            },
                            success: function () {
                                $(a).unbind("click").click(function () {
                                    alert("请不要重复提交！")
                                });
                                var b;
                                c.properties.layout || (c.properties.layout = "rating-l", c.properties.text = ""), c.properties.text.trim() || "rating-l" !== c.properties.layout ? ("rating-m" === c.properties.layout && (b = c.properties.checkedLink ? '<div class="feedback-box"><div class="feedback-form"><img src = "' + (PREFIX_FILE_HOST + c.properties.imgSrc) + '"/><a href="' + c.properties.link + '" style="margin-top:20px;"><span>' + c.properties.text + '</span></a><button class="feedback-button">我知道了</button></div></div>' : '<div class="feedback-box"><div class="feedback-form"><img src = "' + (PREFIX_FILE_HOST + c.properties.imgSrc) + '"/><span style="margin-top:20px;">' + c.properties.text + '</span><button class="feedback-button">我知道了</button></div></div>'), "rating-s" === c.properties.layout && (b = c.properties.checkedLink ? '<div class="feedback-box"><div class="feedback-form"><a href="' + c.properties.link + '"><span>' + c.properties.text + '</span></a><img src = "' + (PREFIX_FILE_HOST + c.properties.imgSrc) + '" style="margin-top:20px;"/><button class="feedback-button">我知道了</button></div></div>' : '<div class="feedback-box"><div class="feedback-form"><span>' + c.properties.text + '</span><img src = "' + (PREFIX_FILE_HOST + c.properties.imgSrc) + '" style="margin-top:20px;"/><button class="feedback-button">我知道了</button></div></div>'), "rating-l" === c.properties.layout && (b = c.properties.checkedLink ? '<div class="feedback-box"><div class="feedback-form"><a href="' + c.properties.link + '"><span>' + c.properties.text + '</span></a><button class="feedback-button">我知道了</button></div></div>' : '<div class="feedback-box"><div class="feedback-form"><span>' + c.properties.text + '</span><button class="feedback-button">我知道了</button></div></div>')) : b = '<div class="feedback-box"><div class="feedback-form"><span>谢谢您的参与!</span><button class="feedback-button">我知道了</button></div></div>', $(b).prependTo(".z-current");
                                var d = (0 - parseInt($(".feedback-form").css("height"), 10)) / 2;
                                $(".feedback-form").css({
                                    marginTop: d + "px"
                                }), $(".z-current").on("click", ".feedback-button", function () {
                                    $(".feedback-box").animate({
                                        opacity: 0
                                    }, {
                                        duration: 1e3,
                                        complete: function () {
                                            $(".feedback-box").remove()
                                        }
                                    })
                                })
                            }
                        })
                    }
                };
            $(b).bind("click", function () {
                if (a.isMobileApp()) return void alert("场景还没有发布呢，请发布后提交内容！");
                var c, d = $(b).parents(".edit_wrapper").attr("data-scene-id");
                c = d ? $(b).parents(".nr").find('.edit_wrapper[data-scene-id="' + d + '"]') : $(b).parents(".nr"), e(this, d, c)
            })
        }
    }), t.bindAfterRenderEvent("7", function (a, b) {
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
    }), t.bindAfterRenderEvent("p", function (a, b) {
        if (!$(a).closest(".page_tpl_container ").length) {
            $(a).children(".element-box").css("overflow", "visible"), utilPictures.deleteInterval(b.id);
            var c = $(a).find("#" + b.id);
            new flux.slider(c, {
                autoplay: b.properties.autoPlay,
                delay: b.properties.interval,
                pagination: !1,
                transitions: [utilPictures.getPicStyle(b.properties.picStyle).name],
                width: b.css.width,
                height: b.css.height,
                bgColor: b.properties.bgColor,
                onStartEnd: function (a) {
                    utilPictures.addInterval(b.id, a)
                }
            })
        }
    }), t.bindAfterRenderEvent("a", function (a, b) {
        function c(a) {
            e.each(function (b, c) {
                $(c).removeClass(g).addClass(g + "-line"), a >= b && $(c).removeClass(g + "-line").addClass(g)
            })
        }

        var d = $(a);
        if ("view" === t.mode) {
            var e = d.find("i"),
                f = d.find("input"),
                g = b.properties.icon;
            e.each(function (a, b) {
                $(b).attr("data-event", "11211"), $(b).bind("click", function () {
                    c(a), f.val(a + 1)
                }), $(b).bind("mouseenter", function () {
                    c(a)
                })
            }), d.find(".rating-icons").bind("mouseleave", function () {
                c(parseInt(f.val(), 10) - 1)
            }), m(d.find(".rating-icons"))
        }
    }), t.bindAfterRenderEvent("w", function (a, b) {
        "view" === t.mode && (m($(a)), $(a).on("mousedown touchstart", function (a) {
            if (a.preventDefault(), isWeixin())"w01" === b.type ? $(document).trigger("wx.audio.play", b.id) : "w02" === b.type && $(document).trigger("wx.audio.record", b.id);
            else if ("w01" === b.type) {
                var c = document.createElement("audio");
                c.src = b.properties.src, c.play();
                var d = $("#media").get(0);
                d.pause()
            } else "w02" === b.type && alert("请在微信中点我！")
        }).on("mouseup touchend", function () {
            isWeixin() && "w02" === b.type && $(document).trigger("wx.audio.recordend", b.id)
        }))
    }), t.bindAfterRenderEvent("g", function (a) {
        a.attr("data-event", "11212")
    }), t.bindAfterRenderEvent("b", function (b, c) {
        function d() {
            if (h.find(".boards-panel").length) h.find(".boards-panel").show();
            else {
                h.append($('<div class="boards-panel boards-' + c.properties.style + '"><div class="boards-top"><div class="head">留言板<em class="eqf-wrong"></em></div><div class="boards-form"><textarea maxlength="140" class="content-text"></textarea><span class="content-tip">0/140</span><a class="record-btn" data-event="11207">提交留言</a></div><div class="spline-con"><span>更多留言</span><span class="spline"></span></div></div><div class="boards-con"><div class="list"></div></div>' + i + "</div>")), f = h.find(".record-btn"), iphoneCheck() && h.find(".boards-con").addClass("ios-boards-con");
                var b = 0;
                f.on("click", function () {
                    if (a.isMobileApp()) return void alert("场景还没有发布呢，请发布后提交内容！");
                    if (!b) {
                        var c = h.find(".boards-panel .content-text").val();
                        if (!$.trim(c)) return void alert("留言不能为空!");
                        b = 10, f.text("提交留言(" + b + "秒)"), f.css("backgroundColor", "#b4b4b4");
                        var d = setInterval(function () {
                                b--, f.text("提交留言(" + b + "秒)"), b || (f.css("backgroundColor", "").text("提交留言"), clearInterval(d))
                            }, 1e3),
                            e = {
                                sceneId: j,
                                content: c,
                                url: "",
                                name: "匿名用户"
                            };
                        weChatUser && weChatUser.headimgurl && (e.name = weChatUser.nickname, e.url = weChatUser.headimgurl), $.ajax({
                            type: "POST",
                            url: PREFIX_URL + "index.php?c=scenedata&a=sendmsg",
                            data: $.param(e),
                            error: function () {
                                alert("Connection error")
                            },
                            success: function (a) {
                                if (a.success) {
                                    alert("留言成功，谢谢参与！");
                                    var b = '<div class="headimg headimg-bg"><div class="logo-scale"><em class="eqf-eqxiu"></em></div></div>';
                                    weChatUser.headimgurl && (b = '<div class="headimg" style="background-image:url(' + weChatUser.headimgurl + ')"></div>'), $(".z-current #" + k).find(".empty-boards").length && $(".z-current #" + k).find(".empty-boards").remove(), $(".z-current #" + k).find(".tool").after($('<div class="record">' + b + '<div class="name">' + a.obj.name + '</div><div class="mes">' + a.obj.content + '</div><div class="time">刚刚</div></div>')), h.find(".list").prepend($('<div class="record clearfix">' + b + '<div class="name">' + a.obj.name + '</div><div class="mes">' + a.obj.content + '</div><div class="time">刚刚</div></div>'))
                                }
                            }
                        })
                    }
                }), h.find(".boards-panel .content-text").on("input", function (a) {
                    var b = a.target.value.length + a.target.value.split("\n").length - 1;
                    h.find(".boards-panel .content-tip").html(b + "/140")
                })
            }
            h.find(".boards-panel").on("touchstart touchmove touchend mousedown mouseup mousemove", function (a) {
                a.stopPropagation()
            }), h.find(".z-current").hide();
            var d = $('<div class="more-mes">查看更多</div>'),
                g = h.find(".list");
            g.empty();
            var l = g.get(0);
            g.append(d), p(j, function (a, b) {
                e = b, l.insertBefore(a, d.get(0)), b || (d.html("没有更多"), d.unbind("click"))
            }), d.on("click", function () {
                p(j, function (a, b) {
                    e = b, g.get(0).insertBefore(a, d.get(0)), b || (d.html("没有更多"), d.unbind("click"))
                }, e)
            })
        }

        if ("view" === t.mode && !t.disEvent) {
            var e, f, g = $(b),
                h = mobilecheck() ? $(document.body) : $(".nr"),
                i = mobilecheck() ? '<div class="boards-bottom"></div>' : "",
                j = c.sceneId,
                k = c.id;
            g.find(".tool a").on("click", function (a, b) {
                (!a.isTrigger || b) && (!a.isTrigger || "longPage" !== b || mobilecheck()) && ($.isEmptyObject(weChatUser) && isWeixin() ? wechatUtils.weChatAuth(function () {
                    d()
                }, c.pageId) : d())
            }), h.on("click", ".boards-panel .eqf-wrong", function () {
                h.find(".boards-panel .list").empty(), h.find(".boards-panel").hide(), h.find(".z-current").show()
            })
        }
    });
    var w
}(window.eqShow);
var tplCount = 0,
    eqxCommon = function () {
        var a = function (a) {
                var b, c, d = a.type;
                return "typer" === d && (b = "typer"), 0 === d && (b = "fadeIn"), 1 === d && (c = a.direction, 0 === c && (b = "fadeInLeft"), 1 === c && (b = "fadeInDown"), 2 === c && (b = "fadeInRight"), 3 === c && (b = "fadeInUp")), 6 === d && (b = "wobble"), 5 === d && (b = "rubberBand"), 7 === d && (b = "rotateIn"), 8 === d && (b = "flip"), 9 === d && (b = "swing"), 2 === d && (c = a.direction, 0 === c && (b = "bounceInLeft"), 1 === c && (b = "bounceInDown"), 2 === c && (b = "bounceInRight"), 3 === c && (b = "bounceInUp")), 3 === d && (b = "bounceIn"), 4 === d && (b = "zoomIn"), 10 === d && (b = "fadeOut"), 11 === d && (b = "flipOutY"), 12 === d && (b = "rollIn"), 13 === d && (b = "lightSpeedIn"), 14 === d && (b = "bounceOut"), 15 === d && (b = "rollOut"), 16 === d && (b = "lightSpeedOut"), 17 === d && (c = a.direction, 0 === c && (b = "fadeOutRight"), 1 === c && (b = "fadeOutDown"), 2 === c && (b = "fadeOutLeft"), 3 === c && (b = "fadeOutUp")), 18 === d && (b = "zoomOut"), 19 === d && (c = a.direction, 0 === c && (b = "bounceOutRight"), 1 === c && (b = "bounceOutDown"), 2 === c && (b = "bounceOutLeft"), 3 === c && (b = "bounceOutUp")), 20 === d && (b = "flipInY"), 21 === d && (b = "tada"), 22 === d && (b = "jello"), 23 === d && (b = "flash"), 26 === d && (b = "twisterInDown"), 27 === d && (b = "puffIn"), 28 === d && (b = "puffOut"), 29 === d && (b = "slideDown"), 30 === d && (b = "slideUp"), 24 === d && (b = "flipInX"), 25 === d && (b = "flipOutX"), 31 === d && (b = "twisterInUp"), 32 == d && (b = "vanishOut"), 33 == d && (b = "vanishIn"), b
            },
            b = function (a, b, c, d, e) {
                function f(a, d, e, g, h) {
                    if (e.length && i < e.length) {
                        if ("typer" == d[i]) {
                            var j = a.find(".element"),
                                k = e[i].interval,
                                l = e[i].delay;
                            if (g && h.top > 486 && "view" == c) {
                                var m = function (c, g) {
                                    Math.abs(g) > h.top && (j.data("typed") && (clearInterval(j.data("typed").timeout), j.removeData("typed")), j.empty(), j.typed({
                                        strings: [b.content],
                                        contentType: "html",
                                        showCursor: !1,
                                        typeSpeed: 1e3 * k || 0,
                                        startDelay: 1e3 * l || 0,
                                        callback: function () {
                                            clearInterval(j.data("typed").timeout), j.removeData("typed"), i++, f(a, d, e)
                                        }
                                    }), $(document).unbind("pageScrollPos", m))
                                };
                                return void $(document).bind("pageScrollPos", m)
                            }
                            j.data("typed") && (clearInterval(j.data("typed").timeout), j.removeData("typed")), j.empty(), j.typed({
                                strings: [b.content],
                                contentType: "html",
                                showCursor: !1,
                                typeSpeed: 1e3 * k || 0,
                                startDelay: 1e3 * e[i].delay || 0,
                                callback: function () {
                                    clearInterval(j.data("typed").timeout), j.removeData("typed"), i++, f(a, d, e)
                                }
                            })
                        }
                        a.css("animation", "");
                        a.get(0);
                        if (a.css("animation", d[i] + " " + e[i].duration + "s ease " + e[i].delay + "s " + (e[i].countNum ? e[i].countNum : "")), "view" == c ? (e[i].count && i == e.length - 1 && a.css("animation-iteration-count", "infinite"), a.css("animation-fill-mode", "both")) : (a.css("animation-iteration-count", "1"), a.css("animation-fill-mode", "backwards")), e[i].linear && a.css("animation-timing-function", "linear"), g && h.top > 486 && "view" == c) {
                            a.css("display", "none");
                            var n = function (b, c) {
                                Math.abs(c) > h.top && (a.css("display", "block"), $(document).unbind("pageScrollPos", n))
                            };
                            $(document).bind("pageScrollPos", n)
                        }
                        a.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                            i++, f(a, d, e)
                        })
                    }
                }

                if (b.trigger && b.trigger.receives && b.trigger.receives.length && !e && "view" == c) for (var g = b.trigger.receives, h = 0; h < g.length; h++) if (1 == g[h].type && g[h].ids.length) return;
                var i = 0;
                if (b.properties && b.properties.anim) {
                    var j = [];
                    b.properties.anim.length ? j = b.properties.anim : j.push(b.properties.anim);
                    var k = $(".element-box", a);
                    k.attr("element-anim", "");
                    for (var l, m = [], n = [], h = 0, o = j.length; o > h; h++) null != j[h].type && -1 != j[h].type && (l = eqxCommon.convertType(j[h]), m.push(l), n.push(j[h]));
                    if (d && d.scale) return;
                    b.properties.anim.trigger ? a.click(function () {
                        f(k, l, b.properties.anim)
                    }) : d && d.longPage ? f(k, m, n, !0, b.css) : f(k, m, n)
                }
            },
            c = function (a, b) {
                var c, d = $(a);
                if (b.trigger && b.trigger.receives && b.trigger.receives.length) {
                    $.each(b.trigger.receives, function (a, e) {
                        if (e.ids.length) {
                            var f = utilTrigger.getHandleType(e.type).name;
                            ("show" == f || "randomEvent" == f) && d.hide(), "hide" == f && d.show(), d.bind(f, function (a, e) {
                                if ("show" == f) $(this).show(), c || (c = !0, eqxCommon.animation(d, b, "view", null, !0));
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
            d = function () {
                var a, b, c = window.navigator,
                    d = ["language", "browserLanguage", "systemLanguage", "userLanguage"];
                if ($.isArray(c.languages)) for (a = 0; a < c.languages.length; a++) if (b = c.languages[a], b && b.length) return b;
                for (a = 0; a < d.length; a++) if (b = c[d[a]], b && b.length) return b;
                return null
            };
        return {
            convertType: a,
            animation: b,
            bindTrigger: c,
            getFirstBrowserLanguage: d
        }
    }();
eqShow.clearTyperText = function (a) {
    if (a && a.elements) {
        var b = a.elements;
        $.each(b, function (a, b) {
            if (b.properties && b.properties.anim) {
                var c = b.properties.anim;
                $.each(c, function (a, c) {
                    0 == a && "typer" == c.type && $("#inside_" + b.id).find(".element").empty()
                })
            }
        })
    }
}, eqShow.isMobileApp = function () {
    return !!window.viewData
}, eqShow.setPageHis = function (a) {
    if (mobilecheck()) {
        var b = eqShow.getQueryString("toPage"),
            c = location.href;
        b ? b !== "" + a && (c = c.replace(b, a)) : c += (/\?/.test(c) ? "&" : "?") + "toPage=" + a, window.history.pushState({
            title: $("title").html(),
            url: c
        }, $("title").html(), c)
    }
}, eqShow.getShowCount = function (a) {
    return this.showCount = $.ajax({
        type: "GET",
        url: PREFIX_S1_URL + "index.php?c=scene&a=pv&sceneId=" + a,
        xhrFields: {
            withCredentials: !0
        },
        error: function () {
            alert("Connection error")
        },
        crossDomain: !0
    }), this.showCount
}, eqShow.getQueryString = function (a) {
    var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)", "i"),
        c = window.location.search.substr(1).match(b);
    return c ? unescape(c[2]) : null
}, eqShow.delQueStr = function (a, b) {
    var c = "";
    if (-1 === a.indexOf("?")) return a;
    c = a.substr(a.indexOf("?") + 1);
    var d = [],
        e = "";
    if (-1 !== c.indexOf("&")) {
        d = c.split("&");
        for (i in d) d[i].split("=")[0] != b && (e = e + d[i].split("=")[0] + "=" + d[i].split("=")[1] + "&");
        return a.substr(0, a.indexOf("?")) + "?" + e.substr(0, e.length - 1)
    }
    return d = c.split("="), d[0] == b ? a.substr(0, a.indexOf("?")) : a
}, eqShow.getDomain = function (a) {
    var b = "null";
    ("undefined" == typeof a || null == a) && (a = window.location.href);
    var c = /.*\:\/\/([^\/]*).*/,
        d = a.match(c);
    return "undefined" != typeof d && null != d && (b = d[1]), b
}, eqShow.DateFormit = function (a, b) {
    var c, d = new Date(a);
    switch (b) {
        case "MM月DD日":
            c = d.getMonth() + 1 + "月" + d.getDate() + "日 " + d.getHours() + ":" + d.getMinutes();
            break;
        case "T":
            c = "刚刚"
    }
    return c
}, eqShow.fixedNum = function (a) {
    var b;
    return 1e4 > a ? b = a : a >= 1e4 && 1e8 > a ? b = (a / 1e4).toFixed(2) + "万" : a >= 1e8 && (b = (a / 1e8).toFixed(2) + "亿"), b
}, eqShow.showProgressBar = function (a, b, c) {
    if (a.obj.property.slideNumber) {
        var d = $('<div class="progress"></div>'),
            e = $("<span></span>"),
            f = $('<em class="page-tip"></em>');
        d.append(e).append(f), c && a.obj.property.slideDisplay ? c.append(d.css("display", a.obj.property.slideDisplay)) : $("#nr").append(d.css("display", "block"))
    }
    var g = function () {
        a.obj.property.slideNumber && e && setTimeout(function () {
            var a = $(".z-active").get(0) ? $(".z-active").get(0) : $(".z-current").get(0);
            if (a) {
                var c = $(a).find(".m-img").attr("id").substring(4),
                    g = b.length,
                    h = c / g,
                    i = 100;
                f.text(c + "/" + g), e.css("width", parseFloat(d.width()) * h), $(a).find(".lock").length && (i = 0), d.css("z-index", i)
            }
        }, 100)
    };
    g(), b.eq(0).find(".u-arrow-bottom").css("bottom", "30px"), eqShow.progressInterval = setInterval(function () {
        g()
    }, 300)
}, eqShow.selectElement = function (a) {
    var b;
    return b = $("#inside_" + a, ".phone-view").length ? $("#inside_" + a, ".phone-view") : $("#inside_" + a)
}, eqShow.substtrCharacters = function (a, b) {
    if (a && (a = a.replace(/\n|\r/g, " ")), a && a.length > b / 2) {
        var c = a.replace(/[^\x00-\xff]/g, "xx");
        if (c.length > b) {
            var d = c.substring(0, b).replace(/xx/g, "中").length;
            a = a.substring(0, d)
        }
    }
    return a
}, eqShow.getCharactersLen = function (a) {
    var b = a.replace(/[^\x00-\xff]/g, "xx");
    return b.length
}, eqShow.getRGB = function (a) {
    if (a = a.toLowerCase(), a.indexOf("rgba") >= 0) {
        var b = a.split(",");
        b[0] = b[0].replace("rgba", "rgb"), b.pop(), b[b.length - 1] += ")", a = b.join(",")
    }
    return a
}, eqShow.convertToHexColor = function (a) {
    if (a = a.toLowerCase(), a.indexOf("rgb") >= 0) {
        var b = a.split(","),
            c = b[0].substring(b[0].indexOf("(") + 1);
        c = parseInt(c, 10).toString(16), c = c.length < 2 ? "0" + c : c;
        var d = parseInt(b[1], 10).toString(16);
        d = d.length < 2 ? "0" + d : d;
        var e = b[2].substring(0, b[2].indexOf(")"));
        e = parseInt(e, 10).toString(16), e = e.length < 2 ? "0" + e : e, a = "#" + c + d + e
    }
    return a
}, eqShow.responsiveImage = function (a, b, c, d, e) {
    var f = new Image;
    f.src = a, f.onload = function (f) {
        var g, h, i = this;
        $.each(b, function (a, b) {
            b.elements && b.elements.length && $.each(b.elements, function (a, b) {
                if (b.id == c) {
                    var d = parseInt(b.css.width),
                        e = parseInt(b.css.height);
                    i.width / i.height >= d / e ? (g = d, h = i.height * (d / i.width)) : (h = e, g = i.width * (e / i.height))
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
}, eqShow.getCookieId = function () {
    var a = "",
        b = "C_ID=",
        c = document.cookie,
        d = c.indexOf(b);
    if (-1 != d) {
        d += b.length;
        var e = c.indexOf(";", d);
        -1 == e && (e = c.length), a = c.substring(d, e)
    }
    return a
}, eqShow.delayLoadJSAndCSS = function (a, b, c) {
    var d, e;
    if (b || (b = a.substr(a.lastIndexOf(".") + 1)), "js" == b) {
        var f = document.getElementsByTagName("script");
        for (e = 0; e < f.length; e++) if (f[e].src && -1 != f[e].src.indexOf(a) || f[e].title == c) return f[e];
        d = document.createElement("script"), d.type = "text/javascript", d.src = a, c && (d.title = c)
    } else {
        if ("css" != b) return;
        var g = document.getElementsByTagName("link");
        for (e = 0; e < g.length; e++) if (g[e].href && -1 != g[e].href.indexOf(a) || g[e].title == c) return g[e];
        d = document.createElement("link"), d.rel = "stylesheet", d.type = "text/css", d.href = a, c && (d.title = c), d.disabled = !1
    }
    var h = document.getElementsByTagName("head")[0];
    return h.appendChild(d), d
}, eqShow.copyToClipboard = function (a) {
    var b, c, d = "_hiddenCopyText_",
        e = "INPUT" === a.tagName || "TEXTAREA" === a.tagName;
    if (e) f = a, b = a.selectionStart, c = a.selectionEnd;
    else {
        if (f = document.getElementById(d), !f) {
            var f = document.createElement("textarea");
            f.style.position = "absolute", f.style.left = "-9999px", f.style.top = "0", f.id = d, document.body.appendChild(f)
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
    return g && "function" == typeof g.focus && g.focus(), e ? a.setSelectionRange(b, c) : f.textContent = "", h
}, eqShow.getUrlParameter = function (a) {
    var b, c, d = decodeURIComponent(window.location.search.substring(1)),
        e = d.split("&");
    for (c = 0; c < e.length; c++) if (b = e[c].split("="), b[0] === a) return void 0 === b[1] ? !0 : b[1]
};
var listPages = [];
!
    function (a) {
        function b(b) {
            return b.classList ? b.classList : a(b).attr("class").match(/\S+/gi)
        }

        a.fn.ShareLink = function (c) {
            function d(a) {
                var b = g[a];
                return b = b.replace("{url}", encodeURIComponent(c.url)), b = b.replace("{title}", encodeURIComponent(c.title)), b = b.replace("{text}", encodeURIComponent(c.text)), b = b.replace("{image}", encodeURIComponent(c.image))
            }

            var e = {
                    title: "",
                    text: "",
                    image: "",
                    url: window.location.href,
                    class_prefix: "s_"
                },
                c = a.extend({}, e, c),
                f = c.class_prefix.length,
                g = {
                    twitter: "https://twitter.com/intent/tweet?url={url}&text={text}",
                    pinterest: "https://www.pinterest.com/pin/create/button/?media={image}&url={url}&description={text}",
                    facebook: "https://www.facebook.com/sharer.php?u={url}",
                    vk: "https://vkontakte.ru/share.php?url={url}&title={title}&description={text}&image={image}&noparse=true",
                    linkedin: "https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={text}&source={url}",
                    myworld: "https://connect.mail.ru/share?url={url}&title={title}&description={text}&imageurl={image}",
                    odnoklassniki: "http://odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl={url}&st.comments={text}",
                    tumblr: "https://tumblr.com/share?s=&v=3&t={title}&u={url}",
                    blogger: "https://blogger.com/blog-this.g?t={text}&n={title}&u={url}",
                    delicious: "https://delicious.com/save?url={url}&title={title}",
                    plus: "https://plus.google.com/share?url={url}",
                    digg: "https://digg.com/submit?url={url}&title={title}",
                    reddit: "http://reddit.com/submit?url={url}&title={title}",
                    stumbleupon: "https://www.stumbleupon.com/submit?url={url}&title={title}",
                    pocket: "https://getpocket.com/edit?url={url}&title={title}",
                    chiq: "http://www.chiq.com/create/bookmarklet?u={url}&i={image}&d={title}&c={url}",
                    qrifier: "http://qrifier.com/q?inc=qr&type=url&size=350&string={url}",
                    qrsrc: "http://www.qrsrc.com/default.aspx?shareurl={url}",
                    qzone: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}",
                    tulinq: "http://www.tulinq.com/enviar?url={url}&title={title}",
                    misterwong: "http://www.mister-wong.com/index.php?action=addurl&bm_url={url}&bm_description={title}&bm_notice=",
                    sto_zakladok: "http://www.100zakladok.ru/save/?bmurl={url}&bmtitle={title}",
                    two_linkme: "http://www.2linkme.com/?collegamento={url}&id=2lbar",
                    adifni: "http://www.adifni.com/account/bookmark/?bookmark_url={url}",
                    amazonwishlist: "http://www.amazon.com/gp/wishlist/static-add?u={url}&t={title}",
                    amenme: "http://www.amenme.com/AmenMe/Amens/AmenToThis.aspx?url={url}&title={title}",
                    aim: "http://lifestream.aol.com/share/?url={url}&title={title}&description={text} ",
                    aolmail: "http://webmail.aol.com/25045/aol/en-us/Mail/compose-message.aspx?to=&subject={title}&body={{content}}",
                    arto: "http://www.arto.com/section/linkshare/?lu={url}&ln={title}",
                    baidu: "http://cang.baidu.com/do/add?it={title}&iu={url}&fr=ien&dc={text}",
                    bitly: "https://bitly.com/a/bitmarklet?u={url}",
                    bizsugar: "http://www.bizsugar.com/bizsugarthis.php?url={url}",
                    blinklist: "http://www.blinklist.com/blink?u={url}&t={title}&d={text}",
                    blip: "http://blip.pl/dashboard?body={title}%3A%20{url}",
                    blogmarks: "http://blogmarks.net/my/new.php?mini=1&simple=1&url={url}&title={title}&content={text}",
                    blurpalicious: "http://www.blurpalicious.com/submit/?url={url}&title={title}&desc={text}",
                    bobrdobr: "http://bobrdobr.ru/addext.html?url={url}&title={title}&desc={text}",
                    bonzobox: "http://bonzobox.com/toolbar/add?u={url}&t={title}&desc={text}",
                    bookmerkende: "http://www.bookmerken.de/?url={url}&title={title}",
                    box: "https://www.box.net/api/1.0/import?import_as=link&url={url}&name={title}&description={text}",
                    bryderi: "http://bryderi.se/add.html?u={url}",
                    buddymarks: "http://buddymarks.com/add_bookmark.php?bookmark_title={title}&bookmark_url={url}&bookmark_desc={text}",
                    camyoo: "http://www.camyoo.com/note.html?url={url}",
                    care2: "http://www.care2.com/news/compose?sharehint=news&share[share_type]news&bookmarklet=Y&share[title]={title}&share[link_url]={url}&share[content]={text}",
                    citeulike: "http://www.citeulike.org/posturl?url={url}&title={title}",
                    classicalplace: "http://www.classicalplace.com/?u={url}&t={title}&c={text}",
                    cosmiq: "http://www.cosmiq.de/lili/my/add?url={url}",
                    diggita: "http://www.diggita.it/submit.php?url={url}&title={title}",
                    diigo: "http://www.diigo.com/post?url={url}&title={title}&desc={text}",
                    domelhor: "http://domelhor.net/submit.php?url={url}&title={title}",
                    dotnetshoutout: "http://dotnetshoutout.com/Submit?url={url}&title={title}",
                    douban: "http://www.douban.com/recommend/?url={url}&title={title}",
                    dropjack: "http://www.dropjack.com/submit.php?url={url}",
                    edelight: "http://www.edelight.de/geschenk/neu?purl={url}",
                    ekudos: "http://www.ekudos.nl/artikel/nieuw?url={url}&title={title}&desc={text}",
                    elefantapl: "http://elefanta.pl/member/bookmarkNewPage.action?url={url}&title={title}&bookmarkVO.notes=",
                    embarkons: "http://www.embarkons.com/sharer.php?u={url}&t={title}",
                    evernote: "http://www.evernote.com/clip.action?url={url}&title={title}",
                    extraplay: "http://www.extraplay.com/members/share.php?url={url}&title={title}&desc={text}",
                    ezyspot: "http://www.ezyspot.com/submit?url={url}&title={title}",
                    fabulously40: "http://fabulously40.com/writeblog?subject={title}&body={url}",
                    informazione: "http://fai.informazione.it/submit.aspx?url={url}&title={title}&desc={text}",
                    fark: "http://www.fark.com/cgi/farkit.pl?u={url}&h={title}",
                    farkinda: "http://www.farkinda.com/submit?url={url}",
                    favable: "http://www.favable.com/oexchange?url={url}&title={title}&desc={text}",
                    favlogde: "http://www.favlog.de/submit.php?url={url}",
                    flaker: "http://flaker.pl/add2flaker.php?title={title}&url={url}",
                    folkd: "http://www.folkd.com/submit/{url}",
                    fresqui: "http://fresqui.com/enviar?url={url}",
                    friendfeed: "http://friendfeed.com/share?url={url}&title={title}",
                    funp: "http://funp.com/push/submit/?url={url}",
                    fwisp: "http://fwisp.com/submit.php?url={url}",
                    givealink: "http://givealink.org/bookmark/add?url={url}&title={title}",
                    gmail: "http://mail.google.com/mail/?view=cm&fs=1&to=&su={title}&body={text}&ui=1",
                    goodnoows: "http://goodnoows.com/add/?url={url}",
                    google: "http://www.google.com/bookmarks/mark?op=add&bkmk={url}&title={title}&annotation={text}",
                    googletranslate: "http://translate.google.com/translate?hl=en&u={url}&tl=en&sl=auto",
                    greaterdebater: "http://greaterdebater.com/submit/?url={url}&title={title}",
                    hackernews: "http://news.ycombinator.com/submitlink?u={url}&t={title}",
                    hatena: "http://b.hatena.ne.jp/bookmarklet?url={url}&btitle={title}",
                    hedgehogs: "http://www.hedgehogs.net/mod/bookmarks/add.php?address={url}&title={title}",
                    hotmail: "http://www.hotmail.msn.com/secure/start?action=compose&to=&subject={title}&body={{content}}",
                    w3validator: "http://validator.w3.org/check?uri={url}&charset=%28detect+automatically%29&doctype=Inline&group=0",
                    ihavegot: "http://www.ihavegot.com/share/?url={url}&title={title}&desc={text}",
                    instapaper: "http://www.instapaper.com/edit?url={url}&title={title}&summary={text}",
                    isociety: "http://isociety.be/share/?url={url}&title={title}&desc={text}",
                    iwiw: "http://iwiw.hu/pages/share/share.jsp?v=1&u={url}&t={title}",
                    jamespot: "http://www.jamespot.com/?action=spotit&u={url}&t={title}",
                    jumptags: "http://www.jumptags.com/add/?url={url}&title={title}",
                    kaboodle: "http://www.kaboodle.com/grab/addItemWithUrl?url={url}&pidOrRid=pid=&redirectToKPage=true",
                    kaevur: "http://kaevur.com/submit.php?url={url}",
                    kledy: "http://www.kledy.de/submit.php?url={url}&title={title}",
                    librerio: "http://www.librerio.com/inbox?u={url}&t={title}",
                    linkuj: "http://linkuj.cz?id=linkuj&url={url}&title={title}&description={text}&imgsrc=",
                    livejournal: "http://www.livejournal.com/update.bml?subject={title}&event={url}",
                    logger24: "http://logger24.com/?url={url}",
                    mashbord: "http://mashbord.com/plugin-add-bookmark?url={url}",
                    meinvz: "http://www.meinvz.net/Suggest/Selection/?u={url}&desc={title}&prov=addthis.com",
                    mekusharim: "http://mekusharim.walla.co.il/share/share.aspx?url={url}&title={title}",
                    memori: "http://memori.ru/link/?sm=1&u_data[url]={url}",
                    meneame: "http://www.meneame.net/submit.php?url={url}",
                    mixi: "http://mixi.jp/share.pl?u={url}",
                    moemesto: "http://moemesto.ru/post.php?url={url}&title={title}",
                    myspace: "http://www.myspace.com/Modules/PostTo/Pages/?u={url}&t={title}&c=",
                    n4g: "http://www.n4g.com/tips.aspx?url={url}&title={title}",
                    netlog: "http://www.netlog.com/go/manage/links/?view=save&origin=external&url={url}&title={title}&description={text}",
                    netvouz: "http://netvouz.com/action/submitBookmark?url={url}&title={title}&popup=no&description={text}",
                    newstrust: "http://newstrust.net/submit?url={url}&title={title}&ref=addthis",
                    newsvine: "http://www.newsvine.com/_tools/seed&save?u={url}&h={title}&s={text}",
                    nujij: "http://nujij.nl/jij.lynkx?u={url}&t={title}&b={text}",
                    oknotizie: "http://oknotizie.virgilio.it/post?title={title}&url={url}",
                    oyyla: "http://www.oyyla.com/gonder?phase=2&url={url}",
                    pdfonline: "http://savepageaspdf.pdfonline.com/pdfonline/pdfonline.asp?cURL={url}",
                    pdfmyurl: "http://pdfmyurl.com?url={url}",
                    phonefavs: "http://phonefavs.com/bookmarks?action=add&address={url}&title={title}",
                    plaxo: "http://www.plaxo.com/events?share_link={url}&desc={text}",
                    plurk: "http://www.plurk.com/m?content={url}+({title})&qualifier=shares ",
                    posteezy: "http://posteezy.com/node/add/story?title={title}&body={url}",
                    pusha: "http://www.pusha.se/posta?url={url}&title={title}&description={text}",
                    rediff: "http://share.rediff.com/bookmark/addbookmark?title={title}&bookmarkurl={url}",
                    redkum: "http://www.redkum.com/add?url={url}&step=1&title={title}",
                    scoopat: "http://scoop.at/submit?url={url}&title={title}&body={text}",
                    sekoman: "http://sekoman.lv/home?status={title}&url={url}",
                    shaveh: "http://shaveh.co.il/submit.php?url={url}&title={title}",
                    shetoldme: "http://shetoldme.com/publish?url={url}&title={title}&body={text}",
                    sinaweibo: "http://v.t.sina.com.cn/share/share.php?url={url}&title={title}",
                    sodahead: "http://www.sodahead.com/news/submit/?url={url}&title={title}",
                    sonico: "http://www.sonico.com/share.php?url={url}&title={title}",
                    springpad: "http://springpadit.com/s?type=lifemanagr.Bookmark&url={url}&name={title}",
                    startaid: "http://www.startaid.com/index.php?st=AddBrowserLink&type=Detail&v=3&urlname={url}&urltitle={title}&urldesc={text}",
                    startlap: "http://www.startlap.hu/sajat_linkek/addlink.php?url={url}&title={title}",
                    studivz: "http://www.studivz.net/Suggest/Selection/?u={url}&desc={title}&prov=addthis.com",
                    stuffpit: "http://www.stuffpit.com/add.php?produrl={url}",
                    stumpedia: "http://www.stumpedia.com/submit?url={url}",
                    svejo: "http://svejo.net/story/submit_by_url?url={url}&title={title}&summary={text}",
                    symbaloo: "http://www.symbaloo.com/en/add/?url={url}&title={title}",
                    thewebblend: "http://thewebblend.com/submit?url={url}&title={title}",
                    thinkfinity: "http://www.thinkfinity.org/favorite-bookmarklet.jspa?url={url}&subject={title}",
                    thisnext: "http://www.thisnext.com/pick/new/submit/url/?description={text}&name={title}&url={url}",
                    tuenti: "http://www.tuenti.com/share?url={url}",
                    typepad: "http://www.typepad.com/services/quickpost/post?v=2&qp_show=ac&qp_title={title}&qp_href={url}&qp_text={text}",
                    viadeo: "http://www.viadeo.com/shareit/share/?url={url}&title={title}&urlaffiliate=32005&encoding=UTF-8",
                    virb: "http://virb.com/share?external&v=2&url={url}&title={title}",
                    visitezmonsite: "http://www.visitezmonsite.com/publier?url={url}&title={title}&body={text}",
                    vybralisme: "http://vybrali.sme.sk/sub.php?url={url}",
                    webnews: "http://www.webnews.de/einstellen?url={url}&title={title}",
                    wirefan: "http://www.wirefan.com/grpost.php?d=&u={url}&h={title}&d={text}",
                    wordpress: "http://wordpress.com/wp-admin/press-this.php?u={url}&t={title}&s={text}&v=2",
                    wowbored: "http://www.wowbored.com/submit.php?url={url}",
                    wykop: "http://www.wykop.pl/dodaj?url={url}&title={title}&desc={text}",
                    yahoobkm: "http://bookmarks.yahoo.com/toolbar/savebm?opener=tb&u={url}&t={title}&d={text}",
                    yahoomail: "http://compose.mail.yahoo.com/?To=&Subject={title}&body={{content}}",
                    yammer: "https://www.yammer.com/home/bookmarklet?bookmarklet_pop=1&u={url}&t={title}",
                    yardbarker: "http://www.yardbarker.com/author/new/?pUrl={url}&pHead={title}",
                    yigg: "http://www.yigg.de/neu?exturl={url}&exttitle={title}&extdesc={text}",
                    yoolink: "http://go.yoolink.to/addorshare?url_value={url}&title={title}",
                    yorumcuyum: "http://www.yorumcuyum.com/?baslik={title}&link={url}",
                    youmob: "http://youmob.com/mobit.aspx?title={title}&mob={url}",
                    zakladoknet: "http://zakladok.net/link/?u={url}&t={title}",
                    ziczac: "http://ziczac.it/a/segnala/?gurl={url}&gtit={title}"
                };
            this.each(function (e, h) {
                for (var i = b(h), e = 0; e < i.length; e++) {
                    var j = i[e];
                    if (j.substr(0, f) == c.class_prefix && g[j.substr(f)]) {
                        var k = d(j.substr(f));
                        a(h).attr("href", k).click(function () {
                            var b = screen.width,
                                d = screen.height,
                                e = c.width ? c.width : b - .2 * b,
                                f = c.height ? c.height : d - .2 * d,
                                g = b / 2 - e / 2,
                                h = d / 2 - f / 2,
                                i = "toolbar=0,status=0,width=" + e + ",height=" + f + ",top=" + h + ",left=" + g;
                            return window.open(a(this).attr("href"), "", i) && !1
                        })
                    }
                }
            })
        }
    }(jQuery), function () {
    var a, b = 0;
    eqShow.shakeTrigger = function (c, d) {
        function e(a) {
            var c = a.accelerationIncludingGravity,
                d = (new Date).getTime();
            if (d - m > 100) {
                var g = parseInt(d - m);
                m = d, j = c.x, k = c.y, l = c.z;
                var i = Math.abs(j + k + l - n - o - p) / g * 1e4;
                window.removeEventListener("devicemotion", e, !0), i > h && (q || (eqShow.playTriggerSound(), q = !0), window.removeEventListener("devicemotion", e, !0), f.sends && f.sends.length && $.each(f.sends, function (a, c) {
                    time = setTimeout(function () {
                        $.each(c.handles, function (a, c) {
                            var d = utilTrigger.getHandleType(c.type).name;
                            $.each(c.ids, function (a, c) {
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
            window.DeviceMotionEvent && d && window.addEventListener("devicemotion", e, !1)
        }
    }, eqShow.playTriggerSound = function () {
        a && a.play()
    }
}(), function () {
    eqShow.getImagesResourceHost = function (a, b) {
        return -1 !== location.host.indexOf(window.DOMAIN) && (-1 !== ["2", "21"].indexOf(a) && -1 !== ["1", "2", "3", "4", "6", "7", "8", "9"].indexOf(b) ? PREFIX_FILE_HOST = VIP_FILE_HOST : PREFIX_FILE_HOST = COMMON_FILE_HOST), PREFIX_FILE_HOST
    }
}(), function (a) {
    function b(a, b, i) {
        var j = 0,
            k = [0],
            l = "",
            m = null,
            l = i || "UTF8";
        if ("UTF8" !== l && "UTF16" !== l) throw "encoding must be UTF8 or UTF16";
        if ("HEX" === b) {
            if (0 !== a.length % 2) throw "srcString of HEX type must be in byte increments";
            m = d(a), j = m.binLen, k = m.value
        } else if ("ASCII" === b || "TEXT" === b) m = c(a, l), j = m.binLen, k = m.value;
        else {
            if ("B64" !== b) throw "inputFormat must be HEX, TEXT, ASCII, or B64";
            m = e(a), j = m.binLen, k = m.value
        }
        this.getHash = function (a, b, c, d) {
            var e, i = null,
                l = k.slice(),
                m = j;
            if (3 === arguments.length ? "number" != typeof c && (d = c, c = 1) : 2 === arguments.length && (c = 1), c !== parseInt(c, 10) || 1 > c) throw "numRounds must a integer >= 1";
            switch (b) {
                case "HEX":
                    i = f;
                    break;
                case "B64":
                    i = g;
                    break;
                default:
                    throw "format must be HEX or B64"
            }
            if ("SHA-1" !== a) throw "Chosen SHA variant is not supported";
            for (e = 0; c > e; e++) l = o(l, m), m = 160;
            return i(l, h(d))
        }, this.getHMAC = function (a, b, i, m, n) {
            var p, q, r, s, t = [],
                u = [];
            switch (p = null, m) {
                case "HEX":
                    m = f;
                    break;
                case "B64":
                    m = g;
                    break;
                default:
                    throw "outputFormat must be HEX or B64"
            }
            if ("SHA-1" !== i) throw "Chosen SHA variant is not supported";
            if (q = 64, s = 160, "HEX" === b) p = d(a), r = p.binLen, p = p.value;
            else if ("ASCII" === b || "TEXT" === b) p = c(a, l), r = p.binLen, p = p.value;
            else {
                if ("B64" !== b) throw "inputFormat must be HEX, TEXT, ASCII, or B64";
                p = e(a), r = p.binLen, p = p.value
            }
            if (a = 8 * q, b = q / 4 - 1, r / 8 > q) {
                if ("SHA-1" !== i) throw "Unexpected error in HMAC implementation";
                p = o(p, r), p[b] &= 4294967040
            } else q > r / 8 && (p[b] &= 4294967040);
            for (q = 0; b >= q; q += 1) t[q] = 909522486 ^ p[q], u[q] = 1549556828 ^ p[q];
            if ("SHA-1" !== i) throw "Unexpected error in HMAC implementation";
            return i = o(u.concat(o(t.concat(k), a + j)), a + s), m(i, h(n))
        }
    }

    function c(a, b) {
        var c, d, e = [],
            f = [],
            g = 0;
        if ("UTF8" === b) for (d = 0; d < a.length; d += 1) for (c = a.charCodeAt(d), f = [], c > 2048 ? (f[0] = 224 | (61440 & c) >>> 12, f[1] = 128 | (4032 & c) >>> 6, f[2] = 128 | 63 & c) : c > 128 ? (f[0] = 192 | (1984 & c) >>> 6, f[1] = 128 | 63 & c) : f[0] = c, c = 0; c < f.length; c += 1) e[g >>> 2] |= f[c] << 24 - g % 4 * 8, g += 1;
        else if ("UTF16" === b) for (d = 0; d < a.length; d += 1) e[g >>> 2] |= a.charCodeAt(d) << 16 - g % 4 * 8, g += 2;
        return {
            value: e,
            binLen: 8 * g
        }
    }

    function d(a) {
        var b, c, d = [],
            e = a.length;
        if (0 !== e % 2) throw "String of HEX type must be in byte increments";
        for (b = 0; e > b; b += 2) {
            if (c = parseInt(a.substr(b, 2), 16), isNaN(c)) throw "String of HEX type contains invalid characters";
            d[b >>> 3] |= c << 24 - b % 8 * 4
        }
        return {
            value: d,
            binLen: 4 * e
        }
    }

    function e(a) {
        var b, c, d, e, f, g = [],
            h = 0;
        if (-1 === a.search(/^[a-zA-Z0-9=+\/]+$/)) throw "Invalid character in base-64 string";
        if (b = a.indexOf("="), a = a.replace(/\=/g, ""), -1 !== b && b < a.length) throw "Invalid '=' found in base-64 string";
        for (c = 0; c < a.length; c += 4) {
            for (f = a.substr(c, 4), d = e = 0; d < f.length; d += 1) b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(f[d]), e |= b << 18 - 6 * d;
            for (d = 0; d < f.length - 1; d += 1) g[h >> 2] |= (e >>> 16 - 8 * d & 255) << 24 - h % 4 * 8, h += 1
        }
        return {
            value: g,
            binLen: 8 * h
        }
    }

    function f(a, b) {
        var c, d, e = "",
            f = 4 * a.length;
        for (c = 0; f > c; c += 1) d = a[c >>> 2] >>> 8 * (3 - c % 4), e += "0123456789abcdef".charAt(d >>> 4 & 15) + "0123456789abcdef".charAt(15 & d);
        return b.outputUpper ? e.toUpperCase() : e
    }

    function g(a, b) {
        var c, d, e, f = "",
            g = 4 * a.length;
        for (c = 0; g > c; c += 3) for (e = (a[c >>> 2] >>> 8 * (3 - c % 4) & 255) << 16 | (a[c + 1 >>> 2] >>> 8 * (3 - (c + 1) % 4) & 255) << 8 | a[c + 2 >>> 2] >>> 8 * (3 - (c + 2) % 4) & 255, d = 0; 4 > d; d += 1) f = 8 * c + 6 * d <= 32 * a.length ? f + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e >>> 6 * (3 - d) & 63) : f + b.b64Pad;
        return f
    }

    function h(a) {
        var b = {
            outputUpper: !1,
            b64Pad: "="
        };
        try {
            a.hasOwnProperty("outputUpper") && (b.outputUpper = a.outputUpper), a.hasOwnProperty("b64Pad") && (b.b64Pad = a.b64Pad)
        } catch (c) {
        }
        if ("boolean" != typeof b.outputUpper) throw "Invalid outputUpper formatting option";
        if ("string" != typeof b.b64Pad) throw "Invalid b64Pad formatting option";
        return b
    }

    function i(a, b) {
        return a << b | a >>> 32 - b
    }

    function j(a, b, c) {
        return a ^ b ^ c
    }

    function k(a, b, c) {
        return a & b ^ ~a & c
    }

    function l(a, b, c) {
        return a & b ^ a & c ^ b & c
    }

    function m(a, b) {
        var c = (65535 & a) + (65535 & b);
        return ((a >>> 16) + (b >>> 16) + (c >>> 16) & 65535) << 16 | 65535 & c
    }

    function n(a, b, c, d, e) {
        var f = (65535 & a) + (65535 & b) + (65535 & c) + (65535 & d) + (65535 & e);
        return ((a >>> 16) + (b >>> 16) + (c >>> 16) + (d >>> 16) + (e >>> 16) + (f >>> 16) & 65535) << 16 | 65535 & f
    }

    function o(a, b) {
        var c, d, e, f, g, h, o, p, q, r = [],
            s = k,
            t = j,
            u = l,
            v = i,
            w = m,
            x = n,
            y = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        for (a[b >>> 5] |= 128 << 24 - b % 32, a[(b + 65 >>> 9 << 4) + 15] = b, q = a.length, o = 0; q > o; o += 16) {
            for (c = y[0], d = y[1], e = y[2], f = y[3], g = y[4], p = 0; 80 > p; p += 1) r[p] = 16 > p ? a[p + o] : v(r[p - 3] ^ r[p - 8] ^ r[p - 14] ^ r[p - 16], 1), h = 20 > p ? x(v(c, 5), s(d, e, f), g, 1518500249, r[p]) : 40 > p ? x(v(c, 5), t(d, e, f), g, 1859775393, r[p]) : 60 > p ? x(v(c, 5), u(d, e, f), g, 2400959708, r[p]) : x(v(c, 5), t(d, e, f), g, 3395469782, r[p]), g = f, f = e, e = v(d, 30), d = c, c = h;
            y[0] = w(c, y[0]), y[1] = w(d, y[1]), y[2] = w(e, y[2]), y[3] = w(f, y[3]), y[4] = w(g, y[4])
        }
        return y
    }

    "function" == typeof define ? define(function () {
        return b
    }) : "undefined" != typeof exports ? "undefined" != typeof module && module.exports ? module.exports = exports = b : exports = b : a.jsSHA = b
}(this);
var wechatUtils = function () {
    function a(a, c, d, g, h) {
        f = "", e = "";
        var i = c.obj.name,
            j = c.obj.cover,
            k = c.obj.description || "",
            l = a;
        a.indexOf("toPage") > -1 && (l = eqShow.delQueStr(a, "toPage"));
        var k = c.obj.description || "",
            m = c.obj.property;
        if (c.list) a: for (var n = 0; n < c.list.length; n++) if (c.list[n].elements) for (var o = 0; o < c.list[n].elements.length; o++) if (("401" == c.list[n].elements[o].type || "201" == c.list[n].elements[o].type) && "share" == c.list[n].elements[o].properties.type) {
            l.indexOf("&userKey=") > -1 ? l = l.split("&userKey=")[0] : l.indexOf("?userKey=") > -1 && (l = l.split("?userKey=")[0]), f = Date.now() + "" + Math.floor(1e5 * Math.random()), e += (/\?/.test(l) ? "&" : "?") + "userKey=" + f;
            break a
        }
        d && g && (e = "", l.indexOf("&userKey=") > -1 ? l = l.split("&userKey=")[0] : l.indexOf("?userKey=") > -1 && (l = l.split("?userKey=")[0]), f = Date.now() + "" + Math.floor(1e5 * Math.random()), e += (/\?/.test(l) ? "&" : "?") + "userKey=" + f),
        d && g && (window.wxCompData[d] = g),
            m && "1" == m.showShareCount ? (c.map || (c.map = {}, c.map.shareCount = 0), $.ajax({
                type: "GET",
                url: PREFIX_S1_URL + "eqs/scene/pv?sceneId=" + window.scene.id,
                xhrFields: {
                    withCredentials: !0
                },
                error: function (a) {
                    alert("服务器异常！")
                },
                success: function (a) {
                    k += "我是第" + a + "位" + m.shareDes, k || (k = " "), b(i, k, l, e, j)
                }
            })) : (k || (k = " "), b(i, k, l, e, j)),
        h && $("#media") && $("#media").get(0) && $("#media").get(0).play()
    }

    function b(a, b, d, e, f) {
        var g = d + e,
            h = scene.dsAppId ? DS.linkChange(g) : g;
        wx.onMenuShareTimeline({
            title: a,
            link: h,
            imgUrl: PREFIX_FILE_HOST + f,
            success: function () {
                scene.dsAppId && DS.sendRepost("timeline"), c(wxCompData)
            },
            cancel: function () {
            }
        }), wx.onMenuShareAppMessage({
            title: a,
            desc: b,
            link: h,
            imgUrl: PREFIX_FILE_HOST + f,
            success: function () {
                scene.dsAppId && DS.sendRepost("appMessage"), c(wxCompData)
            },
            cancel: function (a) {
                console.log(a)
            }
        }), wx.onMenuShareQQ({
            title: a,
            desc: b,
            link: g,
            imgUrl: PREFIX_FILE_HOST + f,
            success: function () {
            },
            cancel: function () {
            }
        }), wx.onMenuShareWeibo({
            title: a,
            desc: b,
            link: g,
            imgUrl: PREFIX_FILE_HOST + f,
            success: function () {
            },
            cancel: function () {
            }
        })
    }

    function c(a) {
        if (f) {
            var b = {
                userKey: f
            };
            weChatUser && weChatUser.headimgurl && (a.shareUserHeader = weChatUser.headimgurl), weChatUser && weChatUser.headimgurl && (a.shareUserName = weChatUser.nickname), b.data = JSON.stringify(a), $.ajax({
                type: "POST",
                url: PREFIX_S1_URL + "eqs/wx/component",
                data: $.param(b),
                error: function (a) {
                    alert(JSON.stringify(a))
                },
                success: function (a) {
                }
            })
        }
    }

    function d(a, b) {
        var c = PREFIX_S1_URL + "eqs/wx/user/cache";
        $.ajax({
            type: "GET",
            url: c,
            xhrFields: {
                withCredentials: !0
            },
            success: function (d) {
                if (200 === d.code) if (d.obj) window.weChatUser = d.obj, a();
                else {
                    var e = eqShow.getDomain(window.location.href),
                        f = "";
                    b && (f = "?toPage=" + b), eqShow.getQueryString("userKey") && (f = (/\?/.test(c) ? "&" : "?") + "userKey=" + eqShow.getQueryString("userKey")), window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + APPID_WX + "&redirect_uri=" + encodeURIComponent(PREFIX_S1_URL + "eqs/wx/user/info") + "&response_type=code&scope=snsapi_userinfo&state=" + encodeURIComponent("http://" + e + "/v/" + window.scene.code + f) + "#wechat_redirect"
                } else alert("error")
            },
            error: function (a) {
            },
            crossDomain: !0
        })
    }

    var e, f;
    return {
        shareWeixinWhenReady: a,
        shareWidthSDK: b,
        saveComponentInfo: c,
        weChatAuth: d
    }
}(window);
!
    function () {
        function a(b, c) {
            var d = 0;
            $.each(c, function (e, f) {
                "shareUserHeader" != e && "shareUserName" != e && (d++, 1 == d && wx.downloadImage({
                    serverId: f,
                    isShowProgressTips: 0,
                    success: function (d) {
                        eqShow.responsiveImage(d.localId, b, e, $("#inside_" + e), $("#" + e)), delete c[e], a(b, c)
                    },
                    fail: function (a) {
                        $("#" + e).css("display", "block")
                    }
                }))
            })
        }

        wechatUtils.wechatImgUpload = function (b, c) {
            var d, e, f = c.list;
            if ($(document).on("wx.img.upload", function (a, g) {
                    wx.chooseImage({
                        count: 1,
                        sizeType: ["original", "compressed"],
                        sourceType: ["album", "camera"],
                        success: function (a) {
                            d = a.localIds, setTimeout(function () {
                                wx.uploadImage({
                                    localId: d.toString(),
                                    isShowProgressTips: 1,
                                    success: function (a) {
                                        eqShow.responsiveImage(d, f, g, $("#inside_" + g), $("#" + g)), e = a.serverId, wechatUtils.shareWeixinWhenReady(b, c, g, e, !1)
                                    }
                                })
                            }, 100)
                        }
                    })
                }), c.map && c.map.wxComponent) {
                var g = $.extend(!0, {}, c.map.wxComponent);
                a(c.list, g)
            }
        }
    }(), function () {
    var a, b = {};
    wechatUtils.wechatAudioUpload = function (c, d) {
        function e(a, e) {
            b[e] = a, wx.uploadVoice({
                localId: a,
                isShowProgressTips: 1,
                success: function (a) {
                    var b = a.serverId;
                    wechatUtils.shareWeixinWhenReady(c, d, "wxp" + e.substring(3), b, !1)
                }
            })
        }

        function f(a) {
            var b = document.createElement("audio");
            b.src = a, b.play(), $(b).bind("ended", function () {
                eqShow.executePlay()
            })
        }

        function g(a, b) {
            $("#panel" + a).length && $("#panel" + a).remove();
            var c = $("#wxp" + a.substring(3)),
                d = '<div class="voice-panel" id="panel' + a + '"><span class="icon eqf-voice"></span><div class="voice-tip">松开手指 停止录音</div></div>';
            $(d).prependTo(".z-current"), c.addClass("background-transform"), j = setInterval(function () {
                b++, c.toggleClass("green-back"), b >= 50 && $("#panel" + a).text(60 - b), 60 == b && (clearInterval(j), $("#panel" + a).remove(), c.removeClass("green-back"), wx.onVoiceRecordEnd({
                    complete: function (c) {
                        b = 0, $(document).trigger("wx.audio.recordend", a), eqShow.executePlay(), e(c.localId, a)
                    }
                }))
            }, 1e3)
        }

        var h, i = 0;
        $(document).on("wx.audio.record", function (a, b) {
            wx.startRecord({
                success: function (a) {
                    eqShow.executePause(), h = !0, i = 0, g(b, i)
                }
            }), $("#" + b).addClass("recording").text("松开 结束")
        }), $(document).on("wx.audio.recordend", function (a, b) {
            j && clearInterval(j), $("#" + b).removeClass("recording").text("按住 说话"), $("#panel" + b).remove(), $("#wxp" + b.substring(3)).removeClass("green-back"), wx.stopRecord({
                success: function (a) {
                    i = 0, eqShow.executePlay(), e(a.localId, b)
                },
                error: function (a) {
                    alert(JSON.stringify(a))
                }
            })
        }), $(document).on("wx.audio.play", function (c, e) {
            var g = ($("#media").get(0), HB_STATIC + "assets/audio/wexin_sound.mp3");
            utilSound.pause(), b["wxr" + e.substring(3)] ? (a = b["wxr" + e.substring(3)], eqShow.executePause(), wx.playVoice({
                localId: a
            })) : d.map && d.map.wxComponent && d.map.wxComponent[e] ? wx.downloadVoice({
                serverId: d.map.wxComponent[e],
                isShowProgressTips: 1,
                success: function (b) {
                    var c = a = b.localId;
                    eqShow.executePause(), wx.playVoice({
                        localId: c
                    })
                },
                error: function (a) {
                    eqShow.executePause(), f(g)
                }
            }) : (eqShow.executePause(), f(g)), wx.onVoicePlayEnd({
                success: function (a) {
                    eqShow.executePlay()
                }
            })
        });
        var j
    }, wechatUtils.stopWechatSound = function () {
        a && wx.stopVoice({
            localId: a
        })
    }
}();
var wechatConfig = function () {
    function a(a) {
        var e = location.href.split("#")[0],
            f = Date.now(),
            g = "eqs/wx/ticket",
            h = new RegExp(d.replace("h5.", "")),
            i = new RegExp(d.replace("h5.", "").replace("cn", "com"));
        h.test(e) || i.test(e) || (g += (/\?/.test(g) ? "&" : "?") + "domain=" + c), g += (/\?/.test(g) ? "&" : "?") + "time=" + (new Date).getTime(), $.ajax({
            type: "GET",
            url: PREFIX_S1_URL + g,
            crossDomain: !0
        }).then(function (c) {
            c.success && c.obj.appId && c.obj.ticket && -1 != c.obj.ticket && b(c.obj.appId, c.obj.ticket, a, f)
        }, function (a) {
        })
    }

    function b(a, b, c, d) {
        var e = location.href.split("#")[0],
            f = "eqxiuview",
            g = "jsapi_ticket=" + b + "&noncestr=" + f + "&timestamp=" + d + "&url=" + e,
            h = new jsSHA(g, "TEXT"),
            i = h.getHash("SHA-1", "HEX");
        wx.config({
            debug: !1,
            appId: a,
            timestamp: d,
            nonceStr: f,
            signature: i,
            jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "chooseImage", "previewImage", "uploadImage", "downloadImage", "startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "pauseVoice", "stopVoice", "onVoicePlayEnd", "uploadVoice", "downloadVoice"]
        }), wx.ready(function () {
            wechatUtils.shareWeixinWhenReady(e, c, null, null, !0), wechatUtils.wechatImgUpload(e, c), wechatUtils.wechatAudioUpload(e, c)
        })
    }

    var c = eqShow.getDomain(window.location.href),
        d = eqShow.getDomain(PREFIX_SHOW_HOST);
    return {
        configWeixin: a
    }
}(window);
!
    function (a) {
        a.completeEffect = function (a) {
            return a.find(".lock").get(0) ? !1 : !0
        }
    }(window, jQuery), function () {
    window.eqx = {}, window.eqx.money = {
        config: {
            mode: 3,
            effectCallback: "editMoney",
            imageCallback: "countMoney",
            resources: [{
                url: HB_STATIC + "common/js/countMoney.js",
                type: "js"
            }, {
                url: HB_STATIC + "assets/images/money/moneybg.png",
                type: "image"
            }, {
                url: HB_STATIC + "assets/images/money/moremoney.png",
                type: "image"
            }, {
                url: HB_STATIC + "assets/images/money/flymoney.png",
                type: "image"
            }, {
                url: HB_STATIC + "assets/images/money/float.png",
                type: "image"
            }, {
                url: HB_STATIC + "assets/images/money/float2.png",
                type: "image"
            }, {
                url: HB_STATIC + "assets/images/money/float3.png",
                type: "image"
            }]
        }
    }, window.eqx.snowFly = {
        config: {
            mode: 4,
            effectCallback: "flyAction",
            resources: [{
                url: HB_STATIC + "common/js/snoweffect.js",
                type: "js"
            }, {
                url: HB_STATIC + "common/js/threecanvas.js",
                type: "js"
            }]
        }
    }, window.eqx.rainyDay = {
        config: {
            mode: 4,
            effectCallback: "rainyEffect",
            resources: [{
                url: HB_STATIC + "common/js/rainyday.js",
                type: "js"
            }, {
                url: HB_STATIC + "common/js/rainyeffect.js",
                type: "js"
            }]
        }
    }, window.eqx.fireWorks = {
        config: {
            mode: 4,
            effectCallback: "fireWorks",
            resources: [{
                url: HB_STATIC + "common/js/fireworks.js",
                type: "js"
            }]
        }
    }
}(), function () {
    function a(a) {
        resources.loaded = !0, a instanceof Array ? a.forEach(function (a) {
            b(a)
        }) : b(a)
    }

    function b(a) {
        if ("loading" !== f[a.url]) {
            if (f[a.url]) return f[a.url];
            if (f[a.url] = !1, "image" === a.type) {
                var b = new Image;
                f[a.url] = "loading", b.onload = function () {
                    f[a.url] = b, d() && g.forEach(function (a) {
                        a()
                    })
                }, b.src = a.url
            } else "js" === a.type && (f[a.url] = "loading", $.getScript(a.url, function () {
                f[a.url] = !0, d() && g.forEach(function (a) {
                    a()
                })
            }))
        }
    }

    function c(a) {
        return f[a]
    }

    function d() {
        var a = !0;
        for (var b in f) if (f.hasOwnProperty(b) && (!f[b] || "loading" === f[b])) return !1;
        return a
    }

    function e(a) {
        g.push(a)
    }

    var f = {},
        g = [];
    window.resources = {
        load: a,
        get: c,
        onReady: e,
        isReady: d
    }
}(), function (a, b) {
    function c(a, c) {
        completeEffect(b(".z-current")) && (E = "started", D.length || (D = n.find(".main-page")), c || (B ? (a = event, q = {
            x: a.touches[0].pageX - n.offset().left,
            y: a.touches[0].pageY - n.offset().top
        }) : q = {
            x: a.pageX - n.offset().left,
            y: a.pageY - n.offset().top
        }))
    }

    function d(a, c) {
        if (E = "turning", W && W.obj.property.autoFlip && W.obj.property.autoFlipTime && m(), c || (B ? (a = event, r = {
                x: a.touches[0].pageX - n.offset().left,
                y: a.touches[0].pageY - n.offset().top
            }) : r = {
                x: a.pageX - n.offset().left,
                y: a.pageY - n.offset().top
            }), s = r.x - q.x, 0 > s) {
            if (x) {
                x = !1, B && p ? v = !0 : q.y >= n.height() / 2 ? t = !0 : q.y < n.height() / 2 && (u = !0), y = b(".z-current").get(0);
                var d = b(y).find(".m-img").attr("id").substring(4);
                if (o = b("#flip" + d), Z || (z = b(y).parent(".flip-mask").get(0).nextElementSibling && b(b(y).parent(".flip-mask").get(0).nextElementSibling).find(".main-page").get(0) ? b(b(y).parent(".flip-mask").get(0).nextElementSibling).find(".main-page").get(0) : A ? D.first().get(0) : !1), z) {
                    b(z).find(".m-img").attr("id").substring(4);
                    b(y).parent(".flip-mask").css({
                        zIndex: 100,
                        display: "block"
                    }), b(z).addClass("z-active").parent(".flip-mask").css({
                        zIndex: 99,
                        display: "block"
                    }), i(z), completeEffect(b(z)) || b("#audio_btn").css("opacity", 0), t ? (b(".z-current").css({
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
            o = b("#flip" + d), Z || (z = b(y).parent(".flip-mask").get(0).previousElementSibling && b(b(y).parent(".flip-mask").get(0).previousElementSibling).find(".main-page").get(0) ? b(b(y).parent(".flip-mask").get(0).previousElementSibling).find(".main-page").get(0) : A ? D.last().get(0) : !1), z && (i(z), completeEffect(b(z)) || b("#audio_btn").css("opacity", 0), b(y).parent(".flip-mask").css({
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
        b ? (c = a.x, d = a.y) : B ? (c = r.x - n.offset().left, d = r.y - n.offset().top) : (c = a.pageX - n.offset().left, d = a.pageY - n.offset().top), t ? (F = 16, e = -n.width(), g = n.height(), C = setInterval(function () {
            c = F >= c - e ? c : c - F, d = F >= g - d ? d : d + F, f({
                x: c,
                y: d
            }), F >= c - e && F >= g - d && (clearInterval(C), h())
        }, 10)) : u ? (F = 16, e = -n.width(), g = 0, C = setInterval(function () {
            c = F >= c - e ? c : c - F, d = F >= d - g ? d : d - F, f({
                x: c,
                y: d
            }), F >= c - e && F >= d - g && (clearInterval(C), h())
        }, 1)) : v ? (F = 5, e = -n.width(), C = setInterval(function () {
            c = F >= c - e ? c : c - F, f({
                x: c,
                y: d
            }), F >= c - e && (clearInterval(C), h())
        }, 1)) : w && (F = 3, e = n.width(), g = 0, C = setInterval(function () {
            c = F >= e - c ? c : c + F, f({
                x: c,
                y: d
            }), F >= e - c && (clearInterval(C), h())
        }, 1))
    }

    function f(a) {
        t || u ? (H = n.width() - a.x, t ? I = Math.abs(n.height() - a.y) : u && (I = a.y), J = I / H, K = I / Math.sqrt(H * H + I * I), L = Math.sqrt(1 - K * K), M = Math.sqrt(H * H + I * I) / 2, N = M * J, O = Math.sqrt(N * N + M * M), P = O / J, G = 180 * Math.atan(J) / Math.PI > 0 ? 180 * Math.atan(J) / Math.PI : 0, Q = (n.width() - O) * L, R = (n.width() - O) * K * L, S = (n.width() - O) * (1 - K * K), Q >= 1 && (t ? (G > 1 ? b(".turning").css({
            width: O + "px",
            height: P + "px",
            backgroundColor: "#ff0000",
            background: "-webkit-linear-gradient(" + (180 - G) + "deg, #fff 10%, #d1cfc7 40%, #f2eee2 50%, transparent 50%, transparent 100%)",
            transform: "translateX(-" + (O - 3) + "px) translateY(-" + (P - 3) + "px) rotate(" + 2 * G + "deg) scaleX(-1)"
        }) : g(a), T = "0% 100% 0px", U = "rotate(-" + (90 - G) + "deg) translateY(" + Q + "px)", V = "rotate(" + (90 - G) + "deg) translateY(-" + R + "px) translateX(-" + S + "px)") : u && (G > 1 ? b(".turning").css({
            width: O + "px",
            height: P + "px",
            backgroundColor: "#000",
            background: "-webkit-linear-gradient(-" + (180 - G) + "deg, #fff 10%, #d1cfc7 40%, #f2eee2 50%, transparent 50%, transparent 100%)",
            transform: "translateX(-" + (O - 2) + "px) rotate(-" + 2 * G + "deg) scaleX(-1)"
        }) : g(a), T = "0% 0% 0px", U = "rotate(" + (90 - G) + "deg) translateY(-" + Q + "px)", V = "rotate(-" + (90 - G) + "deg) translateY(" + R + "px) translateX(-" + S + "px)"), o.css({
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
        c.length && c.remove(), E = "feeling", t = !1, u = !1, v = !1, w = !1, x = !0, s = 0, b(".flip-mask").css({
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
        a[e - 1].elements && a[e - 1].elements.length && b.each(a[e - 1].elements, function (a, c) {
            "d" == c.type && eqShow.getShowCount(W.obj.id).then(function (a) {
                var d = eqShow.fixedNum(a);
                b("#" + c.id).find(".counter-number").text(d)
            })
        }), $ || eqShow.showProgressBar(W, b("#nr").find(".main-page")), $ = !0
    }

    function i(a) {
        if (a) {
            var c = b(a).find(".m-img").attr("id").substring(4);
            b(a).find("li").each(function (a) {
                for (var d = 0; d < W.list[c - 1].elements.length; d++) W.list[c - 1].elements[d].id == parseInt(b(this).attr("id").substring(7), 10) && eqxCommon.animation(b(this), W.list[c - 1].elements[d], "view")
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
        }, w = !0, C = setInterval(function () {
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
        }, B && p ? v = !0 : t = !0, Y = setInterval(function () {
            r.x -= 5, r.y -= 5, d(r, "mock"), r.x <= 200 && (clearInterval(Y), e(r, "mock"), A || z || m())
        }, 1))
    }

    function l() {
        _ = setInterval(function () {
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
    a.turnBook = function (a) {
        W = a, W.obj.property.autoFlip && W.obj.property.autoFlipTime && (X = W.obj.property.autoFlipTime, l()), A = W.obj.property.triggerLoop, b('<div class="turning"></div>').appendTo(".nr"), b(".main-page").css({
            width: b(".nr").width() + "px",
            height: b(".nr").height() + "px"
        }), n.on(B ? "touchstart" : "mousedown", function (a) {
            W.obj.property.forbidHandFlip || "feeling" == E && (c(a), b(".main-page").css({
                width: n.width() + "px",
                height: n.height() + "px"
            }))
        }).on(B ? "touchmove" : "mousemove", function (a) {
            W.obj.property.forbidHandFlip || ("started" == E || "turning" == E) && d(a)
        }).on(B ? "touchend" : "mouseup mouseleave", function (a) {
            return !W.obj.property.forbidHandFlip && (Z = !1, b(".z-current").get(0)) ? 0 == s ? (x = !0, void(E = "feeling")) : void("turning" == E && e(a)) : void 0
        })
    };
    var $ = !1;
    a.flipBookScroll = function (a) {
        Z = !0;
        for (var c, d = 0, e = W.list.length; e > d; d++) a == W.list[d].id && (c = W.list[d].num);
        c || (c = a), y = b(".z-current").get(0);
        var f = b(y).find(".m-img").attr("id").substring(4),
            g = b(y).parent(".flip-mask").siblings(".flip-mask").find(".main-page").find("#page" + c);
        g && (z = b(g).parent(".main-page").get(0), f > c ? j() : c > f && k())
    }, b(document).on("bookFlipPre", function (a) {
        j()
    }), b(document).on("bookFlipNext", function (a) {
        k()
    });
    var _
}(window, jQuery);
var eqxiu = function () {
    function a(a, d) {
        for (var e, f = 0, g = n._pageData.length; g > f; f++) a == n._pageData[f].id && (e = n._pageData[f].num);
        if (e || (e = a), d) {
            if (1 == e) return;
            $(n.$currentPage).removeClass("z-current"), n.$currentPage = $(n.$currentPage).siblings(".main-page").find("#page" + e).parent().addClass("z-current")
        } else if ("10" != n._scrollMode) {
            C = !0;
            var h = $(n.$currentPage).find(".m-img").attr("id").substring(4),
                i = $(n.$currentPage).siblings(".main-page").find("#page" + e);
            if (!i) return;
            n.$activePage = $(i).parent(".main-page").get(0), h > e ? b() : e > h && c()
        } else flipBookScroll(a)
    }

    function b(a) {
        if (!(w && 2 == a || x && 1 == a)) if ("10" != n._scrollMode) {
            var b = 0;
            o();
            var c = setInterval(function () {
                b += 2, "0" == n._scrollMode || "1" == n._scrollMode || "2" == n._scrollMode || "6" == n._scrollMode || "7" == n._scrollMode || "8" == n._scrollMode || "11" == n._scrollMode || "12" == n._scrollMode || "13" == n._scrollMode || "14" == n._scrollMode || "15" == n._scrollMode ? I = b : ("3" == n._scrollMode || "4" == n._scrollMode || "5" == n._scrollMode || "9" == n._scrollMode) && (H = b), p(), b >= 21 && (clearInterval(c), q())
            }, 1)
        } else $(document).trigger("bookFlipPre")
    }

    function c(a) {
        if (!(w && 2 == a || x && 1 == a)) if ("10" != n._scrollMode) {
            u = !1;
            var b = 0;
            "block" == $("body .boards-panel").css("display") && ($("body .boards-panel").hide(), $("body .z-current").show()), o();
            var c = setInterval(function () {
                b -= 2, "0" == n._scrollMode || "1" == n._scrollMode || "2" == n._scrollMode || "6" == n._scrollMode || "7" == n._scrollMode || "8" == n._scrollMode || "11" == n._scrollMode || "12" == n._scrollMode || "13" == n._scrollMode || "14" == n._scrollMode || "15" == n._scrollMode ? I = b : ("3" == n._scrollMode || "4" == n._scrollMode || "5" == n._scrollMode || "9" == n._scrollMode) && (H = b), p(), -21 >= b && (clearInterval(c), q(), B || n.$activePage || clearInterval(z))
            }, 1)
        } else $(document).trigger("bookFlipNext")
    }

    function d() {
        z = setInterval(function () {
            10 === n._scrollMode || J || c()
        }, v)
    }

    function e() {
        clearInterval(z)
    }

    function f() {
        n.$activePage = n._$pages.last().get(0), n._$pages.parent().find(".z-current").removeClass("z-current"), n._$pages.last().addClass("z-current")
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
        n._$pages.parent().find(".z-current").removeClass("z-current"), a ? (n.$activePage = n._$pages.last().prev().get(0), n._$pages.last().prev().addClass("z-current")) : (n.$activePage = n._$pages.last().get(0), n._$pages.last().addClass("z-current"))
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
        O = function (a, b, c, e) {
            function f(a, b, c) {
                for (var d = ["", "webkit", "moz"], e = 0, f = d.length; f > e; e++) {
                    0 != e || mobilecheck() || (b = b.substring(0, 1).toLowerCase() + b.substring(1, b.length));
                    var g = c instanceof Array ? c[e] : c,
                        h = d[e] + b;
                    a[h] = g
                }
            }

            function g(a, b, c) {
                for (var d = ["", "-webkit-", "-moz-"], e = 0; e < d.length; e++) a.css(d[e] + b, c)
            }

            function h(a) {
                var b;
                return b = $("#inside_" + a, ".phone-view").length ? $("#inside_" + a, ".phone-view") : $("#inside_" + a)
            }

            function i() {
                n._isDisableFlipPage = !0;
                var a;
                "0" == b || "1" == b || "2" == b || "6" == b || "9" == b || "11" == b || "12" == b ? (a = I > 0 ? -t : t, g($(n.$activePage), "transform", "translateY(" + a + "px)"), g($(n.$currentPage), "transform", "translateY(0) scale(1)")) : ("3" == b || "5" == b) && (a = H > 0 ? -s : s, g($(n.$activePage), "transform", "translateX(" + a + "px)"), g($(n.$currentPage), "transform", "translateX(0) scale(1)")), setTimeout(function () {
                    $(n.$currentPage).attr("style", ""), $(n.$activePage).attr("style", ""), $(n.$activePage).removeClass("z-active z-move"), n._isDisableFlipPage = !1
                }, 500)
            }

            function j() {
                if (Math.abs(I) > Math.abs(H) && completeEffect($(n.$currentPage))) if (I > 0) {
                    if (n._isDisableFlipPrevPage) return;
                    K || L ? (K = !1, L = !1, aa(!0), ba(!0, "bottom center", "translateY", t)) : ca(!0, "translateY", t, I, n._scrollMode)
                } else if (0 > I) {
                    if (n._isDisableFlipNextPage) return;
                    !K || L ? (K = !0, L = !1, aa(!1), ba(!1, "top center", "translateY", t)) : ca(!1, "translateY", t, I, n._scrollMode)
                }
            }

            function k() {
                Math.abs(I) > Math.abs(H) && Math.abs(I) > 20 ? (da("translateY", I, t, n._scrollMode), $(document).trigger("flipend")) : (n._isDisableFlipPage = !1, i())
            }

            function l() {
                if (Math.abs(H) > Math.abs(I) && completeEffect($(n.$currentPage))) if (H > 0) {
                    if (n._isDisableFlipPrevPage) return;
                    K || L ? (K = !1, L = !1, aa(!0), ba(!0, "center right", "translateX", s)) : ca(!0, "translateX", s, H, n._scrollMode)
                } else if (0 > H) {
                    if (n._isDisableFlipNextPage) return;
                    !K || L ? (K = !0, L = !1, aa(!1), ba(!1, "center left", "translateX", s)) : ca(!1, "translateX", s, H, n._scrollMode)
                }
            }

            function m() {
                Math.abs(H) > Math.abs(I) && Math.abs(H) > 20 ? (da("translateX", H, s, n._scrollMode), $(document).trigger("flipend")) : (n._isDisableFlipPage = !1, i())
            }

            function r() {
                if (Math.abs(H) > Math.abs(I) && completeEffect($(n.$currentPage))) if (H > 0) {
                    if (n._isDisableFlipPrevPage) return;
                    K || L ? (K = !1, L = !1, aa(!0), s = D ? window.innerWidth : $(".nr").width(), ba(!0, "", "translateX", s)) : ca(!0, "translateX", s, H, n._scrollMode)
                } else if (0 > H) {
                    if (n._isDisableFlipNextPage) return;
                    !K || L ? (K = !0, L = !1, aa(!1), s = D ? window.innerWidth : $(".nr").width(), ba(!1, "", "translateX", s)) : ca(!1, "translateX", s, H, n._scrollMode)
                }
            }

            function u() {
                Math.abs(H) > Math.abs(I) && Math.abs(H) > 20 ? (da("translateX", H, s, n._scrollMode), $(document).trigger("flipend")) : (n._isDisableFlipPage = !1, i())
            }

            function z() {
                if (Math.abs(I) > Math.abs(H) && completeEffect($(n.$currentPage))) if (I > 0) {
                    if (n._isDisableFlipPrevPage) return;
                    K || L ? (K = !1, L = !1, aa(!0), t = D ? window.innerHeight : $(".nr").height(), ba(!0, "", "translateY", t)) : ca(!0, "translateY", t, I, n._scrollMode)
                } else if (0 > I) {
                    if (n._isDisableFlipNextPage) return;
                    !K || L ? (K = !0, L = !1, aa(!1), t = D ? window.innerHeight : $(".nr").height(), ba(!1, "", "translateY", t)) : ca(!1, "translateY", t, I, n._scrollMode)
                }
            }

            function O() {
                Math.abs(I) > Math.abs(H) && Math.abs(I) > 20 ? (da("translateY", I, t, n._scrollMode), $(document).trigger("flipend")) : (n._isDisableFlipPage = !1, i())
            }

            function P() {
                if (Math.abs(I) > Math.abs(H) && completeEffect($(n.$currentPage))) if (I > 0) {
                    if (n._isDisableFlipNextPage) return;
                    (!K || L) && (K = !0, L = !1, n.$activePage && $(n.$activePage).removeClass("z-move z-active"), aa(!0), f(n.$activePage.style, "Transform", "rotateX(90deg) translateY(-" + t / 2 + "px) translateZ(" + t / 2 + "px)"), f(ea.get(0).style, "Perspective", "700px"), f(ea.get(0).style, "TransformStyle", "preserve-3d")), n.$activePage && n.$activePage.classList.contains("main-page") && ($(n.$activePage).addClass("z-active z-move").trigger("active").css("zIndex", 1), f(n.$currentPage.style, "Transform", "rotateX(-" + I / t * 90 + "deg) translateY(" + I / 2 + "px) translateZ(" + I / 2 + "px)"), f(n.$activePage.style, "Transform", "rotateX(" + (90 - I / t * 90) + "deg) translateY(" + (-(t / 2) + I / 2) + "px) translateZ(" + (t / 2 - I / 2) + "px)"))
                } else if (0 > I) {
                    if (n._isDisableFlipNextPage) return;
                    (!K || L) && (K = !0, L = !1, n.$activePage && $(n.$activePage).removeClass("z-move z-active"), aa(!1), f(n.$activePage.style, "Transform", "rotateX(-90deg) translateY(-" + t / 2 + "px) translateZ(-" + t / 2 + "px)"), f(ea.get(0).style, "Perspective", "700px"), f(ea.get(0).style, "TransformStyle", "preserve-3d")), n.$activePage && n.$activePage.classList.contains("main-page") ? ($(n.$activePage).addClass("z-active z-move").trigger("active").css("zIndex", 0), f(n.$currentPage.style, "Transform", "rotateX(" + -I / t * 90 + "deg) translateY(" + I / 2 + "px) translateZ(" + -I / 2 + "px)"), f(n.$activePage.style, "Transform", "rotateX(" + (-90 - I / t * 90) + "deg) translateY(" + (t / 2 + I / 2) + "px) translateZ(" + (t / 2 + I / 2) + "px)")) : (f(n.$currentPage.style, "Transform", "translateX(0px) scale(1)"), n.$activePage = null)
                }
            }

            function Q() {
                Math.abs(I) > Math.abs(H) && Math.abs(I) > 20 ? (I > 0 ? f(n.$currentPage.style, "Transform", "rotateX(-90deg) translateY(" + t / 2 + "px) translateZ(" + t / 2 + "px)") : f(n.$currentPage.style, "Transform", "rotateX(90deg) translateY(-" + t / 2 + "px) translateZ(" + t / 2 + "px)"), f(n.$currentPage.style, "zIndex", "0"), f(n.$activePage.style, "Transform", "rotateX(0deg) translateY(0px) translateZ(0px)"), f(n.$activePage.style, "zIndex", "2"), $(document).trigger("flipend")) : (f(n.$currentPage.style, "Transition", "none"), f(n.$activePage.style, "Transition", "none"), n._isDisableFlipPage = !1, i())
            }

            function R() {
                if (Math.abs(I) > Math.abs(H) && completeEffect($(n.$currentPage))) if (I > 0) {
                    if (n._isDisableFlipNextPage) return;
                    (!K || L) && (K = !0, L = !1, n.$activePage && $(n.$activePage).removeClass("z-move z-active"), aa(!0), g(ea, "perspective", "700px"), g(ea, "transform-style", "preserve-3d"), f(n.$activePage.style, "TransformOrigin", "top"), f(n.$activePage.style, "Transform", "rotateX(90deg)")), n.$activePage && n.$activePage.classList.contains("main-page") && ($(n.$activePage).addClass("z-active z-move").trigger("active"), f(n.$activePage.style, "Transform", "rotateX(" + (90 - I / t * 90) + "deg) "))
                } else if (0 > I) {
                    if (n._isDisableFlipNextPage) return;
                    (!K || L) && (K = !0, L = !1, n.$activePage && $(n.$activePage).removeClass("z-move z-active"), aa(!1), f(n.$activePage.style, "TransformOrigin", "bottom"), f(n.$activePage.style, "Transform", "rotateX(-90deg)"), g(ea, "perspective", "700px"), g(ea, "transform-style", "preserve-3d")), n.$activePage && n.$activePage.classList.contains("main-page") ? ($(n.$activePage).addClass("z-active z-move").trigger("active"), f(n.$activePage.style, "Transform", "rotateX(" + (-90 - I / t * 90) + "deg) ")) : (f(n.$currentPage.style, "Transform", "translateX(0px) scale(1)"), n.$activePage = null)
                }
            }

            function S() {
                Math.abs(I) > Math.abs(H) && Math.abs(I) > 20 ? (I > 0 ? f(n.$activePage.style, "Transform", "rotateX(0deg)") : f(n.$activePage.style, "Transform", "rotateX(0deg)"), $(document).trigger("flipend")) : (f(n.$currentPage.style, "Transition", "none"), f(n.$activePage.style, "Transition", "none"), n._isDisableFlipPage = !1, i())
            }

            function T() {
                if (Math.abs(I) > Math.abs(H) && completeEffect($(n.$currentPage))) {
                    if (I > 0) {
                        if (n._isDisableFlipPrevPage) return;
                        (K || L) && (K = !1, L = !1, n.$activePage && (n.$activePage.classList.remove("z-active"), n.$activePage.classList.remove("z-move")), aa(!0), n.$activePage.style.zIndex = 2, n.$activePage && n.$activePage.classList.contains("main-page") && (n.$activePage.classList.add("z-active"), n.$activePage.classList.add("z-move")), n.$activePage.style.opacity = 0)
                    } else if (0 > I) {
                        if (n._isDisableFlipNextPage) return;
                        (!K || L) && (K = !0, L = !1, n.$activePage && (n.$activePage.classList.remove("z-active"), n.$activePage.classList.remove("z-move")), aa(!1), n.$activePage.style.zIndex = 2, n.$activePage && n.$activePage.classList.contains("main-page") && (n.$activePage.classList.add("z-active"), n.$activePage.classList.add("z-move")), n.$activePage.style.opacity = 0)
                    }
                    var a = Math.abs(I) / t * 1.3;
                    n.$activePage.style.opacity = a.toFixed(1), a.toFixed(3) <= 1 && g($(n.$activePage), "transform", "scale(" + a.toFixed(3) + ")")
                }
            }

            function U() {
                Math.abs(I) > Math.abs(H) && Math.abs(I) > 20 ? (g($(n.$activePage), "transform", "scale(1)"), n.$activePage.style.opacity = 1, $(document).trigger("flipend")) : (f(n.$currentPage.style, "Transition", "none"), f(n.$activePage.style, "Transition", "none"), n._isDisableFlipPage = !1, i())
            }

            function V() {
                if (Math.abs(I) > Math.abs(H) && completeEffect($(n.$currentPage))) if (I > 0) {
                    if (n._isDisableFlipPrevPage) return;
                    (K || L) && (K = !1, L = !1, n.$activePage && (n.$activePage.classList.remove("z-active"), n.$activePage.classList.remove("z-fade-in"), n.$activePage.classList.remove("z-move")), aa(!0), n.$currentPage.style.zIndex = 1, n.$activePage.style.zIndex = 2, n.$activePage && n.$activePage.classList.contains("main-page") && (n.$activePage.classList.add("z-active"), n.$activePage.classList.add("z-fade-in"), n.$activePage.classList.add("z-move")))
                } else if (0 > I) {
                    if (n._isDisableFlipNextPage) return;
                    (!K || L) && (K = !0, L = !1, n.$activePage && (n.$activePage.classList.remove("z-active"), n.$activePage.classList.remove("z-fade-in"), n.$activePage.classList.remove("z-move")), aa(!1), n.$currentPage.style.zIndex = 1, n.$activePage && n.$activePage.classList.contains("main-page") && (n.$activePage.style.zIndex = 2, n.$activePage.classList.add("z-active"), n.$activePage.classList.add("z-fade-in"), n.$activePage.classList.add("z-move")))
                }
            }

            function W() {
                Math.abs(I) > Math.abs(H) && Math.abs(I) > 20 ? setTimeout(function () {
                    $(document).trigger("flipend")
                }, 1600) : (n._isDisableFlipPage = !1, i())
            }

            function X() {
                if (Math.abs(H) > Math.abs(I) && completeEffect($(n.$currentPage))) if (H > 0) {
                    if (n._isDisableFlipPrevPage) return;
                    K || L ? (K = !1, L = !1, n.$activePage && (n.$activePage.classList.remove("z-active"), n.$activePage.classList.remove("z-move")), aa(!0), n.$activePage && n.$activePage.classList.contains("main-page") && (n.$activePage.classList.add("z-active"), n.$activePage.classList.add("z-move"), g($(n.$activePage), "Transform", "scale(0.3) translateX(0) translateZ(-" + t + "px) rotateY(45deg)"), n.$activePage.style.zIndex = "0"), g(ea, "perspective", "1000px"), n.$currentPage.style.zIndex = "100") : n.$activePage && (s / 4 >= H ? g($(n.$currentPage), "Transform", "translateX(" + H + "px)") : g($(n.$currentPage), "Transform", "translateX(" + 1.5 * H + "px) scale(" + ((5 * s / 4 - H) / s).toFixed(3) + ") rotateY(" + H / s * 45 + "deg) translateZ(-" + (H - s / 4) + "px)"))
                } else if (0 > H) {
                    if (n._isDisableFlipNextPage) return;
                    !K || L ? (K = !0, L = !1, n.$activePage && (n.$activePage.classList.remove("z-active"), n.$activePage.classList.remove("z-move")), aa(!1), n.$activePage && n.$activePage.classList.contains("main-page") && (n.$activePage.classList.add("z-active"), n.$activePage.classList.add("z-move"), g($(n.$activePage), "Transform", "scale(0.3) translateX(" + (s + 300) + "px) translateZ(-" + t + "px) rotateY(-45deg)"), n.$activePage.style.zIndex = "0"), g(ea, "perspective", "1000px"), n.$currentPage.style.zIndex = "100") : n.$activePage && (H >= -s / 4 ? g($(n.$currentPage), "Transform", "translateX(" + H + "px)") : g($(n.$currentPage), "Transform", "translateX(" + 1.5 * H + "px) scale(" + ((5 * s / 4 + H) / s).toFixed(3) + ") rotateY(" + H / s * 45 + "deg) translateZ(" + (H + s / 4) + "px)"), g($(n.$activePage), "Transform", "scale(" + (.3 - (H + s / 4) / s).toFixed(3) + ") translateX(" + (-H - s / 4 + 200) + "px) translateZ(" + (-H - 3 * s / 4) + "px) rotateY(-" + (45 + (H + s / 4) / s * 45) + "deg)"))
                }
            }

            function Y() {
                Math.abs(H) > Math.abs(I) && Math.abs(H) > 20 ? (H > 0 ? (n.$currentPage.style.webkitTransformOrigin = "left", n.$currentPage.style.webkitTransform = "translateX(0) translateZ(-" + t + "px) rotateY(0) scale(0.2)", n.$activePage.style.webkitTransform = "translateX(0) translateZ(0) rotateY(0) scale(1)", n.$currentPage.style.zIndex = "0", n.$activePage.style.zIndex = "1") : (n.$currentPage.style.webkitTransformOrigin = "right", n.$currentPage.style.webkitTransform = "translateX(" + s + "px) translateZ(-" + t + "px) rotateY(0) scale(0.2)", n.$activePage.style.webkitTransform = "translateX(0) translateZ(0) rotateY(0) scale(1)", n.$activePage.style.zIndex = "1", n.$currentPage.style.zIndex = "0"), $(document).trigger("flipend")) : (f(n.$currentPage.style, "Transition", "none"), f(n.$activePage.style, "Transition", "none"), n._isDisableFlipPage = !1, i())
            }

            function Z() {
                if (Math.abs(I) > Math.abs(H) && completeEffect($(n.$currentPage))) {
                    if (I > 0) {
                        if (n._isDisableFlipPrevPage) return;
                        (K || L) && (K = !1, L = !1, n.$activePage && (n.$activePage.classList.remove("z-active"), n.$activePage.classList.remove("z-move")), aa(!0), n.$activePage && n.$activePage.classList.contains("main-page") && ($(n.$activePage).addClass("z-active z-move"), $(n.$activePage).css({
                            zIndex: 0,
                            opacity: 1
                        })), $(n.$currentPage).css({
                            opacity: 1
                        }), $(n.$activePage).css({
                            zIndex: 0,
                            opacity: 1
                        }), g($(n.$activePage), "transform", "translateY(0)"), g($(n.$currentPage), "transform-origin", "0% 0% 0px"))
                    } else if (0 > I) {
                        if (n._isDisableFlipNextPage) return;
                        (!K || L) && (K = !0, L = !1, n.$activePage && (n.$activePage.classList.remove("z-active"), n.$activePage.classList.remove("z-move")), aa(!1), n.$activePage && n.$activePage.classList.contains("main-page") && (n.$activePage.classList.add("z-active"), n.$activePage.classList.add("z-move"), $(n.$activePage).css({
                            zIndex: 0,
                            opacity: 1
                        })), $(n.$currentPage).css({
                            opacity: 1
                        }), $(n.$activePage).css({
                            zIndex: 0,
                            opacity: 1
                        }), g($(n.$activePage), "transform", "translateY(0)"), g($(n.$currentPage), "transform-origin", "0% 0% 0px"))
                    }
                    n.$activePage && (g($(n.$currentPage), "transform-origin", "0% 0% 0px"), g($(n.$currentPage), "transform", "rotate(" + Math.abs(I) / t * 90 + "deg)"), n.$currentPage.style.opacity = ((t - Math.abs(I)) / t).toFixed(1))
                }
            }

            function _() {
                Math.abs(I) > Math.abs(H) && Math.abs(I) > 20 ? (g($(n.$currentPage), "transform", "translateY(" + t + "px) rotate(" + Math.abs(I) / t * 90 + "deg)"), $(n.$currentPage).css({
                    opacity: .5
                }), $(document).trigger("flipend")) : (f(n.$currentPage.style, "Transition", "none"), f(n.$activePage.style, "Transition", "none"), n._isDisableFlipPage = !1, i())
            }

            function aa(a) {
                C || (a ? n.$currentPage.previousElementSibling && n.$currentPage.previousElementSibling.classList.contains("main-page") ? n.$activePage = n.$currentPage.previousElementSibling : B ? n.$activePage = n._$pages.last().get(0) : n.$activePage = !1 : n.$currentPage.nextElementSibling && n.$currentPage.nextElementSibling.classList.contains("main-page") ? n.$activePage = n.$currentPage.nextElementSibling : B ? n.$activePage = n._$pages.first().get(0) : n.$activePage = !1)
            }

            function ba(a, b, c, d) {
                if (n.$activePage && (n.$activePage.classList.remove("z-active"), n.$activePage.classList.remove("z-move")), n.$activePage && n.$activePage.classList.contains("main-page")) {
                    n.$activePage.classList.add("z-active"), n.$activePage.classList.add("z-move");
                    var e = a ? "-" : "";
                    n.$activePage.style.webkitTransition = "none", n.$activePage.style.webkitTransform = c + "(" + e + d + "px)", n.$activePage.style.mozTransition = "none", n.$activePage.style.mozTransform = c + "(" + e + d + "px)", n.$activePage.style.transition = "none", n.$activePage.style.transform = c + "(" + e + d + "px)", $(n.$activePage).trigger("active"), b && g($(n.$currentPage), "transform-origin", b)
                } else f(n.$currentPage.style, "Transform", c + "(0px) scale(1)")
            }

            function ca(a, b, c, d, e) {
                if (n.$activePage) {
                    var f = a ? "-" : "";
                    g($(n.$activePage), "transform", b + "(" + f + (c - Math.abs(d)) + "px)"), "1" == e || "3" == e ? g($(n.$currentPage), "transform", "scale(" + ((c - Math.abs(d)) / t).toFixed(3) + ")") : ("5" == e || "11" == e) && g($(n.$currentPage), "transform", b + "(" + d + "px)")
                }
            }

            function da(a, b, c, d) {
                if ("1" == d || "3" == d) g($(n.$currentPage), "transform", "scale(0.2)");
                else if ("5" == d || "11" == d) {
                    var e = b > 0 ? "" : "-";
                    g($(n.$currentPage), "transform", a + "(" + e + c + "px)")
                } else g($(n.$currentPage), "transform", "scale(1)");
                g($(n.$activePage), "transform", a + "(0px)")
            }

            this._$app = a, this._$pages = this._$app.find(".main-page"), this.$currentPage = this._$pages.eq(0), this.$activePage = null, this._isInitComplete = !1, this._isDisableFlipPage = !1, this._isDisableFlipPrevPage = !1, this._isDisableFlipNextPage = !1, this._scrollMode = b, this._pageData = c, this.pageData = e, b = b, this._isforbidHandFlip = e.obj.property.forbidHandFlip, n = this, s = D || E ? window.innerWidth : a.width(), t = D || E ? window.innerHeight : a.height();
            var ea = $("#con"),
                fa = !1;
            ("8" == b || "9" == b) && (N = .7, M = 800), 0 == b || 1 == b || 2 == b || 6 == b || 7 == b || 8 == b || 11 == b || 12 == b ? x = !0 : (3 == b || 4 == b || 5 == b || 10 == b) && (w = !0), x ? (y = $(".ctrl_panel_dir .ctrl-down"), $nextCtrl = $(".ctrl_panel_dir .ctrl-up")) : w && (y = $(".ctrl_panel_dir .ctrl-right"), $nextCtrl = $(".ctrl_panel_dir .ctrl-left")), e.obj.property.hasOwnProperty("triggerLoop") || (e.obj.property.triggerLoop = !0), B = e.obj.property.triggerLoop, e.obj.property.autoFlip && (v = 1e3 * e.obj.property.autoFlipTime, d());
            var ga;
            if (c[0].elements && c[0].elements.length) for (var ha = 0; ha < c[0].elements.length; ha++) {
                ga || (eqShow.shakeTrigger(c, n.$currentPage), ga = !0);
                var ia = h(c[0].elements[ha].id);
                eqxCommon.bindTrigger(ia, c[0].elements[ha])
            }
            if (function () {
                    A.on("scroll.elasticity", function (a) {
                        a.preventDefault()
                    }).on("touchmove.elasticity", function (a) {
                        a.preventDefault()
                    }), A.delegate("img", "mousemove", function (a) {
                        a.preventDefault()
                    })
                }(), "10" != b) {
                var ja = !1;
                n._$app.on("mousedown touchstart", function (a) {
                    n._isforbidHandFlip || (o(a), ja = !0)
                }).on("mousemove touchmove", function (a) {
                    n._isforbidHandFlip || ja && p(a)
                }).on("mouseup touchend mouseleave", function (a) {
                    n._isforbidHandFlip || (q(a), ja = !1)
                })
            } else turnBook(e);
            o = function (a) {
                fa = !1, D && a && (a = event), n._isDisableFlipPage || (n.$currentPage = n._$pages.filter(".z-current").get(0), C || (n.$activePage = null), n.$currentPage && completeEffect($(n.$currentPage)) && (J = !0, K = !1, L = !0, H = 0, I = 0, a && "mousedown" == a.type ? (F = a.pageX, G = a.pageY) : a && "touchstart" == a.type && (F = a.touches ? a.touches[0].pageX : a.originalEvent.touches[0].pageX, G = a.touches ? a.touches[0].pageY : a.originalEvent.touches[0].pageY), n.$currentPage.classList.add("z-move"), f(n.$currentPage.style, "Transition", "none"), "12" == n._scrollMode && (n.$currentPage.style.zIndex = 3)))
            }, p = function (a) {
                D && a && (a = event), J && n._$pages.length > 1 && (a && "mousemove" == a.type ? (H = a.pageX - F, I = a.pageY - G) : a && "touchmove" == a.type && (H = (a.touches ? a.touches[0].pageX : a.originalEvent.touches[0].pageX) - F, I = (a.touches ? a.touches[0].pageY : a.originalEvent.touches[0].pageY) - G), !fa && (Math.abs(H) > 20 || Math.abs(I) > 20) && (fa = !0), "0" == n._scrollMode || "2" == n._scrollMode || "1" == n._scrollMode || "15" == n._scrollMode ? j() : "4" == n._scrollMode || "3" == n._scrollMode ? l() : "5" == n._scrollMode ? r() : "6" == n._scrollMode ? P() : "7" == n._scrollMode ? R() : "8" == n._scrollMode ? T() : "9" == n._scrollMode ? X() : "11" == n._scrollMode ? z() : "12" == n._scrollMode ? Z() : "13" == n._scrollMode ? V() : "14" == n._scrollMode && V())
            }, q = function (a) {
                if (J && completeEffect($(n.$currentPage))) if (J = !1, n.$activePage) {
                    n._isDisableFlipPage = !0;
                    var b;
                    b = "6" == n._scrollMode || "7" == n._scrollMode ? "cubic-bezier(0,0,0.99,1)" : "12" == n._scrollMode ? "cubic-bezier(.17,.67,.87,.13)" : "linear", n.$currentPage.style.webkitTransition = "-webkit-transform " + N + "s " + b, n.$activePage.style.webkitTransition = "-webkit-transform " + N + "s " + b, n.$currentPage.style.mozTransition = "-moz-transform " + N + "s " + b, n.$activePage.style.mozTransition = "-moz-transform " + N + "s " + b, n.$currentPage.style.transition = "transform " + N + "s " + b, n.$activePage.style.transition = "transform " + N + "s " + b, "0" == n._scrollMode || "2" == n._scrollMode || "1" == n._scrollMode || "15" == n._scrollMode ? k() : "4" == n._scrollMode || "3" == n._scrollMode ? m() : "5" == n._scrollMode ? u() : "6" == n._scrollMode ? Q() : "7" == n._scrollMode ? S() : "8" == n._scrollMode ? U() : "9" == n._scrollMode ? Y() : "11" == n._scrollMode ? O() : "12" == n._scrollMode ? _() : "13" == n._scrollMode ? W() : "14" == n._scrollMode && W();
                    var c = $(n.$activePage).find(".m-img").attr("id").replace("page", "") - 1;
                    n._pageData[c].properties && n._pageData[c].properties.longPage && $(document).trigger("clearTouchPos"), $(n.$activePage).find("li.comp-resize").each(function (a) {
                        for (var b = 0; b < n._pageData[c].elements.length; b++) if (n._pageData[c].elements[b].id == parseInt($(this).attr("id").substring(7), 10)) {
                            eqxCommon.animation($(this), n._pageData[c].elements[b], "view", n._pageData[c].properties);
                            var d = h(n._pageData[c].elements[b].id);
                            eqxCommon.bindTrigger(d, n._pageData[c].elements[b])
                        }
                    });
                    for (var d = 0; d < n._pageData.length; d++) n._pageData[d].effObj && (n._pageData[d].effObj.pause = !0);
                    n._pageData[c].effObj && n._pageData[c].effObj.startPlay(), eqShow.setPageHis(n._pageData[c].id)
                } else n.$currentPage.classList.remove("z-move");
                C = !1
            }, $(document).on("flipend", function (a) {
                completeEffect($(n.$activePage)) || $("#audio_btn").css("opacity", 0);
                var d = $("#report0"),
                    g = $(n.$activePage).find(".m-img").attr("id").substring(4),
                    h = [];
                c = n._pageData, c[g - 1].elements && c[g - 1].elements.length && (h = c[g - 1].elements, $.each(h, function (a, b) {
                    "d" == b.type && eqShow.getShowCount(e.obj.id).then(function (a) {
                        var c = eqShow.fixedNum(a);
                        $("#" + b.id).find(".counter-number").text(c)
                    })
                })), eqShow.clearTyperText(c[g - 1]), setTimeout(function () {
                    f(n.$currentPage.style, "Transition", "none"), $(n.$activePage).removeClass("z-active z-move").addClass("z-current"), $(n.$currentPage).removeClass("z-current z-move"), n._isDisableFlipPage = !1, n.$currentPage = $(n.$activePage).trigger("current"), $(n.$currentPage).trigger("hide"), utilSound.pause(), d.length && d.remove(), ("8" == b || "9" == b || "12" == b) && ($(n.$currentPage).css("z-index", "1"), $(".main-page").attr("style", "")), eqShow.shakeTrigger(c, n.$currentPage), B || (1 == g ? y.removeClass("enabled") : g == n._pageData.length ? $nextCtrl.removeClass("enabled") : (y.addClass("enabled"), $nextCtrl.addClass("enabled"))), window.wechatUtils && wechatUtils.stopWechatSound()
                }, M)
            }), $(document).on("startAutoFlip", function (a) {
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
    function (a, b) {
        function c(a, c) {
            if (!b("#report0").length) {
                var e = [];
                e[0] = '<div id="report0"></div>', e[1] = '<div id="report1"></div>', e[2] = '<div id="report2"><p><img src="' + HB_STATIC + '/view/images/jubao_03.png" width="50px;"></p><h1>请选择举报原因</h1></div>', e[3] = '<div id="report3"><ul id="reportList"></ul></div>', e[4] = '<div id="report4"><a id="reportSubmit" data-event="11203">提交举报</a></div>', b(e[0]).appendTo("#page" + a), b(e[1]).appendTo("#report0");
                for (var f = 2; 4 >= f; f++) b(e[f]).appendTo("#report1");
                d(c)
            }
        }

        function d(a) {
            if (g.length) return void e(g, a);
            var c = PREFIX_S1_URL + "eqs/class/expose_types";
            b.ajax({
                type: "GET",
                url: c,
                xhrFields: {
                    withCredentials: !0
                },
                crossDomain: !0
            }).then(function (b) {
                b.success && (g = b.list, e(g, a))
            })
        }

        function e(a, c) {
            for (var d, e = 0, g = a.length; g > e; e++) {
                var h = '<li value="' + a[e].value + '"><span>' + a[e].name + "</span></li>";
                b(h).appendTo("#reportList")
            }
            var i = b("#reportList").find("li").eq(0);
            i.addClass("active"), d = i.val(), b("#reportList").find("li").click(function (a) {
                b(this).siblings().removeClass("active"), b(this).addClass("active"), d = b(this).val()
            }), b("#reportSubmit").click(function (a) {
                f(c, d)
            }), b("#report0").parent(".m-img").click(function (a) {
                b("#report0").remove()
            }), b("#report0").click(function (a) {
                a.stopPropagation()
            })
        }

        function f(a, c) {
            var d = PREFIX_URL + "eqs/expose",
                e = {
                    sceneId: a,
                    type: c
                };
            b.ajax({
                type: "POST",
                url: d,
                data: b.param(e),
                xhrFields: {
                    withCredentials: !0
                },
                crossDomain: !0
            }).then(function (a) {
                a.success && (b("#report0").remove(), alert("举报成功！"))
            }, function (a) {
                b("#report0").remove()
            })
        }

        a.addReport = function (a, d) {
            var e = '',
                f = b("#page" + a).find(".edit_wrapper").find("ul");
            b(e).appendTo(f).click(function (b) {
                b.stopPropagation(), c(a, d)
            })
        };
        var g = []
    }(window, jQuery), function (window, $) {
    function appendActivityPage(a, b) {
        a.obj.property.activityPageId && (activityPagePromise = $.ajax({
            type: "GET",
            url: PREFIX_S2_URL + "?c=scene&a=getlastpagebg&id=" + a.obj.property.activityPageId,
            crossDomain: !0,
            success: function (a) {
                a.obj && b.push(a.obj)
            }
        }))
    }

    function internationalLastPage(a, b, c) {
        var d = '{"id":"","sceneId":"","num":2,"name":null,"properties":null,"elements":[{"id":439880,"pageId":129810,"sceneId":16060,"num":0,"type":"3","isInput":0,"title":null,"content":null,"status":1,"css":{},"properties":{"bgColor":"#E6E9EE"}},{"id":439881,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"text-align: center;\\"><span style=\\"line-height: 1; background-color: initial;\\"><font size=\\"4\\" color=\\"#888888\\"><b>场景名称</b></font></span></div>","status":1,"css":{"height":"65","zIndex":"10","width":"320","left":"0px","top":"77px"},"properties":{}},{"id":439882,"pageId":129810,"sceneId":16060,"num":1,"type":"4","isInput":0,"title":null,"content":null,"status":1,"css":{"borderRadius":"10px","borderStyle":"solid","zIndex":"9","borderColor":"rgba(0,0,0,1)","paddingTop":"0px","height":"141","backgroundColor":"","color":"","boxShadow":"0px 0px 0px #333333","borderWidth":"0px","width":"142.13709677419354","left":"92px","paddingBottom":"0px","top":"177px"},"properties":{"height":"100px","imgStyle":{"width":142,"height":142,"marginTop":"-0.5px","marginLeft":"0px"},"width":"100px","src":"group1/M00/BA/DA/yq0KA1Rq8COAAYRjAAKU4OVYum0889.jpg"}},{"id":439883,"pageId":129810,"sceneId":16060,"num":1,"type":"4","isInput":0,"title":null,"content":null,"status":1,"css":{"height":"16","zIndex":"11","width":"280","left":"21px","top":"122px"},"properties":{"height":"100px","imgStyle":{"width":280,"height":73,"marginTop":"-24px","marginLeft":"0px"},"width":"100px","src":"' + HB_STATIC + 'view/images/line.png"}},';
        return 100 == a.obj.bizType && isMobile && (d += '{"id":439884,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div id=\\"eqx-share-container\\" style=\\"text-align: center;padding-top: 0;\\"></div>","status":1,"css":{"height":"45","zIndex":"11","width":"280","left":"21px","top":"360px","text-align": "center"},"properties":{"anim":[{"type":20,"direction":0,"duration":"1","delay":"1","countNum":"1"}]}},'), d += '{"id":439885,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"text-align: center;padding-top: 0;\\"><span style=\\"font-size: small; line-height: 1; background-color: initial;\\"><a href=\\"' + PREFIX_S1_URL + "eqs/link?id=16060&amp;url=" + encodeURIComponent(redirectUrl) + '\\" target=\\"_blank\\"><img style=\\"width: 140px;\\" src=\\"' + HB_STATIC + 'assets/images/available-on-the-app-store.png\\"></a></span></div>","status":1,"css":{"borderRadius":"0px","borderStyle":"solid","height":"50","paddingTop":"0px","borderColor":"rgba(222,220,227,1)","zIndex":"12","boxShadow":"0px 0px 0px rgba(200,200,200,0.6)","color":"","backgroundColor":"rgba(255,255,255,0)","borderWidth":"0px","width":"320","left":"1px","paddingBottom":"20px","top":"410px"},"properties":{"anim":{"type":1,"direction":3,"duration":"1","delay":"0.6"}}}]}'
    }

    function eqFreepage(a, b, c) {
        function d(a, b, c) {
            activityPagePromise ? activityPagePromise.done(function () {
                c.list.push(a), parsePage(b, c)
            }).fail(function () {
                c.list.push(a), parsePage(b, c)
            }) : (c.list.push(a), parsePage(b, c))
        }

        var e = '{"id":"","sceneId":"","num":2,"name":null,"properties":null,"elements":[{"id":439880,"pageId":129810,"sceneId":16060,"num":0,"type":"3","isInput":0,"title":null,"content":null,"status":1,"css":{},"properties":{"bgColor":"#E6E9EE"}},{"id":439881,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"text-align: center;\\"><span style=\\"line-height: 1; background-color: initial;\\"><font size=\\"4\\" color=\\"#888888\\"><b>场景名称</b></font></span></div>","status":1,"css":{"height":"65","zIndex":"10","width":"320","left":"0px","top":"77px"},"properties":{}},{"id":439882,"pageId":129810,"sceneId":16060,"num":1,"type":"4","isInput":0,"title":null,"content":null,"status":1,"css":{"borderRadius":"10px","borderStyle":"solid","zIndex":"9","borderColor":"rgba(0,0,0,1)","paddingTop":"0px","height":"141","backgroundColor":"","color":"","boxShadow":"0px 0px 0px #333333","borderWidth":"0px","width":"142.13709677419354","left":"92px","paddingBottom":"0px","top":"177px"},"properties":{"height":"100px","imgStyle":{"width":142,"height":142,"marginTop":"-0.5px","marginLeft":"0px"},"width":"100px","src":"group1/M00/BA/DA/yq0KA1Rq8COAAYRjAAKU4OVYum0889.jpg"}},{"id":439883,"pageId":129810,"sceneId":16060,"num":1,"type":"4","isInput":0,"title":null,"content":null,"status":1,"css":{"height":"16","zIndex":"11","width":"280","left":"21px","top":"122px"},"properties":{"height":"100px","imgStyle":{"width":280,"height":73,"marginTop":"-24px","marginLeft":"0px"},"width":"100px","src":"' + HB_STATIC + 'view/images/line.png"}},{"id":439885,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"text-align: center;padding-top: 0;\\"><span style=\\"font-size: small; line-height: 1; background-color: initial;\\"><a href=\\"' + PREFIX_S1_URL + "index.php?c=scene&a=link&id=16060&amp;url=" + encodeURIComponent(lastpagelink) + '\\" target=\\"_blank\\"><font color=\\"#888888\\">创建一个场景？→</font><font color=\\"#23a3d3\\">' + lastpagetext + '</font></a></span></div>","status":1,"css":{"borderRadius":"0px","borderStyle":"solid","height":"30","paddingTop":"0px","borderColor":"rgba(222,220,227,1)","zIndex":"12","boxShadow":"0px 0px 0px rgba(200,200,200,0.6)","color":"","backgroundColor":"rgba(255,255,255,0)","borderWidth":"0px","width":"320","left":"1px","paddingBottom":"20px","top":"420px"},"properties":{"anim":{"type":1,"direction":3,"duration":"1","delay":"0.6"}}}]}',
            e = '{"id":"","sceneId":"","num":2,"name":null,"properties":null,"elements":[{"id":439880,"pageId":129810,"sceneId":16060,"num":0,"type":"3","isInput":0,"title":null,"content":null,"status":1,"css":{},"properties":{"bgColor":"#E6E9EE"}},{"id":439881,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"text-align: center;\\"><span style=\\"line-height: 1; background-color: initial;\\"><font size=\\"4\\" color=\\"#888888\\"><b>场景名称</b></font></span></div>","status":1,"css":{"height":"65","zIndex":"10","width":"320","left":"0px","top":"77px"},"properties":{}},{"id":439882,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div class=\\"bottom-logo\\" style=\\"text-align: center;cursor:pointer;height:142px;width:142px;border-radius:10px;\\"><em style=\\"color:white;line-height:142px;font-size:120px;\\" class=\\"eqf-eqxiu\\"></em></div>","status":1,"css":{"height":"157","width":"172","left":"77px","top":"170px"},"properties":{}},{"id":439883,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"width:280px;height:1px;background-color:rgba(60,60,60,0.4);cursor:pointer;position:absolute;left:0;-webkit-filter:drop-shadow(0px 1px 0px rgba(60,60,60,0.4));top:12px;\\"></div>","status":1,"css":{"height":"24","width":"280","left":"21px","top":"122px"},"properties":{}},{"id":439885,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"text-align: center;padding-top: 0;\\"><span style=\\"font-size: small; line-height: 1; background-color: initial;\\"><a href=\\"' + PREFIX_S1_URL + "index.php?c=scene&a=link&id=16060&amp;url=" + encodeURIComponent(lastpagelink) + '\\" target=\\"_blank\\"><font color=\\"#888888\\">创建一个场景？→</font><font color=\\"#23a3d3\\">' + lastpagetext + '</font></a></span></div>","status":1,"css":{"borderRadius":"0px","borderStyle":"solid","height":"30","paddingTop":"0px","borderColor":"rgba(222,220,227,1)","zIndex":"12","boxShadow":"0px 0px 0px rgba(200,200,200,0.6)","color":"","backgroundColor":"rgba(255,255,255,0)","borderWidth":"0px","width":"320","left":"1px","paddingBottom":"20px","top":"420px"},"properties":{"anim":{"type":1,"direction":3,"duration":"1","delay":"0.6"}}}]}';
        100 == a.obj.bizType && (e = internationalLastPage(a, b, c));
        var f = '{"id":439882,"pageId":129810,"sceneId":16060,"num":1,"type":"4","isInput":0,"title":null,"content":null,"status":1,"css":{"borderRadius":"10px","borderStyle":"solid","zIndex":"9","borderColor":"rgba(0,0,0,1)","paddingTop":"0px","height":"141","backgroundColor":"","color":"","boxShadow":"0px 0px 0px #333333","borderWidth":"0px","width":"142.13709677419354","left":"92px","paddingBottom":"0px","top":"177px"},"properties":{"height":"100px","imgStyle":{"width":142,"height":142,"marginTop":"-0.5px","marginLeft":"0px"},"width":"100px","src":"group1/M00/BA/DA/yq0KA1Rq8COAAYRjAAKU4OVYum0889.jpg"}}',
            g = '{"id":81395,"pageId":"","sceneId":"","num":1,"type":"4","isInput":0,"title":null,"content":null,"status":1,"css":{"borderRadius":"%","borderStyle":"solid","height":"158","zIndex":"1000","paddingTop":"0px","borderColor":"rgba(0,0,0,1)","boxShadow":"0 0px 0px #333333","color":"#000000","backgroundColor":"white","borderWidth":"0px","width":"158","left":"84px","paddingTop":"11px","paddingLeft":"10px","top":"170px"},"properties":{"height":"100px","imgStyle":{"width":139,"height":136,"marginTop":"0px","marginLeft":"0px"},"width":"100px","src":"group1/M00/01/30/yq0JCFQpOR-AOULFAAFBPO1yzBQ984.jpg"}}',
            h = '{"id":439882,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div class=\\"bottom-logo\\" style=\\"text-align: center;cursor:pointer;height:136px;width:139px;\\"><em style=\\"color:white;line-height:136px;font-size:120px;\\" class=\\"eqf-eqxiu\\"></em></div>","status":1,"css":{"height":"158","width":"158","left":"84px","top":"170px","backgroundColor":"white"},"properties":{}}',
            i = '{"id":81465,"pageId":"","sceneId":"","num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"text-align: center;\\"><font color=\\"#ffffff\\" size=\\"3\\">击此处进行编辑</font></div>","status":1,"css":{"zIndex":"102","height":"65","width":"320","left":"0px","top":"70px"},"properties":{}}',
            j = '{"id":2557867,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div class=\\"logo-shadow1\\" style=\\"text-align: center;cursor:pointer;height:127px;width:220px;transform:rotate(-45deg);-webkit-transform:rotate(-45deg);position:absolute;left:20px;top:56px;\\"></div>","status":1,"css":{"height":"257","width":"257","left":"78px","top":"175px"},"properties":{}}',
            k = '{"id":439883,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"width:280px;height:1px;background-color:rgba(60,60,60,0.4);cursor:pointer;position:absolute;left:0;-webkit-filter:drop-shadow(0px 1px 0px rgba(60,60,60,0.4));top:12px;\\"></div>","status":1,"css":{"height":"24","width":"280","left":"21px","top":"122px"},"properties":{}}';
        if (ad = 1, a.obj.property.lastPageId) customLastPage = !0, $.ajax({
            type: "GET",
            url: PREFIX_S2_URL + "?c=scene&a=getlastpagebg&id=" + a.obj.property.lastPageId,
            crossDomain: !0,
            success: function (c) {
                if (!c.obj) {
                    e = e.replace(/id=16060/, "id=" + a.obj.id);
                    var f = JSON.parse(e);
                    return f.num = a.list.length + 1, f.elements[2].properties.src = a.obj.cover.replace("/strip", ""), f.elements[1].content = f.elements[1].content.replace(/场景名称/, a.obj.name), f.elements[1].properties.height = 65, f.elements[1].height = 65, void d(f, b, a)
                }
                c.obj.sceneId = a.obj.id;
                for (var l, m = 0; m < c.obj.elements.length; m++)"4" != c.obj.elements[m].type || "group1/M00/A5/5E/yq0KA1QmePmAKr7yAAEByp5jyLc752.jpg" != c.obj.elements[m].properties.src && "group1/M00/C5/9D/yq0KA1SH1zuAFgkLAAAFgBR8hJs456.png" != c.obj.elements[m].properties.src && "group1/M00/C5/3F/yq0KA1SHp-2AQZZZAAB-7rIaK6I743.png" != c.obj.elements[m].properties.src && "group1/M00/C5/9D/yq0KA1SH1zuAeQuFAAAFfUkeXDc110.png" != c.obj.elements[m].properties.src || (c.obj.elements.splice(m, 1), m--);
                "group1/M00/61/8A/yq0KA1T2vYSAEgo7AACovQVgHxk048.jpg" != a.obj.cover ? (l = JSON.parse(g), l.properties.src = a.obj.cover.replace("/strip", "")) : l = JSON.parse(h), c.obj.elements.push(l), c.obj.elements.push(JSON.parse(j)), c.obj.elements.push(JSON.parse(k));
                var n = JSON.parse(i);
                n.content = n.content.replace(/击此处进行编辑/, a.obj.name), c.obj.elements.push(n);
                for (var m = 0; m < c.obj.elements.length; m++)"2" === c.obj.elements[m].type ? /http:\/\/service.eqxiu.com\/eqs\/link/.test(c.obj.elements[m].content) && (c.obj.elements[m].content = c.obj.elements[m].content.replace(/;url=.*com"/, ";url=" + encodeURIComponent(redirectUrl) + '"')) : "3" === c.obj.elements[m].type && c.obj.elements[m].properties.imgSrc ? c.obj.elements[m].properties.imgSrc = window.moblieViewImgBg ? window.moblieViewImgBg + c.obj.elements[m].properties.imgSrc : c.obj.elements[m].properties.imgSrc : "4" === c.obj.elements[m].type && c.obj.elements[m].properties.src && (c.obj.elements[m].properties.src = window.moblieViewImgBg ? window.moblieViewImgBg + c.obj.elements[m].properties.src : c.obj.elements[m].properties.src);
                d(c.obj, b, a)
            }
        });
        else {
            e = e.replace(/id=16060/, "id=" + a.obj.id);
            var l = JSON.parse(e);
            l.num = a.list.length + 1, a.obj.cover = window.moblieViewImgBg ? window.moblieViewImgBg + a.obj.cover : a.obj.cover, "group1/M00/00/0D/wKj5L1aog9iANhl8AAAdI0Feqt0377.jpg" != a.obj.cover && (l.elements[2] = JSON.parse(f), l.elements[2].properties.src = a.obj.cover.replace("/strip", "")), l.elements[1].content = l.elements[1].content.replace(/场景名称/, a.obj.name), d(l, b, a)
        }
    }

    function eqDefaultBottomLabel(a, b) {
        var c = '{"id":480292,"pageId":136042,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"text-align: center;transform: none;-webkit-animation: fadeIn 2s ease 1s both;-webkit-animation-play-state: initial;\\"><a href=\\"' + PREFIX_S1_URL + "eqs/link?id=16060&amp;url=" + encodeURIComponent(redirectUrl) + '\\" target=\\"_blank\\" style=\\"font-size: x-small;display:block;line-height: 10px;\\" data-event=\\"1120202\\"><font color=\\"#ffffff\\">' + companyName + '</font></a></div>","status":1,"css":{"zIndex":"1000","height":"20","width":"129","left":"97px","top":"418px","backgroundColor":"rgba(0,0,0,0.6)","borderRadius":"20px"},"properties":{"anim":{"type":0,"direction":0,"duration":2,"delay":"0"}}}';
        ad = 2;
        var d;
        c = c.replace(/id=16060/, "id=" + a.obj.id), d = b[b.length - 1].elements, b[b.length - 1].properties && b[b.length - 1].properties.longPage && (c = c.replace("418px", 486 * b[b.length - 1].properties.longPage - 68 + "px")), b[b.length - 1].elements || (d = b[b.length - 1].elements = []), d.push(JSON.parse(c)), parsePage(b, a)
    }

    function eqCustomBottomLabel(a, b) {
        ad = 2, $.ajax({
            type: "GET",
            url: PREFIX_S2_URL + "?c=scene&a=getlastpagebg&id=" + a.obj.property.bottomLabel.id,
            crossDomain: !0,
            success: function (c) {
                if (!c.obj) return void eqDefaultBottomLabel(a, b);
                var d = c.obj.elements;
                if (b[b.length - 1].properties && b[b.length - 1].properties.longPage) for (var e = b[b.length - 1].properties.longPage - 1, f = 0; f < d.length; f++) d[f].css.top += 486 * e;
                var f = 0;
                for (d.length; f < d.length; f++) {
                    var g = d[f];
                    if (g.sceneId = a.obj.id, g.pageId = b[b.length - 1].id, a.obj.property.bottomLabel.name && a.obj.property.bottomLabel.url && "http://" != a.obj.property.bottomLabel.url) 2 == g.type && g.content.indexOf("EQXIU.COM科技公司") > 0 && (g.content = g.content.replace(/EQXIU.COM科技公司/, '<a href="' + PREFIX_S1_URL + "eqs/link?id=" + a.obj.id + "&amp;url=" + encodeURIComponent(a.obj.property.bottomLabel.url) + '" target=_blank data-event="1120203">' + a.obj.property.bottomLabel.name + "</a>"));
                    else if (a.obj.property.bottomLabel.name) 2 == g.type && g.content.indexOf("EQXIU.COM科技公司") > 0 && (g.content = g.content.replace(/EQXIU.COM科技公司/, a.obj.property.bottomLabel.name));
                    else if (/易企秀技术支持/.test(g.content)) {
                        g.content = '<div style="text-align: center;">' + g.content + "</div>";
                        var h = {
                            zIndex: "1000",
                            height: "33",
                            width: "129",
                            left: "97px"
                        };
                        $.extend(g.css, h)
                    } else 2 == g.type && g.content && (g.content = "");
                    g.css.zIndex = 200, a.list[a.list.length - 1].elements || (a.list[a.list.length - 1].elements = []), a.list[a.list.length - 1].elements.push(g), customLastPage = !0
                }
                parsePage(b, a)
            }
        })
    }

    function eqHideAll(a, b) {
        ad = 0, parsePage(b, a)
    }

    function parsePage(a, b) {
        var c = b.map;
        c && c.wxComponent && $.each(c.wxComponent, function (b, c) {
            $.each(a, function (a, c) {
                c.elements && c.elements.length && $.each(c.elements, function (a, c) {
                    b == c.id && (c.properties.wxSrc = !0)
                })
            })
        }), window.eqxiuSvg ? window.eqxiuSvg.SYMBOLS || (window.eqxiuSvg.SYMBOLS = {}) : window.eqxiuSvg = {
            SYMBOLS: {}
        };
        for (var d = [], e = !1, f = !1, g = {
            bgAudio: b.obj.bgAudio
        }, h = [], i = 1; i <= a.length; i++) a[i - 1].elements && a[i - 1].elements.length && $.each(a[i - 1].elements, function (a, b) {
            if ("h" == b.type && b.properties.type && b.properties.type.indexOf("symbols") >= 0) {
                f = !0;
                var c = b.properties.type.replace(/^symbols\-/, ""),
                    d = HB_STATIC + "view/js/shape/" + c + ".js";
                h.push({
                    url: d,
                    type: "js"
                })
            }
        });
        var j = 0;
        f && (resources.load(h), resources.onReady(function () {
            if (j++, 1 == j) {
                for (var c = 1; c <= a.length; c++) {
                    var f = c;
                    if (a[f - 1].properties && !$.isEmptyObject(a[f - 1].properties) ? a[f - 1].properties.image || a[f - 1].properties.scratch ? scriptLoaded.scratch ? addScratchEffect(a, f) : !
                            function (b) {
                                $.getScript(HB_STATIC + "common/js/scratch_effect.js", function (c, d, e) {
                                    scriptLoaded.scratch = !0, addScratchEffect(g, a, b)
                                })
                            }(f) : a[f - 1].properties.finger ? (d.push({
                            num: f,
                            finger: a[f - 1].properties.finger
                        }), e || (e = !0, $.getScript(HB_STATIC + "common/js/lock_effect.js", function (b, c, e) {
                            lockEffect(g, a, d, $(".m-img").width(), $(".m-img").height())
                        }))) : a[f - 1].properties.fallingObject ? scriptLoaded.fallingObject ? fallingObject(a, f) : !
                            function (b) {
                                $.getScript(HB_STATIC + "common/js/falling_object.js", function (c, d, e) {
                                    scriptLoaded.fallingObject = !0, fallingObject(a, b), 1 == b && eqShow.playVideo(g)
                                })
                            }(f) : a[f - 1].properties.effect ? !
                            function (b) {
                                resources.load(window.eqx[a[b - 1].properties.effect.name].config.resources), resources.onReady(function () {
                                    window[a[b - 1].properties.effect.name].doEffect(g, b, a, renderPage)
                                })
                            }(f) : renderPage(eqShow, f, a) : (renderPage(eqShow, f, a), 1 == f && eqShow.playVideo(g)), c == a.length) {
                        eqxiu.app($(".nr"), b.obj.pageMode, a, b);
                        addEnabledClassToPageCtrl(b);
                        var h = eqShow.getQueryString("toPage");
                        h && eqxiu.pageScroll(h, !0)
                    }
                }
                addReportToLastPage(a, b)
            }
        }));
        for (var k = 1; k <= a.length; k++) {
            if ($('<section class="main-page"><div class="m-img" id="page' + k + '"></div></section>').appendTo(".nr"), 10 == pageMode && ($("#page" + k).parent(".main-page").wrap('<div class="flip-mask" id="flip' + k + '"></div>'), $(".main-page").css({
                    width: $(".nr").width() + "px",
                    height: $(".nr").height() + "px"
                })), a.length > 1 && 14 != pageMode && !b.obj.property.forbidHandFlip && (0 == pageMode || 1 == pageMode || 2 == pageMode || 6 == pageMode || 7 == pageMode || 8 == pageMode || 11 == pageMode || 12 == pageMode || 13 == pageMode || 14 == pageMode ? $('<section class="u-arrow-bottom"><div class="pre-wrap"><div class="pre-box1"><div class="pre1"></div></div><div class="pre-box2"><div class="pre2"></div></div></div></section>').appendTo("#page" + k) : (3 == pageMode || 4 == pageMode || 5 == pageMode || 9 == pageMode || 10 == pageMode) && $('<section class="u-arrow-right"><div class="pre-wrap-right"><div class="pre-box3"><div class="pre3"></div></div><div class="pre-box4"><div class="pre4"></div></div></div></section>').appendTo("#page" + k)), 1 == k && ($(".loading").hide(), $(".main-page").eq(0).addClass("z-current"), a[k - 1].elements && a[k - 1].elements.length && $.each(a[k - 1].elements, function (a, c) {
                    "d" == c.type && eqShow.getShowCount(b.obj.id)
                })), !f && (a[k - 1].properties && !$.isEmptyObject(a[k - 1].properties) ? a[k - 1].properties.image || a[k - 1].properties.scratch ? scriptLoaded.scratch ? addScratchEffect(a, k) : !
                    function (b) {
                        $.getScript(HB_STATIC + "common/js/scratch_effect.js", function (c, d, e) {
                            scriptLoaded.scratch = !0, addScratchEffect(g, a, b)
                        })
                    }(k) : a[k - 1].properties.finger ? (d.push({
                    num: k,
                    finger: a[k - 1].properties.finger
                }), e || (e = !0, $.getScript(HB_STATIC + "common/js/lock_effect.js", function (b, c, e) {
                    lockEffect(g, a, d, $(".m-img").width(), $(".m-img").height())
                }))) : a[k - 1].properties.fallingObject ? scriptLoaded.fallingObject ? a[k - 1].effObj = fallingObject(a, k) : !
                    function (b) {
                        $.getScript(HB_STATIC + "common/js/falling_object.js", function (c, d, e) {
                            scriptLoaded.fallingObject = !0, a[b - 1].effObj = fallingObject(a, b), 1 == b && eqShow.playVideo(g)
                        })
                    }(k) : a[k - 1].properties.effect ? !
                    function (b) {
                        resources.load(window.eqx[a[b - 1].properties.effect.name].config.resources), resources.onReady(function () {
                            a[b - 1].effObj = window[a[b - 1].properties.effect.name].doEffect(g, b, a, renderPage)
                        })
                    }(k) : (renderPage(eqShow, k, a), 1 == k && eqShow.playVideo(g)) : (renderPage(eqShow, k, a), 1 == k && eqShow.playVideo(g)), k == a.length)) {
                eqxiu.app($(".nr"), b.obj.pageMode, a, b);
                addEnabledClassToPageCtrl(b);
                var l = eqShow.getQueryString("toPage");
                l && eqxiu.pageScroll(l, !0)
            }
            if (k == a.length && (isMobile || $("img").on("dragstart", function (a) {
                    a.preventDefault()
                }), !preview)) {
                var m = PREFIX_S1_URL + "index.php?c=scene&a=addpv&id=" + b.obj.id;
                param && (m += "&1=1", m += /\?.*/.test(param) ? "&" + param.substring(1) : /\&.*/.test(param) ? param : "&" + param), m += (/\?/.test(m) ? "&" : "&") + "ad=" + ad, $.ajax({
                    type: "GET",
                    url: m,
                    xhrFields: {
                        withCredentials: !0
                    },
                    crossDomain: !0
                })
            }
        }
        f || addReportToLastPage(a, b)
    }

    function addReportToLastPage(pages, data) {
        if (data.obj.createTime > 14165028e5) {
            if (100 != data.obj.bizType && !data.obj.property.hideEqAd && 1 == data.obj.property.eqAdType) return void addReport(pages.length, data.obj.id);
            100 == data.obj.bizType || data.obj.property.eqAdType || data.obj.property.hideEqAd || data.obj.property.isAdvancedUser || addReport(pages.length, data.obj.id)
        }
        if (100 == data.obj.bizType) {
            var $eqxShareContainer = $("#eqx-share-container");
            with ($eqxShareContainer.length && ($eqxShareContainer.append($('<div class="eqx-share">\n    <a class="eqx-share-btn btn-facebook"><span class="eqx-share-icon icon-facebook"></span></a>\n    <a class="eqx-share-btn btn-twitter"><span class="eqx-share-icon icon-twitter"></span></a>\n    <a class="eqx-share-btn btn-plus"><span class="eqx-share-icon icon-google_plus"></span></a>\n    <a class="eqx-share-btn btn-linkedin"><span class="eqx-share-icon icon-linkedin"></span></a>\n    <a class="eqx-share-btn btn-pinterest"><span class="eqx-share-icon icon-pinterest"></span></a>\n    <a class="addthis_sharing_toolbox"></a>\n</div>')), $(".eqx-share-btn").ShareLink({
                title: data.obj.name,
                text: data.obj.description,
                image: PREFIX_FILE_HOST + data.obj.cover,
                url: window.location.href.split("#")[0],
                class_prefix: "btn-"
            })), document) 0[(getElementsByTagName("head")[0] || body).appendChild(createElement("script")).src = "http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-55c029461a7d08e5"]
        }
    }

    function addEnabledClassToPageCtrl(a) {
        var b, c, d = a.obj.pageMode,
            e = a.obj.property.triggerLoop;
        0 == d || 1 == d || 2 == d || 6 == d || 7 == d || 8 == d || 11 == d || 12 == d ? b = !0 : (3 == d || 4 == d || 5 == d || 10 == d) && (c = !0), setTimeout(function () {
            b ? ($(".ctrl_panel_dir .ctrl-up").addClass("enabled"), e && $(".ctrl_panel_dir .ctrl-down").addClass("enabled")) : c && ($(".ctrl_panel_dir .ctrl-left").addClass("enabled"), e && $(".ctrl_panel_dir .ctrl-right").addClass("enabled"))
        }, 0)
    }

    function addPreviewFooter() {
        var a = eqShow.getUrlParameter("id"),
            b = PREFIX_HOST + "/mobile/fillHome.html?edit=true&id=" + a;
        eqShow.getUrlParameter("preview") && $('<div id="shareFooter" style="background-color: rgba(51, 51, 51, 0.4);border-top: 2px solid rgba(8, 161, 239, 0.4);padding: 10px;position: fixed;bottom: 0;left: 0;right: 0;overflow: scroll;z-index: 10000;height:40px"><div  style="float: left;margin-top: 12px;margin-left: 12px;color:#FFFFFF"><laber ><a style="color:#FFFFFF" href="' + b + '">编辑</a></laber></div><div style="float: right;margin-right: 15px;margin-top:2px;"><button style="width: 80px;height: 32px;background-color: #44cb83;border: 0px;border-radius: 2px;color: #FFFFFF;"><a style="color:#FFFFFF" onclick="wapTitleSet();">分享</a></button></div></div>').appendTo(".nr")
    }

    var redirectUrl, companyName, pageMode, preview, param, ad, customLastPage = !1,
        isMobile = mobilecheck(),
        scriptLoaded = [],
        activityPagePromise = null;
    window.appendLastPage = function (a, b, c, d, e, f) {
        if (pageMode = c, preview = d, param = e, ad = f, 100 == a.obj.bizType ? (redirectUrl = "https://itunes.apple.com/us/app/easyshow-free-h5-sence-slides/id987351120?mt=8", companyName = "Hypefolio") : (redirectUrl = "http://eqxiu.com", companyName = "易企秀技术支持"), addPreviewFooter(), appendActivityPage(a, b), a.obj.createTime > 14165028e5) if (100 == a.obj.bizType) eqFreepage(a, b);
        else if (a.obj.property.hideEqAd) eqHideAll(a, b);
        else {
            if (a.obj.property && a.obj.property.eqAdType) switch (a.obj.property.eqAdType) {
                case 1:
                    return void eqFreepage(a, b);
                case 2:
                    return void eqDefaultBottomLabel(a, b);
                case 3:
                    return void eqCustomBottomLabel(a, b)
            }
            a.obj.property.isAdvancedUser ? a.obj.property && a.obj.property.bottomLabel && a.obj.property.bottomLabel.id ? eqCustomBottomLabel(a, b) : eqDefaultBottomLabel(a, b) : eqFreepage(a, b)
        } else eqHideAll(a, b)
    }, isMobile && $(".nr").css({
        width: "100%",
        height: "100%"
    }), window.wapTitleSet = function () {
        $.get(PREFIX_HOST + "/view/share.html", function (a) {
            $("#wapShareSet").show(), $("#wapShareSet").html(a), $("#shareFooter").hide(), wapShare.init(scene)
        })
    }
}(window, jQuery), function (window, $) {
    function isSample() {
        $("#view_reg").after('<div id="sample_btn">使用该样例</div>')
    }

    function getWechatAuth(a, b) {
        window.weChatUser = {}, window.wxCompData = {};
        return void(a ? completeLoad(b) : getSceneData());
        var d = PREFIX_S1_URL + "eqs/wx/user/cache";
        $.ajax({
            type: "GET",
            url: d,
            xhrFields: {
                withCredentials: !0
            },
            success: function (c) {
                if (200 === c.code) if (c.obj) window.weChatUser = c.obj, a ? (replaceNameAndHeader(b, c.obj), completeLoad(b, !0)) : getSceneData(c.obj);
                else {
                    var d = "";
                    eqShow.getQueryString("userKey") && (d = "?userKey=" + eqShow.getQueryString("userKey")), window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + APPID_WX + "&redirect_uri=" + encodeURIComponent(PREFIX_S1_URL + "eqs/wx/user/info") + "&response_type=code&scope=snsapi_userinfo&state=" + encodeURIComponent("http://" + hostDomain + "/v/" + window.scene.code + d) + "#wechat_redirect"
                } else alert("error")
            },
            error: function (a) {
            },
            crossDomain: !0
        })
    }

    function getSceneData(a) {
        var b = window.viewData;
        if (b) return b.obj = window.scene, replaceNameAndHeader(b, a), void completeLoad(b, !1);
        window.isStatic && window.location.href.indexOf(VIP_HOST) >= 0 && (vipService = !0);
        var c = getRequestUrl(),
            d = {
                type: "GET",
                url: c,
                crossDomain: !0
            };
        window.viewOverflow || vipService || (d.xhrFields = {
            withCredentials: !0
        }), $.ajax(d).done(function (b) {
            b.obj = b.obj || window.scene, replaceNameAndHeader(b, a), completeLoad(b, !1)
        })
    }

    function replaceNameAndHeader(a, b) {
        isWeixin() && a.list && a.list.length && $.each(a.list, function (c, d) {
            d.elements && d.elements.length && $.each(d.elements, function (c, d) {
                "201" == d.type && ("own" == d.properties.type && b && (d.content = b.nickname), "share" == d.properties.type && a.map && a.map.wxComponent && a.map.wxComponent.shareUserName && (d.content = a.map.wxComponent.shareUserName)), "401" == d.type && ("own" == d.properties.type && b && (d.properties.src = b.headimgurl, delete d.properties.imgStyle), "share" == d.properties.type && a.map && a.map.wxComponent && a.map.wxComponent.shareUserHeader && (d.properties.src = a.map.wxComponent.shareUserHeader, delete d.properties.imgStyle))
            })
        })
    }

    function completeLoad(a, b) {
        a.map && a.map.wxComponent && (window.wxCompData = a.map.wxComponent), getCounterValues(a);
        for (var c = !1, d = 0; d < a.list.length; d++) {
            var e = a.list[d];
            if (e.elements) for (var f = 0; f < e.elements.length; f++) if (e.elements[f].type + "" == "m") {
                c = !0;
                break
            }
        }
        if (c) {
            eqShow.parseStart = function () {
                $(document).trigger("parseStart")
            }, $(document).on("parseStart", function () {
                parseJson(a, b)
            });
            var g = document.createElement("script");
            g.type = "text/javascript", g.src = "http://map.qq.com/api/js?v=2.exp&callback=eqShow.parseStart", document.body.appendChild(g)
        } else parseJson(a, b)
    }

    function getCounterValues(a) {
        var b = {
            sceneId: a.obj.id,
            fieldIds: ""
        };
        $.each(a.list, function (a, c) {
            c.elements && $.each(c.elements, function (a, c) {
                "i" === c.type && (b.fieldIds += (b.fieldIds ? "," : "") + c.id)
            })
        }), b.fieldIds && (window.eqShow.counterValues = $.ajax({
            type: "GET",
            url: PREFIX_S1_URL + "index.php?c=scene&a=countervalues",
            data: $.param(b),
            xhrFields: {
                withCredentials: !0
            },
            error: function (a) {
                alert("Connection error")
            },
            crossDomain: !0
        }))
    }

    function getRequestUrl() {
        window.isStatic && window.location.href.indexOf(VIP_HOST) >= 0 && (vipService = !0);
        var a;
        if (preview) a = isNewPreviewLocation ? PREFIX_URL + "m/scene/preview/" + sceneId + ".data" : PREFIX_URL + "m/scene/preview/" + sceneId, branchid && (a += (/\?/.test(a) ? "&" : "?") + "user=" + branchid);
        else if (mobileview) a = PREFIX_URL + "event/9100?p1=" + sceneId;
        else if (window.scene && window.scene.id) if (window.isCheck) a = MAX_SERVER_HOST + "m/eqs/view/page/" + window.scene.id;
        else {
            //var b = window.viewOverflow || vipService ? PREFIX_S2_URL : PREFIX_S6_URL;
            a = API_URL + "scene/view?id=" + window.scene.id;
            var b, c = eqShow.getQueryString("userKey"),
                d = eqShow.getQueryString("cache");
            if (window.viewOverflow || vipService) b = PREFIX_S2_URL;
            else {
                JSON.parse(window.scene.property);
                b = null != c && c.toString().length > 1 || null != d && d.toString().length > 1 ? PREFIX_S1_URL : PREFIX_S6_URL
            }
            a = API_URL + "scene/view?id=8831324"/* + window.scene.id*/, null != c && c.toString().length > 1 && (a += (/\?/.test(a) ? "&" : "?") + "userKey=" + c), null != d && d.toString().length > 1 && (a += (/\?/.test(a) ? "&" : "?") + "cache=" + d)
        } else a = PREFIX_S1_URL + "eqs/v/" + sceneId;
        return window.viewOverflow || vipService || (a += (/\?/.test(a) ? "&" : "?") + "time=" + (new Date).getTime()), a
    }

    function bindShare(data) {
        if (mobilecheck() || tabletCheck()) isWeixin() && wechatConfig.configWeixin(data);
        else if (100 != data.obj.bizType) with (window._bd_share_config = {
            common: {
                bdSnsKey: {},
                bdText: data.obj.name,
                bdSign: "on",
                bdMini: "2",
                bdMiniList: !1,
                bdDesc: data.obj.description ? data.obj.description : "",
                bdUrl: PREFIX_HOST + "/v/" + sceneId,
                bdPic: PREFIX_FILE_HOST + data.obj.cover,
                bdStyle: "0",
                bdSize: "32"
            },
            share: {}
        }, document) 0[(getElementsByTagName("head")[0] || body).appendChild(createElement("script")).src = "http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=" + ~(-new Date / 36e5)]
    }

    function parseJson(a, b) {
        isNewPreviewLocation || window.scene || (document.title = a.obj.name, $("#metaDescription").attr("content", a.obj.name + ", " + a.obj.description + ", 由易企秀免费移动场景应用自营销管家提供技术支持"), $(".scene_title").text(a.obj.name));
        var c = a.obj.cover;
        if (isWeixin()) {
            var d = /\?imageMogr2/,
                e = /.svg/;
            e.test(c) || (c += d.test(c) ? "" : ""), $("#shareImage").find("img").attr("src", PREFIX_FILE_HOST + c)
        }
        bindShare(a), pageMode = a.obj.pageMode;
        var f = [];
        return a.obj.property && (a.obj.property = JSON.parse(a.obj.property) || {}), a.obj.bgAudio && "string" == typeof a.obj.bgAudio && (a.obj.bgAudio = JSON.parse(a.obj.bgAudio) || null), f = a.list, f.length <= 0 ? (alert("此场景不存在!"), void(window.location.href = "http://eqxiu.com")) : void appendLastPage(a, f, pageMode, preview, param, ad)
    }

    var url, preview, mobileview, pageMode, branchid, ad = 0,
        hostDomain = eqShow.getDomain(window.location.href),
        eqxDomain = eqShow.getDomain(PREFIX_HOST),
        h5Domain = eqShow.getDomain(PREFIX_SHOW_HOST);
    $.ajaxSetup({
        cache: !0
    });
    var vipService, isNewPreviewLocation = /[http|https]:\/\/.*\/m\/scene\/preview\//.test(window.location.href);
    url = /[http|https]:\/\/.*\/v\//.test(window.location.href) ? window.location.href.split("/v/")[1] : isNewPreviewLocation ? window.location.href.split("/m/scene/preview/")[1] : window.location.href.split("?sceneId=")[1], window.viewData && (url = scene.code);
    //var sceneId = url.split("#")[0].split("&")[0].split("?")[0];
    var sceneId = "123.html";
    isNewPreviewLocation && (sceneId = sceneId.substring(0, sceneId.indexOf(".html")));
    //var param = url.split(sceneId)[1];
    param = "abc"
    if ((param.indexOf("preview=preview") > 0 || window.preview || isNewPreviewLocation) && (preview = !0), param.indexOf("branchid=") > 0 && (branchid = param.substring(param.indexOf("branchid=") + 9)), param.indexOf("mobileview=mobileview") > 0 && (mobileview = !0), !(mobilecheck() || tabletCheck() && window == window.top)) {
        var getBg = function () {
            $.ajax({
                type: "GET",
                url: PREFIX_S2_URL + "?c=view&a=imagePreview",
                crossDomain: !0
            }).then(function (a) {
                a ? $("body").css("backgroundImage", "url(" + a + ")") : $("body").css("backgroundImage", "url(/view/images/previewbg_spring.jpg)")
            }, function () {
                $("body").css("backgroundImage", "url(/view/images/previewbg_spring.jpg)")
            })
        };
        window.addElmentsForPc = function (a) {
            var b = document.getElementsByTagName("head")[0],
                c = document.createElement("link");
            c.href = HB_STATIC + "common/css/pcviewer.css", c.rel = "stylesheet", b.appendChild(c), window != window.top ? $("body").css("background-image", "none") : (getBg(), $.getScript(HB_STATIC + "common/js/qrcode.js", function () {
                $.getScript(HB_STATIC + "common/js/jquery.qrcode.js", function () {
                    window.scene && 100 == window.scene.bizType ? ($("#con").before('<div id="code" style="margin-top: -200px;">\n    <div style="font-size: 14px;">Share your folio on social network!</div>\n    <div class="eqx-share">\n        <a class="eqx-share-btn btn-facebook"><span class="eqx-share-icon icon-facebook"></span></a>\n        <a class="eqx-share-btn btn-twitter"><span class="eqx-share-icon icon-twitter"></span></a>\n        <a class="eqx-share-btn btn-plus"><span class="eqx-share-icon icon-google_plus"></span></a>\n        <a class="eqx-share-btn btn-linkedin"><span class="eqx-share-icon icon-linkedin"></span></a>\n        <a class="eqx-share-btn btn-pinterest"><span class="eqx-share-icon icon-pinterest"></span></a>\n        <a class="addthis_sharing_toolbox"></a>\n    </div>\n    <div id="view_reg" style="border: none;margin-bottom: 26px;"><span>\n        <a target="_blank" href="http://eqxiu.com" style="color: #fff;border-bottom-color: #fff;font-size: 14px;">So Cool, Let me try it!</a>\n    </span></div>\n    <div style="text-align: center;background:#fff;padding: 10px;" id="codeImg"/> \n    <div style="text-align: center;font-size: 14px;">Scan the QR Code!</div>\n    </div>'), $(".eqx-share-btn").ShareLink({
                        title: window.scene.name,
                        text: window.scene.description,
                        image: PREFIX_FILE_HOST + window.scene.cover,
                        url: window.location.href.split("#")[0],
                        class_prefix: "btn-"
                    })) : ($("#con").before('<div id="code"><div style="margin-bottom:15px;"><div class="app" style="position:relative;"><div id="downAppView" class="zoomIn-change"><h3><a id="close" style="cursor:pointer">X</a>易企秀APP</h3><div id="downCode"></div><p style="padding-bottom:20px;padding-top:10px;">一键生成H5，随时随地查数据</p></div></div>扫一扫，分享给朋友！</div><div style="text-align: center;background:#fff;padding: 10px;" id="codeImg"/><div id="view_share" class="bdsharebuttonbox"><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a><a href="#" class="bds_douban" data-cmd="douban" title="分享到豆瓣网"></a></div></div>'), window.scene && 1 === window.scene.isTemplate && isSample());
                    var b;
                    b = window.location.href.indexOf(eqxDomain) >= 0 || window.location.href.indexOf(h5Domain) >= 0 ? 1 == scene.userType ? PREFIX_HOST_ARRAY[Math.floor(11 * Math.random()) % 11] + "/" : 2 != scene.userType && 21 != scene.userType || scene.memberType ? 3 == scene.userType || 4 == scene.userType ? PREFIX_SERVICE_HOST + "/" : 99 == scene.userType ? PREFIX_SHOW_HOST + "/" : scene.expiryTime && new Date(scene.expiryTime).getTime() < Date.now ? PREFIX_HOST_ARRAY[Math.floor(11 * Math.random()) % 11] + "/" : PREFIX_COMPANY_HOST_ARRAY[Math.floor(2 * Math.random()) % 2] + "/" : PREFIX_HOST_ARRAY[Math.floor(11 * Math.random()) % 11] + "/" : "http://" + hostDomain + "/", window.isStatic && (b = VIP_HOST), $("#downApp").click(function () {
                        $("#downAppView").css("display", "block")
                    }), $("#close").click(function () {
                        $("#downAppView").css("display", "none")
                    }), $("#downCode").qrcode({
                        render: "canvas",
                        width: 200,
                        height: 200,
                        text: "http://a.app.qq.com/o/simple.jsp?pkgname=cn.knet.eqxiu"
                    }), $("#codeImg").qrcode({
                        render: "canvas",
                        width: 200,
                        height: 200,
                        text: b + "v/" + a + "?eqrcode=1"
                    })
                })
            }), $(".p-index").wrap('<div class = "phone_panel"></div>'), $('<div class = "ctrl_panel"></div>').appendTo($(".phone_panel")), setTimeout(function () {
                window.scene && 100 == window.scene.bizType ? ($(".phone_menubar").addClass("hypefolio"), $('<a id = "pre_page" type = "button" class = "pre_btn btn" onclick = "eqxiu.prePage()">\n    <span style="transform: rotateZ(90deg);display: inline-block;font-size: 36px;">&lt;</span>\n</a>').prependTo($(".ctrl_panel")), $('<a id = "next_page" type = "button" class = "next_btn btn" onclick = "eqxiu.nextPage()">\n    <span style="transform: rotateZ(90deg);display: inline-block;font-size: 36px;margin-top: 5px;">&gt;</span>\n</a>').appendTo($(".ctrl_panel"))) : ($('<a id = "pre_page" type = "button" class = "pre_btn btn" onclick = "eqxiu.prePage()">上一页</a>').prependTo($(".ctrl_panel")), $('<a id = "next_page" type = "button" class = "next_btn btn" onclick = "eqxiu.nextPage()">下一页</a>').appendTo($(".ctrl_panel")))
            }, 100))
        }
    }
    $("body").on("click", "#sample_btn", function () {
        window.open(PREFIX_HOST + "/scene?useTplId=" + scene.id)
    }), window.moblieViewImgBg, jQuery.support.cors = !0, eqShow.bootstrap = function () {
        window.viewData ? (window.moblieViewImgBg = PREFIX_FILE_HOST, PREFIX_FILE_HOST = "") : PREFIX_FILE_HOST = PREFIX_FILE_HOST/*eqShow.getImagesResourceHost(scene.userType, scene.memberType)*/, getWechatAuth(), eqShow.forExemplarReview() || mobilecheck() || tabletCheck() && window == window.top /*|| (addElmentsForPc(scene.code), $("title").text(window.scene.name + " | H5微场景制作"))*/
    }, eqShow.bootstrapWithPassword = function () {
        function a() {
            $("#verifyTip").addClass("shake").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                $(this).removeClass("shake"), c()
            })
        }

        function b(b) {
            $("#loading").show(), $.ajax({
                type: "GET",
                url: g,
                data: $.param({
                    password: b
                }),
                xhrFields: {
                    withCredentials: !0
                },
                success: function (b) {
                    200 === b.code ? (b.obj = b.obj || window.scene, $("#verifyCode").remove(), getWechatAuth(!0, b)) : ($("#loading").hide(), $("#verifyCode").show(), a())
                },
                crossDomain: !0
            })
        }

        function c() {
            $(".password-indicator li").each(function (a, b) {
                a < o.length ? $(b).addClass("active") : $(b).removeClass("active")
            })
        }

        function d(a) {
            var d = $(a.target);
            d.addClass("active"), o += d.text(), c(), 4 == o.length && (b(o), o = ""), setTimeout(function () {
                d.removeClass("active")
            }, 100)
        }

        function e(a) {
            o = "", c()
        }

        function f(a) {
            o && (o = o.substring(0, o.length - 1), c())
        }

        eqShow.forExemplarReview() || mobilecheck() || tabletCheck() && window == window.top || addElmentsForPc(scene.code);
        var g = getRequestUrl();
        if ($("#loading").hide(), $("#verifyCode").show(), window.scene) {
            var h = {
                name: window.scene.name,
                cover: window.scene.cover,
                property: window.scene.property,
                description: window.scene.description
            };
            bindShare({
                obj: h
            })
        }
        var i = mobilecheck(),
            j = tabletCheck();
        if (!i || i && /Android (\d+\.\d+)/.test(navigator.userAgent) ? ($(".password-numbers>span").on("click", d), $("#btnClear").on("click", e), $("#btnCancel").on("click", f)) : ($(".password-numbers>span").on("touchstart", d), $("#btnClear").on("touchstart", e), $("#btnCancel").on("touchstart", f)), i || j) {
            var k, l = $(".container"),
                m = l.width(),
                n = l.height();
            k = Math.floor(10 * Math.min(document.documentElement.clientHeight / n, document.documentElement.clientWidth / m)) / 10, l.css("transform", "scale(" + k + ", " + k + ")")
        }
        var o = ""
    }
}(window, jQuery), $(".main").show(), $.easing.jswing = $.easing.swing, $.extend($.easing, {
    def: "easeOutQuad",
    swing: function (a, b, c, d, e) {
        return $.easing[$.easing.def](a, b, c, d, e)
    },
    easeInQuad: function (a, b, c, d, e) {
        return d * (b /= e) * b + c
    },
    easeOutQuad: function (a, b, c, d, e) {
        return -d * (b /= e) * (b - 2) + c
    },
    easeInOutQuad: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function (a, b, c, d, e) {
        return d * (b /= e) * b * b + c
    },
    easeOutCubic: function (a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
    },
    easeInOutCubic: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
    },
    easeInQuart: function (a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c
    },
    easeOutQuart: function (a, b, c, d, e) {
        return -d * ((b = b / e - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
    },
    easeInQuint: function (a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c
    },
    easeOutQuint: function (a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    },
    easeInSine: function (a, b, c, d, e) {
        return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
    },
    easeOutSine: function (a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c
    },
    easeInOutSine: function (a, b, c, d, e) {
        return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
    },
    easeInExpo: function (a, b, c, d, e) {
        return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    },
    easeOutExpo: function (a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
    },
    easeInOutExpo: function (a, b, c, d, e) {
        return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
    },
    easeInCirc: function (a, b, c, d, e) {
        return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
    },
    easeOutCirc: function (a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    },
    easeInOutCirc: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    },
    easeInElastic: function (a, b, c, d, e) {
        var f = 1.70158,
            g = 0,
            h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c
    },
    easeOutElastic: function (a, b, c, d, e) {
        var f = 1.70158,
            g = 0,
            h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * (2 * Math.PI) / g) + d + c
    },
    easeInOutElastic: function (a, b, c, d, e) {
        var f = 1.70158,
            g = 0,
            h = d;
        if (0 == b) return c;
        if (2 == (b /= e / 2)) return c + d;
        if (g || (g = e * (.3 * 1.5)), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return 1 > b ? -.5 * (h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * .5 + d + c
    },
    easeInBack: function (a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
    },
    easeOutBack: function (a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
    },
    easeInOutBack: function (a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * (b * b * (((f *= 1.525) + 1) * b - f)) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
    },
    easeInBounce: function (a, b, c, d, e) {
        return d - $.easing.easeOutBounce(a, e - b, 0, d, e) + c
    },
    easeOutBounce: function (a, b, c, d, e) {
        return (b /= e) < 1 / 2.75 ? d * (7.5625 * b * b) + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
    },
    easeInOutBounce: function (a, b, c, d, e) {
        return e / 2 > b ? .5 * $.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * $.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
    }
}), function (a, b) {
    function c() {
        var a = TRACK_HOST + "c.gif?",
            b = window,
            c = b.screen,
            d = c.availWidth + "x" + c.availHeight,
            e = encodeURIComponent,
            f = document;
        n = b.navigator;
        var g = {
            lag: n.userLanguage || n.language
        };
        typeof scene !== scene && (g.event_description = scene.description, g.event_id = scene.id, g.scene_type = scene.type, g.creator_id = scene.userId, g.creator_type = scene.userType);
        var h = "action_name=" + e(f.title) + "&idsite=2&url=" + e(f.location) + "&urlref=" + e(f.referrer) + "&res=" + d + "&data=" + e(JSON.stringify(g));
        h += 1, h += "&ct=" + (new Date).getTime(), a += h;
        var i = f.createElement("img");
        i.setAttribute("src", a), i.setAttribute("height", "0"), i.setAttribute("width", "0"), f.body.appendChild(i)
    }

    a.getScript(TRACK_HOST + "d.js?pid=2&v=1", function () {
        function a() {
            window.scene ? c() : b = setTimeout(a)
        }

        if (window.scene) c();
        else var b = setTimeout(a, 100)
    }), a.getScript(TRACK_HOST + "r.js?pid=3&v=1")
}(jQuery, window), function (a, b) {
    a.wapShare = function () {
        function c(a) {
            j = a, j.property && (j.property = JSON.stringify(j.property)), l = a.code;
            var c = PREFIX_HOST + "/v/" + l;
            b("#sceneLink").text(c)
        }

        function d() {
            var a = b("#sceneName").val();
            if (null !== a || void 0 !== a) {
                j.name = a;
                var c = {
                    name: j.name,
                    id: j.id,
                    status: 1,
                    code: j.code,
                    cover: j.cover
                };
                b.ajax({
                    type: "POST",
                    url: PREFIX_URL + "m/scene/saveSettings",
                    contentType: "application/json; charset=UTF-8",
                    data: JSON.stringify(c),
                    xhrFields: {
                        withCredentials: !0
                    },
                    success: function (a) {
                    }
                }), wechatUtils.shareWidthSDK(j.name, j.description, location.href.split("?")[0], "", j.cover)
            } else alert("你还没有填写作品名称！")
        }

        function e() {
            a.location.href = PREFIX_HOST + "/mobile/fillHome.html?edit=true&id=" + k
        }

        function f() {
            a.location.href = PREFIX_HOST + "/mobile/fillHome.html?"
        }

        function g() {
            b("#wapShareSet").hide(), b("#shareFooter").show()
        }

        function h() {
            isWeixin() && (b("#wechatShare").css({
                display: "block"
            }), b("#backPreview").css({
                "float": "left"
            }))
        }

        function i(a) {
            c(a), k = a.id, b("#sceneName").focus(function () {
                b(this).val().length > 0 && b(this).select()
            }), b("#sceneName").blur(function () {
                b(this).val().length > 0 && d()
            }), h()
        }

        var j = {},
            k = "",
            l = "";
        return {
            init: i,
            editScene: e,
            createAnotherScene: f,
            backToPreview: g
        }
    }()
}(window, jQuery), function (a, b) {
    b.forExemplarReview = function () {
        var a = !1;
        return b.getUrlParameter("exemplarReview") ? ($(".phoneBox").css({
            width: "320px",
            height: "486px",
            marginLeft: "0px",
            marginRight: "40px"
        }), $("#con").after('<div class="exemplarReview" style="width:40px;height:486px;background:#ffffff;position: fixed;right: 0px;top: 0px;border-right: 1px solid #ccd5db;"><div class="preview" style="position:relative;height: 70px;margin-top:173px;"><a onclick="eqxiu.prePage()" ><em class="eqf-clickmore2" style="color:#7b8893;"></em></a></div> <div class="next" style="height:73px;margin-bottom:173px;"><a onclick="eqxiu.nextPage()"><em class="eqf-clickmore" style="color:#7b8893;"></em></a> </div></div>'), $(".exemplarReview a").css({
            width: "40px",
            height: "70px",
            display: "block",
            textAlign: "center",
            lineHeight: "70px"
        }), $(".exemplarReview a").hover(function () {
            $(this).css({
                backgroundColor: "#f0f3f4"
            })
        }, function () {
            $(this).css({
                backgroundColor: "#FFFFFF"
            })
        }), a = !0) : a = !1, a
    }
}(window, eqShow);
