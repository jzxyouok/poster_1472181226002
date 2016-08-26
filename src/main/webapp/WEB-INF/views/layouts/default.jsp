<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp" %>
<%@ taglib prefix="sitemesh" uri="http://www.opensymphony.com/sitemesh/decorator" %>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="ctx" value="${ctx}" scope="request"/>
<c:set var="ctxStatic" value="${ctxStatic}" scope="request"/>
<!DOCTYPE html>
<html style="overflow-x:auto;overflow-y:auto;" <sitemesh:getProperty property="body.ng-app" writeEntireProperty="true" /> <sitemesh:getProperty property="body.ng-controller" writeEntireProperty="true" />>
<head>
    <title><sitemesh:title/></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="renderer" content="webkit" />

    <%@include file="/WEB-INF/views/include/head.jsp" %>
    <sitemesh:head/>
    <link href="${ctxStatic}/app/css/common.css"/>
    <link href="${ctxStatic}/app/css/app.css"/>
    <script src="${ctxStatic}/app/js/init.js" type="text/javascript"></script>
    <script src="${ctxStatic}/app/js/default.js" type="text/javascript"></script>
    <script>

        function linkCtr() {

            var mid = "${param["__mid__"]}";

            processA("${ctx}",  mid);
            processForm("${ctx}",  mid);

        }
    </script>
</head>
<body class="hold-transition skin-blue sidebar-mini <sitemesh:getProperty property="body.sidebar" writeEntireProperty="false" />">
<div class="wrapper">



    <header class="main-header">
        <!-- Logo -->
        <div class="logo">
            <span class="logo-lg">${fns:getConfig('productName')}</span>
        </div>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">
            <!-- Sidebar toggle button-->
            <a href="javascript:void(0)" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>

            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <li class="dropdown user user-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <span class="hidden-xs">您好, ${fns:getUser().name}</span>
                        </a>
                        <ul class="dropdown-menu">

                            <li><a href="${ctx}/sys/user/info"><i class="glyphicon glyphicon-user"></i>&nbsp; 个人信息</a>
                            </li>
                            <li><a href="${ctx}/sys/user/modifyPwd"><i class="glyphicon glyphicon-lock"></i>&nbsp; 修改密码</a>
                            </li>
                            <li><a href="${ctx}/logout"><i class="glyphicon glyphicon-log-out"></i>&nbsp; 退出登录</a></li>

                        </ul>
                    </li>
                    <!-- Control Sidebar Toggle Button -->
                    <li>
                        <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu" id="menubar">
                <li class="header">主导航</li>


                <jsp:include page="/WEB-INF/views/include/menu/main.jsp"/>

            <%--<%@include file="/WEB-INF/views/include/menus.jsp" %>--%>
            </ul>
        </section>


        <!-- /.sidebar -->
    </aside>


    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <%--<section class="content-header" >--%>
            <%--<h1>--%>
                <%--<sitemesh:title/>--%>
            <%--</h1>--%>
            <%--&lt;%&ndash;<ol class="breadcrumb">&ndash;%&gt;--%>
                <%--&lt;%&ndash;<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>&ndash;%&gt;--%>
                <%--&lt;%&ndash;<li><a href="#">Forms</a></li>&ndash;%&gt;--%>
                <%--&lt;%&ndash;<li class="active">General Elements</li>&ndash;%&gt;--%>
            <%--&lt;%&ndash;</ol>&ndash;%&gt;--%>
        <%--</section>--%>

        <!-- Main content -->
        <section class="content">
            <sitemesh:body/>

            <!-- /.row -->
        </section>
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <footer class="main-footer">

        <div class="pull-right hidden-xs">
            <b>Version</b> ${fns:getConfig('version')}
        </div>
        <strong>Copyright &copy; 2016-${fns:getConfig('copyrightYear')}</strong></a>

    </footer>


</div>

</body>
</html>
<script>
    $(document).ready(function(){
       linkCtr();
    });
</script>