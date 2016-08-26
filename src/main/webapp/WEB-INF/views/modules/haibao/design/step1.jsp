<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp" %>
<html   >

<head>
    <title>海报制作</title>
    <meta name="decorator" content="default"/>
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
      <script src="${hbStatic}/assets/eqShow.js/ctrl/fill_scene.js?2"></script>
     <script src="${hbStatic}/assets/eqShow.js/main.js"></script>
          <script src="${hbStatic}/assets/eqShow.js/scene.js?1"></script>
    <script src="${hbStatic}/assets/eqShow.js/scene1.js?1"></script>
    <script src="${hbStatic}/assets/eqShow.js/scene2.js?1"></script>
    <script src="${hbStatic}/assets/eqShow.js/scene3.js?1"></script>
   <script src="${hbStatic}/assets/eqShow.js/visitor.js"></script>
             <script src="${hbStatic}/assets/eqShow.js/app.js"></script>
              <script src="${hbStatic}/assets/eqShow.js/security.js"></script>
                    <script src="${hbStatic}/assets/eqShow.js/services.js"></script>
    <script src="${hbStatic}/assets/eqShow.js/ctrl/main.js"></script>
        <script src="${hbStatic}/assets/eqShow.js/service/services.file.js"></script>
    <script src="${hbStatic}/assets/eqShow.js/service/services.notifications.js"></script>
    <script src="${hbStatic}/assets/eqShow.js/service/services.pagetpl.js"></script>
    <script src="${hbStatic}/assets/eqShow.js/service/scene.js"></script>
    <script src="${hbStatic}/assets/eqShow.js/ctrl/scene.pageeffect.js"></script>
    <script src="${hbStatic}/assets/eqShow.js/ctrl/scene.js"></script>
    <script src="${hbStatic}/assets/eqShow.js/ctrl/scene.preview.js"></script>
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

<body sidebar="sidebar-collapse" ng-app="app" ng-controller="AppCtrl">

<div id="loading">
    <div class="loading-con">
        <img ng-src="{{HB_STATIC}}assets/images/puff.svg">
        <p>加载中，请稍后</p>
    </div>
    <div class="loading-bg"></div>
</div>
<input type="text" style="display:none" id="userId" ng-model="user.id"/>

<div id="eq_main" ng-view></div>

<script type="text/javascript" src="${hbStatic}/index/js/jpages.min.js"></script>
<script type="text/javascript" src="${hbStatic}/index/js/jquery.lazyload.js"></script>
<script type="text/javascript" src="${hbStatic}/index/js/jwplayer.js"></script>
<script type="text/javascript" src="${hbStatic}/index/js/common_v.js"></script>
<script type="text/javascript" src="${hbStatic}/index/js/scrop.js"></script>
</body>


</html>
