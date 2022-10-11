function llamar(){
  var i;
  var x = document.form;
  i = x.text.value;
  return i.toString();
}

function contar() {
  if (document.getElementById('text').value == "" || document.getElementById('text').value == " "){
    document.getElementById('subtitulo-dos').innerHTML = "No hay letras";
  }
  else{
    let cont = {};
    llamar().replace(/\S/g, function(p){
        cont[p] = (isNaN(cont[p]) ? 1 : cont[p]+1);
    });
    document.getElementById('resultado-llave').innerHTML = Object.keys(cont) + ",";
    document.getElementById('resultado-valor').innerHTML = Object.values(cont);
    iner();
    return cont;
  }
}

function iner() {
  var l;
  var v;
  l = document.getElementById('resultado-llave').innerHTML;
  v = document.getElementById('resultado-valor').innerHTML;
  document.getElementById('resultado-llave').innerHTML = l.replace(/,/g,": ")
  document.getElementById('resultado-valor').innerHTML = v.replace(/,/g," ")
  document.getElementById('subtitulo-dos').innerHTML = "Letras";
}

function eliminar() {
  document.getElementById('text').value = "";
  document.getElementById('subtitulo-dos').innerHTML = "";
  document.getElementById('resultado-llave').innerHTML = "";
  document.getElementById('resultado-valor').innerHTML = "";
}

