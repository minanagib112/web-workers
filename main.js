
var button=document.getElementById("button");

var operation=function(){
	var worker=new Worker("worker.js");
	var num=Number(document.getElementById("fact").value);

	worker.postMessage(num);
	worker.onmessage=function(e){
		
		document.getElementById("output").innerHTML=e.data;
	};
	
};

button.addEventListener("click", operation);