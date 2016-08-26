angular.module("app").controller("AppCtrl", ["$window", "$scope", "$rootScope", "$location", "$route", "$modal", "security", "sceneService", "$routeParams", "$timeout", "i18nNotifications", "usercenterService", "thirdpartyService", "$modalStack", "$sce", "authService", function($window, $scope, $rootScope, $location, leBook, $modal, security, dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist, notifications, fn, test, $modalStack, $sce, service) {
  
 // $rootScope.$on('$stateChangeSuccess', function () {
 //        $rootScope.tplUrl = "http://xxxxxxxxx/";
        
 //  alert("ok")
 //     });
//alert($window.TPL_URL);
$rootScope.tplUrl = $window.TPL_URL;
  $rootScope.hbStatic = $window.HB_STATIC;

  /**
   * @return {?}
   */
  function readFromBrowserCache() {
    return sessionStorage.getItem("sysMsgHasRead");
  }
  /**
   * @param {number} deepDataAndEvents
   * @param {number} opt_attributes
   * @param {boolean} dataAndEvents
   * @param {boolean} data
   * @return {undefined}
   */
  function poll(deepDataAndEvents, opt_attributes, dataAndEvents, data) {
    // fn.getNewMessage(deepDataAndEvents, opt_attributes, dataAndEvents, data).then(function(event) {
    //   if (data) {
    //     $rootScope.sysMsgs = event.data.list;
    //     $rootScope.sysNewCount = event.data.map.count;
    //   } else {
    //     $rootScope.newMsgs = event.data.list;
    //     $rootScope.newMsgCount = event.data.map.count > 9 ? "9+" : event.data.map.count;
    //   }
    // });
  }
  /** @type {string} */
  var untrustedVideoSrc = "http://api.geetest.com/get.php?callback=initCaptcha&time=" + (new Date).getTime();
  /** @type {boolean} */
  var t = "/upgrade/" === $location.path().substring(0, 9) || "/xdBuy" === $location.path();
  $scope.validateCodeUrl = $sce.trustAsResourceUrl(untrustedVideoSrc);
  if (checkBrower()) {
    /** @type {boolean} */
    $scope.isSafari = true;
  }
  /**
   * @return {undefined}
   */
  $scope.copyUrl = function() {
    alert("\u8be5\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u590d\u5236\uff0c\u8bf7\u624b\u52a8\u9009\u4e2d\u3001\u590d\u5236\u3001\u7c98\u8d34");
  };
  /** @type {number} */
  // $scope.userXd = 0;
  // /**
  //  * @return {undefined}
  //  */
  // $scope.getUserXd = function() {
  //   fn.getUserXd().then(function(event) {
  //     $scope.userXd = event.data.obj || 0;
  //   });
  // };
  // $scope.$on("userXd", function() {
  //   $scope.getUserXd();
  // });
  /**
   * @return {undefined}
   */
  // $scope.buyXd = function() {
  //   $modal.open({
  //     windowClass : "console",
  //     templateUrl : "?c=pay",
  //     controller : "BuyXdController",
  //     resolve : {
  //       *
  //        * @return {?}
         
  //       getUserXd : function() {
  //         return function() {
  //           $scope.getUserXd();
  //           $rootScope.$broadcast("buyXd");
  //         };
  //       }
  //     }
  //   });
  // };
  /** @type {function (): undefined} */
  // $rootScope.buyXdQ = $scope.buyXd;
  /** @type {boolean} */
  $scope.openSysMsg = false;
  /** @type {boolean} */
  $scope.openSysMsgDialog = !readFromBrowserCache();
  /**
   * @return {undefined}
   */
  $scope.closeSysMsgDialog = function() {
    /** @type {boolean} */
    $scope.openSysMsgDialog = !$scope.openSysMsgDialog;
    sessionStorage.setItem("sysMsgHasRead", "true");
  };
  /** @type {Array} */
  $scope.notifications = notifications;
  /**
   * @param {?} index
   * @return {undefined}
   */
  $scope.removeNotification = function(index) {
    notifications.remove(index);
  };
  /**
   * @param {?} newValue
   * @return {undefined}
   */
  $window.setValue = function(newValue) {
    $scope.thirdpartyLoginParam = newValue;
    $scope.$apply();
  };
  $scope.$watch("thirdpartyLoginParam", function(result) {
    if (result) {
      if (result.state && /WECHAT_STATE/.test(result.state)) {
        test.weiChatLogin(result.code).then(function(res) {
          if (200 === res.data.code) {
            $location.path("main");
            security.setLoginSuccess(true);
          }
        });
      } else {
        test.qqLogin(result.access_token, result.expires_in);
      }
    }
  });
  $scope.$on("$locationChangeStart", function() {
    if (security.isAuthenticated() && ("/home" === $location.path() && $location.path("main")), $location.search().resetToken) {
      var resetToken = $location.search().resetToken;
      service.showAuth({
        type : "reset",
        resetToken : resetToken
      }).then(function(elem) {
        if ("reset" === elem.type) {
          $location.path("/main").search({});
        }
      });
    }
    var modal = $modalStack.getTop();
    if (modal) {
      $modalStack.dismiss(modal.key);
    }
  });
  /**
   * @param {string} paramType
   * @return {undefined}
   */
  $scope.openAuth = function(paramType) {
    service.showAuth({
      type : paramType
    }).then(function(elem) {
      if ("registerEnterprise" === elem.type) {
        $location.path("/reg/guide/company");
      } else {
        if ("register" === elem.type) {
          $location.path("/main");
        } else {
          if ("login" === elem.type) {
            if (t) {
              leBook.reload();
            } else {
              $location.path("/main");
            }
          } else {
            if ("reset" === elem.type) {
              $location.path("/main");
            }
          }
        }
      }
    });
  };
  $scope.isAuthenticated = security.isAuthenticated;
  if ($location.search().branchid) {
    $rootScope.branchid = $location.search().branchid;
  }
  /** @type {Array} */
  $rootScope.sysMsgs = [];
  $scope.$on("minusCount", function() {
    poll(1, 4, true);
  });
  $scope.$watch(function() {
    return security.currentUser;
  }, function(user) {
    if (user) {
      $scope.user = user;
      $rootScope.user = user;
      $scope.userProperty = user;
      $scope.isEditor = security.isEditor();
      $rootScope.isEditor = security.isEditor();
      $scope.isAdvancedUser = security.isAdvancedUser();
      $rootScope.isAdvancedUser = security.isAdvancedUser();
      $scope.isVendorUser = security.isVendorUser();
      $rootScope.isVendorUser = security.isVendorUser();
      $scope.$broadcast("currentUser", user);
      if (security.isAuthenticated()) {
        if ("/home" === $location.path() || "/home/login" === $location.path()) {
          $location.path("main");
        }
        //$scope.getUserXd();
        if (!t) {
          poll(1, 4, true, true);
          poll(1, 4, true);
        }
      }
    }
  }, true);
  /**
   * @return {undefined}
   */
  $scope.showBoardsDropdown = function() {
    /** @type {boolean} */
    $scope.isProjectsDropdownVisible = true;
  };
  /**
   * @return {undefined}
   */
  $scope.hideBoardsDropdown = function() {
    /** @type {boolean} */
    $scope.isProjectsDropdownVisible = false;
  };
  var doc = $(document);
  doc.scroll(function() {
    var a = doc.scrollTop();
    if (a > 180) {
      $(".header-contain", doc).addClass("head-shadow");
    } else {
      $(".header-contain", doc).removeClass("head-shadow");
    }
  });
  $scope.$watch("branchid", function() {
    /** @type {boolean} */
    $scope.hideOpea = !!$rootScope.branchid;
  });
  /**
   * @return {undefined}
   */
  $scope.openReg = function() {
    $modal.open({
      windowClass : "request_contain",
      templateUrl : "usercenter/request_reg.tpl.html",
      controller : "UsercenterrequestCtrl",
      resolve : {}
    });
  };
  /**
   * @return {?}
   */
  $scope.showToolBar = function() {
    return $location.$$path.indexOf("/scene/create") < 0;
  };
  /**
   * @return {undefined}
   */
  $scope.showPanel = function() {
    $("#helpPanel").stop().animate({
      right : "0"
    }, 500);
  };
  /**
   * @return {undefined}
   */
  $scope.hidePanel = function() {
    $("#helpPanel").stop().animate({
      right : "-120"
    }, 500);
  };
  /** @type {string} */
  //$scope.suggestionUrl = "http://bbs.eqxiu.com/forum.php?mod=forumdisplay&fid=45";
  /** @type {string} */
  //$scope.feedbackUrl = "http://bbs.eqxiu.com/forum.php?mod=forumdisplay&fid=46";
  /** @type {string} */
  $scope.qqChatUrl = "http://shang.qq.com/wpa/qunwpa?idkey=4a2d63670009360b878aa9a1e1437ef4caec132f74a0e2c4df4a686168cc73dc";
  /** @type {string} */
  //$scope.helpUrl = "http://bbs.eqxiu.com/forum.php";
  /** @type {string} */
  //$scope.createSkillUrl = "http://bbs.eqxiu.com/forum.php?gid=37";
  /**
   * @param {?} fn
   * @return {undefined}
   */
  $scope.safeApply = function(fn) {
    var phase = this.$root.$$phase;
    if ("$apply" === phase || "$digest" === phase) {
      if (fn) {
        if ("function" == typeof fn) {
          fn();
        }
      }
    } else {
      this.$apply(fn);
    }
  };
}]).filter("fixnum", [function() {
  return function(val) {
    /** @type {number} */
    var rval = val;
    return val >= 1E4 && 1E8 > val ? rval = (val / 1E4).toFixed(1) + "\u4e07" : val >= 1E8 && (rval = (val / 1E8).toFixed(1) + "\u4ebf"), rval;
  };
}]);
