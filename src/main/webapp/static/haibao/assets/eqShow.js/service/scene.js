angular.module("services.scene", ["scene.create.console", "services.history", "services.select",
    "scene.create.console.pictures", "scene.edit.trigger", "services.dataCache",
    "scene.create.console.font"]),
    angular.module("services.scene").factory("sceneService", ["$http", "$rootScope", "$modal", "$q", "$timeout",
        "security", "$cacheFactory", "historyService", "selectService", "picturesService", "ModalService",
        "triggerService", "i18nNotifications", "dataCacheService", "editService", "fontService",
    "setCompService", function($http, $rootScope, $modal, $q, $timeout, security,
                               $cacheFactory, historyService, range, picturesService, ModalService,
                               triggerService, i18nNotifications, dataCacheService, editService, fontService, setCompService) {
        /**
         * @param {?} key
         * @return {undefined}
         */
        function callback(key) {
            files.splice(files.indexOf(map[key]), 1);
            delete map[key];
        }
        /**
         * @param {Node} prop
         * @return {undefined}
         */
        function process(prop) {
            /** @type {Node} */
            object.obj.elements = prop;
            $("#nr").empty();
            d.parse({
                def : object.obj,
                appendTo : "#nr",
                mode : "edit"
            });
            var n;
            for (n in prop) {
                if (3 == prop[n].type) {
                    /** @type {string} */
                    var destination = "";
                    if (prop[n].properties.imgSrc) {
                        destination = prop[n].properties.imgSrc;
                    }
                    $rootScope.$broadcast("show.edit.bg", destination);
                    break;
                }
            }
            $rootScope.$broadcast("dom.changed");
        }
        /**
         * @param {Array} list
         * @return {undefined}
         */
        function updateList(list) {
            angular.copy({}, map);
            $.each(list, function(dataAndEvents, d) {
                /** @type {Element} */
                map[d.id] = d;
            });
        }
        /**
         * @param {string} z
         * @param {Object} style
         * @return {?}
         */
        function draw(z, style) {
            var styles = {};
            var closest = $("#nr .edit_area");
            /** @type {number} */
            var value = 0;
            if (stringToSign) {
                value = stringToSign += 1;
            } else {
                var bar = closest.children().last();
                var $slide = closest.children(".maxIndex");
                /** @type {number} */
                stringToSign = value = $slide.length > 0 ? parseInt($slide.css("z-index"), 10) + 1 : bar.length > 0 ? parseInt(bar.css("z-index"), 10) + 1 : 101;
            }
            if (style) {
                return style.zIndex = value, parseInt(style.top, 10) > $("#nr .edit_area").outerHeight() - 20 ? style.top = $("#nr .edit_area").outerHeight() - 20 + self.comPosition.top + "px" : style.top = parseInt(style.top, 10) + self.comPosition.top + "px", style;
            }
            var a = $("#nr .edit_area").outerWidth();
            var b = a;
            return "v" == z ? b = 50 : "4" == z ? b = 80 : 5 == ("" + z).charAt(0) || ("6" == z || ("r" == z || ("c" == z || ("a" == z || "z" === z)))) ? b = 200 : "m" == z ? b = 100 : "t" == z ? b = 300 : "b" == z && (b = 240), styles = {
                top : 100 + self.comPosition.top + "px",
                left : (a - b) / 2 + "px"
            }, styles.zIndex = value, styles;
        }
        /**
         * @param {Object} data
         * @param {Object} widget
         * @param {number} callback
         * @param {number} opt_attributes
         * @return {undefined}
         */
        function setup(data, widget, callback, opt_attributes) {
            /** @type {number} */
            var yPos = parseInt(data.css.top, 10) + 10 * k;
            /** @type {number} */
            var maxWidth = parseInt(data.css.left, 10);
            if (yPos + 34 > $("#nr .edit_area").outerHeight()) {
                /** @type {string} */
                widget.css.top = yPos + "px";
                /** @type {string} */
                widget.css.left = maxWidth + 10 + "px";
            } else {
                /** @type {string} */
                widget.css.top = yPos + 34 + "px";
                widget.css.left = data.css.left;
                if (callback == opt_attributes) {
                    k++;
                }
            }
        }
        /**
         * @return {?}
         */
        function ceil() {
            return Math.ceil(1E10 * Math.random());
        }
        /**
         * @param {string} v
         * @param {?} key
         * @param {(Node|string)} xhr
         * @return {?}
         */
        function parse(v, key, xhr) {
            var result;
            var r = ceil();
            var data = {};
            if (v += "", 3 == v.charAt(0)) {
                var i;
                /** @type {Array} */
                var enabledFiles = [];
                /** @type {number} */
                i = 0;
                for (;i < files.length;i++) {
                    if (3 == files[i].type) {
                        enabledFiles.push(files[i]);
                    }
                }
                if (enabledFiles.length > 0) {
                    return enabledFiles[0];
                }
                data = {
                    content : null,
                    css : {},
                    id : r,
                    num : 0,
                    pageId : object.obj.id,
                    properties : {
                        bgColor : null,
                        imgSrc : null
                    },
                    sceneId : object.obj.sceneId,
                    title : null,
                    type : 3
                };
            } else {
                if (1 == v.charAt(0)) {
                    data = {
                        id : r,
                        properties : {
                            title : "\u63d0\u4ea4"
                        },
                        type : 1,
                        pageId : object.obj.id,
                        sceneId : object.obj.sceneId
                    };
                } else {
                    if (8 == v.charAt(0)) {
                        result = draw(v, key);
                        $.extend(true, result, {
                            color : "rgb(255, 255, 255)",
                            width : "100px",
                            height : "30px",
                            lineHeight : "30px",
                            borderWidth : "0",
                            borderStyle : "solid",
                            borderColor : "#ccc",
                            borderRadius : "0",
                            backgroundColor : "rgb(244, 113, 31)"
                        });
                        data = {
                            content : "",
                            css : result,
                            id : r,
                            num : 1,
                            pageId : object.obj.id,
                            properties : {
                                title : "\u4e00\u952e\u62e8\u53f7",
                                number : ""
                            },
                            sceneId : object.obj.sceneId,
                            title : null,
                            type : 8
                        };
                    } else {
                        if ("l" == v) {
                            result = draw(v, key);
                            $.extend(true, result, {
                                color : "rgb(255, 255, 255)",
                                width : "100px",
                                height : "40px",
                                lineHeight : "40px",
                                borderWidth : "0",
                                borderStyle : "solid",
                                borderColor : "#ccc",
                                borderRadius : "0",
                                backgroundColor : "rgb(244, 113, 31)"
                            });
                            data = {
                                content : "",
                                css : result,
                                id : r,
                                num : 1,
                                pageId : object.obj.id,
                                properties : {
                                    title : "\u70b9\u6211\u8d2d\u4e70"
                                },
                                sceneId : object.obj.sceneId,
                                title : null,
                                type : "l"
                            };
                        } else {
                            if ("s" == v) {
                                result = draw(v, key);
                                $.extend(true, result, {
                                    color : "rgb(255, 255, 255)",
                                    width : "100px",
                                    height : "30px",
                                    lineHeight : "30px",
                                    borderWidth : "0",
                                    borderStyle : "solid",
                                    borderColor : "#ccc",
                                    borderRadius : "0",
                                    backgroundColor : "rgb(244, 113, 31)"
                                });
                                data = {
                                    content : "",
                                    css : result,
                                    id : r,
                                    num : 1,
                                    pageId : object.obj.id,
                                    properties : {
                                        title : "\u6709\u60ca\u559c"
                                    },
                                    sceneId : object.obj.sceneId,
                                    title : null,
                                    type : "s"
                                };
                            } else {
                                if (2 == v.charAt(0) || "x" == v.charAt(0)) {
                                    result = draw(v, key);
                                    $.extend(true, result, {
                                        width : 320,
                                        height : 38,
                                        fontSize : 24
                                    });
                                    data = {
                                        content : "\u70b9\u51fb\u6b64\u5904\u8fdb\u884c\u7f16\u8f91",
                                        css : result,
                                        id : r,
                                        num : 1,
                                        pageId : object.obj.id,
                                        properties : {},
                                        sceneId : object.obj.sceneId,
                                        title : null,
                                        type : ("" + v).charAt(0)
                                    };
                                } else {
                                    if ("x" == v.charAt(0)) {
                                        data.properties = {
                                            dataUrl : ""
                                        };
                                    } else {
                                        if (4 == v.charAt(0) || "wp" == v) {
                                            result = draw(v, key);
                                            /** @type {string} */
                                            result.width = "100px";
                                            /** @type {string} */
                                            result.height = "100px";
                                            data = {
                                                content : "",
                                                css : result,
                                                id : r,
                                                num : 1,
                                                pageId : object.obj.id,
                                                properties : {
                                                    width : "100px",
                                                    height : "100px",
                                                    src : ""
                                                },
                                                sceneId : object.obj.sceneId,
                                                title : null,
                                                type : 4
                                            };
                                            if ("wp" == v) {
                                                /** @type {string} */
                                                data.type = "403";
                                                /** @type {string} */
                                                result.width = "135px";
                                                /** @type {string} */
                                                result.height = "240px";
                                                /** @type {string} */
                                                data.properties.width = "135px";
                                                /** @type {string} */
                                                data.properties.height = "240px";
                                                data.properties.src = HB_STATIC + "assets/images/wechat_image.png";
                                            }
                                        } else {
                                            if ("h" == v) {
                                                result = draw(v, key);
                                                $.extend(true, result, {
                                                    color : "#555",
                                                    width : "100px",
                                                    height : "100px"
                                                });
                                                data = {
                                                    content : "",
                                                    css : result,
                                                    id : r,
                                                    pageId : object.obj.id,
                                                    properties : {
                                                        type : "rect"
                                                    },
                                                    sceneId : object.obj.sceneId,
                                                    title : null,
                                                    type : "h"
                                                };
                                            } else {
                                                if (5 == v.charAt(0)) {
                                                    result = draw(v, key);
                                                    /** @type {string} */
                                                    result.width = "200px";
                                                    $.extend(true, result, {
                                                        color : "#676767",
                                                        borderWidth : "1",
                                                        borderStyle : "solid",
                                                        borderColor : "#08a1ef",
                                                        borderRadius : "0",
                                                        backgroundColor : "#ffffff"
                                                    });
                                                    data = {
                                                        content : "",
                                                        css : result,
                                                        id : r,
                                                        num : 1,
                                                        pageId : object.obj.id,
                                                        properties : {
                                                            placeholder : "\u8bf7\u547d\u540d"
                                                        },
                                                        isInput : 1,
                                                        sceneId : object.obj.sceneId,
                                                        title : "\u8bf7\u547d\u540d",
                                                        type : 5
                                                    };
                                                } else {
                                                    if ("r" == v) {
                                                        result = draw(v, key);
                                                        /** @type {string} */
                                                        result.width = "200px";
                                                        delete result.height;
                                                        $.extend(true, result, {
                                                            color : "#676767",
                                                            borderWidth : "1",
                                                            borderStyle : "solid",
                                                            borderColor : "#08a1ef",
                                                            borderRadius : "0",
                                                            backgroundColor : "#ffffff"
                                                        });
                                                        data = {
                                                            content : "",
                                                            css : result,
                                                            id : r,
                                                            num : 1,
                                                            pageId : object.obj.id,
                                                            properties : {
                                                                titleStyle : {
                                                                    backgroundColor : "#08a1ef",
                                                                    color : "#ffffff"
                                                                },
                                                                optionStyle : {
                                                                    borderBottomWidth : "1",
                                                                    borderBottomStyle : "solid",
                                                                    borderBottomColor : "#08a1ef"
                                                                }
                                                            },
                                                            choices : '{"seq":3,"options":[{"id":1,"label":"\u9009\u98791"},{"id":2,"label":"\u9009\u98792"},{"id":3,"label":"\u9009\u98793"}]}',
                                                            isInput : 1,
                                                            sceneId : object.obj.sceneId,
                                                            title : "",
                                                            type : "r"
                                                        };
                                                    } else {
                                                        if ("c" == v) {
                                                            result = draw(v, key);
                                                            /** @type {string} */
                                                            result.width = "200px";
                                                            delete result.height;
                                                            $.extend(true, result, {
                                                                color : "#676767",
                                                                borderWidth : "1",
                                                                borderStyle : "solid",
                                                                borderColor : "#08a1ef",
                                                                borderRadius : "0",
                                                                backgroundColor : "#ffffff"
                                                            });
                                                            data = {
                                                                content : "",
                                                                css : result,
                                                                id : r,
                                                                num : 1,
                                                                pageId : object.obj.id,
                                                                properties : {
                                                                    titleStyle : {
                                                                        backgroundColor : "#08a1ef",
                                                                        color : "#ffffff"
                                                                    },
                                                                    optionStyle : {
                                                                        borderBottomWidth : "1",
                                                                        borderBottomStyle : "solid",
                                                                        borderBottomColor : "#08a1ef"
                                                                    }
                                                                },
                                                                choices : '{"seq":3,"options":[{"id":1,"label":"\u9009\u98791"},{"id":2,"label":"\u9009\u98792"},{"id":3,"label":"\u9009\u98793"}]}',
                                                                isInput : 1,
                                                                sceneId : object.obj.sceneId,
                                                                title : "",
                                                                type : "c"
                                                            };
                                                        } else {
                                                            if ("a" == v) {
                                                                result = draw(v, key);
                                                                /** @type {string} */
                                                                result.width = "200px";
                                                                delete result.height;
                                                                $.extend(true, result, {
                                                                    color : "#676767",
                                                                    borderWidth : "0",
                                                                    borderStyle : "solid",
                                                                    borderColor : "#ccc",
                                                                    borderRadius : "0",
                                                                    backgroundColor : "#f9f9f9"
                                                                });
                                                                data = {
                                                                    content : "",
                                                                    css : result,
                                                                    id : r,
                                                                    num : 1,
                                                                    pageId : object.obj.id,
                                                                    properties : {
                                                                        icon : "eqf-star",
                                                                        size : "rating-m",
                                                                        color : "#ff9307"
                                                                    },
                                                                    isInput : 1,
                                                                    sceneId : object.obj.sceneId,
                                                                    title : "",
                                                                    type : "a"
                                                                };
                                                            } else {
                                                                if ("i" == v) {
                                                                    result = draw(v, key);
                                                                    $.extend(true, result, {
                                                                        width : "100%",
                                                                        height : "55px",
                                                                        lineHeight : "55px",
                                                                        color : "#676767",
                                                                        borderWidth : "0",
                                                                        borderStyle : "solid",
                                                                        borderColor : "#ccc",
                                                                        borderRadius : "0",
                                                                        backgroundColor : "#f9f9f9"
                                                                    });
                                                                    data = {
                                                                        content : "",
                                                                        css : result,
                                                                        id : r,
                                                                        num : 1,
                                                                        pageId : object.obj.id,
                                                                        properties : {
                                                                            layout : "counter-lr",
                                                                            size : "counter-m",
                                                                            color : "#08a1ef",
                                                                            icon : "eqf-love"
                                                                        },
                                                                        sceneId : object.obj.sceneId,
                                                                        title : "",
                                                                        type : "i"
                                                                    };
                                                                } else {
                                                                    if ("d" == ("" + v).charAt(0)) {
                                                                        result = draw(v, key);
                                                                        $.extend(true, result, {
                                                                            width : "100%",
                                                                            height : "55px",
                                                                            lineHeight : "55px",
                                                                            color : "#676767",
                                                                            borderWidth : "0",
                                                                            borderStyle : "solid",
                                                                            borderColor : "#ccc",
                                                                            borderRadius : "0",
                                                                            backgroundColor : "#f9f9f9"
                                                                        });
                                                                        data = {
                                                                            content : "",
                                                                            css : result,
                                                                            id : r,
                                                                            num : 1,
                                                                            pageId : object.obj.id,
                                                                            properties : {
                                                                                layout : "counter-lr",
                                                                                size : "counter-m",
                                                                                color : "#76838f",
                                                                                icon : "eqf-eye3"
                                                                            },
                                                                            sceneId : object.obj.sceneId,
                                                                            title : "",
                                                                            type : "d"
                                                                        };
                                                                    } else {
                                                                        if (6 == v.charAt(0)) {
                                                                            result = draw(v, key);
                                                                            /** @type {string} */
                                                                            result.width = "200px";
                                                                            $.extend(true, result, {
                                                                                color : "#fff",
                                                                                borderRadius : "0",
                                                                                backgroundColor : "#08a1ef"
                                                                            });
                                                                            data = {
                                                                                content : "",
                                                                                css : result,
                                                                                id : r,
                                                                                num : 1,
                                                                                pageId : object.obj.id,
                                                                                properties : {
                                                                                    text : "",
                                                                                    link : "",
                                                                                    src : "",
                                                                                    layout : "rating-l",
                                                                                    title : "\u63d0\u4ea4"
                                                                                },
                                                                                sceneId : object.obj.sceneId,
                                                                                title : null,
                                                                                type : 6
                                                                            };
                                                                        } else {
                                                                            if ("p" == v) {
                                                                                result = draw(v, key);
                                                                                data = {
                                                                                    content : "",
                                                                                    css : result,
                                                                                    id : r,
                                                                                    num : 1,
                                                                                    pageId : object.obj.id,
                                                                                    properties : {
                                                                                        title : "\u56fe\u96c6"
                                                                                    },
                                                                                    sceneId : object.obj.sceneId,
                                                                                    title : null,
                                                                                    type : "p"
                                                                                };
                                                                            } else {
                                                                                if ("v" == v) {
                                                                                    result = draw(v, key);
                                                                                    /** @type {string} */
                                                                                    result.width = "50px";
                                                                                    /** @type {string} */
                                                                                    result.height = "48px";
                                                                                    data = {
                                                                                        content : "",
                                                                                        css : result,
                                                                                        id : r,
                                                                                        num : 1,
                                                                                        pageId : object.obj.id,
                                                                                        properties : {
                                                                                            src : ""
                                                                                        },
                                                                                        sceneId : object.obj.sceneId,
                                                                                        title : null,
                                                                                        type : "v"
                                                                                    };
                                                                                } else {
                                                                                    if ("n" == v) {
                                                                                        result = draw(v, key);
                                                                                        data = {
                                                                                            content : "",
                                                                                            css : result,
                                                                                            id : r,
                                                                                            pageId : object.obj.id,
                                                                                            properties : {
                                                                                                pics : []
                                                                                            },
                                                                                            sceneId : object.obj.sceneId,
                                                                                            title : null,
                                                                                            type : "n"
                                                                                        };
                                                                                    } else {
                                                                                        if ("m" == v) {
                                                                                            result = draw(v, key);
                                                                                            $.extend(true, result, {
                                                                                                height : "100px",
                                                                                                width : "210px"
                                                                                            });
                                                                                            data = {
                                                                                                content : "",
                                                                                                css : result,
                                                                                                id : r,
                                                                                                pageId : object.obj.id,
                                                                                                properties : {
                                                                                                    address : "\u8bbe\u7f6e\u4f4d\u7f6e"
                                                                                                },
                                                                                                sceneId : object.obj.sceneId,
                                                                                                title : null,
                                                                                                type : "m"
                                                                                            };
                                                                                        } else {
                                                                                            if ("w01" == v || "w02" == v) {
                                                                                                result = draw(v, key);
                                                                                                $.extend(true, result, {
                                                                                                    width : "180px",
                                                                                                    height : "40px",
                                                                                                    lineHeight : "40px",
                                                                                                    borderRadius : "5px",
                                                                                                    backgroundColor : "rgba(255,255,255,1)",
                                                                                                    borderColor : "rgba(0,0,0,1)",
                                                                                                    borderWidth : "1px",
                                                                                                    borderStyle : "solid"
                                                                                                });
                                                                                                data = {
                                                                                                    content : "",
                                                                                                    css : result,
                                                                                                    id : r,
                                                                                                    pageId : object.obj.id,
                                                                                                    properties : {
                                                                                                        title : "\u5fae\u4fe1\u97f3\u9891"
                                                                                                    },
                                                                                                    sceneId : object.obj.sceneId,
                                                                                                    title : null,
                                                                                                    type : v
                                                                                                };
                                                                                            } else {
                                                                                                if ("t" == v) {
                                                                                                    result = draw(v, key);
                                                                                                    $.extend(true, result, {
                                                                                                        height : "380px",
                                                                                                        width : "304px"
                                                                                                    });
                                                                                                    data = {
                                                                                                        content : "\u56fe\u8868\u7ec4\u4ef6",
                                                                                                        css : result,
                                                                                                        id : r,
                                                                                                        num : 1,
                                                                                                        pageId : object.obj.id,
                                                                                                        properties : {
                                                                                                            title : "\u56fe\u8868\u7ec4\u4ef6",
                                                                                                            chartTitle : "\u6570\u636e\u7edf\u8ba1\u8be6\u60c5"
                                                                                                        },
                                                                                                        sceneId : object.obj.sceneId,
                                                                                                        title : null,
                                                                                                        type : v
                                                                                                    };
                                                                                                } else {
                                                                                                    if ("b" === v) {
                                                                                                        result = draw(v, key);
                                                                                                        $.extend(true, result, {
                                                                                                            height : "360px",
                                                                                                            width : "280px",
                                                                                                            backgroundColor : "#F0F3F4"
                                                                                                        });
                                                                                                        data = {
                                                                                                            content : "",
                                                                                                            css : result,
                                                                                                            id : r,
                                                                                                            num : 1,
                                                                                                            pageId : object.obj.id,
                                                                                                            properties : {
                                                                                                                morelabel : "\u66f4\u591a\u7559\u8a00",
                                                                                                                meslabel : "\u6211\u8981\u7559\u8a00",
                                                                                                                style : "default"
                                                                                                            },
                                                                                                            sceneId : object.obj.sceneId,
                                                                                                            title : null,
                                                                                                            type : v
                                                                                                        };
                                                                                                    } else {
                                                                                                        if ("g" === v) {
                                                                                                            result = draw(v, key);
                                                                                                            $.extend(true, result, {
                                                                                                                height : "300px",
                                                                                                                width : "250px"
                                                                                                            });
                                                                                                            data = {
                                                                                                                content : "",
                                                                                                                css : result,
                                                                                                                id : r,
                                                                                                                num : 1,
                                                                                                                pageId : object.obj.id,
                                                                                                                properties : {
                                                                                                                    size : 4
                                                                                                                },
                                                                                                                sceneId : object.obj.sceneId,
                                                                                                                title : null,
                                                                                                                type : v
                                                                                                            };
                                                                                                        } else {
                                                                                                            if ("z" === v) {
                                                                                                                result = draw(v, key);
                                                                                                                /** @type {string} */
                                                                                                                result.width = "200px";
                                                                                                                /** @type {string} */
                                                                                                                result.height = "38px";
                                                                                                                data = {
                                                                                                                    content : "",
                                                                                                                    css : result,
                                                                                                                    id : r,
                                                                                                                    num : 1,
                                                                                                                    pageId : object.obj.id,
                                                                                                                    properties : {},
                                                                                                                    choices : '{"seq":3,"options":[{"id":1,"label":"\u8bf7\u8f93\u5165\u5185\u5bb9"},{"id":2,"label":"\u8bf7\u8f93\u5165\u5185\u5bb9"},{"id":3,"label":"\u8bf7\u8f93\u5165\u5185\u5bb9"}]}',
                                                                                                                    isInput : 1,
                                                                                                                    sceneId : object.obj.sceneId,
                                                                                                                    title : "\u4e0b\u62c9\u5217\u8868",
                                                                                                                    type : v,
                                                                                                                    showText : "\u8bf7\u9009\u62e9",
                                                                                                                    placeholderText : "\u8bf7\u9009\u62e9",
                                                                                                                    require : false
                                                                                                                };
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return xhr && $.extend(true, data, xhr), files.push(data), map[data.id] = data, data;
        }
        /**
         * @param {?} event
         * @param {Object} data
         * @param {boolean} deepDataAndEvents
         * @return {?}
         */
        function fn(event, data, deepDataAndEvents) {
            var obj = d.wrapComp(data, "edit", data);
            var g = security.isAllowToAccess(security.accessDef.ACCESS_COMP_MANAGE);
            if (g) {
                if (3 !== data.type) {
                    setCompService.addModel(data);
                }
            }
            $("#nr .edit_area").append(obj);
            var codeSegments = d.getInterceptors();
            /** @type {number} */
            var i = 0;
            for (;i < codeSegments.length;i++) {
                codeSegments[i](obj, data);
            }
            return d.getEventHandlers()[("" + event).charAt(0)](obj, data), deepDataAndEvents || (historyService.addPageHistory(object.obj.id, object.obj.elements), $rootScope.$broadcast("dom.changed"), ("psd" !== data.subType || data.lastOne) && obj.trigger("mousedown")), "n" != data.type && ("p" != data.type && obj.trigger("click")), obj;
        }
        /**
         * @param {string} gotoEnd
         * @param {?} event
         * @return {?}
         */
        function stop(gotoEnd, event) {
            /** @type {Array} */
            var _results = [];
            if ("g101" == gotoEnd) {
                _results.push(text("501"));
                _results.push(text("502"));
                _results.push(text("503"));
                _results.push(text("601"));
            } else {
                if ("w" == gotoEnd) {
                    _results.push(text("201"));
                    _results.push(text("401"));
                } else {
                    if ("wr" == gotoEnd) {
                        var expando = ceil();
                        _results.push(text("w01", event, expando));
                        _results.push(text("w02", event, expando));
                    }
                }
            }
            return _results;
        }
        /**
         * @return {undefined}
         */
        function main() {
            /** @type {number} */
            stringToSign = 0;
            angular.forEach(files, function(bar) {
                if (bar.css.zIndex > zIndex) {
                    zIndex = bar.css.zIndex;
                }
            });
        }
        /**
         * @param {?} el
         * @param {Object} s
         * @return {?}
         */
        function success(el, s) {
            if ("" + s.type == "201") {
                return void $(el).trigger("click");
            }
            /** @type {*} */
            var value = JSON.parse(sessionStorage.getItem("toolbarFonts")) || [];
            if (0 === value.length) {
                fontService.getMyFontFamily().then(function(e) {
                    if (e.data.success) {
                        value = e.data.list;
                        sessionStorage.setItem("toolbarFonts", JSON.stringify(value));
                        select(value, el, s);
                    } else {
                        alert("\u7f51\u7edc\u52a0\u8f7d\u5931\u8d25,\u8bf7\u7a0d\u540e\u518d\u8bd5!");
                    }
                });
            } else {
                select(value, el, s);
            }
        }
        /**
         * @param {Array} tab
         * @param {?} target
         * @param {Object} data
         * @return {undefined}
         */
        function select(tab, target, data) {
            var style;
            /** @type {Array} */
            var names = [];
            /** @type {RegExp} */
            var rtagName = /font-family:(.*?);/g;
            var elem = data.content;
            /** @type {Array} */
            var notFound = [];
            /** @type {Array} */
            var accept = [];
            for (;null != (style = rtagName.exec(elem));) {
                names.push(style[1].trim());
            }
            /** @type {number} */
            var i = 0;
            for (;i < tab.length;i++) {
                accept.push(tab[i].fontFamily);
            }
            /** @type {number} */
            i = 0;
            for (;i < names.length;i++) {
                if ("defaultFont" !== names[i]) {
                    if ("moren" !== names[i]) {
                        if (-1 === accept.indexOf(names[i])) {
                            notFound.push(names[i]);
                        }
                    }
                }
            }
            if (notFound.length) {
                fontService.getFontNames(notFound.join()).then(function(event) {
                    if (200 == event.data.code && (event.data.list && event.data.list.length)) {
                        /** @type {Array} */
                        var argNames = [];
                        /** @type {number} */
                        var i = 0;
                        for (;i < event.data.list.length;i++) {
                            argNames.push(event.data.list[i].name);
                        }
                        /** @type {string} */
                        var msg = '\u5f53\u524d\u5b57\u4f53<span class="color-blue">' + argNames.join() + "</span>\u672a\u7ecf\u6388\u6743\uff0c\u8bf7\u5148\u8d2d\u4e70\u5b57\u4f53\u3002";
                        ModalService.openConfirmDialog({
                            msg : msg,
                            confirmName : "\u8d2d\u4e70\u5b57\u4f53",
                            cancelName : "\u6682\u4e0d\u8d2d\u4e70"
                        }, function() {
                            $modal.open({
                                windowClass : "console img_console",
                                templateUrl : tplUrl + "scene//font/font-shopping.tpl.html",
                                controller : "fontShoppingCtrl",
                                resolve : {}
                            });
                        }, function() {
                            ModalService.openConfirmDialog({
                                msg : "\u786e\u5b9a\u8981\u6062\u590d\u9ed8\u8ba4\u5b57\u4f53\u5417\uff1f",
                                confirmName : "\u786e\u8ba4",
                                cancelName : "\u53d6\u6d88\u7f16\u8f91"
                            }, function() {
                                data.content = $("#" + data.id).html();
                                data.fonts = {};
                                bind(target, data, true);
                            }, function() {
                            });
                        });
                    }
                });
            } else {
                bind(target, data);
            }
        }
        /**
         * @param {?} e
         * @param {Object} data
         * @param {boolean} model
         * @return {undefined}
         */
        function bind(e, data, model) {
            /** @type {Object} */
            self.currentElemDef = data;
            var targetHeight = data.css.height || 0;
            $(e).css({
                "min-height" : targetHeight,
                cursor : "text"
            });
            if (!$(e).parents("li").hasClass("inside-active")) {
                $(e).bind("click", function(event) {
                    event.stopPropagation();
                });
                $(document).bind("mousedown", function() {
                    $rootScope.$broadcast("convert.html.canvas", data, e);
                    $(e).css({
                        "min-height" : "inherit",
                        cursor : "default"
                    });
                    $("#btn-toolbar").find("input[type=text][data-edit]").blur();
                    if ($("#btn-toolbar")) {
                        $("#btn-toolbar").remove();
                        $rootScope.$broadcast("cancelbind");
                    }
                    $(e).unbind("click");
                    var content = data.content;
                    data.content = $(e).html();
                    if (content != data.content) {
                        $rootScope.$broadcast("hisChange");
                    }
                    /** @type {number} */
                    var height = parseInt($(e).parent().height(), 10);
                    if (height > targetHeight) {
                        /** @type {number} */
                        data.css.height = height;
                        $(e).parents("li").height(height);
                    }
                    $(e).parents("li").removeClass("inside-active").css("user-select", "none");
                    $(e).removeAttr("contenteditable");
                    if (window.getSelection) {
                        window.getSelection().modify("move", "right", "line");
                    }
                    $(document).unbind("mousedown");
                });
                $(e).parents("li").addClass("inside-active").css("user-select", "text");
                $rootScope.$broadcast("text.click", e, model);
            }
        }
        /**
         * @param {Object} msg
         * @return {undefined}
         */
        function init(msg) {
            cb(msg, null, function(data) {
                var path = data.data;
                /** @type {string} */
                var file_path = "";
                msg.properties.src = path;
                msg.properties.id = data.id;
                /** @type {number} */
                var mediaRatio = data.width / data.height;
                if (msg.properties.originSrc) {
                    delete msg.properties.originSrc;
                    delete msg.properties.cropSize;
                    delete msg.properties.radioValue;
                }
                var $elem = $("#" + msg.id);
                if ($elem.length > 0) {
                    var width = $("#inside_" + msg.id).width();
                    var height = $("#inside_" + msg.id).height();
                    /** @type {number} */
                    var windowRatio = width / height;
                    if (mediaRatio >= windowRatio) {
                        $elem.outerHeight(height);
                        $elem.outerWidth(height * mediaRatio);
                        $elem.css("marginLeft", -($elem.outerWidth() - width) / 2);
                        $elem.css("marginTop", 0);
                    } else {
                        $elem.outerWidth(width);
                        $elem.outerHeight(width / mediaRatio);
                        $elem.css("marginTop", -($elem.outerHeight() - height) / 2);
                        $elem.css("marginLeft", 0);
                    }
                    /** @type {RegExp} */
                    var ignore = /.svg/;
                    if (msg.properties && msg.properties.cropSize) {
                        var vp = msg.properties.cropSize;
                        /** @type {string} */
                        file_path = "?imageMogr2/auto-orient/crop/!" + vp.w + "x" + vp.h + "a" + vp.x + "a" + vp.y;
                        path += file_path;
                    }
                    if (!ignore.test(path)) {
                        path += msg.properties && msg.properties.cropSize ? "" : "";
                    }
                    $elem.attr("src", PREFIX_FILE_HOST + path);
                    msg.properties.imgStyle = {};
                    msg.properties.imgStyle.width = $elem.outerWidth();
                    msg.properties.imgStyle.height = $elem.outerHeight();
                    msg.properties.imgStyle.marginTop = $elem.css("marginTop");
                    msg.properties.imgStyle.marginLeft = $elem.css("marginLeft");
                } else {
                    if (data.width > $("#nr .edit_area").width()) {
                        data.width = $("#nr .edit_area").width();
                        /** @type {number} */
                        data.height = data.width / mediaRatio;
                    }
                    if (data.height > $("#nr .edit_area").height()) {
                        data.height = $("#nr .edit_area").height();
                        /** @type {number} */
                        data.width = data.height * mediaRatio;
                    }
                    msg.css.width = data.width;
                    msg.css.height = data.height;
                    msg.properties.imgStyle = {};
                    msg.properties.imgStyle.width = data.width;
                    msg.properties.imgStyle.height = data.height;
                    /** @type {string} */
                    msg.properties.imgStyle.marginTop = "0";
                    /** @type {string} */
                    msg.properties.imgStyle.marginLeft = "0";
                    fn(msg.type, msg);
                }
            }, function() {
                if (!msg.properties.src) {
                    callback(msg.id);
                }
            });
        }
        /**
         * @param {Object} item
         * @return {undefined}
         */
        function filter(item) {
            if (!va) {
                $modal.open({
                    windowClass : "console img_console",
                    templateUrl : $rootScope.tplUrl + "scene/console/shape.tpl.html",
                    controller : "ShapeConsoleCtrl",
                    resolve : {
                        /**
                         * @return {?}
                         */
                        obj : function() {
                            return item;
                        }
                    }
                }).result.then(function(data) {
                    var revisionCheckbox = $("#" + item.id);
                    if (item.properties.src = data.data, item.properties.id = data.id, item.properties.type = data.type, item.css.height = data.height, item.css.width = data.width, item.properties.items = data.items, revisionCheckbox.length) {
                        var selfObj = $("#nr").find("#inside_" + item.id);
                        selfObj.remove();
                    }
                    fn(item.type, item);
                }, function() {
                    if (!$("#" + item.id).length) {
                        callback(item.id);
                    }
                });
            }
        }
        /**
         * @param {Object} data
         * @return {undefined}
         */
        function get(data) {
            $modal.open({
                windowClass : "console seven-contain",
                templateUrl : tplUrl + "scene//console/button.tpl.html",
                controller : "ButtonConsoleCtrl",
                resolve : {
                    /**
                     * @return {?}
                     */
                    obj : function() {
                        return data;
                    }
                }
            }).result.then(function(opts) {
                data.properties = angular.copy(opts);
                $.extend(true, data.css, opts.btnStyle);
                var checkbox = $("#" + data.id, $("#nr"));
                if (checkbox.length > 0) {
                    checkbox.parents("li").remove();
                }
                fn(data.type, data);
            }, function() {
                if (!$("#" + data.id).length) {
                    callback(data.id);
                }
            });
        }
        /**
         * @param {Object} data
         * @return {undefined}
         */
        function remove(data) {
            if (!va) {
                va = $modal.open({
                    windowClass : "console six-contain",
                    templateUrl : tplUrl + "scene//console/tel.tpl.html",
                    controller : "TelConsoleCtrl",
                    resolve : {
                        /**
                         * @return {?}
                         */
                        obj : function() {
                            return data;
                        }
                    }
                }).result.then(function(opts) {
                    /** @type {null} */
                    va = null;
                    data.properties.title = opts.title;
                    data.properties.number = opts.number;
                    opts.title.replace(/ /g, "&nbsp;");
                    $.extend(true, data.css, opts.btnStyle);
                    if ($("#" + data.id).length > 0) {
                        $("#" + data.id).parents("li").remove();
                    }
                    fn(data.type, data);
                }, function() {
                    /** @type {null} */
                    va = null;
                    if (!$("#" + data.id).length) {
                        callback(data.id);
                    }
                });
            }
        }
        /**
         * @param {Object} data
         * @return {undefined}
         */
        function update(data) {
            if (!va) {
                va = $modal.open({
                    windowClass : "console seven-contain",
                    templateUrl : tplUrl + "scene//console/input.tpl.html",
                    controller : "InputConsoleCtrl",
                    resolve : {
                        /**
                         * @return {?}
                         */
                        obj : function() {
                            return data;
                        }
                    }
                }).result.then(function(options) {
                    /** @type {null} */
                    va = null;
                    if (options.type) {
                        data.type = options.type;
                    }
                    data.properties.placeholder = options.title;
                    data.properties.required = options.required;
                    data.title = options.title;
                    $.extend(true, data.css, options.btnStyle);
                    var checkbox = $("#" + data.id);
                    if (checkbox.length > 0) {
                        checkbox.parents("li").remove();
                    }
                    fn(data.type, data);
                }, function() {
                    /** @type {null} */
                    va = null;
                    if (!$("#" + data.id).length) {
                        callback(data.id);
                    }
                });
            }
        }
        /**
         * @param {Object} data
         * @return {undefined}
         */
        function onSuccess(data) {
            $modal.open({
                windowClass : "img_console",
                templateUrl : tplUrl + "scene//console/map.tpl.html",
                controller : "MapCtrl",
                resolve : {
                    /**
                     * @return {?}
                     */
                    elemDef : function() {
                        return data;
                    }
                }
            }).result.then(function(options) {
                data.properties.zoom = options.zoom;
                data.properties.lat = options.center.lat;
                data.properties.lng = options.center.lng;
                if (options.label) {
                    data.content = options.label;
                    data.properties.address = options.label;
                }
                var self = $("#" + data.id);
                if (self.length) {
                    var map = self.data("map");
                    if (map.panTo(options.center), map.setZoom(options.zoom), self.data("label")) {
                        var ctx = self.data("label");
                        ctx.setPosition(options.center);
                        var marker = self.data("marker");
                        marker.setPosition(options.center);
                    }
                } else {
                    fn(data.type, data);
                }
            });
        }
        /**
         * @param {Object} data
         * @return {undefined}
         */
        function run(data) {
            if (!va) {
                va = $modal.open({
                    windowClass : "console seven-contain",
                    templateUrl : tplUrl + "scene//console/radio-checkbox.tpl.html",
                    controller : "RadioCheckboxConsoleCtrl",
                    resolve : {
                        /**
                         * @return {?}
                         */
                        obj : function() {
                            return data;
                        }
                    }
                }).result.then(function(info) {
                    /** @type {null} */
                    va = null;
                    data.title = info.title;
                    data.type = info.type;
                    var controlRange = $("#nr").find("#inside_" + data.id);
                    if (controlRange.length) {
                        controlRange.remove();
                    }
                    fn(data.type, data);
                }, function() {
                    /** @type {null} */
                    va = null;
                    if (!$("#" + data.id).length) {
                        callback(data.id);
                    }
                });
            }
        }
        /**
         * @param {Object} msg
         * @return {undefined}
         */
        function initialize(msg) {
            if (!va) {
                va = $modal.open({
                    windowClass : "console seven-contain",
                    templateUrl : tplUrl + "scene//console/rating.tpl.html",
                    controller : "RatingConsoleCtrl",
                    resolve : {
                        /**
                         * @return {?}
                         */
                        obj : function() {
                            return msg;
                        }
                    }
                }).result.then(function() {
                    /** @type {null} */
                    va = null;
                    var controlRange = $("#nr").find("#inside_" + msg.id);
                    if (controlRange.length) {
                        controlRange.remove();
                    }
                    fn(msg.type, msg);
                }, function() {
                    /** @type {null} */
                    va = null;
                    if (!$("#" + msg.id).length) {
                        callback(msg.id);
                    }
                });
            }
        }
        /**
         * @param {Object} data
         * @return {undefined}
         */
        function save(data) {
            if (!va) {
                va = $modal.open({
                    windowClass : "console six-contain",
                    templateUrl : tplUrl + "scene//console/counter.tpl.html",
                    controller : "CounterConsoleCtrl",
                    resolve : {
                        /**
                         * @return {?}
                         */
                        obj : function() {
                            return data;
                        }
                    }
                }).result.then(function(defnSettings) {
                    /** @type {null} */
                    va = null;
                    $.extend(true, data.css, defnSettings.btnStyle);
                    if ($("#" + data.id).length > 0) {
                        $("#" + data.id).parents("li").remove();
                    }
                    fn(data.type, data);
                }, function() {
                    /** @type {null} */
                    va = null;
                    if (!$("#" + data.id).length) {
                        callback(data.id);
                    }
                });
            }
        }
        /**
         * @param {Object} data
         * @return {undefined}
         */
        function create(data) {
            if (!va) {
                va = $modal.open({
                    windowClass : "console six-contain",
                    templateUrl : tplUrl + "scene//console/statistics-component.tpl.html",
                    controller : "StatisticsConsoleCtrl",
                    resolve : {
                        /**
                         * @return {?}
                         */
                        obj : function() {
                            return data;
                        }
                    }
                }).result.then(function(defnSettings) {
                    /** @type {null} */
                    va = null;
                    $.extend(true, data.css, defnSettings.btnStyle);
                    if ($("#" + data.id).length > 0) {
                        $("#" + data.id).parents("li").remove();
                    }
                    fn(data.type, data);
                }, function() {
                    /** @type {null} */
                    va = null;
                    if (!$("#" + data.id).length) {
                        callback(data.id);
                    }
                });
            }
        }
        /**
         * @param {Object} data
         * @return {undefined}
         */
        function send(data) {
            if (!va) {
                va = $modal.open({
                    windowClass : "console six-contain",
                    templateUrl : tplUrl + "scene//console/link-component.tpl.html",
                    controller : "LinkComponentConsoleCtrl",
                    resolve : {
                        /**
                         * @return {?}
                         */
                        obj : function() {
                            return data;
                        }
                    }
                }).result.then(function(defnSettings) {
                    /** @type {null} */
                    va = null;
                    if (isNaN(data.properties.url)) {
                        if (data.properties.url) {
                            /** @type {string} */
                            data.properties.url = PREFIX_S1_URL + "eqs/link?id=" + data.sceneId + "&url=" + encodeURIComponent(data.properties.url);
                        }
                    }
                    $.extend(true, data.css, defnSettings.btnStyle);
                    if ($("#" + data.id).length > 0) {
                        $("#" + data.id).parents("li").remove();
                    }
                    fn(data.type, data);
                }, function() {
                    /** @type {null} */
                    va = null;
                    if (!$("#" + data.id).length) {
                        callback(data.id);
                    }
                });
            }
        }
        /**
         * @param {Object} data
         * @return {undefined}
         */
        function render(data) {
            if (!va) {
                va = $modal.open({
                    windowClass : "console six-contain",
                    templateUrl : tplUrl + "scene//console/sound-component.tpl.html",
                    controller : "SoundComponentConsoleCtrl",
                    resolve : {
                        /**
                         * @return {?}
                         */
                        obj : function() {
                            return data;
                        }
                    }
                }).result.then(function($scope) {
                    /** @type {null} */
                    va = null;
                    $scope.title.replace(/ /g, "&nbsp;");
                    $.extend(true, data.css, $scope.btnStyle);
                    if ($("#" + data.id).length > 0) {
                        $("#" + data.id).parents("li").remove();
                    }
                    fn(data.type, data);
                }, function() {
                    /** @type {null} */
                    va = null;
                    if (!$("#" + data.id).length) {
                        callback(data.id);
                    }
                });
            }
        }
        /**
         * @param {Object} data
         * @return {undefined}
         */
        function done(data) {
            if (!va) {
                va = $modal.open({
                    windowClass : "console seven-contain pictures1",
                    backdrop : "static",
                    templateUrl : tplUrl + "scene//console/pictures1.tpl.html",
                    controller : "pictures1Ctrl",
                    resolve : {
                        /**
                         * @return {?}
                         */
                        obj : function() {
                            return data;
                        }
                    }
                }).result.then(function(value) {
                    /** @type {null} */
                    va = null;
                    /** @type {Object} */
                    data.properties = value;
                    var hidden = $("#inside_" + data.id);
                    if (hidden.length) {
                        hidden.remove();
                    }
                    fn(data.type, data);
                }, function() {
                    /** @type {null} */
                    va = null;
                    if (!$("#" + data.id).length) {
                        callback(data.id);
                    }
                });
            }
        }
        /**
         * @return {undefined}
         */
        function template() {
            var me = obj;
            _render(me, 2, function(req) {
                if (me.bgAudio) {
                    dataCacheService.pushUsedFile(2, req.id);
                }
                if (req.url || req.src) {
                    dataCacheService.removeUsedFile(2, req.id);
                    /** @type {Object} */
                    me.bgAudio = req;
                } else {
                    /** @type {null} */
                    me.bgAudio = null;
                }
            }, function() {
                /** @type {null} */
                va = null;
            });
        }
        /**
         * @param {Object} data
         * @return {undefined}
         */
        function refresh(data) {
            _render(data, 4, function(value) {
                var $slide = $("#inside_" + data.id);
                if (value.src) {
                    /** @type {string} */
                    data.sound = value;
                    if (!$slide.children(".sound").length) {
                        $('<div class="sound eqf-music">').click(function() {
                            refresh(data);
                        }).appendTo($slide);
                    }
                } else {
                    delete data.sound;
                    $slide.children(".sound").remove();
                }
            }, function() {
                /** @type {null} */
                va = null;
            });
        }
        /**
         * @param {Object} elt
         * @param {Function} opt_attributes
         * @param {Function} callback
         * @return {undefined}
         */
        function _render(elt, opt_attributes, callback) {
            if (!va) {
                va = $modal.open({
                    windowClass : "console img_console",
                    templateUrl : tplUrl + "scene//console/sound.tpl.html",
                    controller : "soundCtrl",
                    resolve : {
                        /**
                         * @return {?}
                         */
                        obj : function() {
                            return{
                                elemDef : elt,
                                /** @type {Function} */
                                type : opt_attributes
                            };
                        }
                    }
                }).result.then(function(basis) {
                    /** @type {null} */
                    va = null;
                    callback(basis);
                }, function() {
                    /** @type {null} */
                    va = null;
                });
            }
        }
        /**
         * @param {Object} data
         * @return {undefined}
         */
        function load(data) {
            if (!va) {
                va = $modal.open({
                    windowClass : "console six-contain",
                    templateUrl : tplUrl + "scene//console/video.tpl.html",
                    controller : "VideoCtrl",
                    resolve : {
                        /**
                         * @return {?}
                         */
                        obj : function() {
                            return data;
                        }
                    }
                }).result.then(function(libraryName) {
                    /** @type {null} */
                    va = null;
                    /** @type {string} */
                    data.properties.src = libraryName;
                    if (!$("#" + data.id).length) {
                        fn(data.type, data);
                    }
                }, function() {
                    /** @type {null} */
                    va = null;
                    if (!$("#" + data.id).length) {
                        callback(data.id);
                    }
                });
            }
        }
        /**
         * @param {Object} e
         * @param {number} n
         * @return {undefined}
         */
        function ready(e, n) {
            cb(e, n, function(self) {
                if ("imgSrc" == self.type) {
                    var expected = {
                        type : 3,
                        properties : {
                            src : self.data,
                            id : self.id,
                            pageLength : n,
                            name : self.name
                        }
                    };
                    if (self.height / self.width >= 1008 / 642 && (self.height / self.width <= 1.578125 && (1 == n || self.isSys))) {
                        if (e.properties.originSrc) {
                            delete e.properties.originSrc;
                            delete e.properties.cropSize;
                        }
                        $rootScope.$broadcast("scene.bg.replace", {
                            type : "imgSrc",
                            src : self.data,
                            id : self.id,
                            longPage : n
                        }, e);
                        historyService.addPageHistory(object.obj.id, object.obj.elements);
                    } else {
                        if (e.properties.croptype) {
                            expected.properties.croptype = e.properties.croptype;
                        }
                        write(expected, function(node) {
                            if (1 != n) {
                                /** @type {number} */
                                e.properties.pageLength = n;
                                e.properties.croptype = node.type;
                            }
                            $rootScope.$broadcast("scene.bg.replace", {
                                type : "imgSrc",
                                src : node.src,
                                id : node.id,
                                originSrc : node.originSrc,
                                cropSize : node.cropSize
                            }, e);
                            historyService.addPageHistory(object.obj.id, object.obj.elements);
                        }, function() {
                            if (!$("#" + e.id).length) {
                                callback(e.id);
                            }
                        });
                    }
                }
                if ("backgroundColor" == self.type) {
                    if (1 != n) {
                        /** @type {number} */
                        e.properties.croptype = 1;
                        /** @type {number} */
                        e.properties.pageLength = n;
                    }
                    $rootScope.$broadcast("scene.bg.replace", self, e);
                    historyService.addPageHistory(object.obj.id, object.obj.elements);
                }
            }, function() {
                if (!$("#" + e.id).length) {
                    callback(e.id);
                }
            });
        }
        /**
         * @param {Object} data
         * @return {undefined}
         */
        function complete(data) {
            if (!va) {
                va = $modal.open({
                    windowClass : "console six-contain randomevent-console",
                    templateUrl : tplUrl + "scene//console/randomevent.tpl.html",
                    controller : "RandomEventCtrl",
                    resolve : {
                        /**
                         * @return {?}
                         */
                        obj : function() {
                            return data;
                        }
                    }
                }).result.then(function(newlines) {
                    /** @type {null} */
                    va = null;
                    if (newlines) {
                        if (0 !== newlines.length) {
                            /** @type {Array} */
                            data.properties.pics = newlines;
                            if (!$("#" + data.id).length) {
                                fn(data.type, data);
                            }
                            $rootScope.$broadcast("create.randomevent.trigger", data);
                        }
                    }
                }, function() {
                    /** @type {null} */
                    va = null;
                    if (!$("#" + data.id).length) {
                        callback(data.id);
                    }
                });
            }
        }
        /**
         * @param {Object} msg
         * @param {Function} r
         * @param {Function} user
         * @param {Function} cb
         * @param {string} stdout
         * @return {undefined}
         */
        function cb(msg, r, user, cb, stdout) {
            if (!va) {
                /** @type {string} */
                var fileType = "0";
                if (3 == msg.type) {
                    /** @type {string} */
                    fileType = "0";
                }
                if ("4" == ("" + msg.type).charAt(0)) {
                    /** @type {string} */
                    fileType = "1";
                }
                if (!stdout) {
                    /** @type {string} */
                    stdout = "";
                }
                va = $modal.open({
                    windowClass : "console img_console " + stdout,
                    templateUrl : tplUrl + "scene//console/bg.tpl.html",
                    controller : "BgConsoleCtrl",
                    resolve : {
                        /**
                         * @return {?}
                         */
                        obj : function() {
                            return{
                                fileType : fileType,
                                elemDef : msg,
                                /** @type {Function} */
                                longPage : r
                            };
                        }
                    }
                }).result.then(function(err) {
                    /** @type {null} */
                    va = null;
                    user(err);
                }, function(outErr) {
                    /** @type {null} */
                    va = null;
                    cb(outErr);
                });
            }
        }
        /**
         * @param {Object} value
         * @return {undefined}
         */
        function isElement(value) {
            /** @type {Object} */
            self.currentElemDef = value;
            $rootScope.$broadcast("showStylePanel", {
                activeTab : "style"
            });
        }
        /**
         * @param {Object} date
         * @return {undefined}
         */
        function set(date) {
            /** @type {Object} */
            self.currentElemDef = date;
            $rootScope.$broadcast("showStylePanel", {
                activeTab : "anim"
            });
        }
        /**
         * @param {Object} target
         * @return {undefined}
         */
        function navigate(target) {
            /** @type {Object} */
            self.currentElemDef = target;
            $rootScope.$broadcast("showStylePanel", {
                activeTab : "trigger"
            });
        }
        /**
         * @param {?} s
         * @return {undefined}
         */
        function getActual(s) {
            self.currentElemDef = s;
            $rootScope.$broadcast("showStylePanel", {
                activeTab : "dropdown"
            });
        }
        /**
         * @param {?} obj
         * @param {Function} cb
         * @param {Function} callback
         * @return {undefined}
         */
        function write(obj, cb, callback) {
            va = $modal.open({
                windowClass : "console seven-contain pictures1",
                templateUrl : tplUrl + "scene//console/imageCrop.tpl.html",
                controller : "imageCropCtrl",
                backdrop : "static",
                resolve : {
                    /**
                     * @return {?}
                     */
                    obj : function() {
                        return obj;
                    }
                }
            }).result.then(function(outErr) {
                /** @type {null} */
                va = null;
                if ("function" == typeof cb) {
                    cb(outErr);
                }
            }, function(basis) {
                /** @type {null} */
                va = null;
                if ("function" == typeof callback) {
                    callback(basis);
                }
            });
        }
        /**
         * @return {undefined}
         */
        function start() {
            $(".content").trigger("mousedown");
            /** @type {null} */
            self.currentElemDef = null;
            $rootScope.$broadcast("showStylePanel", {
                activeTab : "trigger"
            });
        }
        /**
         * @param {Object} obj
         * @return {undefined}
         */
        function open(obj) {
            obj.sceneId = object.obj.sceneId;
            $modal.open({
                windowClass : "console six-contain",
                templateUrl : tplUrl + "scene//console/link.tpl.html",
                controller : "LinkConsoleCtrl",
                resolve : {
                    /**
                     * @return {?}
                     */
                    obj : function() {
                        return obj;
                    }
                }
            }).result.then(function(value) {
                if (value && "http://" != value) {
                    if (isNaN(value)) {
                        /** @type {string} */
                        obj.properties.url = PREFIX_S1_URL + "eqs/link?id=" + obj.sceneId + "&url=" + encodeURIComponent(value);
                    } else {
                        /** @type {string} */
                        obj.properties.url = value;
                    }
                    $("#inside_" + obj.id).find(".fa-link").removeClass("fa-link").addClass("fa-anchor");
                } else {
                    delete obj.properties.url;
                    $("#inside_" + obj.id).find(".fa-anchor").removeClass("fa-anchor").addClass("fa-link");
                }
            });
        }
        /**
         * @param {?} tree
         * @param {?} resp
         * @return {undefined}
         */
        function bindEvents(tree, resp) {
            var el = $(".element", tree)[0];
            $(el).mousedown(function(event) {
                if ($(this).parents("li").hasClass("inside-active")) {
                    event.stopPropagation();
                }
            });
            $(el).bind("contextmenu", function(event) {
                if ($(this).parents("li").hasClass("inside-active")) {
                    event.stopPropagation();
                } else {
                    $(this).blur();
                }
            });
            $(el).bind("dblclick", function(event) {
                return $("#nr").find(".mask-trigger").length ? false : (success(el, resp), $("#popMenu").hide(), void event.stopPropagation());
            });
            $(el).bind("keydown", function(event) {
                if ($(".btn-toolbar").length > 0) {
                    event.stopPropagation();
                }
            });
            $(el).find("a").bind("click", function(types) {
                types.preventDefault();
            });
        }
        var obj;
        var promise;
        var items;
        var value;
        var modId;
        var stringToSign;
        var self = {};
        var d = eqShow.templateParser("jsonParser");
        /** @type {null} */
        var object = null;
        /** @type {null} */
        var files = null;
        var map = {};
        /** @type {number} */
        var k = 0;
        /** @type {boolean} */
        var doneResults = false;
        /** @type {boolean} */
        var fragment = false;
        /**
         * @return {undefined}
         */
        self.historyBack = function() {
            if (historyService.canBack(object.obj.id)) {
                files = historyService.back(object.obj.id);
                updateList(files);
                process(files);
                $rootScope.$broadcast("close.style.panel");
                $rootScope.$broadcast("refreshPageBg");
                $rootScope.$broadcast("refreshSetComps");
            }
        };
        /**
         * @return {undefined}
         */
        self.historyForward = function() {
            if (historyService.canForward(object.obj.id)) {
                files = historyService.forward(object.obj.id);
                updateList(files);
                process(files);
                $rootScope.$broadcast("close.style.panel");
                $rootScope.$broadcast("refreshPageBg");
                $rootScope.$broadcast("refreshSetComps");
            }
        };
        /** @type {function (string, Object): undefined} */
        var lambda = self.createCompGroup = function(gotoEnd, offset) {
            var codeSegments = stop(gotoEnd);
            /** @type {Array} */
            var docs = [];
            /** @type {number} */
            var i = 0;
            for (;i < codeSegments.length;i++) {
                var url = parse(codeSegments[i].type, offset, codeSegments[i]);
                if (offset) {
                    offset = {
                        left : offset.left,
                        top : parseInt(offset.top, 10) + 50 + "px"
                    };
                    if (0 !== i) {
                        /** @type {string} */
                        offset.top = parseInt(offset.top, 10) - self.comPosition.top + "px";
                    }
                } else {
                    offset = {
                        left : "60px",
                        top : "150px"
                    };
                }
                fn(codeSegments[i].type, url);
                if ("w" == gotoEnd) {
                    docs.push(url);
                }
            }
            if (0 !== docs.length) {
                docs[0].properties.comid = docs[1].id;
                /** @type {string} */
                docs[0].properties.type = "share";
                /** @type {string} */
                docs[1].properties.type = "share";
                docs[1].properties.comid = docs[0].id;
            }
            historyService.addPageHistory(object.obj.id, object.obj.elements);
            $rootScope.$broadcast("dom.changed");
        };
        /**
         * @param {string} item
         * @param {?} elem
         * @param {string} id
         * @return {?}
         */
        var text = function(item, elem, id) {
            var data;
            return "501" == item && (data = {
                properties : {
                    placeholder : "\u59d3\u540d"
                },
                title : "\u59d3\u540d",
                type : 501
            }), "502" == item && (data = {
                properties : {
                    placeholder : "\u7535\u8bdd"
                },
                title : "\u7535\u8bdd",
                type : 502
            }), "503" == item && (data = {
                properties : {
                    placeholder : "\u90ae\u7bb1"
                },
                title : "\u90ae\u7bb1",
                type : 503
            }), "601" == item && (data = {
                properties : {
                    title : "\u63d0\u4ea4"
                },
                type : 601
            }), "201" == item && (data = {
                properties : {
                    title : "\u6211\u7684\u5fae\u4fe1\u6635\u79f0"
                },
                css : {
                    fontSize : 24,
                    textAlign : "center"
                },
                content : "\u6211\u7684\u5fae\u4fe1\u6635\u79f0",
                type : item
            }), "401" == item && (data = {
                properties : {
                    title : "\u6211\u7684\u5fae\u4fe1\u5934\u50cf",
                    src : HB_STATIC + "assets/images/create/wx_default.png"
                },
                type : item
            }), "w01" == item && (data = {
                id : "wxp" + id,
                properties : {
                    title : "\u64ad\u653e\u5f55\u97f3",
                    icon : "eqf-nosy",
                    src : HB_STATIC + "assets/audio/wexin_sound.mp3"
                },
                type : item
            }), "w02" == item && (data = {
                id : "wxr" + id,
                properties : {
                    title : "\u6309\u4f4f \u8bf4\u8bdd"
                },
                type : item
            }), data;
        };
        /**
         * @param {string} v
         * @param {?} key
         * @param {string} icon
         * @param {number} timestep
         * @param {Object} options
         * @return {?}
         */
        self.createComp = function(v, key, icon, timestep, options) {
            var data;
            if (v = "" + v, "g101" === v) {
                return void lambda(v, key);
            }
            if ("w" === v.charAt(0) && ("w" === v || "wr" === v)) {
                return void lambda(v, key);
            }
            if ("9" === v.charAt(0)) {
                return void template(data, 2);
            }
            if (data = parse(v, key), "4" === v.charAt(0)) {
                if (!options) {
                    return void init(data);
                }
                /** @type {string} */
                data.subType = "psd";
                data.lastOne = options.lastOne;
                data.css.width = options.adjustWidth;
                data.css.height = options.adjustHeight;
                data.css.top = options.top;
                data.css.left = options.left;
                data.properties.src = options.src;
                /** @type {number} */
                data.css.opacity = options.opacity / 255;
                data.css["mix-blend-mode"] = options.blendMode.mode;
            }
            if ("h" === v) {
                return void filter(data);
            }
            if ("5" === ("" + v).charAt(0)) {
                return void update(data);
            }
            if ("6" === ("" + v).charAt(0)) {
                return void get(data);
            }
            if ("8" === ("" + v).charAt(0)) {
                return void remove(data);
            }
            if ("p" == v) {
                return void done(data);
            }
            if ("v" == v) {
                return load(data), data;
            }
            if ("3" == ("" + v).charAt(0)) {
                return void ready(data, timestep);
            }
            if ("r" == v || "c" == v) {
                return void run(data);
            }
            if ("a" == v) {
                return void initialize(data);
            }
            if ("i" == v) {
                return icon && (data.properties.icon = icon, "eqf-love" == icon ? data.properties.color = "#ff5448" : "eqf-good" == icon ? data.properties.color = "#f2a653" : "eqf-flower2" == icon ? data.properties.color = "#ea1f64" : "eqf-vote" == icon && (data.properties.color = "#08a1ef")), void save(data);
            }
            if ("d" == v) {
                return icon && (data.properties.icon = icon), void create(data);
            }
            if ("l" == v) {
                return void send(data);
            }
            if ("s" == v) {
                return void render(data);
            }
            if ("n" == v) {
                return void complete(data);
            }
            if ("m" == v) {
                return void onSuccess(data);
            }
            if ("wp" == v) {
                return void fn("403", data);
            }
            if ("t" == v) {
                return data.properties.chartType = icon, void fn(v, data);
            }
            if ("2" == ("" + v).charAt(0) || ("x" == ("" + v).charAt(0) || "z" === v)) {
                if ("x" == ("" + v).charAt(0)) {
                    /** @type {boolean} */
                    data.properties.newXiuziti = true;
                }
                var r = fn(v, data);
                $(".element", r).trigger("dblclick").focus();
                setTimeout(function() {
                    if (window.getSelection) {
                        /** @type {(Selection|null)} */
                        var selection = window.getSelection();
                        selection.modify("move", "left", "line");
                        selection.modify("extend", "right", "line");
                    }
                });
            } else {
                fn(v, data);
            }
        };
        /**
         * @param {string} dataAndEvents
         * @param {?} css
         * @param {?} deepDataAndEvents
         * @return {undefined}
         */
        self.updateCompPosition = function(dataAndEvents, css, deepDataAndEvents) {
            /** @type {number} */
            var j = 0;
            for (;j < files.length;j++) {
                if ("inside_" + files[j].id == dataAndEvents) {
                    if (files[j].css) {
                        files[j].css.left = css.left;
                        files[j].css.top = css.top;
                        if (!deepDataAndEvents) {
                            historyService.addPageHistory(object.obj.id, files);
                        }
                    } else {
                        files[j].css = css;
                        if (!deepDataAndEvents) {
                            historyService.addPageHistory(object.obj.id, files);
                        }
                    }
                }
            }
            if (!$rootScope.$$phase) {
                $rootScope.$apply();
            }
        };
        /**
         * @param {string} deepDataAndEvents
         * @param {string} dataAndEvents
         * @return {undefined}
         */
        self.updateCompAngle = function(deepDataAndEvents, dataAndEvents) {
            /** @type {number} */
            var j = 0;
            for (;j < files.length;j++) {
                if ("inside_" + files[j].id == deepDataAndEvents) {
                    if (files[j].css) {
                        /** @type {string} */
                        files[j].css.transform = "rotateZ(" + dataAndEvents + "deg)";
                    } else {
                        files[j].css = {};
                    }
                    historyService.addPageHistory(object.obj.id, files);
                }
            }
            $rootScope.$apply();
        };
        /**
         * @param {boolean} data
         * @return {undefined}
         */
        self.setCopy = function(data) {
            /** @type {boolean} */
            doneResults = data;
            $rootScope.$broadcast("copyState.update", data);
        };
        /**
         * @param {boolean} first
         * @return {undefined}
         */
        self.setFormat = function(first) {
            /** @type {boolean} */
            fragment = first;
        };
        /**
         * @return {?}
         */
        self.getCopy = function() {
            return doneResults;
        };
        /**
         * @param {?} id
         * @return {?}
         */
        self.getPageNames = function(id) {

            var materialArgs = "scene/pageList?id=" + id + "&date=" + (new Date).getTime();
            return $http({
                withCredentials : true,
                loading : true,
                method : "GET",
                url : API_URL + materialArgs
            });
        };
        /**
         * @param {string} dataAndEvents
         * @param {string} deepDataAndEvents
         * @return {?}
         */
        self.changePageSort = function(dataAndEvents, deepDataAndEvents) {
            /** @type {string} */
            var materialArgs = "index.php?c=page&a=pageSort&id=" + deepDataAndEvents + "&pos=" + dataAndEvents + "&date=" + (new Date).getTime();
            return $http({
                withCredentials : true,
                method : "GET",
                url : PREFIX_URL + materialArgs
            });
        };
        /**
         * @param {string} dataAndEvents
         * @param {?} p
         * @param {?} deepDataAndEvents
         * @return {undefined}
         */
        self.updateCompSize = function(dataAndEvents, p, deepDataAndEvents) {
            /** @type {number} */
            var j = 0;
            for (;j < files.length;j++) {
                if ("inside_" + files[j].id == dataAndEvents) {
                    if (!files[j].css) {
                        files[j].css = {};
                    }
                    files[j].css.width = p.width;
                    files[j].css.height = p.height;
                    if (p.lineHeight) {
                        files[j].css.lineHeight = p.lineHeight;
                    }
                    files[j].css.top = p.top;
                    files[j].css.left = p.left;
                    files[j].properties.width = p.width;
                    files[j].properties.height = p.height;
                    if (p.imgStyle) {
                        files[j].properties.imgStyle = p.imgStyle;
                    }
                    if (!deepDataAndEvents) {
                        historyService.addPageHistory(object.obj.id, files);
                    }
                }
            }
            if (!$rootScope.$$phase) {
                $rootScope.$apply();
            }
        };
        /**
         * @param {Object} error
         * @return {?}
         */
        self.savePageNames = function(error) {
            /** @type {string} */
            var materialArgs = "index.php?c=page&a=savePageName";
            var params = {
                id : error.id,
                sceneId : error.sceneId,
                name : error.name
            };
            return $http({
                withCredentials : true,
                method : "POST",
                url : PREFIX_URL + materialArgs,
                headers : {
                    "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
                },
                data : $.param(params)
            });
        };
        /**
         * @return {undefined}
         */
        self.resetCss = function() {
            $("#nr .edit_area li").each(function(index, oItem) {
                var tile = map[oItem.id.replace(/inside_/g, "")];
                if (tile) {
                    if (!tile.css) {
                        tile.css = {};
                    }
                    /** @type {number} */
                    tile.css.zIndex = index;
                }
            });
        };
        /**
         * @return {undefined}
         */
        self.copyElement = function() {
            /** @type {number} */
            k = 0;
            modId = object.obj.id;
            var which = range.getElements();
            /** @type {Array} */
            var group = [];
            $.each(which, function(dataAndEvents, item) {
                var record = map[item];
                if ("w01" != record.type) {
                    if ("w02" != record.type) {
                        group.push(record);
                    }
                }
            });
            items = angular.copy(group);
            value = angular.copy(group);
            self.setCopy(true);
        };
        /**
         * @return {undefined}
         */
        self.formatElement = function() {
            var which = range.getElements();
            /** @type {Array} */
            var values = [];
            $.each(which, function(dataAndEvents, letter) {
                var value = map[letter];
                values.push(value);
            });
            $rootScope.formatElemDefs = angular.copy(values);
            self.setFormat(true);
        };
        /**
         * @return {undefined}
         */
        self.pasteElement = function() {
            /** @type {number} */
            var restoreScript = 0;
            /** @type {Array} */
            var events = [];
            var d = self.isCurrentPageSubmitButtonAlreadyExist();
            if (!stringToSign) {
                main();
            }
            /** @type {number} */
            var i = 0;
            for (;i < items.length;i++) {
                if (6 !== items[i].type && 601 !== items[i].type || !d) {
                    items[i].pageId = object.obj.id;
                    items[i].id = ceil();
                    if (modId == items[i].pageId) {
                        restoreScript++;
                        setup(value[i], items[i], restoreScript, items.length);
                    } else {
                        /** @type {number} */
                        k = 0;
                        items[i].css = angular.copy(value[i].css);
                    }
                    var data = angular.copy(items[i]);
                    var zindex = stringToSign += 1;
                    data.css.zIndex = zindex;
                    files.push(data);
                    map[data.id] = data;
                    events.push(fn(data.type, data, true));
                }
            }
            modId = object.obj.id;
            historyService.addPageHistory(object.obj.id, object.obj.elements);
            $rootScope.$broadcast("dom.changed");
            angular.forEach(range.getElements(), function(vid) {
                $("#inside_" + vid).children(".bar").hide();
            });
            range.clearElements();
            $.each(events, function(dataAndEvents, $slide) {
                $slide.children(".bar").show();
                range.addElement($slide.attr("id").split("_")[1]);
            });
        };
        /**
         * @return {?}
         */
        self.isCurrentPageSubmitButtonAlreadyExist = function() {
            /** @type {boolean} */
            var a = false;
            return angular.forEach(object.obj.elements, function(item) {
                if (6 == ("" + item.type).charAt(0)) {
                    /** @type {boolean} */
                    a = true;
                }
            }), a;
        };
        /**
         * @param {?} walkers
         * @param {Function} cb
         * @param {Function} next_callback
         * @return {undefined}
         */
        self.openCropModal = function(walkers, cb, next_callback) {
            write(walkers, cb, next_callback);
        };
        /**
         * @param {string} actualObject
         * @param {Element} baseWindow
         * @param {Object} child
         * @return {undefined}
         */
        self.replaceBgImage = function(actualObject, baseWindow, child) {
            /** @type {string} */
            var object = actualObject;
            /** @type {string} */
            baseWindow.style.backgroundImage = "url(" + PREFIX_FILE_HOST + object + ")";
            /** @type {null} */
            child.properties.bgColor = null;
            child.properties.imgSrc = object;
            $rootScope.$broadcast("show.edit.bg");
        };
        /** @type {null} */
        var va = null;
        /** @type {function (Object, Function, Function, Function, string): undefined} */
        self.openConsoleModal = cb;
        utilTrigger.getSendType();
        utilTrigger.getHandleType();
        return self.openTriggerMode = start, d.addInterceptor(function(element, obj, keepView) {
            /**
             * @return {?}
             */
            function initialize() {
                var visible_image = $('<ul id="popMenu" class="dropdown-menu" style="min-width: 150px; display: block;" role="menu" aria-labelledby="dropdownMenu1"><li class="edit" role="presentation"><a role="menuitem" tabindex="-1"><div class="eqf-write"></div>\u7f16\u8f91</a></li><li class="style" role="presentation"><a role="menuitem" tabindex="-1"><div class="eqf-type"></div>\u6837\u5f0f</a></li><li class="animation" role="presentation"><a role="menuitem" tabindex="-1"><div class="eqf-move"></div>\u52a8\u753b</a></li><li class="sound" role="presentation"><a role="menuitem" tabindex="-1"><div class="eqf-music"></div>\u97f3\u6548</a></li><li class="trigger" role="presentation"><a role="menuitem" tabindex="-1"><div class="eqf-chufa"></div>\u89e6\u53d1</a></li><li class="link" role="presentation"><a role="menuitem" tabindex="-1"><div class="eqf-link"></div>\u94fe\u63a5</a></li><li class="copy" role="presentation"><a role="menuitem" tabindex="-1"><div class="eqf-scene-copy"></div>\u590d\u5236</a></li><li class="cut" role="presentation"><a role="menuitem" tabindex="-1"><div class="eqf-cut"></div>\u88c1\u5207</a></li><li class="format" role="presentation"><a role="menuitem" tabindex="-1"><div class="eqf-copy-animation"></div>\u590d\u5236\u52a8\u753b</a></li><li role="presentation" class="bottom_bar"><a title="\u7f6e\u9876"><div class="eqf-top up-all"></div></a><a title="\u4e0a\u79fb\u4e00\u5c42"><div class="eqf-up up"></div></a><a title="\u4e0b\u79fb\u4e00\u5c42"><div class="eqf-down down"></div></a><a title="\u7f6e\u5e95"><div class="eqf-under down-all"></div></a><a title="\u5220\u9664"><div class="eqf-scene-delete remove"></div></a></li></ul>').css({
                    position : "absolute",
                    "user-select" : "none"
                });
                return doneResults && visible_image.find(".copy").after($('<li class="paste" role="presentation"><a role="menuitem" tabindex="-1"><div class="eqf-print"></div>\u7c98\u8d34</a></li>')), fragment && visible_image.find(".format").after($('<li class="pasteformat" role="presentation"><a role="menuitem" tabindex="-1"><div class="eqf-paste-animation"></div>\u7c98\u8d34\u52a8\u753b</a></li>')), visible_image.find(".edit").click(function(event) {
                    switch(event.stopPropagation(), obj.type.toString().charAt(0)) {
                        case "1":
                            break;
                        case "2":
                            success(element.find(".element").get(0), obj);
                            break;
                        case "x":
                            success(element.find(".element").get(0), obj);
                            break;
                        case "3":
                            break;
                        case "4":
                            init(obj);
                            break;
                        case "h":
                            filter(obj);
                            break;
                        case "5":
                            update(obj);
                            break;
                        case "6":
                            get(obj);
                            break;
                        case "7":
                            break;
                        case "8":
                            remove(obj);
                            break;
                        case "9":
                            break;
                        case "g":
                            break;
                        case "p":
                            done(obj);
                            break;
                        case "v":
                            load(obj);
                            break;
                        case "r":
                            ;
                        case "c":
                            run(obj);
                            break;
                        case "a":
                            initialize(obj);
                            break;
                        case "l":
                            send(obj);
                            break;
                        case "s":
                            render(obj);
                            break;
                        case "i":
                            save(obj);
                            break;
                        case "d":
                            create(obj);
                            break;
                        case "n":
                            complete(obj);
                            break;
                        case "m":
                            onSuccess(obj);
                    }
                    visible_image.hide();
                }), visible_image.find(".style").click(function(event) {
                    event.stopPropagation();
                    if ("z" === obj.type) {
                        getActual(obj);
                    } else {
                        isElement(obj, function(data) {
                            if (1 == obj.type) {
                                var l;
                                for (l in obj.properties.labels) {
                                    if (data.backgroundColor) {
                                        obj.properties.labels[l].color.backgroundColor = data.backgroundColor;
                                        $(".label_content").css("background-color", data.backgroundColor);
                                    }
                                    if (data.color) {
                                        obj.properties.labels[l].color.color = data.color;
                                        $(".label_content").css("color", data.color);
                                    }
                                }
                            } else {
                                $(".element-box", element).css(data);
                                $.extend(true, obj.css, data);
                            }
                        });
                    }
                    visible_image.hide();
                }), visible_image.find(".animation").click(function(event) {
                    event.stopPropagation();
                    set(obj, function(dataAndEvents) {
                        obj.properties.anim = dataAndEvents;
                    });
                    visible_image.hide();
                }), visible_image.find(".link").click(function(event) {
                    event.stopPropagation();
                    open(obj);
                    visible_image.hide();
                }), visible_image.find(".remove").click(function(event) {
                    event.stopPropagation();
                    $rootScope.$broadcast("element.delete");
                }), visible_image.find(".sound").click(function(event) {
                    event.stopPropagation();
                    refresh(obj, 4);
                    visible_image.hide();
                }), visible_image.find(".trigger").click(function(event) {
                    event.stopPropagation();
                    var which = utilTrigger.getHandleType();
                    $.each(which, function(dataAndEvents, tel) {
                        triggerService.getSendIds(tel.value, obj.id);
                    });
                    navigate(obj, function(trigger) {
                        obj.properties.trigger = trigger;
                    });
                    visible_image.hide();
                }), visible_image.find(".down").click(function() {
                    var next = element.prev();
                    if (!(next.length <= 0)) {
                        var zindex = element.css("zIndex");
                        element.css("zIndex", next.css("zIndex"));
                        next.css("zIndex", zindex);
                        next.before(element);
                        $rootScope.$broadcast("changeCss", {
                            changZindex : "true"
                        });
                    }
                }), visible_image.find(".up").click(function() {
                    var next = element.next();
                    if (!(next.length <= 0)) {
                        var zindex = element.css("zIndex");
                        element.css("zIndex", next.css("zIndex"));
                        next.css("zIndex", zindex);
                        next.after(element);
                        $rootScope.$broadcast("changeCss", {
                            changZindex : "true"
                        });
                    }
                }), visible_image.find(".up-all").click(function() {
                    var lis = element.siblings("li");
                    var listener = lis.last();
                    listener.after(element);
                    element.css("zIndex", lis.length + 1);
                    lis.each(function(maxHeight, curr) {
                        $(curr).css("zIndex", maxHeight + 1);
                    });
                    $rootScope.$broadcast("changeCss", {
                        changZindex : "true"
                    });
                }), visible_image.find(".down-all").click(function() {
                    var lis = element.siblings("li");
                    var listener = lis.first();
                    listener.before(element);
                    element.css("zIndex", 1);
                    lis.each(function(maxHeight, curr) {
                        $(curr).css("zIndex", maxHeight + 2);
                    });
                    $rootScope.$broadcast("changeCss", {
                        changZindex : "true"
                    });
                }), visible_image.find(".copy").click(function(event) {
                    event.stopPropagation();
                    if (!$(".modal-dialog")[0]) {
                        self.copyElement();
                    }
                    visible_image.hide();
                }), visible_image.find(".format").click(function(event) {
                    event.stopPropagation();
                    if (!$(".modal-dialog")[0]) {
                        self.formatElement();
                        /** @type {string} */
                        self.currentTab = "anim";
                        element.trigger("click");
                    }
                    visible_image.hide();
                }), visible_image.find(".pasteformat").click(function(event) {
                    event.stopPropagation();
                    if (!$(".modal-dialog")[0]) {
                        $timeout(function() {
                            var r = range.getElements();
                            if (1 === r.length) {
                                if (self.getComponent(r[0]).id == $rootScope.formatElemDefs[0].id) {
                                    return;
                                }
                                self.getComponent(r[0]).properties.anim = angular.copy($rootScope.formatElemDefs[0].properties.anim);
                                /** @type {string} */
                                self.currentTab = "anim";
                                element.trigger("click");
                                /** @type {Array} */
                                var albums = [];
                                if (self.getComponent(r[0]).properties.anim && (self.getComponent(r[0]).properties.anim.length ? albums = self.getComponent(r[0]).properties.anim : albums.push(self.getComponent(r[0]).properties.anim)), 0 === albums.length) {
                                    return;
                                }
                                $rootScope.$broadcast("formatAnim", albums);
                                historyService.addPageHistory(object.obj.id, object.obj.elements);
                            }
                        });
                    }
                    visible_image.hide();
                }), visible_image.find(".paste").click(function(event) {
                    event.stopPropagation();
                    if (!$(".modal-dialog")[0]) {
                        self.pasteElement();
                    }
                    visible_image.hide();
                }), visible_image.find(".cut").click(function(event) {
                    event.stopPropagation();
                    write(obj, function() {
                        historyService.addPageHistory(object.obj.id, object.obj.elements);
                    });
                    visible_image.hide();
                }), 2 != obj.type && (4 != obj.type && (401 != obj.type && (402 != obj.type && ("h" != obj.type && ("x" != obj.type && visible_image.find(".trigger").hide()))))), 2 != obj.type && (4 != obj.type && (5 != obj.type && ("h" != obj.type && ("x" != obj.type && (501 != obj.type && (502 != obj.type && (503 != obj.type && (401 != obj.type && (402 != obj.type && visible_image.find(".sound").hide()))))))))), security.isAllowToAccess(security.accessDef.SCENE_EDIT_TRIGGER) || visible_image.find(".trigger").hide(),
                security.isAllowToAccess(security.accessDef.SCENE_EDIT_SOUND) || visible_image.find(".sound").hide(), 4 != obj.type && ("401" != obj.type && ("402" != obj.type && ("h" != obj.type && ("x" != obj.type && visible_image.find(".link").hide())))), (4 != obj.type && ("401" != obj.type && "402" != obj.type) || ("w01" == obj.type || "w02" == obj.type)) && visible_image.find(".cut").hide(), "p" == obj.type && (visible_image.find(".animation").hide(), visible_image.find(".style").hide(), visible_image.find(".format").hide(),
                    visible_image.find(".pasteformat").hide()), (6 == obj.type || (601 == obj.type || ("w01" == obj.type || "w02" == obj.type))) && visible_image.find(".copy").hide(), "g" === obj.type && (visible_image.find(".animation").hide(), visible_image.find(".format").hide(), visible_image.find(".edit").hide(), visible_image.find(".up-all").parent().hide(), visible_image.find(".up").parent().hide(), visible_image.find(".down-all").parent().hide(), visible_image.find(".down").parent().hide()), visible_image;
            }
            if ("view" != keepView) {
                if (obj.trigger) {
                    triggerService.setTrigger(obj.id, obj.trigger);
                }
                var div = $("#eq_main");
                if (obj.sound) {
                    $('<div class="sound eqf-music">').click(function() {
                        refresh(obj);
                    }).appendTo(element);
                }
                element.on("contextmenu", ".element-box", function(e) {
                    /**
                     * @param {Object} el
                     * @param {string} pos
                     * @return {undefined}
                     */
                    function init(el, pos) {
                        $("#" + pos).remove();
                        var pickWinTop;
                        el.appendTo(div);
                        pickWinTop = e.pageY + div.scrollTop() + el.height() > document.documentElement.clientHeight ? e.pageY + div.scrollTop() - el.height() < 0 ? e.pageY + div.scrollTop() - el.height() / 2 : e.pageY + div.scrollTop() - el.height() : e.pageY + div.scrollTop();
                        el.css({
                            left : e.pageX + div.scrollLeft() + 15,
                            top : pickWinTop,
                            zIndex : 10001
                        });
                        div.mousemove(function(touches) {
                            el = $("#" + pos);
                            if (touches.pageX < el.offset().left - 20 || (touches.pageX > el.offset().left + el.width() + 20 || (touches.pageY < el.offset().top - 20 || touches.pageY > el.offset().top + el.height() + 20))) {
                                el.hide();
                                $(this).unbind("mousemove");
                            }
                        });
                    }
                    if (e.stopPropagation(), "x" == obj.type && !obj.properties.newXiuziti) {
                        return alert("\u79c0\u5b57\u4f53\u529f\u80fd\u5df2\u5168\u9762\u5347\u7ea7,\u4e3a\u4fdd\u8bc1\u7edf\u4e00\u7684\u4f53\u9a8c,\u539f\u6709\u7ec4\u4ef6\u5df2\u65e0\u6cd5\u518d\u6b21\u7f16\u8f91,\u8bf7\u60a8\u4f7f\u7528\u65b0\u7ec4\u4ef6\u91cd\u65b0\u7f16\u8f91"), $("#comp_setting").attr("style", "display:none"), false;
                    }
                    if ("none" != $(".select-panel").css("display")) {
                        return false;
                    }
                    if ($("#nr").find(".mask-trigger").length) {
                        if (self.currentElemDef && $rootScope.$broadcast("create.trigger.menu", element, e), !$(".edit_area").find(".switch-original").length) {
                            var thead = $('<div class="switch">');
                            element.append(thead).children(".bar").hide();
                        }
                        return false;
                    }
                    if ($("#comp_setting:visible").length > 0) {
                        if ("p" != obj.type) {
                            /** @type {Object} */
                            self.currentElemDef = obj;
                            $rootScope.$broadcast("showStylePanel");
                        }
                    }
                    var failuresLink = initialize();
                    return init(failuresLink, "popMenu"), false;
                });
                if ("p" != obj.type) {
                    element.on("click", function(ev) {
                        if (ev.stopPropagation(), !$("#nr").find(".mask-trigger").length) {
                            if ("x" == obj.type && !obj.properties.newXiuziti) {
                                return alert("\u79c0\u5b57\u4f53\u529f\u80fd\u5df2\u5168\u9762\u5347\u7ea7,\u4e3a\u4fdd\u8bc1\u7edf\u4e00\u7684\u4f53\u9a8c,\u539f\u6709\u7ec4\u4ef6\u5df2\u65e0\u6cd5\u518d\u6b21\u7f16\u8f91,\u8bf7\u60a8\u4f7f\u7528\u65b0\u7ec4\u4ef6\u91cd\u65b0\u7f16\u8f91"), void $("#comp_setting").attr("style", "display:none");
                            }
                            if (!ev.ctrlKey && !ev.shiftKey) {
                                if (self.currentTab === undefined || null === self.currentTab) {
                                    if ("z" !== obj.type) {
                                        isElement(obj, function(data) {
                                            if (1 == obj.type) {
                                                var l;
                                                for (l in obj.properties.labels) {
                                                    if (data.backgroundColor) {
                                                        obj.properties.labels[l].color.backgroundColor = data.backgroundColor;
                                                        $(".label_content").css("background-color", data.backgroundColor);
                                                    }
                                                    if (data.color) {
                                                        obj.properties.labels[l].color.color = data.color;
                                                        $(".label_content").css("color", data.color);
                                                    }
                                                }
                                            } else {
                                                $(".element-box", element).css(data);
                                                $.extend(true, obj.css, data);
                                            }
                                        });
                                    } else {
                                        getActual(obj);
                                    }
                                } else {
                                    if ("style" === self.currentTab) {
                                        if ("z" !== obj.type) {
                                            isElement(obj, function(data) {
                                                if (1 == obj.type) {
                                                    var l;
                                                    for (l in obj.properties.labels) {
                                                        if (data.backgroundColor) {
                                                            obj.properties.labels[l].color.backgroundColor = data.backgroundColor;
                                                            $(".label_content").css("background-color", data.backgroundColor);
                                                        }
                                                        if (data.color) {
                                                            obj.properties.labels[l].color.color = data.color;
                                                            $(".label_content").css("color", data.color);
                                                        }
                                                    }
                                                } else {
                                                    $(".element-box", element).css(data);
                                                    $.extend(true, obj.css, data);
                                                }
                                            });
                                        } else {
                                            getActual(obj);
                                        }
                                    } else {
                                        if ("anim" === self.currentTab) {
                                            set(obj, function(dataAndEvents) {
                                                obj.properties.anim = dataAndEvents;
                                            });
                                        } else {
                                            if ("trigger" == self.currentTab) {
                                                var which = utilTrigger.getHandleType();
                                                $.each(which, function(dataAndEvents, tel) {
                                                    triggerService.getSendIds(tel.value, obj.id);
                                                });
                                                navigate(obj, function(trigger) {
                                                    obj.properties.trigger = trigger;
                                                });
                                            } else {
                                                if ("dropdown" === self.currentTab) {
                                                    getActual(obj);
                                                }
                                            }
                                        }
                                    }
                                }
                                return false;
                            }
                        }
                    });
                }
                element.attr("title", "\u6309\u4f4f\u9f20\u6807\u8fdb\u884c\u62d6\u52a8\uff0c\u70b9\u51fb\u9f20\u6807\u8fdb\u884c\u7f16\u8f91");
            }
        }), self.openLinkModal = open, d.bindEditEvent("2", function(tree, self) {
            bindEvents(tree, self);
        }), d.bindEditEvent("x", function(tree, self) {
            bindEvents(tree, self);
        }), d.bindEditEvent("3", function() {
        }), d.bindEditEvent("v", function(shim, value) {
            var $window = $(".element", shim)[0];
            $($window).unbind("dblclick");
            $($window).bind("dblclick", function() {
                load(value);
                $("#popMenu").hide();
            });
        }), d.bindEditEvent("4", function(shim, cb) {
            var $window = $(".element", shim)[0];
            $($window).unbind("dblclick");
            $($window).bind("dblclick", function() {
                return $("#nr").find(".mask-trigger").length ? false : (init(cb), void $("#popMenu").hide());
            });
        }), d.bindEditEvent("n", function(shim, success) {
            var uniqueForms = $(".element", shim)[0];
            $(uniqueForms).bind("dblclick", function() {
                return $("#nr").find(".mask-trigger").length ? false : (complete(success), void $("#popMenu").hide());
            });
        }), d.bindEditEvent("h", function(shim, items) {
            var $window = $(".element", shim)[0];
            $($window).unbind("dblclick");
            $($window).bind("dblclick", function() {
                return $("#nr").find(".mask-trigger").length ? false : (filter(items), void $("#popMenu").hide());
            });
        }), d.bindEditEvent("5", function(shim, chunk) {
            var $window = $(".element", shim)[0];
            $($window).unbind("dblclick");
            $($window).bind("dblclick", function() {
                update(chunk);
                $("#popMenu").hide();
            });
        }), d.bindEditEvent("r", function(shim, d) {
            var $window = $(".element", shim)[0];
            $($window).unbind("dblclick");
            $($window).bind("dblclick", function() {
                run(d);
                $("#popMenu").hide();
            });
        }), d.bindEditEvent("c", function(shim, d) {
            var $window = $(".element", shim)[0];
            $($window).unbind("dblclick");
            $($window).bind("dblclick", function() {
                run(d);
                $("#popMenu").hide();
            });
        }), d.bindEditEvent("a", function(shim, errmsg) {
            var $window = $(".element", shim)[0];
            $($window).unbind("dblclick");
            $($window).bind("dblclick", function() {
                initialize(errmsg);
                $("#popMenu").hide();
            });
        }), d.bindEditEvent("p", function(shim, json) {
            var $window = $(".element", shim)[0];
            $($window).unbind("dblclick");
            $($window).bind("dblclick", function() {
                done(json);
                $("#popMenu").hide();
            });
            picturesService.setProperties(json.properties);
        }), d.bindEditEvent("6", function(shim, origin) {
            var $window = $(".element", shim)[0];
            $($window).unbind("dblclick");
            $($window).bind("dblclick", function() {
                get(origin);
                $("#popMenu").hide();
            });
        }), d.bindEditEvent("8", function(shim, l) {
            var $window = $(".element", shim)[0];
            $($window).unbind("dblclick");
            $($window).bind("dblclick", function() {
                remove(l);
                $("#popMenu").hide();
            });
        }), d.bindEditEvent("l", function(shim, inplace) {
            var $window = $(".element", shim)[0];
            $($window).unbind("dblclick");
            $($window).bind("dblclick", function() {
                send(inplace);
                $("#popMenu").hide();
            });
        }), d.bindEditEvent("s", function(shim, data) {
            var $window = $(".element", shim)[0];
            $($window).unbind("dblclick");
            $($window).bind("dblclick", function() {
                render(data);
                $("#popMenu").hide();
            });
        }), d.bindEditEvent("i", function(shim, k) {
            var $window = $(".element", shim)[0];
            $($window).unbind("dblclick");
            $($window).bind("dblclick", function() {
                save(k);
                $("#popMenu").hide();
            });
        }), d.bindEditEvent("d", function(shim, k) {
            var $window = $(".element", shim)[0];
            $($window).unbind("dblclick");
            $($window).bind("dblclick", function() {
                create(k);
                $("#popMenu").hide();
            });
        }), d.bindEditEvent("7", function(shim, d) {
            var tableview = $(".element", shim)[0];
            tableview.addEventListener("click", function() {
                if (!va) {
                    $modal.open({
                        windowClass : "",
                        templateUrl : tplUrl + "scene//console/map.tpl.html",
                        controller : "MapConsoleCtrl"
                    }).result.then(function(point) {
                        var cm = new BMap.Map("map_" + d.id);
                        cm.clearOverlays();
                        var center = new BMap.Point(point.lng, point.lat);
                        var button = new BMap.Marker(center);
                        cm.addOverlay(button);
                        var label = new BMap.Label(point.address, {
                            offset : new BMap.Size(20, -10)
                        });
                        button.setLabel(label);
                        cm.centerAndZoom(center, 12);
                        d.properties.pointX = point.lng;
                        d.properties.pointY = point.lat;
                        d.properties.x = point.lng;
                        d.properties.y = point.lat;
                        d.properties.markTitle = point.address;
                    });
                }
            });
        }), d.bindEditEvent("m", function(shim, data) {
            var $window = $(".element", shim)[0];
            $($window).unbind("dblclick");
            $($window).bind("dblclick", function() {
                onSuccess(data);
                $("#popMenu").hide();
            });
        }), d.bindEditEvent("w", function(shim) {
            var $window = $(".element", shim)[0];
            $($window).unbind("dblclick");
            $($window).bind("dblclick", function() {
                $("#popMenu").hide();
            });
        }), d.bindEditEvent("t", function() {
        }), d.bindEditEvent("b", function(dataAndEvents) {
        }), d.bindEditEvent("g", function(dataAndEvents) {
        }), d.bindEditEvent("z", function(shim, dataAndEvents) {
            var param = $(".element", shim)[0];
            $(param).unbind("dblclick");
        }), self.templateEditor = d, self.getTplById = function(file) {
            /** @type {string} */
            var path = "m/scene/select?id=" + file;
            /** @type {Date} */
            var defaultCenturyStart = new Date;
            return path += "&time=" + defaultCenturyStart.getTime(), $http({
                withCredentials : true,
                method : "GET",
                url : PREFIX_URL + path
            });
        }, self.getUserNum = function() {
            var appFrontendUrl = PREFIX_URL + "m/scene/free/tpl/num";
            /** @type {Date} */
            var defaultCenturyStart = new Date;
            return appFrontendUrl += "?time=" + defaultCenturyStart.getTime(), $http({
                withCredentials : true,
                method : "GET",
                url : appFrontendUrl
            });
        }, self.createByTpl = function(name) {
            var appFrontendUrl = API_URL + "scene/createBySys";
            return $http({
                withCredentials : true,
                method : "POST",
                url : appFrontendUrl,
                headers : {
                    "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
                },
                data : $.param(name)
            });
        }, self.getSceneDetail = function(file, zoom) {
            /** @type {string} */
            var path = "scene/detail?id=" + file;
            return zoom && (path += (/\?/.test(path) ? "&" : "?") + "user=" + zoom), promise = $http({
                withCredentials : true,
                method : "GET",
                url : API_URL + path
            }), obj = null, promise.then(function(event) {
                obj = event.data.obj;
            }), promise;
        }, self.getCurrentScene = function() {
            return obj;
        }, self.getCurrentScenePromise = function() {
            return promise;
        },

            self.saveSceneSettings = function(settingObject) {

            settingObject = angular.copy(settingObject);
            if (angular.isObject(settingObject.bgAudio)) {
                /** @type {string} */
                settingObject.bgAudio = JSON.stringify(settingObject.bgAudio);
            }
            /** @type {null} */
            settingObject.image = null;
            /** @type {string} */
            var apiURI = "scene/saveSettings";
            return $http({
                withCredentials : true,
                loading : true,
                method : "POST",
                url : API_URL + apiURI,
                headers : {
                    "Content-Type" : "application/json; charset=UTF-8"
                },
                data : JSON.stringify(settingObject)
            });
        },


            self.publishScene = function(file, zoom) {
            /** @type {string} */
            var path = "index.php?c=scene&a=publish&id=" + file;
            if (zoom) {
                path += (/\?/.test(path) ? "&" : "?") + "checkType=" + zoom;
            }
            /** @type {Date} */
            var defaultCenturyStart = new Date;
            return path += "&time=" + defaultCenturyStart.getTime(), $http({
                withCredentials : true,
                method : "GET",
                url : PREFIX_URL + path
            });
        }, self.closeScene = function(file) {
            /** @type {string} */
            var path = "index.php?c=scene&a=off&id=" + file;
            /** @type {Date} */
            var defaultCenturyStart = new Date;
            return path += "&time=" + defaultCenturyStart.getTime(), $http({
                withCredentials : true,
                method : "GET",
                url : PREFIX_URL + path
            });
        }, self.openScene = function(file) {
            /** @type {string} */
            var path = "index.php?c=scene&a=on&id=" + file;
            /** @type {Date} */
            var defaultCenturyStart = new Date;
            return path += "&time=" + defaultCenturyStart.getTime(), $http({
                withCredentials : true,
                method : "GET",
                url : PREFIX_URL + path
            });
        }, self.createBlankScene = function(errorName, paramType, dataAndEvents) {
            var params = {
                name : errorName,
                /** @type {Function} */
                type : paramType,
                pageMode : dataAndEvents
            };
            /** @type {string} */
            var materialArgs = "scene/create";
            return $http({
                withCredentials : true,
                method : "POST",
                url : API_URL + materialArgs,
                headers : {
                    "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
                },
                data : $.param(params)
            });
        }, self.copySceneById = function(file) {
            /** @type {string} */
            var path = "scene/createByCopy?id=" + file;
            return $http({
                withCredentials : true,
                method : "GET",
                url : API_URL + path
            });
        }, self.deleteSceneById = function(footer, query) {
            /** @type {string} */
            var src = "index.php?c=scene&a=delscene&id=" + footer;
            return query && (src += "&backup=" + query), $http({
                withCredentials : true,
                method : "GET",
                url : PREFIX_URL + src
            });
        }, self.getCoverImages = function() {
            /** @type {string} */
            var materialArgs = "index.php?c=upfile&a=userList&bizType=99&fileType=1&time=" + (new Date).getTime();
            return $http({
                withCredentials : true,
                method : "GET",
                url : PREFIX_URL + materialArgs
            });
        }, self.revoke = function(jid) {
            /** @type {string} */
            var materialArgs = "m/scene/revoke?id=" + jid + "&time=" + (new Date).getTime();
            return $http({
                withCredentials : true,
                method : "GET",
                url : PREFIX_URL + materialArgs
            });
        }, self.getSceneByPage = function(id, isCreate, isCopy, longpage) {
            /** @type {string} */
            var code = "";
            if (isCreate || isCopy) {
                /** @type {string} */
                code = "scene/createPage?id=" + id;
                if (isCopy) {
                    code += "&copy=true";
                }
                if (longpage) {
                    code += "&longPage=" + longpage;
                }
            } else {
                /** @type {string} */
                code = "scene/design?id=" + id;
            }
            var defer = $q.defer();
            /** @type {Date} */
            var defaultCenturyStart = new Date;
            return code += (/\?/.test(code) ? "&" : "?") + "time=" + defaultCenturyStart.getTime(), $http({
                withCredentials : true,
                loading : true,
                method : "GET",
                url : API_URL + code
            }).then(function(image) {
                defer.resolve(image);
                object = image.data;
                if (!object.obj.elements) {
                    /** @type {Array} */
                    object.obj.elements = [];
                }
                files = object.obj.elements;
                /** @type {number} */
                var i = 0;
                for (;files && i < files.length;i++) {
                    map[files[i].id] = files[i];
                }
            }, function(error) {
                defer.reject(error);
            }), defer.promise;
        }, self.previewSceneTpl = function(file) {
            /** @type {string} */
            var path = "scene/sysPageInfo?id=" + file;
            /** @type {Date} */
            var expected = ($q.defer(), new Date);
            return path += (/\?/.test(path) ? "&" : "?") + "time=" + expected.getTime(), $http({
                withCredentials : true,
                method : "GET",
                url : API_URL + path
            });
        }, self.recentlyUsedTpls = function() {
            /** @type {string} */
            var href = "m/scene/tpl/recently/used";
            return href += (/\?/.test(href) ? "&" : "?") + "time=" + (new Date).getTime(), $http({
                withCredentials : true,
                method : "GET",
                url : PREFIX_URL + href
            });
        },

        //    self.recordTplUsage = function(term) {
        //    var credentials = {
        //        id : term
        //    };
        //    /** @type {string} */
        //    var href = "m/scene/usePageTpl";
        //    /** @type {Date} */
        //    var defaultCenturyStart = new Date;
        //    return href += (/\?/.test(href) ? "&" : "?") + "time=" + defaultCenturyStart.getTime(), $http({
        //        withCredentials : true,
        //        method : "POST",
        //        url : PREFIX_URL + href,
        //        headers : {
        //            "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
        //        },
        //        data : $.param(credentials)
        //    });
        //},


            self.getSceneTpl = function(elem) {
            var matches = $cacheFactory.get("tplCache") ? $cacheFactory.get("tplCache") : $cacheFactory("tplCache");
            var dfrd = $q.defer();
            if (matches.get(elem)) {
                var data = $.extend(true, {}, matches.get(elem));
                if (data.data.obj.scene) {
                    if (data.data.obj.scene.bgAudio) {
                        obj.bgAudio = data.data.obj.scene.bgAudio;
                    }
                }
                var h = {};
                /** @type {number} */
                var i = 0;
                for (;i < data.data.obj.elements.length;i++) {
                    var self = data.data.obj.elements[i];
                    if (self.type + "" == "w01" || self.type + "" == "w02") {
                        if (!h[self.id.substr(3)]) {
                            h[self.id.substr(3)] = ceil();
                        }
                        self.id = self.id.substr(0, 3) + h[self.id.substr(3)];
                    } else {
                        self.id = ceil();
                    }
                    self.sceneId = object.obj.sceneId;
                    self.pageId = object.obj.id;
                }
                files = data.data.obj.elements;
                /** @type {number} */
                var j = 0;
                for (;j < files.length;j++) {
                    map[files[j].id] = files[j];
                }
                dfrd.resolve(data);
            } else {
                /** @type {string} */
                var name = "scene/sysPageInfo?id=" + elem;
                /** @type {Date} */
                var defaultCenturyStart = new Date;
                name += (/\?/.test(name) ? "&" : "?") + "time=" + defaultCenturyStart.getTime();
                $http({
                    withCredentials : true,
                    method : "GET",
                    url : API_URL + name
                }).then(function(data) {
                    matches.put(data.data.obj.id, $.extend(true, {}, data));
                    if (data.data.obj.scene) {
                        if (data.data.obj.scene.bgAudio) {
                            obj.bgAudio = data.data.obj.scene.bgAudio;
                        }
                    }
                    if (!data.data.obj.elements) {
                        /** @type {Array} */
                        data.data.obj.elements = [];
                    }
                    /** @type {number} */
                    var type = 0;
                    for (;type < data.data.obj.elements.length;type++) {
                        var self = data.data.obj.elements[type];
                        self.id = ceil();
                        self.sceneId = object.obj.sceneId;
                        self.pageId = object.obj.id;
                    }
                    files = data.data.obj.elements;
                    /** @type {number} */
                    var i = 0;
                    for (;i < files.length;i++) {
                        map[files[i].id] = files[i];
                    }
                    dfrd.resolve(data);
                }, function(error) {
                    dfrd.reject(error);
                });
            }
            return dfrd.promise;
        }, self.saveScene = function(data) {
            /** @type {string} */
            var materialArgs = "index.php?c=scene&a=savepage";
            return $http({
                withCredentials : true,
                method : "POST",
                url : PREFIX_URL + materialArgs,
                headers : {
                    "Content-Type" : "text/plain; charset=UTF-8"
                },
                data : JSON.stringify(data)
            });
        }, self.deletePage = function(file) {
            /** @type {string} */
            var path = "index.php?c=scene&a=delPage&id=" + file;
            return $http({
                withCredentials : true,
                loading : true,
                method : "GET",
                url : PREFIX_URL + path
            });
        }, self.getBgImages = function(file) {
            /** @type {string} */
            var path = "m/scene/gallery/" + file;
            /** @type {Date} */
            var defaultCenturyStart = new Date;
            return path += (/\?/.test(path) ? "&" : "?") + "time=" + defaultCenturyStart.getTime(), $http({
                withCredentials : true,
                method : "GET",
                url : PREFIX_URL + path
            });
        }, self.createCustomComp = text, self.openAudioModal = template, self.openBgModal = ready, self.getElements = function() {
            return files;
        }, self.getElementsMap = function() {
            return map;
        }, self.getComponent = function(element) {
            return map[element];
        }, self.deleteElement = callback, self.getSceneObj = function() {
            return object;
        }, self.getTpls = function(qs, dataAndEvents, deepDataAndEvents, queryString) {
            /** @type {string} */
            var url = "m/scene/listTpl";
            if (null != qs) {
                url += (/\?/.test(url) ? "&" : "?") + "sceneType=" + qs;
            }
            url += (/\?/.test(url) ? "&" : "?") + "pageNo=" + (dataAndEvents ? dataAndEvents : 1);
            url += (/\?/.test(url) ? "&" : "?") + "pageSize=" + (deepDataAndEvents ? deepDataAndEvents : 12);
            if (queryString) {
                url += (/\?/.test(url) ? "&" : "?") + "orderBy=" + queryString;
            }
            /** @type {Date} */
            var defaultCenturyStart = new Date;
            return url += (/\?/.test(url) ? "&" : "?") + "time=" + defaultCenturyStart.getTime(), $http({
                withCredentials : true,
                method : "GET",
                url : PREFIX_URL + url
            });
        }, self.getCompanyTpls = function(dataAndEvents, n, order) {
            /** @type {string} */
            var materialArgs = "/m/scene/tpl/company/list";
            var options = {
                pageNo : dataAndEvents,
                pageSize : n,
                order : order
            };
            return $http({
                withCredentials : true,
                method : "POST",
                url : PREFIX_URL + materialArgs,
                headers : {
                    "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
                },
                data : $.param(options)
            });
        }, self.getSceneById = function(id) {
            /** @type {string} */
            var path = "/m/scene/tpl/detail/" + id;
            return $http({
                withCredentials : true,
                method : "GET",
                url : PREFIX_URL + path
            });
        }, self.createCompanyTpls = function(file) {
            /** @type {string} */
            var path = "/m/scene/tpl/company/set?id=" + file;
            return $http({
                withCredentials : true,
                method : "POST",
                url : PREFIX_URL + path
            });
        }, self.clearCompanyTpls = function(file) {
            /** @type {string} */
            var path = "/m/scene/tpl/company/unset?id=" + file;
            return $http({
                withCredentials : true,
                method : "POST",
                url : PREFIX_URL + path
            });
        }, self.getPageTpls = function(keepData, bizType, tagId, pageNo, pageSize, order, freeTplSetting, name, username) {
            /** @type {string} */
            var href = "scene/sysList";
            /** @type {Date} */
            var defaultCenturyStart = new Date;
            href += (/\?/.test(href) ? "&" : "?") + "time=" + defaultCenturyStart.getTime();

            var name = {
                tplType : 1,
                bizType : bizType,
                tagId : tagId,
                order : order,
                freeTplSetting : freeTplSetting,
                name : name,
                createUser : username,
                pageNo : pageNo ? pageNo : 1,
                pageSize : pageSize ? pageSize : 12
            };
            return $http({
                withCredentials : true,
                loading : true,
                method : "POST",
                url : API_URL + href,
                headers : {
                    "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
                },
                data : $.param(name)
            }).then(function(evt) {
                if (200 == evt.data.code) {
                    self.scenes = evt.data;
                    $rootScope.$broadcast("getSampleList");
                }
            });
        }, self.getPageTplTypesTwo = function(dataAndEvents, file) {
            /** @type {string} */
            var path = "upfile/sysTag?type=2&bizType=" + file;
            /** @type {Date} */
            var defaultCenturyStart = new Date;
            return path += (/\?/.test(path) ? "&" : "?") + "time=" + defaultCenturyStart.getTime(), $http({
                withCredentials : true,
                method : "GET",
                url : API_URL + path
            });
        }, self.saveMyTpl = function(data) {
            /** @type {string} */
            var materialArgs = "index.php?c=user&a=saveMyTpl";
            return $http({
                withCredentials : true,
                method : "POST",
                url : PREFIX_URL + materialArgs,
                headers : {
                    "Content-Type" : "text/plain; charset=UTF-8"
                },
                data : JSON.stringify(data)
            });
        }, self.saveCompanyTpl = function(data) {
            /** @type {string} */
            var materialArgs = "m/scene/page/companytpl/save";
            return $http({
                withCredentials : true,
                method : "POST",
                url : PREFIX_URL + materialArgs,
                headers : {
                    "Content-Type" : "text/plain; charset=UTF-8"
                },
                data : JSON.stringify(data)
            });
        }, self.previewScene = function(file) {
            /** @type {string} */
            var path = "index.php?c=user&a=getMyTpl&id=" + file;
            /** @type {Date} */
            var defaultCenturyStart = new Date;
            path += (/\?/.test(path) ? "&" : "&") + "time=" + defaultCenturyStart.getTime();
            var dfrd = $q.defer();
            return $http({
                withCredentials : true,
                method : "GET",
                url : PREFIX_URL + path
            }).then(function(data) {
                var map = $cacheFactory.get("tplCache") ? $cacheFactory.get("tplCache") : $cacheFactory("tplCache");
                /** @type {number} */
                var i = 0;
                for (;i < data.data.list.length;i++) {
                    var item = {
                        data : {
                            obj : {
                                elements : data.data.list[i].elements,
                                scene : data.data.obj
                            }
                        }
                    };
                    map.put(data.data.list[i].id, $.extend(true, {}, item));
                }
                dfrd.resolve(data);
            }), dfrd.promise;
        }, self.transferScene = function(opt_fragmentIdStr, qs, queryString) {
            var url = PREFIX_URL + "index.php?c=scene&a=transfer";
            return url += "?loginName=" + qs, url += "&id=" + opt_fragmentIdStr, url += "&platform=" + queryString, url += "&time=" + (new Date).getTime(), $http({
                withCredentials : true,
                method : "GET",
                url : url
            });
        },

        //    self.getActivities = function() {
        //    var appFrontendUrl = PREFIX_S1_URL + "index.php?c=eqs&a=activity&all=1";
        //    return $http({
        //        withCredentials : true,
        //        method : "GET",
        //        url : appFrontendUrl
        //    });
        //},

            self.getSceneTemplatePrices = function() {
            var appFrontendUrl = PREFIX_URL + "index.php?c=statics&a=scene_template_prices";
            return $http({
                withCredentials : true,
                method : "GET",
                url : appFrontendUrl
            });
        },

            self.soundLink = function(dataAndEvents, file) {
            /** @type {string} */
            var path = "index.php?c=upfile&a=savewl&url=" + dataAndEvents + "&fileType=" + file;
            /** @type {Date} */
            var defaultCenturyStart = new Date;
            return path += "&time=" + defaultCenturyStart.getTime(), $http({
                withCredentials : true,
                method : "GET",
                url : PREFIX_URL + path
            });
        },
            self.comPosition = {
            top : 0
        }, self;
    }]);
