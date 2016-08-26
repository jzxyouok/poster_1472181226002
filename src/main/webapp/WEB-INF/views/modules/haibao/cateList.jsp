<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<html>
<head>
	<title>单表管理</title>
	<meta name="decorator" content="default"/>
	<script type="text/javascript">
		$(document).ready(function() {
			
		});
		function page(n,s){
			$("#pageNo").val(n);
			$("#pageSize").val(s);
			$("#searchForm").submit();
        	return false;
        }
	</script>
</head>
<body>
	<ul class="nav nav-tabs">
		<li class="active"><a href="${ctx}/haibao/cate/">单表列表</a></li>
		<shiro:hasPermission name="haibao:cate:edit"><li><a href="${ctx}/haibao/cate/form">单表添加</a></li></shiro:hasPermission>
	</ul>
	<form:form id="searchForm" modelAttribute="cate" action="${ctx}/haibao/cate/" method="post" class="breadcrumb form-search">
		<input id="pageNo" name="pageNo" type="hidden" value="${page.pageNo}"/>
		<input id="pageSize" name="pageSize" type="hidden" value="${page.pageSize}"/>
		<ul class="ul-form">
			<li><label>id：</label>
				<form:input path="id" htmlEscape="false" maxlength="10" class="input-medium"/>
			</li>
			<li><label>title：</label>
				<form:input path="title" htmlEscape="false" maxlength="40" class="input-medium"/>
			</li>
			<li><label>value：</label>
				<form:input path="value" htmlEscape="false" maxlength="20" class="input-medium"/>
			</li>
			<li><label>type：</label>
				<form:input path="type" htmlEscape="false" maxlength="20" class="input-medium"/>
			</li>
			<li><label>创建者：</label>
				<form:input path="createBy.id" htmlEscape="false" maxlength="64" class="input-medium"/>
			</li>
			<li><label>删除标记：</label>
				<form:radiobuttons path="delFlag" items="${fns:getDictList('del_flag')}" itemLabel="label" itemValue="value" htmlEscape="false"/>
			</li>
			<li class="btns"><input id="btnSubmit" class="btn btn-primary" type="submit" value="查询"/></li>
			<li class="clearfix"></li>
		</ul>
	</form:form>
	<sys:message content="${message}"/>
	<table id="contentTable" class="table table-striped table-bordered table-condensed">
		<thead>
			<tr>
				<th>title</th>
				<th>更新时间</th>
				<th>备注信息</th>
				<shiro:hasPermission name="haibao:cate:edit"><th>操作</th></shiro:hasPermission>
			</tr>
		</thead>
		<tbody>
		<c:forEach items="${page.list}" var="cate">
			<tr>
				<td><a href="${ctx}/haibao/cate/form?id=${cate.id}">
					${cate.title}
				</a></td>
				<td>
					<fmt:formatDate value="${cate.updateDate}" pattern="yyyy-MM-dd HH:mm:ss"/>
				</td>
				<td>
					${cate.remarks}
				</td>
				<shiro:hasPermission name="haibao:cate:edit"><td>
    				<a href="${ctx}/haibao/cate/form?id=${cate.id}">修改</a>
					<a href="${ctx}/haibao/cate/delete?id=${cate.id}" onclick="return confirmx('确认要删除该单表吗？', this.href)">删除</a>
				</td></shiro:hasPermission>
			</tr>
		</c:forEach>
		</tbody>
	</table>
	<div class="pagination">${page}</div>
</body>
</html>