
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var puestoTrabajo;
	var sueldo;
	var respuesta;
	var acumuladorSueldoProgramadores=0;
	var contadorSueldoProgramadores=0;
	var acumuladorSueldoQa=0;
	var contadorSueldoQa=0;
	var acumuladorSueldoAnalista=0;
	var contadorSueldoAnalista=0;
	var promedioSueldoProgramador;
	var promedioSueldoQa;
	var promedioSueldoAnalista;
	var flagSueldoMayor=0;
	var sueldoMax;
	var sexoSueldoMax;
	var nombreSueldoFemenino;
	var contadorProgramadoresNoBinarios=0;

	do{
		nombre=prompt("Ingrese nombre: ");
		while(!isNaN(nombre)){
			nombre=prompt("Error. Ingrese nombre: ");
		}
		edad=parseInt(prompt("Ingrese edad: "));
		while(isNaN(edad)||edad<0){
			edad=parseInt(prompt("Error. Ingrese edad: "));
		}
		sexo=prompt("Ingrese sexo: ");
		while(!isNaN(sexo)||sexo!="femenino"&&sexo!="masculino"&&sexo!="no binario"){
			sexo=prompt("Error. Ingrese sexo: ");
		}
		puestoTrabajo=prompt("Ingrese puesto de trabajo: ");
		while(!isNaN(puestoTrabajo)||puestoTrabajo!="programador"&&puestoTrabajo!="analista"&&puestoTrabajo!="Qa"){
			puestoTrabajo=prompt("Error. Ingrese puesto de trabajo: ");
		}
		sueldo=parseInt(prompt("Ingrese sueldo: "));
		while(isNaN(sueldo)||sueldo<15000||sueldo>70000){
			sueldo=parseInt(prompt("Error. Ingrese sueldo: "));
		}//Datos Ingresados

		switch(puestoTrabajo){
			case "programador":
				acumuladorSueldoProgramadores=acumuladorSueldoProgramadores+sueldo;
				contadorSueldoProgramadores++;
				if(sexo=="no binario"&&sueldo<55000&&sueldo>20000){
					contadorProgramadoresNoBinarios++;
				}
				
			case "Qa":
				acumuladorSueldoQa=acumuladorSueldoQa+sueldo;
				contadorSueldoQa++;
				
			case "analista":
				acumuladorSueldoAnalista=acumuladorSueldoAnalista+sueldo;
				contadorSueldoAnalista++;
		}

		if(flagSueldoMayor==0){
			sueldoMax=sueldo;
			sexoSueldoMax=sexo;
			flagSueldoMayor=1;
		}
		else{
			if(sueldoMax<sueldo){
				sueldoMax=sueldo;
				sexoSueldoMax=sexo;
				
			}
		}



		respuesta=confirm("Quiere seguir ingresando datos?");
	}
	while(respuesta==true);

	if(sexoSueldoMax=="femenino"){
		nombreSueldoFemenino=nombre;
	}

	promedioSueldoProgramador=acumuladorSueldoProgramadores/contadorSueldoProgramadores;
	promedioSueldoQa=acumuladorSueldoQa/contadorSueldoQa;
	promedioSueldoAnalista=acumuladorSueldoAnalista/contadorSueldoAnalista;

	if(contadorSueldoProgramadores==0){
		document.write("<br>"+"No se ingreso ningun sueldo de programador.")
	}
	else{
		document.write("<br>"+"El promedio de sueldo de programadores es: "+promedioSueldoProgramador)
	}
	if(contadorSueldoQa==0){
		document.write("<br>"+"No se ingreso ningun sueldo de Qa.")
	}
	else{
		document.write("<br>"+"El promedio de sueldo de Qa es: "+promedioSueldoQa)
	}
	if(contadorSueldoAnalista==0){
		document.write("<br>"+"No se ingreso ningun sueldo de analista.")
	}
	else{
		document.write("<br>"+"El promedio de sueldo de analistas es: "+promedioSueldoAnalista)
	}
	if(flagSueldoMayor==0){
		document.write("<br>"+"No hay sexo con mayor sueldo.");
	}
	else{
		document.write("<br>"+"El sexo con mayor sueldo es: "+sexoSueldoMax)
	}
	
	document.write("<br>"+"El nombre de la mujer con mayor sueldo es: "+nombreSueldoFemenino);
	
	if(contadorProgramadoresNoBinarios==0){
		document.write("<br>"+"No hay programadores no binarios que cobren entre 20000 y 55000. ");
	}
	else{
		document.write("<br>"+"La cantidad de programadores no binarios que cobran entre 20000 y 55000 son: "+contadorProgramadoresNoBinarios);
	}
}
