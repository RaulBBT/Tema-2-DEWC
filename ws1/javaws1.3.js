function contador(x){
	if(i<=60){
		document.write("<p>"+x+"</p>");
		i++;
	}else{
		intervalo.clear;
	}
}
var i=0;
var intervalo = setInterval(function(){ contador(60-i); }, 1000);