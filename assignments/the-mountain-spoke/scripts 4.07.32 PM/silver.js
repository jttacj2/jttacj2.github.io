var requestURL = 'scripts/pricing-info.json';
    var siliverRequest = new XMLHttpRequest();
    siliverRequest.open('GET', requestURL);
    siliverRequest.responseType = 'json';
    siliverRequest.send();
debugger
    siliverRequest.onload = function() {
    
    var silverCost = siliverRequest.response.service[1].cost;

   
   	document.getElementById('silver-cost').innerHTML = silverCost;
}

