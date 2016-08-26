<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/include/taglib.jsp"%>
<html>
<head>
    <title>图标选择</title>
	<meta name="decorator" content="blank"/>
    <style type="text/css">
    	.page-header {clear:both;margin:0 20px;padding-top:20px;}
		.the-icons {padding:25px 10px 15px;list-style:none;}
		.the-icons li {float:left;width:22%;line-height:25px;margin:2px 5px;cursor:pointer;}
		.the-icons i {margin:1px 5px;font-size:16px;} .the-icons li:hover {background-color:#efefef;}
        .the-icons li.active {background-color:#0088CC;color:#ffffff;}
        .the-icons li:hover i{font-size:20px;}
    </style>
    <script type="text/javascript">
	    $(document).ready(function(){
	    	$("#icons li").click(function(){
	    		$("#icons li").removeClass("active");
	    		$("#icons li i").removeClass("glyphicon glyphicon-white");
	    		$(this).addClass("active");
	    		$(this).children("i").addClass("glyphicon glyphicon-white");
	    		$("#icon").val($(this).text());
	    	});
	    	$("#icons li").each(function(){
	    		if ($(this).text()=="${value}"){
	    			$(this).click();
	    		}
	    	});
	    	$("#icons li").dblclick(function(){
	    		top.$.jBox.getBox().find("button[value='ok']").trigger("click");
	    	});
	    });
    </script>
</head>
<body>
<input type="hidden" id="icon" value="${value}" />
<div id="icons">
		
	    <h2 class="page-header"> Web 应用的图标</h2>
	    
	    <ul class="the-icons">
	      <li><i class="glyphicon glyphicon-adjust"></i> icon-adjust</li>
	      <li><i class="glyphicon glyphicon-asterisk"></i> icon-asterisk</li>
	      <li><i class="icon-ban-circle"></i> icon-ban-circle</li>
	      <li><i class="icon-bar-chart"></i> icon-bar-chart</li>
	      <li><i class="glyphicon glyphicon-barcode"></i> icon-barcode</li>
	      <li><i class="glyphicon glyphicon-beaker"></i> icon-beaker</li>
	      <li><i class="glyphicon glyphicon-beer"></i> icon-beer</li>
	      <li><i class="glyphicon glyphicon-bell"></i> icon-bell</li>
	      <li><i class="icon-bell-alt"></i> icon-bell-alt</li>
	      <li><i class="glyphicon glyphicon-bolt"></i> icon-bolt</li>
	      <li><i class="glyphicon glyphicon-book"></i> icon-book</li>
	      <li><i class="glyphicon glyphicon-bookmark"></i> icon-bookmark</li>
	      <li><i class="icon-bookmark-empty"></i> icon-bookmark-empty</li>
	      <li><i class="glyphicon glyphicon-briefcase"></i> icon-briefcase</li>
	      <li><i class="glyphicon glyphicon-bullhorn"></i> icon-bullhorn</li>
	      <li><i class="glyphicon glyphicon-calendar"></i> icon-calendar</li>
	      <li><i class="glyphicon glyphicon-camera"></i> icon-camera</li>
	      <li><i class="icon-camera-retro"></i> icon-camera-retro</li>
	      <li><i class="glyphicon glyphicon-certificate"></i> icon-certificate</li>
	      <li><i class="glyphicon glyphicon-check"></i> icon-check</li>
	      <li><i class="icon-check-empty"></i> icon-check-empty</li>
	      <li><i class="glyphicon glyphicon-circle"></i> icon-circle</li>
	      <li><i class="icon-circle-blank"></i> icon-circle-blank</li>
	      <li><i class="glyphicon glyphicon-cloud"></i> icon-cloud</li>
	      <li><i class="icon-cloud-download"></i> icon-cloud-download</li>
	      <li><i class="icon-cloud-upload"></i> icon-cloud-upload</li>
	      <li><i class="glyphicon glyphicon-coffee"></i> icon-coffee</li>
	      <li><i class="glyphicon glyphicon-cog"></i> icon-cog</li>
	      <li><i class="glyphicon glyphicon-cogs"></i> icon-cogs</li>
	      <li><i class="glyphicon glyphicon-comment"></i> icon-comment</li>
	      <li><i class="icon-comment-alt"></i> icon-comment-alt</li>
	      <li><i class="glyphicon glyphicon-comments"></i> icon-comments</li>
	      <li><i class="icon-comments-alt"></i> icon-comments-alt</li>
	      <li><i class="icon-credit-card"></i> icon-credit-card</li>
	      <li><i class="glyphicon glyphicon-dashboard"></i> icon-dashboard</li>
	      <li><i class="glyphicon glyphicon-desktop"></i> icon-desktop</li>
	      <li><i class="glyphicon glyphicon-download"></i> icon-download</li>
	      <li><i class="icon-download-alt"></i> icon-download-alt</li>
	    

	      <li><i class="glyphicon glyphicon-edit"></i> icon-edit</li>
	      <li><i class="glyphicon glyphicon-envelope"></i> icon-envelope</li>
	      <li><i class="icon-envelope-alt"></i> icon-envelope-alt</li>
	      <li><i class="glyphicon glyphicon-exchange"></i> icon-exchange</li>
	      <li><i class="icon-exclamation-sign"></i> icon-exclamation-sign</li>
	      <li><i class="icon-external-link"></i> icon-external-link</li>
	      <li><i class="icon-eye-close"></i> icon-eye-close</li>
	      <li><i class="icon-eye-open"></i> icon-eye-open</li>
	      <li><i class="icon-facetime-video"></i> icon-facetime-video</li>
	      <li><i class="icon-fighter-jet"></i> icon-fighter-jet</li>
	      <li><i class="glyphicon glyphicon-film"></i> icon-film</li>
	      <li><i class="glyphicon glyphicon-filter"></i> icon-filter</li>
	      <li><i class="glyphicon glyphicon-fire"></i> icon-fire</li>
	      <li><i class="glyphicon glyphicon-flag"></i> icon-flag</li>
	      <li><i class="icon-folder-close"></i> icon-folder-close</li>
	      <li><i class="icon-folder-open"></i> icon-folder-open</li>
	      <li><i class="icon-folder-close-alt"></i> icon-folder-close-alt</li>
	      <li><i class="icon-folder-open-alt"></i> icon-folder-open-alt</li>
	      <li><i class="glyphicon glyphicon-food"></i> icon-food</li>
	      <li><i class="glyphicon glyphicon-gift"></i> icon-gift</li>
	      <li><i class="glyphicon glyphicon-glass"></i> icon-glass</li>
	      <li><i class="glyphicon glyphicon-globe"></i> icon-globe</li>
	      <li><i class="glyphicon glyphicon-group"></i> icon-group</li>
	      <li><i class="glyphicon glyphicon-hdd"></i> icon-hdd</li>
	      <li><i class="glyphicon glyphicon-headphones"></i> icon-headphones</li>
	      <li><i class="glyphicon glyphicon-heart"></i> icon-heart</li>
	      <li><i class="icon-heart-empty"></i> icon-heart-empty</li>
	      <li><i class="glyphicon glyphicon-home"></i> icon-home</li>
	      <li><i class="glyphicon glyphicon-inbox"></i> icon-inbox</li>
	      <li><i class="icon-info-sign"></i> icon-info-sign</li>
	      <li><i class="glyphicon glyphicon-key"></i> icon-key</li>
	      <li><i class="glyphicon glyphicon-leaf"></i> icon-leaf</li>
	      <li><i class="glyphicon glyphicon-laptop"></i> icon-laptop</li>
	      <li><i class="glyphicon glyphicon-legal"></i> icon-legal</li>
	      <li><i class="glyphicon glyphicon-lemon"></i> icon-lemon</li>
	      <li><i class="glyphicon glyphicon-lightbulb"></i> icon-lightbulb</li>
	      <li><i class="glyphicon glyphicon-lock"></i> icon-lock</li>
	      <li><i class="glyphicon glyphicon-unlock"></i> icon-unlock</li>
	    

	      <li><i class="glyphicon glyphicon-magic"></i> icon-magic</li>
	      <li><i class="glyphicon glyphicon-magnet"></i> icon-magnet</li>
	      <li><i class="icon-map-marker"></i> icon-map-marker</li>
	      <li><i class="glyphicon glyphicon-minus"></i> icon-minus</li>
	      <li><i class="icon-minus-sign"></i> icon-minus-sign</li>
	      <li><i class="icon-mobile-phone"></i> icon-mobile-phone</li>
	      <li><i class="glyphicon glyphicon-money"></i> icon-money</li>
	      <li><i class="glyphicon glyphicon-move"></i> icon-move</li>
	      <li><i class="glyphicon glyphicon-music"></i> icon-music</li>
	      <li><i class="glyphicon glyphicon-off"></i> icon-off</li>
	      <li><i class="glyphicon glyphicon-ok"></i> icon-ok</li>
	      <li><i class="icon-ok-circle"></i> icon-ok-circle</li>
	      <li><i class="icon-ok-sign"></i> icon-ok-sign</li>
	      <li><i class="glyphicon glyphicon-pencil"></i> icon-pencil</li>
	      <li><i class="glyphicon glyphicon-picture"></i> icon-picture</li>
	      <li><i class="glyphicon glyphicon-plane"></i> icon-plane</li>
	      <li><i class="glyphicon glyphicon-plus"></i> icon-plus</li>
	      <li><i class="icon-plus-sign"></i> icon-plus-sign</li>
	      <li><i class="glyphicon glyphicon-print"></i> icon-print</li>
	      <li><i class="glyphicon glyphicon-pushpin"></i> icon-pushpin</li>
	      <li><i class="glyphicon glyphicon-qrcode"></i> icon-qrcode</li>
	      <li><i class="icon-question-sign"></i> icon-question-sign</li>
	      <li><i class="icon-quote-left"></i> icon-quote-left</li>
	      <li><i class="icon-quote-right"></i> icon-quote-right</li>
	      <li><i class="glyphicon glyphicon-random"></i> icon-random</li>
	      <li><i class="glyphicon glyphicon-refresh"></i> icon-refresh</li>
	      <li><i class="glyphicon glyphicon-remove"></i> icon-remove</li>
	      <li><i class="icon-remove-circle"></i> icon-remove-circle</li>
	      <li><i class="icon-remove-sign"></i> icon-remove-sign</li>
	      <li><i class="glyphicon glyphicon-reorder"></i> icon-reorder</li>
	      <li><i class="glyphicon glyphicon-reply"></i> icon-reply</li>
	      <li><i class="icon-resize-horizontal"></i> icon-resize-horizontal</li>
	      <li><i class="icon-resize-vertical"></i> icon-resize-vertical</li>
	      <li><i class="glyphicon glyphicon-retweet"></i> icon-retweet</li>
	      <li><i class="glyphicon glyphicon-road"></i> icon-road</li>
	      <li><i class="glyphicon glyphicon-rss"></i> icon-rss</li>
	      <li><i class="glyphicon glyphicon-screenshot"></i> icon-screenshot</li>
	      <li><i class="glyphicon glyphicon-search"></i> icon-search</li>
	    

	      <li><i class="glyphicon glyphicon-share"></i> icon-share</li>
	      <li><i class="icon-share-alt"></i> icon-share-alt</li>
	      <li><i class="icon-shopping-cart"></i> icon-shopping-cart</li>
	      <li><i class="glyphicon glyphicon-signal"></i> icon-signal</li>
	      <li><i class="glyphicon glyphicon-signin"></i> icon-signin</li>
	      <li><i class="glyphicon glyphicon-signout"></i> icon-signout</li>
	      <li><i class="glyphicon glyphicon-sitemap"></i> icon-sitemap</li>
	      <li><i class="glyphicon glyphicon-sort"></i> icon-sort</li>
	      <li><i class="icon-sort-down"></i> icon-sort-down</li>
	      <li><i class="icon-sort-up"></i> icon-sort-up</li>
	      <li><i class="glyphicon glyphicon-spinner"></i> icon-spinner</li>
	      <li><i class="glyphicon glyphicon-star"></i> icon-star</li>
	      <li><i class="icon-star-empty"></i> icon-star-empty</li>
	      <li><i class="icon-star-half"></i> icon-star-half</li>
	      <li><i class="glyphicon glyphicon-tablet"></i> icon-tablet</li>
	      <li><i class="glyphicon glyphicon-tag"></i> icon-tag</li>
	      <li><i class="glyphicon glyphicon-tags"></i> icon-tags</li>
	      <li><i class="glyphicon glyphicon-tasks"></i> icon-tasks</li>
	      <li><i class="icon-thumbs-down"></i> icon-thumbs-down</li>
	      <li><i class="icon-thumbs-up"></i> icon-thumbs-up</li>
	      <li><i class="glyphicon glyphicon-time"></i> icon-time</li>
	      <li><i class="glyphicon glyphicon-tint"></i> icon-tint</li>
	      <li><i class="glyphicon glyphicon-trash"></i> icon-trash</li>
	      <li><i class="glyphicon glyphicon-trophy"></i> icon-trophy</li>
	      <li><i class="glyphicon glyphicon-truck"></i> icon-truck</li>
	      <li><i class="glyphicon glyphicon-umbrella"></i> icon-umbrella</li>
	      <li><i class="glyphicon glyphicon-upload"></i> icon-upload</li>
	      <li><i class="icon-upload-alt"></i> icon-upload-alt</li>
	      <li><i class="glyphicon glyphicon-user"></i> icon-user</li>
	      <li><i class="icon-user-md"></i> icon-user-md</li>
	      <li><i class="icon-volume-off"></i> icon-volume-off</li>
	      <li><i class="icon-volume-down"></i> icon-volume-down</li>
	      <li><i class="icon-volume-up"></i> icon-volume-up</li>
	      <li><i class="icon-warning-sign"></i> icon-warning-sign</li>
	      <li><i class="glyphicon glyphicon-wrench"></i> icon-wrench</li>
	      <li><i class="icon-zoom-in"></i> icon-zoom-in</li>
	      <li><i class="icon-zoom-out"></i> icon-zoom-out</li>
	    </ul>
	
	  
	    <h2 class="page-header">文本编辑器图标</h2>
	  
	    <ul class="the-icons">
	      <li><i class="glyphicon glyphicon-file"></i> icon-file</li>
	      <li><i class="icon-file-alt"></i> icon-file-alt</li>
	      <li><i class="glyphicon glyphicon-cut"></i> icon-cut</li>
	      <li><i class="glyphicon glyphicon-copy"></i> icon-copy</li>
	      <li><i class="glyphicon glyphicon-paste"></i> icon-paste</li>
	      <li><i class="glyphicon glyphicon-save"></i> icon-save</li>
	      <li><i class="glyphicon glyphicon-undo"></i> icon-undo</li>
	      <li><i class="glyphicon glyphicon-repeat"></i> icon-repeat</li>
	    

	      <li><i class="icon-text-height"></i> icon-text-height</li>
	      <li><i class="icon-text-width"></i> icon-text-width</li>
	      <li><i class="icon-align-left"></i> icon-align-left</li>
	      <li><i class="icon-align-center"></i> icon-align-center</li>
	      <li><i class="icon-align-right"></i> icon-align-right</li>
	      <li><i class="icon-align-justify"></i> icon-align-justify</li>
	      <li><i class="icon-indent-left"></i> icon-indent-left</li>
	      <li><i class="icon-indent-right"></i> icon-indent-right</li>
	    

	      <li><i class="glyphicon glyphicon-font"></i> icon-font</li>
	      <li><i class="glyphicon glyphicon-bold"></i> icon-bold</li>
	      <li><i class="glyphicon glyphicon-italic"></i> icon-italic</li>
	      <li><i class="glyphicon glyphicon-strikethrough"></i> icon-strikethrough</li>
	      <li><i class="glyphicon glyphicon-underline"></i> icon-underline</li>
	      <li><i class="glyphicon glyphicon-link"></i> icon-link</li>
	      <li><i class="icon-paper-clip"></i> icon-paper-clip</li>
	      <li><i class="glyphicon glyphicon-columns"></i> icon-columns</li>
	    

	      <li><i class="glyphicon glyphicon-table"></i> icon-table</li>
	      <li><i class="icon-th-large"></i> icon-th-large</li>
	      <li><i class="glyphicon glyphicon-th"></i> icon-th</li>
	      <li><i class="icon-th-list"></i> icon-th-list</li>
	      <li><i class="glyphicon glyphicon-list"></i> icon-list</li>
	      <li><i class="icon-list-ol"></i> icon-list-ol</li>
	      <li><i class="icon-list-ul"></i> icon-list-ul</li>
	      <li><i class="icon-list-alt"></i> icon-list-alt</li>
	    </ul>
	
	    <h2 class="page-header">指示方向的图标</h2>
	  
	    <ul class="the-icons">
	      <li><i class="icon-angle-left"></i> icon-angle-left</li>
	      <li><i class="icon-angle-right"></i> icon-angle-right</li>
	      <li><i class="icon-angle-up"></i> icon-angle-up</li>
	      <li><i class="icon-angle-down"></i> icon-angle-down</li>
	      <li><i class="icon-arrow-down"></i> icon-arrow-down</li>
	      <li><i class="icon-arrow-left"></i> icon-arrow-left</li>
	      <li><i class="icon-arrow-right"></i> icon-arrow-right</li>
	      <li><i class="icon-arrow-up"></i> icon-arrow-up</li>
	    

	      <li><i class="icon-caret-down"></i> icon-caret-down</li>
	      <li><i class="icon-caret-left"></i> icon-caret-left</li>
	      <li><i class="icon-caret-right"></i> icon-caret-right</li>
	      <li><i class="icon-caret-up"></i> icon-caret-up</li>
	      <li><i class="icon-chevron-down"></i> icon-chevron-down</li>
	      <li><i class="icon-chevron-left"></i> icon-chevron-left</li>
	      <li><i class="icon-chevron-right"></i> icon-chevron-right</li>
	      <li><i class="icon-chevron-up"></i> icon-chevron-up</li>
	    

	      <li><i class="icon-circle-arrow-down"></i> icon-circle-arrow-down</li>
	      <li><i class="icon-circle-arrow-left"></i> icon-circle-arrow-left</li>
	      <li><i class="icon-circle-arrow-right"></i> icon-circle-arrow-right</li>
	      <li><i class="icon-circle-arrow-up"></i> icon-circle-arrow-up</li>
	      <li><i class="icon-double-angle-left"></i> icon-double-angle-left</li>
	      <li><i class="icon-double-angle-right"></i> icon-double-angle-right</li>
	      <li><i class="icon-double-angle-up"></i> icon-double-angle-up</li>
	      <li><i class="icon-double-angle-down"></i> icon-double-angle-down</li>
	    

	      <li><i class="icon-hand-down"></i> icon-hand-down</li>
	      <li><i class="icon-hand-left"></i> icon-hand-left</li>
	      <li><i class="icon-hand-right"></i> icon-hand-right</li>
	      <li><i class="icon-hand-up"></i> icon-hand-up</li>
	      <li><i class="glyphicon glyphicon-circle"></i> icon-circle</li>
	      <li><i class="icon-circle-blank"></i> icon-circle-blank</li>
	    </ul>
	  
	
	    <h2 class="page-header">视频播放器图标</h2>
	  
	    <ul class="the-icons">
	      <li><i class="icon-play-circle"></i> icon-play-circle</li>
	      <li><i class="glyphicon glyphicon-play"></i> icon-play</li>
	      <li><i class="glyphicon glyphicon-pause"></i> icon-pause</li>
	      <li><i class="glyphicon glyphicon-stop"></i> icon-stop</li>
	    

	      <li><i class="icon-step-backward"></i> icon-step-backward</li>
	      <li><i class="icon-fast-backward"></i> icon-fast-backward</li>
	      <li><i class="glyphicon glyphicon-backward"></i> icon-backward</li>
	      <li><i class="glyphicon glyphicon-forward"></i> icon-forward</li>
	    

	      <li><i class="icon-fast-forward"></i> icon-fast-forward</li>
	      <li><i class="icon-step-forward"></i> icon-step-forward</li>
	      <li><i class="glyphicon glyphicon-eject"></i> icon-eject</li>
	    

	      <li><i class="glyphicon glyphicon-fullscreen"></i> icon-fullscreen</li>
	      <li><i class="icon-resize-full"></i> icon-resize-full</li>
	      <li><i class="icon-resize-small"></i> icon-resize-small</li>
	    </ul>
	
	
	    <h2 class="page-header">SNS图标</h2>
	  
	    <ul class="the-icons">
	      <li><i class="glyphicon glyphicon-phone"></i> icon-phone</li>
	      <li><i class="icon-phone-sign"></i> icon-phone-sign</li>
	      <li><i class="glyphicon glyphicon-facebook"></i> icon-facebook</li>
	      <li><i class="icon-facebook-sign"></i> icon-facebook-sign</li>
	    

	      <li><i class="glyphicon glyphicon-twitter"></i> icon-twitter</li>
	      <li><i class="icon-twitter-sign"></i> icon-twitter-sign</li>
	      <li><i class="glyphicon glyphicon-github"></i> icon-github</li>
	      <li><i class="icon-github-alt"></i> icon-github-alt</li>
	    

	      <li><i class="icon-github-sign"></i> icon-github-sign</li>
	      <li><i class="glyphicon glyphicon-linkedin"></i> icon-linkedin</li>
	      <li><i class="icon-linkedin-sign"></i> icon-linkedin-sign</li>
	      <li><i class="glyphicon glyphicon-pinterest"></i> icon-pinterest</li>
	    

	      <li><i class="icon-pinterest-sign"></i> icon-pinterest-sign</li>
	      <li><i class="icon-google-plus"></i> icon-google-plus</li>
	      <li><i class="icon-google-plus-sign"></i> icon-google-plus-sign</li>
	      <li><i class="icon-sign-blank"></i> icon-sign-blank</li>
	    </ul>
	  
	  
	    <h2 class="page-header">医疗图标</h2>
	  
	    <ul class="the-icons">
	      <li><i class="glyphicon glyphicon-ambulance"></i> icon-ambulance</li>
	      <li><i class="glyphicon glyphicon-beaker"></i> icon-beaker</li>
	    

	      <li><i class="icon-h-sign"></i> icon-h-sign</li>
	      <li><i class="glyphicon glyphicon-hospital"></i> icon-hospital</li>
	    

	      <li><i class="glyphicon glyphicon-medkit"></i> icon-medkit</li>
	      <li><i class="icon-plus-sign-alt"></i> icon-plus-sign-alt</li>
	    

	      <li><i class="glyphicon glyphicon-stethoscope"></i> icon-stethoscope</li>
	      <li><i class="icon-user-md"></i> icon-user-md</li>
	    </ul>
	<br/><br/>
</div>
</body>