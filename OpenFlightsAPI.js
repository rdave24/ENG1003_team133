"use strict";

let x = document.getElementById("mySelect");

function jsonpRequest(url)
{
    let script = document.createElement('script');
    script.src = url + '?callback=accessData';
    document.body.appendChild(script);
}

jsonpRequest("https://eng1003.monash/api/v1/ships/");

let shipsTest = []

function accessData(shipsData)
{
  for (let i = 0; i < shipsData.ships.length; i++)
  {
    shipsTest.push(shipsData.ships[i])
  }
}


class ship{

	constructor(name, maxSpeed, range, desc, cost, status, comments){
    this._name = name;
    this._maxSpeed = maxSpeed
    this._range = range;
    this._desc = desc;
    this._cost = cost;
    this._status = status;
    this._comments = comments;
	}

	get name() {return this._name;}
  get maxSpeed() {return this._maxSpeed}
	get range() {return this._range;}
  get desc() {return this._desc}
	get cost() {return this._cost;}
	get size() {return this._size;}
  get status() {return this._status}
	get comments() {return this._comments;}
}

function newShipTest()
{
  let test = new ship('Boat', 5, 5000, 'tanker', 5, 'avalibale','')
  shipsTest.push(test)
  let option = document.createElement("option");
  option.text = test.name
  x.add(option);
}


function loadShips()
{
  for (let i = 0; i < shipsTest.length; i++)
  {
    let option = document.createElement("option");
    option.text = shipsTest[i].name
    x.add(option);
  }
}
