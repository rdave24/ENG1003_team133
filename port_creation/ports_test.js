"use strict";

let portsArray = [];
let countriesArray = [];
let portsNameArray = [];

function jsonpRequest(url)
{
    let script = document.createElement('script');
    script.src = url + '?callback=accessPortsData';
    document.body.appendChild(script);
}

class port{

	constructor(country, name, size, type, lng, lat, locPrecision){
		this._country = country;
		this._name = name;
		this._lng = lng;
		this._lat = lat;
		this._size = size;
    this._type = type;
		this._locPresision = locPrecision;
	}

	get country() {return this._country;}
	get name() {return this._name;}
	get long() {return this._lng;}
	get lat() {return this._lat;}
	get size() {return this._size;}
  get type() {return this._type;}
	get locPresision() {return this._locPresision;}

}

jsonpRequest("https://eng1003.monash/api/v1/ports/");


function accessPortsData(portsData)
{
  for (let i = 0; i < portsData.ports.length; i++)
  {
    portsArray.push(portsData.ports[i]);
  }
}

console.log(portsArray)


function getCountries()
{
  let portCountry = ''
  for (let i = 0; i < portsArray.length; i++)
  {
    portCountry = portsArray[i].country;

    let j = 0

    for(j ; j < countriesArray.length;j++)
    {
        if(countriesArray[j] == portCountry){
          break;
        }
    }

    if(j == countriesArray.length)
    {
      countriesArray.push(portCountry);
    }
  }
  countriesArray.sort();
}


function loadPortCountries()
{
  getCountries();

  let portsCountrySelect = document.getElementById("portsCountrySelect");
  for (let i = 0; i < countriesArray.length; i++)
  {
    let option = document.createElement("option");
    option.text = countriesArray[i];
    portsCountrySelect.add(option);
  }
}


function getPorts()
{
  let listIndex = portsCountrySelect.selectedIndex - 1;
  let country = countriesArray[listIndex];
    for (let i = 0; i < portsArray.length; i++)
    {
      if(portsArray[i].country == country)
      {
        portsNameArray.push(portsArray[i]);
      }
    }
}

function loadPortNames()
{
  let portsNameSelect = document.getElementById("portsNameSelect");

  portsNameSelect.options.length = 1
  portsNameArray = [];

  getPorts();

  for (let i = 0; i < portsNameArray.length; i++)
  {
    let option = document.createElement("option");
    option.text = portsNameArray[i].name;
    portsNameSelect.add(option);
  }

  console.log(portsNameArray)

}

function displayPortData()
{
  let portsOutput = document.getElementById('portsOutput');
  let listIndex = portsNameSelect.selectedIndex - 1;
  portsOutput.innerHTML = '<b> Port Country: </b>' + portsNameArray[listIndex].country + '<br>';
  portsOutput.innerHTML += '<b> Port Name: </b>' + portsNameArray[listIndex].name + '<br>';
  portsOutput.innerHTML += '<b> Size: </b>' + portsNameArray[listIndex].size + '<br>';
  portsOutput.innerHTML += '<b> Type: </b>' + portsNameArray[listIndex].type + '<br>';
  portsOutput.innerHTML += '<b> Latitude: </b>' + portsNameArray[listIndex].lat + '<br>';
  portsOutput.innerHTML += '<b> Longitude: </b>' + portsNameArray[listIndex].lng + '<br>'
  portsOutput.innerHTML += '<b> Location Precision: </b>' + portsNameArray[listIndex].locprecision +'<br>'
}

function newPort()
{
  let newPortCountry = document.getElementById('newPortCountry').value;
  let newPortName = document.getElementById('newPortName').value;
  let newLat = document.getElementById('newLat').value;
  let newLng = document.getElementById('newLng').value;
  let newLocPrecision = parseFloat(document.getElementById('newLocPrecision').value);
  let newSize = document.getElementById('newSize').value;
  let newType = document.getElementById('newType').value;

  let newPort = new port(newPortCountry, newPortName, newSize, newType, newLng, newLat, newLocPrecision)

  portsArray.push(newPort);

  portsCountrySelect.options.length = 1

  loadPortCountries()

}


// TODO 1:  Add the Mapbox code
// mapboxgl.accessToken = 'YOUR MAP BOX API KEY';
// creating a new map instance


mapboxgl.accessToken = 'pk.eyJ1IjoicmRhdjAwMTMiLCJhIjoiY2swYTlyZ3QzMDN1ZjNjbzd4b2pkbTVjOCJ9.Kpg0uaDz5l0JE1UsJPBE_Q';
let lng = 145.133957
let lat = -37.912000
let map = new mapboxgl.Map({
container: 'mapArea', // container id
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [lng, lat], // starting position [lng, lat]
zoom: 14 // starting zoom
});


function moveToPort(){
  let listIndex = portsNameSelect.selectedIndex - 1;
  lat = portsNameArray[listIndex].lat
  lng = portsNameArray[listIndex].lng

  map.flyTo({
    center: [lng, lat]
  });
}
