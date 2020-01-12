function getColor(){
	var newColor = document.getElementById("mycolor").value;
	document.documentElement.style.setProperty("--back_color",newColor);
}
function beat() {
	if(typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            var count = Number(sessionStorage.clickcount);
			if(count>9){
				count=1;
			}
			else {
            count=count+1;
			
			}
			sessionStorage.clickcount=count;
		}
		else {
			sessionStorage.clickcount=1;
		}
		var beatrate = (1.0/count).toString() + "s";
		document.documentElement.style.setProperty("--heartbeat",beatrate);
        document.getElementById("heart").innerHTML = sessionStorage.clickcount ;
    } 
	else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}