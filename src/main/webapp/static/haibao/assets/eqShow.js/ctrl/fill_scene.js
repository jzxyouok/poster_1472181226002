  angular.module("fillscene", []), angular.module("fillscene").controller(
    "fillSceneCtrl", ["$scope", "sceneService", "pageTplService",
      "dataCacheService", "i18nNotifications", "$routeParams", "$location",
      "$rootScope",
      function(a, b, c, d, e, f, g, h) {
        function i() {
          a.editCompList = [], a.showCompList = [], a.textCompList = [], a.picCompList = [],
            n = {};
          for (var b = a.pageData.elements, c = 0; c < b.length; c++) {
            var d = b[c];
            if (d.properties && d.properties.setstatus && 4 !== d.properties.setstatus &&
              "4" !== d.properties.setstatus) {
              var e = {
                setlabel: d.properties.setlabel || d.name,
                content: d.properties.src,
                descrip: d.properties.setremark,
                id: d.id,
                type: d.type,
                left: parseInt(d.css.left, 10),
                top: parseInt(d.css.top, 10),
                num: d.css.zIndex
              };
              4 !== d.type && "4" !== d.type || 2 === d.properties.setstatus ||
                "2" === d.properties.setstatus ? 2 == d.type && 2 != d.properties
                .setstatus ? (e.content = d.content, a.textCompList.push(e)) :
                (e.checked = !0, a.showCompList.push(e)) : a.picCompList.push(e),
                n[e.id] = d
            }
          }
          if (a.pageData.properties) {
            var f = j(a.pageData.properties);
            if (f) {
              var g = {
                checked: !0,
                id: f,
                type: "eff",
                setlabel: "特效"
              };
              a.showCompList.push(g)
            }
          }
          k(), a.editCompList = a.textCompList.concat(a.picCompList)
        }

        function j(a) {
          return a.scratch ? "scratch" : a.finger ? "finger" : a.fallingObject ?
            "fallingObject" : a.effect ? "effect" : void 0
        }

        function k() {
          for (var b = 0; b < a.textCompList.length; b++) {
            for (var c = 0; c < a.textCompList.length - 1 - b; c++)
              if (a.textCompList[c].num > a.textCompList[c + 1].num) {
                var d = a.textCompList[c];
                a.textCompList[c] = a.textCompList[c + 1], a.textCompList[c + 1] =
                  d
              }
            a.textCompList[a.textCompList.length - b - 1].num = a.textCompList.length -
              b
          }
          for (b = 0; b < a.picCompList.length; b++) {
            for (var c = 0; c < a.picCompList.length - 1 - b; c++)
              if (a.picCompList[c].num > a.picCompList[c + 1].num) {
                var d = a.picCompList[c];
                a.picCompList[c] = a.picCompList[c + 1], a.picCompList[c + 1] =
                  d
              }
            a.picCompList[a.picCompList.length - 1 - b].num = a.picCompList.length -
              b
          }
        }

        function l(b) {
          var c = a.pageList[b];
          $(".phone-view").empty(), a.curPage = c, a.pageNum = b, a.showSetting = !
            0, a.getPageData(c.id)
        }

        function m(b, e, f, g) {
          c.getPageTplTypestemp(b, null, e, f).then(function(b) {
            if (b.data.list && b.data.list.length > 0) {
              a.pageTpls = b.data.list;
              var c = b.config.url.split("&time")[0];
              d.contains(c) || (d.push("pageTpl", d.getAsyncUrl(), b), d.setAsyncUrl())
            } else a.pageTpls = [];
            g && g()
          })
        }
        a.sceneId = f.sceneId, a.showSetting = !0, a.pageNum = 0, c.getPageTagLabel(
          11004).then(function(b) {
          if (a.tplList = [], b.data.success)
            for (var c = 0; c < b.data.list.length; c++) a.tplList.push(b.data
              .list[c].id)
        }), b.getPageNames(a.sceneId).then(function(b) {
          b.data.success && (b.data.list && b.data.list.length ? (a.pageList =
            b.data.list, a.curPage = a.pageList[0], a.getPageData(a.curPage
              .id)) : a.pageList = [])
        }), a.getPageData = function(c, d, e) {

          b.getSceneByPage(c, d).then(function(c) {
            c.data.success && (d ? e(c.data.obj) : (a.pageData = c.data.obj,
              a.pageData.properties && a.pageData.properties.longPage ?
              a.pageLen = a.pageData.properties.longPage : a.pageLen =
              1, b.templateEditor.parse({
                def: a.pageData,
                appendTo: ".phone-view",
                mode: "edit"
              }), i(), a.originData = JSON.stringify(a.pageData), e &&
              e()))
          })
        };
        var n = {};
        a.sortableOptions = {
          placeholder: "ui-state-highlight ui-sort-position",
          containment: ".fill-left",
          update: function(c, d) {
            var e = d.item.sortable.dropindex + 1,
              f = a.pageList[d.item.sortable.index].id;
            b.changePageSort(e, f)
          }
        }, a.selectPage = function(b) {
          var c = a.pageList[b];
          c.id !== a.curPage.id && a.saveScene(function() {
            l(b)
          })
        }, a.replaceTpl = function(b) {
          a.showSetting && a.tplList && a.tplList.length && (a.showSetting = !
            1, m(a.tplList[0], 100, 1, b))
        };
        var o = !1;
        a.addPage = function() {
          o || (o = !0, a.saveScene(function() {
            a.getPageData(a.curPage.id, !0, function(b) {
              a.pageData = b;
              var c = a.pageNum + 1;
              a.pageNum++;
              var d = {
                elements: [],
                name: "",
                id: b.id,
                num: c + 1,
                sceneId: a.sceneId,
                properties: {}
              };
              a.pageData.properties && a.pageData.properties.longPage ?
                a.pageLen = a.pageData.properties.longPage : a.pageLen =
                1, a.pageList.splice(c, 0, d), a.curPage = d, m(a.tplList[
                  0], 100, 1, function() {
                  a.pageTpls.length && a.selectPageTpl(a.pageTpls[
                    0].id, function() {
                    o = !1
                  })
                })
            })
          }))
        }, a.replaceImg = function(a) {
          b.openConsoleModal({
            type: 4
          }, !1, function(b) {
            a.content = b.data
          }, function() {}, "fill-console")
        }, a.selectPageTpl = function(c, d) {
          $(".phone-view").empty(), b.getSceneTpl(c).then(function(c) {
            c.data.success && (a.pageData.elements = b.getElements(), a.curPage
              .properties || (a.curPage.properties = {}), a.pageData.properties ||
              (a.pageData.properties = {}), c.data.obj.properties && c.data
              .obj.properties.thumbSrc && (a.curPage.properties.thumbSrc =
                a.pageData.properties.thumbSrc = c.data.obj.properties.thumbSrc
              ), b.templateEditor.parse({
                def: a.pageData,
                appendTo: ".phone-view",
                mode: "edit"
              }), i(), d && d())
          })
        };
        var p = !1;
        a.deletePage = function(c) {
          c.stopPropagation(), p || 1 !== a.pageList.length && a.curPage.id &&
            (p = !0, $(".phone-view").empty(), b.deletePage(a.curPage.id).then(
              function(b) {
                var c = a.pageNum + 1;
                b.data.success ? (a.pageList.length === c ? (a.pageList.pop(),
                  a.pageNum--, a.curPage = a.pageList[c - 2]) : (a.pageList
                  .splice(c - 1, 1), a.curPage = a.pageList[c - 1]), a.getPageData(
                  a.curPage.id, null,
                  function() {
                    p = !1
                  })) : alert(b.data.msg)
              },
              function() {
                p = !1
              }))
        }, a.backset = function() {
          a.showSetting = !0
        };
        var q = !1;
        a.saveScene = function(c) {
          if (!q) {
            q = !0;
            for (var d = 0; d < a.textCompList.length; d++) n[a.textCompList[
              d].id].content = a.textCompList[d].content;
            for (d = 0; d < a.picCompList.length; d++) n[a.picCompList[d].id]
              .properties.src = a.picCompList[d].content;
            for (d = 0; d < a.showCompList.length; d++)
              for (var f = 0; f < a.pageData.elements.length; f++)
                if (!a.showCompList[d].checked) {
                  if ("eff" === a.showCompList[d].type) {
                    delete a.pageData.properties[a.showCompList[d].id];
                    break
                  }
                  if (a.showCompList[d].id === a.pageData.elements[f].id) {
                    a.pageData.elements.splice(f, 1);
                    break
                  }
                }
            return JSON.stringify(a.pageData) === a.originData ? (q = !1,
              void(c ? c() : g.path("scene/create/" + a.sceneId).search({
                pageId: 1,
                openSetting: "show"
              }))) : void b.saveScene(a.pageData).then(function(b) {
              return q = !1, b.data.success ? (e.pushForCurrentRoute(
                  "scene.save.success.published", "notify.success"),
                void(c ? c() : g.path("scene/create/" + a.sceneId).search({
                  pageId: 1,
                  openSetting: "show"
                }))) : void alert("保存失败，服务器忙碌请稍后再试。")
            }, function() {
              q = !1, alert("保存失败，服务器忙碌请稍后再试。")
            })
          }
        }, a.$on("get.file.list", function(b, c) {
          a.curComp.content = c.path
        }), a.uploadImg = function(b) {
          a.curComp = b
        }, a.backup = function() {
          h.isFillScene = !0, g.path("/scene")
        }, a.nextPage = function() {
          a.pageNum !== a.pageList.length - 1 && a.saveScene(function() {
            l(a.pageNum + 1)
          })
        }, a.prePage = function() {
          0 !== a.pageNum && a.saveScene(function() {
            l(a.pageNum - 1)
          })
        }
      }
    ]).directive("editComponent", [function() {
    function a(c) {
      for (var d = 0; d < b.length; d++)
        if (Math.abs(b[d].left - c.left) < 10 && Math.abs(b[d].top - c.top) <
          10) return a({
          left: c.left + 10,
          top: c.top
        });
      return c.left <= 4 ? a({
        left: c.left + 5,
        top: c.top
      }) : (b.push(c), c)
    }
    var b = [];
    return {
      restrict: "A",
      scope: {
        ele: "@",
        content: "@"
      },
      template: '<div class="comp-num"></div>',
      link: function(c, d, e, f) {
        var g = JSON.parse(e.ele),
          h = g.type;
        4 === h || "4" === h ? $("#inside_" + g.id).css("border",
          "1px solid #44cb83") : ($("#inside_" + g.id).css("border",
          "1px solid #08a1ef"), d.find(".comp-num").css({
          backgroundColor: "#08a1ef"
        }));
        var i = a(g);
        d.css({
          left: i.left,
          top: i.top,
          position: "absolute"
        }), d.find(".comp-num").text(g.num), c.$watch("content",
          function(a, b) {
            a !== b && (2 === h || "2" === h ? $("#" + g.id).html(a) :
              $("#" + g.id).attr("src", PREFIX_FILE_HOST + a))
          }), d.on("$destroy", function() {
          b = []
        })
      }
    }
  }]).directive("fillSceneLen", [function() {
    return {
      scope: {
        len: "@"
      },
      link: function(a, b, c, d) {
        1 !== a.len && "1" !== a.len && ($(".phone-view").css("height",
          486 * a.len), $(".comp-view").css("height", 486 * a.len)), a.$watch(
          "len",
          function(b, c) {
            b !== c && ($(".phone-view").css("height", 486 * a.len), $(
              ".comp-view").css("height", 486 * a.len))
          })
      }
    }
  }]).directive("compShowHide", [function() {
    return {
      scope: {
        eleId: "@",
        value: "@"
      },
      restrict: "A",
      link: function(a, b, c, d) {
        a.$watch("value", function(b, c) {
          b !== c && ("true" === b ? $(".phone-view").find("#inside_" +
            a.eleId).show() : $(".phone-view").find("#inside_" +
            a.eleId).hide())
        })
      }
    }
  }])