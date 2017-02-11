//输入框聚焦文字消失，失去焦点文字显示

/*$(function(){
	$("#username").focus(function(){
		var txt=$(this).val();
		if(txt==this.defaultValue){
			$(this).val("")
		}
	})
	$("#username").blur(function(){
		var txt=$(this).val();
		if(txt==""){
			$(this).val(this.defaultValue);
		}
	})
	$("#phone,#e-mail").focus(function(){
		var txt=$(this).val();
		if(txt==this.defaultValue){
			$(this).val("")
		}
	})
	$("#phone,#e-mail").blur(function(){
		var txt=$(this).val();
		if(txt==""){
			$(this).val(this.defaultValue);
		}
	})

})*/
//显示提示框
$(function(){
	$("form .int input.required").each(function(){
		var $required=$("<strong class='high'>*</strong>");
		$(this).parent().append($required);
	})
	

})

//表单验证
$(function(){
	$("form :input").blur(function(){
		$(this).parent().find(".in").remove();
		if($(this).is("#username")){
			if(this.value==""||this.value.length<2){
				$(this).parent().append("<span class='in on1'>请输入正确的姓名</span>");
			}
			else{
				$(this).parent().append("<span class='in on2'>输入正确</span>")
			}
		}
		if($(this).is("#phone")){
			if(this.value!="" && this.value.length==11 && /^1[3|4|5|8|]\d{9}$/.test(this.value)){
				$(this).parent().append("<span class='in on2'>输入正确</span>");
			}
			else{
				$(this).parent().append("<span class='in on1'>请输入11位手机号码</span>");
			}
		}
	    if($(this).is("#e-mail")){
			if(this.value==""||(this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value))){
                $(this).parent().append("<span class='in on1'>请输入正确格式的邮箱</span>");
			}
			else{
                $(this).parent().append("<span class='in on2'>输入正确</span>")
			}
		}
		if($(this).is("#code")){
			if(this.value!=$("#codeText").val()||this.value==""){
				$(this).parent().append("<span class='in on1'>请输入正确的验证码</span>");
			}
			else{
				$(this).parent().append("<span class='in on2'>输入正确</span>")
			}
		}

		
	}).keyup(function(){
		$(this).triggerHandler("blur")
	}).focus(function(){
		$(this).triggerHandler("blur")
	})
	$("#send").click(function(){
		$("#username,#phone,#e-mail,#code").trigger("blur");
		var num=$(".on1").length;
		if(num){
			return false;
		}
		alert("我们已收到您宝贵的建议")
	})
	$('#res').click(function(){
        $(".in").remove(); 
   });
})

//获取验证码
$(function(){
	$("#getCode").click(function(){
		var result="";
		for(i=0;i<4;i++){
			result=result+(parseInt(Math.random()*10)).toString();
		}
	$("#codeText").val(result);
	})
	$("#resCode").click(function(){
		$("#codeText").val("")
	})
})
