var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var greenRequest = new XMLHttpRequest();
    greenRequest.open('GET', requestURL);
    greenRequest.responseType = 'json';
    greenRequest.send();

greenRequest.onload = function() {
    var greenville = greenRequest.response.towns[1].name;
    var mott = greenRequest.response.towns[1].motto;
    var yearF = greenRequest.response.towns[1].yearFounded;
    var popula = greenRequest.response.towns[1].currentPopulation;
    var aFall = greenRequest.response.towns[1].averageRainfall;

    // debugger;
    document.getElementById('green').innerHTML = greenville;  
    document.getElementById('mott').innerHTML = mott;
    document.getElementById('yearf').innerHTML = "Founded in" + " " + yearF;
    document.getElementById('popul').innerHTML = "Population:" + " " + popula;
    document.getElementById('anfall').innerHTML = "Annual Rain Fall:" + " " + aFall + "&Prime;";
}