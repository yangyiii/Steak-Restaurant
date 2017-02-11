window.onload=function(){
	//鼠标经过显示大图
	var x=20;
	var y=20;
	var pic=document.getElementsByClassName("tooltip");
	for(i=0;i<pic.length;i++){
		pic[i].onmouseover=function(event){
           this.myTitle=this.title;
           this.title="";
           var tooltip=document.createElement("div");
           tooltip.id="tooltip";
           tooltip.innerHTML="<img src='"+this.href+"'>"+"<div>"+this.myTitle+"</div>";
           document.body.appendChild(tooltip);
           tooltip.style.display="block";
           tooltip.style.left=(event.pageX+x)+"px";
           tooltip.style.top=(event.pageY+y)+"px";
		}
		pic[i].onmouseout=function(){
			this.title=this.myTitle;
			var s=document.getElementById("tooltip");
			s.parentNode.removeChild(s);
		}
		pic[i].onmousemove=function(event){
			var tooltip=document.getElementById("tooltip")
			tooltip.style.left=(event.pageX+x)+"px";
           tooltip.style.top=(event.pageY+y)+"px";
		}
    }
    //点击订单按钮显示订单信息
    document.getElementById("buy_food").onclick=function(){
	var city=document.getElementById("city").value;
	var add=document.getElementById("address").value;
	var food=document.getElementById("food").value;
	var num=document.getElementById("num").value;
	alert("您订单信息是：\n"+city+"市\n"+"地址是"+add+"\n订单是"+food+"\n"+"数量"+num)
}

}