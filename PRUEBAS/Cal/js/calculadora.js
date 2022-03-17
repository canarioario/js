 /*Función para escribir los números en las cajas de texto*/

 function escribir(n) {

     var caja2 = document.f1.txtcaja2.value;

     if (caja2 == "0" && n != ".") {

         cajao = caja2.replace("0", "")

         document.f1.txtcaja2.value = cajao + n;

     } else {

         document.f1.txtcaja2.value = caja2 + n;

     }

 }

 function arit(o) {

     var caja1 = document.f1.txtcaja1.value;

     var caja2 = document.f1.txtcaja2.value;

     if (caja1 == "" && caja2 != "") {

         document.f1.txtcaja1.value = caja2 + o;

         document.f1.txtcaja2.value = "";

     } else if (caja2 != "") {

         document.f1.txtcaja1.value = caja1 + caja2 + o;

         document.f1.txtcaja2.value = "";

     }

 }

 function calcular() {

     var caja1 = document.f1.txtcaja1.value;

     var caja2 = document.f1.txtcaja2.value;

     document.f1.txtcaja2.value = eval(caja1 + caja2);

     document.f1.txtcaja1.value = "";

 }

 /*Función para cambiar el signo de los números*/

 function masmenos() {

     var caja2 = document.f1.txtcaja2.value;

     if (caja2 > caja1) {

         document.f1.txtcaja2.value = "(-" + caja2 + ")";

     } else {

         cajaplus = caja2.replace(/[-|(|)]/g, "");

         document.f1.txtcaja2.value = cajaplus;

     }

 }