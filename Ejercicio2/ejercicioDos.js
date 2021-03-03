/**
 * Aqui dentro probar el codigo que quieran
 */
function probarEjercicio(){
	
	var continente;
	var pais;
	var habitantes;
	var nivelPobreza;
	var temperatura;
	var temperaturaPar=0;
	var temperaturaImpar=0;
	var habitantesMin;
	var paisMenosHab;
	var flagHabitantes=0;
	var PaisesMas40Grados=0;
	var paisesMenos0Grados=0;
	var acumuladorHabitantes=0;
	var contadorPaises=0;
	var promedioHabitantes=0;
	var promedioHabitantesMas40g=0;
	var flagTempMin=0;
	var paisTempMin;
	var temperaturaMin;
	var flagHabMax=0;
	var continenteMasHabitantes;
	var habitantesMax;

	for(var i=0;i<3;i++){
		continente=prompt("Ingrese un continente: (america , asia , europa ,africa y oceania)");
		while(continente!="america"&&continente!="asia"&&continente!="europa"&&continente!="africa"&&continente!="oceania"){
			continente=prompt("Error. Ingrese nuevamente un continente: (america , asia , europa ,africa y oceania)");	
		}
		pais=prompt("Ingrese un pais: ");
		habitantes=parseInt(prompt("Ingrese una cantidad de habitantes en millones entre 1 y 7000: "));
		while(habitantes<0||habitantes>7000){
			habitantes=parseInt(prompt("Error. Ingrese nuevamente una cantidad de habitantes en millones entre 1 y 7000: "));
		}
		nivelPobreza=prompt("Indicar nivel de pobreza: (pobre, rico , muy rico)");
		while((continente=="europa")==(nivelPobreza=="pobre")||nivelPobreza!="pobre"&&nivelPobreza!="rico"&&nivelPobreza!="muy rico"){
			nivelPobreza=prompt("Error. Indicar nuevamente nivel de pobreza: (pobre, rico , muy rico)");
		}
		temperatura=parseInt(prompt("Ingresar temperatura minima del territorio: (entre -50 y 50)"));
		while(temperatura<(-50)||temperatura>50){
			temperatura=parseInt(prompt("Error. Ingresar nuevamente temperatura minima del territorio: (entre -50 y 50)"));
		}
		
		if(temperatura%2==0){
			temperaturaPar++;
		}
		else{
			temperaturaImpar++;
		}
		if(flagHabitantes==0||habitantes<habitantesMin){
			habitantesMin=habitantes;
			PaisMenosHab=pais;
			flagHabitantes=1;
		}

		if(temperatura>40&&continente=="america"){
			PaisesMas40Grados++;
		}else if(temperatura<0&&continente=="america"){
			paisesMenos0Grados++;
		}
		if(pais){
		contadorPaises++;
		}
		acumuladorHabitantes+=habitantes;

		if(flagTempMin==0||temperatura<temperaturaMin){
			temperaturaMin<temperatura;
			paisTempMin=pais;
		}
		if(flagHabMax=0||habitantes>habitantesMax){
			habitantesMax=habitantes;
			continenteMasHabitantes=continente;
		}
	}
	promedioHabitantes=acumuladorHabitantes/contadorPaises;
	promedioHabitantesMas40g=acumuladorHabitantes/PaisesMas40Grados;


	document.write("<br>"+"La cantidad de numeros pares es: "+temperaturaPar);
	document.write("<br>"+"La cantidad de numeros impares es: "+temperaturaImpar);
	document.write("<br>"+"El pais con menos habitantes es: "+paisMenosHab);
	document.write("<br>"+"La cantidad de paises que superan los 40 grados es: "+PaisesMas40Grados);
	document.write("<br>"+"La cantidad de paises de america que tienen menos de 0 grados es: "+paisesMenos0Grados);
	document.write("<br>"+"El promedio de habitantes entre los paises ingresados es: "+promedioHabitantes);
	document.write("<br>"+"El promedio de habitantes entre los paises que superan los 40 grados es: "+promedioHabitantesMas40g);
	document.write("<br>"+"La temperatura minima ingresada es: "+temperaturaMin+", y el nombre del pais con esta temperatura es: "+paisTempMin);
	document.write("<br>"+"El continente con mas habitantes es: "+continenteMasHabitantes);
}