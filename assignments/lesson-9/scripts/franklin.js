 var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

request.onload = function() {
    var franklin = request.response.towns[0].name;
    var motto = request.response.towns[0].motto;
    var yFounded = request.response.towns[0].yearFounded;
    var popul = request.response.towns[0].currentPopulation;
    var rFall = request.response.towns[0].averageRainfall;

    // debugger;
    document.getElementById('frank').innerHTML = franklin;  
    document.getElementById('mot').innerHTML = motto;
    document.getElementById('yf').innerHTML = "Founded in" + " " + yFounded;
    document.getElementById('pop').innerHTML = "Population:" + " " + popul;
    document.getElementById('afall').innerHTML = "Annual Rain Fall:" + " " + rFall + "&Prime;";
}