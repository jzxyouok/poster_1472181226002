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
		<li class="active"><a href="${ctx}/haibao/tag/">单表列表</a></li>
		<shiro:hasPermission name="haibao:tag:edit"><li><a href="${ctx}/haibao/tag/form">单表添加</a></li></shiro:hasPermission>
	</ul>
	<form:form id="searchForm" modelAttribute="tag" action="${ctx}/haibao/tag/" method="post" class="breadcrumb form-search">
		<input id="pageNo" name="pageNo" type="hidden" value="${page.pageNo}"/>
		<input id="pageSize" name="pageSize" type="hidden" value="${page.pageSize}"/>
		<ul class="ul-form">
			<li><label>id：</label>
				<form:input path="id" htmlEscape="false" maxlength="11" class="input-medium"/>
			</li>
			<li><label>name_varchar：</label>
				<form:input path="nameVarchar" htmlEscape="false" maxlength="50" class="input-medium"/>
			</li>
			<li><label>背景还是图片0背景,1图片,2音乐,88样例,99用户：</label>
				<form:input path="typeInt" htmlEscape="false" maxlength="11" class="input-medium"/>
			</li>
			<li><label>biztype_int：</label>
				<form:input path="biztypeInt" htmlEscape="false" maxlength="11" class="input-medium"/>
			</li>
			<li><label>groupid_int：</label>
				<form:input path="groupidInt" htmlEscape="false" maxlength="3" class="input-medium"/>
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
				<th>更新时间</th>
				<th>备注信息</th>
				<shiro:hasPermission name="haibao:tag:edit"><th>操作</th></shiro:hasPermission>
			</tr>
		</thead>
		<tbody>
		<c:forEach items="${page.list}" var="tag">
			<tr>
				<td><a href="${ctx}/haibao/tag/form?id=${tag.id}">
					<fmt:formatDate value="${tag.updateDate}" pattern="yyyy-MM-dd HH:mm:ss"/>
				</a></td>
				<td>
					${tag.remarks}
				</td>
				<shiro:hasPermission name="haibao:tag:edit"><td>
    				<a href="${ctx}/haibao/tag/form?id=${tag.id}">修改</a>
					<a href="${ctx}/haibao/tag/delete?id=${tag.id}" onclick="return confirmx('确认要删除该单表吗？', this.href)">删除</a>
				</td></shiro:hasPermission>
			</tr>
		</c:forEach>
		</tbody>
	</table>
	<div class="pagination">${page}</div>
</body>
</html>