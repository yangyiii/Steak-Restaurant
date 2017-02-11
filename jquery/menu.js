
/*菜品显示点击换图*/
$(function(){
	var index=0;
	$(".menu_nav ul li").click(function(){
		if(!$(".menu_food_show ul").is(":animated")){
		index=$(".menu_nav ul li").index(this);
		showPic(index);
        $(".menu_nav ul li a").removeClass("wht")
        $(this).find("a").addClass("wht");
        return false;
        }
	})
    $("#prev").click(function(){
    	if(!$(".menu_food_show ul").is(":animated")){
    		if(index==0){
    			index=3;
    			showPic(index);
    		}
    		else{
    			index--;
    			showPic(index)
    		}
    	}
    	$(".menu_nav ul li a").removeClass("wht")
        $(".menu_nav ul li").eq(index).find("a").addClass("wht");
    })
    $("#next").click(function(){
    	if(!$(".menu_food_show ul").is(":animated")){
    		if(index==3){
    			index=0;
    			showPic(index)
    		}
    		else{
    			index++;
    			showPic(index);
    		}
    	}
    	$(".menu_nav ul li a").removeClass("wht")
        $(".menu_nav ul li").eq(index).find("a").addClass("wht");
    })
function showPic(index){
	var width2=$(".menu_food_show").width();
	$(".menu_food_show ul").animate({
		left:-width2*index
	},1000)
	return false;
}
})

//线条显示
$(function(){
	$(".menu_food_show ul li").hover(function(){
        $(this).find(".line_top").animate({
        	width:"178px"
        },1000)
         $(this).find(".line_bottom").animate({
        	width:"178px"
        },1000)
        $(this).find(".line_left").animate({
        	height:"160px"
        },1000)
        $(this).find(".line_right").animate({
        	height:"160px"
        },1000)
	},function(){
		 $(".menu_food_show ul li").find(".line_top").animate({
        	width:"0px"
        },500)
         $(".menu_food_show ul li").find(".line_bottom").animate({
        	width:"0px"
        },500)
        $(".menu_food_show ul li").find(".line_left").animate({
        	height:"0px"
        },500)
        $(".menu_food_show ul li").find(".line_right").animate({
        	height:"0px"
        },500)
	})
})