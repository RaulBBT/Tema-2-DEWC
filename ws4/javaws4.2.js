document.write("<table border=1px>");
document.write("<tr>");
document.write("<td>Altura de la pantalla: </td>");
document.write("<td>"+screen.availHeight+"</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>Anchura de la pantalla: </td>");
document.write("<td>"+screen.availWidth+"</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>Color de fondo: </td>");
document.write("<td>"+screen.colorDepth+"</td>");
document.write("</tr>");
document.write("</table>");