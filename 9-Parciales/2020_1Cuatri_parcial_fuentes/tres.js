function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estCivil;
	var temperaturaCorporal;
	var respuesta;
	var flagMasTemp=0;
	var MaxTemperatura;
	var personaMasTemp;
	var contadorViudos=0;
	var contadorHombresSoloViu=0;
	var personasTerceraEdad=0;
	var acumuladorEdadHombresSolteros=0;
	var contadorHombresSolteros=0;
	var promedioEdadHombresSoteros;

	do{
		nombre=prompt("Ingrese nombre: ");
		while(!isNaN(nombre)){
			nombre=prompt("Error. Ingrese nombre nuevamente: ");
		}
		edad=parseInt(prompt("Ingrese edad: "));
		while(isNaN(edad)||edad<0){
			edad=parseInt(prompt("Error. Ingrese edad nuevamente: "));
		}
		sexo=prompt("Ingrese sexo: ");
		while(!isNaN(sexo)&&sexo!="femenino"&&sexo!="masculino"){
			sexo=prompt("Error. Ingrese sexo nuevamente: ");
		}
		estCivil=prompt("Ingrese estado civil: ");
		while(!isNaN(estCivil)&&estCivil!="soltero"&&estCivil!="casado"&&estCivil!="viudo"){
			estCivil=prompt("Error. Ingrese estado civil nuevamente: ");
		}
		temperaturaCorporal=parseInt(prompt("Ingrese temperatura corporal: "));
		while(isNaN(temperaturaCorporal)||temperaturaCorporal>50||temperaturaCorporal<20){
			temperaturaCorporal=parseInt(prompt("Error. Ingrese temperatura corporal nuevamente: "));
		}//final toma de datos
		
		if(flagMasTemp==0){
			MaxTemperatura=temperaturaCorporal;
			personaMasTemp=nombre;
			flagMasTemp=1;
		}else{	
			if(MaxTemperatura<temperaturaCorporal){
				MaxTemperatura=temperaturaCorporal;
				personaMasTemp=nombre;
			}
		}
		if(edad>17&&estCivil=="viudo"){
			contadorViudos++;
		}
		if(sexo=="masculino"&&estCivil=="soltero"||estCivil=="viudo"){
			contadorHombresSoloViu++;
		}
		if(edad>60&&temperaturaCorporal>38){
			personasTerceraEdad++;
		}
		switch(estCivil){
			case "soltero":
				if(sexo=="masculino"){
					contadorHombresSoloViu++;
					acumuladorEdadHombresSolteros=acumuladorEdadHombresSolteros+edad;
					contadorHombresSolteros++;
				}
				break;
			case "viudo":
				if(sexo=="masculino"){
					contadorHombresSoloViu++;
				}
				break;	

		}

		respuesta=confirm("Quiere seguir ingresando datos?")
	}
	while(respuesta==true);

	promedioEdadHombresSoteros=acumuladorEdadHombresSolteros/contadorHombresSolteros;

	document.write("<br>"+"El nombre de la persona con mayor temperatura es: "+personaMasTemp);
	if(contadorViudos==0){
		document.write("<br>"+"no hay mayores viudos ");
	}else{
		document.write("<br>"+"Cantidad mayores de edad viudos: "+contadorViudos);
	}	
	document.write("<br>"+"Cantidad hombres solteros o viudos: "+contadorHombresSoloViu);
	document.write("<br>"+"Cantidad personas de tercera edad con mas de 38 de temperatura corporal: "+personasTerceraEdad);
	document.write("<br>"+"promedio de edad hombres solteros: "+promedioEdadHombresSoteros);
}
