function mostrar()
{
    var precioFinal;
    var porcentajeString;
    var porcentajeNumerico;
    var precioNumerico;
    var precioString;
    precioString=prompt("Ingrese precio: ");
    porcentajeString=prompt("Ingrese el porcentaje: ");
    porcentajeNumerico=parseInt(porcentajeString);
    precioNumerico=parseInt(precioString);
    descuento=precioNumerico*porcentajeNumerico/100;
    precioFinal=precioNumerico-descuento;
    elPrecioFinal.value=precioFinal;
}
