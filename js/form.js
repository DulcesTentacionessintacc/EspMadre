
function cambia_cremas(listindex)
{

document.tortas.cremas.options.length = 0;

 //RELLENOS CON BIZCOCHUELO DE VAINILLA + DULCE DE LECHE REPOSTERO + 10 PORCIONES

 function precio(){
   
  let listacremas = document.querySelector("#listacremas").value;
   
  
if(listacremas == "TORTA FRUTAL"){
  document.getElementById("salida").innerHTML = "$20850";
}
else if (listacremas == "BOX DESAYUNO"){
  document.getElementById("salida").innerHTML = "$27350";
}
else if (listacremas == "BENTO CAKE + CUPCAKES"){
  document.getElementById("salida").innerHTML = "$34000";
}
else if (listacremas == "ESTANDAR" && cremas == "28 PORCIONES"){
  document.getElementById("salida").innerHTML = "$41300";
}
else if (listacremas == "ROGEL" && cremas == "13 CM"){
  document.getElementById("salida").innerHTML = "$22500";
}
else if (listacremas == "ROGEL" && cremas == "22 CM"){
  document.getElementById("salida").innerHTML = "$36900";
}
else if (listacremas == "ROGEL" && cremas == "30 CM"){
  document.getElementById("salida").innerHTML = "$49600";
}
else if (listacremas == "CHAJA" && cremas == "12 PORCIONES"){
  document.getElementById("salida").innerHTML = "$24000";
}
else if (listacremas == "CHAJA" && cremas == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$29800";
}
else if (listacremas == "CHAJA" && cremas == "25 PORCIONES"){
  document.getElementById("salida").innerHTML = "$35850";
}
else if (listacremas == "SELVA NEGRA" && cremas == "8 PORCIONES"){
  document.getElementById("salida").innerHTML = "$28600";
}
else if (listacremas == "SELVA NEGRA" && cremas == "15 PORCIONES"){
  document.getElementById("salida").innerHTML = "$37800";
}
else if (listacremas == "SELVA NEGRA" && cremas == "22 PORCIONES"){
  document.getElementById("salida").innerHTML = "$44750";
}
else if (listacremas == "MOCCA" && cremas == "12 PORCIONES"){
  document.getElementById("salida").innerHTML = "$36250";
}
else if (listacremas == "MOCCA" && cremas == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$49050";
}
else if (listacremas == "MOCCA" && cremas == "25 PORCIONES"){
  document.getElementById("salida").innerHTML = "$63100";
}
else if (listacremas == "FRUTILLA" && cremas == "12 PORCIONES"){
  document.getElementById("salida").innerHTML = "$23600";
}
else if (listacremas == "FRUTILLA" && cremas == "20 PORCIONES"){
  document.getElementById("salida").innerHTML = "$29550";
}
else if (listacremas == "FRUTILLA" && cremas == "25 PORCIONES"){
  document.getElementById("salida").innerHTML = "$36150";
}
else if (listacremas == "FRUTILLA"){
  document.getElementById("des1").innerHTML = "BIZCOCHUELO DE VAINILLA<br><br>2 RELLENOS:<br><br>1- DULCE DE LECHE REPOSTERO<br><br>2- CREMA DE LECHE CON FRUTILLAS<br><br>DECORACION: MERENGUE ITALIANO CON FRUTILLAS";
  imagenTorta.innerHTML = '<img src="frutilla.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "MOCCA"){
  document.getElementById("des1").innerHTML = "BIZCOCHUELO DE CHOCOLATE<br><br>2 RELLENOS:<br><br>1- DULCE DE LECHE REPOSTERO<br><br>2- CREMA MOCCA<br><br>DECORACION: CREMA MOCCA CON DRIP DE CHOCOLATE";
  imagenTorta.innerHTML = '<img src="mocca.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "SELVA NEGRA"){
  document.getElementById("des1").innerHTML = "BIZCOCHUELO DE CHOCOLATE<br><br>RELLENO: CREMA DE LECHE CON FRUTOS ROJOS<br><br>DECORACION: CREMA DE LECHE CON CHOCOLATE Y FRUTOS ROJOS";
  imagenTorta.innerHTML = '<img src="selvanegra.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "CHAJA"){
  document.getElementById("des1").innerHTML = "BIZCOCHUELO DE VAINILLA<br><br>2 RELLENOS:<br><br>1- DULCE DE LECHE REPOSTERO CON MERENGUITOS<br><br>2- CREMA DE LECHE CON DURAZNO<br><br>DECORACION: MERENGUE CON MERENGUITOS";
 imagenTorta.innerHTML = '<img src="chaja.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "BOX DESAYUNO"){
  document.getElementById("des1").innerHTML = "1 MEDIALUNA DE MANTECA<br><br>DULCE DE LECHE REPOSTERO<br><br>MERENGUE ITALIANO";
  imagenTorta.innerHTML = '<img src="rogelf.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "TORTA FRUTAL"){
  document.getElementById("des1").innerHTML = "BIZCOCHUELO DE VAINILLA<br><br>RELLENO:DULCE DE LECHE REPOSTERO <br><br>CREMA DE LECHE<br><br>FRUTAS (FRUTILLA - KIWI - DURAZNO)";
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
  let cremas = document.querySelector("#cremas").value;
  let fechas = document.querySelector("#fechas").value;
  let horario = document.querySelector("#horario").value;
  let salida = document.querySelector("#salida").innerHTML;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		--DOLCE TENTAZIONE SIN TACC--%0A
		*PEDIDO*%0A%0A
		*¿Cuál es tu nombre?*%0A
		${cliente}%0A%0A
		*Indica el tipo de torta*%0A
		${listacremas}%0A%0A
		*Indica el tamaño de la torta*%0A
		${cremas}%0A%0A
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
