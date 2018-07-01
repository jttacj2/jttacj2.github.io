var apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=88a924d1a4a43bc7077409e502004d08';
var async = true;
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURL, async);
    
    weatherRequest.send();


var units = {"Imperial": "Fahrenheit"};

weatherRequest.onload =  function () {
  let weatherData = JSON.parse(weatherRequest.responseText);
  console.log(weatherData);
}