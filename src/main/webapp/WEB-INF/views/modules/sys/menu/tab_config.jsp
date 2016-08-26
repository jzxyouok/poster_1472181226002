<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<c:set var="names" value="列表,管理"  scope="request" />
<c:set var="permissions" value="sys:menu:view,sys:menu:edit"  scope="request" />
<c:set var="urls" value="${ctx}/sys/menu/,${ctx}/sys/menu/form?sort=10"  scope="request" />
