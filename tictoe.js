var value1 = "X";
var x ="";
function myfun(id){
	
	
	x = document.getElementById(id).textContent;
	if(!x){
		if(value1 === "X"){
			document.getElementById("turn").innerHTML = "O's turn";
			document.getElementById(id).innerHTML = value1;
			check();
			value1 = "O";
		}
		else{
			document.getElementById("turn").innerHTML = "X's turn";
			document.getElementById(id).innerHTML = value1;
			check();
			value1 = "X";
		}
	}
	
}

function replay(){
	var i=1;


	for(i=1;i<=9;i++){
		document.getElementById("turn").innerHTML="";
		document.getElementById("cell"+i).innerHTML = "";
	}
}

function check(){
	var i1 = document.getElementById("cell1").textContent;
	var i2 = document.getElementById("cell2").textContent;
	var i3 = document.getElementById("cell3").textContent;
	var i4 = document.getElementById("cell4").textContent;
	var i5 = document.getElementById("cell5").textContent;
	var i6 = document.getElementById("cell6").textContent;
	var i7 = document.getElementById("cell7").textContent;
	var i8 = document.getElementById("cell8").textContent;
	var i9 = document.getElementById("cell9").textContent;

// 123
// 456
// 789
// 147
// 258
// 369
// 159
// 357


	if(i1==i2 && i2==i3 && i1.length != 0) {
		alert(i1+" has won");
		replay();
	}else  if(i4==i5&&i5==i6 && i4.length != 0){
		alert(i4+" has won");
		replay();
	}else if(i7==i8&&i8==i9 && i7.length != 0){
		alert(i7+" has won");
		replay();
	}else if(i1==i4&&i4==i7 && i1.length != 0){
		alert(i1+" has won");
		replay();
	}else if(i2==i5&&i5==i8 && i2.length != 0){
		alert(i2+" has won");
		replay();
	}else if(i3==i6&&i6==i9 && i3.length != 0){
		alert(i3+" has won");
		replay();
	}else if(i1==i5&&i5==i9 && i1.length != 0){
		alert(i1+" has won");
		replay();
	}else if(i3==i5&&i5==i7 && i3.length != 0){
		alert(i3+" has won");
		replay();
	}else if(i1.length != 0 && i2.length!= 0 && i3.length!=0 && i4.length!= 0 && i5.length!= 0 && i6.length!= 0 && i7.length!=0 && i8.length!=0 && i9.length!=0){
		alert("draw hua");
		replay();
 }

}



