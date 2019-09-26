mapboxgl.accessToken = "pk.eyJ1IjoidmVydGlqZSIsImEiOiJjazA3cHNsYXUwMzVrM2xxbnpxejBiaDNxIn0.JE3H0cRRmgby4jXQ5-uf2A";
let mapArea = new  mapboxgl.Map({
	container: 'mapArea',
	center: [144.9648731,-37.8182711],
	zoom: 2,
	style: 'mapbox://styles/vertije/ck0rins1c34vo1cmo4kpimq98/draft'
});

function popUp() {
  document.getElementById("popup").style.display = "block";
}

function popUpClose() {
  document.getElementById("popup").style.display = "none";
}
