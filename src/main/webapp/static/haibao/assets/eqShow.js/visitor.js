angular.module("services.visitor", []).factory("visitorService", [
    "$rootScope", "$http",
    function(a, b) {
      var c = {};
      return c.getRecommendVisitor = function() {
        var a = "showker/recommend";
        return b({
          method: "GET",
          url: PREFIX_S2_URL + a
        })
      }, c.getVisitorMsg = function(a) {
        var c = "showker/detail?userId=" + a;
        return b({
          method: "GET",
          url: PREFIX_S2_URL + c
        })
      }, c.getVisitorList = function(a, c, d, e, f) {
        var g = "showker/list";
        return a && (g += /\?/.test(g) ? "&" : "?", g += "addr=" + a), c &&
          (g += /\?/.test(g) ? "&" : "?", g += "pay=" + c), d && (g += /\?/
            .test(g) ? "&" : "?", g += "good=" + d), e && (g += /\?/.test(g) ?
            "&" : "?", g += "pageNo=" + e), f && (g += /\?/.test(g) ? "&" :
            "?", g += "pageSize=" + f), b({
            method: "GET",
            url: PREFIX_S2_URL + g
          })
      }, c.getVisitorMesList = function(a, c, d) {
        var e = "showker/represent?userId=" + a;
        return c && (e += /\?/.test(e) ? "&" : "?", e += "pageNo=" + c), d &&
          (e += /\?/.test(e) ? "&" : "?", e += "pageSize=" + d), b({
            method: "GET",
            url: PREFIX_S2_URL + e
          })
      }, c
    }
  ]), angular.module("visitorXq", ["services.visitor"]), angular.module(
    "visitorXq").controller("VisitorXqCtrl", ["$rootScope", "$http", "$scope",
    "showService", "$location", "$routeParams", "visitorService",
    function(a, b, c, d, e, f, g) {
      c.childCat = "visitor", c.pageNo = 1, c.pageSize = 16, c.serverTag = [],
        c.cateTag = [], c.payTag = [], c.userId = f.id, c.qqAction = "QQ号：",
        c.getUserDetail = function() {
          g.getVisitorMsg(c.userId).then(function(a) {
            c.visitorMsg = a.data.obj, null === c.visitorMsg.tel && c.visitorMsg
              .phone ? c.visitorMsg.tel = c.visitorMsg.phone : c.visitorMsg
              .tel && c.visitorMsg.phone && (c.visitorMsg.tel = c.visitorMsg
                .phone);
            var b = a.data.obj.tagList;
            if (b)
              for (var d = 0; d < b.length; d++) "province" === b[d].type ?
                c.serverTag.push({
                  tagId: b[d].tagId,
                  name: b[d].name
                }) : "company_industry" === b[d].type ? c.cateTag.push({
                  tagId: b[d].tagId,
                  name: b[d].name
                }) : "payType" === b[d].type && c.payTag.push({
                  tagId: b[d].tagId,
                  name: b[d].name
                });
            c.visitorMsg.headImg && (0 === c.visitorMsg.headImg.indexOf(
                  "http://") ? c.visitorMsg.headImg = c.visitorMsg.headImg :
                c.visitorMsg.headImg = PREFIX_FILE_HOST + c.visitorMsg.headImg
              ), null === c.visitorMsg.qq && (c.qqAction = "", $(".qq").addClass(
                "hui"), c.visitorMsg.qq = "该秀客没有留下QQ号"), null === c.visitorMsg
              .tel && ($(".phone").addClass("hui"), c.visitorMsg.tel =
                "该秀客没有留下电话号码"), null === c.visitorMsg.wechat && ($(
                  ".weixin").addClass("hui"), c.visitorMsg.wechat =
                "该秀客没有留下微信号")
          })
        }, c.getUserDetail(), c.totalItems = 0, c.currentPage = 1, c.getUserWorks =
        function() {
          g.getVisitorMesList(c.userId, c.pageNo, c.pageSize).then(function(a) {
            c.visitorWorks = a.data.list, c.totalItems = a.data.map.count,
              c.toPage = a.data.map.pageNo;
            for (var b = 0; b < c.visitorWorks.length; b++) c.visitorWorks[
                b].headImg ? 0 === c.visitorWorks[b].headImg.indexOf(
                "http://") ? c.visitorWorks[b].headImg = c.visitorWorks[b]
              .headImg : c.visitorWorks[b].headImg = PREFIX_FILE_HOST + c
              .visitorWorks[b].headImg : c.visitorWorks[b].headImg =
              HB_STATIC + "assets/images/xiaotouxiang.png"
          })
        }, c.getUserWorks(), c.pageChanged = function(a) {
          return c.pageNo = a, 1 > a || a > c.totalItems / 16 + 1 ? void alert(
            "此页超出范围") : void c.getUserWorks(c.userId, a, c.pageSize)
        }
    }
  ]), angular.module("visitor", ["services.visitor"]), angular.module("visitor")
  .controller("VisitorCtrl", ["$rootScope", "$http", "$scope", "showService",
    "$location", "usercenterService", "visitorService",
    function(a, b, c, d, e, f, g) {
      c.childCat = "visitor", c.visitorId = "12", c.pageNo = 1, c.pageSize =
        12, c.visitorXq = function(a) {
          e.path("/show/visitor/" + a)
        };
      var h = function(a) {
        f.getAPPlyMessage(a).then(function(b) {
          "province" === a ? c.serverLabel = b.data.list :
            "company_industry" === a ? c.cateLabel = b.data.list :
            "payType" === a && (c.payLabel = b.data.list)
        })
      };
      h("province"), h("company_industry"), h("payType"), c.getLimitedServeRegion =
        function(a) {
          return c.serverLabel.indexOf(a) < 8
        }, c.getOtherServeRegion = function(a) {
          return c.serverLabel.indexOf(a) >= 8 && (c.moreArea = !0), c.serverLabel
            .indexOf(a) >= 8
        }, c.getLimitedCateRegion = function(a) {
          return c.cateLabel.indexOf(a) < 11
        }, c.getOtherCateRegion = function(a) {
          return c.cateLabel.indexOf(a) >= 11 && (c.moreLabel = !0), c.cateLabel
            .indexOf(a) >= 11
        };
      g.getRecommendVisitor().then(function(a) {
        if (c.recommendVisitor = a.data.obj, c.recommendVisitor.represent1) {
          var b = c.recommendVisitor.represent1,
            d = b.substring(0, b.indexOf("_")),
            e = b.substring(b.indexOf("_") + 1, b.length);
          c.work1Code = d, c.work1Name = e
        }
        if (c.recommendVisitor.represent2) {
          var f = c.recommendVisitor.represent2,
            g = f.substring(0, f.indexOf("_")),
            h = f.substring(f.indexOf("_") + 1, f.length);
          c.work2Code = g, c.work2Name = h
        }
        if (c.recommendVisitor.represent3) {
          var i = c.recommendVisitor.represent3,
            j = i.substring(0, i.indexOf("_")),
            k = i.substring(i.indexOf("_") + 1, i.length);
          c.work3Code = j, c.work3Name = k
        }
        c.recommendVisitor.headImg && (0 === c.recommendVisitor.headImg.indexOf(
            "http://") ? c.recommendVisitor.headImg = c.recommendVisitor
          .headImg : c.recommendVisitor.headImg = PREFIX_FILE_HOST + c.recommendVisitor
          .headImg)
      });
      var i = {
        pay: null,
        addr: null,
        good: null
      };
      c.serverAll = "all", c.cateAll = "all", c.payAll = "all", c.serverWu =
        function(a, b) {
          c[b] = "all", "province" === a ? (i.addr = null, c.currentServer =
              null) : "company_industry" === a ? (i.good = null, c.currentCate =
              null) : "payType" === a && (i.pay = null, c.currentPay = null),
            j(i.addr, i.pay, i.good, c.pageNo, c.pageSize)
        }, c.subServer = function(a) {
          c.currentServer = a, c.serverAll = null, i.addr = a.id, j(i.addr, i
            .pay, i.good, c.pageNo, c.pageSize)
        }, c.subLabel = function(a) {
          c.currentCate = a, c.cateAll = null, i.good = a.id, j(i.addr, i.pay,
            i.good, c.pageNo, c.pageSize)
        }, c.subPay = function(a) {
          c.currentPay = a, c.payAll = null, i.pay = a.id, j(i.addr, i.pay, i
            .good, c.pageNo, c.pageSize)
        }, c.totalItems = 0;
      var j = function() {
        g.getVisitorList(i.addr, i.pay, i.good, c.pageNo, c.pageSize).then(
          function(a) {
            c.visitorList = a.data.list, c.totalItems = a.data.map.count,
              c.currentPage = a.data.map.pageNo, c.toPage = a.data.map.pageNo;
            for (var b = 0; b < c.visitorList.length; b++) {
              if (c.visitorList[b].represent1) {
                var d = c.visitorList[b].represent1,
                  e = d.substring(0, d.indexOf("_")),
                  f = d.substring(d.indexOf("_") + 1, d.length);
                c.visitorList[b].represent1Code = e, c.visitorList[b].represent1Name =
                  f
              }
              if (c.visitorList[b].represent2) {
                var g = c.visitorList[b].represent2,
                  h = g.substring(0, g.indexOf("_")),
                  i = g.substring(g.indexOf("_") + 1, g.length);
                c.visitorList[b].represent2Code = h, c.visitorList[b].represent2Name =
                  i
              }
              if (c.visitorList[b].represent3) {
                var j = c.visitorList[b].represent3,
                  k = j.substring(0, j.indexOf("_")),
                  l = j.substring(j.indexOf("_") + 1, j.length);
                c.visitorList[b].represent3Code = k, c.visitorList[b].represent3Name =
                  l
              }
              c.visitorList[b].headImg && (0 === c.visitorList[b].headImg
                .indexOf("http://") ? c.visitorList[b].headImg = c.visitorList[
                  b].headImg : c.visitorList[b].headImg =
                PREFIX_FILE_HOST + c.visitorList[b].headImg)
            }
          })
      };
      j(), c.pageChanged = function(a) {
        return c.pageNo = a, 1 > a || a > c.totalItems / 12 + 1 ? void alert(
          "此页超出范围") : void j(i, a, c.pageSize)
      }
    }
  ])