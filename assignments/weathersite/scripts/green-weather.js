
var requestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=38701,us&appid=88a924d1a4a43bc7077409e502004d08';
    var weatherGRequest = new XMLHttpRequest();
    weatherGRequest.open('GET', requestURL);
    weatherGRequest.responseType = 'json';
    weatherGRequest.send();

  weatherGRequest.onload = function() {

    var currentTemp = 9/5*(weatherGRequest.response.main.temp-273)+32; 
    var cT = currentTemp.toFixed(0);                       
    var highT = 9/5*(weatherGRequest.response.main.temp_max-273)+32;
    var hT = highT.toFixed(0); 
    var lowT = 9/5*(weatherGRequest.response.main.temp_min-273)+32;
    var lT = lowT.toFixed(0); 
    var windS = weatherGRequest.response.wind.speed; 
    var currentDiscrp = weatherGRequest.response.weather[0].description;             
    var icon = weatherGRequest.response.weather[0].icon;

    // debugger;
  document.getElementById('curt').innerHTML = "Current Temperature:" + " " + cT + "&#8457;";  
  document.getElementById('heigh').innerHTML = "High Temperature:" + " " + hT + "&#8457;";
  document.getElementById('low').innerHTML = "Low Temperature:" + " " + lT + "&#8457;";
  document.getElementById('winds').innerHTML = "Wind Speed:" + " " + windS + " " + "mph";
  document.getElementById('curend').innerHTML = "Current Weather Description:" + " " + currentDiscrp;
  document.getElementById('ico').innerHTML = icon;
  }