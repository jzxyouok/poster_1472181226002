

angular.module("services.active", []).factory("activeService", [
    "$rootScope", "$http",
    function(a, b) {
      var c = {};
      return c.getActiveList = function(a, c, d) {
        var e = PREFIX_S1_URL + "eqs/activity/scene";
        return a && (e += /\?/.test(e) ? "&" : "?", e += "promId=" + a), c &&
          (e += /\?/.test(e) ? "&" : "?", e += "pageNo=" + c), d && (e +=
            /\?/.test(e) ? "&" : "?", e += "pageSize=" + d), b({
            withCredentials: !0,
            method: "GET",
            url: e
          })
      }, c
    }
  ]), angular.module("services.breadcrumbs", []), angular.module(
    "services.breadcrumbs").factory("breadcrumbs", ["$rootScope", "$location",
    function(a, b) {
      var c = [],
        d = {};
      return a.$on("$routeChangeSuccess", function() {
        var a, d = b.path().split("/"),
          e = [],
          f = function(a) {
            return "/" + d.slice(0, a + 1).join("/")
          };
        for (d.shift(), a = 0; a < d.length; a++) e.push({
          name: d[a],
          path: f(a)
        });
        c = e
      }), d.getAll = function() {
        return c
      }, d.getFirst = function() {
        return c[0] || {}
      }, d
    }
  ]), angular.module("service.codeMessage", []).factory("codeMessageService",
    function() {
      var a = {
        200: "操作成功",
        500: "服务器异常",
        403: "未授权 禁止访问",
        1001: "未登录",
        1002: "登录超时",
        1003: "账号不存在",
        1004: "密码错误",
        1005: "验证码错误",
        1006: "重复注册",
        1007: "当前账号被冻结，请联系客服处理",
        1008: "邮箱不能为空",
        1009: "手机号不能为空",
        1010: "数据不合法",
        1011: "不存在该数据",
        1012: "重复请求",
        1013: "超过有效期",
        1014: "验证码错误",
        1015: "已验证过邮箱",
        1016: "发送验证码失败,请明天再试!",
        1017: "发送验证码过于频繁,请稍候重试!",
        1018: "手机验证码输入错误",
        1019: "请求太频繁, 请稍候再试",
        1020: "请获取验证码",
        110001: "未关联账号",
        110002: "密码不能为空",
        110003: "旧密码不正确",
        110004: "无效的邮件地址",
        110005: "该链接已失效!",
        110006: "子账号数量已超过限制",
        110007: "手机号格式不合法",
        110008: "不可重复请求！",
        110010: "更新失败！",
        110011: "您尚未绑定保密邮箱，无法申请，请在用户中心--账号安全中绑定保密邮箱",
        110012: "没有权限",
        110013: "短信验证码失效，请重新获取",
        110014: "子账号不能添加子账号，请刷新浏览器",
        110015: "您的短信已用完，请充值",
        110016: "短信数量不足，请充值",
        110017: "短信发送失败,请检查客户手机号是否正确",
        110018: "发送失败,请稍后重试",
        110019: "账号被冻结，请在企业管理员账号中重新启用",
        110201: "绑定id不是临时用户id",
        110202: "用户已经存在",
        110203: "无效的账号",
        110204: "用户不存在",
        110205: "用户名与密码不匹配",
        110206: "输入邮箱已经关联qq",
        110207: "输入邮箱已经关联微信",
        110208: "输入邮箱已经关联微博",
        110209: "code为空或者不存在",
        110210: "绑定第三方账号失败，请稍候再试！",
        110211: "此微信已经绑定过易企秀账号",
        110212: "call api map is null",
        110213: "账号未关联",
        110214: "域名不能为空",
        110215: "邮箱格式不合法",
        110216: "3分钟内不可重复请求！",
        110217: "每天发送量已达上限",
        110218: "邮件发送失败!",
        110220: "邮件已发送",
        110222: "请求已过期，请重新发送短信进行验证！",
        110223: "无效用户",
        110224: "与绑定手机号码不符！",
        110225: "有效期已过，请重新发送验证邮件",
        110226: "验证邮箱不存在!",
        110227: "此QQ已经绑定过易企秀账号",
        110228: "该邮箱已经被绑定，请更换其他邮箱",
        110229: "此用户名已被其它用户绑定",
        110301: "请求参数不合法",
        110302: "appid不存在",
        110303: "请求地址与注册信息不符",
        110304: "参数p2不合法",
        110305: "token不合法",
        110306: "域名不合法",
        110307: "该场景信息不存在",
        110401: "手机号码已被占用，请更换其它手机号码！",
        110402: "请更换其它手机号码！",
        110403: "请输入手机验证码！",
        110501: "主账号不存在！",
        110502: "从账号不存在！",
        110503: "添加部门重复请重新输入",
        120001: "页面不存在或已删除",
        120101: "场景保存失败，请稍后重试",
        120102: "场景不能转送给自已",
        120103: "保存失败，服务器忙碌请稍后重试",
        120104: "请为场景起个名字!",
        120105: "场景创建中，请耐心等待",
        120106: "添加微信组件或访问密码的场景，无法申请场景保障服务",
        120107: "您的场景保障服务剩余天数不足",
        120108: "场景不存在",
        120109: "审核中或审核不通过的场景，无法申请场景保障服务",
        120201: "参数不正确",
        120202: "请重新设置场景标签！",
        120203: "付费样例免费使用次数已用尽",
        120204: "企业帐号会员到期",
        120301: "您今天的前置场景审核次数已用尽",
        120302: "您今天的驳回加急审核次数已用尽",
        120303: "前置场景审核每次间隔1小时",
        120304: "请先重新编辑场景",
        120305: "场景已在审核队列中，请耐心等待",
        120306: "请先验证手机号",
        120307: "当前场景在审核中，无法编辑",
        120401: "只有企业用户可以查询场景设备和地域浏览量",
        120402: "免费升级企业会员可使用",
        130001: "秀点不足",
        130002: "操作过于频繁，请稍候再试！",
        130003: "当前要使用的样例价格已被用户修改，请刷新重新选择使用！",
        130004: "您的秀点余额不足，无法使用该样例，请先购买或参与活动获取秀点",
        130005: "秀点转送失败",
        130006: "当前样例价格为：",
        140101: "申请失败！",
        140102: "作品不能相同",
        140103: "服务领域不能超过3个",
        140104: "擅长领域不能超过5个",
        140105: "申请成功,请等待审核!",
        140106: "企业账号与企业子账号不可申请成为秀客！",
        140107: "秀客信息不存在！",
        140108: "标签项不能为空！",
        140109: "秀客作品不能为空！",
        140110: "申请审核中不可修改信息！",
        140111: "服务领域不可为空",
        140112: "擅长领域不可为空",
        140113: "支付方式不可为空",
        140001: "删除失败",
        140002: "修改失败！",
        150101: "您不是企业会员,请先申请企业会员后再进行操作！",
        150102: "请先验证手机号",
        150103: "定制活动申请已在审核中，请耐心等待",
        150104: "定制活动已通过审核，请等待活动发布",
        160001: "二级分类不能为'全部'",
        160002: "add tag size more than 50",
        160003: "delete tag size more than 50",
        160004: "请选择业务类型！",
        160005: "无效的参数",
        160006: "该图片格式不支持裁切",
        160007: "裁剪失败",
        160008: "tagid is all",
        160009: "tagid is null",
        160010: "路径不能为空！",
        160011: "文件地址不正确！",
        160012: "文件格式不正确",
        160013: "文件超过最大限制",
        160014: "不支持该图片格式",
        160015: "无效的图片",
        160016: "无效的文件",
        160017: "文件数据不正确",
        160018: "文件名有误，请获取客户模板，并按要求填写内容后再次上传",
        170001: "轻印刷作品不存在！",
        170101: "复制轻印刷作品失败！",
        170102: "普通用户无法接收轻印刷作品！",
        180001: "未能成功获取秉钧token",
        180002: "未能登录到秉钧",
        970101: "您不是企业会员,请先申请企业会员后再进行升级！",
        970102: "会员未到期,不可购买其他会员服务!",
        970103: "专业版会员只能续费专业版会员服务!",
        970104: "畅享版会员只能续费畅享版会员服务!",
        970105: "每次最多只能购买两次会员服务！",
        970106: "基础版或高级版会员不可升级为畅享版、专业版或渠道专享版会员！",
        970107: "渠道专享版会员只能续费渠道专享版会员服务！",
        970108: "请购买更高级别的会员！",
        970109: "您的会员有效期超过两年或续费后超过两年，无法续费或升级！",
        970110: "您暂时无法升级该级别会员，请联系客服：010-83035157",
        970111: "新版会员与原有会员体系不可交叉购买",
        970112: "您购买后，会员有效期超过服务终止期限，无法购买！",
        970113: "企业体验版一次最多只能购买6个月",
        970201: "所选订单中存在已开发票订单！",
        990001: "android临时关闭qq注册功能，详情请看论坛(bbs.eqxiu.com)通知！",
        990002: "get ticket error",
        990003: "请选择要审核的场景记录",
        990004: "未支持的审核类型",
        990005: "请选择要审核的场景！",
        990006: "无效的参数",
        990007: "无效的appid和secre！",
        990008: "secre为空",
        990009: "appid为空",
        990010: "请选择要审核的轻印刷产品记录！",
        990010: "创建分组失败",
        990011: "请选择要删除的用户！",
        990012: "请选择要删除的词语！",
        990013: "用户邮箱不能为空！"
      };
      return {
        getMsg: function(b, c) {
          return 200 === b.code && angular.isFunction(c) ? void c.apply() :
            200 === b.code ? "" : b.msg || a[b.code]
        }
      }
    }), angular.module("services.config", []).factory("configService", ["$http",
    function(a) {
      var b = function() {
          var b = PREFIX_S2_URL + "index.php?c=ad&a=logo";
          return a({
            method: "GET",
            url: b
          })
        },
        c = function() {
          var b = PREFIX_S2_URL + "index.php?c=ad&a=banner";
          return a({
            method: "GET",
            url: b
          })
        },
        d = function() {
          var b = PREFIX_S2_URL + "index.php?c=ad&a=friendlinks";
          return a({
            method: "GET",
            url: b
          })
        };
      var getBanner70 = function() {
          var url = JSON_URL + "?c=ad&a=getBanner70";
          return a({
            withCredentials: !0,
            method: "GET",
            url: url
          })
        },
        getMenu70 = function() {
          var url = JSON_URL + "?c=ad&a=getMenu70";
          return a({
            withCredentials: !0,
            method: "GET",
            url: url
          })
        };
      return {
        getBanner70: getBanner70,
        getMenu70: getMenu70,
        getBanners: c,
        getFriendLinks: d,
        getLogo: b

      }
    }
  ]), angular.module("services.crud", ["services.crudRouteProvider"]), angular.module(
    "services.crud").factory("crudEditMethods", function() {
    return function(a, b, c, d, e) {
      var f = {};
      return f[a] = b, f[a + "Copy"] = angular.copy(b), f.save = function() {
        this[a].$saveOrUpdate(d, d, e, e)
      }, f.canSave = function() {
        return this[c].$valid && !angular.equals(this[a], this[a + "Copy"])
      }, f.revertChanges = function() {
        this[a] = angular.copy(this[a + "Copy"])
      }, f.canRevert = function() {
        return !angular.equals(this[a], this[a + "Copy"])
      }, f.remove = function() {
        this[a].$id() ? this[a].$remove(d, e) : d()
      }, f.canRemove = function() {
        return b.$id()
      }, f.getCssClasses = function(a) {
        var b = this[c][a];
        return {
          error: b.$invalid && b.$dirty,
          success: b.$valid && b.$dirty
        }
      }, f.showError = function(a, b) {
        return this[c][a].$error[b]
      }, f
    }
  }), angular.module("services.crud").factory("crudListMethods", ["$location",
    function(a) {
      return function(b) {
        var c = {};
        return c["new"] = function() {
          a.path(b + "/new")
        }, c.edit = function(c) {
          a.path(b + "/" + c)
        }, c
      }
    }
  ]),
  function() {
    function a(a) {
      this.$get = angular.noop, this.routesFor = function(b, c, d) {
        var e = b.toLowerCase(),
          f = "/" + b.toLowerCase();
        d = d || c, angular.isString(c) && "" !== c && (e = c + "/" + e),
          null !== d && d !== undefined && "" !== d && (f = "/" + d + f);
        var g = function(a) {
            return e + "/" + b.toLowerCase() + "-" + a.toLowerCase() +
              ".tpl.html"
          },
          h = function(a) {
            return b + a + "Ctrl"
          },
          i = {
            whenList: function(a) {
              return i.when(f, {
                templateUrl: g("List"),
                controller: h("List"),
                resolve: a
              }), i
            },
            whenNew: function(a) {
              return i.when(f + "/new", {
                templateUrl: g("Edit"),
                controller: h("Edit"),
                resolve: a
              }), i
            },
            whenEdit: function(a) {
              return i.when(f + "/:itemId", {
                templateUrl: g("Edit"),
                controller: h("Edit"),
                resolve: a
              }), i
            },
            when: function(b, c) {
              return a.when(b, c), i
            },
            otherwise: function(b) {
              return a.otherwise(b), i
            },
            $routeProvider: a
          };
        return i
      }
    }
    a.$inject = ["$routeProvider"], angular.module("services.crudRouteProvider", [
      "ngRoute"
    ]).provider("crudRoute", a)
  }(),

     angular.module("services.file.upload", ["angularFileUpload",
    "services.file"
  ]).factory("uploaderService", ["$rootScope", "$http", "$interval",
    "FileUploader", "fileService",
    function(a, b, c, d, e) {
      var f, g = {};
      return g.uploader = function(b, e, g) {
        var h = g || 6;
        (2 == b || 4 == b) && (f = PREFIX_URL +
          "index.php?c=upfile&a=upload&bizType=0&fileType=" + b);
        var i, j = new d({
            url: f,
            withCredentials: !0,
            queueLimit: h,
            onAfterAddingAll: function(b) {
              a.$broadcast("uploadfiles.add"), j.uploadAll()
            },
            onSuccessItem: function(d, e, f, g) {
              function h() {
                c.cancel(i)
              }
              var i = c(function() {
                var c = null;
                d.progress >= 100 && (c = 4 == b ? {
                  id: e.obj.id,
                  src: e.obj.path,
                  name: e.obj.name,
                  size: e.obj.size
                } : 2 == b ? {
                  id: e.obj.id,
                  url: e.obj.path,
                  name: e.obj.name,
                  size: e.obj.size
                } : {
                  tmbPath: e.obj.tmbPath,
                  id: e.obj.id,
                  path: e.obj.path,
                  name: e.obj.name
                }, a.$broadcast("thumbnailList.update", c), h())
              }, 100)
            }
          }),
          k = e || 3145728;
        return "0" == b || "1" == b ? i =
          "|jpg|png|jpeg|bmp|gif|svg+xml|webp|" : "4" == b || "2" == b ? i =
          "|wav|mp3|mpeg|" : "8" == b && (i =
            "|msword|vnd.openxmlformats-officedocument.wordprocessingml.document|"
          ), j.filters.push({
            name: "imageFilter",
            fn: function(a, b) {
              var c = "|" + a.type.slice(a.type.lastIndexOf("/") + 1) +
                "|";
              return -1 !== i.indexOf(c)
            }
          }), j.filters.push({
            name: "imageSizeFilter",
            fn: function(a, b) {
              var c = a.size;
              return c >= k && alert("上传文件大小限制在" + k / 1024 / 1024 +
                "M以内"), k > c
            }
          }), j.filters.push({
            name: "fileNameFilter",
            fn: function(a, b) {
              return a.name.length > 50 && alert("文件名应限制在50字符以内"), a.name
                .length <= 50
            }
          }), j
      }, g
    }
  ]),

angular.module("services.dataCache", []), 
angular.module(
    "services.dataCache").factory("dataCacheService", ["$timeout", "$rootScope",
    function(a, b) {
      var c = {};
      this.asyncUrl = "", c.clear = function(a) {
        window.sessionStorage && (a || sessionStorage.clear(), delete sessionStorage[
          a])
      }, c.push = function(a, b, c) {
        if (window.sessionStorage) {
          var d = sessionStorage.getItem(a);
          d = d ? JSON.parse(d) : {}, d[b] = c, sessionStorage.setItem(a,
            JSON.stringify(d))
        }
      }, c.get = function(a, b) {
        if (!window.sessionStorage) return null;
        var c = sessionStorage.getItem(a);
        return c ? (c = JSON.parse(c), c[b]) : null
      }, c.asyncGet = function(b, c) {
        var d = sessionStorage.getItem(b);
        d = JSON.parse(d);
        var e = a(function() {
          return d[c]
        });
        return e
      }, c.contains = function(a, b) {
        if (!window.sessionStorage) return !1;
        var c = sessionStorage[a];
        return c ? (c = JSON.parse(c), c[b] ? !0 : !1) : !1
      }, c.setAsyncUrl = function(a) {
        this.asyncUrl = a
      }, c.getAsyncUrl = function() {
        return this.asyncUrl
      };
      var d = {
        photo: [],
        audio: [],
        shapes: []
      };
      return c.pushUsedFile = function(a, b) {
        var c;
        switch (a) {
          case 1:
            c = d.photo;
            break;
          case 2:
            c = d.audio;
            break;
          case 7:
            c = d.shapes
        }
        c.indexOf(b) <= -1 && c.push(b)
      }, c.removeUsedFile = function(a, b) {
        var c;
        switch (a) {
          case 1:
            c = d.photo;
            break;
          case 2:
            c = d.audio;
            break;
          case 7:
            c = d.shapes
        }
        var e = c.indexOf(b); - 1 !== e && c.splice(e, 1)
      }, c.getUsedFiles = function() {
        for (var a = [], b = [], c = 0; c < d.photo.length; c++) d.photo[c] &&
          (a.push(d.photo[c]), b.push(1));
        for (var e = 0; e < d.audio.length; e++) {
          if (!d.audio[e]) return;
          a.push(d.audio[e]), b.push(2)
        }
        for (var f = 0; f < d.shapes.length; f++) {
          if (!d.shapes[f]) return;
          a.push(d.shapes[f]), b.push(7)
        }
        return 0 !== a.length ? {
          file: a.join(","),
          type: b.join(",")
        } : void 0
      }, c.clearUsedFiles = function() {
        d = {
          photo: [],
          audio: [],
          shapes: []
        }
      }, b.$watch("user", function(a, b) {
        if (a !== b) {
          var d = c.get("currentuser", "currentuser");
          d !== a.id && (c.clear(), c.push("currentuser", "currentuser",
            a.id))
        }
      }), c
    }
  ]), 


    angular.module("services.data", []), angular.module("services.data").factory(
    "dataService", ["$http", "$rootScope", function(a, b) {
      var c = {};
      return c.getDatas = function(c) {
        var d = "index.php?c=scenedata&a=statSum";
        return c && (d += (/\?/.test(d) ? "&" : "?") + "user=" + c), a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + d
        }).then(function(a) {
          if (a.data.success) {
            var c = a.data.obj;
            b.$broadcast("sceneDatas", c)
          }
        })
      }, c.getCustomDatas = function(c) {
        var d = "index.php?c=custom&a=statSum";
        return c && (d += (/\?/.test(d) ? "&" : "?") + "user=" + c), a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + d
        }).then(function(a) {
          if (a.data.success) {
            var c = a.data.obj;
            b.$broadcast("customDatas", c)
          }
        })
      }, c.getDataBySceneId = function(b, c, d, e) {
        c = c || 1, d = d || 10;
        var f = "index.php?c=scenedata&a=getdata&id=" + b + "?pageNo=" + c +
          "&pageSize=" + d;
        e && (f += (/\?/.test(f) ? "&" : "?") + "user=" + e);
        var g = new Date;
        return f += "&time=" + g.getTime(), a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + f
        })
      }, c.getDataBySceneId = function(b, c, d, e) {
        c = c || 1, d = d || 10;
        var f = "index.php?c=scenedata&a=getdata&id=" + b + "?pageNo=" + c +
          "&pageSize=" + d;
        e && (f += (/\?/.test(f) ? "&" : "?") + "user=" + e);
        var g = new Date;
        return f += "&time=" + g.getTime(), a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + f
        })
      }, c.getDataDetail = function(b, c) {
        var d = "m/c/detail/" + b;
        c && (d += (/\?/.test(d) ? "&" : "?") + "user=" + c);
        var e = new Date;
        return d += (/\?/.test(d) ? "&" : "?") + "date=" + e.getTime(), a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + d
        })
      }, c.getDataMessage = function(b) {
        var c = "index.php?c=custom&a=newDataScene";
        b && (c += (/\?/.test(c) ? "&" : "?") + "user=" + b);
        var d = new Date;
        return c += (/\?/.test(c) ? "&" : "?") + "date=" + d.getTime(), a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + c
        })
      }, c.getAllData = function(b, c, d, e) {
        var f = "index.php?c=custom&a=getAllData&pageSize=10&pageNo=" + b;
        c && (f += (/\?/.test(f) ? "&" : "?") + "user=" + c), e && (f += (
          /\?/.test(f) ? "&" : "?") + "origin=" + e), d && (f += (/\?/.test(
          f) ? "&" : "?") + "groupId=" + d);
        var g = new Date;
        return f += (/\?/.test(f) ? "&" : "?") + "time=" + g.getTime(), a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + f
        })
      }, c.getProspectDataAccount = function(b) {
        var c = "m/c/prospectCount?time=" + (new Date).getTime();
        return b && (c += (/\?/.test(c) ? "&" : "?") + "user=" + b), a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + c
        })
      }, c.deleteDataById = function(b) {
        var c = "index.php?c=custom&a=delete&id=" + b;
        return a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + c
        })
      }, c.saveData = function(b, c) {
        var d = c ? "m/c/create" : "m/c/save";
        return a({
          withCredentials: !0,
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          url: PREFIX_URL + d,
          data: b
        })
      }, c.getSceneField = function(b) {
        var c = "index.php?c=custom&a=formField&id=" + b,
          d = new Date;
        return c += "?time=" + d.getTime(), a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + c
        })
      }, c.getPremergeScenes = function(b) {
        var c = "index.php?c=custom&a=newDataScene";
        b && (c += (/\?/.test(c) ? "&" : "?") + "user=" + b);
        var d = new Date;
        return c += (/\?/.test(c) ? "&" : "?") + "time=" + d.getTime(), a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + c
        })
      }, c.mergeSceneData = function(b, c) {
        var d = "index.php?c=custom&a=imps&id=" + b;
        return a({
          withCredentials: !0,
          method: "POST",
          url: PREFIX_S3_URL + d,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          data: $.param(c)
        })
      }, c.getOrigin = function(b) {
        var c = "index.php?c=custom&a=origin";
        return b && (c += (/\?/.test(c) ? "&" : "?") + "user=" + b), a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + c
        })
      }, c.getGroups = function(b) {
        var c = "index.php?c=custom&a=grouplist";
        return b && (c += (/\?/.test(c) ? "&" : "?") + "user=" + b), a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + c
        })
      }, c.assignGroup = function(b) {
        var c = "m/c/group/set?cIds=" + b.cIds + "&gIds=" + b.gIds;
        return a({
          withCredentials: !0,
          method: "POST",
          url: PREFIX_URL + c,
          headers: {
            "Content-Type": "text/plain; charset=UTF-8"
          }
        })
      }, c.deleteAssociation = function(b) {
        var c = "m/c/group/unset?cId=" + b.cId + "&gId=" + b.gId;
        return a({
          withCredentials: !0,
          method: "POST",
          url: PREFIX_URL + c,
          headers: {
            "Content-Type": "text/plain; charset=UTF-8"
          }
        })
      }, c.createGroup = function(b) {
        var c = "m/c/group/create";
        return a({
          withCredentials: !0,
          method: "POST",
          url: PREFIX_URL + c,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          data: $.param(b)
        })
      }, c.updateSceneGroup = function(b, c) {
        var d = "index.php?c=scene&a=updateGroup";
        d += (/\?/.test(d) ? "&" : "?") + "time=" + (new Date).getTime();
        var e = {
          id: b,
          name: c
        };
        return a({
          withCredentials: !0,
          method: "POST",
          url: PREFIX_URL + d,
          data: $.param(e),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          }
        })
      }, c.createSceneGroup = function(b) {
        var c = "scene/createGroup";
        return a({
          withCredentials: !0,
          method: "POST",
          url: API_URL + c,
          data: $.param({
            name: b.name
          }),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          }
        })
      }, c.deleteCustomer = function(b) {
        var c = "index.php?c=custom&a=delete&ids=" + b.ids;
        return a({
          withCredentials: !0,
          method: "POST",
          url: PREFIX_URL + c,
          headers: {
            "Content-Type": "text/plain; charset=UTF-8"
          }
        })
      }, c.deleteGroup = function(b) {
        var c = {
            id: b
          },
          d = "m/c/group/delete";
        return a({
          withCredentials: !0,
          method: "POST",
          url: PREFIX_URL + d,
          data: $.param(c),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          }
        })
      }, c.modelMess = function(b) {
        var c = "m/c/tpl/list?sceneId=" + b;
        return a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + c
        })
      }, c.messageNumber = function() {
        var b = "m/u/user/param/msg";
        return a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + b
        })
      }, c.getMessModel = function(b) {
        var c = "m/u/list/goods?type=" + b;
        return a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + c
        })
      }, c.buyMess = function(b) {
        var c = "m/u/user/msg/save",
          d = {
            id: b
          };
        return a({
          withCredentials: !0,
          method: "POST",
          url: PREFIX_URL + c,
          data: $.param(d),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          }
        })
      }, c.sendMess = function(b, c, d, e) {
        var f = "m/c/msg/batch/scend",
          g = {
            ids: b,
            id: c,
            mobiles: d,
            sceneId: e
          };
        return a({
          withCredentials: !0,
          method: "POST",
          url: PREFIX_URL + f,
          data: $.param(g),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          }
        })
      }, c.sendTatolDetail = function(b) {
        var c = "m/c/msg/list";
        return c += "?pageNo=" + b + "&pageSize=10", a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + c
        })
      }, c.sendDetail = function(b, c) {
        var d = "m/c/msg/details/" + b;
        return d += "?pageNo=" + c + "&pageSize=10", a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + d
        })
      }, c
    }]), angular.module("services.exceptionHandler", [
    "services.i18nNotifications"
  ]), angular.module("services.exceptionHandler").factory(
    "exceptionHandlerFactory", ["$injector", function(a) {
      return function(b) {
        return function(c, d) {
          var e = a.get("i18nNotifications");
          b(c, d), e.pushForCurrentRoute("error.fatal", "error", {}, {
            exception: c,
            cause: d
          })
        }
      }
    }]), angular.module("services.exceptionHandler").config(["$provide",
    function(a) {
      a.decorator("$exceptionHandler", ["$delegate",
        "exceptionHandlerFactory",
        function(a, b) {
          return b(a)
        }
      ])
    }
  ])


, angular.module("services.font", []), angular.module("services.font").factory(
    "fontService", ["$http", "$q", function(a, b) {
      function c(c) {
        var d = b.defer(),
          e = PREFIX_URL + "m/scene/toll/font";
        return a({
          method: "GET",
          url: e,
          withCredentials: !0,
          params: {
            id: c
          }
        }).then(function(a) {
          d.resolve(a)
        }, function(a) {
          d.reject(a)
        }), d.promise
      }
      var d = {
        checkBoughtFonts: c
      };
      return d
    }]),   angular.module("services.history", []).factory("historyService", [
    "$rootScope",
    function(a) {
      var b = {},
        c = {},
        d = {};
      return b.addPage = function(d, e) {
        return c[d] || (c[d] = {
            currentPos: 0,
            inHistory: !1,
            pageHistory: []
          }, b.addPageHistory(d, e)), a.$broadcast("history.changed"), JSON
          .parse(c[d].pageHistory[c[d].currentPos])
      }, b.addPageHistory = function(b, e) {
        d = c[b], d.inHistory && (d.inHistory = !1, d.pageHistory.length =
          d.currentPos + 1);
        var f = JSON.stringify(e);
        f !== d.pageHistory[d.pageHistory.length - 1] && d.pageHistory.push(
          f), d.currentPos = d.pageHistory.length - 1, a.$broadcast(
          "history.changed")
      }, b.clearHistory = function() {
        c = {}
      }, b.canBack = function(a) {
        return d = c[a], d.currentPos > 0
      }, b.canForward = function(a) {
        return d = c[a], d.currentPos < d.pageHistory.length - 1
      }, b.back = function(b) {
        if (d = c[b], d.pageHistory.length) {
          d.inHistory = !0;
          var e = 0 === d.currentPos ? d.pageHistory[0] : d.pageHistory[--d
            .currentPos];
          return a.$broadcast("history.changed"), JSON.parse(e)
        }
      }, b.forward = function(b) {
        if (d = c[b], d.pageHistory.length) {
          d.inHistory = !0;
          var e = d.currentPos === d.pageHistory.length - 1 ? d.pageHistory[
            d.currentPos] : d.pageHistory[++d.currentPos];
          return a.$broadcast("history.changed"), JSON.parse(e)
        }
      }, b
    }
  ]), angular.module("services.httpRequestTracker", []), angular.module(
    "services.httpRequestTracker").factory("httpRequestTracker", ["$http",
    function(a) {
      var b = {};
      return b.hasPendingRequests = function() {
        return a.pendingRequests.length > 0
      }, b
    }
  ]), angular.module("services.i18nNotifications", ["services.notifications",
    "services.localizedMessages"
  ]), angular.module("services.i18nNotifications").factory("i18nNotifications", [
    "localizedMessages", "notifications",
    function(a, b) {
      var c = function(b, c, d, e) {
          return angular.extend({
            message: a.get(b, d),
            type: a.get(c, d)
          }, e)
        },
        d = {
          pushSticky: function(a, d, e, f) {
            return b.pushSticky(c(a, d, e, f))
          },
          pushForCurrentRoute: function(a, d, e, f) {
            return b.pushForCurrentRoute(c(a, d, e, f))
          },
          pushForNextRoute: function(a, d, e, f) {
            return b.pushForNextRoute(c(a, d, e, f))
          },
          getCurrent: function() {
            return b.getCurrent()
          },
          remove: function(a) {
            return b.remove(a)
          },
          removeAll: function() {
            return b.removeAll()
          }
        };
      return d
    }
  ]), angular.module("services.localizedMessages", []).factory(
    "localizedMessages", ["$interpolate", "I18N.MESSAGES", function(a, b) {
      var c = function(a, b) {
        return a || "?" + b + "?"
      };
      return {
        get: function(d, e) {
          var f = b[d];
          return f ? a(f)(e) : c(f, d)
        }
      }
    }]), angular.module("services.mine", []), angular.module("services.mine").factory(
    "MineService", ["$http", "$rootScope", "dataCacheService", function(a, b, c) {
      var d = {};
      return d.getNewSample = function() {
        var b = "index.php?c=scene&a=lable";
        return b += (/\?/.test(b) ? "&" : "?") + "time=" + (new Date).getTime(),
          a({
            withCredentials: !0,
            method: "POST",
            url: PREFIX_URL + b
          })
      }, d.getMyGroup = function(c) {
        var d = "index.php?c=scene&a=getMyGroup&param=" + c;
        return d += (/\?/.test(d) ? "&" : "?") + "time=" + (new Date).getTime(),
          a({
            withCredentials: !0,
            method: "POST",
            url: PREFIX_URL + d
          }).then(function(a) {
            200 === a.data.code && b.$broadcast("get.my.group", a.data.list)
          })
      }, d.editGroup = function(c, d) {
        var e = "index.php?c=scene&a=updateGroup";
        e += (/\?/.test(e) ? "&" : "?") + "time=" + (new Date).getTime();
        var f = {
          groupId: c,
          groupName: d
        };
        return a({
          withCredentials: !0,
          method: "POST",
          url: PREFIX_URL + e,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          data: $.param(f)
        }).then(function(a) {
          200 === a.data.code && b.$broadcast("update.my.group", a.data
            .list)
        })
      }, d.deleteGroup = function(c, d) {
        var e = "index.php?c=scene&a=deleteGroup&id=" + c;
        return e += (/\?/.test(e) ? "&" : "?") + "time=" + (new Date).getTime(),
          a({
            withCredentials: !0,
            method: "POST",
            url: PREFIX_URL + e
          }).then(function(a) {
            200 === a.data.code && b.$broadcast("delete.my.group", d)
          })
      }, d.moveGroupScene = function(b, c) {
        var d = "index.php?c=scene&a=setGroup";
        d += (/\?/.test(d) ? "&" : "?") + "time=" + (new Date).getTime();
        var e = {
          id: b,
          sIds: c
        };
        return a({
          withCredentials: !0,
          method: "POST",
          url: PREFIX_URL + d,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          data: $.param(e)
        })
      }, d.getSysRecommend = function(c) {
        var d = "m/scene/guided";
        c && (d += (/\?/.test(d) ? "&" : "?") + "type=" + c), d += (/\?/.test(
          d) ? "&" : "?") + "time=" + (new Date).getTime(), a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + d
        }).then(function(a) {
          200 === a.data.code && b.$broadcast(
            "get.getSysRecommend.list", a.data)
        })
      }, d.getCompanySample = function(c, d, e) {
        var f = "m/scene/group/comtemp?userId=" + c + "&pageNo=" + d +
          "&pageSize=" + e;
        return f += (/\?/.test(f) ? "&" : "?") + "time=" + (new Date).getTime(),
          a({
            withCredentials: !0,
            method: "POST",
            url: PREFIX_URL + f
          }).then(function(a) {
            200 === a.data.code && b.$broadcast(
              "get.company.sample.scene", a.data)
          })
      }, d.getMyScenes = function(c, e, f, g, h, i, j) {
        var k;
        k = c ? "index.php?c=scene&a=my&type=" + c :
          "index.php?c=scene&a=my";
        var l = {
          showData: i,
          pageNo: e,
          pageSize: f,
          user: g,
          name: h,
          groupId: j
        };
        return k += (/\?/.test(k) ? "&" : "?") + "time=" + (new Date).getTime(),
          a({
            withCredentials: !0,
            loading: !0,
            method: "POST",
            url: PREFIX_URL + k,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            data: $.param(l)
          }).then(function(a) {
            200 === a.data.code && (d.scenes = a.data, b.$broadcast(
              "get.my.scene.list"))
          })
      }, d.deleteSceneById = function(b, c) {
        var d = "index.php?c=scene&a=delscene&id=" + b;
        return c && (d += "&backup=" + c), a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + d
        })
      }, d.getMyHistoryScenes = function(b, c, d) {
        var e = "m/scene/recycle/list";
        return e += "?pageNo=" + (b ? b : 1), e += "&pageSize=" + (c ? c :
            12), d && (e += "&user=" + d), e += (/\?/.test(e) ? "&" : "?") +
          "time=" + (new Date).getTime(), a({
            withCredentials: !0,
            method: "GET",
            url: PREFIX_URL + e
          })
      }, d
    }]), angular.module("services.modal", ["confirm-dialog", "message-dialog" 
  ]).factory("ModalService", ["$modal", "$rootScope", function(a, $rootScope) {
    var b = {};
    return b.openBindEmailDialog = function() {
      a.open({
        keyboard: !1,
        backdropClick: !0,
        windowClass: "confirm-dialog",
        templateUrl: $rootScope.tplUrl +"dialog/bindemail.tpl.html",
        controller: "BindEmailDialogCtrl"
      })
    }, b.openConfirmDialog = function(b, c, d) {
      a.open({
        backdrop: "static",
        keyboard: !1,
        backdropClick: !1,
        windowClass: "confirm-dialog",
        templateUrl: $rootScope.tplUrl + "dialog/confirm.tpl.html",
        controller: "ConfirmDialogCtrl",
        resolve: {
          confirmObj: function() {
            return b
          }
        }
      }).result.then(c, d)
    }, b.openMsgDialog = function(b, c, d) {
      a.open({
        backdrop: "static",
        keyboard: !1,
        backdropClick: !1,
        windowClass: "message-dialog",
        templateUrl: $rootScope.tplUrl + "dialog/message.tpl.html",
        controller: "MessageDialogCtrl",
        resolve: {
          msgObj: function() {
            return b
          }
        }
      }).result.then(c, d)
    }, b
  }]), angular.module("I18N.MESSAGES", []).service("I18N.MESSAGES", [
    "$rootScope",
    function() {
      var a = {
        "notify.success": "success",
        "notify.info": "info",
        "notify.danger": "danger",
        "notify.warning": "warning",
        "notify.tip": "tip",
        "errors.route.changeError": "Route change error",
        "crud.user.save.success": "A user with id '{{id}}' was saved successfully.",
        "crud.user.remove.success": "A user with id '{{id}}' was removed successfully.",
        "crud.user.remove.error": "Something went wrong when removing user with id '{{id}}'.",
        "crud.user.save.error": "Something went wrong when saving a user...",
        "crud.project.save.success": "A project with id '{{id}}' was saved successfully.",
        "crud.project.remove.success": "A project with id '{{id}}' was removed successfully.",
        "crud.project.save.error": "Something went wrong when saving a project...",
        "login.reason.notAuthorized": "离开久了，麻烦再登录一次吧！",
        "login.reason.notAuthenticated": "为了保障您的账号安全，请登录！",
        "login.error.invalidCredentials": "登录失败，请检查邮箱和密码是否正确。",
        "login.error.serverError": "There was a problem with authenticating: {{exception}}.",
        "register.error.serverError": "There was a problem with authenticating: {{exception}}.",
        "login.reset.notmatch": "新密码和重复密码不匹配",
        "register.error.match": "两次输入密码不一致",
        "register.error.agreement": "请先同意注册协议再完成注册",
        "file.bg.pageSize": "12",
        "scene.save.success.published": "场景已保存成功！",
        "scene.save.success.nopublish": "保存成功，还需要发布哦！",
        "scene.save.success.companyTpl": "成功生成企业样例",
        "scene.clear.success.companyTpl": "成功取消企业样例",
        "companytpl.setting.success": "成功生成企业模板",
        "mytpl.setting.success": "成功生成我的模板",
        "scene.publish.success": "场景发布成功",
        "account.success": "提交成功！",
        "branch.open.success": "账号打开成功！",
        "branch.close.success": "账号关闭成功！",
        "dept.create.success": "部门创建成功！",
        "dept.update.success": "修改成功！",
        "branch.create.success": "账号创建成功！",
        "branch.update.success": "账号修改成功！",
        "scene.setting.success": "场景设置成功！",
        "data.assign.success": "分组成功！",
        "data.delete.success": "数据删除成功！",
        "group.delete.data": "分组内素材移除成功！",
        "custom.data.delete": "此条客户数据删除成功！",
        "group.delete.success": "分组删除成功！",
        "group.create.success": "分组创建成功！",
        "group.edit.success": "分组修改成功！",
        "group.scene.success": "成功将此场景移动至分组",
        "rel.tip": "您的账号还没有绑定邮箱，去用户中心->账号管理，马上绑定",
        "page.change.success": "页面名称修改成功！",
        "email.save.success": "邮箱绑定成功！",
        "bbs.save.success": "论坛账号绑定成功！",
        "reset.psw.success": "密码修改成功！",
        "save.success": "保存成功！",
        "upload.success": "上传成功！",
        "mail.rel.success": "关联成功！",
        "mail.unbind.success": "解除关联成功！",
        "file.assign.success": "分组成功！",
        "already.rel": "此账号已经关联过邮箱",
        "branch.reset.success": "子账号密码重置成功！",
        "already.bind.error": "{{msg}}",
        "reject.crop.image": "不支持裁剪GIF格式图片！",
        "visitor.apply": "信息已经提交审核，审核通过后会更新秀客信息，请耐心等待。",
        "select.trigger.source": "请选择触发源",
        "scratch.percentage.overflow": "涂抹比例不能大于100%",
        "invitation.sendemail.success": "邮件发送成功!",
        "invitation.sendemail.error": "邮件发送失败!",
        "outbox.warning": "红色警告：超出虚线外边框的内容，将无法在手机中被看到",
        "outbox.tip": "橙色警告：超出虚线内边框的内容，在部分老机型手机中将无法看到",
        "already.apply.discovery": "您已申请加入秀场，暂时不能再申请！",
        "already.apply.sample": "您已申请过成为样例，暂时不能再申请！",
        "already.apply.activity": "您已申请过成为活动，暂时不能再申请！",
        "phone.message": "成功开通短信提醒",
        "scene.apply.success": "申请成功",
        "xd.insufficient": "秀点余额不足，去用户中心－>会员服务进行充值",
        "customer.name.overflow": "姓名不能超过50个字符",
        "scene.deny.apply": "审核未通过的场景不能申请活动",
        "scene.incheck.apply": "审核中的场景不能申请活动",
        "scene.accessCode.apply": "加密设置的场景不能加入活动",
        "scene.accessClose.apply": "关闭的场景不能加入活动",
        "spread.share.messagecustomer": "请选择收件人",
        "spread.share.messageless": "可用短信数量不足,请兑换短信",
        "spread.share.messagecontent": "请先选择短信内容!",
        "spread.share.messagesendsuccess": "发送成功",
        "spread.share.messagebuylayout": "请选择购买类型",
        "spread.share.messagebuyxdless": "秀点余额不足,请先购买秀点!",
        "spread.share.guaranteeSucc": "申请保障服务成功",
        "spread.share.guaranteeClose": "取消保障服务成功",
        "print.scene.images.fail": "请先保存预览图",
        "print.shop.images.fail": "印刷需保存预览图",
        "print.images.number": "只能选择两张图片",
        "print.images.null": "未选择任何图片",
        "print.images": "敬请期待！",
        "spread.share.guaranteeBuyXd": "购买保障服务成功",
        "spread.share.guaranteeApplyError": "您的场景保障服务剩余次数不足,请先购买",
        "spread.share.guaranteeApplyUnPublice": "场景未发布,不能参加保障服务",
        "spread.share.guaranteeApplyCheck": "审核关闭的场景,不能参加保障服务",
        "spread.share.guaranteeApplyUnCheck": "审核驳回的场景,不能参加保障服务",
        "delete.scene.guarantee": "场景已经静态化,不能删除",
        "transfer.scene.guarantee": "场景已经静态化,不能转送",
        "usercenter.buybranch.success": "子帐号购买成功",
        "usercenter.buybranch.notcompany": "{{errMsg}}",
        "rel.register.account.success": "设置成功"
      };
      return a
    }
  ]),





angular.module("services.qCloud", []).factory("qCloudService", ["$http",
    function(a) {
      function b(b, c, d) {
        var e = STATISTICS_HOST + "m/sa/enable",
          f = d ? 1 : 0;
        return a({
          method: "POST",
          withCredentials: !0,
          url: e,
          data: $.param({
            sceneId: b,
            partner: c,
            enable: f
          }),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          }
        })
      }
      return {
        QCloudOpenOrClosed: b
      }
    }
  ]), angular.module("services.sample", []).factory("sampleService", [
    "$rootScope", "$http",
    function(a, b) {
      var c = {};
      return c.getSamples = function(a, c, d) {
        var e = PREFIX_S2_URL + "index.php?c=scene&a=promotion";
        return a && (e += "&type=" + a), c && (e += /\?/.test(e) ? "&" :
          "?", e += "pageNo=" + c), d && (e += /\?/.test(e) ? "&" : "?",
          e += "pageSize=" + d), b({
          withCredentials: !0,
          method: "GET",
          url: e
        })
      }, c.getSamplesPV = function() {
        var a = PREFIX_S1_URL + "eqs/topThree?time=" + (new Date).getTime();
        return b({
          withCredentials: !0,
          method: "GET",
          url: a
        })
      }, c
    }
  ]),





angular.module("services.select", []).factory("selectService", [
    "$rootScope", "security",
    function(a, b) {
      var c = {},
        d = [];
      return c.addElement = function(c) {
        c += "";
        var e = b.isAllowToAccess(b.accessDef.ACCESS_COMP_MANAGE);
        d.indexOf(c) >= 0 || (d.push(c), d.length > 1 ? (a.$broadcast(
            "select.more"), a.$broadcast("hideStylePanel")) : e && 1 == d
          .length ? a.$broadcast("comps.select", c) : a.$broadcast(
            "comps.select"))
      }, c.deleteElement = function(c) {
        a.$broadcast("select.less.id", c);
        var e = b.isAllowToAccess(b.accessDef.ACCESS_COMP_MANAGE),
          f = d.indexOf(c + "");
        0 > f || (d.splice(f, 1), d.length <= 1 ? (a.$broadcast(
            "select.less"), 0 === d.length && (a.$broadcast(
            "close.style.panel"), e && a.$broadcast("comps.select"))) : a
          .$broadcast("hideStylePanel"))
      }, c.clearElements = function() {
        a.$broadcast("select.less", d), d = []
      }, c.getElements = function() {
        return d
      }, c
    }
  ]),

   angular.module("services.staticRes", []),
    angular.module( "services.staticRes").factory("staticResService", ["$http", function(z) {
    var a = {},
      b = [{
        name: "行业",
        value: "101"
      }, {
        name: "个人",
        value: "102"
      }, {
        name: "企业",
        value: "103"
      }, {
        name: "节假",
        value: "104"
      }, {
        name: "风格",
        value: "105"
      }, {
        name: "品牌",
        value: "106"
      }];
    a.getSceneTypea = function() {
      var a = "statics/typeListb";
      return z({
        withCredentials: !0,
        method: "GET",
        url: API_URL + a
      })
    };
    a.getSceneType = function() {
      a.getSceneTypea().success(function(a) {
        b = a.list;
      })
      return b;
    };
    var c = [{
      name: "版式",
      value: "1101"
    }, {
      name: "风格",
      value: "1103"
    }, {
      name: "互动",
      value: "1102"
    }];
    a.getBigTab = function() {
      return c
    };
    var d = {
      1101: [{
        id: 1,
        name: "图文",
        bizType: 1101
      }, {
        id: 2,
        name: "图集",
        bizType: 1101
      }, {
        id: 4,
        name: "文字",
        bizType: 1101
      }, {
        id: 5,
        name: "图表",
        bizType: 1101
      }],
      1102: [{
        id: 6,
        name: "报名表",
        bizType: 1102
      }, {
        id: 8,
        name: "留言",
        bizType: 1102
      }, {
        id: 9,
        name: "联系",
        bizType: 1102
      }],
      1103: [{
        id: 15,
        name: "黑白",
        bizType: 1103
      }, {
        id: 16,
        name: "红色",
        bizType: 1103
      }, {
        id: 17,
        name: "怀旧",
        bizType: 1103
      }, {
        id: 18,
        name: "现代",
        bizType: 1103
      }, {
        id: 19,
        name: "扁平化",
        bizType: 1103
      }, {
        id: 120,
        name: "黄色",
        bizType: 1103
      }, {
        id: 121,
        name: "绿色",
        bizType: 1103
      }, {
        id: 122,
        name: "紫色",
        bizType: 1103
      }, {
        id: 123,
        name: "黑色",
        bizType: 1103
      }, {
        id: 124,
        name: "白色",
        bizType: 1103
      }, {
        id: 125,
        name: "其他",
        bizType: 1103
      }, {
        id: 260,
        name: "English",
        bizType: 1103
      }, {
        id: 262,
        name: "Android",
        bizType: 1103
      }]
    };
    a.getPageTpls = function(a) {
      return a ? d[a] : d[1101].concat(d[1102]).concat(d[1103])
    };
    var e = [{
      id: 13076,
      name: "风格",
      value: "203",
      remark: "group1/M00/61/89/yq0KA1T2vXqAH3MxAAAdfvrWmmM009.png"
    }, {
      id: 13078,
      name: "节日",
      value: "205",
      remark: "group1/M00/61/89/yq0KA1T2vXqAGI-4AAAWKIt1ceE158.png"
    }, {
      id: 13075,
      name: "企业",
      value: "202",
      remark: "group1/M00/61/89/yq0KA1T2vXqAdp7RAAAOCH36lkY788.png"
    }, {
      id: 13074,
      name: "行业",
      value: "201",
      remark: "group1/M00/61/89/yq0KA1T2vXqARMyQAAASI6ZG0zM493.png"
    }, {
      id: 13077,
      name: "个人",
      value: "204",
      remark: "group1/M00/61/89/yq0KA1T2vXqAIorQAAAVuqdCoU4830.png"
    }, {
      id: 15162,
      name: "正版授权",
      value: "206",
      remark: null
    }];
    a.getBgTypes = function() {
      return e
    };
    var f = [{
      id: 13084,
      name: "图标",
      value: "106",
      remark: "group1/M00/61/89/yq0KA1T2vXqAOVqkAAAX-MAtU0A633.png"
    }, {
      id: 13085,
      name: "动画",
      value: "107",
      remark: "group1/M00/61/89/yq0KA1T2vXqANcAcAAATIr_b2OM515.png"
    }, {
      id: 13083,
      name: "节日",
      value: "105",
      remark: "group1/M00/61/89/yq0KA1T2vXqAGI-4AAAWKIt1ceE158.png"
    }, {
      id: 13081,
      name: "风格",
      value: "103",
      remark: "group1/M00/61/89/yq0KA1T2vXqAH3MxAAAdfvrWmmM009.png"
    }, {
      id: 13080,
      name: "企业",
      value: "102",
      remark: "group1/M00/61/89/yq0KA1T2vXqAdp7RAAAOCH36lkY788.png"
    }, {
      id: 13079,
      name: "行业",
      value: "101",
      remark: "group1/M00/61/89/yq0KA1T2vXqARMyQAAASI6ZG0zM493.png"
    }, {
      id: 13082,
      name: "个人",
      value: "104",
      remark: "group1/M00/61/89/yq0KA1T2vXqAIorQAAAVuqdCoU4830.png"
    }];
    a.getTpTypes = function() {
      return f
    };
    var g = [];
    a.getAudioTypes = function() {
      return g
    };
    var h = [{
      id: 29331,
      name: "交通",
      value: "2"
    }, {
      id: 48376,
      name: "人物",
      value: "3"
    }, {
      id: 48377,
      name: "生活",
      value: "4"
    }, {
      id: 48378,
      name: "自然",
      value: "5"
    }, {
      id: 48379,
      name: "动物",
      value: "6"
    }, {
      id: 48380,
      name: "科技",
      value: "7"
    }, {
      id: 48381,
      name: "卡通",
      value: "8"
    }, {
      id: 48382,
      name: "其它",
      value: "9"
    }];
    return a.getSoundTypes = function() {
      return h
    }, a
  }]), 

angular.module("services.dataCache").factory("storageService", [function() {
    var a = {};
    return a.clear = function() {
      window.localStorage && localStorage.clear()
    }, a.push = function(a, b) {
      window.localStorage && localStorage.setItem(a, b)
    }, a.get = function(a) {
      return window.localStorage ? localStorage.getItem(a) : void 0
    }, a
  }]),

   angular.module("service.upgradeAccount", []).factory(
    "upgradeAccountService", ["ModalService", "security", "$modal", function(a,
      b, c) {
      var d = function(d) {
          var e = b.currentUser;
          return 1 === e.type ? void c.open({
            windowClass: "seven-contain",
            templateUrl: "usercenter/console/upgrade_company.tpl.html",
            controller: "UsercenterupgradeCtrl",
            resolve: {
              user: function() {
                return {
                  id: e.id
                }
              }
            }
          }).result.then(function() {
            b.currentUser.type = 2
          }) : 2 !== e.type ? void a.openMsgDialog({
            msg: "尊敬的用户，您当前账号类型无法升级为企业用户！"
          }) : void c.open({
            windowClass: "six-contain console",
            templateUrl: "usercenter/upgrade.tpl.html",
            controller: "UpgradeCtrl",
            resolve: {
              type: function() {
                return d
              }
            }
          })
        },
        e = function(a) {
          if (a.buyBtnValue = "立即购买", !b.currentUser) return void(a.disBuyTip =
            "");
          if (b.currentUser.memberType && -1 !== [1, 2, 3, 4].indexOf(b.currentUser
              .memberType)) a.disBuyTip = "您的会员版本为早期版本，请待到期后再购买！", a.disBuyFlag = !
            0;
          else if (b.currentUser && b.currentUser.memberType === a.memberType) {
            var c = new Date;
            c.setFullYear(c.getFullYear() + 1), c.getTime() > b.currentUser.expiryTime ?
              (a.buyBtnValue = "立即续费", a.disBuyFlag = !1) : (a.disBuyTip =
                "用户自身版本与页面中版本相同，但用户当前版本有效期还超过1年！", a.disBuyFlag = !0)
          } else b.currentUser.memberType > a.memberType ? (a.disBuyTip =
            "用户自身版本比页面中版本级别更高！", a.disBuyFlag = !0) : (a.disBuyTip = "", a.disBuyFlag = !
            1)
        };
      return {
        upgradeAccountFunc: d,
        buyBtnValueFunc: e
      }
    }])
