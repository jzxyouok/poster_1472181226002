angular.module("scene.create.console", ["scene.create.console.bg", "scene.create.console.map", "scene.create.console.input", "scene.create.console.radio.checkbox", "scene.create.console.rating", "scene.create.console.counter", "scene.create.console.linkComponent", "scene.create.console.button", "scene.create.console.setting", "scene.create.console.tel", "scene.create.console.fake", "scene.create.console.pictures1", "scene.create.console.sound", "scene.create.console.soundComponent", "scene.create.console.micro",
    "scene.create.console.link", "scene.create.console.video", "scene.create.console.category", "scene.create.console.imageCrop", "scene.create.console.cropImage", "scene.create.console.cropSound", "scene.pageeffect.console", "scene.create.console.scene-setting-component", "scene.create.console.shape", "scene.create.console.randomevent", "scene.create.console.statistics", "scene.create.console.font"
]), angular.module("scene.create.console").controller("ConsoleCtrl", ["$scope", function() {}]), angular.module("scene.create.console").directive("autofocus", function() {
    return function(dataAndEvents, submenu) {
        setTimeout(function() {
            submenu.focus().select();
        }, 400);
    };
}).directive("checkCount", function() {
    return {
        restrict: "EA",
        require: "ngModel",
        /**
         * @param {?} tabCtrl
         * @param {?} scope
         * @param {?} attrs
         * @param {?} ngModelCtrl
         * @return {undefined}
         */
        link: function(tabCtrl, scope, attrs, ngModelCtrl) {
            /** @type {number} */
            var length = parseInt(attrs.checkCount, 10);
            ngModelCtrl.$viewChangeListeners.push(function() {
                if (countCharacters(ngModelCtrl.$modelValue) > length) {
                    var template = ngModelCtrl.$modelValue.replace(/[^\x00-\xff]/g, "xx");
                    var dataEnd = template.substring(0, length).replace(/xx/g, "中").length;
                    ngModelCtrl.$setViewValue(ngModelCtrl.$modelValue.substring(0, dataEnd));
                    ngModelCtrl.$render();
                }
            });
        }
    };
}), angular.module("scene.create.console.setting.anim", ["app.directives.uislider", "app.directives.limitInput"]), angular.module("scene.create.console.setting.anim").controller("AnimConsoleCtrl", ["$scope", "$rootScope", "sceneService", "security", function(self, $rootScope, message, dataAndEvents) {
    /**
     * @param {Object} info
     * @param {number} body
     * @return {undefined}
     */
    function handler(info, body) {
        var item = {
            anim: info,
            animClasses: flags,
            count: body,
            elemId: self.elemDef.id,
            elemDef: self.elemDef
        };
        $rootScope.$broadcast("previewCurrentChange", item);
    }
    /**
     * @param {Object} status
     * @param {Array} resp
     * @return {undefined}
     */
    function success(status, resp) {
        var item = {
            animations: status,
            animClasses: resp,
            count: countInfo,
            elemId: self.elemDef.id,
            elemDef: self.elemDef
        };
        $rootScope.$broadcast("previewAllChanges", item);
    }
    var i;
    var j;
    var config = self.elemDef = message.currentElemDef;
    if (config.properties.anim) {
        /** @type {number} */
        i = 0;
        for (; i < config.properties.anim.length; i++) {
            if (33 === config.properties.anim[i].type || "33" === config.properties.anim[i].type) {
                /** @type {number} */
                config.properties.anim[i].type = 0;
            }
            if (32 === config.properties.anim[i].type || "32" === config.properties.anim[i].type) {
                /** @type {number} */
                config.properties.anim[i].type = 10;
            }
        }
    }
    /** @type {Array} */
    self.animations = [];
    /** @type {Array} */
    self.types = [];
    /** @type {Array} */
    self.directions = [];
    var value;
    var countInfo;
    /** @type {Array} */
    var flags = [];
    /** @type {Array} */
    self.animTypeEnum = [{
        id: -1,
        name: "无"
    }, {
        id: "typer",
        name: "文本：打字机",
        cat: "特殊"
    }, {
        id: 0,
        name: "淡入",
        cat: "进入"
    }, {
        id: 1,
        name: "移入",
        cat: "进入"
    }, {
        id: 2,
        name: "弹入",
        cat: "进入"
    }, {
        id: 20,
        name: "翻转进入",
        cat: "进入"
    }, {
        id: 3,
        name: "中心弹入",
        cat: "进入"
    }, {
        id: 4,
        name: "中心放大",
        cat: "进入"
    }, {
        id: 12,
        name: "翻滚进入",
        cat: "进入"
    }, {
        id: 24,
        name: "翻开进入",
        cat: "进入"
    }, {
        id: 13,
        name: "光速进入",
        cat: "进入"
    }, {
        id: 26,
        name: "魔幻进入",
        cat: "进入"
    }, {
        id: 27,
        name: "缩小进入",
        cat: "进入"
    }, {
        id: 31,
        name: "旋转进入",
        cat: "进入"
    }, {
        id: 6,
        name: "摇摆",
        cat: "强调"
    }, {
        id: 5,
        name: "抖动",
        cat: "强调"
    }, {
        id: 7,
        name: "旋转",
        cat: "强调"
    }, {
        id: 8,
        name: "翻转",
        cat: "强调"
    }, {
        id: 9,
        name: "悬摆",
        cat: "强调"
    }, {
        id: 23,
        name: "闪烁",
        cat: "强调"
    }, {
        id: 29,
        name: "下滑",
        cat: "强调"
    }, {
        id: 30,
        name: "上滑",
        cat: "强调"
    }, {
        id: 21,
        name: "放大抖动",
        cat: "强调"
    }, {
        id: 22,
        name: "倾斜摆动",
        cat: "强调"
    }, {
        id: 10,
        name: "淡出",
        cat: "退出"
    }, {
        id: 17,
        name: "移出",
        cat: "退出"
    }, {
        id: 19,
        name: "弹出",
        cat: "退出"
    }, {
        id: 11,
        name: "翻转消失",
        cat: "退出"
    }, {
        id: 14,
        name: "中心消失",
        cat: "退出"
    }, {
        id: 18,
        name: "中心缩小",
        cat: "退出"
    }, {
        id: 15,
        name: "翻滚退出",
        cat: "退出"
    }, {
        id: 25,
        name: "翻开消失",
        cat: "退出"
    }, {
        id: 16,
        name: "光速退出",
        cat: "退出"
    }, {
        id: 28,
        name: "放大退出",
        cat: "退出"
    }];
    /** @type {Array} */
    var matches = [23, 24, 25];
    if (!dataAndEvents.isAllowToAccess(dataAndEvents.accessDef.COMP_ANIMATION)) {
        /** @type {number} */
        i = 0;
        for (; i < self.animTypeEnum.length; i++) {
            /** @type {number} */
            j = 0;
            for (; j < matches.length; j++) {
                if (self.animTypeEnum[i].id === matches[j]) {
                    self.animTypeEnum.splice(i, 1);
                    i--;
                }
            }
        }
    }
    if (self.animDirectionEnum = [{
            id: 0,
            name: "从左向右"
        }, {
            id: 1,
            name: "从上到下"
        }, {
            id: 2,
            name: "从右向左"
        }, {
            id: 3,
            name: "从下到上"
        }], config.properties.anim) {
        if (config.properties.anim instanceof Array) {
            if (config.properties.anim.length) {
                /** @type {number} */
                i = 0;
                for (; i < config.properties.anim.length; i++) {
                    if (null !== config.properties.anim[i].type && (-1 !== config.properties.anim[i].type && "-1" !== config.properties.anim[i].type)) {
                        self.animations.push(config.properties.anim[i]);
                        /** @type {number} */
                        j = 0;
                        /** @type {number} */
                        tlen = self.animTypeEnum.length;
                        for (; j < tlen; j++) {
                            if (self.animations[i].type === self.animTypeEnum[j].id) {
                                self.types[i] = self.animTypeEnum[j];
                            }
                        }
                        /** @type {number} */
                        j = 0;
                        /** @type {number} */
                        tlen = self.animDirectionEnum.length;
                        for (; j < tlen; j++) {
                            if (self.animations[i].direction === self.animDirectionEnum[j].id) {
                                self.directions[i] = self.animDirectionEnum[j];
                            }
                        }
                    } else {
                        config.properties.anim.splice(i, 1);
                        i--;
                    }
                }
            }
        } else {
            /** @type {number} */
            i = 0;
            for (; i < self.animTypeEnum.length; i++) {
                if (self.animTypeEnum[i].id === config.properties.anim.type) {
                    self.types[0] = self.animTypeEnum[i];
                }
            }
            if (null !== config.properties.anim.direction) {
                self.directions[0] = self.animDirectionEnum[config.properties.anim.direction];
            } else {
                self.directions[0] = self.animDirectionEnum[0];
            }
            /** @type {number} */
            config.properties.anim.duration = parseFloat(config.properties.anim.duration);
            /** @type {number} */
            config.properties.anim.delay = parseFloat(config.properties.anim.delay);
            /** @type {number} */
            config.properties.anim.countNum = parseInt(config.properties.anim.countNum, 10) || 1;
            self.animations.push(config.properties.anim);
        }
    }
    if (!config.properties) {
        config.properties = {};
    }
    var defaults = {
        type: null,
        direction: null,
        duration: 2,
        delay: 0,
        countNum: 1,
        interval: 0,
        count: null,
        interval: 0
    };
    /**
     * @param {KeyboardEvent} params
     * @return {undefined}
     */
    self.addAnim = function(params) {
        if (!params.originalEvent._constructed) {
            var setting = angular.copy(defaults);
            setting.type = self.animTypeEnum[0].id;
            setting.direction = self.animDirectionEnum[0].id;
            self.animations.push(setting);
            var len = self.animations.length;
            self.types[len - 1] = self.animTypeEnum[0];
            self.directions[len - 1] = self.animDirectionEnum[0];
        }
    };
    /**
     * @param {?} id
     * @param {?} event
     * @return {undefined}
     */
    self.removeAnim = function(id, event) {
        event.stopPropagation();
        self.animations.splice(id, 1);
        self.types.splice(id, 1);
        self.directions.splice(id, 1);
    };
    /**
     * @return {undefined}
     */
    self.clear = function() {
        /** @type {Array} */
        self.animations = [];
    };
    self.$watch("animations", function(newValue, oldValue) {
        if (newValue !== oldValue) {
            config.properties.anim = self.animations;
        }
    }, true);
    self.$watch("types", function(cur, context) {
        if (cur && cur !== context) {
            /** @type {number} */
            var i = 0;
            for (; i < cur.length; i++) {
                if (context[i]) {
                    if (cur[i].id !== context[i].id) {
                        handler(self.animations[i], i);
                    }
                }
            }
        }
    }, true);
    self.$watch("directions", function(cur, context) {
        if (cur && cur !== context) {
            /** @type {number} */
            var i = 0;
            for (; i < cur.length; i++) {
                if (context[i]) {
                    if (cur[i].id !== context[i].id) {
                        handler(self.animations[i], i);
                    }
                }
            }
        }
    }, true);
    /**
     * @param {KeyboardEvent} deepDataAndEvents
     * @return {undefined}
     */
    self.previewAnim = function(deepDataAndEvents) {
        if (!deepDataAndEvents.originalEvent || !deepDataAndEvents.originalEvent._constructed) {
            var params = angular.copy(self.animations);
            /** @type {Array} */
            var result = [];
            /** @type {Array} */
            var resp = [];
            /** @type {number} */
            var i = 0;
            for (; i < params.length; i++) {
                if (null !== params[i].type && (-1 !== params[i].type && "-1" !== params[i].type)) {
                    result.push(params[i]);
                    resp[i] = eqxCommon.convertType(params[i]);
                } else {
                    params.splice(i, 1);
                    i--;
                }
            }
            /** @type {number} */
            countInfo = 0;
            success(result, resp);
        }
    };
    self.$on("formatAnim", function(deepDataAndEvents, theTitle) {
        if (theTitle) {
            /** @type {Object} */
            self.animations = theTitle;
            self.previewAnim(deepDataAndEvents);
        }
    });
    /**
     * @param {Event} field
     * @param {?} key
     * @return {?}
     */
    self.changeAnimation = function(field, key) {
        return "typer" === field.type && (2 !== self.elemDef.type && "2" !== self.elemDef.type) ? (alert("当前选择仅适用于文本组件！"), self.types[key] = self.animTypeEnum[0], void(field.type = -1)) : (value = eqxCommon.convertType(field), void(flags[key] = value));
    };
}]);