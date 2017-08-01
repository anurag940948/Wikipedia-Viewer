function handle(e){
if(e.keyCode === 13)
{
		e.preventDefault(); //..ensure only enter
	//handel searching
	var xhttp =new XMLHttpRequest();
	xhttp.onreadystatechange=function(){
	if(this.readyState==4 && this.status ==200)
	{
		var response=JSON.parse(xhttp.responseText);
		
		var na1=new Array(5);
		for(var i=0;i<5;i++)
		{
			na1[i]='<a href="'+response[3][i]+'">'+"<button>"+response[1][i]+"</button></a><br />";
		
		
		}
		var n2=na1.toString();
		var n3=n2.replace(/,/g , "");
		
		document.getElementById("d4").innerHTML=n3;
	}
	};
	
	var l=document.getElementById("inp").value; //to access the value from input field
	if(l=="")
	{	document.getElementById("d4").innerHTML="";
	
	}else{
	var t="https://en.wikipedia.org/w/api.php?action=opensearch&format=json&gsrlimit=5&search="+l+"&format=json&origin=*";
	xhttp.open("GET",t,true);
	xhttp.send();
	}
}
}


function data()
{
	var xhttp =new XMLHttpRequest();
	xhttp.onreadystatechange=function(){
	if(this.readyState==4 && this.status ==200)
	{
		var response=JSON.parse(xhttp.responseText);

	}
	};
	var t="https://en.wikipedia.org/wiki/Special:Random";
	xhttp.open("GET",t,true);
	xhttp.send();
	
}