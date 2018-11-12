if ("geolocation" in navigator) {
  document.write("La geolocalizacion esta disponible");
  setInterval(navigator.geolocation.getCurrentPosition(function(position) {
	document.write("<p>Latitud: "+position.coords.latitude+"</p>");
	document.write("<p>Longitud: "+position.coords.longitude+"</p>");
	}), 1000);
} else {
  document.write("La geolocalizacion no esta disponible");
}
