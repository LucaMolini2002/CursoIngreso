function probarEjercicio()
{
	var nombre=prompt("Ingrese su nombre: ");
	var carrera=prompt("Ingrese su carrera: ");
	var estadoCarrera=prompt("Ingrese estado de su carrera: (en curso-abandono-finalizado)");
	var sexo=prompt("Ingrese su sexo: ");
	var edad=parseInt(prompt("Ingrese su edad: "));
	var nota=parseInt(prompt("Ingrese su nota: "));
	var respuesta;
	do{
		cantidadAlumnos=nombre;
		cantidadAlumnos=0
		cantidadAlumnos++;


	}
	while(respuesta==true);

	document.write("<br>"+"La cantidad de alumnos es: "+cantidadAlumnos);
}