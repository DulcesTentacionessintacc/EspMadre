
function cambia_cremas(listindex)
{

document.tortas.cremas.options.length = 0;

 //RELLENOS CON BIZCOCHUELO DE VAINILLA + DULCE DE LECHE REPOSTERO + 10 PORCIONES

 function precio(){
   
  let listacremas = document.querySelector("#listacremas").value;
   
  
if(listacremas == "TORTA FRUTAL"){
  document.getElementById("salida").innerHTML = "$25000";
}
else if (listacremas == "BOX DESAYUNO"){
  document.getElementById("salida").innerHTML = "$30000";
}
else if (listacremas == "BENTO CAKE + CUPCAKES"){
  document.getElementById("salida").innerHTML = "$23500";
}
else if (listacremas == "BENTO CAKE + CUPCAKES"){
  document.getElementById("des1").innerHTML = "1 BENTO CAKE DE VAINILLA RELLENO CON DULCE DE LECHE REPOSTERO Y CREMA DE LECHE<br><br>2 CUPCAKES DE VAINILLA - AMBOS DECORADOS CON BUTTERCREAM (COLOR A ELECCIÓN)<br><br>TARJETA ALUSIVA<br><br>RAMITO DE FLOR";
 imagenTorta.innerHTML = '<img src="chaja.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "BOX DESAYUNO"){
  document.getElementById("des1").innerHTML = "1 MEDIALUNA DE MANTECA<br><br>1 VIGILANTE<br><br>1 MAICENA<br><br>1 PORCIÓN DE PASTAFROLA<br><br>1 ALFAJOR DE CHOCOLATE NEGRO<br><br>1 ALFAJOR DE CHOCOLATE BLANCO<br><br>2 SÁNGUCHE LA DE MIGA<br><br>2 PANES SABORIZADOS DE JAMÓN Y QUESO<br><br>SEMOLADAS<br><br>1 CAFÉ<br><br>1 CAPUCHINO<br><br>1 TAZA<br><br>1 RAMO DE FLORES<br><br>1 TARJETA ALUSIVA";
  imagenTorta.innerHTML = '<img src="rogelf.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "TORTA FRUTAL"){
  document.getElementById("des1").innerHTML = "15 PORCIONES<br><br>BIZCOCHUELO DE VAINILLA<br><br>RELLENO:DULCE DE LECHE REPOSTERO <br><br>CREMA DE LECHE<br><br>FRUTAS (FRUTILLA - KIWI - DURAZNO)";
  imagenTorta.innerHTML = '<img src="estandar.jpg" alt="Torta Rogel" class="imgTorta" />';
}

else{}
}

document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();
    
  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "5493816069735";

  let cliente = document.querySelector("#cliente").value;
  let listacremas = document.querySelector("#listacremas").value;
  let fechas = document.querySelector("#fechas").value;
  let horario = document.querySelector("#horario").value;
  let salida = document.querySelector("#salida").innerHTML;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		--DOLCE TENTAZIONE SIN TACC--%0A
                --ESPECIAL DIA DE LA MADRE--%0A
		*PEDIDO*%0A%0A
		*¿Cuál es tu nombre?*%0A
		${cliente}%0A%0A
		*Indica el pedido*%0A
		${listacremas}%0A%0A
    *FECHA DE ENTREGA*%0A
		${fechas}%0A%0A
    *HORARIO*%0A
		${horario}%0A%0A
    *Precio*%0A
		${salida}%0A%0A`;

  if (cliente === "" || listacremas === "" || cremas === "" || fechas === "" || horario === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
