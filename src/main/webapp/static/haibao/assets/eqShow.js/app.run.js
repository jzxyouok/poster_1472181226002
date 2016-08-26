angular.module("app").run(["security", "$rootScope", "configService",
    "$anchorScroll", "$location", "usercenterService",
    function(a, b) {
      b.HB_STATIC = HB_STATIC, b.PREFIX_FILE_HOST = PREFIX_FILE_HOST, b.PREFIX_SERVER_HOST =
        PREFIX_URL, b.PREFIX_CLIENT_HOST = PREFIX_HOST, b.PREFIX_S3_URL =
        PREFIX_S3_URL, b.PRINT_HOST_SERVER = PRINT_HOST_SERVER, b.PRINT_HOST_RESOURCE =
        PRINT_HOST_RESOURCE, a.requestCurrentUser();
      var c = $(document);
      b.load2 = function() {
        c.scroll(function() {
          s = c.scrollTop(), s > 100 ? $(".scroll").css("display",
            "block") : $(".scroll").css("display", "none")
        })
      }, b.appIconDown = !0, b.downApp = function() {
        b.appIconDown = !1
      }, b.closeDown = function() {
        b.appIconDown = !0
      }, b.goTop = function() {
        c.scrollTop(0)
      }, b.$on("$routeChangeSuccess", function(a, c) {
        c.$$route && (b.feedBackUrl = c.$$route.feedBackUrl)
      })

    }
  ]), 

angular.module("app").run(["$route", "$rootScope", "$location", function(
    a, b, c) {
    b.$on("$locationChangeStart", function() {
      b.branchid && c.search("branchid", b.branchid), $(".modal").remove(),
        $(".modal-backdrop").remove()
    });
    var d = c.path;
    c.path = function(e, f) {
      if (f === !1) var g = a.current,
        h = b.$on("$locationChangeSuccess", function() {
          a.current = g, h()
        });
      return d.apply(c, [e])
    }
  }])
,
angular.module("app").run(["$templateCache", function(a) {
    a.put("template/carousel/carousel.html",
      '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="prev eqf-chevron-small-left" ng-click="prev()" ng-show="slides.length > 1"></a>\n    <a class="next eqf-chevron-small-right" ng-click="next()" ng-show="slides.length > 1"></a>\n</div>\n'
    )
  }])
