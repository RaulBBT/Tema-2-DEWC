var num1 = Math.floor((Math.random()*2));
document.write("<p>"+num1+"</p>");
var num2 = Math.floor((Math.random()*100)+100);
document.write("<p>"+num2+"</p>");
var x = prompt("Introduce un numero");
var y = prompt("Introduce otro numero");
if (x>y){
	var num3 = Math.floor((Math.random()*y)+(x-y));
	document.write("<p>"+num3+"</p>");
}else{
	var num3 = Math.floor((Math.random()*x)+(y-x));
	document.write("<p>"+num3+"</p>");
}