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
		<li class="active"><a href="${ctx}/haibao/scenepage/">单表列表</a></li>
		<shiro:hasPermission name="haibao:scenepage:edit"><li><a href="${ctx}/haibao/scenepage/form">单表添加</a></li></shiro:hasPermission>
	</ul>
	<form:form id="searchForm" modelAttribute="scenepage" action="${ctx}/haibao/scenepage/" method="post" class="breadcrumb form-search">
		<input id="pageNo" name="pageNo" type="hidden" value="${page.pageNo}"/>
		<input id="pageSize" name="pageSize" type="hidden" value="${page.pageSize}"/>
		<ul class="ul-form">
			<li><label>id：</label>
				<form:input path="id" htmlEscape="false" maxlength="20" class="input-medium"/>
			</li>
			<li><label>sceneid_bigint：</label>
				<form:input path="sceneidBigint" htmlEscape="false" maxlength="20" class="input-medium"/>
			</li>
			<li><label>scenecode_varchar：</label>
				<form:input path="scenecodeVarchar" htmlEscape="false" maxlength="50" class="input-medium"/>
			</li>
			<li><label>当前页数：</label>
				<form:input path="pagecurrentnumInt" htmlEscape="false" maxlength="11" class="input-medium"/>
			</li>
			<li><label>content_text：</label>
				<form:input path="contentText" htmlEscape="false" class="input-medium"/>
			</li>
			<li><label>pagename_varchar：</label>
				<form:input path="pagenameVarchar" htmlEscape="false" maxlength="50" class="input-medium"/>
			</li>
			<li><label>properties_text：</label>
				<form:input path="propertiesText" htmlEscape="false" class="input-medium"/>
			</li>
			<li><label>mytypl_id：</label>
				<form:input path="mytyplId" htmlEscape="false" maxlength="20" class="input-medium"/>
			</li>
			<li><label>my_type_cate：</label>
				<form:input path="myTypeCate" htmlEscape="false" maxlength="10" class="input-medium"/>
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
				<shiro:hasPermission name="haibao:scenepage:edit"><th>操作</th></shiro:hasPermission>
			</tr>
		</thead>
		<tbody>
		<c:forEach items="${page.list}" var="scenepage">
			<tr>
				<td><a href="${ctx}/haibao/scenepage/form?id=${scenepage.id}">
					<fmt:formatDate value="${scenepage.updateDate}" pattern="yyyy-MM-dd HH:mm:ss"/>
				</a></td>
				<td>
					${scenepage.remarks}
				</td>
				<shiro:hasPermission name="haibao:scenepage:edit"><td>
    				<a href="${ctx}/haibao/scenepage/form?id=${scenepage.id}">修改</a>
					<a href="${ctx}/haibao/scenepage/delete?id=${scenepage.id}" onclick="return confirmx('确认要删除该单表吗？', this.href)">删除</a>
				</td></shiro:hasPermission>
			</tr>
		</c:forEach>
		</tbody>
	</table>
	<div class="pagination">${page}</div>
</body>
</html>