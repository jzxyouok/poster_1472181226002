<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<c:set var="names" value="列表,管理"  scope="request" />
<c:set var="permissions" value="sys:dict:view,sys:dict:edit"  scope="request" />
<c:set var="urls" value="${ctx}/sys/dict/,${ctx}/sys/dict/form?sort=10"  scope="request" />
