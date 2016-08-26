var console = console || {};
console.log = console.log || function () {
    };
/**
 * 全局命名空间
 */
var app = app || {};


app.isNumberType = function (type) {
    return _.contains(["int", "short", "long", "float", "double", "big_decimal"], type);
};

app.debug = function (msg) {
    console.log(msg);
};

_DG = function (msg) {
    app.debug(msg);
};

app.breakPoint = function (id, msg) {
    console.log("【" + id + "】=============================");
    console.log(msg);
};

_BP = function (id, msg) {
    app.breakPoint(id, msg);
};

app.assert = function (bool, msg) {
    if (!bool) throw msg;
};

_AR = function (bool, msg) {
    app.assert(bool, msg);
};


app.render = function (tmplateId, data, func) {
    var html = Mustache.render($("#" + tmplateId).html(), data);

    if (func)func(html);
    //app.refreshMode();
    return html;
};

app.validateDate = function (dtValue) {
    var dtRegex = new RegExp(/\b\d{4}[\/-]\d{1,2}[\/-]\b\d{1,2} [0-9]\d:[0-9]\d:[0-9]\d$\b/);
    return dtRegex.test(dtValue);
};



app.ajax = function (url, method, params, msg, callback) {
    $.blockUI({message: msg});
    if (params == null) params = {};
    $.ajax({
            url: url,
            type: method,
            data: params,
            dataType: "json",
            contentType: 'application/json'})
        .done(function (data) {
            //判断返回数据是否是正常返回
            alert(data);
            callback(data);
        })
        .fail(function (msg) {
            //showComplex($("#inputForm"),msg.responseText,MSG_TYPE.ERROR);
            alert("请求失败：" + msg);
        })
        .always(function () {
            $.unblockUI();
        });
//        success: function(data){
//            //判断返回数据是否是正常返回
//            callback(data);
//        },
//        error:function(msg){
//            //showComplex($("#inputForm"),msg.responseText,MSG_TYPE.ERROR);
//            alert("请求失败：" + msg);
//        },
//        complete:function(){
//            $.unblockUI();
//        }
//    });
};

//发起ajax get 请求
app.ajax_get = function (url, params, msg, callback) {
    app.ajax(url, "GET", params, msg, callback);
};
// 发起ajax post 请求
app.ajax_post = function (url, params, msg, callback) {
    app.ajax(url, "POST", params, msg, callback);
};



function page(n, s) {
    $("#pageNo").val(n);
    $("#pageSize").val(s);
    $("#searchForm").submit();
    return false;
}

function processA(ctx, mid){
    var as = $("a");

    $.each(as, function (idx, a) {
        var url = $(a).attr("href");
        if (url != null)
        $(a).attr("href", processUrl(ctx, url, mid));

    });
}

function processForm(ctx, mid){
    var forms = $("form");

    $.each(forms, function (idx, form) {
        var form = $(form);
        if(form.find( "input[name='__mid__']").length == 0)
        {

            form.append("<input type='hidden' name='__mid__' value='" + mid +"'/>");
        }

        var url = $(form).attr("action");
        if (url != null)
        $(form).attr("action", processUrl(ctx, url, mid));

    });
}

function processUrl(ctx, url, mid){
    if(undefined != urlTmp && !_.isEmpty(urlTmp)){
        return null;
    }

    var urlTmp = url.toLowerCase();

   if( urlTmp != "#" && urlTmp.indexOf("javascript:") != 0 && urlTmp.indexOf(ctx) == 0) {
        var jc = "?";
        if (url.indexOf("?") != -1)jc = "&";
        if(!_.isEmpty(mid) && url.indexOf("__mid__") == -1) {
            url += jc + "__mid__=" + mid;


        }

    }
    return url;
}