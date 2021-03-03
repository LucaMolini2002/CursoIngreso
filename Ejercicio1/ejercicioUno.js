/**
 * Aqui dentro probar el codigo que quieran
 */
function probarEjercicio(){
	var mascota;
	var tipoPelaje;
	var edadMascota;
	var nombreMascota;
	var razaMascota;
	var pesoMascota;
	var estadoClinico;
	var temperaturaCorporal;
	var respuesta;
	var perroMasPesado=0;
	var mascotasEnfermas=0;
	var porcentajeMascotasEnfermas=0;
	var totalMascotas=0;
	var nombreUltimaMascota="ninguno";
	var temperaturaMinima=Number.MAX_SAFE_INTEGER;
	var animalSinPeloTempMinima;
	var totalPerrosyGatos=0;
	var porcentajePerrosyGatos=0;
	var temperaturaGato=0;
	var temperaturaPerro=0;
	var temperaturaOtraCosa=0;
	var promedioTemperatura;
	var cantEnfermos=0;
	var cantInternados=0;
	var cantAdopcion=0;
	var estClinicoMenosMascotas;
	var acumuladorPeso=0;
	var gatoMasLiviano=Number.MAX_SAFE_INTEGER;
	var nombreGatoLiviano="ninguno";
	var razaGatoLiviano="ninguna";

	do{
		mascota=prompt('Ingrese si su mascota es un "gato", un "perro" u "otra cosa"');
		while(mascota!="gato"&&mascota!="perro"&&mascota!="otra cosa"){
			mascota=prompt('Error. Ingrese nuevamente si su mascota es un "gato", un "perro" u "otra cosa"');
		}
		tipoPelaje=prompt("Ingrese tipo de pelaje de su mascota: (corto, largo , sin pelo)");
		while(tipoPelaje!="corto"&&tipoPelaje!="largo"&&tipoPelaje!="sin pelo"){
			tipoPelaje=prompt("Error. Ingrese nuevamente tipo de pelaje de su mascota: (corto, largo , sin pelo)");
		}
		edadMascota=parseInt(prompt("Ingrese la edad de su mascota: "));
		while(edadMascota<0||edadMascota>20){
			edadMascota=parseInt(prompt("Error. Ingrese nuevamente la edad de su mascota: "));
		}
		nombreMascota=prompt("Ingrese el nombre de su mascota: ");
		while(!isNaN(nombreMascota)){
			nombreMascota=prompt("Error. Ingrese nuevamente el nombre de su mascota: ");
		}
		razaMascota=prompt("Ingrese la raza de su mascota: ");
		while(!isNaN(razaMascota)){
			razaMascota=prompt("Error. Ingrese nuevamente la raza de su mascota: ");	
		}
		pesoMascota=parseInt(prompt("Ingrese el peso de su mascota: "))
		while(pesoMascota<0){
			pesoMascota=parseInt(prompt("Error. Ingrese nuevamente el peso de su mascota: "));
		}
		estadoClinico=prompt("Ingrese el estado clinico de su mascota: (enfermo,internado o adopcion)");
		while(estadoClinico!="enfermo"&&estadoClinico!="internado"&&estadoClinico!="adopcion"){
			estadoClinico=prompt("Error. Ingrese nuevamente el estado clinico de su mascota: (enfermo,internado o adopcion)");
		}
		temperaturaCorporal=parseInt(prompt("Ingrese la temperatura corporal de su mascota: "));
		while(temperaturaCorporal<0||temperaturaCorporal>30){
			temperaturaCorporal=parseInt(prompt("Error. Ingrese nuevamente la temperatura corporal de su mascota: "));
		}
		acumuladorPeso=acumuladorPeso+pesoMascota;
		switch(mascota){
			case "gato":
				temperaturaGato=temperaturaCorporal+temperaturaCorporal;
				break;
			case "perro":
				temperaturaPerro=temperaturaCorporal+temperaturaCorporal;
				break;
			case "otra cosa":
				temperaturaOtraCosa=temperaturaCorporal+temperaturaCorporal;
				break;		
		}
		switch(estadoClinico){
			case "enfermo":
				cantEnfermos++;
				break;
			case "internado":
				cantInternados++;
				break;
			case "adopcion":
				cantAdopcion++;		
		}

		if(mascota=="perro"){
			if(pesoMascota>perroMasPesado){
				perroMasPesado=pesoMascota;
			}
		}
		totalMascotas++;
		if(estadoClinico=="enfermo"){
			mascotasEnfermas++;
		}
		if(tipoPelaje=="sin pelo"&&temperaturaCorporal<temperaturaMinima){
			temperaturaMinima=temperaturaCorporal;
			animalSinPeloTempMinima=mascota;
			
		}
		if(mascota=="gato"||mascota=="perro"){
			totalPerrosyGatos++;
		}
		if(tipoPelaje=="sin pelo"&&mascota=="gato"&&pesoMascota<gatoMasLiviano){
			gatoMasLiviano=pesoMascota;
			nombreGatoLiviano=nombreMascota;
			razaGatoLiviano=razaMascota;
		}

		respuesta=confirm("Quiere introducir otra mascota?");
	}
	while(respuesta==true);



	porcentajeMascotasEnfermas=(mascotasEnfermas/totalMascotas)*100;
	if(mascota=="otra cosa"){
		nombreUltimaMascota=nombreMascota;
	}
	porcentajePerrosyGatos=(totalPerrosyGatos/totalMascotas)*100;
	if(temperaturaGato>temperaturaPerro&&temperaturaGato>temperaturaOtraCosa){
		promedioTemperatura="Gato"
	}
	else if(temperaturaPerro>temperaturaGato&&temperaturaPerro>temperaturaOtraCosa){
		promedioTemperatura="Perro";
	}
	else if(temperaturaOtraCosa>temperaturaGato&&temperaturaOtraCosa>temperaturaPerro){
		promedioTemperatura="OtraCosa";
	}
	else{
		promedioTemperatura="todos";
	}
	if(cantEnfermos<cantInternados&&cantEnfermos<cantAdopcion){
		estClinicoMenosMascotas="enfermo";
	}
	else if(cantInternados<cantEnfermos&&cantInternados<cantAdopcion){
		estClinicoMenosMascotas="internado";
	}
	else if(cantAdopcion<cantEnfermos&&cantAdopcion<cantInternados){
		estClinicoMenosMascotas="adopcion";
	}
	else{
		estClinicoMenosMascotas="todos";
	}
	
	document.write("<br>"+"El perro mas pesado pesa: "+perroMasPesado);
	document.write("<br>"+"El porcentaje de enfermos es: "+porcentajeMascotasEnfermas);
	document.write("<br>"+"La ultima mascota definida como otra cosa se llama: "+nombreUltimaMascota);
	document.write("<br>"+"El animal sin pelo con menos temperatura corporal es: "+animalSinPeloTempMinima);
	document.write("<br>"+"El porcentaje de perros y gatos sobre el total de mascotas es: "+porcentajePerrosyGatos);
	document.write("<br>"+"El tipo de mascota con mayor promedio de temperatura corporal es: "+promedioTemperatura);
	document.write("<br>"+"El estado clinico con menos mascotas es: "+estClinicoMenosMascotas);
	document.write("<br>"+"El promedio total de kilos es: "+acumuladorPeso);
	document.write("<br>"+"El nombre del gato mas liviano es "+nombreGatoLiviano+", y su raza "+razaGatoLiviano);
}
