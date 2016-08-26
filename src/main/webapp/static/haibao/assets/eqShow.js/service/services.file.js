angular.module("services.file", ["services.i18nNotifications", "services.staticRes"]), angular.module("services.file").factory("fileService", ["$rootScope", "$http", "i18nNotifications", "staticResService", "dataCacheService", function($rootScope, ajax, deepDataAndEvents, dataAndEvents, store) {
    /**
     * @param {string} file
     * @return {?}
     */
    function create(file) {
        /** @type {string} */
        var path = "m/base/file/recently/used?fileType=" + file;
        return path += (/\?/.test(path) ? "&" : "?") + "time=" + (new Date).getTime(), ajax({
            withCredentials : true,
            method : "GET",
            url : PREFIX_URL + path
        });
    }
    /**
     * @param {string} operation
     * @param {string} callback
     * @return {?}
     */
    function doRequest(operation, callback) {
        /** @type {string} */
        var src = "index.php?c=statics&a=history_save&fileIds=" + operation + "&fileTypes=" + callback;
        return src += (/\?/.test(src) ? "&" : "?") + "time=" + (new Date).getTime(), ajax({
            withCredentials : true,
            method : "GET",
            url : PREFIX_URL + src
        });
    }
    /**
     * @return {?}
     */
    function mergeDefaultOptions() {
        /** @type {Array} */
        var options = [{
            color : "#6366C3"
        }, {
            color : "#29A1D6"
        }, {
            color : "#332E42"
        }, {
            color : "#DBF3FF"
        }, {
            color : "#434A54"
        }, {
            color : "#000000"
        }, {
            color : "#F1F03E"
        }, {
            color : "#FCF08E"
        }, {
            color : "#972D53"
        }, {
            color : "#724192"
        }, {
            color : "#967BDC"
        }, {
            color : "#EC87C1"
        }, {
            color : "#D870AF"
        }, {
            color : "#F6F7FB"
        }, {
            color : "#666C78"
        }, {
            color : "#ABB1BD"
        }, {
            color : "#CCD0D9"
        }, {
            color : "#E6E9EE"
        }, {
            color : "#48CFAE"
        }, {
            color : "#36BC9B"
        }, {
            color : "#3BAEDA"
        }, {
            color : "#50C1E9"
        }, {
            color : "#AC92ED"
        }, {
            color : "#4B89DC"
        }, {
            color : "#4B89DC"
        }, {
            color : "#5D9CEC"
        }, {
            color : "#8DC153"
        }, {
            color : "#ED5564"
        }, {
            color : "#DB4453"
        }, {
            color : "#FB6E52"
        }, {
            color : "#FFCE55"
        }, {
            color : "#F6BB43"
        }, {
            color : "#E9573E"
        }, {
            color : "#9FF592"
        }, {
            color : "#A0D468"
        }];
        return options;
    }
    /**
     * @return {?}
     */
    function poll() {
        /** @type {string} */
        var key = "index.php?c=statics&a=getCate&type=1";
        /** @type {string} */
        var hash = key;
        var response = store.get("picbgTotal", key);
        if (response) {
            return self.sysCategoryList = response.data.rows, void $rootScope.$broadcast("sysCategory.update");
        }
        /** @type {Date} */
        var defaultCenturyStart = new Date;
        key += "&time=" + defaultCenturyStart.getTime();
        ajax({
            withCredentials : true,
            method : "GET",
            url : PREFIX_URL + key
        }).then(function(item) {
            if (200 === item.status) {
                self.sysCategoryList = item.data.rows;
                store.push("picbgTotal", hash, item);
                $rootScope.$broadcast("sysCategory.update");
            }
        });
    }
    /**
     * @param {string} num
     * @return {undefined}
     */
    function countdown(num) {
        self.sysMusicList = "" + num == "2" ? dataAndEvents.getAudioTypes() : dataAndEvents.getSoundTypes();
        $rootScope.$broadcast("sysMusic.update");
    }
    /**
     * @param {string} what
     * @return {?}
     */
    function load(what) {
        /** @type {string} */
        var key = "index.php?c=upfile&a=systag&type=1";
        if (what) {
            key += "&bizType=" + what;
        }
        /** @type {string} */
        var hash = key;
        var req = store.get("sysTag", key);
        return req ? (self.sysTagList = req.list, void $rootScope.$broadcast("sysTag.update")) : (key += (/\?/.test(key) ? "&" : "?") + "time=" + (new Date).getTime(), void ajax({
            withCredentials : true,
            method : "GET",
            url : PREFIX_URL + key
        }).then(function(options) {
            if (options.data.success) {
                self.sysTagList = options.data.list;
                store.push("sysTag", hash, options.data);
                $rootScope.$broadcast("sysTag.update");
            }
        }));
    }
    /**
     * @param {string} value
     * @param {number} cb
     * @param {number} format
     * @param {string} keepData
     * @param {number} next
     * @param {Object} range
     * @param {?} count
     * @return {?}
     */
    function fn(value, cb, format, keepData, next, range, count) {
        return value += "pageNo=" + (cb ? cb : 1), value += "&pageSize=" + (format ? format : 10), value += "&fileType=" + keepData, (next || 0 === next) && (value += "&bizType=" + next), range && (value += "&tagId=" + range), count && (value += "&delete=1"), store.contains("fileService1", value) ? store.asyncGet("fileService1", value) : (store.setAsyncUrl(value), value += "&time=" + Date.now(), ajax({
            withCredentials : true,
            method : "GET",
            url : PREFIX_URL + value
        }));
    }
    /**
     * @param {string} data
     * @param {number} status
     * @param {number} s
     * @param {string} res
     * @param {boolean} parameters
     * @param {string} textStatus
     * @return {?}
     */
    function success(data, status, s, res, parameters, textStatus) {
        if ("pure" !== parameters && "pure" !== textStatus) {
            if ("" + res == "1") {
                /** @type {number} */
                s = 18;
            }
            data += "pageNo=" + (status ? status : 1);
            data += "&pageSize=" + (s ? s : 10);
            data += "&fileType=" + res;
            if (parameters || 0 === parameters) {
                data += "&bizType=" + parameters;
            }
            if (textStatus) {
                data += "&tagId=" + textStatus;
            }
            var p = store.get("fileService", data);
            if (p) {
                return self.imgList = p.list, self.totalItems = p.map.count, self.pageNo = p.map.pageNo, void $rootScope.$broadcast("imgList.update");
            }
            /** @type {string} */
            var id = data;
            data += "&time=" + Date.now();
            ajax({
                withCredentials : true,
                method : "GET",
                url : PREFIX_URL + data
            }).then(function(options) {
                if (options.data.success) {
                    self.imgList = options.data.list;
                    self.totalItems = options.data.map.count;
                    self.pageNo = options.data.map.pageNo;
                    store.push("fileService", id, options.data);
                    $rootScope.$broadcast("imgList.update");
                }
            });
        } else {
            if (status * s <= list.length) {
                self.imgList = list.slice((status - 1) * s, status * s);
            } else {
                self.imgList = list.slice((status - 1) * s, list.length);
            }
            self.totalItems = list.length;
            /** @type {number} */
            self.pageNo = status;
            $rootScope.$broadcast("imgList.update");
        }
    }
    /**
     * @param {number} info
     * @param {number} callback
     * @param {string} type
     * @param {number} next
     * @param {Object} before
     * @return {?}
     */
    function process(info, callback, type, next, before) {
        /** @type {string} */
        var udataCur = "index.php?c=upfile&a=syslist&";
        return fn(udataCur, info, callback, type, next, before);
    }
    /**
     * @param {number} resp
     * @param {number} options
     * @param {string} fail
     * @param {boolean} parameters
     * @param {string} textStatus
     * @return {undefined}
     */
    function exec(resp, options, fail, parameters, textStatus) {
        /** @type {string} */
        var pdataCur = "index.php?c=upfile&a=syslist&";
        success(pdataCur, resp, options, fail, parameters, textStatus);
    }
    /**
     * @param {number} cb
     * @param {number} callback
     * @param {string} type
     * @param {number} next
     * @param {Object} selection
     * @param {?} delta
     * @return {?}
     */
    function render(cb, callback, type, next, selection, delta) {
        /** @type {string} */
        var udataCur = "index.php?c=upfile&a=userList&";
        return fn(udataCur, cb, callback, type, next, selection, delta);
    }
    /**
     * @param {number} resp
     * @param {number} options
     * @param {string} xhr
     * @param {boolean} data
     * @param {string} textStatus
     * @return {undefined}
     */
    function error(resp, options, xhr, data, textStatus) {
        /** @type {string} */
        var pdataCur = "index.php?c=upfile&a=userList&";
        success(pdataCur, resp, options, xhr, data, textStatus);
    }
    /**
     * @param {string} query
     * @return {undefined}
     */
    function fetch(query) {
        /** @type {string} */
        var materialArgs = "index.php?c=upfile&a=delete";
        var credentials = {
            id : query
        };
        ajax({
            withCredentials : true,
            method : "POST",
            url : PREFIX_URL + materialArgs,
            headers : {
                "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
            },
            data : $.param(credentials)
        }).then(function(response) {
            if (response.data.success) {
                $rootScope.$broadcast("files.delete");
            }
        });
    }
    /**
     * @param {string} num
     * @param {Object} id
     * @return {?}
     */
    function get(num, id) {
        var name;
        /** @type {string} */
        var materialArgs = "index.php?c=upfile&a=delete";
        return name = id ? {
            id : num,
            backup : id
        } : {
            id : num
        }, ajax({
            withCredentials : true,
            method : "POST",
            url : PREFIX_URL + materialArgs,
            headers : {
                "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
            },
            data : $.param(name)
        });
    }
    /**
     * @param {string} opt_behavior
     * @param {string} file
     * @return {?}
     */
    function getFile(opt_behavior, file) {
        /** @type {string} */
        var path = "m/base/file/recycle/list?pageNo=" + opt_behavior + "&pageSize=" + file;
        return ajax({
            withCredentials : true,
            method : "GET",
            url : PREFIX_URL + path
        });
    }
    /**
     * @param {string} url
     * @return {?}
     */
    function getJSON(url) {
        /** @type {string} */
        var name = "m/base/file/revoke?id=" + url;
        return ajax({
            withCredentials : true,
            method : "GET",
            url : PREFIX_URL + name
        });
    }
    /**
     * @param {string} tagName
     * @return {undefined}
     */
    function init(tagName) {
        /** @type {string} */
        var materialArgs = "index.php?c=tag&a=create";
        var options = {
            tagName : tagName
        };
        ajax({
            withCredentials : true,
            method : "POST",
            url : PREFIX_URL + materialArgs,
            headers : {
                "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
            },
            data : $.param(options)
        }).then(function(event) {
            self.tagList.push({
                id : event.data.obj,
                name : tagName
            });
            $rootScope.$broadcast("tagList.update");
        }, function() {
            /** @type {string} */
            $scope.authError = "\u521b\u5efa\u5931\u8d25";
        });
    }
    /**
     * @return {undefined}
     */
    function request() {
        /** @type {string} */
        var materialArgs = "index.php?c=tag&a=my&time" + (new Date).getTime();
        ajax({
            withCredentials : true,
            method : "GET",
            url : PREFIX_URL + materialArgs
        }).then(function(e) {
            if (e.data.success) {
                self.tagList = e.data.list;
                $rootScope.$broadcast("tagList.update");
            }
        });
    }
    /**
     * @param {string} value
     * @param {?} idx
     * @return {undefined}
     */
    function save(value, idx) {
        /** @type {string} */
        var materialArgs = "index.php?c=tag&a=delete";
        var credentials = {
            id : value
        };
        ajax({
            withCredentials : true,
            method : "POST",
            url : PREFIX_URL + materialArgs,
            headers : {
                "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
            },
            data : $.param(credentials)
        }).then(function(response) {
            if (response.data.success) {
                self.tagList.splice(idx, 1);
                $rootScope.$broadcast("tagList.delete");
            }
        });
    }
    /**
     * @param {?} id
     * @param {?} retryCount
     * @return {undefined}
     */
    function retry(id, retryCount) {
        /** @type {string} */
        var materialArgs = "index.php?c=tag&a=set";
        var name = {
            tagId : id,
            fileIds : retryCount
        };
        ajax({
            withCredentials : true,
            method : "POST",
            url : PREFIX_URL + materialArgs,
            headers : {
                "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
            },
            data : $.param(name)
        }).then(function(response) {
            if (response.data.success) {
                $rootScope.$broadcast("tag.assign");
            }
        });
    }
    /**
     * @param {?} id
     * @param {?} page
     * @return {undefined}
     */
    function changePage(id, page) {
        /** @type {string} */
        var materialArgs = "m/base/file/tag/unset";
        var name = {
            tagId : id,
            fileIds : page
        };
        ajax({
            withCredentials : true,
            method : "POST",
            url : PREFIX_URL + materialArgs,
            headers : {
                "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
            },
            data : $.param(name)
        }).then(function(response) {
            if (response.data.success) {
                $rootScope.$broadcast("tag.unbind");
            }
        });
    }
    /**
     * @param {number} er
     * @param {number} err
     * @param {Object} result
     * @param {number} event
     * @return {?}
     */
    function next(er, err, result, event) {
        /** @type {string} */
        var id = "index.php?c=upfile&a=syslist&";
        if ("0" === result && ("" + event == "2" && (id = "index.php?c=upfile&a=userList&")), id += "pageNo=" + (er ? er : 1), id += "&pageSize=" + (err ? err : 12), result && ("all" !== result && (id += "&bizType=" + (result ? result : -1))), id += "&fileType=" + (event ? event : -1), store.contains("mySounds", id)) {
            return store.asyncGet("mySounds", id);
        }
        store.setAsyncUrl(id);
        /** @type {Date} */
        var defaultCenturyStart = new Date;
        return id += "&time=" + defaultCenturyStart.getTime(), ajax({
            withCredentials : true,
            method : "GET",
            url : PREFIX_URL + id
        });
    }
    /**
     * @param {?} name
     * @return {?}
     */
    function destroy(name) {
        /** @type {string} */
        var materialArgs = "index.php?c=page&a=crop";
        return ajax({
            withCredentials : true,
            method : "POST",
            url : PREFIX_URL + materialArgs,
            headers : {
                "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
            },
            data : $.param(name)
        });
    }
    /**
     * @param {?} name
     * @return {undefined}
     */
    function login(name) {
        var appFrontendUrl = PREFIX_URL + "index.php?c=upfile&a=upload&bizType=0&fileType=1";
        ajax({
            withCredentials : true,
            method : "POST",
            url : appFrontendUrl,
            headers : {
                "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
            },
            data : $.param(name)
        }).then(function(e) {
            if (e.data.success) {
                $rootScope.$broadcast("get.file.list", e.data.obj);
            }
        });
    }
    /**
     * @return {undefined}
     */
    function handler() {
        $rootScope.$broadcast("backto.my.list");
    }
    var self = {
        pageNo : 1,
        totalItems : 0,
        sysCategoryList : [],
        /** @type {function (): ?} */
        getSysCategory : poll,
        sysTagList : [],
        /** @type {function (string): undefined} */
        getSysMusicCategory : countdown,
        /** @type {function (string, string): ?} */
        userRecycle : getFile,
        /** @type {function (string): ?} */
        fileRevoke : getJSON,
        sysMusicList : [],
        /** @type {function (string): ?} */
        getSysTagByCatId : load,
        imgList : [],
        /** @type {function (number, number, string, number, Object): ?} */
        getSystemFiles : process,
        /** @type {function (number, number, string, number, Object, ?): ?} */
        getUserFiles : render,
        /** @type {function (number, number, string, boolean, string): undefined} */
        getSystemFiles1 : exec,
        /** @type {function (number, number, string, boolean, string): undefined} */
        getUserFiles1 : error,
        tagList : [],
        /** @type {function (string): undefined} */
        createTag : init,
        /** @type {function (): undefined} */
        getTagList : request,
        /** @type {function (string, ?): undefined} */
        deleteTag : save,
        /** @type {function (?, ?): undefined} */
        assignTag : retry,
        /** @type {function (?, ?): undefined} */
        unbindTag : changePage,
        /** @type {function (string): undefined} */
        deleteFile : fetch,
        /** @type {function (string, Object): ?} */
        deleteFile1 : get,
        /** @type {function (number, number, Object, number): ?} */
        getFileByCategory : next,
        /** @type {function (): ?} */
        getBgColorList : mergeDefaultOptions,
        /** @type {function (?): ?} */
        cropImage : destroy,
        /** @type {function (string): ?} */
        getFilesHistory : create,
        /** @type {function (string, string): ?} */
        saveFilesHistory : doRequest,
        /** @type {function (?): undefined} */
        saveFileInfo : login,
        /** @type {function (): undefined} */
        backToMyList : handler
    };
    var list = mergeDefaultOptions();
    return self;
}]);
