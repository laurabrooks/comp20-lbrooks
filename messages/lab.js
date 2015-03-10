//JavaScript for messages lab

function parse(){
	request = new XMLHttpRequest();
	request.open("GET", "data.json", true);
	request.onreadystatechange = parseData;
	request.send();
}

function parseData(){
	if (request.readyState == 4 && request.status == 200){
		divMessages = document.getElementById("messages");
		converted = JSON.parse(request.responseText);
		for (i=0; i<converted.length; i++){
			toAdd = "<p>" + (converted[i]["username"]) + ": " + (converted[i]["content"] + "</p>" ;
			divMessages.innerHTML += toAdd;
		}
	}
	else if (request.readyState = 4 && request.status != 200){
		alert("Page did not load");
	}
}
