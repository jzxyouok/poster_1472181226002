<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp" %>

<c:set var="activeTag" value="0" scope="request"/>
<ui:tab-default-layout config="modules/sys/menu/tab_config.jsp" title="菜单列表">


    <div class="box box-danger">


        <!-- /.box-body -->
    </div>

    <form id="listForm" method="post">
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

                <table id="treeTable" class="table table-hover">
                    <thead><tr><th>名称</th><th>链接</th><th style="text-align:center;">排序</th><th>可见</th><th>权限标识</th><shiro:hasPermission name="sys:menu:edit"><th>操作</th></shiro:hasPermission></tr></thead>
                    <tbody><c:forEach items="${list}" var="menu">
                        <tr id="${menu.id}" pId="${menu.parent.id ne '1'?menu.parent.id:'0'}">
                            <td nowrap><i class="icon-${not empty menu.icon?menu.icon:' hide'}"></i><a href="${ctx}/sys/menu/form?id=${menu.id}">${menu.name}</a></td>
                            <td title="${menu.href}">${fns:abbr(menu.href,30)}</td>
                            <td style="text-align:center;">
                                <shiro:hasPermission name="sys:menu:edit">
                                    <input type="hidden" name="ids" value="${menu.id}"/>
                                    <input name="sorts" type="text" value="${menu.sort}" style="width:50px;margin:0;padding:0;text-align:center;">
                                </shiro:hasPermission><shiro:lacksPermission name="sys:menu:edit">
                                ${menu.sort}
                            </shiro:lacksPermission>
                            </td>
                            <td>${menu.isShow eq '1'?'显示':'隐藏'}</td>
                            <td title="${menu.permission}">${fns:abbr(menu.permission,30)}</td>
                            <shiro:hasPermission name="sys:menu:edit"><td nowrap>
                                <a href="${ctx}/sys/menu/form?id=${menu.id}">修改</a>
                                <a href="${ctx}/sys/menu/delete?id=${menu.id}" onclick="return confirmx('要删除该菜单及所有子菜单项吗？', this.href)">删除</a>
                                <a href="${ctx}/sys/menu/form?parent.id=${menu.id}">添加下级菜单</a>
                            </td></shiro:hasPermission>
                        </tr>
                    </c:forEach></tbody>
                </table>


        </div>
        <div class="box-foot">
            <shiro:hasPermission name="sys:menu:edit"><div class="form-actions pagination-left">
                <input id="btnSubmit" class="btn btn-primary" type="button" value="保存排序" onclick="updateSort();"/>
            </div></shiro:hasPermission>
        </div>


    </div></form>
    <!-- /.box -->


    <div class="pagination">${page}</div>
</ui:tab-default-layout>