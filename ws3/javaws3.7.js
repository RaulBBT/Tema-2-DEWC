var cadena = new String(prompt("Introduce una cadena"));
function invierteCadena (cadena){
	var x = cadena.length;
	var cadenaInvertida = "";
	while (x>=0) {
		cadenaInvertida = cadenaInvertida + cadena.charAt(x);
		x--;
	}
	return cadenaInvertida;
}
function palindromo (cadena){
	if (invierteCadena(cadena)==cadena){
		document.write("Es palindromo");
	}else{
		document.write("No es palindromo");
	}
}