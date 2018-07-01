var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var springfieldRequest = new XMLHttpRequest();
    springfieldRequest.open('GET', requestURL);
    springfieldRequest.responseType = 'json';
    springfieldRequest.send();

springfieldRequest.onload = function() {
    var springfield = springfieldRequest.response.towns[3].name;
    var mottos = springfieldRequest.response.towns[3].motto;
    var yearFound = springfieldRequest.response.towns[3].yearFounded;
    var population = springfieldRequest.response.towns[3].currentPopulation;
    var anuFall = springfieldRequest.response.towns[3].averageRainfall;

    // debugger;
    document.getElementById('springf').innerHTML = springfield;  
    document.getElementById('motto').innerHTML = mottos;
    document.getElementById('yearfall').innerHTML = "Founded in" + " " + yearFound;
    document.getElementById('populat').innerHTML = "Population:" + " " + population;
    document.getElementById('anufall').innerHTML = "Annual Rain Fall:" + " " + anuFall + "&Prime;";
}