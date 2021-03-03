function mostrar()
{
  var nombre;
  var tipoCursada;
  var cantidadMaterias;
  var sexo;
  var notaPromedio;
  var edad;
  var respuesta;
  var nombreMejorPromedioNoMasc;
  var nombreAlumnoMasJoven;
  var notaPromedioMax;
  var flagNota=0;
  var edadMinima;
  var flagEdad=0;
  var promedioMasculino;
  var promedioFemenino;
  var promedioNoBinario;
  var acumuladorNotaFem=0;
  var acumuladorNotaMasc=0;
  var acumuladorNotaNoBi=0;
  var flagMaterias=0;
  var CursaMasMaterias;
  var nombreAlumnoCursaMasMaterias;
  var edadAlumnoCursaMasMaterias;

  do{
    nombre=prompt("Ingrese un nombre: ");
    tipoCursada=prompt('Ingrese tipo de cursada: ("libre";"presencial";"remota")');
    while(tipoCursada!="libre"&&tipoCursada!="presencial"&&tipoCursada!="remota"){
      tipoCursada=prompt('Error. Ingrese tipo de cursada: ("libre";"presencial";"remota")');
    }
    cantidadMaterias=parseInt(prompt("Ingrese cantidad de materias a cursar: (Maximo 8)"));
    while(cantidadMaterias<0&&cantidadMaterias>8){
      cantidadMaterias=parseInt(prompt("Error. Ingrese cantidad de materias a cursar: (Maximo 8)"));
    }
    sexo=prompt("Ingrese sexo: (femenino, masculino, no binario)");
    while(sexo!="femenino"&&sexo!="masculino"&&sexo!="no binario"){
      sexo=prompt("Error. Ingrese sexo: (femenino, masculino, no binario)");
    }
    notaPromedio=parseInt(prompt("Ingrese nota promedio: (entre 0 y 10)"));
    while(notaPromedio<0&&notaPromedio>10){
      notaPromedio=parseInt(prompt("Error. Ingrese nota promedio: (entre 0 y 10)"));
    }
    edad=parseInt(prompt("Ingrese edad: "));
    while(edad<0){
      edad=parseInt(prompt("Edad no valida, ingrese una edad nuevamente: "));
    }
    

    if(sexo!="masculino"){
      if(flagNota=0||notaPromedio>notaPromedioMax){
        notaPromedioMax=notaPromedio;
        nombreMejorPromedioNoMasc=nombre;
        flagNota==1;
      }
    }
    if(tipoCursada=="libre"){
      if(flagEdad=0||edad>edadMinima){
        edadMinima=edad;
        nombreAlumnoMasJoven=nombre;
        flagEdad==1;
      }
    }
    switch(sexo){
      case "masculino":
        acumuladorNotaMasc+=notaPromedio;
        promedioMasculino=acumuladorNota;
        break;
      case "femenino":
        acumuladorNotaFem+=notaPromedio;
        promedioFemenino=acumuladorNota;
        break;
      case "no binario":
        acumuladorNotaNoBi+=notaPromedio;
        promedioNoBinario=acumuladorNota;
        break;
    }

    if(cursada!="remota"){
      if(flagMaterias=0||cantidadMaterias>CursaMasMaterias){
        CursaMasMaterias=cantidadMaterias;
        nombreAlumnoCursaMasMaterias=nombre;
        edadAlumnoCursaMasMaterias=edad;
      }
    }


    respuesta=confirm("Quiere ingresar mas nombres?");
  }
  while(respuesta==true);
document.write("<br>"+"El nombre del mejor promedio que no es masculino es: "+nombreMejorPromedioNoMasc);
document.write("<br>"+"El nombre del mas joven que da la materia libre es: "+nombreAlumnoMasJoven);
document.write("<br>"+"el promedio de nota masculino es: "+promedioMasculino);
document.write("<br>"+"el promedio de nota femenino es: "+promedioFemenino);
document.write("<br>"+"el promedio por nota no binario es: "+promedioNoBinario);
document.write("<br>"+"El nombre del alumno que cursa mas materias es: "+nombreAlumnoCursaMasMaterias+", y su edad es: "+edadAlumnoCursaMasMaterias);
}
