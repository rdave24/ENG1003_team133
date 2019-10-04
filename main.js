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
function pastRoutesPopUpOpen() {
  document.getElementById("pastRoutes").style.display = "block";
}
function pastRoutesPopUpClose() {
  document.getElementById("pastRoutes").style.display = "none";
}
function viewPortsPopUpOpen() {
  document.getElementById("viewPorts").style.display = "block";
}
function viewPortsPopUpClose() {
  document.getElementById("viewPorts").style.display = "none";
}
function weatherPopUpOpen() {
  document.getElementById("weather").style.display = "block";
}
function weatherPopUpClose() {
  document.getElementById("weather").style.display = "none";
}
function deletePortPopUpOpen() {
  document.getElementById("deletePort").style.display = "block";
}
function deletePortPopUpClose() {
  document.getElementById("deletePort").style.display = "none";
}
function addPortPopUpOpen() {
  document.getElementById("addPort").style.display = "block";
}
function addPortPopUpClose() {
  document.getElementById("addPort").style.display = "none";
}
function viewShipsPopUpOpen() {
  document.getElementById("viewShips").style.display = "block";
}
function viewShipsPopUpClose() {
  document.getElementById("viewShips").style.display = "none";
}
function addShipPopUpOpen() {
  document.getElementById("addShip").style.display = "block";
}
function addShipPopUpClose() {
  document.getElementById("addShip").style.display = "none";
}
function deleteShipPopUpOpen() {
  document.getElementById("deleteShip").style.display = "block";
}
function deleteShipPopUpClose() {
  document.getElementById("deleteShip").style.display = "none";
}
function createRoute1PopUpOpen() {
  document.getElementById("createRoute1").style.display = "block";
}
function createRoute1PopUpClose() {
  document.getElementById("createRoute1").style.display = "none";
}
function createRoute2PopUpOpen() {
  document.getElementById("createRoute2").style.display = "block";
}
function createRoute2PopUpClose() {
  document.getElementById("createRoute2").style.display = "none";
}
function createRoute3PopUpOpen() {
  document.getElementById("createRoute3").style.display = "block";
}
function createRoute3PopUpClose() {
  document.getElementById("createRoute3").style.display = "none";
}
function createRoute4PopUpOpen() {
  document.getElementById("createRoute4").style.display = "block";
}
function createRoute4PopUpClose() {
  document.getElementById("createRoute4").style.display = "none";
}
