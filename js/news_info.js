//上方显示当前时间
	function timeconer(){
		var date=new Date();
		var year=date.getFullYear();
	    var month=date.getMonth()+1;
	    var day=date.getDate();
	    var week=date.getDay();
	    var hour=date.getHours();
	    var minute=date.getMinutes();
	    var weekarray=new Array(7);
	    weekarray[0]="星期日";
	    weekarray[1]="星期一";
	    weekarray[2]="星期二";
	    weekarray[3]="星期三";
	    weekarray[4]="星期四";
	    weekarray[5]="星期五";
	    weekarray[6]="星期六";
	    var second=date.getSeconds();
	    document.getElementById("time").innerHTML=(year+"年"+month+"月"
	    	+day+"日"+weekarray[week]+hour+"时"+minute+"分"+second+"秒")
	}
	window.setInterval(timeconer,1000)
	timeconer();
	

