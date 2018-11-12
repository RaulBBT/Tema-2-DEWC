document.write("<table border=1px;>");
for (var i=1; i<=10; i++){
	document.write("<tr>");
	document.write("<td>"+i+"</td>");
	document.write("<td>"+Math.sin(i)+"</td>");
	document.write("</tr>");
}
document.write("</table>");