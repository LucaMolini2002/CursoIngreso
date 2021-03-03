function mostrar()
{
	var contadorDivisores=0;
	var numero=parseInt(prompt("Ingrese un numero: "));
	while(isNaN(numero)){
		var numero=parseInt(prompt("Eso no es un numero valido. Ingrese un numero: "));
	}
	for(var i=2;i<=numero;i++){
		if(numero%i==0){
			contadorDivisores++;
		}
		
	}
	if(contadorDivisores==2){
		document.write("<br>"+"El numero es primo");
	}else{
		document.write("<br>"+"El no numero es primo");
	}

}//FIN DE LA FUNCIÓN