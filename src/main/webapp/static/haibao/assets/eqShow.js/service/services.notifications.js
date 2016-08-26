angular.module("services.notifications", []).factory("notifications", [
    "$rootScope",
    function(a) {
        var b = {
                STICKY: [],
                ROUTE_CURRENT: [],
                ROUTE_NEXT: []
            },
            c = {},
            d = function(a, b) {
                if (!angular.isObject(b)) throw new Error(
                    "Only object can be added to the notification service");
                return a.push(b), b
            };
        return a.$on("$routeChangeSuccess", function() {
            b.ROUTE_CURRENT.length = 0, b.ROUTE_CURRENT = angular.copy(b.ROUTE_NEXT),
                b.ROUTE_NEXT.length = 0
        }), c.getCurrent = function() {
            return [].concat(b.STICKY, b.ROUTE_CURRENT)
        }, c.pushSticky = function(a) {
            return d(b.STICKY, a)
        }, c.pushForCurrentRoute = function(a) {
            return d(b.ROUTE_CURRENT, a)
        }, c.pushForNextRoute = function(a) {
            return d(b.ROUTE_NEXT, a)
        }, c.remove = function(a) {
            angular.forEach(b, function(b) {
                var c = b.indexOf(a);
                c > -1 && b.splice(c, 1)
            })
        }, c.removeAll = function() {
            angular.forEach(b, function(a) {
                a.length = 0
            })
        }, c
    }
])
