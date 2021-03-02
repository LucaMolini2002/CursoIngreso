function mostrar()
{
	var repetir=parseInt(prompt("Ingrese una cantidad de repeticiones: "));
	for(var i=1; i<=repetir; i=i+1){
		if(i==10){
			break;
		}
		alert(i);
	}

}