//点击下单弹出订单信息
window.onload=function(){
	document.getElementById("buy_food").onclick=function(){
	var city=document.getElementById("city").value;
	var add=document.getElementById("address").value;
	var food=document.getElementById("food").value;
	var num=document.getElementById("num").value;
	alert("您订单信息是：\n"+city+"市\n"+"地址是"+add+"\n订单是"+food+"\n"+"数量"+num)
}

}

