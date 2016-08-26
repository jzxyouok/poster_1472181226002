angular.module("security.authority", []).factory("authority", [function() {
    var a = {
        GROUP_CUSTOMER: 1,
        SCENE_HIDE_LASTPAGE_SETTING: 2,
        TRANSFER_SCENE: 4,
        SCENE_EDIT_TRIGGER: 8,
        EXPAND_WEBSITE: 16,
        SCENE_EDIT_SOUND: 32,
        ACCESS_NEW_PAGEFLIP: 64,
        COMP_ANIMATION: 128,
        RADIO_CHECKBOX_RATING: 256,
        INTERACTION: 512,
        ACCESS_DOMAIN_BIND: 1024,
        LOADING_LOGO: 2048,
        TEMPLATE_PAYMENT: 4096,
        INTERACTION_COUNTER: 8192,
        SCENE_PASSWORD: 16384,
        USERCENTER_HISTORY: 32768,
        APPLY_XIUKE: 65536,
        SHAKE_TRIGGER: 131072,
        ACCESS_WX_AUTH: 262144,
        ACCESS_PSD_UPLOAD: 524288,
        ACCESS_CUSTOMER_SERVICE: 1048576,
        ACCESS_QCLOUD: 2097152,
        ACCESS_COMP_MANAGE: 4194304
      },
      b = {
        1: {
          code: 74045,
          name: "普通账号"
        },
        2: {
          code: 3469311,
          name: "企业账号"
        },
        21: {
          code: 3206143,
          name: "企业子账号"
        },
        5: {
          code: 3207167,
          name: "公共账号"
        },
        51: {
          code: 3206143,
          name: "公共子账号"
        },
        3: {
          code: 5174271,
          name: "高级用户"
        },
        4: {
          code: 4847615,
          name: "服务商用户"
        },
        99: {
          code: 5895167,
          name: "超级用户"
        }
      };
    return {
      accessDef: a,
      userRoleDef: b
    }
  }]),

   angular.module("security.authorization", ["security.service"]).provider(
    "securityAuthorization", {
      requireAdminUser: ["securityAuthorization", function(a) {
        return a.requireAdminUser()
      }],
      requireAuthenticatedUser: ["securityAuthorization", function(a) {
        return a.requireAuthenticatedUser()
      }],
      $get: ["security", "securityRetryQueue", "$location", function(a, b, c) {
        var d = {
          requireAuthenticatedUser: function() {
            var e = a.requestCurrentUser().then(function() {
              return a.isAuthenticated() || "/upgrade/" === c.path()
                .substring(0, 9) || "/xdBuy" === c.path() ? void 0 :
                b.pushRetryFn("unauthenticated-client", d.requireAuthenticatedUser)
            });
            return e
          },
          requireAdminUser: function() {
            var c = a.requestCurrentUser().then(function() {
              return a.isAdmin() ? void 0 : b.pushRetryFn(
                "unauthorized-client", d.requireAdminUser)
            });
            return c
          }
        };
        return d
      }]
    }), angular.module("security", ["security.service", "security.interceptor",
    "security.authorization"
  ]), angular.module("security.interceptor", ["security.retryQueue"]).factory(
    "securityInterceptor", ["$injector", "$q", "securityRetryQueue",
      "$location",
      function(a, b, c, d) {
        return {
          responseError: function(e) {
            var f = null;
            return 401 === e.status ? f = c.pushRetryFn("unauthorized-server",
              function() {
                return a.get("$http")(e.config)
              }) : (403 === e.status && (alert("对不起，您没有查看此内容的权限"), d.path(
              "/home")), b.reject(e))
          }
        }
      }
    ]).config(["$httpProvider", function($httpProvider) {
  $httpProvider.interceptors.push("securityInterceptor"),
      $httpProvider.interceptors.push(["$q",
      function($q) {
        var b = 0;
        return {
          request: function(config) {

            return config.loading && ($("#loading").show(), b++), config || $q.when(
              config)
          },
          responseError: function(c) {

            return c.config.loading && (b--, b || $("#loading").hide()),
              $q.reject(c)
          },
          response: function(c) {
            return c.config.loading && (b--, b || $("#loading").hide()),
              c || $q.when(c)
          }
        }
      }
    ])
  }]), angular.module("security.login.reset", ["services.localizedMessages"]).controller(
    "ResetFormController", ["$scope", "security", "localizedMessages",
      "$location", "resetKey",
      function(a, b, c, d, e) {
        a.password = {}, a.checkPassword = function() {
          if (a.password.newPw) {
            if (/^[a-zA-Z0-9]{6,16}$/g.test(a.password.newPw)) return a.passError =
              null, !0;
            a.passError = "密码为6~16个字符(英文字母或数字，区分大小写)"
          } else a.passError = "新密码不能为空";
          return !1
        }, a.checkRepeatPassword = function() {
          if (a.password.confirm) {
            if (a.password.confirm === a.password.newPw) return a.rPassError =
              "", !0;
            a.rPassError = "两次密码输入不一致，请重新输入"
          } else a.rPassError = "确认密码不能为空";
          return !1
        }, a.reset = function() {
          a.checkPassword() && a.checkRepeatPassword() && b.resetPassByKey(a.password
            .newPw, e).then(function(b) {
            200 === b.data.code ? (alert("修改成功"), a.$close(), d.path(
              "/main").search({})) : 1011 === b.data.code && (a.authError =
              b.data.msg)
          })
        }, a.cancel = function() {
          a.$dismiss()
        }
      }
    ]).directive("equals", function() {
    return {
      restrict: "A",
      require: "?ngModel",
      link: function(a, b, c, d) {
        if (d) {
          a.$watch(c.ngModel, function() {
            e()
          }), c.$observe("equals", function() {
            e()
          });
          var e = function() {
            var a = d.$viewValue,
              b = c.equals;
            d.$setValidity("equals", a === b)
          }
        }
      }
    }
  }), angular.module("security.login.pwd", ["services.localizedMessages",
    "app.directives.addelement", "security.thirdparty"
  ]).controller("FindPwdController", ["$rootScope", "$scope", "$timeout",
    "$window", "security", "localizedMessages", "$location", "$sce",
    "thirdpartyService",
    function(a, b, c, d, e, f, g, h, i) {
      function j() {
        0 === l ? (b.isCodeAccessiable = !1, b.codeTip = "获取验证码", l = 60) : (
          b.isCodeAccessiable = !0, b.codeTip = "重新发送(" + l + ")", c(
            function() {
              l--, j()
            }, 1e3))
      }
      config.product = "popup", b.phone = !1;
      var k = function() {
        b.phone ? config.popupbtnid = "submit-button" : config.popupbtnid =
          "mobile-button";
        var a = "http://api.geetest.com/get.php?callback=initCaptcha&time=" +
          (new Date).getTime();
        b.validateCodeUrl = h.trustAsResourceUrl(a)
      };
      k(), b.user = {}, b.retrieve = {}, b.showLogin = !0, b.sendPassword = !
        1, b.unExist = !1, b.cancel = function() {
          g.path("/home", !1)
        }, b.openLogin = function() {
          g.path("/home/login", !1)
        }, c(function() {
          $('input[name="userEmail"]').focus()
        }, 300), b.phonePwd = function() {
          b.phone = !0, b.retrieveError = "", k()
        }, b.emailPwd = function() {
          b.phone = !1, b.retrieveError = "", k()
        }, b.getPwdCode = function(a) {
          challenge && validate && seccode ? b.getCode(a) : b.pwdCode = !0
        }, b.getCode = function(a) {
          if (!a) return void(b.userPhone = "请填写手机号");
          var c = {
            phone: a,
            geetest_challenge: challenge,
            geetest_validate: validate,
            geetest_seccode: seccode
          };
          e.getResetCode(c).success(function(a) {
            challenge = "", validate = "", seccode = "", b.userPhone = a.success,
              200 === a.code ? (b.userPhone = "", j()) : b.userPhone = a.msg
          })
        };
      var l = 60;
      b.retrievePhonePassword = function() {
        return b.retrieve.phone ? b.retrieve.code ? void e.retrievePhonePassword(
          b.retrieve.phone, b.retrieve.code).then(function(a) {
          200 === a.data.code ? window.location.href =
            "/home/reset?resetToken=" + a.data.obj : 110013 === a.data.code ?
            b.retrieveError = "短信验证码失效，请重新获取" : 1018 === a.data.code &&
            (b.retrieveError = "手机验证码输入错误")
        }) : void(b.codeError = "请填写手机验证码") : void(b.userPhone = "请填写手机号")
      }, b.retrievePassword = function() {
        if (!b.retrieve.email) return void(b.retrieveError = "邮箱不能为空");
        var a =
          /^[a-zA-Z0-9]+((-*|_*|\.?)[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(([-|_]*[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]+)+)+$/;
        return a.test(b.retrieve.email) ? challenge && validate && seccode ?
          void e.retrievePassword(b.retrieve.email, challenge, validate,
            seccode).then(function(a) {
            challenge = "", validate = "", seccode = "", 200 === a.data.code ?
              (b.sendPassword = !0, submit = !1) : 1003 === a.data.code ?
              b.retrieveError = "账号不存在" : 1005 === a.data.code && (b.retrieveError =
                "验证码错误")
          }) : void(b.retrieveError = "验证码不能为空") : (b.retrieveError =
            "请正确填写邮箱", !1)
      }
    }
  ]), angular.module("security.login", ["security.login.form",
    "security.login.reset", "security.login.toolbar", "security.login.pwd"
  ]), angular.module("security.login.toolbar", ["services.usercenter"]).directive(
    "loginToolbar", ["security", "$rootScope", "usercenterService", "$location",
      "dataCacheService",
      function(a, b, c, d, e) {
        var f = {
          templateUrl: "security/login/toolbar.tpl.html",
          restrict: "E",
          replace: !0,
          scope: !0,
          link: function(c) {
            c.PREFIX_FILE_HOST = PREFIX_FILE_HOST, c.isAuthenticated = a.isAuthenticated,
              c.login = a.showLogin, c.logout = a.logout, c.requestResetPassword =
              a.requestResetPassword, c.isAdvancedUser = b.isAdvancedUser,
              c.isEditor = b.isEditor, c.isVendorUser = b.isVendorUser, c.$watch(
                function() {
                  return a.currentUser
                },
                function(a) {
                  c.currentUser = a, c.currentUser.headImg ? /^http.*/.test(
                      a.headImg) && (c.headImg = a.headImg) : c.headImg =
                    HB_STATIC + "assets/images/defaultuser.jpg"
                }), c.$on("headImg.change", function(a, b) {
                c.currentUser.headImg = b
              }), c.changeCurrent = function() {
                e.clear("sceneList"), b.branchid = "", d.search("branchid",
                  null), d.path("/usercenter/children")
              }, c.openMsgPanel = function() {
                !$(".mes_con").hasClass("open")
              }
          }
        };
        return f
      }
    ]), angular.module("security.register.company", []), angular.module(
    "security.register.company").controller("companyRegsterCtrl", ["$scope",
    "security", "$timeout",
    function(a, b, c) {
      function d() {
        0 === e ? (a.isCodeAccessiable = !1, a.codeTip = "获取验证码", e = 60) : (
          a.isCodeAccessiable = !0, a.codeTip = "重新发送(" + e + ")", c(
            function() {
              e--, d()
            }, 1e3))
      }
      config.product = "popup", a.checkName = function(b) {
        return b.name ? countCharacters(b.name) > 40 ? (a.nameError =
          "企业名称不能超过40个字符", !1) : (a.nameError = "", !0) : (a.nameError =
          "请填写企业名称", !1)
      }, a.checkEmail = function(b) {
        var c =
          /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        return b.email && !c.test(b.email) ? (a.emailError = "请正确填写邮箱", !1) :
          b.email ? (a.emailError = "", !0) : (a.emailError = "请填写企业邮箱", !1)
      }, a.checkcontacts = function(b) {
        return b.contacts ? countCharacters(b.contacts) > 30 ? (a.contactsError =
          "联系人不能超过30个字符", !1) : (a.contactsError = "", !0) : (a.contactsError =
          "请填写联系人", !1)
      }, a.checkAddress = function(b) {
        return b.address ? countCharacters(b.address) > 50 ? (a.addressError =
          "联系地址不能超过50个字符", !1) : (a.addressError = "", !0) : (a.addressError =
          "请填写联系地址", !1)
      }, a.checkCode = function(b) {
        return b.code ? (a.codeError = "", !0) : (a.codeError = "请输入手机验证码", !
          1)
      }, a.checkPassword = function(b) {
        if (b.password) {
          if (/^[a-zA-Z0-9]{6,16}$/g.test(b.password)) return a.pwdError =
            null, !0;
          a.pwdError = "密码为6~16个字符(英文字母或数字，区分大小写)"
        } else a.pwdError = "密码不能为空";
        return !1
      }, a.getImageCode = function() {
        challenge && validate && seccode && a.getCode()
      }, a.getCode = function() {
        var c = a.companyInfo;
        if (!c || !c.mobile) return a.telError = "请填写手机号码", !1;
        a.telError = "";
        var e = {
          phone: c.mobile,
          geetest_challenge: challenge,
          geetest_validate: validate,
          geetest_seccode: seccode
        };
        b.getCode($.param(e)).success(function(b) {
          challenge = "", validate = "", seccode = "", 200 === b.code ?
            d() : a.telError = b.msg
        })
      }, a.isCodeAccessiable = !1;
      var e = 60;
      a.checkFormFormat = function(b) {
        return a.checkName(b) && a.checkPassword(b) && a.checkEmail(b) && a
          .checkcontacts(b) && a.checkAddress(b) ? !0 : !1
      };
      var f = !1;
      a.register = function(c) {
        if (!c) return void(a.regErr = "请填写注册信息");
        a.regErr = "";
        var d = {
          phone: c.mobile,
          password: c.password,
          code: c.code,
          name: c.name,
          email: c.email,
          contacts: c.contacts,
          address: c.address
        };
        a.checkFormFormat(c) && (f || (f = !0, b.register($.param(d), "", c
          .mobile, !0).then(function(b) {
          f = !1, b && (a.regErr = b.msg)
        })))
      }
    }
  ]), angular.module("security.retryQueue", []).factory("securityRetryQueue", [
    "$q", "$log",
    function(a, b) {
      var c = [],
        d = {
          onItemAddedCallbacks: [],
          hasMore: function() {
            return c.length > 0
          },
          push: function(a) {
            c.push(a), angular.forEach(d.onItemAddedCallbacks, function(c) {
              try {
                c(a)
              } catch (d) {
                b.error(
                  "securityRetryQueue.push(retryItem): callback threw an error" +
                  d)
              }
            })
          },
          pushRetryFn: function(b, c) {
            1 === arguments.length && (c = b, b = undefined);
            var e = a.defer(),
              f = {
                reason: b,
                retry: function() {
                  a.when(c()).then(function(a) {
                    e.resolve(a)
                  }, function(a) {
                    e.reject(a)
                  })
                },
                cancel: function() {
                  e.reject()
                }
              };
            return d.push(f), e.promise
          },
          retryReason: function() {
            return d.hasMore() && c[0].reason
          },
          cancelAll: function() {
            for (; d.hasMore();) c.shift().cancel()
          },
          retryAll: function() {
            for (; d.hasMore();) c.shift().retry()
          }
        };
      return d
    }
  ]), angular.module("security.service", ["security.retryQueue",
    "security.authority", "security.login.toolbar", "ui.bootstrap.modal"
  ]).factory("security", ["$rootScope", "$http", "$q", "$location",
    "securityRetryQueue", "$modal", "ModalService", "authority",
    "dataCacheService", "authService",
    function(a, b, c, d, e, f, g, h, i, j) {
      function k(a) {
        a = a || "/", window.location.href = a
      }

      function l() {
        var b = "/upgrade/" === d.path().substring(0, 9) || "/xdBuy" === d.path();
        o || (o = j.showAuth({
          type: "login"
        }).then(function(c) {
          "registerEnterprise" === c.type ? (b ? localStorage.setItem(
              "upgradeUrl", d.path()) : localStorage.removeItem(
              "upgradeUrl"), d.path("/reg/guide/company"), e.cancelAll()) :
            "register" === c.type ? (b ? q.requestCurrentUser(function() {
              a.$broadcast("toAppUpgrade")
            }) : d.path("/main"), e.cancelAll()) : "login" === c.type ?
            (q.currentUser = null, q.requestCurrentUser(function() {
              var c = i.get("currentuser", "currentuser");
              return b ? void a.$broadcast("toAppUpgrade") : void(c !==
                q.currentUser.id ? (d.path("/main"), e.cancelAll()) :
                e.retryAll())
            })) : "reset" === c.type && (d.path("/main"), e.cancelAll())
        }, function() {
          e.cancelAll(), b || k()
        })["finally"](function() {
          o = null
        }))
      }

      function m(a) {
        p = a
      }

      function n() {
        return p
      }
      var o = null;
      e.onItemAddedCallbacks.push(function() {
        e.hasMore() && q.showLogin()
      });
      var p = {},
        q = {
          showLogin: function() {
            l()
          },
          getUserDetail: function(a, c, d) {
            var e = PREFIX_URL + "base/relUserInfo?type=" + a + "&openId=" +
              c + "&accessToken=" + d,
              f = new Date;
            return e += "&date=" + f.getTime(), b({
              method: "GET",
              url: e,
              withCredentials: !0
            })
          },
          checkUniquenessNew: function(a) {
            var c = PREFIX_URL + "m/u/check/loginid?username=" + a,
              d = new Date;
            return c += "&date=" + d.getTime(), b({
              method: "GET",
              url: c,
              withCredentials: !0
            })
          },
          addRegisterInfo: m,
          getRegisterInfo: n,
          getCode: function(a) {
            var c = PREFIX_URL + "index.php?c=user&a=register/code";
            return b({
              method: "POST",
              url: c,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
              },
              withCredentials: !0,
              data: a
            })
          },
          hasRel: function(a) {
            registerDialog && closeUserDialog(registerDialog, !1);
            var c = new Date,
              e = PREFIX_URL + "base/user/hasRel?type=" + a.type +
              "&openId=" + a.openId + "&time=" + c.getTime(),
              f = b.get(e, {
                withCredentials: !0
              });
            f.then(function(b) {
              200 === b.status ? b.data.success === !0 ? (("/home" ===
                  d.path() || "/home/login" === d.path()) && d.path(
                  "main"), q.requestCurrentUser()) : "未关联账号" === b.data
                .msg && openOtherRegisterDialog(a) : q.isAuthenticated()
            }, function() {
              q.isAuthenticated()
            })
          },
          logout: function(c, e) {
            b({
              withCredentials: !0,
              method: "GET",
              url: PREFIX_URL + "?c=user&a=logout"
            })
          },
          userPromise: null,
          requestCurrentUser: function(d) {
            if (q.isAuthenticated()) return c.when(q.currentUser);
            var e = new Date;
            return q.userPromise ? q.userPromise : (q.userPromise = b.get(
              PREFIX_URL + "index.php?c=user&a=check&time=" + e.getTime(), {
                withCredentials: !0
              }).then(function(b) {
              if (q.userPromise = null, b.data.success) {
                if (b.data.obj ? a.userPermit = "," + b.data.obj.extPermi +
                  "," : a.userPermit = null, q.currentUser = b.data.obj,
                  d) d();
                else {
                  var c = i.get("currentuser", "currentuser");
                  c !== q.currentUser.id && (i.clear(), i.push(
                    "currentuser", "currentuser", q.currentUser.id
                  ))
                }(!q.currentUser.roleIdList || q.currentUser.roleIdList
                  .length <= 0) && (q.currentUser.roleIdList = [2])
              }
              return q.currentUser
            }, function() {
              q.userPromise = null
            }), q.userPromise)
          },
          isAuthenticated: function() {
            return !!q.currentUser
          },
          isAllowToAccess: function(a) {
            if (!q.currentUser) return !1;
            var b = h.userRoleDef[q.currentUser.type];
            return b && (b.code & a) > 0 ? !0 : !1
          },
          accessDef: h.accessDef,
          isEditor: function() {
            if (!q.currentUser) return !1;
            var a = q.currentUser.roleIdList;
            if (!a) return !1;
            for (var b = 0; b < a.length; b++)
              if (4 === a[b]) return !0;
            return !1
          },
          isTplEditor: function() {
            if (!q.currentUser) return !1;
            var a = q.currentUser.roleIdList;
            if (!a) return !1;
            for (var b = 0; b < a.length; b++)
              if (4 === a[b] || 12 === a[b] || 13 === a[b]) return !0;
            return !1
          },
          isAdvancedUser: function() {
            return q.currentUser && 3 === q.currentUser.type ? !0 : !1
          },
          isVendorUser: function() {
            return q.currentUser && 4 === q.currentUser.type ? !0 : !1
          },
          requestResetPassword: function(a) {
            openResetPasswordDialog(a)
          },
          validateToken: function(a) {
            var c = "changepw?token=" + a;
            return b.get(PREFIX_URL + c, {
              withCredentials: !0
            })
          },
          resetPassword: function(a, c) {
            var d = PREFIX_URL + "index.php?c=Usercenter&a=changePwd",
              e = {
                oldPwd: a,
                newPwd: c
              };
            return b.post(d, $.param(e), {
              withCredentials: !0,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
              }
            })
          }
        };
      return q
    }
  ]), angular.module("security.thirdparty", ["security.service"]).factory(
    "thirdpartyService", ["$rootScope", "$http", "$location", "$window",
      "security", "i18nNotifications",
      function(a, b, c, d, e, f) {
        function g(a) {
          var b = "https://graph.qq.com/oauth2.0/authorize?",
            c = "101149132",
            d = ["client_id=" + c, "redirect_uri=" + a, "scope=get_user_info",
              "response_type=token"
            ],
            e = d.join("&");
          return i = b + e
        }

        function h(a) {
          var b = "https://open.weixin.qq.com/connect/qrconnect?",
            c = "wxc5f1bbae4bb93ced",
            d = ["appid=" + c, "redirect_uri=" + a, "scope=snsapi_login",
              "response_type=code", "state=WECHAT_STATE#wechat_redirect"
            ],
            e = d.join("&");
          return j = b + e
        }
        var i, j, k = {
          qqUrl: g,
          wxUrl: h,
          referrer: "http://eqxiu.com/home",
          cookieId: eqShow.getCookieId(),
          qqLogin: function(a, b) {
            k.getThirdPartyInfo(a).then(function(c) {
              var d = c.openid,
                e = (c.client_id, {
                  email: "",
                  password: "",
                  openId: d,
                  accessToken: a,
                  type: "qq",
                  expires: b,
                  cookieId: k.cookieId,
                  referrer: k.referrer
                });
              k.thirdPartLogin(e)
            })
          },
          getThirdPartyInfo: function(a) {
            var b = "https://graph.qq.com/oauth2.0/me?access_token=" + a;
            return $.ajax({
              type: "get",
              url: b,
              dataType: "jsonp",
              jsonp: "jsoncallback",
              jsonpCallback: "callback",
              xhrFields: {
                withCredentials: !0
              }
            })
          },
          weiChatLogin: function(a) {
            return b.post(PREFIX_URL + "eqs/relWechatAccount?code=" + a +
              "&type=weixin&cookieId=" + k.cookieId + "&referrer=" + k.referrer +
              "&isMobile=1&time=" + (new Date).getTime(), {}, {
                withCredentials: !0,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
              })
          },
          unbindRelation: function(c) {
            var d = {
                type: c
              },
              e = "m/u/unRelation";
            b({
              withCredentials: !0,
              method: "POST",
              url: PREFIX_URL + e,
              data: $.param(d),
              headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
              }
            }).then(function(b) {
              b.data.success && a.$broadcast("mail.unbind.success", c)
            })
          },
          wxBindAccount: function(a) {
            k.bindAccountCommon(a)
          },
          qqBindAccount: function(a) {
            k.getThirdPartyInfo(a.access_token).then(function(b) {
              var c = b.openid,
                d = (b.client_id, {
                  openId: c,
                  accessToken: a.access_token,
                  expires: a.expires_in,
                  type: "qq"
                });
              k.bindAccountCommon(d)
            }, function() {})
          },
          bindAccountCommon: function(c) {
            var d = "m/u/bind/third";
            b({
              withCredentials: !0,
              method: "POST",
              url: PREFIX_URL + d,
              data: $.param(c),
              headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
              }
            }).then(function(b) {
              b.data.success ? a.$broadcast("rel.success", c.type) : f.pushForCurrentRoute(
                "already.bind.error", "notify.success", {
                  msg: b.data.msg
                })
            }, function() {
              alert("服务器异常！")
            })
          },
          openThirtyPartyWindow: function(a) {
            k.referrer = document.referrer;
            var b, c = eqShow.getDomain(window.location.href),
              e = encodeURIComponent("http://" + c + "/passport.html");
            "qq" == a ? b = k.qqUrl(e) : "weixin" == a && (b = k.wxUrl(e));
            var f = (window.outerHeight - 600) / 2,
              g = (window.outerWidth - 600) / 2;
            d.open(b, "_blank",
              "width=600,height=600,menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,top=" +
              f + ",left=" + g)
          }
        };
        return k
      }
    ])