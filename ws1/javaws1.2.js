var fechaHoy = new Date('9/1/2018 14:52:10');
var fecha85 = new Date();
fechaHoy.setDate(fechaHoy.getDate() + 85);
fecha85 = fechaHoy;
var dia=fecha85.getDate();
document.write("<p>"+dia+"</p>");

var fecha187 = new Date();
fechaHoy.setDate(fechaHoy.getDate() - 187);
fecha187 = fechaHoy;
var dia2=fecha187.getDate();
document.write("<p>"+dia2+"</p>");

fechaHoy.setFullYear(fechaHoy.getFullYear() + 2);
fecha85 = fechaHoy;
var anno=fecha85.getFullYear();
document.write("<p>"+anno+"</p>");

fechaHoy.setHours(fechaHoy.getHours() - 24);
fecha187 = fechaHoy;
var hora=fecha187.getHours();
document.write("<p>"+hora+"</p>");

var fechaResto = new Date();
fechaResto =fecha85;
fechaResto.setDate(fechaResto.getDate() - fecha187.getDate());
fechaResto.setMonth(fechaResto.getMonth() - fecha187.getMonth());
fechaResto.setFullYear(fechaResto.getFullYear() - fecha187.getFullYear());
var diaResto = fechaResto.getDate();
var mesResto = fechaResto.getMonth();
var anoResto = fechaResto.getFullYear();
document.write("<p>Dia "+diaResto+" mes "+mesResto+" ano "+anoResto+"</p>");