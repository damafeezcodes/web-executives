
		var minute = document.getElementById('min');
		var minShadow = document.getElementById('minShadow');
		var sec = document.getElementById('sec');
		var secShadow = document.getElementById('secShadow');
		var hour = document.getElementById('hour');
		var hourShadow = document.getElementById('hourShadow');
		function updateTime(){
			var curTime = new Date();
			var curSec  = curTime.getSeconds();
			var secRot = curSec * 6;
			var curMin  = curTime.getMinutes();
			var curHour  = curTime.getHours();
			sec.setAttribute('transform','rotate('+secRot+' 506.884 383.436)');
			min.setAttribute('transform','rotate('+curMin*6+' 506.884 383.436)');
		}
		setInterval(timeGetter,1000);
	function timeGetter(){
		  var currentTime = new Date();
		  var currentHour = currentTime.getHours();
		  var currentMinute = currentTime.getMinutes()*6;
		  var currentSecond = currentTime.getSeconds();
		  sec.setAttribute('transform','rotate('+6*currentSecond+' 506.844 383.436)');
		  minute.setAttribute('transform','rotate('+(currentMinute+currentSecond/10)+' 506.844 383.436)');
		  if(currentTime.getMinutes()!=60){
		 	 hour.setAttribute('transform','rotate('+(currentHour*30+currentTime.getMinutes()/2)+' 506.844 383.436)');
		}
	}
	setInterval(timeGetter,1000);