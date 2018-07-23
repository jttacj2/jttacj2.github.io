var request = 'application/json';
    var bronzeRequest = new XMLHttpRequest();
    bronzeRequest.open('GET', requestURL);
    bronzeRequest.responseType = 'json';
    bronzeRequest.send();

    bronzeRequest.onload = function() {
    var name = bronzeRequest.response.service[1].name;
    var bronze0 = bronzeRequest.response.service[1].includes[0];
    var bronze1 = bronzeRequest.response.service[1].includes[1];
    var bronze2 = bronzeRequest.response.service[1].includes[2];
    var bronze3 = bronzeRequest.response.service[1].includes[3];
    var bronze4 = bronzeRequest.response.service[1].includes[4];
    var bronze5 = bronzeRequest.response.service[1].includes[5];
    var bronzeCost = bronzeRequest.response.service[1].cost;

    // debugger;
    document.getElementById('bronze').innerHTML = name;  
    document.getElementById('bronze-0').innerHTML = bronze0;
   	document.getElementById('bronze-1').innerHTML = bronze1;
   	document.getElementById('bronze-2').innerHTML = bronze2;
   	document.getElementById('bronze-3').innerHTML = bronze3;
   	document.getElementById('bronze-4').innerHTML = bronze4;
   	document.getElementById('bronze-5').innerHTML = bronze5;
   	document.getElementById('bronze-cost').innerHTML = bronzeCost;
}