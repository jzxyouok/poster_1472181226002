angular.module("app.directives.addelement", []).directive("addElement", ["$compile", function($compile) {
  return{
    restrict : "EA",
    /**
     * @param {?} scope
     * @param {Function} elm
     * @return {undefined}
     */
    link : function(scope, elm) {
      var _this = $("#emailAddress");
      var e = $("#emailAddress").size() + 1;
      elm.bind("click", function() {
        var $page = angular.element('<div><input type="text" id="p_scnt" style="width:100%; height: 30px; margin-top: 15px;" ng-model="attrs.addElement" name="p_scnt_' + e + '" placeholder="Input Value" /></div>');
        _this.append($page);
        var html = $page.find("input");
        $compile(html)(scope);
        e++;
      });
    }
  };
}]).directive("showIcon", ["$compile", function($compile) {
  return{
    restrict : "EA",
    require : "ngModel",
    scope : {
      check : "&callbackFn"
    },
    /**
     * @param {Object} scope
     * @param {Object} element
     * @param {Function} data
     * @param {Object} controller
     * @return {undefined}
     */
    link : function(scope, element, data, controller) {
      var value;
      var exports;
      var tplElCompiled = $compile('<a><span class = "glyphicon glyphicon-ok-circle" ng-show="enabled" style = "margin-top: 8px; color: #9ad64b; font-size: 15px;"></span></a>')(scope);
      /**
       * @return {undefined}
       */
      scope.update = function() {
        element[0].blur();
        scope.check({
          arg1 : {
            name : controller.$name
          }
        });
      };
      element.bind("focus", function() {
        value = controller.$viewValue;
        element.parent().after(tplElCompiled);
        /** @type {boolean} */
        scope.enabled = true;
        if ("email" === data.name || ("mobile" === data.name || "tel" === data.name)) {
          /** @type {boolean} */
          scope.enabled = false;
        }
        scope.$apply();
      }).bind("blur", function() {
        /** @type {boolean} */
        scope.enabled = false;
        exports = controller.$viewValue;
        /** @type {RegExp} */
        var rPrefix = new RegExp(/(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/g);
        if ("mobile" === data.name && (exports && !rPrefix.test(element.val()))) {
          return;
        }
        alert("\u624b\u673a\u53f7\u7801\u683c\u5f0f\u9519\u8bef");
        $('input[name="mobile"]').addClass("error");
        void $('input[name="mobile"]').change(function() {
          $(this).removeClass("error");
        });
        if ("email" === data.name && exports) {
          /** @type {RegExp} */
          var HCHARS = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g);
          if (!HCHARS.test(element.val())) {
            return alert("\u90ae\u7bb1\u683c\u5f0f\u9519\u8bef\uff01"), $('input[name="email"]').addClass("error"), void $('input[name="email"]').change(function() {
              $(this).removeClass("error");
            });
          }
        }
        if (exports || value) {
          if (value !== exports) {
            scope.update();
          }
        }
        scope.$apply();
      });
    }
  };
}]).directive("ngHover", function() {
  return{
    restrict : "EA",
    scope : {
      resource : "="
    },
    /**
     * @param {Object} scope
     * @param {Object} elem
     * @return {undefined}
     */
    link : function(scope, elem) {

      elem.hover(function() {
        scope.$apply(function() {
          /** @type {boolean} */
          scope.resource.show = true;
        });
      }, function() {
        scope.$apply(function() {
          /** @type {boolean} */
          scope.resource.show = false;
        });
      });
    }
  };
}).directive("imgClick", function() {
  return{
    restrict : "EA",
    /**
     * @param {?} tabCtrl
     * @param {?} el
     * @return {undefined}
     */
    link : function(tabCtrl, el) {
      $(el).bind("click", function() {
        $(el).find("img").css("border", "4px solid #F60");
        $(el).siblings().find("img").css("border", 0);
      });
    }
  };
}).directive("customFocus", function() {
  return{
    restrict : "EA",
    /**
     * @param {?} tabCtrl
     * @param {Array} el
     * @return {undefined}
     */
    link : function(tabCtrl, el) {
      $(el).siblings().bind("click", function() {
        el[0].focus();
      });
    }
  };
}).directive("blurChildren", function() {
  return{
    restrict : "EA",
    /**
     * @param {?} tabCtrl
     * @param {Array} element
     * @return {undefined}
     */
    link : function(tabCtrl, element) {
      $(element).on("click", function(evt) {
        if (evt.target === element[0] || $(evt.target).hasClass("badge")) {
          $(".blurClass").find("input:visible").blur();
        }
      });
    }
  };
}).directive("forbiddenClose", function() {
  return{
    restrict : "EAC",
    /**
     * @param {?} tabCtrl
     * @param {?} elm
     * @return {undefined}
     */
    link : function(tabCtrl, elm) {
      $(elm).on("click", function(event) {
        event.stopPropagation();
      });
    }
  };
}).directive("customeImage", function() {
  return{
    restrict : "EA",
    /**
     * @param {?} tabCtrl
     * @param {?} elem
     * @return {undefined}
     */
    link : function(tabCtrl, elem) {
      $(elem).hover(function() {
        $("<div><a></a></div>");
      });
    }
  };
}).directive("slides", ["configSerService", function($location) {
  return{
    restrict : "EA",
    /**
     * @param {?} tabCtrl
     * @param {?} scope
     * @return {undefined}
     */
    link : function(tabCtrl, scope) {
      var rule = $(scope).find(".slides_container");
      $location.getActivityBanner("home").then(function(event) {
        var items = event.data.list;
        /** @type {number} */
        var i = 0;
        for (;i < items.length;i++) {
          rule.append('<div class="slides-content" style="width: ' + document.documentElement.clientWidth + 'px;"><a target="_blank" href="' + items[i].url + '" data-banner="9201" data-bid="' + items[i].id + '"><img id="banner' + i + '" src="' + items[i].path + '" width="100%" height="100%" alt="Slide 1"></a></div>');
        }
        if (document.getElementById("banner0")) {
          /**
           * @return {undefined}
           */
          document.getElementById("banner0").onload = function() {
            rule.find(".slides_control").height($(".slides-content").height());
          };
          $(window).on("resize", function() {
            rule.find(".slides-content").css("width", document.documentElement.clientWidth);
            rule.find(".slides_control").height($(".slides-content").height());
          });
        }
        $(scope).slides({
          preload : true,
          play : 5E3,
          pause : 2500,
          hoverPause : true
        });
      });
    }
  };
}]).directive("slides3", ["configSerService", function($scope) {
  return{
    restrict : "EA",
    /**
     * @param {?} response
     * @param {?} scope
     * @param {Object} $attrs
     * @return {undefined}
     */
    link : function(response, scope, $attrs) {
      var page = $(scope).find(".slides_container");
      $scope.getActivityBanner($attrs.id, response.userType).then(function(event) {
        var items = event.data.list;
        /** @type {number} */
        var i = 0;
        for (;i < items.length;i++) {
          var tabContent = $('<a href="' + items[i].url + '" data-banner="2205" data-bid="' + items[i].id + '" style="display:block;" target="' + items[i].target + '" ></a>');
          tabContent.append('<img src="' + items[i].path + '" width="' + $attrs.width + '" height="' + $attrs.height + '" alt="' + items[i].title + '" title="' + items[i].title + '" > ');
          page.append(tabContent);
        }
        $(scope).slides({
          preload : true,
          play : 3E3,
          pause : 2500,
          hoverPause : true
        });
      });
    }
  };
}]).directive("addClass", function() {
  return{
    restrict : "EA",
    /**
     * @param {?} tabCtrl
     * @param {?} el
     * @return {undefined}
     */
    link : function(tabCtrl, el) {
      $(el).closest(".textbox-wrap").find("[autofocus]").focus();
      $(el).on("blur", function() {
        $(el).closest(".textbox-wrap").removeClass("focused");
      }).on("focus", function() {
        $(el).closest(".textbox-wrap").addClass("focused");
      });
    }
  };
}).directive("loadScript", ["$http", "$timeout", "$rootScope", function(Reflect) {
  return{
    /**
     * @param {?} scope
     * @param {Array} $element
     * @return {undefined}
     */
    link : function(scope, $element) {
      /**
       * @return {undefined}
       */
      var message = function() {
        /** @type {boolean} */
        scope.captchaLoaded = true;
      };
      scope.$watch(function() {
        return $element[0].getAttribute("src");
      }, function(dataAndEvents) {
        if (dataAndEvents) {
          Reflect.jsonp($element[0].getAttribute("src")).success(message).error(message);
        }
      });
      scope.$on("$destroy", function() {
        angular.element(".gt_widget").remove();
      });
    }
  };
}]), angular.module("angularEffects", []).directive("slideToggle", function() {
  return{
    restrict : "A",
    /**
     * @param {?} tabCtrl
     * @param {Function} elm
     * @param {?} scope
     * @return {undefined}
     */
    link : function(tabCtrl, elm, scope) {
      /** @type {(Element|null)} */
      var id = document.querySelector(scope.slideToggle);
      $(id).hide();
      elm.bind("click", function() {
        $(id).slideToggle();
      });
    }
  };
}), angular.module("app.directives.autoclose", []).directive("autoClose", function() {
  return{
    restrict : "EA",
    /**
     * @param {?} scope
     * @return {undefined}
     */
    link : function(scope) {
      $(document).click(function(e) {
        e.target.className;
        return $(event.target).closest(".drop-area").length ? false : (scope.showObj = {
          showGroup : false
        }, void scope.$apply());
      });
    }
  };
}), angular.module("colorpicker.module", []).factory("Helper", function() {
  return{
    /**
     * @param {Object} proto
     * @return {?}
     */
    closestSlider : function(proto) {
      var exports = proto.matches || (proto.webkitMatchesSelector || (proto.mozMatchesSelector || proto.msMatchesSelector));
      return exports.bind(proto)("I") ? proto.parentNode : proto;
    },
    /**
     * @param {Element} el
     * @param {boolean} keepData
     * @return {?}
     */
    getOffset : function(el, keepData) {
      /** @type {number} */
      var left = 0;
      /** @type {number} */
      var top = 0;
      /** @type {number} */
      var _x = 0;
      /** @type {number} */
      var _y = 0;
      for (;el && (!isNaN(el.offsetLeft) && !isNaN(el.offsetTop));) {
        left += el.offsetLeft;
        top += el.offsetTop;
        if (keepData || "BODY" !== el.tagName) {
          _x += el.scrollLeft;
          _y += el.scrollTop;
        } else {
          _x += document.documentElement.scrollLeft || el.scrollLeft;
          _y += document.documentElement.scrollTop || el.scrollTop;
        }
        el = el.offsetParent;
      }
      return{
        top : top,
        left : left,
        scrollX : _x,
        scrollY : _y
      };
    },
    stringParsers : [{
      re : /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
      /**
       * @param {Array} src
       * @return {?}
       */
      parse : function(src) {
        return[src[1], src[2], src[3], src[4]];
      }
    }, {
      re : /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
      /**
       * @param {Array} src
       * @return {?}
       */
      parse : function(src) {
        return[2.55 * src[1], 2.55 * src[2], 2.55 * src[3], src[4]];
      }
    }, {
      re : /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
      /**
       * @param {(Array|Float32Array)} execResult
       * @return {?}
       */
      parse : function(execResult) {
        return[parseInt(execResult[1], 16), parseInt(execResult[2], 16), parseInt(execResult[3], 16)];
      }
    }, {
      re : /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
      /**
       * @param {(Array|Float32Array)} node
       * @return {?}
       */
      parse : function(node) {
        return[parseInt(node[1] + node[1], 16), parseInt(node[2] + node[2], 16), parseInt(node[3] + node[3], 16)];
      }
    }]
  };
}).factory("Color", ["Helper", function(cloned) {
  return{
    value : {
      h : 1,
      s : 1,
      b : 1,
      a : 1
    },
    /**
     * @return {?}
     */
    rgb : function() {
      var rgb = this.toRGB();
      return "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
    },
    /**
     * @return {?}
     */
    rgba : function() {
      var rgb = this.toRGB();
      return "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + rgb.a + ")";
    },
    /**
     * @return {?}
     */
    hex : function() {
      return this.toHex();
    },
    /**
     * @param {number} r
     * @param {number} b
     * @param {number} blue
     * @param {number} g
     * @return {?}
     */
    RGBtoHSB : function(r, b, blue, g) {
      r /= 255;
      b /= 255;
      blue /= 255;
      var h;
      var scale;
      var a;
      var delta;
      return a = Math.max(r, b, blue), delta = a - Math.min(r, b, blue), h = 0 === delta ? null : a === r ? (b - blue) / delta : a === b ? (blue - r) / delta + 2 : (r - b) / delta + 4, h = (h + 360) % 6 * 60 / 360, scale = 0 === delta ? 0 : delta / a, {
        h : h || 1,
        s : scale,
        b : a,
        a : g || 1
      };
    },
    /**
     * @param {Object} color
     * @return {?}
     */
    setColor : function(color) {
      color = color.toLowerCase();
      var i;
      for (i in cloned.stringParsers) {
        if (cloned.stringParsers.hasOwnProperty(i)) {
          var parser = cloned.stringParsers[i];
          var src = parser.re.exec(color);
          var applyArgs = src && parser.parse(src);
          if (applyArgs) {
            return this.value = this.RGBtoHSB.apply(null, applyArgs), false;
          }
        }
      }
    },
    /**
     * @param {number} value
     * @return {undefined}
     */
    setHue : function(value) {
      /** @type {number} */
      this.value.h = 1 - value;
    },
    /**
     * @param {number} s
     * @return {undefined}
     */
    setSaturation : function(s) {
      /** @type {number} */
      this.value.s = s;
    },
    /**
     * @param {number} n
     * @return {undefined}
     */
    setLightness : function(n) {
      /** @type {number} */
      this.value.b = 1 - n;
    },
    /**
     * @param {number} event
     * @return {undefined}
     */
    setAlpha : function(event) {
      /** @type {number} */
      this.value.a = parseInt(100 * (1 - event), 10) / 100;
    },
    /**
     * @param {number} h
     * @param {number} s
     * @param {number} v
     * @param {number} deepDataAndEvents
     * @return {?}
     */
    toRGB : function(h, s, v, deepDataAndEvents) {
      if (!h) {
        h = this.value.h;
        s = this.value.s;
        v = this.value.b;
      }
      h *= 360;
      var num;
      var pos;
      var B;
      var X;
      var C;
      return h = h % 360 / 60, C = v * s, X = C * (1 - Math.abs(h % 2 - 1)), num = pos = B = v - C, h = ~~h, num += [C, X, 0, 0, X, C][h], pos += [X, C, C, X, 0, 0][h], B += [0, 0, X, C, C, X][h], {
        r : Math.round(255 * num),
        g : Math.round(255 * pos),
        b : Math.round(255 * B),
        a : deepDataAndEvents || this.value.a
      };
    },
    /**
     * @param {number} str
     * @param {number} c
     * @param {number} value
     * @param {number} deepDataAndEvents
     * @return {?}
     */
    toHex : function(str, c, value, deepDataAndEvents) {
      var rgb = this.toRGB(str, c, value, deepDataAndEvents);
      return "#" + (1 << 24 | parseInt(rgb.r, 10) << 16 | parseInt(rgb.g, 10) << 8 | parseInt(rgb.b, 10)).toString(16).substr(1);
    }
  };
}]).factory("Slider", ["Helper", function(el) {
  var me = {
    maxLeft : 0,
    maxTop : 0,
    callLeft : null,
    callTop : null,
    knob : {
      top : 0,
      left : 0
    }
  };
  var diffTop = {};
  return{
    /**
     * @return {?}
     */
    getSlider : function() {
      return me;
    },
    /**
     * @param {Object} node
     * @return {?}
     */
    getLeftPosition : function(node) {
      return Math.max(0, Math.min(me.maxLeft, me.left + ((node.pageX || diffTop.left) - diffTop.left)));
    },
    /**
     * @param {Object} node
     * @return {?}
     */
    getTopPosition : function(node) {
      return Math.max(0, Math.min(me.maxTop, me.top + ((node.pageY || diffTop.top) - diffTop.top)));
    },
    /**
     * @param {Object} event
     * @param {boolean} name
     * @return {undefined}
     */
    setSlider : function(event, name) {
      var h2 = el.closestSlider(event.target);
      var win = el.getOffset(h2, name);
      me.knob = h2.children[0].style;
      me.left = event.pageX - win.left - window.pageXOffset + win.scrollX;
      me.top = event.pageY - win.top - window.pageYOffset + win.scrollY;
      diffTop = {
        left : event.pageX,
        top : event.pageY
      };
    },
    /**
     * @param {number} s
     * @param {boolean} key
     * @return {undefined}
     */
    setSaturation : function(s, key) {
      me = {
        maxLeft : 100,
        maxTop : 100,
        callLeft : "setSaturation",
        callTop : "setLightness"
      };
      this.setSlider(s, key);
    },
    /**
     * @param {number} node
     * @param {boolean} value
     * @return {undefined}
     */
    setHue : function(node, value) {
      me = {
        maxLeft : 0,
        maxTop : 100,
        callLeft : false,
        callTop : "setHue"
      };
      this.setSlider(node, value);
    },
    /**
     * @param {number} event
     * @param {boolean} value
     * @return {undefined}
     */
    setAlpha : function(event, value) {
      me = {
        maxLeft : 0,
        maxTop : 100,
        callLeft : false,
        callTop : "setAlpha"
      };
      this.setSlider(event, value);
    },
    /**
     * @param {number} newTop
     * @param {number} val
     * @return {undefined}
     */
    setKnob : function(newTop, val) {
      /** @type {string} */
      me.knob.top = newTop + "px";
      /** @type {string} */
      me.knob.left = val + "px";
    }
  };
}]).directive("colorpicker", ["$document", "$compile", "Color", "Slider", "Helper", "editService", function(element, $compile, cal_element, ret, kendo, dataAndEvents) {
  return{
    scope : {
      disable : "@",
      y : "@"
    },
    require : "?ngModel",
    restrict : "A",
    /**
     * @param {Object} scope
     * @param {Array} element
     * @param {?} attr
     * @param {(Node|string)} controller
     * @return {undefined}
     */
    link : function(scope, element, attr, controller) {
      var bar;
      var data = {
        x : parseInt(attr.x, 10) || 0,
        y : parseInt(scope.y, 10) || 0
      };
      var unlock = attr.colorpicker ? attr.colorpicker : "hex";
      var alignment = angular.isDefined(attr.colorpickerPosition) ? attr.colorpickerPosition : "bottom";
      var value = angular.isDefined(attr.colorpickerInline) ? attr.colorpickerInline : false;
      var camelKey = angular.isDefined(attr.colorpickerFixedPosition) ? attr.colorpickerFixedPosition : false;
      var ele = angular.isDefined(attr.colorpickerParent) ? element.parent() : angular.element(document.body);
      var passed = angular.isDefined(attr.colorpickerWithInput) ? attr.colorpickerWithInput : false;
      /** @type {string} */
      var args = passed ? '<input type="text" name="colorpicker-input">' : "";
      /** @type {string} */
      var suffix = value ? "" : '<button type="button" class="close close-colorpicker">&times;</button>';
      /** @type {string} */
      var tpl = '<div class="colorpicker dropdown" ng-click="$event.stopPropagation();"><div class="dropdown-menu"><colorpicker-saturation><i></i></colorpicker-saturation><colorpicker-hue><i></i></colorpicker-hue><colorpicker-alpha><i></i></colorpicker-alpha><colorpicker-preview></colorpicker-preview>' + args + suffix + "</div></div>";
      var el = angular.element(tpl);
      /** @type {Object} */
      var _this = cal_element;
      var component = el.find("colorpicker-hue");
      var elm = el.find("colorpicker-saturation");
      var option = el.find("colorpicker-preview");
      var c = el.find("i");
      if ($compile(el)(scope), scope.disable && scope.$watch("disable", function(value, oldValue) {
            if (value !== oldValue) {
              if ("false" === value) {
                toggle();
              }
            }
          }), scope.$watch("y", function(line, clear) {
            if (line) {
              if (line !== clear) {
                /** @type {number} */
                data.y = parseInt(line, 10);
              }
            }
          }), passed) {
        var textarea = el.find("input");
        textarea.on("mousedown", function(event) {
          event.stopPropagation();
        }).on("keyup", function(event) {
          var value = this.value;
          element.val(value);
          if (controller) {
            scope.$apply(controller.$setViewValue(value));
          }
          event.stopPropagation();
          event.preventDefault();
        });
        element.on("keyup", function() {
          textarea.val(element.val());
        });
      }
      /**
       * @return {undefined}
       */
      var mouseup = function() {
        element.on("mousemove", change);
        element.on("mouseup", onStop);
      };
      if ("rgba" === unlock) {
        el.addClass("alpha");
        bar = el.find("colorpicker-alpha");
        bar.on("click", function(start) {
          ret.setAlpha(start, camelKey);
          change(start);
        }).on("mousedown", function(prev) {
          ret.setAlpha(prev, camelKey);
          mouseup();
        });
      }
      component.on("click", function(val) {
        ret.setHue(val, camelKey);
        change(val);
      }).on("mousedown", function(expression) {
        ret.setHue(expression, camelKey);
        mouseup();
      });
      elm.on("click", function(start) {
        ret.setSaturation(start, camelKey);
        change(start);
      }).on("mousedown", function(p) {
        ret.setSaturation(p, camelKey);
        mouseup();
      });
      if (camelKey) {
        el.addClass("colorpicker-fixed-position");
      }
      el.addClass("colorpicker-position-" + alignment);
      if ("true" === value) {
        el.addClass("colorpicker-inline");
      }
      ele.append(el);
      if (controller) {
        /**
         * @return {undefined}
         */
        controller.$render = function() {
          element.val(controller.$viewValue);
        };
        scope.$watch(attr.ngModel, function() {
          initialize();
        });
      }
      element.on("$destroy", function() {
        el.remove();
      });
      /**
       * @return {undefined}
       */
      var init = function() {
        try {
          option.css("backgroundColor", _this[unlock]());
        } catch (a) {
          option.css("backgroundColor", _this.toHex());
        }
        elm.css("backgroundColor", _this.toHex(_this.value.h, 1, 1, 1));
        if ("rgba" === unlock) {
          bar.css.backgroundColor = _this.toHex();
        }
      };
      /**
       * @param {number} node
       * @return {?}
       */
      var change = function(node) {
        var v = ret.getLeftPosition(node);
        var rreturn = ret.getTopPosition(node);
        var e = ret.getSlider();
        ret.setKnob(rreturn, v);
        if (e.callLeft) {
          _this[e.callLeft].call(_this, v / 100);
        }
        if (e.callTop) {
          _this[e.callTop].call(_this, rreturn / 100);
        }
        init();
        var value = _this[unlock]();
        return element.val(value), controller && scope.$apply(controller.$setViewValue(value)), passed && textarea.val(value), false;
      };
      /**
       * @return {undefined}
       */
      var onStop = function() {
        element.off("mousemove", change);
        element.off("mouseup", onStop);
      };
      /**
       * @return {undefined}
       */
      var initialize = function() {
        _this.setColor(element.val());
        c.eq(0).css({
          left : 100 * _this.value.s + "px",
          top : 100 - 100 * _this.value.b + "px"
        });
        c.eq(1).css("top", 100 * (1 - _this.value.h) + "px");
        c.eq(2).css("top", 100 * (1 - _this.value.a) + "px");
        init();
      };
      /**
       * @return {?}
       */
      var getPosition = function() {
        var box;
        var position = kendo.getOffset(element[0]);
        return angular.isDefined(attr.colorpickerParent) && (position.left = 0, position.top = 0), "top" === alignment ? box = {
          top : position.top - 147 + data.y,
          left : position.left + data.x
        } : "right" === alignment ? box = {
          top : position.top + data.y,
          left : position.left + 126 + data.x
        } : "bottom" === alignment ? (box = {
          top : position.top + element[0].offsetHeight + 2 + data.y,
          left : position.left + data.x
        }, "grid.color" === attr.ngModel && (box.top = $(element[0]).offset().top + 30, box.left = $(element[0]).offset().left)) : "left" === alignment ? box = {
          top : position.top + data.y,
          left : position.left - 150 + data.x
        } : "sceneToobar" === alignment && (box = {
          top : position.top + data.y - 110,
          left : position.left - 150 + data.x + 40
        }), {
          top : box.top + "px",
          left : box.left + "px"
        };
      };
      /**
       * @return {undefined}
       */
      var handler = function() {
        toggle();
      };
      if (value === false) {
        element.on("click", function() {
          initialize();
          el.addClass("colorpicker-visible").css(getPosition());
          element.on("mousedown", handler);
        });
      } else {
        initialize();
        el.addClass("colorpicker-visible").css(getPosition());
      }
      el.on("mousedown", function(event) {
        event.stopPropagation();
        event.preventDefault();
      });
      /**
       * @param {string} event
       * @return {undefined}
       */
      var render = function(event) {
        if (controller) {
          scope.$emit(event, {
            name : attr.ngModel,
            value : controller.$modelValue
          });
        }
      };
      /**
       * @return {undefined}
       */
      var toggle = function() {
        if (el.hasClass("colorpicker-visible")) {
          el.removeClass("colorpicker-visible");
          render("colorpicker-closed");
          element.off("mousedown", handler);
        }
      };
      el.find("button").on("click", function() {
        toggle();
      });
    }
  };
}]), angular.module("app.directives.rightclick", []).directive("rightClick", ["$compile", function($compile) {
  return{
    restrict : "EA",
    /**
     * @param {Object} $scope
     * @param {?} element
     * @return {undefined}
     */
    link : function($scope, element) {
      var button;
      $(element).on("contextmenu", function(e) {
        if (e.preventDefault(), button && (button[0] && button.remove()), "" + $scope.categoryId == "0") {
          button = $('<ul class="right-menu dropdown-menu"></ul>');
          button.appendTo($(element));
          button.css({
            left : e.pageX - $(element).offset().left,
            top : e.pageY - $(element).offset().top
          }).show();
          var i;
          for (i in $scope.myTags) {
            /** @type {string} */
            var html = '<li class="tag_list" ng-class="{selected: dropTagIndex == ' + i + '}" ng-click="selectTag(' + $scope.myTags[i].id + "," + i + ')">' + $scope.myTags[i].name + "</li>";
            var data = $compile(html)($scope);
            button.append(data);
          }
          var contentBox = $compile('<li class="tag_list add_cate clearfix" style="border-top:1px solid #ccc;margin-bottom:0px;" ng-click="createCategory()"><em>+</em><span>\u521b\u5efa\u5206\u7c7b</span></li>')($scope);
          button.append(contentBox);
          var el = $compile('<li class="btn-main" style="width:100%; padding:0px; border: 0;margin:0px;height:25px; line-height:25px;"><a style="height:25px;line-height:25px;text-indent:0;color:#FFF;padding:0px;text-align:center;" ng-click="setCategory(' + $scope.dropTagIndex + "," + $scope.img.id + ')">\u786e\u5b9a</a></li>')($scope);
          button.append(el);
          $(el).on("click", function() {
            button.hide();
          });
          $(document).mousemove(function(touches) {
            if (touches.pageX < button.offset().left - 20 || (touches.pageX > button.offset().left + button.width() + 20 || (touches.pageY < button.offset().top - 20 || touches.pageY > button.offset().top + button.height() + 20))) {
              button.hide();
              $(this).unbind("mousemove");
            }
          });
        }
      });
    }
  };
}]), angular.module("app.directives.copyButton", []).directive("copyButton", [function() {
  return{
    restrict : "EA",
    scope : {
      url : "@"
    },
    /**
     * @param {?} tabCtrl
     * @param {?} element
     * @param {Object} attrs
     * @return {undefined}
     */
    link : function(tabCtrl, element, attrs) {
      var clip = new ZeroClipboard(element);
      clip.on("copy", function(event) {
        var clipboardData = event.clipboardData;
        clipboardData.setData("text/plain", attrs.url.replace(PREFIX_HOST, PREFIX_HOST_ARRAY[Math.floor(12 * Math.random()) % 12]));
      });
      clip.on("ready", function() {
        clip.on("aftercopy", function() {
          alert("\u590d\u5236\u6210\u529f");
        });
      });
    }
  };
}]), angular.module("app.directives.customer", []).directive("forbiddenListClose", function() {
  return{
    restrict : "A",
    /**
     * @param {?} tabCtrl
     * @param {?} elem
     * @return {undefined}
     */
    link : function(tabCtrl, elem) {
      $(elem).click(function() {
        return false;
      });
    }
  };
}), angular.module("app.directives.dataDraggable", []).directive("itemDraggable", function() {
  return{
    restrict : "A",
    /**
     * @param {?} tabCtrl
     * @param {?} elem
     * @return {undefined}
     */
    link : function(tabCtrl, elem) {
      $(elem).draggable({
        zIndex : 2700,
        scroll : false,
        iframeFix : false,
        revert : false,
        helper : "clone"
      });
    }
  };
}).directive("itemDroppable", function() {
  return{
    restrict : "A",
    /**
     * @param {Object} scope
     * @param {?} elem
     * @return {undefined}
     */
    link : function(scope, elem) {
      $(elem).droppable({
        hoverClass : "active",
        /**
         * @return {undefined}
         */
        out : function() {
        },
        /**
         * @param {Event} e
         * @param {Object} ui
         * @return {undefined}
         */
        drop : function(e, ui) {
          delete scope.$parent.associateData[ui.draggable.parent().attr("item-id")];
          scope.$parent.associateData[$(e.target).attr("item-id")] = ui.draggable.attr("item-id");
          var $rootElement = $(e.target).find(".list_darggable");
          if ($rootElement.length > 0) {
            $(".item-remove-droppable").append($rootElement);
          }
          ui.draggable.css({
            left : 0,
            top : 0
          }).prependTo(this);
        }
      });
    }
  };
}).directive("itemRemoveDroppable", function() {
  return{
    restrict : "A",
    /**
     * @param {?} tabCtrl
     * @param {?} elem
     * @return {undefined}
     */
    link : function(tabCtrl, elem) {
      $(elem).droppable({
        hoverClass : "active",
        /**
         * @param {?} event
         * @param {Object} ui
         * @return {undefined}
         */
        drop : function(event, ui) {
          if ($(ui.draggable).parents(".list-attribute").length > 0) {
            delete tabCtrl.associateData[$(ui.draggable).parents(".list-attribute").attr("item-id")];
          }
          ui.draggable.css({
            left : 0,
            top : 0
          }).appendTo(this);
        }
      });
    }
  };
}), angular.module("app.directives.disableKeydown", []).directive("disableEdit", function() {
  /**
   * @param {?} allBindingsAccessor
   * @param {Object} element
   * @return {undefined}
   */
  function init(allBindingsAccessor, element) {
    var _KEYCODE_MAP = {
      37 : "arrow-left",
      38 : "arrow-up",
      39 : "arrow-right",
      40 : "arrow-down",
      9 : "tab",
      27 : "esc"
    };
    element.keydown(function(e) {
      if (!_KEYCODE_MAP[e.which]) {
        e.preventDefault();
      }
    });
  }
  return{
    restrice : "EA",
    /** @type {function (?, Object): undefined} */
    link : init
  };
});
