angular.module("scene").controller("SceneCtrl", ["$window", "$scope", "$rootScope", "$location", "sceneService", "$modal", "ModalService",   "staticResService",   "security", "$http",
    function ($window, $scope, $rootScope, $location, sceneService, $modal, ModalService,  staticResService,   security, $http) {
    $scope.PREFIX_FILE_HOST = PREFIX_FILE_HOST;
    $scope.PREFIX_CLIENT_HOST = PREFIX_HOST;
    $scope.user = security.currentUser;
    if (99 === $scope.user.type || (3 === $scope.user.type || 4 === $scope.user.type)) {
        /** @type {boolean} */
        $scope.fillSceneAuth = true;
    } else {
        /** @type {boolean} */
        $scope.fillSceneAuth = false;
    }
    /** @type {Array} */
    $scope.childAllList = [];
    /** @type {boolean} */
    var allowInactive = false;
    $scope.scene = {
        type: null
    };
    /** @type {number} */
    $scope.totalItems = 0;
    /** @type {number} */
    $scope.currentPage = 1;
    /** @type {string} */
    $scope.toPage = "";
    /** @type {number} */
    $scope.pageSizeList = 12;
    /** @type {number} */
    $scope.childcat = 0;
    /** @type {number} */
    var node = 0;
    /** @type {boolean} */
    $scope.blankSample = true;
    var reversed;
    /** @type {string} */
    reversed = window.location.search.split("=")[1];
    if (reversed) {
        $location.search("useTplId", null);
    }
    $scope.currentTpl = {
        exemplarPreview: false
    };
    var opts = {
        sceneType: null,
        tagId: "",
        order: "",
        pageNo: "0",
        targetPage: "",
        name: ""
    };
    /**
     * @return {?}
     */
    $scope.typeList = function () {
        /** @type {string} */
        var materialArgs = "statics/typeList";
        return $http({
            withCredentials: true,
            method: "GET",
            url: API_URL + materialArgs
        });
    };
     $scope.typeList().success(function (message) {

        $scope.pageTplTypesList = message.list;
    });
    /** @type {Array} */
    $scope.fillTypeList = [{
        type: "111",
        name: "\u884c\u4e1a"
    }, {
        type: "112",
        name: "\u4e2a\u4eba"
    }, {
        type: "110",
        name: "\u4f01\u4e1a"
    }, {
        type: "113",
        name: "\u8282\u5047"
    }, {
        type: "114",
        name: "\u98ce\u683c"
    }, {
        type: "115",
        name: "\u54c1\u724c"
    }];
    /**
     * @param {string} type
     * @return {undefined}
     */
    $scope.switchSample = function (type) {
        /** @type {string} */
        $scope.isActive = type;
        if ("scene" === type) {
            /** @type {boolean} */
            $rootScope.isFillScene = allowInactive = false;
            $scope.allpage(null);
        } else {
            /** @type {boolean} */
            $rootScope.isFillScene = allowInactive = true;
            $scope.getPageTplsByType($scope.fillTypeList[0].type);
        }
    };
    /**
     * @param {Array} recurring
     * @return {undefined}
     */
    var transport = function (recurring) {
        sceneService.getPageTplByAll().then(function (event) {
            $scope.childAllList = event.data.list;
        });
    };
    /**
     * @param {number} recurring
     * @return {undefined}
     */
    $scope.allpage = function (recurring) {
        /** @type {number} */
        opts.sceneType = recurring;
        /** @type {number} */
        $scope.childcat = 0;
        $scope.getPageTpls(1, null, null, 1, 12, opts.order);
        /** @type {Array} */
        $scope.newArrayGroupCat = [];
        /** @type {boolean} */
        $scope.blankSample = true;
    };
    $scope.canvasUrl = PREFIX_SHOW_HOST;
    /**
     * @param {number} size
     * @param {number} url
     * @return {undefined}
     */
    $scope.getCompanyTpl = function (size, url) {
        /** @type {number} */
        $scope.childcat = 1;
        /** @type {Array} */
        $scope.childCatrgoryList = [];
        /** @type {Array} */
        $scope.newArrayGroupCat = [];
        /** @type {boolean} */
        $scope.blankSample = 12 === url ? false : true;
        sceneService.getCompanyTpls(size, url, opts.order).then(function (event) {
            if (event.data.list && event.data.list.length > 0) {
                $scope.tpls = event.data.list;
                $scope.totalItems = event.data.map.count + 1;
                $scope.currentPage = event.data.map.pageNo;
                $scope.allPageCount = event.data.map.count;
                /** @type {string} */
                $scope.toPage = "";
            } else {
                /** @type {Array} */
                $scope.tpls = [];
                /** @type {boolean} */
                $scope.blankSample = false;
            }
        });
    };
    /**
     * @param {number} i
     * @return {?}
     */
    $scope.pageChanged = function (i) {
        return opts.targetPage = i, $scope.toPage = i, allowInactive || i > 1 ? ($scope.pageSizeList = 12, $scope.blankSample = false) : ($scope.pageSizeList = 12, $scope.blankSample = true), 1 > i || i > $scope.totalItems / 12 + 1 ? void alert("\u6b64\u9875\u8d85\u51fa\u8303\u56f4") : void("" + $scope.childcat == "1" ? $scope.getCompanyTpl(i, $scope.pageSizeList, opts.order) : $scope.getPageTpls(1, opts.sceneType, opts.tagId, i, $scope.pageSizeList, opts.order, null, opts.name));
    };
    /**
     * @param {?} query
     * @return {undefined}
     */
    $scope.preview = function (query) {
        var url = PREFIX_HOST + "/view.html?sceneId=" + query;
        window.open(url, "_blank");
    };
    /**
     * @param {?} cssprop
     * @return {?}
     */
    $scope.getStyle = function (cssprop) {
        return {
            "background-image": "url(" + PREFIX_FILE_HOST + cssprop + ")",
            "background-size": "cover"
        };
    };

    /**
     * @return {?}
     */
    $scope.openCustomActive = function () {
        return "" + $scope.user.checkPhone != "1" ? void ModalService.openMsgDialog({
            msg: "\u8bf7\u5148\u7ed1\u5b9a\u624b\u673a!"
        }) : $scope.user.memberType ? void $modal.open({
            windowClass: "seven-contain",
            templateUrl: tplUrl + "scene//console/customActivities.tpl.html",
            controller: "CustomActivitiesCtrl",
            resolve: {
                /**
                 * @return {?}
                 */
                activityInfo: function () {
                    return $scope.activityObj;
                },
                /**
                 * @return {?}
                 */
                userXd: function () {
                    return $scope.userXd;
                }
            }
        }).result.then(function (theTitle) {
            /** @type {(Element|string)} */
            $scope.activityObj = theTitle;
        }) : void ModalService.openConfirmDialog({
            msg: "\u8bf7\u5347\u7ea7\u4f1a\u5458\u7c7b\u578b\u4ee5\u4f7f\u7528\u8be5\u529f\u80fd",
            confirmName: "\u7acb\u5373\u5347\u7ea7",
            cancelName: "\u6211\u77e5\u9053\u4e86"
        }, function () {
            window.open("/privilege");
        });
    };
    /**
     * @param {?} e
     * @return {undefined}
     */
    $scope.previewScene = function (e) {
        $rootScope.tplObj = e;
        $location.path("/v/" + e.code);
    };
    /**
     * @param {boolean} options
     * @return {?}
     */
    $scope.createScene = function (options) {
        if (allowInactive && (options.fillScene = true), options && (1 === $scope.user.type && "" + options.isCompanyTemp == "1")) {
            return void ModalService.openConfirmDialog({
                msg: "\u514d\u8d39\u5347\u7ea7\u4f01\u4e1a\u4f1a\u5458\u53ef\u4f7f\u7528 \u4f1a\u5458\u4e13\u5c5e\u573a\u666f",
                confirmName: "\u514d\u8d39\u5347\u7ea7",
                cancelName: "\u518d\u770b\u770b"
            }, function () {
                window.open("/privilege");
            });
        }
        if (options && options.price) {
            var tplPrice = options.disCountPrice || (parseFloat(options.price) || 0);
            var map = {
                tplPrice: tplPrice,
                userXd: $scope.userXd,
                scene: options
            };
            if (-1 !== [7, 8, 9].indexOf($scope.user.memberType) && -1 !== [2, 21].indexOf($scope.user.type)) {
                /** @type {boolean} */
                map.bFlagMember = true;
            } else {
                /** @type {boolean} */
                map.bFlagMember = false;
            }
            $modal.open({
                windowClass: "login-container six-contain",
                templateUrl: tplUrl + "scene//buySample.tpl.html",
                controller: "SceneBuySample",
                resolve: {
                    /**
                     * @return {?}
                     */
                    buySampleObject: function () {
                        return map;
                    }
                }
            }).result.then(function (dataAndEvents) {
                $modal.open({
                    windowClass: "login-container six-contain",
                    templateUrl: $rootScope.tplUrl + "scene/createNew.tpl.html",
                    controller: "SceneNewCtrl",
                    resolve: {
                        /**
                         * @return {?}
                         */
                        items: function () {
                            return options;
                        },
                        /**
                         * @return {?}
                         */
                        groupCom: function () {
                            return dataAndEvents;
                        }
                    }
                });
            });
        } else {
            $modal.open({
                windowClass: "login-container six-contain",
                templateUrl: $rootScope.tplUrl + "scene/createNew.tpl.html",
                controller: "SceneNewCtrl",
                resolve: {
                    /**
                     * @return {?}
                     */
                    items: function () {
                        return options;
                    },
                    /**
                     * @return {?}
                     */
                    groupCom: function () {
                        return null;
                    }
                }
            });
        }
    };
    if ($rootScope.tplId) {
        dataAndEvents.getUserXd().then(function (event) {
            $scope.userXd = event.data.obj || 0;
        }).then(function () {
            $scope.createScene($rootScope.tplId);
        }).then(function () {
            /** @type {null} */
            $rootScope.tplId = null;
        });
    }
    if (reversed) {
        dataAndEvents.getUserXd().then(function (event) {
            $scope.userXd = event.data.obj || 0;
        }).then(function () {
            sceneService.getSceneById(reversed).then(function (msg) {
                if (msg.data.success) {
                    $scope.createScene(msg.data.obj);
                } else {
                    ModalService.openMsgDialog({
                        msg: msg.data.msg
                    });
                }
            });
        }).then(function () {
            /** @type {null} */
            reversed = null;
        });
    }
    /**
     * @param {?} cssprop
     * @return {?}
     */
    $scope.getStyle = function (cssprop) {
        return {
            "background-image": "url(" + PREFIX_FILE_HOST + cssprop + ")"
        };
    };
    /**
     * @param {Event} ev
     * @return {undefined}
     */
    $scope.show = function (ev) {
        console.log(ev.target);
        $(ev.target).children(".cc").css("display", "block");
    };
    /**
     * @param {?} deepDataAndEvents
     * @param {string} dataAndEvents
     * @return {undefined}
     */
    $scope.filterTpl = function (  dataAndEvents) {
        if ("default" === dataAndEvents) {
            /** @type {boolean} */
            $scope.selete = false;
            /** @type {null} */
            opts.order = null;
        } else {
            /** @type {boolean} */
            $scope.selete = true;

                /** @type {number} */
                opts.order = 2;

        }
        if ("" + $scope.childcat == "1") {
            $scope.getCompanyTpl(1, $scope.pageSizeList, opts.order);
        } else {
            $scope.getPageTpls(null, opts.sceneType, opts.tagId, node, 12, opts.order);
        }
    };
    var store = {};
    /** @type {Array} */
    var item = [];
    /**
     * @param {number} url
     * @return {undefined}
     */
    $scope.getPageTplsByType = function (url) {
        /** @type {number} */
        opts.sceneType = url;
        /** @type {number} */
        $scope.childcat = url;
        /** @type {number} */
        $scope.categoryId = 0;
        if (allowInactive) {
            /** @type {number} */
            $scope.pageSizeList = 12;
        } else {
            /** @type {number} */
            $scope.pageSizeList = 12;
        }
        if (store[url]) {
            item = store[url];
            if (item.length) {
                forMethods();
                $scope.getPageTpls(1, opts.sceneType, item[0].id, node, $scope.pageSizeList, opts.order);
            } else {
                /** @type {Array} */
                $scope.newArrayGroupCat = [];
                $scope.getPageTpls(1, opts.sceneType, null, node, $scope.pageSizeList, opts.order);
            }
        } else {
            sceneService.getPageTplTypesTwo(url, url).then(function (event) {
                item = store[url] = event.data.list;
                if (item.length) {
                    forMethods();
                    $scope.getPageTpls(1, opts.sceneType, item[0].id, node, $scope.pageSizeList, opts.order);
                } else {
                    /** @type {Array} */
                    $scope.newArrayGroupCat = [];
                    $scope.getPageTpls(1, opts.sceneType, null, node, $scope.pageSizeList, opts.order);
                }
            });
        }
    };
    /**
     * @return {undefined}
     */
    var forMethods = function () {
        /** @type {null} */
        var groupId = null;
        /** @type {Array} */
        var chunks = [];
        /** @type {Array} */
        var code = [];
        var i;
        for (i in item) {
            if (item[i].groupId !== groupId) {
                /** @type {Array} */
                code = [];
                groupId = item[i].groupId;
                chunks.push(code);
            }
            code.push(item[i]);
        }
        chunks.splice(4, chunks.length);
        if (chunks.length) {
            /** @type {Array} */
            $scope.newArrayGroupCat = chunks;
        } else {
            /** @type {Array} */
            $scope.newArrayGroupCat = [];
        }
    };
    if (0 === $scope.childcat || "0" === $scope.childcat) {
        // transport(null);
    }
    /** @type {string} */
    $scope.freeTplChoice = "";
    /**
     * @param {Object} theTitle
     * @return {undefined}
     */
    $scope.freeTpl = function (theTitle) {
        /** @type {Object} */
        $scope.freeTplChoice = theTitle;
        $scope.tplnew("new");
    };
    /**
     * @param {number} deepDataAndEvents
     * @param {?} emptyGet
     * @param {Object} bizType
     * @param {number} tagId
     * @param {number} pageNo
     * @return {undefined}
     */
    $scope.getPageTpls = function ( emptyGet, bizType, tagId, pageNo, pageSize) {
        if (allowInactive) {
            /** @type {boolean} */
            $scope.blankSample = false;
            /** @type {number} */
            pageNo = 12;
        } else {
            /** @type {boolean} */
            $scope.blankSample = 12 === pageNo ? true : false;
        }
        /** @type {Object} */
        $scope.categoryId = bizType;
        /** @type {Object} */
        opts.tagId = bizType;
        /** @type {string} */
        var description = $scope.freeTplChoice ? $scope.freeTplChoice + "=1" : "";
        //function(keepData, bizType, tagId, pageNo, pageSize, order, freeTplSetting, name, username)

        sceneService.getPageTpls(  emptyGet, bizType, tagId, pageNo, pageSize, opts.order, description, opts.name);
    };
    $scope.$on("getSampleList", function () {
        var results = sceneService.scenes;
        if (results.list && results.list.length > 0) {
            $scope.tpls = results.list;
            $scope.totalItems = results.map.count;
            $scope.currentPage = results.map.pageNo;
            $scope.allPageCount = results.map.count;
            $scope.toPage = results.map.pageNo;
            /** @type {number} */
            var i = 0;
            for (; i < $scope.tpls.length; i++) {
                if ($scope.tpls[i].avatar) {
                    if (0 === $scope.tpls[i].avatar.indexOf("http://")) {
                        $scope.tpls[i].avatar = $scope.tpls[i].avatar;
                    } else {
                        $scope.tpls[i].avatar = PREFIX_FILE_HOST + $scope.tpls[i].avatar;
                    }
                }
            }
        } else {
            /** @type {Array} */
            $scope.tpls = [];
            /** @type {number} */
            $scope.totalItems = 0;
            /** @type {boolean} */
            $scope.blankSample = false;
        }
    });
    /** @type {null} */
    $scope.name = null;
    /**
     * @param {Event} e
     * @param {string} arg
     * @return {undefined}
     */
    $scope.EnterPress = function (e, arg) {
        var ev = e || window.event;
        if (13 === ev.keyCode) {
            $scope.submit(arg);
        }
    };
    /** @type {boolean} */
    $scope.searchButton = true;
    var suiteView = {};
    /** @type {number} */
    var attributes = 11;
    /**
     * @return {undefined}
     */
    var replace = function () {
        if (allowInactive) {
            /** @type {number} */
            attributes = 12;
        } else {
            /** @type {boolean} */
            $scope.blankSample = true;
        }
    };
    /**
     * @param {string} target
     * @return {undefined}
     */
    $scope.submit = function (target) {
        /** @type {string} */
        opts.name = target;
        /** @type {string} */
        $scope.name = target;
        replace();
        sceneService.getPageTpls(1, opts.sceneType, opts.tagId, node, attributes, opts.order, null, target);
        /** @type {boolean} */
        $scope.searchButton = false;
        /** @type {boolean} */
        suiteView.refresh = true;
    };
    /**
     * @param {Object} inputStr
     * @return {undefined}
     */
    $scope.changeName = function (inputStr) {
        /** @type {boolean} */
        $scope.searchButton = true;
        if ("" === inputStr) {
            if (suiteView.refresh) {
                /** @type {string} */
                opts.name = "";
                replace();
                sceneService.getPageTpls(1, opts.sceneType, opts.tagId, node, attributes, opts.order, null, inputStr);
            }
        }
    };
    /**
     * @return {undefined}
     */
    $scope.clearSearch = function () {
        /** @type {boolean} */
        $scope.searchButton = true;
        /** @type {string} */
        $scope.name = "";
        /** @type {string} */
        opts.name = "";
        replace();
        sceneService.getPageTpls(1, opts.sceneType, opts.tagId, node, attributes, opts.order, null);
    };
    /**
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    $scope.userScene = function ( ) {
        sceneService.getPageTpls(1, null, null, node, $scope.pageSizeList, opts.order, null, null );
    };
    /**
     * @param {?} tpl
     * @return {undefined}
     */
    $scope.openPreview = function (tpl) {
        /** @type {boolean} */
        $scope.currentTpl.exemplarPreview = true;
        $scope.currentTpl.tpl = tpl;
    };
    if ($rootScope.isFillScene) {
        $scope.switchSample("fill");
    } else {
        $scope.switchSample("scene");
    }
}])
