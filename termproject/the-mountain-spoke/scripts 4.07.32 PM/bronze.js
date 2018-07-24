var requestURL = 'scripts/pricing-info.json';
    var bronzeRequest = new XMLHttpRequest();
    bronzeRequest.open('GET', requestURL);
    bronzeRequest.responseType = 'json';
    bronzeRequest.send();
debugger
    bronzeRequest.onload = function() {
    
    var bronzeCost = bronzeRequest.response.service[1].cost;

   
   	document.getElementById('bronze-cost').innerHTML = bronzeCost;
}

