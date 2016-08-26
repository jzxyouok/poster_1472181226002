<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<html>
<head>
	<title>字典管理</title>
	<meta name="decorator" content="default"/>
	<script type="text/javascript">
		function page(n,s){
			$("#pageNo").val(n);
			$("#pageSize").val(s);
			$("#searchForm").submit();
	    	return false;
	    }
	</script>
</head>
<body>

<div class="row">
	<div class="col-xs-12">
		<!-- Custom Tabs -->
		<div class="nav-tabs-custom">
<ui:tab-default-layout config="modules/sys/dictTab.jsp">
	abc
</ui:tab-default-layout>
			<%--<%--%>
				 <%----%>
				<%--pageContext.setAttribute("names", {"Tom", "Dick", "Harry"});--%>
				<%--pageContext.setAttribute("names", {"Tom", "Dick", "Harry"});--%>
			<%--%>--%>
			<%--<ui:tab-default  urls="1,2" names="1,2" permissions="sys:dict:view,sys:dict:edit" active="0">--%>
<%--<li></li>asdfasfdasdfafd--%>
			<%--</ui:tab-default>--%>

			<ul class="nav nav-tabs">

					<li class="active"><a href="#tab1">字典列表</a></li>
					<shiro:hasPermission name="sys:dict:edit"><li><a  data-toggle="tab" href="${ctx}/sys/dict/form?sort=10">字典添加</a></li></shiro:hasPermission>

			</ul>
			<div class="tab-content">
				<div class="tab-pane active" id="tab_1">



				</div>

			</div>
			<!-- /.tab-content -->
		</div>
		<!-- nav-tabs-custom -->
	</div>



</body>
</html>