//hot区域显示遮罩层
$(function(){
   $(".hot_offer>ul>li").hover(function(){
   $(".summary").eq($(this).index()).stop().animate({top:'0px'},1000);
   },function(){
   $(".summary").stop().animate({top:'110%'},500);
   })
})

/*二级导航*/
$(function(){
	$(".banner .nav>ul>li").hover(function(){
		$(this).find("ul").show(500)
	},function(){
		$(".banner .nav ul li ul").hide()
	})
})

/*显示图片*/
$(function(){
	$(".acc_container").hide();
	$(".acc_container:first").show();
	$(".acc_trigger").click(function(){
		$(this).addClass("shd").parent().siblings().find(".acc_trigger").removeClass("shd");
		$(".acc_container").hide();
		$(this).next().slideDown();
		return false;
	})
})

/*提示框*/
$(function(){
	var time=new Date();
	var hour=time.getHours();
	if(hour>7&&hour<=12){
		alert("上午好，欢迎选购，现在是"+hour+"点，今天牛排都很新鲜呢")
	}
	else if(hour>12&&hour<=14){
		alert("中午好，现在是"+hour+"点，由于订单较多，可能要延误一些呢，好的东西总是值得等待的。")
	}
	else if(hour>14&&hour<=19){
		alert("下午好，现在是"+hour+"点，工作了一天，是时候来份美味的牛排犒劳自己啦")
	}
	else if(hour>19&&hour<=22){
		alert("晚上好，现在是"+hour+"点，这个点是否饿了呢？那就来份外卖吧")
	}
	else {
		alert("小店休息啦，白天再来哟")
	}
})

//图片跳转
$(function(){
	var adTimer;
	var num=1;
	$("#dot li").click(function(){
        num=$("#dot li").index(this)+1;
        showImg(num);
   })
	
   $(".pic").hover(function(){
   	    clearInterval(adTimer);
   },function(){
    	adTimer=window.setInterval(function(){
            showImg(num);
            num++;
            if(num==4){
            	num=1;
            }
    	},2000)
   }).trigger("mouseleave")
   function showImg(num){
		 var img_src=$("#show li img").attr("src");
		 var i=img_src.lastIndexOf(".");
		 var unit=img_src.substring(i);
         img_src=img_src.substring(0,i-1);
         $("#show li img").attr("src",img_src+num+unit); 
         $("#dot li").eq(num-1).addClass("round").siblings().removeClass("round");
	}
})

/*文字跳转*/
$(function(){
	var Timer;
	var len=$(".info ul li").length;
	var width=$(".info").width();
	var index=0;
	$(".info ul").css("width",(len+1)*width);
	$(".info").hover(function(){
		clearInterval(Timer);
	},function(){
        Timer=setInterval(function(){
        	if(index==len){
        		showFir(index);
        		index=0
        	}
        	else{
        		showImg(index);
        		index++
        	}
        },2000)
	}).trigger("mouseleave")
	function showImg(index){
		$(".info ul").stop(true,false).animate({
			"left":-width*index
		},1000)
	}
	function showFir(index){
		$(".info ul").append($(".info>ul>li:first").clone());
		$(".info ul").animate({
			"left":-width*len
		},1000,function(){
			$(".info ul").css("left","0px");
			$(".info ul li:last").remove();
		})
	}
})