// TODO 1:  Add the Mapbox code
// mapboxgl.accessToken = 'YOUR MAP BOX API KEY';
// creating a new map instance


mapboxgl.accessToken = 'pk.eyJ1IjoicmRhdjAwMTMiLCJhIjoiY2swYTlyZ3QzMDN1ZjNjbzd4b2pkbTVjOCJ9.Kpg0uaDz5l0JE1UsJPBE_Q';
let lng = 0
let lat = 0
var map = new mapboxgl.Map({
container: 'mapArea', // container id
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [lng, lat], // starting position [lng, lat]
zoom: 0 // starting zoom
});



let marker = new mapboxgl.Marker({
draggable: true
})
.setLngLat([0, 0])
.addTo(map);

function onDragEnd() {
var lngLat = marker.getLngLat();
console.log('Longitude: ' + lngLat.lng + 'Latitude: ' + lngLat.lat);
let point = new mapboxgl.Marker({
  "color": "#FF8C00" })
.setLngLat([lngLat.lng, lngLat.lat])
.addTo(map);

marker.setLngLat([0,0])
}




marker.on('dragend', onDragEnd);



// TODO 2: This function get executed when Get Current Location button is clicked.
//         Add code here for geolocation api request. Use 'getCurrentPosition'
//        Remeber to change the function name

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
    map.flyTo({
      center: [lng, lat]
    });
  }
}

function showPosition(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
}

//   TODO 3 :  Add the callback function for the geolocation api.
//    What should happen when the location is available?



//  TODO 4 : This function get executed when Get current Weather button is clicked.
//  Use DarkSky api to request current weather for the current location.
//  Check whether a valid current location coordinates are available before making a api request.
//  If the coordinates are not available display a suitable error message as an alert.
function functionNameButton2()
{

}

//  TODO 5:  callback function for DarkSky API.
//  Extract the weather information and display as a table.(include units)
// javscript code for modifing the HTML table is :
//    let outputTableRef = document.getElementById('table-weather'); // create a reference to outputTableRef
//    let rowHTML="";
//    rowHTML+='<tr><th>'+'property name+'</th><td>'+property value+'</td></tr>';

/*
    jsonpRequest function
    This function is used to generate a querystring for a web service url based on a data payload.
    It will add a script tag to the bottom of the body tag on the HTML page.
 */

let summary = ''
let tempCelcius = 0
let currentTemp = 0
let pressure = 0
let data = {
  callback: 'processWeatherData'
};

let url = 'https://api.darksky.net/forecast/9d68b323868ee0ee6bdb97b5cc9ba0a2/';

let summaryRef = document.getElementById('summary');
let tempRef = document.getElementById('temp');
let pressureRef = document.getElementById('pressure');


function jsonpRequest(url, lat, lng, data)
{
    // Build URL parameters from data object.
    let params = "";
    // For each key in data object...
    for (let key in data)
    {
        if (data.hasOwnProperty(key))
        {
            if (params.length == 0)
            {
                // First parameter starts with '?'
                params += "?";
            }
            else
            {
                // Subsequent parameter separated by '&'
                params += "&";
            }

            let encodedKey = encodeURIComponent(key);
            let encodedValue = encodeURIComponent(data[key]);

            params += encodedKey + "=" + encodedValue;
         }
    }
    let script = document.createElement('script');
    script.src = url + lat + ',' + lng + params;
    document.body.appendChild(script);
}

function processWeatherData(data)
{
  tempCelcius = (data.currently.temperature - 32)*(5/9)

  summaryRef.innerHTML = data.currently.summary;
  tempRef.innerHTML = tempCelcius.toFixed(2) + ' °C';
  pressureRef.innerHTML = data.currently.pressure + ' Pa';
}

function getWeather(){
  jsonpRequest(url, lat, lng, data)
}
