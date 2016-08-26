window.onload = function() {
    var oText = document.getElementById("text");
    var oCoreCanvas = document.getElementById("core-canvas");
    var oSave =document.getElementById("save");
    var oTextMove= document.getElementById("text-move");
    var oTextTool = document.getElementById("text-tool");
    var $textTool = $("#text-tool");
    var $oTextClose = $("#textclose");
    var $aAnimate =$("#add-animate");
    var $aAnimateLi =$("#add-animate li");
    var $cAnimate = $("#cancel-animate");

    //创建文本框
    oText.onclick = function(){
        var oDiv = document.createElement("div");
        oCoreCanvas.appendChild(oDiv);
        oDiv.className = "divinput animated";
        oDiv.innerHTML ="点击此处进行编辑";
        //oDiv.setAttribute("contenteditable","true");

        if($textTool.is(":hidden")){
            $textTool.show();
        }
        //拖动
        drag(oDiv);

        //点击文本框，增加active 类
        $(".divinput").click(function(){
            $(this).addClass("active");
            $(this).siblings().removeClass("active").attr("contenteditable","false").css("cursor","move");
            if($textTool.is(":hidden")){
                $textTool.show();
            };
            return false
        });
        //双击文本框
        $(".divinput").dblclick(function () {
            $(this).attr("contenteditable","true");
            $(this).css("cursor","text");
            this.onmousedown = null;
        });

        //单击body
        $(".main").click(function(){
            drag(oDiv);
            $(".divinput").css("cursor","move");
            $(".divinput").attr("contenteditable","false");
            closeBlock($textTool);
            return false
        });
        return false;
    };

    //文本编辑工具拖动
    drag(oTextTool);
    $textTool.click(function(){
       return false
    });
    oTextMove.onclick = function(){
        drag(oTextTool);
        return false
    };

    //添加动画功能
    $aAnimate.click(function(){
        $aAnimate.animate({height:"242px"});
    });
    $aAnimateLi.click(function(){
        var $animateName = $(this).attr("class");
        $aAnimate.animate({height:"30px"});
        $(".active").addClass($animateName);
        $("#add-animate b").text($(this).text());
        return false;
    });

    //清除动画
    $cAnimate.click(function(){
        $(".active").attr("class","divinput animated active");
        alert("清除成功");
    });

    //保存按钮，只关闭窗口，不改变内容
    $("#save-animate").click(function(){
        closeBlock($textTool);
        alert("保存成功");
    });

    //关闭文本工具模块，提示是否保存；
    $oTextClose.click(function(){
        closeBlock($textTool);
        $(".active").attr("class","divinput animated active");
    });

    //关闭工具窗口
    function closeBlock(block){
        block.hide();
    }
    //拖拽封装
    function drag(obj){
        obj.onmousedown = function(ev){
            ev = ev||window.event;

            //鼠标初始xy位置
            var bX = ev.clientX;
            var bY = ev.clientY;
            var divX = this.offsetLeft;
            var divY = this.offsetTop;
            var a = this;

            document.onmousemove = function(ev){
                ev = ev || window.event;
                var move_x = ev.clientX - bX + divX;
                var move_y = ev.clientY - bY + divY;

                a.style.left =move_x + 'px';
                a.style.top = move_y + 'px';
            };
            document.onmouseup = function(){
                this.onmousemove = null;
            };
        };
    }
    //点击保存测试
    oSave.onclick = function(){
    	var oAll = $.trim(oCoreCanvas.outerHTML);
        alert(oAll);
		$.post("a/haibao/poster/save", {name:"ddddd", content:oAll}, function(data) {
			console.log(JSON.stringify(data));
		});
    };
    var oAllTest = document.getElementById("alltest");
    oAllTest.onclick = function(){
        $(".active").addClass("hinge")
    }
};


