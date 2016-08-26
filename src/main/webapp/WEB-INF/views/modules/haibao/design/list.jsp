<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp" %>
<html <sitemesh:getProperty property="body.sidebar"/> <sitemesh:getProperty property="body.sidebar"/> >

<head>
    <title>海报制作</title>
    <meta name="decorator" content="default"/>

    <script>


    </script>

    <%@include file="/WEB-INF/views/modules/haibao/design/_inc.jsp" %>


    <script src="${hbStatic}/assets/eqShow.js/eq1.js"></script>
    <script src="${hbStatic}/assets/eqShow.js/eq2.js"></script>
    <script src="${hbStatic}/assets/eqShow.js/eq3.js"></script>

    <script src="${hbStatic}/assets/eqShow-site-2.1.5.3.js"></script>

    <script src="${hbStatic}/assets/eqShow.js/routes.js"></script>
    <script src="${hbStatic}/assets/eqShow.js/app.run.js"></script>
    <script src="${hbStatic}/assets/eqShow.js/ctrl/app.js"></script>

    <script src="${hbStatic}/assets/eqShow.js/ctrls.js"></script>
    <script src="${hbStatic}/assets/eqShow.js/angular.js?2"></script>
    <script src="${hbStatic}/assets/eqShow.js/ctrl/main.js"></script>
    <script src="${hbStatic}/assets/eqShow.js/ctrl/scene.create_scene.js"></script>


    <style>
        .myGrid {
            width: 998px;
            height: 550px;
        }

        .myGrid1 {
            width: 650px;
            height: 550px;
        }

        .choose_template .main .content .mask ul li .roll :hover .cc {
            display: block;
        }
    </style>
</head>

<body  ng-app="app" ng-controller="AppCtrl">

<div id="loading">
    <div class="loading-con">
        <img ng-src="{{HB_STATIC}}assets/images/puff.svg">
        <p>加载中，请稍后</p>
    </div>
    <div class="loading-bg"></div>
</div>
<input type="text" style="display:none" id="userId" ng-model="user.id"/>
<div class="position:relative">
    <div style="z-index:2000;" id="notify" ng-include="tplUrl + 'notifications.tpl.html'"
         ng-if="notifications.getCurrent().length"></div>
</div>
<div id="eq_main" ng-view></div>
<div class="feedback" ng-show="feedBackUrl">
    <div class="feedback-bg"></div>
</div>

<%--<script>--%>
    <%--var redirect_uri = encodeURIComponent('http://e.wesambo.com/password.html');--%>
    <%--var challenge, validate, seccode, selectorA;--%>
    <%--var config = {--%>
        <%--gt: '1ebc844c9e3a8c23e2ea4b567a8afd2d',--%>
        <%--challenge: '19e9d723472a0dfb08f34398af28ada8',--%>
        <%--product: 'popup',--%>
        <%--popupbtnid: 'submit-button',--%>
        <%--lang: 'zh-cn'--%>
    <%--};--%>
<%--</script>--%>
<%--<script>--%>
<%--// Tracker--%>
<%--var d = document,--%>
<%--g = d.createElement('script'),--%>
<%--s = d.getElementsByTagName('script')[0];--%>
<%--g.type = 'text/javascript';--%>
<%--g.async = true;--%>
<%--g.defer = true;--%>
<%--g.src = 'http://da.eqxiu.com/d.js?pid=1&v=1';--%>
<%--s.parentNode.insertBefore(g, s);--%>
<%--</script>--%>
<script type="text/javascript" src="${hbStatic}/index/js/jpages.min.js"></script>
<script type="text/javascript" src="${hbStatic}/index/js/jquery.lazyload.js"></script>
<script type="text/javascript" src="${hbStatic}/index/js/jwplayer.js"></script>
<script type="text/javascript" src="${hbStatic}/index/js/common_v.js"></script>
<script type="text/javascript" src="${hbStatic}/index/js/scrop.js"></script>
</body>


</html>
