<%@ tag language="java" pageEncoding="UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp" %>
<%@ attribute name="names" required="true" type="java.lang.String" %>
<%@ attribute name="permissions" required="true" type="java.lang.String" %>
<%@ attribute name="urls" required="true" type="java.lang.String" %>
<%@ attribute name="active" required="true" type="java.lang.Integer" %>
<jsp:doBody var="body"/>
<c:set var="namesArr" value="${fn:split(names, ',')}"/>
<c:set var="urlsArr" value="${fn:split(urls, ',')}"/>
<c:set var="permissionsArr" value="${fn:split(permissions, ',')}"/>

<div class="row">
    <div class="col-xs-12">

        <div class="nav-tabs-custom">


            <ul class="nav nav-tabs">
                <c:forEach items="${namesArr}" var="name" varStatus="loop">
                    <c:set var="url" value="${urlsArr[loop.index]}"/>
                    <c:set var="permission" value="${permissionsArr[loop.index]}"/>
                    <c:set var="cls" value=""/>

                    <shiro:hasPermission name="${permission}">
                        <c:if test="${active eq loop.index}">
                            <c:set var="cls" value="active"/>
                            <c:set var="url" value="#tab1"/>
                        </c:if>

                        <li class="${cls}"><a href="${url}">${name}</a></li>
                    </shiro:hasPermission>
                </c:forEach>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="tab_1">
                    ${body}
                </div>
            </div>
        </div>
    </div>
</div>