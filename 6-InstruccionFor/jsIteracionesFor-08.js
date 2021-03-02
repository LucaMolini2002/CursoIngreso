function mostrar()
{
	var numero=parseInt(prompt("Ingrese un numero: "));
	while(isNaN(numero)){
		var numero=parseInt(prompt("Eso no es un numero valido. Ingrese un numero: "));
	}
	for(var i=2;i<=numero;i++){
		if(numero%i==0){
			document.write("<br>"+"El numero no es primo.");
			break;
		}
		else{
			document.write("<br>"+"El numero es primo.");
			break;
		}
	}

}//FIN DE LA FUNCIÓN