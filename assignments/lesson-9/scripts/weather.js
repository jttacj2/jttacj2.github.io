


var requestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=55333,us&appid=88a924d1a4a43bc7077409e502004d08';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

  request.onload = function() {
    var currentTemp = 9/5*(request.response.main.temp -273)+32; 
    var cT = currentTemp.toFixed(0);                       
    var highT = 9/5*(request.response.main.temp_max-273)+32;
    var hT = highT.toFixed(0); 
    var lowT = 9/5*(request.response.main.temp_min-273)+32;
    var lT = lowT.toFixed(0); 
    var windS = request.response.wind.speed; 
    var currentDiscrp = request.response.weather[0].description;             
    var icon = request.response.weather[0].icon;

    // debugger;
  document.getElementById('ct').innerHTML = "Current Temperature:" + " " + cT + "&#8457;";  
  document.getElementById('ht').innerHTML = "High Temperature:" + " " + hT + "&#8457;";
  document.getElementById('lt').innerHTML = "Low Temperature:" + " " + lT + "&#8457;";
  document.getElementById('ws').innerHTML = "Wind Speed:" + " " + windS + " " + "mph";
  document.getElementById('cd').innerHTML = "Current Weather Description:" + " " + currentDiscrp;
  document.getElementById('ic').innerHTML = icon;
  }

