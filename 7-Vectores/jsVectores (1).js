function mostrar()
{

	/*var miArray;
	
	miArray=[1,2,3,4,5,6,7,8,9,10];

	for(var i=0; i<10; i++)
	{

		document.write(miArray[i]+"<br>");
	}*/
	var promedio;
	
	do{
		var nombre=prompt("Ingrese su nombre: ");
		var carrera=prompt("Ingrese su carrera: (Programación, Psicología, Diseño gráfico)");
		var estadoCarrera=prompt("Ingrese estado de su carrera: (en curso-abandono-finalizado)");
		var sexo=prompt("Ingrese su sexo: (femenino-masculino-nobinario)");
		var edad=parseInt(prompt("Ingrese su edad: (18 o más)"));
		var nota=parseInt(prompt("Ingrese su nota: (entre 1 y 10)"));
		var respuesta;

		switch(cantidadAlumnos){
			case nombre:
				nombre=0;
				nombre++;
				break;
			case sexo=="femenino":
				sexo=0;
				sexo++;
				break;
				case "no binario":
					sexo=0;
					sexo++;
					break;
				
		}
		for(var i=1;i<10;i++){
			if(notas){

			}
		}
			

		respuesta=confirm("Quiere introducir otro alumno: ");
	}
	while(respuesta==true);

	document.write("<br>"+"La cantidad de alumnos es: "+cantidadAlumnos);



}//FIN DE LA FUNCIÓN