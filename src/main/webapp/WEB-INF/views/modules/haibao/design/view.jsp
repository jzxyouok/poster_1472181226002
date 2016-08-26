<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp" %>
<%@ taglib prefix="sitemesh" uri="http://www.opensymphony.com/sitemesh/decorator" %>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="ctx" value="${ctx}" scope="request"/>
<c:set var="ctxStatic" value="${ctxStatic}" scope="request"/>

<!DOCTYPE html>
<html lang="en"><head>
    <meta charset="utf-8" />
    <meta name="baidu-site-verification" content="2MKKT6mbuL" />
    <title>年青就要敢作敢为</title>
     <META HTTP-EQUIV="pragma" CONTENT="no-cache">
    <META HTTP-EQUIV="Cache-Control" CONTENT="no-store, must-revalidate">
    <META HTTP-EQUIV="expires" CONTENT="Wed, 26 Feb 1997 08:21:57 GMT">
    <META HTTP-EQUIV="expires" CONTENT="0">
    <meta id="eqMobileViewport" name="viewport" content="width=320, initial-scale=1, maximum-scale=1, user-scalable=no" servergenerated="true">

    <%@include file="/WEB-INF/views/modules/haibao/design/_inc.jsp" %>


    <link rel="stylesheet" href="${hbStatic}/view/css/eqShow-2.1.5.3.css"/>
    <script> var  your_demain='';
    var  your_webname='移动海报';
    var  logo_url='移动海报';
    var  lastpagelink='';
    var lastpagetext_color='#23a3d3';
    var  lastpagetext='';
    var jubao_link='';
    </script>
    <link rel="stylesheet" href="${hbStatic}/Public/css/my52.css"/>
</head>
<body>

<div id="ppitest" style="width:1in;visible:hidden;padding:0px"></div>
<div class="p-index main phoneBox" id="con" style="display: none;">
    <div class="top"></div>
    <div class="phone_menubar"></div>
    <div class="scene_title_baner" style="display: none">
        <div class="scene_title">年青就要敢作敢为</div>
    </div>
    <div class="nr" id="nr">
        <div id="audio_btn" class="off">
            <div id="yinfu"></div>
            <audio loop src="" id="media" autoplay="" preload></audio>
        </div>
        <div id="loading" class="loading">
            <div class="loadbox">
                <div class="loadlogo" style="background-image: url('${hbStatic}/Uploads/syspic/scene/strip.jpg ');"></div>
                <div class="loadbg" ></div>
            </div>
        </div>
    </div>
    <div class="bottom"></div>
</div>

</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>

<script src="${hbStatic}/Public/css/waiwan/jquery.min.js"></script>
<script >
    (function (window, $) {
        window.PREFIX_URL = "http://"+window.location.host+"${ctxRoot}/";
        window.PREFIX_S1_URL =  "http://"+window.location.host+"${ctxRoot}/";//"/json/";
        window.PREFIX_S2_URL ="http://"+window.location.host+"${ctxRoot}/index.php";
        window.PREFIX_S6_URL ="http://"+window.location.host+"${ctxRoot}/index.php";
        window.PREFIX_HOST = "http://"+window.location.host+"${ctxRoot}/index.php";
        window.PREFIX_HOST1 = "http://"+window.location.host+"${ctxRoot}/index.php";
        window.PREFIX_SHOW_HOST = "http://"+window.location.host+"${ctxRoot}/index.php";
        window.TRACK_HOST = "http://"+window.location.host+"${ctxRoot}/";
        window.PREFIX_FILE_HOST = "http://"+window.location.host+"${hbStatic}/Uploads/";
        window.PREFIX_COMPANY_HOST_ARRAY = ["http://"+window.location.host, "http://"+window.location.host];
        window.OLD_FILE_HOST="http://"+window.location.host+"${ctxRoot}/index.php";
        window.HB_STATIC ="http://"+window.location.host+"${ctxRoot}/";
        window.clientWidth = document.documentElement.clientWidth;
        window.clientHeight = document.documentElement.clientHeight;
        window.PREFIX_HOST_ARRAY = [
            "http://"+window.location.host,
            "http://"+window.location.host,
            "http://"+window.location.host,
            "http://"+window.location.host
        ];

    })(window, jQuery)
</script>
<script type="text/javascript" src="${hbStatic}/view/eqShow-preview-2.1.5.3.js?v=1469631567"></script>

<script>
$(document).ready(function(){
    var scene = {id:8832587,code:"S7072HY744",name:"年青就要敢作敢为",bgAudio:{"url":"{$sceneinfo['musicurl_varchar']}","name":"","id":202382032},pageMode:0,cover:"",property:null};
    eqShow.bootstrap();
});

</script>
<script>
    wx.config({
        debug: false,
        appId: 'wx9602833316b20399',
        timestamp: "1469770043",
        nonceStr: 'WV7UMni3IiG8tpzk',
        signature: '812d4fdf1f330aba6ae2cddf353b22673d4cfa02',
        jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage'
        ]
    });
    wx.ready(function () {

        var shareData64 = {
            title: '年青就要敢作敢为',
            desc: '',
            link: PREFIX_URL+'v/S7072HY744',
            imgUrl:  PREFIX_FILE_HOST  +'syspic/scene/strip.jpg'
        };
        wx.onMenuShareAppMessage(shareData64);
        wx.onMenuShareTimeline(shareData64);
        $("#media").get(0).play();
    });


    wx.error(function (res) {
        //alert(res.errMsg);
    });
</script>
</html>
