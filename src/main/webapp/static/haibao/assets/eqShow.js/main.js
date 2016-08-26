 angular.module("main.transferScene", ["services.usercenter"]), angular.module(
    "main.transferScene").controller("TransferSceneCtrl", ["$scope",
    "$rootScope", "sceneService", "sceneId", "dataCacheService",
    "ModalService",
    function(a, b, c, d, e, f) {
      a.model = {
        toUser: "",
        toPlatform: 0,
        actionerrorFlag: !1
      }, a.selectPlatform = function(b) {
        a.model.toPlatform = b
      }, a.transferScene = !0, a.confirm = function() {
        return a.model.toUser ? 0 === a.model.toPlatform && a.model.toUser ===
          b.user.loginName ? (a.actionerror = "不能转送自己", void(a.model.actionerrorFlag = !
            0)) : (0 === a.model.toPlatform ? a.notification =
            "转赠后将不再拥有原场景,建议备份后再转赠" : a.notification = "转赠后同时保留此场景", void f.openConfirmDialog({
              msg: a.notification,
              confirmName: "确定",
              cancelName: "取消"
            }, function() {
              c.transferScene(d.sceneId, a.model.toUser, a.model.toPlatform)
                .then(function(b) {
                  200 === b.data.code || "200" === b.data.code ? (e.clear(
                    "sceneList"), a.transferScene = !1) : f.openMsgDialog({
                    msg: b.data.msg
                  })
                })
            })) : (a.actionerror = "账号不能为空", void(a.model.actionerrorFlag = !
            0))
      }, a.cancel = function() {
        a.$dismiss()
      }, a.submit = function() {
        a.$close()
      }
    }
  ]),
   angular.module("main.data", ["app.directives.dataDraggable",
    "customer.group", "services.i18nNotifications", "app.directives.customer"
  ]), 
   angular.module("main.data").controller("CustomerCtrl", ["$rootScope",
    "$scope", "$route", "$location", "$timeout", "dataService", "$modal",
    "ModalService", "i18nNotifications", "security", "$modal",
    function(a, b, c, d, e, f, g, h, i, j, g) {
      b.PREFIX_URL = PREFIX_URL, b.isActive = "customer", b.select = 0, b.showBranchSelect = !
        0;
      var k = a.branchid;
      b.toPage = 1, b.model = {}, b.dataShow = "message", f.getCustomDatas(k),
        b.$on("customDatas", function(a, c) {
          b.customCount = c
        }), b.customer = {
          group: null,
          origin: null
        }, b.branchEdit = !0, b.branchDelete = !0, b.branchExport = !0, e(
          function() {
            (21 === b.user.type || "21" === b.user.type || 51 === b.user.type ||
              "51" === b.user.type) && (b.user.extPermi ? (
              /^([\d,]+,)?1(,[\d,]*)?$/.test(b.user.extPermi) ? b.branchEdit = !
              0 : b.branchEdit = !1, /^([\d,]+,)?2(,[\d,]*)?$/.test(b.user.extPermi) ?
              b.branchDelete = !0 : b.branchDelete = !1,
              /^([\d,]+,)?3(,[\d,]*)?$/.test(b.user.extPermi) ? b.branchExport = !
              0 : b.branchExport = !1) : (b.branchEdit = !1, b.branchDelete = !
              1, b.branchExport = !1))
          }, 100), b.downLoad = function(a, b) {
          var c;
          c = PREFIX_S3_URL + "index.php?c=custom&a=exp" + (k ? "?user=" + k :
              ""), b && (c += (/\?/.test(c) ? "&" : "?") + "origin=" + b), a &&
            (c += (/\?/.test(c) ? "&" : "?") + "groupId=" + a), location.href =
            c
        }, b.staticFileds = [], b.staticFileds = [{
          id: "name",
          name: "姓名"
        }, {
          id: "mobile",
          name: "手机"
        }, {
          id: "email",
          name: "邮箱"
        }, {
          id: "sex",
          name: "性别"
        }, {
          id: "company",
          name: "公司"
        }, {
          id: "job",
          name: "职位"
        }, {
          id: "address",
          name: "地址"
        }, {
          id: "tel",
          name: "电话"
        }, {
          id: "website",
          name: "个人网站"
        }, {
          id: "qq",
          name: "QQ"
        }, {
          id: "weixin",
          name: "微信"
        }, {
          id: "remark",
          name: "其他"
        }], b.selectScene = function(a, c) {
          b.selectedSceneId = a, f.getSceneField(a).then(function(a) {
            b.fields = a.data.list, b.select = c, $(".list_attribute").html(
              "拖拽到此处")
          })
        }, b.clickScene = function() {
          d.path("main")
        }, b.clickSpread = function() {
          d.path("main/spread")
        }, b.clickCustomer = function() {
          d.path("main/customer")
        }, b.editCustomer = function(a) {
          b.getDataDetail(a.id), b.editData = !0
        }, b.removeCustomer = function(a) {
          h.openConfirmDialog({
            msg: "确定删除此条数据?"
          }, function() {
            f.deleteDataById(a.id).then(function(a) {
              (200 === a.data.code || "200" === a.data.code) && i.pushForCurrentRoute(
                  "custom.data.delete", "notify.success"), 1 === b.customerDatas
                .length && b.model.currentPage > 1 ? b.getDataBySceneId(
                  b.model.currentPage - 1, k, b.groupId, b.origin) :
                b.getDataBySceneId(b.model.currentPage, k, b.groupId,
                  b.origin), f.getCustomDatas(k)
            })
          })
        }, b.addColor = function(a) {
          b.trIndex = a
        }, b.removeColor = function() {
          b.trIndex = -1
        }, b.totalItems = 0, b.model.currentPage = 0, b.toPage = "", b.pageChanged =
        function(a, c, d, e) {
          return 1 > a || a > b.totalItems / 10 + 1 ? void alert("此页超出范围") :
            (b.model.currentPage = a, void b.getDataBySceneId(a, c, d, e))
        }, b.getDataBySceneId = function(a, c, d, e) {
          a || (a = 1), d && (b.groupId = d), e && (b.origin = e), f.getAllData(
            a, c, d, e).then(function(a) {
            b.customerDatas = a.data.list, b.totalItems = a.data.map.count,
              b.model.currentPage = a.data.map.pageNo, b.toPage = "", b.totalNum =
              Math.ceil(b.totalItems / a.data.map.pageSize)
          })
        }, b.getDataBySceneId(1, k, null, null), b.editCustom = function(a) {
          d.path("/main/customer/" + a.id)
        };
      var l = function() {
        f.getDataMessage(k).then(function(a) {
          b.dataMessage = a.data.list
        })
      };
      l(), b.sceneLoad = function(a) {
        var b = PREFIX_S3_URL +
          "index.php?c=scenedata&a=excel&flag=noheader&id=" + a + (k ?
            "&user=" + k : "");
        location.href = b
      }, b.importDatas = function() {
        f.getPremergeScenes(k).then(function(a) {
          b.importDatas = a.data.list, a.data.list.length > 0 && b.selectScene(
            a.data.list[0].ID, 0)
        })
      }, b.associateData = {};
      var m = !0;
      if (b.confirm = function() {
          m ? jQuery.isEmptyObject(b.associateData, {}) ? (alert("请导入数据！"), m = !
            0) : (f.mergeSceneData(b.selectedSceneId, b.associateData).then(
            function() {
              alert("你已成功导入客户！"), c.reload()
            }), m = !1) : alert("请不要重复提交！")
        }, b.importDatas(), b.isAllowedToAccessGrouping = j.isAllowToAccess(j
          .accessDef.GROUP_CUSTOMER), b.isAllowedToAccessGrouping) {
        b.allImages = {
          selected: !1
        }, b.selectAll = function() {
          for (var a = 0, c = b.customerDatas.length; c > a; a++) b.customerDatas[
            a].selected = b.allImages.selected
        }, b.selectCustomer = function(a) {
          a.selected || (b.allImages.selected = !1)
        }, b.groups = [], b.getGroups = function() {
          b.groups.length > 0 || f.getGroups(k).then(function(a) {
            b.groups = a.data.list
          })
        }, b.getGroups(), b.getOrigins = function() {
          f.getOrigin(k).then(function(a) {
            b.origins = a.data.list
          }, function() {})
        }, b.getOrigins(), b.addGroup = function() {
          g.open({
            windowClass: "group-console console",
            templateUrl: tplUrl + "main/console/group.tpl.html",
            controller: "AddGroupCtrl",
            resolve: {
              sceneCreat: function() {
                return {}
              }
            }
          }).result.then(function(a) {
            b.groups.push(a), q(), i.pushForCurrentRoute(
              "group.create.success", "notify.success")
          })
        };
        var n = [],
          o = [];
        b.assignGroup = function() {
          n = [], o = [];
          for (var a = 0, c = b.customerDatas.length; c > a; a++) b.customerDatas[
            a].selected && n.push(b.customerDatas[a].id);
          for (a = 0, c = b.groups.length; c > a; a++) b.groups[a].selected &&
            o.push(b.groups[a].id);
          if (!n.length) return void alert("您还没有选择客户!");
          if (!o.length) return void alert("您还没有选择分组!");
          var d = {
            cIds: n,
            gIds: o
          };
          f.assignGroup(d).then(function(a) {
            a.data.success && (q(), b.allImages.selected = !1, p(), i.pushForCurrentRoute(
              "data.assign.success", "notify.success"))
          }, function() {})
        }, b.deleteCustomer = function(a) {
          n = [];
          var c, d;
          if (a) c = {
            ids: a.id
          }, d = "确定删除此条数据?";
          else {
            for (var e = 0, g = b.customerDatas.length; g > e; e++) b.customerDatas[
              e].selected && n.push(b.customerDatas[e].id);
            if (!n.length) return void alert("您还没有选择客户!");
            c = {
              ids: n
            }, d = "确定删除此条数据?"
          }
          h.openConfirmDialog({
            msg: d
          }, function() {
            f.deleteCustomer(c).then(function(a) {
              a.data.success && (b.allImages.selected = !1, p(), q(),
                i.pushForCurrentRoute("data.delete.success",
                  "notify.success"))
            }, function() {
              alert("服务器异常")
            })
          })
        }, b.deleteGroup = function(a, c) {
          h.openConfirmDialog({
            msg: "确定删除此分组?"
          }, function() {
            f.deleteGroup(a.id).then(function(a) {
              a.data.success && (b.groups.splice(c, 1), q(), i.pushForCurrentRoute(
                "group.delete.success", "notify.success"))
            }, function() {
              alert("服务器异常")
            })
          })
        };
        var p = function() {
            1 === b.customerDatas.length && b.model.currentPage > 1 ? b.getDataBySceneId(
              b.model.currentPage - 1) : b.getDataBySceneId(b.model.currentPage)
          },
          q = function() {
            for (var a = 0, c = b.groups.length; c > a; a++) b.groups[a].selected = !
              1
          }
      }
      b.createData = function() {
        d.path("main/customer/create")
      }, b.sceneData = function() {
        b.dataShow = "dataIn"
      }, b.uploadData = function() {
        g.open({
          windowClass: "login-container six-contain",
          templateUrl: tplUrl + "main/uploadData.tpl.html",
          controller: "uploadDataCtrl",
          resolve: {}
        }).result.then(function(a) {
          a && b.getDataBySceneId(1, k, null, null)
        })
      }, b.$watch("model.currentPage", function(a, c) {
        a && a != c && (b.model.toPage = a)
      }, !0)
    }
  ]).filter("propsFilter", function() {
    return function(a, b) {
      var c = [];
      if (angular.isArray(a)) {
        var d = Object.keys(b);
        a.forEach(function(a) {
          for (var e = !1, f = 0; f < d.length; f++) {
            var g = d[f],
              h = b[g].toLowerCase();
            if (-1 !== a[g].toString().toLowerCase().indexOf(h)) {
              e = !0;
              break
            }
          }
          e && c.push(a)
        })
      } else c = [];
      return c
    }
  }), angular.module("main", ["main.print.shop", "services.mine",
    "services.data", "app.directives.pageTplTypes", "services.staticRes",
    "app.directives.addelement", "main.data", "main.print", "main.print.ads",
    "main.transferScene", "services.usercenter", "main.userGuide",
    "services.i18nNotifications", "common.directives.scroll",
    "main.newVersionFrame", "main.data.uploadData",
    "scene.create.console.font"
  ]),

     angular.module("main.newVersionFrame", []), angular.module(
    "main.newVersionFrame").controller("newVersionFrame", ["$scope", function(a) {
    a.cancel = function() {
      a.$dismiss()
    }
  }]), angular.module("main.print.ads", ["common.resources.print"]).controller(
    "AdsCtrl", ["$scope", "printResource", function(a, b) {
      b.getAds(), a.$on("ads.get", function(b, c) {
        var d = localStorage.getItem("main_print_ads"),
          e = c.list.map(function(a) {
            return a.id
          }).sort(function(a, b) {
            return a - b
          }).join("");
        return a.adsList = c.list, a.showArrow = !0, a.adsList.length ? (
          a.adsList.length < 2 && (a.showArrow = !1), a.showAds = !d ||
          d != e, void(a.showAds && window.localStorage.setItem(
            "main_print_ads", e))) : void(a.showAds = !1)
      })
    }]).directive("eqdRepeatLast", function() {
    return function(a, b, c) {
      a.$last && a[c.eqdRepeatLast]()
    }
  }).directive("eqdAds", function() {
    function a(a, b) {
      var c = b.find(".items"),
        d = c.width(),
        e = 0,
        f = null;
      c.css({
        height: d / 2,
        marginTop: -d / 4,
        marginLeft: -d / 2
      }), a.repeatOver = function() {
        e = a.adsList.length, f = b.find(".items ul"), f.css({
          width: d * e
        }), f.find("li").css({
          width: d
        }), f.find("img").css({
          maxHeight: d / 2
        })
      };
      var g = 0;
      a.toggle = function(a) {
        "left" == a ? 0 >= g ? g = e - 1 : --g : g >= e - 1 ? g = 0 : ++g,
          f.css({
            transform: "translate(-" + d * g + "px)"
          })
      }, a.close = function() {
        b.css({
          display: "none"
        })
      }
    }
    return {
      restrict: "E",
      templateUrl: tplUrl + "main/print/ads.tpl.html",
      controller: "AdsCtrl",
      replace: !0,
      link: a
    }
  }), angular.module("print.common.directives.preview", [
    "common.resources.print"
  ]).directive("eqdPreview", ["printResource", "ModalService", preview]),
  angular.module("main.print.affirmPrint", ["common.resources.print"]).controller(
    "AffirmPrintCtrl", ["$rootScope", "$scope", "printResource", "printId",
      "i18nNotifications",
      function(a, b, c, d, e) {
        var f = b.picker = {
            coverArr: []
          },
          g = 1682;
        c.getPrintDetail(d), b.$on("printDetail.get", function(a, b) {
          $.each(b.pages, function(a, b) {
            f.coverArr.push({
              cover: b.cover,
              checked: !1,
              pageId: b.id,
              version: b.version
            })
          }), b.shopId && (g = b.shopId)
        }), b.confirm = function() {
          var a = [],
            c = [],
            d = !1;
          $.each(f.coverArr, function(b, e) {
            if (e.checked) {
              if (!e.cover) return d = !0, !1;
              a.push(e.pageId), c.push(e.version)
            }
          }), d ? e.pushForCurrentRoute("print.shop.images.fail",
            "notify.success") : a.length > 2 ? e.pushForCurrentRoute(
            "print.images.number", "notify.success") : a.length ? b.$close({
            pagesId: a.join(","),
            sVersion: "1" + c.join(""),
            shopId: g
          }) : e.pushForCurrentRoute("print.images.null", "notify.success")
        }, b.cancel = function() {
          b.$dismiss()
        }
      }
    ]), angular.module("main.print.applyTpl", ["common.resources.print"]).controller(
    "ApplyTplCtrl", ["$rootScope", "$scope", "printResource", "printId",
      function(a, b, c, d) {
        b.showTips = !1, b.$on("print.apply", function(a, c) {
          "success" == c && (b.showTips = !0)
        }), b.confirm = function() {
          c.applyTpl(d), a.$broadcast("affirm.apply", d)
        }, b.cancel = function() {
          b.$close()
        }
      }
    ]), angular.module("main.print.define", ["common.resources.print",
    "print.directives.validate"
  ]).controller("DefineCtrl", ["$scope", function(a) {
    a.size = {
      type: "",
      width: "",
      height: "",
      unit: "mm"
    }, a.$watch("size.unit", function(b) {
      var c = $(".eqc-define input"),
        d = parseInt(a.size.width, 10),
        e = parseInt(a.size.height, 10);
      "mm" == b ? (c.attr("maxlength", "3"), a.size.width = d ? (d /
        300 * 25.4).toFixed() : "", a.size.height = e ? (e / 300 *
        25.4).toFixed() : "") : "px" == b && (c.attr("maxlength", "4"),
        a.size.width = d ? (d / 25.4 * 300).toFixed() : "", a.size.height =
        e ? (e / 25.4 * 300).toFixed() : "")
    }), a.confirm = function() {
      var b = /^[1-9]\d*$/;
      return b.test(a.size.width) && b.test(a.size.height) ? void a.$close(
        a.size) : void alert("请输入有效的尺寸信息")
    }, a.cancel = function() {
      a.$dismiss()
    }
  }]), angular.module("main.print.saveToH5", ["common.resources.print"]).controller(
    "SaveToH5Ctrl", ["$rootScope", "$scope", "printResource", "printId",
      "i18nNotifications",
      function(a, b, c, d, e) {
        var f = b.picker = {
          isAllCheck: !0,
          coverArr: []
        };
        b.scenePicGroup = -1, b.isSave = !1, b.showTips = !1, c.getPrintDetail(
          d), b.$on("printDetail.get", function(a, b) {
          $.each(b.pages, function(a, b) {
            var c = /\.(png|jpg|jpeg|gif)$/.test(b.cover);
            c ? f.coverArr.push({
              cover: b.cover,
              tmbCover: b.properties.coverTmp,
              checked: !0
            }) : f.coverArr.push({
              cover: b.cover,
              tmbCover: b.cover,
              checked: !0
            })
          })
        }), c.getScenePicGroup(), b.$on("scenePic.group.get", function(a, c) {
          b.picGroupList = c
        }), b.selectAll = function() {
          f.isAllCheck ? $.each(f.coverArr, function(a, b) {
            b.checked = !0
          }) : $.each(f.coverArr, function(a, b) {
            b.checked = !1
          })
        }, b.changeItem = function() {
          b.isSave = !1
        }, b.saveLocation = function(a) {
          b.scenePicGroup = a
        }, b.$on("saveToH5.success", function() {
          b.showTips = !0, window.sessionStorage.removeItem("fileService")
        }), b.confirm = function() {
          var a = [],
            d = !1;
          $.each(f.coverArr, function(b, c) {
            if (c.checked) {
              if (!c.cover) return d = !0, !1;
              var e = c.cover.split("/"),
                f = e[e.length - 1],
                g = f.split("."),
                h = /\.(png|jpg|jpeg|gif)$/.test(c.cover);
              if (h) {
                var i = g[g.length - 1];
                a.push({
                  name: Date.now() + "." + i,
                  extName: i,
                  path: c.tmbCover,
                  tmbPath: c.cover
                })
              } else a.push({
                name: c.cover,
                extName: "png",
                path: c.tmbCover,
                tmbPath: c.cover
              })
            }
          }), d ? e.pushForCurrentRoute("print.scene.images.fail",
            "notify.success") : a.length ? (window.localStorage.setItem(
            "print_scene_images_update", "true"), c.saveToH5(b.scenePicGroup,
            a)) : b.isSave = !0
        }, b.$watch("picker.coverArr", function() {
          var a = f.coverArr.filter(function(a) {
            return a.checked === !1
          });
          f.isAllCheck = !a.length
        }, !0), b.cancel = function() {
          b.$dismiss()
        }
      }
    ]), angular.module("main.print.transfer", ["common.resources.print"]).controller(
    "TransferPrintCtrl", ["$scope", "$rootScope", "$routeParams", "$location",
      "printResource", "printId",
      function(a, b, c, d, e, f) {
        a.model = {
          toUser: ""
        }, a.showTips = !1, a.confirm = function() {
          return a.model.toUser ? a.model.toUser == b.user.loginName ? void(a
            .activeError = "不能转送给当前用户") : (e.transferPrint(f, a.model.toUser),
            void a.$on("print.transfer", function(c, d, f) {
              "success" == d ? (a.showTips = !0, e.getPrintList(b.currentPage,
                b.worksPageSize, b.printType)) : a.activeError = f.msg
            })) : void(a.activeError = "账号不能为空")
        }, a.cancel = function() {
          a.$close()
        }
      }
    ]), angular.module("main.print", ["main.print.template", "main.print.mine",
    "main.print.create", "print.common.directives.preview"
  ]).controller("PrintCtrl", ["$scope", "$rootScope", "$location",
    "printResource", "$routeParams", "$modal",
    function(a, b, c, d, e, f) {
      a.tabView = e.tab, a.isActive = "print", a.getStyle = function(a, b) {
        return {
          backgroundImage: "url(" + (a ? PREFIX_FILE_HOST + a +
              "?imageMogr2/auto-orient/thumbnail/" + b + "x" + b + "/strip" :
              HB_STATIC + PRINT_HOST_RESOURCE + "images/design_c.png") +
            ")"
        }
      }, a.showTab = function(e, f) {
        e.stopPropagation(), "mine" == f && d.getPrintList(1, b.worksPageSize),
          c.path("/main/print/" + f, !1), a.tabView = f
      }, a.add = function(a, b, c, e) {
        var f = {
          type: a,
          width: b,
          height: c,
          unit: e || "px"
        };
        "mm" == e && $.extend(f, {
          width: (parseFloat(b) / 25.4 * 300).toFixed(),
          height: (parseFloat(c) / 25.4 * 300).toFixed()
        });
        var g = window.open("", "_blank");
        d.addPrint(f).then(function(a) {
          var b = a.obj;
          g.location.href = "print/create/" + b.id
        })
      }, a.define = function() {
        f.open({
          windowClass: "six-contain",
          templateUrl: tplUrl + "main/print/dialog/define.tpl.html",
          controller: "DefineCtrl"
        }).result.then(function(b) {
          a.add("0", b.width, b.height, b.unit)
        })
      }
    }
  ]).directive("eqdPrintList", ["$scope", function() {}]), angular.module(
    "main.print.create", ["main.print.define", "common.resources.print"]).controller(
    "PrintCreateCtrl", [function() {
      $(document).scrollTop(0)
    }]).directive("eqdCreate", [function() {
    function a() {}
    return {
      restrict: "E",
      templateUrl: tplUrl + "main/print/tab/create.tpl.html",
      controller: "PrintCreateCtrl",
      replace: !0,
      link: a
    }
  }]), angular.module("main.print.hotZone", ["common.resources.print"]).controller(
    "HotZoneCtrl", ["$scope", "printResource", function(a, b) {
      b.getHotList(), a.$on("hotList.get", function(b, c) {
        var d = c.obj;
        a.hotList0 = d[0], a.hotList1 = d[1], a.hotList2 = d[2]
      }), a.copyHotItem = function(a) {
        window.open("print/copyTpl/" + a, "_blank")
      }
    }]).directive("eqdHotZone", [function() {
    return {
      restrict: "E",
      templateUrl: tplUrl + "main/print/tab/hotZone.tpl.html",
      controller: "HotZoneCtrl",
      scope: !0,
      replace: !0
    }
  }]), angular.module("main.print.mine", ["main.print.works",
    "main.print.order"
  ]).controller("MineCtrl", ["$scope", function(a) {
    a.showContent = !0, a.getContent = function(b) {
      "works" == b ? a.showContent = !0 : a.showContent = !1
    }
  }]).directive("eqdMine", [function() {
    function a(a, b, c) {}
    return {
      restrict: "E",
      scope: !0,
      templateUrl: tplUrl + "main/print/tab/mine.tpl.html",
      controller: "MineCtrl",
      replace: !0,
      link: a
    }
  }]), angular.module("main.print.order", ["common.resources.print"]).controller(
    "OrderCtrl", ["$scope", "$rootScope", "printResource", function(a, b, c) {
      function d(b, d, e) {
        c.getOrderInfo(b, d, e).then(function(b) {
          a.orderList = b.list, a.totalItems = b.map.count, a.currentPage =
            b.map.pageNo, a.allPageCount = b.map.count, a.toPage = b.map.pageNo
        })
      }
      var e = [],
        f = a.count = {
          all: "0",
          nonPayment: "0",
          completed: "0",
          cancel: "0"
        },
        g = 1,
        h = 8;
      c.getOrderCount().then(function(a) {
        var b = a.list;
        if (b.length) {
          var c = 0;
          b.forEach(function(a, b, d) {
            switch (a.status) {
              case 0:
                f.nonPayment = a.count;
                break;
              case 3:
                f.completed = a.count;
                break;
              case -1:
                f.cancel = a.count
            }
            c += a.count
          }), f.all = c.toString()
        }
      }), c.getOrderInfo(g, h, "all").then(function(b) {
        e = a.orderList = b.list, a.currentStatus = "all", a.totalItems =
          b.map.count, a.currentPage = b.map.pageNo, a.allPageCount = b.map
          .count, a.toPage = b.map.pageNo
      }), a.pageChanged = function(b) {
        return 1 > b || b > a.totalItems / h + 1 ? void alert("此页超出范围") : (
          d(b, h, a.currentStatus), void(a.currentOrderPage = b))
      }, a.getOrderList = function(b) {
        a.currentStatus = b, d(1, h, b)
      }, a.getDetails = function(a, b) {
        var d = window.open("", "_blank");
        c.getDetailsURL(a, b).then(function(a) {
          if (a && a.map) {
            var b = a.map;
            window.localStorage.setItem("print_shop_url", b.url),
              window.localStorage.setItem("print_shop_data", b.data), d
              .location.href = "main/print/printShop"
          }
        })
      }
    }]).directive("eqdOrder", [function() {
    function a(a, b, c) {}
    return {
      restrict: "E",
      templateUrl: tplUrl + "main/print/tab/order.tpl.html",
      controller: "OrderCtrl",
      scope: !0,
      replace: !0,
      link: a
    }
  }]), angular.module("main.print.template", ["main.print.tplSort",
    "main.print.hotZone", "common.resources.print"
  ]).controller("TemplateCtrl", ["$rootScope", "$scope", "printResource",
    function(a, b) {
      b.selected = "hot", b.showList = !1, b.getList = function(a) {
        switch (a) {
          case "hot":
            b.showList = !1, b.selected = "hot";
            break;
          case "tpl":
            b.showList = !0, b.selected = "tpl"
        }
      }
    }
  ]).directive("eqdTemplate", [function() {
    function a() {}
    return {
      restrict: "E",
      templateUrl: tplUrl + "main/print/tab/template.tpl.html",
      controller: "TemplateCtrl",
      scope: !0,
      replace: !0,
      link: a
    }
  }]), angular.module("main.print.tplSort", ["common.resources.print",
    "common.resources.print.template"
  ]).controller("TplSortCtrl", ["$rootScope", "$scope", "printResource",
    "templateResource",
    function(a, b, c, d) {
      var e = c.getAllTypes(),
        f = e.length - 1,
        g = "",
        h = c.getTplTypes().onlineMarketing,
        i = c.getTplTypes().adPrint;
      b.typeObj = null, b.activeTpl = 1, b.getTplList = function(e) {
        switch (e) {
          case 1:
            c.getTemplateList(1, 12), a.tplType = null, b.typeObj = null, b
              .tagCategory = null, b.activeTpl = 1;
            break;
          case 2:
            b.typeObj = h, b.tagCategory = null, b.activeTpl = 2, b.activeType =
              "8", g = "8", d.getTagCategory(8), b.activeTag = "0", c.getTemplateList(
                1, 12, 8, 0);
            break;
          case 3:
            b.typeObj = i, b.tagCategory = null, b.activeTpl = 3, b.activeType =
              "5", g = "5", d.getTagCategory(5), b.activeTag = "0", c.getTemplateList(
                1, 12, 5, 0)
        }
      }, b.getTypeList = function(e) {
        b.activeType = e, c.getTemplateList(1, 12, parseInt(e, 10)), g = a.tplType =
          parseInt(e, 10), d.getTagCategory(e), b.activeTag = "0"
      }, b.$on("TagCategory.get", function(a, c) {
        var d = b.tagCategory = c.list;
        d.unshift({
          name: "全部",
          value: "0"
        })
      }), b.getTagList = function(a) {
        b.activeTag = a, c.getTemplateList(1, 12, parseInt(g, 10), parseInt(
          a, 10))
      }, c.getTemplateList(a.currentTplPage, 12, a.tplType), b.$on(
        "templateList.get",
        function(a, c) {
          var d = b.templateList = c.list,
            e = d.length;
          b.tplTotalItems = c.map.count, b.currentTplPage = c.map.pageNo, b
            .allPageCount = c.map.count, b.toPage = c.map.pageNo;
          for (var f = 0; e > f; f++) d[f].avatar && 0 !== d[f].avatar.indexOf(
            "http://") && (d[f].avatar = PREFIX_FILE_HOST + d[f].avatar)
        }), b.pageTplChanged = function(d) {
        return 1 > d || d > b.tplTotalItems / 12 + 1 ? void alert("此页超出范围") :
          (c.getTemplateList(d, 12, a.tplType), void(a.currentTplPage = d))
      }, b.addTemplate = function(a, b, d, e, f, g) {
        var h = {
          type: a,
          width: b,
          height: d,
          unit: e || "px"
        };
        "mm" == e && $.extend(h, {
          width: (parseFloat(b) / 25.4 * 300).toFixed(),
          height: (parseFloat(d) / 25.4 * 300).toFixed()
        });
        var i = window.open("", "_blank");
        c.addPrint(h).then(function(a) {
          var b = a.obj;
          i.location.href = "print/template/" + b.id + "/" + g + "/" +
            f
        })
      }, b.intoTemplate = function(a, c, d) {
        if (9 == a) window.open("print/copyTpl/" + d, "_blank");
        else
          for (var g = 0; f > g; g++) e[g].value == a && b.addTemplate(a, e[
            g].width, e[g].height, e[g].unit, c, d)
      }
    }
  ]).directive("eqdTplSort", function() {
    return {
      restrict: "E",
      templateUrl: tplUrl + "main/print/tab/tplSort.tpl.html",
      controller: "TplSortCtrl",
      replace: !0
    }
  }), angular.module("main.print.works", ["main.print.affirmPrint",
    "main.print.saveToH5", "main.print.applyTpl", "main.print.transfer",
    "common.resources.print", "services.dataCache"
  ]).controller("WorksCtrl", ["$rootScope", "$scope", "printResource", function(
    a, b, c) {
    var d = {};
    b.printTypes = c.getAllTypes(), a.worksPageSize = 12;
    var e = c.getTplTypes().onlineMarketing,
      f = c.getTplTypes().adPrint;
    b.typeOfWorks = null, b.activeWorksType = 1, b.getWorksList = function(
        d) {
        switch (d) {
          case 1:
            b.typeOfWorks = null, b.activeWorksType = 1, a.printType = null,
              c.getPrintList(a.currentPage, a.worksPageSize, a.printType);
            break;
          case 2:
            b.typeOfWorks = e, b.activeWorksType = 2, a.printType = "8", c.getPrintList(
              a.currentPage, a.worksPageSize, a.printType);
            break;
          case 3:
            b.typeOfWorks = f, b.activeWorksType = 3, a.printType = "5", c.getPrintList(
              a.currentPage, a.worksPageSize, a.printType)
        }
      }, c.getPrintList(a.currentPage, a.worksPageSize, a.printType), b.getPrintList =
      function(b) {
        var d = b ? b : null;
        c.getPrintList(1, a.worksPageSize, d), a.printType = d
      }, b.$on("printList.get", function(a, c) {
        d = b.printList = c.list, b.totalItems = c.map.count, b.currentPage =
          c.map.pageNo, b.allPageCount = c.map.count, b.toPage = c.map.pageNo
      }), b.pageChanged = function(d) {
        return 1 > d || d > b.totalItems / a.worksPageSize + 1 ? void alert(
          "此页超出范围") : (c.getPrintList(d, a.worksPageSize, a.printType),
          void(a.currentPage = d))
      }, b.$on("print.delete", function() {
        c.getPrintList(a.currentPage, a.worksPageSize, a.printType)
      }), b.$on("print.copy", function() {
        c.getPrintList(1, a.worksPageSize, a.printType)
      }), b.$on("affirm.apply", function(a, b) {
        for (var c = d.length, e = 0; c > e; e++) d[e].id == b && (d[e].isTpl =
          2)
      })
  }]).directive("eqdWorks", ["$rootScope", "ModalService", "printResource",
    "$modal", "i18nNotifications",
    function(a, b, c, d, e) {
      function f(a) {
        a["delete"] = function(a) {
          b.openConfirmDialog({
            msg: "确定删除此作品?"
          }, function() {
            c.deletePrint(a)
          })
        }, a.copy = function(a) {
          c.copyPrint(a)
        }, a.transfer = function(a) {
          d.open({
            windowClass: "six-contain",
            templateUrl: tplUrl + "main/print/dialog/transferPrint.tpl.html",
            controller: "TransferPrintCtrl",
            resolve: {
              printId: function() {
                return a
              }
            }
          })
        }, a.applyTpl = function(a, b) {
          b || d.open({
            windowClass: "six-contain",
            templateUrl: tplUrl + "main/print/dialog/applyTpl.tpl.html",
            controller: "ApplyTplCtrl",
            resolve: {
              printId: function() {
                return a
              }
            }
          })
        }, a.setPrint = function(a) {
          window.open("print/set/" + a, "_blank")
        }, a.saveToH5 = function(a, b) {
          return 9 == b ? void window.open("print/gifSaveToH5/" + a,
            "_blank") : void d.open({
            windowClass: "eight-contain",
            templateUrl: tplUrl + "main/print/dialog/saveToH5.tpl.html",
            controller: "SaveToH5Ctrl",
            resolve: {
              printId: function() {
                return a
              }
            }
          })
        }, a.affirmPrint = function(a, b) {
          return 2 == b || 3 == b ? void e.pushForCurrentRoute(
            "print.images", "notify.success") : void d.open({
            windowClass: "eight-contain",
            templateUrl: tplUrl + "main/print/dialog/affirmPrint.tpl.html",
            controller: "AffirmPrintCtrl",
            resolve: {
              printId: function() {
                return a
              }
            }
          }).result.then(function(b) {
            var d = window.open("", "_blank");
            c.getPngPrint(a, b.shopId, b.pagesId, b.sVersion).then(
              function(a) {
                var b = a.map;
                window.localStorage.setItem("print_shop_url", b.url),
                  window.localStorage.setItem("print_shop_data", b.data),
                  d.location.href = "main/print/printShop"
              })
          }, function() {})
        }
      }
      return {
        restrict: "E",
        templateUrl: tplUrl + "main/print/tab/works.tpl.html",
        controller: "WorksCtrl",
        scope: !0,
        replace: !0,
        link: f
      }
    }
  ]).filter("printType", function() {
    return function(a) {
      switch (a) {
        case 0:
          return "自定义";
        case 1:
          return "名片";
        case 2:
          return "邀请函";
        case 3:
          return "贺卡";
        case 4:
          return "海报";
        case 5:
          return "宣传单";
        case 6:
          return "淘宝商品主图";
        case 7:
          return "微信公众号首图";
        case 8:
          return "长图";
        case 9:
          return "GIF动图"
      }
    }
  }).filter("statusFilter", function() {
    return function(a) {
      switch (a) {
        case 0:
          return "申请模板";
        case 1:
          return "已通过";
        case 2:
        case 3:
          return "申请中";
        case -1:
          return "未通过"
      }
    }
  }).filter("statusColorFilter", function() {
    return function(a) {
      switch (a) {
        case 0:
          return "#fff";
        case 1:
          return "#44cb83";
        case 2:
        case 3:
          return "#08a1ef";
        case -1:
          return "#ff5448"
      }
    }
  }).filter("statusBgFilter", function() {
    return function(a) {
      return 0 === a ? "#08a1ef" : "#eee"
    }
  }).filter("isOnline", function() {
    return function(a) {
      switch (a) {
        case 0:
        case 6:
        case 7:
        case 8:
        case 9:
          return !0;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          return !1
      }
    }
  }), angular.module("main.print.shop", []).controller("PrintShopCtrl", [
    function() {}
  ]).directive("eqdPrintShop", [function() {
    function a(a, b, c) {
      var d = window.localStorage.getItem("print_shop_url"),
        e = window.localStorage.getItem("print_shop_data"),
        f = $("#order_form"),
        g = $("#hidden_data");
      f.attr("action", d), g.attr("value", e), f.submit(), window.localStorage
        .removeItem("print_shop_url"), window.localStorage.removeItem(
          "print_shop_data")
    }
    return {
      restrict: "A",
      replace: !0,
      scope: !0,
      link: a
    }
  }]), angular.module("main.data.uploadData", ["services.usercenter",
    "services.i18nNotifications"
  ]), angular.module("main.data.uploadData").controller("uploadDataCtrl", [
    "$rootScope", "$scope", "uploaderService", "ModalService",
    function(a, b, c, d) {
      b.uploader = c.uploader("8"), b.$on("thumbnailList.update", function(a,
        c) {
        for (var e = 0; e < b.uploader.queue.length; e++) 100 == b.uploader
          .queue[e].progress && (d.openMsgDialog({
            msg: c,
            btn: "确定"
          }), b.$close("true"))
      }), b.$on("upload.fail", function(a, c) {
        d.openMsgDialog({
          msg: c,
          btn: "确定"
        }), b.$dismiss()
      }), b.cancel = function() {
        b.$dismiss()
      }
    }
  ]),
  function() {
    angular.module("main.userGuide", []).controller(
      "userGuideCtrl", ["$rootScope", "$scope", "dateFilter", function(a, b) {
        var c;
        if (window.localStorage) {
          var d = JSON.parse(localStorage.getItem("loginInfo"));
          d && d[a.user.id] ? !d.isShow || b.user.checkEmail ? b.firstLogin = !
            1 : sessionStorage.getItem("emailGuide") ? b.firstLogin = !1 :
            (d.isShow = !0, c = !0, b.firstLogin = !0) : (b.firstLogin = !0,
              d = d || {}, d[a.user.id] = 1, d.isShow = !0, localStorage.setItem(
                "loginInfo", JSON.stringify(d)))
        }
        b.currentGuide = "bindEmailGuide", b.showNextGuide = function() {
          sessionStorage.setItem("emailGuide", "true"), c ? b.firstLogin = !
            1 : (b.currentGuide = "createGuide", b.firstLogin = !0)
        };
        var e = 0;
        b.showGuide = function() {
          "createGuide" === b.currentGuide && (b.firstLogin = 1 === ++e)
        }, b.isShow = function() {
          if (window.localStorage) {
            var a = JSON.parse(localStorage.getItem("loginInfo"));
            a.isShow = !a.isShow, localStorage.setItem("loginInfo", JSON.stringify(
              a))
          }
        }
      }])
  }()