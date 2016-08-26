angular.module("main").controller("MainCtrl",
    ["$rootScope", "$scope", "$location", "security", "MineService", "dataService", "sceneService", "ModalService", "$modal", "usercenterService", "i18nNotifications", "configSerService", "$filter", "staticResService", "$timeout", "dataCacheService", "$route", "storageService", "fontService",
        function ($rootScope, $scope, $location, data, p, dataAndEvents, assert, stream, $modal, jQuery, notifications, textAlt, keepData, deepDataAndEvents, $sanitize,
                                                                                                                                                                                                                                                                                                                                                          opt_attributes, leBook, matcherFunction, l, ignoreMethodDoesntExist) {
    /**
     * @param {?} r
     * @return {undefined}
     */


    /**
     * @param {?} r
     * @return {undefined}
     */
    function cb(r) {
        $modal.open({
            windowClass: "six-contain",
            templateUrl: $rootScope.tplUrl + "main/console/transferscene.tpl.html",
            controller: "TransferSceneCtrl",
            resolve: {
                /**
                 * @return {?}
                 */
                sceneId: function () {
                    return {
                        sceneId: r
                    };
                }
            }
        }).result.then(function () {
            $scope.getMyScenes();
        }, function () {
            $scope.getMyScenes();
        });
    }

    /**
     * @param {?} event
     * @return {undefined}
     */
    function getNext(event) {
        var c;
        /** @type {string} */
        var msg = "确定删除此场景?";
        if (2 === $scope.currentUser.type || ("2" === $scope.currentUser.type || (21 === $scope.currentUser.type || "21" === $scope.currentUser.type))) {
            if ($scope.currentUser.memberType) {
                switch ($scope.currentUser.memberType) {
                    case 1:
                        ;
                    case 2:
                        ;
                    case 3:
                        ;
                    case 4:
                        /** @type {number} */
                        c = 3;
                        break;
                    case 6:
                        ;
                    case 7:
                        /** @type {number} */
                        c = 7;
                        break;
                    case 8:
                        ;
                    case 9:
                        /** @type {number} */
                        c = 15;
                }
            } else {
                if (5 === $scope.currentUser.type || ("5" === $scope.currentUser.type || (51 === $scope.currentUser.type || "51" === $scope.currentUser.type))) {
                    /** @type {number} */
                    c = 15;
                } else {
                    if (1 !== $scope.currentUser.type) {
                        if ("1" !== $scope.currentUser.type) {
                            /** @type {number} */
                            c = 3;
                        }
                    }
                }
            }
            msg += "删除后，该场景将在回收站保留" + c + "天";
        }
        stream.openConfirmDialog({
            msg: msg
        }, function () {
            p.deleteSceneById(event).then(function (e) {
                if (e.data.success) {
                    if (1 === $scope.myScenes.length) {
                        if ($scope.currentPage > 1) {
                            $scope.currentPage--;
                        }
                    }
                    dataAndEvents.getDatas(docElem);
                    $scope.getMyScenes($scope.currentPage, self.name);
                } else {
                    alert(e.data.msg);
                }
            });
        });
    }

    $scope.PREFIX_URL = PREFIX_URL;
    $scope.PREFIX_CLIENT_HOST = PREFIX_HOST;
    $scope.HB_STATIC = HB_STATIC;
    $scope.scene = {
        type: null
    };
    /** @type {number} */
    $scope.pageSize = 12;
    /** @type {number} */
    var node = 1;
    /** @type {string} */
    $scope.isActive = "main";
    $scope.loginSuccess = data.isLoginSuccess;
    /** @type {boolean} */
    $scope.myScene = true;
    /** @type {number} */
    $scope.allPageCount = 0;
    var listDomainObject = {};
    $scope.userType = data.currentUser.type;
    $scope.currentUser = data.currentUser;
    if (-1 !== [1, 2, 5, 21, 51].indexOf($scope.currentUser.type)) {
        /** @type {boolean} */
        $scope.companyType = true;
    }
    $scope.currentTpl = {
        exemplarPreview: false
    };
    /**
     * @param {Object} options
     * @param {boolean} m3
     * @return {?}
     */
    $scope.createScene = function (options, m3) {
        if ((1 === $scope.userType || "1" === $scope.userType) && m3) {
            return void stream.openConfirmDialog({
                msg: "免费升级企业会员可使用 会员专属场景",
                confirmName: "免费升级",
                cancelName: "再看看"
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
                templateUrl:$rootScope.tplUrl +  "scene/buySample.tpl.html",
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
    var docElem = $rootScope.branchid;
    /** @type {boolean} */
    $scope.initShowGuide = true;
    docElem = $rootScope.branchid;

    /** @type {number} */
    $scope.XdpageSize = 100;
    /**
     * @param {number} dataAndEvents
     * @return {undefined}
     */
    $scope.getBranches = function (dataAndEvents) {
        jQuery.getBranches($scope.XdpageSize, dataAndEvents).then(function (e) {
            if (e.data.success) {
                $scope.branches = e.data.list;
            }
        });
    };
    if (2 === data.currentUser.type || ("2" === data.currentUser.type || (5 === data.currentUser.type || ("5" === data.currentUser.type || (21 === data.currentUser.type || "21" === data.currentUser.type) && $rootScope.userPermit.indexOf(",1405,") >= 0)))) {
        $scope.getBranches(1);
    }
    if ($rootScope.branchid) {
        /** @type {boolean} */
        $scope.switchChild = false;
        if ("my" !== $scope.sceneList) {
            /** @type {string} */
            $scope.sceneList = "my";
            if (window.localStorage) {
                /** @type {string} */
                listDomainObject[data.currentUser.id] = $scope.sceneList;
                localStorage.setItem("sceneTab", JSON.stringify(listDomainObject));
            }
        }
    } else {
        /** @type {boolean} */
        $scope.switchChild = true;
    }
    /**
     * @param {?} d
     * @return {undefined}
     */
    $scope.selectBranch = function (d) {
        if (d) {
            $scope.branchCurrent = d;
            $rootScope.branchid = d.id;
            $location.search({
                branchid: d.id
            });
            /** @type {boolean} */
            $scope.switchChild = false;
        } else {
            /** @type {string} */
            $rootScope.branchid = "";
            $location.search("branchid", null);
        }
        leBook.reload();
    };
    var deferId = $location.search().branchid;
    $sanitize(function () {
        if (deferId) {
            /** @type {number} */
            var i = 0;
            for (; i < $scope.branches.length; i++) {
                if ($scope.branches[i].id === deferId) {
                    $scope.branchCurrent = $scope.branches[i];
                }
            }
        }
    }, 300);
    /**
     * @return {undefined}
     */
    $scope.showSceneList = function () {
        /** @type {boolean} */
        $scope.initShowGuide = false;
        $rootScope.$broadcast("eqmain.overflow.visible");
    };
    /**
     * @param {Object} event
     * @param {string} itemId
     * @param {?} OKbutton
     * @return {?}
     */
    $scope.editScene = function (event, itemId, OKbutton) {
        return event && event.stopPropagation(), 1 === OKbutton.isExpedited || "1" === OKbutton.isExpedited ? void stream.openMsgDialog({
            msg: "该场景已在加急审核中，暂时无法编辑场景，请耐心等待",
            btn: "确认"
        }) : void(30 === OKbutton.bizType || "30" === OKbutton.bizType ? $modal.open({
            windowClass: "seven-contain",
            templateUrl: $rootScope.tplUrl + "main/mobileTansform.tpl.html"
        }).result.then(function () {
            $location.path("scene/create/" + itemId).search("pageId", 1);
        }) : $location.path("scene/create/" + itemId).search("pageId", 1));
    };
    /**
     * @param {Object} e
     * @param {Error} options
     * @return {?}
     */
    $scope.showPreview = function (e, options) {
        /** @type {string} */
        var dat = $scope.url + ("/v/" + options.code);
        return docElem ? void window.open(dat) : void(options.publishTime ? options.publishTime && options.updateTime > options.publishTime ? stream.openConfirmDialog({
            msg: "场景有更新需要再次发布才能预览最新内容，坚持预览会看到修改之前的场景",
            confirmName: "发布",
            cancelName: "坚持预览"
        }, function () {
            $scope.publishScene(e, options);
        }, function () {
            if (e) {
                e.stopPropagation();
            }
            window.open(dat);
        }) : (e && e.stopPropagation(), window.open(dat)) : stream.openConfirmDialog({
            msg: "尚未发布场景无法预览，请先发布",
            confirmName: "发布",
            cancelName: "取消"
        }, function () {
            $scope.publishScene(e, options);
        }));
    };
    if (window.localStorage && "false" === localStorage.getItem("myScenesListType")) {
        /** @type {boolean} */
        $scope.listType = false;
    } else {
        /** @type {boolean} */
        $scope.listType = true;
    }
    /**
     * @return {undefined}
     */
    $scope.listToggle = function () {
        /** @type {boolean} */
        $scope.listType = !$scope.listType;
        if ("system" === $scope.sceneList || "sample" === $scope.sceneList) {
            /** @type {boolean} */
            $scope.listType = true;
        }
        if (window.localStorage) {
            localStorage.setItem("myScenesListType", $scope.listType);
        }
    };
    /**
     * @param {Blob} object
     * @return {undefined}
     */
    $scope.addColor = function (object) {
        /** @type {Blob} */
        $scope.trIndex = object;
    };
    /**
     * @return {undefined}
     */
    $scope.removeColor = function () {
        /** @type {number} */
        $scope.trIndex = -1;
    };
    /**
     * @param {Object} event
     * @param {string} itemId
     * @param {Object} _xhr
     * @return {?}
     */
    $scope.sceneSettings = function (event, itemId, _xhr) {
        return 1 === _xhr.isExpedited || "1" === _xhr.isExpedited ? void stream.openMsgDialog({
            msg: "该场景已在加急审核中，暂时无法设置场景，请耐心等待",
            btn: "确认"
        }) : (event && event.stopPropagation(), void(30 === _xhr.bizType || "30" === _xhr.bizType ? $modal.open({
            windowClass: "seven-contain",
            templateUrl: $rootScope.tplUrl + "main/mobileTansform.tpl.html"
        }).result.then(function () {
            $location.path("scene/create/" + itemId).search({
                pageId: 1,
                openSetting: "show"
            });
        }) : $location.path("scene/create/" + itemId).search({
            pageId: 1,
            openSetting: "show"
        })));
    };
    /**
     * @return {undefined}
     */
    $scope.clickScene = function () {
        $location.path("main");
    };
    /**
     * @return {undefined}
     */
    $scope.clickSpread = function () {
        $location.path("main/spread");
    };
    /**
     * @param {?} event
     * @param {?} input
     * @param {?} num
     * @return {undefined}
     */
    $scope.creatCompanyTpl = function (event, input, num) {
        if (event) {
            event.stopPropagation();
        }
        assert.createCompanyTpls(input).then(function (response) {
            if (response.data.success) {
                /** @type {number} */
                $scope.myScenes[num].isTpl = 3;
                notifications.pushForCurrentRoute("scene.save.success.companyTpl", "notify.success");
            }
        });
    };
    /**
     * @param {?} event
     * @param {?} input
     * @param {?} num
     * @return {undefined}
     */
    $scope.clearCompanyTpl = function (event, input, num) {
        if (event) {
            event.stopPropagation();
        }
        assert.clearCompanyTpls(input).then(function (response) {
            if (response.data.success) {
                /** @type {number} */
                $scope.myScenes[num].isTpl = 0;
                notifications.pushForCurrentRoute("scene.clear.success.companyTpl", "notify.success");
            }
        });
    };
    /**
     * @return {undefined}
     */
    $scope.clickCustomer = function () {
        $location.path("main/customer");
    };
    $scope.register = data.getRegisterInfo();
    /**
     * @return {undefined}
     */
    $scope.logout = function () {
        data.logout();
    };
    /**
     * @param {?} event
     * @param {?} input
     * @return {undefined}
     */
    $scope.copyScene = function (event, input) {
        if (event) {
            event.stopPropagation();
        }
        stream.openConfirmDialog({
            msg: "确定复制此场景?"
        }, function () {
            assert.copySceneById(input).then(function (event) {
                if (200 === event.data.code || "200" === event.data.code) {
                    $location.path("scene/create/" + event.data.obj).search("pageId", 1);
                }
            });
        });
    };
    $scope.isAllowedToAccessTransfer = data.isAllowToAccess(data.accessDef.TRANSFER_SCENE);
    if ($scope.isAllowedToAccessTransfer) {
        /**
         * @param {Object} event
         * @param {?} s
         * @param {number} dataAndEvents
         * @return {?}
         */
        $scope.transferScene = function (event, s, dataAndEvents) {
            return event && event.stopPropagation(), 1 === dataAndEvents || 0 === dataAndEvents ? void notifications.pushForCurrentRoute("transfer.scene.guarantee", "notify.success") : void create(s);
        };
    }
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
    /** @type {number} */
    $scope.totalItems = 0;
    $scope.page = {
        currentPage: 1
    };
    /** @type {string} */
    $scope.toPage = "";
    /** @type {null} */
    $scope.name = null;
    /**
     * @param {Event} e
     * @param {?} element
     * @return {undefined}
     */
    $scope.EnterPress = function (e, element) {
        var ev = e || window.event;
        if (13 === ev.keyCode || "13" === ev.keyCode) {
            $scope.submit(element);
        }
    };
    /** @type {boolean} */
    $scope.searchButton = true;
    var suiteView = {};
    var self = {};
    /**
     * @param {?} form
     * @return {undefined}
     */
    $scope.submit = function (form) {
        self.name = form;
        $scope.name = form;
        p.getMyScenes($scope.scene.type ? $scope.scene.type.value : null, node, $scope.pageSize, docElem, form, null, self.groupId);
        if (form) {
            /** @type {boolean} */
            $scope.searchButton = false;
        }
        /** @type {boolean} */
        suiteView.refresh = true;
    };
    /**
     * @param {string} newName
     * @return {undefined}
     */
    $scope.changeName = function (newName) {
        /** @type {boolean} */
        $scope.searchButton = true;
        if ("" === newName) {
            if (suiteView.refresh) {
                /** @type {string} */
                self.name = newName;
                p.getMyScenes($scope.scene.type ? $scope.scene.type.value : null, node, $scope.pageSize, docElem, newName, null, self.groupId);
            }
        }
    };
    /**
     * @return {undefined}
     */
    $scope.clearSearch = function () {
        /** @type {string} */
        self.name = "";
        /** @type {boolean} */
        $scope.searchButton = true;
        /** @type {string} */
        $scope.name = "";
        p.getMyScenes($scope.scene.type ? $scope.scene.type.value : null, node, $scope.pageSize, docElem, null, null, self.groupId);
    };
    /**
     * @param {number} node
     * @param {string} dataAndEvents
     * @return {undefined}
     */
    $scope.getMyScenes = function (node, dataAndEvents) {
        if ("myScene" === dataAndEvents) {
            /** @type {null} */
            self.groupId = null;
        }
        p.getMyScenes($scope.scene.type ? $scope.scene.type.value : null, node, $scope.pageSize, docElem, self.name, null, self.groupId);
    };
    $scope.$on("get.my.scene.list", function () {
        var results = p.scenes;
        if ("group" !== currentGroup) {
            if ("my" !== $scope.sceneList) {
                /** @type {string} */
                $scope.sceneList = "my";
            }
        }
        if (results.list && results.list.length > 0) {
            $scope.myScenes = results.list;
            $scope.totalItems = results.map.count;
            $scope.page.currentPage = results.map.pageNo;
            $scope.toPage = results.map.pageNo;
            if ($rootScope.user && $rootScope.user.domain) {
                /** @type {string} */
                $scope.url = "http://" + $rootScope.user.domain;
                /** @type {string} */
                $scope.canvasUrl = $scope.url;
            } else {
                $scope.url = PREFIX_SHOW_HOST;
                if (1 === $scope.user.type || "1" === $scope.user.type) {
                    $scope.canvasUrl = PREFIX_HOST_ARRAY[Math.floor(11 * Math.random()) % 11];
                } else {
                    if (2 !== $scope.user.type && ("2" !== $scope.user.type && (21 !== $scope.user.type && "21" !== $scope.user.type)) || $scope.user.memberType) {
                        if (3 === $scope.user.type || ("3" === $scope.user.type || (4 === $scope.user.type || "4" === $scope.user.type))) {
                            $scope.canvasUrl = PREFIX_SERVICE_HOST;
                        } else {
                            if (99 === $scope.user.type || "99" === $scope.user.type) {
                                $scope.canvasUrl = PREFIX_SHOW_HOST;
                            } else {
                                if ($scope.user.expiryTime && $scope.user.expiryTime < Date.now) {
                                    $scope.canvasUrl = PREFIX_HOST_ARRAY[Math.floor(11 * Math.random()) % 11];
                                } else {
                                    $scope.canvasUrl = PREFIX_COMPANY_HOST_ARRAY[Math.floor(2 * Math.random()) % 2];
                                }
                            }
                        }
                    } else {
                        $scope.canvasUrl = PREFIX_HOST_ARRAY[Math.floor(11 * Math.random()) % 11];
                    }
                }
            }
        } else {
            /** @type {number} */
            $scope.totalItems = 0;
            if ($scope.currentPage > 1) {
                $scope.getMyScenes(--$scope.currentPage);
            } else {
                /** @type {Array} */
                $scope.myScenes = [];
            }
        }
    });
    /**
     * @param {string} obj
     * @return {undefined}
     */
    $scope.switchList = function (obj) {
        /** @type {string} */
        $scope.sceneList = obj;
        if ("system" === obj || "sample" === obj) {
            if (!$scope.listType) {
                $scope.listToggle();
            }
        }
        if (window.localStorage) {
            listDomainObject[data.currentUser.id] = $scope.sceneList;
            localStorage.setItem("sceneTab", JSON.stringify(listDomainObject));
        }
    };
    var stores = {};
    var places = {};
    /**
     * @param {string} dataAndEvents
     * @return {undefined}
     */
    $scope.getNewSample = function (dataAndEvents) {
        p.getNewSample().then(function (event) {
            if (200 === event.data.code || "200" === event.data.code) {
                if (window.localStorage) {
                    if (localStorage.getItem("guid") && JSON.parse(localStorage.getItem("guid"))[$rootScope.user.id]) {
                        /** @type {*} */
                        var dupMatcher = JSON.parse(localStorage.getItem("guid"));
                        if (dupMatcher[$rootScope.user.id] !== event.data.obj.guid) {
                            /** @type {boolean} */
                            $scope.guid = true;
                            stores[$rootScope.user.id] = event.data.obj.guid;
                            if ("recommend" === dataAndEvents) {
                                /** @type {boolean} */
                                $scope.guid = false;
                                localStorage.setItem("guid", JSON.stringify(stores));
                            }
                        }
                    } else {
                        stores[$rootScope.user.id] = event.data.obj.guid;
                        localStorage.setItem("guid", JSON.stringify(stores));
                    }
                    if (localStorage.getItem("comp") && JSON.parse(localStorage.getItem("comp"))[$rootScope.user.id]) {
                        /** @type {*} */
                        var enabledRegistry = JSON.parse(localStorage.getItem("comp"));
                        if (enabledRegistry[$rootScope.user.id] !== event.data.obj.comp) {
                            /** @type {boolean} */
                            $scope.comp = true;
                            places[$rootScope.user.id] = event.data.obj.comp;
                            if ("company" === dataAndEvents) {
                                /** @type {boolean} */
                                $scope.comp = false;
                                localStorage.setItem("comp", JSON.stringify(places));
                            }
                        }
                    } else {
                        places[$rootScope.user.id] = event.data.obj.comp;
                        localStorage.setItem("comp", JSON.stringify(places));
                    }
                } else {
                    stores[$rootScope.user.id] = event.data.obj.guid;
                    places[$rootScope.user.id] = event.data.obj.comp;
                    if (window.localStorage) {
                        localStorage.setItem("guid", JSON.stringify(stores));
                        localStorage.setItem("comp", JSON.stringify(places));
                    }
                }
            }
        });
    };
    $scope.getNewSample();
    $scope.canvasSampleUrl = PREFIX_SHOW_HOST;
    /**
     * @return {undefined}
     */
    $scope.getSysScene = function () {
        p.getSysRecommend(1);
    };
    $scope.$on("get.getSysRecommend.list", function (dataAndEvents, results) {
        if (results.list.length > 0) {
            $scope.myScenes = results.list;
            /** @type {number} */
            var i = 0;
            for (; i < $scope.myScenes.length; i++) {
                if ($scope.myScenes[i].avatar) {
                    if (0 === $scope.myScenes[i].avatar.indexOf("http://")) {
                        $scope.myScenes[i].avatar = $scope.myScenes[i].avatar;
                    } else {
                        $scope.myScenes[i].avatar = PREFIX_FILE_HOST + $scope.myScenes[i].avatar;
                    }
                }
            }
        } else {
            /** @type {Array} */
            $scope.myScenes = [];
        }
    });
    /**
     * @return {undefined}
     */
    $scope.getCompanyScene = function () {
        p.getCompanySample(data.currentUser.id, 1, 12);
    };
    $scope.$on("get.company.sample.scene", function (dataAndEvents, results) {
        $scope.myScenes = results.list;
        $scope.page.currentPage = results.map.pageNo;
        $scope.totalItems = results.map.count;
        $scope.toPage = results.map.pageNo;
        /** @type {number} */
        var i = 0;
        for (; i < $scope.myScenes.length; i++) {
            if ($scope.myScenes[i].avatar) {
                if (0 === $scope.myScenes[i].avatar.indexOf("http://")) {
                    $scope.myScenes[i].avatar = $scope.myScenes[i].avatar;
                } else {
                    $scope.myScenes[i].avatar = PREFIX_FILE_HOST + $scope.myScenes[i].avatar;
                }
            }
        }
    });
    $scope.currentGroup = {};
    /** @type {string} */
    $scope.currentGroup.currentName = "我的场景";
    /** @type {string} */
    $scope.currentGroup.activeName = "my";
    /**
     * @param {?} dataAndEvents
     * @param {string} key
     * @return {undefined}
     */
    $scope.currentNameGroup = function (dataAndEvents, key) {
        $scope.currentGroup.clickName = dataAndEvents;
        $scope.currentGroup.currentName = dataAndEvents;
        /** @type {string} */
        $scope.currentGroup.currentId = key;
        /** @type {string} */
        $scope.currentGroup.activeName = key;
        /** @type {string} */
        $scope.currentGroup.clickId = key;
        if (0 === key || "0" === key) {
            $scope.getGroupScene(0);
            $scope.switchList(0);
            /** @type {number} */
            $scope.currentGroup.activeName = 0;
            /** @type {string} */
            $scope.currentGroup.currentName = "未分组";
            /** @type {string} */
            $scope.currentGroup.currentId = "0";
            /** @type {string} */
            $scope.currentGroup.clickName = "";
            /** @type {string} */
            $scope.currentGroup.clickId = "0";
        } else {
            if (key) {
                $scope.getGroupScene(key, "group");
                $scope.switchList(key);
            } else {
                $scope.getMyScenes(1, "myScene");
                $scope.switchList("my");
                /** @type {string} */
                $scope.currentGroup.activeName = "my";
                /** @type {string} */
                $scope.currentGroup.currentName = "我的场景";
                /** @type {null} */
                $scope.currentGroup.currentId = null;
                /** @type {null} */
                $scope.currentGroup.clickName = null;
                /** @type {null} */
                $scope.currentGroup.clickId = null;
            }
        }
    };
    $scope.$watch("sceneList", function (newValue, oldValue) {
        if (newValue !== oldValue) {
            if ($scope.sceneList !== $scope.currentGroup.activeName) {
                /** @type {string} */
                $scope.currentGroup.clickId = "20160114yqxlyx";
            }
        }
    }, true);
    var currentGroup;
    if ($scope.getGroupScene = function (name) {
            /** @type {string} */
            currentGroup = "group";
            /** @type {(number|string)} */
            self.groupId = name;
            /** @type {number} */
            $scope.page.currentPage = 1;
            p.getMyScenes($scope.scene.type ? $scope.scene.type.value : null, node, 12, docElem, self.name, null, name);
        }, $sanitize(function () {
            p.getMyGroup(data.currentUser.id);
            $scope.$on("get.my.group", function (dataAndEvents, data) {
                /** @type {string} */
                $scope.groups = data;
                if ($scope.groups.length > 0) {
                    /** @type {boolean} */
                    $scope.showWeiGroup = true;
                }
            });
        }, 300), $rootScope.firstLoginGuide) {
        /** @type {string} */
        $scope.sceneList = "system";
        $scope.getSysScene();
        /** @type {boolean} */
        $rootScope.firstLoginGuide = false;
    } else {
        if (window.localStorage) {
            if (localStorage.getItem("sceneTab")) {
                try {
                    /** @type {*} */
                    listDomainObject = JSON.parse(localStorage.getItem("sceneTab"));
                } catch (G) {
                    listDomainObject = localStorage.getItem("sceneTab");
                }
                if ("string" == typeof listDomainObject) {
                    listDomainObject = {};
                    /** @type {string} */
                    $scope.sceneList = "my";
                    $scope.getMyScenes();
                } else {
                    $scope.sceneList = JSON.parse(localStorage.getItem("sceneTab"))[data.currentUser.id];
                    if ($scope.sceneList) {
                        if ("my" === $scope.sceneList) {
                            $scope.currentNameGroup();
                        } else {
                            if ("system" === $scope.sceneList) {
                                $scope.getSysScene();
                            } else {
                                if ("sample" === $scope.sceneList) {
                                    $scope.getCompanyScene();
                                } else {
                                    $sanitize(function () {
                                        $scope.$on("get.my.group", function (dataAndEvents, data) {
                                            /** @type {string} */
                                            $scope.groups = data;
                                            /** @type {number} */
                                            var i = 0;
                                            for (; i < $scope.groups.length; i++) {
                                                if ($scope.groups[i].id === $scope.sceneList) {
                                                    $scope.currentNameGroup($scope.groups[i].groupName, $scope.sceneList);
                                                }
                                            }
                                        });
                                    });
                                }
                            }
                        }
                    } else {
                        $scope.currentNameGroup();
                    }
                }
            } else {
                $scope.currentNameGroup();
            }
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    $scope.addGroup = function (data) {
        return $scope.groups && $scope.groups.length >= 5 ? void stream.openMsgDialog({
            msg: "创建分组不能超过5个"
        }) : void $modal.open({
            windowClass: "group-console console",
            templateUrl: $rootScope.tplUrl + "main/console/group.tpl.html",
            controller: "AddGroupCtrl",
            resolve: {
                /**
                 * @return {?}
                 */
                sceneCreat: function () {
                    return {
                        type: true
                    };
                }
            }
        }).result.then(function (column) {
            $scope.groups.push({
                groupName: column.name,
                id: column.id
            });
            if (column) {
                /** @type {boolean} */
                $scope.showWeiGroup = true;
                if (data) {
                    $scope.moreGroup(column.id, data, null, "sceneList");
                }
            }
            notifications.pushForCurrentRoute("group.create.success", "notify.success");
        });
    };
    /** @type {boolean} */
    $scope.manageGroupName = false;
    /**
     * @return {undefined}
     */
    $scope.manageGroup = function () {
        /** @type {boolean} */
        $scope.manageGroupName = !$scope.manageGroupName;
    };
    /** @type {boolean} */
    $scope.showGroud = false;
    $scope.$watch("showGroud", function () {
        if ($scope.manageGroupName === true) {
            /** @type {boolean} */
            $scope.showGroud = false;
        }
    });
    /**
     * @param {string} term
     * @param {string} new_name
     * @return {undefined}
     */
    $scope.editGroup = function (term, new_name) {
        $modal.open({
            windowClass: "group-console console",
            templateUrl: $rootScope.tplUrl + "main/console/group.tpl.html",
            controller: "AddGroupCtrl",
            resolve: {
                /**
                 * @return {?}
                 */
                sceneCreat: function () {
                    return {
                        type: true,
                        name: new_name,
                        id: term,
                        title: "修改分组名称"
                    };
                }
            }
        }).result.then(function (data) {
            /** @type {number} */
            var i = 0;
            for (; i < $scope.groups.length; i++) {
                if (data.id === $scope.groups[i].id) {
                    $scope.groups[i].groupName = data.name;
                    if ($scope.currentGroup.currentId === data.id) {
                        $scope.currentGroup.currentName = data.name;
                        $scope.currentGroup.currentId = data.id;
                        $scope.currentGroup.clickName = data.name;
                    }
                }
            }
            notifications.pushForCurrentRoute("group.edit.success", "notify.success");
        });
    };
    /**
     * @param {?} ctx
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    $scope.deleteGroup = function (ctx, deepDataAndEvents) {
        stream.openConfirmDialog({
            msg: "删除后，分组下的场景将移动至未分组下",
            confirmName: "确定",
            cancelName: "取消"
        }, function () {
            p.deleteGroup(ctx, deepDataAndEvents);
            $scope.currentNameGroup();
        });
    };
    $scope.$on("delete.my.group", function (dataAndEvents, r2) {
        $scope.groups.splice(r2, 1);
        if ($scope.groups.length > 0) {
            /** @type {boolean} */
            $scope.showWeiGroup = true;
        } else {
            /** @type {boolean} */
            $scope.showWeiGroup = false;
        }
        notifications.pushForCurrentRoute("group.delete.success", "notify.success");
    });
    /**
     * @param {undefined} a
     * @param {?} buf
     * @param {Array} recurring
     * @param {string} dataAndEvents
     * @return {?}
     */
    $scope.moreGroup = function (a, buf, recurring, dataAndEvents) {
        return self.groupId === a ? void stream.openMsgDialog({
            msg: "此场景已在该分组内"
        }) : void p.moveGroupScene(a, buf).then(function (res) {
            if (200 === res.data.code || "200" === res.data.code) {
                if (dataAndEvents) {
                    return $scope.switchList(a), void $scope.getGroupScene(a, "group");
                }
                /** @type {number} */
                var mode = parseInt(self.groupId, 10);
                if (mode >= 0) {
                    if (mode !== a) {
                        p.getMyScenes($scope.scene.type ? $scope.scene.type.value : null, $scope.currentPage, 12, docElem, self.name, null, self.groupId);
                    }
                }
                notifications.pushForCurrentRoute("group.scene.success", "notify.success");
            }
        });
    };
    /**
     * @param {Object} event
     * @param {?} container
     * @param {number} dataAndEvents
     * @return {?}
     */
    $scope.deleteScene = function (event, container, dataAndEvents) {
        return event && event.stopPropagation(), 1 === dataAndEvents || 0 === dataAndEvents ? void notifications.pushForCurrentRoute("delete.scene.guarantee", "notify.success") : void getNext(container);
    };
    /**
     * @param {number} page
     * @return {?}
     */
    $scope.pageChanged = function (page) {
        return 1 > page || page > $scope.totalItems / 10 + 1 ? void alert("此页超出范围") : ($scope.currentPage = page, void("sample" === $scope.sceneList ? p.getCompanySample(data.currentUser.id, page, $scope.pageSize) : $scope.getMyScenes(page, self.name)));
    };
    /**
     * @param {string} dataAndEvents
     * @return {?}
     */
    $scope.getTdStyle = function (dataAndEvents) {
        var width = $(".header_table td:eq(" + dataAndEvents + ")").outerWidth();
        return {
            width: width + "px",
            maxWidth: width + "px"
        };
    };
    $scope.scene.types = deepDataAndEvents.getSceneType();
    $scope.dataDetail = {};
    dataAndEvents.getDatas(docElem);
    dataAndEvents.getCustomDatas(docElem);
    $scope.$on("sceneDatas", function (dataAndEvents, $location) {
        $scope.datasCount = $location;
    });
    $scope.$on("customDatas", function (dataAndEvents, $location) {
        $scope.customCount = $location;
    });
    /**
     * @param {string} person
     * @return {undefined}
     */
    $scope.showDetail = function (person) {
        /** @type {string} */
        var dat = "promotion/share/" + person + "/socialShare";
        if ($rootScope.branchid) {
            dat += "?branchid=" + $rootScope.branchid;
        }
        window.open(dat, "_self");
    };
    /**
     * @param {string} file
     * @return {undefined}
     */
    $scope.showStatistics = function (file) {
        /** @type {string} */
        var path = "promotion/statistics/" + file;
        if ($rootScope.branchid) {
            path += "?branchid=" + $rootScope.branchid;
        }
        window.open(path, "_self");
    };
    /**
     * @param {string} event
     * @return {undefined}
     */
    $scope.showData = function (event) {
        /** @type {string} */
        var url = "promotion/dataCollect/" + event;
        if ($rootScope.branchid) {
            url += "?branchid=" + $rootScope.branchid;
        }
        window.open(url, "_self");
    };
    /**
     * @param {Object} e
     * @param {Object} data
     * @return {?}
     */
    $scope.publishScene = function (e, data) {
        if (e && e.stopPropagation(), !data.name) {
            return void stream.openMsgDialog({
                msg: "尚未设置标题，请设置后再执行此操作",
                btn: "去设置"
            }, function () {
                $scope.sceneSettings(e, data.id, data);
            });
        }
        /** @type {(Window|null)} */
        var $rootScope = window.open();
        if (1 === data.staticStatus) {
            stream.openConfirmDialog({
                msg: "场景已经静态化,发布后不能及时更新,确定更改吗",
                confirmName: "确定",
                cancelName: "取消"
            }, function () {
                assert.publishScene(data.id).then(function (response) {
                    if (response.data.success) {
                        /** @type {number} */
                        data.publishTime = (new Date).getTime();
                        notifications.pushForCurrentRoute("scene.publish.success", "notify.success");
                        /** @type {string} */
                        var $location = $scope.url + ("/v/" + data.code);
                        /** @type {string} */
                        $rootScope.location = $location;
                    }
                });
            }, function () {
            });
        } else {
            assert.publishScene(data.id).then(function (response) {
                if (response.data.success) {
                    /** @type {number} */
                    data.publishTime = (new Date).getTime();
                    notifications.pushForCurrentRoute("scene.publish.success", "notify.success");
                    /** @type {string} */
                    var $location = $scope.url + ("/v/" + data.code);
                    /** @type {string} */
                    $rootScope.location = $location;
                }
            });
        }
    };
    $scope.canvasUrlStatic = VIP_HOST;
    /**
     * @param {?} tpl
     * @return {undefined}
     */
    $scope.openPreview = function (tpl) {
        /** @type {boolean} */
        $scope.currentTpl.exemplarPreview = true;
        $scope.currentTpl.tpl = tpl;
    };
}]).directive("selectPicker", function () {
    return {
        restrict: "EA",
        /**
         * @param {?} tabCtrl
         * @param {?} element
         * @return {undefined}
         */
        link: function (tabCtrl, element) {
            element.selectpicker();
        }
    };
});
