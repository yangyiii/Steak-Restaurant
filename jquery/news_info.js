//点击图片浏览量增加
$(function(){
	$("#eye").click(function(){
		var txt=Number($("#eye_txt").text())+1;
        $("#eye_txt").text(txt)
	})
	var eye=$(".news_info_bottom ul li").find(".eye_1");
	eye.click(function(){
		var txt=Number($(this).next().text())+1;
		$(this).next().text(txt)
	})
})