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
	document.getElementById("weatherBorder").style.display = "block";
}
function weatherPopUpClose() {
  document.getElementById("weather").style.display = "none";
	document.getElementById("weatherBorder").style.display = "none";
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

"use strict";

let shipsArray = [];
let newShipsArray = [];

function jsonpRequest(url)
{
    let script = document.createElement('script');
    script.src = url + '?callback=accessData';
    document.body.appendChild(script);
}

function accessData(shipsData)
{
  for (let i = 0; i < shipsData.ships.length; i++)
  {
    shipsArray.push(shipsData.ships[i]);
  }
}

class Ship{

	constructor(name, maxSpeed, range, desc, cost, status, comments){
    this._name = name;
    this._maxSpeed = maxSpeed;
    this._range = range;
    this._desc = desc;
    this._cost = cost;
    this._status = status;
    this._comments = comments;
	}

	get name() {return this._name;}
  get maxSpeed() {return this._maxSpeed;}
	get range() {return this._range;}
  get desc() {return this._desc;}
	get cost() {return this._cost;}
	get size() {return this._size;}
  get status() {return this._status;}
	get comments() {return this._comments;}


  isValid(){
    if (typeof(this._name) == 'string' && typeof(this._maxSpeed) == 'number' && typeof(this._range) == 'number' && typeof(this.desc) == 'string' && typeof this.cost == 'number' && typeof(this._status) == 'string'){
      return(true);
	}
	  else{
		  return(false);
	  }
  }

	isBlank(){
		if(this._name == '' || this._maxSped == '' || this._range == '' || this._desc == '' || this._cost == '' || this._status == ''){
			return(true);
		   }
		else{
			return(false);
		}
	}

	fromData(data){
		this._name = data._name;
		this._maxSpeed = data._maxSpeed;
		this._range = data._range;
		this._desc = data._desc;
		this._cost = data._cost;
		this._status = data._status;
		this._comments = data._comments;
	}
}

function newShip()
{
  let newShipName = document.getElementById('newShipName').value;
  let newMaxSpeed = parseFloat(document.getElementById('newMaxSpeed').value);
  let newRange = parseFloat(document.getElementById('newRange').value);
  let newDesc = document.getElementById('newDesc').value;
  let newCost = parseFloat(document.getElementById('newCost').value);
  let newStatus = document.getElementById('newStatus').value;
  let newComments = document.getElementById('newComments').value;

  let newShip = new Ship(newShipName, newMaxSpeed, newRange, newDesc, newCost, newStatus,newComments);


  if(newShip.isBlank() == false && newShip.isValid() == true)
  {
    newShipsArray.push(newShip);
    let option = document.createElement("option");
    option.text = newShip.name;
    document.getElementById("shipSelect").add(option);
  }
	localStorage.setItem("newShipsArray", JSON.stringify(newShipsArray));
	addShipPopUpClose()
}

function loadShips()
{
  let shipSelect = document.getElementById("shipSelect");
  for (let i = 0; i < shipsArray.length; i++)
  {
    let option = document.createElement("option");
    option.text = shipsArray[i].name;
    shipSelect.add(option);
  }
	for (let i = 0; i < newShipsArray.length; i++)
  {
    let option = document.createElement("option");
    option.text = newShipsArray[i].name;
    shipSelect.add(option);
  }
}

function displayShipData()
{
  let shipsOutput = document.getElementById('shipsOutput');
  let listIndex = shipSelect.selectedIndex - 1;
	if (listIndex<shipsArray.length){
  	shipsOutput.innerHTML = '<b> Ship Name: </b>' + shipsArray[listIndex].name + '<br>';
  	shipsOutput.innerHTML += '<b> Max Speed: </b>' + shipsArray[listIndex].maxSpeed + '<br>';
  	shipsOutput.innerHTML += '<b> Range: </b>' + shipsArray[listIndex].range + '<br>';
  	shipsOutput.innerHTML += '<b> Description: </b>' + shipsArray[listIndex].desc + '<br>';
  	shipsOutput.innerHTML += '<b> Cost: </b>' + shipsArray[listIndex].cost + '<br>';
  	shipsOutput.innerHTML += '<b> Status: </b>' + shipsArray[listIndex].status + '<br>'
  	shipsOutput.innerHTML += '<b> Comments: </b>' + shipsArray[listIndex].comments +'<br>'
	}
	let listIndexNew = listIndex - shipsArray.length;
	if (listIndex>=shipsArray.length){
		shipsOutput.innerHTML = '<b> Ship Name: </b>' + newShipsArray[listIndexNew].name + '<br>';
	  shipsOutput.innerHTML += '<b> Max Speed: </b>' + newShipsArray[listIndexNew].maxSpeed + '<br>';
	  shipsOutput.innerHTML += '<b> Range: </b>' + newShipsArray[listIndexNew].range + '<br>';
	  shipsOutput.innerHTML += '<b> Description: </b>' + newShipsArray[listIndexNew].desc + '<br>';
	  shipsOutput.innerHTML += '<b> Cost: </b>' + newShipsArray[listIndexNew].cost + '<br>';
	  shipsOutput.innerHTML += '<b> Status: </b>' + newShipsArray[listIndexNew].status + '<br>'
	  shipsOutput.innerHTML += '<b> Comments: </b>' + newShipsArray[listIndexNew].comments +'<br>'
	}
}

jsonpRequest("https://eng1003.monash/api/v1/ships/");
let localShips = JSON.parse(localStorage.getItem("newShipsArray"));
for (i = 0; i < localShips.length; i++){
	let newShip = localShips[i];
	let newShipClass = new Ship;
	newShipClass.fromData(newShip);
	newShipsArray.push(newShipClass);
}
