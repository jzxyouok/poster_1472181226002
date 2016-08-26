<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp" %>
<%@ taglib prefix="sitemesh" uri="http://www.opensymphony.com/sitemesh/decorator" %>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:forEach var="menu" items="${menus}">
    <c:if test="${menu.parent.id eq '1' && menu.isShow eq '1'}">
        <s:eval expression="menu.getChildren(menus)" var="cs"/>
        <c:set var="activeCls" value=""/>
        <c:if test="${not empty param.__mid__}">

            <s:eval expression="T(cn.dmesoft.haibao.modules.sys.entity.Menu).getMenuInAll(menus, param.__mid__)" var="currentMenu" />
            <s:eval expression="currentMenu.isDescendantOf(menus, menu.id)" var="isDescendant" />

            <c:if test="${isDescendant || param.__mid__ eq menu.id}">
                <c:set var="activeCls" value="active"/>
            </c:if>
        </c:if>



        <li class="treeview ${activeCls}">
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