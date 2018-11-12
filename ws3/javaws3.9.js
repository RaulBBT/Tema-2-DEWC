var cadena = new String(prompt("Introduce una cadena"));
function generarTabla(cadena){
	document.write("<table>");
	document.write("<tr>");
	for (var i=0; i<cadena.length; i++){
		document.write("<td>"+cadena.charAt(i)+"</td>");
	}
	document.write("</tr>");
	for (var z=1; z<cadena.length-1; z++){
		document.write("<tr>");
		document.write("<td>"+cadena.charAt(z)+"</td>");
		for (var t=1; t<cadena.length-1; t++){
			document.write("<td> </td>");
		}
		document.write("<td>"+cadena.charAt(cadena.length-(z+1))+"</td>");
		document.write("</tr>");
	}
	document.write("<tr>");
	for (var j=cadena.length-1; j>=0; j--){
		document.write("<td>"+cadena.charAt(j)+"</td>");
	}
	document.write("</tr>");
	document.write("</table>");
}