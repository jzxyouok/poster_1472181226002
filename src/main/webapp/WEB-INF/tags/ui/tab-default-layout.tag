<%@ tag language="java" pageEncoding="UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp" %>

<%@ attribute name="config" required="true" type="java.lang.String" %>
<%@ attribute name="title" required="true" type="java.lang.String" %>

<jsp:doBody var="body"/>
<jsp:include page="/WEB-INF/views/${config}"/>
<html>
<head>
    <title>${title}</title>
    <meta name="decorator" content="default"/>
</head>
<body>

<div class="row">
    <div class="col-xs-12">
        <!-- Custom Tabs -->
        <div class="nav-tabs-custom">
            <ui:tab-default urls="${urls}" names="${names}" permissions="${permissions}" active="${activeTag}">
                ${body}
            </ui:tab-default>


        </div>
        <!-- nav-tabs-custom -->
    </div>

</div>

</body>
</html>