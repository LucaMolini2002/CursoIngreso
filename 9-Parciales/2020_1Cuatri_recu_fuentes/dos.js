function mostrar()
{
  var tipoProducto;
  var precioPorBolsa;
  var cantidadBolsas;
  var importeBruto;
  var importeConDescuento;
  var cantArena=0;
  var cantCal=0;
  var cantCemento=0;
  var precioArena=0;
  var precioCemento=0;
  var precioCal=0;
  var tipoMasCant;
  var tipoMasCaro;
  cantidadBolsas=parseInt(prompt("Ingrese una cantidad: "));
  
  for(var i=0;i<cantidadBolsas;i++){
    tipoProducto=prompt("Ingrese su producto:arena,cal,cemento");
    while(tipoProducto!="arena"&&tipoProducto!="cal"&&tipoProducto!="cemento"){
      tipoProducto=prompt('Error, Ingrese su producto: ("arena";"cal";"cemento")');
    }  
    precioPorBolsa=parseInt(prompt("Ingrese precio de bolsas: "));
    while(precioPorBolsa<0){
      precioPorBolsa=parseInt(prompt("Error, Ingrese precio de bolsas: "));
    }

    if(cantidadBolsas>10&&cantidadBolsas<30){
      descuento=15;
    }
    else if(cantidadBolsas>30){
      descuento=25;
    }
    else if(cantidadBolsas>0){
      importeBruto=precioPorBolsa*cantidadBolsas;
      descuento=100
    }
    switch(tipoProducto){
      case "arena":
        cantArena++;
        precioArena=+precioPorBolsa;
        break;
      case "cal":
        cantCal++;
        precioCal=+precioPorBolsa;
        break;
      case "cemento":
        cantCemento++;
        precioCemento=+precioPorBolsa;
        break;   
    }
  }
  if(cantArena>cantCemento&&cantArena>cantCal){
    tipoMasCant="arena";
  }
  else if(cantCemento>cantArena&&cantCemento>cantCal){
    tipoMasCant="cemento";
  }
  else if(cantCal>cantArena&&cantCal>cantCemento){
    tipoMasCant="cal";
  }
  else{
    tipoMasCant="todos";
  }

  if(precioArena>precioCemento&&precioArena>precioCal){
    tipoMasCaro="arena";
  }
  else if(precioCemento>precioArena&&precioCemento>precioCal){
    tipoMasCaro="cemento";
  }
  else if(precioCal>precioArena&&precioCal>precioCemento){
    tipoMasCaro="cal";
  }
  else{
    tipoMasCaro="todos";
  }

  importeConDescuento=cantidadBolsas*(precioPorBolsa-precioPorBolsa*descuento/100);
  document.write("<br>"+"El importe a pagar sin descuento es: "+importeBruto);
  document.write("<br>"+"El importe a pagar con descuento es: "+importeConDescuento);
  document.write("<br>"+"El tipo de producto con mas cantidad es: "+tipoMasCant);
  document.write("<br>"+"El tipo de producto mas caro es: "+tipoMasCaro);
}
