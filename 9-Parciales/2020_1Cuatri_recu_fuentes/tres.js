function mostrar()
{
	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var estCivil;
	var temperaturaCorporal;
	var temperaturaMax=0;
	var nacionalidadPersonaTemperatura;
	var cantMayoresEdadSolteros=0;
	var cantMujeresSolOViu=0;
	var personasTerceraEdadTemp=0;
	var promedioEdadMujeresCasadas=0;
	var edadMujeresCasadas=0;
	var cantMujeresCasadas=0;

	do{
		nombre=prompt("Ingrese su nombre: ");
		nacionalidad=prompt("Ingrese su nacionalidad:");
		edad=parseInt(prompt("Ingrese su edad: "));
		sexo=prompt("Ingrese su sexo: (masculino o femenino)");
		while(sexo!="masculino"&&sexo!="femenino"){
			sexo=prompt("Error, Ingrese su sexo nuevamente: (masculino o femenino)");
		}
		estCivil=prompt('Ingrese su estado civil: ("soltero", "casado" o "viudo")');
		while(estCivil!="soltero"&&estCivil!="casado"&&estCivil!="viudo"){
			estCivil=prompt('Error, Ingrese su estado civil nuevamente: ("soltero", "casado" o "viudo")');
		}
		temperaturaCorporal=parseInt(prompt("Ingrese su temperatura corporal: "));

		if(edad>17 && estCivil=="soltero"){
			cantMayoresEdadSolteros++;
		}
		if(sexo=="femenino"&&estCivil=="soltero"||estCivil=="viudo"){
			cantMujeresSolOViu++;
		}
		if(edad>59&&temperaturaCorporal>38){
			personasTerceraEdadTemp++;
		}
		if(sexo=="femenino"&&estCivil=="casado"){
			edadMujeresCasadas=+edad;
			cantMujeresCasadas++;
		}
		if(temperaturaCorporal>temperaturaMax){
			temperaturaMax=temperaturaCorporal;
			nacionalidadPersonaTemperatura=nacionalidad;
		}

		respuesta=confirm("Quiere ingresar mas datos?");
	}
	while(respuesta==true);
	
	promedioEdadMujeresCasadas=edadMujeresCasadas/cantMujeresCasadas;

	document.write("<br>"+"La nacionalidad de la persona con mas temperatura es: "+nacionalidadPersonaTemperatura);	
	document.write("<br>"+cantMayoresEdadSolteros+" mayores de edad estan solteros.");
	document.write("<br>"+"La cantidad de mujeres solteras o viudas es: "+cantMujeresSolOViu);
	document.write("<br>"+"La cantidad de personas de tercera edad con mas de 38 de temperatura es: "+personasTerceraEdadTemp);
	document.write("<br>"+"El promedio de edad entre las mujeres casadas es: "+promedioEdadMujeresCasadas);
}
