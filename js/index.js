// alert(1)
$(function(){
	// 选中所有按钮点击事件
	$(".tab .anniu-box .anniu").click(function(){
		// 所有内容隐藏
		$(".tab .content-box ul").hide();
		// num表示点击按钮是哪个
		var num = $(".tab .anniu-box .anniu").index($(this));
		// 把对应内容显示
		$(".tab .content-box ul").eq(num).show()
		// 所有按钮背景色去掉
		$(".tab .anniu-box .anniu").css({
			"background":"rgba(0,0,0,0)"
		})
		// 对应按钮背景色添加
		$(this).css({
			"background":"#4E82D6"})
	});

	$(".backtop").backTop();
	//$(".backtop") 返回按钮父容器

	$(".triangle").click(function () {
        $({dNum:0}).animate({dNum:648},{
            duration:1000,
            step: function () {
                $(window).scrollTop(this.dNum);
            }
        })
    });
    $("nav .nav li:eq(0)").click(function(){
    	$({num:$(window).scrollTop()}).animate({num:0},{
    		duration:1000,
    		step:function(){
    			$(window).scrollTop(this.num);
    		}
    	})
    });
    $("nav .nav li:eq(1)").click(function(){
    	$({num:$(window).scrollTop()}).animate({num:700},{
    		duration:1000,
    		step:function(){
    			$(window).scrollTop(this.num);
    		}
    	})
    });
    $("nav .nav li:eq(2)").click(function(){
    	$({num:$(window).scrollTop()}).animate({num:1300},{
    		duration:1000,
    		step:function(){
    			$(window).scrollTop(this.num);
    		}
    	})
    });
    $("nav .nav li:eq(3)").click(function(){
    	$({num:$(window).scrollTop()}).animate({num:2000},{
    		duration:1000,
    		step:function(){
    			$(window).scrollTop(this.num);
    		}
    	})
    });
     $("nav .nav li:eq(4)").click(function(){
    	$({num:$(window).scrollTop()}).animate({num:3500},{
    		duration:1000,
    		step:function(){
    			$(window).scrollTop(this.num);
    		}
    	})
    });
})

