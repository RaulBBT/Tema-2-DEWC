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
function inviertePalabras(cadena) {
	var y = cadena.length;
	var palabrasInvertidas = "";
	var cadenaReal="";
	while (y>=0) {
		palabrasInvertidas = palabrasInvertidas + cadena.charAt(y);
		if (cadena.charAt(y)==" " || y==0){
			cadenaReal =cadenaReal + " " + invierteCadena(palabrasInvertidas);
			palabrasInvertidas = "";
		}
		y--;
	}
}
function encuentraPalabraMasLarga(cadena){
	var z = 0;
	var palabraMasLarga = "";
	var comparacion = "";
	while (z<=cadena.length) {
		palabraMasLarga = palabraMasLarga + cadena.charAt(z);
		if (cadena.charAt(z)==" " || z==cadena.length){
			if (comparacion.length < palabraMasLarga.length){
				comparacion ="" + palabraMasLarga;
			}
			palabraMasLarga="";
		}
		z++;
	}
}
function filtraPalabrasMasLargas(cadena, i){
	var t = 0;
	var palabraLarga = "";
	var num =0;
	while (t<=cadena.length) {
		palabraLarga = palabraLarga + cadena.charAt(t);
		if (cadena.charAt(t)==" " || t==cadena.length){
			if (i < palabraLarga.length){
				num++;
			}
			palabraLarga="";
		}
		t++;
	}
}
function cadenaBienFormada(cadena){
	document.write(""+cadena.charAt(0).toUpperCase() + cadena.slice(1));
}