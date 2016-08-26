<script>
    var API_URL = "http://" + window.location.host + "${ctx}/haibao/api/";
    var JSON_URL = "http://" + window.location.host + "/index.php";
    var PREFIX_URL = "http://" + window.location.host + "${ctxRoot}/";
    var TPL_URL = "${hbStatic}/assets/eqShow.js/tpl/";
    var HB_STATIC = "http://" + window.location.host + "${hbStatic}/";

    var PREFIX_FILE_HOST = "http://" + window.location.host + '${hbStatic}/Uploads/';

    var PREFIX_S1_URL = "http://" + window.location.host + "${ctxRoot}/";
    var PREFIX_S2_URL = "http://" + window.location.host + "${ctxRoot}/";
    var PREFIX_S3_URL = "http://" + window.location.host + "${ctxRoot}/";
    var PREFIX_HOST = "http://" + window.location.host + "${ctxRoot}";
    var PREFIX_HOST1 = "http://" + window.location.host + "${ctxRoot}";
    var VIP_HOST = "http://" + window.location.host + "${ctxRoot}/";

    var PREFIX_HOST_ARRAY = [
        "http://" + window.location.host+ "${ctxRoot}",
        "http://" + window.location.host+ "${ctxRoot}",
        "http://" + window.location.host+ "${ctxRoot}",
        "http://" + window.location.host+ "${ctxRoot}"
    ];
    var PREFIX_SERVICE_HOST = "http://" + window.location.host + "${ctxRoot}";
    var PREFIX_COMPANY_HOST_ARRAY = ["http://" + window.location.host, "http://" + window.location.host];
    var PREFIX_SHOW_HOST = "http://" + window.location.host + "${ctxRoot}";
    var PREFIX_MOBILE_HOST = "http://" + window.location.host+ "${ctxRoot}";

    var PRINT_HOST_SERVER = "http://" + window.location.host + "${ctxRoot}/";
    var PRINT_HOST_RESOURCE = "resource/";
    var version = "2.1.5.3";
    var STATISTICS_HOST = "http://" + window.location.host + "${ctxRoot}/";
    var LOGIN_AUTH_HOST = "http://" + window.location.host + "${ctxRoot}";
    var OLD_FILE_HOST = 'file_host';

    var IS_OPEN_REG = '1';
    var QI_AD_XDS = '100';
    QI_AD_XDS = parseInt(QI_AD_XDS);
    var loadingLogo_qi_xd = '88';
    loadingLogo_qi_xd = parseInt(loadingLogo_qi_xd);
    var guding_qi_xd = '15';
    var custome_qi_xd = '30';
    var GET_XD_LINK = '';
    var zixun_qq = '88888888';
    var zixun_tel = '13888888888';
    var zixun_mail = '888888@qq.com';
    var jishu_qq = '99999999';
    var jishu_tel = '13888888889';
    var address = '';
    var your_demain = 'http://localhost/';
    var your_webname = '移动海报制作系统';
    var your_demain_beian = ' ';
    var lastpagetext = '尾页'
    var your_weixinhao_pic_url = PREFIX_FILE_HOST + 'Uploads/pic/7/201505/5560a195a540f.jpg';
    var your_anli_pic_url = PREFIX_FILE_HOST + 'Uploads/pic/7/201505/5560a195a540f.jpg';
    var tuijian_pic_url = PREFIX_FILE_HOST + 'Uploads/pic/7/201505/5560a195a540f.jpg';
    var tuijian_url = '#/sample';
    var client_id = '101232445';
    var redirect_uri = 'http%3A%2F%2Flocalhost%2Findex.php%3Fc%3Dotherlogin%26type%3Dqq';
    var lastpagelink = 'http://localhost';


    var mobilecheck = function () {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };
//    if (mobilecheck()) {
//        var appendUrl = "";
//
//        if (location.href.indexOf('/error/500') < 0 && location.href.indexOf('/about') < 0) {
//            window.location.href = PREFIX_HOST + '/m/index.html';
//
//        }
//    }
    // 当geetest库加载好后回调initCaptcha
    // 注意initCaptcha必须在全局作用域下定义
    var initCaptcha = function () {

        var captchaObj = new Geetest(config, true);

        captchaObj.appendTo("#captcha-box");

        captchaObj.onSuccess(function () {
            var backObj = captchaObj.getValidate();
            challenge = backObj.geetest_challenge;
            validate = backObj.geetest_validate;
            seccode = backObj.geetest_seccode;
            // 成功回调
        });

        //captchaObj.getValidate(); // 获取成功后的验证信息，失败是返回false
    };



</script>

<%--<link rel="stylesheet" href="${hbStatic}/assets/www/cdn.bootcss.com/font-awesome/4.2.0/css/font-awesome.min.css"/>--%>
<%--<link rel="stylesheet" href="${hbStatic}/assets/www/cdn.bootcss.com/jqueryui/1.10.4/css/jquery-ui.min.css"/>--%>
<link rel="stylesheet" href="${hbStatic}/assets/www/cdn.bootcss.com/jquery-jcrop/0.9.12/css/jquery.Jcrop.min.css"/>
<%--<link rel="stylesheet" href="${hbStatic}/assets/www/cdn.bootcss.com/angular-ui-select/0.13.1/select.min.css"/>--%>
<link href="${hbStatic}/assets/www/cdn.bootcss.com/hint.css/1.3.3/hint.min.css" rel="stylesheet">
<!-- compiled CSS -->

<link rel="stylesheet" href="${hbStatic}/assets/eqShow-common-2.1.5.3.css"/>
<link rel="stylesheet" href="${hbStatic}/vendor/eqx-module/css/eqx-ng-module.min.css"/>
<link rel="stylesheet" href="${hbStatic}/assets/eqShow-2.1.5.3.css?1"/>
<!-- <script src="http://map.qq.com/api/js?v=2.exp"></script> -->
<%--<script src="${hbStatic}/assets/www/cdn.bootcss.com/jquery/2.0.3/jquery.min.js"></script>--%>
<%--<script src="${hbStatic}/assets/www/cdn.bootcss.com/jqueryui/1.10.4/jquery-ui.min.js"></script>--%>
<script src="${hbStatic}/assets/www/cdn.bootcss.com/jquery-jcrop/0.9.12/js/jquery.Jcrop.min.js"></script>
<%--<script src="${hbStatic}/assets/www/cdn.bootcss.com/angular.js/1.2.23/angular.min.js"></script>--%>
<%--<script src="${hbStatic}/assets/www/cdn.bootcss.com/angular.js/1.2.23/angular-route.min.js"></script>--%>
<%--<script src="${hbStatic}/assets/www/cdn.bootcss.com/angular.js/1.2.23/angular-animate.min.js"></script>--%>
<%--<script src="${hbStatic}/assets/www/cdn.bootcss.com/angular.js/1.2.23/angular-sanitize.min.js"></script>--%>
<%--<script src="${hbStatic}/assets/www/cdn.bootcss.com/angular-ui-bootstrap/0.11.0/ui-bootstrap-tpls.min.js"></script>--%>
<%--<script src="${hbStatic}/assets/www/cdn.bootcss.com/angular-ui-select/0.13.1/select.min.js"></script>--%>
<%--<script src="${hbStatic}/assets/www/cdn.bootcss.com/angular-ui-sortable/0.13.0/sortable.js"></script>--%>
<%--<script src="${hbStatic}/assets/www/cdn.bootcss.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>--%>
<%--<script src="${hbStatic}/assets/www/cdn.bootcss.com/ng-dialog/0.6.1/js/ngDialog.min.js"></script>--%>
<!-- // <script src="${hbStatic}/assets/www/cdn.bootcss.com/Chart.js/1.0.1-beta.4/Chart.min.js"></script> -->
<script src="${hbStatic}/assets/www/cdn.bootcss.com/hammer.js/2.0.4/hammer.min.js"></script>
<!--<script src="${hbStatic}/assets/www/cdn.bootcss.com/plupload/2.1.8/moxie.js"></script>-->
<script src="${hbStatic}/assets/www/cdn.bootcss.com/plupload/2.1.8/plupload.full.min.js"></script>
<!--<script src="http://jssdk.demo.qiniu.io/src/qiniu.js"></script>-->

<!-- <script async src="http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> -->
<!-- // <script src="${hbStatic}/assets/www/cdn.bootcss.com/Chart.js/1.0.2/Chart.min.js"></script> -->
<!-- <script src="${hbStatic}/assets/www/cdn.bootcss.com/html2canvas/0.5.0-alpha2/html2canvas.min.js"></script> -->
<!-- compiled JavaScript -->

<script src="${hbStatic}/vendor/html2canvas/0.5.0-alpha2/html2canvas.min.js"></script>
<script src="${hbStatic}/vendor/others/bootstrap-wysiwyg.min.js"></script>
<script src="${hbStatic}/vendor/others/jquery.hotkeys.min.js"></script>
<script src="${hbStatic}/vendor/others/angular-file-upload.min.js"></script>
<script src="${hbStatic}/vendor/others/angular-file-upload-directives.min.js"></script>
<script src="${hbStatic}/vendor/others/angular-locale_zh-cn.min.js"></script>
<script src="${hbStatic}/vendor/others/ZeroClipboard.js"></script>
<script src="${hbStatic}/vendor/others/iscroll.min.js"></script>
<script src="${hbStatic}/vendor/others/Chart.min.js"></script>
<script src="${hbStatic}/vendor/jquery-ui-panch/jquery.ui.touch-punch.min.js"></script>
<script src="${hbStatic}/vendor/qiniu/src/qiniu.js"></script>
<script src="${hbStatic}/vendor/eqx-module/js/eqx-ng-module.min.js"></script>
<!--jquery.slider.js 70-->
<script type="text/javascript" src="${hbStatic}/index/js/jquery.slider.js"></script>
<!--70c-->
<!--     <link rel="stylesheet" href="/index/css/shortcut.css"/> -->
<link rel="stylesheet" href="${hbStatic}/assets/lycc_map.css"/>