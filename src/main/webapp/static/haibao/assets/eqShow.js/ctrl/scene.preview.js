angular.module("scene.preview", ["services.scene"]),
    angular.module("scene.preview")
        .directive("sceneView", ["sceneService", "sceneViewService", "sceneDataParseService", "$rootScope",
            function (sceneService, sceneViewService, sceneDataParseService, $rootScope) {
    return {
        scope: {
            sceneId: "@",
            sceneName: "@",
            sceneCover: "@",
            sceneDescription: "@"
        },
        restrict: "A",
        templateUrl: $rootScope.tplUrl + "scene//preview.tpl.html",

        link: function (scope, $scope, tabCtrl) {
            function create(name, node) {
                sceneViewService.getSceneData(tabCtrl.sceneId).then(function (e) {
                    if (e.data.success) {
                        var self = e.data;
                        $.extend(true, self.obj, scope.$parent.scene);
                        if (name) {
                            /** @type {number} */
                            name = parseInt(name, 10) - 1;
                            self.list[name].elements = node.obj.elements;
                            self.list[name].properties = node.obj.properties;
                        }
                        if (scope.$parent.scene.property.activityPageId) {
                            sceneViewService.getActivityPage(scope.$parent.scene.property.activityPageId).then(function (event) {
                                self.list.push(event.data.obj);
                                sceneDataParseService.parse(self);
                            });
                        } else {
                            sceneDataParseService.parse(self);
                        }
                    }
                });
            }

            /**
             * @return {undefined}
             */
            function show() {
                initialize();
                $scope.find(".password-numbers>span").click(init);
                $scope.find(".password-operation>span").click(initialize);
                $scope.find(".verifyCode").show();
            }

            /**
             * @return {undefined}
             */
            function close() {
                $scope.find(".password-numbers>span").unbind("click");
                $scope.find(".password-operation>span").unbind("click");
                $scope.find(".verifyCode").hide();
            }

            /**
             * @param {Event} evt
             * @return {undefined}
             */
            function init(evt) {
                initialize($(evt.target).text());
                if (4 === config.pass.length) {
                    if (scope.$parent.scene.accessCode === config.pass) {
                        close();
                    } else {
                        initialize();
                    }
                }
            }

            /**
             * @param {boolean} obj
             * @return {undefined}
             */
            function initialize(obj) {
                if (obj && "object" != typeof obj) {
                    config.pass += obj;
                } else {
                    /** @type {string} */
                    config.pass = "";
                }
                $scope.find(".password-indicator li").each(function (bi, elem) {
                    if (bi < config.pass.length) {
                        $(elem).addClass("active");
                    } else {
                        $(elem).removeClass("active");
                    }
                });
            }

            var config = {
                play: false
            };
            if (scope.sceneId) {
                if (scope.$parent.mginData === angular.toJson(scope.$parent.tpl)) {
                    create();
                } else {
                    create(scope.$parent.pageNum, $.extend(true, {}, scope.$parent.tpl));
                }
            }
            scope.$watch("sceneId", function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    create();
                }
            });
            $scope.on("$destroy", function () {
                utilSound.pause();
                $(document).unbind("flipend");
            });
            scope.$on("changeView", function (dataAndEvents, deepDataAndEvents) {
                if (deepDataAndEvents) {
                    $scope.find(".wechat-share").show();
                } else {
                    $scope.find(".wechat-share").hide();
                }
                $scope.find(".loading").hide();
                close();
            });
            scope.$on("showLoading", function (deepDataAndEvents, ignoreMethodDoesntExist, dataAndEvents) {
                if (ignoreMethodDoesntExist) {
                    if (dataAndEvents) {
                        $scope.find(".loadbg").css({
                            background: "url(" + PREFIX_FILE_HOST + dataAndEvents + ")",
                            backgroundSize: "118px 118px"
                        }).show();
                        $scope.find(".loadlogo").hide();
                    } else {
                        $scope.find(".loadbg").css("background", "").hide();
                        $scope.find(".loadlogo").show();
                    }
                    $scope.find(".loading").show();
                    $scope.find(".wechat-share").hide();
                } else {
                    $scope.find(".loading").hide();
                }
                close();
            });
            scope.$on("processBar", function (dataAndEvents, deepDataAndEvents) {
                if (deepDataAndEvents) {
                    $scope.find(".progress").show();
                } else {
                    $scope.find(".progress").hide();
                }
            });
            scope.$on("passPanelSwitch", function (dataAndEvents, deepDataAndEvents) {
                if (deepDataAndEvents) {
                    show();
                } else {
                    close();
                }
            });
            $scope.on("$destroy", function () {
                clearInterval(eqShow.progressInterval);
                sceneDataParseService.app.pauseAutoFlip();
            });
        }
    };
}]).factory("sceneViewService", ["$http", function ($http) {
    var getSceneData = {};
    getSceneData.getSceneData = function (dataAndEvents) {
        /** @type {string} */
        var query = "scene/view?id=" + dataAndEvents + "&time=" + (new Date).getTime();
        return $http({
            withCredentials: true,
            method: "GET",
            url: API_URL + query
        });
    };
    getSceneData.getSelfLastPage = function (dataAndEvents) {
        /** @type {string} */
        var materialArgs = "index.php?c=scene&a=getlastpagebg&id=" + dataAndEvents;
        return $http({
            withCredentials: true,
            method: "GET",
            url: PREFIX_S1_URL + materialArgs
        });
    };
    //getSceneData.getActivityPage = function (file) {
    //    /** @type {string} */
    //    var path = "eqs/trailer/" + file;
    //    return $http({
    //        method: "GET",
    //        url: PREFIX_S2_URL + path
    //    });
    //}
    return getSceneData;
}]).factory("sceneDataParseService", ["sceneViewService", "sceneService", function (assert, org) {
    /**
     * @param {Object} node
     * @param {Array} data
     * @return {undefined}
     */
    function search(node, data) {
        if (node.obj.property.lastPageId) {
            assert.getSelfLastPage(node.obj.property.lastPageId).then(function (e) {
                if (e.data.obj) {
                    start(node.obj, e.data);
                    node.list.push(e.data.obj);
                    $scope.lastPage = data[data.length - 1];
                    show(data, node);
                } else {
                    done(node.obj);
                    $scope.lastPage = data[data.length - 1];
                    show(data, node);
                }
            });
        } else {
            done(node.obj, data);
            $scope.lastPage = data[data.length - 1];
            show(data, node);
        }
    }

    /**
     * @param {Object} data
     * @param {Array} arr
     * @return {undefined}
     */
    function done(data, arr) {
        /** @type {string} */
        var encodedValue = "http://eqxiu.com";
        /** @type {string} */
        var contents = '{"id":439882,"pageId":129810,"sceneId":16060,"num":1,"type":"4","isInput":0,"title":null,"content":null,"status":1,"css":{"borderRadius":"10px","borderStyle":"solid","zIndex":"9","borderColor":"rgba(0,0,0,1)","paddingTop":"0px","height":"141","backgroundColor":"","color":"","boxShadow":"0px 0px 0px #333333","borderWidth":"0px","width":"142.13709677419354","left":"92px","paddingBottom":"0px","top":"177px"},"properties":{"height":"100px","imgStyle":{"width":142,"height":142,"marginTop":"-0.5px","marginLeft":"0px"},"width":"100px","src":"group1/M00/BA/DA/yq0KA1Rq8COAAYRjAAKU4OVYum0889.jpg"}}';
        /** @type {string} */
        var string = '{"id":"","sceneId":"","num":2,"name":null,"properties":null,"elements":[{"id":439880,"pageId":129810,"sceneId":16060,"num":0,"type":"3","isInput":0,"title":null,"content":null,"status":1,"css":{},"properties":{"bgColor":"#E6E9EE"}},{"id":439881,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"text-align: center;\\"><span style=\\"line-height: 1; background-color: initial;\\"><font size=\\"4\\" color=\\"#888888\\"><b>场景名称</b></font></span></div>","status":1,"css":{"height":"65","zIndex":"10","width":"320","left":"0px","top":"77px"},"properties":{}},{"id":439882,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div class=\\"bottom-logo\\" style=\\"text-align: center;cursor:pointer;height:142px;width:142px;border-radius:10px;\\"><em style=\\"color:white;line-height:142px;font-size:30px;\\" class=\\"eqf-love\\"></em></div>","status":1,"css":{"height":"157","width":"172","left":"77px","top":"170px"},"properties":{}},{"id":439883,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"width:280px;height:1px;background-color:rgba(60,60,60,0.4);cursor:pointer;position:absolute;left:0;-webkit-filter:drop-shadow(0px 1px 0px rgba(60,60,60,0.4));top:12px;\\"></div>","status":1,"css":{"height":"24","width":"280","left":"21px","top":"122px"},"properties":{}},{"id":439885,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"text-align: center;padding-top: 0;\\"><span style=\\"font-size: small; line-height: 1; background-color: initial;\\"><a href=\\"' +
            PREFIX_S1_URL + "eqs/link?id=16060&amp;url=" + encodeURIComponent(encodedValue) + '\\" target=\\"_blank\\"><font color=\\"#888888\\">免费创建一个场景？→</font><font color=\\"#23a3d3\\">易企秀</font></a></span></div>","status":1,"css":{"borderRadius":"0px","borderStyle":"solid","height":"30","paddingTop":"0px","borderColor":"rgba(222,220,227,1)","zIndex":"12","boxShadow":"0px 0px 0px rgba(200,200,200,0.6)","color":"","backgroundColor":"rgba(255,255,255,0)","borderWidth":"0px","width":"320","left":"1px","paddingBottom":"20px","top":"420px"},"properties":{"anim":{"type":1,"direction":3,"duration":"1","delay":"0.6"}}}]}';
        /** @type {string} */
        string = string.replace(/id=16060/, "id=" + data.id);
        /** @type {*} */
        var m = JSON.parse(string);
        m.num = arr.length + 1;
        if (data.cover) {
            if ("group1/M00/61/8A/yq0KA1T2vYSAEgo7AACovQVgHxk048.jpg" !== data.cover) {
                /** @type {*} */
                m.elements[2] = JSON.parse(contents);
                m.elements[2].properties.src = data.cover;
            }
        }
        m.elements[1].content = m.elements[1].content.replace(/\u573a\u666f\u540d\u79f0/, data.name ? data.name : "");
        arr.push(m);
    }

    /**
     * @param {Object} args
     * @param {?} d
     * @return {undefined}
     */
    function start(args, d) {
        /** @type {string} */
        var contents = '{"id":81395,"pageId":"","sceneId":"","num":1,"type":"4","isInput":0,"title":null,"content":null,"status":1,"css":{"borderRadius":"%","borderStyle":"solid","height":"158","zIndex":"1000","paddingTop":"0px","borderColor":"rgba(0,0,0,1)","boxShadow":"0 0px 0px #333333","color":"#000000","backgroundColor":"white","borderWidth":"0px","width":"158","left":"84px","paddingTop":"11px","paddingLeft":"10px","top":"170px"},"properties":{"height":"100px","imgStyle":{"width":139,"height":136,"marginTop":"0px","marginLeft":"0px"},"width":"100px","src":"group1/M00/01/30/yq0JCFQpOR-AOULFAAFBPO1yzBQ984.jpg"}}';
        /** @type {string} */
        var json = '{"id":439882,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div class=\\"bottom-logo\\" style=\\"text-align: center;cursor:pointer;height:136px;width:139px;\\"><em style=\\"color:white;line-height:136px;font-size:120px;\\" class=\\"eqf-eqxiu\\"></em></div>","status":1,"css":{"height":"158","width":"158","left":"84px","top":"170px","backgroundColor":"white"},"properties":{}}';
        /** @type {string} */
        var text = '{"id":81465,"pageId":"","sceneId":"","num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"text-align: center;\\"><font color=\\"#ffffff\\" size=\\"3\\">击此处进行编辑</font></div>","status":1,"css":{"zIndex":"102","height":"65","width":"320","left":"0px","top":"70px"},"properties":{}}';
        /** @type {string} */
        var item = '{"id":2557867,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div class=\\"logo-shadow1\\" style=\\"text-align: center;cursor:pointer;height:127px;width:220px;transform:rotate(-45deg);-webkit-transform:rotate(-45deg);position:absolute;left:20px;top:56px;\\"></div>","status":1,"css":{"height":"257","width":"257","left":"78px","top":"175px"},"properties":{}}';
        /** @type {string} */
        var ev = '{"id":439883,"pageId":129810,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"width:280px;height:1px;background-color:rgba(60,60,60,0.4);cursor:pointer;position:absolute;left:0;-webkit-filter:drop-shadow(0px 1px 0px rgba(60,60,60,0.4));top:12px;\\"></div>","status":1,"css":{"height":"24","width":"280","left":"21px","top":"122px"},"properties":{}}';
        d.obj.sceneId = args.id;
        var obj;
        /** @type {number} */
        var i = 0;
        for (; i < d.obj.elements.length; i++) {
            if ("" + d.obj.elements[i].type != "4" || "group1/M00/A5/5E/yq0KA1QmePmAKr7yAAEByp5jyLc752.jpg" !== d.obj.elements[i].properties.src && ("group1/M00/C5/9D/yq0KA1SH1zuAFgkLAAAFgBR8hJs456.png" !== d.obj.elements[i].properties.src && ("group1/M00/C5/3F/yq0KA1SHp-2AQZZZAAB-7rIaK6I743.png" !== d.obj.elements[i].properties.src && "group1/M00/C5/9D/yq0KA1SH1zuAeQuFAAAFfUkeXDc110.png" !== d.obj.elements[i].properties.src))) {
                if ("2" === d.obj.elements[i].type) {
                    d.obj.elements.splice(i, 1);
                    i--;
                }
            } else {
                d.obj.elements.splice(i, 1);
                i--;
            }
        }
        if ("group1/M00/61/8A/yq0KA1T2vYSAEgo7AACovQVgHxk048.jpg" !== args.cover) {
            /** @type {*} */
            obj = JSON.parse(contents);
            obj.properties.src = args.cover;
        } else {
            /** @type {*} */
            obj = JSON.parse(json);
        }
        d.obj.elements.push(obj);
        d.obj.elements.push(JSON.parse(item));
        d.obj.elements.push(JSON.parse(ev));
        /** @type {*} */
        var code = JSON.parse(text);
        code.content = code.content.replace(/\u51fb\u6b64\u5904\u8fdb\u884c\u7f16\u8f91/, args.name);
        d.obj.elements.push(code);
        /** @type {number} */
        var index = 0;
        for (; index < d.obj.elements.length; index++) {
            if ("" + d.obj.elements[index].type == "2") {
                if (/http:\/\/service.eqxiu.com\/eqs\/link/.test(d.obj.elements[index].content)) {
                    d.obj.elements[index].content = d.obj.elements[index].content.replace(/;url=.*com"/, ";url=" + encodeURIComponent(redirectUrl) + '"');
                }
            }
        }
    }

    /**
     * @param {Object} node
     * @param {Array} data
     * @return {undefined}
     */
    function bind(node, data) {
        assert.getSelfLastPage(node.obj.property.bottomLabel.id).then(function (e) {
            if (e.data.success) {
                var self = data[data.length - 1];
                if (!self.elements) {
                    /** @type {Array} */
                    self.elements = [];
                }
                var items = e.data.obj.elements;
                if (self.properties && self.properties.longPage) {
                    /** @type {number} */
                    var top = self.properties.longPage - 1;
                    /** @type {number} */
                    var i = 0;
                    for (; i < items.length; i++) {
                        items[i].css.top += 486 * top;
                    }
                }
                self.elements = self.elements.concat(items);
                show(data, node);
            }
        });
    }

    /**
     * @param {Object} node
     * @param {Array} msg
     * @return {undefined}
     */
    function reset(node, msg) {
        initialize(node, msg);
        show(msg, node);
    }

    /**
     * @param {Object} parent
     * @param {Array} args
     * @return {undefined}
     */
    function initialize(parent, args) {
        /** @type {string} */
        var encodedValue = "http://eqxiu.com";
        /** @type {string} */
        var d = "易企秀技术支持";
        /** @type {string} */
        var item = '{"id":480292,"pageId":136042,"sceneId":16060,"num":1,"type":"2","isInput":0,"title":null,"content":"<div style=\\"text-align: center;transform: none;-webkit-animation: fadeIn 2s ease 1s both;-webkit-animation-play-state: initial;\\"><a href=\\"' + PREFIX_S1_URL + "eqs/link?id=16060&amp;url=" + encodeURIComponent(encodedValue) + '\\" target=\\"_blank\\" style=\\"font-size: x-small;display:block;line-height: 10px;\\"><font color=\\"#ffffff\\">' + d + '</font></a></div>","status":1,"css":{"zIndex":"1000","height":"20","width":"129","left":"97px","top":"418px","backgroundColor":"rgba(0,0,0,0.6)","borderRadius":"20px"},"properties":{"anim":{"type":0,"direction":0,"duration":2,"delay":"0"}}}';
        var cells = args[args.length - 1].elements;
        if (args[args.length - 1].properties) {
            if (args[args.length - 1].properties.longPage) {
                /** @type {string} */
                item = item.replace("418px", 486 * args[args.length - 1].properties.longPage - 68 + "px");
            }
        }
        /** @type {string} */
        item = item.replace(/id=16060/, "id=" + parent.id);
        if (!args[args.length - 1].elements) {
            /** @type {Array} */
            cells = args[args.length - 1].elements = [];
        }
        cells.push(JSON.parse(item));
    }

    /**
     * @param {Array} data
     * @param {Object} node
     * @return {undefined}
     */
    function show(data, node) {
        var preceding = node.obj.pageMode;
        if (node.obj.property.slideNumber) {
            /** @type {string} */
            node.obj.property.slideDisplay = "block";
        } else {
            /** @type {string} */
            node.obj.property.slideDisplay = "none";
        }
        /** @type {boolean} */
        node.obj.property.slideNumber = true;
        var udataCur = {
            bgAudio: node.obj.bgAudio
        };
        /** @type {number} */
        var count = 1;
        for (; count <= data.length; count++) {
            $('<section class="main-page"><div class="m-img" id="page' + count + '"></div></section>').appendTo(".phone-view");
            if (data.length > 1) {
                $('<section class="u-arrow-bottom"><div class="pre-wrap"><div class="pre-box1"><div class="pre1"></div></div><div class="pre-box2"><div class="pre2"></div></div></div></section>').appendTo("#page" + count);
                $('<section class="u-arrow-right"><div class="pre-wrap-right"><div class="pre-box3"><div class="pre3"></div></div><div class="pre-box4"><div class="pre4"></div></div></div></section>').appendTo("#page" + count);
            }
            if (1 === count) {
                $(".phone-view .main-page").eq(0).addClass("z-current");
            }
            /** @type {number} */
            var n = count;
            if (data[n - 1].properties && !$.isEmptyObject(data[n - 1].properties) ? data[n - 1].properties.image || data[n - 1].properties.scratch ? addScratchEffect(udataCur, data, n) : data[n - 1].properties.finger ? (progressValues = [], progressValues.push({
                    num: n,
                    finger: data[n - 1].properties.finger
                }), lockEffect(udataCur, data, progressValues, $(".m-img").width(), $(".m-img").height())) : data[n - 1].properties.fallingObject ? data[n - 1].effObj = fallingObject(data, n) : data[n - 1].properties.effect ? !function (l) {
                    data[l - 1].effObj = window[data[l - 1].properties.effect.name].doEffect(udataCur, l, data, renderPage);
                }(n) : renderPage(eqShow, n, data, true) : (renderPage(eqShow, n, data, true), 1 === n && eqShow.playVideo(udataCur)), count === data.length) {
                eqxiu.app($(".phone-view"), node.obj.pageMode, data, node);
            }
        }
        if (0 === preceding || (1 === preceding || (2 === preceding || (6 === preceding || (7 === preceding || (8 === preceding || (11 === preceding || (12 === preceding || 13 === preceding)))))))) {
            $(".phone-view .u-arrow-right").hide();
        } else {
            if (3 === preceding || (4 === preceding || (5 === preceding || (9 === preceding || 10 === preceding)))) {
                $(".phone-view .u-arrow-bottom").hide();
            }
        }
    }

    /**
     * @param {?} node
     * @return {?}
     */
    function success(node) {
        /** @type {Array} */
        var data = [];
        $.extend(true, data, config._pages);
        if ($scope.activePage) {
            data.push($scope.activePage);
        }
        /** @type {number} */
        var newVal = data.length + 1;
        if (!node) {
            done({
                name: $scope.sceneName
            }, data);
            $scope.lastPage = data[data.length - 1];
            var meta = data[data.length - 1];
            return $scope.haseLastPage ? callback($scope.lastPageNum, meta) : ($(".phone-view .main-page").last().after('<section class="main-page"><div class="m-img" id="page' + newVal + '"></div></section>'), $scope.lastPageNum = newVal, renderPage(eqShow, $scope.lastPageNum, data, true), $scope.haseLastPage = true), config.app.changeAppPage(), void config.app.setPageData(data);
        }
        assert.getSelfLastPage(node).then(function (e) {
            if (e.data.success) {
                if ($scope.lastPage = e.data.obj, $scope.haseLastPage) {
                    var options = {
                        id: "1",
                        name: $scope.sceneName,
                        cover: $scope.sceneCover
                    };
                    start(options, e.data);
                    callback($scope.lastPageNum, e.data.obj);
                } else {
                    $(".phone-view .main-page").last().after('<section class="main-page"><div class="m-img" id="page' + newVal + '"></div></section>');
                    /** @type {number} */
                    $scope.lastPageNum = newVal;
                    renderPage(eqShow, $scope.lastPageNum, data.concat([e.data.obj]), true);
                    /** @type {boolean} */
                    $scope.haseLastPage = true;
                }
                config.app.changeAppPage();
                config.app.setPageData(data);
            }
        });
    }

    /**
     * @param {number} index
     * @param {?} meta
     * @return {undefined}
     */
    function callback(index, meta) {
        $("#page" + index).empty();
        org.templateEditor.parse({
            def: meta,
            appendTo: "#page" + index,
            mode: "view",
            disEvent: true
        });
    }

    /**
     * @param {Array} flag
     * @param {Object} obj
     * @param {Object} child
     * @param {string} deepDataAndEvents
     * @return {undefined}
     */
    function add(flag, obj, child, deepDataAndEvents) {
        if (!obj.elements) {
            /** @type {Array} */
            obj.elements = [];
        }
        /** @type {Array} */
        var dom = [];
        if ($.extend(true, dom, flag), update(dom, obj, child, deepDataAndEvents), obj.properties && obj.properties.longPage) {
            /** @type {number} */
            longPage = obj.properties.longPage - 1;
            /** @type {number} */
            var j = 0;
            for (; j < dom.length; j++) {
                dom[j].css.top += 486 * longPage;
            }
        }
        obj.elements = obj.elements.concat(dom);
        callback(config._pages.length, obj);
    }

    /**
     * @param {Array} dom
     * @param {Object} col
     * @param {Object} doc
     * @param {string} deepDataAndEvents
     * @return {undefined}
     */
    function update(dom, col, doc, deepDataAndEvents) {
        /** @type {number} */
        var i = 0;
        var l = dom.length;
        for (; l > i; i++) {
            var self = dom[i];
            if (self.pageId = col.id, doc.name && (doc.url && "http://" !== doc.url)) {
                if ("" + self.type == "2") {
                    if (self.content.indexOf("EQXIU.COM科技公司") > 0) {
                        self.content = self.content.replace(/EQXIU.COM\u79d1\u6280\u516c\u53f8/, '<a href="' + PREFIX_S1_URL + "eqs/link?id=" + deepDataAndEvents + "&amp;url=" + encodeURIComponent(doc.url) + '" target=_blank>' + doc.name + "</a>");
                    }
                }
            } else {
                if (doc.name) {
                    if ("" + self.type == "2") {
                        if (self.content.indexOf("EQXIU.COM科技公司") > 0) {
                            self.content = self.content.replace(/EQXIU.COM\u79d1\u6280\u516c\u53f8/, doc.name);
                        }
                    }
                } else {
                    if (/\u6613\u4f01\u79c0\u6280\u672f\u652f\u6301/.test(self.content)) {
                        /** @type {string} */
                        self.content = '<div style="text-align: center;">' + self.content + "</div>";
                        var params = {
                            zIndex: "1000",
                            height: "33",
                            width: "129",
                            left: "97px"
                        };
                        $.extend(self.css, params);
                    } else {
                        if ("" + self.type == "2") {
                            if (self.content) {
                                /** @type {string} */
                                self.content = "";
                            }
                        }
                    }
                }
            }
            /** @type {number} */
            self.css.zIndex = 200;
        }
    }

    /**
     * @return {undefined}
     */
    function openURL() {
        config.app.removeLastPage();
        config.app.changeAppPage();
        /** @type {boolean} */
        $scope.haseLastPage = false;
    }

    var config = {};
    config.app = eqxiu;
    var value;
    var $scope = {
        haseLastPage: false,
        sceneName: "",
        sceneCover: "",
        lastPage: null,
        activePage: null,
        activePageNum: null,
        lastPageNum: null
    };
    /** @type {Array} */
    var arg = [];
    /** @type {Array} */
    config._pages = [];
    /**
     * @param {string} item
     * @return {undefined}
     */
    config.parse = function (item) {
        /** @type {null} */
        $scope.activePage = null;
        if (item.obj.property) {
            if ("string" == typeof item.obj.property) {
                /** @type {*} */
                item.obj.property = JSON.parse(item.obj.property);
            }
        } else {
            item.obj.property = {};
        }
        if (item.obj.name) {
            $scope.sceneName = item.obj.name;
        }
        if (item.obj.cover) {
            $scope.sceneCover = item.obj.cover;
        }
        if (item.obj.bgAudio && "string" == typeof item.obj.bgAudio) {
            /** @type {*} */
            item.obj.bgAudio = JSON.parse(item.obj.bgAudio);
        } else {
            $("#audio_btn").hide();
        }
        var data = item.list;
        if ($.extend(true, config._pages, item.list), item.obj.property.hideEqAd) {
            show(data, item);
        } else {
            switch (item.obj.property.eqAdType) {
                case 1:
                    /** @type {boolean} */
                    $scope.haseLastPage = true;
                    $scope.lastPageNum = data.length + 1;
                    search(item, data);
                    break;
                case 2:
                    reset(item, data);
                    break;
                case 3:
                    bind(item, data);
                    break;
                default:
                    /** @type {boolean} */
                    $scope.haseLastPage = true;
                    search(item, data);
            }
        }
    };
    /** @type {Array} */
    var progressValues = [];
    return config.changeBottomType = function (dataAndEvents, tree, option, deepDataAndEvents) {
        if ("eqFree" === dataAndEvents) {
            success(tree);
            config.app.lastPage();
        } else {
            if ("eqLink" === dataAndEvents) {
                if ($scope.lastPageNum = null, $scope.haseLastPage && (openURL(), $scope.lastPage = null), config.app.lastPage(!!$scope.activePage), 2 === deepDataAndEvents) {
                    /** @type {Array} */
                    var details = [];
                    $.extend(true, details, config._pages);
                    var obj = details[details.length - 1];
                    return obj.elements || (obj.elements = []), initialize(obj, details), void callback(config._pages.length, obj);
                }
                if (!option || !option.id) {
                    return;
                }
                obj = {};
                if ($.extend(true, obj, config._pages[config._pages.length - 1]), arg && value === option.id) {
                    return obj.elements || (obj.elements = []), void add(arg, obj, option, config._pages[0].sceneId);
                }
                value = option.id;
                assert.getSelfLastPage(option.id).then(function (e) {
                    if (e.data.success) {
                        $.extend(true, arg, e.data.obj.elements);
                        if (!obj.elements) {
                            /** @type {Array} */
                            obj.elements = [];
                        }
                        add(e.data.obj.elements, obj, option, config._pages[0].sceneId);
                    }
                });
            } else {
                /** @type {null} */
                $scope.lastPageNum = null;
                if ($scope.haseLastPage) {
                    openURL();
                    /** @type {null} */
                    $scope.lastPage = null;
                } else {
                    callback(config._pages.length, config._pages[config._pages.length - 1]);
                }
                config.app.lastPage();
            }
        }
    }, config.removeActivePage = function () {
        config.app.removeLastPage($scope.haseLastPage);
        config.app.changeAppPage();
        config.app.lastPage();
        /** @type {null} */
        $scope.activePageNum = null;
    }, config.playVideo = function (value) {
        var udataCur = {
            bgAudio: value
        };
        if (!value) {
            udataCur.bgAudio = {
                url: ""
            };
        }
        eqShow.playVideo(udataCur);
        if (!value) {
            $("#audio_btn").hide();
        }
    }, config.changeScrollMode = function (deepDataAndEvents) {
        config.app.changeScrollMode(deepDataAndEvents);
        if (0 === deepDataAndEvents || (1 === deepDataAndEvents || (2 === deepDataAndEvents || (6 === deepDataAndEvents || (7 === deepDataAndEvents || (8 === deepDataAndEvents || (11 === deepDataAndEvents || (12 === deepDataAndEvents || (13 === deepDataAndEvents || 14 === deepDataAndEvents))))))))) {
            $(".phone-view .u-arrow-right").hide();
            $(".phone-view .u-arrow-bottom").show();
        } else {
            if (3 === deepDataAndEvents || (4 === deepDataAndEvents || (5 === deepDataAndEvents || (9 === deepDataAndEvents || 10 === deepDataAndEvents)))) {
                $(".phone-view .u-arrow-bottom").hide();
                $(".phone-view .u-arrow-right").show();
            } else {
                $(".phone-view .u-arrow-bottom").hide();
                $(".phone-view .u-arrow-right").hide();
            }
        }
    }, config.changeSceneName = function ($location) {
        /** @type {string} */
        $scope.sceneName = $location;
    }, config.changeSceneCover = function ($location) {
        /** @type {string} */
        $scope.sceneCover = $location;
    }, config.replaceActivePage = function (input) {
        assert.getActivityPage(input).then(function (event) {
            var _len;
            /** @type {Array} */
            var methods = [];
            if ($scope.haseLastPage) {
                $.extend(true, methods, config._pages);
                if ($scope.lastPage) {
                    methods.push($scope.lastPage);
                }
                methods.push(event.data.obj);
                /** @type {number} */
                _len = methods.length;
                if ($scope.activePage) {
                    callback($scope.activePageNum, event.data.obj);
                } else {
                    $(".phone-view .main-page").last().prev().after('<section class="main-page"><div class="m-img" id="page' + _len + '"></div></section>');
                    /** @type {number} */
                    $scope.activePageNum = _len;
                    renderPage(eqShow, $scope.activePageNum, methods, true);
                }
                config.app.setPageData(methods);
                config.app.changeAppPage();
            } else {
                $.extend(true, methods, config._pages);
                methods.push(event.data.obj);
                /** @type {number} */
                _len = methods.length;
                if ($scope.activePage) {
                    callback($scope.activePageNum, event.data.obj, true);
                } else {
                    $(".phone-view .main-page").last().after('<section class="main-page"><div class="m-img" id="page' + _len + '"></div></section>');
                    /** @type {number} */
                    $scope.activePageNum = _len;
                    renderPage(eqShow, $scope.activePageNum, methods, true);
                }
                config.app.changeAppPage();
                config.app.setPageData(methods);
            }
            $scope.activePage = event.data.obj;
        });
    }, config;
}]), angular.module("scene").directive("previewExemplar", ["$timeout", "pageTplService", "$sce", "$rootScope", function (done, Company, $sce, dataAndEvents) {
    return {
        restrict: "A",
        scope: {
            currentTpl: "=",
            createScene: "&"
        },
        templateUrl: dataAndEvents.tplUrl + "scene/scenePreviewExemplar.tpl.html",
        /**
         * @param {Object} obj
         * @param {?} scope
         * @param {?} tabCtrl
         * @return {undefined}
         */
        link: function (obj, scope, tabCtrl) {
            /**
             * @return {undefined}
             */
            function render() {
                if (null !== obj.currentTpl.tpl.avatar) {
                    if (obj.currentTpl.tpl.avatar !== undefined) {
                        obj.avatar = /^http.*/.test(obj.currentTpl.tpl.avatar) ? obj.currentTpl.tpl.avatar : PREFIX_FILE_HOST + obj.currentTpl.tpl.avatar;
                    }
                }
                /** @type {string} */
                obj.reviewUrl = obj.canvasUrl + "/v/" + obj.currentTpl.tpl.code;
                obj.reviewForIframe = $sce.trustAsResourceUrl(obj.canvasUrl + "/a/haibao/design/view/" + obj.currentTpl.tpl.code + "?exemplarReview=true");
                Company.getExemplarTags(obj.currentTpl.tpl.id).then(function (event) {
                    obj.tags = event.data.list;
                    create();
                });
            }

            /**
             * @return {undefined}
             */
            function cancel() {
                /** @type {boolean} */
                obj.currentTpl.exemplarPreview = false;
            }

            /**
             * @param {Event} e
             * @param {(Object|string)} collection
             * @return {undefined}
             */
            function process(e, collection) {
                var targetElement = e.target;
                var length = collection ? targetElement.value.length : 0;
                targetElement.setSelectionRange(0, length);
            }

            /**
             * @param {?} value
             * @return {undefined}
             */
            function updateSelected(value) {
                obj.openDescription = value;
            }

            /**
             * @param {Node} element
             * @return {undefined}
             */
            function onComplete(element) {
                /** @type {boolean} */
                obj.copySuccess = true;
                eqShow.copyToClipboard(element.previousElementSibling);
                done(function () {
                    /** @type {boolean} */
                    obj.copySuccess = false;
                }, 1E3);
            }

            /**
             * @return {undefined}
             */
            function start() {
                var predicate = angular.copy(obj.currentTpl);
                delete predicate.exemplarPreview;
                /** @type {boolean} */
                obj.currentTpl.exemplarPreview = false;
                obj.createScene(predicate);
            }

            /**
             * @return {undefined}
             */
            function create() {
                /** @type {number} */
                var t = Math.floor(Math.random() * obj.tags.length);
                if (!obj.tagId && !obj.bizType || "" === obj.tagId && "0" === obj.bizType) {
                    obj.tagId = obj.tags[t].id;
                }
                Company.getSimilarTagExemplar(obj.tagId ? obj.tagId : obj.bizType).then(function (event) {
                    obj.similarExemplars = event.data.list;
                });
            }

            /**
             * @param {(Range|TextRange)} options
             * @param {?} toStart
             * @return {undefined}
             */
            function collapse(options, toStart) {
                var $delegate = angular.element(options.parentElement);
                if (toStart) {
                    $delegate.addClass("nameActive");
                } else {
                    $delegate.removeClass("nameActive");
                }
            }

            /**
             * @param {Object} models
             * @return {undefined}
             */
            function reset(models) {
                /** @type {Object} */
                obj.currentTpl.tpl = models;
                render();
            }

            angular.extend(obj, obj, {
                canvasUrl: PREFIX_SHOW_HOST,
                reviewUrl: null,
                reviewForIframe: null,
                bizType: tabCtrl.biztype,
                tagId: tabCtrl.tagid,
                fileDomain: PREFIX_FILE_HOST,
                tags: [],
                qrCodeShow: false,
                exemplarNameShow: false,
                openDescription: false,
                copySuccess: false,
                similarExemplars: [],
                /** @type {function (): undefined} */
                cancel: cancel,
                /** @type {function (Event, (Object|string)): undefined} */
                inputSelected: process,
                /** @type {function (?): undefined} */
                showMoreDescription: updateSelected,
                /** @type {function (Node): undefined} */
                copy: onComplete,
                /** @type {function (): undefined} */
                newScene: start,
                /** @type {function (): undefined} */
                changeAnotherExemplars: create,
                /** @type {function (Object): undefined} */
                showAnotherExemplar: reset,
                /** @type {function ((Range|TextRange), ?): undefined} */
                showName: collapse
            });
            render();
        }
    };
}]);