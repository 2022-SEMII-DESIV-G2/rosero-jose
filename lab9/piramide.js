//-------------------- Mark 6 / la mas acertada -------------------
function llamarValores(){
    if (document.getElementById('textVal').value == "" || document.getElementById('textVal').value == " "){
        document.getElementById('error').innerHTML = "Ingrese los Valores de la Piramide";
    }
    else{
    var i;
    var x = document.form;
    i = x.textVal.value;
    return i.toString();  
    }
}

function llamarTamano(){
    if (document.getElementById('textTam').value == "" || document.getElementById('textTam').value == " "){
        document.getElementById('error').innerHTML = "Ingrese El Tamaño de la Piramide";
    }
    else{
    var i;
    var x = document.form;
    i = x.textTam.value;
    return i.toString();  
    }
}

function controlCalidad(piramide,arr,tam){
    var valido = true;
    var dif = Object.keys(arr);
    console.log(dif.length,tam);
    if(piramide[tam-1].length == 0){
        document.getElementById('error').innerHTML = "El tamaño de la piramide no coincide con el establecido / Cambie el tamaño o agregue mas valores";
        valido = false;
    }
    else if(dif.length > tam){
        document.getElementById('error').innerHTML = "Sobran " + (dif.length - tam) + " Valor(es) / Cambie el tamaño o elimine valores";
        valido = false;
    }
    else if(dif.length < tam ){
        document.getElementById('error').innerHTML = "Faltan " + (tam - dif.length) + " Valor(es) / Cambie el tamaño o agregue valores";
        valido = false;
    }
    else{
        valido = true;
    }
    console.log(valido)
    return valido;
}

function generarPiramide(){
    var tam = Number(llamarTamano());
    var arr = llamarValores().split(' ').map(x => Number(x));
    var piramide = []
    for(var i = 0; i < tam; i++){
        for(var j = 0; j < i; j++){
            arr.shift();
        }
        piramide.push(arr.slice(0, i + 1 ));
    }
    //console.log(piramide);
    if(controlCalidad(piramide,arr,tam)){
        return piramide;
    }
}
    
function sumMaxPeso() {
    var piramide = generarPiramide()
    var iteraciones = [];
    var piramideString = JSON.stringify(piramide)
    var piramideClon = JSON.parse(piramideString);
    do{
        var ultimaFila = piramideClon.pop()
        iteraciones.unshift (ultimaFila);
        var supFila = piramideClon.pop();
        for (var i = 0; i < supFila.length; i++){
            supFila[i] = Math.max(supFila[i] + ultimaFila[i], supFila[i] + ultimaFila[i + 1]);
        }
        piramideClon.push(supFila);
        
    } while (piramideClon.length > 1);
    document.getElementById('suma').innerHTML = "Suma:" + Object.values(supFila);
    iteraciones.unshift(supFila);
    return iteraciones;
}
      
function recorrido(){
    var piramide = generarPiramide();
    var indices = [];
    var iteraciones = sumMaxPeso();
    var dir = 0
    indices = [0]
    var recorrido = []
    for(let i = 1; i < iteraciones.length; i++){
        dir = iteraciones[i].indexOf(Math.max(iteraciones[i][dir], iteraciones[i][dir + 1]), dir);
        indices.push(dir);
    }
    //console.log(indices);
    for(var j = 0; j < piramide.length; j++){
        recorrido.push(piramide[j][indices[j]]);
    }
    //console.log(recorrido);
    document.getElementById('subtituloDos').innerHTML = "Resultado";
    document.getElementById('recorrido').innerHTML = "Recorrido: " + Object.values(recorrido);
    document.getElementById('error').innerHTML = "";
}

function eliminar() {
    document.getElementById('textTam').value = "";
    document.getElementById('textVal').value = "";
    document.getElementById('subtituloDos').innerHTML = "";
    document.getElementById('recorrido').innerHTML = "";
    document.getElementById('suma').innerHTML = "";
    document.getElementById('error').innerHTML = "";
}