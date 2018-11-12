function contador(){
	var fecha = new Date();
	fecha.setSeconds(fecha.getSeconds()+1);
	seg = fecha.getSeconds();
	document.getElementById('txt').value=""+fecha.getHours()+" "+fecha.getMinutes()+" "+fecha.getSeconds()+"";
	setTimeout(function(){ contador(); }, 1000);
}
setTimeout(function(){ contador(); }, 1000);