// JavaScript Document
$(function(){
	var $bodyHeight = $(window).height();
    var $bodyWidth = $(window).width(); 
    function scrollFun(){
        var $winTop = $(window).scrollTop();
        var $conTop = $("#contectUs").offset().top - 664 - 105 - $winTop;
        if($bodyWidth>768){
            var $headetTop = $("#header").offset().top;
            if( $headetTop > $bodyHeight){
                $("#header").stop().css({"background":"#FFF","border-bottom":"1px solid #ccc"}).css({"padding":"0"},400).find("h1 a").stop().css("backgroundImage","url(/images/logo2.png)").css({"width":"170px","height":"36px"},400);
                $("#header").find(".nav a").stop().css({"height":"36px","line-height":"36px"},400);        
                $(".nav a").css("color","#333").hover(function(){$(this).css("color","#025599")},function(){$(this).css("color","#333")});
                $(".nav a.select").css("color","#025599");
                $(".header").css({"height":"60px"},400);
            }
            else{   
                $("#header").stop().css({"background":"rgba(2,84,153,1)","border-bottom":"0"}).css({"padding":"12px 0"},400).find("h1 a").stop().css("backgroundImage","url(/images/logo.png)").css({"width":"205px","height":"57px"},400);
                $("#header").find(".nav a").stop().css({"height":"57px","line-height":"57px"},400);
                $(".nav a").css("color","#fff").hover(function(){$(this).css("color","#fff")},function(){$(this).css("color","#FFF")});
                $(".nav a.select").css("color","#fff");
                $(".header").css({"height":"105px"},400);
            }
        }
        var $scrollTop= $(document).scrollTop();
        var $overServicesHeight = $("#services").height();
        if( $scrollTop >260 && $scrollTop <$overServicesHeight + 800){
            $("#services .services_list").stop().addClass("yundong");   
        }
        else{
            $("#services .services_list").stop().removeClass("yundong");
        }
    }
    scrollFun();
    $(window).scroll(function(){
    	scrollFun();
    });
    $("#zixun li a").click(function(){
        $(this).addClass("select").parent().siblings().find("a").removeClass("select");
    });
    // 回到顶部
    $("#backtotop").click(function() {
      $("html,body").animate({scrollTop:0}, 500);
  }); 
    /*$("#backtotop").click(function(){
        $("body").animate({"scrollTop":"0"});
    });*/
    $("#erweima").hover(
        function(){
            $(".erweima").stop().show();
        },
        function(){
            $(".erweima").stop().hide();
        }
    );
    $("#banner").css("height",$bodyHeight);
    //去除某些边框
    $("#news .list-dep:last").css("margin-right","0");
    $(".contectUs-list>div:last").css("border","none");

    /*$("#instance>a").hover(
        function(){$(this).find(".index2").stop().fadeIn(350);},
        function(){$(this).find(".index2").stop().fadeOut(350);}
    );*/
	$(".anliTypeNav1 li a").click(function(){
		$(this).addClass("select").parent().siblings().find("a").removeClass("select");
	});
	if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
        $("#instance .index2").hide();
    }
	else{
        //当窗口大小改变时，刷新页面
        window.onresize = function(){
            location.reload();
          /* $("#main .slides li").css("width",$("#banner").width());
           $("#main .slides li").css("height",$("#banner").height());*/
        };
	}
});
$(function(){
    $("#header .anniu").click(function(){
        if($("#header .nav_fu").css("display") == "none"){
            $("#header .nav_fu").slideDown("400");
        }
        else{
            $("#header .nav_fu").slideUp("400");
        }  
    });
    	
	
	
});

//解决input中placeholder值在ie中无法支持的问题
$(function(){
if(!placeholderSupport()){   // 判断浏览器是否支持 placeholder
    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();
};
})
function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}
$(function(){
        if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
	            $("#banner").hide();
	            $("#banner2").show();
	            $("#services .services_list").css({"left":0,"opacity":1});
	        }
	    else{
	        	$("#banner").show();
	            $("#banner2").hide();
	    }
    });