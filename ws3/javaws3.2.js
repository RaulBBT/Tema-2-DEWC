var cadena = new String(prompt("Introduce una cadena"));
function esMayuscula(letra)
{
    return letra === letra.toUpperCase();
}

function esMinuscula(letra)
{
    return letra === letra.toLowerCase();
}   
function determinaCadena(cadena){
	var x=0;
	var m=0;
	var n=0;
	var mayus = false;
	var minus = false;
	while (x<cadena.length){
		if (esMayuscula(cadena.charAt(x))){
			m++;
		}
		if (esMinuscula(cadena.charAt(x))){
			n++;
		}
		x++;
	}
	if (m==cadena.length){
		document.write("La cadena está en mayusculas.");
	}else if (n==cadena.length){
		document.write("La cadena esta en minusculas.");
	}else {
		document.write("La cadena esta mezclada.");
	}
}