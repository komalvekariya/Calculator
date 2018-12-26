
function clearscr(val) {
	 document.getElementById("textId").value=val;
}



function thisValue(val)
{
	document.getElementById("textId").value+=val;
}

 
function equalsto()
{
	document.getElementById('textId').value = eval(document.getElementById('textId').value);
}


function BackSpace(){

	var str= document.getElementById('textId').value.slice(0,-1);
	document.getElementById('textId').value=str;
}
 
   
 