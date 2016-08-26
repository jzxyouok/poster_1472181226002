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
		<li class="active"><a href="${ctx}/haibao/upfilesys/">单表列表</a></li>
		<shiro:hasPermission name="haibao:upfilesys:edit"><li><a href="${ctx}/haibao/upfilesys/form">单表添加</a></li></shiro:hasPermission>
	</ul>
	<form:form id="searchForm" modelAttribute="upfilesys" action="${ctx}/haibao/upfilesys/" method="post" class="breadcrumb form-search">
		<input id="pageNo" name="pageNo" type="hidden" value="${page.pageNo}"/>
		<input id="pageSize" name="pageSize" type="hidden" value="${page.pageSize}"/>
		<ul class="ul-form">
			<li><label>id：</label>
				<form:input path="id" htmlEscape="false" maxlength="20" class="input-medium"/>
			</li>
			<li><label>0背景,2音乐,1图片：</label>
				<form:input path="filetypeInt" htmlEscape="false" maxlength="11" class="input-medium"/>
			</li>
			<li><label>filesrc_varchar：</label>
				<form:input path="filesrcVarchar" htmlEscape="false" maxlength="200" class="input-medium"/>
			</li>
			<li><label>biztype_int：</label>
				<form:input path="biztypeInt" htmlEscape="false" maxlength="11" class="input-medium"/>
			</li>
			<li><label>tagid_int：</label>
				<form:input path="tagidInt" htmlEscape="false" maxlength="11" class="input-medium"/>
			</li>
			<li><label>创建者：</label>
				<form:input path="createBy.id" htmlEscape="false" maxlength="64" class="input-medium"/>
			</li>
			<li><label>创建时间：</label>
				<input name="createDate" type="text" readonly="readonly" maxlength="20" class="input-medium Wdate"
					value="<fmt:formatDate value="${upfilesys.createDate}" pattern="yyyy-MM-dd HH:mm:ss"/>"
					onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss',isShowClear:false});"/>
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
				<shiro:hasPermission name="haibao:upfilesys:edit"><th>操作</th></shiro:hasPermission>
			</tr>
		</thead>
		<tbody>
		<c:forEach items="${page.list}" var="upfilesys">
			<tr>
				<td><a href="${ctx}/haibao/upfilesys/form?id=${upfilesys.id}">
					<fmt:formatDate value="${upfilesys.updateDate}" pattern="yyyy-MM-dd HH:mm:ss"/>
				</a></td>
				<td>
					${upfilesys.remarks}
				</td>
				<shiro:hasPermission name="haibao:upfilesys:edit"><td>
    				<a href="${ctx}/haibao/upfilesys/form?id=${upfilesys.id}">修改</a>
					<a href="${ctx}/haibao/upfilesys/delete?id=${upfilesys.id}" onclick="return confirmx('确认要删除该单表吗？', this.href)">删除</a>
				</td></shiro:hasPermission>
			</tr>
		</c:forEach>
		</tbody>
	</table>
	<div class="pagination">${page}</div>
</body>
</html>