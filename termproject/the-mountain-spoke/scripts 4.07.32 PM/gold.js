var requestURL = 'scripts/pricing-info.json';
    var goldRequest = new XMLHttpRequest();
    goldRequest.open('GET', requestURL);
    goldRequest.responseType = 'json';
    goldRequest.send();
debugger
    goldRequest.onload = function() {
    
    var goldCost = goldRequest.response.service[1].cost;

   
   	document.getElementById('silver-cost').innerHTML = goldCost;
}

