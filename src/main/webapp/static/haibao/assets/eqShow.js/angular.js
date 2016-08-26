angular.module("services.usercenter", []).service('usercenterService', function(){}).service('thirdpartyService', function(){})
angular.module("message", []),
angular.module("invitation", []),
angular.module("services.validate", []),



angular.module("active", ["services.active"]), angular.module("active").controller(
    "ActiveCtrl", ["$rootScope", "$http", "$scope", "$timeout", "security",
      "$window", "activeService", "MineService", "$routeParams",
      function(a, b, c) {
        c.PREFIX_FILE_HOST = PREFIX_FILE_HOST, c.PREFIX_SERVER_HOST =
          PREFIX_URL, c.PREFIX_CLIENT_HOST = PREFIX_HOST
      }
    ]) , 

// angular.module("app").run(["security", "$rootScope", "configService",
//     function(a, b, c) {
//       b.HB_STATIC = HB_STATIC, b.PREFIX_FILE_HOST = PREFIX_FILE_HOST, b.PREFIX_SERVER_HOST =
//         PREFIX_URL, b.PREFIX_CLIENT_HOST = PREFIX_HOST, b.PREFIX_S3_URL =
//         PREFIX_S3_URL, b.PREFIX_SHOW_HOST = PREFIX_SHOW_HOST, a.requestCurrentUser(),
//         c.getLogo().then(function(a) {
//           try {
//             b.logoSrc = a.data
//           } catch (c) {
//             b.logoSrc = HB_STATIC + "assets/images/eqxiulogo1.svg"
//           }
//         }, function() {
//           b.logoSrc = HB_STATIC + "assets/images/eqxiulogo1.svg"
//         })
//     }
//   ]), 

 


  

  angular.module("confirm-dialog", []).controller("ConfirmDialogCtrl", [
    "$scope", "confirmObj",
    function(a, b) {
      a.confirmObj = b, a.ok = function() {
        a.$close()
      }, a.cancel = function() {
        a.$dismiss()
      }
    }
  ]), angular.module("message-dialog", []).controller("MessageDialogCtrl", [
    "$scope", "msgObj",
    function(a, b) {
      a.msgObj = b, a.close = function() {
        a.$close()
      }, a.cancel = function() {
        a.$dismiss()
      }
    }
  ]), angular.module("error", []), angular.module("error").controller(
    "ErrorCtrl", ["$rootScope", "$http", "$scope", "$timeout", "security",
      "$window",
      function(a, b, c) {
        c.PREFIX_CLIENT_HOST = PREFIX_HOST
      }
    ]), 





 


  angular.module("customer.group", ["services.data",
    "services.i18nNotifications"
  ]), angular.module("customer.group").controller("AddGroupCtrl", ["$rootScope",
    "$scope", "dataService", "i18nNotifications", "sceneCreat",
    function(a, b, c, d, e) {
      b.group = {}, b.authError = "", e && (b.group.name = e.name, b.group.id =
        e.id, b.title = e.title), b.confirm = function() {
        if (!b.group.name) return void(b.authError = "请输入分组名称");
        var a = countCharacters(b.group.name);
        if (a > 12) return void(b.authError = "分组名称不能大于12个字符或6个汉字！");
        var f = {
          name: b.group.name
        };
        e && e.type ? b.group.id ? c.updateSceneGroup(b.group.id, b.group.name)
          .then(function() {
            d.pushForCurrentRoute("group.create.success",
              "notify.success"), b.$close({
              id: b.group.id,
              name: b.group.name
            })
          }) : c.createSceneGroup(f).then(function(a) {
            a.data.success && (d.pushForCurrentRoute(
              "group.create.success", "notify.success"), b.$close({
              id: a.data.obj,
              name: b.group.name
            }))
          }) : c.createGroup(f).then(function(a) {
            a.data.success && (d.pushForCurrentRoute(
              "group.create.success", "notify.success"), b.$close({
              id: a.data.obj,
              name: b.group.name
            }))
          })
      }, b.cancel = function() {
        b.$dismiss()
      }
    }
  ]), 

 angular.module("scene.my.upload", ["angularFileUpload"]), angular.module(
    "scene.my.upload").controller("UploadCtrl", ["$scope", "FileUploader",
    "fileService", "category", "$timeout", "$interval",
    function(a, b, c, d, e, f) {
      a.category = d;
      var g;
      g = a.category.scratch || a.category.headerImage || a.category.companyImg ?
        a.uploader = new b({
          url: PREFIX_URL + "index.php?c=upfile&a=upload&bizType=" + d.categoryId +
            "&fileType=" + d.fileType,
          withCredentials: !0,
          queueLimit: 1,
          onSuccessItem: function(b, c, d, e) {
            function g() {
              f.cancel(h), alert("上传完毕"), a.$close(c.obj.path)
            }
            a.progressNum = 0;
            var h = f(function() {
              a.progressNum < 100 ? a.progressNum += 15 : g()
            }, 100)
          }
        }) : a.uploader = new b({
          url: PREFIX_URL + "index.php?c=upfile&a=upload&bizType=" + d.categoryId +
            "&fileType=" + d.fileType,
          withCredentials: !0,
          queueLimit: 5,
          onCompleteAll: function() {
            function b() {
              f.cancel(c), alert("上传完毕"), a.$close()
            }
            a.progressNum = 0;
            var c = f(function() {
              a.progressNum < 100 ? a.progressNum += 15 : b()
            }, 100)
          }
        }), d.limitSize = d.limitSize || 3145728;
      var h, i = d.limitSize;
      "0" == d.fileType || "1" == d.fileType ? h =
        "|jpg|png|jpeg|bmp|gif|svg+xml|" : ("2" == d.fileType || "4" == d.fileType) &&
        (h = "|mp3|mpeg|"), g.filters.push({
          name: "imageFilter",
          fn: function(a, b) {
            var c = "|" + a.type.slice(a.type.lastIndexOf("/") + 1) + "|";
            return -1 !== h.indexOf(c)
          }
        }), g.filters.push({
          name: "imageSizeFilter",
          fn: function(a, b) {
            var c = a.size;
            return c >= i && alert("上传文件大小限制在" + i / 1024 / 1024 + "M以内"),
              i > c
          }
        }), g.filters.push({
          name: "fileNameFilter",
          fn: function(a, b) {
            return a.name.length > 50 && alert("文件名应限制在50字符以内"), a.name.length <=
              50
          }
        }), a.removeQueue = function() {}
    }
  ]), 

  //   angular.module("reg", []), angular.module("reg").controller(
  //   "TestLoginCtrl", ["$rootScope", "$scope", function(a, b) {
  //     b.weiChatUrl =
  //       "https://open.weixin.qq.com/connect/qrconnect?appid=wxc5f1bbae4bb93ced&redirect_uri=http://www.hjtmt.com/testlogin.html&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect"
  //   }]), angular.module("applyCompany", ["services.usercenter",
  //   "services.i18nNotifications"
  // ]), 

  //   angular.module("applyCompany").controller("ApplyCompanyCtrl", [
  //   "$rootScope", "$scope", "security", "$sce", "usercenterService",
  //   "i18nNotifications", "$routeParams", "$timeout", "validateService",
  //   "$location",
  //   function(a, b, c, d, e, f, g, h, i, j) {
  //     function k() {
  //       0 === m ? (b.isCodeAccessiable = !1, b.codeTip = "", m = 60) : (b.isCodeAccessiable = !
  //         0, b.codeTip = "重新发送(" + m + ")", h(function() {
  //           m--, k()
  //         }, 1e3))
  //     }
  //     config.product = "popup";
  //     var l = "http://api.geetest.com/get.php?callback=initCaptcha&time=" + (
  //       new Date).getTime();
  //     b.validateCodeUrl = d.trustAsResourceUrl(l), b.companyInfo = {
  //       id: c.currentUser.id
  //     }, b.userMobile = c.currentUser.checkPhone, b.checkName = function(a) {
  //       return a.name ? countCharacters(a.name) > 40 ? (b.nameError =
  //         "企业名称不能超过40个字符", !1) : (b.nameError = "", !0) : (b.nameError =
  //         "请填写企业名称", !1)
  //     }, b.checkEmail = function(a) {
  //       var c = i.checkEmail(a.email);
  //       return b.emailError = c, !c
  //     }, b.checkcontacts = function(a) {
  //       return a.contacts ? countCharacters(a.contacts) > 30 ? (b.contactsError =
  //         "联系人不能超过30个字符", !1) : (b.contactsError = "", !0) : (b.contactsError =
  //         "请填写联系人", !1)
  //     }, b.checkAddress = function(a) {
  //       return a.address ? countCharacters(a.address) > 50 ? (b.addressError =
  //         "联系地址不能超过50个字符", !1) : (b.addressError = "", !0) : (b.addressError =
  //         "请填写联系地址", !1)
  //     }, b.checkCode = function(a) {
  //       return a.code ? (b.codeError = "", !0) : (b.codeError = "请输入手机验证码", !
  //         1)
  //     }, b.getImageCode = function() {
  //       challenge && validate && seccode && b.getCode()
  //     }, b.getCode = function() {
  //       var a = b.companyInfo;
  //       if (!a.mobile) return challenge = null, validate = null, seccode =
  //         null, b.telError = "请填写手机号码", !1;
  //       b.telError = "";
  //       var c = {
  //         phone: a.mobile,
  //         geetest_challenge: challenge,
  //         geetest_validate: validate,
  //         geetest_seccode: seccode
  //       };
  //       e.companyMobile(c).then(function(a) {
  //         challenge = "", validate = "", seccode = "", a.data.success ?
  //           k() : b.telError = a.data.msg
  //       })
  //     };
  //     var m = 60;
  //     b.checkFormFormat = function(a) {
  //       return b.checkName(a) && b.checkEmail(a) && b.checkcontacts(a) && b
  //         .checkAddress(a) && (1 === b.userMobile || b.checkCode(a)) ? !0 :
  //         !1
  //     }, b.upgradeCompanyMessage = function(d) {
  //       var g = !0;
  //       b.checkFormFormat(d) && e.saveCompanyInfo(d, g).then(function(e) {
  //         if (e.data.success)
  //           if (c.currentUser.type = 2, a.$broadcast("companyState"), b
  //             .changeLocation) f.pushForCurrentRoute("account.success",
  //             "notify.success"), a.$broadcast("upgrade", d.mobile);
  //           else if (localStorage.getItem("upgradeUrl")) {
  //           var g = localStorage.getItem("upgradeUrl");
  //           localStorage.removeItem("upgradeUrl"), j.path(g)
  //         } else a.$broadcast("regSuccess");
  //         else b.codeError = e.data.msg
  //       })
  //     }
  //   }
  // ]),    

  angular.module("active1", ["services.show", "services.activity",
    "app.directives.addBanner"
  ]), angular.module("active1").controller("Active1Ctrl", ["$rootScope",
    "$http", "$scope", "showService", "activityService", "$location",
    "configSerService",
    function(a, b, c, d, e, f, g) {
      c.pageNo = 1, c.pageSize = 10, c.childCat = "active", c.join = function(
        a) {
        f.path("/show/active/" + a)
      }, c.attend = function(b) {
        a.user ? "" + b == "1" ? f.path("/main") : "" + b == "3" && f.path(
          "/main/print/create") : c.openLogin()
      };
      var h = function(a) {
        e.getActiveList(1, null, a, c.pageSize), c.$on("activeList",
          function(a, b) {
            c.activeList = b.data.list;
            for (var d = Date.parse(new Date), e = 0; e < c.activeList.length; e++)
              c.activeList[e].endDate > d ? c.activeList[e].join = !0 : c
              .activeList[e].join = !1;
            c.totalItems = b.data.map.count, c.currentPage = b.data.map.pageNo,
              c.allPageCount = b.data.map.count, c.toPage = b.data.map.pageNo
          })
      };
      h(c.pageNo), c.pageChanged = function(a) {
        return 1 > a || a > c.totalItems / 10 + 1 ? void alert("此页超出范围") :
          void h(a)
      }, c.pageCode = "active", g.getFriendLinks(c.pageCode).then(function(
        a) {
        c.friendLinks = a.data.list, c.friendLinks.length > 16 && (c.friendLinks
          .length = 16)
      })
    }
  ]), angular.module("activeXq", ["services.show", "services.activity",
    "app.directives.addBanner"
  ]), angular.module("activeXq").controller("ActiveXqCtrl", ["$rootScope",
    "$http", "$scope", "showService", "activityService", "$location",
    "$routeParams", "configSerService",
    function(a, b, c, d, e, f, g, h) {
      c.PREFIX_FILE_HOST = PREFIX_FILE_HOST, c.PREFIX_CLIENT_HOST =
        PREFIX_HOST, c.PREFIX_SERVER_HOST = PREFIX_URL, c.pageNo = 1, c.pageSize =
        16, c.activeId = g.id, c.childCat = "active", c.totalItems = 0, c.join =
        function(a) {
          f.path("/show/active/" + a)
        }, c.attend = function() {
          a.user ? f.path("/main") : c.openLogin()
        };
      var i = function() {
        e.activitySceneList(c.activeId, 1, c.pageNo, 4).then(function(a) {
          if (c.recSceneList = a.data.list, a.data.list)
            for (var b = 0; b < c.recSceneList.length; b++) c.recSceneList[
                b].headImg ? 0 === c.recSceneList[b].headImg.indexOf(
                "http://") ? c.recSceneList[b].headImg = c.recSceneList[
                b].headImg : c.recSceneList[b].headImg =
              PREFIX_FILE_HOST + c.recSceneList[b].headImg : c.recSceneList[
                b].headImg = HB_STATIC +
              "assets/images/xiaotouxiang.png"
        })
      };
      i(c.activeId, 1, c.pageNo, 4);
      var j = function() {
        e.activitySceneList(c.activeId, null, c.pageNo, c.pageSize).then(
          function(a) {
            if (c.sceneList = a.data.list, c.totalItems = a.data.map.count,
              c.currentPage = a.data.map.pageNo, c.toPage = a.data.map.pageNo,
              a.data.list)
              for (var b = 0; b < c.sceneList.length; b++) c.sceneList[b]
                .headImg ? 0 === c.sceneList[b].headImg.indexOf("http://") ?
                c.sceneList[b].headImg = c.sceneList[b].headImg : c.sceneList[
                  b].headImg = PREFIX_FILE_HOST + c.sceneList[b].headImg :
                c.sceneList[b].headImg = HB_STATIC +
                "assets/images/xiaotouxiang.png"
          })
      };
      j(c.activeId, null, c.pageNo, c.pageSize), e.activityMes(c.activeId), c
        .$on("activeMes", function(a, b) {
          c.activeMes = b.data.obj
        }), c.pageChanged = function(a) {
          return c.pageNo = a, 1 > a || a > c.totalItems / 16 + 1 ? void alert(
            "此页超出范围") : void j(c.activeId, null, a, c.pageSize)
        }, c.pageCode = "pro_" + c.activeId, h.getFriendLinks(c.pageCode).then(
          function(a) {
            c.friendLinks = a.data.list, c.friendLinks.length > 16 && (c.friendLinks
              .length = 16)
          })
    }
  ]), angular.module("category", ["services.show", "services.activity",
    "app.directives.addBanner"
  ]), angular.module("category").controller("CategoryCtrl", ["$rootScope",
    "$http", "$scope", "showService", "activityService", "$location",
    "$routeParams", "security",
    function(a, b, c, d, e, f, g, h) {
      c.recommend = 1, c.pageSize = 16, e.getActiveList(null, c.recommend, c.pageNo,
        3), c.$on("activeList", function(a, b) {
        c.activeList = b.data.list
      }), c.join = function(a) {
        f.path("/show/active/" + a)
      };
      var i = g.id;
      c.bizType = i;
      var j = {};
      c.getCategoryTpl = function(a) {
        c.childCat = a, j[a] ? (c.childCatrgoryList = j[a], c.childCatrgoryList
          .length && (k.tagId = c.categoryId = c.childCatrgoryList[0].id,
            c.getPageTpls(null, c.childCatrgoryList[0].id))) : d.getPageTagLabel(
          a).then(function(b) {
          c.childCatrgoryList = j[a] = b.data.list, c.childCatrgoryList
            .length && (k.tagId = c.categoryId = c.childCatrgoryList[0]
              .id, c.getPageTpls(null, c.childCatrgoryList[0].id))
        })
      }, c.getCategoryTpl(i);
      var k = {
        sceneType: "",
        tagId: "",
        orderBy: null,
        bizType: "",
        template: "",
        pageNo: "1",
        targetPage: ""
      };
      c.tplNew = function(a) {
        c.order = a, k.orderBy = a, c.getPageTpls(a, null, k.tagId, k.pageNo,
          c.pageSize)
      }, c.getPageTpls = function(a, b) {
        b && (k.tagId = b), c.categoryId = k.tagId, d.getSceneList(k.orderBy,
          null, k.tagId, k.pageNo, c.pageSize), c.$on("sceneList",
          function(a, b) {
            c.tpls = b.list, c.totalItems = b.map.total, c.currentPage =
              b.map.pageNo, c.allPageCount = b.map.count, c.toPage = b.map
              .pageNo;
            for (var d = 0; d < c.tpls.length; d++) c.tpls[d].headImg ? 0 ===
              c.tpls[d].headImg.indexOf("http://") ? c.tpls[d].headImg =
              c.tpls[d].headImg : c.tpls[d].headImg = PREFIX_FILE_HOST +
              c.tpls[d].headImg : c.tpls[d].headImg = HB_STATIC +
              "assets/images/xiaotouxiang.png"
          })
      }, c.userTpl = function(b) {
        f.path("/scene"), a.tplId = b
      }, c.pageChanged = function(a) {
        return 1 > a || a > c.totalItems / 16 + 1 ? void alert("此页超出范围") :
          (k.pageNo = a, void c.getPageTpls(k.orderBy, null, k.tagId, a, c.pageSize))
      }
    }
  ]), angular.module("nav", ["services.show", "services.staticRes"]), angular.module(
    "nav").controller("NavCtrl", ["$rootScope", "$http", "$scope",
    "showService", "$location", "$routeParams", "staticResService",
    function(a, b, c, d, e, f, g) {
      c.isActive = "show", g.getSceneTypea().then(function(a) {
        a.data.list && a.data.list.length > 0 && (c.sceneType = a.data.list),
          angular.forEach(c.sceneType, function(a) {
            a.value === f.id && (c.$parent.catName = a.name)
          })
      }), c.getCategoryPage = function(a) {
        e.path("show/category/" + a)
      };
      var h = null;
      c.search = function(a) {
        h = a
      }, c.submit = function() {
        h ? e.path("show/search/" + h) : e.path("show")
      }, c.EnterPress = function(a, b) {
        var d = a || window.event;
        13 === d.keyCode && c.submit(b)
      }
    }
  ]), angular.module("app.directives.addBanner", []).directive("slides2", [
    "configSerService",
    function(a) {
      return {
        restrict: "EA",
        link: function(b, c, d) {
          var e = $(c).find(".slides_container");
          a.getActivityBanner(d.id).then(function(a) {
            for (var b = a.data.list, f = 0; f < b.length; f++) {
              var g = $('<a href="' + b[f].url +
                '" style="display:block;" target="' + b[f].target +
                '" data-bid="' + b[f].id + '"></a>');
              "index" === d.id ? g.attr("data-banner", "4201") :
                "active" === d.id ? g.attr("data-banner", "4202") :
                "st_101" === d.id ? g.attr("data-banner", "4203") :
                "st_102" === d.id ? g.attr("data-banner", "4204") :
                "st_103" === d.id ? g.attr("data-banner", "4205") :
                "st_104" === d.id ? g.attr("data-banner", "4206") :
                "st_105" === d.id ? g.attr("data-banner", "4207") :
                "st_106" === d.id && g.attr("data-banner", "4208"), g.append(
                  '<img src="' + b[f].path + '" width="' + d.width +
                  '" height="' + d.height + '" alt="' + b[f].title +
                  '" title="' + b[f].title + '" > '), e.append(g)
            }
            $(c).slides({
              preload: !0,
              play: 5e3,
              pause: 2500,
              hoverPause: !0
            })
          })
        }
      }
    }
  ]), angular.module("show", ["services.show", "services.activity",
    "app.directives.addBanner"
  ]), angular.module("show").controller("ShowCtrl", ["$rootScope", "$http",
    "$scope", "showService", "activityService", "$location",
    "configSerService", "security",
    function(a, b, c, d, e, f, g, h) {
      c.PREFIX_FILE_HOST = PREFIX_FILE_HOST, c.PREFIX_CLIENT_HOST =
        PREFIX_HOST, c.PREFIX_SERVER_HOST = PREFIX_URL, c.PREFIX_SHOW_HOST =
        PREFIX_SHOW_HOST, c.recommend = 1, c.childCat = "index", c.category =
        "h5", e.getActiveList(null, c.recommend, c.pageNo, 3), c.$on(
          "activeList",
          function(a, b) {
            c.activeList = b.data.list
          }), c.join = function(a) {
          f.path("/show/active/" + a)
        }, c.pageCode = "index", g.getFriendLinks(c.pageCode).then(function(a) {
          c.friendLinks = a.data.list, c.friendLinks.length > 16 && (c.friendLinks
            .length = 16)
        })
    }
  ]), angular.module("commonRecommend", ["services.show"]), angular.module(
    "commonRecommend").controller("CommonRecommendCtrl", ["$rootScope", "$http",
    "$scope", "showService", "security", "$location", "ModalService",
    function(a, b, c, d, e, f) {
      var g = c.recommendType,
        h = "";
      c.PREFIX_FILE_HOST = PREFIX_FILE_HOST, c.PREFIX_CLIENT_HOST =
        PREFIX_HOST, c.PREFIX_SERVER_HOST = PREFIX_URL, c.PREFIX_SHOW_HOST =
        PREFIX_SHOW_HOST, c.pageNo = 1, c.pageSize = 16, c.childCat =
        "recommend", c.order = null;
      var i = function(a) {
        d.getSceneList(c.order, 1, null, a, c.pageSize), c.$on("sceneList",
          function(a, b) {
            c.recommendList = b.list, c.totalItems = b.map.total, c.currentPage =
              b.map.pageNo, c.allPageCount = b.map.total, c.toPage = b.map
              .pageNo;
            for (var d = 0; d < c.recommendList.length; d++) c.recommendList[
                d].headImg ? 0 === c.recommendList[d].headImg.indexOf(
                "http://") ? c.recommendList[d].headImg = c.recommendList[
                d].headImg : c.recommendList[d].headImg =
              PREFIX_FILE_HOST + c.recommendList[d].headImg : c.recommendList[
                d].headImg = HB_STATIC +
              "assets/images/xiaotouxiang.png"
          })
      };
      "print" === c.recommendType ? d.getPrintRecommend(c.pageNo, c.pageSize) :
        "h5" === c.recommendType && i(c.pageNo), c.tplNew = function(a) {
          c.order = a, i(a, 1, null, c.pageNo, c.pageSize)
        }, c.userTpl = function(b) {
          "h5" === g ? (f.path("/scene"), a.tplId = b) : "print" === g && (
            window.sessionStorage.setItem("copyPrintId", b.id), window.open(
              "print/copyTpl", "_blank"), window.sessionStorage.removeItem(
              "copyPrintId"))
        }, c.recommend = function(a) {
          if (g = c.recommendType = a, c.pageNo = 1, "h5" === a) {
            if ("h5" === h) return;
            c.changeLocation && f.path("show/recommend/h5", !1), i(c.pageNo),
              h = "h5"
          } else if ("print" === a) {
            if ("print" === h) return;
            c.changeLocation && f.path("show/recommend/print", !1), d.getPrintRecommend(
              c.pageNo, c.pageSize), h = "print"
          }
        }, c.$on("printRecommend.print", function(a, b) {
          c.recommendList = b.list, c.totalItems = b.map.total, c.currentPage =
            b.map.pageNo, c.allPageCount = b.map.total, c.toPage = b.map.pageNo;
          for (var d = 0; d < c.recommendList.length; d++) c.recommendList[
              d].headImg ? 0 === c.recommendList[d].headImg.indexOf(
              "http://") ? c.recommendList[d].headImg = c.recommendList[d].headImg :
            c.recommendList[d].headImg = PREFIX_FILE_HOST + c.recommendList[
              d].headImg : c.recommendList[d].headImg = HB_STATIC +
            "assets/images/xiaotouxiang.png"
        }), c.preview = function(a) {
          if ("h5" === g) window.open(PREFIX_SHOW_HOST + "/v/" + a, "_blank");
          else if ("print" === g) {
            var b = $("#preview_wrap"),
              c = $("#pc_preview");
            c.attr("src", PREFIX_HOST + "/print/share.html?code=" + a), b.show(),
              b.find("span").click(function() {
                b.hide(), c.attr("src", ""), $(this).unbind("click")
              })
          }
        }, c.pageChanged = function(a) {
          return 1 > a || a > c.totalItems / 16 + 1 ? void alert("此页超出范围") :
            void("h5" === g ? i(a) : "print" === g && d.getPrintRecommend(a,
              c.pageSize))
        }
    }
  ]).directive("eqdCommonRecommend", [function() {
    function a(a, b, c) {}
    return {
      restrict: "E",
      templateUrl: "show/recommend/commonRecommend.tpl.html",
      controller: "CommonRecommendCtrl",
      scope: {
        filter: "=",
        recommendType: "@category",
        changeLocation: "="
      },
      link: a
    }
  }]), angular.module("recommend", ["commonRecommend"]).controller(
    "RecommendCtrl", ["$scope", "$routeParams", function(a, b) {
      a.category = b.category || "h5"
    }]), angular.module("search", ["services.show", "services.activity",
    "app.directives.addBanner"
  ]), angular.module("search").controller("SearchCtrl", ["$rootScope", "$http",
    "$scope", "showService", "activityService", "$location", "$routeParams",
    "security",
    function(a, b, c, d, e, f, g, h) {
      var i = {
        name: "",
        pageNo: 1,
        pageSize: 16
      };
      c.name = g.name, c.pageNo = 1, c.pageSize = 16, c.val = c.name, i.name =
        c.name, c.EnterPress = function(a, b) {
          var d = a || window.event;
          13 === d.keyCode && c.submit(b)
        }, c.submit = function(a) {
          c.name = a, a ? f.path("show/search/" + c.name) : f.path("show")
        };
      var j = function(a) {
        d.search(a), c.$on("searchList", function(a, b) {
          c.searchList = b.list, c.totalItems = b.map.total, c.currentPage =
            b.map.pageNo, c.toPage = b.map.pageNo;
          for (var d = 0; d < c.searchList.length; d++) c.searchList[d]
            .headImg ? 0 === c.searchList[d].headImg.indexOf("http://") ?
            c.searchList[d].headImg = c.searchList[d].headImg : c.searchList[
              d].headImg = PREFIX_FILE_HOST + c.searchList[d].headImg :
            c.searchList[d].headImg = HB_STATIC +
            "assets/images/xiaotouxiang.png"
        })
      };
      j(i), c.pageChanged = function(a) {
        return 1 > a || a > c.totalItems / 16 + 1 ? void alert("此页超出范围") :
          (i.pageNo = a, void j(i))
      }, c.userTpl = function(b) {
        f.path("/scene"), a.tplId = b
      }
    }
  ]),

    angular.module("services.activity", []).factory("activityService", [
    "$rootScope", "$http",
    function(a, b) {
      var c = {};
      return c.getActiveList = function(c, d, e, f) {
        var g = PREFIX_S2_URL + "index.php?c=eqs&a=activity_info";
        return c && (g += /\?/.test(g) ? "&" : "?", g += "joinNum=" + c), d &&
          (g += /\?/.test(g) ? "&" : "?", g += "recommend=" + d), e && (g +=
            /\?/.test(g) ? "&" : "?", g += "pageNo=" + e), f && (g += /\?/.test(
            g) ? "&" : "?", g += "pageSize=" + f), b({
            method: "GET",
            url: g
          }).then(function(b) {
            if (b.data.success) {
              var c = b;
              a.$broadcast("activeList", c)
            }
          })
      }, c.activitySceneList = function(a, c, d, e) {
        var f = PREFIX_S2_URL +
          "index.php?c=eqs&a=activity_info/scene?promId=" + a;
        return c && (f += /\?/.test(f) ? "&" : "?", f += "recommend=" + c),
          d && (f += /\?/.test(f) ? "&" : "?", f += "pageNo=" + d), e && (f +=
            /\?/.test(f) ? "&" : "?", f += "pageSize=" + e), b({
            method: "GET",
            url: f
          })
      }, c.activityMes = function(c) {
        var d = PREFIX_S2_URL + "index.php?c=eqs&a=activity_info/info?id=" +
          c;
        return b({
          method: "GET",
          url: d
        }).then(function(b) {
          if (b.data.success) {
            var c = b;
            a.$broadcast("activeMes", c)
          }
        })
      }, c
    }
  ])

    , angular.module("services.configSer", []).factory("configSerService", [
    "$http",
    function(a) {
      var b = function(b) {
          var c = PREFIX_S2_URL + "index.php?c=ad&a=friendlinks?pageCode=" +
            b;
          return a({
            method: "GET",
            url: c
          })
        },
        c = function(b, c) {
          var d = PREFIX_S2_URL + "index.php?c=ad&a=banners&pageCode=" + b;
          c && (d += "&userType=" + c);
          new Date;
          return a({
            method: "GET",
            url: d
          })
        };
      return {
        getFriendLinks: b,
        getActivityBanner: c
      }
    }
  ]), angular.module("services.show", []).factory("showService", ["$rootScope",
    "$q", "$http",
    function(a, b, c) {
      var d = {};
      return d.getPageTagLabel = function(a) {
        var b = "index.php?c=upfile&a=systag&type=2";
        null !== a && (b += (/\?/.test(b) ? "&" : "?") + "bizType=" + a);
        new Date;
        return c({
          method: "GET",
          url: PREFIX_S2_URL + b
        })
      }, d.getSceneList = function(b, d, e, f, g) {
        var h = PREFIX_S2_URL + "index.php?c=eqs&a=promotion";
        return b && (h += /\?/.test(h) ? "&" : "?", h += "template=" + b),
          d && (h += /\?/.test(h) ? "&" : "?", h += "recommend=" + d), e &&
          (h += /\?/.test(h) ? "&" : "?", h += "tagId=" + e), f && (h +=
            /\?/.test(h) ? "&" : "?", h += "pageNo=" + f), g && (h += /\?/.test(
            h) ? "&" : "?", h += "pageSize=" + g), c({
            method: "GET",
            url: h
          }).then(function(b) {
            if (b.data.success) {
              var c = b.data;
              a.$broadcast("sceneList", c)
            }
          })
      }, d.getPrintRecommend = function(d, e) {
        var f = PREFIX_S2_URL + "eqs/show/print/list";
        return d && (f += /\?/.test(f) ? "&" : "?", f += "pageNo=" + d), e &&
          (f += /\?/.test(f) ? "&" : "?", f += "pageSize=" + e), c({
            method: "GET",
            url: f
          }).then(function(b) {
            var c = b.data;
            return a.$broadcast("printRecommend.print", c), c
          })["catch"](function(a) {
            b.reject(a)
          })
      }, d.search = function(b) {
        var d = "index.php?c=eqs&a=search";
        return c({
          method: "POST",
          url: PREFIX_S2_URL + d,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          data: $.param(b)
        }).then(function(b) {
          if (b.data.success) {
            var c = b.data;
            a.$broadcast("searchList", c)
          }
        })
      }, d
    }
  ]), 


  angular.module("scene.create.hoverElement", []).directive(
    "hoverElement", [function() {
      function a(a, c) {
        var d, e = $('<div class="blink-element"></div>'),
          f = $("#inside_" + a.id);
        "" + f.attr("ctype") == "4" ? $("#tip_" + a.id).html("图片") : "" + f.attr(
          "ctype") == "2" ? $("#tip_" + a.id).html("文字") : "" + f.attr(
          "ctype") == "3" ? $("#tip_" + a.id).html("随机图片") : "" + f.attr(
          "ctype") == "h" ? $("#tip_" + a.id).html("形状") : "" + f.attr(
          "ctype") == "x" && $("#tip_" + a.id).html("秀字体"), c.hover(
          function() {
            b = $("#inside_" + a.id), b.find(".blink-element").length || e.appendTo(
              b), d = setInterval(function() {
              e.toggleClass("red-border")
            }, 1e3)
          },
          function() {
            e.remove(), clearInterval(d)
          })
      }
      var b;
      return {
        restrict: "EA",
        scope: {
          id: "="
        },
        link: a
      }
    }]), angular.module("common.directives.inputColor", []).controller(
    "inputColorCtrl", ["$scope", "$attrs", function(a, b) {
      a.x = b.x || 151, a.y = b.y || -2, a.colorMode = b.colorMode || "rgba"
    }]).directive("eqdInputColor", function() {
    return {
      restrict: "E",
      templateUrl: tplUrl + "directives/inputColor.tpl.html",
      replace: !0,
      controller: "inputColorCtrl",
      scope: {
        selectColor: "=",
        defaultColor: "="
      }
    }
  }), angular.module("app.directives.keymap", ["services.scene",
    "services.history", "services.select"
  ]).directive("eqxKeymap", ["sceneService", "historyService", "selectService",
    function(a) {
      return {
        restrict: "A",
        link: function(b) {
          var c = $(document);
          b.$on("$destroy", function() {
            c.unbind("keydown")
          }), c.unbind("keydown").keydown(function(c) {
            if ((c.ctrlKey || c.metaKey) && 90 === c.keyCode && a.historyBack(), (
                c.ctrlKey || c.metaKey) && 89 === c.keyCode && a.historyForward(), (
                c.ctrlKey || c.metaKey) && 86 === c.keyCode) {
              if ($("#btn-toolbar").length || $(".modal-dialog").length)
                return;
              a.getCopy() && a.pasteElement()
            }
            if ((c.ctrlKey || c.metaKey) && 67 === c.keyCode) {
              if ($("#btn-toolbar").length || $(".modal-dialog").length)
                return;
              a.copyElement()
            }
            b.$apply()
          })
        }
      }
    }
  ]), angular.module("app.directives.limitInput", []).directive("limitInput",
    function() {
      return {
        require: "ngModel",
        link: function(a, b, c, d) {
          "transform" === c.cssItem && a.$on("updateTransform", function(b, c,
            e) {
            e === a.elemDef.id && (d.$setViewValue(parseInt(c, 10)), d.$render())
          }), "borderRadius" === c.cssItem && a.$on("updateMaxRadius",
            function(b, c) {
              a.maxRadius = parseInt(Math.min($(c).outerWidth(), $(c).outerHeight()) /
                2 + 10, 10), a.maxRadius < a.model.borderRadius && (d.$setViewValue(
                a.maxRadius), d.$render()), a.$apply()
            }), a.$watch(function() {
            return $(b).val()
          }, function(a) {
            Math.abs(a) > c.max && (d.$setViewValue(c.max), d.$render()),
              Math.abs(a) < c.min && (d.$setViewValue(c.min), d.$render())
          })
        }
      }
    }), angular.module("app.directives.lineChart", []).directive("lineChart",
    function() {
      return {
        restrict: "EA",
        link: function(a, b, c) {
          var d, e;
          a.$watch(function() {
            return c.data
          }, function() {
            c.data && (d = JSON.parse(c.data)), e ? (e.destroy(), e = new Chart(
              b[0].getContext("2d")).Line(d, {
              scaleFontColor: "#fff"
            })) : e = new Chart(b[0].getContext("2d")).Line(d, {
              scaleFontColor: "#fff"
            })
          })
        }
      }
    }), angular.module("app.directives.loading", []).directive("loginLoading",
    function() {
      return {
        restrict: "EA",
        link: function(a, b) {
          a.$on("loginLoading", function() {
            var a = $(
              '<div class="homeMask" style="position: absolute;width: 100%;top:0;bottom:0;background-color:#ccc;opacity:0.8;">正在跳转，请稍后...</div>'
            );
            a.appendTo($(b))
          })
        }
      }
    }), angular.module("app.directives.comp.editor", []).directive("mapEditor",
    function() {
      return {
        restrict: "AE",
        templateUrl: tplUrl + "directives/mapeditor.tpl.html",
        link: function(a) {
          var b = new BMap.Map("l-map");
          b.centerAndZoom(new BMap.Point(116.404, 39.915), 15);
          var c = {
              onSearchComplete: function(a) {
                if (d.getStatus() === BMAP_STATUS_SUCCESS) {
                  for (var b = [], c = 0; c < a.getCurrentNumPois(); c++) b
                    .push(a.getPoi(c).title + ", " + a.getPoi(c).address);
                  document.getElementById("r-result").innerHTML = b.join(
                    "<br/>")
                }
              }
            },
            d = new BMap.LocalSearch(b, c);
          a.searchAddress = function() {
            d.search(a.address)
          }
        }
      }
    }), angular.module("app.directives.notification", []).directive(
    "notificationFadeout", ["i18nNotifications", function(a) {
      return {
        restrict: "EA",
        link: function(b, c) {
          var d = $(c);
          d.fadeOut(4e3, function() {
            a.remove(b.notification)
          })
        }
      }
    }]), angular.module("app.directives.pageTplTypes", []).directive(
    "pageTplTypes", ["pageTplService", function(a) {
      return {
        restrict: "EA",
        replace: !0,
        templateUrl: tplUrl + "directives/page-tpl-types.tpl.html",
        link: function(b) {
          a.getPageTplTypes().then(function(a) {
            a.data.list && a.data.list.length > 0 ? b.pageTplTypes = a.data
              .list : b.pageTplTypes = []
          })
        }
      }
    }]), angular.module("app.directives.pieChart", []).directive("pieChart",
    function() {
      return {
        restrict: "EA",
        link: function(a, b, c) {
          var d, e;
          a.$watch(function() {
            return c.data
          }, function() {
            c.data && (e = JSON.parse(c.data)), d ? (d.destroy(), d = new Chart(
              b[0].getContext("2d")).Pie(e)) : d = new Chart(b[0].getContext(
              "2d")).Pie(e)
          })
        }
      }
    }), angular.module("app.directives.qrcode", []).directive("qrCode",
    function() {
      return {
        restrict: "A",
        scope: {
          qrUrl: "@"
        },
        link: function(a, b, c) {
          var d = new RegExp("^" + PREFIX_HOST + "/v/");
          a.$watch("qrUrl", function(a) {
            $("canvas", b).length > 0 && $("canvas", b).remove(), a && (d
              .test(a) && (a = a.replace(PREFIX_HOST, PREFIX_HOST_ARRAY[
                Math.floor(12 * Math.random()) % 12])), $(b).qrcode({
                render: "canvas",
                width: 180,
                height: 180,
                text: a + (/\?/.test(a) ? "&" : "?") + "eqrcode=1"
              }))
          })
        }
      }
    }).directive("qrCodeSize", function() {
    return {
      restrict: "A",
      scope: {
        qrUrl: "@"
      },
      link: function(a, b, c) {
        var d = parseInt(c.qrCodeSize, 10);
        a.$watch("qrUrl", function(a) {
          $("canvas", b).length > 0 && $("canvas", b).remove(), a && $(
            b).qrcode({
            render: "canvas",
            width: d,
            height: d,
            text: a + (/\?/.test(a) ? "&" : "?") + "eqrcode=1"
          })
        })
      }
    }
  }).directive("downloadCanvas", function() {
    return {
      restrict: "EA",
      link: function(a, b) {
        a.$on("download.canvas", function(c, d) {
          var e, f = "png";
          $.each($(b).find(".qr-size"), function(a, b) {
              $(b).attr("qr-code-size") === d && (e = $(b).find(
                "canvas").get(0))
            }), d === $(b).find(".qr-size").attr("qrCodeSize") &&
            console.log(d);
          var g = document.createElement("a"),
            h = document.createEvent("MouseEvents"),
            i = e.toDataURL("image/png"),
            j = function(a) {
              a = a.toLowerCase().replace(/jpg/i, "jpeg");
              var b = a.match(/png|jpeg|bmp|gif/)[0];
              return "image/" + b
            };
          i = i.replace(j(f), "image/octet-stream"), h.initEvent(
              "click", !0, !0), g.download = a.scene.code + ".png", g.href =
            i, g.dispatchEvent(h)
        })
      }
    }
  }), angular.module("app.directives.responsiveImage", []).directive(
    "responsiveImage",
    function() {
      return {
        restrict: "EA",
        scope: {
          file: "="
        },
        link: function(a, b) {
          "" + a.fileType != "0" && (b.find("img").length ? $element = b.find(
            "img") : "IMG" === b.get(0).nodeName.toUpperCase() && (
            $element = b), $element.bind("load", function() {
            $(this).removeAttr("style");
            var b = $(this).parent("li").width(),
              c = $(this).parent("li").height();
            a.file && (a.file.shape = {
                width: $(this).width(),
                height: $(this).height()
              }), this.width <= b && this.height <= c ? (this.style.top =
                "50%", this.style.marginTop = "-" + this.height / 2 +
                "px", this.style.left = "50%", this.style.marginLeft =
                "-" + this.width / 2 + "px") : this.width > this.height ?
              (this.style.width = b + "px", this.height = this.height *
                b / this.width, this.style.top = "50%", this.style.marginTop =
                "-" + this.height / 2 + "px") : (this.style.height = c +
                "px", this.width = this.width * c / this.height, this.style
                .left = "50%", this.style.marginLeft = "-" + this.width /
                2 + "px")
          }))
        }
      }
    }), angular.module("common.directives.scroll", []).directive("eqdScroll",
    function() {
      var a = {
        mouseWheel: !0,
        scrollbars: !0,
        interactiveScrollbars: !0,
        click: !0,
        bounce: !1
      };
      return function(b, c, d) {
        c.css({
            position: "relative",
            overflow: "hidden"
          }), delete a.disableMouse, delete a.preventDefaultException, d.preventException &&
          (a.preventDefaultException = {
            tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|DIV|SPAN|EM|A|LI|B|IMG)$/
          }), "true" === d.disableMouse && (a.disableMouse = !0);
        var e, f = new IScroll(c.get(0), a),
          g = b.$watch(function() {
            clearTimeout(e), e = setTimeout(function() {
              f.refresh()
            }, 100)
          });
        d.refresh && (f.on("scrollStart", function() {
          c.children().on("mousewheel", function() {
            f.y <= f.maxScrollY + 200 && b.$eval(d.refresh)
          })
        }), f.on("scrollEnd", function() {
          c.children().unbind("mousewheel")
        })), d.changePos && f.on("scrollEnd", function() {
          b.pos = {
            y: f.y
          }, b.$eval(d.changePos)
        }), c.on("$destroy", function() {
          f.destroy(), f = null, g(), clearTimeout(e)
        }), b.$on("scroll.refresh." + d.scroll, function() {
          e = setTimeout(function() {
            f.refresh()
          }, 100)
        }), b.$on("scroll.scrollTo", function(a, b, c) {
          f.scrollTo(b, c)
        })
      }
    }),


    angular.module("common.directives.dropDown", []).directive("eqdSelect", [
    "$rootScope",
    function(a) {
      function b(b, c) {
        function d() {
          f.unbind("click", d), g.removeClass("visible")
        }

        function e(a) {
          index = a.index(), b.current = b.list[index], g.removeClass(
            "visible")
        }
        var f = (tabletCheck(), $(document)),
          g = c.find(".eqc-drop-down-list"),
          h = g.find(".iScrollIndicator");
        c.on("$destroy", function() {
          f.unbind("click", d)
        }), b.showList = function(c) {
          return c.stopPropagation(), g.hasClass("visible") ? void d() : (a
            .$broadcast("iscroll.refresh." + b.scrollType), $(
              ".eqc-drop-down-list").removeClass("visible"), g.addClass(
              "visible"), f.click(d), void h.click(function(a) {
              a.stopPropagation()
            }))
        }, b.selectItem = function(a) {
          a.stopPropagation();
          var b = a.target,
            c = b.tagName.toLowerCase(),
            d = $(b);
          "li" === c ? e(d) : "div" === c && (d = d.closest("li"), e(d))
        }
      }

      return {
        restrict: "E",
        replace: !0,
        templateUrl: a.tplUrl + "directives/select.tpl.html",
        scope: {
          list: "=",
          current: "=",
          scrollType: "@",
          fontFamily: "=",
          isBorder: "@",
          x: "@"
        },
        link: b
      }
    }
  ]).controller("SimpleSelectController", ["$scope", "$element", "$attrs",
    "$parse", "$timeout",
    function(a, b, c, d, e) {
      var f = this;
      a.list = [], a.current = null, f.addSelectChoice = function(b) {
        a.list.push(b)
      }, f.removeSelectChoice = function(b) {
        var c = a.list.indexOf(b); - 1 !== c && a.list.splice(c, 1)
      };
      var g;
      f.setObjectConfig = function(a) {
        g === undefined && (g = a)
      }, a.setDefaultSelectedValue = function() {
        angular.forEach(a.list, function(b) {
          b.value == a.model && (a.current = b)
        })
      };
      var h = a.$watchCollection("list", function() {
          a.setDefaultSelectedValue()
        }),
        i = a.$watch("current", function(b) {
          b && a.model != b.value && (a.model = b.value, e(function() {
            c.change && a.$parent.$eval(c.change)
          }, 100))
        }),
        j = a.$watch("model", function(b) {
          b && a.setDefaultSelectedValue()
        });
      a.$on("$destroy", function() {
        h(), i(), j()
      }), a.$watch("model", function(b, c) {
        b != c && angular.forEach(a.list, function(b) {
          b.value == a.model && (a.current = b)
        })
      })
    }
  ]).directive("eqxSelect", ["$compile", function(a) {
    var b =
      '<eqd-select list="list" class="select-contain" current="current"></eqd-select>';
    return {
      restrict: "E",
      scope: {
        model: "="
      },
      controller: "SimpleSelectController",
      compile: function(c, d) {
        var e = d["class"];
        return c.removeClass(e),
          function(c, d) {
            d.append(a(angular.element(b).addClass(e))(c))
          }
      }
    }
  }]).directive("eqxSelectOption", ["$parse", "$interpolate", function(a, b) {
    return {
      restrict: "E",
      require: "^eqxSelect",
      compile: function(c, d) {
        var e, f;
        return d.ngRepeat && (e = a(d.value), f = b(c.html())),
          function(a, b, c, d) {
            b.css("display", "none");
            var g;
            if (e) {
              var h = e(a);
              d.setObjectConfig(angular.isObject(h)), g = {
                name: f(a),
                value: h
              }
            } else g = {
              name: b.html(),
              value: a.$parent.$eval(c.value)
            };
            d.addSelectChoice(g), b.on("$destroy", function() {
              d.removeSelectChoice(g)
            })
          }
      }
    }
  }]), angular.module("app.directives.numChangeAnim", []).directive(
    "numChangeAnim", ["$filter", function(a) {
      return {
        restrict: "A",
        scope: {
          content: "@"
        },
        link: function(b, c) {
          function d(a, b) {
            return Math.floor(a + Math.random() * (b - a))
          }

          function e(a, b) {
            a = a > 0 ? a : 1;
            for (var c = Math.floor(Math.log10(a)), e = Math.floor(a / Math
                .pow(10, c)), f = 0, g = 10, h = function(h) {
                setTimeout(function() {
                  if (10 > g) f = h;
                  else {
                    var i = c > h ? h : c,
                      j = Math.pow(10, i) * e;
                    j = j.toString().length == a.toString().length ?
                      a : j, f = d(f, j)
                  }
                  b(f, 9 == h)
                }, (h * h + h + 2) / 2 * 30)
              }, i = 0; g > i; i++) h(i)
          }

          function f(b, c) {
            $(b).children("span").text(a("number")(c))
          }
          b.$watch("content", function(a) {
            if (a) {
              var b = parseInt(a, 10);
              e(b, function(a, d) {
                f(c, a), d && (f(c, b), $(c).addClass("heartbeat").css({
                  "animation-duration": "1s"
                }))
              })
            }
          })
        }
      }
    }]), angular.module("app.directives.style", []).directive("panelDraggable",
    function() {
      return {
        restrict: "A",
        link: function(a, b) {
          a.$on("$destroy", function() {
            $(b).draggable(), $(b).draggable("destroy"), b = null
          }), b.on("$destroy", function() {
            $(b).draggable(), $(b).draggable("destroy"), b = null
          }), $(b).draggable(), $(window).bind("resize", function() {
            $(b).css({
              left: $(document).width() - 444,
              top: 50
            })
          })
        }
      }
    }),
  function() {
    var a = {};
    angular.forEach(["clipPath", "colorProfile", "src", "cursor", "fill",
      "filter", "marker", "markerStart", "markerMid", "markerEnd", "mask",
      "stroke"
    ], function(b) {
      a[b] = ["$rootScope", "$location", "$interpolate", "$sniffer",
        "urlResolve", "computeSVGAttrValue", "svgAttrExpressions",
        function(a, c, d, e, f, g, h) {
          return {
            restrict: "A",
            link: function(d, f, i) {
              function j() {
                var a = g(k);
                a && i[b] !== a && i.$set(b, a)
              }
              var k;
              h.SVG_ELEMENT.test(f[0] && f[0].toString()) && c.$$html5 &&
                e.history && (k = i[b], i.$observe(b, j), a.$on(
                  "$locationChangeSuccess", j))
            }
          }
        }
      ]
    }), angular.module("ngSVGAttributes", []).factory("urlResolve", [function() {
      var a = document.createElement("a");
      return function(b) {
        return a.setAttribute("href", b), a
      }
    }]).value("svgAttrExpressions", {
      FUNC_URI: /^url\((.*)\)$/,
      SVG_ELEMENT: /SVG[a-zA-Z]*Element/,
      HASH_PART: /#.*/
    }).factory("computeSVGAttrValue", ["$location", "$sniffer",
      "svgAttrExpressions", "urlResolve",
      function(a, b, c, d) {
        return function(b) {
          var e, f;
          return (e = c.FUNC_URI.exec(b)) && (f = 0 === e[1].indexOf("#") ?
              a.absUrl().replace(c.HASH_PART, "") + e[1] : d(e[1])), f ?
            "url(" + f + ")" : null
        }
      }
    ]).directive(a).directive("use", ["$rootScope", function(a) {
      return {
        restrict: "E",
        link: function(b, c) {
          function d() {
            var a = c.attr("xlink:href"),
              b = a.split("#")[1];
            b && c.attr("xlink:href", document.location + "#" + b)
          }
          d(), a.$on("$locationChangeSuccess", d)
        }
      }
    }])
  }(), angular.module("app.directives.switchInput", []).directive("switchInput",
    function() {
      function a(a, b) {
        b.hover(function() {
          a.obj.showinput = !0;
          var c = b.find("input");
          setTimeout(function() {
            c.focus(), c.select()
          }, 0), a.$apply()
        }, function() {
          a.obj.showinput = !1, a.$apply()
        })
      }
      return {
        restrict: "EA",
        scope: {
          obj: "="
        },
        link: a
      }
    }), angular.module("app.directives.component", ["services.scene",
    "services.select", "scene.create.console.pictures", "scene.edit.trigger"
  ]).directive("compDraggable", function() {
    return {
      restrict: "A",
      link: function(a, b, c) {
        a.$on("$destroy", function() {
          $(b).draggable(), $(b).draggable("destroy"), b = null
        }), b.on("$destroy", function() {
          $(b).draggable(), $(b).draggable("destroy"), b = null
        }), $(b).draggable({
          revert: !1,
          stack: ".comp-draggable",
          helper: "panel" == c.compDraggable || "page" == c.compDraggable ?
            "clone" : "",
          appendTo: "parent",
          containment: "panel" == c.compDraggable || "page" == c.compDraggable ?
            "" : "parent",
          zIndex: 1049,
          opacity: .35,
          stop: function(a) {
            $(a.toElement).one("click", function(a) {
              a.stopImmediatePropagation()
            })
          }
        })
      }
    }
  }).directive("compDroppable", function() {
    return {
      restrict: "A",
      link: function(a, b) {
        a.$on("$destroy", function() {
          $(b).droppable(), $(b).droppable("destroy"), b = null
        }), b.on("$destroy", function() {
          $(b).droppable(), $(b).droppable("destroy"), b = null
        });
        var c = b.height(),
          d = c / 2 - 260 + 50,
          e = b.width(),
          f = e / 2 - 187 + 288 + 27;
        $(b).droppable({
          accept: ".comp-draggable",
          hoverClass: "drop-hover",
          drop: function(b, c) {
            if (3 != c.draggable.attr("ctype") && "trigger" != c.draggable
              .attr("ctype")) {
              var e = {
                left: c.offset.left - f + "px",
                top: c.offset.top - d + "px"
              };
              "panel" == c.draggable.attr("comp-draggable") ? a.createComp(
                c.draggable.attr("ctype"), c.draggable.attr("font"),
                e) : a.updateCompPosition(c.draggable.attr("id"),
                null, e)
            } else "trigger" == c.draggable.attr("ctype") ? a.openTriggerMode() :
              a.createComp(3)
          }
        })
      }
    }
  }).directive("compSortable", function() {
    return {
      restrict: "A",
      link: function(a, b) {
        $(b).sortable({
          axis: "y",
          update: function() {}
        })
      }
    }
  }).directive("compResizable", function() {
    return {
      restrict: "A",
      link: function(a, b) {
        $(b).resizable({
          autoHide: !1,
          containment: "parent",
          stop: function(b, c) {
            if ("4" == $(c.element).attr("ctype").charAt(0) || "n" ==
              $(c.element).attr("ctype").charAt(0)) {
              var d = {
                width: c.size.width,
                height: c.size.height,
                imgStyle: {
                  width: c.element.find("img").width(),
                  height: c.element.find("img").height(),
                  marginTop: c.element.find("img").css("marginTop"),
                  marginLeft: c.element.find("img").css(
                    "marginLeft")
                }
              };
              a.updateCompSize(c.element.attr("id"), d)
            } else a.updateCompSize(c.element.attr("id"), c.size);
            $(b.toElement).one("click", function(a) {
              a.stopImmediatePropagation()
            })
          },
          resize: function(a, c) {
            var d = $(b).find("img").width() / $(b).find("img").height();
            if ("4" == $(c.element).attr("ctype").charAt(0) || "n" ==
              $(c.element).attr("ctype").charAt(0)) {
              var e = c.size.width / c.size.height,
                f = c.element.find("img");
              d >= e ? (f.outerHeight(c.size.height), f.outerWidth(c.size
                .height * d), f.css("marginLeft", -(f.outerWidth() -
                c.size.width) / 2), f.css("marginTop", 0)) : (f.outerWidth(
                  c.size.width), f.outerHeight(c.size.width / d), f
                .css("marginTop", -(f.outerHeight() - c.size.height) /
                  2), f.css("marginLeft", 0))
            } else c.element.find(".element").outerWidth(c.size.width),
              c.element.find(".element").outerHeight(c.size.height)
          }
        })
      }
    }
  }).directive("photoDraggable", function() {
    return {
      restrict: "A",
      link: function(a, b) {
        a.$on("$destroy", function() {
          $(b).draggable(), $(b).draggable("destroy"), b = null
        }), b.on("$destroy", function() {
          $(b).draggable(), $(b).draggable("destroy"), b = null
        }), $(b).draggable({
          revert: !1,
          helper: "clone",
          appendTo: ".img_list",
          zIndex: 1049,
          opacity: .35,
          stop: function(a) {
            $(a.toElement).one("click", function(a) {
              a.stopImmediatePropagation()
            })
          }
        })
      }
    }
  }).directive("cropDroppable", function() {
    return {
      restrict: "A",
      link: function(a, b) {
        a.$on("$destroy", function() {
          $(b).droppable(), $(b).droppable("destroy"), b = null
        }), b.on("$destroy", function() {
          $(b).droppable(), $(b).droppable("destroy"), b = null
        }), $(b).droppable({
          accept: "li",
          hoverClass: "drop-hover",
          drop: function(b, c) {
            a.preSelectImage(c.draggable.attr("photo-draggable"))
          }
        })
      }
    }
  }).service("Point", function() {
    function a(a, b) {
      this.x = a, this.y = b
    }
    return a.prototype.add = function(b, c) {
      return new a(this.x + b, this.y + c)
    }, a.prototype.middle = function(b) {
      return new a((this.x + b.x) / 2, (this.y + b.y) / 2)
    }, a.prototype.detectionPointA = function(a) {
      this.x = a.x < this.x ? a.x : this.x, this.y = a.y < this.y ? a.y :
        this.y
    }, a.prototype.detectionPointB = function(a) {
      this.x = a.x > this.x ? a.x : this.x, this.y = a.y > this.y ? a.y :
        this.y
    }, a
  }).factory("DetectionBox", ["Point", "editService", function(a, b) {
    function c(a) {
      this.element = a, this.init()
    }
    return c.prototype.init = function() {
      var c = this.element.position(),
        d = $("div[edit-workspace]").attr("scale");
      this.startPointA = new a(Math.ceil(c.left), Math.ceil(c.top)), this
        .originPointA = new a(Math.ceil(c.left / d), Math.ceil(c.top / d));
      var e = this.element.get(0);
      this.startPosition = {
        top: parseInt(e.style.top, 10) || 0,
        left: parseInt(e.style.left, 10) || 0
      };
      var f = /[0-9]*[.]*[0-9]*deg/.exec(e.style.transform || e.style.webkitTransform ||
          e.style.mozTransform || e.style.msTransform || e.style.oTransform ||
          ""),
        g = f && f.length ? f[0] : "0";
      this.angle = parseInt(g, 10), this.radian = 2 * this.angle * Math.PI /
        360;
      var h = this.element.width() * b.currentScale,
        i = this.element.height() * b.currentScale;
      this.elementWidth = h, this.elementHeight = i, this.left = this.startPosition
        .left, this.top = this.startPosition.top, this.ratio = h / i,
        this.width = Math.abs(h * Math.cos(this.radian)) + Math.abs(i *
          Math.sin(this.radian)), this.height = Math.abs(h * Math.sin(
          this.radian)) + Math.abs(i * Math.cos(this.radian)), this.startPointB =
        this.startPointA.add(this.width, this.height), this.originPointB =
        this.originPointA.add(this.width / b.currentScale, this.height /
          b.currentScale), this.startPointO = this.startPointA.middle(
          this.startPointB)
    }, c.prototype.getID = function() {
      return this.element.attr("id")
    }, c.prototype.measure = function() {
      return {
        x: this.startPointA.x,
        y: this.startPointA.y,
        width: this.width,
        height: this.height
      }
    }, c
  }]).service("panStateTracker", function() {
    var a = {},
      b = {};
    return a.clear = function() {
      b = {}
    }, a.register = function(a) {
      b[a.attr("id")] = a
    }, a.isElementHasBeenRegisted = function(a) {
      return !!b[a.attr("id")]
    }, a.remove = function(a) {
      delete b[a.attr("id")]
    }, a.forEach = function(a) {
      angular.forEach(b, a)
    }, a
  }).controller("MouseCompSelectController", ["$scope", "$element", "Point",
    "DetectionBox", "panStateTracker", "selectService", "editService",
    function(a, b, c, d, e, f, g) {
      function h(a, d, e, f, g) {
        b.get(0).style.position = "relative", this.startPositionX = a, this.startPositionY =
          d, this.width = e, this.height = f, this.selectAreaPointA = new c(a,
            d), this.selectAreaPointB = new c(a + e, d + f), this.startFlag =
          g, this.selectAreaTemplate = b.find(".edit-area-select-container"),
          this.selectAreaTemplate.length || (this.selectAreaTemplate = $(
            '<div class="edit-area-select-container"></div>'), b.append(
            this.selectAreaTemplate));
        var h = b.offset(),
          i = $("#nr").offset();
        this.offset = h, this.containerOffset = i, $(window).resize(function() {
          angular.extend(h, b.offset()), angular.extend(i, $("#nr").offset())
        })
      }
      b.css("user-select", "none");
      var i = this;
      i.allComponents = [], i.selectedComponents = [], h.prototype.selectStart =
        function(a, c) {
          angular.extend(this.offset, b.offset()), angular.extend(this.containerOffset,
              $("#nr").offset()), i.allComponents = [], e.forEach(function(a) {
              i.allComponents.push(a)
            }), this.startPositionX = a, this.startPositionY = c, this.startFlag = !
            0, this.updateSelectedElements()
        }, h.prototype.isSelectStarted = function() {
          return this.startFlag
        }, h.prototype.selectMove = function(a) {
          this.width = a.clientX - this.startPositionX, this.height = a.clientY -
            this.startPositionY, this.updateCurrentPosition(), this.width > 4 &&
            this.height > 4 && (this.updateSelectArea(), this.updateSelectedElements())
        }, h.prototype.selectEnd = function() {
          this.startPositionX = this.startPositionY = this.width = this.height =
            0, this.startFlag = !1, this.updateCurrentPosition(), this.updateSelectArea()
        }, h.prototype.getLocalPoint = function(a) {
          return new c(a.x - this.offset.left, a.y - this.offset.top)
        }, h.prototype.updateSelectArea = function() {
          var a = this.getLocalPoint(this.selectAreaPointA);
          this.selectAreaTemplate.css("left", a.x), this.selectAreaTemplate.css(
              "top", a.y), this.selectAreaTemplate.height(this.height), this.selectAreaTemplate
            .width(this.width)
        }, h.prototype.updateCurrentPosition = function() {
          this.selectAreaPointA.x = this.width > 0 ? this.startPositionX :
            this.width + this.startPositionX, this.selectAreaPointA.y = this.height >
            0 ? this.startPositionY : this.height + this.startPositionY, this
            .width = Math.abs(this.width), this.height = Math.abs(this.height),
            this.selectAreaPointB.x = this.selectAreaPointA.x + this.width,
            this.selectAreaPointB.y = this.selectAreaPointA.y + this.height
        }, h.prototype.updateSelectedElements = function() {
          i.selectedComponents = [];
          var a = this,
            b = f.getElements();
          angular.forEach(i.allComponents, function(c) {
            var d = c.attr("id").split("_")[1];
            return a.contains(c) ? (c.children(".bar").show(), void(-1 ===
              b.indexOf(d) && f.addElement(d))) : (-1 !== b.indexOf(d) &&
              f.deleteElement(d), void c.children(".bar").hide())
          })
        }, h.prototype.contains = function(a) {
          var b = new d(a),
            e = new c(this.containerOffset.left + b.startPointO.x * g.currentScale,
              this.containerOffset.top + b.startPointO.y * g.currentScale);
          return e.x >= this.selectAreaPointA.x && e.x <= this.selectAreaPointB
            .x && e.y >= this.selectAreaPointA.y && e.y <= this.selectAreaPointB
            .y
        };
      var j = new h(0, 0, 0, 0, !1);
      b.bind("mousedown", function(a) {
        var b = $(a.target);
        $("#nr").find(".mask-trigger").length || b.hasClass("comp-resize") ||
          b.parents("li.comp-resize").length || b.hasClass("ui-draggable") ||
          b.parents(".ui-draggable").length || b.parents("#containment").length ||
          b.parents(".create_left").length || ($("body").css({
            "user-select": "none",
            cursor: "default"
          }), j.selectStart(a.clientX, a.clientY))
      }), b.bind("mousemove", function(a) {
        j.isSelectStarted() && j.selectMove(a)
      }), b.bind("mouseup", function() {
        j.isSelectStarted() && ($("body").css({
          "user-select": "initial",
          cursor: "default"
        }), j.selectEnd())
      })
    }
  ]).directive("mouseCompSelect", [function() {
    return {
      restrict: "A",
      controller: "MouseCompSelectController"
    }
  }]).factory("editAreaBorderCollisionDetector", ["DetectionBox", "Point",
    "editService",
    function(a, b, c) {
      function d() {
        this.editAreaWidth = 320, this.editAreaHeight = 486, this.detectionBoxs = []
      }

      function e() {
        this.editArea = new d
      }
      return d.prototype.initDetectBoxWithElements = function(b) {
        this.detectionBoxs = [];
        var c = this;
        angular.forEach(b, function(b) {
          c.detectionBoxs.push(new a(b))
        })
      }, e.prototype.initWithElements = function(a) {
        this.editArea.initDetectBoxWithElements(a), this.initBigDetectionBoxPoints()
      }, e.prototype.initBigDetectionBoxPoints = function() {
        this.bigDetectionBoxPointA = new b(this.editArea.editAreaWidth,
            this.editArea.editAreaHeight), this.bigDetectionBoxPointB = new b(
            0, 0), this.minimumWidth = this.editArea.editAreaWidth, this.minimumHeight =
          this.editArea.editAreaHeight;
        var a = this;
        angular.forEach(this.editArea.detectionBoxs, function(b) {
          a.bigDetectionBoxPointA.detectionPointA(b.startPointA), a.bigDetectionBoxPointB
            .detectionPointB(b.startPointB), a.minimumWidth = b.elementWidth,
            a.minimumHeight = b.elementHeight
        });
        var c = (this.bigDetectionBoxPointA.x + this.bigDetectionBoxPointB.x) /
          2,
          d = (this.bigDetectionBoxPointA.y + this.bigDetectionBoxPointB.y) /
          2;
        this.bigDetectionBoxPointO = new b(c, d)
      }, e.prototype.refreshBoxInfo = function() {
        angular.forEach(this.editArea.detectionBoxs, function(a) {
          a.init()
        }), this.initBigDetectionBoxPoints()
      }, e.prototype.translateIntoProperMoveDelta = function(a) {
        var b = {
          x: a.deltaX / c.currentScale,
          y: a.deltaY / c.currentScale
        };
        return b
      }, e.prototype.compDragMoveDelta = function(a) {
        return this.translateIntoProperMoveDelta(a)
      }, new e
    }
  ]).controller("MultiCompDragController", ["selectService", "$scope",
    "$element", "editAreaBorderCollisionDetector", "panStateTracker",
    "gridGuide", "$rootScope",
    function(a, b, c, d, e, f, g) {
      e.clear();
      var h = this;
      h.selectedComponents = [], h.initCollisionDetectorWithElements =
        function() {
          h.selectedComponents = [];
          var b = $("#nr");
          angular.forEach(a.getElements(), function(a) {
            h.selectedComponents.push(b.find("#inside_" + a))
          }), d.initWithElements(h.selectedComponents)
        }, h.isKeyboard = !1, h.compDragStart = function(b) {
          a.getElements().length && (h.initCollisionDetectorWithElements(), f
            .guide.start({
              action: "move"
            }), h.isKeyboard = !!b, h.isKeyboard || angular.forEach(h.selectedComponents,
              function(a) {
                a.css("opacity", .35)
              }))
        }, h.compDragMove = function(b) {
          if (a.getElements().length) {
            var c = d.compDragMoveDelta({
              deltaX: b.deltaX,
              deltaY: b.deltaY
            });
            !h.isKeyboard && f.guide.options.snap && f.guide.enforceGuides(c),
              angular.forEach(d.editArea.detectionBoxs, function(a) {
                var b = "translate3d(" + c.x + "px, " + c.y +
                  "px, 0) rotateZ(" + a.angle + "deg)";
                a.element.css("transform", b)
              }), f.guide.sync(c), g.$broadcast("boxOuter")
          }
        }, h.compDragEnd = function(c) {
          if (a.getElements().length) {
            angular.forEach(h.selectedComponents, function(a) {
              a.css("opacity", 1)
            });
            var e = d.compDragMoveDelta({
              deltaX: c.deltaX,
              deltaY: c.deltaY
            });
            !h.isKeyboard && f.guide.options.snap && f.guide.enforceGuides(e);
            var i = d.editArea.detectionBoxs.length;
            angular.forEach(d.editArea.detectionBoxs, function(a, c) {
              var d = "translate3d(0, 0, 0) rotateZ(" + a.angle + "deg)";
              a.element.css("transform", d);
              var f = {
                top: a.startPosition.top + e.y,
                left: a.startPosition.left + e.x
              };
              a.element.css("top", f.top), a.element.css("left", f.left),
                b.updateCompPosition(a.element.attr("id"), f, i - 1 > c)
            }), f.guide.stop(), g.$broadcast("boxOuter")
          }
        }, f.grid.init(c), f.guide.init(c)
    }
  ]).directive("multiCompDrag", function() {
    return {
      restrict: "A",
      controller: "MultiCompDragController"
    }
  }).directive("compDrag", ["panStateTracker", "$rootScope", function(a) {
    return {
      require: "^multiCompDrag",
      restrict: "A",
      link: function(b, c, d, e) {
        if (!a.isElementHasBeenRegisted(c)) {
          if (a.register(c), c.on("$destroy", function() {
              a.remove(c)
            }), c.find("img").length) {
            var f = $(
              '<div class="dragTemplate" style="position: absolute;left: 0;top: 0;right: 0;bottom: 0;background-color: #fff;opacity: 0;"></div>'
            );
            f.bind("dblclick", function() {
              f.siblings(".element").trigger("dblclick")
            }), c.find(".element-box-contents").append(f)
          }
          var g = new Hammer(c.find(".element-box").get(0));
          g.get("pan").set({
            threshold: 0
          }), g.on("panstart", function(a) {
            return $(".edit_area").find(".switch").length ? !1 : c.hasClass(
              "inside-active") ? !1 : (a.preventDefault(), a.srcEvent
              .preventDefault(), $("body").css({
                "user-select": "none",
                cursor: "default"
              }), void e.compDragStart())
          }), g.on("panmove", function(a) {
            return a.preventDefault(), $(".edit_area").find(".switch")
              .length ? !1 : c.hasClass("inside-active") ? !1 : void e
              .compDragMove(a)
          }), g.on("panend", function(a) {
            return $(".edit_area").find(".switch").length ? !1 : c.hasClass(
              "inside-active") ? !1 : (e.compDragEnd(a), $("body").css({
              "user-select": "initial",
              cursor: "default"
            }), void $(a.srcEvent.target).one("click", function(a) {
              return a.stopImmediatePropagation(), a.stopPropagation(),
                a.preventDefault(), !1
            }))
          })
        }
      }
    }
  }]).directive("compRotate", ["$rootScope", "editService", function(a, b) {
    return {
      restrict: "A",
      link: function(c, d) {
        var e = $(d),
          f = $('<div class="bar bar-rotate bar-radius radius-s' + b.scaleIndex +
            " rotate" + b.scaleIndex + '">');
        e.append(f).append('<div class="bar bar-line">');
        var g, h = {},
          i = new Hammer(f.get(0));
        i.get("pan").set({
          threshold: 0
        }), i.on("panstart", function() {
          $("body").css({
            "user-select": "none",
            cursor: 'url("/assets/images/mouserotate.ico"), default'
          });
          e.parent();
          h = {
            x: e.offset().left + e.width() / 2 * b.currentScale,
            y: e.offset().top + e.height() / 2 * b.currentScale
          }
        }), i.on("panmove", function(b) {
          var c = b.center,
            d = c.x - h.x,
            f = c.y - h.y,
            i = Math.abs(d / f);
          g = Math.atan(i) / (2 * Math.PI) * 360, d > 0 && 0 > f ? g =
            360 + g : d > 0 && f > 0 ? g = 180 - g : 0 > d && f > 0 ?
            g = 180 + g : 0 > d && 0 > f && (g = 360 - g), g > 360 &&
            (g -= 360), e.css({
              transform: "rotateZ(" + g + "deg)"
            }), a.$broadcast("boxOuter")
        }), i.on("panend", function() {
          $("body").css({
            "user-select": "initial",
            cursor: "default"
          }), c.updateCompAngle(e.attr("id"), g), c.$broadcast(
            "updateTransform", g, e.attr("id").split("_")[1]), a.$broadcast(
            "boxOuter", "rotateEnd")
        })
      }
    }
  }]).directive("compResize", ["selectService", "picturesService",
    "triggerService", "panStateTracker", "multiCompResize", "Cursor",
    "gridGuide", "$rootScope", "sceneService", "editService",
    function(a, b, c, d, e, f, g, h, i, j) {
      function k(a, b, c, d, f, i) {
        c.css("cursor", d);
        var j = new Hammer(c.get(0));
        j.get("pan").set({
          threshold: 0,
          direction: Hammer.DIRECTION_ALL
        }), j.on("panstart", function() {
          $("body").css({
            "user-select": "none",
            cursor: "default"
          }), e.resizeStart(b), g.guide.start({
            action: "resize"
          })
        }), j.on("panmove", function(a) {
          var c = e.resizeMove(b, d, a, f, i);
          g.guide.sync(c), h.$broadcast("boxOuter")
        }), j.on("panend", function() {
          $("body").css({
            "user-select": "initial",
            cursor: "default"
          }), e.resizeEnd(a, b), g.guide.stop(), h.$broadcast(
            "boxOuter")
        })
      }
      return {
        restrict: "A",
        link: function(b, c, d) {
          var e = d.minH,
            g = d.minW,
            l = j.scaleIndex,
            m = $('<div class="bar bar-n bar-n' + l +
              '"><div class="bar-radius radius-s' + l + '"></div></div>'),
            n = $('<div class="bar bar-s bar-s' + l +
              '"><div class="bar-radius radius-s' + l + '"></div></div>'),
            o = $('<div class="bar bar-e bar-e' + l +
              '"><div class="bar-radius radius-s' + l + '"></div></div>'),
            p = $('<div class="bar bar-w bar-w' + l +
              '"><div class="bar-radius radius-s' + l + '"></div></div>'),
            q = $('<div class="bar bar-ne' + l + " bar-radius radius-s" + l +
              '">'),
            r = $('<div class="bar bar-nw' + l + " bar-radius radius-s" + l +
              '">'),
            s = $('<div class="bar bar-se' + l + " bar-radius radius-s" + l +
              '">'),
            t = $('<div class="bar bar-sw' + l + " bar-radius radius-s" + l +
              '">');
          c.append(m).append(n).append(o).append(p).append(r).append(s).append(
              t).append(q).unbind("mousedown").mousedown(function(c) {
              var d = !!$("#nr").find(".mask-trigger").length;
              if (!d) {
                var e = $(this).attr("id").split("_")[1];
                if (i.currentElemDef = i.getElementsMap()[e], "p" != i.currentElemDef
                  .type) {
                  if ($("#comp_setting").length && "n" != i.currentElemDef
                    .type && !c.ctrlKey && !c.shiftKey) {
                    if ("none" != $(this).children(".bar").first().css(
                        "display")) return;
                    h.$broadcast("showStylePanel")
                  }
                } else $("#comp_setting").hide();
                if (c.ctrlKey || c.shiftKey) "none" != $(this).children(
                    ".bar").first().css("display") ? ($(this).children(
                    ".bar").hide(), a.deleteElement(e)) : ($(this).children(
                    ".bar").show(), a.addElement(e)), 1 == a.getElements()
                  .length && (i.currentElemDef = i.getElementsMap()[a.getElements()[
                    0]], "z" == i.currentElemDef.type ? h.$broadcast(
                    "showStylePanel", {
                      activeTab: "dropdown"
                    }) : h.$broadcast("showStylePanel", {
                    activeTab: "style"
                  }));
                else {
                  if ("none" != $(this).children(".bar").first().css(
                      "display")) return;
                  $(this).children(".bar").show().end(), $.each(a.getElements(),
                    function(a, b) {
                      $("#inside_" + b).children(".bar").hide()
                    }), a.clearElements(), a.addElement(e)
                }
                b.safeApply(function() {})
              }
            }), c.find(".element-box").unbind("click").bind("click",
              function(a) {
                (a.ctrlKey || a.shiftKey) && a.stopPropagation()
              }), c.parent().unbind("mousedown").mousedown(function(c) {
              $(c.target).closest("li").length || ($(this).children("li")
                .children(".bar").hide(), b.$emit("hideStylePanel"), a.clearElements(),
                b.safeApply(function() {}))
            }), k(b, c, o, f.RESIZE_E, e, g), k(b, c, p, f.RESIZE_W, e, g),
            k(b, c, m, f.RESIZE_N, e, g), k(b, c, n, f.RESIZE_S, e, g), k(b,
              c, q, f.RESIZE_NE, e, g), k(b, c, r, f.RESIZE_NW, e, g), k(b,
              c, s, f.RESIZE_SE, e, g), k(b, c, t, f.RESIZE_SW, e, g)
        }
      }
    }
  ]).service("Cursor", function() {
    var a = {
      RESIZE_W: "w-resize",
      RESIZE_E: "e-resize",
      RESIZE_N: "n-resize",
      RESIZE_S: "s-resize",
      RESIZE_SE: "se-resize",
      RESIZE_SW: "sw-resize",
      RESIZE_NE: "ne-resize",
      RESIZE_NW: "nw-resize"
    };
    return a
  }).factory("multiCompResize", ["selectService", "picturesService", "Cursor",
    "editAreaBorderCollisionDetector", "sceneService", "editService",
    function(a, b, c, d, e, f) {
      var g, h, i = 1,
        j = 1,
        k = (d.editArea.editAreaWidth, d.editArea.editAreaHeight, null),
        l = null,
        m = {};
      return m.selectedComponents = [], m.initCollisionDetectorWithElements =
        function() {
          m.selectedComponents = [];
          var b = $("#nr");
          angular.forEach(a.getElements(), function(a) {
            m.selectedComponents.push(b.find("#inside_" + a))
          }), d.initWithElements(m.selectedComponents)
        }, m.resizeStart = function() {
          m.initCollisionDetectorWithElements(), k = d.bigDetectionBoxPointA,
            l = d.bigDetectionBoxPointB, g = d.minimumWidth, h = d.minimumHeight
        }, m.checkTopBorder = function() {
          return this
        }, m.checkRightBorder = function() {
          return this
        }, m.checkLeftBorder = function() {
          return this
        }, m.checkBottomBorder = function() {
          return this
        }, m.checkMinHeight = function(a, b, c, d) {
          var e = Math.floor(c - d);
          return a.deltaY * b > e && (a.deltaY = e * b), this
        }, m.checkMinWidth = function(a, b, c, d) {
          var e = Math.floor(c - d);
          return a.deltaX * b > e && (a.deltaX = e * b), this
        }, m.compResizeWithRatio = function(a, b, e, f) {
          switch (b) {
            case c.RESIZE_SE:
              angular.forEach(d.editArea.detectionBoxs, function(b) {
                var c = parseInt(a.deltaY * b.ratio, 10),
                  d = a.deltaY,
                  g = {
                    deltaX: c,
                    deltaY: d
                  };
                m.checkMinHeight(g, -1, b.elementHeight, e || j).checkMinWidth(
                    g, -1, b.elementWidth, f || i), c !== g.deltaX && (d =
                    g.deltaX / b.ratio, g.deltaY = Math.abs(d) < Math.abs(
                      g.deltaY) ? d : g.deltaY), a.deltaY = g.deltaY, a.deltaX =
                  g.deltaX
              });
              break;
            case c.RESIZE_SW:
              angular.forEach(d.editArea.detectionBoxs, function(b) {
                var c = parseInt(-a.deltaY * b.ratio, 10),
                  d = a.deltaY,
                  g = {
                    deltaX: c,
                    deltaY: d
                  };
                m.checkMinHeight(g, -1, b.elementHeight, e || j).checkMinWidth(
                    g, 1, b.elementWidth, f || i), c !== g.deltaX && (d = -
                    g.deltaX / b.ratio, g.deltaY = Math.abs(d) < Math.abs(
                      g.deltaY) ? d : g.deltaY), a.deltaY = g.deltaY, a.deltaX =
                  g.deltaX
              });
              break;
            case c.RESIZE_NE:
              angular.forEach(d.editArea.detectionBoxs, function(b) {
                var c = parseInt(-a.deltaY * b.ratio, 10),
                  d = a.deltaY,
                  g = {
                    deltaX: c,
                    deltaY: d
                  };
                m.checkMinHeight(g, 1, b.elementHeight, e || j).checkMinWidth(
                    g, -1, b.elementWidth, f || i), c !== g.deltaX && (d = -
                    g.deltaX / b.ratio, g.deltaY = Math.abs(d) < Math.abs(
                      g.deltaY) ? d : g.deltaY), a.deltaY = g.deltaY, a.deltaX =
                  g.deltaX
              });
              break;
            case c.RESIZE_NW:
              angular.forEach(d.editArea.detectionBoxs, function(b) {
                var c = parseInt(a.deltaY * b.ratio, 10),
                  d = a.deltaY,
                  g = {
                    deltaX: c,
                    deltaY: d
                  };
                m.checkMinHeight(g, 1, b.elementHeight, e || j).checkMinWidth(
                    g, 1, b.elementWidth, f || i), c !== g.deltaX && (d =
                    g.deltaX / b.ratio, g.deltaY = Math.abs(d) < Math.abs(
                      g.deltaY) ? d : g.deltaY), a.deltaY = g.deltaY, a.deltaX =
                  g.deltaX
              })
          }
          return this
        }, m.resizeMove = function(a, b, e, k, l) {
          var n = {
              deltaX: e.deltaX / f.currentScale,
              deltaY: e.deltaY / f.currentScale
            },
            o = null;
          switch (b) {
            case c.RESIZE_W:
              m.checkMinWidth(n, 1, g, l || i), o = {
                x: n.deltaX,
                y: 0,
                width: -n.deltaX,
                height: 0
              }, angular.forEach(d.editArea.detectionBoxs, function(a) {
                a.element.css({
                  left: a.left + n.deltaX,
                  width: a.elementWidth - n.deltaX
                })
              });
              break;
            case c.RESIZE_E:
              m.checkMinWidth(n, -1, g, l || i), o = {
                x: 0,
                y: 0,
                width: n.deltaX,
                height: 0
              }, angular.forEach(d.editArea.detectionBoxs, function(a) {
                a.element.css("width", a.elementWidth + n.deltaX)
              });
              break;
            case c.RESIZE_N:
              m.checkMinHeight(n, 1, h, k || j), o = {
                x: 0,
                y: n.deltaY,
                width: 0,
                height: -n.deltaY
              }, angular.forEach(d.editArea.detectionBoxs, function(a) {
                a.element.css({
                  top: a.top + n.deltaY,
                  height: a.elementHeight - n.deltaY
                })
              });
              break;
            case c.RESIZE_S:
              m.checkMinHeight(n, -1, h, k || j), o = {
                x: 0,
                y: 0,
                width: 0,
                height: n.deltaY
              }, angular.forEach(d.editArea.detectionBoxs, function(a) {
                a.element.css("height", a.elementHeight + n.deltaY)
              });
              break;
            case c.RESIZE_SE:
              m.compResizeWithRatio(n, b, k, l), o = {
                x: 0,
                y: 0,
                width: n.deltaX,
                height: n.deltaY
              }, angular.forEach(d.editArea.detectionBoxs, function(a) {
                var b = a.elementHeight + n.deltaY,
                  c = b * a.ratio;
                a.element.css({
                  height: b,
                  width: c
                })
              });
              break;
            case c.RESIZE_SW:
              m.compResizeWithRatio(n, b, k, l), o = {
                x: n.deltaX,
                y: 0,
                width: -n.deltaX,
                height: n.deltaY
              }, angular.forEach(d.editArea.detectionBoxs, function(a) {
                var b = a.elementHeight + n.deltaY,
                  c = b * a.ratio;
                a.element.css({
                  left: a.left - (c - a.elementWidth),
                  height: b,
                  width: c
                })
              });
              break;
            case c.RESIZE_NE:
              m.compResizeWithRatio(n, b, k, l), o = {
                x: 0,
                y: n.deltaY,
                width: n.deltaX,
                height: -n.deltaY
              }, angular.forEach(d.editArea.detectionBoxs, function(a) {
                var b = a.elementHeight - n.deltaY,
                  c = b * a.ratio;
                a.element.css({
                  top: a.top + n.deltaY,
                  height: b,
                  width: c
                })
              });
              break;
            case c.RESIZE_NW:
              m.compResizeWithRatio(n, b, k, l), o = {
                x: n.deltaX,
                y: n.deltaY,
                width: -n.deltaX,
                height: -n.deltaY
              }, angular.forEach(d.editArea.detectionBoxs, function(a) {
                var b = a.elementHeight - n.deltaY,
                  c = b * a.ratio;
                a.element.css({
                  top: a.top + n.deltaY,
                  left: a.left - (c - a.elementWidth),
                  height: b,
                  width: c
                })
              })
          }
          return angular.forEach(m.selectedComponents, function(a) {
            m.setChildrenSizeMove(a)
          }), o
        }, m.setChildrenSizeMove = function(a) {
          var b = a.children(".element-box"),
            c = {
              width: b.width(),
              height: b.height()
            };
          if ("4" == a.attr("ctype").charAt(0) || "n" == a.attr("ctype").charAt(
              0)) {
            var d = a.find("img"),
              e = d.width() / d.height(),
              f = c.width / c.height;
            e >= f ? (d.outerHeight(c.height), d.outerWidth(c.height * e), d.css(
              "marginLeft", -(d.outerWidth() - c.width) / 2), d.css(
              "marginTop", 0)) : (d.outerWidth(c.width), d.outerHeight(c.width /
                e), d.css("marginTop", -(d.outerHeight() - c.height) / 2),
              d.css("marginLeft", 0))
          } else "p" == a.attr("ctype").charAt(0) ? a.find(
            ".fluxslider, .images, .image1, .image2").css({
            width: c.width,
            height: c.height
          }) : (a.find(".element").css({
              width: c.width,
              height: c.height
            }), "i" == a.attr("ctype") || "d" == a.attr("ctype") ? a.find(
              ".comp_counter").css({
              "line-height": c.height + "px"
            }) : ("w01" == a.attr("ctype") || "w02" == a.attr("ctype")) &&
            a.find(".element").css({
              "line-height": c.height + "px"
            }))
        }, m.resizeEnd = function(a) {
          angular.forEach(m.selectedComponents, function(b, c) {
            m.setChildrenSizeEnd(a, b, c < m.selectedComponents.length -
              1), a.$broadcast("updateMaxRadius", b)
          })
        }, m.setChildrenSizeEnd = function(a, c, d) {
          var f = c.position(),
            g = {
              width: c.width(),
              height: c.height(),
              left: f.left,
              top: f.top
            };
          if (("i" == c.attr("ctype") || "d" == c.attr("ctype") || "w01" == c
              .attr("ctype") || "w02" == c.attr("ctype")) && (g.lineHeight =
              g.height + "px"), "4" == c.attr("ctype").charAt(0) || "n" == c.attr(
              "ctype").charAt(0)) {
            var h = c.find("img"),
              i = {
                width: g.width,
                height: g.height,
                left: g.left,
                top: g.top,
                imgStyle: {
                  width: h.width(),
                  height: h.height(),
                  marginTop: h.css("marginTop"),
                  marginLeft: h.css("marginLeft")
                }
              };
            e.updateCompSize(c.attr("id"), i, d)
          } else if ("p" == c.attr("ctype").charAt(0)) {
            var j = b.getProperties();
            if (!j || !j.children) return;
            var k = c.find(".slider"),
              l = k.attr("id");
            k.empty();
            for (var m = 0; m < j.children.length; m++) k.append('<img src="' +
              PREFIX_FILE_HOST + j.children[m].src + '">');
            utilPictures.deleteInterval(l), new flux.slider("#nr #" + l, {
              autoplay: j.autoPlay,
              delay: j.interval,
              pagination: !1,
              transitions: [utilPictures.getPicStyle(j.picStyle).name],
              width: g.width,
              height: g.height,
              bgColor: j.bgColor,
              onStartEnd: function(a) {
                utilPictures.addInterval(l, a)
              }
            }), e.updateCompSize(c.attr("id"), g, d)
          } else e.updateCompSize(c.attr("id"), g, d)
        }, m
    }
  ]).factory("gridGuide", ["panStateTracker", "DetectionBox", "selectService",
    "editAreaBorderCollisionDetector", "editService",
    function(a, b, c, d, e) {
      var f = {
          init: function(a) {
            this.color = this.getColor() ? this.getColor() :
              "rgba(150, 150, 150, 0.2)", this.$container = a, this.render(),
              setTimeout(function() {
                "disable" != f.getVisable() && f.show()
              }, 1)
          },
          len: 1,
          render: function() {
            this.domElement = $('<div class="eq-block-grid">'), this.canvasElement =
              $('<canvas class="eq-block-grid-inner">').appendTo(this.domElement)
          },
          show: function() {
            this.domElement.appendTo(this.$container), this.paint(), this.enabled = !
              0
          },
          hide: function() {
            this.domElement.remove(), this.enabled = !1
          },
          setVisable: function(a) {
            window.localStorage && localStorage.setItem("sceneGridVisable",
              a)
          },
          getVisable: function() {
            return window.localStorage ? localStorage.getItem(
              "sceneGridVisable") : void 0
          },
          setColor: function(a) {
            window.localStorage && localStorage.setItem("sceneGridColor", a)
          },
          getColor: function() {
            return window.localStorage ? localStorage.getItem(
              "sceneGridColor") : void 0
          },
          getGuideState: function() {
            return window.localStorage ? localStorage.getItem(
              "sceneGridState") : void 0
          },
          setGuideState: function(a) {
            window.localStorage && localStorage.setItem("sceneGridState", a)
          },
          getSnapState: function() {
            return window.localStorage ? localStorage.getItem(
              "sceneSnapState") : void 0
          },
          setSnapState: function(a) {
            window.localStorage && localStorage.setItem("sceneSnapState", a)
          },
          paint: function() {
            var a = 320,
              b = Math.ceil(30 / e.currentScale),
              c = this.len ? 486 * this.len : 486,
              d = Math.ceil(c / b),
              f = this.getCols(),
              g = Math.round(a / f),
              h = 0;
            this.canvasElement.css({
              left: 0,
              top: 0
            }), this.canvasElement.attr({
              width: a,
              height: c
            });
            var i = this.canvasElement.get(0).getContext("2d");
            i.clearRect(0, 0, a, c);
            for (var j = 1; f > j; j++) i.fillStyle = this.color, i.fillRect(
              Math.floor(j * g), 0, 1, c);
            for (var k = 1; d >= k; k++) i.fillStyle = this.color, i.fillRect(
              0, Math.floor(k * b) + h, a, 1)
          },
          getRows: function() {
            return 16 * this.len
          },
          getCols: function() {
            var a = 10;
            switch (e.scaleIndex + "") {
              case "1":
                a = 5;
                break;
              case "2":
                a = 8;
                break;
              case "3":
                a = 10;
                break;
              case "4":
                a = 12;
                break;
              case "5":
                a = 16;
                break;
              case "6":
                a = 20;
                break;
              case "7":
                a = 30;
                break;
              case "8":
                a = 40;
                break;
              default:
                a = 10
            }
            return a
          },
          refreshGrid: function(a) {
            a > 1 ? (this.domElement.css("top", 0), h.domElement.css("top",
              0)) : (this.domElement.css("top", "17px"), h.domElement.css(
              "top", "17px")), a != this.len && (this.len = a, h.slideBounds
              .height = 486 * a, this.paint())
          }
        },
        g = {
          snap: f.getSnapState() ? f.getSnapState() : !0,
          action: "move",
          threshold: 1,
          enabled: f.getGuideState() ? f.getSnapState() : !0
        },
        h = {
          init: function(a) {
            this.guides = {
              h: [],
              v: []
            }, this.slideBounds = {
              width: 320,
              height: 486,
              x: 0,
              y: 0
            }, this.render(), a.append(this.domElement), this.options = g
          },
          render: function() {
            this.domElement = $('<div class="eq-block-guides">')
          },
          start: function(d) {
            if (this.options.enabled) {
              this.allBlocks = [], a.forEach(function(a) {
                h.allBlocks.push(new b(a))
              }), this.targetBlocks = [], angular.forEach(c.getElements(),
                function(a) {
                  h.allBlocks.forEach(function(b) {
                    b.element.attr("id") == "inside_" + a && h.targetBlocks
                      .push(b)
                  })
                }), this.gridLines = [];
              var i = Math.ceil(30 / e.currentScale),
                j = f.getCols(),
                k = Math.round(this.slideBounds.height / i),
                l = Math.round(this.slideBounds.width / j),
                m = 0;
              if (f.enabled) {
                for (var n = 1; j > n; n++) this.gridLines.push(this.getCenterEdge({
                  x: n * l,
                  y: 0,
                  width: 0,
                  height: this.slideBounds.height
                }, "grid-col-" + n, "horizontal"));
                for (var o = 1; k > o; o++) this.gridLines.push(this.getCenterEdge({
                  x: 0,
                  y: o * i + m,
                  width: this.slideBounds.width,
                  height: 0
                }, "grid-row-" + o, "vertical"))
              }
              1 == f.len ? (this.gridLines.push(this.getCenterEdge({
                x: 0,
                y: 0,
                width: this.slideBounds.width,
                height: 0
              }, "grid-row-top", "vertical")), this.gridLines.push(this
                .getCenterEdge({
                  x: 0,
                  y: this.slideBounds.height,
                  width: this.slideBounds.width,
                  height: 0
                }, "grid-row-bottom", "vertical")), this.gridLines.push(
                this.getCenterEdge({
                  x: -27,
                  y: -17,
                  width: this.slideBounds.width + 54,
                  height: 0
                }, "grid-row-top1", "vertical")), this.gridLines.push(
                this.getCenterEdge({
                  x: -27,
                  y: this.slideBounds.height + 17,
                  width: this.slideBounds.width + 54,
                  height: 0
                }, "grid-row-bottom1", "vertical")), this.gridLines.push(
                this.getCenterEdge({
                  x: -27,
                  y: -19,
                  width: 0,
                  height: this.slideBounds.height + 34
                }, "grid-col-left1", "horizontal")), this.gridLines.push(
                this.getCenterEdge({
                  x: this.slideBounds.width + 27,
                  y: -19,
                  width: 0,
                  height: this.slideBounds.height + 34
                }, "grid-col-right1", "horizontal"))) : (this.gridLines.push(
                this.getCenterEdge({
                  x: -27,
                  y: 0,
                  width: this.slideBounds.width + 54,
                  height: 0
                }, "grid-row-top1", "vertical")), this.gridLines.push(
                this.getCenterEdge({
                  x: -27,
                  y: this.slideBounds.height,
                  width: this.slideBounds.width + 54,
                  height: 0
                }, "grid-row-bottom", "vertical")), this.gridLines.push(
                this.getCenterEdge({
                  x: -27,
                  y: 0,
                  width: 0,
                  height: this.slideBounds.height
                }, "grid-col-left1", "horizontal")), this.gridLines.push(
                this.getCenterEdge({
                  x: this.slideBounds.width + 27,
                  y: 0,
                  width: 0,
                  height: this.slideBounds.height
                }, "grid-col-right1", "horizontal"))), this.gridLines.push(
                this.getCenterEdge({
                  x: -1,
                  y: 0,
                  width: 0,
                  height: this.slideBounds.height
                }, "grid-col-left", "horizontal")), this.gridLines.push(
                this.getCenterEdge({
                  x: this.slideBounds.width,
                  y: 0,
                  width: 0,
                  height: this.slideBounds.height
                }, "grid-col-right", "horizontal")), this.options = $.extend(
                g, d)
            }
          },
          stop: function() {
            this.clearGuideElements()
          },
          sync: function(a) {
            this.options.enabled && (this.findGuides(a), this.renderGuides())
          },
          findGuides: function(a) {
            a = angular.extend({
              x: 0,
              y: 0,
              width: 0,
              height: 0
            }, a), this.guides.h.length = 0, this.guides.v.length = 0;
            var b = {
                x: d.bigDetectionBoxPointA.x + a.x,
                y: d.bigDetectionBoxPointA.y + a.y,
                width: d.bigDetectionBoxPointB.x - d.bigDetectionBoxPointA.x +
                  a.width,
                height: d.bigDetectionBoxPointB.y - d.bigDetectionBoxPointA
                  .y + a.height
              },
              c = this.getEdges(b, "target-bounds", "resize" === this.options
                .action);
            this.combinedBounds = b, this.allBlocks.forEach(function(a) {
              -1 === h.targetBlocks.indexOf(a) && h.compageEdges(c, h.getEdges(
                a.measure(), a.getID()), h.options.threshold)
            }), this.gridLines.forEach(function(a) {
              h.compageEdges(c, a, h.options.threshold)
            }), this.guides.h.sort(function(a, b) {
              return a.distance - b.distance
            }), this.guides.v.sort(function(a, b) {
              return a.distance - b.distance
            })
          },
          enforceGuides: function(a) {
            if (this.options.enabled) {
              var b = this.options.threshold;
              this.options.threshold = 3, this.findGuides(a), this.options.threshold =
                b;
              var c, d = 0,
                e = 0;
              this.guides.h.length && (c = this.guides.h[0], d = c.compareEdge
                  .x - c.targetEdge.x), this.guides.v.length && (c = this.guides
                  .v[0], e = c.compareEdge.y - c.targetEdge.y), a.x += d, a
                .y += e
            }
          },
          compageEdges: function(a, b, c) {
            var d;
            a.h.forEach(function(a) {
              b.h.forEach(function(b) {
                d = Math.abs(a.x - b.x), c > d && h.guides.h.push({
                  distance: d,
                  targetEdge: a,
                  compareEdge: b
                })
              })
            }), a.v.forEach(function(a) {
              b.v.forEach(function(b) {
                d = Math.abs(a.y - b.y), c > d && h.guides.v.push({
                  distance: d,
                  targetEdge: a,
                  compareEdge: b
                })
              })
            })
          },
          renderGuides: function() {
            var a = [];
            this.guides.h.forEach(function(b) {
              a.push(h.renderGuide(b))
            }), this.guides.v.forEach(function(b) {
              a.push(h.renderGuide(b))
            }), this.clearGuideElements(a)
          },
          renderGuide: function(a) {
            var b = a.targetEdge,
              c = a.compareEdge,
              d = $('[data-guide-id="' + c.id + '"]');
            0 === d.length && (d = $('<div data-guide-id="' + c.id + '">').appendTo(
              this.domElement), setTimeout(function() {
              d.addClass("show")
            }, 1));
            var e = {
              top: Math.min(c.bounds.y, this.combinedBounds.y),
              right: Math.max(c.bounds.x + c.bounds.width, this.combinedBounds
                .x + this.combinedBounds.width),
              bottom: Math.max(c.bounds.y + c.bounds.height, this.combinedBounds
                .y + this.combinedBounds.height),
              left: Math.min(c.bounds.x, this.combinedBounds.x)
            };
            if ("number" == typeof c.y) {
              var f = "s" === b.direction ? -1 : 0;
              d.addClass("guide-h"), d.css({
                top: Math.floor(c.y + f),
                left: e.left,
                width: e.right - e.left
              })
            } else {
              var g = "e" === b.direction ? -1 : 0;
              d.addClass("guide-v"), d.css({
                left: Math.floor(c.x + g),
                top: e.top,
                height: e.bottom - e.top
              })
            }
            return c.id
          },
          getEdges: function(a, b, c) {
            var d = {
              h: [{
                id: b + "-h1",
                bounds: a,
                x: a.x,
                offset: 0,
                direction: "w"
              }, {
                id: b + "-h2",
                bounds: a,
                x: a.x + a.width / 2,
                offset: -a.width / 2,
                direction: "hc"
              }, {
                id: b + "-h3",
                bounds: a,
                x: a.x + a.width,
                offset: -a.width,
                direction: "e"
              }],
              v: [{
                id: b + "-v1",
                bounds: a,
                y: a.y,
                offset: 0,
                direction: "n"
              }, {
                id: b + "-v2",
                bounds: a,
                y: a.y + a.height / 2,
                offset: -a.height / 2,
                direction: "vc"
              }, {
                id: b + "-v3",
                bounds: a,
                y: a.y + a.height,
                offset: -a.height,
                direction: "s"
              }]
            };
            return c && (d.h.splice(1, 1), d.v.splice(1, 1)), d
          },
          getCenterEdge: function(a, b, c) {
            var d = {
              h: [],
              v: []
            };
            return "vertical" === c ? d.v.push({
              id: b + "-v2",
              bounds: a,
              y: a.y + a.height / 2,
              offset: -a.height / 2,
              direction: b
            }) : d.h.push({
              id: b + "-h2",
              bounds: a,
              x: a.x + a.width / 2,
              offset: -a.width / 2,
              direction: b
            }), d
          },
          clearGuideElements: function(a) {
            var b = this.domElement.find(".guide-v, .guide-h");
            a && a.length && (b = b.filter(function(b, c) {
              return -1 === a.indexOf(c.getAttribute("data-guide-id"))
            })), b.remove()
          }
        };
      return {
        grid: f,
        guide: h
      }
    }
  ]).directive("pasteElement", ["sceneService", function(a) {
    function b() {
      var b = $(
        '<ul id="pasteMenu" class="dropdown-menu" style="min-width: 100px; display: block;" role="menu" aria-labelledby="dropdownMenu1"><li class="paste" style="text-align:center;" role="presentation"><a role="menuitem" tabindex="-1"><div class="fa fa-paste"></div>&nbsp;&nbsp;粘贴</a></li></ul>'
      ).css({
        position: "absolute",
        "user-select": "none"
      });
      return b.find(".paste").on("click", function() {
        a.pasteElement(), b.hide()
      }), b
    }
    return {
      restrict: "EA",
      link: function(c, d) {
        var e = $(d);
        e.on("contextmenu", function(c) {
          if (a.getCopy()) {
            var d = b(),
              e = $("#eq_main"),
              f = $("#pasteMenu");
            f.length > 0 && f.remove(), e.append(d), d.css({
              left: c.pageX + e.scrollLeft() + 15,
              top: c.pageY + e.scrollTop()
            }).show(), e.mousemove(function(a) {
              var b = $("#pasteMenu");
              (a.pageX < b.offset().left - 20 || a.pageX > b.offset()
                .left + b.width() + 20 || a.pageY < b.offset().top -
                20 || a.pageY > b.offset().top + b.height() + 20) &&
              (b.hide(), $(this).unbind("mousemove"))
            })
          }
          return !1
        })
      }
    }
  }]).directive("eqxEditDestroy", ["selectService", function(a) {
    return {
      link: function(b, c) {
        c.on("$destroy", function() {
          a.clearElements(), utilPictures.clearInterval()
        })
      }
    }
  }]).directive("elementAnim", ["selectService", function() {
    function a(b, c, d, e, f) {
      if (c.length && e < c.length)
        if (2 == f.type && "typer" == c[e].type) b = b = $("#inside_" + f.id +
          " .element"), b.typed({
          strings: [f.content],
          contentType: "html",
          showCursor: !1,
          typeSpeed: 1e3 * c[e].interval || 0,
          startDelay: 1e3 * c[e].delay || 0,
          callback: function() {
            clearInterval(b.data("typed").timeout), b.removeData(
              "typed"), e++, a(b, c, d, e, f)
          }
        });
        else {
          b = b = $("#inside_" + f.id + " .element-box");
          var g = b.get(0);
          b.css("animation", ""), g.offsetWidth = g.offsetWidth, b.css(
            "animation", d[e] + " " + c[e].duration + "s ease 0s").css(
            "animation-fill-mode", "backwards"), b.one(
            "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
            function() {
              e++, a(b, c, d, e, f)
            })
        }
    }
    return {
      restrict: "EA",
      link: function(b) {
        var c;
        b.$on("previewCurrentChange", function(a, b) {
          var d = b.elemDef,
            e = b.anim;
          if (2 == d.type && "typer" == e.type) c = c = $("#inside_" +
            b.elemId + " .element"), c.typed({
            strings: [d.content],
            contentType: "html",
            showCursor: !1,
            typeSpeed: 1e3 * e.interval || 0,
            startDelay: 1e3 * e.delay || 0,
            callback: function() {
              clearInterval(c.data("typed").timeout), c.removeData(
                "typed")
            }
          });
          else {
            c = c = $("#inside_" + b.elemId + " .element-box");
            var f = c.get(0);
            f.offsetWidth = f.offsetWidth, c.css("animation", b.animClasses[
              b.count] + " " + b.anim.duration + "s ease 0s").css(
              "animation-fill-mode", "backwards")
          }
        }), b.$on("previewAllChanges", function(b, d) {
          c = c = $("#inside_" + d.elemId + " .element-box"), a(c, d.animations,
            d.animClasses, d.count, d.elemDef)
        })
      }
    }
  }]).directive("outerBox", ["DetectionBox", "i18nNotifications",
    "storageService", "selectService",
    function(a, b, c, d) {
      return {
        restrict: "AE",
        link: function(d, e) {
          function f(a) {
            "red" == a ? (g.show(), g.css("background-color", "#ff5548"), e
              .find(".internal-box").toggleClass("out-warning", !1),
              isOuter = !0) : "yellow" == a ? (g.show(), isOuter = !1, g.css(
              "background-color", "#F2A653"), i && e.find(
              ".internal-box").toggleClass("out-warning", !0)) : (isOuter = !
              1, e.find(".internal-box").toggleClass("out-warning", !1),
              g.hide()), i && e.toggleClass("on", isOuter)
          }
          var g = $("#warn"),
            h = "";
          g.click(function() {
            "red" == h ? (b.removeAll(), b.pushForCurrentRoute(
                "outbox.warning", "notify.warning")) : "yellow" == h &&
              (b.removeAll(), b.pushForCurrentRoute("outbox.tip",
                "notify.warning"))
          });
          var i = "false" == c.get("create.phoneView") ? !0 : !1;
          i || (e.css("border-color", "transparent"), e.find(
            ".internal-box").css("border-color", "transparent")), d.$on(
            "switchBox",
            function(a, b) {
              i = !b, b ? (e.css("border-color", "transparent"), e.find(
                  ".internal-box").css("border-color", "transparent")) :
                (e.css("border-color", ""), e.find(".internal-box").css(
                  "border-color", ""), f(h))
            }), d.$on("boxOuter", function(c, e) {
            for (var g = "", j = d.pageLength, k = d.tpl.obj.elements,
                l = 0; l < k.length; l++)
              if (3 != k[l].type) {
                var m = k[l].id,
                  n = $("#inside_" + m);
                if (0 !== n.length) {
                  var o = n.position(),
                    p = new a(n);
                  if (1 != j) {
                    if (o.left < -29 || o.top < -1 || p.originPointB.y >
                      486 * j || p.originPointB.x > 345) {
                      g = "red";
                      break
                    }(o.left < -1 || p.originPointB.x > 320) && (g =
                      "yellow")
                  } else {
                    if (i && (o.left < -29 || o.top < -19 || p.originPointB
                        .y > 501 || p.originPointB.x > 345)) {
                      g = "red";
                      break
                    }(o.left < -1 || o.top < -1 || p.originPointB.y >
                      486 || p.originPointB.x > 320) && (g = "yellow")
                  }
                }
              }
            h == g || e || ("red" == g ? (b.removeAll(), b.pushForCurrentRoute(
                "outbox.warning", "notify.warning")) : "yellow" == g ?
              (b.removeAll(), b.pushForCurrentRoute("outbox.tip",
                "notify.warning")) : b.removeAll()), h = g, f(g)
          })
        }
      }
    }
  ]), angular.module("app.directives.editor", ["scene.create.console.font"]).directive(
    "toolbar", ["$rootScope", "$modal", "$compile", "sceneService", "$timeout",
      "storageService", "fontService",
      function(a, b, c, d, e, f, g) {
        function h(b, f) {
          function g() {
            e(function() {
              function a() {
                if (c) {
                  for (var e = 0; e < d.length; e++) c.style && c.style[d[e]] &&
                    (b.selectStyle[d[e]] = c.style[d[e]], d.splice(e, 1), e--);
                  c.id !== "inside_" + h.id && d.length > 0 && (c = c.parentElement,
                    a())
                }
              }
              if (0 !== $("#" + h.id).find("div").length ? 0 !== $("#" + h.id)
                .find("div").length && ("left" === $("#" + h.id).find("div")[
                    0].style.textAlign ? b.classTextAlign = "eqf-leftword" :
                  "center" === $("#" + h.id).find("div")[0].style.textAlign ?
                  b.classTextAlign = "eqf-minddleword" : "right" === $("#" +
                    h.id).find("div")[0].style.textAlign && (b.classTextAlign =
                    "eqf-rightword")) : b.classTextAlign = "eqf-leftword",
                document.getSelection().anchorNode) {
                b.selectStyle = {
                  fontFamily: "",
                  fontSize: "",
                  color: "",
                  backgroundColor: "",
                  fontWeight: "",
                  fontStyle: "",
                  textDecoration: "",
                  letterSpacing: ""
                };
                var c = document.getSelection().anchorNode.parentElement,
                  d = ["fontFamily", "fontSize", "color", "backgroundColor",
                    "fontWeight", "fontStyle", "textDecoration",
                    "letterSpacing"
                  ];
                a(), b.selectStyle.fontSize ? b.defaultSize =
                  "-webkit-xxx-large" === b.selectStyle.fontSize ? "48px" :
                  b.selectStyle.fontSize : b.defaultSize = "24px", -1 !== b
                  .selectStyle.textDecoration.indexOf("line-through") ? $(
                    ".strikeThrough").attr("style",
                    "color:#08a1ef !important") : $(".strikeThrough").removeAttr(
                    "style"), -1 !== b.selectStyle.textDecoration.indexOf(
                    "underline") ? $(".underline").attr("style",
                    "color:#08a1ef !important") : $(".underline").removeAttr(
                    "style"), "italic" === b.selectStyle.fontStyle ? $(
                    ".italic").attr("style", "color:#08a1ef !important") :
                  $(".italic").removeAttr("style"), "bold" === b.selectStyle
                  .fontWeight ? $(".bolded").attr("style",
                    "color:#08a1ef !important") : $(".bolded").removeAttr(
                    "style"), "inherit" !== b.selectStyle.color && $(
                    ".change-font-btn").attr("style", "background:" + b.selectStyle
                    .color), "initial" !== b.selectStyle.backgroundColor &&
                  $(".text-btn-border-bg").attr("style", "background:" + b.selectStyle
                    .backgroundColor), $.each(b.fontNames, function(a, c) {
                    b.selectStyle.fontFamily === c.fontFamily && (b.defaultFamily =
                      c.name), b.selectStyle.fontFamily || (b.defaultFamily =
                      "默认字体")
                  })
              }
            }, 0)
          }
          b.fontNames = [], b.selectStyle = {};
          var h = d.currentElemDef;
          b.addLinkInputFn = function() {
              setTimeout(function() {
                $("#addLinkInputToggle").click(), $("body").off("mousemove",
                  g), $("#btn-toolbar").off("mouseup", g)
              })
            }, b.startMoveSelect = function() {
              $("#btn-toolbar").on("mouseup", g), $("body").on("mousemove", g)
            }, "x" === h.type ? b.showLinkOption = !1 : b.showLinkOption = !0,
            k(b), f.bind("keydown", function(a) {
              a.stopPropagation()
            }), b.internalLinks = angular.copy(b.pages), b.internalLink = b.internalLinks[
              0], e(function() {
              var a = $(getSelection().focusNode).parent();
              a.is("a") ? a.attr("href") && isNaN(a.attr("href")) ? b.link =
                "external" : b.link = "internal" : b.link = "external"
            }, 1e3);
          try {
            b.fontColor = $(h.content).css("color"), b.backgroundColor = $(h.content)
              .css("background-color")
          } catch (i) {
            console.log("error")
          }
          var j = ["#000000", "#7e2412", "#ff5400", "#225801", "#0c529e",
              "#333333", "#b61b52", "#f4711f", "#3bbc1e", "#23a3d3", "#888888",
              "#d34141", "#f7951e", "#29b16a", "#97daf3", "#cccccc", "#ec7c7c",
              "#fdea02", "#79c450", "#563679", "#ffffff", "#ffcccc", "#d9ef7f",
              "#c3f649"
            ],
            l = $(".color-menu"),
            m = $(".bgcolor-menu");
          $.each(j, function(a, b) {
            l.append($(
              '<li><a dropdown-toggle class="btn" data-edit="foreColor ' +
              b + '" style="background-color: ' + b + '"></a></li>'))
          }), c(l.append($(
            '<li style="position: relative;"><a ng-model="fontColor" ng-click="setSelection($event)" colorpicker-Position="sceneToobar" class="btn glyphicon glyphicon-remove" colorpicker="rgba" style="background-color: transparent"></a><em style="background-color:#ff5448;position:absolute;height:10px;width:10px;top:0;left:0;z-index:-1"></em><em style="background-color:#f2a653;position:absolute;height:10px;width:10px;top:0;left:10px;z-index:-1"></em><em style="background-color:#08a1ef;position:absolute;height:10px;width:10px;top:10px;left:0;z-index:-1"></em><em style="background-color:#44cb83;position:absolute;height:10px;width:10px;top:10px;left:10px;z-index:-1"></em></li>'
          )))(b), b.$watch("fontColor", function(a, b) {
            a && a !== b && document.execCommand("foreColor", 0, a)
          }), $("body").on("mousemove", g), b.$on("cancelbind", function() {
            $("body").off("mousemove", g)
          }), $("#btn-toolbar").on("mousedown", function() {
            b.$broadcast("cancelbind")
          }), $("#btn-toolbar").on("mouseup", function() {
            $("body").on("mousemove", g)
          }), b.editLetter = function() {
            e(function() {
              "SPAN" !== document.getSelection().anchorNode.parentElement
                .tagName ? b.selectStyle = document.getSelection().anchorNode
                .parentElement.style : b.selectStyle = document.getSelection()
                .anchorNode.parentElement.style, "0px" === b.selectStyle.letterSpacing ||
                "" === b.selectStyle.letterSpacing ? $(".wordLineList1").addClass(
                  "letter-edit") : $(".wordLineList1").removeClass(
                  "letter-edit");
              for (var a = 1; a < b.wordLineLists.length; a++) b.selectStyle
                .letterSpacing === b.wordLineLists[a].scale ? $("." + b.wordLineLists[
                  a].value).addClass("letter-edit") : $("." + b.wordLineLists[
                  a].value).removeClass("letter-edit")
            })
          }, b.editLineHeight = function() {
            e(function() {
              var a = $("#nr #inside_" + h.id + " > .element-box"),
                c = a.get(0);
              if (c) {
                c.style.lineHeight && 1 !== c.style.lineHeight ? $(
                  ".lineHeightList4").removeClass("letter-edit") : $(
                  ".lineHeightList4").addClass("letter-edit");
                for (var d = 0; d < b.lineHeightLists.length; d++) 3 !==
                  d && (c.style.lineHeight === b.lineHeightLists[d].scale ?
                    $("." + b.lineHeightLists[d].value).addClass(
                      "letter-edit") : $("." + b.lineHeightLists[d].value)
                    .removeClass("letter-edit"))
              }
            })
          };
          var n = function(a) {
            var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            a = a.replace(b, function(a, b, c, d) {
              return b + b + c + c + d + d
            });
            var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
            return c ? {
              r: parseInt(c[1], 16),
              g: parseInt(c[2], 16),
              b: parseInt(c[3], 16)
            } : null
          };
          b.clearStyle = function() {
              e(function() {
                var a = document.getSelection().anchorNode.parentElement,
                  b = window.getSelection(),
                  c = b.focusNode,
                  d = $(c).parents(".element-box");
                d = $(d).get(0), "A" === a.tagName && (a.style = ""), d.style
                  .letterSpacing = "", d.style.lineHeight = "", $("#" + h.id)
                  .get(0).style.fontFamily = "", $("#" + h.id).get(0).style
                  .fontSize = "", $("#" + h.id).get(0).style.color = "", $(
                    "#" + h.id).get(0).style.backgroundColor = "", $("#" +
                    h.id).get(0).style.fontStyle = "", $("#" + h.id).get(0)
                  .style.textDecoration = "", $("#" + h.id).get(0).style.textAlign =
                  "left", $("#" + h.id).get(0).style.letterSpacing = "", $(
                    "#" + h.id).get(0).style.lineHeight = "", h.css.lineHeight =
                  "", h.css.fontFamily = "", h.css.backgroundColor = "", h.css
                  .letterSpacing = "", h.css.textAlign = "left", h.css.fontSize =
                  "24px"
              })
            }, $.each(j, function(a, b) {
              var c = n(b);
              m.append($(
                '<li><a dropdown-toggle class="btn" data-edit="backColor rgba(' +
                c.r + "," + c.g + "," + c.b +
                ', 0.3)" style="background-color: rgba(' + c.r + "," + c.g +
                "," + c.b + ', 0.3)"></a></li>'))
            }), c(m.append($(
              '<li style="position: relative;"><a ng-model="backgroundColor" ng-click="setSelection($event)" colorpicker="rgba" colorpicker-Position="sceneToobar" class="btn glyphicon glyphicon-remove" style="background-color: transparent"></a><em style="background-color:#ff5448;position:absolute;height:10px;width:10px;top:0;left:0;z-index:-1"></em><em style="background-color:#f2a653;position:absolute;height:10px;width:10px;top:0;left:10px;z-index:-1"></em><em style="background-color:#08a1ef;position:absolute;height:10px;width:10px;top:10px;left:0;z-index:-1"></em><em style="background-color:#44cb83;position:absolute;height:10px;width:10px;top:10px;left:10px;z-index:-1"></em></li>'
            )))(b), b.$watch("backgroundColor", function(a) {
              a && document.execCommand("backColor", 0, a)
            }), b.setSelection = function() {}, h.css.lineHeight = (parseFloat(
              h.css.lineHeight) || 1).toFixed(1), b.increaseLineHeight =
            function() {
              var a = window.getSelection(),
                b = a.focusNode,
                c = $(b).parents(".element-box");
              h.css.lineHeight = (parseFloat(h.css.lineHeight) + .1).toFixed(1),
                c.css("line-height", h.css.lineHeight), $(b.parentNode).focus()
            }, b.decreaseLineHeight = function() {
              var a = window.getSelection(),
                b = a.focusNode,
                c = $(b).parents(".element-box");
              h.css.lineHeight > .1 && (h.css.lineHeight = (parseFloat(h.css.lineHeight) -
                  .1).toFixed(1), c.css("line-height", h.css.lineHeight)), $(b.parentNode)
                .focus()
            }, b.adjustLineHeight = function(b) {
              var c = window.getSelection(),
                d = c.focusNode,
                e = $(d).parents(".element-box");
              h.css.lineHeight = parseFloat(b).toFixed(2), e.css("line-height",
                h.css.lineHeight), $(d.parentNode).focus(), a.$broadcast(
                "adjust.line.height")
            }, b.increaseWordLine = function(a) {
              var b = window.getSelection(),
                c = b.focusNode,
                d = $(c).parents(".element-box");
              h.css.letterSpacing = a, d.css("letter-spacing", h.css.letterSpacing),
                0 === d.find("span").length && $("#" + h.id).attr("style",
                  "letter-spacing:" + a);
              for (var e = 0; e < d.find("span").length; e++) d.find("span")[e]
                .style.letterSpacing = a
            }, b.wordLineLists = [{
              value: "wordLineList1",
              name: "0%",
              scale: "0"
            }, {
              value: "wordLineList2",
              name: "10%",
              scale: "0.1em"
            }, {
              value: "wordLineList3",
              name: "25%",
              scale: "0.25em"
            }, {
              value: "wordLineList4",
              name: "50%",
              scale: "0.5em"
            }, {
              value: "wordLineList5",
              name: "75%",
              scale: "0.75em"
            }, {
              value: "wordLineList6",
              name: "100%",
              scale: "1em"
            }], b.lineHeightLists = [{
              value: "lineHeightList1",
              name: "0.25",
              scale: .25
            }, {
              value: "lineHeightList2",
              name: "0.50",
              scale: .5
            }, {
              value: "lineHeightList3",
              name: "0.75",
              scale: .75
            }, {
              value: "lineHeightList4",
              name: "1.00",
              scale: 1
            }, {
              value: "lineHeightList5",
              name: "1.50",
              scale: 1.5
            }, {
              value: "lineHeightList6",
              name: "1.75",
              scale: 1.75
            }, {
              value: "lineHeightList7",
              name: "2.00",
              scale: 2
            }, {
              value: "lineHeightList8",
              name: "2.50",
              scale: 2.5
            }, {
              value: "lineHeightList9",
              name: "3.00",
              scale: 3
            }]
        }

        function i(a) {
          var b = document.getElementsByTagName("style")[0],
            c = document.createTextNode(a);
          b.appendChild(c)
        }

        function j(a, b) {
          var c = d.currentElemDef;
          a.unshift({
            fontFamily: "defaultFont",
            name: "默认字体",
            status: 1
          }), a.reverse();
          var e = $(".fontname-menu");
          $.each(a, function(a, d) {
            1 === d.status && ("defaultFont" !== d.fontFamily ? e.prepend($(
              '<li class="' + d.fontFamily +
              '"><a dropdown-toggle class="btn" data-edit="fontName ' +
              d.fontFamily + '">' + d.name + "</a></li>")) : e.prepend(
              $('<li class="' + d.fontFamily +
                '"><a dropdown-toggle class="btn" data-edit="fontName ' +
                d.fontFamily + '">(&nbsp' + d.name + "&nbsp)</a></li>")
            ));
            var g, h;
            "defaultFont" !== d.fontFamily ? $("." + d.fontFamily).on(
                "click",
                function() {
                  h = JSON.parse(f.get("editTextId")) || [], -1 === $.inArray(
                      c.id, h) && h.push(c.id), f.push("editTextId", JSON.stringify(
                      h)), c.css.fontFamily = d.fontFamily, c.fonts = c.fonts || {},
                    c.fonts[d.fontFamily] = d.woffPath;
                  var a = JSON.parse(f.get("shoppingFontFamily")) || {};
                  a[d.fontFamily] || (g = "@font-face{font-family:" + d.fontFamily +
                    ";src: url(" + PREFIX_FILE_HOST + d.woffPath +
                    ") format(woff);}", i(g), a[d.fontFamily] = !0, f.push(
                      "shoppingFontFamily", JSON.stringify(a)))
                }) : $("." + d.fontFamily).on("click", function() {
                h = JSON.parse(f.get("editTextId")) || [], -1 === $.inArray(
                  c.id, h) && h.push(c.id), f.push("editTextId", JSON.stringify(
                  h))
              }), b.selectStyle.fontFamily ? b.selectStyle.fontFamily === d
              .fontFamily && (b.defaultFamily = d.name) : b.defaultFamily =
              "默认字体"
          })
        }

        function k(a) {
          $(".moreFont").on("click", function() {
            g.openFontShopping()
          });
          var b = JSON.parse(sessionStorage.getItem("toolbarFonts")) || [];
          0 === b.length ? g.getMyFontFamily().then(function(c) {
            c.data.success ? (b = c.data.list, a.fontNames = c.data.list,
              sessionStorage.setItem("toolbarFonts", JSON.stringify(b)),
              j(b, a)) : alert("网络加载失败,请稍后再试!")
          }) : (a.fontNames = b, e(function() {
            j(b, a)
          }))
        }
        return {
          restrict: "EA",
          replace: !0,
          templateUrl: a.tplUrl + "directives/toolbar.tpl.html",
          link: h
        }
      }
    ]), angular.module("app.directives.uislider", []).value("uiSliderConfig", {})
  .directive("uiSlider", ["uiSliderConfig", "$timeout", function(a, b) {
    return a = a || {}, {
      require: "ngModel",
      compile: function() {
        return function(c, d, e, f) {
          function g(a, b) {
            return b ? parseFloat(a) : parseInt(a, 10)
          }

          function h() {
            d.slider("destroy")
          }
          var i = angular.extend(c.$eval(e.uiSlider) || {}, a),
            j = {
              min: null,
              max: null
            },
            k = ["min", "max", "step"],
            l = angular.isUndefined(e.useDecimals) ? !1 : !0,
            m = function() {
              angular.isArray(f.$viewValue) && i.range !== !0 && (
                console.warn(
                  "Change your range option of ui-slider. When assigning ngModel an array of values then the range option should be set to true."
                ), i.range = !0), angular.forEach(k, function(a) {
                angular.isDefined(e[a]) && (i[a] = g(e[a], l))
              }), d.slider(i), m = angular.noop
            };
          angular.forEach(k, function(a) {
            e.$observe(a, function(b) {
              b && (m(), i[a] = g(b, l), d.slider("option", a,
                g(b, l)), f.$render())
            })
          }), e.$observe("disabled", function(a) {
            m(), d.slider("option", "disabled", !!a)
          }), c.$watch(e.uiSlider, function(a) {
            m(), a !== undefined && d.slider("option", a)
          }, !0), b(m, 0, !0), d.bind("slide", function(a, b) {
            f.$setViewValue(b.values || b.value), c.$apply()
          }), f.$render = function() {
            m();
            var a = i.range === !0 ? "values" : "value";
            i.range || !isNaN(f.$viewValue) || f.$viewValue instanceof Array ?
              i.range && !angular.isDefined(f.$viewValue) && (f.$viewValue = [
                0, 0
              ]) : f.$viewValue = 0, i.range === !0 && (angular.isDefined(
                  i.min) && i.min > f.$viewValue[0] && (f.$viewValue[
                  0] = i.min), angular.isDefined(i.max) && i.max <
                f.$viewValue[1] && (f.$viewValue[1] = i.max), f.$viewValue[
                  0] > f.$viewValue[1] && (j.min >= f.$viewValue[1] &&
                  (f.$viewValue[0] = j.min), j.max <= f.$viewValue[
                    0] && (f.$viewValue[1] = j.max)), j.min = f.$viewValue[
                  0], j.max = f.$viewValue[1]), d.slider(a, f.$viewValue)
          }, c.$watch(e.ngModel, function() {
            i.range === !0 && f.$render()
          }, !0), d.bind("$destroy", h);
          var n = $('<div class="ui-slider-progress-bar"></div>');
          d.append(n);
          var o = c.$watch(e.ngModel, function() {
            setTimeout(function() {
              n.css("width", $(".ui-slider-handle", d).css(
                "left"))
            })
          }, !0);
          d.bind("$destroy", function() {
            o()
          })
        }
      }
    }
  }]).directive("uiSliderT", ["$rootScope", function(a) {
    var b = $(document);
    return {
      require: "ngModel",
      template: '<div class="slider-con"></div>',
      link: function(c, d, e, f) {
        d.on("$destroy", function() {
          d.unbind("mousedown")
        });
        var g = "string" == typeof e.min ? e.min : -Number.MAX_VALUE,
          h = "string" == typeof e.max ? e.max : Number.MAX_VALUE,
          i = "string" == typeof e.step ? e.step : 1,
          j = h / 100,
          k = "string" == typeof e.max ? e.fixed : 0;
        f.$render = function() {
          d.find(".slider-con").css("width", 100 * (f.$modelValue || 0) /
            h + "%")
        }, d.mousedown(function(d) {
          d.stopPropagation();
          var l, m = d.offsetX,
            n = d.pageX,
            o = function(a) {
              a.stopPropagation(), l = a.pageX - n;
              var b = Math.abs(((m + l) * j / i).toFixed(k)) * i;
              b > h ? b = Math.abs(h) : g > b && (b = Math.abs(g)), f
                .$viewValue !== b && (f.$setViewValue(b), f.$render(),
                  c.$apply())
            },
            p = function() {
              b.unbind("mouseup", p), b.unbind("mousemove", o), e.hisRecords &&
                a.$broadcast("hisChange")
            };
          b.mousemove(o), b.mouseup(p)
        }), d.click(function(b) {
          b.stopPropagation();
          var d = Math.abs(b.offsetX * h / 100 / i).toFixed(k) * i;
          d > h ? d = Math.abs(h) : g > d && (d = Math.abs(g)), f.$setViewValue(
            d), f.$render(), c.$apply(), e.hisRecords && a.$broadcast(
            "hisChange")
        })
      }
    }
  }]), angular.module("common.resources.print", ["common.services.print"]).factory(
    "printResource", ["$rootScope", "printService", "$q", function(a, b, c) {
      function d() {
        return w
      }

      function e() {
        return x
      }

      function f(d) {
        return d.type && d.width && d.height && d.unit ? b.addPrint(d).then(
          function(b) {
            return a.$broadcast("print.add", b.data), b.data
          })["catch"](function(a) {
          c.reject(a)
        }) : void 0
      }

      function g(c, d, e, f, g) {
        b.getPrintList(c, d, e, f, g).success(function(b) {
          b.success && a.$broadcast("printList.get", b)
        })
      }

      function h(d) {
        return b.getPrint(d).then(function(b) {
          var c = b.data || {};
          return a.$broadcast("printBase.get", c.obj), c.obj
        })["catch"](function(a) {
          c.reject(a)
        })
      }

      function i(d, e) {
        return b.getPrint(d, 1).then(function(b) {
          var c = b.data || {};
          return a.$broadcast("printDetail.get", c.obj), c.obj
        })["catch"](function(b) {
          a.$broadcast("printDetail.get.fail"), c.reject(b)
        })
      }

      function j(c) {
        b.deletePrint(c).success(function(b) {
          b.success && a.$broadcast("print.delete")
        })
      }

      function k(c) {
        b.copyPrint(c).success(function(b) {
          b.success && a.$broadcast("print.copy", b)
        })
      }

      function l(c, d) {
        b.transferPrint(c, d).success(function(b) {
          b.success ? a.$broadcast("print.transfer", "success", b) : a.$broadcast(
            "print.transfer", "fail", b)
        })
      }

      function m(c) {
        b.applyTpl(c).success(function(b) {
          b.success ? a.$broadcast("print.apply", "success", b) : a.$broadcast(
            "print.apply", "fail", b)
        })
      }

      function n(c, d, e, f) {
        b.getTemplateList(c, d, e, f).success(function(b) {
          b.success && a.$broadcast("templateList.get", b)
        })
      }

      function o() {
        b.getHotList().success(function(b) {
          b.success && a.$broadcast("hotList.get", b)
        })
      }

      function p() {
        b.getScenePicGroup().success(function(b) {
          b.success && a.$broadcast("scenePic.group.get", b.list)
        })
      }

      function q(c, d) {
        b.saveToH5(c, d).success(function(b) {
          b.success && a.$broadcast("saveToH5.success")
        })
      }

      function r() {
        return b.getAds().then(function(b) {
          var c = b.data;
          return a.$broadcast("ads.get", c), c
        })["catch"](function(a) {
          c.reject(a)
        })
      }

      function s(d, e, f) {
        return b.getOrderInfo(d, e, f).then(function(b) {
          var c = b.data;
          return a.$broadcast("orderInfo.get", c), c
        })["catch"](function(a) {
          c.reject(a)
        })
      }

      function t(a, d) {
        return b.getDetailsURL(a, d).then(function(a) {
          var b = a.data;
          return b
        })["catch"](function(a) {
          c.reject(a)
        })
      }

      function u(d, e, f, g) {
        return b.getPngPrint(d, e, f, g).then(function(b) {
          var c = b.data;
          return a.$broadcast("pngPrint.get", c), c
        })["catch"](function(a) {
          c.reject(a)
        })
      }

      function v() {
        return b.getOrderCount().then(function(a) {
          return a.data
        })["catch"](function(a) {
          c.reject(a)
        })
      }
      var w = [{
          name: "名片",
          value: "1",
          width: 90,
          height: 54,
          unit: "mm"
        }, {
          name: "邀请函",
          value: "2",
          width: 140,
          height: 210,
          unit: "mm"
        }, {
          name: "贺卡",
          value: "3",
          width: 140,
          height: 210,
          unit: "mm"
        }, {
          name: "海报",
          value: "4",
          width: 420,
          height: 570,
          unit: "mm"
        }, {
          name: "宣传单",
          value: "5",
          width: 210,
          height: 285,
          unit: "mm"
        }, {
          name: "淘宝商品主图",
          value: "6",
          width: 800,
          height: 800,
          unit: "px"
        }, {
          name: "微信公众号首图",
          value: "7",
          width: 900,
          height: 500,
          unit: "px"
        }, {
          name: "长图",
          value: "8",
          width: 800,
          height: 2400,
          unit: "px"
        }, {
          name: "GIF动图",
          value: "9",
          width: 600,
          height: 800,
          unit: "px"
        }, {
          name: "自定义",
          value: "0"
        }],
        x = {
          onlineMarketing: [{
            name: "长图",
            value: "8"
          }, {
            name: "淘宝商品主图",
            value: "6"
          }, {
            name: "微信公众号首图",
            value: "7"
          }, {
            name: "GIF动图",
            value: "9"
          }],
          adPrint: [{
            name: "宣传单",
            value: "5"
          }, {
            name: "邀请函",
            value: "2"
          }, {
            name: "海报",
            value: "4"
          }, {
            name: "贺卡",
            value: "3"
          }, {
            name: "名片",
            value: "1"
          }]
        };
      return {
        addPrint: f,
        getPrintList: g,
        getPrintBase: h,
        getPrintDetail: i,
        deletePrint: j,
        copyPrint: k,
        transferPrint: l,
        applyTpl: m,
        getTemplateList: n,
        getAllTypes: d,
        getTplTypes: e,
        getHotList: o,
        getScenePicGroup: p,
        saveToH5: q,
        getAds: r,
        getOrderInfo: s,
        getDetailsURL: t,
        getPngPrint: u,
        getOrderCount: v
      }
    }]), angular.module("common.services.print", []).factory("printService", [
    "$http",
    function(a) {
      function b(b) {
        var c = "m/print/create";
        return a({
          withCredentials: !0,
          method: "POST",
          url: PRINT_HOST_SERVER + c,
          headers: {
            "Content-Type": "text/plain; charset=UTF-8"
          },
          data: JSON.stringify(b)
        })
      }

      function c(b, c, d, e, f) {
        var g = "m/print/list?";
        return g += "pageNo=" + (b || 1), g += "&pageSize=" + (c || 10),
          "string" == typeof d && (g += "&type=" + d), "string" == typeof e &&
          (g += "&width=" + e), "string" == typeof f && (g += "&height=" + f),
          a({
            withCredentials: !0,
            method: "POST",
            url: PRINT_HOST_SERVER + g
          })
      }

      function d(b, c) {
        var d = "m/print/info?id=" + b;
        return c && (d += "&page=1"), a({
          withCredentials: !0,
          method: "GET",
          url: PRINT_HOST_SERVER + d
        })
      }

      function e(b) {
        var c = "m/print/delete?id=" + b;
        return a({
          withCredentials: !0,
          method: "GET",
          url: PRINT_HOST_SERVER + c
        })
      }

      function f(b) {
        var c = "m/print/copy?id=" + b;
        return a({
          withCredentials: !0,
          method: "GET",
          url: PRINT_HOST_SERVER + c
        })
      }

      function g(b, c) {
        var d = "m/print/transfer";
        return d += "?loginName=" + c, d += "&id=" + b, a({
          withCredentials: !0,
          method: "POST",
          url: PRINT_HOST_SERVER + d
        })
      }

      function h(b) {
        var c = "m/print/tpl/apply?id=" + b;
        return a({
          withCredentials: !0,
          method: "POST",
          url: PRINT_HOST_SERVER + c
        })
      }

      function i(b, c, d, e) {
        var f = "m/print/tpl/page/list";
        return f += "?pageNo=" + (b || 1), f += "&pageSize=" + (c || 10),
          "number" == typeof d && (f += "&type=" + d), "number" == typeof e &&
          e && (f += "&tag=" + e), a({
            withCredentials: !0,
            method: "GET",
            url: PRINT_HOST_SERVER + f
          })
      }

      function j() {
        var b = "m/print/hot/list";
        return a({
          withCredentials: !0,
          method: "POST",
          url: PRINT_HOST_SERVER + b
        })
      }

      function k() {
        var b = "m/base/file/tag/my";
        return a({
          withCredentials: !0,
          method: "GET",
          url: PREFIX_URL + b
        })
      }

      function l(b, c) {
        var d = "m/print/save/file",
          e = {
            list: c,
            tagId: b
          };
        return a({
          withCredentials: !0,
          method: "POST",
          headers: {
            "Content-Type": "text/plain; charset=UTF-8"
          },
          url: PRINT_HOST_SERVER + d,
          data: e
        })
      }

      function m() {
        var b = "index.php?c=ad&a=banners&pageCode=print_ads";
        return a({
          method: "GET",
          url: PREFIX_S2_URL + b
        })
      }

      function n(b, c, d) {
        var e = "m/print/printshop/order",
          f = {
            pageNo: b,
            pageSize: c
          };
        return "all" != d && $.extend(f, {
          status: d
        }), a({
          withCredentials: !0,
          method: "GET",
          params: f,
          url: PRINT_HOST_SERVER + e
        })
      }

      function o(b, c) {
        var d = "m/print/printshop/order/details",
          e = {
            orderNumber: b,
            shopId: c
          };
        return a({
          withCredentials: !0,
          method: "POST",
          params: e,
          url: PRINT_HOST_SERVER + d
        })
      }

      function p(b, c, d, e) {
        var f = "m/print/printshop/exp/pdf",
          g = {
            printId: b,
            shopId: c,
            pages: d,
            version: e
          };
        return a({
          withCredentials: !0,
          method: "GET",
          url: PRINT_HOST_SERVER + f,
          params: g
        })
      }

      function q() {
        var b = "m/print/printshop/order/count";
        return a({
          withCredentials: !0,
          method: "GET",
          url: PRINT_HOST_SERVER + b
        })
      }
      return {
        addPrint: b,
        getPrintList: c,
        getPrint: d,
        deletePrint: e,
        copyPrint: f,
        transferPrint: g,
        applyTpl: h,
        getTemplateList: i,
        getHotList: j,
        getScenePicGroup: k,
        saveToH5: l,
        getAds: m,
        getOrderInfo: n,
        getDetailsURL: o,
        getPngPrint: p,
        getOrderCount: q
      }
    }
  ]), angular.module("common.resources.print.template", [
    "common.services.print.template"
  ]).factory("templateResource", ["$rootScope", "templateService", function(a,
    b) {
    function c(c) {
      b.getTagCategory(c).success(function(b) {
        b.success && a.$broadcast("TagCategory.get", b)
      })
    }
    return {
      getTagCategory: c
    }
  }]), angular.module("common.services.print.template", []).factory(
    "templateService", ["$http", function(a) {
      function b(b) {
        var c = "base/class/print_size_list";
        return "0" != b && (c += "_" + b), a({
          withCredentials: !0,
          method: "GET",
          url: PRINT_HOST_SERVER + c
        })
      }
      return {
        getTagCategory: b
      }
    }]),

     angular.module("print.directives.validate", []).directive(
    "eqdValidate",
    function() {
      function a(a, b, c) {
        b.on("$destroy", function() {
          b.unbind("keydown")
        }), b.keydown(function(a) {
          var b = a.keyCode;
          return /number/.test(c.eqdValidate) ? a.shiftKey ? !1 : !!(b >=
            48 && 57 >= b || b >= 96 && 105 >= b || 36 == b || 35 == b ||
            37 == b || 39 == b || 8 == b || 46 == b) : !0
        })
      }
      return {
        link: a
      }
    })



 


