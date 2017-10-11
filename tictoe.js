var value1 = "X";
var x ="";
function myfun(id){
	
	
	x = document.getElementById(id).textContent;
	if(!x){
		if(value1 === "X"){
			document.getElementById(id).innerHTML = value1;
			value1 = "O";
		}
		else{
			document.getElementById(id).innerHTML = value1;
			value1 = "X";
		}
	}
	


	

}