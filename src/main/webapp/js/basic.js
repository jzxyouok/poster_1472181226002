$(function(){
    var $textNav = $(".t-t-nav li")

    $textNav.click(function(){
        var index = $(this).index();
        var $assemblyBox = $(".assembly-box");
        $(this).addClass("hover").siblings().removeClass("hover");
        $assemblyBox.eq(index).show().siblings().hide();
    })
});