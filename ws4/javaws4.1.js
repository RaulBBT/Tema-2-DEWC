document.write("<table border=1px>");
document.write("<tr>");
document.write("<td>Name of the Browser: </td>");
document.write("<td>"+navigator.appName+"</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>Code Name of the current browser: </td>");
document.write("<td>"+navigator.appCodeName+"</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>Version of the browser: </td>");
document.write("<td>"+navigator.appVersion+"</td>");
document.write("</tr>");

document.write("</table>");