<%@ page contentType="text/html;charset=UTF-8"%>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<%@ taglib prefix="sitemesh" uri="http://www.opensymphony.com/sitemesh/decorator" %>
<!DOCTYPE html>
<html  >
<head>
	<title><sitemesh:title/></title><!--  - Powered By dmesoft -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
	<%@include file="/WEB-INF/views/include/head.jsp" %>
	<!-- Baidu tongji analytics --> <sitemesh:head/>
</head>
<body <sitemesh:getProperty property="body.class" writeEntireProperty="true" />>
<sitemesh:body/>
</body>
</html>