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
	})
})

$(".backtop").backTop();
	//$(".backtop") 返回按钮父容器     
