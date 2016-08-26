

angular.module("scene.pageeffect.fall", []), angular.module(
    "scene.pageeffect.fall").controller("fallEffectCtrl", ["$scope", function(a) {
    var b = a.properties;
    a.fallings = [{
        name: "圣诞节",
        path: HB_STATIC + "assets/images/create/fallings/wazi.png",
        rotate: 180,
        vy: 4,
        bgpath: HB_STATIC +
        "assets/images/create/fallings/christmas.png"
    }, {
        name: "礼物",
        path: HB_STATIC + "assets/images/create/fallings/gift.png",
        rotate: 180,
        vy: 4,
        bgpath: HB_STATIC + "assets/images/create/fallings/gift_1.png"
    }, {
        name: "春节",
        path: HB_STATIC + "assets/images/create/fallings/denglongcj.png",
        rotate: 60,
        vy: 1,
        bgpath: HB_STATIC + "assets/images/create/fallings/lantern.png"
    }, {
        name: "福字",
        path: HB_STATIC + "assets/images/create/fallings/fuzi1.png",
        rotate: 180,
        vy: 3,
        bgpath: HB_STATIC + "assets/images/create/fallings/blessing.png"
    }, {
        name: "红包",
        path: HB_STATIC + "assets/images/create/fallings/hongbao2.png",
        rotate: 180,
        vy: 3,
        bgpath: HB_STATIC +
        "assets/images/create/fallings/red_packet.png"
    }, {
        name: "绿枫叶",
        path: HB_STATIC + "assets/images/create/fallings/lvfengye.png",
        rotate: 180,
        vy: 3,
        bgpath: HB_STATIC + "assets/images/create/fallings/greenery.png"
    }, {
        name: "星星",
        path: HB_STATIC + "assets/images/create/fallings/xing.png",
        rotate: 180,
        vy: 3,
        bgpath: HB_STATIC + "assets/images/create/fallings/star.png"
    }, {
        name: "雪花",
        path: HB_STATIC + "assets/images/create/fallings/snow.png",
        rotate: 0,
        vy: 1,
        bgpath: HB_STATIC + "assets/images/create/fallings/snow_1.png"
    }], b && b.fallingObject ? (a.controlView.effectType =
        "fallingObject", a.falling = b.fallingObject, angular.forEach(a.fallings,
        function(b) {
            b.path === a.falling.src.path && (a.falling.src = b)
        })) : a.falling = {
        src: a.fallings[0],
        density: 2
    }, a.$on("save.falling.effect", function() {
        b = {}, b.fallingObject = a.falling, angular.forEach(a.fallings,
            function(a) {
                a.bgpath && delete a.bgpath
            }), a.$close({
            properties: b,
            name: "落物",
            value: "fallingObject"
        })
    })
}]), angular.module("scene.pageeffect.finger", []), angular.module(
    "scene.pageeffect.finger").controller("fingerEffectCtrl", ["$scope",
    function(a) {
        var b, c = a.properties;
        a.fingerZws = [{
            name: "粉色指纹",
            path: HB_STATIC + "assets/images/create/fingers/zhiwen1.png"
        }, {
            name: "白色指纹",
            path: HB_STATIC + "assets/images/create/fingers/zhiwen2.png"
        }, {
            name: "蓝色指纹",
            path: HB_STATIC + "assets/images/create/fingers/zhiwen3.png"
        }], a.fingerBackgrounds = [{
            name: "粉红回忆",
            path: HB_STATIC + "assets/images/create/fingers/bg1.jpg"
        }, {
            name: "深蓝花纹",
            path: HB_STATIC + "assets/images/create/fingers/bg2.jpg"
        }, {
            name: "淡绿清新",
            path: HB_STATIC + "assets/images/create/fingers/bg3.jpg"
        }, {
            name: "深紫典雅",
            path: HB_STATIC + "assets/images/create/fingers/bg4.jpg"
        }, {
            name: "淡紫水滴",
            path: HB_STATIC + "assets/images/create/fingers/bg5.jpg"
        }, {
            name: "蓝白晶格",
            path: HB_STATIC + "assets/images/create/fingers/bg6.jpg"
        }, {
            name: "蓝色水滴",
            path: HB_STATIC + "assets/images/create/fingers/bg7.jpg"
        }, {
            name: "朦胧绿光",
            path: HB_STATIC + "assets/images/create/fingers/bg8.jpg"
        }, {
            name: "灰色金属",
            path: HB_STATIC + "assets/images/create/fingers/bg9.jpg"
        }], c && c.finger ? (a.controlView.effectType = "finger", a.finger =
            c.finger, angular.forEach(a.fingerZws, function(b) {
            b.path === a.finger.zwImage.path && (a.finger.zwImage = b)
        }), angular.forEach(a.fingerBackgrounds, function(b) {
            b.path === a.finger.bgImage.path && (a.finger.bgImage = b)
        })) : a.finger = {
            zwImage: a.fingerZws[0],
            bgImage: a.fingerBackgrounds[0]
        }, b = angular.copy(a.finger.bgImage), a.replaceImg = function(c) {
            return c.bgImage ? void(b = angular.copy(a.finger.bgImage)) : void a
                .$emit("select.effect.image", "finger")
        }, a.$on("replace.effect.image", function(c, d, e) {
            "finger" === e && (a.finger.bgImage || (a.finger.bgImage = {}), a
                    .finger.bgImage.path = PREFIX_FILE_HOST + d.data, a.fingerBackgrounds[
                    0].name || a.fingerBackgrounds.shift(), a.fingerBackgrounds
                    .unshift(a.finger.bgImage), b = angular.copy(a.finger.bgImage)
            )
        }), a.$on("cancel.effect.replace", function(c, d) {
            "finger" === d && angular.forEach(a.fingerBackgrounds, function(c) {
                b.name ? b.name === c.name && (a.finger.bgImage = c) : c.name ||
                (a.finger.bgImage = c)
            })
        }), a.$on("save.finger.effect", function() {
            c = {}, c.finger = a.finger, a.$close({
                properties: c,
                name: "指纹",
                value: "finger"
            })
        })
    }
]).directive("fingerMove", function() {
    function a(a, b) {
        b.css({
            animation: "move 2s ease 0",
            "animation-iteration-count": "infinite"
        })
    }
    return {
        restrict: "EA",
        link: a
    }
}), angular.module("scene.pageeffect.fireworks", []), angular.module(
    "scene.pageeffect.fireworks").controller("fireWorksCtrl", ["$scope",
    function(a) {
        var b = a.properties;
        b && b.effect && "fireWorks" === b.effect.name && (a.controlView.effectType =
            "fireWorks"), a.$on("save.fireworks.effect", function() {
            b = {}, b.effect = {
                name: "fireWorks"
            }, a.$close({
                properties: b,
                name: "烟花",
                value: "effect"
            })
        })
    }
]), angular.module("common.directives.inputNumber", []).directive(
    "eqdInputNumber",
    function() {
        function a(a, j, k, l) {
            j.on("$destroy", function() {
                j.unbind("mousedown")
            });
            var m = "string" == typeof k.min ? k.min : -Number.MAX_VALUE,
                n = "string" == typeof k.max ? k.max : Number.MAX_VALUE,
                o = "string" == typeof k.unit ? k.unit : "px",
                p = "string" == typeof k.step ? k.step : "1",
                q = 0;
            p.indexOf(".") > -1 && (q = p.split(".")[1].length), "px" === o ? (l.$parsers
                .push(b), l.$formatters.push(c)) : "deg" === o ? (o = "", l.$parsers
                .push(d), l.$formatters.push(e)) : "%" === o ? (l.$parsers.push(f),
                l.$formatters.push(g)) : l.$parsers.push(h), j.mousedown(function(b) {
                function c(b) {
                    b.preventDefault(), e = b.pageX - g;
                    var c = Math.abs((f + e * p).toFixed(q));
                    c >= m && n >= c ? c += o : m > c ? c = m + o : c > n && (c = n +
                        o), l.$viewValue !== c && (l.$setViewValue(c), l.$render(),
                        a.$apply())
                }

                function d() {
                    i.unbind("mousemove", c), i.unbind("mouseup", d)
                }
                var e, f = parseFloat(j.val()) || 0,
                    g = b.pageX;
                i.mousemove(c), i.mouseup(d)
            }).keydown(function(a) {
                var b = "" + a.keyCode;
                return !!(b >= 48 && 57 >= b || b >= 96 && 105 >= b || 36 === b ||
                35 === b || 37 === b || 39 === b || 8 === b || 46 === b)
            })
        }

        function b(a) {
            return a = /-?\d+/.exec(a), a ? parseFloat(a) + "px" : "0"
        }

        function c(a) {
            return /-?\d+/.exec(a) + "px"
        }

        function d(a) {
            return a = /\d+/.exec(a), a ? "rotateZ(" + parseFloat(a) + "deg)" :
                "rotateZ(0)"
        }

        function e(a) {
            return /\d+/.exec(a)
        }

        function f(a) {
            return a = /\d+/.exec(a), a ? a / 100 + "" : "0"
        }

        function g(a) {
            return 100 * a + "%"
        }

        function h(a) {
            return "" === a && (a = "0"), parseFloat(a) + ""
        }
        var i = $(document);
        return {
            restrict: "E",
            require: "ngModel",
            template: '<input class="eqc-input-number"/>',
            replace: !0,
            link: a
        }
    }), angular.module("scene.pageeffect.money", []), angular.module(
    "scene.pageeffect.money").controller("moneyEffectCtrl", ["$scope", function(
    a) {
    var b = a.properties;
    b && b.effect && "money" === b.effect.name ? (a.controlView.effectType =
        "money", a.money = {
        tip: b.effect.tip
    }) : a.money = {
        tip: "握紧钱币，数到手抽筋吧"
    }, a.checkCharLength = function() {
        return a.tipError = "", countCharacters(a.money.tip) > 28 ? (a.tipError =
            "提示文字不能超过14个中文或28个英文字母", !1) : !0
    }, a.$on("save.money.effect", function() {
        a.checkCharLength() && (b = {}, b.effect = {
            name: "money",
            tip: a.money.tip
        }, a.$close({
            properties: b,
            name: "数钱",
            value: "effect"
        }))
    })
}]), angular.module("scene.pageeffect.none", []), angular.module(
    "scene.pageeffect.none").controller("noneEffectCtrl", ["$scope", function(a) {
    var b = a.properties;
    b && b.effect && "none" === b.effect.name && (a.controlView.effectType =
        "none"), a.$on("save.none.effect", function() {
        b = {}, b.effect = {
            name: "none"
        }, a.$close({
            name: "无"
        })
    })
}]), angular.module("scene.pageeffect.console", ["scene.pageeffect.scratch",
    "scene.pageeffect.finger", "scene.pageeffect.money",
    "scene.pageeffect.fall", "scene.pageeffect.snow",
    "scene.pageeffect.fireworks", "scene.pageeffect.none"
]), angular.module("scene.pageeffect.console").controller("pageEffectCtrl", [
    "$scope", "$rootScope", "$modal", "properties", "sceneService",
    "storageService",
    function(a, b, c, d, e, f) {
        a.properties = d, a.controlView = {}, a.effectList = [{
            type: "scratch",
            name: "涂抹",
            src: HB_STATIC + "assets/images/create/waterdrop.jpg"
        }, {
            type: "finger",
            name: "指纹",
            src: HB_STATIC + "assets/images/create/fingers/zhiwen1.png"
        }, {
            type: "fallingObject",
            name: "环境",
            src: HB_STATIC + "assets/images/create/falling.png"
        }, {
            type: "snowFly",
            name: "飘雪",
            src: HB_STATIC + "assets/images/create/snowfly.png"
        }, {
            type: "fireWorks",
            name: "烟花",
            src: HB_STATIC + "assets/images/create/fireworks.jpg"
        }, {
            type: "none",
            name: "无",
            src: ""
        }], d && (!d || d.scratch || d.finger || d.fallingObject || d.effect) ||
        (d = {}, a.controlView.effectType = "scratch", a.controlView.effectIndex =
            0), f.get("create.showAddEffTip") || (f.push("create.showAddEffTip", !
            1), a.controlView.effectType = "fallingObject", a.controlView.effectIndex =
            3), a.selectEffect = function(b, c) {
            a.controlView.effectType = b.type, a.controlView.effectIndex = c
        }, a.confirm = function() {
            "scratch" === a.controlView.effectType ? a.$broadcast(
                "save.scratch.effect") : "finger" === a.controlView.effectType ?
                a.$broadcast("save.finger.effect") : "money" === a.controlView.effectType ?
                a.$broadcast("save.money.effect") : "fallingObject" === a.controlView
                .effectType ? a.$broadcast("save.falling.effect") : "snowFly" ===
            a.controlView.effectType ? a.$broadcast("save.snow.effect") :
                "fireWorks" === a.controlView.effectType ? a.$broadcast(
                    "save.fireworks.effect") : "none" === a.controlView.effectType &&
                a.$broadcast("save.none.effect")
        }, a.$on("select.effect.image", function(a, d) {
            c.open({
                windowClass: "console img_console",
                templateUrl: tplUrl + "scene//console/bg.tpl.html",
                controller: "BgConsoleCtrl",
                resolve: {
                    obj: function() {
                        return {
                            fileType: 0
                        }
                    }
                }
            }).result.then(function(a) {
                var c = {
                    type: 3,
                    properties: {
                        src: a.data
                    }
                };
                a.height / a.width >= 1008 / 642 && a.height / a.width <=
                1.578125 ? b.$broadcast("replace.effect.image", a, d) : e
                    .openCropModal(c, function(a) {
                        var c = {
                            data: a.src
                        };
                        b.$broadcast("replace.effect.image", c, d)
                    }, function() {
                        b.$broadcast("cancel.effect.replace", d)
                    })
            }, function() {
                b.$broadcast("cancel.effect.replace", d)
            })
        }), a.cancel = function() {
            b.$broadcast("clear.scratch.interval"), a.$dismiss()
        }
    }
]), angular.module("scene.pageeffect.scratch", [
    "common.directives.inputNumber"
]), angular.module("scene.pageeffect.scratch").controller("scratchEffectCtrl", [
    "$scope", "$rootScope", "i18nNotifications",
    function(a, b, c) {
        var d, e = a.properties;
        a.scratches = [{
            name: "水滴",
            path: HB_STATIC + "assets/images/create/waterdrop.jpg"
        }, {
            name: "细沙",
            path: HB_STATIC + "assets/images/create/sand.jpg"
        }, {
            name: "花瓣",
            path: HB_STATIC + "assets/images/create/flowers.jpg"
        }, {
            name: "金沙",
            path: HB_STATIC + "assets/images/create/goldsand.jpg"
        }, {
            name: "白雪",
            path: HB_STATIC + "assets/images/create/snowground.jpg"
        }, {
            name: "模糊",
            path: HB_STATIC + "assets/images/create/mohu.jpg"
        }, {
            name: "落叶",
            path: HB_STATIC + "assets/images/create/leaves.jpg"
        }, {
            name: "薄雾",
            path: HB_STATIC + "assets/images/create/smoke.png"
        }], e && (e.image || e.scratch) ? (a.controlView.effectType =
                "scratch", (e.image || e.scratch) && (e.scratch ? (a.scratch = e.scratch,
            e.scratch.percentage.value && (a.scratch.percentage = e.scratch
                .percentage.value), e.scratch.opacity || (a.scratch.opacity =
                .2)) : e.image && (a.scratch = {
                image: e.image,
                percentage: e.percentage.value
            }, e.tip && (a.scratch.tip = e.tip), a.scratch.opacity = .2),
                angular.forEach(a.scratches, function(b) {
                    a.scratch.image.name === b.name && (a.scratch.image = b)
                }), a.scratch.image.name || a.scratches.unshift(a.scratch.image))
        ) : a.scratch = {
            image: a.scratches[0],
            percentage: .15,
            opacity: .2
        };
        var f = a.$watch("scratch.opacity", function() {
            b.$broadcast("show.scratch.draw", a.scratch)
        }, !0);
        setTimeout(function() {
            d = angular.copy(a.scratch.image), b.$broadcast(
                "show.scratch.draw", a.scratch, !1)
        }, 0), a.$on("$destroy", function() {
            f()
        }), a.replaceImage = function(c) {
            return c.image ? (d = angular.copy(a.scratch.image), void b.$broadcast(
                "show.scratch.draw", c, !1)) : void a.$emit(
                "select.effect.image", "scratch")
        }, a.$on("replace.effect.image", function(c, e, f) {
            "scratch" === f && (a.scratch.image || (a.scratch.image = {}), a.scratch
                .image.path = PREFIX_FILE_HOST + e.data, a.scratches[0].name ||
            a.scratches.shift(), a.scratches.unshift(a.scratch.image), d =
                angular.copy(a.scratch.image), b.$broadcast(
                "show.scratch.draw", a.scratch, !1))
        }), a.$on("cancel.effect.replace", function(b, c) {
            "scratch" === c && angular.forEach(a.scratches, function(b) {
                d.name ? d.name === b.name && (a.scratch.image = b) : b.name ||
                (a.scratch.image = b)
            })
        }), a.$on("save.scratch.effect", function() {
            return e = {}, e.scratch = a.scratch, e.scratch.percentage > 1 ?
                void c.pushForCurrentRoute("scratch.percentage.overflow",
                    "notify.success") : (b.$broadcast("clear.scratch.interval"),
                void a.$close({
                    properties: e,
                    name: "涂抹",
                    value: "scratch"
                }))
        })
    }
]).directive("scratchEffect", function() {
    function a(a) {
        var d = new Image;
        a.$on("show.scratch.draw", function(a, c) {
            d.onload = function() {
                b(this, c)
            }, d.src = c.image.path
        }), a.$on("change.scratch.opacity", function(a, b) {
            $(".scratch-img").css({
                opacity: 1 - parseFloat(b).toFixed(2)
            })
        }), a.$on("clear.scratch.interval", function() {
            clearInterval(c)
        })
    }

    function b(a, f) {
        c && clearInterval(c);
        var g =
                '<canvas class="scratchCanvas" style="position:absolute; top: 0; left: 0;" width="196" height="308"></canvas>',
            h = $(".scratch-img");
        if (h.empty(), h.append(g), d = h.find("canvas").get(0)) {
            e = d.getContext("2d"), e.lineCap = "round", e.lineJoin = "round", e.lineWidth =
                20, e.globalAlpha = 1 - parseFloat(f.opacity).toFixed(2), e.drawImage(
                a, 0, 0, d.width, d.height), e.globalCompositeOperation =
                "destination-out";
            var i = 130,
                j = 80;
            c = setInterval(function() {
                e.moveTo(i, j), i >= 70 && 140 >= j ? (e.lineTo(i - 2, j + 2),
                    e.stroke(), i -= 2, j += 2) : 120 >= i && 165 >= j ? (e.lineTo(
                    i + 2, j + 1), e.stroke(), i += 2, j += 1) : i >= 70 && 215 >=
                j ? (e.lineTo(i - 2, j + 2), e.stroke(), i -= 2, j += 2) : (
                    clearInterval(c), b(a, f))
            }, 50)
        }
    }
    var c, d, e;
    return {
        restrict: "EA",
        link: a
    }
}), angular.module("scene.pageeffect.snow", []), angular.module(
    "scene.pageeffect.snow").controller("snowEffectCtrl", ["$scope", function(a) {
    var b = a.properties;
    b && b.effect && "snowFly" === b.effect.name && (a.controlView.effectType =
        "snowFly"), a.$on("save.snow.effect", function() {
        b = {}, b.effect = {
            name: "snowFly"
        }, a.$close({
            properties: b,
            name: "飘雪",
            value: "effect"
        })
    })
}])