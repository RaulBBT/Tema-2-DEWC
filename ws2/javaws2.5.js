var a=prompt("Introduce el coeficiente para n*x^2");
var b=prompt("Introduce el coeficiente para n*x");
var c=prompt("Introduce el coeficiente para una constante");
document.write("<p>"+a+"x^2 + "+b+"*x + "+c+" = 0</p>");
var x1=(-b+(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
var x2=(-b-(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
document.write("<p> Solucion 1: "+x1+"</p>");
document.write("<p> Solucion 2: "+x2+"</p>");