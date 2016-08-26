<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp" %>

<c:set var="activeTag" value="0" scope="request"/>
<ui:tab-default-layout config="modules/sys/dict/tab_config.jsp" title="字典列表">


    <div class="box box-danger">

        <form:form id="searchForm" modelAttribute="dict" action="${ctx}/sys/dict/" method="post">
        <div class="box-body">
            <div class="row">


                    <input id="pageNo" name="pageNo" type="hidden" value="${page.pageNo}"/>
                    <input id="pageSize" name="pageSize" type="hidden" value="${page.pageSize}"/>
                    <div class="col-xs-4">

                         <form:select id="type" path="type" class="form-control pull-right"><form:option
                            value="" label=""/><form:options items="${typeList}" htmlEscape="false"/></form:select>
                    </div>

                    <div class="col-xs-4"><form:input path="description" htmlEscape="false" maxlength="50"
                                                                         class="form-control pull-right" placeholder="描述"/>
                    </div>
                    <div class="col-xs-2">
                        <button id="btnSubmit" type="查询" class="btn btn-default"><i class="fa fa-search"></i></button>

                    </div>



            </div>
        </div>
        </form:form>

        <!-- /.box-body -->
    </div>


    <div class="box">
        <div class="box-header">


            <div class="box-tools">
                <div class="input-group input-group-sm" style="width: 150px;">

                    <sys:message content="${message}"/>
                </div>
            </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body table-responsive no-padding">
            <table id="contentTable" class="table table-hover">
                <thead>
                <tr>
                    <th>键值</th>
                    <th>标签</th>
                    <th>类型</th>
                    <th>描述</th>
                    <th>排序</th>
                    <shiro:hasPermission name="sys:dict:edit">
                        <th>操作</th>
                    </shiro:hasPermission></tr>
                </thead>

                <tbody>
                <c:forEach items="${page.list}" var="dict">
                    <tr>
                        <td>${dict.value}</td>
                        <td><a href="${ctx}/sys/dict/form?id=${dict.id}">${dict.label}</a></td>
                        <td><a href="javascript:"
                               onclick="$('#type').val('${dict.type}');$('#searchForm').submit();return false;">${dict.type}</a>
                        </td>
                        <td>${dict.description}</td>
                        <td>${dict.sort}</td>
                        <shiro:hasPermission name="sys:dict:edit">
                            <td>
                                <a href="${ctx}/sys/dict/form?id=${dict.id}">修改</a>
                                <a href="${ctx}/sys/dict/delete?id=${dict.id}&type=${dict.type}"
                                   onclick="return confirmx('确认要删除该字典吗？', this.href)">删除</a>
                                <a href="<c:url value='${fns:getAdminPath()}/sys/dict/form?type=${dict.type}&sort=${dict.sort+10}'><c:param name='description' value='${dict.description}'/></c:url>">添加键值</a>
                            </td>
                        </shiro:hasPermission>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
        </div>


    </div>
    <!-- /.box -->


    <div class="pagination">${page}</div>
</ui:tab-default-layout>