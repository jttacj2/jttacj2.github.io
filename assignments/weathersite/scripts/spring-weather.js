
var requestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=56087,us&appid=88a924d1a4a43bc7077409e502004d08';
    var weatherSRequest = new XMLHttpRequest();
    weatherSRequest.open('GET', requestURL);
    weatherSRequest.responseType = 'json';
    weatherSRequest.send();

  weatherSRequest.onload = function() {

    var currentTemp = 9/5*(weatherSRequest.response.main.temp-273)+32; 
    var cT = currentTemp.toFixed(0);                       
    var highT = 9/5*(weatherSRequest.response.main.temp_max-273)+32;
    var hT = highT.toFixed(0); 
    var lowT = 9/5*(weatherSRequest.response.main.temp_min-273)+32;
    var lT = lowT.toFixed(0); 
    var windS = weatherSRequest.response.wind.speed; 
    var currentDiscrp = weatherSRequest.response.weather[0].description;             
    var icon = weatherSRequest.response.weather[0].icon;

    // debugger;
  document.getElementById('curttemp').innerHTML = "Current Temperature:" + " " + cT + "&#8457;";  
  document.getElementById('heightemp').innerHTML = "High Temperature:" + " " + hT + "&#8457;";
  document.getElementById('lowtemp').innerHTML = "Low Temperature:" + " " + lT + "&#8457;";
  document.getElementById('windsp').innerHTML = "Wind Speed:" + " " + windS + " " + "mph";
  document.getElementById('curentd').innerHTML = "Current Weather Description:" + " " + currentDiscrp;
  document.getElementById('icon').innerHTML = icon;
  }
 