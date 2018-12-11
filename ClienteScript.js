alert("Hola");
function cambia()
{

  var capa = document.getElementById("principal")
  borrarHijos(capa)
  var nodoTxt = document.createTextNode("HAS PULSADO PULSAR")
  var nodoElement = document.createElement("h2")
  nodoElement.appendChild(nodoTxt)
    capa.appendChild(nodoElement)
    var list = document.getElementById("myList")
    console.log("skere")
}

function borrarHijos(elemento)
{
  var hijos = elemento.childNodes;
   for (var i = 0; i < hijos.length; i++) {
    elemento.removeChild(hijos[i])
   }
 }
function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      pintaTabla(this.responseText);
  //    console.log("PAsa de esto");

    }
  };
  xhttp.open("GET", "http://localhost:4343/BaloncestoJSONCliente/leeJugadores.php", true);
  xhttp.send();
}
function pintaTabla(respuesta)
{
    var obj = JSON.parse(respuesta)
  var capa = document.getElementById("principal")
    console.log("dentro");
    if(obj["estado"] == "ok")
    {
      console.log("dentro if");
      var arrJugadores = obj["jugadores"]
      for (var i = 0; i < arrJugadores.length; i++) {
        var fila = document.createElement("h2")
        var texto = document.createTextNode(arrJugadores[i].nombre)
      //  fila.setAttribute("onclick","prueba('"+ arrJugadores[i].nombre +"')")
      fila.setAttribute("onclick","prueba(this)")
        fila.appendChild(texto)
        capa.appendChild(fila)
        console.log("PAsa de esto");

      }
    }
    else {
      console.log("Mal");
    }
}
function prueba(nombre)
{
alert(nombre.innerHTML)
}
