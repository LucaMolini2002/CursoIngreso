function mostrar()
{
  var tipoProducto;
  var cantidadBolsas;
  var precioBolsas;
  var descuento;
  var importeBruto;
  var cantidadTotal=0;
  var precioTotal=0;
  var importeConDescuento;
  var precioMax;
  var tipoMasCaro;
  var flagTipo=0;
  var acumuladorArena=0;
  var acumuladorCal=0;
  var acumuladorCemento=0;
  var contadorArena=0;
  var contadorCal=0;
  var contadorCemento=0;
  var tipoMasCantidad;
  
  do{
    tipoProducto=prompt('Ingrese tipo de producto: ("arena";"cal";"cemento")');
    while(tipoProducto!="arena"&&tipoProducto!="cal"&&tipoProducto!="cemento"){
      tipoProducto=prompt('Error. Ingrese nuevamente tipo de producto: ("arena";"cal";"cemento")');
    }
    cantidadBolsas=parseInt(prompt("Ingrese cantidad de bolsas"));
    while(cantidadBolsas<0){
      cantidadBolsas=parseInt(prompt("Error, Ingrese nuevamente cantidad de bolsas"));
    }
    precioBolsas=parseInt(prompt("Ingrese precio de las bolsas"));
    while(cantidadBolsas<0){
      precioBolsas=parseInt(prompt("Error, Ingrese nuevamente precio de las bolsas"));
    }
    cantidadTotal+=cantidadBolsas;
    precioTotal+=precioBolsas;

    switch(tipoProducto){
      case "arena":
        acumuladorArena+=cantidadBolsas;
        contadorArena++;
        break;
      case "cal":
        acumuladorCal+=cantidadBolsas;
        contadorCal++;
        break;
      case "cemento":
        acumuladorCemento+=cantidadBolsas;
        contadorCemento++;
        break;    

    }

    if(cantidadBolsas>10&&cantidadBolsas<30){
      descuento=15;
    }else if(cantidadBolsas>30){
      descuento=25;
    }else{
      descuento=100;
    }

    if(flagTipo=0||precioBolsas>precioMax){
        precioMax=precioBolsas;
        tipoMasCaro=tipoProducto;
        flagTipo=1;
    }

    respuesta=confirm("Quiere seguir ingresando productos?");
  }
  while(respuesta==true);

  if(acumuladorArena>acumuladorCal&&acumuladorArena>acumuladorCemento){
    tipoMasCantidad="arena";
  }else if(acumuladorCal>acumuladorArena&&acumuladorCal>acumuladorCemento){
    tipoMasCantidad="cal";
  }else if(acumuladorCemento>acumuladorArena&&acumuladorCemento>acumuladorCal){
    tipoMasCantidad="cemento";
  }

  importeBruto=cantidadTotal*precioTotal;
  importeConDescuento=cantidadTotal*(precioTotal-precio*descuento/100);

  document.write("<br>"+"El importe a pagar bruto sin descuento es: "+importeBruto);
  document.write("<br>"+"El importe a pagar con descuento es: "+importeConDescuento);
  document.write("<br>"+"El tipo de producto con mas cantidad es: "+tipoMasCantidad);
  document.write("<br>"+"El tipo de producto mas caro es: "+tipoMasCaro);
}
