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
		<li class="active"><a href="${ctx}/haibao/scene/">单表列表</a></li>
		<shiro:hasPermission name="haibao:scene:edit"><li><a href="${ctx}/haibao/scene/form">单表添加</a></li></shiro:hasPermission>
	</ul>
	<form:form id="searchForm" modelAttribute="scene" action="${ctx}/haibao/scene/" method="post" class="breadcrumb form-search">
		<input id="pageNo" name="pageNo" type="hidden" value="${page.pageNo}"/>
		<input id="pageSize" name="pageSize" type="hidden" value="${page.pageSize}"/>
		<ul class="ul-form">
			<li><label>id：</label>
				<form:input path="id" htmlEscape="false" maxlength="20" class="input-medium"/>
			</li>
			<li><label>scenecode_varchar：</label>
				<form:input path="scenecodeVarchar" htmlEscape="false" maxlength="50" class="input-medium"/>
			</li>
			<li><label>scenename_varchar：</label>
				<form:input path="scenenameVarchar" htmlEscape="false" maxlength="50" class="input-medium"/>
			</li>
			<li><label>scenetype_int：</label>
				<form:input path="scenetypeInt" htmlEscape="false" maxlength="11" class="input-medium"/>
			</li>
			<li><label>显示状态1显示,2关闭：</label>
				<form:input path="showstatusInt" htmlEscape="false" maxlength="11" class="input-medium"/>
			</li>
			<li><label>翻页方式：</label>
				<form:input path="movietypeInt" htmlEscape="false" maxlength="11" class="input-medium"/>
			</li>
			<li><label>场景描述：</label>
				<form:input path="descVarchar" htmlEscape="false" maxlength="500" class="input-medium"/>
			</li>
			<li><label>ip_varchar：</label>
				<form:input path="ipVarchar" htmlEscape="false" maxlength="50" class="input-medium"/>
			</li>
			<li><label>shenhe：</label>
				<form:input path="shenhe" htmlEscape="false" maxlength="1" class="input-medium"/>
			</li>
			<li><label>tagid_int：</label>
				<form:input path="tagidInt" htmlEscape="false" maxlength="11" class="input-medium"/>
			</li>
			<li><label>sourceid_int：</label>
				<form:input path="sourceidInt" htmlEscape="false" maxlength="11" class="input-medium"/>
			</li>
			<li><label>biztype_int：</label>
				<form:input path="biztypeInt" htmlEscape="false" maxlength="11" class="input-medium"/>
			</li>
			<li><label>hbid_int：</label>
				<form:input path="hbidInt" htmlEscape="false" maxlength="11" class="input-medium"/>
			</li>
			<li><label>hbcode：</label>
				<form:input path="hbcode" htmlEscape="false" maxlength="50" class="input-medium"/>
			</li>
			<li><label>datacount_int：</label>
				<form:input path="datacountInt" htmlEscape="false" maxlength="11" class="input-medium"/>
			</li>
			<li><label>usecount_int：</label>
				<form:input path="usecountInt" htmlEscape="false" maxlength="11" class="input-medium"/>
			</li>
			<li><label>fromsceneid_bigint：</label>
				<form:input path="fromsceneidBigint" htmlEscape="false" maxlength="20" class="input-medium"/>
			</li>
			<li><label>rank：</label>
				<form:input path="rank" htmlEscape="false" maxlength="20" class="input-medium"/>
			</li>
			<li><label>lastpageid：</label>
				<form:input path="lastpageid" htmlEscape="false" maxlength="20" class="input-medium"/>
			</li>
			<li><label>is_tpl：</label>
				<form:input path="isTpl" htmlEscape="false" maxlength="1" class="input-medium"/>
			</li>
			<li><label>is_public：</label>
				<form:input path="isPublic" htmlEscape="false" maxlength="1" class="input-medium"/>
			</li>
			<li><label>is_show：</label>
				<form:input path="isShow" htmlEscape="false" maxlength="3" class="input-medium"/>
			</li>
			<li><label>is_payloadlog：</label>
				<form:input path="isPayloadlog" htmlEscape="false" maxlength="3" class="input-medium"/>
			</li>
			<li><label>vi_scenecode：</label>
				<form:input path="viScenecode" htmlEscape="false" maxlength="50" class="input-medium"/>
			</li>
			<li><label>loadinglogo：</label>
				<form:input path="loadinglogo" htmlEscape="false" maxlength="200" class="input-medium"/>
			</li>
			<li><label>accesscode_varchar：</label>
				<form:input path="accesscodeVarchar" htmlEscape="false" maxlength="11" class="input-medium"/>
			</li>
			<li><label>loadinglogo_varchar：</label>
				<form:input path="loadinglogoVarchar" htmlEscape="false" maxlength="255" class="input-medium"/>
			</li>
			<li><label>groupid_int：</label>
				<form:input path="groupidInt" htmlEscape="false" maxlength="11" class="input-medium"/>
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
				<shiro:hasPermission name="haibao:scene:edit"><th>操作</th></shiro:hasPermission>
			</tr>
		</thead>
		<tbody>
		<c:forEach items="${page.list}" var="scene">
			<tr>
				<td><a href="${ctx}/haibao/scene/form?id=${scene.id}">
					<fmt:formatDate value="${scene.updateDate}" pattern="yyyy-MM-dd HH:mm:ss"/>
				</a></td>
				<td>
					${scene.remarks}
				</td>
				<shiro:hasPermission name="haibao:scene:edit"><td>
    				<a href="${ctx}/haibao/scene/form?id=${scene.id}">修改</a>
					<a href="${ctx}/haibao/scene/delete?id=${scene.id}" onclick="return confirmx('确认要删除该单表吗？', this.href)">删除</a>
				</td></shiro:hasPermission>
			</tr>
		</c:forEach>
		</tbody>
	</table>
	<div class="pagination">${page}</div>
</body>
</html>