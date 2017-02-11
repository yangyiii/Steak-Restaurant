
//价格联动
$(function(){
	var $span=$(".buy .price1");
	var txt=$span.text();
	$("#num_sort").change(function(){
		var num=$(this).val();
		var amount=num*txt;
		$span.text(amount)
	})
})
//弹出购买信息
$(function(){
	$(".buy .buy_car").click(function(){
		var $h2=$(".detail_content").find('h2').text();
		var $price=$(".detail_content").find('.price1').text();
		var $num=$(".detail_content").find('#num_sort').val();
		var tip="您购买的是\n"+$h2+"\n"+"总价是"+$price+"\n数量是"+$num+"\n感谢您的购买";
		alert(tip)
	})
})

//点击小图显示大图
$(function(){
	$(".small_picture ul li").click(function(){
		var img_src=$(this).find("img").attr("src");
		var i=img_src.lastIndexOf(".");
		var unit=img_src.substring(i);
		img_src=img_src.substring(0,i);
		var img_big_src=img_src+"_big"+unit;
		$("#thickImg").attr("src",img_big_src)
		return false;
	})
})

//字向上滚动

$(function(){
	var adTimer;
	$(".tip_info .notelist").hover(function(){
		clearInterval(adTimer);
	},function(){
		adTimer=setInterval(function(){
			scoll()
		},1000)
	}).trigger("mouseleave");
	function scoll(){
		$(".tip_info .notelist>ul").stop().animate({
			marginTop:"-30px"
		},500,function(){
            $(".tip_info .notelist>ul").append($(".notelist>ul>li:lt(1)"));
		    $(".tip_info>.notelist>ul").css("margin-top","0px")
		})
	}	
})