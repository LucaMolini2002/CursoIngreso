function mostrar()
{
  var tipoProducto;
  var precioPorBolsa;
  var cantidadBolsas;
  var importeBruto;
  cantidadBolsas=parseInt(prompt("Ingrese una cantidad: "));
  for(var i=1;i<cantidadBolsas;i++){
    tipoProducto=prompt('Ingrese su producto: ("arena";"cal";"cemento")');
    while(tipoProducto!="arena"||tipoProducto!="cal"||tipoProducto!="cemento"){
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
    if(cantidadBolsas>0){
      importeBruto=precioPorBolsa*cantidadBolsas;
    }
  }
  document.write("<br>"+"El importe a pagar sin descuento es: "+importeBruto);
}
