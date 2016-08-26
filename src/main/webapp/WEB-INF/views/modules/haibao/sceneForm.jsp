<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<html>
<head>
	<title>单表管理</title>
	<meta name="decorator" content="default"/>
	<script type="text/javascript">
		$(document).ready(function() {
			//$("#name").focus();
			$("#inputForm").validate({
				submitHandler: function(form){
					loading('正在提交，请稍等...');
					form.submit();
				},
				errorContainer: "#messageBox",
				errorPlacement: function(error, element) {
					$("#messageBox").text("输入有误，请先更正。");
					if (element.is(":checkbox")||element.is(":radio")||element.parent().is(".input-append")){
						error.appendTo(element.parent().parent());
					} else {
						error.insertAfter(element);
					}
				}
			});
		});
	</script>
</head>
<body>
	<ul class="nav nav-tabs">
		<li><a href="${ctx}/haibao/scene/">单表列表</a></li>
		<li class="active"><a href="${ctx}/haibao/scene/form?id=${scene.id}">单表<shiro:hasPermission name="haibao:scene:edit">${not empty scene.id?'修改':'添加'}</shiro:hasPermission><shiro:lacksPermission name="haibao:scene:edit">查看</shiro:lacksPermission></a></li>
	</ul><br/>
	<form:form id="inputForm" modelAttribute="scene" action="${ctx}/haibao/scene/save" method="post" class="form-horizontal">
		<form:hidden path="id"/>
		<sys:message content="${message}"/>		
		<div class="control-group">
			<label class="control-label">scenecode_varchar：</label>
			<div class="controls">
				<form:input path="scenecodeVarchar" htmlEscape="false" maxlength="50" class="input-xlarge "/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">scenename_varchar：</label>
			<div class="controls">
				<form:input path="scenenameVarchar" htmlEscape="false" maxlength="50" class="input-xlarge "/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">scenetype_int：</label>
			<div class="controls">
				<form:input path="scenetypeInt" htmlEscape="false" maxlength="11" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">hitcount_int：</label>
			<div class="controls">
				<form:input path="hitcountInt" htmlEscape="false" maxlength="11" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">musicurl_varchar：</label>
			<div class="controls">
				<form:input path="musicurlVarchar" htmlEscape="false" maxlength="500" class="input-xlarge "/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">videocode_varchar：</label>
			<div class="controls">
				<form:input path="videocodeVarchar" htmlEscape="false" maxlength="2000" class="input-xlarge "/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">显示状态1显示,2关闭：</label>
			<div class="controls">
				<form:input path="showstatusInt" htmlEscape="false" maxlength="11" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">缩略图：</label>
			<div class="controls">
				<form:input path="thumbnailVarchar" htmlEscape="false" maxlength="200" class="input-xlarge "/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">翻页方式：</label>
			<div class="controls">
				<form:input path="movietypeInt" htmlEscape="false" maxlength="11" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">场景描述：</label>
			<div class="controls">
				<form:input path="descVarchar" htmlEscape="false" maxlength="500" class="input-xlarge "/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">ip_varchar：</label>
			<div class="controls">
				<form:input path="ipVarchar" htmlEscape="false" maxlength="50" class="input-xlarge "/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">shenhe：</label>
			<div class="controls">
				<form:input path="shenhe" htmlEscape="false" maxlength="1" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">tagid_int：</label>
			<div class="controls">
				<form:input path="tagidInt" htmlEscape="false" maxlength="11" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">sourceid_int：</label>
			<div class="controls">
				<form:input path="sourceidInt" htmlEscape="false" maxlength="11" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">biztype_int：</label>
			<div class="controls">
				<form:input path="biztypeInt" htmlEscape="false" maxlength="11" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">hbid_int：</label>
			<div class="controls">
				<form:input path="hbidInt" htmlEscape="false" maxlength="11" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">hbcode：</label>
			<div class="controls">
				<form:input path="hbcode" htmlEscape="false" maxlength="50" class="input-xlarge "/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">datacount_int：</label>
			<div class="controls">
				<form:input path="datacountInt" htmlEscape="false" maxlength="11" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">musictype_int：</label>
			<div class="controls">
				<form:input path="musictypeInt" htmlEscape="false" maxlength="11" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">usecount_int：</label>
			<div class="controls">
				<form:input path="usecountInt" htmlEscape="false" maxlength="11" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">fromsceneid_bigint：</label>
			<div class="controls">
				<form:input path="fromsceneidBigint" htmlEscape="false" maxlength="20" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">publishtime：</label>
			<div class="controls">
				<form:input path="publishtime" htmlEscape="false" maxlength="10" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">rank：</label>
			<div class="controls">
				<form:input path="rank" htmlEscape="false" maxlength="20" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">lastpageid：</label>
			<div class="controls">
				<form:input path="lastpageid" htmlEscape="false" maxlength="20" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">is_tpl：</label>
			<div class="controls">
				<form:input path="isTpl" htmlEscape="false" maxlength="1" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">is_public：</label>
			<div class="controls">
				<form:input path="isPublic" htmlEscape="false" maxlength="1" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">property：</label>
			<div class="controls">
				<form:input path="property" htmlEscape="false" maxlength="200" class="input-xlarge "/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">applypromotion：</label>
			<div class="controls">
				<form:input path="applypromotion" htmlEscape="false" maxlength="3" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">accesscode：</label>
			<div class="controls">
				<form:input path="accesscode" htmlEscape="false" maxlength="10" class="input-xlarge "/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">applytemplate：</label>
			<div class="controls">
				<form:input path="applytemplate" htmlEscape="false" maxlength="1" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">is_show：</label>
			<div class="controls">
				<form:input path="isShow" htmlEscape="false" maxlength="3" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">is_payloadlog：</label>
			<div class="controls">
				<form:input path="isPayloadlog" htmlEscape="false" maxlength="3" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">vi_current_times：</label>
			<div class="controls">
				<form:input path="viCurrentTimes" htmlEscape="false" maxlength="10" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">vi_beyond_time：</label>
			<div class="controls">
				<form:input path="viBeyondTime" htmlEscape="false" maxlength="10" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">vi_timeout：</label>
			<div class="controls">
				<form:input path="viTimeout" htmlEscape="false" maxlength="80" class="input-xlarge "/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">vi_hittimes_set：</label>
			<div class="controls">
				<form:input path="viHittimesSet" htmlEscape="false" maxlength="10" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">vi_scenecode：</label>
			<div class="controls">
				<form:input path="viScenecode" htmlEscape="false" maxlength="50" class="input-xlarge "/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">loadinglogo：</label>
			<div class="controls">
				<form:input path="loadinglogo" htmlEscape="false" maxlength="200" class="input-xlarge "/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">accesscode_varchar：</label>
			<div class="controls">
				<form:input path="accesscodeVarchar" htmlEscape="false" maxlength="11" class="input-xlarge "/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">loadinglogo_varchar：</label>
			<div class="controls">
				<form:input path="loadinglogoVarchar" htmlEscape="false" maxlength="255" class="input-xlarge "/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">groupid_int：</label>
			<div class="controls">
				<form:input path="groupidInt" htmlEscape="false" maxlength="11" class="input-xlarge  digits"/>
			</div>
		</div>
		<div class="control-group">
			<label class="control-label">备注信息：</label>
			<div class="controls">
				<form:textarea path="remarks" htmlEscape="false" rows="4" maxlength="255" class="input-xxlarge "/>
			</div>
		</div>
		<div class="form-actions">
			<shiro:hasPermission name="haibao:scene:edit"><input id="btnSubmit" class="btn btn-primary" type="submit" value="保 存"/>&nbsp;</shiro:hasPermission>
			<input id="btnCancel" class="btn" type="button" value="返 回" onclick="history.go(-1)"/>
		</div>
	</form:form>
</body>
</html>