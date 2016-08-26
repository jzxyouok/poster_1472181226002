<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<c:set var="parentMenu" value="${requestScope.parentMenu}"/>
<c:set var="parentId" value="${parentMenu.id}"/>
<s:eval expression="parentMenu.getChildren(menus)" var="cs"/>

<c:if test="${fn:length(cs) gt 0}">


    <ul class="treeview-menu">
        <c:forEach var="menu" items="${menus}">

            <c:if test="${menu.parent.id eq parentId  }">
                <c:set var="activeCls" value=""/>
                <c:if test="${not empty param.__mid__}">

                    <s:eval expression="T(cn.dmesoft.haibao.modules.sys.entity.Menu).getMenuInAll(menus, param.__mid__)" var="currentMenu" />
                    <s:eval expression="currentMenu.isDescendantOf(menus, menu.id)" var="isDescendant" />

                    <c:if test="${isDescendant || param.__mid__ eq menu.id}">
                        <c:set var="activeCls" value="active"/>
                    </c:if>
                </c:if>

                <li class="${activeCls}">
                    <c:set var="parentMenuId" value="${menu.parent.id}" scope="request"/>
                    <c:set var="menu" value="${menu}" scope="request"/>
                    <c:set var="sons" value="${fn:length(cs)}" scope="request"/>
                    <jsp:include page="/WEB-INF/views/include/menu/menu.jsp"/>

                    <c:if test="${menu.href eq '#'}">
                        <c:set var="parentMenu" value="${menu}" scope="request"/>
                        <jsp:include page="/WEB-INF/views/include/menu/sub.jsp"/>
                    </c:if>

                </li>
            </c:if>
        </c:forEach>
    </ul>
</c:if>

