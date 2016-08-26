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


    <sitemesh:head/>

    <script>

        function linkCtr() {

            var mid = "${param["__mid__"]}";

            processA("${ctx}",  mid);
            processForm("${ctx}",  mid);

        }
    </script>
</head>
<body>


            <sitemesh:body/>

</body>
</html>
<script>
//    $(document).ready(function(){
//        linkCtr();
//    });
</script>