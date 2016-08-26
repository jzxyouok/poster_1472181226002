<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<c:set var="menu" value="${requestScope.menu}"/>
<c:set var="parentMenuId" value="${requestScope.parentMenuId}"/>
<c:set var="sons" value="${requestScope.sons}"/>
<c:if test="${empty menu.href}">
    <c:set target="${menu}" property="href" value="#"/>
</c:if>

<c:set var="urlJoinChar" value="?"/>
<c:if test="${fn:indexOf(menu.href, '?') gt -1}" >
    <c:set var="urlJoinChar" value="&"/>
</c:if>
<%--<c:set var="hrefNgClick" value="$event.preventDefault()"/>--%>
<c:if test="${menu.href ne '#'}">
    <c:set var="hrefNgClick" value=""/>
    <c:set target="${menu}" property="href" value="${ctx}${menu.href}${urlJoinChar}__mid__=${menu.id}"/>
</c:if>
<%--<c:if test="${menu.href eq '#'}">--%>
    <%--<c:set target="${menu}" property="href" value="javascript:void(0);"/>--%>
<%--</c:if>--%>


<a href="${menu.href}" <c:if test="${menu.href eq '#'}"> ng-click="$event.preventDefault()" </c:if>>

    <i class="fa fa-${menu.icon}"></i>
    <span class="name">${menu.name}</span>
    <c:if test="${sons gt 0 && menu.href eq '#'}">
        <i class="fa fa-angle-left pull-right"></i>
    </c:if>
</a>



