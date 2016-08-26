<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="org.apache.shiro.web.filter.authc.FormAuthenticationFilter" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp" %>
<html>
<head>
    <title>${fns:getConfig('productName')} 登录</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="decorator" content="blank"/>
    <script type="text/javascript">
        $(document).ready(function () {
            $("#loginForm").validate({
                rules: {
                    validateCode: {remote: "${pageContext.request.contextPath}/servlet/validateCodeServlet"}
                },
                messages: {
                    username: {required: "请填写用户名."}, password: {required: "请填写密码."},
                    validateCode: {remote: "验证码不正确.", required: "请填写验证码."}
                },
                errorLabelContainer: "#messageBox",
                errorPlacement: function (error, element) {
                    error.appendTo($("#loginError").parent());
                }
            });
        });
        <%--// 如果在框架或在对话框中，则弹出提示并跳转到首页--%>
        <%--if(self.frameElement && self.frameElement.tagName == "IFRAME" || $('#left').length > 0 || $('.jbox').length > 0){--%>
        <%--alert('未登录或登录超时。请重新登录，谢谢！');--%>
        <%--top.location = "${ctx}";--%>
        <%--}--%>
    </script>
    <%--<style>--%>
        <%--.login-page, .register-page {--%>
            <%--background-color: transparent;--%>
            <%--/*overflow: hidden;*/--%>
            <%--background-image: url('${ctxStatic}/images/bg.jpg');--%>
            <%--background-size: cover;--%>
            <%--background-position: 50% 50%;--%>
        <%--}--%>
        <%--.login-logo, .register-logo{--%>
            <%--color: #cfcfcf;--%>
        <%--}--%>
    <%--</style>--%>
</head>
<body class="hold-transition login-page">
<div class="login-box">
    <div class="login-logo">
        ${fns:getConfig('productName')}
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">


        <p id="messageBox" class="error">
            ${message}
        </p>


        <form id="loginForm" class="form-signin" action="${ctx}/login" method="post">
            <div class="form-group has-feedback">
                <input type="text" id="username" name="username" placeholder="用户名" class="form-control required"
                       value="${username}" required>
                <span class="glyphicon glyphicon-user form-control-feedback"></span>
            </div>


            <div class="form-group has-feedback">
                <input type="password" id="password" placeholder="密码" name="password" class="form-control required" required>
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div class="row">
                <div class="col-xs-8">
                    <c:if test="${isValidateCodeLogin}">
                        <div class="validateCode">
                            验证码
                            <sys:validateCode name="validateCode" inputCssStyle="margin-bottom:0;"/>
                        </div>

                    </c:if>
                </div>
                <!-- /.col -->
                <div class="col-xs-4">
                    <button type="submit" class="btn btn-primary btn-block btn-flat">登录</button>
                </div>
            </div>
        </form>
    </div>
    <!-- /.login-box-body -->
</div>

</body>
</html>