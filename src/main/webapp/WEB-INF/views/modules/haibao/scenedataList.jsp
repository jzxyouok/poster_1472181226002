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
		<li class="active"><a href="${ctx}/haibao/scenedata/">单表列表</a></li>
		<shiro:hasPermission name="haibao:scenedata:edit"><li><a href="${ctx}/haibao/scenedata/form">单表添加</a></li></shiro:hasPermission>
	</ul>
	<form:form id="searchForm" modelAttribute="scenedata" action="${ctx}/haibao/scenedata/" method="post" class="breadcrumb form-search">
		<input id="pageNo" name="pageNo" type="hidden" value="${page.pageNo}"/>
		<input id="pageSize" name="pageSize" type="hidden" value="${page.pageSize}"/>
		<ul class="ul-form">
			<li><label>id：</label>
				<form:input path="id" htmlEscape="false" maxlength="20" class="input-medium"/>
			</li>
			<li><label>sceneid_bigint：</label>
				<form:input path="sceneidBigint" htmlEscape="false" maxlength="20" class="input-medium"/>
			</li>
			<li><label>pageid_bigint：</label>
				<form:input path="pageidBigint" htmlEscape="false" maxlength="20" class="input-medium"/>
			</li>
			<li><label>elementid_int：</label>
				<form:input path="elementidInt" htmlEscape="false" maxlength="20" class="input-medium"/>
			</li>
			<li><label>elementtype_int：</label>
				<form:input path="elementtypeInt" htmlEscape="false" maxlength="11" class="input-medium"/>
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
				<th>id</th>
				<th>sceneid_bigint</th>
				<th>pageid_bigint</th>
				<th>elementid_int</th>
				<th>elementtitle_varchar</th>
				<th>elementtype_int</th>
				<th>other_info</th>
				<th>创建者</th>
				<th>创建时间</th>
				<th>更新者</th>
				<th>更新时间</th>
				<th>备注信息</th>
				<th>删除标记</th>
				<shiro:hasPermission name="haibao:scenedata:edit"><th>操作</th></shiro:hasPermission>
			</tr>
		</thead>
		<tbody>
		<c:forEach items="${page.list}" var="scenedata">
			<tr>
				<td><a href="${ctx}/haibao/scenedata/form?id=${scenedata.id}">
					${scenedata.id}
				</a></td>
				<td>
					${scenedata.sceneidBigint}
				</td>
				<td>
					${scenedata.pageidBigint}
				</td>
				<td>
					${scenedata.elementidInt}
				</td>
				<td>
					${scenedata.elementtitleVarchar}
				</td>
				<td>
					${scenedata.elementtypeInt}
				</td>
				<td>
					${scenedata.otherInfo}
				</td>
				<td>
					${scenedata.createBy.id}
				</td>
				<td>
					<fmt:formatDate value="${scenedata.createDate}" pattern="yyyy-MM-dd HH:mm:ss"/>
				</td>
				<td>
					${scenedata.updateBy.id}
				</td>
				<td>
					<fmt:formatDate value="${scenedata.updateDate}" pattern="yyyy-MM-dd HH:mm:ss"/>
				</td>
				<td>
					${scenedata.remarks}
				</td>
				<td>
					${fns:getDictLabel(scenedata.delFlag, 'del_flag', '')}
				</td>
				<shiro:hasPermission name="haibao:scenedata:edit"><td>
    				<a href="${ctx}/haibao/scenedata/form?id=${scenedata.id}">修改</a>
					<a href="${ctx}/haibao/scenedata/delete?id=${scenedata.id}" onclick="return confirmx('确认要删除该单表吗？', this.href)">删除</a>
				</td></shiro:hasPermission>
			</tr>
		</c:forEach>
		</tbody>
	</table>
	<div class="pagination">${page}</div>
</body>
</html>