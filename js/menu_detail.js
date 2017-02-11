
//产品选项卡
window.onload=function(){
	var fr1=document.getElementById("fr");
	var input1=fr1.getElementsByTagName("input");
	var pic=document.getElementById("info_pic");
	var aDiv=pic.getElementsByTagName("div");
	
	for(var i=0;i<input1.length;i++){
		input1[i].index=i;
		input1[i].onclick=function(){
            for(var i=0;i<input1.length;i++){
            	input1[i].className="";
            }
			this.className="yel";
			for(var j=0;j<input1.length;j++){
                aDiv[j].style.display="none"
			}
			aDiv[this.index].style.display="block";
		}
	}
//点击下单按钮弹出购买信息
	document.getElementById("buy_food").onclick=function(){
	var city=document.getElementById("city").value;
	var add=document.getElementById("address").value;
	var food=document.getElementById("food").value;
	var num=document.getElementById("num").value;
	alert("您订单信息是：\n"+city+"市\n"+"地址:"+add+"\n订单:"+food+"\n"+"数量:"+num)
}

}