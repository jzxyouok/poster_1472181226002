angular.module("scene.create").controller("CreateSceneCtrl", ["$timeout", "$compile", "$rootScope",
    "$scope", "$routeParams", "$route", "$location", "sceneService", "pageTplService", "$modal",
    "ModalService", "security", "$window", "i18nNotifications", "historyService", "panStateTracker",
    "selectService", "continueUrl", "triggerService", "staticResService", "dataCacheService", "storageService",
    "gridGuide", "editService", "setCompService", "fileService",


    function($timeout, $compile, $rootScope, $scope, event,

             $route, $location, sceneService, pageTplService, $modal, ModalService, dataAndEvents,
                          ignoreMethodDoesntExist, i18nNotifications, doc, two, parent, hoodieProvider, object,
                          keys, a, col, err, data, setCompService, fileService) {

    function recurse() {
        /** @type {boolean} */
        var a = false;
        return angular.forEach($scope.tpl.obj.elements, function(item) {
            if ("6" === ("" + item.type).charAt(0)) {
                /** @type {boolean} */
                a = true;
            }
        }), a;
    }

    function fail(i) {
        $scope.scale = data.currentScale = vals[i];
        data.scaleIndex = i + 1;
        $("#nr").empty();
        if ($scope.tpl.obj.properties) {
            /** @type {boolean} */
            $scope.tpl.obj.properties.scale = true;
        } else {
            $scope.tpl.obj.properties = {
                scale: true
            };
        }
        sceneService.templateEditor.parse({
            def: $scope.tpl.obj,
            appendTo: "#nr",
            mode: "edit"
        });
        $rootScope.$broadcast("dom.changed");
        $rootScope.$broadcast("refreshPageBg");
    }

    function initScene(idxScene, isCreate, isCopy, longpage) {

        /** @type {boolean} */
        $scope.loading = true;
        $scope.pageId = $scope.pages[idxScene - 1].id;

        sceneService.getSceneByPage($scope.pageId, isCreate, isCopy, longpage).then(function(message) {

            $scope.loading = false;
            $scope.tpl = message.data;

            $scope.isLong = false;
            result = $scope.tpl.obj.properties;
            if (result) {
                if (result.trigger) {
                    object.setTrigger($scope.tpl.obj.id, result.trigger);
                }
            }
            if (result && result.longPage) {

                $scope.isLong = true;
                $scope.pageLength = result.longPage;
                $scope.switchPhone(true);
            } else {
                if (longpage) {

                    $scope.pageLength = longpage;
                    /** @type {boolean} */
                    $scope.isLong = true;
                    $scope.switchPhone(true);
                } else {

                    $scope.isLong = false;

                    $scope.pageLength = 1;

                    $scope.showPhone = "false" === col.get("create.phoneView") ? false : true;
                    $rootScope.$broadcast("switchBox", $scope.showPhone);
                }
            }
            /** @type {boolean} */
            sceneService.longPage = $scope.isLong;
            err.grid.refreshGrid($scope.pageLength);
            delete $scope.tpl.obj.scene;
            $scope.sceneId = $scope.tpl.obj.sceneId;
            /** @type {boolean} */
            $scope.controlView.showBgTag = false;
            angular.forEach($scope.tpl.obj.elements, function(src) {
                if (src.type + "" == "3") {
                    /** @type {boolean} */
                    $scope.controlView.showBgTag = true;
                    /** @type {Object} */
                    $scope.currentBgDef = src;
                }
            });
            if (result) {
                if (result.image || result.scratch) {
                    /** @type {string} */
                    $scope.effectName = "涂抹";
                }
            }
            if (result) {
                if (result.finger) {
                    /** @type {string} */
                    $scope.effectName = "指纹";
                }
            }
            if (result) {
                if (result.effect) {
                    if ("money" === result.effect.name) {
                        /** @type {string} */
                        $scope.effectName = "数钱";
                    } else {
                        if ("snowFly" === result.effect.name) {
                            /** @type {string} */
                            $scope.effectName = "飘雪";
                        } else {
                            if ("fireWorks" === result.effect.name) {
                                /** @type {string} */
                                $scope.effectName = "烟花";
                            } else {
                                if ("none" === result.effect.name) {
                                    /** @type {string} */
                                    $scope.effectName = "无";
                                }
                            }
                        }
                    }
                }
            }
            if (result) {
                if (result.fallingObject) {
                    /** @type {string} */
                    $scope.effectName = "环境";
                }
            }
            if (isCreate || isCopy) {
                $location.$$search = {};
                $location.search("pageId", ++idxScene);
                $scope.getPageNames();
            }
            $scope.pageNum = idxScene;
            $("#nr").empty();
            var other = angular.copy($scope.tpl.obj);
            other.elements = doc.addPage(other.id, other.elements);
            if ($scope.tpl.obj.properties) {
                delete $scope.tpl.obj.properties.scale;
            }
            object.clear();
            sceneService.templateEditor.parse({
                def: $scope.tpl.obj,
                appendTo: "#nr",
                mode: "edit"
            });
            /** @type {string} */
            $scope.originData = JSON.stringify($scope.tpl);
            $rootScope.$broadcast("dom.changed");
            $rootScope.$broadcast("refreshPageBg");
            if ($scope.isCompMange) {
                $scope.setComps = setCompService.init($scope.tpl.obj.elements);
            }
        }, function() {
            /** @type {boolean} */
            $scope.loading = false;
        });
    }
    /**
     * @return {undefined}
     */
    function throttledUpdate() {
        i18nNotifications.pushForCurrentRoute("scene.save.success.nopublish", "notify.success");
    }
    /** @type {boolean} */
    $scope.loading = false;
    $scope.PREFIX_FILE_HOST = PREFIX_FILE_HOST;
    $scope.tpl = {};
    /** @type {string} */
    $scope.originData = "";
    var items;
    /** @type {string} */
    var p = "";
    /** @type {number} */
    var step = 21;
    /** @type {number} */
    var elem = 1;
    /** @type {number} */
    var pivotElem = 0;
    /** @type {boolean} */
    var K = false;
    /** @type {number} */
    $scope.templateType = 1;
    $scope.controlView = {};
    /** @type {boolean} */
    $scope.showSearch = true;
    /** @type {null} */
    $scope.completeHtml2Canvas = null;
    var interval;
    /** @type {Array} */
    var r = [];
    /** @type {Array} */
    var received = [];
    /** @type {Array} */
    var rowids = [];
    /** @type {Array} */
    var sorted = [];
    /** @type {Array} */
    var t = [];
    /** @type {Array} */
    var n = [];
    /** @type {Array} */
    $scope.lastPageTypes = [{
        name: "易企秀尾页",
        value: "eqFree"
    }, {
        name: "易企秀底标",
        value: "eqLink"
    }, {
        name: "去掉易企秀展示",
        value: "eqHide"
    }];
    $scope.pageTpl = {};
    /** @type {boolean} */
    $scope.isAppEditor = false;
    /** @type {string} */
    $scope.tabid = "template";
    $scope.psdUpload = {
        total: 0,
        currentNum: 0,
        showPsdWarn: false,
        openPsdFileChooseBox: null
    };
    $scope.$watch("user", function(selectElement) {
        if (selectElement) {
            /** @type {number} */
            var j = 0;
            for (; j < selectElement.roleIdList.length; j++) {
                if (13 === selectElement.roleIdList[j]) {
                    /** @type {boolean} */
                    $scope.isAppEditor = true;
                }
                if (4 === selectElement.roleIdList[j] || (12 === selectElement.roleIdList[j] || 13 === selectElement.roleIdList[j])) {
                    /** @type {boolean} */
                    $scope.isTplEditor = true;
                }
            }
        }
    }, true);
    col.push("shoppingFontFamily1", JSON.stringify({}));
    col.push("shoppingFontFamily", JSON.stringify({}));
    sessionStorage.setItem("fontface", JSON.stringify([]));
    /**
     * @return {undefined}
     */
    $scope.refreshTpl = function() {
        if (pivotElem > elem) {
            if (!K) {
                /** @type {boolean} */
                K = true;
                $scope.getPageTpls(++elem);
            }
        }
    };
    /** @type {boolean} */
    $scope.showPhoneTip = "false" === col.get("create.showPhoneTip") ? false : true;
    /** @type {boolean} */
    $scope.showAddPageTip = "false" === col.get("create.showAddPageTip") ? false : true;
    /** @type {boolean} */
    $scope.showAddFormTip = "false" === col.get("showAddFormTip") ? false : true;
    /** @type {boolean} */
    $scope.wechatWTip = "false" === col.get("wechatWTip") ? false : true;
    /** @type {boolean} */
    $scope.scaleTip = "false" === col.get("scaleTip") ? false : true;
    /**
     * @param {boolean} dataAndEvents
     * @return {undefined}
     */
    $scope.switchPhone = function(dataAndEvents) {
        if (dataAndEvents) {
            /** @type {boolean} */
            $scope.showPhone = false;
        } else {
            /** @type {boolean} */
            $scope.showPhone = !$scope.showPhone;
            col.push("create.phoneView", $scope.showPhone);
        }
        $rootScope.$broadcast("switchBox", $scope.showPhone);
        if (!col.get("create.showPhoneTip")) {
            col.push("create.showPhoneTip", false);
            /** @type {boolean} */
            $scope.showPhoneTip = false;
        }
        if (!$scope.showPhone) {
            $rootScope.$broadcast("boxOuter", true);
        }
    };
    /** @type {Array} */
    var tokenTypes = ["l", "s"];
    if ($scope.createComp = function(type, positionError, position) {
            return $scope.sceneSetting.showFlag = false, "6" === type && recurse() ? void ModalService.openMsgDialog({
                msg: "当前页面的提交按钮已经存在，请不要重复添加。"
            }) : !$scope.isInteractionAccessable && -1 !== tokenTypes.indexOf(type) || !$scope.isInteractionCounterAccessable && "i" === type ? void ModalService.openConfirmDialog({
                msg: "免费升级企业账号即可使用该功能",
                confirmName: "免费升级",
                cancelName: "我知道了"
            }, function() {
                window.open("/privilege");
            }) : void sceneService.createComp(type, position, positionError, $scope.pageLength);
        }, $scope.$on("hisChange", function() {
            doc.addPageHistory($scope.tpl.obj.id, $scope.tpl.obj.elements);
        }), pageTplService.getPageTagLabel(11001).then(function(event) {
            $scope.tplFormatList = event.data.list;
        }), pageTplService.getPageTagLabel(11003).then(function(event) {
            $scope.tplInteractionList = event.data.list;
        }), pageTplService.getPageTagLabel(11002).then(function(event) {
            $scope.tplStyleList = event.data.list;
        }), $scope.getPageTplTypestemp = function(el, locals, key, data) {
            pageTplService.getPageTplTypestemp(el, locals, key, data).then(function(target) {
                if (K = false, target.data.list && target.data.list.length > 0) {
                    if (elem > 1) {
                        $scope.pageTpls = $scope.pageTpls.concat(target.data.list);
                    } else {
                        $scope.pageTpls = target.data.list;
                    }
                    /** @type {number} */
                    pivotElem = Math.ceil(target.data.map.count / step);
                    var bup = target.config.url.split("&time")[0];
                    if (!a.contains(bup)) {
                        a.push("pageTpl", a.getAsyncUrl(), target);
                        a.setAsyncUrl();
                    }
                } else {
                    /** @type {Array} */
                    $scope.pageTpls = [];
                    /** @type {number} */
                    pivotElem = 0;
                }
            });
        }, $scope.enterPress = function(e) {
            var ev = e || window.event;
            if (13 === ev.keyCode) {
                $scope.getPageTpls();
            }
        }, $scope.getPageTpls = function(x) {
            /** @type {string} */
            var out = "";
            if (!x) {
                /** @type {number} */
                x = elem = 1;
            }
            var index;
            for (index in $scope.pageTpl) {
                if ("name" !== index) {
                    if ($scope.pageTpl[index]) {
                        out += $scope.pageTpl[index] + ",";
                    }
                }
            }
            if ("" !== out) {
                /** @type {string} */
                out = out.substr(0, out.length - 1);
            }
            if ($scope.pageTpl.name) {
                if ("" !== $scope.pageTpl.name) {
                    /** @type {boolean} */
                    $scope.showSearch = false;
                }
            }
            $scope.getPageTplTypestemp(out, $scope.pageTpl.name, step, x);
        }, $scope.getPageTpls(), $scope.resetTplFilter = function() {
            /** @type {null} */
            $scope.pageTpl.name = null;
            /** @type {boolean} */
            $scope.showSearch = true;
            $scope.getPageTpls();
        }, $scope.support = function() {
            return window.sessionStorage && "false" === sessionStorage.getItem("checkSuport") ? false : navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv:11/) || navigator.userAgent.match(/Chrome/) ? false : navigator.userAgent.match(/iPad/) && navigator.userAgent.match(/CriOS/) ? false : (hoodieProvider.setUrl($location.path()), $location.path("scene/support"), true);
        }, !$scope.support()) {
        /**
         * @param {string} deepDataAndEvents
         * @param {Array} isXML
         * @return {undefined}
         */
        $scope.createCompGroup = function(deepDataAndEvents, isXML) {
            /** @type {boolean} */
            $scope.sceneSetting.showFlag = false;
            if ("g101" === deepDataAndEvents) {
                if (recurse()) {
                    ModalService.openMsgDialog({
                        msg: "当前页面的提交按钮已经存在，本操作将会删除已添加的按钮。"
                    });
                    angular.forEach($scope.tpl.obj.elements, function(p) {
                        if ("6" === ("" + p.type).charAt(0)) {
                            $("#nr").find("#inside_" + p.id).remove();
                            parent.deleteElement(p.id);
                            sceneService.deleteElement(p.id);
                            setCompService.removeElemDef(p.id + "");
                        }
                    });
                }
            }
            sceneService.createCompGroup(deepDataAndEvents, null, isXML);
        };
        $scope.isRadioCheckboxRatingAccessable = dataAndEvents.isAllowToAccess(dataAndEvents.accessDef.RADIO_CHECKBOX_RATING);
        $scope.isInteractionAccessable = dataAndEvents.isAllowToAccess(dataAndEvents.accessDef.INTERACTION);
        $scope.isInteractionCounterAccessable = dataAndEvents.isAllowToAccess(dataAndEvents.accessDef.INTERACTION_COUNTER);
        $scope.isInteractionAccessableWechat = dataAndEvents.isAllowToAccess(dataAndEvents.accessDef.ACCESS_WX_AUTH);
        $scope.isPsdUploadAccessable = dataAndEvents.isAllowToAccess(dataAndEvents.accessDef.ACCESS_PSD_UPLOAD);
        $scope.isCompMange = dataAndEvents.isAllowToAccess(dataAndEvents.accessDef.ACCESS_COMP_MANAGE);
        $scope.updateCompPosition = sceneService.updateCompPosition;
        $scope.updateCompAngle = sceneService.updateCompAngle;
        $scope.updateCompSize = sceneService.updateCompSize;
        $scope.openAudioModal = sceneService.openAudioModal;
        /**
         * @return {?}
         */
        $scope.openTriggerMode = function() {
            return $scope.sceneSetting.showFlag = false, $scope.isInteractionAccessable || -1 === tokenTypes.indexOf(type) ? void sceneService.openTriggerMode() : void ModalService.openConfirmDialog({
                msg: "免费升级企业账号即可使用该功能",
                confirmName: "免费升级",
                cancelName: "我知道了"
            }, function() {
                window.open("/privilege");
            });
        };
        $scope.$on("dom.changed", function() {
            $compile($("#nr"))($scope);
            $rootScope.$broadcast("boxOuter");
        });
        /** @type {number} */
        $scope.scale = 1;
        /** @type {Array} */
        var vals = [0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
        /** @type {number} */
        var e = 2;
        /** @type {number} */
        data.scaleIndex = 3;
        /** @type {number} */
        data.currentScale = 1;
        /**
         * @param {?} $slides
         * @return {?}
         */
        $scope.zoom = function($slides) {
            if ($slides) {
                if (4 === $scope.scale) {
                    return void $rootScope.$broadcast("outScale");
                }
                e++;
            } else {
                if (0.5 === $scope.scale) {
                    return void $rootScope.$broadcast("outScale");
                }
                e--;
            }
            fail(e);
        };
        $scope.$on("comps.delete", function() {
            if ($scope.isCompMange) {
                var codeSegments = parent.getElements();
                /** @type {number} */
                var i = 0;
                for (; i < codeSegments.length; i++) {
                    setCompService.removeElemDef(codeSegments[i]);
                }
            }
        });
        /**
         * @return {undefined}
         */
        $scope.recovery = function() {
            if (2 !== e) {
                /** @type {number} */
                e = 2;
                fail(e);
                $rootScope.$broadcast("recoveryScale");
            }
        };
        $scope.$on("boxOuter", function(deepDataAndEvents, dataAndEvents) {
            if ("rotateEnd" === dataAndEvents) {
                if ($scope.scale > 1) {
                    $("#nr").empty();
                    if ($scope.tpl.obj.properties) {
                        /** @type {boolean} */
                        $scope.tpl.obj.properties.scale = true;
                    } else {
                        $scope.tpl.obj.properties = {
                            scale: true
                        };
                    }
                    sceneService.templateEditor.parse({
                        def: $scope.tpl.obj,
                        appendTo: "#nr",
                        mode: "edit"
                    });
                    $rootScope.$broadcast("dom.changed");
                    $rootScope.$broadcast("refreshPageBg");
                }
            }
        });
        /** @type {null} */
        var info = null;
        $scope.$on("showCropPanel", function(dataAndEvents, scope) {
            var display = $(".content").eq(0);
            if (info) {
                $rootScope.$broadcast("changeElemDef", scope);
                info.show();
            } else {
                info = $compile("<div crop-image></div>")($scope);
            }
            display.append(info);
        });
        /**
         * @param {?} $rootScope
         * @return {undefined}
         */
        $scope.openPageEffectModal = function($rootScope) {
            /** @type {boolean} */
            $scope.sceneSetting.showFlag = false;
            var element = angular.copy($rootScope);
            $modal.open({
                windowClass: "console six-contain effect-console",
                templateUrl: $rootScope.tplUrl + "scene/pageeffect/pageeffect.tpl.html",
                controller: "pageEffectCtrl",
                resolve: {
                    /**
                     * @return {?}
                     */
                    properties: function() {
                        return element;
                    }
                }
            }).result.then(function(p) {
                if (!$scope.tpl.obj.properties) {
                    $scope.tpl.obj.properties = {};
                }
                /** @type {null} */
                $scope.tpl.obj.properties.scratch = null;
                /** @type {null} */
                $scope.tpl.obj.properties.finger = null;
                /** @type {null} */
                $scope.tpl.obj.properties.fallingObject = null;
                /** @type {null} */
                $scope.tpl.obj.properties.effect = null;
                if ("无" !== p.name) {
                    $scope.tpl.obj.properties[p.value] = p.properties[p.value];
                }
                $scope.effectName = p.name;
            }, function() {
                $rootScope.$broadcast("clear.scratch.interval");
            });
        };
        var result;
        /** @type {null} */
        var text = null;
        $scope.$on("showStylePanel", function(dataAndEvents, attr) {
            var req = $(".content").eq(0);
            if (text) {
                text.show();
            } else {
                if ("style" === attr.activeTab) {
                    text = $compile('<div style-modal active-tab="style"></div>')($scope);
                } else {
                    if ("anim" === attr.activeTab) {
                        text = $compile('<div style-modal active-tab="anim"></div>')($scope);
                    } else {
                        if ("trigger" === attr.activeTab) {
                            text = $compile('<div style-modal active-tab="trigger"></div>')($scope);
                        } else {
                            if ("dropdown" === attr.activeTab) {
                                text = $compile('<div style-modal active-tab="dropdown"></div>')($scope);
                            }
                        }
                    }
                }
            }
            req.append(text);
        });
        $scope.$on("hideStylePanel", function() {
            if (text) {
                text.hide();
            }
        });
        /**
         * @param {?} onComplete
         * @param {?} funcToCall
         * @return {?}
         */
        $scope.refreshPage = function(onComplete, funcToCall) {
            return $scope.completeHtml2Canvas ? void $scope.completeHtml2Canvas.then(function() {
                $scope.refreshPage(onComplete, funcToCall);
            }) : (sceneService.resetCss(), $("#nr").empty(), $scope.tpl.obj.properties && delete $scope.tpl.obj.properties.scale, sceneService.templateEditor.parse({
                def: $scope.tpl.obj,
                appendTo: "#nr",
                mode: "edit"
            }), $rootScope.$broadcast("dom.changed"), void $rootScope.$broadcast("refreshPageBg"));
        };
        /**
         * @param {Element} obj
         * @param {number} index
         * @return {undefined}
         */
        $scope.navTo = function(obj, index) {
            /** @type {boolean} */
            $scope.controlView.pageList = true;
            sceneService.comPosition = {
                top: 0
            };
            if ($scope.isTplEditor) {
                /** @type {number} */
                $scope.pageLabelAll.length = 0;
                $scope.pageIdTag = obj.id;
                $scope.getPageTagLabel();
            }
            if (obj.id !== $scope.tpl.obj.id) {
                $scope.setEditableStatus();
                /** @type {boolean} */
                $scope.controlView.showBgTag = false;
                $scope.saveUsedFiles(function() {
                    $scope.saveScene(null, function() {
                        initScene(index + 1);
                        $location.$$search = {};
                        $location.search("pageId", obj.num);
                    });
                });
                two.clear();
            }
        };
        /**
         * @param {Function} $sanitize
         * @return {undefined}
         */
        $scope.saveUsedFiles = function($sanitize) {
            a.clearUsedFiles();
            a.clear("fileService1");
            if ($sanitize) {
                $sanitize();
            }
            /** @type {*} */
            items = JSON.parse(col.get("tplUse-" + $scope.user.id)) || [];
            /** @type {Array} */
            var ids = [];
            if (interval = "", items.length > 0) {
                /** @type {number} */
                var xx = 0;
                for (; xx < items.length; xx++) {
                    ids.push(items[xx].id);
                }
                /** @type {string} */
                //interval = ids.toString();
                //sceneService.recordTplUsage(interval).then(function(response) {
                //    if (response.data.success) {
                //        localStorage.removeItem("tplUse-" + $scope.user.id);
                //    }
                //});
            }
            /** @type {*} */
            var codeSegments = JSON.parse(col.get("bgPUse-" + $scope.user.id)) || [];
            if (r = [], received = [], cwd = "", expires = "", codeSegments.length > 0) {
                /** @type {number} */
                var i = 0;
                for (; i < codeSegments.length; i++) {
                    r.push(codeSegments[i].id);
                    received.push(codeSegments[i].fileType);
                }
                /** @type {string} */
                var cwd = r.toString();
                /** @type {string} */
                var expires = received.toString();
                fileService.saveFilesHistory(cwd, expires).then(function(response) {
                    if (response.data.success) {
                        localStorage.removeItem("bgPUse-" + $scope.user.id);
                    }
                });
            }
            /** @type {*} */
            var worlds = JSON.parse(col.get("audioPUse-" + $scope.user.id)) || [];
            if (rowids = [], sorted = [], service = "", encoding = "", worlds.length > 0) {
                /** @type {number} */
                var x = 0;
                for (; x < worlds.length; x++) {
                    rowids.push(worlds[x].id);
                    sorted.push(worlds[x].fileType);
                }
                /** @type {string} */
                var service = rowids.toString();
                /** @type {string} */
                var encoding = sorted.toString();
                fileService.saveFilesHistory(service, encoding).then(function(response) {
                    if (response.data.success) {
                        localStorage.removeItem("audioPUse-" + $scope.user.id);
                    }
                });
            }
            /** @type {*} */
            var layers = JSON.parse(col.get("shapeUse-" + $scope.user.id)) || [];
            if (t = [], n = [], p = "", timeout = "", layers.length > 0) {
                /** @type {number} */
                var l = 0;
                for (; l < layers.length; l++) {
                    t.push(layers[l].id);
                    n.push(layers[l].fileType);
                }
                /** @type {string} */
                var p = t.toString();
                /** @type {string} */
                var timeout = n.toString();
                fileService.saveFilesHistory(p, timeout).then(function(response) {
                    if (response.data.success) {
                        localStorage.removeItem("shapeUse-" + $scope.user.id);
                    }
                });
            }
        };
        /**
         * @return {undefined}
         */
        $scope.stopCopy = function() {
            /** @type {boolean} */
            copied = false;
        };
        /**
         * @param {Function} _arg
         * @return {undefined}
         */
        $scope.getOriginPageName = function(_arg) {
            p = _arg.name;
        };
        /** @type {Array} */
        var elemVars = [];
        /**
         * @return {undefined}
         */
        $scope.getPageNames = function() {
            var type = event.sceneId;
            sceneService.getPageNames(type).then(function(event) {
                $scope.pages = event.data.list;
                angular.forEach($scope.pages, function(unused, dataAndEvents) {
                    if (!unused.name) {
                        /** @type {string} */
                        unused.name = "第" + (dataAndEvents + 1) + "页";
                    }
                });
                $.extend(true, elemVars, event.data.list);
                initScene($location.search().pageId ? $location.search().pageId : $scope.pages[0].num);
            });
        };
        /** @type {null} */
        $scope.scene = null;
        sceneService.getSceneDetail(event.sceneId, $rootScope.branchid).then(function() {
            $scope.scene = sceneService.getCurrentScene();

            $scope.sceneSetting.oldBgAudio = $scope.scene.bgAudio;
            $scope.getPageNames();
        });
        /** @type {Array} */
        $scope.editableStatus = [];
        /**
         * @param {?} row
         * @param {?} v0
         * @return {undefined}
         */
        $scope.setEditableStatus = function(row, v0) {
            if (row !== undefined) {
                $scope.editableStatus[row] = v0;
            } else {
                /** @type {number} */
                var i = 0;
                for (; i < $scope.editableStatus.length; i++) {
                    /** @type {boolean} */
                    $scope.editableStatus[i] = false;
                }
            }
        };
        /**
         * @param {Function} param
         * @param {number} dataAndEvents
         * @return {undefined}
         */
        $scope.savePageNames = function(param, dataAndEvents) {
            if (!param.name) {
                /** @type {string} */
                param.name = "第" + (dataAndEvents + 1) + "页";
            }
            $scope.tpl.obj.name = param.name;
            if (p !== param.name) {
                sceneService.savePageNames($scope.tpl.obj).then(function() {
                    i18nNotifications.pushForCurrentRoute("page.change.success", "notify.success");
                });
            }
        };
        /**
         * @param {?} event
         * @return {undefined}
         */
        $scope.removeScratch = function(event) {
            event.stopPropagation();
            /** @type {null} */
            $scope.tpl.obj.properties.scratch = null;
            /** @type {null} */
            $scope.tpl.obj.properties.finger = null;
            /** @type {null} */
            $scope.tpl.obj.properties.fallingObject = null;
            /** @type {null} */
            $scope.tpl.obj.properties.effect = null;
        };
        $scope.$on("text.click", function(dataAndEvents, element, deepDataAndEvents) {
            $("#btn-toolbar").remove();
            $("body").append($compile("<toolbar></toolbar>")($scope));
            var top = $(element).offset().top;
            $timeout(function() {
                $("#btn-toolbar").css("top", top - 50);
                $("#btn-toolbar").show();
                $("#btn-toolbar").bind("click mousedown", function(event) {
                    event.stopPropagation();
                });
                $(element).wysiwyg_destroy();
                $(element).wysiwyg();
                element.focus();
                setTimeout(function() {
                    if (window.getSelection) {
                        /** @type {(Selection|null)} */
                        var selection = window.getSelection();
                        selection.modify("move", "left", "documentboundary");
                        selection.modify("extend", "right", "documentboundary");
                    }
                    if (deepDataAndEvents) {
                        document.execCommand("fontName", 0, "defaultFont");
                    }
                });
            });
        });
        /**
         * @param {Array} b
         * @return {undefined}
         */
        $scope.updatePosition = function(b) {
            var els = $scope.tpl.obj.elements;
            /** @type {Array} */
            var arr = [];
            /** @type {number} */
            var i = 0;
            for (; i < els.length; i++) {
                if (els[i].type + "" == "3") {
                    /** @type {number} */
                    els[i].num = 0;
                    arr.push(els[i]);
                    els.splice(i, 1);
                    break;
                }
            }
            /** @type {number} */
            var bi = 0;
            for (; bi < b.length; bi++) {
                /** @type {number} */
                i = 0;
                for (; i < els.length; i++) {
                    if (els[i].num === b[bi]) {
                        /** @type {number} */
                        els[i].num = bi + 1;
                        arr.push(els[i]);
                        els.splice(i, 1);
                        break;
                    }
                }
            }
            /** @type {Array} */
            $scope.tpl.obj.elements = arr;
        };
        /**
         * @return {undefined}
         */
        $scope.updateEditor = function() {
            var element = $("#nr");
            element.empty();
            if ($scope.tpl.obj.properties) {
                delete $scope.tpl.obj.properties.scale;
            }
            sceneService.templateEditor.parse({
                def: $scope.tpl.obj,
                appendTo: "#nr",
                mode: "edit"
            });
            $compile(element)($scope);
        };
        /** @type {boolean} */
        var Z = false;
        /**
         * @return {undefined}
         */
        $scope.openSetting = function() {
            /** @type {boolean} */
            $scope.sceneSetting.showFlag = !$scope.sceneSetting.showFlag;
        };
        /**
         * @param {string} theTitle
         * @return {undefined}
         */
        $scope.setOriginData = function(theTitle) {
            /** @type {string} */
            $scope.originData = theTitle;
        };
        $scope.$on("changeCss", function(dataAndEvents, message) {
            $scope.changeCssIndex = message.changZindex;
            sceneService.resetCss();
        });
        /**
         * @param {Object} recurring
         * @param {Function} fn
         * @return {?}
         */
        $scope.saveScene = function(recurring, fn) {
            if (!$scope.scene.name && (recurring && !$scope.sceneSetting.showFlag)) {
                return void ModalService.openMsgDialog({
                    msg: "尚未设置标题，请设置后再执行此操作",
                    btn: "去设置"
                }, function() {
                    /** @type {boolean} */
                    $scope.sceneSetting.showFlag = true;
                });
            }
            if (!Z) {
                if ($scope.sceneSetting.showFlag) {
                    return void $scope.sceneSetting.saveSceneSetting().then(function() {
                        $scope.saveScene(recurring, fn);
                    });
                }
                if ($scope.completeHtml2Canvas) {
                    return void $scope.completeHtml2Canvas.then(function() {
                        $scope.saveScene(recurring, fn);
                    });
                }
                if (Z = true, $scope.changeCssIndex && sceneService.resetCss(), $scope.originData === JSON.stringify($scope.tpl)) {
                    return fn && fn(), a.clear("sceneList"), recurring && (!$scope.scene.publishTime || $scope.scene.updateTime > $scope.scene.publishTime ? throttledUpdate() : i18nNotifications.pushForCurrentRoute("scene.save.success.published", "notify.success"), $scope.saveUsedFiles()), void(Z = false);
                }
                if (delete $scope.tpl.obj.scene, $scope.tpl.obj.properties && delete $scope.tpl.obj.properties.scale, $scope.tpl.obj.elements.length > 0) {
                    /** @type {*} */
                    var r = JSON.parse(col.get("editTextId")) || [];
                    /** @type {number} */
                    var i = 0;
                    for (; i < $scope.tpl.obj.elements.length; i++) {
                        if ($scope.tpl.obj.elements[i].type + "" == "2" && -1 !== $.inArray($scope.tpl.obj.elements[i].id, r)) {
                            var selector = $scope.tpl.obj.elements[i].content;
                            /** @type {RegExp} */
                            var rquickExpr = /font-family:(.*?);/g;
                            /** @type {Array} */
                            var match = [];
                            /** @type {Array} */
                            var files = [];
                            for (; null !== (match = rquickExpr.exec(selector));) {
                                files.push(match[1].trim());
                            }
                            var fonts = $scope.tpl.obj.elements[i].fonts;
                            var font = $scope.tpl.obj.elements[i].css.fontFamily || $scope.tpl.obj.elements[i].fontFamily;
                            if ($scope.tpl.obj.elements[i].preWoffPath) {
                                fonts[font] = $scope.tpl.obj.elements[i].preWoffPath;
                            }
                            var fileName;
                            for (fileName in fonts) {
                                if (-1 === files.indexOf(fileName)) {
                                    delete fonts[fileName];
                                }
                            }
                            $scope.tpl.obj.elements[i].fonts = fonts;
                            var p = $.inArray($scope.tpl.obj.elements[i].id, r);
                            r.splice(p, 1);
                        }
                    }
                    col.push("editTextId", JSON.stringify(r));
                }
                sceneService.saveScene($scope.tpl.obj).then(function(response) {
                    return a.clear("sceneList"), recurring && $scope.saveUsedFiles(), Z = false, response.data.success ? ($scope.scene.updateTime = (new Date).getTime(), $scope.originData = JSON.stringify($scope.tpl), fn && fn(), void(recurring && throttledUpdate())) : void alert("保存失败，服务器忙碌请稍后再试。");
                }, function() {
                    /** @type {boolean} */
                    Z = false;
                    alert("保存失败，服务器忙碌请稍后再试。");
                });
            }
        };
        /**
         * @param {string} transaction
         * @return {?}
         */
        $scope.publishScene = function(transaction) {
            return $scope.scene.name || $scope.sceneSetting.showFlag ? "2" === transaction && ($scope.scene.publishTime && ($scope.scene.updateTime <= $scope.scene.publishTime && !$scope.allowPublish)) ? void ModalService.openConfirmDialog({
                msg: "您未对已驳回场景做任何修改，请查看驳回消息，如不修改继续审核，还是不会被通过",
                confirmName: "坚持审核",
                cancelName: "退出"
            }, function() {
                /** @type {boolean} */
                $scope.allowPublish = true;
                $scope.publishScene(transaction);
            }) : 2 !== $scope.scene.status || $scope.allowPublish ? $scope.sceneSetting.showFlag ? void $scope.sceneSetting.saveSceneSetting().then(function() {
                $scope.publishScene();
            }) : $scope.sceneSetting.oldBgAudio !== $scope.scene.bgAudio ? void sceneService.saveSceneSettings($scope.scene).then(function() {
                if ($scope.scene.bgAudio) {
                    fileService.saveFilesHistory($scope.scene.bgAudio.id, 2).then(function() {
                        a.clear("fileService1");
                        $scope.sceneSetting.oldBgAudio = $scope.scene.bgAudio;
                        $scope.publishScene();
                    });
                } else {
                    $scope.sceneSetting.oldBgAudio = $scope.scene.bgAudio;
                    $scope.publishScene();
                }
            }) : $scope.completeHtml2Canvas ? void $scope.completeHtml2Canvas.then(function() {
                $scope.publishScene();
            }) : !transaction && (!$scope.allowPublish && ($scope.scene.publishTime && ($scope.scene.updateTime <= $scope.scene.publishTime && $scope.originData === JSON.stringify($scope.tpl)))) ? ($(window).unbind("beforeunload"), void window.open("promotion/share/" + $scope.sceneId + "/socialShare", "_self")) : ($scope.publishSceneInter = function() {
                sceneService.publishScene($scope.tpl.obj.sceneId, transaction).then(function(e) {
                    if (e.data.success) {
                        a.clear("sceneList");
                        if (transaction) {
                            ModalService.openMsgDialog({
                                msg: '该场景已经提交审核，系统会尽快给出审核结果并已经系统消息形式给出，请耐心等待<a style="color:#08a1ef;" href="" target="_blank">了解审核规则</a>',
                                confirmName: "确定"
                            }, function() {
                                $(window).unbind("beforeunload");
                                window.open("promotion/share/" + $scope.sceneId + "/socialShare", "_self");
                            });
                        } else {
                            i18nNotifications.pushForNextRoute("scene.publish.success", "notify.success");
                            $(window).unbind("beforeunload");
                            window.open("promotion/share/" + $scope.sceneId + "/socialShare", "_self");
                        }
                    } else {
                        if (transaction) {
                            ModalService.openMsgDialog({
                                msg: e.data.msg
                            });
                        }
                    }
                });
            }, void $scope.saveUsedFiles(function() {
                $scope.saveScene(null, function() {
                    if (1 === $scope.scene.staticStatus) {
                        ModalService.openConfirmDialog({
                            msg: "场景已经静态化,设置更改后不能及时更新,确定更改吗",
                            confirmName: "确定",
                            cancelName: "取消"
                        }, function() {
                            $scope.publishSceneInter();
                        });
                    } else {
                        $scope.publishSceneInter();
                    }
                });
            })) : void ModalService.openConfirmDialog({
                msg: "当前场景为不允许访问状态，发布场景将重新对外开放访问 ",
                confirmName: "坚持发布",
                cancelName: "保存退出"
            }, function() {
                /** @type {boolean} */
                $scope.allowPublish = true;
                if (transaction) {
                    $scope.publishScene(transaction);
                } else {
                    $scope.publishScene();
                }
            }, function() {
                $scope.saveScene(null, function() {
                    $(window).unbind("beforeunload");
                    window.open("promotion/share/" + $scope.sceneId + "/socialShare", "_self");
                });
            }) : void ModalService.openMsgDialog({
                msg: "尚未设置标题，请设置后再执行此操作",
                btn: "去设置"
            }, function() {
                /** @type {boolean} */
                $scope.sceneSetting.showFlag = true;
            });
        };
        /**
         * @return {undefined}
         */
        $scope.exitScene = function() {
            $location.$$search = {};
            if ($scope.originData === JSON.stringify($scope.tpl)) {
                $location.path("main");
            } else {
                ModalService.openConfirmDialog({
                    msg: "是否保存更改内容？",
                    confirmName: "保存",
                    cancelName: "不保存"
                }, function() {
                    $scope.saveScene();
                    $location.path("main");
                }, function() {
                    $location.path("main");
                });
            }
        };
        /**
         * @return {undefined}
         */
        $scope.duplicatePage = function() {
            $scope.saveScene(null, function() {
                initScene($scope.pageNum, false, true);
            });
        };
        /**
         * @return {undefined}
         */
        $scope.longAction = function() {

            if ($scope.addLong = true, window.localStorage) {
                var ids = localStorage.getItem("setLongAction");
                if (ids) {

                   // if (ids.indexOf($rootScope.user.id) > -1) {
                        /** @type {boolean} */
                        $scope.addLong = false;
                        $scope.insertPage();
                    //}
                }
            }
        };
        /**
         * @param {Object} longpage
         * @return {?}
         */
        $scope.insertPage = function(longpage) {

            ($scope.saveUsedFiles(
                function() {
                    $scope.saveScene(null, function() {
                        initScene($scope.pageNum, true, false,  longpage);
                    });
                }),
                void($("#pageList").height() >= 360 && $timeout(function() {
                    /** @type {(HTMLElement|null)} */
                    var list = document.getElementById("pageList");
                    /** @type {number} */
                    list.scrollTop = list.scrollHeight;
                    },
                    200)));
        };
        /**
         * @return {undefined}
         */
        $scope.selectPageLength = function() {
            /** @type {boolean} */
            $scope.showPageSet = false;
            $scope.insertPage($scope.newPageLength);
        };
        /**
         * @param {?} event
         * @return {undefined}
         */
        $scope.deletePage = function(event) {
            if (event.stopPropagation(), 1 !== $scope.pages.length && !$scope.loading) {
                /** @type {boolean} */
                $scope.loading = true;
                /** @type {boolean} */
                $scope.action = false;
                /** @type {boolean} */
                $rootScope.insistDelete = true;
                /** @type {boolean} */
                $rootScope.cancelDelete = true;
                /** @type {number} */
                var i = 0;
                for (; i < $scope.tpl.obj.elements.length; i++) {
                    var els = $scope.tpl.obj.elements;
                    if ("5" === els[i].type.toString()[0]) {
                        /** @type {boolean} */
                        $scope.action = true;
                    }
                }
                ModalService.openConfirmDialog({
                    msg: "页面删除后无法还原",
                    confirmName: "坚持删除",
                    cancelName: "稍后决定"
                }, function() {
                    /** @type {boolean} */
                    $rootScope.insistDelete = false;
                    /** @type {boolean} */
                    $rootScope.cancelDelete = false;
                    if ($scope.action === true) {
                        ModalService.openConfirmDialog({
                            msg: "确定删除此页，将同时删除该场景已收集的数据?"
                        }, function() {
                            initialize();
                        }, function() {
                            /** @type {boolean} */
                            $scope.loading = false;
                        });
                    } else {
                        initialize();
                    }
                }, function() {
                    /** @type {boolean} */
                    $rootScope.insistDelete = false;
                    /** @type {boolean} */
                    $rootScope.cancelDelete = false;
                    /** @type {boolean} */
                    $scope.loading = false;
                });
            }
        };
        /**
         * @return {undefined}
         */
        var initialize = function() {
            sceneService.deletePage($scope.tpl.obj.id).then(function(e) {
                /** @type {boolean} */
                $scope.loading = false;
                if (e.data.success) {
                    $location.$$search = {};
                    if ($scope.pages.length === $scope.pageNum) {
                        $scope.pages.pop();
                        $location.search("pageId", --$scope.pageNum);
                        initScene($scope.pageNum, false, false);
                    } else {
                        $scope.pages.splice($scope.pageNum - 1, 1);
                        $location.search("pageId", $scope.pageNum);
                        initScene($scope.pageNum, false, false);
                    }
                } else {
                    alert(e.data.msg);
                }
            }, function() {
                /** @type {boolean} */
                $scope.loading = false;
            });
        };
        /**
         * @return {undefined}
         */
        $scope.removeBG = function() {
            var els = $scope.tpl.obj.elements;
            /** @type {number} */
            var i = 0;
            for (; i < els.length; i++) {
                if (els[i].type + "" == "3") {
                    els.splice(i, 1);
                    var j;
                    /** @type {number} */
                    j = i;
                    for (; j < els.length; j++) {
                        els[j].num--;
                    }
                    break;
                }
            }
            $rootScope.$broadcast("remove.scene.bg");
        };
        /**
         * @param {?} event
         * @return {undefined}
         */
        $scope.removeBGAudio = function(event) {
            event.stopPropagation();
            /** @type {null} */
            $scope.scene.bgAudio = null;
        };
        $(".scene_title").on("paste", function(e) {
            e.preventDefault();
            var link = (e.originalEvent || e).clipboardData.getData("text/plain") || prompt("Paste something..");
            document.execCommand("insertText", false, link);
        });
        /** @type {Array} */
        $scope.myName = [{
            name: "我的"
        }];
        /** @type {Array} */
        $scope.myCompany = [{
            name: "企业"
        }];
        /**
         * @return {undefined}
         */
        $scope.creatCompanyTemplate = function() {
            var error = $.extend(true, {}, $scope.tpl.obj);
            if (delete error.scene, $rootScope.user) {
                /** @type {number} */
                var code = parseInt($rootScope.user.companyTplId, 10);
                if (code) {
                    /** @type {number} */
                    error.sceneId = code;
                } else {
                    if ($rootScope.companySceneId) {
                        error.sceneId = $rootScope.companySceneId;
                    } else {
                        /** @type {null} */
                        error.sceneId = null;
                    }
                }
                sceneService.saveCompanyTpl(error).then(function(e) {
                    if (e.data.success) {
                        i18nNotifications.pushForCurrentRoute("companytpl.setting.success", "notify.success");
                        $rootScope.companySceneId = e.data.obj;
                        $scope.getPageTplsByCompanyType();
                    }
                });
            } else {
                /** @type {Array} */
                $scope.myCompanyTpls = [];
            }
        };
        $rootScope.$on("saveCompanyTemplate", function() {
            $scope.creatCompanyTemplate();
        });
        /** @type {null} */
        var username = null;
        /**
         * @return {undefined}
         */
        $scope.getPageTplsByCompanyType = function() {
            if ($scope.myCompanyTpls = [], $scope.myCompany[0].active = true, !username) {
                if ($rootScope.companySceneId) {
                    username = $rootScope.companySceneId;
                } else {
                    /** @type {number} */
                    var id = parseInt($rootScope.user.companyTplId, 10);
                    if (id) {
                        /** @type {number} */
                        username = $rootScope.companySceneId = id;
                    }
                }
            }
            if (username) {
                sceneService.previewScene(username).then(function(event) {
                    $scope.myCompanyTpls = event.data.list;
                    /** @type {string} */
                    $scope.tabid = "company";
                });
            } else {
                /** @type {string} */
                $scope.tabid = "company";
            }
        };
        /**
         * @return {undefined}
         */
        $scope.getRecentlyUsedTpls = function() {
            /** @type {string} */
            $scope.tabid = "recentlyUsed";
            /** @type {*} */
            items = JSON.parse(col.get("tplUse-" + $scope.user.id)) || [];
            sceneService.recentlyUsedTpls().then(function(event) {
                $scope.myRecentlyTpls = event.data.list;
                /** @type {number} */
                var i = 0;
                for (; i < items.length; i++) {
                    /** @type {number} */
                    var idx = 0;
                    for (; idx < event.data.list.length; idx++) {
                        if (event.data.list[idx].id === items[i].id) {
                            $scope.myRecentlyTpls.splice(idx, 1);
                            idx--;
                        }
                    }
                }
                /** @type {number} */
                var index = 0;
                for (; index < items.length; index++) {
                    $scope.myRecentlyTpls.unshift(items[index]);
                }
                if ($scope.myRecentlyTpls.length > 18) {
                    $scope.myRecentlyTpls = $scope.myRecentlyTpls.slice(0, 18);
                }
            });
        };
        /**
         * @return {undefined}
         */
        $scope.setTplTab = function() {
            /** @type {string} */
            $scope.tabid = "template";
        };
        /**
         * @return {undefined}
         */
        $scope.creatMyTemplate = function() {
            var error = $.extend(true, {}, $scope.tpl.obj);
            if (delete error.scene, $rootScope.user) {
                /** @type {*} */
                var token = JSON.parse($rootScope.user.property);
                if (token && token.myTplId) {
                    error.sceneId = token.myTplId;
                } else {
                    if ($rootScope.mySceneId) {
                        error.sceneId = $rootScope.mySceneId;
                    } else {
                        /** @type {null} */
                        error.sceneId = null;
                    }
                }
                sceneService.saveMyTpl(error).then(function(event) {
                    i18nNotifications.pushForCurrentRoute("mytpl.setting.success", "notify.success");
                    $rootScope.mySceneId = event.data.obj;
                    $scope.getPageTplsByMyType();
                });
            } else {
                /** @type {Array} */
                $scope.myPageTpls = [];
            }
        };
        $scope.$on("saveMyTemplate", function() {
            $scope.creatMyTemplate();
        });
        /** @type {null} */
        var id = null;
        /**
         * @return {undefined}
         */
        $scope.getPageTplsByMyType = function() {
            if ($scope.myPageTpls = [], $scope.myName[0].active = true, !id) {
                if ($rootScope.mySceneId) {
                    id = $rootScope.mySceneId;
                } else {
                    /** @type {*} */
                    var results = JSON.parse($rootScope.user.property);
                    if (results) {
                        if (results.myTplId) {
                            id = $rootScope.mySceneId = results.myTplId;
                        }
                    }
                }
            }
            if (id) {
                sceneService.previewScene(id).then(function(event) {
                    $scope.myPageTpls = event.data.list;
                    /** @type {string} */
                    $scope.tabid = "myCollection";
                });
            } else {
                /** @type {string} */
                $scope.tabid = "myCollection";
            }
        };
        $scope.$on("myPageList.update", function(deepDataAndEvents, dataAndEvents, ignoreMethodDoesntExist, deferId) {
            if ("my-tpl" === dataAndEvents) {
                /** @type {number} */
                i = 0;
                for (; i < $scope.myPageTpls.length; i++) {
                    if ($scope.myPageTpls[i].id === deferId) {
                        $scope.myPageTpls.splice(i, 1);
                    }
                }
            }
            if ("company-tpl" === dataAndEvents) {
                /** @type {number} */
                i = 0;
                for (; i < $scope.myCompanyTpls.length; i++) {
                    if ($scope.myCompanyTpls[i].id === deferId) {
                        $scope.myCompanyTpls.splice(i, 1);
                    }
                }
            }
        });
        $scope.$on("myPageList.delete", function(deepDataAndEvents, dataAndEvents, element) {
            if ("company-tpl" === dataAndEvents) {
                if (21 === $rootScope.user.type) {
                    /** @type {string} */
                    element.context.firstElementChild.outerHTML = "";
                }
            }
        });
        var headers = {};
        /**
         * @param {number} key
         * @return {undefined}
         */
        $scope.getPageTplsByType = function(key) {
            if (headers[key]) {
                $scope.childCatrgoryList = headers[key];
                $scope.getPageTplTypestemp($scope.childCatrgoryList[0].id);
                childTagCut();
            } else {
                $scope.childCatrgoryList = headers[key] = keys.getPageTpls(key);
                $scope.getPageTplTypestemp($scope.childCatrgoryList[0].id);
                childTagCut();
            }
        };
        var employees = {};
        /**
         * @param {number} i
         * @return {undefined}
         */
        $scope.getPageTagLabel = function(i) {
            if (employees[i]) {
                $scope.pageLabel = employees[i];
                render();
            } else {
                if ($scope.scene && $scope.isAppEditor) {
                    pageTplService.getPageTagLabel(1601).then(function(event) {
                        $scope.pageLabel = employees[1601] = event.data.list;
                        render();
                    });
                } else {
                    $scope.pageLabel = employees[i] = keys.getPageTpls(i);
                    render();
                }
            }
        };
        /** @type {Array} */
        $scope.pageLabelAll = [];
        var list;
        /**
         * @return {undefined}
         */
        var render = function() {
            pageTplService.getPageTagLabelCheck($scope.pageIdTag).then(function(event) {
                list = event.data.list;
                /** @type {number} */
                var i = 0;
                for (; i < $scope.pageLabel.length; i++) {
                    var cluster = {
                        id: $scope.pageLabel[i].id,
                        name: $scope.pageLabel[i].name
                    };
                    /** @type {number} */
                    var p = 0;
                    for (; p < list.length; p++) {
                        if (list[p].id === $scope.pageLabel[i].id) {
                            /** @type {boolean} */
                            cluster.ischecked = true;
                            break;
                        }
                        /** @type {boolean} */
                        cluster.ischecked = false;
                    }
                    $scope.pageLabelAll.push(cluster);
                }
            });
        };
        /**
         * @return {undefined}
         */
        $scope.exitPageTplPreview = function() {
            $("#nr").empty();
            sceneService.templateEditor.parse({
                def: $scope.tpl.obj,
                appendTo: "#nr",
                mode: "edit"
            });
            $rootScope.$broadcast("dom.changed");
        };
        /**
         * @param {?} interval
         * @return {undefined}
         */
        $scope.insertPageTpl = function(interval) {
            /** @type {boolean} */
            $scope.loading = true;
            /**
             * @param {?} interval
             * @return {undefined}
             */
            var start = function(interval) {
                sceneService.getSceneTpl(interval).then(function(event) {
                    if ($scope.controlView.showBgTag = false, $scope.loading = false, "template" === $scope.tabid || "recentlyUsed" === $scope.tabid) {
                        /** @type {*} */
                        items = JSON.parse(col.get("tplUse-" + $scope.user.id)) || [];
                        /** @type {number} */
                        var i = 0;
                        for (; i < items.length; i++) {
                            if (items[i].id === event.data.obj.id) {
                                items.splice(i, 1);
                            }
                        }
                        var item = {
                            id: event.data.obj.id,
                            properties: {
                                thumbSrc: event.data.obj.properties.thumbSrc,
                                longPage: event.data.obj.properties.longPage
                            }
                        };
                        items.push(item);
                        col.push("tplUse-" + $scope.user.id, JSON.stringify(items));
                    }
                    if ($scope.tpl.obj.elements = sceneService.getElements(), $scope.tpl.obj.properties && delete $scope.tpl.obj.properties.scale, 1 === $scope.pageLength && $scope.tpl.obj.elements) {
                        /** @type {number} */
                        var j = 0;
                        for (; j < $scope.tpl.obj.elements.length; j++) {
                            if ($scope.tpl.obj.elements[j].type + "" == "3") {
                                delete $scope.tpl.obj.elements[j].properties.croptype;
                                delete $scope.tpl.obj.elements[j].properties.pageLength;
                                break;
                            }
                        }
                    }
                    $("#nr").empty();
                    doc.addPageHistory($scope.tpl.obj.id, $scope.tpl.obj.elements);
                    if ($scope.tpl.obj.properties) {
                        delete $scope.tpl.obj.properties.scale;
                    }
                    sceneService.templateEditor.parse({
                        def: $scope.tpl.obj,
                        appendTo: "#nr",
                        mode: "edit"
                    });
                    angular.forEach($scope.tpl.obj.elements, function(src) {
                        if (src.type + "" == "3") {
                            /** @type {boolean} */
                            $scope.controlView.showBgTag = true;
                            /** @type {Object} */
                            $scope.currentBgDef = src;
                        }
                    });
                    $rootScope.$broadcast("dom.changed");
                }, function() {
                    /** @type {boolean} */
                    $scope.loading = false;
                });
            };
            if ($scope.tpl.obj.elements && $scope.tpl.obj.elements.length > 0) {
                ModalService.openConfirmDialog({
                    msg: "页面模板会覆盖编辑区域已有组件，是否继续？",
                    confirmName: "是",
                    cancelName: "取消"
                }, function() {
                    start(interval);
                });
            } else {
                start(interval);
            }
        };
        /**
         * @return {undefined}
         */
        $scope.chooseThumb = function() {
            $modal.open({
                windowClass: "console img_console",
                templateUrl: "scene/console/bg.tpl.html",
                controller: "BgConsoleCtrl",
                resolve: {
                    /**
                     * @return {?}
                     */
                    obj: function() {
                        return {
                            fileType: "0"
                        };
                    }
                }
            }).result.then(function(messageEvent) {
                if (!$scope.tpl.obj.properties) {
                    $scope.tpl.obj.properties = {};
                }
                $scope.tpl.obj.properties.thumbSrc = messageEvent.data;
            }, function() {
                /** @type {null} */
                $scope.tpl.obj.properties.thumbSrc = null;
            });
        };
        $(window).bind("beforeunload", function() {
            return "请确认您的场景已保存";
        });
        $scope.$on("$destroy", function() {
            $(window).unbind("beforeunload");
            doc.clearHistory();
            sceneService.setCopy(false);
            utilPictures.clearInterval();
        });
        $scope.sortableOptions = {
            placeholder: "ui-state-highlight ui-sort-position",
            containment: "#containment",
            /**
             * @param {?} allBindingsAccessor
             * @param {Object} ui
             * @return {undefined}
             */
            update: function(allBindingsAccessor, ui) {
                var id = ui.item.sortable.dropindex + 1;
                var identity = $scope.pages[ui.item.sortable.index].id;
                $scope.saveScene(null, function() {
                    sceneService.changePageSort(id, identity).then(function(e) {
                        if (e.data.success) {
                            initScene(id, false, false);
                            $location.$$search = {};
                            $location.search("pageId", id);
                            $scope.pageNum = id;
                            $.extend(true, elemVars, $scope.pages);
                        } else {
                            $.extend(true, $scope.pages, elemVars);
                            alert(e.data.msg);
                        }
                    });
                });
            }
        };
        $scope.$on("history.changed", function() {
            $scope.canBack = doc.canBack($scope.tpl.obj.id);
            $scope.canForward = doc.canForward($scope.tpl.obj.id);
        });
        /**
         * @return {?}
         */
        $scope.back = function() {
            return $scope.completeHtml2Canvas ? void $scope.completeHtml2Canvas.then(function() {
                $scope.back();
            }) : ($scope.controlView.showBgTag = false, void sceneService.historyBack());
        };
        $scope.$on("refreshSetComps", function() {
            $scope.setComps = setCompService.init($scope.tpl.obj.elements);
        });
        /**
         * @return {?}
         */
        $scope.forward = function() {
            return $scope.completeHtml2Canvas ? void $scope.completeHtml2Canvas.then(function() {
                $scope.forward();
            }) : void sceneService.historyForward();
        };
        /**
         * @return {undefined}
         */
        $scope.openEffects = function() {
            if (!($scope.tpl.obj.properties && ($scope.tpl.obj.properties.scratch || ($scope.tpl.obj.properties.finger || ($scope.tpl.obj.properties.fallingObject || $scope.tpl.obj.properties.effect))))) {
                $scope.openPageEffectModal($scope.tpl.obj.properties);
            }
        };
        /**
         * @return {undefined}
         */
        $scope.openBgPanel = function() {
            if (!$scope.controlView.showBgTag) {
                $scope.createComp("3", $scope.longPage);
            }
        };
        /**
         * @return {undefined}
         */
        $scope.openAudioPanel = function() {
            if (!$scope.scene.bgAudio) {
                $scope.openAudioModal();
            }
        };
        /**
         * @param {string} name
         * @return {undefined}
         */
        $scope.closeOtherPanel = function(name) {
            /** @type {boolean} */
            var val = !$scope.$eval(name);
            /** @type {boolean} */
            $scope.showBackgroundPanel = false;
            /** @type {boolean} */
            $scope.showMusicPanel = false;
            /** @type {boolean} */
            $scope.showEffectsPanel = false;
            /** @type {boolean} */
            $scope.gridGuideSetting.showFlag = false;
            /** @type {boolean} */
            $scope.showZoomPanel = false;
            $scope.$broadcast("hideBgOption");
            /** @type {boolean} */
            $scope.showBgOptionPanel = false;
            $scope.$eval(name + "=" + val);
        };
        /**
         * @return {undefined}
         */
        $scope.removeAudio = function() {
            /** @type {null} */
            $scope.scene.bgAudio = null;
        };
        $scope.sceneSetting = {
            showFlag: false,
            oldBgAudio: null
        };
        /**
         * @return {undefined}
         */
        $scope.settingScene = function() {
            /** @type {boolean} */
            $scope.sceneSetting.showFlag = true;
        };
        if ("show" === $location.search().openSetting) {
            $timeout(function() {
                /** @type {boolean} */
                $scope.sceneSetting.showFlag = true;
            }, 100);
        }
        $scope.$on("show.edit.bg", function(dataAndEvents, theTitle) {
            /** @type {boolean} */
            $scope.controlView.showBgTag = true;
            $scope.currBgSrc = theTitle;
        });
        $scope.gridGuideSetting = {
            showFlag: false
        };
        /**
         * @param {?} pane
         * @return {undefined}
         */
        $scope.replaceBg = function(pane) {
            sceneService.openBgModal(pane, $scope.pageLength);
            $("#nr").find(".wrapper-background").css({
                animation: "",
                "animation-fill-mode": ""
            });
        };
        /** @type {Array} */
        var ids = [];
        /** @type {Array} */
        var traversed = [];
        /** @type {Array} */
        var checked = [];
        /** @type {Array} */
        var list2 = [];
        /**
         * @param {string} end1
         * @return {undefined}
         */
        $scope.showFirstTimeTip = function(end1) {
            if ($scope.sceneSetting.showFlag = false, "w" === end1) {
                if ($scope.showHeadTip = true, window.localStorage) {
                    var uHostName = localStorage.getItem("setHeadAction");
                    if (uHostName) {
                        ids = uHostName.split(",");
                        if (ids.indexOf($rootScope.user.id) > -1) {
                            /** @type {boolean} */
                            $scope.showHeadTip = false;
                            sceneService.createComp("w");
                        }
                    }
                }
            } else {
                if ("wp" === end1) {
                    if ($scope.showImageTip = true, window.localStorage) {
                        var oldClasses = localStorage.getItem("setImageAction");
                        if (oldClasses) {
                            traversed = oldClasses.split(",");
                            if (traversed.indexOf($rootScope.user.id) > -1) {
                                /** @type {boolean} */
                                $scope.showImageTip = false;
                                sceneService.createComp("wp");
                            }
                        }
                    }
                } else {
                    if ("wr" === end1 && ($scope.showVoiceTip = true, window.localStorage)) {
                        var param = localStorage.getItem("setVoiceAction");
                        if (param) {
                            checked = param.split(",");
                            if (checked.indexOf($rootScope.user.id) > -1) {
                                /** @type {boolean} */
                                $scope.showVoiceTip = false;
                                sceneService.createComp("wr");
                            }
                        }
                    }
                }
            }
        };
        /**
         * @param {?} dataAndEvents
         * @param {string} end1
         * @return {undefined}
         */
        $scope.switchShowFontTip = function(dataAndEvents, end1) {
            if ("w" === end1) {
                if (dataAndEvents) {
                    ids.push($rootScope.user.id);
                    localStorage.setItem("setHeadAction", ids.join(","));
                }
            } else {
                if ("wp" === end1) {
                    if (dataAndEvents) {
                        traversed.push($rootScope.user.id);
                        localStorage.setItem("setImageAction", traversed.join(","));
                    }
                } else {
                    if ("wr" === end1) {
                        if (dataAndEvents) {
                            checked.push($rootScope.user.id);
                            localStorage.setItem("setVoiceAction", checked.join(","));
                        }
                    } else {
                        if ("long" === end1) {
                            if (dataAndEvents) {
                                list2.push($rootScope.user.id);
                                localStorage.setItem("setLongAction", list2.join(","));
                            }
                        }
                    }
                }
            }
        };
        /**
         * @return {undefined}
         */
        $scope.addLongPage = function() {
            /** @type {boolean} */
            $scope.showPage = false;
            $modal.open({
                windowClass: "login-container six-contain",
                templateUrl: "scene/newLongPage.tpl.html",
                controller: "PageNewCtrl"
            }).result.then(function(deepDataAndEvents) {
                $scope.insertPage(deepDataAndEvents);
            });
        };
        /**
         * @return {undefined}
         */
        $scope.hidePageTip = function() {
            if (!col.get("create.showAddPageTip")) {
                col.push("create.showAddPageTip", false);
                /** @type {boolean} */
                $scope.showAddPageTip = false;
            }
        };
        /**
         * @return {undefined}
         */
        $scope.hideEffTip = function() {
            if (!col.get("create.showAddEffTip")) {
                col.push("create.showAddEffTip", false);
                /** @type {boolean} */
                $scope.showAddEffTip = false;
            }
        };
        /**
         * @param {string} prop
         * @return {undefined}
         */
        $scope.hideHeartTip = function(prop) {
            if (!col.get(prop)) {
                col.push(prop, false);
                /** @type {boolean} */
                $scope[prop] = false;
            }
        };
        $scope.customerService = $rootScope.customerService;
    }
}]).directive("changeColor", function() {
    return {
        /**
         * @param {?} tabCtrl
         * @param {Function} elem
         * @return {undefined}
         */
        link: function(tabCtrl, elem) {
            elem.bind("click", function() {
                $(elem).addClass("current");
            });
        }
    };
}).directive("thumbTpl", ["sceneService", "ModalService", function(dojo, stream) {
    return {
        scope: {
            myTpl: "="
        },
        replace: false,
        template: '<span class="bFlag_longPage" ng-if="myTpl.properties.longPage">长<i>{{myTpl.properties.longPage}}</i></span><div class="delete-element hint--bottom hint--rounded" ng-click="deleteMyTpl($event)" data-hint="删除此模板"><span class="eqf-scene-delete"></span></div>',
        /**
         * @param {?} $scope
         * @param {?} target
         * @param {Element} grid
         * @return {undefined}
         */
        link: function($scope, target, grid) {
            $scope.$emit("myPageList.delete", grid.id, target);
            if (grid.noDel) {
                target.empty();
            }
            /**
             * @param {?} event
             * @return {undefined}
             */
            $scope.deleteMyTpl = function(event) {
                event.stopPropagation();
                ModalService.openConfirmDialog({
                    msg: "确定删除此模板?"
                }, function() {
                    dojo.deletePage($scope.myTpl.id).then(function() {
                        $scope.$emit("myPageList.update", grid.id, target, $scope.myTpl.id);
                    }, function() {
                        alert("服务器异常!");
                    });
                });
            };
            $('<div class = "tmp-bg"></div>').appendTo(target);
            /** @type {boolean} */
            $scope.myTpl.istpl = true;
            dojo.templateEditor.parse({
                def: $scope.myTpl,
                appendTo: target,
                mode: "view",
                disEvent: true
            });
            var f = $(".edit_area", target).height();
            if (486 !== f) {
                $(".edit_area", target).css("transform", "scale(0.25) translateX(-480px) translateY(-" + (729 + 729 * (f / 486 - 1)) + "px)");
            } else {
                $(".edit_area", target).css("transform", "scale(0.25) translateX(-480px) translateY(-729px)");
            }
        }
    };
}]).directive("gridGuideSetting", ["gridGuide", function(options) {
    return {
        scope: true,
        template: '<div class="grid-guide-setting"><div class="setting-group"><span>网格开关</span><div class="setting-choice"><switch-btn ng-model="config.gridState"></switch-btn></div></div><div class="setting-group" style="height:60px;"><span style="height:24px;">网格颜色</span><div class="color-contain"><input class="color-picker-input" ng-model="grid.color" type="text" /><a class="color-picker" ng-style="{backgroundColor: grid.color}" ng-model="grid.color" colorpicker="rgba" disable="{{gridGuideSetting.showFlag}}"></a></div></div><div class="setting-group"><span>智能参考</span><div class="setting-choice"><switch-btn ng-model="config.guideState"></switch-btn></div></div><div class="setting-group"><span>吸附效果</span><div class="setting-choice"><switch-btn ng-model="config.snapState"></switch-btn></div></div></div>',
        /**
         * @param {?} scope
         * @param {Object} $scope
         * @return {undefined}
         */
        link: function(scope, $scope) {
            /**
             * @return {undefined}
             */
            function clickHandler() {
                scope.$apply(function() {
                    /** @type {boolean} */
                    scope.gridGuideSetting.showFlag = false;
                });
            }
            var $document = $(document);
            $scope.on("$destroy", function() {
                $document.unbind("click", clickHandler);
            });
            $document.click(clickHandler);
        },
        controller: ["$scope", function(self) {
            self.grid = options.grid;
            self.guide = options.guide;
            self.config = {
                gridState: self.grid.getVisable() || "enable",
                guideState: "false" === self.grid.getGuideState() ? "disable" : "enable",
                snapState: "false" === self.grid.getSnapState() ? "disable" : "enable"
            };
            self.$watch("config.gridState", function(deepDataAndEvents) {
                if ("enable" === deepDataAndEvents) {
                    /** @type {boolean} */
                    self.$parent.gridGuideSetting.isGridEnabled = true;
                    self.grid.show();
                } else {
                    if ("disable" === deepDataAndEvents) {
                        /** @type {boolean} */
                        self.$parent.gridGuideSetting.isGridEnabled = false;
                        self.grid.hide();
                    }
                }
                self.grid.setVisable(deepDataAndEvents);
            });
            self.$watch("grid.color", function(inValue) {
                if (inValue) {
                    self.grid.paint();
                    self.grid.setColor(inValue);
                }
            });
            self.$watch("config.guideState", function(dataAndEvents) {
                if ("enable" === dataAndEvents) {
                    /** @type {boolean} */
                    self.guide.options.enabled = true;
                    self.grid.setGuideState(true);
                } else {
                    if ("disable" === dataAndEvents) {
                        /** @type {boolean} */
                        self.guide.options.enabled = false;
                        self.grid.setGuideState(false);
                    }
                }
            });
            self.$watch("config.snapState", function(dataAndEvents) {
                if ("enable" === dataAndEvents) {
                    /** @type {boolean} */
                    self.guide.options.snap = true;
                    self.grid.setSnapState(true);
                } else {
                    if ("disable" === dataAndEvents) {
                        /** @type {boolean} */
                        self.guide.options.snap = false;
                        self.grid.setSnapState(false);
                    }
                }
            });
        }]
    };
}]).directive("converToImage", ["selectService", function() {
    /**
     * @param {?} allBindingsAccessor
     * @param {?} options
     * @return {undefined}
     */
    function init(allBindingsAccessor, options) {
        options.mousedown(function() {
            $(".content").trigger("mousedown");
        });
    }
    return {
        restrict: "EA",
        /** @type {function (?, ?): undefined} */
        link: init
    };
}]).directive("switchBtn", [function() {
    return {
        require: "ngModel",
        restrict: "AE",
        template: '<div class="switch" ng-click="switch()"><div class="circle-con"><i class="circle"></i></div></div>',
        /**
         * @param {?} $scope
         * @param {Object} scope
         * @param {?} tabCtrl
         * @param {?} ngModelCtrl
         * @return {undefined}
         */
        link: function($scope, scope, tabCtrl, ngModelCtrl) {
            var cb = scope.find(".switch");
            /**
             * @return {undefined}
             */
            ngModelCtrl.$render = function() {
                cb.toggleClass("switch-open", angular.equals(ngModelCtrl.$modelValue, "enable"));
                cb.toggleClass("switch-close", angular.equals(ngModelCtrl.$modelValue, "disable"));
            };
            cb.bind("click", function() {
                var disabled = cb.hasClass("switch-open");
                $scope.$apply(function() {
                    ngModelCtrl.$setViewValue(disabled ? "disable" : "enable");
                    ngModelCtrl.$render();
                });
            });
        }
    };
}]).directive("pageTplColor", [function() {
    return {
        require: "ngModel",
        restrict: "AE",
        template: '<em value="1" style="background-color:#ff5448"></em><em value="2" style="background-color:#f2a653"></em><em value="3" style="background-color:#f9ce49"></em><em value=4"" style="background-color:#44cb83"></em><em value="5" style="background-color:#56c6ff"></em><em value="6" style="background-color:#08a1ef"></em><em value="7" style="background-color:#7171ef"></em><em value="8" style="background-color:#cc62c7"></em><em value="9" style="background-color:#7c4611"></em><em value="10" style="background-color:#000000"></em><em value="124" style="border:1px solid #ccd5db;color:#000000;"></em><em style="position:relative;"><em style="background-color:#ff5448;top:0;left:0;"></em><em style="background-color:#f2a653;top:0;left:9px;"></em><em style="background-color:#08a1ef;top:9px;left:0;"></em><em style="background-color:#44cb83;top:9px;left:9px;"></em></em>',
        /**
         * @param {?} scope
         * @param {Object} $scope
         * @param {?} tabCtrl
         * @param {?} controller
         * @return {undefined}
         */
        link: function(scope, $scope, tabCtrl, controller) {
            /**
             * @return {undefined}
             */
            function clickHandler() {
                $document.unbind("click", clickHandler);
                scope.$apply(function() {
                    /** @type {boolean} */
                    scope.pageTpl.showColorPanel = false;
                });
            }
            var $document = $(document);
            var items = $scope.find("> em");
            /** @type {number} */
            var i = 0;
            for (; i < items.length; i++) {
                if (scope.pageTpl.color === $(items[i]).attr("value")) {
                    $(items[i]).addClass("eqf-yes2");
                }
            }
            $scope.on("$destroy", function() {
                $document.unbind("click", clickHandler);
                items.unbind("click");
            });
            $document.click(clickHandler);
            items.bind("click", function() {
                clickHandler();
                controller.$setViewValue($(this).attr("value"));
                var _wrapper = $(".select-color .tpl-color");
                if ($(this).attr("value") + "" == "124") {
                    _wrapper.css("border", "1px solid #ccd5db");
                } else {
                    _wrapper.css("border", "none");
                }
                _wrapper.css("background-color", $(this).css("background-color"));
            });
        }
    };
}]).directive("loadErr", [function() {
    return {
        restrict: "A",
        /**
         * @param {?} tabCtrl
         * @param {Object} elm
         * @param {Object} scope
         * @return {undefined}
         */
        link: function(tabCtrl, elm, scope) {
            elm.bind("error", function() {
                scope.$set("src", "/static/haibao/assets/images/create/pic.svg");
                elm.addClass("load-err");
            });
        }
    };
}]).directive("closePanel", [function() {
    return {
        scope: {
            pause: "@",
            model: "@"
        },
        restrict: "A",
        templateUrl: "",
        /**
         * @param {Object} scope
         * @param {Object} $scope
         * @return {undefined}
         */
        link: function(scope, $scope) {
            /**
             * @param {?} event
             * @return {undefined}
             */
            function fn(event) {
                if ("false" === scope.pause) {
                    event.stopPropagation();
                }
            }
            /**
             * @return {undefined}
             */
            function update() {
                scope.$apply(function() {
                    scope.$eval("$parent." + scope.model + "=false");
                });
            }
            var d = $(document);
            $scope.click(fn);
            d.click(update);
            $scope.on("$destroy", function() {
                d.unbind("click", update);
                $scope.unbind("click");
            });
        }
    };
}]).directive("pageScroll", ["sceneService", "editService", function(v, data) {
    return {
        scope: {
            pageH: "@"
        },
        restrict: "A",
        /**
         * @param {?} scope
         * @param {Object} el
         * @return {undefined}
         */
        link: function(scope, el) {
            el.on("mousewheel", function(event) {
                var f = el.height();
                /** @type {number} */
                var value = (f / 2 - 260) * data.currentScale;
                var scrollTop = this.scrollTop + event.originalEvent.deltaY;
                /** @type {number} */
                var tval = 486 * scope.pageH * data.currentScale - f + value;
                if (0.5 === data.currentScale) {
                    if (scope.pageH >= 4) {
                        tval += 100;
                    } else {
                        if (scope.pageH > 1) {
                            tval += 100;
                        }
                    }
                }
                if (0 >= scrollTop) {
                    /** @type {number} */
                    scrollTop = 0;
                }
                if (scrollTop > tval) {
                    if (scrollTop >= tval + value / 2 + 100) {
                        el.scrollTop(tval + value / 2 + 100);
                        event.preventDefault();
                    }
                    scrollTop = this.scrollTop;
                }
                /** @type {number} */
                var meterPos = scrollTop / data.currentScale - (data.currentScale >= 3 ? 100 : 0);
                if (meterPos + 400 - value > 486 * scope.pageH) {
                    /** @type {number} */
                    meterPos = 486 * scope.pageH - 200;
                } else {
                    if (0 > meterPos) {
                        /** @type {number} */
                        meterPos = 0;
                    }
                }
                el.find(".history").css("top", meterPos);
                if (scrollTop / data.currentScale + 100 > 486 * scope.pageH) {
                    /** @type {number} */
                    scrollTop = 486 * scope.pageH - 130;
                } else {
                    if (data.currentScale >= 1) {
                        /** @type {number} */
                        scrollTop = (scrollTop - 100) / data.currentScale;
                    } else {
                        scrollTop /= data.currentScale;
                    }
                }
                v.comPosition = {
                    top: scrollTop
                };
            });
            scope.$watch("pageH", function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    el.find(".history").css("top", 0);
                    el.scrollTop(0);
                }
            });
            scope.$on("recoveryScale", function() {
                var startIdx = el.height();
                /** @type {number} */
                var n = (startIdx / 2 - 260) * data.currentScale;
                /** @type {number} */
                var scrollTop = 486 * scope.pageH * data.currentScale - startIdx + n;
                if (el.scrollTop() > scrollTop) {
                    /** @type {number} */
                    n = scrollTop / data.currentScale - (data.currentScale >= 3 ? 50 : 0);
                    if (n > 0) {
                        el.scrollTop(scrollTop + 50);
                        el.find(".history").css("top", n);
                        v.comPosition = {
                            top: scrollTop
                        };
                    } else {
                        el.scrollTop(0);
                        el.find(".history").css("top", 0);
                        v.comPosition = {
                            top: 0
                        };
                    }
                }
            });
        }
    };
}]).controller("PageNewCtrl", ["$scope", function(base) {
    /** @type {number} */
    base.newPageLength = 2;
    /** @type {Array} */
    base.pageLengths = [{
        name: "2页",
        value: 2
    }, {
        name: "3页",
        value: 3
    }, {
        name: "4页",
        value: 4
    }, {
        name: "5页",
        value: 5
    }];
    /**
     * @return {undefined}
     */
    base.cancel = function() {
        base.$dismiss();
    };
    /**
     * @return {undefined}
     */
    base.create = function() {
        base.$close(base.newPageLength);
    };
    /**
     * @param {Blob} gradients
     * @return {undefined}
     */
    base.changePageLength = function(gradients) {
        /** @type {Blob} */
        base.newPageLength = gradients;
    };
}]).directive("psdUpload", ["psdUploadService", "ModalService", function(self, stream) {
    return {
        restrict: "A",
        template: '<div ng-click="openFileChooseBox()" id="psdUploadDivId"><em class="imp heart" ng-if="showPhoneTip"></em><i class="eqf-ps" style="font-size:15px;"></i></div>',
        scope: {
            psdUpload: "="
        },
        /**
         * @param {?} scope
         * @return {undefined}
         */
        link: function(scope) {
            /**
             * @param {Array} node
             * @param {?} params
             * @return {undefined}
             */
            function init(node, params) {
                /**
                 * @return {undefined}
                 */
                function start() {
                    if (node[0].size > 31457280) {
                        ModalService.openMsgDialog({
                            msg: "psd文件大小超过30M了，上传文件不可以超过30M。"
                        });
                    } else {
                        $("#psdLoading").show();
                        $.when(self.psdDecompose(node, params)).done(function(dig) {
                            if ($("#psdLoading").hide(), dig.length > 0) {
                                var c = dig.join(",");
                                ModalService.openMsgDialog({
                                    msg: '图层 "' + c + '" 超过5M，我们已经屏蔽掉了！'
                                });
                            }
                        });
                    }
                }
                /** @type {boolean} */
                var f = false;
                /** @type {string} */
                var src = "http://cdn.bootcss.com/psd.js/3.1.0/psd.min.js";
                /** @type {NodeList} */
                var codeSegments = document.getElementsByTagName("script");
                /** @type {number} */
                var i = 0;
                for (; i < codeSegments.length; i++) {
                    if (codeSegments[i].src === src) {
                        /** @type {boolean} */
                        f = true;
                    }
                }
                if (f) {
                    start();
                } else {
                    var res = eqShow.delayLoadJSAndCSS(src, "js");
                    /**
                     * @return {undefined}
                     */
                    res.onload = function() {
                        start();
                    };
                }
            }
            /**
             * @return {undefined}
             */
            scope.openFileChooseBox = function() {
                /** @type {boolean} */
                scope.psdUpload.showPsdWarn = true;
                /** @type {number} */
                scope.psdUpload.currentNum = 0;
                /** @type {number} */
                scope.psdUpload.total = 0;
            };
            /**
             * @return {undefined}
             */
            scope.psdUpload.openPsdFileChooseBox = function() {
                $("#psdUploadDivId").append($('<input type="file" id="psdUploadId" style="display:none;" accept=".psd"/>'));
                var fileInput = $("#psdUploadId");
                fileInput.trigger("click");
                fileInput.change(function() {
                    fileInput.remove();
                    if (self.validationPSDFile(this.files)) {
                        init(this.files, scope.psdUpload);
                    }
                });
                /** @type {boolean} */
                scope.psdUpload.showPsdWarn = false;
            };
        }
    };
}]);