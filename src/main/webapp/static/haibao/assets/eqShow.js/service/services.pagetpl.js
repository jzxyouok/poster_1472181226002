angular.module("services.pagetpl", []), angular.module("services.pagetpl").factory("pageTplService", ["$http", "$rootScope", "$modal", "$q", "dataCacheService", function(callback, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, jQuery) {
    /**
     * @param {string} file
     * @return {?}
     */
    function getPageTpls(file) {
        /** @type {string} */
        var path = "scene/getPageTpl?type=" + file;
        /** @type {Date} */
        var defaultCenturyStart = new Date;
        return path += (/\?/.test(path) ? "&" : "?") + "time=" + defaultCenturyStart.getTime(), callback({
            withCredentials: true,
            method: "GET",
            url: API_URL + path
        });
    }
    /**
     * @param {string} id
     * @return {?}
     */
    function getMyTplList(id) {
        /** @type {string} */
        var path = "scene/pageList?id=" + id;
        /** @type {Date} */
        var defaultCenturyStart = new Date;
        return path += (/\?/.test(path) ? "&" : "?") + "time=" + defaultCenturyStart.getTime(), callback({
            withCredentials: true,
            method: "GET",
            url: API_URL + path
        });
    }
    /**
     * @return {?}
     */
    function getPageTplTypes() {
        /** @type {string} */
        var href = "index.php?c=statics&a=getPageTplType";
        /** @type {Date} */
        var defaultCenturyStart = new Date;
        return href += (/\?/.test(href) ? "&" : "?") + "time=" + defaultCenturyStart.getTime(), callback({
            withCredentials: true,
            method: "GET",
            url: PREFIX_URL + href
        });
    }
    /**
     * @param {boolean} params
     * @return {?}
     */
    function getPageTagLabel(params) {
        /** @type {string} */
        var path = "statics/tagList?type=1";
        if (params || 0 === params) {
            path += (/\?/.test(path) ? "&" : "?") + "bizType=" + params;
        }
        /** @type {Date} */
        var defaultCenturyStart = new Date;
        return path += (/\?/.test(path) ? "&" : "?") + "time=" + defaultCenturyStart.getTime(), callback({
            withCredentials: true,
            method: "GET",
            url: API_URL + path
        });
    }
    /**
     * @param {boolean} value
     * @return {?}
     */
    function getTagSysListWithType(value) {
        /** @type {string} */
        var src = "index.php?c=upfile&a=systag&type=2";
        if (value || 0 === value) {
            src += (/\?/.test(src) ? "&" : "?") + "bizType=" + value;
        }
        /** @type {Date} */
        var defaultCenturyStart = new Date;
        return src += (/\?/.test(src) ? "&" : "?") + "time=" + defaultCenturyStart.getTime(), callback({
            withCredentials: true,
            method: "GET",
            url: PREFIX_URL + src
        });
    }
    /**
     * @param {string} v
     * @return {?}
     */
    function getRandomTagWithType(v) {
        /** @type {string} */
        var href = "m/scene/show/tag?bizType=" + v;
        /** @type {Date} */
        var defaultCenturyStart = new Date;
        return href += (/\?/.test(href) ? "&" : "?") + "time=" + defaultCenturyStart.getTime(), callback({
            withCredentials: true,
            method: "GET",
            url: PREFIX_URL + href
        });
    }
    /**
     * @param {string} keepData
     * @return {?}
     */
    function getPageTagLabelCheck(keepData) {
        /** @type {string} */
        var href = "/m/scene/tag/page/list?id=" + keepData;
        /** @type {Date} */
        var defaultCenturyStart = new Date;
        return href += (/\?/.test(href) ? "&" : "?") + "time=" + defaultCenturyStart.getTime(), callback({
            withCredentials: true,
            method: "GET",
            url: PREFIX_URL + href
        });
    }
    /**
     * @param {boolean} value
     * @param {string} name
     * @param {number} attr
     * @param {Object} offset
     * @return {?}
     */
    function getPageTplTypestemp(value, name, attr, offset) {
        /** @type {string} */
        var code = "index.php?c=scene&a=syspagetpl";
        /** @type {string} */
        var ret = code;
        var options = {};
        return (value || 0 === value) && (ret += (/\?/.test(code) ? "&" : "?") + "tagId=" + value, options.tagId = value), name && (ret += (/\?/.test(code) ? "&" : "?") + "name=" + name, options.name = name), attr && (ret += (/\?/.test(code) ? "&" : "?") + "pageSize=" + attr, options.pageSize = attr), offset && (ret += (/\?/.test(code) ? "&" : "?") + "pageNo=" + offset, options.pageNo = offset), jQuery.contains("pageTpl", ret) ? jQuery.asyncGet("pageTpl", ret) : (jQuery.setAsyncUrl(ret), callback({
            withCredentials: true,
            method: "POST",
            url: PREFIX_URL + code,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            data: $.param(options)
        }));
    }
    /**
     * @param {string} file
     * @param {boolean} zoom
     * @return {?}
     */
    function updataChildLabel(file, zoom) {
        /** @type {string} */
        var path = "m/scene/tag/page/set/?ids=" + file;
        if (zoom || 0 === zoom) {
            path += (/\?/.test(path) ? "&" : "?") + "pageId=" + zoom;
        }
        /** @type {Date} */
        var defaultCenturyStart = new Date;
        return path += (/\?/.test(path) ? "&" : "?") + "time=" + defaultCenturyStart.getTime(), callback({
            withCredentials: true,
            method: "POST",
            url: PREFIX_URL + path
        });
    }
    /**
     * @param {?} dataAndEvents
     * @return {?}
     */
    function getExemplarTags(dataAndEvents) {
        /** @type {Date} */
        var defaultCenturyStart = new Date;
        /** @type {string} */
        var appFrontendUrl = PREFIX_URL + "m/scene/tpl/tags?id=" + dataAndEvents + "&time=" + defaultCenturyStart.getTime();
        return callback({
            withCredentials: true,
            method: "GET",
            url: appFrontendUrl
        });
    }
    /**
     * @param {?} silent
     * @return {?}
     */
    function getSimilarTagExemplar(silent) {
        /** @type {Date} */
        var defaultCenturyStart = new Date;
        /** @type {string} */
        var appFrontendUrl = PREFIX_URL + "m/scene/related/tpl?tagId=" + silent + "&time=" + defaultCenturyStart.getTime();
        return callback({
            withCredentials: true,
            method: "GET",
            url: appFrontendUrl
        });
    }
    var getPageTagLabelCheck = {
        /** @type {function (string): ?} */
        getPageTpls: getPageTpls,
        /** @type {function (string): ?} */
        getMyTplList: getMyTplList,
        /** @type {function (): ?} */
        getPageTplTypes: getPageTplTypes,
        /** @type {function (boolean): ?} */
        getPageTagLabel: getPageTagLabel,
        /** @type {function (boolean): ?} */
        getTagSysListWithType: getTagSysListWithType,
        /** @type {function (string): ?} */
        getRandomTagWithType: getRandomTagWithType,
        /** @type {function (string): ?} */
        getPageTagLabelCheck: getPageTagLabelCheck,
        /** @type {function (boolean, string, number, Object): ?} */
        getPageTplTypestemp: getPageTplTypestemp,
        /** @type {function (string, boolean): ?} */
        updataChildLabel: updataChildLabel,
        /** @type {function (?): ?} */
        getExemplarTags: getExemplarTags,
        /** @type {function (?): ?} */
        getSimilarTagExemplar: getSimilarTagExemplar
    };
    return getPageTagLabelCheck;
}]), angular.module("services.psdUpload", []).factory("psdUploadService", ["ModalService", "uploaderService", "fileService", "dataCacheService", "sceneService", "$rootScope", function(stream, user, $, dataAndEvents, S, deepDataAndEvents) {
    /**
     * @param {Array} suite
     * @return {?}
     */
    function next(suite) {
        if (suite.length > 1) {
            return stream.openMsgDialog({
                msg: "您每次上传只能添加一个PSD格式的图片！"
            }), false;
        }
        if (suite.length < 1) {
            return stream.openMsgDialog({
                msg: "您还没有添加PSD格式的图片！"
            }), false;
        }
        var c = suite[0].name.substr(suite[0].name.lastIndexOf(".")).toLowerCase();
        return ".psd" !== c ? (stream.openMsgDialog({
            msg: "您上传的不是PSD格式图片，请添加PSD格式的图片！"
        }), false) : true;
    }
    /**
     * @return {undefined}
     */
    function fail() {
        $("#psdLoading").hide();
        stream.openMsgDialog({
            msg: "您上传的可视图层超过了30个，请您上传可视图层不要超过30个！"
        });
    }
    /**
     * @param {Array} arr
     * @param {string} opts
     * @return {?}
     */
    function init(arr, opts) {
        var dfd = $.Deferred();
        return user.getUploadToken("image").then(function(body) {
            /**
             * @return {undefined}
             */
            function init() {
                /** @type {null} */
                var pass = null;
                if (i >= arr.length) {
                    dfd.resolve(ids);
                } else {
                    item = arr[i];
                    pass = item.layer.image.toBase64().substring(22);
                    if (pass.length > 5242880) {
                        ids.push(item.name);
                        /** @type {null} */
                        item = null;
                        /** @type {null} */
                        pass = null;
                        i++;
                        init();
                    } else {
                        user.uploadBase64(body.data.map.token, pass).then(function(d) {
                            var defaults = {
                                fileType: "1",
                                bizType: 0,
                                path: d.key,
                                tmbPath: d.key,
                                tagId: 0,
                                name: item.name,
                                size: Math.ceil(d.size / 1024)
                            };
                            $.saveFileInfo(defaults);
                            item.layer.src = PREFIX_FILE_HOST + d.key;
                            /** @type {number} */
                            item.layer.top = item.layer.top / 2;
                            /** @type {number} */
                            item.layer.left = item.layer.left / 2;
                            /** @type {number} */
                            item.layer.adjustWidth = item.layer.width / 2;
                            /** @type {number} */
                            item.layer.adjustHeight = item.layer.height / 2;
                            if (i + 1 === arr.length) {
                                /** @type {boolean} */
                                item.layer.lastOne = true;
                            }
                            S.createComp("4", undefined, undefined, undefined, item.layer);
                            opts.currentNum = i + 1;
                            i++;
                            /** @type {null} */
                            item = null;
                            /** @type {null} */
                            pass = null;
                            init();
                        });
                    }
                }
            }
            /** @type {number} */
            var i = 0;
            /** @type {null} */
            var item = null;
            /** @type {Array} */
            var ids = [];
            init();
        }), dfd.promise();
    }
    /**
     * @param {Array} data
     * @param {string} options
     * @return {?}
     */
    function load(data, options) {
        var deferred = $.Deferred();
        return eqxPSDDecompose.decompose(data[0]).then(function(data) {
            options.total = data.length;
            if (data.length > 30) {
                fail();
            } else {
                $.when(init(data, options)).then(function(translation) {
                    deferred.resolve(translation);
                });
            }
        }), deferred.promise();
    }
    return {
        /** @type {function (Array): ?} */
        validationPSDFile: next,
        /** @type {function (Array, string): ?} */
        psdDecompose: load
    };
}]);