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

"use strict";

let shipsArray = [];

function jsonpRequest(url)
{
    let script = document.createElement('script');
    script.src = url + '?callback=accessData';
    document.body.appendChild(script);
}

jsonpRequest("https://eng1003.monash/api/v1/ships/");

function accessData(shipsData)
{
  for (let i = 0; i < shipsData.ships.length; i++)
  {
    shipsArray.push(shipsData.ships[i]);
  }
}

class ship{

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

  let newShip = new ship(newShipName, newMaxSpeed, newRange, newDesc, newCost, newStatus,newComments);


  if(newShip.isBlank() == false && newShip.isValid() == true)
  {
    shipsArray.push(newShip);
    let option = document.createElement("option");
    option.text = newShip.name;
    document.getElementById("shipSelect").add(option);
  }

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
}


function displayShipData()
{
  let shipsOutput = document.getElementById('shipsOutput');
  let listIndex = shipSelect.selectedIndex - 1;
  shipsOutput.innerHTML = '<b> Ship Name: </b>' + shipsArray[listIndex].name + '<br>';
  shipsOutput.innerHTML += '<b> Max Speed: </b>' + shipsArray[listIndex].maxSpeed + '<br>';
  shipsOutput.innerHTML += '<b> Range: </b>' + shipsArray[listIndex].range + '<br>';
  shipsOutput.innerHTML += '<b> Description: </b>' + shipsArray[listIndex].desc + '<br>';
  shipsOutput.innerHTML += '<b> Cost: </b>' + shipsArray[listIndex].cost + '<br>';
  shipsOutput.innerHTML += '<b> Status: </b>' + shipsArray[listIndex].status + '<br>'
  shipsOutput.innerHTML += '<b> Comments: </b>' + shipsArray[listIndex].comments +'<br>'
}
