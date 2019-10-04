"use strict";

let shipSelect = document.getElementById("shipSelect");

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

  toOutput(){
    
  }
}



function newShipTest()
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
    shipSelect.add(option);
  }
}


function loadShips()
{
  for (let i = 0; i < shipsArray.length; i++)
  {
    let option = document.createElement("option");
    option.text = shipsArray[i].name;
    shipSelect.add(option);
  }
}
