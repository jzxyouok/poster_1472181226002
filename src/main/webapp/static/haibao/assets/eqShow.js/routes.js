function safeApply(scope, fn) {
  var phase = scope.$root.$$phase;
  if(phase == '$apply' || phase == '$digest') {
    if(fn && (typeof(fn) === 'function')) {
      fn();
    }
  } else {
    scope.$apply(fn);
  }
}

angular.module("app", ["ngRoute",   "active", "show", "main",   "scene", "error", "message", "invitation", "ui.bootstrap", "ngSanitize", "ui.select", "services.i18nNotifications", "services.httpRequestTracker", "services.active", "services.config", "services.configSer", "services.dataCache", "services.validate", "service.codeMessage", "security.register.company", "security", "app.upload", "ui.sortable", "I18N.MESSAGES", "app.directives.keymap", "app.directives.notification", "active1",
  "activeXq", "search", "category", "nav", "recommend", "visitor", "visitorXq", "common.directives.dropDown", "ngSVGAttributes", "fillscene", "eqxAuth"]),
    angular.module("app").config(["$routeProvider", "$locationProvider", "securityAuthorizationProvider", "uiSelectConfig", "$provide", "$httpProvider", "$tooltipProvider", "authServiceProvider", "$windowProvider",

      function($routeProvider, $locationProvider, securityAuthorizationProvider, uiSelectConfig, $provide, $httpProvider, $tooltipProvider, authServiceProvider, $windowProvider) {
  $window = $windowProvider.$get();
  var options = $window.TPL_URL;
  var scrollTop = $window.HB_STATIC;
  authServiceProvider.setConfig({
    host : LOGIN_AUTH_HOST
  });
  $tooltipProvider.options({
    placement : "bottom",
    appendToBody : "true"
  });
  /** @type {string} */
  uiSelectConfig.theme = "bootstrap";



  $routeProvider.when("/error/:codeid", {
    templateUrl : options + "error/error.tpl.html",
    controller : "ErrorCtrl"
  }).when("/active", {
    templateUrl : options + "active/active.tpl.html",
    controller : "ActiveCtrl"
  }).when("/main", {
    templateUrl : options + "main/main.tpl.html",
    controller : "MainCtrl",
    reloadOnSearch : false,
    resolve : {
      authenticatedUser : securityAuthorizationProvider.requireAuthenticatedUser
    }
  }).when("/scene", {
    templateUrl : options + "scene/scene.tpl.html",
    controller : "SceneCtrl",
    reloadOnSearch : false,
    resolve : {
      authenticatedUser : securityAuthorizationProvider.requireAuthenticatedUser
    }
  }).when("/scene/create/:sceneId", {
    templateUrl : options + "scene/create.tpl.html",
    controller : "CreateSceneCtrl",
    reloadOnSearch : false,
    resolve : {
      authenticatedUser : securityAuthorizationProvider.requireAuthenticatedUser
    }
  }).when("/scene/support/", {
    templateUrl : options + "scene/support/support.tpl.html",
    controller : "SupportCtrl",
    reloadOnSearch : false
  }).when("/", {redirectTo : "/scene"})

      .otherwise({

    redirectTo : "/main"
  });
}]);
