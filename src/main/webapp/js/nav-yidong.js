// JavaScript Document
$(document).ready(function () {
        //判断是否是是PC
        function isPC() {
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    return false;
                }
            }
            return true;
        }

        var touchEvents = {
            touchstart: "touchstart",
            touchmove: "touchmove",
            touchend: "touchend",

            /**
             * @desc:判断是否pc设备，若是pc，需要更改touch事件为鼠标事件，否则默认触摸事件
             */
            initTouchEvents: function () {
                if (isPC()) {
                    this.touchstart = "mousedown";
                    this.touchmove = "mousemove";
                    this.touchend = "mouseup";
                }
            }
        };
        var isMove, _isPC = isPC(), x1;
        var nav_widthx = $(".app-scroll").width(), //获取菜单可视区域宽度
                nav_width = $(".app-menu").width(); //获取菜单整个区域宽度
        appWrap = document.getElementById("app-wrap");
        touchEvents.initTouchEvents();
        appWrap.addEventListener(touchEvents.touchstart, touchStart);
        appWrap.addEventListener(touchEvents.touchmove, touchMove);
        appWrap.addEventListener(touchEvents.touchend, function () {
            isMove = false;
        });
        //滑动开始事件
        function touchStart(e) {
            isMove = true;
            e.preventDefault();
            left = parseInt($("#app-wrap").css('left'));
            x = e.pageX - left;
            if (!_isPC) {
                x = e.touches[0].pageX - left;
            }
        }

        function touchMove(e) {
            if (isMove) {
                e.preventDefault();
                x1 = e.pageX - x;
                if (!_isPC) {
                    x1 = e.touches[0].pageX - x;
                }
                var m = nav_width - nav_widthx + 40;
                if (-x1 < m && x1 < m && x1 <= 0) {
                    $(".app-wrap").css({left: x1 + 'px'});//控件新位置
                }
            }
        }

        $(".app-btn-arrow").on("click", function () {
            var $navbar = $(".app-navbar");
            if ($navbar.hasClass("open")) {

                $navbar.removeClass("open");
            } else {
                $navbar.addClass("open");
            }
        });
        var ha=Math.round(nav_widthx/2);
        $("#app-menu li.nav-slide").on("click",function(){
            var _w=$(this).width();
            var left=$(this).position().left;
            var cen=left-ha+Math.round(_w/2);
            if(left>ha){
                    $(".app-wrap").animate({left:-cen+'px'},300);
            }
        });
});